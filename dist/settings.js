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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/settings-page/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/settings-page/Notice/index.js":
/*!*************************************************!*\
  !*** ./assets/js/settings-page/Notice/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _PPCContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../PPCContext */ \"./assets/js/settings-page/PPCContext/index.js\");\n\n\n\n\nvar Notice = function Notice(_ref) {\n  var id = _ref.id,\n      _ref$type = _ref.type,\n      type = _ref$type === void 0 ? 'error' : _ref$type,\n      _ref$message = _ref.message,\n      message = _ref$message === void 0 ? 'Default Message' : _ref$message;\n\n  var _useContext = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_PPCContext__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n      dispatch = _useContext.dispatch;\n\n  var classes = \"notice notice-\".concat(type, \" settings-\").concat(type, \" is-dismissible notice-fader\");\n  var ref = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])();\n  /**\n   * Clear the notification after 3 seconds if not clicked\n   */\n\n  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var remove;\n    var fade = setTimeout(function () {\n      ref.current.classList.add('fade');\n      remove = setTimeout(function () {\n        return dispatch({\n          type: 'CLEAR_NOTICE',\n          payload: id\n        });\n      }, 800);\n    }, 3000);\n    return function () {\n      clearTimeout(fade);\n      clearTimeout(remove);\n    };\n  }, []);\n  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n    className: classes,\n    ref: ref\n  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"p\", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"strong\", null, message)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"button\", {\n    type: \"button\",\n    className: \"notice-dismiss\",\n    onClick: function onClick() {\n      return dispatch({\n        type: 'CLEAR_NOTICE',\n        payload: id\n      });\n    }\n  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"span\", {\n    className: \"screen-reader-text\"\n  }, \"Dismiss this notice.\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Notice);\n\n//# sourceURL=webpack:///./assets/js/settings-page/Notice/index.js?");

/***/ }),

/***/ "./assets/js/settings-page/PPCContext/index.js":
/*!*****************************************************!*\
  !*** ./assets/js/settings-page/PPCContext/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * WordPress Imports\n */\n\nvar PPCContext = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])('PPC');\n/* harmony default export */ __webpack_exports__[\"default\"] = (PPCContext);\n\n//# sourceURL=webpack:///./assets/js/settings-page/PPCContext/index.js?");

/***/ }),

/***/ "./assets/js/settings-page/SettingTypes/index.js":
/*!*******************************************************!*\
  !*** ./assets/js/settings-page/SettingTypes/index.js ***!
  \*******************************************************/
/*! exports provided: InputFieldSetting, CheckBoxSetting, SelectSetting, RadioSetting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"InputFieldSetting\", function() { return InputFieldSetting; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CheckBoxSetting\", function() { return CheckBoxSetting; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SelectSetting\", function() { return SelectSetting; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RadioSetting\", function() { return RadioSetting; });\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);\n\n\n/**\n * InputFieldSettings\n *\n * @param {*} param0\n */\nvar InputFieldSetting = function InputFieldSetting(_ref) {\n  var _ref$label = _ref.label,\n      label = _ref$label === void 0 ? 'Setting Name' : _ref$label,\n      _ref$id = _ref.id,\n      id = _ref$id === void 0 ? 'setting-name' : _ref$id,\n      _ref$value = _ref.value,\n      value = _ref$value === void 0 ? '' : _ref$value,\n      _ref$onChange = _ref.onChange,\n      onChange = _ref$onChange === void 0 ? function (e) {\n    console.log(e.target.value);\n  } : _ref$onChange,\n      _ref$classes = _ref.classes,\n      classes = _ref$classes === void 0 ? '' : _ref$classes,\n      _ref$type = _ref.type,\n      type = _ref$type === void 0 ? 'text' : _ref$type;\n  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"tr\", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"th\", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"label\", {\n    htmlFor: id\n  }, label)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"td\", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"input\", {\n    id: id,\n    className: \"regular-text \".concat(classes),\n    type: type,\n    value: value,\n    onChange: onChange\n  })));\n};\n/**\n * Checkbox\n */\n\nvar CheckBoxSetting = function CheckBoxSetting(_ref2) {\n  var value = _ref2.value,\n      _ref2$label = _ref2.label,\n      label = _ref2$label === void 0 ? 'Setting Name' : _ref2$label,\n      _ref2$id = _ref2.id,\n      id = _ref2$id === void 0 ? 'setting-name' : _ref2$id,\n      _ref2$onChange = _ref2.onChange,\n      onChange = _ref2$onChange === void 0 ? function (e) {\n    return console.log(e.target.checked);\n  } : _ref2$onChange;\n  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"tr\", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"th\", {\n    scope: \"row\"\n  }, label), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"td\", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"fieldset\", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"legend\", {\n    className: \"screen-reader-text\"\n  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"span\", null, label)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"label\", {\n    htmlFor: id\n  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"input\", {\n    name: id,\n    type: \"checkbox\",\n    id: id,\n    value: \"true\",\n    checked: value,\n    onChange: onChange\n  })))));\n};\nvar SelectSetting = function SelectSetting() {};\nvar RadioSetting = function RadioSetting() {};\n\n//# sourceURL=webpack:///./assets/js/settings-page/SettingTypes/index.js?");

/***/ }),

