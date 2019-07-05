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

/***/ "./src/blocks/post-info/index.js":
/*!***************************************!*\
  !*** ./src/blocks/post-info/index.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _svg_icons___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/icons/ */ "./src/svg/icons/index.js");
/* harmony import */ var _slots_post_info_author__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../slots/post-info-author */ "./src/blocks/slots/post-info-author/index.js");
/* harmony import */ var _slots_post_info_open__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../slots/post-info-open */ "./src/blocks/slots/post-info-open/index.js");
/* harmony import */ var _slots_post_info_alt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../slots/post-info-alt */ "./src/blocks/slots/post-info-alt/index.js");

var registerBlockType = wp.blocks.registerBlockType;
var __ = wp.i18n.__;
var InspectorControls = wp.editor.InspectorControls;
var _wp$components = wp.components,
    ToggleControl = _wp$components.ToggleControl,
    PanelBody = _wp$components.PanelBody,
    createSlotFill = _wp$components.createSlotFill;
var registerPlugin = wp.plugins.registerPlugin;




/**
 * Register a block that shows Post Information.
 */

registerBlockType('extending-gutenberg/post-info', {
  title: __('Post Information', 'extending-gutenberg'),
  description: __('This block displays information about the post such as author information'),
  icon: _svg_icons___WEBPACK_IMPORTED_MODULE_1__["TenUp"],
  category: 'common',
  attributes: {
    showAuthor: {
      type: 'boolean',
      default: true
    },
    showBio: {
      type: 'boolean',
      default: false
    }
  },
  edit: function edit(props) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, "Post Information Block", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_slots_post_info_author__WEBPACK_IMPORTED_MODULE_2__["default"].Slot, {
      fillProps: props
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_slots_post_info_alt__WEBPACK_IMPORTED_MODULE_4__["default"].Slot, {
      fillProps: props
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_slots_post_info_open__WEBPACK_IMPORTED_MODULE_3__["default"].Slot, null)));
  },
  save: function save(props) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, " Your block. ");
  }
});
/**
 * Register our plugin
 */

var RenderAuthorItems = function RenderAuthorItems() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_slots_post_info_author__WEBPACK_IMPORTED_MODULE_2__["default"], null, function (props) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      label: __('Show Post Author'),
      onChange: function onChange(val) {
        return props.setAttributes({
          showAuthor: val
        });
      },
      checked: props.attributes.showAuthor
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      label: __('Show Post Bio'),
      onChange: function onChange(val) {
        return props.setAttributes({
          showBio: val
        });
      },
      checked: props.attributes.showBio
    }));
  });
};

registerPlugin('extending-gutenberg-author-items', {
  render: RenderAuthorItems
});

var RenderOpenItems = function RenderOpenItems() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_slots_post_info_open__WEBPACK_IMPORTED_MODULE_3__["default"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: __('Information')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, __('Information you need to know'))));
};

registerPlugin('extending-gutenberg-open-items', {
  render: RenderOpenItems
});

var RenderAltItems = function RenderAltItems() {
  console.log(props);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_slots_post_info_alt__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: __('Alt Items')
  }, console.log(props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, "test"));
};

registerPlugin('extending-gutenberg-alt-items', {
  render: RenderAltItems
});

/***/ }),

/***/ "./src/blocks/slots/post-info-alt/index.js":
/*!*************************************************!*\
  !*** ./src/blocks/slots/post-info-alt/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
var _arguments = arguments;

var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    createSlotFill = _wp$components.createSlotFill;

var _createSlotFill = createSlotFill('PostInfoAlt'),
    Fill = _createSlotFill.Fill,
    Slot = _createSlotFill.Slot;

var PostInfoAlt = function PostInfoAlt(_ref) {
  var children = _ref.children,
      title = _ref.title;
  console.log(_arguments);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fill, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: title
  }, children));
};

PostInfoAlt.Slot = Slot;
/* harmony default export */ __webpack_exports__["default"] = (PostInfoAlt);

/***/ }),

/***/ "./src/blocks/slots/post-info-author/index.js":
/*!****************************************************!*\
  !*** ./src/blocks/slots/post-info-author/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    createSlotFill = _wp$components.createSlotFill;
var __ = wp.i18n.__;

var _createSlotFill = createSlotFill('PostInfoAuthor'),
    Fill = _createSlotFill.Fill,
    Slot = _createSlotFill.Slot; // Alternate way
//const { Fill: PostInfoAuthor, Slot } = createSlotFill( 'PostInfoAuthor' );


var PostInfoAuthor = function PostInfoAuthor(_ref) {
  var children = _ref.children;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fill, null, children);
};

PostInfoAuthor.Slot = function (_ref2) {
  var fillProps = _ref2.fillProps;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Slot, {
    fillProps: fillProps
  }, function (fills) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __('Post Author')
    }, fills);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (PostInfoAuthor);

/***/ }),

