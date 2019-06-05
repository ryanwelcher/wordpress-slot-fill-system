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
/* harmony import */ var _with_word_counter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./with-word-counter */ "./src/slots/real-world/pre-publish-checklist/with-word-counter/index.js");

var registerPlugin = wp.plugins.registerPlugin;
var PluginPrePublishPanel = wp.editPost.PluginPrePublishPanel;
var _wp$data = wp.data,
    select = _wp$data.select,
    dispatch = _wp$data.dispatch;
var serialize = wp.blocks.serialize;
var PanelBody = wp.components.PanelBody;


var PrePublishCheckList = function PrePublishCheckList() {
  var lockPost = false; // Get the WordCount

  var wordCounter = Object(_with_word_counter__WEBPACK_IMPORTED_MODULE_1__["default"])({});
  var wordCountMessage = "".concat(wordCounter.count);

  if (!wordCounter.passed) {
    lockPost = true;
    wordCountMessage += " - Minimum of 1000 required.";
  } // Get the cats


  var cats = select('core/editor').getEditedPostAttribute('categories');
  var catsMessage = 'Set';

  if (!cats.length) {
    lockPost = true;
    catsMessage = 'Missing';
  } else {
    // Check that the cat is not uncategorized - this assumes that the ID of Uncategorized is 1, which it would be for most installs.
    if (cats.length === 1 && cats[0] === 1) {
      lockPost = true;
      console.log('3');
      catsMessage = 'Cannot use Uncategorized';
    }
  } // Get the tags


  var tags = select('core/editor').getEditedPostAttribute('tags');
  var tagsMessage = 'Set';

  if (tags.length < 3 || tags.length < 5) {
    lockPost = true;
    tagsMessage = 'Required 3 - 5 tags';
  } // Get the featured image


  var featuredImageID = select('core/editor').getEditedPostAttribute('featured_media');
  var featuredImage = 'Set';

  if (featuredImageID === 0) {
    lockPost = true;
    featuredImage = 'Not Set';
  } // Do we need to lock the post?


  if (lockPost === true) {
    dispatch('core/editor').lockPostSaving();
  } else {
    dispatch('core/editor').unlockPostSaving();
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PluginPrePublishPanel, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: 'Publish Checklist'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("b", null, "WordCount:"), " ", wordCountMessage), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("b", null, "Categories:"), " ", catsMessage), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("b", null, "Tags:"), " ", tagsMessage), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("b", null, "Featured Image:"), " ", featuredImage)));
};

registerPlugin('pre-publish-checklist', {
  render: PrePublishCheckList
});

/***/ }),

/***/ "./src/slots/real-world/pre-publish-checklist/with-word-counter/index.js":
/*!*******************************************************************************!*\
  !*** ./src/slots/real-world/pre-publish-checklist/with-word-counter/index.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Component = wp.element.Component;
var count = wp.wordcount.count;
var serialize = wp.blocks.serialize;
var select = wp.data.select;
/**
 *
 * @param {Object} params             Settings for this function
 * @param {int}    [params.minCount]  The minimum word count. If 0, no check is done.
 * @param {string} [params.countType] Passed to the count instance. Options 'words', 'characters_excluding_spaces', or 'characters_including_spaces'
 *
 * @returns {{count: int, passed: boolean}}
 */

var withWordCounter = function withWordCounter(_ref) {
  var _ref$minCount = _ref.minCount,
      minCount = _ref$minCount === void 0 ? 500 : _ref$minCount,
      _ref$countType = _ref.countType,
      countType = _ref$countType === void 0 ? 'words' : _ref$countType;
  var wordCount = count(serialize(select('core/editor').getBlocks()), countType);

  if (minCount > 0 && wordCount < minCount) {
    return {
      passed: false,
      count: wordCount
    };
  } else {
    return {
      passed: true,
      count: wordCount
    };
  }
};

/* harmony default export */ __webpack_exports__["default"] = (withWordCounter);

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