/***/ "./assets/js/settings-page/SettingsPage/index.js":
/*!*******************************************************!*\
  !*** ./assets/js/settings-page/SettingsPage/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _PPCContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../PPCContext */ \"./assets/js/settings-page/PPCContext/index.js\");\n\n\n\n\nvar SettingsPage = function SettingsPage(_ref) {\n  var title = _ref.title,\n      children = _ref.children;\n\n  var _useContext = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_PPCContext__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n      dispatch = _useContext.dispatch,\n      saving = _useContext.saving;\n\n  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n    className: \"wrap\"\n  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"h1\", null, title), children, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"p\", {\n    className: \"submit\"\n  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"button\", {\n    disabled: saving,\n    className: \"button button-primary\",\n    onClick: function onClick() {\n      return dispatch({\n        type: 'TOGGLE_SAVING'\n      });\n    }\n  }, \"Save Changes\"))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SettingsPage);\n\n//# sourceURL=webpack:///./assets/js/settings-page/SettingsPage/index.js?");

/***/ }),

/***/ "./assets/js/settings-page/SettingsSection/index.js":
/*!**********************************************************!*\
  !*** ./assets/js/settings-page/SettingsSection/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar SettingsSection = function SettingsSection(_ref) {\n  var children = _ref.children,\n      _ref$title = _ref.title,\n      title = _ref$title === void 0 ? false : _ref$title;\n  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, title && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"h2\", null, title), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"table\", {\n    className: \"form-table\",\n    role: \"presentation\"\n  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"tbody\", null, children)));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SettingsSection);\n\n//# sourceURL=webpack:///./assets/js/settings-page/SettingsSection/index.js?");

/***/ }),

