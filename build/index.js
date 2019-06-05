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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _slots_basic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slots/basic */ "./src/slots/basic/index.js");
/* harmony import */ var _slots_real_world__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slots/real-world */ "./src/slots/real-world/index.js");
// Basic Examples
 // Real World Examples



/***/ }),

/***/ "./src/slots/basic/index.js":
/*!**********************************!*\
  !*** ./src/slots/basic/index.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _plugin_more_menu_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plugin-more-menu-item */ "./src/slots/basic/plugin-more-menu-item/index.js");
// import './plugin-sidebar';
 // import './plugin-sidebar-more-menu-item';
// import './plugin-post-status-info';
// import './plugin-block-settings-menu-item';
// import './plugin-pre-publish-panel';
// import './plugin-post-publish-panel';

/***/ }),

/***/ "./src/slots/basic/plugin-more-menu-item/index.js":
/*!********************************************************!*\
  !*** ./src/slots/basic/plugin-more-menu-item/index.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var registerPlugin = wp.plugins.registerPlugin;
var PluginMoreMenuItem = wp.editPost.PluginMoreMenuItem;

var MyButtonMoreMenuItemTest = function MyButtonMoreMenuItemTest() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PluginMoreMenuItem, {
    href: "https://10up.com"
  }, "More Menu Item");
};

registerPlugin('more-menu-item-test', {
  render: MyButtonMoreMenuItemTest,
  icon: "smiley"
});

/***/ }),

/***/ "./src/slots/real-world/index.js":
/*!***************************************!*\
  !*** ./src/slots/real-world/index.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pre_publish_checklist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pre-publish-checklist */ "./src/slots/real-world/pre-publish-checklist/index.js");


/***/ }),

/***/ "./src/slots/real-world/pre-publish-checklist/index.js":
/*!*************************************************************!*\
  !*** ./src/slots/real-world/pre-publish-checklist/index.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var registerPlugin = wp.plugins.registerPlugin;
var PluginPrePublishPanel = wp.editPost.PluginPrePublishPanel;

var PluginPrePublishPanelTest = function PluginPrePublishPanelTest() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PluginPrePublishPanel, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, " Pre Publish Panel "));
};

registerPlugin('pre-publish-panel-test', {
  render: PluginPrePublishPanelTest
});

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