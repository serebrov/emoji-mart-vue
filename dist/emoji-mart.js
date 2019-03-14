(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("../../../data/all.json"), require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["../../../data/all.json", "vue"], factory);
	else if(typeof exports === 'object')
		exports["EmojiMart"] = factory(require("../../../data/all.json"), require("vue"));
	else
		root["EmojiMart"] = factory(root["../../../data/all.json"], root["Vue"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__data_all_json__, __WEBPACK_EXTERNAL_MODULE_vue__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../data/all.json":
/*!*****************************************!*\
  !*** external "../../../data/all.json" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__data_all_json__;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectSpread.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectSpread.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

module.exports = _objectSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/anchors.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/anchors.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _svgs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../svgs */ "./src/svgs/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    i18n: {
      type: Object,
      required: true
    },
    color: {
      type: String
    },
    categories: {
      type: Array,
      required: true
    },
    activeCategory: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  created: function created() {
    this.svgs = _svgs__WEBPACK_IMPORTED_MODULE_0__["default"];
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/category.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/category.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_emoji_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/emoji-data */ "./src/utils/emoji-data.js");
/* harmony import */ var _emoji_nimbleEmoji__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emoji/nimbleEmoji */ "./src/components/emoji/nimbleEmoji.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    data: {
      type: Object,
      required: true
    },
    i18n: {
      type: Object,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    emojis: {
      type: Array
    },
    emojiProps: {
      type: Object,
      required: true
    }
  },
  computed: {
    isVisible: function isVisible() {
      return !!this.emojis;
    },
    isSearch: function isSearch() {
      return this.name == 'Search';
    },
    hasResults: function hasResults() {
      return this.emojis.length > 0;
    },
    emojiObjects: function emojiObjects() {
      var _this = this;

      return this.emojis.map(function (emoji) {
        var emojiObject = emoji;
        var emojiView = new _utils_emoji_data__WEBPACK_IMPORTED_MODULE_0__["EmojiView"](emoji, _this.emojiProps.skin, _this.emojiProps.set, _this.emojiProps.native, _this.emojiProps.fallback, _this.emojiProps.emojiTooltip, _this.emojiProps.emojiSize);
        return {
          emojiObject: emojiObject,
          emojiView: emojiView
        };
      });
    }
  },
  components: {
    NimbleEmoji: _emoji_nimbleEmoji__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/emoji/emoji.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/emoji/emoji.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_all_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../data/all.json */ "../../../data/all.json");
/* harmony import */ var _data_all_json__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_data_all_json__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/data */ "./src/utils/data.js");
/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_utils_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_emoji_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/emoji-data */ "./src/utils/emoji-data.js");
/* harmony import */ var _nimbleEmoji__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nimbleEmoji */ "./src/components/emoji/nimbleEmoji.vue");
/* harmony import */ var _utils_shared_props__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/shared-props */ "./src/utils/shared-props.js");






/* harmony default export */ __webpack_exports__["default"] = ({
  functional: true,
  props: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, _utils_shared_props__WEBPACK_IMPORTED_MODULE_5__["EmojiProps"], {
    data: {
      type: Object,
      default: function _default() {
        var index = new _utils_emoji_data__WEBPACK_IMPORTED_MODULE_3__["EmojiIndex"](_data_all_json__WEBPACK_IMPORTED_MODULE_1___default.a);
        return index;
      }
    }
  }),
  render: function render(h, ctx) {
    var data = ctx.data,
        props = ctx.props,
        children = ctx.children;
    return h(_nimbleEmoji__WEBPACK_IMPORTED_MODULE_4__["default"], _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, data, {
      props: props
    }), children);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/emoji/nimbleEmoji.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/emoji/nimbleEmoji.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_shared_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/shared-props */ "./src/utils/shared-props.js");
/* harmony import */ var _utils_emoji_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/emoji-data */ "./src/utils/emoji-data.js");

//
//
//
//
//
//
//
//


var SHEET_COLUMNS = 52;
/* harmony default export */ __webpack_exports__["default"] = ({
  props: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, _utils_shared_props__WEBPACK_IMPORTED_MODULE_1__["EmojiProps"], {
    data: {
      type: Object,
      required: true
    }
  }),
  computed: {
    view: function view() {
      return new _utils_emoji_data__WEBPACK_IMPORTED_MODULE_2__["EmojiView"](this.emojiObject, this.skin, this.set, this.native, this.fallback);
    },
    sanitizedData: function sanitizedData() {
      return this.emojiObject._sanitized;
    },
    title: function title() {
      return this.tooltip ? this.emojiObject.short_name : null;
    },
    emojiObject: function emojiObject() {
      if (typeof this.emoji == "string") {
        return this.data.emoji(this.emoji);
      } else {
        return this.emoji;
      }
    }
  },
  created: function created() {},
  methods: {
    onClick: function onClick() {
      this.$emit('click', this.emojiObject);
    },
    onMouseEnter: function onMouseEnter() {
      this.$emit('mouseenter', this.emojiObject);
    },
    onMouseLeave: function onMouseLeave() {
      this.$emit('mouseleave', this.emojiObject);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/picker/nimblePicker.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/picker/nimblePicker.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vendor_raf_polyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../vendor/raf-polyfill */ "./src/vendor/raf-polyfill.js");
/* harmony import */ var _vendor_raf_polyfill__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_vendor_raf_polyfill__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/store */ "./src/utils/store.js");
/* harmony import */ var _utils_frequently__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/frequently */ "./src/utils/frequently.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");
/* harmony import */ var _utils_shared_props__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/shared-props */ "./src/utils/shared-props.js");
/* harmony import */ var _anchors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../anchors */ "./src/components/anchors.vue");
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../category */ "./src/components/category.vue");
/* harmony import */ var _preview__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../preview */ "./src/components/preview.vue");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../search */ "./src/components/search.vue");
/* harmony import */ var vue_virtual_scroller__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vue-virtual-scroller */ "./node_modules/vue-virtual-scroller/dist/vue-virtual-scroller.esm.js");
/* harmony import */ var vue_virtual_scroller_dist_vue_virtual_scroller_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vue-virtual-scroller/dist/vue-virtual-scroller.css */ "./node_modules/vue-virtual-scroller/dist/vue-virtual-scroller.css");
/* harmony import */ var vue_virtual_scroller_dist_vue_virtual_scroller_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(vue_virtual_scroller_dist_vue_virtual_scroller_css__WEBPACK_IMPORTED_MODULE_12__);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//











var I18N = {
  search: 'Search',
  notfound: 'No Emoji Found',
  categories: {
    search: 'Search Results',
    recent: 'Frequently Used',
    people: 'Smileys & People',
    nature: 'Animals & Nature',
    foods: 'Food & Drink',
    activity: 'Activity',
    places: 'Travel & Places',
    objects: 'Objects',
    symbols: 'Symbols',
    flags: 'Flags',
    custom: 'Custom'
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  props: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, _utils_shared_props__WEBPACK_IMPORTED_MODULE_6__["PickerProps"], {
    data: {
      type: Object,
      required: true
    }
  }),
  data: function data() {
    return {
      activeSkin: this.skin || _utils_store__WEBPACK_IMPORTED_MODULE_3__["default"].get('skin') || this.defaultSkin,
      activeCategory: null,
      previewEmoji: null,
      searchEmojis: null
    };
  },
  computed: {
    customStyles: function customStyles() {
      return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({
        width: this.calculateWidth + 'px'
      }, this.pickerStyles);
    },
    emojiProps: function emojiProps() {
      return {
        native: this.native,
        skin: this.activeSkin,
        set: this.set,
        emojiTooltip: this.emojiTooltip,
        emojiSize: this.emojiSize,
        onEnter: this.onEmojiEnter.bind(this),
        onLeave: this.onEmojiLeave.bind(this),
        onClick: this.onEmojiClick.bind(this)
      };
    },
    skinProps: function skinProps() {
      return {
        skin: this.activeSkin
      };
    },
    calculateWidth: function calculateWidth() {
      return this.perLine * (this.emojiSize + 12) + 12 + 2 + Object(_utils__WEBPACK_IMPORTED_MODULE_5__["measureScrollbar"])();
    },
    scrollerCategories: function scrollerCategories() {
      var _this = this;

      var id = 0;
      return this.categories.map(function (category) {
        return {
          'id': id++,
          'category': category,
          'show': !_this.searchEmojis && (_this.infiniteScroll || category == _this.activeCategory),
          'mergedI18n': _this.mergedI18n,
          'data': _this.data,
          'emojisLength': category.emojis.length,
          'emojiProps': _this.emojiProps
        };
      });
    },
    mergedI18n: function mergedI18n() {
      return Object.freeze(Object(_utils__WEBPACK_IMPORTED_MODULE_5__["deepMerge"])(I18N, this.i18n));
    },
    idleEmoji: function idleEmoji() {
      return this.data.emoji(this.emoji);
    }
  },
  created: function created() {
    var _this$categories;

    this.categories = [];

    (_this$categories = this.categories).push.apply(_this$categories, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(this.data.categories()));

    this.categories = this.categories.filter(function (category) {
      return category.emojis.length > 0;
    });
    this.categories[0].first = true;
    Object.freeze(this.categories);
    this.activeCategory = this.categories[0];
    this.skipScrollUpdate = false;
  },
  methods: {
    onScrollUpdate: function onScrollUpdate(startIndex, endIndex) {
      if (this.skipScrollUpdate) {
        this.skipScrollUpdate = false;
      } else {
        this.activeCategory = this.categories[endIndex - 1];
      }
    },
    onAnchorClick: function onAnchorClick(category) {
      var i = this.categories.indexOf(category);
      this.$refs.dynScroller.scrollToItem(i);
      this.activeCategory = this.categories[i];
      this.skipScrollUpdate = true;
    },
    onSearch: function onSearch(value) {
      var emojis = this.data.search(value, this.maxSearchResults);
      this.searchEmojis = emojis;
    },
    onEmojiEnter: function onEmojiEnter(emoji) {
      this.previewEmoji = emoji;
    },
    onEmojiLeave: function onEmojiLeave(emoji) {
      this.previewEmoji = null;
    },
    onEmojiClick: function onEmojiClick(emoji) {
      this.$emit('select', emoji);
      _utils_frequently__WEBPACK_IMPORTED_MODULE_4__["default"].add(emoji);
    },
    onSkinChange: function onSkinChange(skin) {
      this.activeSkin = skin;
      _utils_store__WEBPACK_IMPORTED_MODULE_3__["default"].update({
        skin: skin
      });
      this.$emit('skin-change', skin);
    }
  },
  components: {
    Anchors: _anchors__WEBPACK_IMPORTED_MODULE_7__["default"],
    Category: _category__WEBPACK_IMPORTED_MODULE_8__["default"],
    Preview: _preview__WEBPACK_IMPORTED_MODULE_9__["default"],
    Search: _search__WEBPACK_IMPORTED_MODULE_10__["default"],
    DynamicScroller: vue_virtual_scroller__WEBPACK_IMPORTED_MODULE_11__["DynamicScroller"],
    DynamicScrollerItem: vue_virtual_scroller__WEBPACK_IMPORTED_MODULE_11__["DynamicScrollerItem"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/picker/picker.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/picker/picker.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_all_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../data/all.json */ "../../../data/all.json");
/* harmony import */ var _data_all_json__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_data_all_json__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_emoji_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/emoji-data */ "./src/utils/emoji-data.js");
/* harmony import */ var _nimblePicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nimblePicker */ "./src/components/picker/nimblePicker.vue");
/* harmony import */ var _utils_shared_props__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/shared-props */ "./src/utils/shared-props.js");





var index = new _utils_emoji_data__WEBPACK_IMPORTED_MODULE_2__["EmojiIndex"](_data_all_json__WEBPACK_IMPORTED_MODULE_1___default.a);
/* harmony default export */ __webpack_exports__["default"] = ({
  functional: true,
  props: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, _utils_shared_props__WEBPACK_IMPORTED_MODULE_4__["PickerProps"], {
    data: {
      type: Object,
      default: function _default() {
        return index;
      }
    }
  }),
  render: function render(h, ctx) {
    var data = ctx.data,
        props = ctx.props,
        children = ctx.children;
    return h(_nimblePicker__WEBPACK_IMPORTED_MODULE_3__["default"], _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, data, {
      props: props
    }), children);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/preview.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/preview.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emoji_nimbleEmoji__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emoji/nimbleEmoji */ "./src/components/emoji/nimbleEmoji.vue");
/* harmony import */ var _skins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./skins */ "./src/components/skins.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    data: {
      type: Object,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    emoji: {
      type: [String, Object]
    },
    idleEmoji: {
      type: [String, Object],
      required: true
    },
    showSkinTones: {
      type: Boolean,
      default: true
    },
    emojiProps: {
      type: Object,
      required: true
    },
    skinProps: {
      type: Object,
      required: true
    },
    onSkinChange: {
      type: Function,
      required: true
    }
  },
  computed: {
    emojiData: function emojiData() {
      if (this.emoji) {
        return this.emoji;
      } else {
        return {};
      }
    },
    emojiShortNames: function emojiShortNames() {
      return this.emojiData.short_names;
    },
    emojiEmoticons: function emojiEmoticons() {
      return this.emojiData.emoticons;
    }
  },
  components: {
    NimbleEmoji: _emoji_nimbleEmoji__WEBPACK_IMPORTED_MODULE_0__["default"],
    Skins: _skins__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/search.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/search.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    data: {
      type: Object,
      required: true
    },
    i18n: {
      type: Object,
      required: true
    },
    autoFocus: {
      type: Boolean,
      default: false
    },
    onSearch: {
      type: Function,
      required: true
    }
  },
  data: function data() {
    return {
      value: ''
    };
  },
  computed: {
    emojiIndex: function emojiIndex() {
      return this.data;
    }
  },
  watch: {
    value: function value() {
      this.$emit('search', this.value);
    }
  },
  methods: {
    clear: function clear() {
      this.value = '';
    }
  },
  mounted: function mounted() {
    var $input = this.$el.querySelector('input');

    if (this.autoFocus) {
      $input.focus();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/skins.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/skins.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    skin: {
      type: Number,
      required: true
    }
  },
  data: function data() {
    return {
      opened: false
    };
  },
  methods: {
    onClick: function onClick(skinTone) {
      if (this.opened) {
        if (skinTone != this.skin) {
          this.$emit('change', skinTone);
        }
      }

      this.opened = !this.opened;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js!./node_modules/vue-virtual-scroller/dist/vue-virtual-scroller.css":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src!./node_modules/vue-virtual-scroller/dist/vue-virtual-scroller.css ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".vue-recycle-scroller{position:relative}.vue-recycle-scroller.direction-vertical:not(.page-mode){overflow-y:auto}.vue-recycle-scroller.direction-horizontal:not(.page-mode){overflow-x:auto}.vue-recycle-scroller.direction-horizontal{display:-ms-flexbox;display:flex}.vue-recycle-scroller__slot{-ms-flex:auto 0 0px;flex:auto 0 0}.vue-recycle-scroller__item-wrapper{-ms-flex:1;flex:1;box-sizing:border-box;overflow:hidden;position:relative}.vue-recycle-scroller.ready .vue-recycle-scroller__item-view{position:absolute;top:0;left:0;will-change:transform}.vue-recycle-scroller.direction-vertical .vue-recycle-scroller__item-wrapper{width:100%}.vue-recycle-scroller.direction-horizontal .vue-recycle-scroller__item-wrapper{height:100%}.vue-recycle-scroller.ready.direction-vertical .vue-recycle-scroller__item-view{width:100%}.vue-recycle-scroller.ready.direction-horizontal .vue-recycle-scroller__item-view{height:100%}.resize-observer[data-v-b329ee4c]{position:absolute;top:0;left:0;z-index:-1;width:100%;height:100%;border:none;background-color:transparent;pointer-events:none;display:block;overflow:hidden;opacity:0}.resize-observer[data-v-b329ee4c] object{display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/anchors.vue?vue&type=template&id=51188104&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/anchors.vue?vue&type=template&id=51188104& ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "emoji-mart-anchors" },
    _vm._l(_vm.categories, function(category) {
      return _c(
        "span",
        {
          key: category.id,
          class: {
            "emoji-mart-anchor": true,
            "emoji-mart-anchor-selected": category.id == _vm.activeCategory.id
          },
          style: {
            color: category.id == _vm.activeCategory.id ? _vm.color : ""
          },
          attrs: { "data-title": _vm.i18n.categories[category.id] },
          on: {
            click: function($event) {
              return _vm.$emit("click", category)
            }
          }
        },
        [
          _c("div", { domProps: { innerHTML: _vm._s(_vm.svgs[category.id]) } }),
          _vm._v(" "),
          _c("span", {
            staticClass: "emoji-mart-anchor-bar",
            style: { backgroundColor: _vm.color }
          })
        ]
      )
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/category.vue?vue&type=template&id=376cda0e&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/category.vue?vue&type=template&id=376cda0e& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.isVisible && (_vm.isSearch || _vm.hasResults)
    ? _c(
        "div",
        {
          class: {
            "emoji-mart-category": true,
            "emoji-mart-no-results": !_vm.hasResults
          }
        },
        [
          _c("div", { staticClass: "emoji-mart-category-label" }, [
            _c("span", [_vm._v(_vm._s(_vm.i18n.categories[_vm.id]))])
          ]),
          _vm._v(" "),
          _vm._l(_vm.emojiObjects, function(ref) {
            var emojiObject = ref.emojiObject
            var emojiView = ref.emojiView
            return [
              emojiView.canRender
                ? _c(
                    "span",
                    {
                      staticClass: "emoji-mart-emoji",
                      attrs: {
                        "data-title": emojiObject.short_name,
                        title: emojiView.title
                      },
                      on: {
                        mouseenter: function($event) {
                          _vm.emojiProps.onEnter(emojiView.getEmoji())
                        },
                        mouseleave: function($event) {
                          _vm.emojiProps.onLeave(emojiView.getEmoji())
                        },
                        click: function($event) {
                          _vm.emojiProps.onClick(emojiView.getEmoji())
                        }
                      }
                    },
                    [
                      _c(
                        "span",
                        {
                          class: emojiView.cssClass,
                          style: emojiView.cssStyle
                        },
                        [_vm._v(_vm._s(emojiView.content))]
                      )
                    ]
                  )
                : _vm._e()
            ]
          }),
          _vm._v(" "),
          !_vm.hasResults
            ? _c(
                "div",
                [
                  _c("nimble-emoji", {
                    attrs: {
                      data: _vm.data,
                      emoji: "sleuth_or_spy",
                      native: _vm.emojiProps.native,
                      skin: _vm.emojiProps.skin,
                      set: _vm.emojiProps.set
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "emoji-mart-no-results-label" }, [
                    _vm._v(_vm._s(_vm.i18n.notfound))
                  ])
                ],
                1
              )
            : _vm._e()
        ],
        2
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/emoji/nimbleEmoji.vue?vue&type=template&id=7f853594&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/emoji/nimbleEmoji.vue?vue&type=template&id=7f853594& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.view.canRender
    ? _c(
        "span",
        {
          staticClass: "emoji-mart-emoji",
          attrs: { title: _vm.view.title, "data-title": _vm.title },
          on: {
            mouseenter: _vm.onMouseEnter,
            mouseleave: _vm.onMouseLeave,
            click: _vm.onClick
          }
        },
        [
          _c("span", { class: _vm.view.cssClass, style: _vm.view.cssStyle }, [
            _vm._v(_vm._s(_vm.view.content))
          ])
        ]
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/picker/nimblePicker.vue?vue&type=template&id=7bc71df8&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/picker/nimblePicker.vue?vue&type=template&id=7bc71df8& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "emoji-mart", style: _vm.customStyles },
    [
      _vm.showCategories
        ? _c(
            "div",
            { staticClass: "emoji-mart-bar emoji-mart-bar-anchors" },
            [
              _c("anchors", {
                attrs: {
                  data: _vm.data,
                  i18n: _vm.mergedI18n,
                  color: _vm.color,
                  categories: _vm.categories,
                  "active-category": _vm.activeCategory
                },
                on: { click: _vm.onAnchorClick }
              })
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm._t(
        "searchTemplate",
        [
          _vm.showSearch
            ? _c("search", {
                ref: "search",
                attrs: {
                  data: _vm.data,
                  i18n: _vm.mergedI18n,
                  "auto-focus": _vm.autoFocus,
                  "on-search": _vm.onSearch
                },
                on: { search: _vm.onSearch }
              })
            : _vm._e()
        ],
        {
          data: _vm.data,
          i18n: _vm.i18n,
          autoFocus: _vm.autoFocus,
          onSearch: _vm.onSearch
        }
      ),
      _vm._v(" "),
      _c("category", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.searchEmojis,
            expression: "searchEmojis"
          }
        ],
        staticClass: "emoji-mart-search-results",
        attrs: {
          data: _vm.data,
          i18n: _vm.mergedI18n,
          id: "search",
          name: "Search",
          emojis: _vm.searchEmojis,
          "emoji-props": _vm.emojiProps
        }
      }),
      _vm._v(" "),
      _c("DynamicScroller", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: !_vm.searchEmojis,
            expression: "!searchEmojis"
          }
        ],
        ref: "dynScroller",
        staticClass: "scroller",
        attrs: {
          items: _vm.scrollerCategories,
          "min-item-size": 60,
          "emit-update": true
        },
        on: { update: _vm.onScrollUpdate },
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function(ref) {
              var item = ref.item
              var active = ref.active
              var index = ref.index
              return [
                _c(
                  "DynamicScrollerItem",
                  {
                    attrs: { item: item, active: active, "data-index": index }
                  },
                  [
                    _c("category", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: item.show,
                          expression: "item.show"
                        }
                      ],
                      key: item.category.id,
                      ref: "categories",
                      attrs: {
                        data: item.data,
                        i18n: item.mergedI18n,
                        id: item.category.id,
                        name: item.category.name,
                        emojis: item.category.emojis,
                        "emoji-props": item.emojiProps
                      }
                    })
                  ],
                  1
                )
              ]
            }
          }
        ])
      }),
      _vm._v(" "),
      _vm._t(
        "previewTemplate",
        [
          _vm.showPreview
            ? _c(
                "div",
                { staticClass: "emoji-mart-bar emoji-mart-bar-preview" },
                [
                  _c("preview", {
                    attrs: {
                      data: _vm.data,
                      title: _vm.title,
                      emoji: _vm.previewEmoji,
                      "idle-emoji": _vm.idleEmoji,
                      "show-skin-tones": _vm.showSkinTones,
                      "emoji-props": _vm.emojiProps,
                      "skin-props": _vm.skinProps,
                      "on-skin-change": _vm.onSkinChange
                    }
                  })
                ],
                1
              )
            : _vm._e()
        ],
        {
          data: _vm.data,
          title: _vm.title,
          emoji: _vm.previewEmoji,
          idleEmoji: _vm.idleEmoji,
          showSkinTones: _vm.showSkinTones,
          emojiProps: _vm.emojiProps,
          skinProps: _vm.skinProps,
          onSkinChange: _vm.onSkinChange
        }
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/preview.vue?vue&type=template&id=35056c30&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/preview.vue?vue&type=template&id=35056c30& ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "emoji-mart-preview" },
    [
      _vm.emoji
        ? [
            _c(
              "div",
              { staticClass: "emoji-mart-preview-emoji" },
              [
                _c("nimble-emoji", {
                  attrs: {
                    data: _vm.data,
                    emoji: _vm.emoji,
                    native: _vm.emojiProps.native,
                    skin: _vm.emojiProps.skin,
                    set: _vm.emojiProps.set
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "emoji-mart-preview-data" }, [
              _c("div", { staticClass: "emoji-mart-preview-name" }, [
                _vm._v(_vm._s(_vm.emoji.name))
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "emoji-mart-preview-shortnames" },
                _vm._l(_vm.emojiShortNames, function(shortName) {
                  return _c(
                    "span",
                    {
                      key: shortName,
                      staticClass: "emoji-mart-preview-shortname"
                    },
                    [_vm._v(":" + _vm._s(shortName) + ":")]
                  )
                }),
                0
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "emoji-mart-preview-emoticons" },
                _vm._l(_vm.emojiEmoticons, function(emoticon) {
                  return _c(
                    "span",
                    {
                      key: emoticon,
                      staticClass: "emoji-mart-preview-emoticon"
                    },
                    [_vm._v(_vm._s(emoticon))]
                  )
                }),
                0
              )
            ])
          ]
        : [
            _c(
              "div",
              { staticClass: "emoji-mart-preview-emoji" },
              [
                _c("nimble-emoji", {
                  attrs: {
                    data: _vm.data,
                    emoji: _vm.idleEmoji,
                    native: _vm.emojiProps.native,
                    skin: _vm.emojiProps.skin,
                    set: _vm.emojiProps.set
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "emoji-mart-preview-data" }, [
              _c("span", { staticClass: "emoji-mart-title-label" }, [
                _vm._v(_vm._s(_vm.title))
              ])
            ]),
            _vm._v(" "),
            _vm.showSkinTones
              ? _c(
                  "div",
                  { staticClass: "emoji-mart-preview-skins" },
                  [
                    _c("skins", {
                      attrs: { skin: _vm.skinProps.skin },
                      on: {
                        change: function($event) {
                          return _vm.onSkinChange($event)
                        }
                      }
                    })
                  ],
                  1
                )
              : _vm._e()
          ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/search.vue?vue&type=template&id=4ad41bb8&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/search.vue?vue&type=template&id=4ad41bb8& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "emoji-mart-search" }, [
    _c("input", {
      directives: [
        {
          name: "model",
          rawName: "v-model",
          value: _vm.value,
          expression: "value"
        }
      ],
      attrs: { type: "text", placeholder: _vm.i18n.search },
      domProps: { value: _vm.value },
      on: {
        input: function($event) {
          if ($event.target.composing) {
            return
          }
          _vm.value = $event.target.value
        }
      }
    })
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/skins.vue?vue&type=template&id=1c614894&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/skins.vue?vue&type=template&id=1c614894& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      class: {
        "emoji-mart-skin-swatches": true,
        "emoji-mart-skin-swatches-opened": _vm.opened
      }
    },
    _vm._l(6, function(skinTone) {
      return _c(
        "span",
        {
          key: skinTone,
          class: {
            "emoji-mart-skin-swatch": true,
            "emoji-mart-skin-swatch-selected": _vm.skin == skinTone
          }
        },
        [
          _c("span", {
            class: "emoji-mart-skin emoji-mart-skin-tone-" + skinTone,
            on: {
              click: function($event) {
                return _vm.onClick(skinTone)
              }
            }
          })
        ]
      )
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue-style-loader/lib/addStylesClient.js":
/*!**************************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/addStylesClient.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/* harmony import */ var _listToStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listToStyles */ "./node_modules/vue-style-loader/lib/listToStyles.js");
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "./node_modules/vue-style-loader/lib/listToStyles.js":
/*!***********************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/listToStyles.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return listToStyles; });
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),

/***/ "./node_modules/vue-virtual-scroller/dist/vue-virtual-scroller.css":
/*!*************************************************************************!*\
  !*** ./node_modules/vue-virtual-scroller/dist/vue-virtual-scroller.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!../../postcss-loader/src!./vue-virtual-scroller.css */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js!./node_modules/vue-virtual-scroller/dist/vue-virtual-scroller.css");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("04618570", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-virtual-scroller/dist/vue-virtual-scroller.esm.js":
/*!****************************************************************************!*\
  !*** ./node_modules/vue-virtual-scroller/dist/vue-virtual-scroller.esm.js ***!
  \****************************************************************************/
/*! exports provided: RecycleScroller, DynamicScroller, DynamicScrollerItem, IdState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecycleScroller", function() { return RecycleScroller; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicScroller", function() { return DynamicScroller; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicScrollerItem", function() { return DynamicScrollerItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdState", function() { return IdState; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


var config = {
  itemsLimit: 1000
};

function getInternetExplorerVersion() {
	var ua = window.navigator.userAgent;

	var msie = ua.indexOf('MSIE ');
	if (msie > 0) {
		// IE 10 or older => return version number
		return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
	}

	var trident = ua.indexOf('Trident/');
	if (trident > 0) {
		// IE 11 => return version number
		var rv = ua.indexOf('rv:');
		return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
	}

	var edge = ua.indexOf('Edge/');
	if (edge > 0) {
		// Edge (IE 12+) => return version number
		return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
	}

	// other browser
	return -1;
}

var isIE = void 0;

function initCompat() {
	if (!initCompat.init) {
		initCompat.init = true;
		isIE = getInternetExplorerVersion() !== -1;
	}
}

var ResizeObserver = { render: function render() {
		var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "resize-observer", attrs: { "tabindex": "-1" } });
	}, staticRenderFns: [], _scopeId: 'data-v-b329ee4c',
	name: 'resize-observer',

	methods: {
		compareAndNotify: function compareAndNotify() {
			if (this._w !== this.$el.offsetWidth || this._h !== this.$el.offsetHeight) {
				this._w = this.$el.offsetWidth;
				this._h = this.$el.offsetHeight;
				this.$emit('notify');
			}
		},
		addResizeHandlers: function addResizeHandlers() {
			this._resizeObject.contentDocument.defaultView.addEventListener('resize', this.compareAndNotify);
			this.compareAndNotify();
		},
		removeResizeHandlers: function removeResizeHandlers() {
			if (this._resizeObject && this._resizeObject.onload) {
				if (!isIE && this._resizeObject.contentDocument) {
					this._resizeObject.contentDocument.defaultView.removeEventListener('resize', this.compareAndNotify);
				}
				delete this._resizeObject.onload;
			}
		}
	},

	mounted: function mounted() {
		var _this = this;

		initCompat();
		this.$nextTick(function () {
			_this._w = _this.$el.offsetWidth;
			_this._h = _this.$el.offsetHeight;
		});
		var object = document.createElement('object');
		this._resizeObject = object;
		object.setAttribute('aria-hidden', 'true');
		object.setAttribute('tabindex', -1);
		object.onload = this.addResizeHandlers;
		object.type = 'text/html';
		if (isIE) {
			this.$el.appendChild(object);
		}
		object.data = 'about:blank';
		if (!isIE) {
			this.$el.appendChild(object);
		}
	},
	beforeDestroy: function beforeDestroy() {
		this.removeResizeHandlers();
	}
};

// Install the components
function install(Vue$$1) {
	Vue$$1.component('resize-observer', ResizeObserver);
	Vue$$1.component('ResizeObserver', ResizeObserver);
}

// Plugin
var plugin$2 = {
	// eslint-disable-next-line no-undef
	version: "0.4.5",
	install: install
};

// Auto-install
var GlobalVue$1 = null;
if (typeof window !== 'undefined') {
	GlobalVue$1 = window.Vue;
} else if (typeof global !== 'undefined') {
	GlobalVue$1 = global.Vue;
}
if (GlobalVue$1) {
	GlobalVue$1.use(plugin$2);
}

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};





var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();





var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();









































var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

function processOptions(value) {
	var options = void 0;
	if (typeof value === 'function') {
		// Simple options (callback-only)
		options = {
			callback: value
		};
	} else {
		// Options object
		options = value;
	}
	return options;
}

function throttle(callback, delay) {
	var timeout = void 0;
	var lastState = void 0;
	var currentArgs = void 0;
	var throttled = function throttled(state) {
		for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
			args[_key - 1] = arguments[_key];
		}

		currentArgs = args;
		if (timeout && state === lastState) return;
		lastState = state;
		clearTimeout(timeout);
		timeout = setTimeout(function () {
			callback.apply(undefined, [state].concat(toConsumableArray(currentArgs)));
			timeout = 0;
		}, delay);
	};
	throttled._clear = function () {
		clearTimeout(timeout);
	};
	return throttled;
}

function deepEqual(val1, val2) {
	if (val1 === val2) return true;
	if ((typeof val1 === 'undefined' ? 'undefined' : _typeof(val1)) === 'object') {
		for (var key in val1) {
			if (!deepEqual(val1[key], val2[key])) {
				return false;
			}
		}
		return true;
	}
	return false;
}

var VisibilityState = function () {
	function VisibilityState(el, options, vnode) {
		classCallCheck(this, VisibilityState);

		this.el = el;
		this.observer = null;
		this.frozen = false;
		this.createObserver(options, vnode);
	}

	createClass(VisibilityState, [{
		key: 'createObserver',
		value: function createObserver(options, vnode) {
			var _this = this;

			if (this.observer) {
				this.destroyObserver();
			}

			if (this.frozen) return;

			this.options = processOptions(options);

			this.callback = this.options.callback;
			// Throttle
			if (this.callback && this.options.throttle) {
				this.callback = throttle(this.callback, this.options.throttle);
			}

			this.oldResult = undefined;

			this.observer = new IntersectionObserver(function (entries) {
				var entry = entries[0];
				if (_this.callback) {
					// Use isIntersecting if possible because browsers can report isIntersecting as true, but intersectionRatio as 0, when something very slowly enters the viewport.
					var result = entry.isIntersecting && entry.intersectionRatio >= _this.threshold;
					if (result === _this.oldResult) return;
					_this.oldResult = result;
					_this.callback(result, entry);
					if (result && _this.options.once) {
						_this.frozen = true;
						_this.destroyObserver();
					}
				}
			}, this.options.intersection);

			// Wait for the element to be in document
			vnode.context.$nextTick(function () {
				_this.observer.observe(_this.el);
			});
		}
	}, {
		key: 'destroyObserver',
		value: function destroyObserver() {
			if (this.observer) {
				this.observer.disconnect();
				this.observer = null;
			}

			// Cancel throttled call
			if (this.callback && this.callback._clear) {
				this.callback._clear();
				this.callback = null;
			}
		}
	}, {
		key: 'threshold',
		get: function get$$1() {
			return this.options.intersection && this.options.intersection.threshold || 0;
		}
	}]);
	return VisibilityState;
}();

function bind(el, _ref, vnode) {
	var value = _ref.value;

	if (typeof IntersectionObserver === 'undefined') {
		console.warn('[vue-observe-visibility] IntersectionObserver API is not available in your browser. Please install this polyfill: https://github.com/w3c/IntersectionObserver/tree/master/polyfill');
	} else {
		var state = new VisibilityState(el, value, vnode);
		el._vue_visibilityState = state;
	}
}

function update(el, _ref2, vnode) {
	var value = _ref2.value,
	    oldValue = _ref2.oldValue;

	if (deepEqual(value, oldValue)) return;
	var state = el._vue_visibilityState;
	if (state) {
		state.createObserver(value, vnode);
	} else {
		bind(el, { value: value }, vnode);
	}
}

function unbind(el) {
	var state = el._vue_visibilityState;
	if (state) {
		state.destroyObserver();
		delete el._vue_visibilityState;
	}
}

var ObserveVisibility = {
	bind: bind,
	update: update,
	unbind: unbind
};

// Install the components
function install$1(Vue$$1) {
	Vue$$1.directive('observe-visibility', ObserveVisibility);
	/* -- Add more components here -- */
}

/* -- Plugin definition & Auto-install -- */
/* You shouldn't have to modify the code below */

// Plugin
var plugin$4 = {
	// eslint-disable-next-line no-undef
	version: "0.4.3",
	install: install$1
};

// Auto-install
var GlobalVue$2 = null;
if (typeof window !== 'undefined') {
	GlobalVue$2 = window.Vue;
} else if (typeof global !== 'undefined') {
	GlobalVue$2 = global.Vue;
}
if (GlobalVue$2) {
	GlobalVue$2.use(plugin$4);
}

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var scrollparent = createCommonjsModule(function (module) {
(function (root, factory) {
  if (false) {} else if ( true && module.exports) {
    module.exports = factory();
  } else {
    root.Scrollparent = factory();
  }
}(commonjsGlobal, function () {
  var regex = /(auto|scroll)/;

  var parents = function (node, ps) {
    if (node.parentNode === null) { return ps; }

    return parents(node.parentNode, ps.concat([node]));
  };

  var style = function (node, prop) {
    return getComputedStyle(node, null).getPropertyValue(prop);
  };

  var overflow = function (node) {
    return style(node, "overflow") + style(node, "overflow-y") + style(node, "overflow-x");
  };

  var scroll = function (node) {
   return regex.test(overflow(node));
  };

  var scrollParent = function (node) {
    if (!(node instanceof HTMLElement || node instanceof SVGElement)) {
      return ;
    }

    var ps = parents(node.parentNode, []);

    for (var i = 0; i < ps.length; i += 1) {
      if (scroll(ps[i])) {
        return ps[i];
      }
    }

    return document.scrollingElement || document.documentElement;
  };

  return scrollParent;
}));
});

var _typeof$1 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};





var asyncGenerator$1 = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();













var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var props = {
  items: {
    type: Array,
    required: true
  },

  keyField: {
    type: String,
    default: 'id'
  },

  direction: {
    type: String,
    default: 'vertical',
    validator: function validator(value) {
      return ['vertical', 'horizontal'].includes(value);
    }
  }
};

function simpleArray() {
  return this.items.length && _typeof$1(this.items[0]) !== 'object';
}

var supportsPassive = false;

if (typeof window !== 'undefined') {
  supportsPassive = false;
  try {
    var opts = Object.defineProperty({}, 'passive', {
      get: function get() {
        supportsPassive = true;
      }
    });
    window.addEventListener('test', null, opts);
  } catch (e) {}
}

var uid = 0;

var RecycleScroller = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { directives: [{ name: "observe-visibility", rawName: "v-observe-visibility", value: _vm.handleVisibilityChange, expression: "handleVisibilityChange" }], staticClass: "vue-recycle-scroller", class: defineProperty({ ready: _vm.ready, 'page-mode': _vm.pageMode }, 'direction-' + _vm.direction, true), on: { "&scroll": function scroll($event) {
          return _vm.handleScroll($event);
        } } }, [_vm.$slots.before ? _c('div', { staticClass: "vue-recycle-scroller__slot" }, [_vm._t("before")], 2) : _vm._e(), _vm._v(" "), _c('div', { ref: "wrapper", staticClass: "vue-recycle-scroller__item-wrapper", style: defineProperty({}, _vm.direction === 'vertical' ? 'minHeight' : 'minWidth', _vm.totalSize + 'px') }, _vm._l(_vm.pool, function (view) {
      return _c('div', { key: view.nr.id, staticClass: "vue-recycle-scroller__item-view", class: { hover: _vm.hoverKey === view.nr.key }, style: _vm.ready ? { transform: 'translate' + (_vm.direction === 'vertical' ? 'Y' : 'X') + '(' + view.position + 'px)' } : null, on: { "mouseenter": function mouseenter($event) {
            _vm.hoverKey = view.nr.key;
          }, "mouseleave": function mouseleave($event) {
            _vm.hoverKey = null;
          } } }, [_vm._t("default", null, { item: view.item, index: view.nr.index, active: view.nr.used })], 2);
    }), 0), _vm._v(" "), _vm.$slots.after ? _c('div', { staticClass: "vue-recycle-scroller__slot" }, [_vm._t("after")], 2) : _vm._e(), _vm._v(" "), _c('ResizeObserver', { on: { "notify": _vm.handleResize } })], 1);
  }, staticRenderFns: [],
  name: 'RecycleScroller',

  components: {
    ResizeObserver: ResizeObserver
  },

  directives: {
    ObserveVisibility: ObserveVisibility
  },

  props: _extends({}, props, {

    itemSize: {
      type: Number,
      default: null
    },

    minItemSize: {
      type: [Number, String],
      default: null
    },

    sizeField: {
      type: String,
      default: 'size'
    },

    typeField: {
      type: String,
      default: 'type'
    },

    buffer: {
      type: Number,
      default: 200
    },

    pageMode: {
      type: Boolean,
      default: false
    },

    prerender: {
      type: Number,
      default: 0
    },

    emitUpdate: {
      type: Boolean,
      default: false
    }
  }),

  data: function data() {
    return {
      pool: [],
      totalSize: 0,
      ready: false,
      hoverKey: null
    };
  },


  computed: {
    sizes: function sizes() {
      if (this.itemSize === null) {
        var sizes = {
          '-1': { accumulator: 0 }
        };
        var items = this.items;
        var field = this.sizeField;
        var minItemSize = this.minItemSize;
        var accumulator = 0;
        var current = void 0;
        for (var i = 0, l = items.length; i < l; i++) {
          current = items[i][field] || minItemSize;
          accumulator += current;
          sizes[i] = { accumulator: accumulator, size: current };
        }
        return sizes;
      }
      return [];
    },


    simpleArray: simpleArray
  },

  watch: {
    items: function items() {
      this.updateVisibleItems(true);
    },
    pageMode: function pageMode() {
      this.applyPageMode();
      this.updateVisibleItems(false);
    },


    sizes: {
      handler: function handler() {
        this.updateVisibleItems(false);
      },

      deep: true
    }
  },

  created: function created() {
    this.$_startIndex = 0;
    this.$_endIndex = 0;
    this.$_views = new Map();
    this.$_unusedViews = new Map();
    this.$_scrollDirty = false;

    if (this.$isServer) {
      this.updateVisibleItems(false);
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.applyPageMode();
    this.$nextTick(function () {
      _this.updateVisibleItems(true);
      _this.ready = true;
    });
  },
  beforeDestroy: function beforeDestroy() {
    this.removeListeners();
  },


  methods: {
    addView: function addView(pool, index, item, key, type) {
      var view = {
        item: item,
        position: 0
      };
      var nonReactive = {
        id: uid++,
        index: index,
        used: true,
        key: key,
        type: type
      };
      Object.defineProperty(view, 'nr', {
        configurable: false,
        value: nonReactive
      });
      pool.push(view);
      return view;
    },
    unuseView: function unuseView(view) {
      var fake = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var unusedViews = this.$_unusedViews;
      var type = view.nr.type;
      var unusedPool = unusedViews.get(type);
      if (!unusedPool) {
        unusedPool = [];
        unusedViews.set(type, unusedPool);
      }
      unusedPool.push(view);
      if (!fake) {
        view.nr.used = false;
        view.position = -9999;
        this.$_views.delete(view.nr.key);
      }
    },
    handleResize: function handleResize() {
      this.$emit('resize');
      if (this.ready) this.updateVisibleItems(false);
    },
    handleScroll: function handleScroll(event) {
      var _this2 = this;

      if (!this.$_scrollDirty) {
        this.$_scrollDirty = true;
        requestAnimationFrame(function () {
          _this2.$_scrollDirty = false;

          var _updateVisibleItems = _this2.updateVisibleItems(false),
              continuous = _updateVisibleItems.continuous;

          // It seems sometimes chrome doesn't fire scroll event :/
          // When non continous scrolling is ending, we force a refresh


          if (!continuous) {
            clearTimeout(_this2.$_refreshTimout);
            _this2.$_refreshTimout = setTimeout(_this2.handleScroll, 100);
          }
        });
      }
    },
    handleVisibilityChange: function handleVisibilityChange(isVisible, entry) {
      var _this3 = this;

      if (this.ready) {
        if (isVisible || entry.boundingClientRect.width !== 0 || entry.boundingClientRect.height !== 0) {
          this.$emit('visible');
          requestAnimationFrame(function () {
            _this3.updateVisibleItems(false);
          });
        } else {
          this.$emit('hidden');
        }
      }
    },
    updateVisibleItems: function updateVisibleItems(checkItem) {
      var itemSize = this.itemSize;
      var typeField = this.typeField;
      var keyField = this.simpleArray ? null : this.keyField;
      var items = this.items;
      var count = items.length;
      var sizes = this.sizes;
      var views = this.$_views;
      var unusedViews = this.$_unusedViews;
      var pool = this.pool;
      var startIndex = void 0,
          endIndex = void 0;
      var totalSize = void 0;

      if (!count) {
        startIndex = endIndex = totalSize = 0;
      } else if (this.$isServer) {
        startIndex = 0;
        endIndex = this.prerender;
        totalSize = null;
      } else {
        var scroll = this.getScroll();
        var buffer = this.buffer;
        scroll.start -= buffer;
        scroll.end += buffer;

        // Variable size mode
        if (itemSize === null) {
          var h = void 0;
          var a = 0;
          var b = count - 1;
          var i = ~~(count / 2);
          var oldI = void 0;

          // Searching for startIndex
          do {
            oldI = i;
            h = sizes[i].accumulator;
            if (h < scroll.start) {
              a = i;
            } else if (i < count - 1 && sizes[i + 1].accumulator > scroll.start) {
              b = i;
            }
            i = ~~((a + b) / 2);
          } while (i !== oldI);
          i < 0 && (i = 0);
          startIndex = i;

          // For container style
          totalSize = sizes[count - 1].accumulator;

          // Searching for endIndex
          for (endIndex = i; endIndex < count && sizes[endIndex].accumulator < scroll.end; endIndex++) {}
          if (endIndex === -1) {
            endIndex = items.length - 1;
          } else {
            endIndex++;
            // Bounds
            endIndex > count && (endIndex = count);
          }
        } else {
          // Fixed size mode
          startIndex = ~~(scroll.start / itemSize);
          endIndex = Math.ceil(scroll.end / itemSize);

          // Bounds
          startIndex < 0 && (startIndex = 0);
          endIndex > count && (endIndex = count);

          totalSize = count * itemSize;
        }
      }

      if (endIndex - startIndex > config.itemsLimit) {
        this.itemsLimitError();
      }

      this.totalSize = totalSize;

      var view = void 0;

      var continuous = startIndex <= this.$_endIndex && endIndex >= this.$_startIndex;
      var unusedIndex = void 0;

      if (this.$_continuous !== continuous) {
        if (continuous) {
          views.clear();
          unusedViews.clear();
          for (var _i = 0, l = pool.length; _i < l; _i++) {
            view = pool[_i];
            this.unuseView(view);
          }
        }
        this.$_continuous = continuous;
      } else if (continuous) {
        for (var _i2 = 0, _l = pool.length; _i2 < _l; _i2++) {
          view = pool[_i2];
          if (view.nr.used) {
            // Update view item index
            if (checkItem) {
              view.nr.index = items.findIndex(function (item) {
                return keyField ? item[keyField] === view.item[keyField] : item === view.item;
              });
            }

            // Check if index is still in visible range
            if (view.nr.index === -1 || view.nr.index < startIndex || view.nr.index >= endIndex) {
              this.unuseView(view);
            }
          }
        }
      }

      if (!continuous) {
        unusedIndex = new Map();
      }

      var item = void 0,
          type = void 0,
          unusedPool = void 0;
      var v = void 0;
      for (var _i3 = startIndex; _i3 < endIndex; _i3++) {
        item = items[_i3];
        var key = keyField ? item[keyField] : item;
        view = views.get(key);

        if (!itemSize && !sizes[_i3].size) {
          if (view) this.unuseView(view);
          continue;
        }

        // No view assigned to item
        if (!view) {
          type = item[typeField];

          if (continuous) {
            unusedPool = unusedViews.get(type);
            // Reuse existing view
            if (unusedPool && unusedPool.length) {
              view = unusedPool.pop();
              view.item = item;
              view.nr.used = true;
              view.nr.index = _i3;
              view.nr.key = key;
              view.nr.type = type;
            } else {
              view = this.addView(pool, _i3, item, key, type);
            }
          } else {
            unusedPool = unusedViews.get(type);
            v = unusedIndex.get(type) || 0;
            // Use existing view
            // We don't care if they are already used
            // because we are not in continous scrolling
            if (unusedPool && v < unusedPool.length) {
              view = unusedPool[v];
              view.item = item;
              view.nr.used = true;
              view.nr.index = _i3;
              view.nr.key = key;
              view.nr.type = type;
              unusedIndex.set(type, v + 1);
            } else {
              view = this.addView(pool, _i3, item, key, type);
              this.unuseView(view, true);
            }
            v++;
          }
          views.set(key, view);
        } else {
          view.nr.used = true;
          view.item = item;
        }

        // Update position
        if (itemSize === null) {
          view.position = sizes[_i3 - 1].accumulator;
        } else {
          view.position = _i3 * itemSize;
        }
      }

      this.$_startIndex = startIndex;
      this.$_endIndex = endIndex;

      if (this.emitUpdate) this.$emit('update', startIndex, endIndex);

      return {
        continuous: continuous
      };
    },
    getListenerTarget: function getListenerTarget() {
      var target = scrollparent(this.$el);
      // Fix global scroll target for Chrome and Safari
      if (window.document && (target === window.document.documentElement || target === window.document.body)) {
        target = window;
      }
      return target;
    },
    getScroll: function getScroll() {
      var el = this.$el,
          direction = this.direction;

      var isVertical = direction === 'vertical';
      var scrollState = void 0;

      if (this.pageMode) {
        var bounds = el.getBoundingClientRect();
        var boundsSize = isVertical ? bounds.height : bounds.width;
        var start = -(isVertical ? bounds.top : bounds.left);
        var size = isVertical ? window.innerHeight : window.innerWidth;
        if (start < 0) {
          size += start;
          start = 0;
        }
        if (start + size > boundsSize) {
          size = boundsSize - start;
        }
        scrollState = {
          start: start,
          end: start + size
        };
      } else if (isVertical) {
        scrollState = {
          start: el.scrollTop,
          end: el.scrollTop + el.clientHeight
        };
      } else {
        scrollState = {
          start: el.scrollLeft,
          end: el.scrollLeft + el.clientWidth
        };
      }

      return scrollState;
    },
    applyPageMode: function applyPageMode() {
      if (this.pageMode) {
        this.addListeners();
      } else {
        this.removeListeners();
      }
    },
    addListeners: function addListeners() {
      this.listenerTarget = this.getListenerTarget();
      this.listenerTarget.addEventListener('scroll', this.handleScroll, supportsPassive ? {
        passive: true
      } : false);
      this.listenerTarget.addEventListener('resize', this.handleResize);
    },
    removeListeners: function removeListeners() {
      if (!this.listenerTarget) {
        return;
      }

      this.listenerTarget.removeEventListener('scroll', this.handleScroll);
      this.listenerTarget.removeEventListener('resize', this.handleResize);

      this.listenerTarget = null;
    },
    scrollToItem: function scrollToItem(index) {
      var scroll = void 0;
      if (this.itemSize === null) {
        scroll = index > 0 ? this.sizes[index - 1].accumulator : 0;
      } else {
        scroll = index * this.itemSize;
      }
      this.scrollToPosition(scroll);
    },
    scrollToPosition: function scrollToPosition(position) {
      if (this.direction === 'vertical') {
        this.$el.scrollTop = position;
      } else {
        this.$el.scrollLeft = position;
      }
    },
    itemsLimitError: function itemsLimitError() {
      var _this4 = this;

      setTimeout(function () {
        console.log('It seems the scroller element isn\'t scrolling, so it tries to render all the items at once.', 'Scroller:', _this4.$el);
        console.log('Make sure the scroller has a fixed height (or width) and \'overflow-y\' (or \'overflow-x\') set to \'auto\' so it can scroll correctly and only render the items visible in the scroll viewport.');
      });
      throw new Error('Rendered items limit reached');
    }
  }
};

var DynamicScroller = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('RecycleScroller', _vm._g(_vm._b({ ref: "scroller", attrs: { "items": _vm.itemsWithSize, "min-item-size": _vm.minItemSize, "direction": _vm.direction, "key-field": "id" }, on: { "resize": _vm.onScrollerResize, "visible": _vm.onScrollerVisible }, scopedSlots: _vm._u([{ key: "default", fn: function fn(_ref) {
          var itemWithSize = _ref.item,
              index = _ref.index,
              active = _ref.active;
          return [_vm._t("default", null, null, {
            item: itemWithSize.item,
            index: index,
            active: active,
            itemWithSize: itemWithSize
          })];
        } }]) }, 'RecycleScroller', _vm.$attrs, false), _vm.listeners), [_c('template', { slot: "before" }, [_vm._t("before")], 2), _vm._v(" "), _c('template', { slot: "after" }, [_vm._t("after")], 2)], 2);
  }, staticRenderFns: [],
  name: 'DynamicScroller',

  components: {
    RecycleScroller: RecycleScroller
  },

  inheritAttrs: false,

  provide: function provide() {
    return {
      vscrollData: this.vscrollData,
      vscrollParent: this
    };
  },


  props: _extends({}, props, {

    minItemSize: {
      type: [Number, String],
      required: true
    }
  }),

  data: function data() {
    return {
      vscrollData: {
        active: true,
        sizes: {},
        validSizes: {},
        keyField: this.keyField,
        simpleArray: false
      }
    };
  },


  computed: {
    simpleArray: simpleArray,

    itemsWithSize: function itemsWithSize() {
      var result = [];
      var items = this.items,
          keyField = this.keyField,
          simpleArray$$1 = this.simpleArray;

      var sizes = this.vscrollData.sizes;
      for (var i = 0; i < items.length; i++) {
        var item = items[i];
        var id = simpleArray$$1 ? i : item[keyField];
        var size = sizes[id];
        if (typeof size === 'undefined' && !this.$_undefinedMap[id]) {
          // eslint-disable-next-line vue/no-side-effects-in-computed-properties
          this.$_undefinedSizes++;
          // eslint-disable-next-line vue/no-side-effects-in-computed-properties
          this.$_undefinedMap[id] = true;
          size = 0;
        }
        result.push({
          item: item,
          id: id,
          size: size
        });
      }
      return result;
    },
    listeners: function listeners() {
      var listeners = {};
      for (var key in this.$listeners) {
        if (key !== 'resize' && key !== 'visible') {
          listeners[key] = this.$listeners[key];
        }
      }
      return listeners;
    }
  },

  watch: {
    items: function items() {
      this.forceUpdate(false);
    },


    simpleArray: {
      handler: function handler(value) {
        this.vscrollData.simpleArray = value;
      },

      immediate: true
    },

    direction: function direction(value) {
      this.forceUpdate(true);
    }
  },

  created: function created() {
    this.$_updates = [];
    this.$_undefinedSizes = 0;
    this.$_undefinedMap = {};
  },
  activated: function activated() {
    this.vscrollData.active = true;
  },
  deactivated: function deactivated() {
    this.vscrollData.active = false;
  },


  methods: {
    onScrollerResize: function onScrollerResize() {
      var scroller = this.$refs.scroller;
      if (scroller) {
        this.forceUpdate();
      }
      this.$emit('resize');
    },
    onScrollerVisible: function onScrollerVisible() {
      this.$emit('vscroll:update', { force: false });
      this.$emit('visible');
    },
    forceUpdate: function forceUpdate() {
      var clear = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (clear || this.simpleArray) {
        this.vscrollData.validSizes = {};
      }
      this.$emit('vscroll:update', { force: true });
    },
    scrollToItem: function scrollToItem(index) {
      var scroller = this.$refs.scroller;
      if (scroller) scroller.scrollToItem(index);
    },
    getItemSize: function getItemSize(item) {
      var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

      var id = this.simpleArray ? index != null ? index : this.items.indexOf(item) : item[this.keyField];
      return this.vscrollData.sizes[id] || 0;
    },
    scrollToBottom: function scrollToBottom() {
      var _this = this;

      if (this.$_scrollingToBottom) return;
      this.$_scrollingToBottom = true;
      var el = this.$el;
      // Item is inserted to the DOM
      this.$nextTick(function () {
        // Item sizes are computed
        var cb = function cb() {
          el.scrollTop = el.scrollHeight;
          if (_this.$_undefinedSizes === 0) {
            _this.$_scrollingToBottom = false;
          } else {
            requestAnimationFrame(cb);
          }
        };
        requestAnimationFrame(cb);
      });
    }
  }
};

var DynamicScrollerItem = {
  name: 'DynamicScrollerItem',

  inject: ['vscrollData', 'vscrollParent'],

  props: {
    item: {
      required: true
    },

    watchData: {
      type: Boolean,
      default: false
    },

    active: {
      type: Boolean,
      required: true
    },

    index: {
      type: Number,
      default: undefined
    },

    sizeDependencies: {
      type: [Array, Object],
      default: null
    },

    emitResize: {
      type: Boolean,
      default: false
    },

    tag: {
      type: String,
      default: 'div'
    }
  },

  computed: {
    id: function id() {
      return this.vscrollData.simpleArray ? this.index : this.item[this.vscrollData.keyField];
    },
    size: function size() {
      return this.vscrollData.validSizes[this.id] && this.vscrollData.sizes[this.id] || 0;
    }
  },

  watch: {
    watchData: 'updateWatchData',

    id: function id() {
      if (!this.size) {
        this.onDataUpdate();
      }
    },
    active: function active(value) {
      if (value && this.$_pendingVScrollUpdate === this.id) {
        this.updateSize();
      }
    }
  },

  created: function created() {
    var _this = this;

    if (this.$isServer) return;

    this.$_forceNextVScrollUpdate = null;
    this.updateWatchData();

    var _loop = function _loop(k) {
      _this.$watch(function () {
        return _this.sizeDependencies[k];
      }, _this.onDataUpdate);
    };

    for (var k in this.sizeDependencies) {
      _loop(k);
    }

    this.vscrollParent.$on('vscroll:update', this.onVscrollUpdate);
    this.vscrollParent.$on('vscroll:update-size', this.onVscrollUpdateSize);
  },
  mounted: function mounted() {
    if (this.vscrollData.active) {
      this.updateSize();
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.vscrollParent.$off('vscroll:update', this.onVscrollUpdate);
    this.vscrollParent.$off('vscroll:update-size', this.onVscrollUpdateSize);
  },


  methods: {
    updateSize: function updateSize() {
      if (this.active && this.vscrollData.active) {
        if (this.$_pendingSizeUpdate !== this.id) {
          this.$_pendingSizeUpdate = this.id;
          this.$_forceNextVScrollUpdate = null;
          this.$_pendingVScrollUpdate = null;
          if (this.active && this.vscrollData.active) {
            this.computeSize(this.id);
          }
        }
      } else {
        this.$_forceNextVScrollUpdate = this.id;
      }
    },
    getBounds: function getBounds() {
      return this.$el.getBoundingClientRect();
    },
    updateWatchData: function updateWatchData() {
      var _this2 = this;

      if (this.watchData) {
        this.$_watchData = this.$watch('data', function () {
          _this2.onDataUpdate();
        }, {
          deep: true
        });
      } else if (this.$_watchData) {
        this.$_watchData();
        this.$_watchData = null;
      }
    },
    onVscrollUpdate: function onVscrollUpdate(_ref) {
      var force = _ref.force;

      if (!this.active && force) {
        this.$_pendingVScrollUpdate = this.id;
      }
      if (this.$_forceNextVScrollUpdate === this.id || force || !this.size) {
        this.updateSize();
      }
    },
    onDataUpdate: function onDataUpdate() {
      this.updateSize();
    },
    computeSize: function computeSize(id) {
      var _this3 = this;

      this.$nextTick(function () {
        if (_this3.id === id) {
          var bounds = _this3.getBounds();
          var size = Math.round(_this3.vscrollParent.direction === 'vertical' ? bounds.height : bounds.width);
          if (size && _this3.size !== size) {
            if (_this3.vscrollParent.$_undefinedMap[id]) {
              _this3.vscrollParent.$_undefinedSizes--;
              _this3.vscrollParent.$_undefinedMap[id] = undefined;
            }
            _this3.$set(_this3.vscrollData.sizes, _this3.id, size);
            _this3.$set(_this3.vscrollData.validSizes, _this3.id, true);
            if (_this3.emitResize) _this3.$emit('resize', _this3.id);
          }
        }
        _this3.$_pendingSizeUpdate = null;
      });
    }
  },

  render: function render(h) {
    return h(this.tag, this.$slots.default);
  }
};

var IdState = function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$idProp = _ref.idProp,
      idProp = _ref$idProp === undefined ? function (vm) {
    return vm.item.id;
  } : _ref$idProp;

  var store = {};
  var vm = new vue__WEBPACK_IMPORTED_MODULE_0___default.a({
    data: function data() {
      return {
        store: store
      };
    }
  });

  // @vue/component
  return {
    data: function data() {
      return {
        idState: null
      };
    },
    created: function created() {
      var _this = this;

      this.$_id = null;
      if (typeof idProp === 'function') {
        this.$_getId = function () {
          return idProp.call(_this, _this);
        };
      } else {
        this.$_getId = function () {
          return _this[idProp];
        };
      }
      this.$watch(this.$_getId, {
        handler: function handler(value) {
          var _this2 = this;

          this.$nextTick(function () {
            _this2.$_id = value;
          });
        },

        immediate: true
      });
      this.$_updateIdState();
    },
    beforeUpdate: function beforeUpdate() {
      this.$_updateIdState();
    },


    methods: {
      /**
       * Initialize an idState
       * @param {number|string} id Unique id for the data
       */
      $_idStateInit: function $_idStateInit(id) {
        var factory = this.$options.idState;
        if (typeof factory === 'function') {
          var data = factory.call(this, this);
          vm.$set(store, id, data);
          this.$_id = id;
          return data;
        } else {
          throw new Error('[mixin IdState] Missing `idState` function on component definition.');
        }
      },


      /**
       * Ensure idState is created and up-to-date
       */
      $_updateIdState: function $_updateIdState() {
        var id = this.$_getId();
        if (id == null) {
          console.warn('No id found for IdState with idProp: \'' + idProp + '\'.');
        }
        if (id !== this.$_id) {
          if (!store[id]) {
            this.$_idStateInit(id);
          }
          this.idState = store[id];
        }
      }
    }
  };
};

function registerComponents(Vue$$1, prefix) {
  Vue$$1.component(prefix + 'recycle-scroller', RecycleScroller);
  Vue$$1.component(prefix + 'RecycleScroller', RecycleScroller);
  Vue$$1.component(prefix + 'dynamic-scroller', DynamicScroller);
  Vue$$1.component(prefix + 'DynamicScroller', DynamicScroller);
  Vue$$1.component(prefix + 'dynamic-scroller-item', DynamicScrollerItem);
  Vue$$1.component(prefix + 'DynamicScrollerItem', DynamicScrollerItem);
}

var plugin = {
  // eslint-disable-next-line no-undef
  version: "1.0.0-rc.2",
  install: function install(Vue$$1, options) {
    var finalOptions = Object.assign({}, {
      installComponents: true,
      componentsPrefix: ''
    }, options);

    for (var key in finalOptions) {
      if (typeof finalOptions[key] !== 'undefined') {
        config[key] = finalOptions[key];
      }
    }

    if (finalOptions.installComponents) {
      registerComponents(Vue$$1, finalOptions.componentsPrefix);
    }
  }
};

// Auto-install
var GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}


/* harmony default export */ __webpack_exports__["default"] = (plugin);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/components/anchors.vue":
/*!************************************!*\
  !*** ./src/components/anchors.vue ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _anchors_vue_vue_type_template_id_51188104___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anchors.vue?vue&type=template&id=51188104& */ "./src/components/anchors.vue?vue&type=template&id=51188104&");
/* harmony import */ var _anchors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./anchors.vue?vue&type=script&lang=js& */ "./src/components/anchors.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _anchors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _anchors_vue_vue_type_template_id_51188104___WEBPACK_IMPORTED_MODULE_0__["render"],
  _anchors_vue_vue_type_template_id_51188104___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/anchors.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/anchors.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./src/components/anchors.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_anchors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--0!../../node_modules/vue-loader/lib??vue-loader-options!./anchors.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/anchors.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_anchors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/anchors.vue?vue&type=template&id=51188104&":
/*!*******************************************************************!*\
  !*** ./src/components/anchors.vue?vue&type=template&id=51188104& ***!
  \*******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_anchors_vue_vue_type_template_id_51188104___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./anchors.vue?vue&type=template&id=51188104& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/anchors.vue?vue&type=template&id=51188104&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_anchors_vue_vue_type_template_id_51188104___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_anchors_vue_vue_type_template_id_51188104___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/category.vue":
/*!*************************************!*\
  !*** ./src/components/category.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _category_vue_vue_type_template_id_376cda0e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category.vue?vue&type=template&id=376cda0e& */ "./src/components/category.vue?vue&type=template&id=376cda0e&");
/* harmony import */ var _category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category.vue?vue&type=script&lang=js& */ "./src/components/category.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _category_vue_vue_type_template_id_376cda0e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _category_vue_vue_type_template_id_376cda0e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/category.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/category.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./src/components/category.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--0!../../node_modules/vue-loader/lib??vue-loader-options!./category.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/category.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/category.vue?vue&type=template&id=376cda0e&":
/*!********************************************************************!*\
  !*** ./src/components/category.vue?vue&type=template&id=376cda0e& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_template_id_376cda0e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./category.vue?vue&type=template&id=376cda0e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/category.vue?vue&type=template&id=376cda0e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_template_id_376cda0e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_template_id_376cda0e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/emoji/emoji.vue":
/*!****************************************!*\
  !*** ./src/components/emoji/emoji.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emoji_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emoji.vue?vue&type=script&lang=js& */ "./src/components/emoji/emoji.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _emoji_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/emoji/emoji.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/emoji/emoji.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./src/components/emoji/emoji.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_emoji_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0!../../../node_modules/vue-loader/lib??vue-loader-options!./emoji.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/emoji/emoji.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_emoji_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/emoji/nimbleEmoji.vue":
/*!**********************************************!*\
  !*** ./src/components/emoji/nimbleEmoji.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nimbleEmoji_vue_vue_type_template_id_7f853594___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nimbleEmoji.vue?vue&type=template&id=7f853594& */ "./src/components/emoji/nimbleEmoji.vue?vue&type=template&id=7f853594&");
/* harmony import */ var _nimbleEmoji_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nimbleEmoji.vue?vue&type=script&lang=js& */ "./src/components/emoji/nimbleEmoji.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _nimbleEmoji_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _nimbleEmoji_vue_vue_type_template_id_7f853594___WEBPACK_IMPORTED_MODULE_0__["render"],
  _nimbleEmoji_vue_vue_type_template_id_7f853594___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/emoji/nimbleEmoji.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/emoji/nimbleEmoji.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./src/components/emoji/nimbleEmoji.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nimbleEmoji_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0!../../../node_modules/vue-loader/lib??vue-loader-options!./nimbleEmoji.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/emoji/nimbleEmoji.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nimbleEmoji_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/emoji/nimbleEmoji.vue?vue&type=template&id=7f853594&":
/*!*****************************************************************************!*\
  !*** ./src/components/emoji/nimbleEmoji.vue?vue&type=template&id=7f853594& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_nimbleEmoji_vue_vue_type_template_id_7f853594___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./nimbleEmoji.vue?vue&type=template&id=7f853594& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/emoji/nimbleEmoji.vue?vue&type=template&id=7f853594&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_nimbleEmoji_vue_vue_type_template_id_7f853594___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_nimbleEmoji_vue_vue_type_template_id_7f853594___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/*! exports provided: Anchors, Category, Preview, Search, Skins, Emoji, NimbleEmoji, Picker, NimblePicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _anchors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anchors */ "./src/components/anchors.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Anchors", function() { return _anchors__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category */ "./src/components/category.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return _category__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _preview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./preview */ "./src/components/preview.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Preview", function() { return _preview__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search */ "./src/components/search.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return _search__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _skins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./skins */ "./src/components/skins.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Skins", function() { return _skins__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _emoji_emoji__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./emoji/emoji */ "./src/components/emoji/emoji.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Emoji", function() { return _emoji_emoji__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _emoji_nimbleEmoji__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./emoji/nimbleEmoji */ "./src/components/emoji/nimbleEmoji.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NimbleEmoji", function() { return _emoji_nimbleEmoji__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _picker_picker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./picker/picker */ "./src/components/picker/picker.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Picker", function() { return _picker_picker__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _picker_nimblePicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./picker/nimblePicker */ "./src/components/picker/nimblePicker.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NimblePicker", function() { return _picker_nimblePicker__WEBPACK_IMPORTED_MODULE_8__["default"]; });











/***/ }),

/***/ "./src/components/picker/nimblePicker.vue":
/*!************************************************!*\
  !*** ./src/components/picker/nimblePicker.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nimblePicker_vue_vue_type_template_id_7bc71df8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nimblePicker.vue?vue&type=template&id=7bc71df8& */ "./src/components/picker/nimblePicker.vue?vue&type=template&id=7bc71df8&");
/* harmony import */ var _nimblePicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nimblePicker.vue?vue&type=script&lang=js& */ "./src/components/picker/nimblePicker.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _nimblePicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _nimblePicker_vue_vue_type_template_id_7bc71df8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _nimblePicker_vue_vue_type_template_id_7bc71df8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/picker/nimblePicker.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/picker/nimblePicker.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./src/components/picker/nimblePicker.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nimblePicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0!../../../node_modules/vue-loader/lib??vue-loader-options!./nimblePicker.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/picker/nimblePicker.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nimblePicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/picker/nimblePicker.vue?vue&type=template&id=7bc71df8&":
/*!*******************************************************************************!*\
  !*** ./src/components/picker/nimblePicker.vue?vue&type=template&id=7bc71df8& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_nimblePicker_vue_vue_type_template_id_7bc71df8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./nimblePicker.vue?vue&type=template&id=7bc71df8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/picker/nimblePicker.vue?vue&type=template&id=7bc71df8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_nimblePicker_vue_vue_type_template_id_7bc71df8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_nimblePicker_vue_vue_type_template_id_7bc71df8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/picker/picker.vue":
/*!******************************************!*\
  !*** ./src/components/picker/picker.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _picker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./picker.vue?vue&type=script&lang=js& */ "./src/components/picker/picker.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _picker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/picker/picker.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/picker/picker.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./src/components/picker/picker.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_picker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0!../../../node_modules/vue-loader/lib??vue-loader-options!./picker.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/picker/picker.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_picker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/preview.vue":
/*!************************************!*\
  !*** ./src/components/preview.vue ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _preview_vue_vue_type_template_id_35056c30___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./preview.vue?vue&type=template&id=35056c30& */ "./src/components/preview.vue?vue&type=template&id=35056c30&");
/* harmony import */ var _preview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preview.vue?vue&type=script&lang=js& */ "./src/components/preview.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _preview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _preview_vue_vue_type_template_id_35056c30___WEBPACK_IMPORTED_MODULE_0__["render"],
  _preview_vue_vue_type_template_id_35056c30___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/preview.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/preview.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./src/components/preview.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_preview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--0!../../node_modules/vue-loader/lib??vue-loader-options!./preview.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/preview.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_preview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/preview.vue?vue&type=template&id=35056c30&":
/*!*******************************************************************!*\
  !*** ./src/components/preview.vue?vue&type=template&id=35056c30& ***!
  \*******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_preview_vue_vue_type_template_id_35056c30___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./preview.vue?vue&type=template&id=35056c30& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/preview.vue?vue&type=template&id=35056c30&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_preview_vue_vue_type_template_id_35056c30___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_preview_vue_vue_type_template_id_35056c30___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/search.vue":
/*!***********************************!*\
  !*** ./src/components/search.vue ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _search_vue_vue_type_template_id_4ad41bb8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.vue?vue&type=template&id=4ad41bb8& */ "./src/components/search.vue?vue&type=template&id=4ad41bb8&");
/* harmony import */ var _search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.vue?vue&type=script&lang=js& */ "./src/components/search.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _search_vue_vue_type_template_id_4ad41bb8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _search_vue_vue_type_template_id_4ad41bb8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/search.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/search.vue?vue&type=script&lang=js&":
/*!************************************************************!*\
  !*** ./src/components/search.vue?vue&type=script&lang=js& ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--0!../../node_modules/vue-loader/lib??vue-loader-options!./search.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/search.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/search.vue?vue&type=template&id=4ad41bb8&":
/*!******************************************************************!*\
  !*** ./src/components/search.vue?vue&type=template&id=4ad41bb8& ***!
  \******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_template_id_4ad41bb8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./search.vue?vue&type=template&id=4ad41bb8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/search.vue?vue&type=template&id=4ad41bb8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_template_id_4ad41bb8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_template_id_4ad41bb8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/skins.vue":
/*!**********************************!*\
  !*** ./src/components/skins.vue ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _skins_vue_vue_type_template_id_1c614894___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./skins.vue?vue&type=template&id=1c614894& */ "./src/components/skins.vue?vue&type=template&id=1c614894&");
/* harmony import */ var _skins_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./skins.vue?vue&type=script&lang=js& */ "./src/components/skins.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _skins_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _skins_vue_vue_type_template_id_1c614894___WEBPACK_IMPORTED_MODULE_0__["render"],
  _skins_vue_vue_type_template_id_1c614894___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/skins.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/skins.vue?vue&type=script&lang=js&":
/*!***********************************************************!*\
  !*** ./src/components/skins.vue?vue&type=script&lang=js& ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_skins_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--0!../../node_modules/vue-loader/lib??vue-loader-options!./skins.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/skins.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_skins_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/skins.vue?vue&type=template&id=1c614894&":
/*!*****************************************************************!*\
  !*** ./src/components/skins.vue?vue&type=template&id=1c614894& ***!
  \*****************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_skins_vue_vue_type_template_id_1c614894___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./skins.vue?vue&type=template&id=1c614894& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/skins.vue?vue&type=template&id=1c614894&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_skins_vue_vue_type_template_id_1c614894___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_skins_vue_vue_type_template_id_1c614894___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: Picker, NimblePicker, Emoji, NimbleEmoji, Anchors, Preview, Search, Category, Skins, EmojiIndex, EmojiView, EmojiData, sanitize, uncompress, store, frequently */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/store */ "./src/utils/store.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "store", function() { return _utils_store__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/data */ "./src/utils/data.js");
/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utils_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uncompress", function() { return _utils_data__WEBPACK_IMPORTED_MODULE_1__["uncompress"]; });

/* harmony import */ var _utils_frequently__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/frequently */ "./src/utils/frequently.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "frequently", function() { return _utils_frequently__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ "./src/components/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Picker", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["Picker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NimblePicker", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["NimblePicker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Emoji", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["Emoji"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NimbleEmoji", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["NimbleEmoji"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Anchors", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["Anchors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Preview", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["Preview"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["Search"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["Category"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Skins", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["Skins"]; });

/* harmony import */ var _utils_emoji_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/emoji-data */ "./src/utils/emoji-data.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmojiIndex", function() { return _utils_emoji_data__WEBPACK_IMPORTED_MODULE_4__["EmojiIndex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmojiView", function() { return _utils_emoji_data__WEBPACK_IMPORTED_MODULE_4__["EmojiView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmojiData", function() { return _utils_emoji_data__WEBPACK_IMPORTED_MODULE_4__["EmojiData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sanitize", function() { return _utils_emoji_data__WEBPACK_IMPORTED_MODULE_4__["sanitize"]; });








/***/ }),

/***/ "./src/polyfills/stringFromCodePoint.js":
/*!**********************************************!*\
  !*** ./src/polyfills/stringFromCodePoint.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _String = String;
/* harmony default export */ __webpack_exports__["default"] = (_String.fromCodePoint || function stringFromCodePoint() {
  var MAX_SIZE = 0x4000;
  var codeUnits = [];
  var highSurrogate;
  var lowSurrogate;
  var index = -1;
  var length = arguments.length;

  if (!length) {
    return '';
  }

  var result = '';

  while (++index < length) {
    var codePoint = Number(arguments[index]);

    if (!isFinite(codePoint) || // `NaN`, `+Infinity`, or `-Infinity`
    codePoint < 0 || // not a valid Unicode code point
    codePoint > 0x10ffff || // not a valid Unicode code point
    Math.floor(codePoint) != codePoint // not an integer
    ) {
        throw RangeError('Invalid code point: ' + codePoint);
      }

    if (codePoint <= 0xffff) {
      // BMP code point
      codeUnits.push(codePoint);
    } else {
      // Astral code point; split in surrogate halves
      // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
      codePoint -= 0x10000;
      highSurrogate = (codePoint >> 10) + 0xd800;
      lowSurrogate = codePoint % 0x400 + 0xdc00;
      codeUnits.push(highSurrogate, lowSurrogate);
    }

    if (index + 1 === length || codeUnits.length > MAX_SIZE) {
      result += String.fromCharCode.apply(null, codeUnits);
      codeUnits.length = 0;
    }
  }

  return result;
});

/***/ }),

/***/ "./src/svgs/index.js":
/*!***************************!*\
  !*** ./src/svgs/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var SVGs = {
  activity: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path d=\"M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12m9.949 11H17.05c.224-2.527 1.232-4.773 1.968-6.113A9.966 9.966 0 0 1 21.949 11M13 11V2.051a9.945 9.945 0 0 1 4.432 1.564c-.858 1.491-2.156 4.22-2.392 7.385H13zm-2 0H8.961c-.238-3.165-1.536-5.894-2.393-7.385A9.95 9.95 0 0 1 11 2.051V11zm0 2v8.949a9.937 9.937 0 0 1-4.432-1.564c.857-1.492 2.155-4.221 2.393-7.385H11zm4.04 0c.236 3.164 1.534 5.893 2.392 7.385A9.92 9.92 0 0 1 13 21.949V13h2.04zM4.982 4.887C5.718 6.227 6.726 8.473 6.951 11h-4.9a9.977 9.977 0 0 1 2.931-6.113M2.051 13h4.9c-.226 2.527-1.233 4.771-1.969 6.113A9.972 9.972 0 0 1 2.051 13m16.967 6.113c-.735-1.342-1.744-3.586-1.968-6.113h4.899a9.961 9.961 0 0 1-2.931 6.113\"/></svg>",
  custom: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><g transform=\"translate(2.000000, 1.000000)\"><rect id=\"Rectangle\" x=\"8\" y=\"0\" width=\"3\" height=\"21\" rx=\"1.5\"></rect><rect id=\"Rectangle\" transform=\"translate(9.843, 10.549) rotate(60) translate(-9.843, -10.549) \" x=\"8.343\" y=\"0.049\" width=\"3\" height=\"21\" rx=\"1.5\"></rect><rect id=\"Rectangle\" transform=\"translate(9.843, 10.549) rotate(-60) translate(-9.843, -10.549) \" x=\"8.343\" y=\"0.049\" width=\"3\" height=\"21\" rx=\"1.5\"></rect></g></svg>",
  flags: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path d=\"M0 0l6.084 24H8L1.916 0zM21 5h-4l-1-4H4l3 12h3l1 4h13L21 5zM6.563 3h7.875l2 8H8.563l-2-8zm8.832 10l-2.856 1.904L12.063 13h3.332zM19 13l-1.5-6h1.938l2 8H16l3-2z\"/></svg>",
  foods: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path d=\"M17 4.978c-1.838 0-2.876.396-3.68.934.513-1.172 1.768-2.934 4.68-2.934a1 1 0 0 0 0-2c-2.921 0-4.629 1.365-5.547 2.512-.064.078-.119.162-.18.244C11.73 1.838 10.798.023 9.207.023 8.579.022 7.85.306 7 .978 5.027 2.54 5.329 3.902 6.492 4.999 3.609 5.222 0 7.352 0 12.969c0 4.582 4.961 11.009 9 11.009 1.975 0 2.371-.486 3-1 .629.514 1.025 1 3 1 4.039 0 9-6.418 9-11 0-5.953-4.055-8-7-8M8.242 2.546c.641-.508.943-.523.965-.523.426.169.975 1.405 1.357 3.055-1.527-.629-2.741-1.352-2.98-1.846.059-.112.241-.356.658-.686M15 21.978c-1.08 0-1.21-.109-1.559-.402l-.176-.146c-.367-.302-.816-.452-1.266-.452s-.898.15-1.266.452l-.176.146c-.347.292-.477.402-1.557.402-2.813 0-7-5.389-7-9.009 0-5.823 4.488-5.991 5-5.991 1.939 0 2.484.471 3.387 1.251l.323.276a1.995 1.995 0 0 0 2.58 0l.323-.276c.902-.78 1.447-1.251 3.387-1.251.512 0 5 .168 5 6 0 3.617-4.187 9-7 9\"/></svg>",
  nature: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path d=\"M15.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 15.5 8M8.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8.5 8\"/><path d=\"M18.933 0h-.027c-.97 0-2.138.787-3.018 1.497-1.274-.374-2.612-.51-3.887-.51-1.285 0-2.616.133-3.874.517C7.245.79 6.069 0 5.093 0h-.027C3.352 0 .07 2.67.002 7.026c-.039 2.479.276 4.238 1.04 5.013.254.258.882.677 1.295.882.191 3.177.922 5.238 2.536 6.38.897.637 2.187.949 3.2 1.102C8.04 20.6 8 20.795 8 21c0 1.773 2.35 3 4 3 1.648 0 4-1.227 4-3 0-.201-.038-.393-.072-.586 2.573-.385 5.435-1.877 5.925-7.587.396-.22.887-.568 1.104-.788.763-.774 1.079-2.534 1.04-5.013C23.929 2.67 20.646 0 18.933 0M3.223 9.135c-.237.281-.837 1.155-.884 1.238-.15-.41-.368-1.349-.337-3.291.051-3.281 2.478-4.972 3.091-5.031.256.015.731.27 1.265.646-1.11 1.171-2.275 2.915-2.352 5.125-.133.546-.398.858-.783 1.313M12 22c-.901 0-1.954-.693-2-1 0-.654.475-1.236 1-1.602V20a1 1 0 1 0 2 0v-.602c.524.365 1 .947 1 1.602-.046.307-1.099 1-2 1m3-3.48v.02a4.752 4.752 0 0 0-1.262-1.02c1.092-.516 2.239-1.334 2.239-2.217 0-1.842-1.781-2.195-3.977-2.195-2.196 0-3.978.354-3.978 2.195 0 .883 1.148 1.701 2.238 2.217A4.8 4.8 0 0 0 9 18.539v-.025c-1-.076-2.182-.281-2.973-.842-1.301-.92-1.838-3.045-1.853-6.478l.023-.041c.496-.826 1.49-1.45 1.804-3.102 0-2.047 1.357-3.631 2.362-4.522C9.37 3.178 10.555 3 11.948 3c1.447 0 2.685.192 3.733.57 1 .9 2.316 2.465 2.316 4.48.313 1.651 1.307 2.275 1.803 3.102.035.058.068.117.102.178-.059 5.967-1.949 7.01-4.902 7.19m6.628-8.202c-.037-.065-.074-.13-.113-.195a7.587 7.587 0 0 0-.739-.987c-.385-.455-.648-.768-.782-1.313-.076-2.209-1.241-3.954-2.353-5.124.531-.376 1.004-.63 1.261-.647.636.071 3.044 1.764 3.096 5.031.027 1.81-.347 3.218-.37 3.235\"/></svg>",
  objects: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path d=\"M12 0a9 9 0 0 0-5 16.482V21s2.035 3 5 3 5-3 5-3v-4.518A9 9 0 0 0 12 0zm0 2c3.86 0 7 3.141 7 7s-3.14 7-7 7-7-3.141-7-7 3.14-7 7-7zM9 17.477c.94.332 1.946.523 3 .523s2.06-.19 3-.523v.834c-.91.436-1.925.689-3 .689a6.924 6.924 0 0 1-3-.69v-.833zm.236 3.07A8.854 8.854 0 0 0 12 21c.965 0 1.888-.167 2.758-.451C14.155 21.173 13.153 22 12 22c-1.102 0-2.117-.789-2.764-1.453z\"/><path d=\"M14.745 12.449h-.004c-.852-.024-1.188-.858-1.577-1.824-.421-1.061-.703-1.561-1.182-1.566h-.009c-.481 0-.783.497-1.235 1.537-.436.982-.801 1.811-1.636 1.791l-.276-.043c-.565-.171-.853-.691-1.284-1.794-.125-.313-.202-.632-.27-.913-.051-.213-.127-.53-.195-.634C7.067 9.004 7.039 9 6.99 9A1 1 0 0 1 7 7h.01c1.662.017 2.015 1.373 2.198 2.134.486-.981 1.304-2.058 2.797-2.075 1.531.018 2.28 1.153 2.731 2.141l.002-.008C14.944 8.424 15.327 7 16.979 7h.032A1 1 0 1 1 17 9h-.011c-.149.076-.256.474-.319.709a6.484 6.484 0 0 1-.311.951c-.429.973-.79 1.789-1.614 1.789\"/></svg>",
  people: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path d=\"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10\"/><path d=\"M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0\"/></svg>",
  places: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path d=\"M6.5 12C5.122 12 4 13.121 4 14.5S5.122 17 6.5 17 9 15.879 9 14.5 7.878 12 6.5 12m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5M17.5 12c-1.378 0-2.5 1.121-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.122-2.5-2.5-2.5m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5\"/><path d=\"M22.482 9.494l-1.039-.346L21.4 9h.6c.552 0 1-.439 1-.992 0-.006-.003-.008-.003-.008H23c0-1-.889-2-1.984-2h-.642l-.731-1.717C19.262 3.012 18.091 2 16.764 2H7.236C5.909 2 4.738 3.012 4.357 4.283L3.626 6h-.642C1.889 6 1 7 1 8h.003S1 8.002 1 8.008C1 8.561 1.448 9 2 9h.6l-.043.148-1.039.346a2.001 2.001 0 0 0-1.359 2.097l.751 7.508a1 1 0 0 0 .994.901H3v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h6v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h1.096a.999.999 0 0 0 .994-.901l.751-7.508a2.001 2.001 0 0 0-1.359-2.097M6.273 4.857C6.402 4.43 6.788 4 7.236 4h9.527c.448 0 .834.43.963.857L19.313 9H4.688l1.585-4.143zM7 21H5v-1h2v1zm12 0h-2v-1h2v1zm2.189-3H2.811l-.662-6.607L3 11h18l.852.393L21.189 18z\"/></svg>",
  recent: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path d=\"M13 4h-2l-.001 7H9v2h2v2h2v-2h4v-2h-4z\"/><path d=\"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10\"/></svg>",
  symbols: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path d=\"M0 0h11v2H0zM4 11h3V6h4V4H0v2h4zM15.5 17c1.381 0 2.5-1.116 2.5-2.493s-1.119-2.493-2.5-2.493S13 13.13 13 14.507 14.119 17 15.5 17m0-2.986c.276 0 .5.222.5.493 0 .272-.224.493-.5.493s-.5-.221-.5-.493.224-.493.5-.493M21.5 19.014c-1.381 0-2.5 1.116-2.5 2.493S20.119 24 21.5 24s2.5-1.116 2.5-2.493-1.119-2.493-2.5-2.493m0 2.986a.497.497 0 0 1-.5-.493c0-.271.224-.493.5-.493s.5.222.5.493a.497.497 0 0 1-.5.493M22 13l-9 9 1.513 1.5 8.99-9.009zM17 11c2.209 0 4-1.119 4-2.5V2s.985-.161 1.498.949C23.01 4.055 23 6 23 6s1-1.119 1-3.135C24-.02 21 0 21 0h-2v6.347A5.853 5.853 0 0 0 17 6c-2.209 0-4 1.119-4 2.5s1.791 2.5 4 2.5M10.297 20.482l-1.475-1.585a47.54 47.54 0 0 1-1.442 1.129c-.307-.288-.989-1.016-2.045-2.183.902-.836 1.479-1.466 1.729-1.892s.376-.871.376-1.336c0-.592-.273-1.178-.818-1.759-.546-.581-1.329-.871-2.349-.871-1.008 0-1.79.293-2.344.879-.556.587-.832 1.181-.832 1.784 0 .813.419 1.748 1.256 2.805-.847.614-1.444 1.208-1.794 1.784a3.465 3.465 0 0 0-.523 1.833c0 .857.308 1.56.924 2.107.616.549 1.423.823 2.42.823 1.173 0 2.444-.379 3.813-1.137L8.235 24h2.819l-2.09-2.383 1.333-1.135zm-6.736-6.389a1.02 1.02 0 0 1 .73-.286c.31 0 .559.085.747.254a.849.849 0 0 1 .283.659c0 .518-.419 1.112-1.257 1.784-.536-.651-.805-1.231-.805-1.742a.901.901 0 0 1 .302-.669M3.74 22c-.427 0-.778-.116-1.057-.349-.279-.232-.418-.487-.418-.766 0-.594.509-1.288 1.527-2.083.968 1.134 1.717 1.946 2.248 2.438-.921.507-1.686.76-2.3.76\"/></svg>"
};
/* harmony default export */ __webpack_exports__["default"] = (SVGs);

/***/ }),

/***/ "./src/utils/data.js":
/*!***************************!*\
  !*** ./src/utils/data.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var mapping = {
  name: 'a',
  unified: 'b',
  non_qualified: 'c',
  has_img_apple: 'd',
  has_img_google: 'e',
  has_img_twitter: 'f',
  has_img_emojione: 'g',
  has_img_facebook: 'h',
  has_img_messenger: 'i',
  keywords: 'j',
  sheet: 'k',
  emoticons: 'l',
  text: 'm',
  short_names: 'n',
  added_in: 'o'
};

var buildSearch = function buildSearch(emoji) {
  var search = [];

  var addToSearch = function addToSearch(strings, split) {
    if (!strings) {
      return;
    }

    ;
    (Array.isArray(strings) ? strings : [strings]).forEach(function (string) {
      ;
      (split ? string.split(/[-|_|\s]+/) : [string]).forEach(function (s) {
        s = s.toLowerCase();

        if (search.indexOf(s) == -1) {
          search.push(s);
        }
      });
    });
  };

  addToSearch(emoji.short_names, true);
  addToSearch(emoji.name, true);
  addToSearch(emoji.keywords, false);
  addToSearch(emoji.emoticons, false);
  return search.join(',');
};

var compress = function compress(emoji) {
  emoji.short_names = emoji.short_names.filter(function (short_name) {
    return short_name !== emoji.short_name;
  });
  delete emoji.short_name;
  emoji.sheet = [emoji.sheet_x, emoji.sheet_y];
  delete emoji.sheet_x;
  delete emoji.sheet_y;
  emoji.added_in = parseInt(emoji.added_in);

  if (emoji.added_in === 6) {
    delete emoji.added_in;
  }

  for (var key in mapping) {
    emoji[mapping[key]] = emoji[key];
    delete emoji[key];
  }

  for (var _key in emoji) {
    var value = emoji[_key];

    if (Array.isArray(value) && !value.length) {
      delete emoji[_key];
    } else if (typeof value === 'string' && !value.length) {
      delete emoji[_key];
    } else if (value === null) {
      delete emoji[_key];
    }
  }
};

function deepFreeze(object) {
  // Retrieve the property names defined on object
  var propNames = Object.getOwnPropertyNames(object); // Freeze properties before freezing self

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = propNames[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var name = _step.value;
      var value = object[name];
      object[name] = value && _typeof(value) === 'object' ? deepFreeze(value) : value;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return Object.freeze(object);
}

var uncompress = function uncompress(data) {
  if (!data.compressed) {
    return data;
  }

  data.compressed = false;

  for (var id in data.emojis) {
    var emoji = data.emojis[id];

    for (var key in mapping) {
      emoji[key] = emoji[mapping[key]];
      delete emoji[mapping[key]];
    }

    if (!emoji.short_names) emoji.short_names = [];
    emoji.short_names.unshift(id);
    emoji.sheet_x = emoji.sheet[0];
    emoji.sheet_y = emoji.sheet[1];
    delete emoji.sheet;
    if (!emoji.text) emoji.text = '';
    if (!emoji.added_in) emoji.added_in = 6;
    emoji.added_in = emoji.added_in.toFixed(1);
    emoji.search = buildSearch(emoji);
  }

  data = deepFreeze(data);
  return data;
};

module.exports = {
  buildSearch: buildSearch,
  compress: compress,
  uncompress: uncompress
};

/***/ }),

/***/ "./src/utils/emoji-data.js":
/*!*********************************!*\
  !*** ./src/utils/emoji-data.js ***!
  \*********************************/
/*! exports provided: EmojiIndex, EmojiData, EmojiView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmojiIndex", function() { return EmojiIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmojiData", function() { return EmojiData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmojiView", function() { return EmojiView; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./src/utils/index.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ "./src/utils/data.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _frequently__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./frequently */ "./src/utils/frequently.js");





var SHEET_COLUMNS = 52;
var COLONS_REGEX = /^(?:\:([^\:]+)\:)(?:\:skin-tone-(\d)\:)?$/; // Skin tones

var SKINS = ['1F3FA', '1F3FB', '1F3FC', '1F3FD', '1F3FE', '1F3FF'];
/**
 * Emoji data structure:
 * {
 *    "compressed": false,
 *    "aliases": {
 *      collision: "boom"
 *      cooking: "fried_egg"
 *      envelope: "email"
 *      face_with_finger_covering_closed_lips: "shushing_face"
 *      ...
 *    },
 *    "categories": [ {
 *      id: "people",
 *      name: "Smileys & People",
 *      emojis: [ "grinning", "grin", "joy", ... ]
 *    }, {
 *      id: "nature",
 *      name: "Animals & Nature",
 *      emojis: [ "monkey_face", "money", "gorilla", ... ]
 *    },
 *    ...
 *    ],
 *    "emojis": [
 *      smiley: {
 *        added_in: "6.0",
 *        emoticons: ["=)", "=-)"],
 *        has_img_apple: true,
 *        has_img_emojione: true,
 *        has_img_facebook: true,
 *        has_img_google: true,
 *        has_img_messenger: true,
 *        has_img_twitter: true,
 *        keywords: ["face", "happy", "joy", "haha", ":D", ":)", "smile", "funny"],
 *        name: "Smiling Face with Open Mouth",
 *        non_qualified: undefined,
 *        search: "smiley,smiling,face,with,open,mouth,happy,joy,haha,:d,:),smile,funny,=),=-)",
 *        sheet_x: 30,
 *        sheet_y: 27,
 *        short_names: ["smiley"],
 *        text: ":)",
 *        unified: "1F603",
 *      }, {
 *      +1: {    // emoji with skin_variations
 *          ..., // all the regular fields are present
 *          name: "Thumbs Up Sign",
 *          short_names: (2) ["+1", "thumbsup"],
 *          skin_variations: {
 *            1F3FB:             // each variation has additional set of fields:
 *              added_in: "8.0",
 *              has_img_apple: true,
 *              has_img_emojione: true,
 *              has_img_facebook: true,
 *              has_img_google: true,
 *              has_img_messenger: true,
 *              has_img_twitter: true,
 *              image: "1f44d-1f3fb.png",
 *              non_qualified: null,
 *              sheet_x: 14,
 *              sheet_y: 50,
 *              unified: "1F44D-1F3FB",
 *            1F3FB: {…},
 *            1F3FC: {…},
 *            1F3FD: {…},
 *            1F3FE: {…},
 *            1F3FF: {…}
 *            },
 *          ...
 *      },
 *      a: {  // emoji with non_qualified field set
 *        added_in: "6.0",
 *        emoticons: undefined,
 *        has_img_apple: true,
 *        ...
 *        non_qualified: "1F170",
 *        unified: "1F170-FE0F",
 *     },
 *     ...
 *   ]
 * }
 */

/**
 * Wraps raw jason emoji data, serves as data source for
 * emoji picker components.
 *
 * Usage:
 *
 *   import data from '../../../data/all.json'
 *   let index = new EmojiIndex(data)
 *
 */

var EmojiIndex =
/*#__PURE__*/
function () {
  /**
   * Constructor.
   *
   * @param {object} data - Raw json data, see the structure above.
   * @param {object} options - additional options, as an object:
   * @param {Function} emojisToShowFilter - optional, function to filter out
   *   some emojis, function(emoji) { return true|false }
   *   where `emoji` is an raw emoji object, see data.emojis above.
   * @param {Array} include - optional, a list of category ids to include.
   * @param {Array} exclude - optional, a list of category ids to exclude.
   * @param {Array} custom - optional, a list custom emojis, each emoji is
   *   an object, see data.emojis above for examples.
   */
  function EmojiIndex(data) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        emojisToShowFilter = _ref.emojisToShowFilter,
        include = _ref.include,
        exclude = _ref.exclude,
        custom = _ref.custom,
        recent = _ref.recent,
        _ref$recentLength = _ref.recentLength,
        recentLength = _ref$recentLength === void 0 ? 20 : _ref$recentLength;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, EmojiIndex);

    this._data = Object(_data__WEBPACK_IMPORTED_MODULE_3__["uncompress"])(data); // Callback to exclude specific emojis

    this._emojisFilter = emojisToShowFilter || null; // Categories to include / exclude

    this._include = include || null;
    this._exclude = exclude || null; // Custom emojis

    this._custom = custom || []; // Recent emojis
    // TODO: make parameter configurable

    this._recent = recent || _frequently__WEBPACK_IMPORTED_MODULE_4__["default"].get(recentLength);
    this._emojis = {};
    this._nativeEmojis = {};
    this._emoticons = {};
    this._categories = [];
    this._recentCategory = {
      id: 'recent',
      name: 'Recent',
      emojis: []
    };
    this._customCategory = {
      id: 'custom',
      name: 'Custom',
      emojis: []
    };
    this._searchIndex = {};
    this.buildIndex();
    Object.freeze(this);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(EmojiIndex, [{
    key: "buildIndex",
    value: function buildIndex() {
      var _this = this;

      this._data.categories.forEach(function (categoryData) {
        if (!_this.isCategoryNeeded(categoryData)) {
          return;
        }

        var category = {
          id: categoryData.id,
          name: categoryData.name,
          emojis: []
        };
        categoryData.emojis.forEach(function (emojiId) {
          var emoji = _this.addEmoji(emojiId);

          if (emoji) {
            category.emojis.push(emoji);
          }
        });

        if (category.emojis.length) {
          _this._categories.push(category);
        }
      });

      if (this.isCategoryNeeded('custom')) {
        if (this._custom.length > 0) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = this._custom[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var customEmoji = _step.value;
              this.addCustomEmoji(customEmoji);
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        }

        if (this._customCategory.emojis.length) {
          this._categories.push(this._customCategory);
        }
      }

      if (this.isCategoryNeeded('recent')) {
        if (this._recent.length) {
          this._recent.map(function (id) {
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = _this._customCategory.emojis[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var _customEmoji = _step2.value;

                if (_customEmoji.id === id) {
                  _this._recentCategory.emojis.push(_customEmoji);

                  return;
                }
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                  _iterator2.return();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }

            if (_this.hasEmoji(id)) {
              _this._recentCategory.emojis.push(_this.emoji(id));
            }

            return;
          });
        } // Add recent category to the top


        if (this._recentCategory.emojis.length) {
          this._categories.unshift(this._recentCategory);
        }
      }
    }
    /**
     * Find the emoji from the string
     */

  }, {
    key: "findEmoji",
    value: function findEmoji(emoji, skin) {
      // 1. Parse as :emoji_name:skin-tone-xx:
      var matches = emoji.match(COLONS_REGEX);

      if (matches) {
        emoji = matches[1];

        if (matches[2]) {
          skin = parseInt(matches[2], 10);
        }
      } // 2. Check if the specified emoji is an alias


      if (this._data.aliases.hasOwnProperty(emoji)) {
        emoji = this._data.aliases[emoji];
      } // 3. Check if we have the specified emoji


      if (this._emojis.hasOwnProperty(emoji)) {
        var emojiObject = this._emojis[emoji];

        if (skin) {
          return emojiObject.getSkin(skin);
        }

        return emojiObject;
      } // 4. Check if we have the specified native emoji


      if (this._nativeEmojis.hasOwnProperty(emoji)) {
        return this._nativeEmojis[emoji];
      }

      return null;
    }
  }, {
    key: "categories",
    value: function categories() {
      return this._categories;
    }
  }, {
    key: "emoji",
    value: function emoji(emojiId) {
      if (this._data.aliases.hasOwnProperty(emojiId)) {
        emojiId = this._data.aliases[emojiId];
      }

      var emoji = this._emojis[emojiId];

      if (!emoji) {
        throw new Error('Can not find emoji by id: ' + emojiId);
      }

      return emoji;
    }
  }, {
    key: "hasEmoji",
    value: function hasEmoji(emojiId) {
      if (this._data.aliases.hasOwnProperty(emojiId)) {
        emojiId = this._data.aliases[emojiId];
      }

      if (this._emojis[emojiId]) {
        return true;
      }

      return false;
    }
  }, {
    key: "nativeEmoji",
    value: function nativeEmoji(unicodeEmoji) {
      if (this._nativeEmojis.hasOwnProperty(unicodeEmoji)) {
        return this._nativeEmojis[unicodeEmoji];
      }

      return null;
    }
  }, {
    key: "search",
    value: function search(value, maxResults) {
      var _this2 = this;

      maxResults || (maxResults = 75);

      if (!value.length) {
        return null;
      }

      if (value == '-' || value == '-1') {
        return [this.emoji('-1')];
      }

      var values = value.toLowerCase().split(/[\s|,|\-|_]+/);
      var allResults = [];

      if (values.length > 2) {
        values = [values[0], values[1]];
      }

      allResults = values.map(function (value) {
        // Start searchin in the global list of emojis
        var emojis = _this2._emojis;
        var currentIndex = _this2._searchIndex;
        var length = 0;

        for (var charIndex = 0; charIndex < value.length; charIndex++) {
          var char = value[charIndex];
          length++;
          currentIndex[char] || (currentIndex[char] = {});
          currentIndex = currentIndex[char];

          if (!currentIndex.results) {
            (function () {
              var scores = {};
              currentIndex.results = [];
              currentIndex.emojis = {};

              for (var emojiId in emojis) {
                var emoji = emojis[emojiId]; // search is a comma-separated string with words, related
                // to the emoji, for example:
                // search: "smiley,smiling,face,joy,haha,:d,:),smile,funny,=),=-)",

                var search = emoji._data.search;
                var sub = value.substr(0, length);
                var subIndex = search.indexOf(sub);

                if (subIndex != -1) {
                  var score = subIndex + 1;
                  if (sub == emojiId) score = 0;
                  currentIndex.results.push(emoji);
                  currentIndex.emojis[emojiId] = emoji;
                  scores[emojiId] = score;
                }
              }

              currentIndex.results.sort(function (a, b) {
                var aScore = scores[a.id],
                    bScore = scores[b.id];
                return aScore - bScore;
              });
            })();
          } // continue search in the reduced set of emojis


          emojis = currentIndex.emojis;
        }

        return currentIndex.results; // The "filter" call removes undefined values from allResults
        // array, for example, if we have "test " (with trailing space),
        // we will get "[Array, undefined]" for allResults and after
        // the "filter" call it will turn into "[Array]"
      }).filter(function (a) {
        return a;
      });
      var results = null;

      if (allResults.length > 1) {
        results = _index__WEBPACK_IMPORTED_MODULE_2__["intersect"].apply(null, allResults);
      } else if (allResults.length) {
        results = allResults[0];
      } else {
        results = [];
      }

      if (results && results.length > maxResults) {
        results = results.slice(0, maxResults);
      }

      return results;
    }
  }, {
    key: "addCustomEmoji",
    value: function addCustomEmoji(customEmoji) {
      var emojiData = Object.assign({}, customEmoji, {
        id: customEmoji.short_names[0],
        custom: true
      });

      if (!emojiData.search) {
        emojiData.search = Object(_data__WEBPACK_IMPORTED_MODULE_3__["buildSearch"])(emojiData);
      }

      var emoji = new EmojiData(emojiData);
      this._emojis[emoji.id] = emoji;

      this._customCategory.emojis.push(emoji);

      return emoji;
    }
  }, {
    key: "addEmoji",
    value: function addEmoji(emojiId) {
      var _this3 = this;

      // We expect the correct emoji id that is present in the emojis data.
      var data = this._data.emojis[emojiId];

      if (!this.isEmojiNeeded(data)) {
        return false;
      }

      var emoji = new EmojiData(data);
      this._emojis[emojiId] = emoji;

      if (emoji.native) {
        this._nativeEmojis[emoji.native] = emoji;
      }

      if (emoji._skins) {
        for (var idx in emoji._skins) {
          var skin = emoji._skins[idx];

          if (skin.native) {
            this._nativeEmojis[skin.native] = skin;
          }
        }
      }

      if (emoji.emoticons) {
        emoji.emoticons.forEach(function (emoticon) {
          if (_this3._emoticons[emoticon]) {
            return;
          }

          _this3._emoticons[emoticon] = emojiId;
        });
      }

      return emoji;
    }
    /**
     * Check if we need to include given category.
     *
     * @param {object} category - The category object.
     * @return {boolean} - Whether to include the emoji.
     */

  }, {
    key: "isCategoryNeeded",
    value: function isCategoryNeeded(category) {
      var isIncluded = this._include && this._include.length ? this._include.indexOf(category.id) > -1 : true;
      var isExcluded = this._exclude && this._exclude.length ? this._exclude.indexOf(category.id) > -1 : false;

      if (!isIncluded || isExcluded) {
        return false;
      }

      return true;
    }
    /**
     * Check if we need to include given emoji.
     *
     * @param {object} emoji - The raw emoji object.
     * @return {boolean} - Whether to include the emoji.
     */

  }, {
    key: "isEmojiNeeded",
    value: function isEmojiNeeded(emoji) {
      if (this._emojisFilter) {
        return this._emojisFilter(emoji);
      }

      return true;
    }
  }]);

  return EmojiIndex;
}();
var EmojiData =
/*#__PURE__*/
function () {
  function EmojiData(data) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, EmojiData);

    this._data = Object.assign({}, data);
    this._skins = null;

    if (this._data.skin_variations) {
      this._skins = [];

      for (var skinIdx in SKINS) {
        var skinKey = SKINS[skinIdx];
        var variationData = this._data.skin_variations[skinKey];
        var skinData = Object.assign({}, data);

        for (var k in variationData) {
          skinData[k] = variationData[k];
        }

        delete skinData.skin_variations;

        this._skins.push(new EmojiData(skinData));
      }
    }

    this._sanitized = sanitize(this._data);

    for (var key in this._sanitized) {
      this[key] = this._sanitized[key];
    }

    this.short_names = this._data.short_names;
    this.short_name = this._data.short_names[0];
    Object.freeze(this);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(EmojiData, [{
    key: "getSkin",
    value: function getSkin(skinIdx) {
      if (skinIdx && skinIdx != 'native' && this._skins) {
        return this._skins[skinIdx - 1];
      }

      return this;
    }
  }, {
    key: "getPosition",
    value: function getPosition() {
      var multiply = 100 / (SHEET_COLUMNS - 1),
          x = Math.round(multiply * this._data.sheet_x * 100) / 100,
          y = Math.round(multiply * this._data.sheet_y * 100) / 100;
      return "".concat(x, "% ").concat(y, "%");
    }
  }]);

  return EmojiData;
}();
var EmojiView =
/*#__PURE__*/
function () {
  /**
   * emoji - Emoji to display
   * set - string, emoji set name
   * native - boolean, whether to render native emoji
   * fallback - fallback function to render missing emoji, optional
   * emojiTooltip - wether we need to show the emoji tooltip, optional
   * emojiSize - emoji size in pixels, optional
   */
  function EmojiView(emoji, skin, set, native, fallback, emojiTooltip, emojiSize) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, EmojiView);

    this._emoji = emoji;
    this._native = native;
    this._skin = skin;
    this._set = set;
    this._fallback = fallback;
    this.canRender = this._canRender();
    this.cssClass = this._cssClass();
    this.cssStyle = this._cssStyle(emojiSize);
    this.content = this._content();
    this.title = emojiTooltip === true ? emoji.short_name : null;
    Object.freeze(this);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(EmojiView, [{
    key: "getEmoji",
    value: function getEmoji() {
      return this._emoji.getSkin(this._skin);
    }
  }, {
    key: "_canRender",
    value: function _canRender() {
      return this._isCustom() || this._isNative() || this._hasEmoji() || this._fallback;
    }
  }, {
    key: "_cssClass",
    value: function _cssClass() {
      return ['emoji-set-' + this._set, 'emoji-type-' + this._emojiType()];
    }
  }, {
    key: "_cssStyle",
    value: function _cssStyle(emojiSize) {
      var cssStyle = {};

      if (this._isCustom()) {
        cssStyle = {
          backgroundImage: 'url(' + this.getEmoji()._data.imageUrl + ')',
          backgroundSize: '100%'
        };
      }

      if (this._hasEmoji() && !this._isNative()) {
        cssStyle = {
          backgroundPosition: this.getEmoji().getPosition()
        };
      }

      if (emojiSize) {
        if (this._isNative()) {
          // Set font-size for native emoji.
          cssStyle = Object.assign(cssStyle, {
            // font-size is used for native emoji which we need
            // to scale with 0.8 factor to have them look approximately
            // the same size as image-based emojl.
            fontSize: Math.round(emojiSize * 0.8 * 10) / 10 + 'px'
          });
        } else {
          // Set width/height for image emoji.
          cssStyle = Object.assign(cssStyle, {
            width: emojiSize + 'px',
            height: emojiSize + 'px'
          });
        }
      }

      return cssStyle;
    }
  }, {
    key: "_content",
    value: function _content() {
      if (this._isCustom()) {
        return '';
      }

      if (this._isNative()) {
        return this.getEmoji().native;
      }

      if (this._hasEmoji()) {
        return '';
      }

      return this._fallback ? this._fallback(this.getEmoji()) : null;
    }
  }, {
    key: "_isNative",
    value: function _isNative() {
      return this._native;
    }
  }, {
    key: "_isCustom",
    value: function _isCustom() {
      return this.getEmoji().custom;
    }
  }, {
    key: "_hasEmoji",
    value: function _hasEmoji() {
      return this.getEmoji()._data && this.getEmoji()._data['has_img_' + this._set];
    }
  }, {
    key: "_emojiType",
    value: function _emojiType() {
      if (this._isCustom()) {
        return 'custom';
      }

      if (this._isNative()) {
        return 'native';
      }

      if (this._hasEmoji()) {
        return 'image';
      }

      return 'fallback';
    }
  }]);

  return EmojiView;
}();

function sanitize(emoji) {
  var name = emoji.name,
      short_names = emoji.short_names,
      skin_tone = emoji.skin_tone,
      skin_variations = emoji.skin_variations,
      emoticons = emoji.emoticons,
      unified = emoji.unified,
      custom = emoji.custom,
      imageUrl = emoji.imageUrl,
      id = emoji.id || short_names[0],
      colons = ":".concat(id, ":");

  if (custom) {
    return {
      id: id,
      name: name,
      colons: colons,
      emoticons: emoticons,
      custom: custom,
      imageUrl: imageUrl
    };
  }

  if (skin_tone) {
    colons += ":skin-tone-".concat(skin_tone, ":");
  }

  return {
    id: id,
    name: name,
    colons: colons,
    emoticons: emoticons,
    unified: unified.toLowerCase(),
    skin: skin_tone || (skin_variations ? 1 : null),
    native: Object(_index__WEBPACK_IMPORTED_MODULE_2__["unifiedToNative"])(unified)
  };
}

/***/ }),

/***/ "./src/utils/frequently.js":
/*!*********************************!*\
  !*** ./src/utils/frequently.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "./src/utils/store.js");

var DEFAULTS = ['+1', 'grinning', 'kissing_heart', 'heart_eyes', 'laughing', 'stuck_out_tongue_winking_eye', 'sweat_smile', 'joy', 'scream', 'disappointed', 'unamused', 'weary', 'sob', 'sunglasses', 'heart', 'poop'];
var frequently, initialized;
var defaults = {};

function init() {
  initialized = true;
  frequently = _store__WEBPACK_IMPORTED_MODULE_0__["default"].get('frequently');
}

function add(emoji) {
  if (!initialized) init();
  var id = emoji.id;
  frequently || (frequently = defaults);
  frequently[id] || (frequently[id] = 0);
  frequently[id] += 1;
  _store__WEBPACK_IMPORTED_MODULE_0__["default"].set('last', id);
  _store__WEBPACK_IMPORTED_MODULE_0__["default"].set('frequently', frequently);
}

function get(maxNumber) {
  if (!initialized) init();

  if (!frequently) {
    defaults = {};
    var result = [];
    var defaultLength = Math.min(maxNumber, DEFAULTS.length);

    for (var i = 0; i < defaultLength; i++) {
      defaults[DEFAULTS[i]] = defaultLength - i;
      result.push(DEFAULTS[i]);
    }

    return result;
  }

  var quantity = maxNumber;
  var frequentlyKeys = [];

  for (var key in frequently) {
    if (frequently.hasOwnProperty(key)) {
      frequentlyKeys.push(key);
    }
  }

  var sorted = frequentlyKeys.sort(function (a, b) {
    return frequently[a] - frequently[b];
  }).reverse();
  var sliced = sorted.slice(0, quantity);
  var last = _store__WEBPACK_IMPORTED_MODULE_0__["default"].get('last');

  if (last && sliced.indexOf(last) == -1) {
    sliced.pop();
    sliced.push(last);
  }

  return sliced;
}

/* harmony default export */ __webpack_exports__["default"] = ({
  add: add,
  get: get
});

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! exports provided: uniq, intersect, deepMerge, unifiedToNative, measureScrollbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniq", function() { return uniq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intersect", function() { return intersect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepMerge", function() { return deepMerge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unifiedToNative", function() { return unifiedToNative; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "measureScrollbar", function() { return measureScrollbar; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _polyfills_stringFromCodePoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../polyfills/stringFromCodePoint */ "./src/polyfills/stringFromCodePoint.js");



function unifiedToNative(unified) {
  var unicodes = unified.split('-'),
      codePoints = unicodes.map(function (u) {
    return "0x".concat(u);
  });
  return _polyfills_stringFromCodePoint__WEBPACK_IMPORTED_MODULE_1__["default"].apply(null, codePoints);
}

function uniq(arr) {
  return arr.reduce(function (acc, item) {
    if (acc.indexOf(item) === -1) {
      acc.push(item);
    }

    return acc;
  }, []);
}

function intersect(a, b) {
  var uniqA = uniq(a);
  var uniqB = uniq(b);
  return uniqA.filter(function (item) {
    return uniqB.indexOf(item) >= 0;
  });
}

function deepMerge(a, b) {
  var o = {};

  for (var key in a) {
    var originalValue = a[key],
        value = originalValue;

    if (b.hasOwnProperty(key)) {
      value = b[key];
    }

    if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(value) === 'object') {
      value = deepMerge(originalValue, value);
    }

    o[key] = value;
  }

  return o;
} // https://github.com/sonicdoe/measure-scrollbar


function measureScrollbar() {
  if (typeof document == 'undefined') return 0;
  var div = document.createElement('div');
  div.style.width = '100px';
  div.style.height = '100px';
  div.style.overflow = 'scroll';
  div.style.position = 'absolute';
  div.style.top = '-9999px';
  document.body.appendChild(div);
  var scrollbarWidth = div.offsetWidth - div.clientWidth;
  document.body.removeChild(div);
  return scrollbarWidth;
}



/***/ }),

/***/ "./src/utils/shared-props.js":
/*!***********************************!*\
  !*** ./src/utils/shared-props.js ***!
  \***********************************/
/*! exports provided: EmojiProps, PickerProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmojiProps", function() { return EmojiProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickerProps", function() { return PickerProps; });
var EmojiProps = {
  native: {
    type: Boolean,
    default: false
  },
  tooltip: {
    type: Boolean,
    default: false
  },
  fallback: {
    type: Function
  },
  skin: {
    type: Number,
    default: 1
  },
  set: {
    type: String,
    default: 'apple'
  },
  emoji: {
    type: [String, Object],
    required: true
  }
};
var PickerProps = {
  perLine: {
    type: Number,
    default: 9
  },
  maxSearchResults: {
    type: Number,
    default: 75
  },
  emojiSize: {
    type: Number,
    default: 24
  },
  title: {
    type: String,
    default: 'Emoji Mart™'
  },
  emoji: {
    type: String,
    default: 'department_store'
  },
  color: {
    type: String,
    default: '#ae65c5'
  },
  set: {
    type: String,
    default: 'apple'
  },
  skin: {
    type: Number,
    default: null
  },
  defaultSkin: {
    type: Number,
    default: 1
  },
  native: {
    type: Boolean,
    default: false
  },
  emojiTooltip: {
    type: Boolean,
    default: false
  },
  autoFocus: {
    type: Boolean,
    default: false
  },
  i18n: {
    type: Object,
    default: function _default() {
      return {};
    }
  },
  showPreview: {
    type: Boolean,
    default: true
  },
  showSearch: {
    type: Boolean,
    default: true
  },
  showCategories: {
    type: Boolean,
    default: true
  },
  showSkinTones: {
    type: Boolean,
    default: true
  },
  infiniteScroll: {
    type: Boolean,
    default: true
  },
  pickerStyles: {
    type: Object,
    default: function _default() {
      return {};
    }
  }
};


/***/ }),

/***/ "./src/utils/store.js":
/*!****************************!*\
  !*** ./src/utils/store.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var NAMESPACE = 'emoji-mart';
var _JSON = JSON;
var isLocalStorageSupported = typeof window !== 'undefined' && 'localStorage' in window;
var getter;
var setter;

function setHandlers(handlers) {
  handlers || (handlers = {});
  getter = handlers.getter;
  setter = handlers.setter;
}

function setNamespace(namespace) {
  NAMESPACE = namespace;
}

function update(state) {
  for (var key in state) {
    var value = state[key];
    set(key, value);
  }
}

function set(key, value) {
  if (setter) {
    setter(key, value);
  } else {
    if (!isLocalStorageSupported) return;

    try {
      window.localStorage["".concat(NAMESPACE, ".").concat(key)] = _JSON.stringify(value);
    } catch (e) {}
  }
}

function get(key) {
  if (getter) {
    return getter(key);
  } else {
    if (!isLocalStorageSupported) return;

    try {
      var value = window.localStorage["".concat(NAMESPACE, ".").concat(key)];
    } catch (e) {
      return;
    }

    if (value) {
      return JSON.parse(value);
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({
  update: update,
  set: set,
  get: get,
  setNamespace: setNamespace,
  setHandlers: setHandlers
});

/***/ }),

/***/ "./src/vendor/raf-polyfill.js":
/*!************************************!*\
  !*** ./src/vendor/raf-polyfill.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
// MIT license
var isWindowAvailable = typeof window !== 'undefined';
isWindowAvailable && function () {
  var lastTime = 0;
  var vendors = ['ms', 'moz', 'webkit', 'o'];

  for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
  }

  if (!window.requestAnimationFrame) window.requestAnimationFrame = function (callback, element) {
    var currTime = new Date().getTime();
    var timeToCall = Math.max(0, 16 - (currTime - lastTime));
    var id = window.setTimeout(function () {
      callback(currTime + timeToCall);
    }, timeToCall);
    lastTime = currTime + timeToCall;
    return id;
  };
  if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function (id) {
    clearTimeout(id);
  };
}();

/***/ }),

/***/ "vue":
/*!******************************************************************************!*\
  !*** external {"root":"Vue","commonjs2":"vue","commonjs":"vue","amd":"vue"} ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_vue__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9FbW9qaU1hcnQvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0Vtb2ppTWFydC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvZXh0ZXJuYWwgXCIuLi8uLi8uLi9kYXRhL2FsbC5qc29uXCIiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFNwcmVhZC5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0L3NyYy9jb21wb25lbnRzL2FuY2hvcnMudnVlIiwid2VicGFjazovL0Vtb2ppTWFydC9zcmMvY29tcG9uZW50cy9jYXRlZ29yeS52dWUiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0L3NyYy9jb21wb25lbnRzL2Vtb2ppL2Vtb2ppLnZ1ZSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvc3JjL2NvbXBvbmVudHMvZW1vamkvbmltYmxlRW1vamkudnVlIiwid2VicGFjazovL0Vtb2ppTWFydC9zcmMvY29tcG9uZW50cy9waWNrZXIvbmltYmxlUGlja2VyLnZ1ZSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvc3JjL2NvbXBvbmVudHMvcGlja2VyL3BpY2tlci52dWUiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0L3NyYy9jb21wb25lbnRzL3ByZXZpZXcudnVlIiwid2VicGFjazovL0Vtb2ppTWFydC9zcmMvY29tcG9uZW50cy9zZWFyY2gudnVlIiwid2VicGFjazovL0Vtb2ppTWFydC9zcmMvY29tcG9uZW50cy9za2lucy52dWUiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vbm9kZV9tb2R1bGVzL3Z1ZS12aXJ0dWFsLXNjcm9sbGVyL2Rpc3QvdnVlLXZpcnR1YWwtc2Nyb2xsZXIuY3NzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9hbmNob3JzLnZ1ZT8zNGRhIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL2NhdGVnb3J5LnZ1ZT80MjRhIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL2Vtb2ppL25pbWJsZUVtb2ppLnZ1ZT8zN2M1Iiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL3BpY2tlci9uaW1ibGVQaWNrZXIudnVlPzA3YmMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvcHJldmlldy52dWU/ZjcxOCIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9zZWFyY2gudnVlPzJkMmIiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvc2tpbnMudnVlP2MzNDkiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9saXN0VG9TdHlsZXMuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vbm9kZV9tb2R1bGVzL3Z1ZS12aXJ0dWFsLXNjcm9sbGVyL2Rpc3QvdnVlLXZpcnR1YWwtc2Nyb2xsZXIuY3NzP2ExMmYiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vbm9kZV9tb2R1bGVzL3Z1ZS12aXJ0dWFsLXNjcm9sbGVyL2Rpc3QvdnVlLXZpcnR1YWwtc2Nyb2xsZXIuZXNtLmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvYW5jaG9ycy52dWUiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvYW5jaG9ycy52dWU/YWNjYSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9hbmNob3JzLnZ1ZT8xYjk4Iiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL2NhdGVnb3J5LnZ1ZSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9jYXRlZ29yeS52dWU/MjM5NSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9jYXRlZ29yeS52dWU/NzNiNSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9lbW9qaS9lbW9qaS52dWUiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvZW1vamkvZW1vamkudnVlPzQ3OTMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvZW1vamkvbmltYmxlRW1vamkudnVlIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL2Vtb2ppL25pbWJsZUVtb2ppLnZ1ZT8wMDIxIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL2Vtb2ppL25pbWJsZUVtb2ppLnZ1ZT9jMTNjIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL3BpY2tlci9uaW1ibGVQaWNrZXIudnVlIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL3BpY2tlci9uaW1ibGVQaWNrZXIudnVlP2NiZmQiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvcGlja2VyL25pbWJsZVBpY2tlci52dWU/YmQwZCIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9waWNrZXIvcGlja2VyLnZ1ZSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9waWNrZXIvcGlja2VyLnZ1ZT9jN2Q5Iiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL3ByZXZpZXcudnVlIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL3ByZXZpZXcudnVlPzIzYTkiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvcHJldmlldy52dWU/ZTM1OSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9zZWFyY2gudnVlIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL3NlYXJjaC52dWU/MTNmMSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9zZWFyY2gudnVlP2U1ODYiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvc2tpbnMudnVlIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL3NraW5zLnZ1ZT9kN2M0Iiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL3NraW5zLnZ1ZT85OTVlIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvcG9seWZpbGxzL3N0cmluZ0Zyb21Db2RlUG9pbnQuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL3N2Z3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL3V0aWxzL2RhdGEuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL3V0aWxzL2Vtb2ppLWRhdGEuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL3V0aWxzL2ZyZXF1ZW50bHkuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL3V0aWxzL2luZGV4LmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy91dGlscy9zaGFyZWQtcHJvcHMuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL3V0aWxzL3N0b3JlLmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy92ZW5kb3IvcmFmLXBvbHlmaWxsLmpzIiwid2VicGFjazovL0Vtb2ppTWFydC9leHRlcm5hbCB7XCJyb290XCI6XCJWdWVcIixcImNvbW1vbmpzMlwiOlwidnVlXCIsXCJjb21tb25qc1wiOlwidnVlXCIsXCJhbWRcIjpcInZ1ZVwifSJdLCJuYW1lcyI6WyJfU3RyaW5nIiwiU3RyaW5nIiwiZnJvbUNvZGVQb2ludCIsInN0cmluZ0Zyb21Db2RlUG9pbnQiLCJNQVhfU0laRSIsImNvZGVVbml0cyIsImhpZ2hTdXJyb2dhdGUiLCJsb3dTdXJyb2dhdGUiLCJpbmRleCIsImxlbmd0aCIsImFyZ3VtZW50cyIsInJlc3VsdCIsImNvZGVQb2ludCIsIk51bWJlciIsImlzRmluaXRlIiwiTWF0aCIsImZsb29yIiwiUmFuZ2VFcnJvciIsInB1c2giLCJmcm9tQ2hhckNvZGUiLCJhcHBseSIsIlNWR3MiLCJhY3Rpdml0eSIsImN1c3RvbSIsImZsYWdzIiwiZm9vZHMiLCJuYXR1cmUiLCJvYmplY3RzIiwicGVvcGxlIiwicGxhY2VzIiwicmVjZW50Iiwic3ltYm9scyIsIm1hcHBpbmciLCJuYW1lIiwidW5pZmllZCIsIm5vbl9xdWFsaWZpZWQiLCJoYXNfaW1nX2FwcGxlIiwiaGFzX2ltZ19nb29nbGUiLCJoYXNfaW1nX3R3aXR0ZXIiLCJoYXNfaW1nX2Vtb2ppb25lIiwiaGFzX2ltZ19mYWNlYm9vayIsImhhc19pbWdfbWVzc2VuZ2VyIiwia2V5d29yZHMiLCJzaGVldCIsImVtb3RpY29ucyIsInRleHQiLCJzaG9ydF9uYW1lcyIsImFkZGVkX2luIiwiYnVpbGRTZWFyY2giLCJlbW9qaSIsInNlYXJjaCIsImFkZFRvU2VhcmNoIiwic3RyaW5ncyIsInNwbGl0IiwiQXJyYXkiLCJpc0FycmF5IiwiZm9yRWFjaCIsInN0cmluZyIsInMiLCJ0b0xvd2VyQ2FzZSIsImluZGV4T2YiLCJqb2luIiwiY29tcHJlc3MiLCJmaWx0ZXIiLCJzaG9ydF9uYW1lIiwic2hlZXRfeCIsInNoZWV0X3kiLCJwYXJzZUludCIsImtleSIsInZhbHVlIiwiZGVlcEZyZWV6ZSIsIm9iamVjdCIsInByb3BOYW1lcyIsIk9iamVjdCIsImdldE93blByb3BlcnR5TmFtZXMiLCJmcmVlemUiLCJ1bmNvbXByZXNzIiwiZGF0YSIsImNvbXByZXNzZWQiLCJpZCIsImVtb2ppcyIsInVuc2hpZnQiLCJ0b0ZpeGVkIiwibW9kdWxlIiwiZXhwb3J0cyIsIlNIRUVUX0NPTFVNTlMiLCJDT0xPTlNfUkVHRVgiLCJTS0lOUyIsIkVtb2ppSW5kZXgiLCJlbW9qaXNUb1Nob3dGaWx0ZXIiLCJpbmNsdWRlIiwiZXhjbHVkZSIsInJlY2VudExlbmd0aCIsIl9kYXRhIiwiX2Vtb2ppc0ZpbHRlciIsIl9pbmNsdWRlIiwiX2V4Y2x1ZGUiLCJfY3VzdG9tIiwiX3JlY2VudCIsImZyZXF1ZW50bHkiLCJnZXQiLCJfZW1vamlzIiwiX25hdGl2ZUVtb2ppcyIsIl9lbW90aWNvbnMiLCJfY2F0ZWdvcmllcyIsIl9yZWNlbnRDYXRlZ29yeSIsIl9jdXN0b21DYXRlZ29yeSIsIl9zZWFyY2hJbmRleCIsImJ1aWxkSW5kZXgiLCJjYXRlZ29yaWVzIiwiY2F0ZWdvcnlEYXRhIiwiaXNDYXRlZ29yeU5lZWRlZCIsImNhdGVnb3J5IiwiZW1vamlJZCIsImFkZEVtb2ppIiwiY3VzdG9tRW1vamkiLCJhZGRDdXN0b21FbW9qaSIsIm1hcCIsImhhc0Vtb2ppIiwic2tpbiIsIm1hdGNoZXMiLCJtYXRjaCIsImFsaWFzZXMiLCJoYXNPd25Qcm9wZXJ0eSIsImVtb2ppT2JqZWN0IiwiZ2V0U2tpbiIsIkVycm9yIiwidW5pY29kZUVtb2ppIiwibWF4UmVzdWx0cyIsInZhbHVlcyIsImFsbFJlc3VsdHMiLCJjdXJyZW50SW5kZXgiLCJjaGFySW5kZXgiLCJjaGFyIiwicmVzdWx0cyIsInNjb3JlcyIsInN1YiIsInN1YnN0ciIsInN1YkluZGV4Iiwic2NvcmUiLCJzb3J0IiwiYSIsImIiLCJhU2NvcmUiLCJiU2NvcmUiLCJpbnRlcnNlY3QiLCJzbGljZSIsImVtb2ppRGF0YSIsImFzc2lnbiIsIkVtb2ppRGF0YSIsImlzRW1vamlOZWVkZWQiLCJuYXRpdmUiLCJfc2tpbnMiLCJpZHgiLCJlbW90aWNvbiIsImlzSW5jbHVkZWQiLCJpc0V4Y2x1ZGVkIiwic2tpbl92YXJpYXRpb25zIiwic2tpbklkeCIsInNraW5LZXkiLCJ2YXJpYXRpb25EYXRhIiwic2tpbkRhdGEiLCJrIiwiX3Nhbml0aXplZCIsInNhbml0aXplIiwibXVsdGlwbHkiLCJ4Iiwicm91bmQiLCJ5IiwiRW1vamlWaWV3Iiwic2V0IiwiZmFsbGJhY2siLCJlbW9qaVRvb2x0aXAiLCJlbW9qaVNpemUiLCJfZW1vamkiLCJfbmF0aXZlIiwiX3NraW4iLCJfc2V0IiwiX2ZhbGxiYWNrIiwiY2FuUmVuZGVyIiwiX2NhblJlbmRlciIsImNzc0NsYXNzIiwiX2Nzc0NsYXNzIiwiY3NzU3R5bGUiLCJfY3NzU3R5bGUiLCJjb250ZW50IiwiX2NvbnRlbnQiLCJ0aXRsZSIsIl9pc0N1c3RvbSIsIl9pc05hdGl2ZSIsIl9oYXNFbW9qaSIsIl9lbW9qaVR5cGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJnZXRFbW9qaSIsImltYWdlVXJsIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJnZXRQb3NpdGlvbiIsImZvbnRTaXplIiwid2lkdGgiLCJoZWlnaHQiLCJza2luX3RvbmUiLCJjb2xvbnMiLCJ1bmlmaWVkVG9OYXRpdmUiLCJERUZBVUxUUyIsImluaXRpYWxpemVkIiwiZGVmYXVsdHMiLCJpbml0Iiwic3RvcmUiLCJhZGQiLCJtYXhOdW1iZXIiLCJkZWZhdWx0TGVuZ3RoIiwibWluIiwiaSIsInF1YW50aXR5IiwiZnJlcXVlbnRseUtleXMiLCJzb3J0ZWQiLCJyZXZlcnNlIiwic2xpY2VkIiwibGFzdCIsInBvcCIsInVuaWNvZGVzIiwiY29kZVBvaW50cyIsInUiLCJ1bmlxIiwiYXJyIiwicmVkdWNlIiwiYWNjIiwiaXRlbSIsInVuaXFBIiwidW5pcUIiLCJkZWVwTWVyZ2UiLCJvIiwib3JpZ2luYWxWYWx1ZSIsIm1lYXN1cmVTY3JvbGxiYXIiLCJkb2N1bWVudCIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsIm92ZXJmbG93IiwicG9zaXRpb24iLCJ0b3AiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJzY3JvbGxiYXJXaWR0aCIsIm9mZnNldFdpZHRoIiwiY2xpZW50V2lkdGgiLCJyZW1vdmVDaGlsZCIsIkVtb2ppUHJvcHMiLCJ0eXBlIiwiQm9vbGVhbiIsImRlZmF1bHQiLCJ0b29sdGlwIiwiRnVuY3Rpb24iLCJyZXF1aXJlZCIsIlBpY2tlclByb3BzIiwicGVyTGluZSIsIm1heFNlYXJjaFJlc3VsdHMiLCJjb2xvciIsImRlZmF1bHRTa2luIiwiYXV0b0ZvY3VzIiwiaTE4biIsInNob3dQcmV2aWV3Iiwic2hvd1NlYXJjaCIsInNob3dDYXRlZ29yaWVzIiwic2hvd1NraW5Ub25lcyIsImluZmluaXRlU2Nyb2xsIiwicGlja2VyU3R5bGVzIiwiTkFNRVNQQUNFIiwiX0pTT04iLCJKU09OIiwiaXNMb2NhbFN0b3JhZ2VTdXBwb3J0ZWQiLCJ3aW5kb3ciLCJnZXR0ZXIiLCJzZXR0ZXIiLCJzZXRIYW5kbGVycyIsImhhbmRsZXJzIiwic2V0TmFtZXNwYWNlIiwibmFtZXNwYWNlIiwidXBkYXRlIiwic3RhdGUiLCJsb2NhbFN0b3JhZ2UiLCJzdHJpbmdpZnkiLCJlIiwicGFyc2UiLCJpc1dpbmRvd0F2YWlsYWJsZSIsImxhc3RUaW1lIiwidmVuZG9ycyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiY2FsbGJhY2siLCJlbGVtZW50IiwiY3VyclRpbWUiLCJEYXRlIiwiZ2V0VGltZSIsInRpbWVUb0NhbGwiLCJtYXgiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztB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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLFlBQVksZUFBZTtBQUMzQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7QUFNQTtBQUNBLGtCQUFrQixZQUFZLEVBQUU7QUFDaEM7O0FBRUE7QUFDQTtBQUNBLE1BQU0sS0FBZ0QsRUFBRSxFQUVyRCxVQUFVLEtBQXFCO0FBQ2xDO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQSxtQ0FBbUMsV0FBVzs7QUFF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eUMsT0FBTztBQUNoRDtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLG9DQUFvQyxlQUFlO0FBQ25EO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGNBQWM7QUFDbEQsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtRkFBbUY7QUFDbkY7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLGVBQWUsMENBQUc7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7O0FBRVQ7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FB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V0FBT3hOLEVBQVA7QUFDRCxHQVREO0FBV0YsTUFBSSxDQUFDaU0sTUFBTSxDQUFDaUIsb0JBQVosRUFDRWpCLE1BQU0sQ0FBQ2lCLG9CQUFQLEdBQThCLFVBQVNsTixFQUFULEVBQWE7QUFDekMyTixnQkFBWSxDQUFDM04sRUFBRCxDQUFaO0FBQ0QsR0FGRDtBQUdILENBNUJELEVBREYsQzs7Ozs7Ozs7Ozs7QUNUQSxpRCIsImZpbGUiOiJlbW9qaS1tYXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiLi4vLi4vLi4vZGF0YS9hbGwuanNvblwiKSwgcmVxdWlyZShcInZ1ZVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCIuLi8uLi8uLi9kYXRhL2FsbC5qc29uXCIsIFwidnVlXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkVtb2ppTWFydFwiXSA9IGZhY3RvcnkocmVxdWlyZShcIi4uLy4uLy4uL2RhdGEvYWxsLmpzb25cIiksIHJlcXVpcmUoXCJ2dWVcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkVtb2ppTWFydFwiXSA9IGZhY3Rvcnkocm9vdFtcIi4uLy4uLy4uL2RhdGEvYWxsLmpzb25cIl0sIHJvb3RbXCJWdWVcIl0pO1xufSkod2luZG93LCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19kYXRhX2FsbF9qc29uX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfdnVlX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fZGF0YV9hbGxfanNvbl9fOyIsImZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcnIyW2ldID0gYXJyW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBhcnIyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aG91dEhvbGVzOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3M7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5OyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaXRlcikgPT09IFwiW29iamVjdCBBcmd1bWVudHNdXCIpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXk7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2VcIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlU3ByZWFkOyIsInZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCIuL2RlZmluZVByb3BlcnR5XCIpO1xuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuICAgIHZhciBvd25LZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcblxuICAgIGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgb3duS2V5cyA9IG93bktleXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKS5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIHN5bSkuZW51bWVyYWJsZTtcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBvd25LZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX29iamVjdFNwcmVhZDsiLCJ2YXIgYXJyYXlXaXRob3V0SG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhvdXRIb2xlc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheVwiKTtcblxudmFyIG5vbkl0ZXJhYmxlU3ByZWFkID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVTcHJlYWRcIik7XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdG9Db25zdW1hYmxlQXJyYXk7IiwiZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mMiA9IGZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZjIgPSBmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2YyKG9iaik7IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBfdHlwZW9mMihTeW1ib2wuaXRlcmF0b3IpID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBfdHlwZW9mMihvYmopO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiBfdHlwZW9mMihvYmopO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiPHRlbXBsYXRlPlxuXG48ZGl2IGNsYXNzPVwiZW1vamktbWFydC1hbmNob3JzXCI+XG4gIDxzcGFuXG4gICAgdi1mb3I9XCJjYXRlZ29yeSBpbiBjYXRlZ29yaWVzXCJcbiAgICA6a2V5PVwiY2F0ZWdvcnkuaWRcIlxuICAgIDpjbGFzcz1cInsgJ2Vtb2ppLW1hcnQtYW5jaG9yJzogdHJ1ZSwgJ2Vtb2ppLW1hcnQtYW5jaG9yLXNlbGVjdGVkJzogY2F0ZWdvcnkuaWQgPT0gYWN0aXZlQ2F0ZWdvcnkuaWQgfVwiXG4gICAgOnN0eWxlPVwieyAnY29sb3InOiAoY2F0ZWdvcnkuaWQgPT0gYWN0aXZlQ2F0ZWdvcnkuaWQgPyBjb2xvciA6ICcnKSB9XCJcbiAgICA6ZGF0YS10aXRsZT1cImkxOG4uY2F0ZWdvcmllc1tjYXRlZ29yeS5pZF1cIlxuICAgIEBjbGljaz1cIiRlbWl0KCdjbGljaycsIGNhdGVnb3J5KVwiPlxuICAgIDxkaXYgdi1odG1sPVwic3Znc1tjYXRlZ29yeS5pZF1cIi8+XG4gICAgPHNwYW4gY2xhc3M9XCJlbW9qaS1tYXJ0LWFuY2hvci1iYXJcIiA6c3R5bGU9XCJ7IGJhY2tncm91bmRDb2xvcjogY29sb3IgfVwiPjwvc3Bhbj5cbiAgPC9zcGFuPlxuPC9kaXY+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCBzdmdzIGZyb20gJy4uL3N2Z3MnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IHtcbiAgICBpMThuOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgY29sb3I6IHtcbiAgICAgIHR5cGU6IFN0cmluZ1xuICAgIH0sXG4gICAgY2F0ZWdvcmllczoge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgYWN0aXZlQ2F0ZWdvcnk6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIGRlZmF1bHQoKSB7XG4gICAgICAgIHJldHVybiB7fVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLnN2Z3MgPSBzdmdzXG4gIH1cbn1cblxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG5cbjxkaXYgOmNsYXNzPVwieyAnZW1vamktbWFydC1jYXRlZ29yeSc6IHRydWUsICdlbW9qaS1tYXJ0LW5vLXJlc3VsdHMnOiAhaGFzUmVzdWx0cyB9XCIgdi1pZj1cImlzVmlzaWJsZSAmJiAoaXNTZWFyY2ggfHwgaGFzUmVzdWx0cylcIj5cbiAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtY2F0ZWdvcnktbGFiZWxcIj5cbiAgICA8c3Bhbj57eyBpMThuLmNhdGVnb3JpZXNbaWRdIH19PC9zcGFuPlxuICA8L2Rpdj5cblxuICA8dGVtcGxhdGUgdi1mb3I9XCJ7IGVtb2ppT2JqZWN0LCBlbW9qaVZpZXd9IGluIGVtb2ppT2JqZWN0c1wiPlxuICAgIDxzcGFuXG4gICAgICB2LWlmPVwiZW1vamlWaWV3LmNhblJlbmRlclwiXG4gICAgICA6ZGF0YS10aXRsZT1cImVtb2ppT2JqZWN0LnNob3J0X25hbWVcIlxuICAgICAgOnRpdGxlPVwiZW1vamlWaWV3LnRpdGxlXCJcbiAgICAgIGNsYXNzPVwiZW1vamktbWFydC1lbW9qaVwiXG4gICAgICBAbW91c2VlbnRlcj1cImVtb2ppUHJvcHMub25FbnRlcihlbW9qaVZpZXcuZ2V0RW1vamkoKSlcIlxuICAgICAgQG1vdXNlbGVhdmU9XCJlbW9qaVByb3BzLm9uTGVhdmUoZW1vamlWaWV3LmdldEVtb2ppKCkpXCJcbiAgICAgIEBjbGljaz1cImVtb2ppUHJvcHMub25DbGljayhlbW9qaVZpZXcuZ2V0RW1vamkoKSlcIj5cbiAgICAgIDxzcGFuICA6Y2xhc3M9XCJlbW9qaVZpZXcuY3NzQ2xhc3NcIiA6c3R5bGU9XCJlbW9qaVZpZXcuY3NzU3R5bGVcIj57e2Vtb2ppVmlldy5jb250ZW50fX08L3NwYW4+XG4gICAgPC9zcGFuPlxuICA8L3RlbXBsYXRlPlxuXG4gIDxkaXYgdi1pZj1cIiFoYXNSZXN1bHRzXCI+XG4gICAgPG5pbWJsZS1lbW9qaVxuICAgICAgOmRhdGE9XCJkYXRhXCJcbiAgICAgIGVtb2ppPVwic2xldXRoX29yX3NweVwiXG4gICAgICA6bmF0aXZlPVwiZW1vamlQcm9wcy5uYXRpdmVcIlxuICAgICAgOnNraW49XCJlbW9qaVByb3BzLnNraW5cIlxuICAgICAgOnNldD1cImVtb2ppUHJvcHMuc2V0XCJcbiAgICAvPlxuICAgIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LW5vLXJlc3VsdHMtbGFiZWxcIj57eyBpMThuLm5vdGZvdW5kIH19PC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCB7IEVtb2ppVmlldyB9IGZyb20gJy4uL3V0aWxzL2Vtb2ppLWRhdGEnXG5pbXBvcnQgTmltYmxlRW1vamkgZnJvbSAnLi9lbW9qaS9uaW1ibGVFbW9qaSdcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiB7XG4gICAgZGF0YToge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIGkxOG46IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBpZDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIG5hbWU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBlbW9qaXM6IHtcbiAgICAgIHR5cGU6IEFycmF5XG4gICAgfSxcbiAgICBlbW9qaVByb3BzOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBpc1Zpc2libGUoKSB7XG4gICAgICByZXR1cm4gISF0aGlzLmVtb2ppc1xuICAgIH0sXG4gICAgaXNTZWFyY2goKSB7XG4gICAgICByZXR1cm4gdGhpcy5uYW1lID09ICdTZWFyY2gnXG4gICAgfSxcbiAgICBoYXNSZXN1bHRzKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZW1vamlzLmxlbmd0aCA+IDBcbiAgICB9LFxuICAgIGVtb2ppT2JqZWN0cygpIHtcbiAgICAgIHJldHVybiB0aGlzLmVtb2ppcy5tYXAoKGVtb2ppKSA9PiB7XG4gICAgICAgICAgbGV0IGVtb2ppT2JqZWN0ID0gZW1vamlcbiAgICAgICAgICBsZXQgZW1vamlWaWV3ID0gbmV3IEVtb2ppVmlldyhcbiAgICAgICAgICAgIGVtb2ppLFxuICAgICAgICAgICAgdGhpcy5lbW9qaVByb3BzLnNraW4sXG4gICAgICAgICAgICB0aGlzLmVtb2ppUHJvcHMuc2V0LFxuICAgICAgICAgICAgdGhpcy5lbW9qaVByb3BzLm5hdGl2ZSxcbiAgICAgICAgICAgIHRoaXMuZW1vamlQcm9wcy5mYWxsYmFjayxcbiAgICAgICAgICAgIHRoaXMuZW1vamlQcm9wcy5lbW9qaVRvb2x0aXAsXG4gICAgICAgICAgICB0aGlzLmVtb2ppUHJvcHMuZW1vamlTaXplLFxuICAgICAgICAgIClcbiAgICAgICAgICByZXR1cm4geyBlbW9qaU9iamVjdCwgZW1vamlWaWV3IH1cbiAgICAgIH0pXG4gICAgfVxuICB9LFxuICBjb21wb25lbnRzOiB7XG4gICAgTmltYmxlRW1vamlcbiAgfVxufVxuXG48L3NjcmlwdD5cbiIsIjxzY3JpcHQ+XG5pbXBvcnQgZGF0YSBmcm9tICcuLi8uLi8uLi9kYXRhL2FsbC5qc29uJ1xuaW1wb3J0IHsgdW5jb21wcmVzcyB9IGZyb20gJy4uLy4uL3V0aWxzL2RhdGEnXG5pbXBvcnQgeyBFbW9qaUluZGV4IH0gZnJvbSAnLi4vLi4vdXRpbHMvZW1vamktZGF0YSdcbmltcG9ydCBOaW1ibGVFbW9qaSBmcm9tICcuL25pbWJsZUVtb2ppJ1xuXG5pbXBvcnQgeyBFbW9qaVByb3BzIH0gZnJvbSAnLi4vLi4vdXRpbHMvc2hhcmVkLXByb3BzJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGZ1bmN0aW9uYWw6IHRydWUsXG4gIHByb3BzOiB7XG4gICAgLi4uRW1vamlQcm9wcyxcbiAgICBkYXRhOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICBkZWZhdWx0KCkge1xuICAgICAgICBsZXQgaW5kZXggPSBuZXcgRW1vamlJbmRleChkYXRhKVxuICAgICAgICByZXR1cm4gaW5kZXhcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgcmVuZGVyKGgsIGN0eCkge1xuICAgIGxldCB7IGRhdGEsIHByb3BzLCBjaGlsZHJlbiB9ID0gY3R4XG5cbiAgICByZXR1cm4gaChOaW1ibGVFbW9qaSwgeyAuLi5kYXRhLCBwcm9wcyB9LCBjaGlsZHJlbilcbiAgfSxcbn1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuXG48c3BhbiB2LWlmPVwidmlldy5jYW5SZW5kZXJcIiA6dGl0bGU9XCJ2aWV3LnRpdGxlXCIgOmRhdGEtdGl0bGU9XCJ0aXRsZVwiIGNsYXNzPVwiZW1vamktbWFydC1lbW9qaVwiIEBtb3VzZWVudGVyPVwib25Nb3VzZUVudGVyXCIgQG1vdXNlbGVhdmU9XCJvbk1vdXNlTGVhdmVcIiBAY2xpY2s9XCJvbkNsaWNrXCI+XG4gIDxzcGFuICA6Y2xhc3M9XCJ2aWV3LmNzc0NsYXNzXCIgOnN0eWxlPVwidmlldy5jc3NTdHlsZVwiPnt7dmlldy5jb250ZW50fX08L3NwYW4+XG48L3NwYW4+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCB7IEVtb2ppUHJvcHMgfSBmcm9tICcuLi8uLi91dGlscy9zaGFyZWQtcHJvcHMnXG5pbXBvcnQgeyBFbW9qaVZpZXcgfSBmcm9tICcuLi8uLi91dGlscy9lbW9qaS1kYXRhJ1xuXG5jb25zdCBTSEVFVF9DT0xVTU5TID0gNTJcblxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczoge1xuICAgIC4uLkVtb2ppUHJvcHMsXG4gICAgZGF0YToge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgdmlldygpIHtcbiAgICAgIHJldHVybiBuZXcgRW1vamlWaWV3KFxuICAgICAgICB0aGlzLmVtb2ppT2JqZWN0LCB0aGlzLnNraW4sIHRoaXMuc2V0LCB0aGlzLm5hdGl2ZSwgdGhpcy5mYWxsYmFja1xuICAgICAgKVxuICAgIH0sXG4gICAgc2FuaXRpemVkRGF0YSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmVtb2ppT2JqZWN0Ll9zYW5pdGl6ZWRcbiAgICB9LFxuICAgIHRpdGxlKCkge1xuICAgICAgcmV0dXJuIHRoaXMudG9vbHRpcCA/IHRoaXMuZW1vamlPYmplY3Quc2hvcnRfbmFtZSA6IG51bGxcbiAgICB9LFxuICAgIGVtb2ppT2JqZWN0KCkge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLmVtb2ppID09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5lbW9qaSh0aGlzLmVtb2ppKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW1vamlcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGNyZWF0ZWQoKSB7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBvbkNsaWNrKCkge1xuICAgICAgdGhpcy4kZW1pdCgnY2xpY2snLCB0aGlzLmVtb2ppT2JqZWN0KVxuICAgIH0sXG4gICAgb25Nb3VzZUVudGVyKCkge1xuICAgICAgdGhpcy4kZW1pdCgnbW91c2VlbnRlcicsIHRoaXMuZW1vamlPYmplY3QpXG4gICAgfSxcbiAgICBvbk1vdXNlTGVhdmUoKSB7XG4gICAgICB0aGlzLiRlbWl0KCdtb3VzZWxlYXZlJywgdGhpcy5lbW9qaU9iamVjdClcbiAgICB9XG4gIH1cbn1cblxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG5cbjxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0XCIgOnN0eWxlPVwiY3VzdG9tU3R5bGVzXCI+XG4gIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LWJhciBlbW9qaS1tYXJ0LWJhci1hbmNob3JzXCIgdi1pZj1cInNob3dDYXRlZ29yaWVzXCI+XG4gICAgPGFuY2hvcnNcbiAgICAgIDpkYXRhPVwiZGF0YVwiXG4gICAgICA6aTE4bj1cIm1lcmdlZEkxOG5cIlxuICAgICAgOmNvbG9yPVwiY29sb3JcIlxuICAgICAgOmNhdGVnb3JpZXM9XCJjYXRlZ29yaWVzXCJcbiAgICAgIDphY3RpdmUtY2F0ZWdvcnk9XCJhY3RpdmVDYXRlZ29yeVwiXG4gICAgICBAY2xpY2s9XCJvbkFuY2hvckNsaWNrXCJcbiAgICAvPlxuICA8L2Rpdj5cblxuICA8c2xvdCBuYW1lPVwic2VhcmNoVGVtcGxhdGVcIlxuICAgICAgICA6ZGF0YT1cImRhdGFcIlxuICAgICAgICA6aTE4bj1cImkxOG5cIlxuICAgICAgICA6YXV0by1mb2N1cz1cImF1dG9Gb2N1c1wiXG4gICAgICAgIDpvbi1zZWFyY2g9XCJvblNlYXJjaFwiXG4gID5cbiAgICA8c2VhcmNoXG4gICAgICB2LWlmPVwic2hvd1NlYXJjaFwiXG4gICAgICByZWY9XCJzZWFyY2hcIlxuICAgICAgOmRhdGE9XCJkYXRhXCJcbiAgICAgIDppMThuPVwibWVyZ2VkSTE4blwiXG4gICAgICA6YXV0by1mb2N1cz1cImF1dG9Gb2N1c1wiXG4gICAgICA6b24tc2VhcmNoPVwib25TZWFyY2hcIlxuICAgICAgQHNlYXJjaD1cIm9uU2VhcmNoXCJcbiAgICAvPlxuICA8L3Nsb3Q+XG5cbiAgPGNhdGVnb3J5XG4gICAgdi1zaG93PVwic2VhcmNoRW1vamlzXCJcbiAgICBjbGFzcz1cImVtb2ppLW1hcnQtc2VhcmNoLXJlc3VsdHNcIlxuICAgIDpkYXRhPVwiZGF0YVwiXG4gICAgOmkxOG49XCJtZXJnZWRJMThuXCJcbiAgICBpZD1cInNlYXJjaFwiXG4gICAgbmFtZT1cIlNlYXJjaFwiXG4gICAgOmVtb2ppcz1cInNlYXJjaEVtb2ppc1wiXG4gICAgOmVtb2ppLXByb3BzPVwiZW1vamlQcm9wc1wiXG4gIC8+XG4gIDxEeW5hbWljU2Nyb2xsZXIgXG4gICAgdi1zaG93PVwiIXNlYXJjaEVtb2ppc1wiXG4gICAgcmVmPVwiZHluU2Nyb2xsZXJcIiBcbiAgICA6aXRlbXM9XCJzY3JvbGxlckNhdGVnb3JpZXNcIiBcbiAgICA6bWluLWl0ZW0tc2l6ZT1cIjYwXCIgXG4gICAgY2xhc3M9XCJzY3JvbGxlclwiIFxuICAgIDplbWl0LXVwZGF0ZT1cInRydWVcIiBcbiAgICBAdXBkYXRlPVwib25TY3JvbGxVcGRhdGVcIlxuICA+XG4gICAgPHRlbXBsYXRlIHNsb3Qtc2NvcGU9XCJ7IGl0ZW0sIGFjdGl2ZSwgaW5kZXggfVwiPlxuICAgICAgPER5bmFtaWNTY3JvbGxlckl0ZW0gXG4gICAgICAgIDppdGVtPVwiaXRlbVwiIFxuICAgICAgICA6YWN0aXZlPVwiYWN0aXZlXCIgXG4gICAgICAgIDpkYXRhLWluZGV4PVwiaW5kZXhcIlxuICAgICAgPlxuICAgICAgICA8Y2F0ZWdvcnlcbiAgICAgICAgICB2LXNob3c9XCJpdGVtLnNob3dcIlxuICAgICAgICAgIHJlZj1cImNhdGVnb3JpZXNcIlxuICAgICAgICAgIDprZXk9XCJpdGVtLmNhdGVnb3J5LmlkXCJcbiAgICAgICAgICA6ZGF0YT1cIml0ZW0uZGF0YVwiXG4gICAgICAgICAgOmkxOG49XCJpdGVtLm1lcmdlZEkxOG5cIlxuICAgICAgICAgIDppZD1cIml0ZW0uY2F0ZWdvcnkuaWRcIlxuICAgICAgICAgIDpuYW1lPVwiaXRlbS5jYXRlZ29yeS5uYW1lXCJcbiAgICAgICAgICA6ZW1vamlzPVwiaXRlbS5jYXRlZ29yeS5lbW9qaXNcIlxuICAgICAgICAgIDplbW9qaS1wcm9wcz1cIml0ZW0uZW1vamlQcm9wc1wiXG4gICAgICAgIC8+XG4gICAgICA8L0R5bmFtaWNTY3JvbGxlckl0ZW0+XG4gICAgPC90ZW1wbGF0ZT5cbiAgPC9EeW5hbWljU2Nyb2xsZXI+XG5cbiAgPHNsb3QgbmFtZT1cInByZXZpZXdUZW1wbGF0ZVwiXG4gICAgICAgIDpkYXRhPVwiZGF0YVwiXG4gICAgICAgIDp0aXRsZT1cInRpdGxlXCJcbiAgICAgICAgOmVtb2ppPVwicHJldmlld0Vtb2ppXCJcbiAgICAgICAgOmlkbGUtZW1vamk9XCJpZGxlRW1vamlcIlxuICAgICAgICA6c2hvdy1za2luLXRvbmVzPVwic2hvd1NraW5Ub25lc1wiXG4gICAgICAgIDplbW9qaS1wcm9wcz1cImVtb2ppUHJvcHNcIlxuICAgICAgICA6c2tpbi1wcm9wcz1cInNraW5Qcm9wc1wiXG4gICAgICAgIDpvbi1za2luLWNoYW5nZT1cIm9uU2tpbkNoYW5nZVwiXG4gID5cbiAgICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1iYXIgZW1vamktbWFydC1iYXItcHJldmlld1wiIHYtaWY9XCJzaG93UHJldmlld1wiPlxuICAgICAgPHByZXZpZXdcbiAgICAgICAgOmRhdGE9XCJkYXRhXCJcbiAgICAgICAgOnRpdGxlPVwidGl0bGVcIlxuICAgICAgICA6ZW1vamk9XCJwcmV2aWV3RW1vamlcIlxuICAgICAgICA6aWRsZS1lbW9qaT1cImlkbGVFbW9qaVwiXG4gICAgICAgIDpzaG93LXNraW4tdG9uZXM9XCJzaG93U2tpblRvbmVzXCJcbiAgICAgICAgOmVtb2ppLXByb3BzPVwiZW1vamlQcm9wc1wiXG4gICAgICAgIDpza2luLXByb3BzPVwic2tpblByb3BzXCJcbiAgICAgICAgOm9uLXNraW4tY2hhbmdlPVwib25Ta2luQ2hhbmdlXCIvPlxuICAgIDwvZGl2PlxuICA8L3Nsb3Q+XG48L2Rpdj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuaW1wb3J0ICcuLi8uLi92ZW5kb3IvcmFmLXBvbHlmaWxsJ1xuaW1wb3J0IHN0b3JlIGZyb20gJy4uLy4uL3V0aWxzL3N0b3JlJ1xuaW1wb3J0IGZyZXF1ZW50bHkgZnJvbSAnLi4vLi4vdXRpbHMvZnJlcXVlbnRseSdcbmltcG9ydCB7IGRlZXBNZXJnZSwgbWVhc3VyZVNjcm9sbGJhciB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IHsgUGlja2VyUHJvcHMgfSBmcm9tICcuLi8uLi91dGlscy9zaGFyZWQtcHJvcHMnXG5pbXBvcnQgQW5jaG9ycyBmcm9tICcuLi9hbmNob3JzJ1xuaW1wb3J0IENhdGVnb3J5IGZyb20gJy4uL2NhdGVnb3J5J1xuaW1wb3J0IFByZXZpZXcgZnJvbSAnLi4vcHJldmlldydcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi4vc2VhcmNoJ1xuXG5pbXBvcnQgeyBEeW5hbWljU2Nyb2xsZXIsIER5bmFtaWNTY3JvbGxlckl0ZW0gfSBmcm9tICd2dWUtdmlydHVhbC1zY3JvbGxlcidcbmltcG9ydCAndnVlLXZpcnR1YWwtc2Nyb2xsZXIvZGlzdC92dWUtdmlydHVhbC1zY3JvbGxlci5jc3MnXG5cbmNvbnN0IEkxOE4gPSB7XG4gIHNlYXJjaDogJ1NlYXJjaCcsXG4gIG5vdGZvdW5kOiAnTm8gRW1vamkgRm91bmQnLFxuICBjYXRlZ29yaWVzOiB7XG4gICAgc2VhcmNoOiAnU2VhcmNoIFJlc3VsdHMnLFxuICAgIHJlY2VudDogJ0ZyZXF1ZW50bHkgVXNlZCcsXG4gICAgcGVvcGxlOiAnU21pbGV5cyAmIFBlb3BsZScsXG4gICAgbmF0dXJlOiAnQW5pbWFscyAmIE5hdHVyZScsXG4gICAgZm9vZHM6ICdGb29kICYgRHJpbmsnLFxuICAgIGFjdGl2aXR5OiAnQWN0aXZpdHknLFxuICAgIHBsYWNlczogJ1RyYXZlbCAmIFBsYWNlcycsXG4gICAgb2JqZWN0czogJ09iamVjdHMnLFxuICAgIHN5bWJvbHM6ICdTeW1ib2xzJyxcbiAgICBmbGFnczogJ0ZsYWdzJyxcbiAgICBjdXN0b206ICdDdXN0b20nLFxuICB9LFxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiB7XG4gICAgLi4uUGlja2VyUHJvcHMsXG4gICAgZGF0YToge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9XG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFjdGl2ZVNraW46IHRoaXMuc2tpbiB8fCBzdG9yZS5nZXQoJ3NraW4nKSB8fCB0aGlzLmRlZmF1bHRTa2luLFxuICAgICAgYWN0aXZlQ2F0ZWdvcnk6IG51bGwsXG4gICAgICBwcmV2aWV3RW1vamk6IG51bGwsXG4gICAgICBzZWFyY2hFbW9qaXM6IG51bGxcbiAgICB9XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgY3VzdG9tU3R5bGVzKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgd2lkdGg6IHRoaXMuY2FsY3VsYXRlV2lkdGggKyAncHgnLFxuICAgICAgICAuLi50aGlzLnBpY2tlclN0eWxlc1xuICAgICAgfVxuICAgIH0sXG4gICAgZW1vamlQcm9wcygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5hdGl2ZTogdGhpcy5uYXRpdmUsXG4gICAgICAgIHNraW46IHRoaXMuYWN0aXZlU2tpbixcbiAgICAgICAgc2V0OiB0aGlzLnNldCxcbiAgICAgICAgZW1vamlUb29sdGlwOiB0aGlzLmVtb2ppVG9vbHRpcCxcbiAgICAgICAgZW1vamlTaXplOiB0aGlzLmVtb2ppU2l6ZSxcbiAgICAgICAgb25FbnRlcjogdGhpcy5vbkVtb2ppRW50ZXIuYmluZCh0aGlzKSxcbiAgICAgICAgb25MZWF2ZTogdGhpcy5vbkVtb2ppTGVhdmUuYmluZCh0aGlzKSxcbiAgICAgICAgb25DbGljazogdGhpcy5vbkVtb2ppQ2xpY2suYmluZCh0aGlzKVxuICAgICAgfVxuICAgIH0sXG4gICAgc2tpblByb3BzKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc2tpbjogdGhpcy5hY3RpdmVTa2luXG4gICAgICB9XG4gICAgfSxcbiAgICBjYWxjdWxhdGVXaWR0aCgpIHtcbiAgICAgIHJldHVybiAodGhpcy5wZXJMaW5lICogKHRoaXMuZW1vamlTaXplICsgMTIpKSArIDEyICsgMiArIG1lYXN1cmVTY3JvbGxiYXIoKVxuICAgIH0sXG4gICAgc2Nyb2xsZXJDYXRlZ29yaWVzKCkge1xuICAgICAgbGV0IGlkID0gMDtcbiAgICAgIHJldHVybiB0aGlzLmNhdGVnb3JpZXMubWFwKChjYXRlZ29yeSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgJ2lkJzogaWQrKyxcbiAgICAgICAgICAgICdjYXRlZ29yeSc6IGNhdGVnb3J5LFxuICAgICAgICAgICAgJ3Nob3cnOiAhdGhpcy5zZWFyY2hFbW9qaXMgJiYgKHRoaXMuaW5maW5pdGVTY3JvbGwgfHwgY2F0ZWdvcnkgPT0gdGhpcy5hY3RpdmVDYXRlZ29yeSksXG4gICAgICAgICAgICAnbWVyZ2VkSTE4bic6IHRoaXMubWVyZ2VkSTE4bixcbiAgICAgICAgICAgICdkYXRhJzogdGhpcy5kYXRhLFxuICAgICAgICAgICAgJ2Vtb2ppc0xlbmd0aCc6IGNhdGVnb3J5LmVtb2ppcy5sZW5ndGgsXG4gICAgICAgICAgICAnZW1vamlQcm9wcyc6IHRoaXMuZW1vamlQcm9wc1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgbWVyZ2VkSTE4bigpIHtcbiAgICAgIHJldHVybiBPYmplY3QuZnJlZXplKGRlZXBNZXJnZShJMThOLCB0aGlzLmkxOG4pKVxuICAgIH0sXG4gICAgaWRsZUVtb2ppKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZGF0YS5lbW9qaSh0aGlzLmVtb2ppKVxuICAgIH1cbiAgfSxcbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLmNhdGVnb3JpZXMgPSBbXVxuICAgIHRoaXMuY2F0ZWdvcmllcy5wdXNoKC4uLnRoaXMuZGF0YS5jYXRlZ29yaWVzKCkpXG4gICAgdGhpcy5jYXRlZ29yaWVzID0gdGhpcy5jYXRlZ29yaWVzLmZpbHRlcigoY2F0ZWdvcnkpID0+IHtcbiAgICAgIHJldHVybiBjYXRlZ29yeS5lbW9qaXMubGVuZ3RoID4gMDtcbiAgICB9KVxuXG4gICAgdGhpcy5jYXRlZ29yaWVzWzBdLmZpcnN0ID0gdHJ1ZVxuICAgIE9iamVjdC5mcmVlemUodGhpcy5jYXRlZ29yaWVzKVxuICAgIHRoaXMuYWN0aXZlQ2F0ZWdvcnkgPSB0aGlzLmNhdGVnb3JpZXNbMF1cbiAgICB0aGlzLnNraXBTY3JvbGxVcGRhdGUgPSBmYWxzZVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgb25TY3JvbGxVcGRhdGUoc3RhcnRJbmRleCwgZW5kSW5kZXgpIHtcbiAgICAgIGlmICh0aGlzLnNraXBTY3JvbGxVcGRhdGUpIHtcbiAgICAgICAgICB0aGlzLnNraXBTY3JvbGxVcGRhdGUgPSBmYWxzZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmFjdGl2ZUNhdGVnb3J5ID0gdGhpcy5jYXRlZ29yaWVzW2VuZEluZGV4LTFdXG4gICAgICB9XG4gICAgfSxcbiAgICBvbkFuY2hvckNsaWNrKGNhdGVnb3J5KSB7XG4gICAgICBsZXQgaSA9IHRoaXMuY2F0ZWdvcmllcy5pbmRleE9mKGNhdGVnb3J5KVxuICAgICAgdGhpcy4kcmVmcy5keW5TY3JvbGxlci5zY3JvbGxUb0l0ZW0oaSlcbiAgICAgIHRoaXMuYWN0aXZlQ2F0ZWdvcnkgPSB0aGlzLmNhdGVnb3JpZXNbaV1cbiAgICAgIHRoaXMuc2tpcFNjcm9sbFVwZGF0ZSA9IHRydWVcbiAgICB9LFxuICAgIG9uU2VhcmNoKHZhbHVlKSB7XG4gICAgICBsZXQgZW1vamlzID0gdGhpcy5kYXRhLnNlYXJjaCh2YWx1ZSwgdGhpcy5tYXhTZWFyY2hSZXN1bHRzKVxuICAgICAgdGhpcy5zZWFyY2hFbW9qaXMgPSBlbW9qaXNcbiAgICB9LFxuICAgIG9uRW1vamlFbnRlcihlbW9qaSkge1xuICAgICAgdGhpcy5wcmV2aWV3RW1vamkgPSBlbW9qaVxuICAgIH0sXG4gICAgb25FbW9qaUxlYXZlKGVtb2ppKSB7XG4gICAgICB0aGlzLnByZXZpZXdFbW9qaSA9IG51bGxcbiAgICB9LFxuICAgIG9uRW1vamlDbGljayhlbW9qaSkge1xuICAgICAgdGhpcy4kZW1pdCgnc2VsZWN0JywgZW1vamkpXG4gICAgICBmcmVxdWVudGx5LmFkZChlbW9qaSlcbiAgICB9LFxuICAgIG9uU2tpbkNoYW5nZShza2luKSB7XG4gICAgICB0aGlzLmFjdGl2ZVNraW4gPSBza2luXG4gICAgICBzdG9yZS51cGRhdGUoeyBza2luIH0pXG5cbiAgICAgIHRoaXMuJGVtaXQoJ3NraW4tY2hhbmdlJywgc2tpbilcbiAgICB9XG4gIH0sXG4gIGNvbXBvbmVudHM6IHtcbiAgICBBbmNob3JzLFxuICAgIENhdGVnb3J5LFxuICAgIFByZXZpZXcsXG4gICAgU2VhcmNoLFxuICAgIER5bmFtaWNTY3JvbGxlcixcbiAgICBEeW5hbWljU2Nyb2xsZXJJdGVtXG4gIH1cbn1cblxuPC9zY3JpcHQ+XG4iLCI8c2NyaXB0PlxuXG5pbXBvcnQgZGF0YSBmcm9tICcuLi8uLi8uLi9kYXRhL2FsbC5qc29uJ1xuaW1wb3J0IHsgRW1vamlJbmRleCB9IGZyb20gJy4uLy4uL3V0aWxzL2Vtb2ppLWRhdGEnXG5pbXBvcnQgTmltYmxlUGlja2VyIGZyb20gJy4vbmltYmxlUGlja2VyJ1xuXG5pbXBvcnQgeyBQaWNrZXJQcm9wcyB9IGZyb20gJy4uLy4uL3V0aWxzL3NoYXJlZC1wcm9wcydcblxubGV0IGluZGV4ID0gbmV3IEVtb2ppSW5kZXgoZGF0YSlcblxuZXhwb3J0IGRlZmF1bHQge1xuICBmdW5jdGlvbmFsOiB0cnVlLFxuICBwcm9wczoge1xuICAgIC4uLlBpY2tlclByb3BzLFxuICAgIGRhdGE6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIGRlZmF1bHQoKSB7XG4gICAgICAgIHJldHVybiBpbmRleFxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgcmVuZGVyKGgsIGN0eCkge1xuICAgIGxldCB7IGRhdGEsIHByb3BzLCBjaGlsZHJlbiB9ID0gY3R4XG5cbiAgICByZXR1cm4gaChOaW1ibGVQaWNrZXIsIHsgLi4uZGF0YSwgcHJvcHMgfSwgY2hpbGRyZW4pXG4gIH1cbn1cblxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG5cbjxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LXByZXZpZXdcIj5cbiAgPHRlbXBsYXRlIHYtaWY9XCJlbW9qaVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtcHJldmlldy1lbW9qaVwiPlxuICAgICAgICA8bmltYmxlLWVtb2ppXG4gICAgICAgICAgOmRhdGE9XCJkYXRhXCJcbiAgICAgICAgICA6ZW1vamk9XCJlbW9qaVwiXG4gICAgICAgICAgOm5hdGl2ZT1cImVtb2ppUHJvcHMubmF0aXZlXCJcbiAgICAgICAgICA6c2tpbj1cImVtb2ppUHJvcHMuc2tpblwiXG4gICAgICAgICAgOnNldD1cImVtb2ppUHJvcHMuc2V0XCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1wcmV2aWV3LWRhdGFcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtcHJldmlldy1uYW1lXCI+e3sgZW1vamkubmFtZSB9fTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1wcmV2aWV3LXNob3J0bmFtZXNcIj5cbiAgICAgICAgICA8c3BhbiB2LWZvcj1cInNob3J0TmFtZSBpbiBlbW9qaVNob3J0TmFtZXNcIiA6a2V5PVwic2hvcnROYW1lXCIgY2xhc3M9XCJlbW9qaS1tYXJ0LXByZXZpZXctc2hvcnRuYW1lXCI+Ont7IHNob3J0TmFtZSB9fTo8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1wcmV2aWV3LWVtb3RpY29uc1wiPlxuICAgICAgICAgIDxzcGFuIHYtZm9yPVwiZW1vdGljb24gaW4gZW1vamlFbW90aWNvbnNcIiA6a2V5PVwiZW1vdGljb25cIiBjbGFzcz1cImVtb2ppLW1hcnQtcHJldmlldy1lbW90aWNvblwiPnt7IGVtb3RpY29uIH19PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICA8L3RlbXBsYXRlPlxuXG4gIDx0ZW1wbGF0ZSB2LWVsc2U+XG4gICAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtcHJldmlldy1lbW9qaVwiPlxuICAgICAgPG5pbWJsZS1lbW9qaVxuICAgICAgICA6ZGF0YT1cImRhdGFcIlxuICAgICAgICA6ZW1vamk9XCJpZGxlRW1vamlcIlxuICAgICAgICA6bmF0aXZlPVwiZW1vamlQcm9wcy5uYXRpdmVcIlxuICAgICAgICA6c2tpbj1cImVtb2ppUHJvcHMuc2tpblwiXG4gICAgICAgIDpzZXQ9XCJlbW9qaVByb3BzLnNldFwiXG4gICAgICAvPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtcHJldmlldy1kYXRhXCI+XG4gICAgICA8c3BhbiBjbGFzcz1cImVtb2ppLW1hcnQtdGl0bGUtbGFiZWxcIj57eyB0aXRsZSB9fTwvc3Bhbj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgdi1pZj1cInNob3dTa2luVG9uZXNcIiBjbGFzcz1cImVtb2ppLW1hcnQtcHJldmlldy1za2luc1wiPlxuICAgICAgPHNraW5zIDpza2luPVwic2tpblByb3BzLnNraW5cIiBAY2hhbmdlPVwib25Ta2luQ2hhbmdlKCRldmVudClcIiAvPlxuICAgIDwvZGl2PlxuICA8L3RlbXBsYXRlPlxuPC9kaXY+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCBOaW1ibGVFbW9qaSBmcm9tICcuL2Vtb2ppL25pbWJsZUVtb2ppJ1xuaW1wb3J0IFNraW5zIGZyb20gJy4vc2tpbnMnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IHtcbiAgICBkYXRhOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgdGl0bGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBlbW9qaToge1xuICAgICAgdHlwZTogW1N0cmluZywgT2JqZWN0XVxuICAgIH0sXG4gICAgaWRsZUVtb2ppOiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBPYmplY3RdLFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIHNob3dTa2luVG9uZXM6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiB0cnVlXG4gICAgfSxcbiAgICBlbW9qaVByb3BzOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgc2tpblByb3BzOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgb25Ta2luQ2hhbmdlOiB7XG4gICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGVtb2ppRGF0YSgpIHtcbiAgICAgIGlmICh0aGlzLmVtb2ppKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVtb2ppXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4ge31cbiAgICAgIH1cbiAgICB9LFxuICAgIGVtb2ppU2hvcnROYW1lcygpIHtcbiAgICAgIHJldHVybiB0aGlzLmVtb2ppRGF0YS5zaG9ydF9uYW1lc1xuICAgIH0sXG4gICAgZW1vamlFbW90aWNvbnMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5lbW9qaURhdGEuZW1vdGljb25zXG4gICAgfVxuICB9LFxuICBjb21wb25lbnRzOiB7XG4gICAgTmltYmxlRW1vamksXG4gICAgU2tpbnNcbiAgfVxufVxuXG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtc2VhcmNoXCI+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgOnBsYWNlaG9sZGVyPVwiaTE4bi5zZWFyY2hcIiB2LW1vZGVsPVwidmFsdWVcIj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiB7XG4gICAgZGF0YToge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIGkxOG46IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBhdXRvRm9jdXM6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH0sXG4gICAgb25TZWFyY2g6IHtcbiAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9XG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiAnJ1xuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBlbW9qaUluZGV4KCkge1xuICAgICAgcmV0dXJuIHRoaXMuZGF0YVxuICAgIH1cbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICB2YWx1ZSgpIHtcbiAgICAgIHRoaXMuJGVtaXQoJ3NlYXJjaCcsIHRoaXMudmFsdWUpXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgY2xlYXIoKSB7XG4gICAgICB0aGlzLnZhbHVlID0gJydcbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgbGV0ICRpbnB1dCA9IHRoaXMuJGVsLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JylcblxuICAgIGlmICh0aGlzLmF1dG9Gb2N1cykge1xuICAgICAgJGlucHV0LmZvY3VzKClcbiAgICB9XG4gIH1cbn1cblxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG5cbjxkaXYgOmNsYXNzPVwieyAnZW1vamktbWFydC1za2luLXN3YXRjaGVzJzogdHJ1ZSwgJ2Vtb2ppLW1hcnQtc2tpbi1zd2F0Y2hlcy1vcGVuZWQnOiBvcGVuZWQgfVwiPlxuICA8c3BhbiB2LWZvcj1cInNraW5Ub25lIGluIDZcIiA6a2V5PVwic2tpblRvbmVcIiA6Y2xhc3M9XCJ7ICdlbW9qaS1tYXJ0LXNraW4tc3dhdGNoJzogdHJ1ZSwgJ2Vtb2ppLW1hcnQtc2tpbi1zd2F0Y2gtc2VsZWN0ZWQnOiBza2luID09IHNraW5Ub25lIH1cIj5cbiAgICA8c3BhbiA6Y2xhc3M9XCInZW1vamktbWFydC1za2luIGVtb2ppLW1hcnQtc2tpbi10b25lLScgKyBza2luVG9uZVwiIEBjbGljaz1cIm9uQ2xpY2soc2tpblRvbmUpXCI+PC9zcGFuPlxuICA8L3NwYW4+XG48L2Rpdj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczoge1xuICAgIHNraW46IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfVxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBvcGVuZWQ6IGZhbHNlXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgb25DbGljayhza2luVG9uZSkge1xuICAgICAgaWYgKHRoaXMub3BlbmVkKSB7XG4gICAgICAgIGlmIChza2luVG9uZSAhPSB0aGlzLnNraW4pIHtcbiAgICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCBza2luVG9uZSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLm9wZW5lZCA9ICF0aGlzLm9wZW5lZFxuICAgIH1cbiAgfVxufVxuXG48L3NjcmlwdD5cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIudnVlLXJlY3ljbGUtc2Nyb2xsZXJ7cG9zaXRpb246cmVsYXRpdmV9LnZ1ZS1yZWN5Y2xlLXNjcm9sbGVyLmRpcmVjdGlvbi12ZXJ0aWNhbDpub3QoLnBhZ2UtbW9kZSl7b3ZlcmZsb3cteTphdXRvfS52dWUtcmVjeWNsZS1zY3JvbGxlci5kaXJlY3Rpb24taG9yaXpvbnRhbDpub3QoLnBhZ2UtbW9kZSl7b3ZlcmZsb3cteDphdXRvfS52dWUtcmVjeWNsZS1zY3JvbGxlci5kaXJlY3Rpb24taG9yaXpvbnRhbHtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleH0udnVlLXJlY3ljbGUtc2Nyb2xsZXJfX3Nsb3R7LW1zLWZsZXg6YXV0byAwIDBweDtmbGV4OmF1dG8gMCAwfS52dWUtcmVjeWNsZS1zY3JvbGxlcl9faXRlbS13cmFwcGVyey1tcy1mbGV4OjE7ZmxleDoxO2JveC1zaXppbmc6Ym9yZGVyLWJveDtvdmVyZmxvdzpoaWRkZW47cG9zaXRpb246cmVsYXRpdmV9LnZ1ZS1yZWN5Y2xlLXNjcm9sbGVyLnJlYWR5IC52dWUtcmVjeWNsZS1zY3JvbGxlcl9faXRlbS12aWV3e3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDt3aWxsLWNoYW5nZTp0cmFuc2Zvcm19LnZ1ZS1yZWN5Y2xlLXNjcm9sbGVyLmRpcmVjdGlvbi12ZXJ0aWNhbCAudnVlLXJlY3ljbGUtc2Nyb2xsZXJfX2l0ZW0td3JhcHBlcnt3aWR0aDoxMDAlfS52dWUtcmVjeWNsZS1zY3JvbGxlci5kaXJlY3Rpb24taG9yaXpvbnRhbCAudnVlLXJlY3ljbGUtc2Nyb2xsZXJfX2l0ZW0td3JhcHBlcntoZWlnaHQ6MTAwJX0udnVlLXJlY3ljbGUtc2Nyb2xsZXIucmVhZHkuZGlyZWN0aW9uLXZlcnRpY2FsIC52dWUtcmVjeWNsZS1zY3JvbGxlcl9faXRlbS12aWV3e3dpZHRoOjEwMCV9LnZ1ZS1yZWN5Y2xlLXNjcm9sbGVyLnJlYWR5LmRpcmVjdGlvbi1ob3Jpem9udGFsIC52dWUtcmVjeWNsZS1zY3JvbGxlcl9faXRlbS12aWV3e2hlaWdodDoxMDAlfS5yZXNpemUtb2JzZXJ2ZXJbZGF0YS12LWIzMjllZTRjXXtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7ei1pbmRleDotMTt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2JvcmRlcjpub25lO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7cG9pbnRlci1ldmVudHM6bm9uZTtkaXNwbGF5OmJsb2NrO292ZXJmbG93OmhpZGRlbjtvcGFjaXR5OjB9LnJlc2l6ZS1vYnNlcnZlcltkYXRhLXYtYjMyOWVlNGNdIG9iamVjdHtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDtoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlO292ZXJmbG93OmhpZGRlbjtwb2ludGVyLWV2ZW50czpub25lO3otaW5kZXg6LTF9XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJldHVybiBcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGNvbnRlbnQgKyBcIn1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG5cdHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcblx0dmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXHRpZiAoIWNzc01hcHBpbmcpIHtcblx0XHRyZXR1cm4gY29udGVudDtcblx0fVxuXG5cdGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcblx0XHR2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG5cdH1cblxuXHRyZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcblx0dmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcblxuXHRyZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1hbmNob3JzXCIgfSxcbiAgICBfdm0uX2woX3ZtLmNhdGVnb3JpZXMsIGZ1bmN0aW9uKGNhdGVnb3J5KSB7XG4gICAgICByZXR1cm4gX2MoXG4gICAgICAgIFwic3BhblwiLFxuICAgICAgICB7XG4gICAgICAgICAga2V5OiBjYXRlZ29yeS5pZCxcbiAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgXCJlbW9qaS1tYXJ0LWFuY2hvclwiOiB0cnVlLFxuICAgICAgICAgICAgXCJlbW9qaS1tYXJ0LWFuY2hvci1zZWxlY3RlZFwiOiBjYXRlZ29yeS5pZCA9PSBfdm0uYWN0aXZlQ2F0ZWdvcnkuaWRcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBjb2xvcjogY2F0ZWdvcnkuaWQgPT0gX3ZtLmFjdGl2ZUNhdGVnb3J5LmlkID8gX3ZtLmNvbG9yIDogXCJcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgYXR0cnM6IHsgXCJkYXRhLXRpdGxlXCI6IF92bS5pMThuLmNhdGVnb3JpZXNbY2F0ZWdvcnkuaWRdIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcImNsaWNrXCIsIGNhdGVnb3J5KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLnN2Z3NbY2F0ZWdvcnkuaWRdKSB9IH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtYW5jaG9yLWJhclwiLFxuICAgICAgICAgICAgc3R5bGU6IHsgYmFja2dyb3VuZENvbG9yOiBfdm0uY29sb3IgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF1cbiAgICAgIClcbiAgICB9KSxcbiAgICAwXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF92bS5pc1Zpc2libGUgJiYgKF92bS5pc1NlYXJjaCB8fCBfdm0uaGFzUmVzdWx0cylcbiAgICA/IF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgIFwiZW1vamktbWFydC1jYXRlZ29yeVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJlbW9qaS1tYXJ0LW5vLXJlc3VsdHNcIjogIV92bS5oYXNSZXN1bHRzXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LWNhdGVnb3J5LWxhYmVsXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5pMThuLmNhdGVnb3JpZXNbX3ZtLmlkXSkpXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS5fbChfdm0uZW1vamlPYmplY3RzLCBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgIHZhciBlbW9qaU9iamVjdCA9IHJlZi5lbW9qaU9iamVjdFxuICAgICAgICAgICAgdmFyIGVtb2ppVmlldyA9IHJlZi5lbW9qaVZpZXdcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgIGVtb2ppVmlldy5jYW5SZW5kZXJcbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtZW1vamlcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXRpdGxlXCI6IGVtb2ppT2JqZWN0LnNob3J0X25hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogZW1vamlWaWV3LnRpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW91c2VlbnRlcjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lbW9qaVByb3BzLm9uRW50ZXIoZW1vamlWaWV3LmdldEVtb2ppKCkpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW91c2VsZWF2ZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lbW9qaVByb3BzLm9uTGVhdmUoZW1vamlWaWV3LmdldEVtb2ppKCkpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZW1vamlQcm9wcy5vbkNsaWNrKGVtb2ppVmlldy5nZXRFbW9qaSgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBlbW9qaVZpZXcuY3NzQ2xhc3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiBlbW9qaVZpZXcuY3NzU3R5bGVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhlbW9qaVZpZXcuY29udGVudCkpXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICFfdm0uaGFzUmVzdWx0c1xuICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwibmltYmxlLWVtb2ppXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBfdm0uZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICBlbW9qaTogXCJzbGV1dGhfb3Jfc3B5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgbmF0aXZlOiBfdm0uZW1vamlQcm9wcy5uYXRpdmUsXG4gICAgICAgICAgICAgICAgICAgICAgc2tpbjogX3ZtLmVtb2ppUHJvcHMuc2tpbixcbiAgICAgICAgICAgICAgICAgICAgICBzZXQ6IF92bS5lbW9qaVByb3BzLnNldFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtbm8tcmVzdWx0cy1sYWJlbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uaTE4bi5ub3Rmb3VuZCkpXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgIF0sXG4gICAgICAgIDJcbiAgICAgIClcbiAgICA6IF92bS5fZSgpXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfdm0udmlldy5jYW5SZW5kZXJcbiAgICA/IF9jKFxuICAgICAgICBcInNwYW5cIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtZW1vamlcIixcbiAgICAgICAgICBhdHRyczogeyB0aXRsZTogX3ZtLnZpZXcudGl0bGUsIFwiZGF0YS10aXRsZVwiOiBfdm0udGl0bGUgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgbW91c2VlbnRlcjogX3ZtLm9uTW91c2VFbnRlcixcbiAgICAgICAgICAgIG1vdXNlbGVhdmU6IF92bS5vbk1vdXNlTGVhdmUsXG4gICAgICAgICAgICBjbGljazogX3ZtLm9uQ2xpY2tcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInNwYW5cIiwgeyBjbGFzczogX3ZtLnZpZXcuY3NzQ2xhc3MsIHN0eWxlOiBfdm0udmlldy5jc3NTdHlsZSB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS52aWV3LmNvbnRlbnQpKVxuICAgICAgICAgIF0pXG4gICAgICAgIF1cbiAgICAgIClcbiAgICA6IF92bS5fZSgpXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydFwiLCBzdHlsZTogX3ZtLmN1c3RvbVN0eWxlcyB9LFxuICAgIFtcbiAgICAgIF92bS5zaG93Q2F0ZWdvcmllc1xuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1iYXIgZW1vamktbWFydC1iYXItYW5jaG9yc1wiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiYW5jaG9yc1wiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGRhdGE6IF92bS5kYXRhLFxuICAgICAgICAgICAgICAgICAgaTE4bjogX3ZtLm1lcmdlZEkxOG4sXG4gICAgICAgICAgICAgICAgICBjb2xvcjogX3ZtLmNvbG9yLFxuICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllczogX3ZtLmNhdGVnb3JpZXMsXG4gICAgICAgICAgICAgICAgICBcImFjdGl2ZS1jYXRlZ29yeVwiOiBfdm0uYWN0aXZlQ2F0ZWdvcnlcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0ub25BbmNob3JDbGljayB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uX3QoXG4gICAgICAgIFwic2VhcmNoVGVtcGxhdGVcIixcbiAgICAgICAgW1xuICAgICAgICAgIF92bS5zaG93U2VhcmNoXG4gICAgICAgICAgICA/IF9jKFwic2VhcmNoXCIsIHtcbiAgICAgICAgICAgICAgICByZWY6IFwic2VhcmNoXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGRhdGE6IF92bS5kYXRhLFxuICAgICAgICAgICAgICAgICAgaTE4bjogX3ZtLm1lcmdlZEkxOG4sXG4gICAgICAgICAgICAgICAgICBcImF1dG8tZm9jdXNcIjogX3ZtLmF1dG9Gb2N1cyxcbiAgICAgICAgICAgICAgICAgIFwib24tc2VhcmNoXCI6IF92bS5vblNlYXJjaFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHsgc2VhcmNoOiBfdm0ub25TZWFyY2ggfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICBdLFxuICAgICAgICB7XG4gICAgICAgICAgZGF0YTogX3ZtLmRhdGEsXG4gICAgICAgICAgaTE4bjogX3ZtLmkxOG4sXG4gICAgICAgICAgYXV0b0ZvY3VzOiBfdm0uYXV0b0ZvY3VzLFxuICAgICAgICAgIG9uU2VhcmNoOiBfdm0ub25TZWFyY2hcbiAgICAgICAgfVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImNhdGVnb3J5XCIsIHtcbiAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VhcmNoRW1vamlzLFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2hFbW9qaXNcIlxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1zZWFyY2gtcmVzdWx0c1wiLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIGRhdGE6IF92bS5kYXRhLFxuICAgICAgICAgIGkxOG46IF92bS5tZXJnZWRJMThuLFxuICAgICAgICAgIGlkOiBcInNlYXJjaFwiLFxuICAgICAgICAgIG5hbWU6IFwiU2VhcmNoXCIsXG4gICAgICAgICAgZW1vamlzOiBfdm0uc2VhcmNoRW1vamlzLFxuICAgICAgICAgIFwiZW1vamktcHJvcHNcIjogX3ZtLmVtb2ppUHJvcHNcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJEeW5hbWljU2Nyb2xsZXJcIiwge1xuICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgdmFsdWU6ICFfdm0uc2VhcmNoRW1vamlzLFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIhc2VhcmNoRW1vamlzXCJcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHJlZjogXCJkeW5TY3JvbGxlclwiLFxuICAgICAgICBzdGF0aWNDbGFzczogXCJzY3JvbGxlclwiLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIGl0ZW1zOiBfdm0uc2Nyb2xsZXJDYXRlZ29yaWVzLFxuICAgICAgICAgIFwibWluLWl0ZW0tc2l6ZVwiOiA2MCxcbiAgICAgICAgICBcImVtaXQtdXBkYXRlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgb246IHsgdXBkYXRlOiBfdm0ub25TY3JvbGxVcGRhdGUgfSxcbiAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAge1xuICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgdmFyIGl0ZW0gPSByZWYuaXRlbVxuICAgICAgICAgICAgICB2YXIgYWN0aXZlID0gcmVmLmFjdGl2ZVxuICAgICAgICAgICAgICB2YXIgaW5kZXggPSByZWYuaW5kZXhcbiAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiRHluYW1pY1Njcm9sbGVySXRlbVwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpdGVtOiBpdGVtLCBhY3RpdmU6IGFjdGl2ZSwgXCJkYXRhLWluZGV4XCI6IGluZGV4IH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiY2F0ZWdvcnlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBpdGVtLnNob3csXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaXRlbS5zaG93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIGtleTogaXRlbS5jYXRlZ29yeS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICByZWY6IFwiY2F0ZWdvcmllc1wiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBpdGVtLmRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICBpMThuOiBpdGVtLm1lcmdlZEkxOG4sXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogaXRlbS5jYXRlZ29yeS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGl0ZW0uY2F0ZWdvcnkubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtb2ppczogaXRlbS5jYXRlZ29yeS5lbW9qaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImVtb2ppLXByb3BzXCI6IGl0ZW0uZW1vamlQcm9wc1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBdKVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl90KFxuICAgICAgICBcInByZXZpZXdUZW1wbGF0ZVwiLFxuICAgICAgICBbXG4gICAgICAgICAgX3ZtLnNob3dQcmV2aWV3XG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LWJhciBlbW9qaS1tYXJ0LWJhci1wcmV2aWV3XCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInByZXZpZXdcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IF92bS5kYXRhLFxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBfdm0udGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgZW1vamk6IF92bS5wcmV2aWV3RW1vamksXG4gICAgICAgICAgICAgICAgICAgICAgXCJpZGxlLWVtb2ppXCI6IF92bS5pZGxlRW1vamksXG4gICAgICAgICAgICAgICAgICAgICAgXCJzaG93LXNraW4tdG9uZXNcIjogX3ZtLnNob3dTa2luVG9uZXMsXG4gICAgICAgICAgICAgICAgICAgICAgXCJlbW9qaS1wcm9wc1wiOiBfdm0uZW1vamlQcm9wcyxcbiAgICAgICAgICAgICAgICAgICAgICBcInNraW4tcHJvcHNcIjogX3ZtLnNraW5Qcm9wcyxcbiAgICAgICAgICAgICAgICAgICAgICBcIm9uLXNraW4tY2hhbmdlXCI6IF92bS5vblNraW5DaGFuZ2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICBdLFxuICAgICAgICB7XG4gICAgICAgICAgZGF0YTogX3ZtLmRhdGEsXG4gICAgICAgICAgdGl0bGU6IF92bS50aXRsZSxcbiAgICAgICAgICBlbW9qaTogX3ZtLnByZXZpZXdFbW9qaSxcbiAgICAgICAgICBpZGxlRW1vamk6IF92bS5pZGxlRW1vamksXG4gICAgICAgICAgc2hvd1NraW5Ub25lczogX3ZtLnNob3dTa2luVG9uZXMsXG4gICAgICAgICAgZW1vamlQcm9wczogX3ZtLmVtb2ppUHJvcHMsXG4gICAgICAgICAgc2tpblByb3BzOiBfdm0uc2tpblByb3BzLFxuICAgICAgICAgIG9uU2tpbkNoYW5nZTogX3ZtLm9uU2tpbkNoYW5nZVxuICAgICAgICB9XG4gICAgICApXG4gICAgXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LXByZXZpZXdcIiB9LFxuICAgIFtcbiAgICAgIF92bS5lbW9qaVxuICAgICAgICA/IFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtcHJldmlldy1lbW9qaVwiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcIm5pbWJsZS1lbW9qaVwiLCB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiBfdm0uZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgZW1vamk6IF92bS5lbW9qaSxcbiAgICAgICAgICAgICAgICAgICAgbmF0aXZlOiBfdm0uZW1vamlQcm9wcy5uYXRpdmUsXG4gICAgICAgICAgICAgICAgICAgIHNraW46IF92bS5lbW9qaVByb3BzLnNraW4sXG4gICAgICAgICAgICAgICAgICAgIHNldDogX3ZtLmVtb2ppUHJvcHMuc2V0XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtcHJldmlldy1kYXRhXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtcHJldmlldy1uYW1lXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmVtb2ppLm5hbWUpKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtcHJldmlldy1zaG9ydG5hbWVzXCIgfSxcbiAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmVtb2ppU2hvcnROYW1lcywgZnVuY3Rpb24oc2hvcnROYW1lKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiBzaG9ydE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1wcmV2aWV3LXNob3J0bmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCI6XCIgKyBfdm0uX3Moc2hvcnROYW1lKSArIFwiOlwiKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LXByZXZpZXctZW1vdGljb25zXCIgfSxcbiAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmVtb2ppRW1vdGljb25zLCBmdW5jdGlvbihlbW90aWNvbikge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGtleTogZW1vdGljb24sXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1wcmV2aWV3LWVtb3RpY29uXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoZW1vdGljb24pKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXVxuICAgICAgICA6IFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtcHJldmlldy1lbW9qaVwiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcIm5pbWJsZS1lbW9qaVwiLCB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiBfdm0uZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgZW1vamk6IF92bS5pZGxlRW1vamksXG4gICAgICAgICAgICAgICAgICAgIG5hdGl2ZTogX3ZtLmVtb2ppUHJvcHMubmF0aXZlLFxuICAgICAgICAgICAgICAgICAgICBza2luOiBfdm0uZW1vamlQcm9wcy5za2luLFxuICAgICAgICAgICAgICAgICAgICBzZXQ6IF92bS5lbW9qaVByb3BzLnNldFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LXByZXZpZXctZGF0YVwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC10aXRsZS1sYWJlbFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS50aXRsZSkpXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0uc2hvd1NraW5Ub25lc1xuICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1wcmV2aWV3LXNraW5zXCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJza2luc1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc2tpbjogX3ZtLnNraW5Qcm9wcy5za2luIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub25Ta2luQ2hhbmdlKCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgIF1cbiAgICBdLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LXNlYXJjaFwiIH0sIFtcbiAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICB2YWx1ZTogX3ZtLnZhbHVlLFxuICAgICAgICAgIGV4cHJlc3Npb246IFwidmFsdWVcIlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBfdm0uaTE4bi5zZWFyY2ggfSxcbiAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0udmFsdWUgfSxcbiAgICAgIG9uOiB7XG4gICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgICBfdm0udmFsdWUgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7XG4gICAgICBjbGFzczoge1xuICAgICAgICBcImVtb2ppLW1hcnQtc2tpbi1zd2F0Y2hlc1wiOiB0cnVlLFxuICAgICAgICBcImVtb2ppLW1hcnQtc2tpbi1zd2F0Y2hlcy1vcGVuZWRcIjogX3ZtLm9wZW5lZFxuICAgICAgfVxuICAgIH0sXG4gICAgX3ZtLl9sKDYsIGZ1bmN0aW9uKHNraW5Ub25lKSB7XG4gICAgICByZXR1cm4gX2MoXG4gICAgICAgIFwic3BhblwiLFxuICAgICAgICB7XG4gICAgICAgICAga2V5OiBza2luVG9uZSxcbiAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgXCJlbW9qaS1tYXJ0LXNraW4tc3dhdGNoXCI6IHRydWUsXG4gICAgICAgICAgICBcImVtb2ppLW1hcnQtc2tpbi1zd2F0Y2gtc2VsZWN0ZWRcIjogX3ZtLnNraW4gPT0gc2tpblRvbmVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInNwYW5cIiwge1xuICAgICAgICAgICAgY2xhc3M6IFwiZW1vamktbWFydC1za2luIGVtb2ppLW1hcnQtc2tpbi10b25lLVwiICsgc2tpblRvbmUsXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vbkNsaWNrKHNraW5Ub25lKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXVxuICAgICAgKVxuICAgIH0pLFxuICAgIDBcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIi8qIGdsb2JhbHMgX19WVUVfU1NSX0NPTlRFWFRfXyAqL1xuXG4vLyBJTVBPUlRBTlQ6IERvIE5PVCB1c2UgRVMyMDE1IGZlYXR1cmVzIGluIHRoaXMgZmlsZSAoZXhjZXB0IGZvciBtb2R1bGVzKS5cbi8vIFRoaXMgbW9kdWxlIGlzIGEgcnVudGltZSB1dGlsaXR5IGZvciBjbGVhbmVyIGNvbXBvbmVudCBtb2R1bGUgb3V0cHV0IGFuZCB3aWxsXG4vLyBiZSBpbmNsdWRlZCBpbiB0aGUgZmluYWwgd2VicGFjayB1c2VyIGJ1bmRsZS5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgc2NyaXB0RXhwb3J0cyxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZ1bmN0aW9uYWxUZW1wbGF0ZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBzY29wZUlkLFxuICBtb2R1bGVJZGVudGlmaWVyLCAvKiBzZXJ2ZXIgb25seSAqL1xuICBzaGFkb3dNb2RlIC8qIHZ1ZS1jbGkgb25seSAqL1xuKSB7XG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAocmVuZGVyKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSByZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IHN0YXRpY1JlbmRlckZuc1xuICAgIG9wdGlvbnMuX2NvbXBpbGVkID0gdHJ1ZVxuICB9XG5cbiAgLy8gZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICBpZiAoZnVuY3Rpb25hbFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5mdW5jdGlvbmFsID0gdHJ1ZVxuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gJ2RhdGEtdi0nICsgc2NvcGVJZFxuICB9XG5cbiAgdmFyIGhvb2tcbiAgaWYgKG1vZHVsZUlkZW50aWZpZXIpIHsgLy8gc2VydmVyIGJ1aWxkXG4gICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICBjb250ZXh0ID1cbiAgICAgICAgY29udGV4dCB8fCAvLyBjYWNoZWQgY2FsbFxuICAgICAgICAodGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dCkgfHwgLy8gc3RhdGVmdWxcbiAgICAgICAgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LiR2bm9kZSAmJiB0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCkgLy8gZnVuY3Rpb25hbFxuICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnRleHQgPSBfX1ZVRV9TU1JfQ09OVEVYVF9fXG4gICAgICB9XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgaWYgKGluamVjdFN0eWxlcykge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCBjb250ZXh0KVxuICAgICAgfVxuICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IG1vZHVsZSBpZGVudGlmaWVyIGZvciBhc3luYyBjaHVuayBpbmZlcnJlbmNlXG4gICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cykge1xuICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdXNlZCBieSBzc3IgaW4gY2FzZSBjb21wb25lbnQgaXMgY2FjaGVkIGFuZCBiZWZvcmVDcmVhdGVcbiAgICAvLyBuZXZlciBnZXRzIGNhbGxlZFxuICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9va1xuICB9IGVsc2UgaWYgKGluamVjdFN0eWxlcykge1xuICAgIGhvb2sgPSBzaGFkb3dNb2RlXG4gICAgICA/IGZ1bmN0aW9uICgpIHsgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgdGhpcy4kcm9vdC4kb3B0aW9ucy5zaGFkb3dSb290KSB9XG4gICAgICA6IGluamVjdFN0eWxlc1xuICB9XG5cbiAgaWYgKGhvb2spIHtcbiAgICBpZiAob3B0aW9ucy5mdW5jdGlvbmFsKSB7XG4gICAgICAvLyBmb3IgdGVtcGxhdGUtb25seSBob3QtcmVsb2FkIGJlY2F1c2UgaW4gdGhhdCBjYXNlIHRoZSByZW5kZXIgZm4gZG9lc24ndFxuICAgICAgLy8gZ28gdGhyb3VnaCB0aGUgbm9ybWFsaXplclxuICAgICAgb3B0aW9ucy5faW5qZWN0U3R5bGVzID0gaG9va1xuICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9hbCBjb21wb25lbnQgaW4gdnVlIGZpbGVcbiAgICAgIHZhciBvcmlnaW5hbFJlbmRlciA9IG9wdGlvbnMucmVuZGVyXG4gICAgICBvcHRpb25zLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcldpdGhTdHlsZUluamVjdGlvbiAoaCwgY29udGV4dCkge1xuICAgICAgICBob29rLmNhbGwoY29udGV4dClcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsUmVuZGVyKGgsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICB2YXIgZXhpc3RpbmcgPSBvcHRpb25zLmJlZm9yZUNyZWF0ZVxuICAgICAgb3B0aW9ucy5iZWZvcmVDcmVhdGUgPSBleGlzdGluZ1xuICAgICAgICA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaylcbiAgICAgICAgOiBbaG9va11cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG4iLCIvKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4gIE1vZGlmaWVkIGJ5IEV2YW4gWW91IEB5eXg5OTA4MDNcbiovXG5cbmltcG9ydCBsaXN0VG9TdHlsZXMgZnJvbSAnLi9saXN0VG9TdHlsZXMnXG5cbnZhciBoYXNEb2N1bWVudCA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCdcblxuaWYgKHR5cGVvZiBERUJVRyAhPT0gJ3VuZGVmaW5lZCcgJiYgREVCVUcpIHtcbiAgaWYgKCFoYXNEb2N1bWVudCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAndnVlLXN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50LiAnICtcbiAgICBcIlVzZSB7IHRhcmdldDogJ25vZGUnIH0gaW4geW91ciBXZWJwYWNrIGNvbmZpZyB0byBpbmRpY2F0ZSBhIHNlcnZlci1yZW5kZXJpbmcgZW52aXJvbm1lbnQuXCJcbiAgKSB9XG59XG5cbi8qXG50eXBlIFN0eWxlT2JqZWN0ID0ge1xuICBpZDogbnVtYmVyO1xuICBwYXJ0czogQXJyYXk8U3R5bGVPYmplY3RQYXJ0PlxufVxuXG50eXBlIFN0eWxlT2JqZWN0UGFydCA9IHtcbiAgY3NzOiBzdHJpbmc7XG4gIG1lZGlhOiBzdHJpbmc7XG4gIHNvdXJjZU1hcDogP3N0cmluZ1xufVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0gey8qXG4gIFtpZDogbnVtYmVyXToge1xuICAgIGlkOiBudW1iZXIsXG4gICAgcmVmczogbnVtYmVyLFxuICAgIHBhcnRzOiBBcnJheTwob2JqPzogU3R5bGVPYmplY3RQYXJ0KSA9PiB2b2lkPlxuICB9XG4qL31cblxudmFyIGhlYWQgPSBoYXNEb2N1bWVudCAmJiAoZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdKVxudmFyIHNpbmdsZXRvbkVsZW1lbnQgPSBudWxsXG52YXIgc2luZ2xldG9uQ291bnRlciA9IDBcbnZhciBpc1Byb2R1Y3Rpb24gPSBmYWxzZVxudmFyIG5vb3AgPSBmdW5jdGlvbiAoKSB7fVxudmFyIG9wdGlvbnMgPSBudWxsXG52YXIgc3NySWRLZXkgPSAnZGF0YS12dWUtc3NyLWlkJ1xuXG4vLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbi8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcbnZhciBpc09sZElFID0gdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgL21zaWUgWzYtOV1cXGIvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRTdHlsZXNDbGllbnQgKHBhcmVudElkLCBsaXN0LCBfaXNQcm9kdWN0aW9uLCBfb3B0aW9ucykge1xuICBpc1Byb2R1Y3Rpb24gPSBfaXNQcm9kdWN0aW9uXG5cbiAgb3B0aW9ucyA9IF9vcHRpb25zIHx8IHt9XG5cbiAgdmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhwYXJlbnRJZCwgbGlzdClcbiAgYWRkU3R5bGVzVG9Eb20oc3R5bGVzKVxuXG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcbiAgICB2YXIgbWF5UmVtb3ZlID0gW11cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV1cbiAgICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdXG4gICAgICBkb21TdHlsZS5yZWZzLS1cbiAgICAgIG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKVxuICAgIH1cbiAgICBpZiAobmV3TGlzdCkge1xuICAgICAgc3R5bGVzID0gbGlzdFRvU3R5bGVzKHBhcmVudElkLCBuZXdMaXN0KVxuICAgICAgYWRkU3R5bGVzVG9Eb20oc3R5bGVzKVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXMgPSBbXVxuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldXG4gICAgICBpZiAoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgZG9tU3R5bGUucGFydHNbal0oKVxuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcyAvKiBBcnJheTxTdHlsZU9iamVjdD4gKi8pIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXVxuICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdXG4gICAgaWYgKGRvbVN0eWxlKSB7XG4gICAgICBkb21TdHlsZS5yZWZzKytcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSlcbiAgICAgIH1cbiAgICAgIGZvciAoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0pKVxuICAgICAgfVxuICAgICAgaWYgKGRvbVN0eWxlLnBhcnRzLmxlbmd0aCA+IGl0ZW0ucGFydHMubGVuZ3RoKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLmxlbmd0aCA9IGl0ZW0ucGFydHMubGVuZ3RoXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBwYXJ0cyA9IFtdXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgcGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdKSlcbiAgICAgIH1cbiAgICAgIHN0eWxlc0luRG9tW2l0ZW0uaWRdID0geyBpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50ICgpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJylcbiAgc3R5bGVFbGVtZW50LnR5cGUgPSAndGV4dC9jc3MnXG4gIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KVxuICByZXR1cm4gc3R5bGVFbGVtZW50XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmogLyogU3R5bGVPYmplY3RQYXJ0ICovKSB7XG4gIHZhciB1cGRhdGUsIHJlbW92ZVxuICB2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc3R5bGVbJyArIHNzcklkS2V5ICsgJ349XCInICsgb2JqLmlkICsgJ1wiXScpXG5cbiAgaWYgKHN0eWxlRWxlbWVudCkge1xuICAgIGlmIChpc1Byb2R1Y3Rpb24pIHtcbiAgICAgIC8vIGhhcyBTU1Igc3R5bGVzIGFuZCBpbiBwcm9kdWN0aW9uIG1vZGUuXG4gICAgICAvLyBzaW1wbHkgZG8gbm90aGluZy5cbiAgICAgIHJldHVybiBub29wXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGhhcyBTU1Igc3R5bGVzIGJ1dCBpbiBkZXYgbW9kZS5cbiAgICAgIC8vIGZvciBzb21lIHJlYXNvbiBDaHJvbWUgY2FuJ3QgaGFuZGxlIHNvdXJjZSBtYXAgaW4gc2VydmVyLXJlbmRlcmVkXG4gICAgICAvLyBzdHlsZSB0YWdzIC0gc291cmNlIG1hcHMgaW4gPHN0eWxlPiBvbmx5IHdvcmtzIGlmIHRoZSBzdHlsZSB0YWcgaXNcbiAgICAgIC8vIGNyZWF0ZWQgYW5kIGluc2VydGVkIGR5bmFtaWNhbGx5LiBTbyB3ZSByZW1vdmUgdGhlIHNlcnZlciByZW5kZXJlZFxuICAgICAgLy8gc3R5bGVzIGFuZCBpbmplY3QgbmV3IG9uZXMuXG4gICAgICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpXG4gICAgfVxuICB9XG5cbiAgaWYgKGlzT2xkSUUpIHtcbiAgICAvLyB1c2Ugc2luZ2xldG9uIG1vZGUgZm9yIElFOS5cbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrK1xuICAgIHN0eWxlRWxlbWVudCA9IHNpbmdsZXRvbkVsZW1lbnQgfHwgKHNpbmdsZXRvbkVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQoKSlcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCBmYWxzZSlcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCB0cnVlKVxuICB9IGVsc2Uge1xuICAgIC8vIHVzZSBtdWx0aS1zdHlsZS10YWcgbW9kZSBpbiBhbGwgb3RoZXIgY2FzZXNcbiAgICBzdHlsZUVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQoKVxuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZShvYmopXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmogLyogU3R5bGVPYmplY3RQYXJ0ICovKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcbiAgICAgICAgICBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuICAgICAgICAgIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKVxuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKVxuICAgIH1cbiAgfVxufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgdGV4dFN0b3JlID0gW11cblxuICByZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudFxuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpXG4gIH1cbn0pKClcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGVFbGVtZW50LCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLmNzc1xuXG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKVxuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKVxuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXNcbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSlcbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChjc3NOb2RlKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZUVsZW1lbnQsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzc1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWFcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXBcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKVxuICB9XG4gIGlmIChvcHRpb25zLnNzcklkKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShzc3JJZEtleSwgb2JqLmlkKVxuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCkge1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLmNocm9tZS5jb20vZGV2dG9vbHMvZG9jcy9qYXZhc2NyaXB0LWRlYnVnZ2luZ1xuICAgIC8vIHRoaXMgbWFrZXMgc291cmNlIG1hcHMgaW5zaWRlIHN0eWxlIHRhZ3Mgd29yayBwcm9wZXJseSBpbiBDaHJvbWVcbiAgICBjc3MgKz0gJ1xcbi8qIyBzb3VyY2VVUkw9JyArIHNvdXJjZU1hcC5zb3VyY2VzWzBdICsgJyAqLydcbiAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuICAgIGNzcyArPSAnXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCwnICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArICcgKi8nXG4gIH1cblxuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzXG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpXG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKVxuICB9XG59XG4iLCIvKipcbiAqIFRyYW5zbGF0ZXMgdGhlIGxpc3QgZm9ybWF0IHByb2R1Y2VkIGJ5IGNzcy1sb2FkZXIgaW50byBzb21ldGhpbmdcbiAqIGVhc2llciB0byBtYW5pcHVsYXRlLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsaXN0VG9TdHlsZXMgKHBhcmVudElkLCBsaXN0KSB7XG4gIHZhciBzdHlsZXMgPSBbXVxuICB2YXIgbmV3U3R5bGVzID0ge31cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldXG4gICAgdmFyIGlkID0gaXRlbVswXVxuICAgIHZhciBjc3MgPSBpdGVtWzFdXG4gICAgdmFyIG1lZGlhID0gaXRlbVsyXVxuICAgIHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdXG4gICAgdmFyIHBhcnQgPSB7XG4gICAgICBpZDogcGFyZW50SWQgKyAnOicgKyBpLFxuICAgICAgY3NzOiBjc3MsXG4gICAgICBtZWRpYTogbWVkaWEsXG4gICAgICBzb3VyY2VNYXA6IHNvdXJjZU1hcFxuICAgIH1cbiAgICBpZiAoIW5ld1N0eWxlc1tpZF0pIHtcbiAgICAgIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7IGlkOiBpZCwgcGFydHM6IFtwYXJ0XSB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydClcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0eWxlc1xufVxuIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4vdnVlLXZpcnR1YWwtc2Nyb2xsZXIuY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiMDQ2MTg1NzBcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4vdnVlLXZpcnR1YWwtc2Nyb2xsZXIuY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4vdnVlLXZpcnR1YWwtc2Nyb2xsZXIuY3NzXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XG5cbnZhciBjb25maWcgPSB7XG4gIGl0ZW1zTGltaXQ6IDEwMDBcbn07XG5cbmZ1bmN0aW9uIGdldEludGVybmV0RXhwbG9yZXJWZXJzaW9uKCkge1xuXHR2YXIgdWEgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudDtcblxuXHR2YXIgbXNpZSA9IHVhLmluZGV4T2YoJ01TSUUgJyk7XG5cdGlmIChtc2llID4gMCkge1xuXHRcdC8vIElFIDEwIG9yIG9sZGVyID0+IHJldHVybiB2ZXJzaW9uIG51bWJlclxuXHRcdHJldHVybiBwYXJzZUludCh1YS5zdWJzdHJpbmcobXNpZSArIDUsIHVhLmluZGV4T2YoJy4nLCBtc2llKSksIDEwKTtcblx0fVxuXG5cdHZhciB0cmlkZW50ID0gdWEuaW5kZXhPZignVHJpZGVudC8nKTtcblx0aWYgKHRyaWRlbnQgPiAwKSB7XG5cdFx0Ly8gSUUgMTEgPT4gcmV0dXJuIHZlcnNpb24gbnVtYmVyXG5cdFx0dmFyIHJ2ID0gdWEuaW5kZXhPZigncnY6Jyk7XG5cdFx0cmV0dXJuIHBhcnNlSW50KHVhLnN1YnN0cmluZyhydiArIDMsIHVhLmluZGV4T2YoJy4nLCBydikpLCAxMCk7XG5cdH1cblxuXHR2YXIgZWRnZSA9IHVhLmluZGV4T2YoJ0VkZ2UvJyk7XG5cdGlmIChlZGdlID4gMCkge1xuXHRcdC8vIEVkZ2UgKElFIDEyKykgPT4gcmV0dXJuIHZlcnNpb24gbnVtYmVyXG5cdFx0cmV0dXJuIHBhcnNlSW50KHVhLnN1YnN0cmluZyhlZGdlICsgNSwgdWEuaW5kZXhPZignLicsIGVkZ2UpKSwgMTApO1xuXHR9XG5cblx0Ly8gb3RoZXIgYnJvd3NlclxuXHRyZXR1cm4gLTE7XG59XG5cbnZhciBpc0lFID0gdm9pZCAwO1xuXG5mdW5jdGlvbiBpbml0Q29tcGF0KCkge1xuXHRpZiAoIWluaXRDb21wYXQuaW5pdCkge1xuXHRcdGluaXRDb21wYXQuaW5pdCA9IHRydWU7XG5cdFx0aXNJRSA9IGdldEludGVybmV0RXhwbG9yZXJWZXJzaW9uKCkgIT09IC0xO1xuXHR9XG59XG5cbnZhciBSZXNpemVPYnNlcnZlciA9IHsgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG5cdFx0dmFyIF92bSA9IHRoaXM7dmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaDtyZXR1cm4gX2MoJ2RpdicsIHsgc3RhdGljQ2xhc3M6IFwicmVzaXplLW9ic2VydmVyXCIsIGF0dHJzOiB7IFwidGFiaW5kZXhcIjogXCItMVwiIH0gfSk7XG5cdH0sIHN0YXRpY1JlbmRlckZuczogW10sIF9zY29wZUlkOiAnZGF0YS12LWIzMjllZTRjJyxcblx0bmFtZTogJ3Jlc2l6ZS1vYnNlcnZlcicsXG5cblx0bWV0aG9kczoge1xuXHRcdGNvbXBhcmVBbmROb3RpZnk6IGZ1bmN0aW9uIGNvbXBhcmVBbmROb3RpZnkoKSB7XG5cdFx0XHRpZiAodGhpcy5fdyAhPT0gdGhpcy4kZWwub2Zmc2V0V2lkdGggfHwgdGhpcy5faCAhPT0gdGhpcy4kZWwub2Zmc2V0SGVpZ2h0KSB7XG5cdFx0XHRcdHRoaXMuX3cgPSB0aGlzLiRlbC5vZmZzZXRXaWR0aDtcblx0XHRcdFx0dGhpcy5faCA9IHRoaXMuJGVsLm9mZnNldEhlaWdodDtcblx0XHRcdFx0dGhpcy4kZW1pdCgnbm90aWZ5Jyk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRhZGRSZXNpemVIYW5kbGVyczogZnVuY3Rpb24gYWRkUmVzaXplSGFuZGxlcnMoKSB7XG5cdFx0XHR0aGlzLl9yZXNpemVPYmplY3QuY29udGVudERvY3VtZW50LmRlZmF1bHRWaWV3LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuY29tcGFyZUFuZE5vdGlmeSk7XG5cdFx0XHR0aGlzLmNvbXBhcmVBbmROb3RpZnkoKTtcblx0XHR9LFxuXHRcdHJlbW92ZVJlc2l6ZUhhbmRsZXJzOiBmdW5jdGlvbiByZW1vdmVSZXNpemVIYW5kbGVycygpIHtcblx0XHRcdGlmICh0aGlzLl9yZXNpemVPYmplY3QgJiYgdGhpcy5fcmVzaXplT2JqZWN0Lm9ubG9hZCkge1xuXHRcdFx0XHRpZiAoIWlzSUUgJiYgdGhpcy5fcmVzaXplT2JqZWN0LmNvbnRlbnREb2N1bWVudCkge1xuXHRcdFx0XHRcdHRoaXMuX3Jlc2l6ZU9iamVjdC5jb250ZW50RG9jdW1lbnQuZGVmYXVsdFZpZXcucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5jb21wYXJlQW5kTm90aWZ5KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRkZWxldGUgdGhpcy5fcmVzaXplT2JqZWN0Lm9ubG9hZDtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cblx0bW91bnRlZDogZnVuY3Rpb24gbW91bnRlZCgpIHtcblx0XHR2YXIgX3RoaXMgPSB0aGlzO1xuXG5cdFx0aW5pdENvbXBhdCgpO1xuXHRcdHRoaXMuJG5leHRUaWNrKGZ1bmN0aW9uICgpIHtcblx0XHRcdF90aGlzLl93ID0gX3RoaXMuJGVsLm9mZnNldFdpZHRoO1xuXHRcdFx0X3RoaXMuX2ggPSBfdGhpcy4kZWwub2Zmc2V0SGVpZ2h0O1xuXHRcdH0pO1xuXHRcdHZhciBvYmplY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvYmplY3QnKTtcblx0XHR0aGlzLl9yZXNpemVPYmplY3QgPSBvYmplY3Q7XG5cdFx0b2JqZWN0LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuXHRcdG9iamVjdC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgLTEpO1xuXHRcdG9iamVjdC5vbmxvYWQgPSB0aGlzLmFkZFJlc2l6ZUhhbmRsZXJzO1xuXHRcdG9iamVjdC50eXBlID0gJ3RleHQvaHRtbCc7XG5cdFx0aWYgKGlzSUUpIHtcblx0XHRcdHRoaXMuJGVsLmFwcGVuZENoaWxkKG9iamVjdCk7XG5cdFx0fVxuXHRcdG9iamVjdC5kYXRhID0gJ2Fib3V0OmJsYW5rJztcblx0XHRpZiAoIWlzSUUpIHtcblx0XHRcdHRoaXMuJGVsLmFwcGVuZENoaWxkKG9iamVjdCk7XG5cdFx0fVxuXHR9LFxuXHRiZWZvcmVEZXN0cm95OiBmdW5jdGlvbiBiZWZvcmVEZXN0cm95KCkge1xuXHRcdHRoaXMucmVtb3ZlUmVzaXplSGFuZGxlcnMoKTtcblx0fVxufTtcblxuLy8gSW5zdGFsbCB0aGUgY29tcG9uZW50c1xuZnVuY3Rpb24gaW5zdGFsbChWdWUkJDEpIHtcblx0VnVlJCQxLmNvbXBvbmVudCgncmVzaXplLW9ic2VydmVyJywgUmVzaXplT2JzZXJ2ZXIpO1xuXHRWdWUkJDEuY29tcG9uZW50KCdSZXNpemVPYnNlcnZlcicsIFJlc2l6ZU9ic2VydmVyKTtcbn1cblxuLy8gUGx1Z2luXG52YXIgcGx1Z2luJDIgPSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2ZXJzaW9uOiBcIjAuNC41XCIsXG5cdGluc3RhbGw6IGluc3RhbGxcbn07XG5cbi8vIEF1dG8taW5zdGFsbFxudmFyIEdsb2JhbFZ1ZSQxID0gbnVsbDtcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuXHRHbG9iYWxWdWUkMSA9IHdpbmRvdy5WdWU7XG59IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG5cdEdsb2JhbFZ1ZSQxID0gZ2xvYmFsLlZ1ZTtcbn1cbmlmIChHbG9iYWxWdWUkMSkge1xuXHRHbG9iYWxWdWUkMS51c2UocGx1Z2luJDIpO1xufVxuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iajtcbn0gOiBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xufTtcblxuXG5cblxuXG52YXIgYXN5bmNHZW5lcmF0b3IgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEF3YWl0VmFsdWUodmFsdWUpIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBmdW5jdGlvbiBBc3luY0dlbmVyYXRvcihnZW4pIHtcbiAgICB2YXIgZnJvbnQsIGJhY2s7XG5cbiAgICBmdW5jdGlvbiBzZW5kKGtleSwgYXJnKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICB2YXIgcmVxdWVzdCA9IHtcbiAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICBhcmc6IGFyZyxcbiAgICAgICAgICByZXNvbHZlOiByZXNvbHZlLFxuICAgICAgICAgIHJlamVjdDogcmVqZWN0LFxuICAgICAgICAgIG5leHQ6IG51bGxcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoYmFjaykge1xuICAgICAgICAgIGJhY2sgPSBiYWNrLm5leHQgPSByZXF1ZXN0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZyb250ID0gYmFjayA9IHJlcXVlc3Q7XG4gICAgICAgICAgcmVzdW1lKGtleSwgYXJnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzdW1lKGtleSwgYXJnKSB7XG4gICAgICB0cnkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gZ2VuW2tleV0oYXJnKTtcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuXG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEF3YWl0VmFsdWUpIHtcbiAgICAgICAgICBQcm9taXNlLnJlc29sdmUodmFsdWUudmFsdWUpLnRoZW4oZnVuY3Rpb24gKGFyZykge1xuICAgICAgICAgICAgcmVzdW1lKFwibmV4dFwiLCBhcmcpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgICAgICAgIHJlc3VtZShcInRocm93XCIsIGFyZyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2V0dGxlKHJlc3VsdC5kb25lID8gXCJyZXR1cm5cIiA6IFwibm9ybWFsXCIsIHJlc3VsdC52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBzZXR0bGUoXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldHRsZSh0eXBlLCB2YWx1ZSkge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgXCJyZXR1cm5cIjpcbiAgICAgICAgICBmcm9udC5yZXNvbHZlKHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIGRvbmU6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwidGhyb3dcIjpcbiAgICAgICAgICBmcm9udC5yZWplY3QodmFsdWUpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgZnJvbnQucmVzb2x2ZSh7XG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICBkb25lOiBmYWxzZVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBmcm9udCA9IGZyb250Lm5leHQ7XG5cbiAgICAgIGlmIChmcm9udCkge1xuICAgICAgICByZXN1bWUoZnJvbnQua2V5LCBmcm9udC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYmFjayA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5faW52b2tlID0gc2VuZDtcblxuICAgIGlmICh0eXBlb2YgZ2VuLnJldHVybiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICB0aGlzLnJldHVybiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5hc3luY0l0ZXJhdG9yKSB7XG4gICAgQXN5bmNHZW5lcmF0b3IucHJvdG90eXBlW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gIH1cblxuICBBc3luY0dlbmVyYXRvci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgICByZXR1cm4gdGhpcy5faW52b2tlKFwibmV4dFwiLCBhcmcpO1xuICB9O1xuXG4gIEFzeW5jR2VuZXJhdG9yLnByb3RvdHlwZS50aHJvdyA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgICByZXR1cm4gdGhpcy5faW52b2tlKFwidGhyb3dcIiwgYXJnKTtcbiAgfTtcblxuICBBc3luY0dlbmVyYXRvci5wcm90b3R5cGUucmV0dXJuID0gZnVuY3Rpb24gKGFyZykge1xuICAgIHJldHVybiB0aGlzLl9pbnZva2UoXCJyZXR1cm5cIiwgYXJnKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHdyYXA6IGZ1bmN0aW9uIChmbikge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBBc3luY0dlbmVyYXRvcihmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICAgIH07XG4gICAgfSxcbiAgICBhd2FpdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICByZXR1cm4gbmV3IEF3YWl0VmFsdWUodmFsdWUpO1xuICAgIH1cbiAgfTtcbn0oKTtcblxuXG5cblxuXG52YXIgY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTtcblxudmFyIGNyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSgpO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbnZhciB0b0NvbnN1bWFibGVBcnJheSA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgIGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIGFycjJbaV0gPSBhcnJbaV07XG5cbiAgICByZXR1cm4gYXJyMjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShhcnIpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBwcm9jZXNzT3B0aW9ucyh2YWx1ZSkge1xuXHR2YXIgb3B0aW9ucyA9IHZvaWQgMDtcblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdC8vIFNpbXBsZSBvcHRpb25zIChjYWxsYmFjay1vbmx5KVxuXHRcdG9wdGlvbnMgPSB7XG5cdFx0XHRjYWxsYmFjazogdmFsdWVcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdC8vIE9wdGlvbnMgb2JqZWN0XG5cdFx0b3B0aW9ucyA9IHZhbHVlO1xuXHR9XG5cdHJldHVybiBvcHRpb25zO1xufVxuXG5mdW5jdGlvbiB0aHJvdHRsZShjYWxsYmFjaywgZGVsYXkpIHtcblx0dmFyIHRpbWVvdXQgPSB2b2lkIDA7XG5cdHZhciBsYXN0U3RhdGUgPSB2b2lkIDA7XG5cdHZhciBjdXJyZW50QXJncyA9IHZvaWQgMDtcblx0dmFyIHRocm90dGxlZCA9IGZ1bmN0aW9uIHRocm90dGxlZChzdGF0ZSkge1xuXHRcdGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuXHRcdFx0YXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG5cdFx0fVxuXG5cdFx0Y3VycmVudEFyZ3MgPSBhcmdzO1xuXHRcdGlmICh0aW1lb3V0ICYmIHN0YXRlID09PSBsYXN0U3RhdGUpIHJldHVybjtcblx0XHRsYXN0U3RhdGUgPSBzdGF0ZTtcblx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG5cdFx0dGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHRcdFx0Y2FsbGJhY2suYXBwbHkodW5kZWZpbmVkLCBbc3RhdGVdLmNvbmNhdCh0b0NvbnN1bWFibGVBcnJheShjdXJyZW50QXJncykpKTtcblx0XHRcdHRpbWVvdXQgPSAwO1xuXHRcdH0sIGRlbGF5KTtcblx0fTtcblx0dGhyb3R0bGVkLl9jbGVhciA9IGZ1bmN0aW9uICgpIHtcblx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG5cdH07XG5cdHJldHVybiB0aHJvdHRsZWQ7XG59XG5cbmZ1bmN0aW9uIGRlZXBFcXVhbCh2YWwxLCB2YWwyKSB7XG5cdGlmICh2YWwxID09PSB2YWwyKSByZXR1cm4gdHJ1ZTtcblx0aWYgKCh0eXBlb2YgdmFsMSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YodmFsMSkpID09PSAnb2JqZWN0Jykge1xuXHRcdGZvciAodmFyIGtleSBpbiB2YWwxKSB7XG5cdFx0XHRpZiAoIWRlZXBFcXVhbCh2YWwxW2tleV0sIHZhbDJba2V5XSkpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXHRyZXR1cm4gZmFsc2U7XG59XG5cbnZhciBWaXNpYmlsaXR5U3RhdGUgPSBmdW5jdGlvbiAoKSB7XG5cdGZ1bmN0aW9uIFZpc2liaWxpdHlTdGF0ZShlbCwgb3B0aW9ucywgdm5vZGUpIHtcblx0XHRjbGFzc0NhbGxDaGVjayh0aGlzLCBWaXNpYmlsaXR5U3RhdGUpO1xuXG5cdFx0dGhpcy5lbCA9IGVsO1xuXHRcdHRoaXMub2JzZXJ2ZXIgPSBudWxsO1xuXHRcdHRoaXMuZnJvemVuID0gZmFsc2U7XG5cdFx0dGhpcy5jcmVhdGVPYnNlcnZlcihvcHRpb25zLCB2bm9kZSk7XG5cdH1cblxuXHRjcmVhdGVDbGFzcyhWaXNpYmlsaXR5U3RhdGUsIFt7XG5cdFx0a2V5OiAnY3JlYXRlT2JzZXJ2ZXInLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zLCB2bm9kZSkge1xuXHRcdFx0dmFyIF90aGlzID0gdGhpcztcblxuXHRcdFx0aWYgKHRoaXMub2JzZXJ2ZXIpIHtcblx0XHRcdFx0dGhpcy5kZXN0cm95T2JzZXJ2ZXIoKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMuZnJvemVuKSByZXR1cm47XG5cblx0XHRcdHRoaXMub3B0aW9ucyA9IHByb2Nlc3NPcHRpb25zKG9wdGlvbnMpO1xuXG5cdFx0XHR0aGlzLmNhbGxiYWNrID0gdGhpcy5vcHRpb25zLmNhbGxiYWNrO1xuXHRcdFx0Ly8gVGhyb3R0bGVcblx0XHRcdGlmICh0aGlzLmNhbGxiYWNrICYmIHRoaXMub3B0aW9ucy50aHJvdHRsZSkge1xuXHRcdFx0XHR0aGlzLmNhbGxiYWNrID0gdGhyb3R0bGUodGhpcy5jYWxsYmFjaywgdGhpcy5vcHRpb25zLnRocm90dGxlKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5vbGRSZXN1bHQgPSB1bmRlZmluZWQ7XG5cblx0XHRcdHRoaXMub2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKGVudHJpZXMpIHtcblx0XHRcdFx0dmFyIGVudHJ5ID0gZW50cmllc1swXTtcblx0XHRcdFx0aWYgKF90aGlzLmNhbGxiYWNrKSB7XG5cdFx0XHRcdFx0Ly8gVXNlIGlzSW50ZXJzZWN0aW5nIGlmIHBvc3NpYmxlIGJlY2F1c2UgYnJvd3NlcnMgY2FuIHJlcG9ydCBpc0ludGVyc2VjdGluZyBhcyB0cnVlLCBidXQgaW50ZXJzZWN0aW9uUmF0aW8gYXMgMCwgd2hlbiBzb21ldGhpbmcgdmVyeSBzbG93bHkgZW50ZXJzIHRoZSB2aWV3cG9ydC5cblx0XHRcdFx0XHR2YXIgcmVzdWx0ID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgJiYgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPj0gX3RoaXMudGhyZXNob2xkO1xuXHRcdFx0XHRcdGlmIChyZXN1bHQgPT09IF90aGlzLm9sZFJlc3VsdCkgcmV0dXJuO1xuXHRcdFx0XHRcdF90aGlzLm9sZFJlc3VsdCA9IHJlc3VsdDtcblx0XHRcdFx0XHRfdGhpcy5jYWxsYmFjayhyZXN1bHQsIGVudHJ5KTtcblx0XHRcdFx0XHRpZiAocmVzdWx0ICYmIF90aGlzLm9wdGlvbnMub25jZSkge1xuXHRcdFx0XHRcdFx0X3RoaXMuZnJvemVuID0gdHJ1ZTtcblx0XHRcdFx0XHRcdF90aGlzLmRlc3Ryb3lPYnNlcnZlcigpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcy5vcHRpb25zLmludGVyc2VjdGlvbik7XG5cblx0XHRcdC8vIFdhaXQgZm9yIHRoZSBlbGVtZW50IHRvIGJlIGluIGRvY3VtZW50XG5cdFx0XHR2bm9kZS5jb250ZXh0LiRuZXh0VGljayhmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdF90aGlzLm9ic2VydmVyLm9ic2VydmUoX3RoaXMuZWwpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnZGVzdHJveU9ic2VydmVyJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gZGVzdHJveU9ic2VydmVyKCkge1xuXHRcdFx0aWYgKHRoaXMub2JzZXJ2ZXIpIHtcblx0XHRcdFx0dGhpcy5vYnNlcnZlci5kaXNjb25uZWN0KCk7XG5cdFx0XHRcdHRoaXMub2JzZXJ2ZXIgPSBudWxsO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBDYW5jZWwgdGhyb3R0bGVkIGNhbGxcblx0XHRcdGlmICh0aGlzLmNhbGxiYWNrICYmIHRoaXMuY2FsbGJhY2suX2NsZWFyKSB7XG5cdFx0XHRcdHRoaXMuY2FsbGJhY2suX2NsZWFyKCk7XG5cdFx0XHRcdHRoaXMuY2FsbGJhY2sgPSBudWxsO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ3RocmVzaG9sZCcsXG5cdFx0Z2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5vcHRpb25zLmludGVyc2VjdGlvbiAmJiB0aGlzLm9wdGlvbnMuaW50ZXJzZWN0aW9uLnRocmVzaG9sZCB8fCAwO1xuXHRcdH1cblx0fV0pO1xuXHRyZXR1cm4gVmlzaWJpbGl0eVN0YXRlO1xufSgpO1xuXG5mdW5jdGlvbiBiaW5kKGVsLCBfcmVmLCB2bm9kZSkge1xuXHR2YXIgdmFsdWUgPSBfcmVmLnZhbHVlO1xuXG5cdGlmICh0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0Y29uc29sZS53YXJuKCdbdnVlLW9ic2VydmUtdmlzaWJpbGl0eV0gSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgQVBJIGlzIG5vdCBhdmFpbGFibGUgaW4geW91ciBicm93c2VyLiBQbGVhc2UgaW5zdGFsbCB0aGlzIHBvbHlmaWxsOiBodHRwczovL2dpdGh1Yi5jb20vdzNjL0ludGVyc2VjdGlvbk9ic2VydmVyL3RyZWUvbWFzdGVyL3BvbHlmaWxsJyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIHN0YXRlID0gbmV3IFZpc2liaWxpdHlTdGF0ZShlbCwgdmFsdWUsIHZub2RlKTtcblx0XHRlbC5fdnVlX3Zpc2liaWxpdHlTdGF0ZSA9IHN0YXRlO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZShlbCwgX3JlZjIsIHZub2RlKSB7XG5cdHZhciB2YWx1ZSA9IF9yZWYyLnZhbHVlLFxuXHQgICAgb2xkVmFsdWUgPSBfcmVmMi5vbGRWYWx1ZTtcblxuXHRpZiAoZGVlcEVxdWFsKHZhbHVlLCBvbGRWYWx1ZSkpIHJldHVybjtcblx0dmFyIHN0YXRlID0gZWwuX3Z1ZV92aXNpYmlsaXR5U3RhdGU7XG5cdGlmIChzdGF0ZSkge1xuXHRcdHN0YXRlLmNyZWF0ZU9ic2VydmVyKHZhbHVlLCB2bm9kZSk7XG5cdH0gZWxzZSB7XG5cdFx0YmluZChlbCwgeyB2YWx1ZTogdmFsdWUgfSwgdm5vZGUpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVuYmluZChlbCkge1xuXHR2YXIgc3RhdGUgPSBlbC5fdnVlX3Zpc2liaWxpdHlTdGF0ZTtcblx0aWYgKHN0YXRlKSB7XG5cdFx0c3RhdGUuZGVzdHJveU9ic2VydmVyKCk7XG5cdFx0ZGVsZXRlIGVsLl92dWVfdmlzaWJpbGl0eVN0YXRlO1xuXHR9XG59XG5cbnZhciBPYnNlcnZlVmlzaWJpbGl0eSA9IHtcblx0YmluZDogYmluZCxcblx0dXBkYXRlOiB1cGRhdGUsXG5cdHVuYmluZDogdW5iaW5kXG59O1xuXG4vLyBJbnN0YWxsIHRoZSBjb21wb25lbnRzXG5mdW5jdGlvbiBpbnN0YWxsJDEoVnVlJCQxKSB7XG5cdFZ1ZSQkMS5kaXJlY3RpdmUoJ29ic2VydmUtdmlzaWJpbGl0eScsIE9ic2VydmVWaXNpYmlsaXR5KTtcblx0LyogLS0gQWRkIG1vcmUgY29tcG9uZW50cyBoZXJlIC0tICovXG59XG5cbi8qIC0tIFBsdWdpbiBkZWZpbml0aW9uICYgQXV0by1pbnN0YWxsIC0tICovXG4vKiBZb3Ugc2hvdWxkbid0IGhhdmUgdG8gbW9kaWZ5IHRoZSBjb2RlIGJlbG93ICovXG5cbi8vIFBsdWdpblxudmFyIHBsdWdpbiQ0ID0ge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0dmVyc2lvbjogXCIwLjQuM1wiLFxuXHRpbnN0YWxsOiBpbnN0YWxsJDFcbn07XG5cbi8vIEF1dG8taW5zdGFsbFxudmFyIEdsb2JhbFZ1ZSQyID0gbnVsbDtcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuXHRHbG9iYWxWdWUkMiA9IHdpbmRvdy5WdWU7XG59IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG5cdEdsb2JhbFZ1ZSQyID0gZ2xvYmFsLlZ1ZTtcbn1cbmlmIChHbG9iYWxWdWUkMikge1xuXHRHbG9iYWxWdWUkMi51c2UocGx1Z2luJDQpO1xufVxuXG52YXIgY29tbW9uanNHbG9iYWwgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHt9O1xuXG5cblxuXG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZuLCBtb2R1bGUpIHtcblx0cmV0dXJuIG1vZHVsZSA9IHsgZXhwb3J0czoge30gfSwgZm4obW9kdWxlLCBtb2R1bGUuZXhwb3J0cyksIG1vZHVsZS5leHBvcnRzO1xufVxuXG52YXIgc2Nyb2xscGFyZW50ID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSkge1xuKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgdW5kZWZpbmVkID09PSBcImZ1bmN0aW9uXCIgJiYgdW5kZWZpbmVkLmFtZCkge1xuICAgIHVuZGVmaW5lZChbXSwgZmFjdG9yeSk7XG4gIH0gZWxzZSBpZiAoJ29iamVjdCcgPT09IFwib2JqZWN0XCIgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcbiAgfSBlbHNlIHtcbiAgICByb290LlNjcm9sbHBhcmVudCA9IGZhY3RvcnkoKTtcbiAgfVxufShjb21tb25qc0dsb2JhbCwgZnVuY3Rpb24gKCkge1xuICB2YXIgcmVnZXggPSAvKGF1dG98c2Nyb2xsKS87XG5cbiAgdmFyIHBhcmVudHMgPSBmdW5jdGlvbiAobm9kZSwgcHMpIHtcbiAgICBpZiAobm9kZS5wYXJlbnROb2RlID09PSBudWxsKSB7IHJldHVybiBwczsgfVxuXG4gICAgcmV0dXJuIHBhcmVudHMobm9kZS5wYXJlbnROb2RlLCBwcy5jb25jYXQoW25vZGVdKSk7XG4gIH07XG5cbiAgdmFyIHN0eWxlID0gZnVuY3Rpb24gKG5vZGUsIHByb3ApIHtcbiAgICByZXR1cm4gZ2V0Q29tcHV0ZWRTdHlsZShub2RlLCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKHByb3ApO1xuICB9O1xuXG4gIHZhciBvdmVyZmxvdyA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgcmV0dXJuIHN0eWxlKG5vZGUsIFwib3ZlcmZsb3dcIikgKyBzdHlsZShub2RlLCBcIm92ZXJmbG93LXlcIikgKyBzdHlsZShub2RlLCBcIm92ZXJmbG93LXhcIik7XG4gIH07XG5cbiAgdmFyIHNjcm9sbCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICByZXR1cm4gcmVnZXgudGVzdChvdmVyZmxvdyhub2RlKSk7XG4gIH07XG5cbiAgdmFyIHNjcm9sbFBhcmVudCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgaWYgKCEobm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IG5vZGUgaW5zdGFuY2VvZiBTVkdFbGVtZW50KSkge1xuICAgICAgcmV0dXJuIDtcbiAgICB9XG5cbiAgICB2YXIgcHMgPSBwYXJlbnRzKG5vZGUucGFyZW50Tm9kZSwgW10pO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKHNjcm9sbChwc1tpXSkpIHtcbiAgICAgICAgcmV0dXJuIHBzW2ldO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgfTtcblxuICByZXR1cm4gc2Nyb2xsUGFyZW50O1xufSkpO1xufSk7XG5cbnZhciBfdHlwZW9mJDEgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmo7XG59IDogZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbn07XG5cblxuXG5cblxudmFyIGFzeW5jR2VuZXJhdG9yJDEgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEF3YWl0VmFsdWUodmFsdWUpIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBmdW5jdGlvbiBBc3luY0dlbmVyYXRvcihnZW4pIHtcbiAgICB2YXIgZnJvbnQsIGJhY2s7XG5cbiAgICBmdW5jdGlvbiBzZW5kKGtleSwgYXJnKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICB2YXIgcmVxdWVzdCA9IHtcbiAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICBhcmc6IGFyZyxcbiAgICAgICAgICByZXNvbHZlOiByZXNvbHZlLFxuICAgICAgICAgIHJlamVjdDogcmVqZWN0LFxuICAgICAgICAgIG5leHQ6IG51bGxcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoYmFjaykge1xuICAgICAgICAgIGJhY2sgPSBiYWNrLm5leHQgPSByZXF1ZXN0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZyb250ID0gYmFjayA9IHJlcXVlc3Q7XG4gICAgICAgICAgcmVzdW1lKGtleSwgYXJnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzdW1lKGtleSwgYXJnKSB7XG4gICAgICB0cnkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gZ2VuW2tleV0oYXJnKTtcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuXG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEF3YWl0VmFsdWUpIHtcbiAgICAgICAgICBQcm9taXNlLnJlc29sdmUodmFsdWUudmFsdWUpLnRoZW4oZnVuY3Rpb24gKGFyZykge1xuICAgICAgICAgICAgcmVzdW1lKFwibmV4dFwiLCBhcmcpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgICAgICAgIHJlc3VtZShcInRocm93XCIsIGFyZyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2V0dGxlKHJlc3VsdC5kb25lID8gXCJyZXR1cm5cIiA6IFwibm9ybWFsXCIsIHJlc3VsdC52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBzZXR0bGUoXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldHRsZSh0eXBlLCB2YWx1ZSkge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgXCJyZXR1cm5cIjpcbiAgICAgICAgICBmcm9udC5yZXNvbHZlKHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIGRvbmU6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwidGhyb3dcIjpcbiAgICAgICAgICBmcm9udC5yZWplY3QodmFsdWUpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgZnJvbnQucmVzb2x2ZSh7XG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICBkb25lOiBmYWxzZVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBmcm9udCA9IGZyb250Lm5leHQ7XG5cbiAgICAgIGlmIChmcm9udCkge1xuICAgICAgICByZXN1bWUoZnJvbnQua2V5LCBmcm9udC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYmFjayA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5faW52b2tlID0gc2VuZDtcblxuICAgIGlmICh0eXBlb2YgZ2VuLnJldHVybiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICB0aGlzLnJldHVybiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5hc3luY0l0ZXJhdG9yKSB7XG4gICAgQXN5bmNHZW5lcmF0b3IucHJvdG90eXBlW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gIH1cblxuICBBc3luY0dlbmVyYXRvci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgICByZXR1cm4gdGhpcy5faW52b2tlKFwibmV4dFwiLCBhcmcpO1xuICB9O1xuXG4gIEFzeW5jR2VuZXJhdG9yLnByb3RvdHlwZS50aHJvdyA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgICByZXR1cm4gdGhpcy5faW52b2tlKFwidGhyb3dcIiwgYXJnKTtcbiAgfTtcblxuICBBc3luY0dlbmVyYXRvci5wcm90b3R5cGUucmV0dXJuID0gZnVuY3Rpb24gKGFyZykge1xuICAgIHJldHVybiB0aGlzLl9pbnZva2UoXCJyZXR1cm5cIiwgYXJnKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHdyYXA6IGZ1bmN0aW9uIChmbikge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBBc3luY0dlbmVyYXRvcihmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICAgIH07XG4gICAgfSxcbiAgICBhd2FpdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICByZXR1cm4gbmV3IEF3YWl0VmFsdWUodmFsdWUpO1xuICAgIH1cbiAgfTtcbn0oKTtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxudmFyIGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gKG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59O1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufTtcblxudmFyIHByb3BzID0ge1xuICBpdGVtczoge1xuICAgIHR5cGU6IEFycmF5LFxuICAgIHJlcXVpcmVkOiB0cnVlXG4gIH0sXG5cbiAga2V5RmllbGQ6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgZGVmYXVsdDogJ2lkJ1xuICB9LFxuXG4gIGRpcmVjdGlvbjoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBkZWZhdWx0OiAndmVydGljYWwnLFxuICAgIHZhbGlkYXRvcjogZnVuY3Rpb24gdmFsaWRhdG9yKHZhbHVlKSB7XG4gICAgICByZXR1cm4gWyd2ZXJ0aWNhbCcsICdob3Jpem9udGFsJ10uaW5jbHVkZXModmFsdWUpO1xuICAgIH1cbiAgfVxufTtcblxuZnVuY3Rpb24gc2ltcGxlQXJyYXkoKSB7XG4gIHJldHVybiB0aGlzLml0ZW1zLmxlbmd0aCAmJiBfdHlwZW9mJDEodGhpcy5pdGVtc1swXSkgIT09ICdvYmplY3QnO1xufVxuXG52YXIgc3VwcG9ydHNQYXNzaXZlID0gZmFsc2U7XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICBzdXBwb3J0c1Bhc3NpdmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgb3B0cyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ3Bhc3NpdmUnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgc3VwcG9ydHNQYXNzaXZlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndGVzdCcsIG51bGwsIG9wdHMpO1xuICB9IGNhdGNoIChlKSB7fVxufVxuXG52YXIgdWlkID0gMDtcblxudmFyIFJlY3ljbGVTY3JvbGxlciA9IHsgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF92bSA9IHRoaXM7dmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaDtyZXR1cm4gX2MoJ2RpdicsIHsgZGlyZWN0aXZlczogW3sgbmFtZTogXCJvYnNlcnZlLXZpc2liaWxpdHlcIiwgcmF3TmFtZTogXCJ2LW9ic2VydmUtdmlzaWJpbGl0eVwiLCB2YWx1ZTogX3ZtLmhhbmRsZVZpc2liaWxpdHlDaGFuZ2UsIGV4cHJlc3Npb246IFwiaGFuZGxlVmlzaWJpbGl0eUNoYW5nZVwiIH1dLCBzdGF0aWNDbGFzczogXCJ2dWUtcmVjeWNsZS1zY3JvbGxlclwiLCBjbGFzczogZGVmaW5lUHJvcGVydHkoeyByZWFkeTogX3ZtLnJlYWR5LCAncGFnZS1tb2RlJzogX3ZtLnBhZ2VNb2RlIH0sICdkaXJlY3Rpb24tJyArIF92bS5kaXJlY3Rpb24sIHRydWUpLCBvbjogeyBcIiZzY3JvbGxcIjogZnVuY3Rpb24gc2Nyb2xsKCRldmVudCkge1xuICAgICAgICAgIHJldHVybiBfdm0uaGFuZGxlU2Nyb2xsKCRldmVudCk7XG4gICAgICAgIH0gfSB9LCBbX3ZtLiRzbG90cy5iZWZvcmUgPyBfYygnZGl2JywgeyBzdGF0aWNDbGFzczogXCJ2dWUtcmVjeWNsZS1zY3JvbGxlcl9fc2xvdFwiIH0sIFtfdm0uX3QoXCJiZWZvcmVcIildLCAyKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2JywgeyByZWY6IFwid3JhcHBlclwiLCBzdGF0aWNDbGFzczogXCJ2dWUtcmVjeWNsZS1zY3JvbGxlcl9faXRlbS13cmFwcGVyXCIsIHN0eWxlOiBkZWZpbmVQcm9wZXJ0eSh7fSwgX3ZtLmRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJyA/ICdtaW5IZWlnaHQnIDogJ21pbldpZHRoJywgX3ZtLnRvdGFsU2l6ZSArICdweCcpIH0sIF92bS5fbChfdm0ucG9vbCwgZnVuY3Rpb24gKHZpZXcpIHtcbiAgICAgIHJldHVybiBfYygnZGl2JywgeyBrZXk6IHZpZXcubnIuaWQsIHN0YXRpY0NsYXNzOiBcInZ1ZS1yZWN5Y2xlLXNjcm9sbGVyX19pdGVtLXZpZXdcIiwgY2xhc3M6IHsgaG92ZXI6IF92bS5ob3ZlcktleSA9PT0gdmlldy5uci5rZXkgfSwgc3R5bGU6IF92bS5yZWFkeSA/IHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlJyArIChfdm0uZGlyZWN0aW9uID09PSAndmVydGljYWwnID8gJ1knIDogJ1gnKSArICcoJyArIHZpZXcucG9zaXRpb24gKyAncHgpJyB9IDogbnVsbCwgb246IHsgXCJtb3VzZWVudGVyXCI6IGZ1bmN0aW9uIG1vdXNlZW50ZXIoJGV2ZW50KSB7XG4gICAgICAgICAgICBfdm0uaG92ZXJLZXkgPSB2aWV3Lm5yLmtleTtcbiAgICAgICAgICB9LCBcIm1vdXNlbGVhdmVcIjogZnVuY3Rpb24gbW91c2VsZWF2ZSgkZXZlbnQpIHtcbiAgICAgICAgICAgIF92bS5ob3ZlcktleSA9IG51bGw7XG4gICAgICAgICAgfSB9IH0sIFtfdm0uX3QoXCJkZWZhdWx0XCIsIG51bGwsIHsgaXRlbTogdmlldy5pdGVtLCBpbmRleDogdmlldy5uci5pbmRleCwgYWN0aXZlOiB2aWV3Lm5yLnVzZWQgfSldLCAyKTtcbiAgICB9KSwgMCksIF92bS5fdihcIiBcIiksIF92bS4kc2xvdHMuYWZ0ZXIgPyBfYygnZGl2JywgeyBzdGF0aWNDbGFzczogXCJ2dWUtcmVjeWNsZS1zY3JvbGxlcl9fc2xvdFwiIH0sIFtfdm0uX3QoXCJhZnRlclwiKV0sIDIpIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIF9jKCdSZXNpemVPYnNlcnZlcicsIHsgb246IHsgXCJub3RpZnlcIjogX3ZtLmhhbmRsZVJlc2l6ZSB9IH0pXSwgMSk7XG4gIH0sIHN0YXRpY1JlbmRlckZuczogW10sXG4gIG5hbWU6ICdSZWN5Y2xlU2Nyb2xsZXInLFxuXG4gIGNvbXBvbmVudHM6IHtcbiAgICBSZXNpemVPYnNlcnZlcjogUmVzaXplT2JzZXJ2ZXJcbiAgfSxcblxuICBkaXJlY3RpdmVzOiB7XG4gICAgT2JzZXJ2ZVZpc2liaWxpdHk6IE9ic2VydmVWaXNpYmlsaXR5XG4gIH0sXG5cbiAgcHJvcHM6IF9leHRlbmRzKHt9LCBwcm9wcywge1xuXG4gICAgaXRlbVNpemU6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICB9LFxuXG4gICAgbWluSXRlbVNpemU6IHtcbiAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiBudWxsXG4gICAgfSxcblxuICAgIHNpemVGaWVsZDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ3NpemUnXG4gICAgfSxcblxuICAgIHR5cGVGaWVsZDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ3R5cGUnXG4gICAgfSxcblxuICAgIGJ1ZmZlcjoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogMjAwXG4gICAgfSxcblxuICAgIHBhZ2VNb2RlOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9LFxuXG4gICAgcHJlcmVuZGVyOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBkZWZhdWx0OiAwXG4gICAgfSxcblxuICAgIGVtaXRVcGRhdGU6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH1cbiAgfSksXG5cbiAgZGF0YTogZnVuY3Rpb24gZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcG9vbDogW10sXG4gICAgICB0b3RhbFNpemU6IDAsXG4gICAgICByZWFkeTogZmFsc2UsXG4gICAgICBob3ZlcktleTogbnVsbFxuICAgIH07XG4gIH0sXG5cblxuICBjb21wdXRlZDoge1xuICAgIHNpemVzOiBmdW5jdGlvbiBzaXplcygpIHtcbiAgICAgIGlmICh0aGlzLml0ZW1TaXplID09PSBudWxsKSB7XG4gICAgICAgIHZhciBzaXplcyA9IHtcbiAgICAgICAgICAnLTEnOiB7IGFjY3VtdWxhdG9yOiAwIH1cbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGl0ZW1zID0gdGhpcy5pdGVtcztcbiAgICAgICAgdmFyIGZpZWxkID0gdGhpcy5zaXplRmllbGQ7XG4gICAgICAgIHZhciBtaW5JdGVtU2l6ZSA9IHRoaXMubWluSXRlbVNpemU7XG4gICAgICAgIHZhciBhY2N1bXVsYXRvciA9IDA7XG4gICAgICAgIHZhciBjdXJyZW50ID0gdm9pZCAwO1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGl0ZW1zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgIGN1cnJlbnQgPSBpdGVtc1tpXVtmaWVsZF0gfHwgbWluSXRlbVNpemU7XG4gICAgICAgICAgYWNjdW11bGF0b3IgKz0gY3VycmVudDtcbiAgICAgICAgICBzaXplc1tpXSA9IHsgYWNjdW11bGF0b3I6IGFjY3VtdWxhdG9yLCBzaXplOiBjdXJyZW50IH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNpemVzO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFtdO1xuICAgIH0sXG5cblxuICAgIHNpbXBsZUFycmF5OiBzaW1wbGVBcnJheVxuICB9LFxuXG4gIHdhdGNoOiB7XG4gICAgaXRlbXM6IGZ1bmN0aW9uIGl0ZW1zKCkge1xuICAgICAgdGhpcy51cGRhdGVWaXNpYmxlSXRlbXModHJ1ZSk7XG4gICAgfSxcbiAgICBwYWdlTW9kZTogZnVuY3Rpb24gcGFnZU1vZGUoKSB7XG4gICAgICB0aGlzLmFwcGx5UGFnZU1vZGUoKTtcbiAgICAgIHRoaXMudXBkYXRlVmlzaWJsZUl0ZW1zKGZhbHNlKTtcbiAgICB9LFxuXG5cbiAgICBzaXplczoge1xuICAgICAgaGFuZGxlcjogZnVuY3Rpb24gaGFuZGxlcigpIHtcbiAgICAgICAgdGhpcy51cGRhdGVWaXNpYmxlSXRlbXMoZmFsc2UpO1xuICAgICAgfSxcblxuICAgICAgZGVlcDogdHJ1ZVxuICAgIH1cbiAgfSxcblxuICBjcmVhdGVkOiBmdW5jdGlvbiBjcmVhdGVkKCkge1xuICAgIHRoaXMuJF9zdGFydEluZGV4ID0gMDtcbiAgICB0aGlzLiRfZW5kSW5kZXggPSAwO1xuICAgIHRoaXMuJF92aWV3cyA9IG5ldyBNYXAoKTtcbiAgICB0aGlzLiRfdW51c2VkVmlld3MgPSBuZXcgTWFwKCk7XG4gICAgdGhpcy4kX3Njcm9sbERpcnR5ID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy4kaXNTZXJ2ZXIpIHtcbiAgICAgIHRoaXMudXBkYXRlVmlzaWJsZUl0ZW1zKGZhbHNlKTtcbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQ6IGZ1bmN0aW9uIG1vdW50ZWQoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHRoaXMuYXBwbHlQYWdlTW9kZSgpO1xuICAgIHRoaXMuJG5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLnVwZGF0ZVZpc2libGVJdGVtcyh0cnVlKTtcbiAgICAgIF90aGlzLnJlYWR5ID0gdHJ1ZTtcbiAgICB9KTtcbiAgfSxcbiAgYmVmb3JlRGVzdHJveTogZnVuY3Rpb24gYmVmb3JlRGVzdHJveSgpIHtcbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVycygpO1xuICB9LFxuXG5cbiAgbWV0aG9kczoge1xuICAgIGFkZFZpZXc6IGZ1bmN0aW9uIGFkZFZpZXcocG9vbCwgaW5kZXgsIGl0ZW0sIGtleSwgdHlwZSkge1xuICAgICAgdmFyIHZpZXcgPSB7XG4gICAgICAgIGl0ZW06IGl0ZW0sXG4gICAgICAgIHBvc2l0aW9uOiAwXG4gICAgICB9O1xuICAgICAgdmFyIG5vblJlYWN0aXZlID0ge1xuICAgICAgICBpZDogdWlkKyssXG4gICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgdXNlZDogdHJ1ZSxcbiAgICAgICAga2V5OiBrZXksXG4gICAgICAgIHR5cGU6IHR5cGVcbiAgICAgIH07XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodmlldywgJ25yJywge1xuICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgICB2YWx1ZTogbm9uUmVhY3RpdmVcbiAgICAgIH0pO1xuICAgICAgcG9vbC5wdXNoKHZpZXcpO1xuICAgICAgcmV0dXJuIHZpZXc7XG4gICAgfSxcbiAgICB1bnVzZVZpZXc6IGZ1bmN0aW9uIHVudXNlVmlldyh2aWV3KSB7XG4gICAgICB2YXIgZmFrZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZmFsc2U7XG5cbiAgICAgIHZhciB1bnVzZWRWaWV3cyA9IHRoaXMuJF91bnVzZWRWaWV3cztcbiAgICAgIHZhciB0eXBlID0gdmlldy5uci50eXBlO1xuICAgICAgdmFyIHVudXNlZFBvb2wgPSB1bnVzZWRWaWV3cy5nZXQodHlwZSk7XG4gICAgICBpZiAoIXVudXNlZFBvb2wpIHtcbiAgICAgICAgdW51c2VkUG9vbCA9IFtdO1xuICAgICAgICB1bnVzZWRWaWV3cy5zZXQodHlwZSwgdW51c2VkUG9vbCk7XG4gICAgICB9XG4gICAgICB1bnVzZWRQb29sLnB1c2godmlldyk7XG4gICAgICBpZiAoIWZha2UpIHtcbiAgICAgICAgdmlldy5uci51c2VkID0gZmFsc2U7XG4gICAgICAgIHZpZXcucG9zaXRpb24gPSAtOTk5OTtcbiAgICAgICAgdGhpcy4kX3ZpZXdzLmRlbGV0ZSh2aWV3Lm5yLmtleSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBoYW5kbGVSZXNpemU6IGZ1bmN0aW9uIGhhbmRsZVJlc2l6ZSgpIHtcbiAgICAgIHRoaXMuJGVtaXQoJ3Jlc2l6ZScpO1xuICAgICAgaWYgKHRoaXMucmVhZHkpIHRoaXMudXBkYXRlVmlzaWJsZUl0ZW1zKGZhbHNlKTtcbiAgICB9LFxuICAgIGhhbmRsZVNjcm9sbDogZnVuY3Rpb24gaGFuZGxlU2Nyb2xsKGV2ZW50KSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgaWYgKCF0aGlzLiRfc2Nyb2xsRGlydHkpIHtcbiAgICAgICAgdGhpcy4kX3Njcm9sbERpcnR5ID0gdHJ1ZTtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpczIuJF9zY3JvbGxEaXJ0eSA9IGZhbHNlO1xuXG4gICAgICAgICAgdmFyIF91cGRhdGVWaXNpYmxlSXRlbXMgPSBfdGhpczIudXBkYXRlVmlzaWJsZUl0ZW1zKGZhbHNlKSxcbiAgICAgICAgICAgICAgY29udGludW91cyA9IF91cGRhdGVWaXNpYmxlSXRlbXMuY29udGludW91cztcblxuICAgICAgICAgIC8vIEl0IHNlZW1zIHNvbWV0aW1lcyBjaHJvbWUgZG9lc24ndCBmaXJlIHNjcm9sbCBldmVudCA6L1xuICAgICAgICAgIC8vIFdoZW4gbm9uIGNvbnRpbm91cyBzY3JvbGxpbmcgaXMgZW5kaW5nLCB3ZSBmb3JjZSBhIHJlZnJlc2hcblxuXG4gICAgICAgICAgaWYgKCFjb250aW51b3VzKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoX3RoaXMyLiRfcmVmcmVzaFRpbW91dCk7XG4gICAgICAgICAgICBfdGhpczIuJF9yZWZyZXNoVGltb3V0ID0gc2V0VGltZW91dChfdGhpczIuaGFuZGxlU2Nyb2xsLCAxMDApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBoYW5kbGVWaXNpYmlsaXR5Q2hhbmdlOiBmdW5jdGlvbiBoYW5kbGVWaXNpYmlsaXR5Q2hhbmdlKGlzVmlzaWJsZSwgZW50cnkpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICBpZiAodGhpcy5yZWFkeSkge1xuICAgICAgICBpZiAoaXNWaXNpYmxlIHx8IGVudHJ5LmJvdW5kaW5nQ2xpZW50UmVjdC53aWR0aCAhPT0gMCB8fCBlbnRyeS5ib3VuZGluZ0NsaWVudFJlY3QuaGVpZ2h0ICE9PSAwKSB7XG4gICAgICAgICAgdGhpcy4kZW1pdCgndmlzaWJsZScpO1xuICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpczMudXBkYXRlVmlzaWJsZUl0ZW1zKGZhbHNlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLiRlbWl0KCdoaWRkZW4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgdXBkYXRlVmlzaWJsZUl0ZW1zOiBmdW5jdGlvbiB1cGRhdGVWaXNpYmxlSXRlbXMoY2hlY2tJdGVtKSB7XG4gICAgICB2YXIgaXRlbVNpemUgPSB0aGlzLml0ZW1TaXplO1xuICAgICAgdmFyIHR5cGVGaWVsZCA9IHRoaXMudHlwZUZpZWxkO1xuICAgICAgdmFyIGtleUZpZWxkID0gdGhpcy5zaW1wbGVBcnJheSA/IG51bGwgOiB0aGlzLmtleUZpZWxkO1xuICAgICAgdmFyIGl0ZW1zID0gdGhpcy5pdGVtcztcbiAgICAgIHZhciBjb3VudCA9IGl0ZW1zLmxlbmd0aDtcbiAgICAgIHZhciBzaXplcyA9IHRoaXMuc2l6ZXM7XG4gICAgICB2YXIgdmlld3MgPSB0aGlzLiRfdmlld3M7XG4gICAgICB2YXIgdW51c2VkVmlld3MgPSB0aGlzLiRfdW51c2VkVmlld3M7XG4gICAgICB2YXIgcG9vbCA9IHRoaXMucG9vbDtcbiAgICAgIHZhciBzdGFydEluZGV4ID0gdm9pZCAwLFxuICAgICAgICAgIGVuZEluZGV4ID0gdm9pZCAwO1xuICAgICAgdmFyIHRvdGFsU2l6ZSA9IHZvaWQgMDtcblxuICAgICAgaWYgKCFjb3VudCkge1xuICAgICAgICBzdGFydEluZGV4ID0gZW5kSW5kZXggPSB0b3RhbFNpemUgPSAwO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLiRpc1NlcnZlcikge1xuICAgICAgICBzdGFydEluZGV4ID0gMDtcbiAgICAgICAgZW5kSW5kZXggPSB0aGlzLnByZXJlbmRlcjtcbiAgICAgICAgdG90YWxTaXplID0gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBzY3JvbGwgPSB0aGlzLmdldFNjcm9sbCgpO1xuICAgICAgICB2YXIgYnVmZmVyID0gdGhpcy5idWZmZXI7XG4gICAgICAgIHNjcm9sbC5zdGFydCAtPSBidWZmZXI7XG4gICAgICAgIHNjcm9sbC5lbmQgKz0gYnVmZmVyO1xuXG4gICAgICAgIC8vIFZhcmlhYmxlIHNpemUgbW9kZVxuICAgICAgICBpZiAoaXRlbVNpemUgPT09IG51bGwpIHtcbiAgICAgICAgICB2YXIgaCA9IHZvaWQgMDtcbiAgICAgICAgICB2YXIgYSA9IDA7XG4gICAgICAgICAgdmFyIGIgPSBjb3VudCAtIDE7XG4gICAgICAgICAgdmFyIGkgPSB+fihjb3VudCAvIDIpO1xuICAgICAgICAgIHZhciBvbGRJID0gdm9pZCAwO1xuXG4gICAgICAgICAgLy8gU2VhcmNoaW5nIGZvciBzdGFydEluZGV4XG4gICAgICAgICAgZG8ge1xuICAgICAgICAgICAgb2xkSSA9IGk7XG4gICAgICAgICAgICBoID0gc2l6ZXNbaV0uYWNjdW11bGF0b3I7XG4gICAgICAgICAgICBpZiAoaCA8IHNjcm9sbC5zdGFydCkge1xuICAgICAgICAgICAgICBhID0gaTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA8IGNvdW50IC0gMSAmJiBzaXplc1tpICsgMV0uYWNjdW11bGF0b3IgPiBzY3JvbGwuc3RhcnQpIHtcbiAgICAgICAgICAgICAgYiA9IGk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpID0gfn4oKGEgKyBiKSAvIDIpO1xuICAgICAgICAgIH0gd2hpbGUgKGkgIT09IG9sZEkpO1xuICAgICAgICAgIGkgPCAwICYmIChpID0gMCk7XG4gICAgICAgICAgc3RhcnRJbmRleCA9IGk7XG5cbiAgICAgICAgICAvLyBGb3IgY29udGFpbmVyIHN0eWxlXG4gICAgICAgICAgdG90YWxTaXplID0gc2l6ZXNbY291bnQgLSAxXS5hY2N1bXVsYXRvcjtcblxuICAgICAgICAgIC8vIFNlYXJjaGluZyBmb3IgZW5kSW5kZXhcbiAgICAgICAgICBmb3IgKGVuZEluZGV4ID0gaTsgZW5kSW5kZXggPCBjb3VudCAmJiBzaXplc1tlbmRJbmRleF0uYWNjdW11bGF0b3IgPCBzY3JvbGwuZW5kOyBlbmRJbmRleCsrKSB7fVxuICAgICAgICAgIGlmIChlbmRJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIGVuZEluZGV4ID0gaXRlbXMubGVuZ3RoIC0gMTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZW5kSW5kZXgrKztcbiAgICAgICAgICAgIC8vIEJvdW5kc1xuICAgICAgICAgICAgZW5kSW5kZXggPiBjb3VudCAmJiAoZW5kSW5kZXggPSBjb3VudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIEZpeGVkIHNpemUgbW9kZVxuICAgICAgICAgIHN0YXJ0SW5kZXggPSB+fihzY3JvbGwuc3RhcnQgLyBpdGVtU2l6ZSk7XG4gICAgICAgICAgZW5kSW5kZXggPSBNYXRoLmNlaWwoc2Nyb2xsLmVuZCAvIGl0ZW1TaXplKTtcblxuICAgICAgICAgIC8vIEJvdW5kc1xuICAgICAgICAgIHN0YXJ0SW5kZXggPCAwICYmIChzdGFydEluZGV4ID0gMCk7XG4gICAgICAgICAgZW5kSW5kZXggPiBjb3VudCAmJiAoZW5kSW5kZXggPSBjb3VudCk7XG5cbiAgICAgICAgICB0b3RhbFNpemUgPSBjb3VudCAqIGl0ZW1TaXplO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChlbmRJbmRleCAtIHN0YXJ0SW5kZXggPiBjb25maWcuaXRlbXNMaW1pdCkge1xuICAgICAgICB0aGlzLml0ZW1zTGltaXRFcnJvcigpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnRvdGFsU2l6ZSA9IHRvdGFsU2l6ZTtcblxuICAgICAgdmFyIHZpZXcgPSB2b2lkIDA7XG5cbiAgICAgIHZhciBjb250aW51b3VzID0gc3RhcnRJbmRleCA8PSB0aGlzLiRfZW5kSW5kZXggJiYgZW5kSW5kZXggPj0gdGhpcy4kX3N0YXJ0SW5kZXg7XG4gICAgICB2YXIgdW51c2VkSW5kZXggPSB2b2lkIDA7XG5cbiAgICAgIGlmICh0aGlzLiRfY29udGludW91cyAhPT0gY29udGludW91cykge1xuICAgICAgICBpZiAoY29udGludW91cykge1xuICAgICAgICAgIHZpZXdzLmNsZWFyKCk7XG4gICAgICAgICAgdW51c2VkVmlld3MuY2xlYXIoKTtcbiAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIGwgPSBwb29sLmxlbmd0aDsgX2kgPCBsOyBfaSsrKSB7XG4gICAgICAgICAgICB2aWV3ID0gcG9vbFtfaV07XG4gICAgICAgICAgICB0aGlzLnVudXNlVmlldyh2aWV3KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy4kX2NvbnRpbnVvdXMgPSBjb250aW51b3VzO1xuICAgICAgfSBlbHNlIGlmIChjb250aW51b3VzKSB7XG4gICAgICAgIGZvciAodmFyIF9pMiA9IDAsIF9sID0gcG9vbC5sZW5ndGg7IF9pMiA8IF9sOyBfaTIrKykge1xuICAgICAgICAgIHZpZXcgPSBwb29sW19pMl07XG4gICAgICAgICAgaWYgKHZpZXcubnIudXNlZCkge1xuICAgICAgICAgICAgLy8gVXBkYXRlIHZpZXcgaXRlbSBpbmRleFxuICAgICAgICAgICAgaWYgKGNoZWNrSXRlbSkge1xuICAgICAgICAgICAgICB2aWV3Lm5yLmluZGV4ID0gaXRlbXMuZmluZEluZGV4KGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGtleUZpZWxkID8gaXRlbVtrZXlGaWVsZF0gPT09IHZpZXcuaXRlbVtrZXlGaWVsZF0gOiBpdGVtID09PSB2aWV3Lml0ZW07XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDaGVjayBpZiBpbmRleCBpcyBzdGlsbCBpbiB2aXNpYmxlIHJhbmdlXG4gICAgICAgICAgICBpZiAodmlldy5uci5pbmRleCA9PT0gLTEgfHwgdmlldy5uci5pbmRleCA8IHN0YXJ0SW5kZXggfHwgdmlldy5uci5pbmRleCA+PSBlbmRJbmRleCkge1xuICAgICAgICAgICAgICB0aGlzLnVudXNlVmlldyh2aWV3KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFjb250aW51b3VzKSB7XG4gICAgICAgIHVudXNlZEluZGV4ID0gbmV3IE1hcCgpO1xuICAgICAgfVxuXG4gICAgICB2YXIgaXRlbSA9IHZvaWQgMCxcbiAgICAgICAgICB0eXBlID0gdm9pZCAwLFxuICAgICAgICAgIHVudXNlZFBvb2wgPSB2b2lkIDA7XG4gICAgICB2YXIgdiA9IHZvaWQgMDtcbiAgICAgIGZvciAodmFyIF9pMyA9IHN0YXJ0SW5kZXg7IF9pMyA8IGVuZEluZGV4OyBfaTMrKykge1xuICAgICAgICBpdGVtID0gaXRlbXNbX2kzXTtcbiAgICAgICAgdmFyIGtleSA9IGtleUZpZWxkID8gaXRlbVtrZXlGaWVsZF0gOiBpdGVtO1xuICAgICAgICB2aWV3ID0gdmlld3MuZ2V0KGtleSk7XG5cbiAgICAgICAgaWYgKCFpdGVtU2l6ZSAmJiAhc2l6ZXNbX2kzXS5zaXplKSB7XG4gICAgICAgICAgaWYgKHZpZXcpIHRoaXMudW51c2VWaWV3KHZpZXcpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTm8gdmlldyBhc3NpZ25lZCB0byBpdGVtXG4gICAgICAgIGlmICghdmlldykge1xuICAgICAgICAgIHR5cGUgPSBpdGVtW3R5cGVGaWVsZF07XG5cbiAgICAgICAgICBpZiAoY29udGludW91cykge1xuICAgICAgICAgICAgdW51c2VkUG9vbCA9IHVudXNlZFZpZXdzLmdldCh0eXBlKTtcbiAgICAgICAgICAgIC8vIFJldXNlIGV4aXN0aW5nIHZpZXdcbiAgICAgICAgICAgIGlmICh1bnVzZWRQb29sICYmIHVudXNlZFBvb2wubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIHZpZXcgPSB1bnVzZWRQb29sLnBvcCgpO1xuICAgICAgICAgICAgICB2aWV3Lml0ZW0gPSBpdGVtO1xuICAgICAgICAgICAgICB2aWV3Lm5yLnVzZWQgPSB0cnVlO1xuICAgICAgICAgICAgICB2aWV3Lm5yLmluZGV4ID0gX2kzO1xuICAgICAgICAgICAgICB2aWV3Lm5yLmtleSA9IGtleTtcbiAgICAgICAgICAgICAgdmlldy5uci50eXBlID0gdHlwZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHZpZXcgPSB0aGlzLmFkZFZpZXcocG9vbCwgX2kzLCBpdGVtLCBrZXksIHR5cGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB1bnVzZWRQb29sID0gdW51c2VkVmlld3MuZ2V0KHR5cGUpO1xuICAgICAgICAgICAgdiA9IHVudXNlZEluZGV4LmdldCh0eXBlKSB8fCAwO1xuICAgICAgICAgICAgLy8gVXNlIGV4aXN0aW5nIHZpZXdcbiAgICAgICAgICAgIC8vIFdlIGRvbid0IGNhcmUgaWYgdGhleSBhcmUgYWxyZWFkeSB1c2VkXG4gICAgICAgICAgICAvLyBiZWNhdXNlIHdlIGFyZSBub3QgaW4gY29udGlub3VzIHNjcm9sbGluZ1xuICAgICAgICAgICAgaWYgKHVudXNlZFBvb2wgJiYgdiA8IHVudXNlZFBvb2wubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIHZpZXcgPSB1bnVzZWRQb29sW3ZdO1xuICAgICAgICAgICAgICB2aWV3Lml0ZW0gPSBpdGVtO1xuICAgICAgICAgICAgICB2aWV3Lm5yLnVzZWQgPSB0cnVlO1xuICAgICAgICAgICAgICB2aWV3Lm5yLmluZGV4ID0gX2kzO1xuICAgICAgICAgICAgICB2aWV3Lm5yLmtleSA9IGtleTtcbiAgICAgICAgICAgICAgdmlldy5uci50eXBlID0gdHlwZTtcbiAgICAgICAgICAgICAgdW51c2VkSW5kZXguc2V0KHR5cGUsIHYgKyAxKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHZpZXcgPSB0aGlzLmFkZFZpZXcocG9vbCwgX2kzLCBpdGVtLCBrZXksIHR5cGUpO1xuICAgICAgICAgICAgICB0aGlzLnVudXNlVmlldyh2aWV3LCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHYrKztcbiAgICAgICAgICB9XG4gICAgICAgICAgdmlld3Muc2V0KGtleSwgdmlldyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmlldy5uci51c2VkID0gdHJ1ZTtcbiAgICAgICAgICB2aWV3Lml0ZW0gPSBpdGVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlIHBvc2l0aW9uXG4gICAgICAgIGlmIChpdGVtU2l6ZSA9PT0gbnVsbCkge1xuICAgICAgICAgIHZpZXcucG9zaXRpb24gPSBzaXplc1tfaTMgLSAxXS5hY2N1bXVsYXRvcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2aWV3LnBvc2l0aW9uID0gX2kzICogaXRlbVNpemU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy4kX3N0YXJ0SW5kZXggPSBzdGFydEluZGV4O1xuICAgICAgdGhpcy4kX2VuZEluZGV4ID0gZW5kSW5kZXg7XG5cbiAgICAgIGlmICh0aGlzLmVtaXRVcGRhdGUpIHRoaXMuJGVtaXQoJ3VwZGF0ZScsIHN0YXJ0SW5kZXgsIGVuZEluZGV4KTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY29udGludW91czogY29udGludW91c1xuICAgICAgfTtcbiAgICB9LFxuICAgIGdldExpc3RlbmVyVGFyZ2V0OiBmdW5jdGlvbiBnZXRMaXN0ZW5lclRhcmdldCgpIHtcbiAgICAgIHZhciB0YXJnZXQgPSBzY3JvbGxwYXJlbnQodGhpcy4kZWwpO1xuICAgICAgLy8gRml4IGdsb2JhbCBzY3JvbGwgdGFyZ2V0IGZvciBDaHJvbWUgYW5kIFNhZmFyaVxuICAgICAgaWYgKHdpbmRvdy5kb2N1bWVudCAmJiAodGFyZ2V0ID09PSB3aW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IHx8IHRhcmdldCA9PT0gd2luZG93LmRvY3VtZW50LmJvZHkpKSB7XG4gICAgICAgIHRhcmdldCA9IHdpbmRvdztcbiAgICAgIH1cbiAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfSxcbiAgICBnZXRTY3JvbGw6IGZ1bmN0aW9uIGdldFNjcm9sbCgpIHtcbiAgICAgIHZhciBlbCA9IHRoaXMuJGVsLFxuICAgICAgICAgIGRpcmVjdGlvbiA9IHRoaXMuZGlyZWN0aW9uO1xuXG4gICAgICB2YXIgaXNWZXJ0aWNhbCA9IGRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJztcbiAgICAgIHZhciBzY3JvbGxTdGF0ZSA9IHZvaWQgMDtcblxuICAgICAgaWYgKHRoaXMucGFnZU1vZGUpIHtcbiAgICAgICAgdmFyIGJvdW5kcyA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICB2YXIgYm91bmRzU2l6ZSA9IGlzVmVydGljYWwgPyBib3VuZHMuaGVpZ2h0IDogYm91bmRzLndpZHRoO1xuICAgICAgICB2YXIgc3RhcnQgPSAtKGlzVmVydGljYWwgPyBib3VuZHMudG9wIDogYm91bmRzLmxlZnQpO1xuICAgICAgICB2YXIgc2l6ZSA9IGlzVmVydGljYWwgPyB3aW5kb3cuaW5uZXJIZWlnaHQgOiB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgaWYgKHN0YXJ0IDwgMCkge1xuICAgICAgICAgIHNpemUgKz0gc3RhcnQ7XG4gICAgICAgICAgc3RhcnQgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGFydCArIHNpemUgPiBib3VuZHNTaXplKSB7XG4gICAgICAgICAgc2l6ZSA9IGJvdW5kc1NpemUgLSBzdGFydDtcbiAgICAgICAgfVxuICAgICAgICBzY3JvbGxTdGF0ZSA9IHtcbiAgICAgICAgICBzdGFydDogc3RhcnQsXG4gICAgICAgICAgZW5kOiBzdGFydCArIHNpemVcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSBpZiAoaXNWZXJ0aWNhbCkge1xuICAgICAgICBzY3JvbGxTdGF0ZSA9IHtcbiAgICAgICAgICBzdGFydDogZWwuc2Nyb2xsVG9wLFxuICAgICAgICAgIGVuZDogZWwuc2Nyb2xsVG9wICsgZWwuY2xpZW50SGVpZ2h0XG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzY3JvbGxTdGF0ZSA9IHtcbiAgICAgICAgICBzdGFydDogZWwuc2Nyb2xsTGVmdCxcbiAgICAgICAgICBlbmQ6IGVsLnNjcm9sbExlZnQgKyBlbC5jbGllbnRXaWR0aFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2Nyb2xsU3RhdGU7XG4gICAgfSxcbiAgICBhcHBseVBhZ2VNb2RlOiBmdW5jdGlvbiBhcHBseVBhZ2VNb2RlKCkge1xuICAgICAgaWYgKHRoaXMucGFnZU1vZGUpIHtcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXJzKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBhZGRMaXN0ZW5lcnM6IGZ1bmN0aW9uIGFkZExpc3RlbmVycygpIHtcbiAgICAgIHRoaXMubGlzdGVuZXJUYXJnZXQgPSB0aGlzLmdldExpc3RlbmVyVGFyZ2V0KCk7XG4gICAgICB0aGlzLmxpc3RlbmVyVGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuaGFuZGxlU2Nyb2xsLCBzdXBwb3J0c1Bhc3NpdmUgPyB7XG4gICAgICAgIHBhc3NpdmU6IHRydWVcbiAgICAgIH0gOiBmYWxzZSk7XG4gICAgICB0aGlzLmxpc3RlbmVyVGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuaGFuZGxlUmVzaXplKTtcbiAgICB9LFxuICAgIHJlbW92ZUxpc3RlbmVyczogZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXJzKCkge1xuICAgICAgaWYgKCF0aGlzLmxpc3RlbmVyVGFyZ2V0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5saXN0ZW5lclRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmhhbmRsZVNjcm9sbCk7XG4gICAgICB0aGlzLmxpc3RlbmVyVGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuaGFuZGxlUmVzaXplKTtcblxuICAgICAgdGhpcy5saXN0ZW5lclRhcmdldCA9IG51bGw7XG4gICAgfSxcbiAgICBzY3JvbGxUb0l0ZW06IGZ1bmN0aW9uIHNjcm9sbFRvSXRlbShpbmRleCkge1xuICAgICAgdmFyIHNjcm9sbCA9IHZvaWQgMDtcbiAgICAgIGlmICh0aGlzLml0ZW1TaXplID09PSBudWxsKSB7XG4gICAgICAgIHNjcm9sbCA9IGluZGV4ID4gMCA/IHRoaXMuc2l6ZXNbaW5kZXggLSAxXS5hY2N1bXVsYXRvciA6IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzY3JvbGwgPSBpbmRleCAqIHRoaXMuaXRlbVNpemU7XG4gICAgICB9XG4gICAgICB0aGlzLnNjcm9sbFRvUG9zaXRpb24oc2Nyb2xsKTtcbiAgICB9LFxuICAgIHNjcm9sbFRvUG9zaXRpb246IGZ1bmN0aW9uIHNjcm9sbFRvUG9zaXRpb24ocG9zaXRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICB0aGlzLiRlbC5zY3JvbGxUb3AgPSBwb3NpdGlvbjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuJGVsLnNjcm9sbExlZnQgPSBwb3NpdGlvbjtcbiAgICAgIH1cbiAgICB9LFxuICAgIGl0ZW1zTGltaXRFcnJvcjogZnVuY3Rpb24gaXRlbXNMaW1pdEVycm9yKCkge1xuICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnSXQgc2VlbXMgdGhlIHNjcm9sbGVyIGVsZW1lbnQgaXNuXFwndCBzY3JvbGxpbmcsIHNvIGl0IHRyaWVzIHRvIHJlbmRlciBhbGwgdGhlIGl0ZW1zIGF0IG9uY2UuJywgJ1Njcm9sbGVyOicsIF90aGlzNC4kZWwpO1xuICAgICAgICBjb25zb2xlLmxvZygnTWFrZSBzdXJlIHRoZSBzY3JvbGxlciBoYXMgYSBmaXhlZCBoZWlnaHQgKG9yIHdpZHRoKSBhbmQgXFwnb3ZlcmZsb3cteVxcJyAob3IgXFwnb3ZlcmZsb3cteFxcJykgc2V0IHRvIFxcJ2F1dG9cXCcgc28gaXQgY2FuIHNjcm9sbCBjb3JyZWN0bHkgYW5kIG9ubHkgcmVuZGVyIHRoZSBpdGVtcyB2aXNpYmxlIGluIHRoZSBzY3JvbGwgdmlld3BvcnQuJyk7XG4gICAgICB9KTtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUmVuZGVyZWQgaXRlbXMgbGltaXQgcmVhY2hlZCcpO1xuICAgIH1cbiAgfVxufTtcblxudmFyIER5bmFtaWNTY3JvbGxlciA9IHsgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF92bSA9IHRoaXM7dmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaDtyZXR1cm4gX2MoJ1JlY3ljbGVTY3JvbGxlcicsIF92bS5fZyhfdm0uX2IoeyByZWY6IFwic2Nyb2xsZXJcIiwgYXR0cnM6IHsgXCJpdGVtc1wiOiBfdm0uaXRlbXNXaXRoU2l6ZSwgXCJtaW4taXRlbS1zaXplXCI6IF92bS5taW5JdGVtU2l6ZSwgXCJkaXJlY3Rpb25cIjogX3ZtLmRpcmVjdGlvbiwgXCJrZXktZmllbGRcIjogXCJpZFwiIH0sIG9uOiB7IFwicmVzaXplXCI6IF92bS5vblNjcm9sbGVyUmVzaXplLCBcInZpc2libGVcIjogX3ZtLm9uU2Nyb2xsZXJWaXNpYmxlIH0sIHNjb3BlZFNsb3RzOiBfdm0uX3UoW3sga2V5OiBcImRlZmF1bHRcIiwgZm46IGZ1bmN0aW9uIGZuKF9yZWYpIHtcbiAgICAgICAgICB2YXIgaXRlbVdpdGhTaXplID0gX3JlZi5pdGVtLFxuICAgICAgICAgICAgICBpbmRleCA9IF9yZWYuaW5kZXgsXG4gICAgICAgICAgICAgIGFjdGl2ZSA9IF9yZWYuYWN0aXZlO1xuICAgICAgICAgIHJldHVybiBbX3ZtLl90KFwiZGVmYXVsdFwiLCBudWxsLCBudWxsLCB7XG4gICAgICAgICAgICBpdGVtOiBpdGVtV2l0aFNpemUuaXRlbSxcbiAgICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICAgIGFjdGl2ZTogYWN0aXZlLFxuICAgICAgICAgICAgaXRlbVdpdGhTaXplOiBpdGVtV2l0aFNpemVcbiAgICAgICAgICB9KV07XG4gICAgICAgIH0gfV0pIH0sICdSZWN5Y2xlU2Nyb2xsZXInLCBfdm0uJGF0dHJzLCBmYWxzZSksIF92bS5saXN0ZW5lcnMpLCBbX2MoJ3RlbXBsYXRlJywgeyBzbG90OiBcImJlZm9yZVwiIH0sIFtfdm0uX3QoXCJiZWZvcmVcIildLCAyKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RlbXBsYXRlJywgeyBzbG90OiBcImFmdGVyXCIgfSwgW192bS5fdChcImFmdGVyXCIpXSwgMildLCAyKTtcbiAgfSwgc3RhdGljUmVuZGVyRm5zOiBbXSxcbiAgbmFtZTogJ0R5bmFtaWNTY3JvbGxlcicsXG5cbiAgY29tcG9uZW50czoge1xuICAgIFJlY3ljbGVTY3JvbGxlcjogUmVjeWNsZVNjcm9sbGVyXG4gIH0sXG5cbiAgaW5oZXJpdEF0dHJzOiBmYWxzZSxcblxuICBwcm92aWRlOiBmdW5jdGlvbiBwcm92aWRlKCkge1xuICAgIHJldHVybiB7XG4gICAgICB2c2Nyb2xsRGF0YTogdGhpcy52c2Nyb2xsRGF0YSxcbiAgICAgIHZzY3JvbGxQYXJlbnQ6IHRoaXNcbiAgICB9O1xuICB9LFxuXG5cbiAgcHJvcHM6IF9leHRlbmRzKHt9LCBwcm9wcywge1xuXG4gICAgbWluSXRlbVNpemU6IHtcbiAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH1cbiAgfSksXG5cbiAgZGF0YTogZnVuY3Rpb24gZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdnNjcm9sbERhdGE6IHtcbiAgICAgICAgYWN0aXZlOiB0cnVlLFxuICAgICAgICBzaXplczoge30sXG4gICAgICAgIHZhbGlkU2l6ZXM6IHt9LFxuICAgICAgICBrZXlGaWVsZDogdGhpcy5rZXlGaWVsZCxcbiAgICAgICAgc2ltcGxlQXJyYXk6IGZhbHNlXG4gICAgICB9XG4gICAgfTtcbiAgfSxcblxuXG4gIGNvbXB1dGVkOiB7XG4gICAgc2ltcGxlQXJyYXk6IHNpbXBsZUFycmF5LFxuXG4gICAgaXRlbXNXaXRoU2l6ZTogZnVuY3Rpb24gaXRlbXNXaXRoU2l6ZSgpIHtcbiAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgIHZhciBpdGVtcyA9IHRoaXMuaXRlbXMsXG4gICAgICAgICAga2V5RmllbGQgPSB0aGlzLmtleUZpZWxkLFxuICAgICAgICAgIHNpbXBsZUFycmF5JCQxID0gdGhpcy5zaW1wbGVBcnJheTtcblxuICAgICAgdmFyIHNpemVzID0gdGhpcy52c2Nyb2xsRGF0YS5zaXplcztcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGl0ZW0gPSBpdGVtc1tpXTtcbiAgICAgICAgdmFyIGlkID0gc2ltcGxlQXJyYXkkJDEgPyBpIDogaXRlbVtrZXlGaWVsZF07XG4gICAgICAgIHZhciBzaXplID0gc2l6ZXNbaWRdO1xuICAgICAgICBpZiAodHlwZW9mIHNpemUgPT09ICd1bmRlZmluZWQnICYmICF0aGlzLiRfdW5kZWZpbmVkTWFwW2lkXSkge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB2dWUvbm8tc2lkZS1lZmZlY3RzLWluLWNvbXB1dGVkLXByb3BlcnRpZXNcbiAgICAgICAgICB0aGlzLiRfdW5kZWZpbmVkU2l6ZXMrKztcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdnVlL25vLXNpZGUtZWZmZWN0cy1pbi1jb21wdXRlZC1wcm9wZXJ0aWVzXG4gICAgICAgICAgdGhpcy4kX3VuZGVmaW5lZE1hcFtpZF0gPSB0cnVlO1xuICAgICAgICAgIHNpemUgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICBpdGVtOiBpdGVtLFxuICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICBzaXplOiBzaXplXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LFxuICAgIGxpc3RlbmVyczogZnVuY3Rpb24gbGlzdGVuZXJzKCkge1xuICAgICAgdmFyIGxpc3RlbmVycyA9IHt9O1xuICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMuJGxpc3RlbmVycykge1xuICAgICAgICBpZiAoa2V5ICE9PSAncmVzaXplJyAmJiBrZXkgIT09ICd2aXNpYmxlJykge1xuICAgICAgICAgIGxpc3RlbmVyc1trZXldID0gdGhpcy4kbGlzdGVuZXJzW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBsaXN0ZW5lcnM7XG4gICAgfVxuICB9LFxuXG4gIHdhdGNoOiB7XG4gICAgaXRlbXM6IGZ1bmN0aW9uIGl0ZW1zKCkge1xuICAgICAgdGhpcy5mb3JjZVVwZGF0ZShmYWxzZSk7XG4gICAgfSxcblxuXG4gICAgc2ltcGxlQXJyYXk6IHtcbiAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uIGhhbmRsZXIodmFsdWUpIHtcbiAgICAgICAgdGhpcy52c2Nyb2xsRGF0YS5zaW1wbGVBcnJheSA9IHZhbHVlO1xuICAgICAgfSxcblxuICAgICAgaW1tZWRpYXRlOiB0cnVlXG4gICAgfSxcblxuICAgIGRpcmVjdGlvbjogZnVuY3Rpb24gZGlyZWN0aW9uKHZhbHVlKSB7XG4gICAgICB0aGlzLmZvcmNlVXBkYXRlKHRydWUpO1xuICAgIH1cbiAgfSxcblxuICBjcmVhdGVkOiBmdW5jdGlvbiBjcmVhdGVkKCkge1xuICAgIHRoaXMuJF91cGRhdGVzID0gW107XG4gICAgdGhpcy4kX3VuZGVmaW5lZFNpemVzID0gMDtcbiAgICB0aGlzLiRfdW5kZWZpbmVkTWFwID0ge307XG4gIH0sXG4gIGFjdGl2YXRlZDogZnVuY3Rpb24gYWN0aXZhdGVkKCkge1xuICAgIHRoaXMudnNjcm9sbERhdGEuYWN0aXZlID0gdHJ1ZTtcbiAgfSxcbiAgZGVhY3RpdmF0ZWQ6IGZ1bmN0aW9uIGRlYWN0aXZhdGVkKCkge1xuICAgIHRoaXMudnNjcm9sbERhdGEuYWN0aXZlID0gZmFsc2U7XG4gIH0sXG5cblxuICBtZXRob2RzOiB7XG4gICAgb25TY3JvbGxlclJlc2l6ZTogZnVuY3Rpb24gb25TY3JvbGxlclJlc2l6ZSgpIHtcbiAgICAgIHZhciBzY3JvbGxlciA9IHRoaXMuJHJlZnMuc2Nyb2xsZXI7XG4gICAgICBpZiAoc2Nyb2xsZXIpIHtcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICAgICAgfVxuICAgICAgdGhpcy4kZW1pdCgncmVzaXplJyk7XG4gICAgfSxcbiAgICBvblNjcm9sbGVyVmlzaWJsZTogZnVuY3Rpb24gb25TY3JvbGxlclZpc2libGUoKSB7XG4gICAgICB0aGlzLiRlbWl0KCd2c2Nyb2xsOnVwZGF0ZScsIHsgZm9yY2U6IGZhbHNlIH0pO1xuICAgICAgdGhpcy4kZW1pdCgndmlzaWJsZScpO1xuICAgIH0sXG4gICAgZm9yY2VVcGRhdGU6IGZ1bmN0aW9uIGZvcmNlVXBkYXRlKCkge1xuICAgICAgdmFyIGNsZWFyID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB0cnVlO1xuXG4gICAgICBpZiAoY2xlYXIgfHwgdGhpcy5zaW1wbGVBcnJheSkge1xuICAgICAgICB0aGlzLnZzY3JvbGxEYXRhLnZhbGlkU2l6ZXMgPSB7fTtcbiAgICAgIH1cbiAgICAgIHRoaXMuJGVtaXQoJ3ZzY3JvbGw6dXBkYXRlJywgeyBmb3JjZTogdHJ1ZSB9KTtcbiAgICB9LFxuICAgIHNjcm9sbFRvSXRlbTogZnVuY3Rpb24gc2Nyb2xsVG9JdGVtKGluZGV4KSB7XG4gICAgICB2YXIgc2Nyb2xsZXIgPSB0aGlzLiRyZWZzLnNjcm9sbGVyO1xuICAgICAgaWYgKHNjcm9sbGVyKSBzY3JvbGxlci5zY3JvbGxUb0l0ZW0oaW5kZXgpO1xuICAgIH0sXG4gICAgZ2V0SXRlbVNpemU6IGZ1bmN0aW9uIGdldEl0ZW1TaXplKGl0ZW0pIHtcbiAgICAgIHZhciBpbmRleCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkO1xuXG4gICAgICB2YXIgaWQgPSB0aGlzLnNpbXBsZUFycmF5ID8gaW5kZXggIT0gbnVsbCA/IGluZGV4IDogdGhpcy5pdGVtcy5pbmRleE9mKGl0ZW0pIDogaXRlbVt0aGlzLmtleUZpZWxkXTtcbiAgICAgIHJldHVybiB0aGlzLnZzY3JvbGxEYXRhLnNpemVzW2lkXSB8fCAwO1xuICAgIH0sXG4gICAgc2Nyb2xsVG9Cb3R0b206IGZ1bmN0aW9uIHNjcm9sbFRvQm90dG9tKCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgaWYgKHRoaXMuJF9zY3JvbGxpbmdUb0JvdHRvbSkgcmV0dXJuO1xuICAgICAgdGhpcy4kX3Njcm9sbGluZ1RvQm90dG9tID0gdHJ1ZTtcbiAgICAgIHZhciBlbCA9IHRoaXMuJGVsO1xuICAgICAgLy8gSXRlbSBpcyBpbnNlcnRlZCB0byB0aGUgRE9NXG4gICAgICB0aGlzLiRuZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIEl0ZW0gc2l6ZXMgYXJlIGNvbXB1dGVkXG4gICAgICAgIHZhciBjYiA9IGZ1bmN0aW9uIGNiKCkge1xuICAgICAgICAgIGVsLnNjcm9sbFRvcCA9IGVsLnNjcm9sbEhlaWdodDtcbiAgICAgICAgICBpZiAoX3RoaXMuJF91bmRlZmluZWRTaXplcyA9PT0gMCkge1xuICAgICAgICAgICAgX3RoaXMuJF9zY3JvbGxpbmdUb0JvdHRvbSA9IGZhbHNlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2IpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNiKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufTtcblxudmFyIER5bmFtaWNTY3JvbGxlckl0ZW0gPSB7XG4gIG5hbWU6ICdEeW5hbWljU2Nyb2xsZXJJdGVtJyxcblxuICBpbmplY3Q6IFsndnNjcm9sbERhdGEnLCAndnNjcm9sbFBhcmVudCddLFxuXG4gIHByb3BzOiB7XG4gICAgaXRlbToge1xuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuXG4gICAgd2F0Y2hEYXRhOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9LFxuXG4gICAgYWN0aXZlOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuXG4gICAgaW5kZXg6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZFxuICAgIH0sXG5cbiAgICBzaXplRGVwZW5kZW5jaWVzOiB7XG4gICAgICB0eXBlOiBbQXJyYXksIE9iamVjdF0sXG4gICAgICBkZWZhdWx0OiBudWxsXG4gICAgfSxcblxuICAgIGVtaXRSZXNpemU6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH0sXG5cbiAgICB0YWc6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdkaXYnXG4gICAgfVxuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgaWQ6IGZ1bmN0aW9uIGlkKCkge1xuICAgICAgcmV0dXJuIHRoaXMudnNjcm9sbERhdGEuc2ltcGxlQXJyYXkgPyB0aGlzLmluZGV4IDogdGhpcy5pdGVtW3RoaXMudnNjcm9sbERhdGEua2V5RmllbGRdO1xuICAgIH0sXG4gICAgc2l6ZTogZnVuY3Rpb24gc2l6ZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLnZzY3JvbGxEYXRhLnZhbGlkU2l6ZXNbdGhpcy5pZF0gJiYgdGhpcy52c2Nyb2xsRGF0YS5zaXplc1t0aGlzLmlkXSB8fCAwO1xuICAgIH1cbiAgfSxcblxuICB3YXRjaDoge1xuICAgIHdhdGNoRGF0YTogJ3VwZGF0ZVdhdGNoRGF0YScsXG5cbiAgICBpZDogZnVuY3Rpb24gaWQoKSB7XG4gICAgICBpZiAoIXRoaXMuc2l6ZSkge1xuICAgICAgICB0aGlzLm9uRGF0YVVwZGF0ZSgpO1xuICAgICAgfVxuICAgIH0sXG4gICAgYWN0aXZlOiBmdW5jdGlvbiBhY3RpdmUodmFsdWUpIHtcbiAgICAgIGlmICh2YWx1ZSAmJiB0aGlzLiRfcGVuZGluZ1ZTY3JvbGxVcGRhdGUgPT09IHRoaXMuaWQpIHtcbiAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIGNyZWF0ZWQ6IGZ1bmN0aW9uIGNyZWF0ZWQoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIGlmICh0aGlzLiRpc1NlcnZlcikgcmV0dXJuO1xuXG4gICAgdGhpcy4kX2ZvcmNlTmV4dFZTY3JvbGxVcGRhdGUgPSBudWxsO1xuICAgIHRoaXMudXBkYXRlV2F0Y2hEYXRhKCk7XG5cbiAgICB2YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcChrKSB7XG4gICAgICBfdGhpcy4kd2F0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMuc2l6ZURlcGVuZGVuY2llc1trXTtcbiAgICAgIH0sIF90aGlzLm9uRGF0YVVwZGF0ZSk7XG4gICAgfTtcblxuICAgIGZvciAodmFyIGsgaW4gdGhpcy5zaXplRGVwZW5kZW5jaWVzKSB7XG4gICAgICBfbG9vcChrKTtcbiAgICB9XG5cbiAgICB0aGlzLnZzY3JvbGxQYXJlbnQuJG9uKCd2c2Nyb2xsOnVwZGF0ZScsIHRoaXMub25Wc2Nyb2xsVXBkYXRlKTtcbiAgICB0aGlzLnZzY3JvbGxQYXJlbnQuJG9uKCd2c2Nyb2xsOnVwZGF0ZS1zaXplJywgdGhpcy5vblZzY3JvbGxVcGRhdGVTaXplKTtcbiAgfSxcbiAgbW91bnRlZDogZnVuY3Rpb24gbW91bnRlZCgpIHtcbiAgICBpZiAodGhpcy52c2Nyb2xsRGF0YS5hY3RpdmUpIHtcbiAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xuICAgIH1cbiAgfSxcbiAgYmVmb3JlRGVzdHJveTogZnVuY3Rpb24gYmVmb3JlRGVzdHJveSgpIHtcbiAgICB0aGlzLnZzY3JvbGxQYXJlbnQuJG9mZigndnNjcm9sbDp1cGRhdGUnLCB0aGlzLm9uVnNjcm9sbFVwZGF0ZSk7XG4gICAgdGhpcy52c2Nyb2xsUGFyZW50LiRvZmYoJ3ZzY3JvbGw6dXBkYXRlLXNpemUnLCB0aGlzLm9uVnNjcm9sbFVwZGF0ZVNpemUpO1xuICB9LFxuXG5cbiAgbWV0aG9kczoge1xuICAgIHVwZGF0ZVNpemU6IGZ1bmN0aW9uIHVwZGF0ZVNpemUoKSB7XG4gICAgICBpZiAodGhpcy5hY3RpdmUgJiYgdGhpcy52c2Nyb2xsRGF0YS5hY3RpdmUpIHtcbiAgICAgICAgaWYgKHRoaXMuJF9wZW5kaW5nU2l6ZVVwZGF0ZSAhPT0gdGhpcy5pZCkge1xuICAgICAgICAgIHRoaXMuJF9wZW5kaW5nU2l6ZVVwZGF0ZSA9IHRoaXMuaWQ7XG4gICAgICAgICAgdGhpcy4kX2ZvcmNlTmV4dFZTY3JvbGxVcGRhdGUgPSBudWxsO1xuICAgICAgICAgIHRoaXMuJF9wZW5kaW5nVlNjcm9sbFVwZGF0ZSA9IG51bGw7XG4gICAgICAgICAgaWYgKHRoaXMuYWN0aXZlICYmIHRoaXMudnNjcm9sbERhdGEuYWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXB1dGVTaXplKHRoaXMuaWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy4kX2ZvcmNlTmV4dFZTY3JvbGxVcGRhdGUgPSB0aGlzLmlkO1xuICAgICAgfVxuICAgIH0sXG4gICAgZ2V0Qm91bmRzOiBmdW5jdGlvbiBnZXRCb3VuZHMoKSB7XG4gICAgICByZXR1cm4gdGhpcy4kZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgfSxcbiAgICB1cGRhdGVXYXRjaERhdGE6IGZ1bmN0aW9uIHVwZGF0ZVdhdGNoRGF0YSgpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICBpZiAodGhpcy53YXRjaERhdGEpIHtcbiAgICAgICAgdGhpcy4kX3dhdGNoRGF0YSA9IHRoaXMuJHdhdGNoKCdkYXRhJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzMi5vbkRhdGFVcGRhdGUoKTtcbiAgICAgICAgfSwge1xuICAgICAgICAgIGRlZXA6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuJF93YXRjaERhdGEpIHtcbiAgICAgICAgdGhpcy4kX3dhdGNoRGF0YSgpO1xuICAgICAgICB0aGlzLiRfd2F0Y2hEYXRhID0gbnVsbDtcbiAgICAgIH1cbiAgICB9LFxuICAgIG9uVnNjcm9sbFVwZGF0ZTogZnVuY3Rpb24gb25Wc2Nyb2xsVXBkYXRlKF9yZWYpIHtcbiAgICAgIHZhciBmb3JjZSA9IF9yZWYuZm9yY2U7XG5cbiAgICAgIGlmICghdGhpcy5hY3RpdmUgJiYgZm9yY2UpIHtcbiAgICAgICAgdGhpcy4kX3BlbmRpbmdWU2Nyb2xsVXBkYXRlID0gdGhpcy5pZDtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLiRfZm9yY2VOZXh0VlNjcm9sbFVwZGF0ZSA9PT0gdGhpcy5pZCB8fCBmb3JjZSB8fCAhdGhpcy5zaXplKSB7XG4gICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xuICAgICAgfVxuICAgIH0sXG4gICAgb25EYXRhVXBkYXRlOiBmdW5jdGlvbiBvbkRhdGFVcGRhdGUoKSB7XG4gICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcbiAgICB9LFxuICAgIGNvbXB1dGVTaXplOiBmdW5jdGlvbiBjb21wdXRlU2l6ZShpZCkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIHRoaXMuJG5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKF90aGlzMy5pZCA9PT0gaWQpIHtcbiAgICAgICAgICB2YXIgYm91bmRzID0gX3RoaXMzLmdldEJvdW5kcygpO1xuICAgICAgICAgIHZhciBzaXplID0gTWF0aC5yb3VuZChfdGhpczMudnNjcm9sbFBhcmVudC5kaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcgPyBib3VuZHMuaGVpZ2h0IDogYm91bmRzLndpZHRoKTtcbiAgICAgICAgICBpZiAoc2l6ZSAmJiBfdGhpczMuc2l6ZSAhPT0gc2l6ZSkge1xuICAgICAgICAgICAgaWYgKF90aGlzMy52c2Nyb2xsUGFyZW50LiRfdW5kZWZpbmVkTWFwW2lkXSkge1xuICAgICAgICAgICAgICBfdGhpczMudnNjcm9sbFBhcmVudC4kX3VuZGVmaW5lZFNpemVzLS07XG4gICAgICAgICAgICAgIF90aGlzMy52c2Nyb2xsUGFyZW50LiRfdW5kZWZpbmVkTWFwW2lkXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF90aGlzMy4kc2V0KF90aGlzMy52c2Nyb2xsRGF0YS5zaXplcywgX3RoaXMzLmlkLCBzaXplKTtcbiAgICAgICAgICAgIF90aGlzMy4kc2V0KF90aGlzMy52c2Nyb2xsRGF0YS52YWxpZFNpemVzLCBfdGhpczMuaWQsIHRydWUpO1xuICAgICAgICAgICAgaWYgKF90aGlzMy5lbWl0UmVzaXplKSBfdGhpczMuJGVtaXQoJ3Jlc2l6ZScsIF90aGlzMy5pZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIF90aGlzMy4kX3BlbmRpbmdTaXplVXBkYXRlID0gbnVsbDtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcihoKSB7XG4gICAgcmV0dXJuIGgodGhpcy50YWcsIHRoaXMuJHNsb3RzLmRlZmF1bHQpO1xuICB9XG59O1xuXG52YXIgSWRTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF9yZWYgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9LFxuICAgICAgX3JlZiRpZFByb3AgPSBfcmVmLmlkUHJvcCxcbiAgICAgIGlkUHJvcCA9IF9yZWYkaWRQcm9wID09PSB1bmRlZmluZWQgPyBmdW5jdGlvbiAodm0pIHtcbiAgICByZXR1cm4gdm0uaXRlbS5pZDtcbiAgfSA6IF9yZWYkaWRQcm9wO1xuXG4gIHZhciBzdG9yZSA9IHt9O1xuICB2YXIgdm0gPSBuZXcgVnVlKHtcbiAgICBkYXRhOiBmdW5jdGlvbiBkYXRhKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3RvcmU6IHN0b3JlXG4gICAgICB9O1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gQHZ1ZS9jb21wb25lbnRcbiAgcmV0dXJuIHtcbiAgICBkYXRhOiBmdW5jdGlvbiBkYXRhKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaWRTdGF0ZTogbnVsbFxuICAgICAgfTtcbiAgICB9LFxuICAgIGNyZWF0ZWQ6IGZ1bmN0aW9uIGNyZWF0ZWQoKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB0aGlzLiRfaWQgPSBudWxsO1xuICAgICAgaWYgKHR5cGVvZiBpZFByb3AgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhpcy4kX2dldElkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBpZFByb3AuY2FsbChfdGhpcywgX3RoaXMpO1xuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy4kX2dldElkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBfdGhpc1tpZFByb3BdO1xuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgdGhpcy4kd2F0Y2godGhpcy4kX2dldElkLCB7XG4gICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uIGhhbmRsZXIodmFsdWUpIHtcbiAgICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAgIHRoaXMuJG5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzMi4kX2lkID0gdmFsdWU7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaW1tZWRpYXRlOiB0cnVlXG4gICAgICB9KTtcbiAgICAgIHRoaXMuJF91cGRhdGVJZFN0YXRlKCk7XG4gICAgfSxcbiAgICBiZWZvcmVVcGRhdGU6IGZ1bmN0aW9uIGJlZm9yZVVwZGF0ZSgpIHtcbiAgICAgIHRoaXMuJF91cGRhdGVJZFN0YXRlKCk7XG4gICAgfSxcblxuXG4gICAgbWV0aG9kczoge1xuICAgICAgLyoqXG4gICAgICAgKiBJbml0aWFsaXplIGFuIGlkU3RhdGVcbiAgICAgICAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ30gaWQgVW5pcXVlIGlkIGZvciB0aGUgZGF0YVxuICAgICAgICovXG4gICAgICAkX2lkU3RhdGVJbml0OiBmdW5jdGlvbiAkX2lkU3RhdGVJbml0KGlkKSB7XG4gICAgICAgIHZhciBmYWN0b3J5ID0gdGhpcy4kb3B0aW9ucy5pZFN0YXRlO1xuICAgICAgICBpZiAodHlwZW9mIGZhY3RvcnkgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB2YXIgZGF0YSA9IGZhY3RvcnkuY2FsbCh0aGlzLCB0aGlzKTtcbiAgICAgICAgICB2bS4kc2V0KHN0b3JlLCBpZCwgZGF0YSk7XG4gICAgICAgICAgdGhpcy4kX2lkID0gaWQ7XG4gICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbbWl4aW4gSWRTdGF0ZV0gTWlzc2luZyBgaWRTdGF0ZWAgZnVuY3Rpb24gb24gY29tcG9uZW50IGRlZmluaXRpb24uJyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG5cblxuICAgICAgLyoqXG4gICAgICAgKiBFbnN1cmUgaWRTdGF0ZSBpcyBjcmVhdGVkIGFuZCB1cC10by1kYXRlXG4gICAgICAgKi9cbiAgICAgICRfdXBkYXRlSWRTdGF0ZTogZnVuY3Rpb24gJF91cGRhdGVJZFN0YXRlKCkge1xuICAgICAgICB2YXIgaWQgPSB0aGlzLiRfZ2V0SWQoKTtcbiAgICAgICAgaWYgKGlkID09IG51bGwpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ05vIGlkIGZvdW5kIGZvciBJZFN0YXRlIHdpdGggaWRQcm9wOiBcXCcnICsgaWRQcm9wICsgJ1xcJy4nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaWQgIT09IHRoaXMuJF9pZCkge1xuICAgICAgICAgIGlmICghc3RvcmVbaWRdKSB7XG4gICAgICAgICAgICB0aGlzLiRfaWRTdGF0ZUluaXQoaWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmlkU3RhdGUgPSBzdG9yZVtpZF07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG59O1xuXG5mdW5jdGlvbiByZWdpc3RlckNvbXBvbmVudHMoVnVlJCQxLCBwcmVmaXgpIHtcbiAgVnVlJCQxLmNvbXBvbmVudChwcmVmaXggKyAncmVjeWNsZS1zY3JvbGxlcicsIFJlY3ljbGVTY3JvbGxlcik7XG4gIFZ1ZSQkMS5jb21wb25lbnQocHJlZml4ICsgJ1JlY3ljbGVTY3JvbGxlcicsIFJlY3ljbGVTY3JvbGxlcik7XG4gIFZ1ZSQkMS5jb21wb25lbnQocHJlZml4ICsgJ2R5bmFtaWMtc2Nyb2xsZXInLCBEeW5hbWljU2Nyb2xsZXIpO1xuICBWdWUkJDEuY29tcG9uZW50KHByZWZpeCArICdEeW5hbWljU2Nyb2xsZXInLCBEeW5hbWljU2Nyb2xsZXIpO1xuICBWdWUkJDEuY29tcG9uZW50KHByZWZpeCArICdkeW5hbWljLXNjcm9sbGVyLWl0ZW0nLCBEeW5hbWljU2Nyb2xsZXJJdGVtKTtcbiAgVnVlJCQxLmNvbXBvbmVudChwcmVmaXggKyAnRHluYW1pY1Njcm9sbGVySXRlbScsIER5bmFtaWNTY3JvbGxlckl0ZW0pO1xufVxuXG52YXIgcGx1Z2luID0ge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmVyc2lvbjogXCIxLjAuMC1yYy4yXCIsXG4gIGluc3RhbGw6IGZ1bmN0aW9uIGluc3RhbGwoVnVlJCQxLCBvcHRpb25zKSB7XG4gICAgdmFyIGZpbmFsT3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHtcbiAgICAgIGluc3RhbGxDb21wb25lbnRzOiB0cnVlLFxuICAgICAgY29tcG9uZW50c1ByZWZpeDogJydcbiAgICB9LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIGtleSBpbiBmaW5hbE9wdGlvbnMpIHtcbiAgICAgIGlmICh0eXBlb2YgZmluYWxPcHRpb25zW2tleV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbmZpZ1trZXldID0gZmluYWxPcHRpb25zW2tleV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGZpbmFsT3B0aW9ucy5pbnN0YWxsQ29tcG9uZW50cykge1xuICAgICAgcmVnaXN0ZXJDb21wb25lbnRzKFZ1ZSQkMSwgZmluYWxPcHRpb25zLmNvbXBvbmVudHNQcmVmaXgpO1xuICAgIH1cbiAgfVxufTtcblxuLy8gQXV0by1pbnN0YWxsXG52YXIgR2xvYmFsVnVlID0gbnVsbDtcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICBHbG9iYWxWdWUgPSB3aW5kb3cuVnVlO1xufSBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xuICBHbG9iYWxWdWUgPSBnbG9iYWwuVnVlO1xufVxuaWYgKEdsb2JhbFZ1ZSkge1xuICBHbG9iYWxWdWUudXNlKHBsdWdpbik7XG59XG5cbmV4cG9ydCB7IFJlY3ljbGVTY3JvbGxlciwgRHluYW1pY1Njcm9sbGVyLCBEeW5hbWljU2Nyb2xsZXJJdGVtLCBJZFN0YXRlIH07XG5leHBvcnQgZGVmYXVsdCBwbHVnaW47XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2FuY2hvcnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUxMTg4MTA0JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2FuY2hvcnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9hbmNob3JzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL2hvbWUvc2ViL3dlYi9lbW9qaS1tYXJ0LXZ1ZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNTExODgxMDQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNTExODgxMDQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2FuY2hvcnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUxMTg4MTA0JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzUxMTg4MTA0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9hbmNob3JzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FuY2hvcnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9hbmNob3JzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9hbmNob3JzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MTE4ODEwNCZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vY2F0ZWdvcnkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM3NmNkYTBlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2NhdGVnb3J5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vY2F0ZWdvcnkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS9zZWIvd2ViL2Vtb2ppLW1hcnQtdnVlL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczNzZjZGEwZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczNzZjZGEwZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vY2F0ZWdvcnkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM3NmNkYTBlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzM3NmNkYTBlJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9jYXRlZ29yeS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jYXRlZ29yeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NhdGVnb3J5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jYXRlZ29yeS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Mzc2Y2RhMGUmXCIiLCJ2YXIgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vZW1vamkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9lbW9qaS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9ob21lL3NlYi93ZWIvZW1vamktbWFydC12dWUvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzkyNGVjZTQ2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzkyNGVjZTQ2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIFxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL2Vtb2ppL2Vtb2ppLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2Vtb2ppLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZW1vamkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9uaW1ibGVFbW9qaS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2Y4NTM1OTQmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbmltYmxlRW1vamkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9uaW1ibGVFbW9qaS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9ob21lL3NlYi93ZWIvZW1vamktbWFydC12dWUvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzdmODUzNTk0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzdmODUzNTk0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9uaW1ibGVFbW9qaS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2Y4NTM1OTQmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignN2Y4NTM1OTQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL2Vtb2ppL25pbWJsZUVtb2ppLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25pbWJsZUVtb2ppLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbmltYmxlRW1vamkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25pbWJsZUVtb2ppLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03Zjg1MzU5NCZcIiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgQW5jaG9ycyB9IGZyb20gJy4vYW5jaG9ycydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2F0ZWdvcnkgfSBmcm9tICcuL2NhdGVnb3J5J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQcmV2aWV3IH0gZnJvbSAnLi9wcmV2aWV3J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZWFyY2ggfSBmcm9tICcuL3NlYXJjaCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2tpbnMgfSBmcm9tICcuL3NraW5zJ1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIEVtb2ppIH0gZnJvbSAnLi9lbW9qaS9lbW9qaSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTmltYmxlRW1vamkgfSBmcm9tICcuL2Vtb2ppL25pbWJsZUVtb2ppJ1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIFBpY2tlciB9IGZyb20gJy4vcGlja2VyL3BpY2tlcidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTmltYmxlUGlja2VyIH0gZnJvbSAnLi9waWNrZXIvbmltYmxlUGlja2VyJ1xuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9uaW1ibGVQaWNrZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdiYzcxZGY4JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL25pbWJsZVBpY2tlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL25pbWJsZVBpY2tlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9ob21lL3NlYi93ZWIvZW1vamktbWFydC12dWUvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzdiYzcxZGY4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzdiYzcxZGY4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9uaW1ibGVQaWNrZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdiYzcxZGY4JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzdiYzcxZGY4Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9waWNrZXIvbmltYmxlUGlja2VyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25pbWJsZVBpY2tlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25pbWJsZVBpY2tlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbmltYmxlUGlja2VyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03YmM3MWRmOCZcIiIsInZhciByZW5kZXIsIHN0YXRpY1JlbmRlckZuc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9waWNrZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9waWNrZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS9zZWIvd2ViL2Vtb2ppLW1hcnQtdnVlL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczNDRjNTljZicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczNDRjNTljZicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9waWNrZXIvcGlja2VyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BpY2tlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BpY2tlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3ByZXZpZXcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM1MDU2YzMwJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3ByZXZpZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9wcmV2aWV3LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL2hvbWUvc2ViL3dlYi9lbW9qaS1tYXJ0LXZ1ZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMzUwNTZjMzAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMzUwNTZjMzAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3ByZXZpZXcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM1MDU2YzMwJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzM1MDU2YzMwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9wcmV2aWV3LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3ByZXZpZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wcmV2aWV3LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wcmV2aWV3LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNTA1NmMzMCZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vc2VhcmNoLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00YWQ0MWJiOCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9zZWFyY2gudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9zZWFyY2gudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS9zZWIvd2ViL2Vtb2ppLW1hcnQtdnVlL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0YWQ0MWJiOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0YWQ0MWJiOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vc2VhcmNoLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00YWQ0MWJiOCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0YWQ0MWJiOCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvc2VhcmNoLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NlYXJjaC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NlYXJjaC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2VhcmNoLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00YWQ0MWJiOCZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vc2tpbnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFjNjE0ODk0JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3NraW5zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vc2tpbnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS9zZWIvd2ViL2Vtb2ppLW1hcnQtdnVlL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxYzYxNDg5NCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxYzYxNDg5NCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vc2tpbnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFjNjE0ODk0JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzFjNjE0ODk0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9za2lucy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9za2lucy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NraW5zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9za2lucy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWM2MTQ4OTQmXCIiLCJpbXBvcnQgc3RvcmUgZnJvbSAnLi91dGlscy9zdG9yZSdcbmltcG9ydCB7IHVuY29tcHJlc3MgfSBmcm9tICcuL3V0aWxzL2RhdGEnXG5pbXBvcnQgZnJlcXVlbnRseSBmcm9tICcuL3V0aWxzL2ZyZXF1ZW50bHknXG5cbmV4cG9ydCB7XG4gIFBpY2tlcixcbiAgTmltYmxlUGlja2VyLFxuICBFbW9qaSxcbiAgTmltYmxlRW1vamksXG4gIEFuY2hvcnMsXG4gIFByZXZpZXcsXG4gIFNlYXJjaCxcbiAgQ2F0ZWdvcnksXG4gIFNraW5zLFxufSBmcm9tICcuL2NvbXBvbmVudHMnXG5cbmV4cG9ydCB7IEVtb2ppSW5kZXgsIEVtb2ppVmlldywgRW1vamlEYXRhLCBzYW5pdGl6ZSB9IGZyb20gJy4vdXRpbHMvZW1vamktZGF0YSdcbmV4cG9ydCB7IHVuY29tcHJlc3MsIHN0b3JlLCBmcmVxdWVudGx5IH1cbiIsImNvbnN0IF9TdHJpbmcgPSBTdHJpbmdcblxuZXhwb3J0IGRlZmF1bHQgX1N0cmluZy5mcm9tQ29kZVBvaW50IHx8XG4gIGZ1bmN0aW9uIHN0cmluZ0Zyb21Db2RlUG9pbnQoKSB7XG4gICAgdmFyIE1BWF9TSVpFID0gMHg0MDAwXG4gICAgdmFyIGNvZGVVbml0cyA9IFtdXG4gICAgdmFyIGhpZ2hTdXJyb2dhdGVcbiAgICB2YXIgbG93U3Vycm9nYXRlXG4gICAgdmFyIGluZGV4ID0gLTFcbiAgICB2YXIgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aFxuICAgIGlmICghbGVuZ3RoKSB7XG4gICAgICByZXR1cm4gJydcbiAgICB9XG4gICAgdmFyIHJlc3VsdCA9ICcnXG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIHZhciBjb2RlUG9pbnQgPSBOdW1iZXIoYXJndW1lbnRzW2luZGV4XSlcbiAgICAgIGlmIChcbiAgICAgICAgIWlzRmluaXRlKGNvZGVQb2ludCkgfHwgLy8gYE5hTmAsIGArSW5maW5pdHlgLCBvciBgLUluZmluaXR5YFxuICAgICAgICBjb2RlUG9pbnQgPCAwIHx8IC8vIG5vdCBhIHZhbGlkIFVuaWNvZGUgY29kZSBwb2ludFxuICAgICAgICBjb2RlUG9pbnQgPiAweDEwZmZmZiB8fCAvLyBub3QgYSB2YWxpZCBVbmljb2RlIGNvZGUgcG9pbnRcbiAgICAgICAgTWF0aC5mbG9vcihjb2RlUG9pbnQpICE9IGNvZGVQb2ludCAvLyBub3QgYW4gaW50ZWdlclxuICAgICAgKSB7XG4gICAgICAgIHRocm93IFJhbmdlRXJyb3IoJ0ludmFsaWQgY29kZSBwb2ludDogJyArIGNvZGVQb2ludClcbiAgICAgIH1cbiAgICAgIGlmIChjb2RlUG9pbnQgPD0gMHhmZmZmKSB7XG4gICAgICAgIC8vIEJNUCBjb2RlIHBvaW50XG4gICAgICAgIGNvZGVVbml0cy5wdXNoKGNvZGVQb2ludClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEFzdHJhbCBjb2RlIHBvaW50OyBzcGxpdCBpbiBzdXJyb2dhdGUgaGFsdmVzXG4gICAgICAgIC8vIGh0dHA6Ly9tYXRoaWFzYnluZW5zLmJlL25vdGVzL2phdmFzY3JpcHQtZW5jb2Rpbmcjc3Vycm9nYXRlLWZvcm11bGFlXG4gICAgICAgIGNvZGVQb2ludCAtPSAweDEwMDAwXG4gICAgICAgIGhpZ2hTdXJyb2dhdGUgPSAoY29kZVBvaW50ID4+IDEwKSArIDB4ZDgwMFxuICAgICAgICBsb3dTdXJyb2dhdGUgPSAoY29kZVBvaW50ICUgMHg0MDApICsgMHhkYzAwXG4gICAgICAgIGNvZGVVbml0cy5wdXNoKGhpZ2hTdXJyb2dhdGUsIGxvd1N1cnJvZ2F0ZSlcbiAgICAgIH1cbiAgICAgIGlmIChpbmRleCArIDEgPT09IGxlbmd0aCB8fCBjb2RlVW5pdHMubGVuZ3RoID4gTUFYX1NJWkUpIHtcbiAgICAgICAgcmVzdWx0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgY29kZVVuaXRzKVxuICAgICAgICBjb2RlVW5pdHMubGVuZ3RoID0gMFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbiIsImNvbnN0IFNWR3MgPSB7XG4gIGFjdGl2aXR5OiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiPjxwYXRoIGQ9XCJNMTIgMEM1LjM3MyAwIDAgNS4zNzIgMCAxMmMwIDYuNjI3IDUuMzczIDEyIDEyIDEyIDYuNjI4IDAgMTItNS4zNzMgMTItMTIgMC02LjYyOC01LjM3Mi0xMi0xMi0xMm05Ljk0OSAxMUgxNy4wNWMuMjI0LTIuNTI3IDEuMjMyLTQuNzczIDEuOTY4LTYuMTEzQTkuOTY2IDkuOTY2IDAgMCAxIDIxLjk0OSAxMU0xMyAxMVYyLjA1MWE5Ljk0NSA5Ljk0NSAwIDAgMSA0LjQzMiAxLjU2NGMtLjg1OCAxLjQ5MS0yLjE1NiA0LjIyLTIuMzkyIDcuMzg1SDEzem0tMiAwSDguOTYxYy0uMjM4LTMuMTY1LTEuNTM2LTUuODk0LTIuMzkzLTcuMzg1QTkuOTUgOS45NSAwIDAgMSAxMSAyLjA1MVYxMXptMCAydjguOTQ5YTkuOTM3IDkuOTM3IDAgMCAxLTQuNDMyLTEuNTY0Yy44NTctMS40OTIgMi4xNTUtNC4yMjEgMi4zOTMtNy4zODVIMTF6bTQuMDQgMGMuMjM2IDMuMTY0IDEuNTM0IDUuODkzIDIuMzkyIDcuMzg1QTkuOTIgOS45MiAwIDAgMSAxMyAyMS45NDlWMTNoMi4wNHpNNC45ODIgNC44ODdDNS43MTggNi4yMjcgNi43MjYgOC40NzMgNi45NTEgMTFoLTQuOWE5Ljk3NyA5Ljk3NyAwIDAgMSAyLjkzMS02LjExM00yLjA1MSAxM2g0LjljLS4yMjYgMi41MjctMS4yMzMgNC43NzEtMS45NjkgNi4xMTNBOS45NzIgOS45NzIgMCAwIDEgMi4wNTEgMTNtMTYuOTY3IDYuMTEzYy0uNzM1LTEuMzQyLTEuNzQ0LTMuNTg2LTEuOTY4LTYuMTEzaDQuODk5YTkuOTYxIDkuOTYxIDAgMCAxLTIuOTMxIDYuMTEzXCIvPjwvc3ZnPmAsXG5cbiAgY3VzdG9tOiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiPjxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgyLjAwMDAwMCwgMS4wMDAwMDApXCI+PHJlY3QgaWQ9XCJSZWN0YW5nbGVcIiB4PVwiOFwiIHk9XCIwXCIgd2lkdGg9XCIzXCIgaGVpZ2h0PVwiMjFcIiByeD1cIjEuNVwiPjwvcmVjdD48cmVjdCBpZD1cIlJlY3RhbmdsZVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg5Ljg0MywgMTAuNTQ5KSByb3RhdGUoNjApIHRyYW5zbGF0ZSgtOS44NDMsIC0xMC41NDkpIFwiIHg9XCI4LjM0M1wiIHk9XCIwLjA0OVwiIHdpZHRoPVwiM1wiIGhlaWdodD1cIjIxXCIgcng9XCIxLjVcIj48L3JlY3Q+PHJlY3QgaWQ9XCJSZWN0YW5nbGVcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoOS44NDMsIDEwLjU0OSkgcm90YXRlKC02MCkgdHJhbnNsYXRlKC05Ljg0MywgLTEwLjU0OSkgXCIgeD1cIjguMzQzXCIgeT1cIjAuMDQ5XCIgd2lkdGg9XCIzXCIgaGVpZ2h0PVwiMjFcIiByeD1cIjEuNVwiPjwvcmVjdD48L2c+PC9zdmc+YCxcblxuICBmbGFnczogYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj48cGF0aCBkPVwiTTAgMGw2LjA4NCAyNEg4TDEuOTE2IDB6TTIxIDVoLTRsLTEtNEg0bDMgMTJoM2wxIDRoMTNMMjEgNXpNNi41NjMgM2g3Ljg3NWwyIDhIOC41NjNsLTItOHptOC44MzIgMTBsLTIuODU2IDEuOTA0TDEyLjA2MyAxM2gzLjMzMnpNMTkgMTNsLTEuNS02aDEuOTM4bDIgOEgxNmwzLTJ6XCIvPjwvc3ZnPmAsXG5cbiAgZm9vZHM6IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+PHBhdGggZD1cIk0xNyA0Ljk3OGMtMS44MzggMC0yLjg3Ni4zOTYtMy42OC45MzQuNTEzLTEuMTcyIDEuNzY4LTIuOTM0IDQuNjgtMi45MzRhMSAxIDAgMCAwIDAtMmMtMi45MjEgMC00LjYyOSAxLjM2NS01LjU0NyAyLjUxMi0uMDY0LjA3OC0uMTE5LjE2Mi0uMTguMjQ0QzExLjczIDEuODM4IDEwLjc5OC4wMjMgOS4yMDcuMDIzIDguNTc5LjAyMiA3Ljg1LjMwNiA3IC45NzggNS4wMjcgMi41NCA1LjMyOSAzLjkwMiA2LjQ5MiA0Ljk5OSAzLjYwOSA1LjIyMiAwIDcuMzUyIDAgMTIuOTY5YzAgNC41ODIgNC45NjEgMTEuMDA5IDkgMTEuMDA5IDEuOTc1IDAgMi4zNzEtLjQ4NiAzLTEgLjYyOS41MTQgMS4wMjUgMSAzIDEgNC4wMzkgMCA5LTYuNDE4IDktMTEgMC01Ljk1My00LjA1NS04LTctOE04LjI0MiAyLjU0NmMuNjQxLS41MDguOTQzLS41MjMuOTY1LS41MjMuNDI2LjE2OS45NzUgMS40MDUgMS4zNTcgMy4wNTUtMS41MjctLjYyOS0yLjc0MS0xLjM1Mi0yLjk4LTEuODQ2LjA1OS0uMTEyLjI0MS0uMzU2LjY1OC0uNjg2TTE1IDIxLjk3OGMtMS4wOCAwLTEuMjEtLjEwOS0xLjU1OS0uNDAybC0uMTc2LS4xNDZjLS4zNjctLjMwMi0uODE2LS40NTItMS4yNjYtLjQ1MnMtLjg5OC4xNS0xLjI2Ni40NTJsLS4xNzYuMTQ2Yy0uMzQ3LjI5Mi0uNDc3LjQwMi0xLjU1Ny40MDItMi44MTMgMC03LTUuMzg5LTctOS4wMDkgMC01LjgyMyA0LjQ4OC01Ljk5MSA1LTUuOTkxIDEuOTM5IDAgMi40ODQuNDcxIDMuMzg3IDEuMjUxbC4zMjMuMjc2YTEuOTk1IDEuOTk1IDAgMCAwIDIuNTggMGwuMzIzLS4yNzZjLjkwMi0uNzggMS40NDctMS4yNTEgMy4zODctMS4yNTEuNTEyIDAgNSAuMTY4IDUgNiAwIDMuNjE3LTQuMTg3IDktNyA5XCIvPjwvc3ZnPmAsXG5cbiAgbmF0dXJlOiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiPjxwYXRoIGQ9XCJNMTUuNSA4YTEuNSAxLjUgMCAxIDAgLjAwMSAzLjAwMUExLjUgMS41IDAgMCAwIDE1LjUgOE04LjUgOGExLjUgMS41IDAgMSAwIC4wMDEgMy4wMDFBMS41IDEuNSAwIDAgMCA4LjUgOFwiLz48cGF0aCBkPVwiTTE4LjkzMyAwaC0uMDI3Yy0uOTcgMC0yLjEzOC43ODctMy4wMTggMS40OTctMS4yNzQtLjM3NC0yLjYxMi0uNTEtMy44ODctLjUxLTEuMjg1IDAtMi42MTYuMTMzLTMuODc0LjUxN0M3LjI0NS43OSA2LjA2OSAwIDUuMDkzIDBoLS4wMjdDMy4zNTIgMCAuMDcgMi42Ny4wMDIgNy4wMjZjLS4wMzkgMi40NzkuMjc2IDQuMjM4IDEuMDQgNS4wMTMuMjU0LjI1OC44ODIuNjc3IDEuMjk1Ljg4Mi4xOTEgMy4xNzcuOTIyIDUuMjM4IDIuNTM2IDYuMzguODk3LjYzNyAyLjE4Ny45NDkgMy4yIDEuMTAyQzguMDQgMjAuNiA4IDIwLjc5NSA4IDIxYzAgMS43NzMgMi4zNSAzIDQgMyAxLjY0OCAwIDQtMS4yMjcgNC0zIDAtLjIwMS0uMDM4LS4zOTMtLjA3Mi0uNTg2IDIuNTczLS4zODUgNS40MzUtMS44NzcgNS45MjUtNy41ODcuMzk2LS4yMi44ODctLjU2OCAxLjEwNC0uNzg4Ljc2My0uNzc0IDEuMDc5LTIuNTM0IDEuMDQtNS4wMTNDMjMuOTI5IDIuNjcgMjAuNjQ2IDAgMTguOTMzIDBNMy4yMjMgOS4xMzVjLS4yMzcuMjgxLS44MzcgMS4xNTUtLjg4NCAxLjIzOC0uMTUtLjQxLS4zNjgtMS4zNDktLjMzNy0zLjI5MS4wNTEtMy4yODEgMi40NzgtNC45NzIgMy4wOTEtNS4wMzEuMjU2LjAxNS43MzEuMjcgMS4yNjUuNjQ2LTEuMTEgMS4xNzEtMi4yNzUgMi45MTUtMi4zNTIgNS4xMjUtLjEzMy41NDYtLjM5OC44NTgtLjc4MyAxLjMxM00xMiAyMmMtLjkwMSAwLTEuOTU0LS42OTMtMi0xIDAtLjY1NC40NzUtMS4yMzYgMS0xLjYwMlYyMGExIDEgMCAxIDAgMiAwdi0uNjAyYy41MjQuMzY1IDEgLjk0NyAxIDEuNjAyLS4wNDYuMzA3LTEuMDk5IDEtMiAxbTMtMy40OHYuMDJhNC43NTIgNC43NTIgMCAwIDAtMS4yNjItMS4wMmMxLjA5Mi0uNTE2IDIuMjM5LTEuMzM0IDIuMjM5LTIuMjE3IDAtMS44NDItMS43ODEtMi4xOTUtMy45NzctMi4xOTUtMi4xOTYgMC0zLjk3OC4zNTQtMy45NzggMi4xOTUgMCAuODgzIDEuMTQ4IDEuNzAxIDIuMjM4IDIuMjE3QTQuOCA0LjggMCAwIDAgOSAxOC41Mzl2LS4wMjVjLTEtLjA3Ni0yLjE4Mi0uMjgxLTIuOTczLS44NDItMS4zMDEtLjkyLTEuODM4LTMuMDQ1LTEuODUzLTYuNDc4bC4wMjMtLjA0MWMuNDk2LS44MjYgMS40OS0xLjQ1IDEuODA0LTMuMTAyIDAtMi4wNDcgMS4zNTctMy42MzEgMi4zNjItNC41MjJDOS4zNyAzLjE3OCAxMC41NTUgMyAxMS45NDggM2MxLjQ0NyAwIDIuNjg1LjE5MiAzLjczMy41NyAxIC45IDIuMzE2IDIuNDY1IDIuMzE2IDQuNDguMzEzIDEuNjUxIDEuMzA3IDIuMjc1IDEuODAzIDMuMTAyLjAzNS4wNTguMDY4LjExNy4xMDIuMTc4LS4wNTkgNS45NjctMS45NDkgNy4wMS00LjkwMiA3LjE5bTYuNjI4LTguMjAyYy0uMDM3LS4wNjUtLjA3NC0uMTMtLjExMy0uMTk1YTcuNTg3IDcuNTg3IDAgMCAwLS43MzktLjk4N2MtLjM4NS0uNDU1LS42NDgtLjc2OC0uNzgyLTEuMzEzLS4wNzYtMi4yMDktMS4yNDEtMy45NTQtMi4zNTMtNS4xMjQuNTMxLS4zNzYgMS4wMDQtLjYzIDEuMjYxLS42NDcuNjM2LjA3MSAzLjA0NCAxLjc2NCAzLjA5NiA1LjAzMS4wMjcgMS44MS0uMzQ3IDMuMjE4LS4zNyAzLjIzNVwiLz48L3N2Zz5gLFxuXG4gIG9iamVjdHM6IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+PHBhdGggZD1cIk0xMiAwYTkgOSAwIDAgMC01IDE2LjQ4MlYyMXMyLjAzNSAzIDUgMyA1LTMgNS0zdi00LjUxOEE5IDkgMCAwIDAgMTIgMHptMCAyYzMuODYgMCA3IDMuMTQxIDcgN3MtMy4xNCA3LTcgNy03LTMuMTQxLTctNyAzLjE0LTcgNy03ek05IDE3LjQ3N2MuOTQuMzMyIDEuOTQ2LjUyMyAzIC41MjNzMi4wNi0uMTkgMy0uNTIzdi44MzRjLS45MS40MzYtMS45MjUuNjg5LTMgLjY4OWE2LjkyNCA2LjkyNCAwIDAgMS0zLS42OXYtLjgzM3ptLjIzNiAzLjA3QTguODU0IDguODU0IDAgMCAwIDEyIDIxYy45NjUgMCAxLjg4OC0uMTY3IDIuNzU4LS40NTFDMTQuMTU1IDIxLjE3MyAxMy4xNTMgMjIgMTIgMjJjLTEuMTAyIDAtMi4xMTctLjc4OS0yLjc2NC0xLjQ1M3pcIi8+PHBhdGggZD1cIk0xNC43NDUgMTIuNDQ5aC0uMDA0Yy0uODUyLS4wMjQtMS4xODgtLjg1OC0xLjU3Ny0xLjgyNC0uNDIxLTEuMDYxLS43MDMtMS41NjEtMS4xODItMS41NjZoLS4wMDljLS40ODEgMC0uNzgzLjQ5Ny0xLjIzNSAxLjUzNy0uNDM2Ljk4Mi0uODAxIDEuODExLTEuNjM2IDEuNzkxbC0uMjc2LS4wNDNjLS41NjUtLjE3MS0uODUzLS42OTEtMS4yODQtMS43OTQtLjEyNS0uMzEzLS4yMDItLjYzMi0uMjctLjkxMy0uMDUxLS4yMTMtLjEyNy0uNTMtLjE5NS0uNjM0QzcuMDY3IDkuMDA0IDcuMDM5IDkgNi45OSA5QTEgMSAwIDAgMSA3IDdoLjAxYzEuNjYyLjAxNyAyLjAxNSAxLjM3MyAyLjE5OCAyLjEzNC40ODYtLjk4MSAxLjMwNC0yLjA1OCAyLjc5Ny0yLjA3NSAxLjUzMS4wMTggMi4yOCAxLjE1MyAyLjczMSAyLjE0MWwuMDAyLS4wMDhDMTQuOTQ0IDguNDI0IDE1LjMyNyA3IDE2Ljk3OSA3aC4wMzJBMSAxIDAgMSAxIDE3IDloLS4wMTFjLS4xNDkuMDc2LS4yNTYuNDc0LS4zMTkuNzA5YTYuNDg0IDYuNDg0IDAgMCAxLS4zMTEuOTUxYy0uNDI5Ljk3My0uNzkgMS43ODktMS42MTQgMS43ODlcIi8+PC9zdmc+YCxcblxuICBwZW9wbGU6IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+PHBhdGggZD1cIk0xMiAwQzUuMzczIDAgMCA1LjM3MyAwIDEyczUuMzczIDEyIDEyIDEyIDEyLTUuMzczIDEyLTEyUzE4LjYyNyAwIDEyIDBtMCAyMkM2LjQ4NiAyMiAyIDE3LjUxNCAyIDEyUzYuNDg2IDIgMTIgMnMxMCA0LjQ4NiAxMCAxMC00LjQ4NiAxMC0xMCAxMFwiLz48cGF0aCBkPVwiTTggN2EyIDIgMCAxIDAtLjAwMSAzLjk5OUEyIDIgMCAwIDAgOCA3TTE2IDdhMiAyIDAgMSAwLS4wMDEgMy45OTlBMiAyIDAgMCAwIDE2IDdNMTUuMjMyIDE1Yy0uNjkzIDEuMTk1LTEuODcgMi0zLjM0OSAyLTEuNDc3IDAtMi42NTUtLjgwNS0zLjM0Ny0ySDE1bTMtMkg2YTYgNiAwIDEgMCAxMiAwXCIvPjwvc3ZnPmAsXG5cbiAgcGxhY2VzOiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiPjxwYXRoIGQ9XCJNNi41IDEyQzUuMTIyIDEyIDQgMTMuMTIxIDQgMTQuNVM1LjEyMiAxNyA2LjUgMTcgOSAxNS44NzkgOSAxNC41IDcuODc4IDEyIDYuNSAxMm0wIDNjLS4yNzUgMC0uNS0uMjI1LS41LS41cy4yMjUtLjUuNS0uNS41LjIyNS41LjUtLjIyNS41LS41LjVNMTcuNSAxMmMtMS4zNzggMC0yLjUgMS4xMjEtMi41IDIuNXMxLjEyMiAyLjUgMi41IDIuNSAyLjUtMS4xMjEgMi41LTIuNS0xLjEyMi0yLjUtMi41LTIuNW0wIDNjLS4yNzUgMC0uNS0uMjI1LS41LS41cy4yMjUtLjUuNS0uNS41LjIyNS41LjUtLjIyNS41LS41LjVcIi8+PHBhdGggZD1cIk0yMi40ODIgOS40OTRsLTEuMDM5LS4zNDZMMjEuNCA5aC42Yy41NTIgMCAxLS40MzkgMS0uOTkyIDAtLjAwNi0uMDAzLS4wMDgtLjAwMy0uMDA4SDIzYzAtMS0uODg5LTItMS45ODQtMmgtLjY0MmwtLjczMS0xLjcxN0MxOS4yNjIgMy4wMTIgMTguMDkxIDIgMTYuNzY0IDJINy4yMzZDNS45MDkgMiA0LjczOCAzLjAxMiA0LjM1NyA0LjI4M0wzLjYyNiA2aC0uNjQyQzEuODg5IDYgMSA3IDEgOGguMDAzUzEgOC4wMDIgMSA4LjAwOEMxIDguNTYxIDEuNDQ4IDkgMiA5aC42bC0uMDQzLjE0OC0xLjAzOS4zNDZhMi4wMDEgMi4wMDEgMCAwIDAtMS4zNTkgMi4wOTdsLjc1MSA3LjUwOGExIDEgMCAwIDAgLjk5NC45MDFIM3YxYzAgMS4xMDMuODk2IDIgMiAyaDJjMS4xMDQgMCAyLS44OTcgMi0ydi0xaDZ2MWMwIDEuMTAzLjg5NiAyIDIgMmgyYzEuMTA0IDAgMi0uODk3IDItMnYtMWgxLjA5NmEuOTk5Ljk5OSAwIDAgMCAuOTk0LS45MDFsLjc1MS03LjUwOGEyLjAwMSAyLjAwMSAwIDAgMC0xLjM1OS0yLjA5N002LjI3MyA0Ljg1N0M2LjQwMiA0LjQzIDYuNzg4IDQgNy4yMzYgNGg5LjUyN2MuNDQ4IDAgLjgzNC40My45NjMuODU3TDE5LjMxMyA5SDQuNjg4bDEuNTg1LTQuMTQzek03IDIxSDV2LTFoMnYxem0xMiAwaC0ydi0xaDJ2MXptMi4xODktM0gyLjgxMWwtLjY2Mi02LjYwN0wzIDExaDE4bC44NTIuMzkzTDIxLjE4OSAxOHpcIi8+PC9zdmc+YCxcblxuICByZWNlbnQ6IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+PHBhdGggZD1cIk0xMyA0aC0ybC0uMDAxIDdIOXYyaDJ2Mmgydi0yaDR2LTJoLTR6XCIvPjxwYXRoIGQ9XCJNMTIgMEM1LjM3MyAwIDAgNS4zNzMgMCAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMlMxOC42MjcgMCAxMiAwbTAgMjJDNi40ODYgMjIgMiAxNy41MTQgMiAxMlM2LjQ4NiAyIDEyIDJzMTAgNC40ODYgMTAgMTAtNC40ODYgMTAtMTAgMTBcIi8+PC9zdmc+YCxcblxuICBzeW1ib2xzOiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiPjxwYXRoIGQ9XCJNMCAwaDExdjJIMHpNNCAxMWgzVjZoNFY0SDB2Mmg0ek0xNS41IDE3YzEuMzgxIDAgMi41LTEuMTE2IDIuNS0yLjQ5M3MtMS4xMTktMi40OTMtMi41LTIuNDkzUzEzIDEzLjEzIDEzIDE0LjUwNyAxNC4xMTkgMTcgMTUuNSAxN20wLTIuOTg2Yy4yNzYgMCAuNS4yMjIuNS40OTMgMCAuMjcyLS4yMjQuNDkzLS41LjQ5M3MtLjUtLjIyMS0uNS0uNDkzLjIyNC0uNDkzLjUtLjQ5M00yMS41IDE5LjAxNGMtMS4zODEgMC0yLjUgMS4xMTYtMi41IDIuNDkzUzIwLjExOSAyNCAyMS41IDI0czIuNS0xLjExNiAyLjUtMi40OTMtMS4xMTktMi40OTMtMi41LTIuNDkzbTAgMi45ODZhLjQ5Ny40OTcgMCAwIDEtLjUtLjQ5M2MwLS4yNzEuMjI0LS40OTMuNS0uNDkzcy41LjIyMi41LjQ5M2EuNDk3LjQ5NyAwIDAgMS0uNS40OTNNMjIgMTNsLTkgOSAxLjUxMyAxLjUgOC45OS05LjAwOXpNMTcgMTFjMi4yMDkgMCA0LTEuMTE5IDQtMi41VjJzLjk4NS0uMTYxIDEuNDk4Ljk0OUMyMy4wMSA0LjA1NSAyMyA2IDIzIDZzMS0xLjExOSAxLTMuMTM1QzI0LS4wMiAyMSAwIDIxIDBoLTJ2Ni4zNDdBNS44NTMgNS44NTMgMCAwIDAgMTcgNmMtMi4yMDkgMC00IDEuMTE5LTQgMi41czEuNzkxIDIuNSA0IDIuNU0xMC4yOTcgMjAuNDgybC0xLjQ3NS0xLjU4NWE0Ny41NCA0Ny41NCAwIDAgMS0xLjQ0MiAxLjEyOWMtLjMwNy0uMjg4LS45ODktMS4wMTYtMi4wNDUtMi4xODMuOTAyLS44MzYgMS40NzktMS40NjYgMS43MjktMS44OTJzLjM3Ni0uODcxLjM3Ni0xLjMzNmMwLS41OTItLjI3My0xLjE3OC0uODE4LTEuNzU5LS41NDYtLjU4MS0xLjMyOS0uODcxLTIuMzQ5LS44NzEtMS4wMDggMC0xLjc5LjI5My0yLjM0NC44NzktLjU1Ni41ODctLjgzMiAxLjE4MS0uODMyIDEuNzg0IDAgLjgxMy40MTkgMS43NDggMS4yNTYgMi44MDUtLjg0Ny42MTQtMS40NDQgMS4yMDgtMS43OTQgMS43ODRhMy40NjUgMy40NjUgMCAwIDAtLjUyMyAxLjgzM2MwIC44NTcuMzA4IDEuNTYuOTI0IDIuMTA3LjYxNi41NDkgMS40MjMuODIzIDIuNDIuODIzIDEuMTczIDAgMi40NDQtLjM3OSAzLjgxMy0xLjEzN0w4LjIzNSAyNGgyLjgxOWwtMi4wOS0yLjM4MyAxLjMzMy0xLjEzNXptLTYuNzM2LTYuMzg5YTEuMDIgMS4wMiAwIDAgMSAuNzMtLjI4NmMuMzEgMCAuNTU5LjA4NS43NDcuMjU0YS44NDkuODQ5IDAgMCAxIC4yODMuNjU5YzAgLjUxOC0uNDE5IDEuMTEyLTEuMjU3IDEuNzg0LS41MzYtLjY1MS0uODA1LTEuMjMxLS44MDUtMS43NDJhLjkwMS45MDEgMCAwIDEgLjMwMi0uNjY5TTMuNzQgMjJjLS40MjcgMC0uNzc4LS4xMTYtMS4wNTctLjM0OS0uMjc5LS4yMzItLjQxOC0uNDg3LS40MTgtLjc2NiAwLS41OTQuNTA5LTEuMjg4IDEuNTI3LTIuMDgzLjk2OCAxLjEzNCAxLjcxNyAxLjk0NiAyLjI0OCAyLjQzOC0uOTIxLjUwNy0xLjY4Ni43Ni0yLjMuNzZcIi8+PC9zdmc+YCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgU1ZHc1xuIiwiY29uc3QgbWFwcGluZyA9IHtcbiAgbmFtZTogJ2EnLFxuICB1bmlmaWVkOiAnYicsXG4gIG5vbl9xdWFsaWZpZWQ6ICdjJyxcbiAgaGFzX2ltZ19hcHBsZTogJ2QnLFxuICBoYXNfaW1nX2dvb2dsZTogJ2UnLFxuICBoYXNfaW1nX3R3aXR0ZXI6ICdmJyxcbiAgaGFzX2ltZ19lbW9qaW9uZTogJ2cnLFxuICBoYXNfaW1nX2ZhY2Vib29rOiAnaCcsXG4gIGhhc19pbWdfbWVzc2VuZ2VyOiAnaScsXG4gIGtleXdvcmRzOiAnaicsXG4gIHNoZWV0OiAnaycsXG4gIGVtb3RpY29uczogJ2wnLFxuICB0ZXh0OiAnbScsXG4gIHNob3J0X25hbWVzOiAnbicsXG4gIGFkZGVkX2luOiAnbycsXG59XG5cbmNvbnN0IGJ1aWxkU2VhcmNoID0gKGVtb2ppKSA9PiB7XG4gIGNvbnN0IHNlYXJjaCA9IFtdXG5cbiAgdmFyIGFkZFRvU2VhcmNoID0gKHN0cmluZ3MsIHNwbGl0KSA9PiB7XG4gICAgaWYgKCFzdHJpbmdzKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICA7KEFycmF5LmlzQXJyYXkoc3RyaW5ncykgPyBzdHJpbmdzIDogW3N0cmluZ3NdKS5mb3JFYWNoKChzdHJpbmcpID0+IHtcbiAgICAgIDsoc3BsaXQgPyBzdHJpbmcuc3BsaXQoL1stfF98XFxzXSsvKSA6IFtzdHJpbmddKS5mb3JFYWNoKChzKSA9PiB7XG4gICAgICAgIHMgPSBzLnRvTG93ZXJDYXNlKClcblxuICAgICAgICBpZiAoc2VhcmNoLmluZGV4T2YocykgPT0gLTEpIHtcbiAgICAgICAgICBzZWFyY2gucHVzaChzKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBhZGRUb1NlYXJjaChlbW9qaS5zaG9ydF9uYW1lcywgdHJ1ZSlcbiAgYWRkVG9TZWFyY2goZW1vamkubmFtZSwgdHJ1ZSlcbiAgYWRkVG9TZWFyY2goZW1vamkua2V5d29yZHMsIGZhbHNlKVxuICBhZGRUb1NlYXJjaChlbW9qaS5lbW90aWNvbnMsIGZhbHNlKVxuXG4gIHJldHVybiBzZWFyY2guam9pbignLCcpXG59XG5cbmNvbnN0IGNvbXByZXNzID0gKGVtb2ppKSA9PiB7XG4gIGVtb2ppLnNob3J0X25hbWVzID0gZW1vamkuc2hvcnRfbmFtZXMuZmlsdGVyKChzaG9ydF9uYW1lKSA9PiB7XG4gICAgcmV0dXJuIHNob3J0X25hbWUgIT09IGVtb2ppLnNob3J0X25hbWVcbiAgfSlcbiAgZGVsZXRlIGVtb2ppLnNob3J0X25hbWVcblxuICBlbW9qaS5zaGVldCA9IFtlbW9qaS5zaGVldF94LCBlbW9qaS5zaGVldF95XVxuICBkZWxldGUgZW1vamkuc2hlZXRfeFxuICBkZWxldGUgZW1vamkuc2hlZXRfeVxuXG4gIGVtb2ppLmFkZGVkX2luID0gcGFyc2VJbnQoZW1vamkuYWRkZWRfaW4pXG4gIGlmIChlbW9qaS5hZGRlZF9pbiA9PT0gNikge1xuICAgIGRlbGV0ZSBlbW9qaS5hZGRlZF9pblxuICB9XG5cbiAgZm9yIChsZXQga2V5IGluIG1hcHBpbmcpIHtcbiAgICBlbW9qaVttYXBwaW5nW2tleV1dID0gZW1vamlba2V5XVxuICAgIGRlbGV0ZSBlbW9qaVtrZXldXG4gIH1cblxuICBmb3IgKGxldCBrZXkgaW4gZW1vamkpIHtcbiAgICBsZXQgdmFsdWUgPSBlbW9qaVtrZXldXG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgIXZhbHVlLmxlbmd0aCkge1xuICAgICAgZGVsZXRlIGVtb2ppW2tleV1cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgIXZhbHVlLmxlbmd0aCkge1xuICAgICAgZGVsZXRlIGVtb2ppW2tleV1cbiAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICBkZWxldGUgZW1vamlba2V5XVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkZWVwRnJlZXplKG9iamVjdCkge1xuICAvLyBSZXRyaWV2ZSB0aGUgcHJvcGVydHkgbmFtZXMgZGVmaW5lZCBvbiBvYmplY3RcbiAgdmFyIHByb3BOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iamVjdClcblxuICAvLyBGcmVlemUgcHJvcGVydGllcyBiZWZvcmUgZnJlZXppbmcgc2VsZlxuICBmb3IgKGxldCBuYW1lIG9mIHByb3BOYW1lcykge1xuICAgIGxldCB2YWx1ZSA9IG9iamVjdFtuYW1lXVxuICAgIG9iamVjdFtuYW1lXSA9XG4gICAgICB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnID8gZGVlcEZyZWV6ZSh2YWx1ZSkgOiB2YWx1ZVxuICB9XG4gIHJldHVybiBPYmplY3QuZnJlZXplKG9iamVjdClcbn1cblxuY29uc3QgdW5jb21wcmVzcyA9IChkYXRhKSA9PiB7XG4gIGlmICghZGF0YS5jb21wcmVzc2VkKSB7XG4gICAgcmV0dXJuIGRhdGFcbiAgfVxuICBkYXRhLmNvbXByZXNzZWQgPSBmYWxzZVxuXG4gIGZvciAobGV0IGlkIGluIGRhdGEuZW1vamlzKSB7XG4gICAgbGV0IGVtb2ppID0gZGF0YS5lbW9qaXNbaWRdXG5cbiAgICBmb3IgKGxldCBrZXkgaW4gbWFwcGluZykge1xuICAgICAgZW1vamlba2V5XSA9IGVtb2ppW21hcHBpbmdba2V5XV1cbiAgICAgIGRlbGV0ZSBlbW9qaVttYXBwaW5nW2tleV1dXG4gICAgfVxuXG4gICAgaWYgKCFlbW9qaS5zaG9ydF9uYW1lcykgZW1vamkuc2hvcnRfbmFtZXMgPSBbXVxuICAgIGVtb2ppLnNob3J0X25hbWVzLnVuc2hpZnQoaWQpXG5cbiAgICBlbW9qaS5zaGVldF94ID0gZW1vamkuc2hlZXRbMF1cbiAgICBlbW9qaS5zaGVldF95ID0gZW1vamkuc2hlZXRbMV1cbiAgICBkZWxldGUgZW1vamkuc2hlZXRcblxuICAgIGlmICghZW1vamkudGV4dCkgZW1vamkudGV4dCA9ICcnXG5cbiAgICBpZiAoIWVtb2ppLmFkZGVkX2luKSBlbW9qaS5hZGRlZF9pbiA9IDZcbiAgICBlbW9qaS5hZGRlZF9pbiA9IGVtb2ppLmFkZGVkX2luLnRvRml4ZWQoMSlcblxuICAgIGVtb2ppLnNlYXJjaCA9IGJ1aWxkU2VhcmNoKGVtb2ppKVxuICB9XG4gIGRhdGEgPSBkZWVwRnJlZXplKGRhdGEpXG4gIHJldHVybiBkYXRhXG59XG5cbm1vZHVsZS5leHBvcnRzID0geyBidWlsZFNlYXJjaCwgY29tcHJlc3MsIHVuY29tcHJlc3MgfVxuIiwiaW1wb3J0IHsgaW50ZXJzZWN0LCB1bmlmaWVkVG9OYXRpdmUgfSBmcm9tICcuL2luZGV4J1xuaW1wb3J0IHsgdW5jb21wcmVzcywgYnVpbGRTZWFyY2ggfSBmcm9tICcuL2RhdGEnXG5pbXBvcnQgZnJlcXVlbnRseSBmcm9tICcuL2ZyZXF1ZW50bHknXG5cbmNvbnN0IFNIRUVUX0NPTFVNTlMgPSA1MlxuY29uc3QgQ09MT05TX1JFR0VYID0gL14oPzpcXDooW15cXDpdKylcXDopKD86XFw6c2tpbi10b25lLShcXGQpXFw6KT8kL1xuLy8gU2tpbiB0b25lc1xuY29uc3QgU0tJTlMgPSBbJzFGM0ZBJywgJzFGM0ZCJywgJzFGM0ZDJywgJzFGM0ZEJywgJzFGM0ZFJywgJzFGM0ZGJ11cblxuLyoqXG4gKiBFbW9qaSBkYXRhIHN0cnVjdHVyZTpcbiAqIHtcbiAqICAgIFwiY29tcHJlc3NlZFwiOiBmYWxzZSxcbiAqICAgIFwiYWxpYXNlc1wiOiB7XG4gKiAgICAgIGNvbGxpc2lvbjogXCJib29tXCJcbiAqICAgICAgY29va2luZzogXCJmcmllZF9lZ2dcIlxuICogICAgICBlbnZlbG9wZTogXCJlbWFpbFwiXG4gKiAgICAgIGZhY2Vfd2l0aF9maW5nZXJfY292ZXJpbmdfY2xvc2VkX2xpcHM6IFwic2h1c2hpbmdfZmFjZVwiXG4gKiAgICAgIC4uLlxuICogICAgfSxcbiAqICAgIFwiY2F0ZWdvcmllc1wiOiBbIHtcbiAqICAgICAgaWQ6IFwicGVvcGxlXCIsXG4gKiAgICAgIG5hbWU6IFwiU21pbGV5cyAmIFBlb3BsZVwiLFxuICogICAgICBlbW9qaXM6IFsgXCJncmlubmluZ1wiLCBcImdyaW5cIiwgXCJqb3lcIiwgLi4uIF1cbiAqICAgIH0sIHtcbiAqICAgICAgaWQ6IFwibmF0dXJlXCIsXG4gKiAgICAgIG5hbWU6IFwiQW5pbWFscyAmIE5hdHVyZVwiLFxuICogICAgICBlbW9qaXM6IFsgXCJtb25rZXlfZmFjZVwiLCBcIm1vbmV5XCIsIFwiZ29yaWxsYVwiLCAuLi4gXVxuICogICAgfSxcbiAqICAgIC4uLlxuICogICAgXSxcbiAqICAgIFwiZW1vamlzXCI6IFtcbiAqICAgICAgc21pbGV5OiB7XG4gKiAgICAgICAgYWRkZWRfaW46IFwiNi4wXCIsXG4gKiAgICAgICAgZW1vdGljb25zOiBbXCI9KVwiLCBcIj0tKVwiXSxcbiAqICAgICAgICBoYXNfaW1nX2FwcGxlOiB0cnVlLFxuICogICAgICAgIGhhc19pbWdfZW1vamlvbmU6IHRydWUsXG4gKiAgICAgICAgaGFzX2ltZ19mYWNlYm9vazogdHJ1ZSxcbiAqICAgICAgICBoYXNfaW1nX2dvb2dsZTogdHJ1ZSxcbiAqICAgICAgICBoYXNfaW1nX21lc3NlbmdlcjogdHJ1ZSxcbiAqICAgICAgICBoYXNfaW1nX3R3aXR0ZXI6IHRydWUsXG4gKiAgICAgICAga2V5d29yZHM6IFtcImZhY2VcIiwgXCJoYXBweVwiLCBcImpveVwiLCBcImhhaGFcIiwgXCI6RFwiLCBcIjopXCIsIFwic21pbGVcIiwgXCJmdW5ueVwiXSxcbiAqICAgICAgICBuYW1lOiBcIlNtaWxpbmcgRmFjZSB3aXRoIE9wZW4gTW91dGhcIixcbiAqICAgICAgICBub25fcXVhbGlmaWVkOiB1bmRlZmluZWQsXG4gKiAgICAgICAgc2VhcmNoOiBcInNtaWxleSxzbWlsaW5nLGZhY2Usd2l0aCxvcGVuLG1vdXRoLGhhcHB5LGpveSxoYWhhLDpkLDopLHNtaWxlLGZ1bm55LD0pLD0tKVwiLFxuICogICAgICAgIHNoZWV0X3g6IDMwLFxuICogICAgICAgIHNoZWV0X3k6IDI3LFxuICogICAgICAgIHNob3J0X25hbWVzOiBbXCJzbWlsZXlcIl0sXG4gKiAgICAgICAgdGV4dDogXCI6KVwiLFxuICogICAgICAgIHVuaWZpZWQ6IFwiMUY2MDNcIixcbiAqICAgICAgfSwge1xuICogICAgICArMTogeyAgICAvLyBlbW9qaSB3aXRoIHNraW5fdmFyaWF0aW9uc1xuICogICAgICAgICAgLi4uLCAvLyBhbGwgdGhlIHJlZ3VsYXIgZmllbGRzIGFyZSBwcmVzZW50XG4gKiAgICAgICAgICBuYW1lOiBcIlRodW1icyBVcCBTaWduXCIsXG4gKiAgICAgICAgICBzaG9ydF9uYW1lczogKDIpIFtcIisxXCIsIFwidGh1bWJzdXBcIl0sXG4gKiAgICAgICAgICBza2luX3ZhcmlhdGlvbnM6IHtcbiAqICAgICAgICAgICAgMUYzRkI6ICAgICAgICAgICAgIC8vIGVhY2ggdmFyaWF0aW9uIGhhcyBhZGRpdGlvbmFsIHNldCBvZiBmaWVsZHM6XG4gKiAgICAgICAgICAgICAgYWRkZWRfaW46IFwiOC4wXCIsXG4gKiAgICAgICAgICAgICAgaGFzX2ltZ19hcHBsZTogdHJ1ZSxcbiAqICAgICAgICAgICAgICBoYXNfaW1nX2Vtb2ppb25lOiB0cnVlLFxuICogICAgICAgICAgICAgIGhhc19pbWdfZmFjZWJvb2s6IHRydWUsXG4gKiAgICAgICAgICAgICAgaGFzX2ltZ19nb29nbGU6IHRydWUsXG4gKiAgICAgICAgICAgICAgaGFzX2ltZ19tZXNzZW5nZXI6IHRydWUsXG4gKiAgICAgICAgICAgICAgaGFzX2ltZ190d2l0dGVyOiB0cnVlLFxuICogICAgICAgICAgICAgIGltYWdlOiBcIjFmNDRkLTFmM2ZiLnBuZ1wiLFxuICogICAgICAgICAgICAgIG5vbl9xdWFsaWZpZWQ6IG51bGwsXG4gKiAgICAgICAgICAgICAgc2hlZXRfeDogMTQsXG4gKiAgICAgICAgICAgICAgc2hlZXRfeTogNTAsXG4gKiAgICAgICAgICAgICAgdW5pZmllZDogXCIxRjQ0RC0xRjNGQlwiLFxuICogICAgICAgICAgICAxRjNGQjoge+KApn0sXG4gKiAgICAgICAgICAgIDFGM0ZDOiB74oCmfSxcbiAqICAgICAgICAgICAgMUYzRkQ6IHvigKZ9LFxuICogICAgICAgICAgICAxRjNGRToge+KApn0sXG4gKiAgICAgICAgICAgIDFGM0ZGOiB74oCmfVxuICogICAgICAgICAgICB9LFxuICogICAgICAgICAgLi4uXG4gKiAgICAgIH0sXG4gKiAgICAgIGE6IHsgIC8vIGVtb2ppIHdpdGggbm9uX3F1YWxpZmllZCBmaWVsZCBzZXRcbiAqICAgICAgICBhZGRlZF9pbjogXCI2LjBcIixcbiAqICAgICAgICBlbW90aWNvbnM6IHVuZGVmaW5lZCxcbiAqICAgICAgICBoYXNfaW1nX2FwcGxlOiB0cnVlLFxuICogICAgICAgIC4uLlxuICogICAgICAgIG5vbl9xdWFsaWZpZWQ6IFwiMUYxNzBcIixcbiAqICAgICAgICB1bmlmaWVkOiBcIjFGMTcwLUZFMEZcIixcbiAqICAgICB9LFxuICogICAgIC4uLlxuICogICBdXG4gKiB9XG4gKi9cblxuLyoqXG4gKiBXcmFwcyByYXcgamFzb24gZW1vamkgZGF0YSwgc2VydmVzIGFzIGRhdGEgc291cmNlIGZvclxuICogZW1vamkgcGlja2VyIGNvbXBvbmVudHMuXG4gKlxuICogVXNhZ2U6XG4gKlxuICogICBpbXBvcnQgZGF0YSBmcm9tICcuLi8uLi8uLi9kYXRhL2FsbC5qc29uJ1xuICogICBsZXQgaW5kZXggPSBuZXcgRW1vamlJbmRleChkYXRhKVxuICpcbiAqL1xuZXhwb3J0IGNsYXNzIEVtb2ppSW5kZXgge1xuICAvKipcbiAgICogQ29uc3RydWN0b3IuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIC0gUmF3IGpzb24gZGF0YSwgc2VlIHRoZSBzdHJ1Y3R1cmUgYWJvdmUuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gYWRkaXRpb25hbCBvcHRpb25zLCBhcyBhbiBvYmplY3Q6XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGVtb2ppc1RvU2hvd0ZpbHRlciAtIG9wdGlvbmFsLCBmdW5jdGlvbiB0byBmaWx0ZXIgb3V0XG4gICAqICAgc29tZSBlbW9qaXMsIGZ1bmN0aW9uKGVtb2ppKSB7IHJldHVybiB0cnVlfGZhbHNlIH1cbiAgICogICB3aGVyZSBgZW1vamlgIGlzIGFuIHJhdyBlbW9qaSBvYmplY3QsIHNlZSBkYXRhLmVtb2ppcyBhYm92ZS5cbiAgICogQHBhcmFtIHtBcnJheX0gaW5jbHVkZSAtIG9wdGlvbmFsLCBhIGxpc3Qgb2YgY2F0ZWdvcnkgaWRzIHRvIGluY2x1ZGUuXG4gICAqIEBwYXJhbSB7QXJyYXl9IGV4Y2x1ZGUgLSBvcHRpb25hbCwgYSBsaXN0IG9mIGNhdGVnb3J5IGlkcyB0byBleGNsdWRlLlxuICAgKiBAcGFyYW0ge0FycmF5fSBjdXN0b20gLSBvcHRpb25hbCwgYSBsaXN0IGN1c3RvbSBlbW9qaXMsIGVhY2ggZW1vamkgaXNcbiAgICogICBhbiBvYmplY3QsIHNlZSBkYXRhLmVtb2ppcyBhYm92ZSBmb3IgZXhhbXBsZXMuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBkYXRhLFxuICAgIHtcbiAgICAgIGVtb2ppc1RvU2hvd0ZpbHRlcixcbiAgICAgIGluY2x1ZGUsXG4gICAgICBleGNsdWRlLFxuICAgICAgY3VzdG9tLFxuICAgICAgcmVjZW50LFxuICAgICAgcmVjZW50TGVuZ3RoID0gMjAsXG4gICAgfSA9IHt9LFxuICApIHtcbiAgICB0aGlzLl9kYXRhID0gdW5jb21wcmVzcyhkYXRhKVxuICAgIC8vIENhbGxiYWNrIHRvIGV4Y2x1ZGUgc3BlY2lmaWMgZW1vamlzXG4gICAgdGhpcy5fZW1vamlzRmlsdGVyID0gZW1vamlzVG9TaG93RmlsdGVyIHx8IG51bGxcbiAgICAvLyBDYXRlZ29yaWVzIHRvIGluY2x1ZGUgLyBleGNsdWRlXG4gICAgdGhpcy5faW5jbHVkZSA9IGluY2x1ZGUgfHwgbnVsbFxuICAgIHRoaXMuX2V4Y2x1ZGUgPSBleGNsdWRlIHx8IG51bGxcbiAgICAvLyBDdXN0b20gZW1vamlzXG4gICAgdGhpcy5fY3VzdG9tID0gY3VzdG9tIHx8IFtdXG4gICAgLy8gUmVjZW50IGVtb2ppc1xuICAgIC8vIFRPRE86IG1ha2UgcGFyYW1ldGVyIGNvbmZpZ3VyYWJsZVxuICAgIHRoaXMuX3JlY2VudCA9IHJlY2VudCB8fCBmcmVxdWVudGx5LmdldChyZWNlbnRMZW5ndGgpXG5cbiAgICB0aGlzLl9lbW9qaXMgPSB7fVxuICAgIHRoaXMuX25hdGl2ZUVtb2ppcyA9IHt9XG4gICAgdGhpcy5fZW1vdGljb25zID0ge31cblxuICAgIHRoaXMuX2NhdGVnb3JpZXMgPSBbXVxuICAgIHRoaXMuX3JlY2VudENhdGVnb3J5ID0geyBpZDogJ3JlY2VudCcsIG5hbWU6ICdSZWNlbnQnLCBlbW9qaXM6IFtdIH1cbiAgICB0aGlzLl9jdXN0b21DYXRlZ29yeSA9IHsgaWQ6ICdjdXN0b20nLCBuYW1lOiAnQ3VzdG9tJywgZW1vamlzOiBbXSB9XG4gICAgdGhpcy5fc2VhcmNoSW5kZXggPSB7fVxuICAgIHRoaXMuYnVpbGRJbmRleCgpXG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKVxuICB9XG5cbiAgYnVpbGRJbmRleCgpIHtcbiAgICB0aGlzLl9kYXRhLmNhdGVnb3JpZXMuZm9yRWFjaCgoY2F0ZWdvcnlEYXRhKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuaXNDYXRlZ29yeU5lZWRlZChjYXRlZ29yeURhdGEpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgbGV0IGNhdGVnb3J5ID0ge1xuICAgICAgICBpZDogY2F0ZWdvcnlEYXRhLmlkLFxuICAgICAgICBuYW1lOiBjYXRlZ29yeURhdGEubmFtZSxcbiAgICAgICAgZW1vamlzOiBbXSxcbiAgICAgIH1cbiAgICAgIGNhdGVnb3J5RGF0YS5lbW9qaXMuZm9yRWFjaCgoZW1vamlJZCkgPT4ge1xuICAgICAgICBsZXQgZW1vamkgPSB0aGlzLmFkZEVtb2ppKGVtb2ppSWQpXG4gICAgICAgIGlmIChlbW9qaSkge1xuICAgICAgICAgIGNhdGVnb3J5LmVtb2ppcy5wdXNoKGVtb2ppKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgaWYgKGNhdGVnb3J5LmVtb2ppcy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5fY2F0ZWdvcmllcy5wdXNoKGNhdGVnb3J5KVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5pc0NhdGVnb3J5TmVlZGVkKCdjdXN0b20nKSkge1xuICAgICAgaWYgKHRoaXMuX2N1c3RvbS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZvciAobGV0IGN1c3RvbUVtb2ppIG9mIHRoaXMuX2N1c3RvbSkge1xuICAgICAgICAgIHRoaXMuYWRkQ3VzdG9tRW1vamkoY3VzdG9tRW1vamkpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9jdXN0b21DYXRlZ29yeS5lbW9qaXMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuX2NhdGVnb3JpZXMucHVzaCh0aGlzLl9jdXN0b21DYXRlZ29yeSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc0NhdGVnb3J5TmVlZGVkKCdyZWNlbnQnKSkge1xuICAgICAgaWYgKHRoaXMuX3JlY2VudC5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5fcmVjZW50Lm1hcCgoaWQpID0+IHtcbiAgICAgICAgICBmb3IgKGxldCBjdXN0b21FbW9qaSBvZiB0aGlzLl9jdXN0b21DYXRlZ29yeS5lbW9qaXMpIHtcbiAgICAgICAgICAgIGlmIChjdXN0b21FbW9qaS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgdGhpcy5fcmVjZW50Q2F0ZWdvcnkuZW1vamlzLnB1c2goY3VzdG9tRW1vamkpXG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGhpcy5oYXNFbW9qaShpZCkpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlY2VudENhdGVnb3J5LmVtb2ppcy5wdXNoKHRoaXMuZW1vamkoaWQpKVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIC8vIEFkZCByZWNlbnQgY2F0ZWdvcnkgdG8gdGhlIHRvcFxuICAgICAgaWYgKHRoaXMuX3JlY2VudENhdGVnb3J5LmVtb2ppcy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5fY2F0ZWdvcmllcy51bnNoaWZ0KHRoaXMuX3JlY2VudENhdGVnb3J5KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIHRoZSBlbW9qaSBmcm9tIHRoZSBzdHJpbmdcbiAgICovXG4gIGZpbmRFbW9qaShlbW9qaSwgc2tpbikge1xuICAgIC8vIDEuIFBhcnNlIGFzIDplbW9qaV9uYW1lOnNraW4tdG9uZS14eDpcbiAgICBsZXQgbWF0Y2hlcyA9IGVtb2ppLm1hdGNoKENPTE9OU19SRUdFWClcblxuICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICBlbW9qaSA9IG1hdGNoZXNbMV1cbiAgICAgIGlmIChtYXRjaGVzWzJdKSB7XG4gICAgICAgIHNraW4gPSBwYXJzZUludChtYXRjaGVzWzJdLCAxMClcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAyLiBDaGVjayBpZiB0aGUgc3BlY2lmaWVkIGVtb2ppIGlzIGFuIGFsaWFzXG4gICAgaWYgKHRoaXMuX2RhdGEuYWxpYXNlcy5oYXNPd25Qcm9wZXJ0eShlbW9qaSkpIHtcbiAgICAgIGVtb2ppID0gdGhpcy5fZGF0YS5hbGlhc2VzW2Vtb2ppXVxuICAgIH1cblxuICAgIC8vIDMuIENoZWNrIGlmIHdlIGhhdmUgdGhlIHNwZWNpZmllZCBlbW9qaVxuICAgIGlmICh0aGlzLl9lbW9qaXMuaGFzT3duUHJvcGVydHkoZW1vamkpKSB7XG4gICAgICBsZXQgZW1vamlPYmplY3QgPSB0aGlzLl9lbW9qaXNbZW1vamldXG4gICAgICBpZiAoc2tpbikge1xuICAgICAgICByZXR1cm4gZW1vamlPYmplY3QuZ2V0U2tpbihza2luKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGVtb2ppT2JqZWN0XG4gICAgfVxuXG4gICAgLy8gNC4gQ2hlY2sgaWYgd2UgaGF2ZSB0aGUgc3BlY2lmaWVkIG5hdGl2ZSBlbW9qaVxuICAgIGlmICh0aGlzLl9uYXRpdmVFbW9qaXMuaGFzT3duUHJvcGVydHkoZW1vamkpKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbmF0aXZlRW1vamlzW2Vtb2ppXVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgY2F0ZWdvcmllcygpIHtcbiAgICByZXR1cm4gdGhpcy5fY2F0ZWdvcmllc1xuICB9XG5cbiAgZW1vamkoZW1vamlJZCkge1xuICAgIGlmICh0aGlzLl9kYXRhLmFsaWFzZXMuaGFzT3duUHJvcGVydHkoZW1vamlJZCkpIHtcbiAgICAgIGVtb2ppSWQgPSB0aGlzLl9kYXRhLmFsaWFzZXNbZW1vamlJZF1cbiAgICB9XG4gICAgbGV0IGVtb2ppID0gdGhpcy5fZW1vamlzW2Vtb2ppSWRdXG4gICAgaWYgKCFlbW9qaSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW4gbm90IGZpbmQgZW1vamkgYnkgaWQ6ICcgKyBlbW9qaUlkKVxuICAgIH1cbiAgICByZXR1cm4gZW1vamlcbiAgfVxuXG4gIGhhc0Vtb2ppKGVtb2ppSWQpIHtcbiAgICBpZiAodGhpcy5fZGF0YS5hbGlhc2VzLmhhc093blByb3BlcnR5KGVtb2ppSWQpKSB7XG4gICAgICBlbW9qaUlkID0gdGhpcy5fZGF0YS5hbGlhc2VzW2Vtb2ppSWRdXG4gICAgfVxuICAgIGlmICh0aGlzLl9lbW9qaXNbZW1vamlJZF0pIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgbmF0aXZlRW1vamkodW5pY29kZUVtb2ppKSB7XG4gICAgaWYgKHRoaXMuX25hdGl2ZUVtb2ppcy5oYXNPd25Qcm9wZXJ0eSh1bmljb2RlRW1vamkpKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbmF0aXZlRW1vamlzW3VuaWNvZGVFbW9qaV1cbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIHNlYXJjaCh2YWx1ZSwgbWF4UmVzdWx0cykge1xuICAgIG1heFJlc3VsdHMgfHwgKG1heFJlc3VsdHMgPSA3NSlcbiAgICBpZiAoIXZhbHVlLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgaWYgKHZhbHVlID09ICctJyB8fCB2YWx1ZSA9PSAnLTEnKSB7XG4gICAgICByZXR1cm4gW3RoaXMuZW1vamkoJy0xJyldXG4gICAgfVxuXG4gICAgbGV0IHZhbHVlcyA9IHZhbHVlLnRvTG93ZXJDYXNlKCkuc3BsaXQoL1tcXHN8LHxcXC18X10rLylcbiAgICBsZXQgYWxsUmVzdWx0cyA9IFtdXG5cbiAgICBpZiAodmFsdWVzLmxlbmd0aCA+IDIpIHtcbiAgICAgIHZhbHVlcyA9IFt2YWx1ZXNbMF0sIHZhbHVlc1sxXV1cbiAgICB9XG5cbiAgICBhbGxSZXN1bHRzID0gdmFsdWVzXG4gICAgICAubWFwKCh2YWx1ZSkgPT4ge1xuICAgICAgICAvLyBTdGFydCBzZWFyY2hpbiBpbiB0aGUgZ2xvYmFsIGxpc3Qgb2YgZW1vamlzXG4gICAgICAgIGxldCBlbW9qaXMgPSB0aGlzLl9lbW9qaXNcbiAgICAgICAgbGV0IGN1cnJlbnRJbmRleCA9IHRoaXMuX3NlYXJjaEluZGV4XG4gICAgICAgIGxldCBsZW5ndGggPSAwXG5cbiAgICAgICAgZm9yIChsZXQgY2hhckluZGV4ID0gMDsgY2hhckluZGV4IDwgdmFsdWUubGVuZ3RoOyBjaGFySW5kZXgrKykge1xuICAgICAgICAgIGNvbnN0IGNoYXIgPSB2YWx1ZVtjaGFySW5kZXhdXG4gICAgICAgICAgbGVuZ3RoKytcblxuICAgICAgICAgIGN1cnJlbnRJbmRleFtjaGFyXSB8fCAoY3VycmVudEluZGV4W2NoYXJdID0ge30pXG4gICAgICAgICAgY3VycmVudEluZGV4ID0gY3VycmVudEluZGV4W2NoYXJdXG5cbiAgICAgICAgICBpZiAoIWN1cnJlbnRJbmRleC5yZXN1bHRzKSB7XG4gICAgICAgICAgICBsZXQgc2NvcmVzID0ge31cbiAgICAgICAgICAgIGN1cnJlbnRJbmRleC5yZXN1bHRzID0gW11cbiAgICAgICAgICAgIGN1cnJlbnRJbmRleC5lbW9qaXMgPSB7fVxuXG4gICAgICAgICAgICBmb3IgKGxldCBlbW9qaUlkIGluIGVtb2ppcykge1xuICAgICAgICAgICAgICBsZXQgZW1vamkgPSBlbW9qaXNbZW1vamlJZF1cbiAgICAgICAgICAgICAgLy8gc2VhcmNoIGlzIGEgY29tbWEtc2VwYXJhdGVkIHN0cmluZyB3aXRoIHdvcmRzLCByZWxhdGVkXG4gICAgICAgICAgICAgIC8vIHRvIHRoZSBlbW9qaSwgZm9yIGV4YW1wbGU6XG4gICAgICAgICAgICAgIC8vIHNlYXJjaDogXCJzbWlsZXksc21pbGluZyxmYWNlLGpveSxoYWhhLDpkLDopLHNtaWxlLGZ1bm55LD0pLD0tKVwiLFxuICAgICAgICAgICAgICBsZXQgc2VhcmNoID0gZW1vamkuX2RhdGEuc2VhcmNoXG4gICAgICAgICAgICAgIGxldCBzdWIgPSB2YWx1ZS5zdWJzdHIoMCwgbGVuZ3RoKVxuICAgICAgICAgICAgICBsZXQgc3ViSW5kZXggPSBzZWFyY2guaW5kZXhPZihzdWIpXG4gICAgICAgICAgICAgIGlmIChzdWJJbmRleCAhPSAtMSkge1xuICAgICAgICAgICAgICAgIGxldCBzY29yZSA9IHN1YkluZGV4ICsgMVxuICAgICAgICAgICAgICAgIGlmIChzdWIgPT0gZW1vamlJZCkgc2NvcmUgPSAwXG5cbiAgICAgICAgICAgICAgICBjdXJyZW50SW5kZXgucmVzdWx0cy5wdXNoKGVtb2ppKVxuICAgICAgICAgICAgICAgIGN1cnJlbnRJbmRleC5lbW9qaXNbZW1vamlJZF0gPSBlbW9qaVxuXG4gICAgICAgICAgICAgICAgc2NvcmVzW2Vtb2ppSWRdID0gc2NvcmVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3VycmVudEluZGV4LnJlc3VsdHMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgICB2YXIgYVNjb3JlID0gc2NvcmVzW2EuaWRdLFxuICAgICAgICAgICAgICAgIGJTY29yZSA9IHNjb3Jlc1tiLmlkXVxuICAgICAgICAgICAgICByZXR1cm4gYVNjb3JlIC0gYlNjb3JlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIGNvbnRpbnVlIHNlYXJjaCBpbiB0aGUgcmVkdWNlZCBzZXQgb2YgZW1vamlzXG4gICAgICAgICAgZW1vamlzID0gY3VycmVudEluZGV4LmVtb2ppc1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjdXJyZW50SW5kZXgucmVzdWx0c1xuICAgICAgICAvLyBUaGUgXCJmaWx0ZXJcIiBjYWxsIHJlbW92ZXMgdW5kZWZpbmVkIHZhbHVlcyBmcm9tIGFsbFJlc3VsdHNcbiAgICAgICAgLy8gYXJyYXksIGZvciBleGFtcGxlLCBpZiB3ZSBoYXZlIFwidGVzdCBcIiAod2l0aCB0cmFpbGluZyBzcGFjZSksXG4gICAgICAgIC8vIHdlIHdpbGwgZ2V0IFwiW0FycmF5LCB1bmRlZmluZWRdXCIgZm9yIGFsbFJlc3VsdHMgYW5kIGFmdGVyXG4gICAgICAgIC8vIHRoZSBcImZpbHRlclwiIGNhbGwgaXQgd2lsbCB0dXJuIGludG8gXCJbQXJyYXldXCJcbiAgICAgIH0pXG4gICAgICAuZmlsdGVyKChhKSA9PiBhKVxuXG4gICAgdmFyIHJlc3VsdHMgPSBudWxsXG4gICAgaWYgKGFsbFJlc3VsdHMubGVuZ3RoID4gMSkge1xuICAgICAgcmVzdWx0cyA9IGludGVyc2VjdC5hcHBseShudWxsLCBhbGxSZXN1bHRzKVxuICAgIH0gZWxzZSBpZiAoYWxsUmVzdWx0cy5sZW5ndGgpIHtcbiAgICAgIHJlc3VsdHMgPSBhbGxSZXN1bHRzWzBdXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdHMgPSBbXVxuICAgIH1cbiAgICBpZiAocmVzdWx0cyAmJiByZXN1bHRzLmxlbmd0aCA+IG1heFJlc3VsdHMpIHtcbiAgICAgIHJlc3VsdHMgPSByZXN1bHRzLnNsaWNlKDAsIG1heFJlc3VsdHMpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzXG4gIH1cblxuICBhZGRDdXN0b21FbW9qaShjdXN0b21FbW9qaSkge1xuICAgIGxldCBlbW9qaURhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBjdXN0b21FbW9qaSwge1xuICAgICAgaWQ6IGN1c3RvbUVtb2ppLnNob3J0X25hbWVzWzBdLFxuICAgICAgY3VzdG9tOiB0cnVlLFxuICAgIH0pXG4gICAgaWYgKCFlbW9qaURhdGEuc2VhcmNoKSB7XG4gICAgICBlbW9qaURhdGEuc2VhcmNoID0gYnVpbGRTZWFyY2goZW1vamlEYXRhKVxuICAgIH1cbiAgICBsZXQgZW1vamkgPSBuZXcgRW1vamlEYXRhKGVtb2ppRGF0YSlcbiAgICB0aGlzLl9lbW9qaXNbZW1vamkuaWRdID0gZW1vamlcbiAgICB0aGlzLl9jdXN0b21DYXRlZ29yeS5lbW9qaXMucHVzaChlbW9qaSlcbiAgICByZXR1cm4gZW1vamlcbiAgfVxuXG4gIGFkZEVtb2ppKGVtb2ppSWQpIHtcbiAgICAvLyBXZSBleHBlY3QgdGhlIGNvcnJlY3QgZW1vamkgaWQgdGhhdCBpcyBwcmVzZW50IGluIHRoZSBlbW9qaXMgZGF0YS5cbiAgICBsZXQgZGF0YSA9IHRoaXMuX2RhdGEuZW1vamlzW2Vtb2ppSWRdXG5cbiAgICBpZiAoIXRoaXMuaXNFbW9qaU5lZWRlZChkYXRhKSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgbGV0IGVtb2ppID0gbmV3IEVtb2ppRGF0YShkYXRhKVxuICAgIHRoaXMuX2Vtb2ppc1tlbW9qaUlkXSA9IGVtb2ppXG4gICAgaWYgKGVtb2ppLm5hdGl2ZSkge1xuICAgICAgdGhpcy5fbmF0aXZlRW1vamlzW2Vtb2ppLm5hdGl2ZV0gPSBlbW9qaVxuICAgIH1cbiAgICBpZiAoZW1vamkuX3NraW5zKSB7XG4gICAgICBmb3IgKGxldCBpZHggaW4gZW1vamkuX3NraW5zKSB7XG4gICAgICAgIGxldCBza2luID0gZW1vamkuX3NraW5zW2lkeF1cbiAgICAgICAgaWYgKHNraW4ubmF0aXZlKSB7XG4gICAgICAgICAgdGhpcy5fbmF0aXZlRW1vamlzW3NraW4ubmF0aXZlXSA9IHNraW5cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChlbW9qaS5lbW90aWNvbnMpIHtcbiAgICAgIGVtb2ppLmVtb3RpY29ucy5mb3JFYWNoKChlbW90aWNvbikgPT4ge1xuICAgICAgICBpZiAodGhpcy5fZW1vdGljb25zW2Vtb3RpY29uXSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2Vtb3RpY29uc1tlbW90aWNvbl0gPSBlbW9qaUlkXG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gZW1vamlcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB3ZSBuZWVkIHRvIGluY2x1ZGUgZ2l2ZW4gY2F0ZWdvcnkuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjYXRlZ29yeSAtIFRoZSBjYXRlZ29yeSBvYmplY3QuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IC0gV2hldGhlciB0byBpbmNsdWRlIHRoZSBlbW9qaS5cbiAgICovXG4gIGlzQ2F0ZWdvcnlOZWVkZWQoY2F0ZWdvcnkpIHtcbiAgICBsZXQgaXNJbmNsdWRlZCA9XG4gICAgICB0aGlzLl9pbmNsdWRlICYmIHRoaXMuX2luY2x1ZGUubGVuZ3RoXG4gICAgICAgID8gdGhpcy5faW5jbHVkZS5pbmRleE9mKGNhdGVnb3J5LmlkKSA+IC0xXG4gICAgICAgIDogdHJ1ZVxuICAgIGxldCBpc0V4Y2x1ZGVkID1cbiAgICAgIHRoaXMuX2V4Y2x1ZGUgJiYgdGhpcy5fZXhjbHVkZS5sZW5ndGhcbiAgICAgICAgPyB0aGlzLl9leGNsdWRlLmluZGV4T2YoY2F0ZWdvcnkuaWQpID4gLTFcbiAgICAgICAgOiBmYWxzZVxuICAgIGlmICghaXNJbmNsdWRlZCB8fCBpc0V4Y2x1ZGVkKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB3ZSBuZWVkIHRvIGluY2x1ZGUgZ2l2ZW4gZW1vamkuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBlbW9qaSAtIFRoZSByYXcgZW1vamkgb2JqZWN0LlxuICAgKiBAcmV0dXJuIHtib29sZWFufSAtIFdoZXRoZXIgdG8gaW5jbHVkZSB0aGUgZW1vamkuXG4gICAqL1xuICBpc0Vtb2ppTmVlZGVkKGVtb2ppKSB7XG4gICAgaWYgKHRoaXMuX2Vtb2ppc0ZpbHRlcikge1xuICAgICAgcmV0dXJuIHRoaXMuX2Vtb2ppc0ZpbHRlcihlbW9qaSlcbiAgICB9XG4gICAgcmV0dXJuIHRydWVcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRW1vamlEYXRhIHtcbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIHRoaXMuX2RhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhKVxuICAgIHRoaXMuX3NraW5zID0gbnVsbFxuICAgIGlmICh0aGlzLl9kYXRhLnNraW5fdmFyaWF0aW9ucykge1xuICAgICAgdGhpcy5fc2tpbnMgPSBbXVxuICAgICAgZm9yICh2YXIgc2tpbklkeCBpbiBTS0lOUykge1xuICAgICAgICBsZXQgc2tpbktleSA9IFNLSU5TW3NraW5JZHhdXG4gICAgICAgIGxldCB2YXJpYXRpb25EYXRhID0gdGhpcy5fZGF0YS5za2luX3ZhcmlhdGlvbnNbc2tpbktleV1cbiAgICAgICAgbGV0IHNraW5EYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YSlcbiAgICAgICAgZm9yIChsZXQgayBpbiB2YXJpYXRpb25EYXRhKSB7XG4gICAgICAgICAgc2tpbkRhdGFba10gPSB2YXJpYXRpb25EYXRhW2tdXG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlIHNraW5EYXRhLnNraW5fdmFyaWF0aW9uc1xuICAgICAgICB0aGlzLl9za2lucy5wdXNoKG5ldyBFbW9qaURhdGEoc2tpbkRhdGEpKVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9zYW5pdGl6ZWQgPSBzYW5pdGl6ZSh0aGlzLl9kYXRhKVxuICAgIGZvciAobGV0IGtleSBpbiB0aGlzLl9zYW5pdGl6ZWQpIHtcbiAgICAgIHRoaXNba2V5XSA9IHRoaXMuX3Nhbml0aXplZFtrZXldXG4gICAgfVxuICAgIHRoaXMuc2hvcnRfbmFtZXMgPSB0aGlzLl9kYXRhLnNob3J0X25hbWVzXG4gICAgdGhpcy5zaG9ydF9uYW1lID0gdGhpcy5fZGF0YS5zaG9ydF9uYW1lc1swXVxuICAgIE9iamVjdC5mcmVlemUodGhpcylcbiAgfVxuXG4gIGdldFNraW4oc2tpbklkeCkge1xuICAgIGlmIChza2luSWR4ICYmIHNraW5JZHggIT0gJ25hdGl2ZScgJiYgdGhpcy5fc2tpbnMpIHtcbiAgICAgIHJldHVybiB0aGlzLl9za2luc1tza2luSWR4IC0gMV1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGdldFBvc2l0aW9uKCkge1xuICAgIGxldCBtdWx0aXBseSA9IDEwMCAvIChTSEVFVF9DT0xVTU5TIC0gMSksXG4gICAgICB4ID0gTWF0aC5yb3VuZChtdWx0aXBseSAqIHRoaXMuX2RhdGEuc2hlZXRfeCAqIDEwMCkgLyAxMDAsXG4gICAgICB5ID0gTWF0aC5yb3VuZChtdWx0aXBseSAqIHRoaXMuX2RhdGEuc2hlZXRfeSAqIDEwMCkgLyAxMDBcbiAgICByZXR1cm4gYCR7eH0lICR7eX0lYFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFbW9qaVZpZXcge1xuICAvKipcbiAgICogZW1vamkgLSBFbW9qaSB0byBkaXNwbGF5XG4gICAqIHNldCAtIHN0cmluZywgZW1vamkgc2V0IG5hbWVcbiAgICogbmF0aXZlIC0gYm9vbGVhbiwgd2hldGhlciB0byByZW5kZXIgbmF0aXZlIGVtb2ppXG4gICAqIGZhbGxiYWNrIC0gZmFsbGJhY2sgZnVuY3Rpb24gdG8gcmVuZGVyIG1pc3NpbmcgZW1vamksIG9wdGlvbmFsXG4gICAqIGVtb2ppVG9vbHRpcCAtIHdldGhlciB3ZSBuZWVkIHRvIHNob3cgdGhlIGVtb2ppIHRvb2x0aXAsIG9wdGlvbmFsXG4gICAqIGVtb2ppU2l6ZSAtIGVtb2ppIHNpemUgaW4gcGl4ZWxzLCBvcHRpb25hbFxuICAgKi9cbiAgY29uc3RydWN0b3IoZW1vamksIHNraW4sIHNldCwgbmF0aXZlLCBmYWxsYmFjaywgZW1vamlUb29sdGlwLCBlbW9qaVNpemUpIHtcbiAgICB0aGlzLl9lbW9qaSA9IGVtb2ppXG4gICAgdGhpcy5fbmF0aXZlID0gbmF0aXZlXG4gICAgdGhpcy5fc2tpbiA9IHNraW5cbiAgICB0aGlzLl9zZXQgPSBzZXRcbiAgICB0aGlzLl9mYWxsYmFjayA9IGZhbGxiYWNrXG5cbiAgICB0aGlzLmNhblJlbmRlciA9IHRoaXMuX2NhblJlbmRlcigpXG4gICAgdGhpcy5jc3NDbGFzcyA9IHRoaXMuX2Nzc0NsYXNzKClcbiAgICB0aGlzLmNzc1N0eWxlID0gdGhpcy5fY3NzU3R5bGUoZW1vamlTaXplKVxuICAgIHRoaXMuY29udGVudCA9IHRoaXMuX2NvbnRlbnQoKVxuICAgIHRoaXMudGl0bGUgPSBlbW9qaVRvb2x0aXAgPT09IHRydWUgPyBlbW9qaS5zaG9ydF9uYW1lIDogbnVsbFxuXG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKVxuICB9XG5cbiAgZ2V0RW1vamkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Vtb2ppLmdldFNraW4odGhpcy5fc2tpbilcbiAgfVxuXG4gIF9jYW5SZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuX2lzQ3VzdG9tKCkgfHwgdGhpcy5faXNOYXRpdmUoKSB8fCB0aGlzLl9oYXNFbW9qaSgpIHx8IHRoaXMuX2ZhbGxiYWNrXG4gICAgKVxuICB9XG5cbiAgX2Nzc0NsYXNzKCkge1xuICAgIHJldHVybiBbJ2Vtb2ppLXNldC0nICsgdGhpcy5fc2V0LCAnZW1vamktdHlwZS0nICsgdGhpcy5fZW1vamlUeXBlKCldXG4gIH1cblxuICBfY3NzU3R5bGUoZW1vamlTaXplKSB7XG4gICAgbGV0IGNzc1N0eWxlID0ge31cbiAgICBpZiAodGhpcy5faXNDdXN0b20oKSkge1xuICAgICAgY3NzU3R5bGUgPSB7XG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogJ3VybCgnICsgdGhpcy5nZXRFbW9qaSgpLl9kYXRhLmltYWdlVXJsICsgJyknLFxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogJzEwMCUnLFxuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5faGFzRW1vamkoKSAmJiAhdGhpcy5faXNOYXRpdmUoKSkge1xuICAgICAgY3NzU3R5bGUgPSB7XG4gICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogdGhpcy5nZXRFbW9qaSgpLmdldFBvc2l0aW9uKCksXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChlbW9qaVNpemUpIHtcbiAgICAgIGlmICh0aGlzLl9pc05hdGl2ZSgpKSB7XG4gICAgICAgIC8vIFNldCBmb250LXNpemUgZm9yIG5hdGl2ZSBlbW9qaS5cbiAgICAgICAgY3NzU3R5bGUgPSBPYmplY3QuYXNzaWduKGNzc1N0eWxlLCB7XG4gICAgICAgICAgLy8gZm9udC1zaXplIGlzIHVzZWQgZm9yIG5hdGl2ZSBlbW9qaSB3aGljaCB3ZSBuZWVkXG4gICAgICAgICAgLy8gdG8gc2NhbGUgd2l0aCAwLjggZmFjdG9yIHRvIGhhdmUgdGhlbSBsb29rIGFwcHJveGltYXRlbHlcbiAgICAgICAgICAvLyB0aGUgc2FtZSBzaXplIGFzIGltYWdlLWJhc2VkIGVtb2psLlxuICAgICAgICAgIGZvbnRTaXplOiBNYXRoLnJvdW5kKGVtb2ppU2l6ZSAqIDAuOCAqIDEwKSAvIDEwICsgJ3B4JyxcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFNldCB3aWR0aC9oZWlnaHQgZm9yIGltYWdlIGVtb2ppLlxuICAgICAgICBjc3NTdHlsZSA9IE9iamVjdC5hc3NpZ24oY3NzU3R5bGUsIHtcbiAgICAgICAgICB3aWR0aDogZW1vamlTaXplICsgJ3B4JyxcbiAgICAgICAgICBoZWlnaHQ6IGVtb2ppU2l6ZSArICdweCcsXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjc3NTdHlsZVxuICB9XG5cbiAgX2NvbnRlbnQoKSB7XG4gICAgaWYgKHRoaXMuX2lzQ3VzdG9tKCkpIHtcbiAgICAgIHJldHVybiAnJ1xuICAgIH1cbiAgICBpZiAodGhpcy5faXNOYXRpdmUoKSkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0RW1vamkoKS5uYXRpdmVcbiAgICB9XG4gICAgaWYgKHRoaXMuX2hhc0Vtb2ppKCkpIHtcbiAgICAgIHJldHVybiAnJ1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZmFsbGJhY2sgPyB0aGlzLl9mYWxsYmFjayh0aGlzLmdldEVtb2ppKCkpIDogbnVsbFxuICB9XG5cbiAgX2lzTmF0aXZlKCkge1xuICAgIHJldHVybiB0aGlzLl9uYXRpdmVcbiAgfVxuXG4gIF9pc0N1c3RvbSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRFbW9qaSgpLmN1c3RvbVxuICB9XG5cbiAgX2hhc0Vtb2ppKCkge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmdldEVtb2ppKCkuX2RhdGEgJiYgdGhpcy5nZXRFbW9qaSgpLl9kYXRhWydoYXNfaW1nXycgKyB0aGlzLl9zZXRdXG4gICAgKVxuICB9XG5cbiAgX2Vtb2ppVHlwZSgpIHtcbiAgICBpZiAodGhpcy5faXNDdXN0b20oKSkge1xuICAgICAgcmV0dXJuICdjdXN0b20nXG4gICAgfVxuICAgIGlmICh0aGlzLl9pc05hdGl2ZSgpKSB7XG4gICAgICByZXR1cm4gJ25hdGl2ZSdcbiAgICB9XG4gICAgaWYgKHRoaXMuX2hhc0Vtb2ppKCkpIHtcbiAgICAgIHJldHVybiAnaW1hZ2UnXG4gICAgfVxuICAgIHJldHVybiAnZmFsbGJhY2snXG4gIH1cbn1cblxuZnVuY3Rpb24gc2FuaXRpemUoZW1vamkpIHtcbiAgdmFyIHtcbiAgICAgIG5hbWUsXG4gICAgICBzaG9ydF9uYW1lcyxcbiAgICAgIHNraW5fdG9uZSxcbiAgICAgIHNraW5fdmFyaWF0aW9ucyxcbiAgICAgIGVtb3RpY29ucyxcbiAgICAgIHVuaWZpZWQsXG4gICAgICBjdXN0b20sXG4gICAgICBpbWFnZVVybCxcbiAgICB9ID0gZW1vamksXG4gICAgaWQgPSBlbW9qaS5pZCB8fCBzaG9ydF9uYW1lc1swXSxcbiAgICBjb2xvbnMgPSBgOiR7aWR9OmBcblxuICBpZiAoY3VzdG9tKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkLFxuICAgICAgbmFtZSxcbiAgICAgIGNvbG9ucyxcbiAgICAgIGVtb3RpY29ucyxcbiAgICAgIGN1c3RvbSxcbiAgICAgIGltYWdlVXJsLFxuICAgIH1cbiAgfVxuXG4gIGlmIChza2luX3RvbmUpIHtcbiAgICBjb2xvbnMgKz0gYDpza2luLXRvbmUtJHtza2luX3RvbmV9OmBcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaWQsXG4gICAgbmFtZSxcbiAgICBjb2xvbnMsXG4gICAgZW1vdGljb25zLFxuICAgIHVuaWZpZWQ6IHVuaWZpZWQudG9Mb3dlckNhc2UoKSxcbiAgICBza2luOiBza2luX3RvbmUgfHwgKHNraW5fdmFyaWF0aW9ucyA/IDEgOiBudWxsKSxcbiAgICBuYXRpdmU6IHVuaWZpZWRUb05hdGl2ZSh1bmlmaWVkKSxcbiAgfVxufVxuIiwiaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUnXG5cbmNvbnN0IERFRkFVTFRTID0gW1xuICAnKzEnLFxuICAnZ3Jpbm5pbmcnLFxuICAna2lzc2luZ19oZWFydCcsXG4gICdoZWFydF9leWVzJyxcbiAgJ2xhdWdoaW5nJyxcbiAgJ3N0dWNrX291dF90b25ndWVfd2lua2luZ19leWUnLFxuICAnc3dlYXRfc21pbGUnLFxuICAnam95JyxcbiAgJ3NjcmVhbScsXG4gICdkaXNhcHBvaW50ZWQnLFxuICAndW5hbXVzZWQnLFxuICAnd2VhcnknLFxuICAnc29iJyxcbiAgJ3N1bmdsYXNzZXMnLFxuICAnaGVhcnQnLFxuICAncG9vcCcsXG5dXG5cbmxldCBmcmVxdWVudGx5LCBpbml0aWFsaXplZFxubGV0IGRlZmF1bHRzID0ge31cblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgaW5pdGlhbGl6ZWQgPSB0cnVlXG4gIGZyZXF1ZW50bHkgPSBzdG9yZS5nZXQoJ2ZyZXF1ZW50bHknKVxufVxuXG5mdW5jdGlvbiBhZGQoZW1vamkpIHtcbiAgaWYgKCFpbml0aWFsaXplZCkgaW5pdCgpXG4gIHZhciB7IGlkIH0gPSBlbW9qaVxuXG4gIGZyZXF1ZW50bHkgfHwgKGZyZXF1ZW50bHkgPSBkZWZhdWx0cylcbiAgZnJlcXVlbnRseVtpZF0gfHwgKGZyZXF1ZW50bHlbaWRdID0gMClcbiAgZnJlcXVlbnRseVtpZF0gKz0gMVxuXG4gIHN0b3JlLnNldCgnbGFzdCcsIGlkKVxuICBzdG9yZS5zZXQoJ2ZyZXF1ZW50bHknLCBmcmVxdWVudGx5KVxufVxuXG5mdW5jdGlvbiBnZXQobWF4TnVtYmVyKSB7XG4gIGlmICghaW5pdGlhbGl6ZWQpIGluaXQoKVxuICBpZiAoIWZyZXF1ZW50bHkpIHtcbiAgICBkZWZhdWx0cyA9IHt9XG5cbiAgICBjb25zdCByZXN1bHQgPSBbXVxuXG4gICAgbGV0IGRlZmF1bHRMZW5ndGggPSBNYXRoLm1pbihtYXhOdW1iZXIsIERFRkFVTFRTLmxlbmd0aClcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRlZmF1bHRMZW5ndGg7IGkrKykge1xuICAgICAgZGVmYXVsdHNbREVGQVVMVFNbaV1dID0gZGVmYXVsdExlbmd0aCAtIGlcbiAgICAgIHJlc3VsdC5wdXNoKERFRkFVTFRTW2ldKVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIGNvbnN0IHF1YW50aXR5ID0gbWF4TnVtYmVyXG4gIGNvbnN0IGZyZXF1ZW50bHlLZXlzID0gW11cblxuICBmb3IgKGxldCBrZXkgaW4gZnJlcXVlbnRseSkge1xuICAgIGlmIChmcmVxdWVudGx5Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGZyZXF1ZW50bHlLZXlzLnB1c2goa2V5KVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHNvcnRlZCA9IGZyZXF1ZW50bHlLZXlzXG4gICAgLnNvcnQoKGEsIGIpID0+IGZyZXF1ZW50bHlbYV0gLSBmcmVxdWVudGx5W2JdKVxuICAgIC5yZXZlcnNlKClcbiAgY29uc3Qgc2xpY2VkID0gc29ydGVkLnNsaWNlKDAsIHF1YW50aXR5KVxuXG4gIGNvbnN0IGxhc3QgPSBzdG9yZS5nZXQoJ2xhc3QnKVxuXG4gIGlmIChsYXN0ICYmIHNsaWNlZC5pbmRleE9mKGxhc3QpID09IC0xKSB7XG4gICAgc2xpY2VkLnBvcCgpXG4gICAgc2xpY2VkLnB1c2gobGFzdClcbiAgfVxuXG4gIHJldHVybiBzbGljZWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgeyBhZGQsIGdldCB9XG4iLCJpbXBvcnQgc3RyaW5nRnJvbUNvZGVQb2ludCBmcm9tICcuLi9wb2x5ZmlsbHMvc3RyaW5nRnJvbUNvZGVQb2ludCdcblxuZnVuY3Rpb24gdW5pZmllZFRvTmF0aXZlKHVuaWZpZWQpIHtcbiAgdmFyIHVuaWNvZGVzID0gdW5pZmllZC5zcGxpdCgnLScpLFxuICAgIGNvZGVQb2ludHMgPSB1bmljb2Rlcy5tYXAoKHUpID0+IGAweCR7dX1gKVxuXG4gIHJldHVybiBzdHJpbmdGcm9tQ29kZVBvaW50LmFwcGx5KG51bGwsIGNvZGVQb2ludHMpXG59XG5cbmZ1bmN0aW9uIHVuaXEoYXJyKSB7XG4gIHJldHVybiBhcnIucmVkdWNlKChhY2MsIGl0ZW0pID0+IHtcbiAgICBpZiAoYWNjLmluZGV4T2YoaXRlbSkgPT09IC0xKSB7XG4gICAgICBhY2MucHVzaChpdGVtKVxuICAgIH1cbiAgICByZXR1cm4gYWNjXG4gIH0sIFtdKVxufVxuXG5mdW5jdGlvbiBpbnRlcnNlY3QoYSwgYikge1xuICBjb25zdCB1bmlxQSA9IHVuaXEoYSlcbiAgY29uc3QgdW5pcUIgPSB1bmlxKGIpXG5cbiAgcmV0dXJuIHVuaXFBLmZpbHRlcigoaXRlbSkgPT4gdW5pcUIuaW5kZXhPZihpdGVtKSA+PSAwKVxufVxuXG5mdW5jdGlvbiBkZWVwTWVyZ2UoYSwgYikge1xuICB2YXIgbyA9IHt9XG5cbiAgZm9yIChsZXQga2V5IGluIGEpIHtcbiAgICBsZXQgb3JpZ2luYWxWYWx1ZSA9IGFba2V5XSxcbiAgICAgIHZhbHVlID0gb3JpZ2luYWxWYWx1ZVxuXG4gICAgaWYgKGIuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgdmFsdWUgPSBiW2tleV1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgdmFsdWUgPSBkZWVwTWVyZ2Uob3JpZ2luYWxWYWx1ZSwgdmFsdWUpXG4gICAgfVxuXG4gICAgb1trZXldID0gdmFsdWVcbiAgfVxuXG4gIHJldHVybiBvXG59XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zb25pY2RvZS9tZWFzdXJlLXNjcm9sbGJhclxuZnVuY3Rpb24gbWVhc3VyZVNjcm9sbGJhcigpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PSAndW5kZWZpbmVkJykgcmV0dXJuIDBcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICBkaXYuc3R5bGUud2lkdGggPSAnMTAwcHgnXG4gIGRpdi5zdHlsZS5oZWlnaHQgPSAnMTAwcHgnXG4gIGRpdi5zdHlsZS5vdmVyZmxvdyA9ICdzY3JvbGwnXG4gIGRpdi5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSdcbiAgZGl2LnN0eWxlLnRvcCA9ICctOTk5OXB4J1xuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KVxuICBjb25zdCBzY3JvbGxiYXJXaWR0aCA9IGRpdi5vZmZzZXRXaWR0aCAtIGRpdi5jbGllbnRXaWR0aFxuICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRpdilcblxuICByZXR1cm4gc2Nyb2xsYmFyV2lkdGhcbn1cblxuZXhwb3J0IHsgdW5pcSwgaW50ZXJzZWN0LCBkZWVwTWVyZ2UsIHVuaWZpZWRUb05hdGl2ZSwgbWVhc3VyZVNjcm9sbGJhciB9XG4iLCJjb25zdCBFbW9qaVByb3BzID0ge1xuICBuYXRpdmU6IHtcbiAgICB0eXBlOiBCb29sZWFuLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICB9LFxuICB0b29sdGlwOiB7XG4gICAgdHlwZTogQm9vbGVhbixcbiAgICBkZWZhdWx0OiBmYWxzZSxcbiAgfSxcbiAgZmFsbGJhY2s6IHtcbiAgICB0eXBlOiBGdW5jdGlvbixcbiAgfSxcbiAgc2tpbjoge1xuICAgIHR5cGU6IE51bWJlcixcbiAgICBkZWZhdWx0OiAxLFxuICB9LFxuICBzZXQ6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgZGVmYXVsdDogJ2FwcGxlJyxcbiAgfSxcbiAgZW1vamk6IHtcbiAgICB0eXBlOiBbU3RyaW5nLCBPYmplY3RdLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICB9LFxufVxuXG5jb25zdCBQaWNrZXJQcm9wcyA9IHtcbiAgcGVyTGluZToge1xuICAgIHR5cGU6IE51bWJlcixcbiAgICBkZWZhdWx0OiA5LFxuICB9LFxuICBtYXhTZWFyY2hSZXN1bHRzOiB7XG4gICAgdHlwZTogTnVtYmVyLFxuICAgIGRlZmF1bHQ6IDc1LFxuICB9LFxuICBlbW9qaVNpemU6IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gICAgZGVmYXVsdDogMjQsXG4gIH0sXG4gIHRpdGxlOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGRlZmF1bHQ6ICdFbW9qaSBNYXJ04oSiJyxcbiAgfSxcbiAgZW1vamk6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgZGVmYXVsdDogJ2RlcGFydG1lbnRfc3RvcmUnLFxuICB9LFxuICBjb2xvcjoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBkZWZhdWx0OiAnI2FlNjVjNScsXG4gIH0sXG4gIHNldDoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBkZWZhdWx0OiAnYXBwbGUnLFxuICB9LFxuICBza2luOiB7XG4gICAgdHlwZTogTnVtYmVyLFxuICAgIGRlZmF1bHQ6IG51bGwsXG4gIH0sXG4gIGRlZmF1bHRTa2luOiB7XG4gICAgdHlwZTogTnVtYmVyLFxuICAgIGRlZmF1bHQ6IDEsXG4gIH0sXG4gIG5hdGl2ZToge1xuICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgZGVmYXVsdDogZmFsc2UsXG4gIH0sXG4gIGVtb2ppVG9vbHRpcDoge1xuICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgZGVmYXVsdDogZmFsc2UsXG4gIH0sXG4gIGF1dG9Gb2N1czoge1xuICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgZGVmYXVsdDogZmFsc2UsXG4gIH0sXG4gIGkxOG46IHtcbiAgICB0eXBlOiBPYmplY3QsXG4gICAgZGVmYXVsdCgpIHtcbiAgICAgIHJldHVybiB7fVxuICAgIH0sXG4gIH0sXG4gIHNob3dQcmV2aWV3OiB7XG4gICAgdHlwZTogQm9vbGVhbixcbiAgICBkZWZhdWx0OiB0cnVlLFxuICB9LFxuICBzaG93U2VhcmNoOiB7XG4gICAgdHlwZTogQm9vbGVhbixcbiAgICBkZWZhdWx0OiB0cnVlLFxuICB9LFxuICBzaG93Q2F0ZWdvcmllczoge1xuICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgZGVmYXVsdDogdHJ1ZSxcbiAgfSxcbiAgc2hvd1NraW5Ub25lczoge1xuICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgZGVmYXVsdDogdHJ1ZSxcbiAgfSxcbiAgaW5maW5pdGVTY3JvbGw6IHtcbiAgICB0eXBlOiBCb29sZWFuLFxuICAgIGRlZmF1bHQ6IHRydWUsXG4gIH0sXG4gIHBpY2tlclN0eWxlczoge1xuICAgIHR5cGU6IE9iamVjdCxcbiAgICBkZWZhdWx0KCkge1xuICAgICAgcmV0dXJuIHt9XG4gICAgfSxcbiAgfSxcbn1cblxuZXhwb3J0IHsgRW1vamlQcm9wcywgUGlja2VyUHJvcHMgfVxuIiwidmFyIE5BTUVTUEFDRSA9ICdlbW9qaS1tYXJ0J1xuXG5jb25zdCBfSlNPTiA9IEpTT05cblxudmFyIGlzTG9jYWxTdG9yYWdlU3VwcG9ydGVkID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgJ2xvY2FsU3RvcmFnZScgaW4gd2luZG93XG5cbmxldCBnZXR0ZXJcbmxldCBzZXR0ZXJcblxuZnVuY3Rpb24gc2V0SGFuZGxlcnMoaGFuZGxlcnMpIHtcbiAgaGFuZGxlcnMgfHwgKGhhbmRsZXJzID0ge30pXG5cbiAgZ2V0dGVyID0gaGFuZGxlcnMuZ2V0dGVyXG4gIHNldHRlciA9IGhhbmRsZXJzLnNldHRlclxufVxuXG5mdW5jdGlvbiBzZXROYW1lc3BhY2UobmFtZXNwYWNlKSB7XG4gIE5BTUVTUEFDRSA9IG5hbWVzcGFjZVxufVxuXG5mdW5jdGlvbiB1cGRhdGUoc3RhdGUpIHtcbiAgZm9yIChsZXQga2V5IGluIHN0YXRlKSB7XG4gICAgbGV0IHZhbHVlID0gc3RhdGVba2V5XVxuICAgIHNldChrZXksIHZhbHVlKVxuICB9XG59XG5cbmZ1bmN0aW9uIHNldChrZXksIHZhbHVlKSB7XG4gIGlmIChzZXR0ZXIpIHtcbiAgICBzZXR0ZXIoa2V5LCB2YWx1ZSlcbiAgfSBlbHNlIHtcbiAgICBpZiAoIWlzTG9jYWxTdG9yYWdlU3VwcG9ydGVkKSByZXR1cm5cbiAgICB0cnkge1xuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZVtgJHtOQU1FU1BBQ0V9LiR7a2V5fWBdID0gX0pTT04uc3RyaW5naWZ5KHZhbHVlKVxuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0KGtleSkge1xuICBpZiAoZ2V0dGVyKSB7XG4gICAgcmV0dXJuIGdldHRlcihrZXkpXG4gIH0gZWxzZSB7XG4gICAgaWYgKCFpc0xvY2FsU3RvcmFnZVN1cHBvcnRlZCkgcmV0dXJuXG4gICAgdHJ5IHtcbiAgICAgIHZhciB2YWx1ZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2VbYCR7TkFNRVNQQUNFfS4ke2tleX1gXVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIEpTT04ucGFyc2UodmFsdWUpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHsgdXBkYXRlLCBzZXQsIGdldCwgc2V0TmFtZXNwYWNlLCBzZXRIYW5kbGVycyB9XG4iLCIvLyBodHRwOi8vcGF1bGlyaXNoLmNvbS8yMDExL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtYW5pbWF0aW5nL1xuLy8gaHR0cDovL215Lm9wZXJhLmNvbS9lbW9sbGVyL2Jsb2cvMjAxMS8xMi8yMC9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWVyLWFuaW1hdGluZ1xuXG4vLyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGwgYnkgRXJpayBNw7ZsbGVyLiBmaXhlcyBmcm9tIFBhdWwgSXJpc2ggYW5kIFRpbm8gWmlqZGVsXG5cbi8vIE1JVCBsaWNlbnNlXG5cbnZhciBpc1dpbmRvd0F2YWlsYWJsZSA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG5cbmlzV2luZG93QXZhaWxhYmxlICYmXG4gIChmdW5jdGlvbigpIHtcbiAgICB2YXIgbGFzdFRpbWUgPSAwXG4gICAgdmFyIHZlbmRvcnMgPSBbJ21zJywgJ21veicsICd3ZWJraXQnLCAnbyddXG5cbiAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHZlbmRvcnMubGVuZ3RoICYmICF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lOyArK3gpIHtcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPVxuICAgICAgICB3aW5kb3dbdmVuZG9yc1t4XSArICdSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXVxuICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID1cbiAgICAgICAgd2luZG93W3ZlbmRvcnNbeF0gKyAnQ2FuY2VsQW5pbWF0aW9uRnJhbWUnXSB8fFxuICAgICAgICB3aW5kb3dbdmVuZG9yc1t4XSArICdDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXVxuICAgIH1cblxuICAgIGlmICghd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSlcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbihjYWxsYmFjaywgZWxlbWVudCkge1xuICAgICAgICB2YXIgY3VyclRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKVxuICAgICAgICB2YXIgdGltZVRvQ2FsbCA9IE1hdGgubWF4KDAsIDE2IC0gKGN1cnJUaW1lIC0gbGFzdFRpbWUpKVxuICAgICAgICB2YXIgaWQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICBjYWxsYmFjayhjdXJyVGltZSArIHRpbWVUb0NhbGwpXG4gICAgICAgIH0sIHRpbWVUb0NhbGwpXG5cbiAgICAgICAgbGFzdFRpbWUgPSBjdXJyVGltZSArIHRpbWVUb0NhbGxcbiAgICAgICAgcmV0dXJuIGlkXG4gICAgICB9XG5cbiAgICBpZiAoIXdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSlcbiAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uKGlkKSB7XG4gICAgICAgIGNsZWFyVGltZW91dChpZClcbiAgICAgIH1cbiAgfSkoKVxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3Z1ZV9fOyJdLCJzb3VyY2VSb290IjoiIn0=