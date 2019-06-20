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
/* harmony import */ var _slots_real_world__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slots/real-world */ "./src/slots/real-world/index.js");
// Basic Examples
//import './slots/basic';
// Real World Examples


/***/ }),

/***/ "./src/slots/real-world/index.js":
/*!***************************************!*\
  !*** ./src/slots/real-world/index.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _plugin_post_status_info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plugin-post-status-info */ "./src/slots/real-world/plugin-post-status-info/index.js");
// import './pre-publish-checklist';


/***/ }),

/***/ "./src/slots/real-world/plugin-post-status-info/index.js":
/*!***************************************************************!*\
  !*** ./src/slots/real-world/plugin-post-status-info/index.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_wordCounter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/wordCounter */ "./src/utils/wordCounter/index.js");

var registerPlugin = wp.plugins.registerPlugin;
var PluginPostStatusInfo = wp.editPost.PluginPostStatusInfo;


var PluginPostStatusInfoTest = function PluginPostStatusInfoTest() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PluginPostStatusInfo, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_utils_wordCounter__WEBPACK_IMPORTED_MODULE_1__["default"], null)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PluginPostStatusInfo, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_utils_wordCounter__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: "Characters without Spaces",
    countType: "characters_excluding_spaces"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PluginPostStatusInfo, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_utils_wordCounter__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: "Characters with Spaces",
    countType: "characters_including_spaces"
  })));
};

registerPlugin('post-status-info-test-real-world', {
  render: PluginPostStatusInfoTest
});

/***/ }),

/***/ "./src/utils/wordCounter/index.js":
/*!****************************************!*\
  !*** ./src/utils/wordCounter/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var Component = wp.element.Component;
var count = wp.wordcount.count;
var serialize = wp.blocks.serialize;
var withSelect = wp.data.withSelect;
var compose = wp.compose.compose;
/**
 * Display the count with a label.
 *
 * @param {Object} params         Props for the component.
 * @param {string} [params.label] The label to display.
 * @param {int}    [params.count] The current count.
 */

var WordCounter = function WordCounter(_ref) {
  var _ref$label = _ref.label,
      label = _ref$label === void 0 ? "Word Count" : _ref$label,
      count = _ref.count;

  if (false === count) {
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, label), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, count));
};

var allowedCountTypes = ['words', 'characters_excluding_spaces', 'characters_including_spaces'];
/* harmony default export */ __webpack_exports__["default"] = (compose(withSelect(function (select, ownProps) {
  var countType = ownProps.countType || 'words';
  var counted = false;

  if (allowedCountTypes.includes(countType)) {
    counted = count(serialize(select('core/editor').getBlocks()), countType);
  }

  return {
    count: counted
  };
}))(WordCounter));

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