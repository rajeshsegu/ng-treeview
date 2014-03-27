(function (angular) {
    'use strict';
    angular.module('ngWidgets.treeview', [])
        .directive('ngTreeview', [function () {

            return {
                restrict: 'A',
                scope: {
                    
                    /* Tree Model definitions */
                    treeModel: '=',
                    nodeIdKey: '=?',
                    nodeLabelKey: '=?',
                    nodeTitleKey: '=?',
                    nodeChildrenKey: '=?',
                    
                    /* Handle Tree Events */
                    onSelect: '&?',
                    onLoad: '&?',
                    onExpand: '&?',
                    
                    /* Configure Tree View */
                    treeStyle: '=?',
                    disableHead: '=?'
                    
                },

                templateUrl: 'template/treeview.html',
                link: function (scope, element, attrs) {

                    //default classes                
                    var treeStyle = { //CSS Classes
                        EXPANDED: 'icon-folder-open',
                        COLLAPSED: 'icon-folder',
                        SELECTED: 'selected',
                        LEAF: 'icon-folder-empty',
                        LOADING: 'loading-small',
                        ROOT: 'icon-folder'
                    };

                    //Override Defult styles
                    _.extend(treeStyle, scope.treeStyle || {});

                    scope.nodeIdKey = scope.nodeIdKey || 'id';
                    scope.nodeLabelKey = scope.nodeLabelKey || 'name';
                    scope.nodeChildrenKey = scope.nodeChildrenKey || 'children';
                    scope.disableHead = !! scope.disableHead;

                    //#Supported Custome Callbacks
                    //scope.onSelect -> called while on node is selected
                    //scope.onLoad -> called if the node's children needs to be loaded
                    //scope.onExpand -> called while the node is expanded


                    //HELPER methods

                    function isCollapsed(node) {
                        return (node.collapsed || _.isUndefined(node.collapsed));
                    }

                    function hasChildren(node) {
                        return (_.size(node[scope.nodeChildrenKey]) > 0)
                    }



                    //TREE HANDLERS

                    //if node head clicks,
                    scope.selectNode = function (selectedNode) {

                        if (scope.disableHead && selectedNode.rootNode) {
                            return;
                        }

                        function setExpand(node) {

                            if (scope.onExpand) {
                                var expandPromise = scope.onExpand({
                                    node: node,
                                    collapsed: node.collapsed //PASS THE EXISTING STATE
                                });
                                if (expandPromise) {
                                    expandPromise.then(function () {
                                        //Collapse or Expand
                                        node.collapsed = !isCollapsed(node);
                                    });
                                } else {
                                    //Collapse or Expand
                                    node.collapsed = !isCollapsed(node);
                                }
                            } else {
                                //Collapse or Expand
                                node.collapsed = !isCollapsed(node);
                            }

                        }

                        function setLoaded(node) {
                            node.loading = false;
                            node.loaded = true;
                            setExpand(node);
                        }

                        if (scope.onLoad && !selectedNode.loaded) {
                            selectedNode.loading = true;
                            var loadPromise = scope.onLoad({
                                node: selectedNode
                            });
                            if (loadPromise) {
                                loadPromise.then(function () {
                                    //selectedNode.loaded = true;
                                    setLoaded(selectedNode);
                                });
                            } else {
                                //selectedNode.loaded = true;
                                setLoaded(selectedNode);
                            }
                        } else {
                            //selectedNode.loaded = true;
                            setLoaded(selectedNode);
                        }


                    };

                    //if node label clicks,
                    scope.selectNodeLabel = function (selectedNode) {

                        if (scope.disableHead && selectedNode.rootNode) {
                            return;
                        }

                        //remove highlight from previous node
                        if (scope.currentNode && scope.currentNode.selected) {
                            scope.currentNode.selected = undefined;
                        }

                        //set highlight to selected node
                        selectedNode.selected = treeStyle.SELECTED;

                        //set currentNode
                        scope.currentNode = selectedNode;

                        if (scope.onSelect) {
                            scope.onSelect({
                                node: selectedNode
                            });
                        }

                    };


                    //if node state changes, get css class
                    scope.nodeClass = function (node) {

                        //Helper Methods

                        function expandState(node) {
                            return isCollapsed(node) ? treeStyle.COLLAPSED : treeStyle.EXPANDED;
                        }

                        function leafState(node) {
                            return hasChildren(node) ? expandState(node) : treeStyle.LEAF;
                        }

                        //Logic

                        if (scope.disableHead && node.rootNode) {
                            return treeStyle.ROOT;
                        }

                        if (node.loading) {
                            return treeStyle.LOADING;
                        }

                        if (node.loaded) {
                            return leafState(node);
                        } else {
                            return expandState(node);
                        }

                    };

                    //if node has children, show them
                    scope.showNodeChildren = function (node) {
                        return (hasChildren(node) && !isCollapsed(node));
                    };

                    //EXPOSE Helper Methods on treeModel object for better programing control ( via Controllers )
                    _.extend(scope.treeModel, {

                        expand: function (node, children) {
                            if (children) {
                                node[scope.nodeChildren] = children;
                                node.loaded = true;
                            }
                            node.collapsed = false;
                        },

                        collapse: function (node) {
                            node.collapsed = true;
                        }

                    });

                    //Mark the rootNode
                    scope.node = scope.treeModel;
                    scope.node.rootNode = true;

                }
            };


    }]);
})(angular);