/***/ "./assets/js/settings-page/index.js":
/*!******************************************!*\
  !*** ./assets/js/settings-page/index.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/objectWithoutProperties.js\");\n/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _settings_page_SettingsPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../settings-page/SettingsPage */ \"./assets/js/settings-page/SettingsPage/index.js\");\n/* harmony import */ var _settings_page_SettingsSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../settings-page/SettingsSection */ \"./assets/js/settings-page/SettingsSection/index.js\");\n/* harmony import */ var _SettingTypes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SettingTypes */ \"./assets/js/settings-page/SettingTypes/index.js\");\n/* harmony import */ var _Notice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Notice */ \"./assets/js/settings-page/Notice/index.js\");\n/* harmony import */ var _PPCContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./PPCContext */ \"./assets/js/settings-page/PPCContext/index.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var uuidv4__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! uuidv4 */ \"./node_modules/uuidv4/build/lib/uuidv4.js\");\n/* harmony import */ var uuidv4__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(uuidv4__WEBPACK_IMPORTED_MODULE_13__);\n\n\n\n\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n/**\n * WordPress dependencies\n */\n\n/**\n * Internal dependencies\n */\n\n\n\n\n\n\n/**\n * External Depedencies\n */\n\n\n\nvar TRIGGER_NOTICE = 'TRIGGER_NOTICE';\nvar CLEAR_NOTICE = 'CLEAR_NOTICE';\nvar UPDATE_WORDCOUNT = 'UPDATE_WORDCOUNT';\nvar UPDATE_FEATURED_IMAGE = 'UPDATE_FEATURED_IMAGE';\nvar SAVING = 'TOGGLE_SAVING';\n\nvar reducer = function reducer(state, action) {\n  switch (action.type) {\n    case UPDATE_WORDCOUNT:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        wordcount: action.payload\n      });\n\n    case UPDATE_FEATURED_IMAGE:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        featuredImage: !state.featuredImage\n      });\n\n    case SAVING:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        saving: !state.saving\n      });\n\n    case TRIGGER_NOTICE:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        notices: [action.payload].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_4___default()(state.notices))\n      });\n\n    case CLEAR_NOTICE:\n      var notices = state.notices.filter(function (notice) {\n        return action.payload !== notice.id;\n      });\n      return _objectSpread(_objectSpread({}, state), {}, {\n        notices: notices\n      });\n\n    default:\n      return state;\n  }\n};\n\nfunction getRequest(_x) {\n  return _getRequest.apply(this, arguments);\n}\n/**\n * Helper to make POST requests\n *\n * @param {string} requestUrl The query url to fetch.\n * @param {string} nonce      User nonce.\n * @param {Object} data       Data to be stringified and sent as the body of the request.\n */\n\n\nfunction _getRequest() {\n  _getRequest = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(_ref) {\n    var requestUrl, nonce, response;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            requestUrl = _ref.requestUrl, nonce = _ref.nonce;\n            _context2.next = 3;\n            return fetch(requestUrl, {\n              headers: {\n                'X-WP-Nonce': nonce,\n                'Content-Type': 'application/json'\n              }\n            });\n\n          case 3:\n            response = _context2.sent;\n\n            if (!(200 === response.status)) {\n              _context2.next = 6;\n              break;\n            }\n\n            return _context2.abrupt(\"return\", response.json());\n\n          case 6:\n            return _context2.abrupt(\"return\", new Error(response));\n\n          case 7:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n  return _getRequest.apply(this, arguments);\n}\n\nfunction postRequest(_x2) {\n  return _postRequest.apply(this, arguments);\n}\n\nfunction _postRequest() {\n  _postRequest = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(_ref2) {\n    var requestUrl, nonce, data, response, error;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            requestUrl = _ref2.requestUrl, nonce = _ref2.nonce, data = _ref2.data;\n            _context3.next = 3;\n            return fetch(requestUrl, {\n              method: 'POST',\n              headers: {\n                'X-WP-Nonce': nonce,\n                'Content-Type': 'application/json'\n              },\n              body: JSON.stringify(data)\n            });\n\n          case 3:\n            response = _context3.sent;\n\n            if (!(200 === response.status)) {\n              _context3.next = 6;\n              break;\n            }\n\n            return _context3.abrupt(\"return\", response.json());\n\n          case 6:\n            _context3.next = 8;\n            return response.json();\n\n          case 8:\n            error = _context3.sent;\n            return _context3.abrupt(\"return\", new Error(error.message));\n\n          case 10:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3);\n  }));\n  return _postRequest.apply(this, arguments);\n}\n\nvar App = function App() {\n  // Get the\n  var _window$_extendingGut = window._extendingGutenbergSettings,\n      _window$_extendingGut2 = _window$_extendingGut.nonce,\n      nonce = _window$_extendingGut2 === void 0 ? false : _window$_extendingGut2,\n      restBase = _window$_extendingGut.restBase,\n      options = _window$_extendingGut.state;\n\n  var _useReducer = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__[\"useReducer\"])(reducer, _objectSpread(_objectSpread({}, options), {}, {\n    saving: false,\n    notices: []\n  })),\n      _useReducer2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useReducer, 2),\n      appState = _useReducer2[0],\n      dispatch = _useReducer2[1];\n  /**\n   * Save routine.\n   *\n   * @todo strip out the non-data state before saving.\n   */\n\n\n  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__[\"useEffect\"])(function () {\n    var updateData = /*#__PURE__*/function () {\n      var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        var requestUrl, saving, notices, options, results;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                requestUrl = \"\".concat(restBase, \"wp/v2/settings\");\n                console.log(appState);\n                saving = appState.saving, notices = appState.notices, options = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(appState, [\"saving\", \"notices\"]);\n                _context.next = 5;\n                return postRequest({\n                  requestUrl: requestUrl,\n                  nonce: nonce,\n                  data: {\n                    pre_publish_checklist: JSON.stringify(options)\n                  }\n                });\n\n              case 5:\n                results = _context.sent;\n\n                if (Object(lodash__WEBPACK_IMPORTED_MODULE_12__[\"isError\"])(results)) {\n                  dispatch({\n                    type: TRIGGER_NOTICE,\n                    payload: {\n                      id: Object(uuidv4__WEBPACK_IMPORTED_MODULE_13__[\"uuid\"])(),\n                      type: 'error',\n                      message: results.message\n                    }\n                  });\n                } else {\n                  dispatch({\n                    type: TRIGGER_NOTICE,\n                    payload: {\n                      id: Object(uuidv4__WEBPACK_IMPORTED_MODULE_13__[\"uuid\"])(),\n                      type: 'success',\n                      message: 'Settings saved.'\n                    }\n                  });\n                }\n\n                dispatch({\n                  type: 'TOGGLE_SAVING'\n                });\n\n              case 8:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function updateData() {\n        return _ref3.apply(this, arguments);\n      };\n    }();\n\n    if (true == appState.saving) {\n      updateData();\n    }\n  }, [appState.saving]);\n  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"])(_PPCContext__WEBPACK_IMPORTED_MODULE_11__[\"default\"].Provider, {\n    value: _objectSpread({\n      dispatch: dispatch\n    }, appState)\n  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"])(_settings_page_SettingsPage__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    title: \"PrePublish Checklist Settings\"\n  }, appState.notices.map(function (item) {\n    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"])(_Notice__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n      key: item.id,\n      id: item.id,\n      type: item.type,\n      message: item.message\n    });\n  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"])(_settings_page_SettingsSection__WEBPACK_IMPORTED_MODULE_8__[\"default\"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"])(_SettingTypes__WEBPACK_IMPORTED_MODULE_9__[\"InputFieldSetting\"], {\n    label: \"Wordcount\",\n    type: \"number\",\n    value: appState.wordcount,\n    onChange: function onChange(e) {\n      dispatch({\n        type: UPDATE_WORDCOUNT,\n        payload: e.target.value\n      });\n    }\n  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"])(_SettingTypes__WEBPACK_IMPORTED_MODULE_9__[\"CheckBoxSetting\"], {\n    label: \"Require a Featured Image\",\n    id: \"featured_image\",\n    value: appState.featuredImage,\n    onChange: function onChange() {\n      return dispatch({\n        type: UPDATE_FEATURED_IMAGE\n      });\n    }\n  }))));\n};\n\nObject(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__[\"render\"])(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"])(App, null), document.querySelector('#extending-gutenberg-settings'));\n\n//# sourceURL=webpack:///./assets/js/settings-page/index.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _arrayLikeToArray(arr, len) {\n  if (len == null || len > arr.length) len = arr.length;\n\n  for (var i = 0, arr2 = new Array(len); i < len; i++) {\n    arr2[i] = arr[i];\n  }\n\n  return arr2;\n}\n\nmodule.exports = _arrayLikeToArray;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/arrayLikeToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _arrayWithHoles(arr) {\n  if (Array.isArray(arr)) return arr;\n}\n\nmodule.exports = _arrayWithHoles;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/arrayWithHoles.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ \"./node_modules/@babel/runtime/helpers/arrayLikeToArray.js\");\n\nfunction _arrayWithoutHoles(arr) {\n  if (Array.isArray(arr)) return arrayLikeToArray(arr);\n}\n\nmodule.exports = _arrayWithoutHoles;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n  try {\n    var info = gen[key](arg);\n    var value = info.value;\n  } catch (error) {\n    reject(error);\n    return;\n  }\n\n  if (info.done) {\n    resolve(value);\n  } else {\n    Promise.resolve(value).then(_next, _throw);\n  }\n}\n\nfunction _asyncToGenerator(fn) {\n  return function () {\n    var self = this,\n        args = arguments;\n    return new Promise(function (resolve, reject) {\n      var gen = fn.apply(self, args);\n\n      function _next(value) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n      }\n\n      function _throw(err) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n      }\n\n      _next(undefined);\n    });\n  };\n}\n\nmodule.exports = _asyncToGenerator;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/asyncToGenerator.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\nmodule.exports = _defineProperty;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/defineProperty.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _iterableToArray(iter) {\n  if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter);\n}\n\nmodule.exports = _iterableToArray;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/iterableToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _iterableToArrayLimit(arr, i) {\n  if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return;\n  var _arr = [];\n  var _n = true;\n  var _d = false;\n  var _e = undefined;\n\n  try {\n    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {\n      _arr.push(_s.value);\n\n      if (i && _arr.length === i) break;\n    }\n  } catch (err) {\n    _d = true;\n    _e = err;\n  } finally {\n    try {\n      if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n    } finally {\n      if (_d) throw _e;\n    }\n  }\n\n  return _arr;\n}\n\nmodule.exports = _iterableToArrayLimit;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _nonIterableRest() {\n  throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\n\nmodule.exports = _nonIterableRest;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/nonIterableRest.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _nonIterableSpread() {\n  throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\n\nmodule.exports = _nonIterableSpread;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/nonIterableSpread.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var objectWithoutPropertiesLoose = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ \"./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js\");\n\nfunction _objectWithoutProperties(source, excluded) {\n  if (source == null) return {};\n  var target = objectWithoutPropertiesLoose(source, excluded);\n  var key, i;\n\n  if (Object.getOwnPropertySymbols) {\n    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);\n\n    for (i = 0; i < sourceSymbolKeys.length; i++) {\n      key = sourceSymbolKeys[i];\n      if (excluded.indexOf(key) >= 0) continue;\n      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;\n      target[key] = source[key];\n    }\n  }\n\n  return target;\n}\n\nmodule.exports = _objectWithoutProperties;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/objectWithoutProperties.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _objectWithoutPropertiesLoose(source, excluded) {\n  if (source == null) return {};\n  var target = {};\n  var sourceKeys = Object.keys(source);\n  var key, i;\n\n  for (i = 0; i < sourceKeys.length; i++) {\n    key = sourceKeys[i];\n    if (excluded.indexOf(key) >= 0) continue;\n    target[key] = source[key];\n  }\n\n  return target;\n}\n\nmodule.exports = _objectWithoutPropertiesLoose;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ \"./node_modules/@babel/runtime/helpers/arrayWithHoles.js\");\n\nvar iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ \"./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js\");\n\nvar unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ \"./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js\");\n\nvar nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ \"./node_modules/@babel/runtime/helpers/nonIterableRest.js\");\n\nfunction _slicedToArray(arr, i) {\n  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();\n}\n\nmodule.exports = _slicedToArray;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/slicedToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ \"./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js\");\n\nvar iterableToArray = __webpack_require__(/*! ./iterableToArray */ \"./node_modules/@babel/runtime/helpers/iterableToArray.js\");\n\nvar unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ \"./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js\");\n\nvar nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ \"./node_modules/@babel/runtime/helpers/nonIterableSpread.js\");\n\nfunction _toConsumableArray(arr) {\n  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();\n}\n\nmodule.exports = _toConsumableArray;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/toConsumableArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ \"./node_modules/@babel/runtime/helpers/arrayLikeToArray.js\");\n\nfunction _unsupportedIterableToArray(o, minLen) {\n  if (!o) return;\n  if (typeof o === \"string\") return arrayLikeToArray(o, minLen);\n  var n = Object.prototype.toString.call(o).slice(8, -1);\n  if (n === \"Object\" && o.constructor) n = o.constructor.name;\n  if (n === \"Map\" || n === \"Set\") return Array.from(o);\n  if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);\n}\n\nmodule.exports = _unsupportedIterableToArray;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js?");

