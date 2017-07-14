/*global logger*/
/*
    WidgetName
    ========================

    @file      : PageLoader.js
    @version   : 1.0
    @author    : Arjen Lammers
    @date      : 12-7-2017
    @copyright : 2017

*/

// Required module list. Remove unnecessary modules, you can always get them back from the boilerplate.
define([
    "dojo/_base/declare",
    "mxui/widget/_WidgetBase",

    "mxui/dom",
    "dojo/dom",
    "dojo/dom-prop",
    "dojo/dom-geometry",
    "dojo/dom-class",
    "dojo/dom-style",
    "dojo/dom-construct",
    "dojo/_base/array",
    "dojo/_base/lang",
    "dojo/text",
    "dojo/html",
    "dojo/_base/event",

], function (declare, _WidgetBase, dom, dojoDom, dojoProp, dojoGeometry, dojoClass, dojoStyle, dojoConstruct, dojoArray, dojoLang, dojoText, dojoHtml, dojoEvent) {
    "use strict";

    // Declare widget's prototype.
    return declare("PageLoader.widget.PageLoader", [ _WidgetBase ], {
        _contextObj: null,
        page: null,
        
        // dojo.declare.constructor is called to construct the widget instance. Implement to initialize non-primitive properties.
        constructor: function () {
            logger.debug(this.id + ".constructor");
        },

        // dijit._WidgetBase.postCreate is called after constructing the widget. Implement to do extra setup work.
        postCreate: function () {
            logger.debug(this.id + ".postCreate");

            this._updateRendering();
            this._setupEvents();
        },

        // mxui.widget._WidgetBase.update is called when context is changed or initialized. Implement to re-render and / or fetch data.
        update: function (obj, callback) {
            logger.debug(this.id + ".update");

            this._contextObj = obj;
            this._resetSubscriptions();
            this._updateRendering(callback); // We're passing the callback to updateRendering to be called after DOM-manipulation
        },

        // mxui.widget._WidgetBase.enable is called when the widget should enable editing. Implement to enable editing if widget is input widget.
        enable: function () {
          logger.debug(this.id + ".enable");
        },

        // mxui.widget._WidgetBase.enable is called when the widget should disable editing. Implement to disable editing if widget is input widget.
        disable: function () {
          logger.debug(this.id + ".disable");
        },

        // mxui.widget._WidgetBase.resize is called when the page's layout is recalculated. Implement to do sizing calculations. Prefer using CSS instead.
        resize: function (box) {
          logger.debug(this.id + ".resize");
        },

        // mxui.widget._WidgetBase.uninitialize is called when the widget is destroyed. Implement to do special tear-down work.
        uninitialize: function () {
          logger.debug(this.id + ".uninitialize");
            // Clean up listeners, helper objects, etc. There is no need to remove listeners added with this.connect / this.subscribe / this.own.
        },

        // We want to stop events on a mobile device
        _stopBubblingEventOnMobile: function (e) {
            logger.debug(this.id + "._stopBubblingEventOnMobile");
        },

        // Attach events to HTML dom elements
        _setupEvents: function () {
            logger.debug(this.id + "._setupEvents");
        },

        // Rerender the interface.
        _updateRendering: function (callback) {
            logger.debug(this.id + "._updateRendering");
            
            if (this._contextObj !== null) {
                dojoStyle.set(this.domNode, "display", "block");
                mx.ui.openForm(this.page, {
                    domNode: this.domNode,
                    context: this.mxcontext,
                    error: function (err) {
                        console.error("PageLoader widget could not load the form: " + err);
                    }
                });
            } else {
                dojoStyle.set(this.domNode, "display", "none");
            }

            // The callback, coming from update, needs to be executed, to let the page know it finished rendering
            mendix.lang.nullExec(callback);
        },

        // Handle validations.
        _handleValidation: function (validations) {
            logger.debug(this.id + "._handleValidation");
        },

        // Clear validations.
        _clearValidations: function () {
            logger.debug(this.id + "._clearValidations");
        },

        // Show an error message.
        _showError: function (message) {
            logger.debug(this.id + "._showError");
        },

        // Add a validation.
        _addValidation: function (message) {
            logger.debug(this.id + "._addValidation");
        },

        _unsubscribe: function () {
        },

        // Reset subscriptions.
        _resetSubscriptions: function () {
            logger.debug(this.id + "._resetSubscriptions");
        }
    });
});

require(["PageLoader/widget/PageLoader"]);