/***/ "./src/blocks/slots/post-info-open/index.js":
/*!**************************************************!*\
  !*** ./src/blocks/slots/post-info-open/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var createSlotFill = wp.components.createSlotFill;

var _createSlotFill = createSlotFill('PostInfoOpen'),
    Fill = _createSlotFill.Fill,
    Slot = _createSlotFill.Slot;

var PostInfoOpen = function PostInfoOpen(_ref) {
  var children = _ref.children;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fill, null, children);
};

PostInfoOpen.Slot = Slot;
/* harmony default export */ __webpack_exports__["default"] = (PostInfoOpen);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_post_info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/post-info */ "./src/blocks/post-info/index.js");
// Basic Examples
//import './slots/basic';
// Real World Examples
//import './slots/real-world';
// Custom Examples
//import './slots/custom/basic-slot-creation';
//import './slots/custom/basic-fills';
//import './filters/editor-blockedit/examples/basic';
//import './filters/editor-blockedit/examples/per-block';


/***/ }),

/***/ "./src/svg/icons/index.js":
/*!********************************!*\
  !*** ./src/svg/icons/index.js ***!
  \********************************/
/*! exports provided: TenUp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenUp", function() { return TenUp; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var TenUp = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
  width: "208",
  height: "223",
  viewBox: "0 0 208 223",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M124.035 127.929C148.316 127.929 168 108.246 168 83.9647C168 59.6837 148.316 40 124.035 40C99.7542 40 80.0705 59.6837 80.0705 83.9647C80.0705 91.562 81.9976 98.7093 85.3895 104.944L115.311 74.4264L107.968 67.0829H141.348V100.463L133.628 92.7436L103.87 123.042C109.91 126.165 116.766 127.929 124.035 127.929Z",
  fill: "#E31E41"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "M40.312 60.5706L70.8197 40.1034C71.2208 39.8343 71.7599 40.1218 71.7599 40.6049V118.561C71.7599 118.828 71.6539 119.084 71.4652 119.273L46.7376 144C46.3572 144.381 45.7068 144.115 45.7068 143.577V67.5447C45.7068 67.2778 45.6007 67.0481 45.412 66.8593L40.2064 61.6537C39.8926 61.34 39.9436 60.8178 40.312 60.5706Z",
  fill: "#E31E41"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "M117.118 136.519V173.806H104.683V169.816C103.309 171.329 101.66 172.476 99.7367 173.256C97.8131 174.035 95.7749 174.425 93.6223 174.425C88.8132 174.425 84.966 173.003 82.0806 170.16C79.2409 167.316 77.8211 163.051 77.8211 157.364V149.627C77.8211 149.587 77.8369 149.549 77.8651 149.521L90.5329 136.86C90.6589 136.734 90.8743 136.824 90.8743 137.002V155.231C90.8743 158.029 91.401 160.07 92.4544 161.354C93.5078 162.638 95.0421 163.28 97.0574 163.28C99.1184 163.28 100.79 162.569 102.073 161.148C103.401 159.68 104.065 157.456 104.065 154.475V136.519H117.118Z",
  fill: "#202124"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "M147.476 135.9C150.865 135.9 153.934 136.703 156.682 138.308C159.476 139.867 161.674 142.114 163.277 145.05C164.926 147.939 165.751 151.31 165.751 155.163C165.751 159.015 164.926 162.409 163.277 165.344C161.674 168.234 159.476 170.481 156.682 172.086C153.934 173.645 150.865 174.425 147.476 174.425C143.125 174.425 139.667 173.118 137.102 170.504V184.75H124.049V136.519H136.484V140.234C138.911 137.345 142.575 135.9 147.476 135.9ZM144.728 164.037C147.018 164.037 148.896 163.257 150.362 161.698C151.827 160.093 152.56 157.914 152.56 155.163C152.56 152.411 151.827 150.255 150.362 148.696C148.896 147.091 147.018 146.288 144.728 146.288C142.438 146.288 140.56 147.091 139.095 148.696C137.629 150.255 136.896 152.411 136.896 155.163C136.896 157.914 137.629 160.093 139.095 161.698C140.56 163.257 142.438 164.037 144.728 164.037Z",
  fill: "#202124"
}));

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