/***/ }),

/***/ "./node_modules/uuidv4/build/lib/uuidv4.js":
/*!*************************************************!*\
  !*** ./node_modules/uuidv4/build/lib/uuidv4.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst uuid_1 = __webpack_require__(/*! uuid */ \"./node_modules/uuidv4/node_modules/uuid/dist/esm-browser/index.js\");\nconst uuidv4 = function () {\n    return uuid_1.v4();\n};\nexports.uuid = uuidv4;\nconst regex = {\n    v4: /(?:^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}$)|(?:^0{8}-0{4}-0{4}-0{4}-0{12}$)/u,\n    v5: /(?:^[a-f0-9]{8}-[a-f0-9]{4}-5[a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}$)|(?:^0{8}-0{4}-0{4}-0{4}-0{12}$)/u\n};\nexports.regex = regex;\nconst isUuid = function (value) {\n    return regex.v4.test(value) || regex.v5.test(value);\n};\nexports.isUuid = isUuid;\nconst empty = function () {\n    return '00000000-0000-0000-0000-000000000000';\n};\nexports.empty = empty;\nconst fromString = function (text) {\n    const namespace = 'bb5d0ffa-9a4c-4d7c-8fc2-0a7d2220ba45';\n    const uuidFromString = uuid_1.v5(text, namespace);\n    return uuidFromString;\n};\nexports.fromString = fromString;\n\n\n//# sourceURL=webpack:///./node_modules/uuidv4/build/lib/uuidv4.js?");

