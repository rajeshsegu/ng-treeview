var appModule = angular.module('app', ['ngWidgets']);

appModule.controller('TreeViewCtrl', ['$scope', function ($scope) {


        $scope.onSelect = angular.noop;
        $scope.onLoad = angular.noop;
        $scope.onExpand = angular.noop;

        $scope.treeModel = {
            name: 'JS Frameworks',
            id: 'js',
            title: 'Collection of JS Frameworks',
            children: [
                {
                    name: 'Utility',
                    id: 'js_utility',
                    title: 'Shared utils based JS Framework',
                    children: [
                        {
                            name: 'Underscore',
                            id: 'js_utility_underscore',
                            title: 'Basic JS utlity methods'
                },
                        {
                            name: 'jQuery',
                            id: 'js_utility_jquery',
                            title: 'Basic DOM utility methods'
                }
                    ]
        },
                {
                    name: 'MVC',
                    id: 'js_mvc',
                    title: 'Application Development Frameworks',
                    children: [
                        {
                            name: 'Helper',
                            id: 'js_mvc_helper',
                            title: 'Light weight MVC frameworks',
                            children: [
                                {
                                    name: 'Backbone',
                                    id: 'js_mvc_backbone',
                                    title: 'Barebones MVC framework'
                        },
                                {
                                    name: 'CanJS',
                                    id: 'js_mvc_can',
                                    title: 'Lightweight MVC framework'
                        }
                            ]
                },
                        {
                            name: 'Application',
                            id: 'js_mvc_app',
                            title: 'Basic JS utlity methods',
                            children: [
                                {
                                    name: 'AngularJS',
                                    id: 'js_mvc_angular',
                                    title: 'MVC framework from Google'
                        },
                                {
                                    name: 'EmberJS',
                                    id: 'js_mvc_ember',
                                    title: 'Ember MVC framework'
                        },
                                {
                                    name: 'KnockoutJS',
                                    id: 'js_mvc_knockout',
                                    title: 'Knockout MVC framework'
                        }
                            ]
                }
                    ]
        },
                {
                    name: 'Mobile',
                    id: 'js_mobile',
                    title: 'Mobile JS Framework',
                    children: [
                        {
                            name: 'jQueryUI',
                            id: 'js_mobile_jqui',
                            title: 'MVC framework from Google'
                },
                        {
                            name: 'PhoneGap',
                            id: 'js_mobile_phone',
                            title: 'Phone Gap framework'
                },
                        {
                            name: 'ExtJS',
                            id: 'js_mvc_ext',
                            title: 'Mobile Ext JS framework'
                }
                    ]
        }
            ]
        }

    }]);

/*
{
    name: 'JS Frameworks',
    id: 'js',
    title: 'Collection of JS Frameworks',
    children: [
        {
            name: 'Utility',
            id: 'js_utility',
            title: 'Shared utils based JS Framework',
            children: [
                {
                    name: 'Underscore',
                    id: 'js_utility_underscore',
                    title: 'Basic JS utlity methods'
                },
                {
                    name: 'jQuery',
                    id: 'js_utility_jquery',
                    title: 'Basic DOM utility methods'
                }
            ]
        },
        {
            name: 'MVC',
            id: 'js_mvc',
            title: 'Application Development Frameworks',
            children: [
                {
                    name: 'Helper',
                    id: 'js_mvc_helper',
                    title: 'Light weight MVC frameworks',
                    children: [
                        {
                            name: 'Backbone',
                            id: 'js_mvc_backbone',
                            title: 'Barebones MVC framework'
                        },
                        {
                            name: 'CanJS',
                            id: 'js_mvc_can',
                            title: 'Lightweight MVC framework'
                        }
                    ]
                },
                {
                    name: 'Application',
                    id: 'js_mvc_app',
                    title: 'Basic JS utlity methods',
                    children: [
                        {
                            name: 'AngularJS',
                            id: 'js_mvc_angular',
                            title: 'MVC framework from Google'
                        },
                        {
                            name: 'EmberJS',
                            id: 'js_mvc_ember',
                            title: 'Ember MVC framework'
                        },
                        {
                            name: 'KnockoutJS',
                            id: 'js_mvc_knockout',
                            title: 'Knockout MVC framework'
                        }
                    ]
                }
            ]
        },
        {
            name: 'Mobile',
            id: 'js_mobile',
            title: 'Mobile JS Framework',
            children: [
                {
                    name: 'jQueryUI',
                    id: 'js_mobile_jqui',
                    title: 'MVC framework from Google'
                },
                {
                    name: 'PhoneGap',
                    id: 'js_mobile_phone',
                    title: 'Phone Gap framework'
                },
                {
                    name: 'ExtJS',
                    id: 'js_mvc_ext',
                    title: 'Mobile Ext JS framework'
                }
            ]
        }
    ]
}
*/