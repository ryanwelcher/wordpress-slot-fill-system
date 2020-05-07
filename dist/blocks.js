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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/block/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/block/index.js":
/*!**********************************!*\
  !*** ./assets/js/block/index.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _post_info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./post-info */ \"./assets/js/block/post-info/index.js\");\n\n\n//# sourceURL=webpack:///./assets/js/block/index.js?");

/***/ }),

/***/ "./assets/js/block/plugins/index.js":
/*!******************************************!*\
  !*** ./assets/js/block/plugins/index.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _slots_post_info_open__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../slots/post-info-open */ \"./assets/js/block/slots/post-info-open/index.js\");\n/* harmony import */ var _slots_post_info_author__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../slots/post-info-author */ \"./assets/js/block/slots/post-info-author/index.js\");\n\nvar registerPlugin = wp.plugins.registerPlugin;\nvar __ = wp.i18n.__;\nvar _wp$components = wp.components,\n    ToggleControl = _wp$components.ToggleControl,\n    PanelBody = _wp$components.PanelBody;\n\n\n\nvar InspectorControlsCustomSlotFill = function InspectorControlsCustomSlotFill() {\n  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_slots_post_info_author__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null, function (props) {\n    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(ToggleControl, {\n      label: __('Show Post Author'),\n      onChange: function onChange(val) {\n        return props.setAttributes({\n          showAuthor: val\n        });\n      },\n      checked: props.attributes.showAuthor\n    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(ToggleControl, {\n      label: __('Show Post Bio'),\n      onChange: function onChange(val) {\n        return props.setAttributes({\n          showBio: val\n        });\n      },\n      checked: props.attributes.showBio\n    }));\n  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_slots_post_info_open__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(PanelBody, {\n    title: __('Information')\n  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"p\", null, __('Information you need to know')))));\n};\n\nregisterPlugin('extending-gutenberg-inspector-controls-slotfill', {\n  render: InspectorControlsCustomSlotFill\n});\n\n//# sourceURL=webpack:///./assets/js/block/plugins/index.js?");

/***/ }),

/***/ "./assets/js/block/post-info/index.js":
/*!********************************************!*\
  !*** ./assets/js/block/post-info/index.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/icons */ \"./assets/js/svg/icons/index.js\");\n/* harmony import */ var _slots_post_info_author__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../slots/post-info-author */ \"./assets/js/block/slots/post-info-author/index.js\");\n/* harmony import */ var _slots_post_info_open__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../slots/post-info-open */ \"./assets/js/block/slots/post-info-open/index.js\");\n/* harmony import */ var _plugins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../plugins */ \"./assets/js/block/plugins/index.js\");\n\nvar registerBlockType = wp.blocks.registerBlockType;\nvar __ = wp.i18n.__;\nvar InspectorControls = wp.editor.InspectorControls;\n\n\n // Import our registerPlugin call - this needs to be here to work...\n\n\n/**\n * Register a block that shows Post Information.\n */\n\nregisterBlockType('extending-gutenberg/post-info', {\n  title: __('Post Information'),\n  description: __('This block displays information about the post such as author information'),\n  icon: _svg_icons__WEBPACK_IMPORTED_MODULE_1__[\"TenUp\"],\n  category: 'common',\n  attributes: {\n    showAuthor: {\n      type: 'boolean',\n      \"default\": true\n    },\n    showBio: {\n      type: 'boolean',\n      \"default\": false\n    }\n  },\n  edit: function edit(props) {\n    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, \"Post Information Block\", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_slots_post_info_author__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Slot, {\n      fillProps: props\n    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_slots_post_info_open__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Slot, null)));\n  },\n  save: function save(props) {\n    return null;\n  }\n});\n\n//# sourceURL=webpack:///./assets/js/block/post-info/index.js?");

/***/ }),

/***/ "./assets/js/block/slots/post-info-author/index.js":
/*!*********************************************************!*\
  !*** ./assets/js/block/slots/post-info-author/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _wp$components = wp.components,\n    PanelBody = _wp$components.PanelBody,\n    createSlotFill = _wp$components.createSlotFill;\nvar __ = wp.i18n.__;\n\nvar _createSlotFill = createSlotFill('PostInfoAuthor'),\n    Fill = _createSlotFill.Fill,\n    Slot = _createSlotFill.Slot; // Alternate way\n//const { Fill: PostInfoAuthor, Slot } = createSlotFill( 'PostInfoAuthor' );\n\n\nvar PostInfoAuthor = function PostInfoAuthor(_ref) {\n  var children = _ref.children;\n  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(Fill, null, children);\n};\n\nPostInfoAuthor.Slot = function (_ref2) {\n  var fillProps = _ref2.fillProps;\n  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(Slot, {\n    fillProps: fillProps\n  }, function (fills) {\n    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(PanelBody, {\n      title: __('Post Author')\n    }, fills);\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostInfoAuthor);\n\n//# sourceURL=webpack:///./assets/js/block/slots/post-info-author/index.js?");

/***/ }),