/***/ }),

/***/ "./node_modules/uuidv4/node_modules/uuid/dist/esm-browser/bytesToUuid.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/uuidv4/node_modules/uuid/dist/esm-browser/bytesToUuid.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * Convert array of 16 byte values to UUID string format of the form:\n * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\n */\nvar byteToHex = [];\n\nfor (var i = 0; i < 256; ++i) {\n  byteToHex[i] = (i + 0x100).toString(16).substr(1);\n}\n\nfunction bytesToUuid(buf, offset) {\n  var i = offset || 0;\n  var bth = byteToHex; // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4\n\n  return [bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]]].join('');\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (bytesToUuid);\n\n//# sourceURL=webpack:///./node_modules/uuidv4/node_modules/uuid/dist/esm-browser/bytesToUuid.js?");

/***/ }),

/***/ "./node_modules/uuidv4/node_modules/uuid/dist/esm-browser/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/uuidv4/node_modules/uuid/dist/esm-browser/index.js ***!
  \*************************************************************************/
/*! exports provided: v1, v3, v4, v5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _v1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v1.js */ \"./node_modules/uuidv4/node_modules/uuid/dist/esm-browser/v1.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"v1\", function() { return _v1_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _v3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./v3.js */ \"./node_modules/uuidv4/node_modules/uuid/dist/esm-browser/v3.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"v3\", function() { return _v3_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _v4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./v4.js */ \"./node_modules/uuidv4/node_modules/uuid/dist/esm-browser/v4.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"v4\", function() { return _v4_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _v5_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./v5.js */ \"./node_modules/uuidv4/node_modules/uuid/dist/esm-browser/v5.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"v5\", function() { return _v5_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n\n\n\n\n\n//# sourceURL=webpack:///./node_modules/uuidv4/node_modules/uuid/dist/esm-browser/index.js?");

/***/ }),

/***/ "./node_modules/uuidv4/node_modules/uuid/dist/esm-browser/md5.js":
/*!***********************************************************************!*\
  !*** ./node_modules/uuidv4/node_modules/uuid/dist/esm-browser/md5.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/*\n * Browser-compatible JavaScript MD5\n *\n * Modification of JavaScript MD5\n * https://github.com/blueimp/JavaScript-MD5\n *\n * Copyright 2011, Sebastian Tschan\n * https://blueimp.net\n *\n * Licensed under the MIT license:\n * https://opensource.org/licenses/MIT\n *\n * Based on\n * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message\n * Digest Algorithm, as defined in RFC 1321.\n * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009\n * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet\n * Distributed under the BSD License\n * See http://pajhome.org.uk/crypt/md5 for more info.\n */\nfunction md5(bytes) {\n  if (typeof bytes == 'string') {\n    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape\n\n    bytes = new Array(msg.length);\n\n    for (var i = 0; i < msg.length; i++) {\n      bytes[i] = msg.charCodeAt(i);\n    }\n  }\n\n  return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));\n}\n/*\n * Convert an array of little-endian words to an array of bytes\n */\n\n\nfunction md5ToHexEncodedArray(input) {\n  var i;\n  var x;\n  var output = [];\n  var length32 = input.length * 32;\n  var hexTab = '0123456789abcdef';\n  var hex;\n\n  for (i = 0; i < length32; i += 8) {\n    x = input[i >> 5] >>> i % 32 & 0xff;\n    hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);\n    output.push(hex);\n  }\n\n  return output;\n}\n/*\n * Calculate the MD5 of an array of little-endian words, and a bit length.\n */\n\n\nfunction wordsToMd5(x, len) {\n  /* append padding */\n  x[len >> 5] |= 0x80 << len % 32;\n  x[(len + 64 >>> 9 << 4) + 14] = len;\n  var i;\n  var olda;\n  var oldb;\n  var oldc;\n  var oldd;\n  var a = 1732584193;\n  var b = -271733879;\n  var c = -1732584194;\n  var d = 271733878;\n\n  for (i = 0; i < x.length; i += 16) {\n    olda = a;\n    oldb = b;\n    oldc = c;\n    oldd = d;\n    a = md5ff(a, b, c, d, x[i], 7, -680876936);\n    d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);\n    c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);\n    b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);\n    a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);\n    d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);\n    c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);\n    b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);\n    a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);\n    d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);\n    c = md5ff(c, d, a, b, x[i + 10], 17, -42063);\n    b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);\n    a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);\n    d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);\n    c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);\n    b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);\n    a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);\n    d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);\n    c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);\n    b = md5gg(b, c, d, a, x[i], 20, -373897302);\n    a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);\n    d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);\n    c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);\n    b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);\n    a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);\n    d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);\n    c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);\n    b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);\n    a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);\n    d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);\n    c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);\n    b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);\n    a = md5hh(a, b, c, d, x[i + 5], 4, -378558);\n    d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);\n    c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);\n    b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);\n    a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);\n    d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);\n    c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);\n    b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);\n    a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);\n    d = md5hh(d, a, b, c, x[i], 11, -358537222);\n    c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);\n    b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);\n    a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);\n    d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);\n    c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);\n    b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);\n    a = md5ii(a, b, c, d, x[i], 6, -198630844);\n    d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);\n    c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);\n    b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);\n    a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);\n    d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);\n    c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);\n    b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);\n    a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);\n    d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);\n    c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);\n    b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);\n    a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);\n    d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);\n    c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);\n    b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);\n    a = safeAdd(a, olda);\n    b = safeAdd(b, oldb);\n    c = safeAdd(c, oldc);\n    d = safeAdd(d, oldd);\n  }\n\n  return [a, b, c, d];\n}\n/*\n * Convert an array bytes to an array of little-endian words\n * Characters >255 have their high-byte silently ignored.\n */\n\n\nfunction bytesToWords(input) {\n  var i;\n  var output = [];\n  output[(input.length >> 2) - 1] = undefined;\n\n  for (i = 0; i < output.length; i += 1) {\n    output[i] = 0;\n  }\n\n  var length8 = input.length * 8;\n\n  for (i = 0; i < length8; i += 8) {\n    output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;\n  }\n\n  return output;\n}\n/*\n * Add integers, wrapping at 2^32. This uses 16-bit operations internally\n * to work around bugs in some JS interpreters.\n */\n\n\nfunction safeAdd(x, y) {\n  var lsw = (x & 0xffff) + (y & 0xffff);\n  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);\n  return msw << 16 | lsw & 0xffff;\n}\n/*\n * Bitwise rotate a 32-bit number to the left.\n */\n\n\nfunction bitRotateLeft(num, cnt) {\n  return num << cnt | num >>> 32 - cnt;\n}\n/*\n * These functions implement the four basic operations the algorithm uses.\n */\n\n\nfunction md5cmn(q, a, b, x, s, t) {\n  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);\n}\n\nfunction md5ff(a, b, c, d, x, s, t) {\n  return md5cmn(b & c | ~b & d, a, b, x, s, t);\n}\n\nfunction md5gg(a, b, c, d, x, s, t) {\n  return md5cmn(b & d | c & ~d, a, b, x, s, t);\n}\n\nfunction md5hh(a, b, c, d, x, s, t) {\n  return md5cmn(b ^ c ^ d, a, b, x, s, t);\n}\n\nfunction md5ii(a, b, c, d, x, s, t) {\n  return md5cmn(c ^ (b | ~d), a, b, x, s, t);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (md5);\n\n//# sourceURL=webpack:///./node_modules/uuidv4/node_modules/uuid/dist/esm-browser/md5.js?");

/***/ }),

