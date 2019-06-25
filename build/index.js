/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/filters/editor-blockedit/examples/basic/index.js":
/*!**************************************************************!*\
  !*** ./src/filters/editor-blockedit/examples/basic/index.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var createHigherOrderComponent = wp.compose.createHigherOrderComponent;
var addFilter = wp.hooks.addFilter;
var Fragment = wp.element.Fragment;
var InspectorControls = wp.editor.InspectorControls;
var _wp$components = wp.components,
    Slot = _wp$components.Slot,
    PanelBody = _wp$components.PanelBody;
/**
 * Filter the InspectorControls for all blocks
 */

var withInspectorControls = createHigherOrderComponent(function (BlockEdit) {
  return function (props) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockEdit, props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: "Basic Example: editor.BlockEdit"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, "Every Block Gets This"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Slot, {
      name: "Toolbar"
    }))));
  };
}, "withInspectorControl");
addFilter('editor.BlockEdit', 'ryanwelcher/filters/blockedit/basic', withInspectorControls);

/***/ }),

/***/ "./src/filters/editor-blockedit/examples/per-block/index.js":
/*!******************************************************************!*\
  !*** ./src/filters/editor-blockedit/examples/per-block/index.js ***!
  \******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _slots_custom_basic_fills__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../slots/custom/basic-fills */ "./src/slots/custom/basic-fills/index.js");

var createHigherOrderComponent = wp.compose.createHigherOrderComponent;
var addFilter = wp.hooks.addFilter;
var Fragment = wp.element.Fragment;
var InspectorControls = wp.editor.InspectorControls;
var _wp$components = wp.components,
    Fill = _wp$components.Fill,
    PanelBody = _wp$components.PanelBody;

/**
 * Filter the InspectorControls for a single block type.
 */

var withInspectorControls = createHigherOrderComponent(function (BlockEdit) {
  return function (props) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockEdit, props), props.name === 'core/paragraph' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: "Per Block Example: editor.BlockEdit"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fill, {
      name: "Toolbar"
    }, "Panel body 2"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fill, {
      name: "Toolbar"
    }, "Panel body 3"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fill, {
      name: "Toolbar"
    }, "Panel body 4"))));
  };
}, "withInspectorControl");
addFilter('editor.BlockEdit', 'ryanwelcher/filters/blockedit/perblock', withInspectorControls);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _slots_basic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slots/basic */ "./src/slots/basic/index.js");
/* harmony import */ var _slots_custom_basic_slot_creation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slots/custom/basic-slot-creation */ "./src/slots/custom/basic-slot-creation/index.js");
/* harmony import */ var _slots_custom_basic_fills__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slots/custom/basic-fills */ "./src/slots/custom/basic-fills/index.js");
/* harmony import */ var _filters_editor_blockedit_examples_basic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filters/editor-blockedit/examples/basic */ "./src/filters/editor-blockedit/examples/basic/index.js");
/* harmony import */ var _filters_editor_blockedit_examples_per_block__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filters/editor-blockedit/examples/per-block */ "./src/filters/editor-blockedit/examples/per-block/index.js");
// Basic Examples
 // Real World Examples
//import './slots/real-world';
// Custom Examples






/***/ }),

/***/ "./src/slots/basic/combined/index.js":
/*!*******************************************!*\
  !*** ./src/slots/basic/combined/index.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var registerPlugin = wp.plugins.registerPlugin;
var _wp$editPost = wp.editPost,
    PluginSidebar = _wp$editPost.PluginSidebar,
    PluginPrePublishPanel = _wp$editPost.PluginPrePublishPanel;
var _wp$components = wp.components,
    Fill = _wp$components.Fill,
    PanelBody = _wp$components.PanelBody;
var Fragment = wp.element.Fragment;

var PluginSidebarTest = function PluginSidebarTest() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PluginSidebar, {
    name: "plugin-sidebar-test",
    title: "My Plugin",
    icon: "smiley"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, "Plugin Sidebar"))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PluginPrePublishPanel, {
    className: "custom-panel-class",
    title: "Panel Title",
    initialOpen: true
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, " Pre Publish Panel ")));
};

registerPlugin('extending-gutenberg', {
  render: PluginSidebarTest
});

/***/ }),

/***/ "./src/slots/basic/index.js":
/*!**********************************!*\
  !*** ./src/slots/basic/index.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _combined__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./combined */ "./src/slots/basic/combined/index.js");
//import './plugin-sidebar';
//import './plugin-more-menu-item';
//import './plugin-pre-publish-panel';
// import './plugin-sidebar-more-menu-item';
// import './plugin-post-status-info';
// import './plugin-block-settings-menu-item';
// import './plugin-post-publish-panel';


/***/ }),

/***/ "./src/slots/custom/basic-fills/index.js":
/*!***********************************************!*\
  !*** ./src/slots/custom/basic-fills/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var Fill = wp.components.Fill;
var registerPlugin = wp.plugins.registerPlugin;

var ToolBarFills = function ToolBarFills() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fill, {
    name: "Toolbar"
  }, "Panel body 2"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fill, {
    name: "Toolbar"
  }, "Panel body 3"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fill, {
    name: "Toolbar"
  }, "Panel body 4"));
};

/* harmony default export */ __webpack_exports__["default"] = (ToolBarFills); //registerPlugin( 'raw-slot-fill', { render: ToolBarFills } );

/***/ }),

/***/ "./src/slots/custom/basic-slot-creation/index.js":
/*!*******************************************************!*\
  !*** ./src/slots/custom/basic-slot-creation/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var Slot = wp.components.Slot;

var Toolbar = function Toolbar() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "toolbar"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Slot, {
    name: "Toolbar"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Toolbar);

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map