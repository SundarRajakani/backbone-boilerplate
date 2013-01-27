/*jslint regexp: true, nomen: true, sloppy: true */
/*global requirejs, require, define */

define([
    'jquery',
    'underscore',
    'backbone',
    'mustache',
    'router'
], function ($, _, Backbone, Mustache, router) {

    'use strict';

    // Add your modules routing here
    router.route("/*", "home", function () {
        this.loadModule("bundles/todos/main");
    });

    var root = $("[data-main][data-root]").data("root");
    root = root ? root : '/';

    return {
        initialize: function () {
            Backbone.history.start({
                pushState: true,
                root: root
            });
        }
    };
});