/***/ "./node_modules/uuidv4/node_modules/uuid/dist/esm-browser/rng.js":
/*!***********************************************************************!*\
  !*** ./node_modules/uuidv4/node_modules/uuid/dist/esm-browser/rng.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return rng; });\n// Unique ID creation requires a high quality random # generator. In the browser we therefore\n// require the crypto API and do not support built-in fallback to lower quality random number\n// generators (like Math.random()).\n// getRandomValues needs to be invoked in a context where \"this\" is a Crypto implementation. Also,\n// find the complete implementation of crypto (msCrypto) on IE11.\nvar getRandomValues = typeof crypto != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto != 'undefined' && typeof msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto);\nvar rnds8 = new Uint8Array(16); // eslint-disable-line no-undef\n\nfunction rng() {\n  if (!getRandomValues) {\n    throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');\n  }\n\n  return getRandomValues(rnds8);\n}\n\n//# sourceURL=webpack:///./node_modules/uuidv4/node_modules/uuid/dist/esm-browser/rng.js?");

/***/ }),

/***/ "./node_modules/uuidv4/node_modules/uuid/dist/esm-browser/sha1.js":
/*!************************************************************************!*\
  !*** ./node_modules/uuidv4/node_modules/uuid/dist/esm-browser/sha1.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Adapted from Chris Veness' SHA1 code at\n// http://www.movable-type.co.uk/scripts/sha1.html\nfunction f(s, x, y, z) {\n  switch (s) {\n    case 0:\n      return x & y ^ ~x & z;\n\n    case 1:\n      return x ^ y ^ z;\n\n    case 2:\n      return x & y ^ x & z ^ y & z;\n\n    case 3:\n      return x ^ y ^ z;\n  }\n}\n\nfunction ROTL(x, n) {\n  return x << n | x >>> 32 - n;\n}\n\nfunction sha1(bytes) {\n  var K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];\n  var H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];\n\n  if (typeof bytes == 'string') {\n    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape\n\n    bytes = new Array(msg.length);\n\n    for (var i = 0; i < msg.length; i++) {\n      bytes[i] = msg.charCodeAt(i);\n    }\n  }\n\n  bytes.push(0x80);\n  var l = bytes.length / 4 + 2;\n  var N = Math.ceil(l / 16);\n  var M = new Array(N);\n\n  for (var i = 0; i < N; i++) {\n    M[i] = new Array(16);\n\n    for (var j = 0; j < 16; j++) {\n      M[i][j] = bytes[i * 64 + j * 4] << 24 | bytes[i * 64 + j * 4 + 1] << 16 | bytes[i * 64 + j * 4 + 2] << 8 | bytes[i * 64 + j * 4 + 3];\n    }\n  }\n\n  M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);\n  M[N - 1][14] = Math.floor(M[N - 1][14]);\n  M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;\n\n  for (var i = 0; i < N; i++) {\n    var W = new Array(80);\n\n    for (var t = 0; t < 16; t++) {\n      W[t] = M[i][t];\n    }\n\n    for (var t = 16; t < 80; t++) {\n      W[t] = ROTL(W[t - 3] ^ W[t - 8] ^ W[t - 14] ^ W[t - 16], 1);\n    }\n\n    var a = H[0];\n    var b = H[1];\n    var c = H[2];\n    var d = H[3];\n    var e = H[4];\n\n    for (var t = 0; t < 80; t++) {\n      var s = Math.floor(t / 20);\n      var T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[t] >>> 0;\n      e = d;\n      d = c;\n      c = ROTL(b, 30) >>> 0;\n      b = a;\n      a = T;\n    }\n\n    H[0] = H[0] + a >>> 0;\n    H[1] = H[1] + b >>> 0;\n    H[2] = H[2] + c >>> 0;\n    H[3] = H[3] + d >>> 0;\n    H[4] = H[4] + e >>> 0;\n  }\n\n  return [H[0] >> 24 & 0xff, H[0] >> 16 & 0xff, H[0] >> 8 & 0xff, H[0] & 0xff, H[1] >> 24 & 0xff, H[1] >> 16 & 0xff, H[1] >> 8 & 0xff, H[1] & 0xff, H[2] >> 24 & 0xff, H[2] >> 16 & 0xff, H[2] >> 8 & 0xff, H[2] & 0xff, H[3] >> 24 & 0xff, H[3] >> 16 & 0xff, H[3] >> 8 & 0xff, H[3] & 0xff, H[4] >> 24 & 0xff, H[4] >> 16 & 0xff, H[4] >> 8 & 0xff, H[4] & 0xff];\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (sha1);\n\n//# sourceURL=webpack:///./node_modules/uuidv4/node_modules/uuid/dist/esm-browser/sha1.js?");

/***/ }),