/***/ "./assets/js/block/slots/post-info-open/index.js":
/*!*******************************************************!*\
  !*** ./assets/js/block/slots/post-info-open/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar createSlotFill = wp.components.createSlotFill;\n\nvar _createSlotFill = createSlotFill('PostInfoOpen'),\n    PostInfoOpen = _createSlotFill.Fill,\n    Slot = _createSlotFill.Slot;\n\nPostInfoOpen.Slot = Slot;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostInfoOpen);\n\n//# sourceURL=webpack:///./assets/js/block/slots/post-info-open/index.js?");

/***/ }),

/***/ "./assets/js/svg/icons/index.js":
/*!**************************************!*\
  !*** ./assets/js/svg/icons/index.js ***!
  \**************************************/
/*! exports provided: TenUp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TenUp\", function() { return TenUp; });\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);\n\nvar TenUp = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"svg\", {\n  width: \"20\",\n  height: \"20\",\n  viewBox: \"0 0 208 223\",\n  fill: \"none\",\n  xmlns: \"http://www.w3.org/2000/svg\"\n}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"path\", {\n  fillRule: \"evenodd\",\n  clipRule: \"evenodd\",\n  d: \"M124.035 127.929C148.316 127.929 168 108.246 168 83.9647C168 59.6837 148.316 40 124.035 40C99.7542 40 80.0705 59.6837 80.0705 83.9647C80.0705 91.562 81.9976 98.7093 85.3895 104.944L115.311 74.4264L107.968 67.0829H141.348V100.463L133.628 92.7436L103.87 123.042C109.91 126.165 116.766 127.929 124.035 127.929Z\",\n  fill: \"#E31E41\"\n}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"path\", {\n  d: \"M40.312 60.5706L70.8197 40.1034C71.2208 39.8343 71.7599 40.1218 71.7599 40.6049V118.561C71.7599 118.828 71.6539 119.084 71.4652 119.273L46.7376 144C46.3572 144.381 45.7068 144.115 45.7068 143.577V67.5447C45.7068 67.2778 45.6007 67.0481 45.412 66.8593L40.2064 61.6537C39.8926 61.34 39.9436 60.8178 40.312 60.5706Z\",\n  fill: \"#E31E41\"\n}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"path\", {\n  d: \"M117.118 136.519V173.806H104.683V169.816C103.309 171.329 101.66 172.476 99.7367 173.256C97.8131 174.035 95.7749 174.425 93.6223 174.425C88.8132 174.425 84.966 173.003 82.0806 170.16C79.2409 167.316 77.8211 163.051 77.8211 157.364V149.627C77.8211 149.587 77.8369 149.549 77.8651 149.521L90.5329 136.86C90.6589 136.734 90.8743 136.824 90.8743 137.002V155.231C90.8743 158.029 91.401 160.07 92.4544 161.354C93.5078 162.638 95.0421 163.28 97.0574 163.28C99.1184 163.28 100.79 162.569 102.073 161.148C103.401 159.68 104.065 157.456 104.065 154.475V136.519H117.118Z\",\n  fill: \"#202124\"\n}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"path\", {\n  d: \"M147.476 135.9C150.865 135.9 153.934 136.703 156.682 138.308C159.476 139.867 161.674 142.114 163.277 145.05C164.926 147.939 165.751 151.31 165.751 155.163C165.751 159.015 164.926 162.409 163.277 165.344C161.674 168.234 159.476 170.481 156.682 172.086C153.934 173.645 150.865 174.425 147.476 174.425C143.125 174.425 139.667 173.118 137.102 170.504V184.75H124.049V136.519H136.484V140.234C138.911 137.345 142.575 135.9 147.476 135.9ZM144.728 164.037C147.018 164.037 148.896 163.257 150.362 161.698C151.827 160.093 152.56 157.914 152.56 155.163C152.56 152.411 151.827 150.255 150.362 148.696C148.896 147.091 147.018 146.288 144.728 146.288C142.438 146.288 140.56 147.091 139.095 148.696C137.629 150.255 136.896 152.411 136.896 155.163C136.896 157.914 137.629 160.093 139.095 161.698C140.56 163.257 142.438 164.037 144.728 164.037Z\",\n  fill: \"#202124\"\n}));\n\n//# sourceURL=webpack:///./assets/js/svg/icons/index.js?");

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() { module.exports = this[\"wp\"][\"element\"]; }());\n\n//# sourceURL=webpack:///external_%7B%22this%22:%5B%22wp%22,%22element%22%5D%7D?");

/***/ })

/******/ });