/***/ "./node_modules/uuidv4/node_modules/uuid/dist/esm-browser/v1.js":
/*!**********************************************************************!*\
  !*** ./node_modules/uuidv4/node_modules/uuid/dist/esm-browser/v1.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ \"./node_modules/uuidv4/node_modules/uuid/dist/esm-browser/rng.js\");\n/* harmony import */ var _bytesToUuid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bytesToUuid.js */ \"./node_modules/uuidv4/node_modules/uuid/dist/esm-browser/bytesToUuid.js\");\n\n // **`v1()` - Generate time-based UUID**\n//\n// Inspired by https://github.com/LiosK/UUID.js\n// and http://docs.python.org/library/uuid.html\n\nvar _nodeId;\n\nvar _clockseq; // Previous uuid creation time\n\n\nvar _lastMSecs = 0;\nvar _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details\n\nfunction v1(options, buf, offset) {\n  var i = buf && offset || 0;\n  var b = buf || [];\n  options = options || {};\n  var node = options.node || _nodeId;\n  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not\n  // specified.  We do this lazily to minimize issues related to insufficient\n  // system entropy.  See #189\n\n  if (node == null || clockseq == null) {\n    var seedBytes = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n    if (node == null) {\n      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)\n      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];\n    }\n\n    if (clockseq == null) {\n      // Per 4.2.2, randomize (14 bit) clockseq\n      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;\n    }\n  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,\n  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so\n  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'\n  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.\n\n\n  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime(); // Per 4.2.1.2, use count of uuid's generated during the current clock\n  // cycle to simulate higher resolution clock\n\n  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)\n\n  var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression\n\n  if (dt < 0 && options.clockseq === undefined) {\n    clockseq = clockseq + 1 & 0x3fff;\n  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new\n  // time interval\n\n\n  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {\n    nsecs = 0;\n  } // Per 4.2.1.2 Throw error if too many uuids are requested\n\n\n  if (nsecs >= 10000) {\n    throw new Error(\"uuid.v1(): Can't create more than 10M uuids/sec\");\n  }\n\n  _lastMSecs = msecs;\n  _lastNSecs = nsecs;\n  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch\n\n  msecs += 12219292800000; // `time_low`\n\n  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;\n  b[i++] = tl >>> 24 & 0xff;\n  b[i++] = tl >>> 16 & 0xff;\n  b[i++] = tl >>> 8 & 0xff;\n  b[i++] = tl & 0xff; // `time_mid`\n\n  var tmh = msecs / 0x100000000 * 10000 & 0xfffffff;\n  b[i++] = tmh >>> 8 & 0xff;\n  b[i++] = tmh & 0xff; // `time_high_and_version`\n\n  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version\n\n  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)\n\n  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`\n\n  b[i++] = clockseq & 0xff; // `node`\n\n  for (var n = 0; n < 6; ++n) {\n    b[i + n] = node[n];\n  }\n\n  return buf ? buf : Object(_bytesToUuid_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(b);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (v1);\n\n//# sourceURL=webpack:///./node_modules/uuidv4/node_modules/uuid/dist/esm-browser/v1.js?");

/***/ }),

/***/ "./node_modules/uuidv4/node_modules/uuid/dist/esm-browser/v3.js":
/*!**********************************************************************!*\
  !*** ./node_modules/uuidv4/node_modules/uuid/dist/esm-browser/v3.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v35.js */ \"./node_modules/uuidv4/node_modules/uuid/dist/esm-browser/v35.js\");\n/* harmony import */ var _md5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./md5.js */ \"./node_modules/uuidv4/node_modules/uuid/dist/esm-browser/md5.js\");\n\n\nvar v3 = Object(_v35_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('v3', 0x30, _md5_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (v3);\n\n//# sourceURL=webpack:///./node_modules/uuidv4/node_modules/uuid/dist/esm-browser/v3.js?");

/***/ }),

/***/ "./node_modules/uuidv4/node_modules/uuid/dist/esm-browser/v35.js":
/*!***********************************************************************!*\
  !*** ./node_modules/uuidv4/node_modules/uuid/dist/esm-browser/v35.js ***!
  \***********************************************************************/
/*! exports provided: DNS, URL, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DNS\", function() { return DNS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"URL\", function() { return URL; });\n/* harmony import */ var _bytesToUuid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bytesToUuid.js */ \"./node_modules/uuidv4/node_modules/uuid/dist/esm-browser/bytesToUuid.js\");\n\n\nfunction uuidToBytes(uuid) {\n  // Note: We assume we're being passed a valid uuid string\n  var bytes = [];\n  uuid.replace(/[a-fA-F0-9]{2}/g, function (hex) {\n    bytes.push(parseInt(hex, 16));\n  });\n  return bytes;\n}\n\nfunction stringToBytes(str) {\n  str = unescape(encodeURIComponent(str)); // UTF8 escape\n\n  var bytes = new Array(str.length);\n\n  for (var i = 0; i < str.length; i++) {\n    bytes[i] = str.charCodeAt(i);\n  }\n\n  return bytes;\n}\n\nvar DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';\nvar URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (name, version, hashfunc) {\n  var generateUUID = function generateUUID(value, namespace, buf, offset) {\n    var off = buf && offset || 0;\n    if (typeof value == 'string') value = stringToBytes(value);\n    if (typeof namespace == 'string') namespace = uuidToBytes(namespace);\n    if (!Array.isArray(value)) throw TypeError('value must be an array of bytes');\n    if (!Array.isArray(namespace) || namespace.length !== 16) throw TypeError('namespace must be uuid string or an Array of 16 byte values'); // Per 4.3\n\n    var bytes = hashfunc(namespace.concat(value));\n    bytes[6] = bytes[6] & 0x0f | version;\n    bytes[8] = bytes[8] & 0x3f | 0x80;\n\n    if (buf) {\n      for (var idx = 0; idx < 16; ++idx) {\n        buf[off + idx] = bytes[idx];\n      }\n    }\n\n    return buf || Object(_bytesToUuid_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(bytes);\n  }; // Function#name is not settable on some platforms (#270)\n\n\n  try {\n    generateUUID.name = name;\n  } catch (err) {} // For CommonJS default export support\n\n\n  generateUUID.DNS = DNS;\n  generateUUID.URL = URL;\n  return generateUUID;\n});\n\n//# sourceURL=webpack:///./node_modules/uuidv4/node_modules/uuid/dist/esm-browser/v35.js?");

/***/ }),

/***/ "./node_modules/uuidv4/node_modules/uuid/dist/esm-browser/v4.js":
/*!**********************************************************************!*\
  !*** ./node_modules/uuidv4/node_modules/uuid/dist/esm-browser/v4.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ \"./node_modules/uuidv4/node_modules/uuid/dist/esm-browser/rng.js\");\n/* harmony import */ var _bytesToUuid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bytesToUuid.js */ \"./node_modules/uuidv4/node_modules/uuid/dist/esm-browser/bytesToUuid.js\");\n\n\n\nfunction v4(options, buf, offset) {\n  var i = buf && offset || 0;\n\n  if (typeof options == 'string') {\n    buf = options === 'binary' ? new Array(16) : null;\n    options = null;\n  }\n\n  options = options || {};\n  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`\n\n  rnds[6] = rnds[6] & 0x0f | 0x40;\n  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided\n\n  if (buf) {\n    for (var ii = 0; ii < 16; ++ii) {\n      buf[i + ii] = rnds[ii];\n    }\n  }\n\n  return buf || Object(_bytesToUuid_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(rnds);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (v4);\n\n//# sourceURL=webpack:///./node_modules/uuidv4/node_modules/uuid/dist/esm-browser/v4.js?");

/***/ }),

/***/ "./node_modules/uuidv4/node_modules/uuid/dist/esm-browser/v5.js":
/*!**********************************************************************!*\
  !*** ./node_modules/uuidv4/node_modules/uuid/dist/esm-browser/v5.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v35.js */ \"./node_modules/uuidv4/node_modules/uuid/dist/esm-browser/v35.js\");\n/* harmony import */ var _sha1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sha1.js */ \"./node_modules/uuidv4/node_modules/uuid/dist/esm-browser/sha1.js\");\n\n\nvar v5 = Object(_v35_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('v5', 0x50, _sha1_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (v5);\n\n//# sourceURL=webpack:///./node_modules/uuidv4/node_modules/uuid/dist/esm-browser/v5.js?");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!**********************************************!*\
  !*** external {"this":"regeneratorRuntime"} ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() { module.exports = this[\"regeneratorRuntime\"]; }());\n\n//# sourceURL=webpack:///external_%7B%22this%22:%22regeneratorRuntime%22%7D?");

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() { module.exports = this[\"wp\"][\"element\"]; }());\n\n//# sourceURL=webpack:///external_%7B%22this%22:%5B%22wp%22,%22element%22%5D%7D?");

/***/ }),

/***/ "lodash":
/*!**********************************!*\
  !*** external {"this":"lodash"} ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() { module.exports = this[\"lodash\"]; }());\n\n//# sourceURL=webpack:///external_%7B%22this%22:%22lodash%22%7D?");

/***/ })

/******/ });