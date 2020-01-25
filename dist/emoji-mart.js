(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["vue"], factory);
	else if(typeof exports === 'object')
		exports["EmojiMart"] = factory(require("vue"));
	else
		root["EmojiMart"] = factory(root["Vue"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_vue__) {
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Emoji.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Emoji.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_shared_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/shared-props */ "./src/utils/shared-props.js");
/* harmony import */ var _utils_emoji_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/emoji-data */ "./src/utils/emoji-data.js");

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
  props: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, _utils_shared_props__WEBPACK_IMPORTED_MODULE_1__["EmojiProps"], {
    data: {
      type: Object,
      required: true
    }
  }),
  computed: {
    view: function view() {
      return new _utils_emoji_data__WEBPACK_IMPORTED_MODULE_2__["EmojiView"](this.emojiObject, this.skin, this.set, this.native, this.fallback, this.tooltip, this.size);
    },
    sanitizedData: function sanitizedData() {
      return this.emojiObject._sanitized;
    },
    title: function title() {
      return this.tooltip ? this.emojiObject.short_name : null;
    },
    emojiObject: function emojiObject() {
      if (typeof this.emoji == 'string') {
        return this.data.findEmoji(this.emoji);
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Picker.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Picker.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vendor_raf_polyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vendor/raf-polyfill */ "./src/vendor/raf-polyfill.js");
/* harmony import */ var _vendor_raf_polyfill__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_vendor_raf_polyfill__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/store */ "./src/utils/store.js");
/* harmony import */ var _utils_frequently__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/frequently */ "./src/utils/frequently.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");
/* harmony import */ var _utils_shared_props__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/shared-props */ "./src/utils/shared-props.js");
/* harmony import */ var _anchors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./anchors */ "./src/components/anchors.vue");
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./category */ "./src/components/category.vue");
/* harmony import */ var _preview__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./preview */ "./src/components/preview.vue");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./search */ "./src/components/search.vue");
/* harmony import */ var vue_virtual_scroller__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vue-virtual-scroller */ "./node_modules/vue-virtual-scroller/dist/vue-virtual-scroller.esm.js");


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









/*
 * Note about `buffer` setting for DynamicScroller: this is a
 * fix for #49 - when clicking on the "Flags" category for the first
 * time, the category is not scrolled to the top of the component.
 * This is because the last category size is not calculated yet and
 * virtual scroller takes 'minItemSize' as category height.
 *
 * Virtual scroller (RecycleScroller component) uses `buffer` value
 * to  decide how many components to render intitially depending on
 * the scroll area size + buffer*2 (and all categories initially
 * have min size, 60px).
 *
 * By increasing buffer to 400px, we make the scroller to perform
 * size calculation for all categories and the following
 * scrollToItem() calls work correctly.
 */

 // import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'

var I18N = {
  search: 'Search',
  notfound: 'No Emoji Found',
  categories: {
    search: 'Search Results',
    recent: 'Frequently Used',
    smileys: 'Smileys & Emotion',
    people: 'People & Body',
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
          id: id++,
          category: category,
          show: !_this.searchEmojis && (_this.infiniteScroll || category == _this.activeCategory),
          mergedI18n: _this.mergedI18n,
          data: _this.data,
          emojisLength: category.emojis.length,
          emojiProps: _this.emojiProps
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/StaticPicker.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/StaticPicker.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vendor_raf_polyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vendor/raf-polyfill */ "./src/vendor/raf-polyfill.js");
/* harmony import */ var _vendor_raf_polyfill__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_vendor_raf_polyfill__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/store */ "./src/utils/store.js");
/* harmony import */ var _utils_frequently__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/frequently */ "./src/utils/frequently.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");
/* harmony import */ var _utils_shared_props__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/shared-props */ "./src/utils/shared-props.js");
/* harmony import */ var _anchors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./anchors */ "./src/components/anchors.vue");
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./category */ "./src/components/category.vue");
/* harmony import */ var _preview__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./preview */ "./src/components/preview.vue");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./search */ "./src/components/search.vue");
/* harmony import */ var vue_virtual_scroller__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vue-virtual-scroller */ "./node_modules/vue-virtual-scroller/dist/vue-virtual-scroller.esm.js");


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









/*
 * Note about `buffer` setting for DynamicScroller: this is a
 * fix for #49 - when clicking on the "Flags" category for the first
 * time, the category is not scrolled to the top of the component.
 * This is because the last category size is not calculated yet and
 * virtual scroller takes 'minItemSize' as category height.
 *
 * Virtual scroller (RecycleScroller component) uses `buffer` value
 * to  decide how many components to render intitially depending on
 * the scroll area size + buffer*2 (and all categories initially
 * have min size, 60px).
 *
 * By increasing buffer to 400px, we make the scroller to perform
 * size calculation for all categories and the following
 * scrollToItem() calls work correctly.
 */

 // import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'

var I18N = {
  search: 'Search',
  notfound: 'No Emoji Found',
  categories: {
    search: 'Search Results',
    recent: 'Frequently Used',
    smileys: 'Smileys & Emotion',
    people: 'People & Body',
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
    filteredCategories: function filteredCategories() {
      var _this = this;

      return this.categories.filter(function (category) {
        var isIncluded = _this.include && _this.include.length ? _this.include.indexOf(category.id) > -1 : true;
        var isExcluded = _this.exclude && _this.exclude.length ? _this.exclude.indexOf(category.id) > -1 : false;
        var hasEmojis = category.emojis.length > 0;

        if (_this.emojisToShowFilter) {
          hasEmojis = category.emojis.some(function (emoji) {
            return _this.emojisToShowFilter(_this.data.emojis[emoji] || emoji);
          });
        }

        return isIncluded && !isExcluded && hasEmojis;
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
    onScroll: function onScroll() {
      if (this.infiniteScroll && !this.waitingForPaint) {
        this.waitingForPaint = true;
        window.requestAnimationFrame(this.onScrollPaint.bind(this));
      }
    },
    onScrollPaint: function onScrollPaint() {
      this.waitingForPaint = false;
      var scrollTop = this.$refs.scroll.scrollTop,
          activeCategory = this.filteredCategories[0];

      for (var i = 0, l = this.filteredCategories.length; i < l; i++) {
        var category = this.filteredCategories[i],
            component = this.$refs.categories[i]; // The `-50` offset switches active category (selected in the
        // anchors bar) a bit eariler, before it actually reaches the top.

        if (component && component.$el.offsetTop - 50 > scrollTop) {
          break;
        }

        activeCategory = category;
      }

      this.activeCategory = activeCategory;
    },
    onAnchorClick: function onAnchorClick(category) {
      var _this2 = this;

      var i = this.filteredCategories.indexOf(category),
          component = this.$refs.categories[i],
          scrollToComponent = function scrollToComponent() {
        if (component) {
          var top = component.$el.offsetTop;

          if (category.first) {
            top = 0;
          }

          _this2.$refs.scroll.scrollTop = top;
        }
      };

      if (this.searchEmojis) {
        this.onSearch(null);
        this.$refs.search.clear();
        this.$nextTick(scrollToComponent);
      } else if (this.infiniteScroll) {
        scrollToComponent();
      } else {
        this.activeCategory = this.filteredCategories[i];
      }
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
/* harmony import */ var _Emoji__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Emoji */ "./src/components/Emoji.vue");
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
    Emoji: _Emoji__WEBPACK_IMPORTED_MODULE_1__["default"]
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
/* harmony import */ var _Emoji__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Emoji */ "./src/components/Emoji.vue");
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
    Emoji: _Emoji__WEBPACK_IMPORTED_MODULE_0__["default"],
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Emoji.vue?vue&type=template&id=534ad946&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Emoji.vue?vue&type=template&id=534ad946& ***!
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Picker.vue?vue&type=template&id=d16e9084&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Picker.vue?vue&type=template&id=d16e9084& ***!
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
          buffer: 400,
          "key-field": "id",
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/StaticPicker.vue?vue&type=template&id=2b16c268&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/StaticPicker.vue?vue&type=template&id=2b16c268& ***!
  \******************************************************************************************************************************************************************************************************/
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
    { staticClass: "emoji-mart emoji-mart-static", style: _vm.customStyles },
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
      _c(
        "div",
        {
          ref: "scroll",
          staticClass: "emoji-mart-scroll",
          on: { scroll: _vm.onScroll }
        },
        [
          _c("category", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.searchEmojis,
                expression: "searchEmojis"
              }
            ],
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
          _vm._l(_vm.filteredCategories, function(category) {
            return _c("category", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value:
                    !_vm.searchEmojis &&
                    (_vm.infiniteScroll || category == _vm.activeCategory),
                  expression:
                    "!searchEmojis && (infiniteScroll || category == activeCategory)"
                }
              ],
              key: category.id,
              ref: "categories",
              refInFor: true,
              attrs: {
                data: _vm.data,
                i18n: _vm.mergedI18n,
                id: category.id,
                name: category.name,
                emojis: category.emojis,
                "emoji-props": _vm.emojiProps
              }
            })
          })
        ],
        2
      ),
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
                  _c("emoji", {
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
                _c("emoji", {
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
                _c("emoji", {
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

/***/ "./src/components/Emoji.vue":
/*!**********************************!*\
  !*** ./src/components/Emoji.vue ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Emoji_vue_vue_type_template_id_534ad946___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Emoji.vue?vue&type=template&id=534ad946& */ "./src/components/Emoji.vue?vue&type=template&id=534ad946&");
/* harmony import */ var _Emoji_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Emoji.vue?vue&type=script&lang=js& */ "./src/components/Emoji.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Emoji_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Emoji_vue_vue_type_template_id_534ad946___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Emoji_vue_vue_type_template_id_534ad946___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Emoji.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/Emoji.vue?vue&type=script&lang=js&":
/*!***********************************************************!*\
  !*** ./src/components/Emoji.vue?vue&type=script&lang=js& ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Emoji_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--0!../../node_modules/vue-loader/lib??vue-loader-options!./Emoji.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Emoji.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Emoji_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/Emoji.vue?vue&type=template&id=534ad946&":
/*!*****************************************************************!*\
  !*** ./src/components/Emoji.vue?vue&type=template&id=534ad946& ***!
  \*****************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Emoji_vue_vue_type_template_id_534ad946___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./Emoji.vue?vue&type=template&id=534ad946& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Emoji.vue?vue&type=template&id=534ad946&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Emoji_vue_vue_type_template_id_534ad946___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Emoji_vue_vue_type_template_id_534ad946___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/Picker.vue":
/*!***********************************!*\
  !*** ./src/components/Picker.vue ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Picker_vue_vue_type_template_id_d16e9084___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Picker.vue?vue&type=template&id=d16e9084& */ "./src/components/Picker.vue?vue&type=template&id=d16e9084&");
/* harmony import */ var _Picker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Picker.vue?vue&type=script&lang=js& */ "./src/components/Picker.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Picker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Picker_vue_vue_type_template_id_d16e9084___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Picker_vue_vue_type_template_id_d16e9084___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Picker.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/Picker.vue?vue&type=script&lang=js&":
/*!************************************************************!*\
  !*** ./src/components/Picker.vue?vue&type=script&lang=js& ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Picker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--0!../../node_modules/vue-loader/lib??vue-loader-options!./Picker.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Picker.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Picker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/Picker.vue?vue&type=template&id=d16e9084&":
/*!******************************************************************!*\
  !*** ./src/components/Picker.vue?vue&type=template&id=d16e9084& ***!
  \******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Picker_vue_vue_type_template_id_d16e9084___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./Picker.vue?vue&type=template&id=d16e9084& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Picker.vue?vue&type=template&id=d16e9084&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Picker_vue_vue_type_template_id_d16e9084___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Picker_vue_vue_type_template_id_d16e9084___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/StaticPicker.vue":
/*!*****************************************!*\
  !*** ./src/components/StaticPicker.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StaticPicker_vue_vue_type_template_id_2b16c268___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StaticPicker.vue?vue&type=template&id=2b16c268& */ "./src/components/StaticPicker.vue?vue&type=template&id=2b16c268&");
/* harmony import */ var _StaticPicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StaticPicker.vue?vue&type=script&lang=js& */ "./src/components/StaticPicker.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _StaticPicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StaticPicker_vue_vue_type_template_id_2b16c268___WEBPACK_IMPORTED_MODULE_0__["render"],
  _StaticPicker_vue_vue_type_template_id_2b16c268___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/StaticPicker.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/StaticPicker.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./src/components/StaticPicker.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StaticPicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--0!../../node_modules/vue-loader/lib??vue-loader-options!./StaticPicker.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/StaticPicker.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StaticPicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/StaticPicker.vue?vue&type=template&id=2b16c268&":
/*!************************************************************************!*\
  !*** ./src/components/StaticPicker.vue?vue&type=template&id=2b16c268& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StaticPicker_vue_vue_type_template_id_2b16c268___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./StaticPicker.vue?vue&type=template&id=2b16c268& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/StaticPicker.vue?vue&type=template&id=2b16c268&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StaticPicker_vue_vue_type_template_id_2b16c268___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StaticPicker_vue_vue_type_template_id_2b16c268___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/*! exports provided: Anchors, Category, Preview, Search, Skins, Emoji, Picker, StaticPicker */
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

/* harmony import */ var _Emoji__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Emoji */ "./src/components/Emoji.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Emoji", function() { return _Emoji__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _Picker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Picker */ "./src/components/Picker.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Picker", function() { return _Picker__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _StaticPicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./StaticPicker */ "./src/components/StaticPicker.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StaticPicker", function() { return _StaticPicker__WEBPACK_IMPORTED_MODULE_7__["default"]; });










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
/*! exports provided: Picker, StaticPicker, Emoji, Anchors, Preview, Search, Category, Skins, EmojiIndex, EmojiView, EmojiData, sanitize, uncompress, store, frequently */
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

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StaticPicker", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["StaticPicker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Emoji", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["Emoji"]; });

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
  smileys: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path d=\"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10\"/><path d=\"M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0\"/></svg>",
  people: "<svg xmlns:svg=\"http://www.w3.org/2000/svg\" height=\"24\" width=\"24\" viewBox=\"0 0 24 24\"> <path id=\"path3814\" d=\"m 3.3591089,21.17726 c 0.172036,0.09385 4.265994,2.29837 8.8144451,2.29837 4.927767,0 8.670894,-2.211883 8.82782,-2.306019 0.113079,-0.06785 0.182268,-0.190051 0.182267,-0.321923 0,-3.03119 -0.929494,-5.804936 -2.617196,-7.810712 -1.180603,-1.403134 -2.661918,-2.359516 -4.295699,-2.799791 4.699118,-2.236258 3.102306,-9.28617162 -2.097191,-9.28617162 -5.1994978,0 -6.7963103,7.04991362 -2.097192,9.28617162 -1.6337821,0.440275 -3.1150971,1.396798 -4.2956991,2.799791 -1.687703,2.005776 -2.617196,4.779522 -2.617196,7.810712 1.2e-6,0.137378 0.075039,0.263785 0.195641,0.329572 z M 8.0439319,5.8308783 C 8.0439309,2.151521 12.492107,0.30955811 15.093491,2.9109411 17.694874,5.5123241 15.852911,9.9605006 12.173554,9.9605 9.8938991,9.9579135 8.0465186,8.1105332 8.0439319,5.8308783 Z m -1.688782,7.6894977 c 1.524535,-1.811449 3.5906601,-2.809035 5.8184041,-2.809035 2.227744,0 4.293869,0.997586 5.818404,2.809035 1.533639,1.822571 2.395932,4.339858 2.439152,7.108301 -0.803352,0.434877 -4.141636,2.096112 -8.257556,2.096112 -3.8062921,0 -7.3910861,-1.671043 -8.2573681,-2.104981 0.04505,-2.765017 0.906968,-5.278785 2.438964,-7.099432 z\" /> <path id=\"path3816\" d=\"M 12.173828 0.38867188 C 9.3198513 0.38867187 7.3770988 2.3672285 6.8652344 4.6308594 C 6.4218608 6.5916015 7.1153562 8.7676117 8.9648438 10.126953 C 7.6141249 10.677376 6.3550511 11.480944 5.3496094 12.675781 C 3.5629317 14.799185 2.6015625 17.701475 2.6015625 20.847656 C 2.6015654 21.189861 2.7894276 21.508002 3.0898438 21.671875 C 3.3044068 21.788925 7.4436239 24.039062 12.173828 24.039062 C 17.269918 24.039062 21.083568 21.776786 21.291016 21.652344 C 21.57281 21.483266 21.746097 21.176282 21.746094 20.847656 C 21.746094 17.701475 20.78277 14.799185 18.996094 12.675781 C 17.990455 11.480591 16.733818 10.675362 15.382812 10.125 C 17.231132 8.7655552 17.925675 6.5910701 17.482422 4.6308594 C 16.970557 2.3672285 15.027805 0.38867188 12.173828 0.38867188 z M 12.792969 2.3007812 C 13.466253 2.4161792 14.125113 2.7383941 14.695312 3.3085938 C 15.835712 4.4489931 15.985604 5.9473549 15.46875 7.1953125 C 14.951896 8.4432701 13.786828 9.3984378 12.173828 9.3984375 C 10.197719 9.3961954 8.607711 7.806187 8.6054688 5.8300781 C 8.6054683 4.2170785 9.5606362 3.0520102 10.808594 2.5351562 C 11.432573 2.2767293 12.119685 2.1853833 12.792969 2.3007812 z M 12.173828 11.273438 C 14.233647 11.273438 16.133674 12.185084 17.5625 13.882812 C 18.93069 15.508765 19.698347 17.776969 19.808594 20.283203 C 18.807395 20.800235 15.886157 22.162109 12.173828 22.162109 C 8.7614632 22.162109 5.6245754 20.787069 4.5390625 20.265625 C 4.6525896 17.766717 5.4203315 15.504791 6.7851562 13.882812 C 8.2139827 12.185084 10.11401 11.273438 12.173828 11.273438 z \" /> </svg>",
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
  has_img_facebook: 'h',
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
/*! exports provided: EmojiIndex, EmojiData, EmojiView, sanitize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmojiIndex", function() { return EmojiIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmojiData", function() { return EmojiData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmojiView", function() { return EmojiView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sanitize", function() { return sanitize; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./src/utils/index.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ "./src/utils/data.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _frequently__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./frequently */ "./src/utils/frequently.js");





var SHEET_COLUMNS = 56;
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
 *      name: "Smileys & Emotion",
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
 *        has_img_facebook: true,
 *        has_img_google: true,
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
 *              has_img_facebook: true,
 *              has_img_google: true,
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
 *   import data from '../data/all.json'
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
        if (!_this.isCategoryNeeded(categoryData.id)) {
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
     * @param {string} category_id - The category id.
     * @return {boolean} - Whether to include the emoji.
     */

  }, {
    key: "isCategoryNeeded",
    value: function isCategoryNeeded(category_id) {
      var isIncluded = this._include && this._include.length ? this._include.indexOf(category_id) > -1 : true;
      var isExcluded = this._exclude && this._exclude.length ? this._exclude.indexOf(category_id) > -1 : false;

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
      var multiply = 100 / SHEET_COLUMNS,
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
          backgroundSize: '100%',
          width: emojiSize + 'px',
          height: emojiSize + 'px'
        };
      } else if (this._hasEmoji() && !this._isNative()) {
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
      if (!this.getEmoji()._data) {
        // Return false if we have no data.
        return false;
      }

      var hasImage = this.getEmoji()._data['has_img_' + this._set];

      if (hasImage === undefined) {
        // If there is no has_img_xxx in the data, we are working with
        // specific data file, like facebook.json, so we assume all
        // emojis are available (the :set setting for picker should
        // match the data file).
        return true;
      } // Otherwise, we are using all.json and can switch between different
      // sets - in this case the `has_img_{set_name}` is a boolean that
      // indicates if there is such image or not for a given set.


      return hasImage;
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
  },
  size: {
    type: Number,
    default: null
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9FbW9qaU1hcnQvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0Vtb2ppTWFydC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0U3ByZWFkLmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvc3JjL2NvbXBvbmVudHMvRW1vamkudnVlIiwid2VicGFjazovL0Vtb2ppTWFydC9zcmMvY29tcG9uZW50cy9QaWNrZXIudnVlIiwid2VicGFjazovL0Vtb2ppTWFydC9zcmMvY29tcG9uZW50cy9TdGF0aWNQaWNrZXIudnVlIiwid2VicGFjazovL0Vtb2ppTWFydC9zcmMvY29tcG9uZW50cy9hbmNob3JzLnZ1ZSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvc3JjL2NvbXBvbmVudHMvY2F0ZWdvcnkudnVlIiwid2VicGFjazovL0Vtb2ppTWFydC9zcmMvY29tcG9uZW50cy9wcmV2aWV3LnZ1ZSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvc3JjL2NvbXBvbmVudHMvc2VhcmNoLnZ1ZSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvc3JjL2NvbXBvbmVudHMvc2tpbnMudnVlIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL0Vtb2ppLnZ1ZT8wNTQ1Iiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL1BpY2tlci52dWU/YzNkNyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9TdGF0aWNQaWNrZXIudnVlP2YwOWUiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvYW5jaG9ycy52dWU/MzRkYSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9jYXRlZ29yeS52dWU/NDI0YSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9wcmV2aWV3LnZ1ZT9mNzE4Iiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL3NlYXJjaC52dWU/MmQyYiIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9za2lucy52dWU/YzM0OSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL25vZGVfbW9kdWxlcy92dWUtdmlydHVhbC1zY3JvbGxlci9kaXN0L3Z1ZS12aXJ0dWFsLXNjcm9sbGVyLmVzbS5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL0Vtb2ppLnZ1ZSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9FbW9qaS52dWU/N2EzOCIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9FbW9qaS52dWU/OTRhZCIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9QaWNrZXIudnVlIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL1BpY2tlci52dWU/YzgyNyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9QaWNrZXIudnVlP2YwZjIiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvU3RhdGljUGlja2VyLnZ1ZSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9TdGF0aWNQaWNrZXIudnVlP2EwNTYiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvU3RhdGljUGlja2VyLnZ1ZT83YzBhIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL2FuY2hvcnMudnVlIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL2FuY2hvcnMudnVlP2FjY2EiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvYW5jaG9ycy52dWU/MWI5OCIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9jYXRlZ29yeS52dWUiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvY2F0ZWdvcnkudnVlPzIzOTUiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvY2F0ZWdvcnkudnVlPzczYjUiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvcHJldmlldy52dWUiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvcHJldmlldy52dWU/MjNhOSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9wcmV2aWV3LnZ1ZT9lMzU5Iiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL3NlYXJjaC52dWUiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvc2VhcmNoLnZ1ZT8xM2YxIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL3NlYXJjaC52dWU/ZTU4NiIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9za2lucy52dWUiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvc2tpbnMudnVlP2Q3YzQiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvc2tpbnMudnVlPzk5NWUiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9wb2x5ZmlsbHMvc3RyaW5nRnJvbUNvZGVQb2ludC5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvc3Zncy9pbmRleC5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvdXRpbHMvZGF0YS5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvdXRpbHMvZW1vamktZGF0YS5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvdXRpbHMvZnJlcXVlbnRseS5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvdXRpbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL3V0aWxzL3NoYXJlZC1wcm9wcy5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvdXRpbHMvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL3ZlbmRvci9yYWYtcG9seWZpbGwuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0L2V4dGVybmFsIHtcInJvb3RcIjpcIlZ1ZVwiLFwiY29tbW9uanMyXCI6XCJ2dWVcIixcImNvbW1vbmpzXCI6XCJ2dWVcIixcImFtZFwiOlwidnVlXCJ9Il0sIm5hbWVzIjpbIl9TdHJpbmciLCJTdHJpbmciLCJmcm9tQ29kZVBvaW50Iiwic3RyaW5nRnJvbUNvZGVQb2ludCIsIk1BWF9TSVpFIiwiY29kZVVuaXRzIiwiaGlnaFN1cnJvZ2F0ZSIsImxvd1N1cnJvZ2F0ZSIsImluZGV4IiwibGVuZ3RoIiwiYXJndW1lbnRzIiwicmVzdWx0IiwiY29kZVBvaW50IiwiTnVtYmVyIiwiaXNGaW5pdGUiLCJNYXRoIiwiZmxvb3IiLCJSYW5nZUVycm9yIiwicHVzaCIsImZyb21DaGFyQ29kZSIsImFwcGx5IiwiU1ZHcyIsImFjdGl2aXR5IiwiY3VzdG9tIiwiZmxhZ3MiLCJmb29kcyIsIm5hdHVyZSIsIm9iamVjdHMiLCJzbWlsZXlzIiwicGVvcGxlIiwicGxhY2VzIiwicmVjZW50Iiwic3ltYm9scyIsIm1hcHBpbmciLCJuYW1lIiwidW5pZmllZCIsIm5vbl9xdWFsaWZpZWQiLCJoYXNfaW1nX2FwcGxlIiwiaGFzX2ltZ19nb29nbGUiLCJoYXNfaW1nX3R3aXR0ZXIiLCJoYXNfaW1nX2ZhY2Vib29rIiwia2V5d29yZHMiLCJzaGVldCIsImVtb3RpY29ucyIsInRleHQiLCJzaG9ydF9uYW1lcyIsImFkZGVkX2luIiwiYnVpbGRTZWFyY2giLCJlbW9qaSIsInNlYXJjaCIsImFkZFRvU2VhcmNoIiwic3RyaW5ncyIsInNwbGl0IiwiQXJyYXkiLCJpc0FycmF5IiwiZm9yRWFjaCIsInN0cmluZyIsInMiLCJ0b0xvd2VyQ2FzZSIsImluZGV4T2YiLCJqb2luIiwiY29tcHJlc3MiLCJmaWx0ZXIiLCJzaG9ydF9uYW1lIiwic2hlZXRfeCIsInNoZWV0X3kiLCJwYXJzZUludCIsImtleSIsInZhbHVlIiwiZGVlcEZyZWV6ZSIsIm9iamVjdCIsInByb3BOYW1lcyIsIk9iamVjdCIsImdldE93blByb3BlcnR5TmFtZXMiLCJmcmVlemUiLCJ1bmNvbXByZXNzIiwiZGF0YSIsImNvbXByZXNzZWQiLCJpZCIsImVtb2ppcyIsInVuc2hpZnQiLCJ0b0ZpeGVkIiwibW9kdWxlIiwiZXhwb3J0cyIsIlNIRUVUX0NPTFVNTlMiLCJDT0xPTlNfUkVHRVgiLCJTS0lOUyIsIkVtb2ppSW5kZXgiLCJlbW9qaXNUb1Nob3dGaWx0ZXIiLCJpbmNsdWRlIiwiZXhjbHVkZSIsInJlY2VudExlbmd0aCIsIl9kYXRhIiwiX2Vtb2ppc0ZpbHRlciIsIl9pbmNsdWRlIiwiX2V4Y2x1ZGUiLCJfY3VzdG9tIiwiX3JlY2VudCIsImZyZXF1ZW50bHkiLCJnZXQiLCJfZW1vamlzIiwiX25hdGl2ZUVtb2ppcyIsIl9lbW90aWNvbnMiLCJfY2F0ZWdvcmllcyIsIl9yZWNlbnRDYXRlZ29yeSIsIl9jdXN0b21DYXRlZ29yeSIsIl9zZWFyY2hJbmRleCIsImJ1aWxkSW5kZXgiLCJjYXRlZ29yaWVzIiwiY2F0ZWdvcnlEYXRhIiwiaXNDYXRlZ29yeU5lZWRlZCIsImNhdGVnb3J5IiwiZW1vamlJZCIsImFkZEVtb2ppIiwiY3VzdG9tRW1vamkiLCJhZGRDdXN0b21FbW9qaSIsIm1hcCIsImhhc0Vtb2ppIiwic2tpbiIsIm1hdGNoZXMiLCJtYXRjaCIsImFsaWFzZXMiLCJoYXNPd25Qcm9wZXJ0eSIsImVtb2ppT2JqZWN0IiwiZ2V0U2tpbiIsIkVycm9yIiwidW5pY29kZUVtb2ppIiwibWF4UmVzdWx0cyIsInZhbHVlcyIsImFsbFJlc3VsdHMiLCJjdXJyZW50SW5kZXgiLCJjaGFySW5kZXgiLCJjaGFyIiwicmVzdWx0cyIsInNjb3JlcyIsInN1YiIsInN1YnN0ciIsInN1YkluZGV4Iiwic2NvcmUiLCJzb3J0IiwiYSIsImIiLCJhU2NvcmUiLCJiU2NvcmUiLCJpbnRlcnNlY3QiLCJzbGljZSIsImVtb2ppRGF0YSIsImFzc2lnbiIsIkVtb2ppRGF0YSIsImlzRW1vamlOZWVkZWQiLCJuYXRpdmUiLCJfc2tpbnMiLCJpZHgiLCJlbW90aWNvbiIsImNhdGVnb3J5X2lkIiwiaXNJbmNsdWRlZCIsImlzRXhjbHVkZWQiLCJza2luX3ZhcmlhdGlvbnMiLCJza2luSWR4Iiwic2tpbktleSIsInZhcmlhdGlvbkRhdGEiLCJza2luRGF0YSIsImsiLCJfc2FuaXRpemVkIiwic2FuaXRpemUiLCJtdWx0aXBseSIsIngiLCJyb3VuZCIsInkiLCJFbW9qaVZpZXciLCJzZXQiLCJmYWxsYmFjayIsImVtb2ppVG9vbHRpcCIsImVtb2ppU2l6ZSIsIl9lbW9qaSIsIl9uYXRpdmUiLCJfc2tpbiIsIl9zZXQiLCJfZmFsbGJhY2siLCJjYW5SZW5kZXIiLCJfY2FuUmVuZGVyIiwiY3NzQ2xhc3MiLCJfY3NzQ2xhc3MiLCJjc3NTdHlsZSIsIl9jc3NTdHlsZSIsImNvbnRlbnQiLCJfY29udGVudCIsInRpdGxlIiwiX2lzQ3VzdG9tIiwiX2lzTmF0aXZlIiwiX2hhc0Vtb2ppIiwiX2Vtb2ppVHlwZSIsImJhY2tncm91bmRJbWFnZSIsImdldEVtb2ppIiwiaW1hZ2VVcmwiLCJiYWNrZ3JvdW5kU2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiZ2V0UG9zaXRpb24iLCJmb250U2l6ZSIsImhhc0ltYWdlIiwidW5kZWZpbmVkIiwic2tpbl90b25lIiwiY29sb25zIiwidW5pZmllZFRvTmF0aXZlIiwiREVGQVVMVFMiLCJpbml0aWFsaXplZCIsImRlZmF1bHRzIiwiaW5pdCIsInN0b3JlIiwiYWRkIiwibWF4TnVtYmVyIiwiZGVmYXVsdExlbmd0aCIsIm1pbiIsImkiLCJxdWFudGl0eSIsImZyZXF1ZW50bHlLZXlzIiwic29ydGVkIiwicmV2ZXJzZSIsInNsaWNlZCIsImxhc3QiLCJwb3AiLCJ1bmljb2RlcyIsImNvZGVQb2ludHMiLCJ1IiwidW5pcSIsImFyciIsInJlZHVjZSIsImFjYyIsIml0ZW0iLCJ1bmlxQSIsInVuaXFCIiwiZGVlcE1lcmdlIiwibyIsIm9yaWdpbmFsVmFsdWUiLCJtZWFzdXJlU2Nyb2xsYmFyIiwiZG9jdW1lbnQiLCJkaXYiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJvdmVyZmxvdyIsInBvc2l0aW9uIiwidG9wIiwiYm9keSIsImFwcGVuZENoaWxkIiwic2Nyb2xsYmFyV2lkdGgiLCJvZmZzZXRXaWR0aCIsImNsaWVudFdpZHRoIiwicmVtb3ZlQ2hpbGQiLCJFbW9qaVByb3BzIiwidHlwZSIsIkJvb2xlYW4iLCJkZWZhdWx0IiwidG9vbHRpcCIsIkZ1bmN0aW9uIiwicmVxdWlyZWQiLCJzaXplIiwiUGlja2VyUHJvcHMiLCJwZXJMaW5lIiwibWF4U2VhcmNoUmVzdWx0cyIsImNvbG9yIiwiZGVmYXVsdFNraW4iLCJhdXRvRm9jdXMiLCJpMThuIiwic2hvd1ByZXZpZXciLCJzaG93U2VhcmNoIiwic2hvd0NhdGVnb3JpZXMiLCJzaG93U2tpblRvbmVzIiwiaW5maW5pdGVTY3JvbGwiLCJwaWNrZXJTdHlsZXMiLCJOQU1FU1BBQ0UiLCJfSlNPTiIsIkpTT04iLCJpc0xvY2FsU3RvcmFnZVN1cHBvcnRlZCIsIndpbmRvdyIsImdldHRlciIsInNldHRlciIsInNldEhhbmRsZXJzIiwiaGFuZGxlcnMiLCJzZXROYW1lc3BhY2UiLCJuYW1lc3BhY2UiLCJ1cGRhdGUiLCJzdGF0ZSIsImxvY2FsU3RvcmFnZSIsInN0cmluZ2lmeSIsImUiLCJwYXJzZSIsImlzV2luZG93QXZhaWxhYmxlIiwibGFzdFRpbWUiLCJ2ZW5kb3JzIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJjYWxsYmFjayIsImVsZW1lbnQiLCJjdXJyVGltZSIsIkRhdGUiLCJnZXRUaW1lIiwidGltZVRvQ2FsbCIsIm1heCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFD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QUNBLHlDQUF5QyxPQUFPO0FBQ2hEO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0Esb0NBQW9DLGVBQWU7QUFDbkQ7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsY0FBYztBQUNsRCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1GQUFtRjtBQUNuRjtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsZUFBZSwwQ0FBRztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUzs7QUFFVDtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSzs7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UjtBQUNELEtBRlEsRUFFTkEsVUFGTSxDQUFUO0FBSUFULFlBQVEsR0FBR00sUUFBUSxHQUFHRyxVQUF0QjtBQUNBLFdBQU81TixFQUFQO0FBQ0QsR0FURDtBQVdGLE1BQUksQ0FBQ3FNLE1BQU0sQ0FBQ2lCLG9CQUFaLEVBQ0VqQixNQUFNLENBQUNpQixvQkFBUCxHQUE4QixVQUFTdE4sRUFBVCxFQUFhO0FBQ3pDK04sZ0JBQVksQ0FBQy9OLEVBQUQsQ0FBWjtBQUNELEdBRkQ7QUFHSCxDQTVCRCxFQURGLEM7Ozs7Ozs7Ozs7O0FDVEEsaUQiLCJmaWxlIjoiZW1vamktbWFydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInZ1ZVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJ2dWVcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiRW1vamlNYXJ0XCJdID0gZmFjdG9yeShyZXF1aXJlKFwidnVlXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJFbW9qaU1hcnRcIl0gPSBmYWN0b3J5KHJvb3RbXCJWdWVcIl0pO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfdnVlX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcnIyW2ldID0gYXJyW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBhcnIyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aG91dEhvbGVzOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3M7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5OyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaXRlcikgPT09IFwiW29iamVjdCBBcmd1bWVudHNdXCIpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXk7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2VcIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlU3ByZWFkOyIsInZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCIuL2RlZmluZVByb3BlcnR5XCIpO1xuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuICAgIHZhciBvd25LZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcblxuICAgIGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgb3duS2V5cyA9IG93bktleXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKS5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIHN5bSkuZW51bWVyYWJsZTtcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBvd25LZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX29iamVjdFNwcmVhZDsiLCJ2YXIgYXJyYXlXaXRob3V0SG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhvdXRIb2xlc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheVwiKTtcblxudmFyIG5vbkl0ZXJhYmxlU3ByZWFkID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVTcHJlYWRcIik7XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdG9Db25zdW1hYmxlQXJyYXk7IiwiZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mMiA9IGZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZjIgPSBmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2YyKG9iaik7IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBfdHlwZW9mMihTeW1ib2wuaXRlcmF0b3IpID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBfdHlwZW9mMihvYmopO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiBfdHlwZW9mMihvYmopO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiPHRlbXBsYXRlPlxuICA8c3BhblxuICAgIHYtaWY9XCJ2aWV3LmNhblJlbmRlclwiXG4gICAgOnRpdGxlPVwidmlldy50aXRsZVwiXG4gICAgOmRhdGEtdGl0bGU9XCJ0aXRsZVwiXG4gICAgY2xhc3M9XCJlbW9qaS1tYXJ0LWVtb2ppXCJcbiAgICBAbW91c2VlbnRlcj1cIm9uTW91c2VFbnRlclwiXG4gICAgQG1vdXNlbGVhdmU9XCJvbk1vdXNlTGVhdmVcIlxuICAgIEBjbGljaz1cIm9uQ2xpY2tcIlxuICA+XG4gICAgPHNwYW4gOmNsYXNzPVwidmlldy5jc3NDbGFzc1wiIDpzdHlsZT1cInZpZXcuY3NzU3R5bGVcIj57e1xuICAgICAgdmlldy5jb250ZW50XG4gICAgfX08L3NwYW4+XG4gIDwvc3Bhbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBFbW9qaVByb3BzIH0gZnJvbSAnLi4vdXRpbHMvc2hhcmVkLXByb3BzJ1xuaW1wb3J0IHsgRW1vamlWaWV3IH0gZnJvbSAnLi4vdXRpbHMvZW1vamktZGF0YSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczoge1xuICAgIC4uLkVtb2ppUHJvcHMsXG4gICAgZGF0YToge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICB2aWV3KCkge1xuICAgICAgcmV0dXJuIG5ldyBFbW9qaVZpZXcoXG4gICAgICAgIHRoaXMuZW1vamlPYmplY3QsXG4gICAgICAgIHRoaXMuc2tpbixcbiAgICAgICAgdGhpcy5zZXQsXG4gICAgICAgIHRoaXMubmF0aXZlLFxuICAgICAgICB0aGlzLmZhbGxiYWNrLFxuICAgICAgICB0aGlzLnRvb2x0aXAsXG4gICAgICAgIHRoaXMuc2l6ZSxcbiAgICAgIClcbiAgICB9LFxuICAgIHNhbml0aXplZERhdGEoKSB7XG4gICAgICByZXR1cm4gdGhpcy5lbW9qaU9iamVjdC5fc2FuaXRpemVkXG4gICAgfSxcbiAgICB0aXRsZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLnRvb2x0aXAgPyB0aGlzLmVtb2ppT2JqZWN0LnNob3J0X25hbWUgOiBudWxsXG4gICAgfSxcbiAgICBlbW9qaU9iamVjdCgpIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5lbW9qaSA9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmZpbmRFbW9qaSh0aGlzLmVtb2ppKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW1vamlcbiAgICAgIH1cbiAgICB9LFxuICB9LFxuICBjcmVhdGVkKCkge30sXG4gIG1ldGhvZHM6IHtcbiAgICBvbkNsaWNrKCkge1xuICAgICAgdGhpcy4kZW1pdCgnY2xpY2snLCB0aGlzLmVtb2ppT2JqZWN0KVxuICAgIH0sXG4gICAgb25Nb3VzZUVudGVyKCkge1xuICAgICAgdGhpcy4kZW1pdCgnbW91c2VlbnRlcicsIHRoaXMuZW1vamlPYmplY3QpXG4gICAgfSxcbiAgICBvbk1vdXNlTGVhdmUoKSB7XG4gICAgICB0aGlzLiRlbWl0KCdtb3VzZWxlYXZlJywgdGhpcy5lbW9qaU9iamVjdClcbiAgICB9LFxuICB9LFxufVxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0XCIgOnN0eWxlPVwiY3VzdG9tU3R5bGVzXCI+XG4gICAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtYmFyIGVtb2ppLW1hcnQtYmFyLWFuY2hvcnNcIiB2LWlmPVwic2hvd0NhdGVnb3JpZXNcIj5cbiAgICAgIDxhbmNob3JzXG4gICAgICAgIDpkYXRhPVwiZGF0YVwiXG4gICAgICAgIDppMThuPVwibWVyZ2VkSTE4blwiXG4gICAgICAgIDpjb2xvcj1cImNvbG9yXCJcbiAgICAgICAgOmNhdGVnb3JpZXM9XCJjYXRlZ29yaWVzXCJcbiAgICAgICAgOmFjdGl2ZS1jYXRlZ29yeT1cImFjdGl2ZUNhdGVnb3J5XCJcbiAgICAgICAgQGNsaWNrPVwib25BbmNob3JDbGlja1wiXG4gICAgICAvPlxuICAgIDwvZGl2PlxuXG4gICAgPHNsb3RcbiAgICAgIG5hbWU9XCJzZWFyY2hUZW1wbGF0ZVwiXG4gICAgICA6ZGF0YT1cImRhdGFcIlxuICAgICAgOmkxOG49XCJpMThuXCJcbiAgICAgIDphdXRvLWZvY3VzPVwiYXV0b0ZvY3VzXCJcbiAgICAgIDpvbi1zZWFyY2g9XCJvblNlYXJjaFwiXG4gICAgPlxuICAgICAgPHNlYXJjaFxuICAgICAgICB2LWlmPVwic2hvd1NlYXJjaFwiXG4gICAgICAgIHJlZj1cInNlYXJjaFwiXG4gICAgICAgIDpkYXRhPVwiZGF0YVwiXG4gICAgICAgIDppMThuPVwibWVyZ2VkSTE4blwiXG4gICAgICAgIDphdXRvLWZvY3VzPVwiYXV0b0ZvY3VzXCJcbiAgICAgICAgOm9uLXNlYXJjaD1cIm9uU2VhcmNoXCJcbiAgICAgICAgQHNlYXJjaD1cIm9uU2VhcmNoXCJcbiAgICAgIC8+XG4gICAgPC9zbG90PlxuXG4gICAgPGNhdGVnb3J5XG4gICAgICB2LXNob3c9XCJzZWFyY2hFbW9qaXNcIlxuICAgICAgY2xhc3M9XCJlbW9qaS1tYXJ0LXNlYXJjaC1yZXN1bHRzXCJcbiAgICAgIDpkYXRhPVwiZGF0YVwiXG4gICAgICA6aTE4bj1cIm1lcmdlZEkxOG5cIlxuICAgICAgaWQ9XCJzZWFyY2hcIlxuICAgICAgbmFtZT1cIlNlYXJjaFwiXG4gICAgICA6ZW1vamlzPVwic2VhcmNoRW1vamlzXCJcbiAgICAgIDplbW9qaS1wcm9wcz1cImVtb2ppUHJvcHNcIlxuICAgIC8+XG4gICAgPER5bmFtaWNTY3JvbGxlclxuICAgICAgdi1zaG93PVwiIXNlYXJjaEVtb2ppc1wiXG4gICAgICByZWY9XCJkeW5TY3JvbGxlclwiXG4gICAgICA6aXRlbXM9XCJzY3JvbGxlckNhdGVnb3JpZXNcIlxuICAgICAgOm1pbi1pdGVtLXNpemU9XCI2MFwiXG4gICAgICBjbGFzcz1cInNjcm9sbGVyXCJcbiAgICAgIDpidWZmZXI9XCI0MDBcIlxuICAgICAga2V5LWZpZWxkPVwiaWRcIlxuICAgICAgOmVtaXQtdXBkYXRlPVwidHJ1ZVwiXG4gICAgICBAdXBkYXRlPVwib25TY3JvbGxVcGRhdGVcIlxuICAgID5cbiAgICAgIDx0ZW1wbGF0ZSBzbG90LXNjb3BlPVwieyBpdGVtLCBhY3RpdmUsIGluZGV4IH1cIj5cbiAgICAgICAgPER5bmFtaWNTY3JvbGxlckl0ZW0gOml0ZW09XCJpdGVtXCIgOmFjdGl2ZT1cImFjdGl2ZVwiIDpkYXRhLWluZGV4PVwiaW5kZXhcIj5cbiAgICAgICAgICA8Y2F0ZWdvcnlcbiAgICAgICAgICAgIHYtc2hvdz1cIml0ZW0uc2hvd1wiXG4gICAgICAgICAgICByZWY9XCJjYXRlZ29yaWVzXCJcbiAgICAgICAgICAgIDprZXk9XCJpdGVtLmNhdGVnb3J5LmlkXCJcbiAgICAgICAgICAgIDpkYXRhPVwiaXRlbS5kYXRhXCJcbiAgICAgICAgICAgIDppMThuPVwiaXRlbS5tZXJnZWRJMThuXCJcbiAgICAgICAgICAgIDppZD1cIml0ZW0uY2F0ZWdvcnkuaWRcIlxuICAgICAgICAgICAgOm5hbWU9XCJpdGVtLmNhdGVnb3J5Lm5hbWVcIlxuICAgICAgICAgICAgOmVtb2ppcz1cIml0ZW0uY2F0ZWdvcnkuZW1vamlzXCJcbiAgICAgICAgICAgIDplbW9qaS1wcm9wcz1cIml0ZW0uZW1vamlQcm9wc1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9EeW5hbWljU2Nyb2xsZXJJdGVtPlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICA8L0R5bmFtaWNTY3JvbGxlcj5cblxuICAgIDxzbG90XG4gICAgICBuYW1lPVwicHJldmlld1RlbXBsYXRlXCJcbiAgICAgIDpkYXRhPVwiZGF0YVwiXG4gICAgICA6dGl0bGU9XCJ0aXRsZVwiXG4gICAgICA6ZW1vamk9XCJwcmV2aWV3RW1vamlcIlxuICAgICAgOmlkbGUtZW1vamk9XCJpZGxlRW1vamlcIlxuICAgICAgOnNob3ctc2tpbi10b25lcz1cInNob3dTa2luVG9uZXNcIlxuICAgICAgOmVtb2ppLXByb3BzPVwiZW1vamlQcm9wc1wiXG4gICAgICA6c2tpbi1wcm9wcz1cInNraW5Qcm9wc1wiXG4gICAgICA6b24tc2tpbi1jaGFuZ2U9XCJvblNraW5DaGFuZ2VcIlxuICAgID5cbiAgICAgIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LWJhciBlbW9qaS1tYXJ0LWJhci1wcmV2aWV3XCIgdi1pZj1cInNob3dQcmV2aWV3XCI+XG4gICAgICAgIDxwcmV2aWV3XG4gICAgICAgICAgOmRhdGE9XCJkYXRhXCJcbiAgICAgICAgICA6dGl0bGU9XCJ0aXRsZVwiXG4gICAgICAgICAgOmVtb2ppPVwicHJldmlld0Vtb2ppXCJcbiAgICAgICAgICA6aWRsZS1lbW9qaT1cImlkbGVFbW9qaVwiXG4gICAgICAgICAgOnNob3ctc2tpbi10b25lcz1cInNob3dTa2luVG9uZXNcIlxuICAgICAgICAgIDplbW9qaS1wcm9wcz1cImVtb2ppUHJvcHNcIlxuICAgICAgICAgIDpza2luLXByb3BzPVwic2tpblByb3BzXCJcbiAgICAgICAgICA6b24tc2tpbi1jaGFuZ2U9XCJvblNraW5DaGFuZ2VcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9zbG90PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgJy4uL3ZlbmRvci9yYWYtcG9seWZpbGwnXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vdXRpbHMvc3RvcmUnXG5pbXBvcnQgZnJlcXVlbnRseSBmcm9tICcuLi91dGlscy9mcmVxdWVudGx5J1xuaW1wb3J0IHsgZGVlcE1lcmdlLCBtZWFzdXJlU2Nyb2xsYmFyIH0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBQaWNrZXJQcm9wcyB9IGZyb20gJy4uL3V0aWxzL3NoYXJlZC1wcm9wcydcbmltcG9ydCBBbmNob3JzIGZyb20gJy4vYW5jaG9ycydcbmltcG9ydCBDYXRlZ29yeSBmcm9tICcuL2NhdGVnb3J5J1xuaW1wb3J0IFByZXZpZXcgZnJvbSAnLi9wcmV2aWV3J1xuaW1wb3J0IFNlYXJjaCBmcm9tICcuL3NlYXJjaCdcblxuLypcbiAqIE5vdGUgYWJvdXQgYGJ1ZmZlcmAgc2V0dGluZyBmb3IgRHluYW1pY1Njcm9sbGVyOiB0aGlzIGlzIGFcbiAqIGZpeCBmb3IgIzQ5IC0gd2hlbiBjbGlja2luZyBvbiB0aGUgXCJGbGFnc1wiIGNhdGVnb3J5IGZvciB0aGUgZmlyc3RcbiAqIHRpbWUsIHRoZSBjYXRlZ29yeSBpcyBub3Qgc2Nyb2xsZWQgdG8gdGhlIHRvcCBvZiB0aGUgY29tcG9uZW50LlxuICogVGhpcyBpcyBiZWNhdXNlIHRoZSBsYXN0IGNhdGVnb3J5IHNpemUgaXMgbm90IGNhbGN1bGF0ZWQgeWV0IGFuZFxuICogdmlydHVhbCBzY3JvbGxlciB0YWtlcyAnbWluSXRlbVNpemUnIGFzIGNhdGVnb3J5IGhlaWdodC5cbiAqXG4gKiBWaXJ0dWFsIHNjcm9sbGVyIChSZWN5Y2xlU2Nyb2xsZXIgY29tcG9uZW50KSB1c2VzIGBidWZmZXJgIHZhbHVlXG4gKiB0byAgZGVjaWRlIGhvdyBtYW55IGNvbXBvbmVudHMgdG8gcmVuZGVyIGludGl0aWFsbHkgZGVwZW5kaW5nIG9uXG4gKiB0aGUgc2Nyb2xsIGFyZWEgc2l6ZSArIGJ1ZmZlcioyIChhbmQgYWxsIGNhdGVnb3JpZXMgaW5pdGlhbGx5XG4gKiBoYXZlIG1pbiBzaXplLCA2MHB4KS5cbiAqXG4gKiBCeSBpbmNyZWFzaW5nIGJ1ZmZlciB0byA0MDBweCwgd2UgbWFrZSB0aGUgc2Nyb2xsZXIgdG8gcGVyZm9ybVxuICogc2l6ZSBjYWxjdWxhdGlvbiBmb3IgYWxsIGNhdGVnb3JpZXMgYW5kIHRoZSBmb2xsb3dpbmdcbiAqIHNjcm9sbFRvSXRlbSgpIGNhbGxzIHdvcmsgY29ycmVjdGx5LlxuICovXG5cbmltcG9ydCB7IER5bmFtaWNTY3JvbGxlciwgRHluYW1pY1Njcm9sbGVySXRlbSB9IGZyb20gJ3Z1ZS12aXJ0dWFsLXNjcm9sbGVyJ1xuLy8gaW1wb3J0ICd2dWUtdmlydHVhbC1zY3JvbGxlci9kaXN0L3Z1ZS12aXJ0dWFsLXNjcm9sbGVyLmNzcydcblxuY29uc3QgSTE4TiA9IHtcbiAgc2VhcmNoOiAnU2VhcmNoJyxcbiAgbm90Zm91bmQ6ICdObyBFbW9qaSBGb3VuZCcsXG4gIGNhdGVnb3JpZXM6IHtcbiAgICBzZWFyY2g6ICdTZWFyY2ggUmVzdWx0cycsXG4gICAgcmVjZW50OiAnRnJlcXVlbnRseSBVc2VkJyxcbiAgICBzbWlsZXlzOiAnU21pbGV5cyAmIEVtb3Rpb24nLFxuICAgIHBlb3BsZTogJ1Blb3BsZSAmIEJvZHknLFxuICAgIG5hdHVyZTogJ0FuaW1hbHMgJiBOYXR1cmUnLFxuICAgIGZvb2RzOiAnRm9vZCAmIERyaW5rJyxcbiAgICBhY3Rpdml0eTogJ0FjdGl2aXR5JyxcbiAgICBwbGFjZXM6ICdUcmF2ZWwgJiBQbGFjZXMnLFxuICAgIG9iamVjdHM6ICdPYmplY3RzJyxcbiAgICBzeW1ib2xzOiAnU3ltYm9scycsXG4gICAgZmxhZ3M6ICdGbGFncycsXG4gICAgY3VzdG9tOiAnQ3VzdG9tJyxcbiAgfSxcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczoge1xuICAgIC4uLlBpY2tlclByb3BzLFxuICAgIGRhdGE6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFjdGl2ZVNraW46IHRoaXMuc2tpbiB8fCBzdG9yZS5nZXQoJ3NraW4nKSB8fCB0aGlzLmRlZmF1bHRTa2luLFxuICAgICAgYWN0aXZlQ2F0ZWdvcnk6IG51bGwsXG4gICAgICBwcmV2aWV3RW1vamk6IG51bGwsXG4gICAgICBzZWFyY2hFbW9qaXM6IG51bGwsXG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGN1c3RvbVN0eWxlcygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRoOiB0aGlzLmNhbGN1bGF0ZVdpZHRoICsgJ3B4JyxcbiAgICAgICAgLi4udGhpcy5waWNrZXJTdHlsZXMsXG4gICAgICB9XG4gICAgfSxcbiAgICBlbW9qaVByb3BzKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmF0aXZlOiB0aGlzLm5hdGl2ZSxcbiAgICAgICAgc2tpbjogdGhpcy5hY3RpdmVTa2luLFxuICAgICAgICBzZXQ6IHRoaXMuc2V0LFxuICAgICAgICBlbW9qaVRvb2x0aXA6IHRoaXMuZW1vamlUb29sdGlwLFxuICAgICAgICBlbW9qaVNpemU6IHRoaXMuZW1vamlTaXplLFxuICAgICAgICBvbkVudGVyOiB0aGlzLm9uRW1vamlFbnRlci5iaW5kKHRoaXMpLFxuICAgICAgICBvbkxlYXZlOiB0aGlzLm9uRW1vamlMZWF2ZS5iaW5kKHRoaXMpLFxuICAgICAgICBvbkNsaWNrOiB0aGlzLm9uRW1vamlDbGljay5iaW5kKHRoaXMpLFxuICAgICAgfVxuICAgIH0sXG4gICAgc2tpblByb3BzKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc2tpbjogdGhpcy5hY3RpdmVTa2luLFxuICAgICAgfVxuICAgIH0sXG4gICAgY2FsY3VsYXRlV2lkdGgoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wZXJMaW5lICogKHRoaXMuZW1vamlTaXplICsgMTIpICsgMTIgKyAyICsgbWVhc3VyZVNjcm9sbGJhcigpXG4gICAgfSxcbiAgICBzY3JvbGxlckNhdGVnb3JpZXMoKSB7XG4gICAgICBsZXQgaWQgPSAwXG4gICAgICByZXR1cm4gdGhpcy5jYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnkpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpZDogaWQrKyxcbiAgICAgICAgICBjYXRlZ29yeTogY2F0ZWdvcnksXG4gICAgICAgICAgc2hvdzpcbiAgICAgICAgICAgICF0aGlzLnNlYXJjaEVtb2ppcyAmJlxuICAgICAgICAgICAgKHRoaXMuaW5maW5pdGVTY3JvbGwgfHwgY2F0ZWdvcnkgPT0gdGhpcy5hY3RpdmVDYXRlZ29yeSksXG4gICAgICAgICAgbWVyZ2VkSTE4bjogdGhpcy5tZXJnZWRJMThuLFxuICAgICAgICAgIGRhdGE6IHRoaXMuZGF0YSxcbiAgICAgICAgICBlbW9qaXNMZW5ndGg6IGNhdGVnb3J5LmVtb2ppcy5sZW5ndGgsXG4gICAgICAgICAgZW1vamlQcm9wczogdGhpcy5lbW9qaVByb3BzLFxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgbWVyZ2VkSTE4bigpIHtcbiAgICAgIHJldHVybiBPYmplY3QuZnJlZXplKGRlZXBNZXJnZShJMThOLCB0aGlzLmkxOG4pKVxuICAgIH0sXG4gICAgaWRsZUVtb2ppKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZGF0YS5lbW9qaSh0aGlzLmVtb2ppKVxuICAgIH0sXG4gIH0sXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5jYXRlZ29yaWVzID0gW11cbiAgICB0aGlzLmNhdGVnb3JpZXMucHVzaCguLi50aGlzLmRhdGEuY2F0ZWdvcmllcygpKVxuICAgIHRoaXMuY2F0ZWdvcmllcyA9IHRoaXMuY2F0ZWdvcmllcy5maWx0ZXIoKGNhdGVnb3J5KSA9PiB7XG4gICAgICByZXR1cm4gY2F0ZWdvcnkuZW1vamlzLmxlbmd0aCA+IDBcbiAgICB9KVxuXG4gICAgdGhpcy5jYXRlZ29yaWVzWzBdLmZpcnN0ID0gdHJ1ZVxuICAgIE9iamVjdC5mcmVlemUodGhpcy5jYXRlZ29yaWVzKVxuICAgIHRoaXMuYWN0aXZlQ2F0ZWdvcnkgPSB0aGlzLmNhdGVnb3JpZXNbMF1cbiAgICB0aGlzLnNraXBTY3JvbGxVcGRhdGUgPSBmYWxzZVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgb25TY3JvbGxVcGRhdGUoc3RhcnRJbmRleCwgZW5kSW5kZXgpIHtcbiAgICAgIGlmICh0aGlzLnNraXBTY3JvbGxVcGRhdGUpIHtcbiAgICAgICAgdGhpcy5za2lwU2Nyb2xsVXBkYXRlID0gZmFsc2VcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYWN0aXZlQ2F0ZWdvcnkgPSB0aGlzLmNhdGVnb3JpZXNbZW5kSW5kZXggLSAxXVxuICAgICAgfVxuICAgIH0sXG4gICAgb25BbmNob3JDbGljayhjYXRlZ29yeSkge1xuICAgICAgbGV0IGkgPSB0aGlzLmNhdGVnb3JpZXMuaW5kZXhPZihjYXRlZ29yeSlcbiAgICAgIHRoaXMuJHJlZnMuZHluU2Nyb2xsZXIuc2Nyb2xsVG9JdGVtKGkpXG4gICAgICB0aGlzLmFjdGl2ZUNhdGVnb3J5ID0gdGhpcy5jYXRlZ29yaWVzW2ldXG4gICAgICB0aGlzLnNraXBTY3JvbGxVcGRhdGUgPSB0cnVlXG4gICAgfSxcbiAgICBvblNlYXJjaCh2YWx1ZSkge1xuICAgICAgbGV0IGVtb2ppcyA9IHRoaXMuZGF0YS5zZWFyY2godmFsdWUsIHRoaXMubWF4U2VhcmNoUmVzdWx0cylcbiAgICAgIHRoaXMuc2VhcmNoRW1vamlzID0gZW1vamlzXG4gICAgfSxcbiAgICBvbkVtb2ppRW50ZXIoZW1vamkpIHtcbiAgICAgIHRoaXMucHJldmlld0Vtb2ppID0gZW1vamlcbiAgICB9LFxuICAgIG9uRW1vamlMZWF2ZShlbW9qaSkge1xuICAgICAgdGhpcy5wcmV2aWV3RW1vamkgPSBudWxsXG4gICAgfSxcbiAgICBvbkVtb2ppQ2xpY2soZW1vamkpIHtcbiAgICAgIHRoaXMuJGVtaXQoJ3NlbGVjdCcsIGVtb2ppKVxuICAgICAgZnJlcXVlbnRseS5hZGQoZW1vamkpXG4gICAgfSxcbiAgICBvblNraW5DaGFuZ2Uoc2tpbikge1xuICAgICAgdGhpcy5hY3RpdmVTa2luID0gc2tpblxuICAgICAgc3RvcmUudXBkYXRlKHsgc2tpbiB9KVxuXG4gICAgICB0aGlzLiRlbWl0KCdza2luLWNoYW5nZScsIHNraW4pXG4gICAgfSxcbiAgfSxcbiAgY29tcG9uZW50czoge1xuICAgIEFuY2hvcnMsXG4gICAgQ2F0ZWdvcnksXG4gICAgUHJldmlldyxcbiAgICBTZWFyY2gsXG4gICAgRHluYW1pY1Njcm9sbGVyLFxuICAgIER5bmFtaWNTY3JvbGxlckl0ZW0sXG4gIH0sXG59XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQgZW1vamktbWFydC1zdGF0aWNcIiA6c3R5bGU9XCJjdXN0b21TdHlsZXNcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1iYXIgZW1vamktbWFydC1iYXItYW5jaG9yc1wiIHYtaWY9XCJzaG93Q2F0ZWdvcmllc1wiPlxuICAgICAgPGFuY2hvcnNcbiAgICAgICAgOmRhdGE9XCJkYXRhXCJcbiAgICAgICAgOmkxOG49XCJtZXJnZWRJMThuXCJcbiAgICAgICAgOmNvbG9yPVwiY29sb3JcIlxuICAgICAgICA6Y2F0ZWdvcmllcz1cImNhdGVnb3JpZXNcIlxuICAgICAgICA6YWN0aXZlLWNhdGVnb3J5PVwiYWN0aXZlQ2F0ZWdvcnlcIlxuICAgICAgICBAY2xpY2s9XCJvbkFuY2hvckNsaWNrXCJcbiAgICAgIC8+XG4gICAgPC9kaXY+XG5cbiAgICA8c2xvdFxuICAgICAgbmFtZT1cInNlYXJjaFRlbXBsYXRlXCJcbiAgICAgIDpkYXRhPVwiZGF0YVwiXG4gICAgICA6aTE4bj1cImkxOG5cIlxuICAgICAgOmF1dG8tZm9jdXM9XCJhdXRvRm9jdXNcIlxuICAgICAgOm9uLXNlYXJjaD1cIm9uU2VhcmNoXCJcbiAgICA+XG4gICAgICA8c2VhcmNoXG4gICAgICAgIHYtaWY9XCJzaG93U2VhcmNoXCJcbiAgICAgICAgcmVmPVwic2VhcmNoXCJcbiAgICAgICAgOmRhdGE9XCJkYXRhXCJcbiAgICAgICAgOmkxOG49XCJtZXJnZWRJMThuXCJcbiAgICAgICAgOmF1dG8tZm9jdXM9XCJhdXRvRm9jdXNcIlxuICAgICAgICA6b24tc2VhcmNoPVwib25TZWFyY2hcIlxuICAgICAgICBAc2VhcmNoPVwib25TZWFyY2hcIlxuICAgICAgLz5cbiAgICA8L3Nsb3Q+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1zY3JvbGxcIiByZWY9XCJzY3JvbGxcIiBAc2Nyb2xsPVwib25TY3JvbGxcIj5cbiAgICAgIDxjYXRlZ29yeVxuICAgICAgICB2LXNob3c9XCJzZWFyY2hFbW9qaXNcIlxuICAgICAgICA6ZGF0YT1cImRhdGFcIlxuICAgICAgICA6aTE4bj1cIm1lcmdlZEkxOG5cIlxuICAgICAgICBpZD1cInNlYXJjaFwiXG4gICAgICAgIG5hbWU9XCJTZWFyY2hcIlxuICAgICAgICA6ZW1vamlzPVwic2VhcmNoRW1vamlzXCJcbiAgICAgICAgOmVtb2ppLXByb3BzPVwiZW1vamlQcm9wc1wiXG4gICAgICAvPlxuICAgICAgPGNhdGVnb3J5XG4gICAgICAgIHYtZm9yPVwiY2F0ZWdvcnkgaW4gZmlsdGVyZWRDYXRlZ29yaWVzXCJcbiAgICAgICAgdi1zaG93PVwiIXNlYXJjaEVtb2ppcyAmJiAoaW5maW5pdGVTY3JvbGwgfHwgY2F0ZWdvcnkgPT0gYWN0aXZlQ2F0ZWdvcnkpXCJcbiAgICAgICAgcmVmPVwiY2F0ZWdvcmllc1wiXG4gICAgICAgIDprZXk9XCJjYXRlZ29yeS5pZFwiXG4gICAgICAgIDpkYXRhPVwiZGF0YVwiXG4gICAgICAgIDppMThuPVwibWVyZ2VkSTE4blwiXG4gICAgICAgIDppZD1cImNhdGVnb3J5LmlkXCJcbiAgICAgICAgOm5hbWU9XCJjYXRlZ29yeS5uYW1lXCJcbiAgICAgICAgOmVtb2ppcz1cImNhdGVnb3J5LmVtb2ppc1wiXG4gICAgICAgIDplbW9qaS1wcm9wcz1cImVtb2ppUHJvcHNcIlxuICAgICAgLz5cbiAgICA8L2Rpdj5cblxuICAgIDxzbG90XG4gICAgICBuYW1lPVwicHJldmlld1RlbXBsYXRlXCJcbiAgICAgIDpkYXRhPVwiZGF0YVwiXG4gICAgICA6dGl0bGU9XCJ0aXRsZVwiXG4gICAgICA6ZW1vamk9XCJwcmV2aWV3RW1vamlcIlxuICAgICAgOmlkbGUtZW1vamk9XCJpZGxlRW1vamlcIlxuICAgICAgOnNob3ctc2tpbi10b25lcz1cInNob3dTa2luVG9uZXNcIlxuICAgICAgOmVtb2ppLXByb3BzPVwiZW1vamlQcm9wc1wiXG4gICAgICA6c2tpbi1wcm9wcz1cInNraW5Qcm9wc1wiXG4gICAgICA6b24tc2tpbi1jaGFuZ2U9XCJvblNraW5DaGFuZ2VcIlxuICAgID5cbiAgICAgIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LWJhciBlbW9qaS1tYXJ0LWJhci1wcmV2aWV3XCIgdi1pZj1cInNob3dQcmV2aWV3XCI+XG4gICAgICAgIDxwcmV2aWV3XG4gICAgICAgICAgOmRhdGE9XCJkYXRhXCJcbiAgICAgICAgICA6dGl0bGU9XCJ0aXRsZVwiXG4gICAgICAgICAgOmVtb2ppPVwicHJldmlld0Vtb2ppXCJcbiAgICAgICAgICA6aWRsZS1lbW9qaT1cImlkbGVFbW9qaVwiXG4gICAgICAgICAgOnNob3ctc2tpbi10b25lcz1cInNob3dTa2luVG9uZXNcIlxuICAgICAgICAgIDplbW9qaS1wcm9wcz1cImVtb2ppUHJvcHNcIlxuICAgICAgICAgIDpza2luLXByb3BzPVwic2tpblByb3BzXCJcbiAgICAgICAgICA6b24tc2tpbi1jaGFuZ2U9XCJvblNraW5DaGFuZ2VcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9zbG90PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgJy4uL3ZlbmRvci9yYWYtcG9seWZpbGwnXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vdXRpbHMvc3RvcmUnXG5pbXBvcnQgZnJlcXVlbnRseSBmcm9tICcuLi91dGlscy9mcmVxdWVudGx5J1xuaW1wb3J0IHsgZGVlcE1lcmdlLCBtZWFzdXJlU2Nyb2xsYmFyIH0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBQaWNrZXJQcm9wcyB9IGZyb20gJy4uL3V0aWxzL3NoYXJlZC1wcm9wcydcbmltcG9ydCBBbmNob3JzIGZyb20gJy4vYW5jaG9ycydcbmltcG9ydCBDYXRlZ29yeSBmcm9tICcuL2NhdGVnb3J5J1xuaW1wb3J0IFByZXZpZXcgZnJvbSAnLi9wcmV2aWV3J1xuaW1wb3J0IFNlYXJjaCBmcm9tICcuL3NlYXJjaCdcblxuLypcbiAqIE5vdGUgYWJvdXQgYGJ1ZmZlcmAgc2V0dGluZyBmb3IgRHluYW1pY1Njcm9sbGVyOiB0aGlzIGlzIGFcbiAqIGZpeCBmb3IgIzQ5IC0gd2hlbiBjbGlja2luZyBvbiB0aGUgXCJGbGFnc1wiIGNhdGVnb3J5IGZvciB0aGUgZmlyc3RcbiAqIHRpbWUsIHRoZSBjYXRlZ29yeSBpcyBub3Qgc2Nyb2xsZWQgdG8gdGhlIHRvcCBvZiB0aGUgY29tcG9uZW50LlxuICogVGhpcyBpcyBiZWNhdXNlIHRoZSBsYXN0IGNhdGVnb3J5IHNpemUgaXMgbm90IGNhbGN1bGF0ZWQgeWV0IGFuZFxuICogdmlydHVhbCBzY3JvbGxlciB0YWtlcyAnbWluSXRlbVNpemUnIGFzIGNhdGVnb3J5IGhlaWdodC5cbiAqXG4gKiBWaXJ0dWFsIHNjcm9sbGVyIChSZWN5Y2xlU2Nyb2xsZXIgY29tcG9uZW50KSB1c2VzIGBidWZmZXJgIHZhbHVlXG4gKiB0byAgZGVjaWRlIGhvdyBtYW55IGNvbXBvbmVudHMgdG8gcmVuZGVyIGludGl0aWFsbHkgZGVwZW5kaW5nIG9uXG4gKiB0aGUgc2Nyb2xsIGFyZWEgc2l6ZSArIGJ1ZmZlcioyIChhbmQgYWxsIGNhdGVnb3JpZXMgaW5pdGlhbGx5XG4gKiBoYXZlIG1pbiBzaXplLCA2MHB4KS5cbiAqXG4gKiBCeSBpbmNyZWFzaW5nIGJ1ZmZlciB0byA0MDBweCwgd2UgbWFrZSB0aGUgc2Nyb2xsZXIgdG8gcGVyZm9ybVxuICogc2l6ZSBjYWxjdWxhdGlvbiBmb3IgYWxsIGNhdGVnb3JpZXMgYW5kIHRoZSBmb2xsb3dpbmdcbiAqIHNjcm9sbFRvSXRlbSgpIGNhbGxzIHdvcmsgY29ycmVjdGx5LlxuICovXG5cbmltcG9ydCB7IER5bmFtaWNTY3JvbGxlciwgRHluYW1pY1Njcm9sbGVySXRlbSB9IGZyb20gJ3Z1ZS12aXJ0dWFsLXNjcm9sbGVyJ1xuLy8gaW1wb3J0ICd2dWUtdmlydHVhbC1zY3JvbGxlci9kaXN0L3Z1ZS12aXJ0dWFsLXNjcm9sbGVyLmNzcydcblxuY29uc3QgSTE4TiA9IHtcbiAgc2VhcmNoOiAnU2VhcmNoJyxcbiAgbm90Zm91bmQ6ICdObyBFbW9qaSBGb3VuZCcsXG4gIGNhdGVnb3JpZXM6IHtcbiAgICBzZWFyY2g6ICdTZWFyY2ggUmVzdWx0cycsXG4gICAgcmVjZW50OiAnRnJlcXVlbnRseSBVc2VkJyxcbiAgICBzbWlsZXlzOiAnU21pbGV5cyAmIEVtb3Rpb24nLFxuICAgIHBlb3BsZTogJ1Blb3BsZSAmIEJvZHknLFxuICAgIG5hdHVyZTogJ0FuaW1hbHMgJiBOYXR1cmUnLFxuICAgIGZvb2RzOiAnRm9vZCAmIERyaW5rJyxcbiAgICBhY3Rpdml0eTogJ0FjdGl2aXR5JyxcbiAgICBwbGFjZXM6ICdUcmF2ZWwgJiBQbGFjZXMnLFxuICAgIG9iamVjdHM6ICdPYmplY3RzJyxcbiAgICBzeW1ib2xzOiAnU3ltYm9scycsXG4gICAgZmxhZ3M6ICdGbGFncycsXG4gICAgY3VzdG9tOiAnQ3VzdG9tJyxcbiAgfSxcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczoge1xuICAgIC4uLlBpY2tlclByb3BzLFxuICAgIGRhdGE6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFjdGl2ZVNraW46IHRoaXMuc2tpbiB8fCBzdG9yZS5nZXQoJ3NraW4nKSB8fCB0aGlzLmRlZmF1bHRTa2luLFxuICAgICAgYWN0aXZlQ2F0ZWdvcnk6IG51bGwsXG4gICAgICBwcmV2aWV3RW1vamk6IG51bGwsXG4gICAgICBzZWFyY2hFbW9qaXM6IG51bGwsXG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGN1c3RvbVN0eWxlcygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRoOiB0aGlzLmNhbGN1bGF0ZVdpZHRoICsgJ3B4JyxcbiAgICAgICAgLi4udGhpcy5waWNrZXJTdHlsZXMsXG4gICAgICB9XG4gICAgfSxcbiAgICBlbW9qaVByb3BzKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmF0aXZlOiB0aGlzLm5hdGl2ZSxcbiAgICAgICAgc2tpbjogdGhpcy5hY3RpdmVTa2luLFxuICAgICAgICBzZXQ6IHRoaXMuc2V0LFxuICAgICAgICBlbW9qaVRvb2x0aXA6IHRoaXMuZW1vamlUb29sdGlwLFxuICAgICAgICBlbW9qaVNpemU6IHRoaXMuZW1vamlTaXplLFxuICAgICAgICBvbkVudGVyOiB0aGlzLm9uRW1vamlFbnRlci5iaW5kKHRoaXMpLFxuICAgICAgICBvbkxlYXZlOiB0aGlzLm9uRW1vamlMZWF2ZS5iaW5kKHRoaXMpLFxuICAgICAgICBvbkNsaWNrOiB0aGlzLm9uRW1vamlDbGljay5iaW5kKHRoaXMpLFxuICAgICAgfVxuICAgIH0sXG4gICAgc2tpblByb3BzKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc2tpbjogdGhpcy5hY3RpdmVTa2luLFxuICAgICAgfVxuICAgIH0sXG4gICAgY2FsY3VsYXRlV2lkdGgoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wZXJMaW5lICogKHRoaXMuZW1vamlTaXplICsgMTIpICsgMTIgKyAyICsgbWVhc3VyZVNjcm9sbGJhcigpXG4gICAgfSxcbiAgICBmaWx0ZXJlZENhdGVnb3JpZXMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5jYXRlZ29yaWVzLmZpbHRlcigoY2F0ZWdvcnkpID0+IHtcbiAgICAgICAgbGV0IGlzSW5jbHVkZWQgPVxuICAgICAgICAgIHRoaXMuaW5jbHVkZSAmJiB0aGlzLmluY2x1ZGUubGVuZ3RoXG4gICAgICAgICAgICA/IHRoaXMuaW5jbHVkZS5pbmRleE9mKGNhdGVnb3J5LmlkKSA+IC0xXG4gICAgICAgICAgICA6IHRydWVcbiAgICAgICAgbGV0IGlzRXhjbHVkZWQgPVxuICAgICAgICAgIHRoaXMuZXhjbHVkZSAmJiB0aGlzLmV4Y2x1ZGUubGVuZ3RoXG4gICAgICAgICAgICA/IHRoaXMuZXhjbHVkZS5pbmRleE9mKGNhdGVnb3J5LmlkKSA+IC0xXG4gICAgICAgICAgICA6IGZhbHNlXG4gICAgICAgIGxldCBoYXNFbW9qaXMgPSBjYXRlZ29yeS5lbW9qaXMubGVuZ3RoID4gMFxuICAgICAgICBpZiAodGhpcy5lbW9qaXNUb1Nob3dGaWx0ZXIpIHtcbiAgICAgICAgICBoYXNFbW9qaXMgPSBjYXRlZ29yeS5lbW9qaXMuc29tZSgoZW1vamkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVtb2ppc1RvU2hvd0ZpbHRlcih0aGlzLmRhdGEuZW1vamlzW2Vtb2ppXSB8fCBlbW9qaSlcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpc0luY2x1ZGVkICYmICFpc0V4Y2x1ZGVkICYmIGhhc0Vtb2ppc1xuICAgICAgfSlcbiAgICB9LFxuICAgIG1lcmdlZEkxOG4oKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmZyZWV6ZShkZWVwTWVyZ2UoSTE4TiwgdGhpcy5pMThuKSlcbiAgICB9LFxuICAgIGlkbGVFbW9qaSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmRhdGEuZW1vamkodGhpcy5lbW9qaSlcbiAgICB9LFxuICB9LFxuICBjcmVhdGVkKCkge1xuICAgIHRoaXMuY2F0ZWdvcmllcyA9IFtdXG4gICAgdGhpcy5jYXRlZ29yaWVzLnB1c2goLi4udGhpcy5kYXRhLmNhdGVnb3JpZXMoKSlcbiAgICB0aGlzLmNhdGVnb3JpZXMgPSB0aGlzLmNhdGVnb3JpZXMuZmlsdGVyKChjYXRlZ29yeSkgPT4ge1xuICAgICAgcmV0dXJuIGNhdGVnb3J5LmVtb2ppcy5sZW5ndGggPiAwXG4gICAgfSlcblxuICAgIHRoaXMuY2F0ZWdvcmllc1swXS5maXJzdCA9IHRydWVcbiAgICBPYmplY3QuZnJlZXplKHRoaXMuY2F0ZWdvcmllcylcbiAgICB0aGlzLmFjdGl2ZUNhdGVnb3J5ID0gdGhpcy5jYXRlZ29yaWVzWzBdXG4gICAgdGhpcy5za2lwU2Nyb2xsVXBkYXRlID0gZmFsc2VcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIG9uU2Nyb2xsKCkge1xuICAgICAgaWYgKHRoaXMuaW5maW5pdGVTY3JvbGwgJiYgIXRoaXMud2FpdGluZ0ZvclBhaW50KSB7XG4gICAgICAgIHRoaXMud2FpdGluZ0ZvclBhaW50ID0gdHJ1ZVxuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMub25TY3JvbGxQYWludC5iaW5kKHRoaXMpKVxuICAgICAgfVxuICAgIH0sXG4gICAgb25TY3JvbGxQYWludCgpIHtcbiAgICAgIHRoaXMud2FpdGluZ0ZvclBhaW50ID0gZmFsc2VcbiAgICAgIGxldCBzY3JvbGxUb3AgPSB0aGlzLiRyZWZzLnNjcm9sbC5zY3JvbGxUb3AsXG4gICAgICAgIGFjdGl2ZUNhdGVnb3J5ID0gdGhpcy5maWx0ZXJlZENhdGVnb3JpZXNbMF1cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5maWx0ZXJlZENhdGVnb3JpZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBjYXRlZ29yeSA9IHRoaXMuZmlsdGVyZWRDYXRlZ29yaWVzW2ldLFxuICAgICAgICAgIGNvbXBvbmVudCA9IHRoaXMuJHJlZnMuY2F0ZWdvcmllc1tpXVxuICAgICAgICAvLyBUaGUgYC01MGAgb2Zmc2V0IHN3aXRjaGVzIGFjdGl2ZSBjYXRlZ29yeSAoc2VsZWN0ZWQgaW4gdGhlXG4gICAgICAgIC8vIGFuY2hvcnMgYmFyKSBhIGJpdCBlYXJpbGVyLCBiZWZvcmUgaXQgYWN0dWFsbHkgcmVhY2hlcyB0aGUgdG9wLlxuICAgICAgICBpZiAoY29tcG9uZW50ICYmIGNvbXBvbmVudC4kZWwub2Zmc2V0VG9wIC0gNTAgPiBzY3JvbGxUb3ApIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGFjdGl2ZUNhdGVnb3J5ID0gY2F0ZWdvcnlcbiAgICAgIH1cbiAgICAgIHRoaXMuYWN0aXZlQ2F0ZWdvcnkgPSBhY3RpdmVDYXRlZ29yeVxuICAgIH0sXG4gICAgb25BbmNob3JDbGljayhjYXRlZ29yeSkge1xuICAgICAgbGV0IGkgPSB0aGlzLmZpbHRlcmVkQ2F0ZWdvcmllcy5pbmRleE9mKGNhdGVnb3J5KSxcbiAgICAgICAgY29tcG9uZW50ID0gdGhpcy4kcmVmcy5jYXRlZ29yaWVzW2ldLFxuICAgICAgICBzY3JvbGxUb0NvbXBvbmVudCA9ICgpID0+IHtcbiAgICAgICAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICAgICAgICBsZXQgdG9wID0gY29tcG9uZW50LiRlbC5vZmZzZXRUb3BcbiAgICAgICAgICAgIGlmIChjYXRlZ29yeS5maXJzdCkge1xuICAgICAgICAgICAgICB0b3AgPSAwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLiRyZWZzLnNjcm9sbC5zY3JvbGxUb3AgPSB0b3BcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGlmICh0aGlzLnNlYXJjaEVtb2ppcykge1xuICAgICAgICB0aGlzLm9uU2VhcmNoKG51bGwpXG4gICAgICAgIHRoaXMuJHJlZnMuc2VhcmNoLmNsZWFyKClcbiAgICAgICAgdGhpcy4kbmV4dFRpY2soc2Nyb2xsVG9Db21wb25lbnQpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuaW5maW5pdGVTY3JvbGwpIHtcbiAgICAgICAgc2Nyb2xsVG9Db21wb25lbnQoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hY3RpdmVDYXRlZ29yeSA9IHRoaXMuZmlsdGVyZWRDYXRlZ29yaWVzW2ldXG4gICAgICB9XG4gICAgfSxcbiAgICBvblNlYXJjaCh2YWx1ZSkge1xuICAgICAgbGV0IGVtb2ppcyA9IHRoaXMuZGF0YS5zZWFyY2godmFsdWUsIHRoaXMubWF4U2VhcmNoUmVzdWx0cylcbiAgICAgIHRoaXMuc2VhcmNoRW1vamlzID0gZW1vamlzXG4gICAgfSxcbiAgICBvbkVtb2ppRW50ZXIoZW1vamkpIHtcbiAgICAgIHRoaXMucHJldmlld0Vtb2ppID0gZW1vamlcbiAgICB9LFxuICAgIG9uRW1vamlMZWF2ZShlbW9qaSkge1xuICAgICAgdGhpcy5wcmV2aWV3RW1vamkgPSBudWxsXG4gICAgfSxcbiAgICBvbkVtb2ppQ2xpY2soZW1vamkpIHtcbiAgICAgIHRoaXMuJGVtaXQoJ3NlbGVjdCcsIGVtb2ppKVxuICAgICAgZnJlcXVlbnRseS5hZGQoZW1vamkpXG4gICAgfSxcbiAgICBvblNraW5DaGFuZ2Uoc2tpbikge1xuICAgICAgdGhpcy5hY3RpdmVTa2luID0gc2tpblxuICAgICAgc3RvcmUudXBkYXRlKHsgc2tpbiB9KVxuXG4gICAgICB0aGlzLiRlbWl0KCdza2luLWNoYW5nZScsIHNraW4pXG4gICAgfSxcbiAgfSxcbiAgY29tcG9uZW50czoge1xuICAgIEFuY2hvcnMsXG4gICAgQ2F0ZWdvcnksXG4gICAgUHJldmlldyxcbiAgICBTZWFyY2gsXG4gICAgRHluYW1pY1Njcm9sbGVyLFxuICAgIER5bmFtaWNTY3JvbGxlckl0ZW0sXG4gIH0sXG59XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cblxuPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtYW5jaG9yc1wiPlxuICA8c3BhblxuICAgIHYtZm9yPVwiY2F0ZWdvcnkgaW4gY2F0ZWdvcmllc1wiXG4gICAgOmtleT1cImNhdGVnb3J5LmlkXCJcbiAgICA6Y2xhc3M9XCJ7ICdlbW9qaS1tYXJ0LWFuY2hvcic6IHRydWUsICdlbW9qaS1tYXJ0LWFuY2hvci1zZWxlY3RlZCc6IGNhdGVnb3J5LmlkID09IGFjdGl2ZUNhdGVnb3J5LmlkIH1cIlxuICAgIDpzdHlsZT1cInsgJ2NvbG9yJzogKGNhdGVnb3J5LmlkID09IGFjdGl2ZUNhdGVnb3J5LmlkID8gY29sb3IgOiAnJykgfVwiXG4gICAgOmRhdGEtdGl0bGU9XCJpMThuLmNhdGVnb3JpZXNbY2F0ZWdvcnkuaWRdXCJcbiAgICBAY2xpY2s9XCIkZW1pdCgnY2xpY2snLCBjYXRlZ29yeSlcIj5cbiAgICA8ZGl2IHYtaHRtbD1cInN2Z3NbY2F0ZWdvcnkuaWRdXCIvPlxuICAgIDxzcGFuIGNsYXNzPVwiZW1vamktbWFydC1hbmNob3ItYmFyXCIgOnN0eWxlPVwieyBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yIH1cIj48L3NwYW4+XG4gIDwvc3Bhbj5cbjwvZGl2PlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5pbXBvcnQgc3ZncyBmcm9tICcuLi9zdmdzJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiB7XG4gICAgaTE4bjoge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIGNvbG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmdcbiAgICB9LFxuICAgIGNhdGVnb3JpZXM6IHtcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIGFjdGl2ZUNhdGVnb3J5OiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICBkZWZhdWx0KCkge1xuICAgICAgICByZXR1cm4ge31cbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5zdmdzID0gc3Znc1xuICB9XG59XG5cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuXG48ZGl2IDpjbGFzcz1cInsgJ2Vtb2ppLW1hcnQtY2F0ZWdvcnknOiB0cnVlLCAnZW1vamktbWFydC1uby1yZXN1bHRzJzogIWhhc1Jlc3VsdHMgfVwiIHYtaWY9XCJpc1Zpc2libGUgJiYgKGlzU2VhcmNoIHx8IGhhc1Jlc3VsdHMpXCI+XG4gIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LWNhdGVnb3J5LWxhYmVsXCI+XG4gICAgPHNwYW4+e3sgaTE4bi5jYXRlZ29yaWVzW2lkXSB9fTwvc3Bhbj5cbiAgPC9kaXY+XG5cbiAgPHRlbXBsYXRlIHYtZm9yPVwieyBlbW9qaU9iamVjdCwgZW1vamlWaWV3fSBpbiBlbW9qaU9iamVjdHNcIj5cbiAgICA8c3BhblxuICAgICAgdi1pZj1cImVtb2ppVmlldy5jYW5SZW5kZXJcIlxuICAgICAgOmRhdGEtdGl0bGU9XCJlbW9qaU9iamVjdC5zaG9ydF9uYW1lXCJcbiAgICAgIDp0aXRsZT1cImVtb2ppVmlldy50aXRsZVwiXG4gICAgICBjbGFzcz1cImVtb2ppLW1hcnQtZW1vamlcIlxuICAgICAgQG1vdXNlZW50ZXI9XCJlbW9qaVByb3BzLm9uRW50ZXIoZW1vamlWaWV3LmdldEVtb2ppKCkpXCJcbiAgICAgIEBtb3VzZWxlYXZlPVwiZW1vamlQcm9wcy5vbkxlYXZlKGVtb2ppVmlldy5nZXRFbW9qaSgpKVwiXG4gICAgICBAY2xpY2s9XCJlbW9qaVByb3BzLm9uQ2xpY2soZW1vamlWaWV3LmdldEVtb2ppKCkpXCI+XG4gICAgICA8c3BhbiAgOmNsYXNzPVwiZW1vamlWaWV3LmNzc0NsYXNzXCIgOnN0eWxlPVwiZW1vamlWaWV3LmNzc1N0eWxlXCI+e3tlbW9qaVZpZXcuY29udGVudH19PC9zcGFuPlxuICAgIDwvc3Bhbj5cbiAgPC90ZW1wbGF0ZT5cblxuICA8ZGl2IHYtaWY9XCIhaGFzUmVzdWx0c1wiPlxuICAgIDxlbW9qaVxuICAgICAgOmRhdGE9XCJkYXRhXCJcbiAgICAgIGVtb2ppPVwic2xldXRoX29yX3NweVwiXG4gICAgICA6bmF0aXZlPVwiZW1vamlQcm9wcy5uYXRpdmVcIlxuICAgICAgOnNraW49XCJlbW9qaVByb3BzLnNraW5cIlxuICAgICAgOnNldD1cImVtb2ppUHJvcHMuc2V0XCJcbiAgICAvPlxuICAgIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LW5vLXJlc3VsdHMtbGFiZWxcIj57eyBpMThuLm5vdGZvdW5kIH19PC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCB7IEVtb2ppVmlldyB9IGZyb20gJy4uL3V0aWxzL2Vtb2ppLWRhdGEnXG5pbXBvcnQgRW1vamkgZnJvbSAnLi9FbW9qaSdcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiB7XG4gICAgZGF0YToge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIGkxOG46IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBpZDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIG5hbWU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBlbW9qaXM6IHtcbiAgICAgIHR5cGU6IEFycmF5XG4gICAgfSxcbiAgICBlbW9qaVByb3BzOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBpc1Zpc2libGUoKSB7XG4gICAgICByZXR1cm4gISF0aGlzLmVtb2ppc1xuICAgIH0sXG4gICAgaXNTZWFyY2goKSB7XG4gICAgICByZXR1cm4gdGhpcy5uYW1lID09ICdTZWFyY2gnXG4gICAgfSxcbiAgICBoYXNSZXN1bHRzKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZW1vamlzLmxlbmd0aCA+IDBcbiAgICB9LFxuICAgIGVtb2ppT2JqZWN0cygpIHtcbiAgICAgIHJldHVybiB0aGlzLmVtb2ppcy5tYXAoKGVtb2ppKSA9PiB7XG4gICAgICAgICAgbGV0IGVtb2ppT2JqZWN0ID0gZW1vamlcbiAgICAgICAgICBsZXQgZW1vamlWaWV3ID0gbmV3IEVtb2ppVmlldyhcbiAgICAgICAgICAgIGVtb2ppLFxuICAgICAgICAgICAgdGhpcy5lbW9qaVByb3BzLnNraW4sXG4gICAgICAgICAgICB0aGlzLmVtb2ppUHJvcHMuc2V0LFxuICAgICAgICAgICAgdGhpcy5lbW9qaVByb3BzLm5hdGl2ZSxcbiAgICAgICAgICAgIHRoaXMuZW1vamlQcm9wcy5mYWxsYmFjayxcbiAgICAgICAgICAgIHRoaXMuZW1vamlQcm9wcy5lbW9qaVRvb2x0aXAsXG4gICAgICAgICAgICB0aGlzLmVtb2ppUHJvcHMuZW1vamlTaXplLFxuICAgICAgICAgIClcbiAgICAgICAgICByZXR1cm4geyBlbW9qaU9iamVjdCwgZW1vamlWaWV3IH1cbiAgICAgIH0pXG4gICAgfVxuICB9LFxuICBjb21wb25lbnRzOiB7XG4gICAgRW1vamlcbiAgfVxufVxuXG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cblxuPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtcHJldmlld1wiPlxuICA8dGVtcGxhdGUgdi1pZj1cImVtb2ppXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1wcmV2aWV3LWVtb2ppXCI+XG4gICAgICAgIDxlbW9qaVxuICAgICAgICAgIDpkYXRhPVwiZGF0YVwiXG4gICAgICAgICAgOmVtb2ppPVwiZW1vamlcIlxuICAgICAgICAgIDpuYXRpdmU9XCJlbW9qaVByb3BzLm5hdGl2ZVwiXG4gICAgICAgICAgOnNraW49XCJlbW9qaVByb3BzLnNraW5cIlxuICAgICAgICAgIDpzZXQ9XCJlbW9qaVByb3BzLnNldFwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtcHJldmlldy1kYXRhXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LXByZXZpZXctbmFtZVwiPnt7IGVtb2ppLm5hbWUgfX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtcHJldmlldy1zaG9ydG5hbWVzXCI+XG4gICAgICAgICAgPHNwYW4gdi1mb3I9XCJzaG9ydE5hbWUgaW4gZW1vamlTaG9ydE5hbWVzXCIgOmtleT1cInNob3J0TmFtZVwiIGNsYXNzPVwiZW1vamktbWFydC1wcmV2aWV3LXNob3J0bmFtZVwiPjp7eyBzaG9ydE5hbWUgfX06PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtcHJldmlldy1lbW90aWNvbnNcIj5cbiAgICAgICAgICA8c3BhbiB2LWZvcj1cImVtb3RpY29uIGluIGVtb2ppRW1vdGljb25zXCIgOmtleT1cImVtb3RpY29uXCIgY2xhc3M9XCJlbW9qaS1tYXJ0LXByZXZpZXctZW1vdGljb25cIj57eyBlbW90aWNvbiB9fTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgPC90ZW1wbGF0ZT5cblxuICA8dGVtcGxhdGUgdi1lbHNlPlxuICAgIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LXByZXZpZXctZW1vamlcIj5cbiAgICAgIDxlbW9qaVxuICAgICAgICA6ZGF0YT1cImRhdGFcIlxuICAgICAgICA6ZW1vamk9XCJpZGxlRW1vamlcIlxuICAgICAgICA6bmF0aXZlPVwiZW1vamlQcm9wcy5uYXRpdmVcIlxuICAgICAgICA6c2tpbj1cImVtb2ppUHJvcHMuc2tpblwiXG4gICAgICAgIDpzZXQ9XCJlbW9qaVByb3BzLnNldFwiXG4gICAgICAvPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtcHJldmlldy1kYXRhXCI+XG4gICAgICA8c3BhbiBjbGFzcz1cImVtb2ppLW1hcnQtdGl0bGUtbGFiZWxcIj57eyB0aXRsZSB9fTwvc3Bhbj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgdi1pZj1cInNob3dTa2luVG9uZXNcIiBjbGFzcz1cImVtb2ppLW1hcnQtcHJldmlldy1za2luc1wiPlxuICAgICAgPHNraW5zIDpza2luPVwic2tpblByb3BzLnNraW5cIiBAY2hhbmdlPVwib25Ta2luQ2hhbmdlKCRldmVudClcIiAvPlxuICAgIDwvZGl2PlxuICA8L3RlbXBsYXRlPlxuPC9kaXY+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCBFbW9qaSBmcm9tICcuL0Vtb2ppJ1xuaW1wb3J0IFNraW5zIGZyb20gJy4vc2tpbnMnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IHtcbiAgICBkYXRhOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgdGl0bGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBlbW9qaToge1xuICAgICAgdHlwZTogW1N0cmluZywgT2JqZWN0XVxuICAgIH0sXG4gICAgaWRsZUVtb2ppOiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBPYmplY3RdLFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIHNob3dTa2luVG9uZXM6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiB0cnVlXG4gICAgfSxcbiAgICBlbW9qaVByb3BzOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgc2tpblByb3BzOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgb25Ta2luQ2hhbmdlOiB7XG4gICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGVtb2ppRGF0YSgpIHtcbiAgICAgIGlmICh0aGlzLmVtb2ppKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVtb2ppXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4ge31cbiAgICAgIH1cbiAgICB9LFxuICAgIGVtb2ppU2hvcnROYW1lcygpIHtcbiAgICAgIHJldHVybiB0aGlzLmVtb2ppRGF0YS5zaG9ydF9uYW1lc1xuICAgIH0sXG4gICAgZW1vamlFbW90aWNvbnMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5lbW9qaURhdGEuZW1vdGljb25zXG4gICAgfVxuICB9LFxuICBjb21wb25lbnRzOiB7XG4gICAgRW1vamksXG4gICAgU2tpbnNcbiAgfVxufVxuXG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtc2VhcmNoXCI+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgOnBsYWNlaG9sZGVyPVwiaTE4bi5zZWFyY2hcIiB2LW1vZGVsPVwidmFsdWVcIj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiB7XG4gICAgZGF0YToge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIGkxOG46IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBhdXRvRm9jdXM6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH0sXG4gICAgb25TZWFyY2g6IHtcbiAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9XG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiAnJ1xuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBlbW9qaUluZGV4KCkge1xuICAgICAgcmV0dXJuIHRoaXMuZGF0YVxuICAgIH1cbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICB2YWx1ZSgpIHtcbiAgICAgIHRoaXMuJGVtaXQoJ3NlYXJjaCcsIHRoaXMudmFsdWUpXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgY2xlYXIoKSB7XG4gICAgICB0aGlzLnZhbHVlID0gJydcbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgbGV0ICRpbnB1dCA9IHRoaXMuJGVsLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JylcblxuICAgIGlmICh0aGlzLmF1dG9Gb2N1cykge1xuICAgICAgJGlucHV0LmZvY3VzKClcbiAgICB9XG4gIH1cbn1cblxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG5cbjxkaXYgOmNsYXNzPVwieyAnZW1vamktbWFydC1za2luLXN3YXRjaGVzJzogdHJ1ZSwgJ2Vtb2ppLW1hcnQtc2tpbi1zd2F0Y2hlcy1vcGVuZWQnOiBvcGVuZWQgfVwiPlxuICA8c3BhbiB2LWZvcj1cInNraW5Ub25lIGluIDZcIiA6a2V5PVwic2tpblRvbmVcIiA6Y2xhc3M9XCJ7ICdlbW9qaS1tYXJ0LXNraW4tc3dhdGNoJzogdHJ1ZSwgJ2Vtb2ppLW1hcnQtc2tpbi1zd2F0Y2gtc2VsZWN0ZWQnOiBza2luID09IHNraW5Ub25lIH1cIj5cbiAgICA8c3BhbiA6Y2xhc3M9XCInZW1vamktbWFydC1za2luIGVtb2ppLW1hcnQtc2tpbi10b25lLScgKyBza2luVG9uZVwiIEBjbGljaz1cIm9uQ2xpY2soc2tpblRvbmUpXCI+PC9zcGFuPlxuICA8L3NwYW4+XG48L2Rpdj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczoge1xuICAgIHNraW46IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfVxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBvcGVuZWQ6IGZhbHNlXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgb25DbGljayhza2luVG9uZSkge1xuICAgICAgaWYgKHRoaXMub3BlbmVkKSB7XG4gICAgICAgIGlmIChza2luVG9uZSAhPSB0aGlzLnNraW4pIHtcbiAgICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCBza2luVG9uZSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLm9wZW5lZCA9ICF0aGlzLm9wZW5lZFxuICAgIH1cbiAgfVxufVxuXG48L3NjcmlwdD5cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX3ZtLnZpZXcuY2FuUmVuZGVyXG4gICAgPyBfYyhcbiAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LWVtb2ppXCIsXG4gICAgICAgICAgYXR0cnM6IHsgdGl0bGU6IF92bS52aWV3LnRpdGxlLCBcImRhdGEtdGl0bGVcIjogX3ZtLnRpdGxlIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIG1vdXNlZW50ZXI6IF92bS5vbk1vdXNlRW50ZXIsXG4gICAgICAgICAgICBtb3VzZWxlYXZlOiBfdm0ub25Nb3VzZUxlYXZlLFxuICAgICAgICAgICAgY2xpY2s6IF92bS5vbkNsaWNrXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIHsgY2xhc3M6IF92bS52aWV3LmNzc0NsYXNzLCBzdHlsZTogX3ZtLnZpZXcuY3NzU3R5bGUgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0udmlldy5jb250ZW50KSlcbiAgICAgICAgICBdKVxuICAgICAgICBdXG4gICAgICApXG4gICAgOiBfdm0uX2UoKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnRcIiwgc3R5bGU6IF92bS5jdXN0b21TdHlsZXMgfSxcbiAgICBbXG4gICAgICBfdm0uc2hvd0NhdGVnb3JpZXNcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtYmFyIGVtb2ppLW1hcnQtYmFyLWFuY2hvcnNcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImFuY2hvcnNcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBkYXRhOiBfdm0uZGF0YSxcbiAgICAgICAgICAgICAgICAgIGkxOG46IF92bS5tZXJnZWRJMThuLFxuICAgICAgICAgICAgICAgICAgY29sb3I6IF92bS5jb2xvcixcbiAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IF92bS5jYXRlZ29yaWVzLFxuICAgICAgICAgICAgICAgICAgXCJhY3RpdmUtY2F0ZWdvcnlcIjogX3ZtLmFjdGl2ZUNhdGVnb3J5XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLm9uQW5jaG9yQ2xpY2sgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl90KFxuICAgICAgICBcInNlYXJjaFRlbXBsYXRlXCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0uc2hvd1NlYXJjaFxuICAgICAgICAgICAgPyBfYyhcInNlYXJjaFwiLCB7XG4gICAgICAgICAgICAgICAgcmVmOiBcInNlYXJjaFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBkYXRhOiBfdm0uZGF0YSxcbiAgICAgICAgICAgICAgICAgIGkxOG46IF92bS5tZXJnZWRJMThuLFxuICAgICAgICAgICAgICAgICAgXCJhdXRvLWZvY3VzXCI6IF92bS5hdXRvRm9jdXMsXG4gICAgICAgICAgICAgICAgICBcIm9uLXNlYXJjaFwiOiBfdm0ub25TZWFyY2hcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uOiB7IHNlYXJjaDogX3ZtLm9uU2VhcmNoIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgXSxcbiAgICAgICAge1xuICAgICAgICAgIGRhdGE6IF92bS5kYXRhLFxuICAgICAgICAgIGkxOG46IF92bS5pMThuLFxuICAgICAgICAgIGF1dG9Gb2N1czogX3ZtLmF1dG9Gb2N1cyxcbiAgICAgICAgICBvblNlYXJjaDogX3ZtLm9uU2VhcmNoXG4gICAgICAgIH1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJjYXRlZ29yeVwiLCB7XG4gICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICB2YWx1ZTogX3ZtLnNlYXJjaEVtb2ppcyxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoRW1vamlzXCJcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtc2VhcmNoLXJlc3VsdHNcIixcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBkYXRhOiBfdm0uZGF0YSxcbiAgICAgICAgICBpMThuOiBfdm0ubWVyZ2VkSTE4bixcbiAgICAgICAgICBpZDogXCJzZWFyY2hcIixcbiAgICAgICAgICBuYW1lOiBcIlNlYXJjaFwiLFxuICAgICAgICAgIGVtb2ppczogX3ZtLnNlYXJjaEVtb2ppcyxcbiAgICAgICAgICBcImVtb2ppLXByb3BzXCI6IF92bS5lbW9qaVByb3BzXG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiRHluYW1pY1Njcm9sbGVyXCIsIHtcbiAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgIHZhbHVlOiAhX3ZtLnNlYXJjaEVtb2ppcyxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwiIXNlYXJjaEVtb2ppc1wiXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICByZWY6IFwiZHluU2Nyb2xsZXJcIixcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwic2Nyb2xsZXJcIixcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBpdGVtczogX3ZtLnNjcm9sbGVyQ2F0ZWdvcmllcyxcbiAgICAgICAgICBcIm1pbi1pdGVtLXNpemVcIjogNjAsXG4gICAgICAgICAgYnVmZmVyOiA0MDAsXG4gICAgICAgICAgXCJrZXktZmllbGRcIjogXCJpZFwiLFxuICAgICAgICAgIFwiZW1pdC11cGRhdGVcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBvbjogeyB1cGRhdGU6IF92bS5vblNjcm9sbFVwZGF0ZSB9LFxuICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHJlZikge1xuICAgICAgICAgICAgICB2YXIgaXRlbSA9IHJlZi5pdGVtXG4gICAgICAgICAgICAgIHZhciBhY3RpdmUgPSByZWYuYWN0aXZlXG4gICAgICAgICAgICAgIHZhciBpbmRleCA9IHJlZi5pbmRleFxuICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJEeW5hbWljU2Nyb2xsZXJJdGVtXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGl0ZW06IGl0ZW0sIGFjdGl2ZTogYWN0aXZlLCBcImRhdGEtaW5kZXhcIjogaW5kZXggfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJjYXRlZ29yeVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGl0ZW0uc2hvdyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpdGVtLnNob3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAga2V5OiBpdGVtLmNhdGVnb3J5LmlkLFxuICAgICAgICAgICAgICAgICAgICAgIHJlZjogXCJjYXRlZ29yaWVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGl0ZW0uZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGkxOG46IGl0ZW0ubWVyZ2VkSTE4bixcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpdGVtLmNhdGVnb3J5LmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogaXRlbS5jYXRlZ29yeS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW1vamlzOiBpdGVtLmNhdGVnb3J5LmVtb2ppcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZW1vamktcHJvcHNcIjogaXRlbS5lbW9qaVByb3BzXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIF0pXG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uX3QoXG4gICAgICAgIFwicHJldmlld1RlbXBsYXRlXCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0uc2hvd1ByZXZpZXdcbiAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtYmFyIGVtb2ppLW1hcnQtYmFyLXByZXZpZXdcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwicHJldmlld1wiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZGF0YTogX3ZtLmRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IF92bS50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICBlbW9qaTogX3ZtLnByZXZpZXdFbW9qaSxcbiAgICAgICAgICAgICAgICAgICAgICBcImlkbGUtZW1vamlcIjogX3ZtLmlkbGVFbW9qaSxcbiAgICAgICAgICAgICAgICAgICAgICBcInNob3ctc2tpbi10b25lc1wiOiBfdm0uc2hvd1NraW5Ub25lcyxcbiAgICAgICAgICAgICAgICAgICAgICBcImVtb2ppLXByb3BzXCI6IF92bS5lbW9qaVByb3BzLFxuICAgICAgICAgICAgICAgICAgICAgIFwic2tpbi1wcm9wc1wiOiBfdm0uc2tpblByb3BzLFxuICAgICAgICAgICAgICAgICAgICAgIFwib24tc2tpbi1jaGFuZ2VcIjogX3ZtLm9uU2tpbkNoYW5nZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgIF0sXG4gICAgICAgIHtcbiAgICAgICAgICBkYXRhOiBfdm0uZGF0YSxcbiAgICAgICAgICB0aXRsZTogX3ZtLnRpdGxlLFxuICAgICAgICAgIGVtb2ppOiBfdm0ucHJldmlld0Vtb2ppLFxuICAgICAgICAgIGlkbGVFbW9qaTogX3ZtLmlkbGVFbW9qaSxcbiAgICAgICAgICBzaG93U2tpblRvbmVzOiBfdm0uc2hvd1NraW5Ub25lcyxcbiAgICAgICAgICBlbW9qaVByb3BzOiBfdm0uZW1vamlQcm9wcyxcbiAgICAgICAgICBza2luUHJvcHM6IF92bS5za2luUHJvcHMsXG4gICAgICAgICAgb25Ta2luQ2hhbmdlOiBfdm0ub25Ta2luQ2hhbmdlXG4gICAgICAgIH1cbiAgICAgIClcbiAgICBdLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQgZW1vamktbWFydC1zdGF0aWNcIiwgc3R5bGU6IF92bS5jdXN0b21TdHlsZXMgfSxcbiAgICBbXG4gICAgICBfdm0uc2hvd0NhdGVnb3JpZXNcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtYmFyIGVtb2ppLW1hcnQtYmFyLWFuY2hvcnNcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImFuY2hvcnNcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBkYXRhOiBfdm0uZGF0YSxcbiAgICAgICAgICAgICAgICAgIGkxOG46IF92bS5tZXJnZWRJMThuLFxuICAgICAgICAgICAgICAgICAgY29sb3I6IF92bS5jb2xvcixcbiAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IF92bS5jYXRlZ29yaWVzLFxuICAgICAgICAgICAgICAgICAgXCJhY3RpdmUtY2F0ZWdvcnlcIjogX3ZtLmFjdGl2ZUNhdGVnb3J5XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLm9uQW5jaG9yQ2xpY2sgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl90KFxuICAgICAgICBcInNlYXJjaFRlbXBsYXRlXCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0uc2hvd1NlYXJjaFxuICAgICAgICAgICAgPyBfYyhcInNlYXJjaFwiLCB7XG4gICAgICAgICAgICAgICAgcmVmOiBcInNlYXJjaFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBkYXRhOiBfdm0uZGF0YSxcbiAgICAgICAgICAgICAgICAgIGkxOG46IF92bS5tZXJnZWRJMThuLFxuICAgICAgICAgICAgICAgICAgXCJhdXRvLWZvY3VzXCI6IF92bS5hdXRvRm9jdXMsXG4gICAgICAgICAgICAgICAgICBcIm9uLXNlYXJjaFwiOiBfdm0ub25TZWFyY2hcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uOiB7IHNlYXJjaDogX3ZtLm9uU2VhcmNoIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgXSxcbiAgICAgICAge1xuICAgICAgICAgIGRhdGE6IF92bS5kYXRhLFxuICAgICAgICAgIGkxOG46IF92bS5pMThuLFxuICAgICAgICAgIGF1dG9Gb2N1czogX3ZtLmF1dG9Gb2N1cyxcbiAgICAgICAgICBvblNlYXJjaDogX3ZtLm9uU2VhcmNoXG4gICAgICAgIH1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICByZWY6IFwic2Nyb2xsXCIsXG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1zY3JvbGxcIixcbiAgICAgICAgICBvbjogeyBzY3JvbGw6IF92bS5vblNjcm9sbCB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImNhdGVnb3J5XCIsIHtcbiAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2hFbW9qaXMsXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2hFbW9qaXNcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgZGF0YTogX3ZtLmRhdGEsXG4gICAgICAgICAgICAgIGkxOG46IF92bS5tZXJnZWRJMThuLFxuICAgICAgICAgICAgICBpZDogXCJzZWFyY2hcIixcbiAgICAgICAgICAgICAgbmFtZTogXCJTZWFyY2hcIixcbiAgICAgICAgICAgICAgZW1vamlzOiBfdm0uc2VhcmNoRW1vamlzLFxuICAgICAgICAgICAgICBcImVtb2ppLXByb3BzXCI6IF92bS5lbW9qaVByb3BzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uX2woX3ZtLmZpbHRlcmVkQ2F0ZWdvcmllcywgZnVuY3Rpb24oY2F0ZWdvcnkpIHtcbiAgICAgICAgICAgIHJldHVybiBfYyhcImNhdGVnb3J5XCIsIHtcbiAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOlxuICAgICAgICAgICAgICAgICAgICAhX3ZtLnNlYXJjaEVtb2ppcyAmJlxuICAgICAgICAgICAgICAgICAgICAoX3ZtLmluZmluaXRlU2Nyb2xsIHx8IGNhdGVnb3J5ID09IF92bS5hY3RpdmVDYXRlZ29yeSksXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOlxuICAgICAgICAgICAgICAgICAgICBcIiFzZWFyY2hFbW9qaXMgJiYgKGluZmluaXRlU2Nyb2xsIHx8IGNhdGVnb3J5ID09IGFjdGl2ZUNhdGVnb3J5KVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBrZXk6IGNhdGVnb3J5LmlkLFxuICAgICAgICAgICAgICByZWY6IFwiY2F0ZWdvcmllc1wiLFxuICAgICAgICAgICAgICByZWZJbkZvcjogdHJ1ZSxcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBkYXRhOiBfdm0uZGF0YSxcbiAgICAgICAgICAgICAgICBpMThuOiBfdm0ubWVyZ2VkSTE4bixcbiAgICAgICAgICAgICAgICBpZDogY2F0ZWdvcnkuaWQsXG4gICAgICAgICAgICAgICAgbmFtZTogY2F0ZWdvcnkubmFtZSxcbiAgICAgICAgICAgICAgICBlbW9qaXM6IGNhdGVnb3J5LmVtb2ppcyxcbiAgICAgICAgICAgICAgICBcImVtb2ppLXByb3BzXCI6IF92bS5lbW9qaVByb3BzXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMlxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uX3QoXG4gICAgICAgIFwicHJldmlld1RlbXBsYXRlXCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0uc2hvd1ByZXZpZXdcbiAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtYmFyIGVtb2ppLW1hcnQtYmFyLXByZXZpZXdcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwicHJldmlld1wiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZGF0YTogX3ZtLmRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IF92bS50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICBlbW9qaTogX3ZtLnByZXZpZXdFbW9qaSxcbiAgICAgICAgICAgICAgICAgICAgICBcImlkbGUtZW1vamlcIjogX3ZtLmlkbGVFbW9qaSxcbiAgICAgICAgICAgICAgICAgICAgICBcInNob3ctc2tpbi10b25lc1wiOiBfdm0uc2hvd1NraW5Ub25lcyxcbiAgICAgICAgICAgICAgICAgICAgICBcImVtb2ppLXByb3BzXCI6IF92bS5lbW9qaVByb3BzLFxuICAgICAgICAgICAgICAgICAgICAgIFwic2tpbi1wcm9wc1wiOiBfdm0uc2tpblByb3BzLFxuICAgICAgICAgICAgICAgICAgICAgIFwib24tc2tpbi1jaGFuZ2VcIjogX3ZtLm9uU2tpbkNoYW5nZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgIF0sXG4gICAgICAgIHtcbiAgICAgICAgICBkYXRhOiBfdm0uZGF0YSxcbiAgICAgICAgICB0aXRsZTogX3ZtLnRpdGxlLFxuICAgICAgICAgIGVtb2ppOiBfdm0ucHJldmlld0Vtb2ppLFxuICAgICAgICAgIGlkbGVFbW9qaTogX3ZtLmlkbGVFbW9qaSxcbiAgICAgICAgICBzaG93U2tpblRvbmVzOiBfdm0uc2hvd1NraW5Ub25lcyxcbiAgICAgICAgICBlbW9qaVByb3BzOiBfdm0uZW1vamlQcm9wcyxcbiAgICAgICAgICBza2luUHJvcHM6IF92bS5za2luUHJvcHMsXG4gICAgICAgICAgb25Ta2luQ2hhbmdlOiBfdm0ub25Ta2luQ2hhbmdlXG4gICAgICAgIH1cbiAgICAgIClcbiAgICBdLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtYW5jaG9yc1wiIH0sXG4gICAgX3ZtLl9sKF92bS5jYXRlZ29yaWVzLCBmdW5jdGlvbihjYXRlZ29yeSkge1xuICAgICAgcmV0dXJuIF9jKFxuICAgICAgICBcInNwYW5cIixcbiAgICAgICAge1xuICAgICAgICAgIGtleTogY2F0ZWdvcnkuaWQsXG4gICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgIFwiZW1vamktbWFydC1hbmNob3JcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiZW1vamktbWFydC1hbmNob3Itc2VsZWN0ZWRcIjogY2F0ZWdvcnkuaWQgPT0gX3ZtLmFjdGl2ZUNhdGVnb3J5LmlkXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgY29sb3I6IGNhdGVnb3J5LmlkID09IF92bS5hY3RpdmVDYXRlZ29yeS5pZCA/IF92bS5jb2xvciA6IFwiXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIGF0dHJzOiB7IFwiZGF0YS10aXRsZVwiOiBfdm0uaTE4bi5jYXRlZ29yaWVzW2NhdGVnb3J5LmlkXSB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uJGVtaXQoXCJjbGlja1wiLCBjYXRlZ29yeSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS5zdmdzW2NhdGVnb3J5LmlkXSkgfSB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwic3BhblwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LWFuY2hvci1iYXJcIixcbiAgICAgICAgICAgIHN0eWxlOiB7IGJhY2tncm91bmRDb2xvcjogX3ZtLmNvbG9yIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdXG4gICAgICApXG4gICAgfSksXG4gICAgMFxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfdm0uaXNWaXNpYmxlICYmIChfdm0uaXNTZWFyY2ggfHwgX3ZtLmhhc1Jlc3VsdHMpXG4gICAgPyBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICBcImVtb2ppLW1hcnQtY2F0ZWdvcnlcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiZW1vamktbWFydC1uby1yZXN1bHRzXCI6ICFfdm0uaGFzUmVzdWx0c1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1jYXRlZ29yeS1sYWJlbFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0uaTE4bi5jYXRlZ29yaWVzW192bS5pZF0pKV0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uX2woX3ZtLmVtb2ppT2JqZWN0cywgZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICB2YXIgZW1vamlPYmplY3QgPSByZWYuZW1vamlPYmplY3RcbiAgICAgICAgICAgIHZhciBlbW9qaVZpZXcgPSByZWYuZW1vamlWaWV3XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICBlbW9qaVZpZXcuY2FuUmVuZGVyXG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LWVtb2ppXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS10aXRsZVwiOiBlbW9qaU9iamVjdC5zaG9ydF9uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGVtb2ppVmlldy50aXRsZVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdXNlZW50ZXI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZW1vamlQcm9wcy5vbkVudGVyKGVtb2ppVmlldy5nZXRFbW9qaSgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdXNlbGVhdmU6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZW1vamlQcm9wcy5vbkxlYXZlKGVtb2ppVmlldy5nZXRFbW9qaSgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmVtb2ppUHJvcHMub25DbGljayhlbW9qaVZpZXcuZ2V0RW1vamkoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogZW1vamlWaWV3LmNzc0NsYXNzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogZW1vamlWaWV3LmNzc1N0eWxlXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoZW1vamlWaWV3LmNvbnRlbnQpKV1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAhX3ZtLmhhc1Jlc3VsdHNcbiAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImVtb2ppXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBfdm0uZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICBlbW9qaTogXCJzbGV1dGhfb3Jfc3B5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgbmF0aXZlOiBfdm0uZW1vamlQcm9wcy5uYXRpdmUsXG4gICAgICAgICAgICAgICAgICAgICAgc2tpbjogX3ZtLmVtb2ppUHJvcHMuc2tpbixcbiAgICAgICAgICAgICAgICAgICAgICBzZXQ6IF92bS5lbW9qaVByb3BzLnNldFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtbm8tcmVzdWx0cy1sYWJlbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uaTE4bi5ub3Rmb3VuZCkpXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgIF0sXG4gICAgICAgIDJcbiAgICAgIClcbiAgICA6IF92bS5fZSgpXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1wcmV2aWV3XCIgfSxcbiAgICBbXG4gICAgICBfdm0uZW1vamlcbiAgICAgICAgPyBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LXByZXZpZXctZW1vamlcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJlbW9qaVwiLCB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiBfdm0uZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgZW1vamk6IF92bS5lbW9qaSxcbiAgICAgICAgICAgICAgICAgICAgbmF0aXZlOiBfdm0uZW1vamlQcm9wcy5uYXRpdmUsXG4gICAgICAgICAgICAgICAgICAgIHNraW46IF92bS5lbW9qaVByb3BzLnNraW4sXG4gICAgICAgICAgICAgICAgICAgIHNldDogX3ZtLmVtb2ppUHJvcHMuc2V0XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtcHJldmlldy1kYXRhXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtcHJldmlldy1uYW1lXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmVtb2ppLm5hbWUpKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtcHJldmlldy1zaG9ydG5hbWVzXCIgfSxcbiAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmVtb2ppU2hvcnROYW1lcywgZnVuY3Rpb24oc2hvcnROYW1lKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiBzaG9ydE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1wcmV2aWV3LXNob3J0bmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCI6XCIgKyBfdm0uX3Moc2hvcnROYW1lKSArIFwiOlwiKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LXByZXZpZXctZW1vdGljb25zXCIgfSxcbiAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmVtb2ppRW1vdGljb25zLCBmdW5jdGlvbihlbW90aWNvbikge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGtleTogZW1vdGljb24sXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1wcmV2aWV3LWVtb3RpY29uXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoZW1vdGljb24pKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXVxuICAgICAgICA6IFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtcHJldmlldy1lbW9qaVwiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImVtb2ppXCIsIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IF92bS5kYXRhLFxuICAgICAgICAgICAgICAgICAgICBlbW9qaTogX3ZtLmlkbGVFbW9qaSxcbiAgICAgICAgICAgICAgICAgICAgbmF0aXZlOiBfdm0uZW1vamlQcm9wcy5uYXRpdmUsXG4gICAgICAgICAgICAgICAgICAgIHNraW46IF92bS5lbW9qaVByb3BzLnNraW4sXG4gICAgICAgICAgICAgICAgICAgIHNldDogX3ZtLmVtb2ppUHJvcHMuc2V0XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtcHJldmlldy1kYXRhXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LXRpdGxlLWxhYmVsXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnRpdGxlKSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS5zaG93U2tpblRvbmVzXG4gICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LXByZXZpZXctc2tpbnNcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInNraW5zXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBza2luOiBfdm0uc2tpblByb3BzLnNraW4gfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vblNraW5DaGFuZ2UoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgXVxuICAgIF0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtc2VhcmNoXCIgfSwgW1xuICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgIHZhbHVlOiBfdm0udmFsdWUsXG4gICAgICAgICAgZXhwcmVzc2lvbjogXCJ2YWx1ZVwiXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IF92bS5pMThuLnNlYXJjaCB9LFxuICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS52YWx1ZSB9LFxuICAgICAgb246IHtcbiAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuICAgICAgICAgIF92bS52YWx1ZSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIGNsYXNzOiB7XG4gICAgICAgIFwiZW1vamktbWFydC1za2luLXN3YXRjaGVzXCI6IHRydWUsXG4gICAgICAgIFwiZW1vamktbWFydC1za2luLXN3YXRjaGVzLW9wZW5lZFwiOiBfdm0ub3BlbmVkXG4gICAgICB9XG4gICAgfSxcbiAgICBfdm0uX2woNiwgZnVuY3Rpb24oc2tpblRvbmUpIHtcbiAgICAgIHJldHVybiBfYyhcbiAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6IHNraW5Ub25lLFxuICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICBcImVtb2ppLW1hcnQtc2tpbi1zd2F0Y2hcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiZW1vamktbWFydC1za2luLXN3YXRjaC1zZWxlY3RlZFwiOiBfdm0uc2tpbiA9PSBza2luVG9uZVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwic3BhblwiLCB7XG4gICAgICAgICAgICBjbGFzczogXCJlbW9qaS1tYXJ0LXNraW4gZW1vamktbWFydC1za2luLXRvbmUtXCIgKyBza2luVG9uZSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9uQ2xpY2soc2tpblRvbmUpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdXG4gICAgICApXG4gICAgfSksXG4gICAgMFxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiLyogZ2xvYmFscyBfX1ZVRV9TU1JfQ09OVEVYVF9fICovXG5cbi8vIElNUE9SVEFOVDogRG8gTk9UIHVzZSBFUzIwMTUgZmVhdHVyZXMgaW4gdGhpcyBmaWxlIChleGNlcHQgZm9yIG1vZHVsZXMpLlxuLy8gVGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICBzY3JpcHRFeHBvcnRzLFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZnVuY3Rpb25hbFRlbXBsYXRlLFxuICBpbmplY3RTdHlsZXMsXG4gIHNjb3BlSWQsXG4gIG1vZHVsZUlkZW50aWZpZXIsIC8qIHNlcnZlciBvbmx5ICovXG4gIHNoYWRvd01vZGUgLyogdnVlLWNsaSBvbmx5ICovXG4pIHtcbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nXG4gICAgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnNcbiAgICA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChyZW5kZXIpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IHJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gc3RhdGljUmVuZGVyRm5zXG4gICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlXG4gIH1cblxuICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gIGlmIChmdW5jdGlvbmFsVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLmZ1bmN0aW9uYWwgPSB0cnVlXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSAnZGF0YS12LScgKyBzY29wZUlkXG4gIH1cblxuICB2YXIgaG9va1xuICBpZiAobW9kdWxlSWRlbnRpZmllcikgeyAvLyBzZXJ2ZXIgYnVpbGRcbiAgICBob29rID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIC8vIDIuMyBpbmplY3Rpb25cbiAgICAgIGNvbnRleHQgPVxuICAgICAgICBjb250ZXh0IHx8IC8vIGNhY2hlZCBjYWxsXG4gICAgICAgICh0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0KSB8fCAvLyBzdGF0ZWZ1bFxuICAgICAgICAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuJHZub2RlICYmIHRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KSAvLyBmdW5jdGlvbmFsXG4gICAgICAvLyAyLjIgd2l0aCBydW5Jbk5ld0NvbnRleHQ6IHRydWVcbiAgICAgIGlmICghY29udGV4dCAmJiB0eXBlb2YgX19WVUVfU1NSX0NPTlRFWFRfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29udGV4dCA9IF9fVlVFX1NTUl9DT05URVhUX19cbiAgICAgIH1cbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgc3R5bGVzXG4gICAgICBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIGNvbnRleHQpXG4gICAgICB9XG4gICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgbW9kdWxlIGlkZW50aWZpZXIgZm9yIGFzeW5jIGNodW5rIGluZmVycmVuY2VcbiAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzKSB7XG4gICAgICAgIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzLmFkZChtb2R1bGVJZGVudGlmaWVyKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyB1c2VkIGJ5IHNzciBpbiBjYXNlIGNvbXBvbmVudCBpcyBjYWNoZWQgYW5kIGJlZm9yZUNyZWF0ZVxuICAgIC8vIG5ldmVyIGdldHMgY2FsbGVkXG4gICAgb3B0aW9ucy5fc3NyUmVnaXN0ZXIgPSBob29rXG4gIH0gZWxzZSBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgaG9vayA9IHNoYWRvd01vZGVcbiAgICAgID8gZnVuY3Rpb24gKCkgeyBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCB0aGlzLiRyb290LiRvcHRpb25zLnNoYWRvd1Jvb3QpIH1cbiAgICAgIDogaW5qZWN0U3R5bGVzXG4gIH1cblxuICBpZiAoaG9vaykge1xuICAgIGlmIChvcHRpb25zLmZ1bmN0aW9uYWwpIHtcbiAgICAgIC8vIGZvciB0ZW1wbGF0ZS1vbmx5IGhvdC1yZWxvYWQgYmVjYXVzZSBpbiB0aGF0IGNhc2UgdGhlIHJlbmRlciBmbiBkb2Vzbid0XG4gICAgICAvLyBnbyB0aHJvdWdoIHRoZSBub3JtYWxpemVyXG4gICAgICBvcHRpb25zLl9pbmplY3RTdHlsZXMgPSBob29rXG4gICAgICAvLyByZWdpc3RlciBmb3IgZnVuY3Rpb2FsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgdmFyIG9yaWdpbmFsUmVuZGVyID0gb3B0aW9ucy5yZW5kZXJcbiAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uIChoLCBjb250ZXh0KSB7XG4gICAgICAgIGhvb2suY2FsbChjb250ZXh0KVxuICAgICAgICByZXR1cm4gb3JpZ2luYWxSZW5kZXIoaCwgY29udGV4dClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCByZWdpc3RyYXRpb24gYXMgYmVmb3JlQ3JlYXRlIGhvb2tcbiAgICAgIHZhciBleGlzdGluZyA9IG9wdGlvbnMuYmVmb3JlQ3JlYXRlXG4gICAgICBvcHRpb25zLmJlZm9yZUNyZWF0ZSA9IGV4aXN0aW5nXG4gICAgICAgID8gW10uY29uY2F0KGV4aXN0aW5nLCBob29rKVxuICAgICAgICA6IFtob29rXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cbiIsImltcG9ydCBWdWUgZnJvbSAndnVlJztcblxudmFyIGNvbmZpZyA9IHtcbiAgaXRlbXNMaW1pdDogMTAwMFxufTtcblxuZnVuY3Rpb24gZ2V0SW50ZXJuZXRFeHBsb3JlclZlcnNpb24oKSB7XG5cdHZhciB1YSA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50O1xuXG5cdHZhciBtc2llID0gdWEuaW5kZXhPZignTVNJRSAnKTtcblx0aWYgKG1zaWUgPiAwKSB7XG5cdFx0Ly8gSUUgMTAgb3Igb2xkZXIgPT4gcmV0dXJuIHZlcnNpb24gbnVtYmVyXG5cdFx0cmV0dXJuIHBhcnNlSW50KHVhLnN1YnN0cmluZyhtc2llICsgNSwgdWEuaW5kZXhPZignLicsIG1zaWUpKSwgMTApO1xuXHR9XG5cblx0dmFyIHRyaWRlbnQgPSB1YS5pbmRleE9mKCdUcmlkZW50LycpO1xuXHRpZiAodHJpZGVudCA+IDApIHtcblx0XHQvLyBJRSAxMSA9PiByZXR1cm4gdmVyc2lvbiBudW1iZXJcblx0XHR2YXIgcnYgPSB1YS5pbmRleE9mKCdydjonKTtcblx0XHRyZXR1cm4gcGFyc2VJbnQodWEuc3Vic3RyaW5nKHJ2ICsgMywgdWEuaW5kZXhPZignLicsIHJ2KSksIDEwKTtcblx0fVxuXG5cdHZhciBlZGdlID0gdWEuaW5kZXhPZignRWRnZS8nKTtcblx0aWYgKGVkZ2UgPiAwKSB7XG5cdFx0Ly8gRWRnZSAoSUUgMTIrKSA9PiByZXR1cm4gdmVyc2lvbiBudW1iZXJcblx0XHRyZXR1cm4gcGFyc2VJbnQodWEuc3Vic3RyaW5nKGVkZ2UgKyA1LCB1YS5pbmRleE9mKCcuJywgZWRnZSkpLCAxMCk7XG5cdH1cblxuXHQvLyBvdGhlciBicm93c2VyXG5cdHJldHVybiAtMTtcbn1cblxudmFyIGlzSUUgPSB2b2lkIDA7XG5cbmZ1bmN0aW9uIGluaXRDb21wYXQoKSB7XG5cdGlmICghaW5pdENvbXBhdC5pbml0KSB7XG5cdFx0aW5pdENvbXBhdC5pbml0ID0gdHJ1ZTtcblx0XHRpc0lFID0gZ2V0SW50ZXJuZXRFeHBsb3JlclZlcnNpb24oKSAhPT0gLTE7XG5cdH1cbn1cblxudmFyIFJlc2l6ZU9ic2VydmVyID0geyByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcblx0XHR2YXIgX3ZtID0gdGhpczt2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oO3JldHVybiBfYygnZGl2JywgeyBzdGF0aWNDbGFzczogXCJyZXNpemUtb2JzZXJ2ZXJcIiwgYXR0cnM6IHsgXCJ0YWJpbmRleFwiOiBcIi0xXCIgfSB9KTtcblx0fSwgc3RhdGljUmVuZGVyRm5zOiBbXSwgX3Njb3BlSWQ6ICdkYXRhLXYtYjMyOWVlNGMnLFxuXHRuYW1lOiAncmVzaXplLW9ic2VydmVyJyxcblxuXHRtZXRob2RzOiB7XG5cdFx0Y29tcGFyZUFuZE5vdGlmeTogZnVuY3Rpb24gY29tcGFyZUFuZE5vdGlmeSgpIHtcblx0XHRcdGlmICh0aGlzLl93ICE9PSB0aGlzLiRlbC5vZmZzZXRXaWR0aCB8fCB0aGlzLl9oICE9PSB0aGlzLiRlbC5vZmZzZXRIZWlnaHQpIHtcblx0XHRcdFx0dGhpcy5fdyA9IHRoaXMuJGVsLm9mZnNldFdpZHRoO1xuXHRcdFx0XHR0aGlzLl9oID0gdGhpcy4kZWwub2Zmc2V0SGVpZ2h0O1xuXHRcdFx0XHR0aGlzLiRlbWl0KCdub3RpZnknKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdGFkZFJlc2l6ZUhhbmRsZXJzOiBmdW5jdGlvbiBhZGRSZXNpemVIYW5kbGVycygpIHtcblx0XHRcdHRoaXMuX3Jlc2l6ZU9iamVjdC5jb250ZW50RG9jdW1lbnQuZGVmYXVsdFZpZXcuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5jb21wYXJlQW5kTm90aWZ5KTtcblx0XHRcdHRoaXMuY29tcGFyZUFuZE5vdGlmeSgpO1xuXHRcdH0sXG5cdFx0cmVtb3ZlUmVzaXplSGFuZGxlcnM6IGZ1bmN0aW9uIHJlbW92ZVJlc2l6ZUhhbmRsZXJzKCkge1xuXHRcdFx0aWYgKHRoaXMuX3Jlc2l6ZU9iamVjdCAmJiB0aGlzLl9yZXNpemVPYmplY3Qub25sb2FkKSB7XG5cdFx0XHRcdGlmICghaXNJRSAmJiB0aGlzLl9yZXNpemVPYmplY3QuY29udGVudERvY3VtZW50KSB7XG5cdFx0XHRcdFx0dGhpcy5fcmVzaXplT2JqZWN0LmNvbnRlbnREb2N1bWVudC5kZWZhdWx0Vmlldy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmNvbXBhcmVBbmROb3RpZnkpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGRlbGV0ZSB0aGlzLl9yZXNpemVPYmplY3Qub25sb2FkO1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblxuXHRtb3VudGVkOiBmdW5jdGlvbiBtb3VudGVkKCkge1xuXHRcdHZhciBfdGhpcyA9IHRoaXM7XG5cblx0XHRpbml0Q29tcGF0KCk7XG5cdFx0dGhpcy4kbmV4dFRpY2soZnVuY3Rpb24gKCkge1xuXHRcdFx0X3RoaXMuX3cgPSBfdGhpcy4kZWwub2Zmc2V0V2lkdGg7XG5cdFx0XHRfdGhpcy5faCA9IF90aGlzLiRlbC5vZmZzZXRIZWlnaHQ7XG5cdFx0fSk7XG5cdFx0dmFyIG9iamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29iamVjdCcpO1xuXHRcdHRoaXMuX3Jlc2l6ZU9iamVjdCA9IG9iamVjdDtcblx0XHRvYmplY3Quc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG5cdFx0b2JqZWN0LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAtMSk7XG5cdFx0b2JqZWN0Lm9ubG9hZCA9IHRoaXMuYWRkUmVzaXplSGFuZGxlcnM7XG5cdFx0b2JqZWN0LnR5cGUgPSAndGV4dC9odG1sJztcblx0XHRpZiAoaXNJRSkge1xuXHRcdFx0dGhpcy4kZWwuYXBwZW5kQ2hpbGQob2JqZWN0KTtcblx0XHR9XG5cdFx0b2JqZWN0LmRhdGEgPSAnYWJvdXQ6YmxhbmsnO1xuXHRcdGlmICghaXNJRSkge1xuXHRcdFx0dGhpcy4kZWwuYXBwZW5kQ2hpbGQob2JqZWN0KTtcblx0XHR9XG5cdH0sXG5cdGJlZm9yZURlc3Ryb3k6IGZ1bmN0aW9uIGJlZm9yZURlc3Ryb3koKSB7XG5cdFx0dGhpcy5yZW1vdmVSZXNpemVIYW5kbGVycygpO1xuXHR9XG59O1xuXG4vLyBJbnN0YWxsIHRoZSBjb21wb25lbnRzXG5mdW5jdGlvbiBpbnN0YWxsKFZ1ZSQkMSkge1xuXHRWdWUkJDEuY29tcG9uZW50KCdyZXNpemUtb2JzZXJ2ZXInLCBSZXNpemVPYnNlcnZlcik7XG5cdFZ1ZSQkMS5jb21wb25lbnQoJ1Jlc2l6ZU9ic2VydmVyJywgUmVzaXplT2JzZXJ2ZXIpO1xufVxuXG4vLyBQbHVnaW5cbnZhciBwbHVnaW4kMiA9IHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZlcnNpb246IFwiMC40LjVcIixcblx0aW5zdGFsbDogaW5zdGFsbFxufTtcblxuLy8gQXV0by1pbnN0YWxsXG52YXIgR2xvYmFsVnVlJDEgPSBudWxsO1xuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG5cdEdsb2JhbFZ1ZSQxID0gd2luZG93LlZ1ZTtcbn0gZWxzZSBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0R2xvYmFsVnVlJDEgPSBnbG9iYWwuVnVlO1xufVxuaWYgKEdsb2JhbFZ1ZSQxKSB7XG5cdEdsb2JhbFZ1ZSQxLnVzZShwbHVnaW4kMik7XG59XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqO1xufSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG59O1xuXG5cblxuXG5cbnZhciBhc3luY0dlbmVyYXRvciA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQXdhaXRWYWx1ZSh2YWx1ZSkge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIEFzeW5jR2VuZXJhdG9yKGdlbikge1xuICAgIHZhciBmcm9udCwgYmFjaztcblxuICAgIGZ1bmN0aW9uIHNlbmQoa2V5LCBhcmcpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHZhciByZXF1ZXN0ID0ge1xuICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgIGFyZzogYXJnLFxuICAgICAgICAgIHJlc29sdmU6IHJlc29sdmUsXG4gICAgICAgICAgcmVqZWN0OiByZWplY3QsXG4gICAgICAgICAgbmV4dDogbnVsbFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChiYWNrKSB7XG4gICAgICAgICAgYmFjayA9IGJhY2submV4dCA9IHJlcXVlc3Q7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZnJvbnQgPSBiYWNrID0gcmVxdWVzdDtcbiAgICAgICAgICByZXN1bWUoa2V5LCBhcmcpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXN1bWUoa2V5LCBhcmcpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBnZW5ba2V5XShhcmcpO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG5cbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgQXdhaXRWYWx1ZSkge1xuICAgICAgICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZS52YWx1ZSkudGhlbihmdW5jdGlvbiAoYXJnKSB7XG4gICAgICAgICAgICByZXN1bWUoXCJuZXh0XCIsIGFyZyk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24gKGFyZykge1xuICAgICAgICAgICAgcmVzdW1lKFwidGhyb3dcIiwgYXJnKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXR0bGUocmVzdWx0LmRvbmUgPyBcInJldHVyblwiIDogXCJub3JtYWxcIiwgcmVzdWx0LnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHNldHRsZShcInRocm93XCIsIGVycik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0dGxlKHR5cGUsIHZhbHVlKSB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSBcInJldHVyblwiOlxuICAgICAgICAgIGZyb250LnJlc29sdmUoe1xuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgZG9uZTogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCJ0aHJvd1wiOlxuICAgICAgICAgIGZyb250LnJlamVjdCh2YWx1ZSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBmcm9udC5yZXNvbHZlKHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIGRvbmU6IGZhbHNlXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGZyb250ID0gZnJvbnQubmV4dDtcblxuICAgICAgaWYgKGZyb250KSB7XG4gICAgICAgIHJlc3VtZShmcm9udC5rZXksIGZyb250LmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBiYWNrID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9pbnZva2UgPSBzZW5kO1xuXG4gICAgaWYgKHR5cGVvZiBnZW4ucmV0dXJuICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHRoaXMucmV0dXJuID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHtcbiAgICBBc3luY0dlbmVyYXRvci5wcm90b3R5cGVbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgfVxuXG4gIEFzeW5jR2VuZXJhdG9yLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKGFyZykge1xuICAgIHJldHVybiB0aGlzLl9pbnZva2UoXCJuZXh0XCIsIGFyZyk7XG4gIH07XG5cbiAgQXN5bmNHZW5lcmF0b3IucHJvdG90eXBlLnRocm93ID0gZnVuY3Rpb24gKGFyZykge1xuICAgIHJldHVybiB0aGlzLl9pbnZva2UoXCJ0aHJvd1wiLCBhcmcpO1xuICB9O1xuXG4gIEFzeW5jR2VuZXJhdG9yLnByb3RvdHlwZS5yZXR1cm4gPSBmdW5jdGlvbiAoYXJnKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ludm9rZShcInJldHVyblwiLCBhcmcpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgd3JhcDogZnVuY3Rpb24gKGZuKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IEFzeW5jR2VuZXJhdG9yKGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgICAgfTtcbiAgICB9LFxuICAgIGF3YWl0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHJldHVybiBuZXcgQXdhaXRWYWx1ZSh2YWx1ZSk7XG4gICAgfVxuICB9O1xufSgpO1xuXG5cblxuXG5cbnZhciBjbGFzc0NhbGxDaGVjayA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59O1xuXG52YXIgY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH07XG59KCk7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxudmFyIHRvQ29uc3VtYWJsZUFycmF5ID0gZnVuY3Rpb24gKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgYXJyMltpXSA9IGFycltpXTtcblxuICAgIHJldHVybiBhcnIyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBBcnJheS5mcm9tKGFycik7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIHByb2Nlc3NPcHRpb25zKHZhbHVlKSB7XG5cdHZhciBvcHRpb25zID0gdm9pZCAwO1xuXHRpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0Ly8gU2ltcGxlIG9wdGlvbnMgKGNhbGxiYWNrLW9ubHkpXG5cdFx0b3B0aW9ucyA9IHtcblx0XHRcdGNhbGxiYWNrOiB2YWx1ZVxuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0Ly8gT3B0aW9ucyBvYmplY3Rcblx0XHRvcHRpb25zID0gdmFsdWU7XG5cdH1cblx0cmV0dXJuIG9wdGlvbnM7XG59XG5cbmZ1bmN0aW9uIHRocm90dGxlKGNhbGxiYWNrLCBkZWxheSkge1xuXHR2YXIgdGltZW91dCA9IHZvaWQgMDtcblx0dmFyIGxhc3RTdGF0ZSA9IHZvaWQgMDtcblx0dmFyIGN1cnJlbnRBcmdzID0gdm9pZCAwO1xuXHR2YXIgdGhyb3R0bGVkID0gZnVuY3Rpb24gdGhyb3R0bGVkKHN0YXRlKSB7XG5cdFx0Zm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG5cdFx0XHRhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcblx0XHR9XG5cblx0XHRjdXJyZW50QXJncyA9IGFyZ3M7XG5cdFx0aWYgKHRpbWVvdXQgJiYgc3RhdGUgPT09IGxhc3RTdGF0ZSkgcmV0dXJuO1xuXHRcdGxhc3RTdGF0ZSA9IHN0YXRlO1xuXHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblx0XHR0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0XHRjYWxsYmFjay5hcHBseSh1bmRlZmluZWQsIFtzdGF0ZV0uY29uY2F0KHRvQ29uc3VtYWJsZUFycmF5KGN1cnJlbnRBcmdzKSkpO1xuXHRcdFx0dGltZW91dCA9IDA7XG5cdFx0fSwgZGVsYXkpO1xuXHR9O1xuXHR0aHJvdHRsZWQuX2NsZWFyID0gZnVuY3Rpb24gKCkge1xuXHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblx0fTtcblx0cmV0dXJuIHRocm90dGxlZDtcbn1cblxuZnVuY3Rpb24gZGVlcEVxdWFsKHZhbDEsIHZhbDIpIHtcblx0aWYgKHZhbDEgPT09IHZhbDIpIHJldHVybiB0cnVlO1xuXHRpZiAoKHR5cGVvZiB2YWwxID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih2YWwxKSkgPT09ICdvYmplY3QnKSB7XG5cdFx0Zm9yICh2YXIga2V5IGluIHZhbDEpIHtcblx0XHRcdGlmICghZGVlcEVxdWFsKHZhbDFba2V5XSwgdmFsMltrZXldKSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdHJldHVybiBmYWxzZTtcbn1cblxudmFyIFZpc2liaWxpdHlTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcblx0ZnVuY3Rpb24gVmlzaWJpbGl0eVN0YXRlKGVsLCBvcHRpb25zLCB2bm9kZSkge1xuXHRcdGNsYXNzQ2FsbENoZWNrKHRoaXMsIFZpc2liaWxpdHlTdGF0ZSk7XG5cblx0XHR0aGlzLmVsID0gZWw7XG5cdFx0dGhpcy5vYnNlcnZlciA9IG51bGw7XG5cdFx0dGhpcy5mcm96ZW4gPSBmYWxzZTtcblx0XHR0aGlzLmNyZWF0ZU9ic2VydmVyKG9wdGlvbnMsIHZub2RlKTtcblx0fVxuXG5cdGNyZWF0ZUNsYXNzKFZpc2liaWxpdHlTdGF0ZSwgW3tcblx0XHRrZXk6ICdjcmVhdGVPYnNlcnZlcicsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMsIHZub2RlKSB7XG5cdFx0XHR2YXIgX3RoaXMgPSB0aGlzO1xuXG5cdFx0XHRpZiAodGhpcy5vYnNlcnZlcikge1xuXHRcdFx0XHR0aGlzLmRlc3Ryb3lPYnNlcnZlcigpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5mcm96ZW4pIHJldHVybjtcblxuXHRcdFx0dGhpcy5vcHRpb25zID0gcHJvY2Vzc09wdGlvbnMob3B0aW9ucyk7XG5cblx0XHRcdHRoaXMuY2FsbGJhY2sgPSB0aGlzLm9wdGlvbnMuY2FsbGJhY2s7XG5cdFx0XHQvLyBUaHJvdHRsZVxuXHRcdFx0aWYgKHRoaXMuY2FsbGJhY2sgJiYgdGhpcy5vcHRpb25zLnRocm90dGxlKSB7XG5cdFx0XHRcdHRoaXMuY2FsbGJhY2sgPSB0aHJvdHRsZSh0aGlzLmNhbGxiYWNrLCB0aGlzLm9wdGlvbnMudGhyb3R0bGUpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLm9sZFJlc3VsdCA9IHVuZGVmaW5lZDtcblxuXHRcdFx0dGhpcy5vYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihmdW5jdGlvbiAoZW50cmllcykge1xuXHRcdFx0XHR2YXIgZW50cnkgPSBlbnRyaWVzWzBdO1xuXHRcdFx0XHRpZiAoX3RoaXMuY2FsbGJhY2spIHtcblx0XHRcdFx0XHQvLyBVc2UgaXNJbnRlcnNlY3RpbmcgaWYgcG9zc2libGUgYmVjYXVzZSBicm93c2VycyBjYW4gcmVwb3J0IGlzSW50ZXJzZWN0aW5nIGFzIHRydWUsIGJ1dCBpbnRlcnNlY3Rpb25SYXRpbyBhcyAwLCB3aGVuIHNvbWV0aGluZyB2ZXJ5IHNsb3dseSBlbnRlcnMgdGhlIHZpZXdwb3J0LlxuXHRcdFx0XHRcdHZhciByZXN1bHQgPSBlbnRyeS5pc0ludGVyc2VjdGluZyAmJiBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+PSBfdGhpcy50aHJlc2hvbGQ7XG5cdFx0XHRcdFx0aWYgKHJlc3VsdCA9PT0gX3RoaXMub2xkUmVzdWx0KSByZXR1cm47XG5cdFx0XHRcdFx0X3RoaXMub2xkUmVzdWx0ID0gcmVzdWx0O1xuXHRcdFx0XHRcdF90aGlzLmNhbGxiYWNrKHJlc3VsdCwgZW50cnkpO1xuXHRcdFx0XHRcdGlmIChyZXN1bHQgJiYgX3RoaXMub3B0aW9ucy5vbmNlKSB7XG5cdFx0XHRcdFx0XHRfdGhpcy5mcm96ZW4gPSB0cnVlO1xuXHRcdFx0XHRcdFx0X3RoaXMuZGVzdHJveU9ic2VydmVyKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9LCB0aGlzLm9wdGlvbnMuaW50ZXJzZWN0aW9uKTtcblxuXHRcdFx0Ly8gV2FpdCBmb3IgdGhlIGVsZW1lbnQgdG8gYmUgaW4gZG9jdW1lbnRcblx0XHRcdHZub2RlLmNvbnRleHQuJG5leHRUaWNrKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0X3RoaXMub2JzZXJ2ZXIub2JzZXJ2ZShfdGhpcy5lbCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdkZXN0cm95T2JzZXJ2ZXInLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95T2JzZXJ2ZXIoKSB7XG5cdFx0XHRpZiAodGhpcy5vYnNlcnZlcikge1xuXHRcdFx0XHR0aGlzLm9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcblx0XHRcdFx0dGhpcy5vYnNlcnZlciA9IG51bGw7XG5cdFx0XHR9XG5cblx0XHRcdC8vIENhbmNlbCB0aHJvdHRsZWQgY2FsbFxuXHRcdFx0aWYgKHRoaXMuY2FsbGJhY2sgJiYgdGhpcy5jYWxsYmFjay5fY2xlYXIpIHtcblx0XHRcdFx0dGhpcy5jYWxsYmFjay5fY2xlYXIoKTtcblx0XHRcdFx0dGhpcy5jYWxsYmFjayA9IG51bGw7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAndGhyZXNob2xkJyxcblx0XHRnZXQ6IGZ1bmN0aW9uIGdldCQkMSgpIHtcblx0XHRcdHJldHVybiB0aGlzLm9wdGlvbnMuaW50ZXJzZWN0aW9uICYmIHRoaXMub3B0aW9ucy5pbnRlcnNlY3Rpb24udGhyZXNob2xkIHx8IDA7XG5cdFx0fVxuXHR9XSk7XG5cdHJldHVybiBWaXNpYmlsaXR5U3RhdGU7XG59KCk7XG5cbmZ1bmN0aW9uIGJpbmQoZWwsIF9yZWYsIHZub2RlKSB7XG5cdHZhciB2YWx1ZSA9IF9yZWYudmFsdWU7XG5cblx0aWYgKHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRjb25zb2xlLndhcm4oJ1t2dWUtb2JzZXJ2ZS12aXNpYmlsaXR5XSBJbnRlcnNlY3Rpb25PYnNlcnZlciBBUEkgaXMgbm90IGF2YWlsYWJsZSBpbiB5b3VyIGJyb3dzZXIuIFBsZWFzZSBpbnN0YWxsIHRoaXMgcG9seWZpbGw6IGh0dHBzOi8vZ2l0aHViLmNvbS93M2MvSW50ZXJzZWN0aW9uT2JzZXJ2ZXIvdHJlZS9tYXN0ZXIvcG9seWZpbGwnKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgc3RhdGUgPSBuZXcgVmlzaWJpbGl0eVN0YXRlKGVsLCB2YWx1ZSwgdm5vZGUpO1xuXHRcdGVsLl92dWVfdmlzaWJpbGl0eVN0YXRlID0gc3RhdGU7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlKGVsLCBfcmVmMiwgdm5vZGUpIHtcblx0dmFyIHZhbHVlID0gX3JlZjIudmFsdWUsXG5cdCAgICBvbGRWYWx1ZSA9IF9yZWYyLm9sZFZhbHVlO1xuXG5cdGlmIChkZWVwRXF1YWwodmFsdWUsIG9sZFZhbHVlKSkgcmV0dXJuO1xuXHR2YXIgc3RhdGUgPSBlbC5fdnVlX3Zpc2liaWxpdHlTdGF0ZTtcblx0aWYgKHN0YXRlKSB7XG5cdFx0c3RhdGUuY3JlYXRlT2JzZXJ2ZXIodmFsdWUsIHZub2RlKTtcblx0fSBlbHNlIHtcblx0XHRiaW5kKGVsLCB7IHZhbHVlOiB2YWx1ZSB9LCB2bm9kZSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdW5iaW5kKGVsKSB7XG5cdHZhciBzdGF0ZSA9IGVsLl92dWVfdmlzaWJpbGl0eVN0YXRlO1xuXHRpZiAoc3RhdGUpIHtcblx0XHRzdGF0ZS5kZXN0cm95T2JzZXJ2ZXIoKTtcblx0XHRkZWxldGUgZWwuX3Z1ZV92aXNpYmlsaXR5U3RhdGU7XG5cdH1cbn1cblxudmFyIE9ic2VydmVWaXNpYmlsaXR5ID0ge1xuXHRiaW5kOiBiaW5kLFxuXHR1cGRhdGU6IHVwZGF0ZSxcblx0dW5iaW5kOiB1bmJpbmRcbn07XG5cbi8vIEluc3RhbGwgdGhlIGNvbXBvbmVudHNcbmZ1bmN0aW9uIGluc3RhbGwkMShWdWUkJDEpIHtcblx0VnVlJCQxLmRpcmVjdGl2ZSgnb2JzZXJ2ZS12aXNpYmlsaXR5JywgT2JzZXJ2ZVZpc2liaWxpdHkpO1xuXHQvKiAtLSBBZGQgbW9yZSBjb21wb25lbnRzIGhlcmUgLS0gKi9cbn1cblxuLyogLS0gUGx1Z2luIGRlZmluaXRpb24gJiBBdXRvLWluc3RhbGwgLS0gKi9cbi8qIFlvdSBzaG91bGRuJ3QgaGF2ZSB0byBtb2RpZnkgdGhlIGNvZGUgYmVsb3cgKi9cblxuLy8gUGx1Z2luXG52YXIgcGx1Z2luJDQgPSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2ZXJzaW9uOiBcIjAuNC4zXCIsXG5cdGluc3RhbGw6IGluc3RhbGwkMVxufTtcblxuLy8gQXV0by1pbnN0YWxsXG52YXIgR2xvYmFsVnVlJDIgPSBudWxsO1xuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG5cdEdsb2JhbFZ1ZSQyID0gd2luZG93LlZ1ZTtcbn0gZWxzZSBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0R2xvYmFsVnVlJDIgPSBnbG9iYWwuVnVlO1xufVxuaWYgKEdsb2JhbFZ1ZSQyKSB7XG5cdEdsb2JhbFZ1ZSQyLnVzZShwbHVnaW4kNCk7XG59XG5cbnZhciBjb21tb25qc0dsb2JhbCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDoge307XG5cblxuXG5cblxuZnVuY3Rpb24gY3JlYXRlQ29tbW9uanNNb2R1bGUoZm4sIG1vZHVsZSkge1xuXHRyZXR1cm4gbW9kdWxlID0geyBleHBvcnRzOiB7fSB9LCBmbihtb2R1bGUsIG1vZHVsZS5leHBvcnRzKSwgbW9kdWxlLmV4cG9ydHM7XG59XG5cbnZhciBzY3JvbGxwYXJlbnQgPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlKSB7XG4oZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiB1bmRlZmluZWQgPT09IFwiZnVuY3Rpb25cIiAmJiB1bmRlZmluZWQuYW1kKSB7XG4gICAgdW5kZWZpbmVkKFtdLCBmYWN0b3J5KTtcbiAgfSBlbHNlIGlmICgnb2JqZWN0JyA9PT0gXCJvYmplY3RcIiAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICB9IGVsc2Uge1xuICAgIHJvb3QuU2Nyb2xscGFyZW50ID0gZmFjdG9yeSgpO1xuICB9XG59KGNvbW1vbmpzR2xvYmFsLCBmdW5jdGlvbiAoKSB7XG4gIHZhciByZWdleCA9IC8oYXV0b3xzY3JvbGwpLztcblxuICB2YXIgcGFyZW50cyA9IGZ1bmN0aW9uIChub2RlLCBwcykge1xuICAgIGlmIChub2RlLnBhcmVudE5vZGUgPT09IG51bGwpIHsgcmV0dXJuIHBzOyB9XG5cbiAgICByZXR1cm4gcGFyZW50cyhub2RlLnBhcmVudE5vZGUsIHBzLmNvbmNhdChbbm9kZV0pKTtcbiAgfTtcblxuICB2YXIgc3R5bGUgPSBmdW5jdGlvbiAobm9kZSwgcHJvcCkge1xuICAgIHJldHVybiBnZXRDb21wdXRlZFN0eWxlKG5vZGUsIG51bGwpLmdldFByb3BlcnR5VmFsdWUocHJvcCk7XG4gIH07XG5cbiAgdmFyIG92ZXJmbG93ID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICByZXR1cm4gc3R5bGUobm9kZSwgXCJvdmVyZmxvd1wiKSArIHN0eWxlKG5vZGUsIFwib3ZlcmZsb3cteVwiKSArIHN0eWxlKG5vZGUsIFwib3ZlcmZsb3cteFwiKTtcbiAgfTtcblxuICB2YXIgc2Nyb2xsID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgIHJldHVybiByZWdleC50ZXN0KG92ZXJmbG93KG5vZGUpKTtcbiAgfTtcblxuICB2YXIgc2Nyb2xsUGFyZW50ID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICBpZiAoIShub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgbm9kZSBpbnN0YW5jZW9mIFNWR0VsZW1lbnQpKSB7XG4gICAgICByZXR1cm4gO1xuICAgIH1cblxuICAgIHZhciBwcyA9IHBhcmVudHMobm9kZS5wYXJlbnROb2RlLCBbXSk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoc2Nyb2xsKHBzW2ldKSkge1xuICAgICAgICByZXR1cm4gcHNbaV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICB9O1xuXG4gIHJldHVybiBzY3JvbGxQYXJlbnQ7XG59KSk7XG59KTtcblxudmFyIF90eXBlb2YkMSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iajtcbn0gOiBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xufTtcblxuXG5cblxuXG52YXIgYXN5bmNHZW5lcmF0b3IkMSA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQXdhaXRWYWx1ZSh2YWx1ZSkge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIEFzeW5jR2VuZXJhdG9yKGdlbikge1xuICAgIHZhciBmcm9udCwgYmFjaztcblxuICAgIGZ1bmN0aW9uIHNlbmQoa2V5LCBhcmcpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHZhciByZXF1ZXN0ID0ge1xuICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgIGFyZzogYXJnLFxuICAgICAgICAgIHJlc29sdmU6IHJlc29sdmUsXG4gICAgICAgICAgcmVqZWN0OiByZWplY3QsXG4gICAgICAgICAgbmV4dDogbnVsbFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChiYWNrKSB7XG4gICAgICAgICAgYmFjayA9IGJhY2submV4dCA9IHJlcXVlc3Q7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZnJvbnQgPSBiYWNrID0gcmVxdWVzdDtcbiAgICAgICAgICByZXN1bWUoa2V5LCBhcmcpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXN1bWUoa2V5LCBhcmcpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBnZW5ba2V5XShhcmcpO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG5cbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgQXdhaXRWYWx1ZSkge1xuICAgICAgICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZS52YWx1ZSkudGhlbihmdW5jdGlvbiAoYXJnKSB7XG4gICAgICAgICAgICByZXN1bWUoXCJuZXh0XCIsIGFyZyk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24gKGFyZykge1xuICAgICAgICAgICAgcmVzdW1lKFwidGhyb3dcIiwgYXJnKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXR0bGUocmVzdWx0LmRvbmUgPyBcInJldHVyblwiIDogXCJub3JtYWxcIiwgcmVzdWx0LnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHNldHRsZShcInRocm93XCIsIGVycik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0dGxlKHR5cGUsIHZhbHVlKSB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSBcInJldHVyblwiOlxuICAgICAgICAgIGZyb250LnJlc29sdmUoe1xuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgZG9uZTogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCJ0aHJvd1wiOlxuICAgICAgICAgIGZyb250LnJlamVjdCh2YWx1ZSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBmcm9udC5yZXNvbHZlKHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIGRvbmU6IGZhbHNlXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGZyb250ID0gZnJvbnQubmV4dDtcblxuICAgICAgaWYgKGZyb250KSB7XG4gICAgICAgIHJlc3VtZShmcm9udC5rZXksIGZyb250LmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBiYWNrID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9pbnZva2UgPSBzZW5kO1xuXG4gICAgaWYgKHR5cGVvZiBnZW4ucmV0dXJuICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHRoaXMucmV0dXJuID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHtcbiAgICBBc3luY0dlbmVyYXRvci5wcm90b3R5cGVbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgfVxuXG4gIEFzeW5jR2VuZXJhdG9yLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKGFyZykge1xuICAgIHJldHVybiB0aGlzLl9pbnZva2UoXCJuZXh0XCIsIGFyZyk7XG4gIH07XG5cbiAgQXN5bmNHZW5lcmF0b3IucHJvdG90eXBlLnRocm93ID0gZnVuY3Rpb24gKGFyZykge1xuICAgIHJldHVybiB0aGlzLl9pbnZva2UoXCJ0aHJvd1wiLCBhcmcpO1xuICB9O1xuXG4gIEFzeW5jR2VuZXJhdG9yLnByb3RvdHlwZS5yZXR1cm4gPSBmdW5jdGlvbiAoYXJnKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ludm9rZShcInJldHVyblwiLCBhcmcpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgd3JhcDogZnVuY3Rpb24gKGZuKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IEFzeW5jR2VuZXJhdG9yKGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgICAgfTtcbiAgICB9LFxuICAgIGF3YWl0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHJldHVybiBuZXcgQXdhaXRWYWx1ZSh2YWx1ZSk7XG4gICAgfVxuICB9O1xufSgpO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG52YXIgZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiAob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn07XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG52YXIgcHJvcHMgPSB7XG4gIGl0ZW1zOiB7XG4gICAgdHlwZTogQXJyYXksXG4gICAgcmVxdWlyZWQ6IHRydWVcbiAgfSxcblxuICBrZXlGaWVsZDoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBkZWZhdWx0OiAnaWQnXG4gIH0sXG5cbiAgZGlyZWN0aW9uOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGRlZmF1bHQ6ICd2ZXJ0aWNhbCcsXG4gICAgdmFsaWRhdG9yOiBmdW5jdGlvbiB2YWxpZGF0b3IodmFsdWUpIHtcbiAgICAgIHJldHVybiBbJ3ZlcnRpY2FsJywgJ2hvcml6b250YWwnXS5pbmNsdWRlcyh2YWx1ZSk7XG4gICAgfVxuICB9XG59O1xuXG5mdW5jdGlvbiBzaW1wbGVBcnJheSgpIHtcbiAgcmV0dXJuIHRoaXMuaXRlbXMubGVuZ3RoICYmIF90eXBlb2YkMSh0aGlzLml0ZW1zWzBdKSAhPT0gJ29iamVjdCc7XG59XG5cbnZhciBzdXBwb3J0c1Bhc3NpdmUgPSBmYWxzZTtcblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIHN1cHBvcnRzUGFzc2l2ZSA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBvcHRzID0gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAncGFzc2l2ZScsIHtcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICBzdXBwb3J0c1Bhc3NpdmUgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0ZXN0JywgbnVsbCwgb3B0cyk7XG4gIH0gY2F0Y2ggKGUpIHt9XG59XG5cbnZhciB1aWQgPSAwO1xuXG52YXIgUmVjeWNsZVNjcm9sbGVyID0geyByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3ZtID0gdGhpczt2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oO3JldHVybiBfYygnZGl2JywgeyBkaXJlY3RpdmVzOiBbeyBuYW1lOiBcIm9ic2VydmUtdmlzaWJpbGl0eVwiLCByYXdOYW1lOiBcInYtb2JzZXJ2ZS12aXNpYmlsaXR5XCIsIHZhbHVlOiBfdm0uaGFuZGxlVmlzaWJpbGl0eUNoYW5nZSwgZXhwcmVzc2lvbjogXCJoYW5kbGVWaXNpYmlsaXR5Q2hhbmdlXCIgfV0sIHN0YXRpY0NsYXNzOiBcInZ1ZS1yZWN5Y2xlLXNjcm9sbGVyXCIsIGNsYXNzOiBkZWZpbmVQcm9wZXJ0eSh7IHJlYWR5OiBfdm0ucmVhZHksICdwYWdlLW1vZGUnOiBfdm0ucGFnZU1vZGUgfSwgJ2RpcmVjdGlvbi0nICsgX3ZtLmRpcmVjdGlvbiwgdHJ1ZSksIG9uOiB7IFwiJnNjcm9sbFwiOiBmdW5jdGlvbiBzY3JvbGwoJGV2ZW50KSB7XG4gICAgICAgICAgcmV0dXJuIF92bS5oYW5kbGVTY3JvbGwoJGV2ZW50KTtcbiAgICAgICAgfSB9IH0sIFtfdm0uJHNsb3RzLmJlZm9yZSA/IF9jKCdkaXYnLCB7IHN0YXRpY0NsYXNzOiBcInZ1ZS1yZWN5Y2xlLXNjcm9sbGVyX19zbG90XCIgfSwgW192bS5fdChcImJlZm9yZVwiKV0sIDIpIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7IHJlZjogXCJ3cmFwcGVyXCIsIHN0YXRpY0NsYXNzOiBcInZ1ZS1yZWN5Y2xlLXNjcm9sbGVyX19pdGVtLXdyYXBwZXJcIiwgc3R5bGU6IGRlZmluZVByb3BlcnR5KHt9LCBfdm0uZGlyZWN0aW9uID09PSAndmVydGljYWwnID8gJ21pbkhlaWdodCcgOiAnbWluV2lkdGgnLCBfdm0udG90YWxTaXplICsgJ3B4JykgfSwgX3ZtLl9sKF92bS5wb29sLCBmdW5jdGlvbiAodmlldykge1xuICAgICAgcmV0dXJuIF9jKCdkaXYnLCB7IGtleTogdmlldy5uci5pZCwgc3RhdGljQ2xhc3M6IFwidnVlLXJlY3ljbGUtc2Nyb2xsZXJfX2l0ZW0tdmlld1wiLCBjbGFzczogeyBob3ZlcjogX3ZtLmhvdmVyS2V5ID09PSB2aWV3Lm5yLmtleSB9LCBzdHlsZTogX3ZtLnJlYWR5ID8geyB0cmFuc2Zvcm06ICd0cmFuc2xhdGUnICsgKF92bS5kaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcgPyAnWScgOiAnWCcpICsgJygnICsgdmlldy5wb3NpdGlvbiArICdweCknIH0gOiBudWxsLCBvbjogeyBcIm1vdXNlZW50ZXJcIjogZnVuY3Rpb24gbW91c2VlbnRlcigkZXZlbnQpIHtcbiAgICAgICAgICAgIF92bS5ob3ZlcktleSA9IHZpZXcubnIua2V5O1xuICAgICAgICAgIH0sIFwibW91c2VsZWF2ZVwiOiBmdW5jdGlvbiBtb3VzZWxlYXZlKCRldmVudCkge1xuICAgICAgICAgICAgX3ZtLmhvdmVyS2V5ID0gbnVsbDtcbiAgICAgICAgICB9IH0gfSwgW192bS5fdChcImRlZmF1bHRcIiwgbnVsbCwgeyBpdGVtOiB2aWV3Lml0ZW0sIGluZGV4OiB2aWV3Lm5yLmluZGV4LCBhY3RpdmU6IHZpZXcubnIudXNlZCB9KV0sIDIpO1xuICAgIH0pLCAwKSwgX3ZtLl92KFwiIFwiKSwgX3ZtLiRzbG90cy5hZnRlciA/IF9jKCdkaXYnLCB7IHN0YXRpY0NsYXNzOiBcInZ1ZS1yZWN5Y2xlLXNjcm9sbGVyX19zbG90XCIgfSwgW192bS5fdChcImFmdGVyXCIpXSwgMikgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ1Jlc2l6ZU9ic2VydmVyJywgeyBvbjogeyBcIm5vdGlmeVwiOiBfdm0uaGFuZGxlUmVzaXplIH0gfSldLCAxKTtcbiAgfSwgc3RhdGljUmVuZGVyRm5zOiBbXSxcbiAgbmFtZTogJ1JlY3ljbGVTY3JvbGxlcicsXG5cbiAgY29tcG9uZW50czoge1xuICAgIFJlc2l6ZU9ic2VydmVyOiBSZXNpemVPYnNlcnZlclxuICB9LFxuXG4gIGRpcmVjdGl2ZXM6IHtcbiAgICBPYnNlcnZlVmlzaWJpbGl0eTogT2JzZXJ2ZVZpc2liaWxpdHlcbiAgfSxcblxuICBwcm9wczogX2V4dGVuZHMoe30sIHByb3BzLCB7XG5cbiAgICBpdGVtU2l6ZToge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogbnVsbFxuICAgIH0sXG5cbiAgICBtaW5JdGVtU2l6ZToge1xuICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICB9LFxuXG4gICAgc2l6ZUZpZWxkOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnc2l6ZSdcbiAgICB9LFxuXG4gICAgdHlwZUZpZWxkOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAndHlwZSdcbiAgICB9LFxuXG4gICAgYnVmZmVyOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBkZWZhdWx0OiAyMDBcbiAgICB9LFxuXG4gICAgcGFnZU1vZGU6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH0sXG5cbiAgICBwcmVyZW5kZXI6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IDBcbiAgICB9LFxuXG4gICAgZW1pdFVwZGF0ZToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgfVxuICB9KSxcblxuICBkYXRhOiBmdW5jdGlvbiBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBwb29sOiBbXSxcbiAgICAgIHRvdGFsU2l6ZTogMCxcbiAgICAgIHJlYWR5OiBmYWxzZSxcbiAgICAgIGhvdmVyS2V5OiBudWxsXG4gICAgfTtcbiAgfSxcblxuXG4gIGNvbXB1dGVkOiB7XG4gICAgc2l6ZXM6IGZ1bmN0aW9uIHNpemVzKCkge1xuICAgICAgaWYgKHRoaXMuaXRlbVNpemUgPT09IG51bGwpIHtcbiAgICAgICAgdmFyIHNpemVzID0ge1xuICAgICAgICAgICctMSc6IHsgYWNjdW11bGF0b3I6IDAgfVxuICAgICAgICB9O1xuICAgICAgICB2YXIgaXRlbXMgPSB0aGlzLml0ZW1zO1xuICAgICAgICB2YXIgZmllbGQgPSB0aGlzLnNpemVGaWVsZDtcbiAgICAgICAgdmFyIG1pbkl0ZW1TaXplID0gdGhpcy5taW5JdGVtU2l6ZTtcbiAgICAgICAgdmFyIGFjY3VtdWxhdG9yID0gMDtcbiAgICAgICAgdmFyIGN1cnJlbnQgPSB2b2lkIDA7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gaXRlbXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgY3VycmVudCA9IGl0ZW1zW2ldW2ZpZWxkXSB8fCBtaW5JdGVtU2l6ZTtcbiAgICAgICAgICBhY2N1bXVsYXRvciArPSBjdXJyZW50O1xuICAgICAgICAgIHNpemVzW2ldID0geyBhY2N1bXVsYXRvcjogYWNjdW11bGF0b3IsIHNpemU6IGN1cnJlbnQgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2l6ZXM7XG4gICAgICB9XG4gICAgICByZXR1cm4gW107XG4gICAgfSxcblxuXG4gICAgc2ltcGxlQXJyYXk6IHNpbXBsZUFycmF5XG4gIH0sXG5cbiAgd2F0Y2g6IHtcbiAgICBpdGVtczogZnVuY3Rpb24gaXRlbXMoKSB7XG4gICAgICB0aGlzLnVwZGF0ZVZpc2libGVJdGVtcyh0cnVlKTtcbiAgICB9LFxuICAgIHBhZ2VNb2RlOiBmdW5jdGlvbiBwYWdlTW9kZSgpIHtcbiAgICAgIHRoaXMuYXBwbHlQYWdlTW9kZSgpO1xuICAgICAgdGhpcy51cGRhdGVWaXNpYmxlSXRlbXMoZmFsc2UpO1xuICAgIH0sXG5cblxuICAgIHNpemVzOiB7XG4gICAgICBoYW5kbGVyOiBmdW5jdGlvbiBoYW5kbGVyKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZVZpc2libGVJdGVtcyhmYWxzZSk7XG4gICAgICB9LFxuXG4gICAgICBkZWVwOiB0cnVlXG4gICAgfVxuICB9LFxuXG4gIGNyZWF0ZWQ6IGZ1bmN0aW9uIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy4kX3N0YXJ0SW5kZXggPSAwO1xuICAgIHRoaXMuJF9lbmRJbmRleCA9IDA7XG4gICAgdGhpcy4kX3ZpZXdzID0gbmV3IE1hcCgpO1xuICAgIHRoaXMuJF91bnVzZWRWaWV3cyA9IG5ldyBNYXAoKTtcbiAgICB0aGlzLiRfc2Nyb2xsRGlydHkgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLiRpc1NlcnZlcikge1xuICAgICAgdGhpcy51cGRhdGVWaXNpYmxlSXRlbXMoZmFsc2UpO1xuICAgIH1cbiAgfSxcbiAgbW91bnRlZDogZnVuY3Rpb24gbW91bnRlZCgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdGhpcy5hcHBseVBhZ2VNb2RlKCk7XG4gICAgdGhpcy4kbmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMudXBkYXRlVmlzaWJsZUl0ZW1zKHRydWUpO1xuICAgICAgX3RoaXMucmVhZHkgPSB0cnVlO1xuICAgIH0pO1xuICB9LFxuICBiZWZvcmVEZXN0cm95OiBmdW5jdGlvbiBiZWZvcmVEZXN0cm95KCkge1xuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXJzKCk7XG4gIH0sXG5cblxuICBtZXRob2RzOiB7XG4gICAgYWRkVmlldzogZnVuY3Rpb24gYWRkVmlldyhwb29sLCBpbmRleCwgaXRlbSwga2V5LCB0eXBlKSB7XG4gICAgICB2YXIgdmlldyA9IHtcbiAgICAgICAgaXRlbTogaXRlbSxcbiAgICAgICAgcG9zaXRpb246IDBcbiAgICAgIH07XG4gICAgICB2YXIgbm9uUmVhY3RpdmUgPSB7XG4gICAgICAgIGlkOiB1aWQrKyxcbiAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICB1c2VkOiB0cnVlLFxuICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgdHlwZTogdHlwZVxuICAgICAgfTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh2aWV3LCAnbnInLCB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICAgIHZhbHVlOiBub25SZWFjdGl2ZVxuICAgICAgfSk7XG4gICAgICBwb29sLnB1c2godmlldyk7XG4gICAgICByZXR1cm4gdmlldztcbiAgICB9LFxuICAgIHVudXNlVmlldzogZnVuY3Rpb24gdW51c2VWaWV3KHZpZXcpIHtcbiAgICAgIHZhciBmYWtlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmYWxzZTtcblxuICAgICAgdmFyIHVudXNlZFZpZXdzID0gdGhpcy4kX3VudXNlZFZpZXdzO1xuICAgICAgdmFyIHR5cGUgPSB2aWV3Lm5yLnR5cGU7XG4gICAgICB2YXIgdW51c2VkUG9vbCA9IHVudXNlZFZpZXdzLmdldCh0eXBlKTtcbiAgICAgIGlmICghdW51c2VkUG9vbCkge1xuICAgICAgICB1bnVzZWRQb29sID0gW107XG4gICAgICAgIHVudXNlZFZpZXdzLnNldCh0eXBlLCB1bnVzZWRQb29sKTtcbiAgICAgIH1cbiAgICAgIHVudXNlZFBvb2wucHVzaCh2aWV3KTtcbiAgICAgIGlmICghZmFrZSkge1xuICAgICAgICB2aWV3Lm5yLnVzZWQgPSBmYWxzZTtcbiAgICAgICAgdmlldy5wb3NpdGlvbiA9IC05OTk5O1xuICAgICAgICB0aGlzLiRfdmlld3MuZGVsZXRlKHZpZXcubnIua2V5KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGhhbmRsZVJlc2l6ZTogZnVuY3Rpb24gaGFuZGxlUmVzaXplKCkge1xuICAgICAgdGhpcy4kZW1pdCgncmVzaXplJyk7XG4gICAgICBpZiAodGhpcy5yZWFkeSkgdGhpcy51cGRhdGVWaXNpYmxlSXRlbXMoZmFsc2UpO1xuICAgIH0sXG4gICAgaGFuZGxlU2Nyb2xsOiBmdW5jdGlvbiBoYW5kbGVTY3JvbGwoZXZlbnQpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICBpZiAoIXRoaXMuJF9zY3JvbGxEaXJ0eSkge1xuICAgICAgICB0aGlzLiRfc2Nyb2xsRGlydHkgPSB0cnVlO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzMi4kX3Njcm9sbERpcnR5ID0gZmFsc2U7XG5cbiAgICAgICAgICB2YXIgX3VwZGF0ZVZpc2libGVJdGVtcyA9IF90aGlzMi51cGRhdGVWaXNpYmxlSXRlbXMoZmFsc2UpLFxuICAgICAgICAgICAgICBjb250aW51b3VzID0gX3VwZGF0ZVZpc2libGVJdGVtcy5jb250aW51b3VzO1xuXG4gICAgICAgICAgLy8gSXQgc2VlbXMgc29tZXRpbWVzIGNocm9tZSBkb2Vzbid0IGZpcmUgc2Nyb2xsIGV2ZW50IDovXG4gICAgICAgICAgLy8gV2hlbiBub24gY29udGlub3VzIHNjcm9sbGluZyBpcyBlbmRpbmcsIHdlIGZvcmNlIGEgcmVmcmVzaFxuXG5cbiAgICAgICAgICBpZiAoIWNvbnRpbnVvdXMpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChfdGhpczIuJF9yZWZyZXNoVGltb3V0KTtcbiAgICAgICAgICAgIF90aGlzMi4kX3JlZnJlc2hUaW1vdXQgPSBzZXRUaW1lb3V0KF90aGlzMi5oYW5kbGVTY3JvbGwsIDEwMCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGhhbmRsZVZpc2liaWxpdHlDaGFuZ2U6IGZ1bmN0aW9uIGhhbmRsZVZpc2liaWxpdHlDaGFuZ2UoaXNWaXNpYmxlLCBlbnRyeSkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIGlmICh0aGlzLnJlYWR5KSB7XG4gICAgICAgIGlmIChpc1Zpc2libGUgfHwgZW50cnkuYm91bmRpbmdDbGllbnRSZWN0LndpZHRoICE9PSAwIHx8IGVudHJ5LmJvdW5kaW5nQ2xpZW50UmVjdC5oZWlnaHQgIT09IDApIHtcbiAgICAgICAgICB0aGlzLiRlbWl0KCd2aXNpYmxlJyk7XG4gICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzMy51cGRhdGVWaXNpYmxlSXRlbXMoZmFsc2UpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuJGVtaXQoJ2hpZGRlbicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICB1cGRhdGVWaXNpYmxlSXRlbXM6IGZ1bmN0aW9uIHVwZGF0ZVZpc2libGVJdGVtcyhjaGVja0l0ZW0pIHtcbiAgICAgIHZhciBpdGVtU2l6ZSA9IHRoaXMuaXRlbVNpemU7XG4gICAgICB2YXIgdHlwZUZpZWxkID0gdGhpcy50eXBlRmllbGQ7XG4gICAgICB2YXIga2V5RmllbGQgPSB0aGlzLnNpbXBsZUFycmF5ID8gbnVsbCA6IHRoaXMua2V5RmllbGQ7XG4gICAgICB2YXIgaXRlbXMgPSB0aGlzLml0ZW1zO1xuICAgICAgdmFyIGNvdW50ID0gaXRlbXMubGVuZ3RoO1xuICAgICAgdmFyIHNpemVzID0gdGhpcy5zaXplcztcbiAgICAgIHZhciB2aWV3cyA9IHRoaXMuJF92aWV3cztcbiAgICAgIHZhciB1bnVzZWRWaWV3cyA9IHRoaXMuJF91bnVzZWRWaWV3cztcbiAgICAgIHZhciBwb29sID0gdGhpcy5wb29sO1xuICAgICAgdmFyIHN0YXJ0SW5kZXggPSB2b2lkIDAsXG4gICAgICAgICAgZW5kSW5kZXggPSB2b2lkIDA7XG4gICAgICB2YXIgdG90YWxTaXplID0gdm9pZCAwO1xuXG4gICAgICBpZiAoIWNvdW50KSB7XG4gICAgICAgIHN0YXJ0SW5kZXggPSBlbmRJbmRleCA9IHRvdGFsU2l6ZSA9IDA7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuJGlzU2VydmVyKSB7XG4gICAgICAgIHN0YXJ0SW5kZXggPSAwO1xuICAgICAgICBlbmRJbmRleCA9IHRoaXMucHJlcmVuZGVyO1xuICAgICAgICB0b3RhbFNpemUgPSBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHNjcm9sbCA9IHRoaXMuZ2V0U2Nyb2xsKCk7XG4gICAgICAgIHZhciBidWZmZXIgPSB0aGlzLmJ1ZmZlcjtcbiAgICAgICAgc2Nyb2xsLnN0YXJ0IC09IGJ1ZmZlcjtcbiAgICAgICAgc2Nyb2xsLmVuZCArPSBidWZmZXI7XG5cbiAgICAgICAgLy8gVmFyaWFibGUgc2l6ZSBtb2RlXG4gICAgICAgIGlmIChpdGVtU2l6ZSA9PT0gbnVsbCkge1xuICAgICAgICAgIHZhciBoID0gdm9pZCAwO1xuICAgICAgICAgIHZhciBhID0gMDtcbiAgICAgICAgICB2YXIgYiA9IGNvdW50IC0gMTtcbiAgICAgICAgICB2YXIgaSA9IH5+KGNvdW50IC8gMik7XG4gICAgICAgICAgdmFyIG9sZEkgPSB2b2lkIDA7XG5cbiAgICAgICAgICAvLyBTZWFyY2hpbmcgZm9yIHN0YXJ0SW5kZXhcbiAgICAgICAgICBkbyB7XG4gICAgICAgICAgICBvbGRJID0gaTtcbiAgICAgICAgICAgIGggPSBzaXplc1tpXS5hY2N1bXVsYXRvcjtcbiAgICAgICAgICAgIGlmIChoIDwgc2Nyb2xsLnN0YXJ0KSB7XG4gICAgICAgICAgICAgIGEgPSBpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpIDwgY291bnQgLSAxICYmIHNpemVzW2kgKyAxXS5hY2N1bXVsYXRvciA+IHNjcm9sbC5zdGFydCkge1xuICAgICAgICAgICAgICBiID0gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGkgPSB+figoYSArIGIpIC8gMik7XG4gICAgICAgICAgfSB3aGlsZSAoaSAhPT0gb2xkSSk7XG4gICAgICAgICAgaSA8IDAgJiYgKGkgPSAwKTtcbiAgICAgICAgICBzdGFydEluZGV4ID0gaTtcblxuICAgICAgICAgIC8vIEZvciBjb250YWluZXIgc3R5bGVcbiAgICAgICAgICB0b3RhbFNpemUgPSBzaXplc1tjb3VudCAtIDFdLmFjY3VtdWxhdG9yO1xuXG4gICAgICAgICAgLy8gU2VhcmNoaW5nIGZvciBlbmRJbmRleFxuICAgICAgICAgIGZvciAoZW5kSW5kZXggPSBpOyBlbmRJbmRleCA8IGNvdW50ICYmIHNpemVzW2VuZEluZGV4XS5hY2N1bXVsYXRvciA8IHNjcm9sbC5lbmQ7IGVuZEluZGV4KyspIHt9XG4gICAgICAgICAgaWYgKGVuZEluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgZW5kSW5kZXggPSBpdGVtcy5sZW5ndGggLSAxO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbmRJbmRleCsrO1xuICAgICAgICAgICAgLy8gQm91bmRzXG4gICAgICAgICAgICBlbmRJbmRleCA+IGNvdW50ICYmIChlbmRJbmRleCA9IGNvdW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gRml4ZWQgc2l6ZSBtb2RlXG4gICAgICAgICAgc3RhcnRJbmRleCA9IH5+KHNjcm9sbC5zdGFydCAvIGl0ZW1TaXplKTtcbiAgICAgICAgICBlbmRJbmRleCA9IE1hdGguY2VpbChzY3JvbGwuZW5kIC8gaXRlbVNpemUpO1xuXG4gICAgICAgICAgLy8gQm91bmRzXG4gICAgICAgICAgc3RhcnRJbmRleCA8IDAgJiYgKHN0YXJ0SW5kZXggPSAwKTtcbiAgICAgICAgICBlbmRJbmRleCA+IGNvdW50ICYmIChlbmRJbmRleCA9IGNvdW50KTtcblxuICAgICAgICAgIHRvdGFsU2l6ZSA9IGNvdW50ICogaXRlbVNpemU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGVuZEluZGV4IC0gc3RhcnRJbmRleCA+IGNvbmZpZy5pdGVtc0xpbWl0KSB7XG4gICAgICAgIHRoaXMuaXRlbXNMaW1pdEVycm9yKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudG90YWxTaXplID0gdG90YWxTaXplO1xuXG4gICAgICB2YXIgdmlldyA9IHZvaWQgMDtcblxuICAgICAgdmFyIGNvbnRpbnVvdXMgPSBzdGFydEluZGV4IDw9IHRoaXMuJF9lbmRJbmRleCAmJiBlbmRJbmRleCA+PSB0aGlzLiRfc3RhcnRJbmRleDtcbiAgICAgIHZhciB1bnVzZWRJbmRleCA9IHZvaWQgMDtcblxuICAgICAgaWYgKHRoaXMuJF9jb250aW51b3VzICE9PSBjb250aW51b3VzKSB7XG4gICAgICAgIGlmIChjb250aW51b3VzKSB7XG4gICAgICAgICAgdmlld3MuY2xlYXIoKTtcbiAgICAgICAgICB1bnVzZWRWaWV3cy5jbGVhcigpO1xuICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgbCA9IHBvb2wubGVuZ3RoOyBfaSA8IGw7IF9pKyspIHtcbiAgICAgICAgICAgIHZpZXcgPSBwb29sW19pXTtcbiAgICAgICAgICAgIHRoaXMudW51c2VWaWV3KHZpZXcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLiRfY29udGludW91cyA9IGNvbnRpbnVvdXM7XG4gICAgICB9IGVsc2UgaWYgKGNvbnRpbnVvdXMpIHtcbiAgICAgICAgZm9yICh2YXIgX2kyID0gMCwgX2wgPSBwb29sLmxlbmd0aDsgX2kyIDwgX2w7IF9pMisrKSB7XG4gICAgICAgICAgdmlldyA9IHBvb2xbX2kyXTtcbiAgICAgICAgICBpZiAodmlldy5uci51c2VkKSB7XG4gICAgICAgICAgICAvLyBVcGRhdGUgdmlldyBpdGVtIGluZGV4XG4gICAgICAgICAgICBpZiAoY2hlY2tJdGVtKSB7XG4gICAgICAgICAgICAgIHZpZXcubnIuaW5kZXggPSBpdGVtcy5maW5kSW5kZXgoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ga2V5RmllbGQgPyBpdGVtW2tleUZpZWxkXSA9PT0gdmlldy5pdGVtW2tleUZpZWxkXSA6IGl0ZW0gPT09IHZpZXcuaXRlbTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENoZWNrIGlmIGluZGV4IGlzIHN0aWxsIGluIHZpc2libGUgcmFuZ2VcbiAgICAgICAgICAgIGlmICh2aWV3Lm5yLmluZGV4ID09PSAtMSB8fCB2aWV3Lm5yLmluZGV4IDwgc3RhcnRJbmRleCB8fCB2aWV3Lm5yLmluZGV4ID49IGVuZEluZGV4KSB7XG4gICAgICAgICAgICAgIHRoaXMudW51c2VWaWV3KHZpZXcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWNvbnRpbnVvdXMpIHtcbiAgICAgICAgdW51c2VkSW5kZXggPSBuZXcgTWFwKCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBpdGVtID0gdm9pZCAwLFxuICAgICAgICAgIHR5cGUgPSB2b2lkIDAsXG4gICAgICAgICAgdW51c2VkUG9vbCA9IHZvaWQgMDtcbiAgICAgIHZhciB2ID0gdm9pZCAwO1xuICAgICAgZm9yICh2YXIgX2kzID0gc3RhcnRJbmRleDsgX2kzIDwgZW5kSW5kZXg7IF9pMysrKSB7XG4gICAgICAgIGl0ZW0gPSBpdGVtc1tfaTNdO1xuICAgICAgICB2YXIga2V5ID0ga2V5RmllbGQgPyBpdGVtW2tleUZpZWxkXSA6IGl0ZW07XG4gICAgICAgIHZpZXcgPSB2aWV3cy5nZXQoa2V5KTtcblxuICAgICAgICBpZiAoIWl0ZW1TaXplICYmICFzaXplc1tfaTNdLnNpemUpIHtcbiAgICAgICAgICBpZiAodmlldykgdGhpcy51bnVzZVZpZXcodmlldyk7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBObyB2aWV3IGFzc2lnbmVkIHRvIGl0ZW1cbiAgICAgICAgaWYgKCF2aWV3KSB7XG4gICAgICAgICAgdHlwZSA9IGl0ZW1bdHlwZUZpZWxkXTtcblxuICAgICAgICAgIGlmIChjb250aW51b3VzKSB7XG4gICAgICAgICAgICB1bnVzZWRQb29sID0gdW51c2VkVmlld3MuZ2V0KHR5cGUpO1xuICAgICAgICAgICAgLy8gUmV1c2UgZXhpc3Rpbmcgdmlld1xuICAgICAgICAgICAgaWYgKHVudXNlZFBvb2wgJiYgdW51c2VkUG9vbC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgdmlldyA9IHVudXNlZFBvb2wucG9wKCk7XG4gICAgICAgICAgICAgIHZpZXcuaXRlbSA9IGl0ZW07XG4gICAgICAgICAgICAgIHZpZXcubnIudXNlZCA9IHRydWU7XG4gICAgICAgICAgICAgIHZpZXcubnIuaW5kZXggPSBfaTM7XG4gICAgICAgICAgICAgIHZpZXcubnIua2V5ID0ga2V5O1xuICAgICAgICAgICAgICB2aWV3Lm5yLnR5cGUgPSB0eXBlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdmlldyA9IHRoaXMuYWRkVmlldyhwb29sLCBfaTMsIGl0ZW0sIGtleSwgdHlwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHVudXNlZFBvb2wgPSB1bnVzZWRWaWV3cy5nZXQodHlwZSk7XG4gICAgICAgICAgICB2ID0gdW51c2VkSW5kZXguZ2V0KHR5cGUpIHx8IDA7XG4gICAgICAgICAgICAvLyBVc2UgZXhpc3Rpbmcgdmlld1xuICAgICAgICAgICAgLy8gV2UgZG9uJ3QgY2FyZSBpZiB0aGV5IGFyZSBhbHJlYWR5IHVzZWRcbiAgICAgICAgICAgIC8vIGJlY2F1c2Ugd2UgYXJlIG5vdCBpbiBjb250aW5vdXMgc2Nyb2xsaW5nXG4gICAgICAgICAgICBpZiAodW51c2VkUG9vbCAmJiB2IDwgdW51c2VkUG9vbC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgdmlldyA9IHVudXNlZFBvb2xbdl07XG4gICAgICAgICAgICAgIHZpZXcuaXRlbSA9IGl0ZW07XG4gICAgICAgICAgICAgIHZpZXcubnIudXNlZCA9IHRydWU7XG4gICAgICAgICAgICAgIHZpZXcubnIuaW5kZXggPSBfaTM7XG4gICAgICAgICAgICAgIHZpZXcubnIua2V5ID0ga2V5O1xuICAgICAgICAgICAgICB2aWV3Lm5yLnR5cGUgPSB0eXBlO1xuICAgICAgICAgICAgICB1bnVzZWRJbmRleC5zZXQodHlwZSwgdiArIDEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdmlldyA9IHRoaXMuYWRkVmlldyhwb29sLCBfaTMsIGl0ZW0sIGtleSwgdHlwZSk7XG4gICAgICAgICAgICAgIHRoaXMudW51c2VWaWV3KHZpZXcsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdisrO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2aWV3cy5zZXQoa2V5LCB2aWV3KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2aWV3Lm5yLnVzZWQgPSB0cnVlO1xuICAgICAgICAgIHZpZXcuaXRlbSA9IGl0ZW07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGUgcG9zaXRpb25cbiAgICAgICAgaWYgKGl0ZW1TaXplID09PSBudWxsKSB7XG4gICAgICAgICAgdmlldy5wb3NpdGlvbiA9IHNpemVzW19pMyAtIDFdLmFjY3VtdWxhdG9yO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZpZXcucG9zaXRpb24gPSBfaTMgKiBpdGVtU2l6ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLiRfc3RhcnRJbmRleCA9IHN0YXJ0SW5kZXg7XG4gICAgICB0aGlzLiRfZW5kSW5kZXggPSBlbmRJbmRleDtcblxuICAgICAgaWYgKHRoaXMuZW1pdFVwZGF0ZSkgdGhpcy4kZW1pdCgndXBkYXRlJywgc3RhcnRJbmRleCwgZW5kSW5kZXgpO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBjb250aW51b3VzOiBjb250aW51b3VzXG4gICAgICB9O1xuICAgIH0sXG4gICAgZ2V0TGlzdGVuZXJUYXJnZXQ6IGZ1bmN0aW9uIGdldExpc3RlbmVyVGFyZ2V0KCkge1xuICAgICAgdmFyIHRhcmdldCA9IHNjcm9sbHBhcmVudCh0aGlzLiRlbCk7XG4gICAgICAvLyBGaXggZ2xvYmFsIHNjcm9sbCB0YXJnZXQgZm9yIENocm9tZSBhbmQgU2FmYXJpXG4gICAgICBpZiAod2luZG93LmRvY3VtZW50ICYmICh0YXJnZXQgPT09IHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgfHwgdGFyZ2V0ID09PSB3aW5kb3cuZG9jdW1lbnQuYm9keSkpIHtcbiAgICAgICAgdGFyZ2V0ID0gd2luZG93O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9LFxuICAgIGdldFNjcm9sbDogZnVuY3Rpb24gZ2V0U2Nyb2xsKCkge1xuICAgICAgdmFyIGVsID0gdGhpcy4kZWwsXG4gICAgICAgICAgZGlyZWN0aW9uID0gdGhpcy5kaXJlY3Rpb247XG5cbiAgICAgIHZhciBpc1ZlcnRpY2FsID0gZGlyZWN0aW9uID09PSAndmVydGljYWwnO1xuICAgICAgdmFyIHNjcm9sbFN0YXRlID0gdm9pZCAwO1xuXG4gICAgICBpZiAodGhpcy5wYWdlTW9kZSkge1xuICAgICAgICB2YXIgYm91bmRzID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHZhciBib3VuZHNTaXplID0gaXNWZXJ0aWNhbCA/IGJvdW5kcy5oZWlnaHQgOiBib3VuZHMud2lkdGg7XG4gICAgICAgIHZhciBzdGFydCA9IC0oaXNWZXJ0aWNhbCA/IGJvdW5kcy50b3AgOiBib3VuZHMubGVmdCk7XG4gICAgICAgIHZhciBzaXplID0gaXNWZXJ0aWNhbCA/IHdpbmRvdy5pbm5lckhlaWdodCA6IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICBpZiAoc3RhcnQgPCAwKSB7XG4gICAgICAgICAgc2l6ZSArPSBzdGFydDtcbiAgICAgICAgICBzdGFydCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXJ0ICsgc2l6ZSA+IGJvdW5kc1NpemUpIHtcbiAgICAgICAgICBzaXplID0gYm91bmRzU2l6ZSAtIHN0YXJ0O1xuICAgICAgICB9XG4gICAgICAgIHNjcm9sbFN0YXRlID0ge1xuICAgICAgICAgIHN0YXJ0OiBzdGFydCxcbiAgICAgICAgICBlbmQ6IHN0YXJ0ICsgc2l6ZVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIGlmIChpc1ZlcnRpY2FsKSB7XG4gICAgICAgIHNjcm9sbFN0YXRlID0ge1xuICAgICAgICAgIHN0YXJ0OiBlbC5zY3JvbGxUb3AsXG4gICAgICAgICAgZW5kOiBlbC5zY3JvbGxUb3AgKyBlbC5jbGllbnRIZWlnaHRcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNjcm9sbFN0YXRlID0ge1xuICAgICAgICAgIHN0YXJ0OiBlbC5zY3JvbGxMZWZ0LFxuICAgICAgICAgIGVuZDogZWwuc2Nyb2xsTGVmdCArIGVsLmNsaWVudFdpZHRoXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzY3JvbGxTdGF0ZTtcbiAgICB9LFxuICAgIGFwcGx5UGFnZU1vZGU6IGZ1bmN0aW9uIGFwcGx5UGFnZU1vZGUoKSB7XG4gICAgICBpZiAodGhpcy5wYWdlTW9kZSkge1xuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcnMoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGFkZExpc3RlbmVyczogZnVuY3Rpb24gYWRkTGlzdGVuZXJzKCkge1xuICAgICAgdGhpcy5saXN0ZW5lclRhcmdldCA9IHRoaXMuZ2V0TGlzdGVuZXJUYXJnZXQoKTtcbiAgICAgIHRoaXMubGlzdGVuZXJUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5oYW5kbGVTY3JvbGwsIHN1cHBvcnRzUGFzc2l2ZSA/IHtcbiAgICAgICAgcGFzc2l2ZTogdHJ1ZVxuICAgICAgfSA6IGZhbHNlKTtcbiAgICAgIHRoaXMubGlzdGVuZXJUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5oYW5kbGVSZXNpemUpO1xuICAgIH0sXG4gICAgcmVtb3ZlTGlzdGVuZXJzOiBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcnMoKSB7XG4gICAgICBpZiAoIXRoaXMubGlzdGVuZXJUYXJnZXQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmxpc3RlbmVyVGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuaGFuZGxlU2Nyb2xsKTtcbiAgICAgIHRoaXMubGlzdGVuZXJUYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5oYW5kbGVSZXNpemUpO1xuXG4gICAgICB0aGlzLmxpc3RlbmVyVGFyZ2V0ID0gbnVsbDtcbiAgICB9LFxuICAgIHNjcm9sbFRvSXRlbTogZnVuY3Rpb24gc2Nyb2xsVG9JdGVtKGluZGV4KSB7XG4gICAgICB2YXIgc2Nyb2xsID0gdm9pZCAwO1xuICAgICAgaWYgKHRoaXMuaXRlbVNpemUgPT09IG51bGwpIHtcbiAgICAgICAgc2Nyb2xsID0gaW5kZXggPiAwID8gdGhpcy5zaXplc1tpbmRleCAtIDFdLmFjY3VtdWxhdG9yIDogMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNjcm9sbCA9IGluZGV4ICogdGhpcy5pdGVtU2l6ZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2Nyb2xsVG9Qb3NpdGlvbihzY3JvbGwpO1xuICAgIH0sXG4gICAgc2Nyb2xsVG9Qb3NpdGlvbjogZnVuY3Rpb24gc2Nyb2xsVG9Qb3NpdGlvbihwb3NpdGlvbikge1xuICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICAgIHRoaXMuJGVsLnNjcm9sbFRvcCA9IHBvc2l0aW9uO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy4kZWwuc2Nyb2xsTGVmdCA9IHBvc2l0aW9uO1xuICAgICAgfVxuICAgIH0sXG4gICAgaXRlbXNMaW1pdEVycm9yOiBmdW5jdGlvbiBpdGVtc0xpbWl0RXJyb3IoKSB7XG4gICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdJdCBzZWVtcyB0aGUgc2Nyb2xsZXIgZWxlbWVudCBpc25cXCd0IHNjcm9sbGluZywgc28gaXQgdHJpZXMgdG8gcmVuZGVyIGFsbCB0aGUgaXRlbXMgYXQgb25jZS4nLCAnU2Nyb2xsZXI6JywgX3RoaXM0LiRlbCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdNYWtlIHN1cmUgdGhlIHNjcm9sbGVyIGhhcyBhIGZpeGVkIGhlaWdodCAob3Igd2lkdGgpIGFuZCBcXCdvdmVyZmxvdy15XFwnIChvciBcXCdvdmVyZmxvdy14XFwnKSBzZXQgdG8gXFwnYXV0b1xcJyBzbyBpdCBjYW4gc2Nyb2xsIGNvcnJlY3RseSBhbmQgb25seSByZW5kZXIgdGhlIGl0ZW1zIHZpc2libGUgaW4gdGhlIHNjcm9sbCB2aWV3cG9ydC4nKTtcbiAgICAgIH0pO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZW5kZXJlZCBpdGVtcyBsaW1pdCByZWFjaGVkJyk7XG4gICAgfVxuICB9XG59O1xuXG52YXIgRHluYW1pY1Njcm9sbGVyID0geyByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3ZtID0gdGhpczt2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oO3JldHVybiBfYygnUmVjeWNsZVNjcm9sbGVyJywgX3ZtLl9nKF92bS5fYih7IHJlZjogXCJzY3JvbGxlclwiLCBhdHRyczogeyBcIml0ZW1zXCI6IF92bS5pdGVtc1dpdGhTaXplLCBcIm1pbi1pdGVtLXNpemVcIjogX3ZtLm1pbkl0ZW1TaXplLCBcImRpcmVjdGlvblwiOiBfdm0uZGlyZWN0aW9uLCBcImtleS1maWVsZFwiOiBcImlkXCIgfSwgb246IHsgXCJyZXNpemVcIjogX3ZtLm9uU2Nyb2xsZXJSZXNpemUsIFwidmlzaWJsZVwiOiBfdm0ub25TY3JvbGxlclZpc2libGUgfSwgc2NvcGVkU2xvdHM6IF92bS5fdShbeyBrZXk6IFwiZGVmYXVsdFwiLCBmbjogZnVuY3Rpb24gZm4oX3JlZikge1xuICAgICAgICAgIHZhciBpdGVtV2l0aFNpemUgPSBfcmVmLml0ZW0sXG4gICAgICAgICAgICAgIGluZGV4ID0gX3JlZi5pbmRleCxcbiAgICAgICAgICAgICAgYWN0aXZlID0gX3JlZi5hY3RpdmU7XG4gICAgICAgICAgcmV0dXJuIFtfdm0uX3QoXCJkZWZhdWx0XCIsIG51bGwsIG51bGwsIHtcbiAgICAgICAgICAgIGl0ZW06IGl0ZW1XaXRoU2l6ZS5pdGVtLFxuICAgICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICAgICAgYWN0aXZlOiBhY3RpdmUsXG4gICAgICAgICAgICBpdGVtV2l0aFNpemU6IGl0ZW1XaXRoU2l6ZVxuICAgICAgICAgIH0pXTtcbiAgICAgICAgfSB9XSkgfSwgJ1JlY3ljbGVTY3JvbGxlcicsIF92bS4kYXR0cnMsIGZhbHNlKSwgX3ZtLmxpc3RlbmVycyksIFtfYygndGVtcGxhdGUnLCB7IHNsb3Q6IFwiYmVmb3JlXCIgfSwgW192bS5fdChcImJlZm9yZVwiKV0sIDIpLCBfdm0uX3YoXCIgXCIpLCBfYygndGVtcGxhdGUnLCB7IHNsb3Q6IFwiYWZ0ZXJcIiB9LCBbX3ZtLl90KFwiYWZ0ZXJcIildLCAyKV0sIDIpO1xuICB9LCBzdGF0aWNSZW5kZXJGbnM6IFtdLFxuICBuYW1lOiAnRHluYW1pY1Njcm9sbGVyJyxcblxuICBjb21wb25lbnRzOiB7XG4gICAgUmVjeWNsZVNjcm9sbGVyOiBSZWN5Y2xlU2Nyb2xsZXJcbiAgfSxcblxuICBpbmhlcml0QXR0cnM6IGZhbHNlLFxuXG4gIHByb3ZpZGU6IGZ1bmN0aW9uIHByb3ZpZGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZzY3JvbGxEYXRhOiB0aGlzLnZzY3JvbGxEYXRhLFxuICAgICAgdnNjcm9sbFBhcmVudDogdGhpc1xuICAgIH07XG4gIH0sXG5cblxuICBwcm9wczogX2V4dGVuZHMoe30sIHByb3BzLCB7XG5cbiAgICBtaW5JdGVtU2l6ZToge1xuICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfVxuICB9KSxcblxuICBkYXRhOiBmdW5jdGlvbiBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICB2c2Nyb2xsRGF0YToge1xuICAgICAgICBhY3RpdmU6IHRydWUsXG4gICAgICAgIHNpemVzOiB7fSxcbiAgICAgICAgdmFsaWRTaXplczoge30sXG4gICAgICAgIGtleUZpZWxkOiB0aGlzLmtleUZpZWxkLFxuICAgICAgICBzaW1wbGVBcnJheTogZmFsc2VcbiAgICAgIH1cbiAgICB9O1xuICB9LFxuXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBzaW1wbGVBcnJheTogc2ltcGxlQXJyYXksXG5cbiAgICBpdGVtc1dpdGhTaXplOiBmdW5jdGlvbiBpdGVtc1dpdGhTaXplKCkge1xuICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgdmFyIGl0ZW1zID0gdGhpcy5pdGVtcyxcbiAgICAgICAgICBrZXlGaWVsZCA9IHRoaXMua2V5RmllbGQsXG4gICAgICAgICAgc2ltcGxlQXJyYXkkJDEgPSB0aGlzLnNpbXBsZUFycmF5O1xuXG4gICAgICB2YXIgc2l6ZXMgPSB0aGlzLnZzY3JvbGxEYXRhLnNpemVzO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgaXRlbSA9IGl0ZW1zW2ldO1xuICAgICAgICB2YXIgaWQgPSBzaW1wbGVBcnJheSQkMSA/IGkgOiBpdGVtW2tleUZpZWxkXTtcbiAgICAgICAgdmFyIHNpemUgPSBzaXplc1tpZF07XG4gICAgICAgIGlmICh0eXBlb2Ygc2l6ZSA9PT0gJ3VuZGVmaW5lZCcgJiYgIXRoaXMuJF91bmRlZmluZWRNYXBbaWRdKSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHZ1ZS9uby1zaWRlLWVmZmVjdHMtaW4tY29tcHV0ZWQtcHJvcGVydGllc1xuICAgICAgICAgIHRoaXMuJF91bmRlZmluZWRTaXplcysrO1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB2dWUvbm8tc2lkZS1lZmZlY3RzLWluLWNvbXB1dGVkLXByb3BlcnRpZXNcbiAgICAgICAgICB0aGlzLiRfdW5kZWZpbmVkTWFwW2lkXSA9IHRydWU7XG4gICAgICAgICAgc2l6ZSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgIGl0ZW06IGl0ZW0sXG4gICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgIHNpemU6IHNpemVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sXG4gICAgbGlzdGVuZXJzOiBmdW5jdGlvbiBsaXN0ZW5lcnMoKSB7XG4gICAgICB2YXIgbGlzdGVuZXJzID0ge307XG4gICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy4kbGlzdGVuZXJzKSB7XG4gICAgICAgIGlmIChrZXkgIT09ICdyZXNpemUnICYmIGtleSAhPT0gJ3Zpc2libGUnKSB7XG4gICAgICAgICAgbGlzdGVuZXJzW2tleV0gPSB0aGlzLiRsaXN0ZW5lcnNba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGxpc3RlbmVycztcbiAgICB9XG4gIH0sXG5cbiAgd2F0Y2g6IHtcbiAgICBpdGVtczogZnVuY3Rpb24gaXRlbXMoKSB7XG4gICAgICB0aGlzLmZvcmNlVXBkYXRlKGZhbHNlKTtcbiAgICB9LFxuXG5cbiAgICBzaW1wbGVBcnJheToge1xuICAgICAgaGFuZGxlcjogZnVuY3Rpb24gaGFuZGxlcih2YWx1ZSkge1xuICAgICAgICB0aGlzLnZzY3JvbGxEYXRhLnNpbXBsZUFycmF5ID0gdmFsdWU7XG4gICAgICB9LFxuXG4gICAgICBpbW1lZGlhdGU6IHRydWVcbiAgICB9LFxuXG4gICAgZGlyZWN0aW9uOiBmdW5jdGlvbiBkaXJlY3Rpb24odmFsdWUpIHtcbiAgICAgIHRoaXMuZm9yY2VVcGRhdGUodHJ1ZSk7XG4gICAgfVxuICB9LFxuXG4gIGNyZWF0ZWQ6IGZ1bmN0aW9uIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy4kX3VwZGF0ZXMgPSBbXTtcbiAgICB0aGlzLiRfdW5kZWZpbmVkU2l6ZXMgPSAwO1xuICAgIHRoaXMuJF91bmRlZmluZWRNYXAgPSB7fTtcbiAgfSxcbiAgYWN0aXZhdGVkOiBmdW5jdGlvbiBhY3RpdmF0ZWQoKSB7XG4gICAgdGhpcy52c2Nyb2xsRGF0YS5hY3RpdmUgPSB0cnVlO1xuICB9LFxuICBkZWFjdGl2YXRlZDogZnVuY3Rpb24gZGVhY3RpdmF0ZWQoKSB7XG4gICAgdGhpcy52c2Nyb2xsRGF0YS5hY3RpdmUgPSBmYWxzZTtcbiAgfSxcblxuXG4gIG1ldGhvZHM6IHtcbiAgICBvblNjcm9sbGVyUmVzaXplOiBmdW5jdGlvbiBvblNjcm9sbGVyUmVzaXplKCkge1xuICAgICAgdmFyIHNjcm9sbGVyID0gdGhpcy4kcmVmcy5zY3JvbGxlcjtcbiAgICAgIGlmIChzY3JvbGxlcikge1xuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gICAgICB9XG4gICAgICB0aGlzLiRlbWl0KCdyZXNpemUnKTtcbiAgICB9LFxuICAgIG9uU2Nyb2xsZXJWaXNpYmxlOiBmdW5jdGlvbiBvblNjcm9sbGVyVmlzaWJsZSgpIHtcbiAgICAgIHRoaXMuJGVtaXQoJ3ZzY3JvbGw6dXBkYXRlJywgeyBmb3JjZTogZmFsc2UgfSk7XG4gICAgICB0aGlzLiRlbWl0KCd2aXNpYmxlJyk7XG4gICAgfSxcbiAgICBmb3JjZVVwZGF0ZTogZnVuY3Rpb24gZm9yY2VVcGRhdGUoKSB7XG4gICAgICB2YXIgY2xlYXIgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHRydWU7XG5cbiAgICAgIGlmIChjbGVhciB8fCB0aGlzLnNpbXBsZUFycmF5KSB7XG4gICAgICAgIHRoaXMudnNjcm9sbERhdGEudmFsaWRTaXplcyA9IHt9O1xuICAgICAgfVxuICAgICAgdGhpcy4kZW1pdCgndnNjcm9sbDp1cGRhdGUnLCB7IGZvcmNlOiB0cnVlIH0pO1xuICAgIH0sXG4gICAgc2Nyb2xsVG9JdGVtOiBmdW5jdGlvbiBzY3JvbGxUb0l0ZW0oaW5kZXgpIHtcbiAgICAgIHZhciBzY3JvbGxlciA9IHRoaXMuJHJlZnMuc2Nyb2xsZXI7XG4gICAgICBpZiAoc2Nyb2xsZXIpIHNjcm9sbGVyLnNjcm9sbFRvSXRlbShpbmRleCk7XG4gICAgfSxcbiAgICBnZXRJdGVtU2l6ZTogZnVuY3Rpb24gZ2V0SXRlbVNpemUoaXRlbSkge1xuICAgICAgdmFyIGluZGV4ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQ7XG5cbiAgICAgIHZhciBpZCA9IHRoaXMuc2ltcGxlQXJyYXkgPyBpbmRleCAhPSBudWxsID8gaW5kZXggOiB0aGlzLml0ZW1zLmluZGV4T2YoaXRlbSkgOiBpdGVtW3RoaXMua2V5RmllbGRdO1xuICAgICAgcmV0dXJuIHRoaXMudnNjcm9sbERhdGEuc2l6ZXNbaWRdIHx8IDA7XG4gICAgfSxcbiAgICBzY3JvbGxUb0JvdHRvbTogZnVuY3Rpb24gc2Nyb2xsVG9Cb3R0b20oKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICBpZiAodGhpcy4kX3Njcm9sbGluZ1RvQm90dG9tKSByZXR1cm47XG4gICAgICB0aGlzLiRfc2Nyb2xsaW5nVG9Cb3R0b20gPSB0cnVlO1xuICAgICAgdmFyIGVsID0gdGhpcy4kZWw7XG4gICAgICAvLyBJdGVtIGlzIGluc2VydGVkIHRvIHRoZSBET01cbiAgICAgIHRoaXMuJG5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gSXRlbSBzaXplcyBhcmUgY29tcHV0ZWRcbiAgICAgICAgdmFyIGNiID0gZnVuY3Rpb24gY2IoKSB7XG4gICAgICAgICAgZWwuc2Nyb2xsVG9wID0gZWwuc2Nyb2xsSGVpZ2h0O1xuICAgICAgICAgIGlmIChfdGhpcy4kX3VuZGVmaW5lZFNpemVzID09PSAwKSB7XG4gICAgICAgICAgICBfdGhpcy4kX3Njcm9sbGluZ1RvQm90dG9tID0gZmFsc2U7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShjYik7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2IpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59O1xuXG52YXIgRHluYW1pY1Njcm9sbGVySXRlbSA9IHtcbiAgbmFtZTogJ0R5bmFtaWNTY3JvbGxlckl0ZW0nLFxuXG4gIGluamVjdDogWyd2c2Nyb2xsRGF0YScsICd2c2Nyb2xsUGFyZW50J10sXG5cbiAgcHJvcHM6IHtcbiAgICBpdGVtOiB7XG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG5cbiAgICB3YXRjaERhdGE6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH0sXG5cbiAgICBhY3RpdmU6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG5cbiAgICBpbmRleDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkXG4gICAgfSxcblxuICAgIHNpemVEZXBlbmRlbmNpZXM6IHtcbiAgICAgIHR5cGU6IFtBcnJheSwgT2JqZWN0XSxcbiAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICB9LFxuXG4gICAgZW1pdFJlc2l6ZToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgfSxcblxuICAgIHRhZzoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ2RpdidcbiAgICB9XG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBpZDogZnVuY3Rpb24gaWQoKSB7XG4gICAgICByZXR1cm4gdGhpcy52c2Nyb2xsRGF0YS5zaW1wbGVBcnJheSA/IHRoaXMuaW5kZXggOiB0aGlzLml0ZW1bdGhpcy52c2Nyb2xsRGF0YS5rZXlGaWVsZF07XG4gICAgfSxcbiAgICBzaXplOiBmdW5jdGlvbiBzaXplKCkge1xuICAgICAgcmV0dXJuIHRoaXMudnNjcm9sbERhdGEudmFsaWRTaXplc1t0aGlzLmlkXSAmJiB0aGlzLnZzY3JvbGxEYXRhLnNpemVzW3RoaXMuaWRdIHx8IDA7XG4gICAgfVxuICB9LFxuXG4gIHdhdGNoOiB7XG4gICAgd2F0Y2hEYXRhOiAndXBkYXRlV2F0Y2hEYXRhJyxcblxuICAgIGlkOiBmdW5jdGlvbiBpZCgpIHtcbiAgICAgIGlmICghdGhpcy5zaXplKSB7XG4gICAgICAgIHRoaXMub25EYXRhVXBkYXRlKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBhY3RpdmU6IGZ1bmN0aW9uIGFjdGl2ZSh2YWx1ZSkge1xuICAgICAgaWYgKHZhbHVlICYmIHRoaXMuJF9wZW5kaW5nVlNjcm9sbFVwZGF0ZSA9PT0gdGhpcy5pZCkge1xuICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgY3JlYXRlZDogZnVuY3Rpb24gY3JlYXRlZCgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgaWYgKHRoaXMuJGlzU2VydmVyKSByZXR1cm47XG5cbiAgICB0aGlzLiRfZm9yY2VOZXh0VlNjcm9sbFVwZGF0ZSA9IG51bGw7XG4gICAgdGhpcy51cGRhdGVXYXRjaERhdGEoKTtcblxuICAgIHZhciBfbG9vcCA9IGZ1bmN0aW9uIF9sb29wKGspIHtcbiAgICAgIF90aGlzLiR3YXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5zaXplRGVwZW5kZW5jaWVzW2tdO1xuICAgICAgfSwgX3RoaXMub25EYXRhVXBkYXRlKTtcbiAgICB9O1xuXG4gICAgZm9yICh2YXIgayBpbiB0aGlzLnNpemVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIF9sb29wKGspO1xuICAgIH1cblxuICAgIHRoaXMudnNjcm9sbFBhcmVudC4kb24oJ3ZzY3JvbGw6dXBkYXRlJywgdGhpcy5vblZzY3JvbGxVcGRhdGUpO1xuICAgIHRoaXMudnNjcm9sbFBhcmVudC4kb24oJ3ZzY3JvbGw6dXBkYXRlLXNpemUnLCB0aGlzLm9uVnNjcm9sbFVwZGF0ZVNpemUpO1xuICB9LFxuICBtb3VudGVkOiBmdW5jdGlvbiBtb3VudGVkKCkge1xuICAgIGlmICh0aGlzLnZzY3JvbGxEYXRhLmFjdGl2ZSkge1xuICAgICAgdGhpcy51cGRhdGVTaXplKCk7XG4gICAgfVxuICB9LFxuICBiZWZvcmVEZXN0cm95OiBmdW5jdGlvbiBiZWZvcmVEZXN0cm95KCkge1xuICAgIHRoaXMudnNjcm9sbFBhcmVudC4kb2ZmKCd2c2Nyb2xsOnVwZGF0ZScsIHRoaXMub25Wc2Nyb2xsVXBkYXRlKTtcbiAgICB0aGlzLnZzY3JvbGxQYXJlbnQuJG9mZigndnNjcm9sbDp1cGRhdGUtc2l6ZScsIHRoaXMub25Wc2Nyb2xsVXBkYXRlU2l6ZSk7XG4gIH0sXG5cblxuICBtZXRob2RzOiB7XG4gICAgdXBkYXRlU2l6ZTogZnVuY3Rpb24gdXBkYXRlU2l6ZSgpIHtcbiAgICAgIGlmICh0aGlzLmFjdGl2ZSAmJiB0aGlzLnZzY3JvbGxEYXRhLmFjdGl2ZSkge1xuICAgICAgICBpZiAodGhpcy4kX3BlbmRpbmdTaXplVXBkYXRlICE9PSB0aGlzLmlkKSB7XG4gICAgICAgICAgdGhpcy4kX3BlbmRpbmdTaXplVXBkYXRlID0gdGhpcy5pZDtcbiAgICAgICAgICB0aGlzLiRfZm9yY2VOZXh0VlNjcm9sbFVwZGF0ZSA9IG51bGw7XG4gICAgICAgICAgdGhpcy4kX3BlbmRpbmdWU2Nyb2xsVXBkYXRlID0gbnVsbDtcbiAgICAgICAgICBpZiAodGhpcy5hY3RpdmUgJiYgdGhpcy52c2Nyb2xsRGF0YS5hY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcHV0ZVNpemUodGhpcy5pZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLiRfZm9yY2VOZXh0VlNjcm9sbFVwZGF0ZSA9IHRoaXMuaWQ7XG4gICAgICB9XG4gICAgfSxcbiAgICBnZXRCb3VuZHM6IGZ1bmN0aW9uIGdldEJvdW5kcygpIHtcbiAgICAgIHJldHVybiB0aGlzLiRlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB9LFxuICAgIHVwZGF0ZVdhdGNoRGF0YTogZnVuY3Rpb24gdXBkYXRlV2F0Y2hEYXRhKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIGlmICh0aGlzLndhdGNoRGF0YSkge1xuICAgICAgICB0aGlzLiRfd2F0Y2hEYXRhID0gdGhpcy4kd2F0Y2goJ2RhdGEnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMyLm9uRGF0YVVwZGF0ZSgpO1xuICAgICAgICB9LCB7XG4gICAgICAgICAgZGVlcDogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy4kX3dhdGNoRGF0YSkge1xuICAgICAgICB0aGlzLiRfd2F0Y2hEYXRhKCk7XG4gICAgICAgIHRoaXMuJF93YXRjaERhdGEgPSBudWxsO1xuICAgICAgfVxuICAgIH0sXG4gICAgb25Wc2Nyb2xsVXBkYXRlOiBmdW5jdGlvbiBvblZzY3JvbGxVcGRhdGUoX3JlZikge1xuICAgICAgdmFyIGZvcmNlID0gX3JlZi5mb3JjZTtcblxuICAgICAgaWYgKCF0aGlzLmFjdGl2ZSAmJiBmb3JjZSkge1xuICAgICAgICB0aGlzLiRfcGVuZGluZ1ZTY3JvbGxVcGRhdGUgPSB0aGlzLmlkO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuJF9mb3JjZU5leHRWU2Nyb2xsVXBkYXRlID09PSB0aGlzLmlkIHx8IGZvcmNlIHx8ICF0aGlzLnNpemUpIHtcbiAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBvbkRhdGFVcGRhdGU6IGZ1bmN0aW9uIG9uRGF0YVVwZGF0ZSgpIHtcbiAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xuICAgIH0sXG4gICAgY29tcHV0ZVNpemU6IGZ1bmN0aW9uIGNvbXB1dGVTaXplKGlkKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgdGhpcy4kbmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoX3RoaXMzLmlkID09PSBpZCkge1xuICAgICAgICAgIHZhciBib3VuZHMgPSBfdGhpczMuZ2V0Qm91bmRzKCk7XG4gICAgICAgICAgdmFyIHNpemUgPSBNYXRoLnJvdW5kKF90aGlzMy52c2Nyb2xsUGFyZW50LmRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJyA/IGJvdW5kcy5oZWlnaHQgOiBib3VuZHMud2lkdGgpO1xuICAgICAgICAgIGlmIChzaXplICYmIF90aGlzMy5zaXplICE9PSBzaXplKSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMzLnZzY3JvbGxQYXJlbnQuJF91bmRlZmluZWRNYXBbaWRdKSB7XG4gICAgICAgICAgICAgIF90aGlzMy52c2Nyb2xsUGFyZW50LiRfdW5kZWZpbmVkU2l6ZXMtLTtcbiAgICAgICAgICAgICAgX3RoaXMzLnZzY3JvbGxQYXJlbnQuJF91bmRlZmluZWRNYXBbaWRdID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3RoaXMzLiRzZXQoX3RoaXMzLnZzY3JvbGxEYXRhLnNpemVzLCBfdGhpczMuaWQsIHNpemUpO1xuICAgICAgICAgICAgX3RoaXMzLiRzZXQoX3RoaXMzLnZzY3JvbGxEYXRhLnZhbGlkU2l6ZXMsIF90aGlzMy5pZCwgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAoX3RoaXMzLmVtaXRSZXNpemUpIF90aGlzMy4kZW1pdCgncmVzaXplJywgX3RoaXMzLmlkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgX3RoaXMzLiRfcGVuZGluZ1NpemVVcGRhdGUgPSBudWxsO1xuICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKGgpIHtcbiAgICByZXR1cm4gaCh0aGlzLnRhZywgdGhpcy4kc2xvdHMuZGVmYXVsdCk7XG4gIH1cbn07XG5cbnZhciBJZFN0YXRlID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3JlZiA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge30sXG4gICAgICBfcmVmJGlkUHJvcCA9IF9yZWYuaWRQcm9wLFxuICAgICAgaWRQcm9wID0gX3JlZiRpZFByb3AgPT09IHVuZGVmaW5lZCA/IGZ1bmN0aW9uICh2bSkge1xuICAgIHJldHVybiB2bS5pdGVtLmlkO1xuICB9IDogX3JlZiRpZFByb3A7XG5cbiAgdmFyIHN0b3JlID0ge307XG4gIHZhciB2bSA9IG5ldyBWdWUoe1xuICAgIGRhdGE6IGZ1bmN0aW9uIGRhdGEoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdG9yZTogc3RvcmVcbiAgICAgIH07XG4gICAgfVxuICB9KTtcblxuICAvLyBAdnVlL2NvbXBvbmVudFxuICByZXR1cm4ge1xuICAgIGRhdGE6IGZ1bmN0aW9uIGRhdGEoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpZFN0YXRlOiBudWxsXG4gICAgICB9O1xuICAgIH0sXG4gICAgY3JlYXRlZDogZnVuY3Rpb24gY3JlYXRlZCgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHRoaXMuJF9pZCA9IG51bGw7XG4gICAgICBpZiAodHlwZW9mIGlkUHJvcCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGlzLiRfZ2V0SWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGlkUHJvcC5jYWxsKF90aGlzLCBfdGhpcyk7XG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLiRfZ2V0SWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzW2lkUHJvcF07XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICB0aGlzLiR3YXRjaCh0aGlzLiRfZ2V0SWQsIHtcbiAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24gaGFuZGxlcih2YWx1ZSkge1xuICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgdGhpcy4kbmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMyLiRfaWQgPSB2YWx1ZTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBpbW1lZGlhdGU6IHRydWVcbiAgICAgIH0pO1xuICAgICAgdGhpcy4kX3VwZGF0ZUlkU3RhdGUoKTtcbiAgICB9LFxuICAgIGJlZm9yZVVwZGF0ZTogZnVuY3Rpb24gYmVmb3JlVXBkYXRlKCkge1xuICAgICAgdGhpcy4kX3VwZGF0ZUlkU3RhdGUoKTtcbiAgICB9LFxuXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICAvKipcbiAgICAgICAqIEluaXRpYWxpemUgYW4gaWRTdGF0ZVxuICAgICAgICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfSBpZCBVbmlxdWUgaWQgZm9yIHRoZSBkYXRhXG4gICAgICAgKi9cbiAgICAgICRfaWRTdGF0ZUluaXQ6IGZ1bmN0aW9uICRfaWRTdGF0ZUluaXQoaWQpIHtcbiAgICAgICAgdmFyIGZhY3RvcnkgPSB0aGlzLiRvcHRpb25zLmlkU3RhdGU7XG4gICAgICAgIGlmICh0eXBlb2YgZmFjdG9yeSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHZhciBkYXRhID0gZmFjdG9yeS5jYWxsKHRoaXMsIHRoaXMpO1xuICAgICAgICAgIHZtLiRzZXQoc3RvcmUsIGlkLCBkYXRhKTtcbiAgICAgICAgICB0aGlzLiRfaWQgPSBpZDtcbiAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1ttaXhpbiBJZFN0YXRlXSBNaXNzaW5nIGBpZFN0YXRlYCBmdW5jdGlvbiBvbiBjb21wb25lbnQgZGVmaW5pdGlvbi4nKTtcbiAgICAgICAgfVxuICAgICAgfSxcblxuXG4gICAgICAvKipcbiAgICAgICAqIEVuc3VyZSBpZFN0YXRlIGlzIGNyZWF0ZWQgYW5kIHVwLXRvLWRhdGVcbiAgICAgICAqL1xuICAgICAgJF91cGRhdGVJZFN0YXRlOiBmdW5jdGlvbiAkX3VwZGF0ZUlkU3RhdGUoKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXMuJF9nZXRJZCgpO1xuICAgICAgICBpZiAoaWQgPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnNvbGUud2FybignTm8gaWQgZm91bmQgZm9yIElkU3RhdGUgd2l0aCBpZFByb3A6IFxcJycgKyBpZFByb3AgKyAnXFwnLicpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpZCAhPT0gdGhpcy4kX2lkKSB7XG4gICAgICAgICAgaWYgKCFzdG9yZVtpZF0pIHtcbiAgICAgICAgICAgIHRoaXMuJF9pZFN0YXRlSW5pdChpZCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuaWRTdGF0ZSA9IHN0b3JlW2lkXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbn07XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyQ29tcG9uZW50cyhWdWUkJDEsIHByZWZpeCkge1xuICBWdWUkJDEuY29tcG9uZW50KHByZWZpeCArICdyZWN5Y2xlLXNjcm9sbGVyJywgUmVjeWNsZVNjcm9sbGVyKTtcbiAgVnVlJCQxLmNvbXBvbmVudChwcmVmaXggKyAnUmVjeWNsZVNjcm9sbGVyJywgUmVjeWNsZVNjcm9sbGVyKTtcbiAgVnVlJCQxLmNvbXBvbmVudChwcmVmaXggKyAnZHluYW1pYy1zY3JvbGxlcicsIER5bmFtaWNTY3JvbGxlcik7XG4gIFZ1ZSQkMS5jb21wb25lbnQocHJlZml4ICsgJ0R5bmFtaWNTY3JvbGxlcicsIER5bmFtaWNTY3JvbGxlcik7XG4gIFZ1ZSQkMS5jb21wb25lbnQocHJlZml4ICsgJ2R5bmFtaWMtc2Nyb2xsZXItaXRlbScsIER5bmFtaWNTY3JvbGxlckl0ZW0pO1xuICBWdWUkJDEuY29tcG9uZW50KHByZWZpeCArICdEeW5hbWljU2Nyb2xsZXJJdGVtJywgRHluYW1pY1Njcm9sbGVySXRlbSk7XG59XG5cbnZhciBwbHVnaW4gPSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2ZXJzaW9uOiBcIjEuMC4wLXJjLjJcIixcbiAgaW5zdGFsbDogZnVuY3Rpb24gaW5zdGFsbChWdWUkJDEsIG9wdGlvbnMpIHtcbiAgICB2YXIgZmluYWxPcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwge1xuICAgICAgaW5zdGFsbENvbXBvbmVudHM6IHRydWUsXG4gICAgICBjb21wb25lbnRzUHJlZml4OiAnJ1xuICAgIH0sIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIga2V5IGluIGZpbmFsT3B0aW9ucykge1xuICAgICAgaWYgKHR5cGVvZiBmaW5hbE9wdGlvbnNba2V5XSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uZmlnW2tleV0gPSBmaW5hbE9wdGlvbnNba2V5XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZmluYWxPcHRpb25zLmluc3RhbGxDb21wb25lbnRzKSB7XG4gICAgICByZWdpc3RlckNvbXBvbmVudHMoVnVlJCQxLCBmaW5hbE9wdGlvbnMuY29tcG9uZW50c1ByZWZpeCk7XG4gICAgfVxuICB9XG59O1xuXG4vLyBBdXRvLWluc3RhbGxcbnZhciBHbG9iYWxWdWUgPSBudWxsO1xuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIEdsb2JhbFZ1ZSA9IHdpbmRvdy5WdWU7XG59IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gIEdsb2JhbFZ1ZSA9IGdsb2JhbC5WdWU7XG59XG5pZiAoR2xvYmFsVnVlKSB7XG4gIEdsb2JhbFZ1ZS51c2UocGx1Z2luKTtcbn1cblxuZXhwb3J0IHsgUmVjeWNsZVNjcm9sbGVyLCBEeW5hbWljU2Nyb2xsZXIsIER5bmFtaWNTY3JvbGxlckl0ZW0sIElkU3RhdGUgfTtcbmV4cG9ydCBkZWZhdWx0IHBsdWdpbjtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRW1vamkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUzNGFkOTQ2JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0Vtb2ppLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRW1vamkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvc2ViL3dlYi9lbW9qaS1tYXJ0LXZ1ZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNTM0YWQ5NDYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNTM0YWQ5NDYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0Vtb2ppLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MzRhZDk0NiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1MzRhZDk0NicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvRW1vamkudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRW1vamkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FbW9qaS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRW1vamkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUzNGFkOTQ2JlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9QaWNrZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWQxNmU5MDg0JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1BpY2tlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1BpY2tlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9zZWIvd2ViL2Vtb2ppLW1hcnQtdnVlL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdkMTZlOTA4NCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdkMTZlOTA4NCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUGlja2VyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kMTZlOTA4NCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdkMTZlOTA4NCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvUGlja2VyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BpY2tlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BpY2tlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGlja2VyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kMTZlOTA4NCZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU3RhdGljUGlja2VyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yYjE2YzI2OCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9TdGF0aWNQaWNrZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9TdGF0aWNQaWNrZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvc2ViL3dlYi9lbW9qaS1tYXJ0LXZ1ZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMmIxNmMyNjgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMmIxNmMyNjgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1N0YXRpY1BpY2tlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmIxNmMyNjgmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMmIxNmMyNjgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL1N0YXRpY1BpY2tlci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TdGF0aWNQaWNrZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TdGF0aWNQaWNrZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1N0YXRpY1BpY2tlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmIxNmMyNjgmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2FuY2hvcnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUxMTg4MTA0JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2FuY2hvcnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9hbmNob3JzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3NlYi93ZWIvZW1vamktbWFydC12dWUvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzUxMTg4MTA0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzUxMTg4MTA0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9hbmNob3JzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MTE4ODEwNCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1MTE4ODEwNCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvYW5jaG9ycy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9hbmNob3JzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYW5jaG9ycy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYW5jaG9ycy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTExODgxMDQmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2NhdGVnb3J5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNzZjZGEwZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9jYXRlZ29yeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2NhdGVnb3J5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3NlYi93ZWIvZW1vamktbWFydC12dWUvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzM3NmNkYTBlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzM3NmNkYTBlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9jYXRlZ29yeS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Mzc2Y2RhMGUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMzc2Y2RhMGUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL2NhdGVnb3J5LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NhdGVnb3J5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2F0ZWdvcnkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NhdGVnb3J5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNzZjZGEwZSZcIiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgQW5jaG9ycyB9IGZyb20gJy4vYW5jaG9ycydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2F0ZWdvcnkgfSBmcm9tICcuL2NhdGVnb3J5J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQcmV2aWV3IH0gZnJvbSAnLi9wcmV2aWV3J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZWFyY2ggfSBmcm9tICcuL3NlYXJjaCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2tpbnMgfSBmcm9tICcuL3NraW5zJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBFbW9qaSB9IGZyb20gJy4vRW1vamknXG5leHBvcnQgeyBkZWZhdWx0IGFzIFBpY2tlciB9IGZyb20gJy4vUGlja2VyJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTdGF0aWNQaWNrZXIgfSBmcm9tICcuL1N0YXRpY1BpY2tlcidcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vcHJldmlldy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzUwNTZjMzAmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vcHJldmlldy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3ByZXZpZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvc2ViL3dlYi9lbW9qaS1tYXJ0LXZ1ZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMzUwNTZjMzAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMzUwNTZjMzAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3ByZXZpZXcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM1MDU2YzMwJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzM1MDU2YzMwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9wcmV2aWV3LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3ByZXZpZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wcmV2aWV3LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wcmV2aWV3LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNTA1NmMzMCZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vc2VhcmNoLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00YWQ0MWJiOCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9zZWFyY2gudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9zZWFyY2gudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvc2ViL3dlYi9lbW9qaS1tYXJ0LXZ1ZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNGFkNDFiYjgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNGFkNDFiYjgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3NlYXJjaC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGFkNDFiYjgmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNGFkNDFiYjgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL3NlYXJjaC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zZWFyY2gudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zZWFyY2gudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NlYXJjaC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGFkNDFiYjgmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3NraW5zLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xYzYxNDg5NCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9za2lucy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3NraW5zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3NlYi93ZWIvZW1vamktbWFydC12dWUvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzFjNjE0ODk0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzFjNjE0ODk0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9za2lucy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWM2MTQ4OTQmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMWM2MTQ4OTQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL3NraW5zLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NraW5zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2tpbnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NraW5zLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xYzYxNDg5NCZcIiIsImltcG9ydCBzdG9yZSBmcm9tICcuL3V0aWxzL3N0b3JlJ1xuaW1wb3J0IHsgdW5jb21wcmVzcyB9IGZyb20gJy4vdXRpbHMvZGF0YSdcbmltcG9ydCBmcmVxdWVudGx5IGZyb20gJy4vdXRpbHMvZnJlcXVlbnRseSdcblxuZXhwb3J0IHtcbiAgUGlja2VyLFxuICBTdGF0aWNQaWNrZXIsXG4gIEVtb2ppLFxuICBBbmNob3JzLFxuICBQcmV2aWV3LFxuICBTZWFyY2gsXG4gIENhdGVnb3J5LFxuICBTa2lucyxcbn0gZnJvbSAnLi9jb21wb25lbnRzJ1xuXG5leHBvcnQgeyBFbW9qaUluZGV4LCBFbW9qaVZpZXcsIEVtb2ppRGF0YSwgc2FuaXRpemUgfSBmcm9tICcuL3V0aWxzL2Vtb2ppLWRhdGEnXG5leHBvcnQgeyB1bmNvbXByZXNzLCBzdG9yZSwgZnJlcXVlbnRseSB9XG4iLCJjb25zdCBfU3RyaW5nID0gU3RyaW5nXG5cbmV4cG9ydCBkZWZhdWx0IF9TdHJpbmcuZnJvbUNvZGVQb2ludCB8fFxuICBmdW5jdGlvbiBzdHJpbmdGcm9tQ29kZVBvaW50KCkge1xuICAgIHZhciBNQVhfU0laRSA9IDB4NDAwMFxuICAgIHZhciBjb2RlVW5pdHMgPSBbXVxuICAgIHZhciBoaWdoU3Vycm9nYXRlXG4gICAgdmFyIGxvd1N1cnJvZ2F0ZVxuICAgIHZhciBpbmRleCA9IC0xXG4gICAgdmFyIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICBpZiAoIWxlbmd0aCkge1xuICAgICAgcmV0dXJuICcnXG4gICAgfVxuICAgIHZhciByZXN1bHQgPSAnJ1xuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICB2YXIgY29kZVBvaW50ID0gTnVtYmVyKGFyZ3VtZW50c1tpbmRleF0pXG4gICAgICBpZiAoXG4gICAgICAgICFpc0Zpbml0ZShjb2RlUG9pbnQpIHx8IC8vIGBOYU5gLCBgK0luZmluaXR5YCwgb3IgYC1JbmZpbml0eWBcbiAgICAgICAgY29kZVBvaW50IDwgMCB8fCAvLyBub3QgYSB2YWxpZCBVbmljb2RlIGNvZGUgcG9pbnRcbiAgICAgICAgY29kZVBvaW50ID4gMHgxMGZmZmYgfHwgLy8gbm90IGEgdmFsaWQgVW5pY29kZSBjb2RlIHBvaW50XG4gICAgICAgIE1hdGguZmxvb3IoY29kZVBvaW50KSAhPSBjb2RlUG9pbnQgLy8gbm90IGFuIGludGVnZXJcbiAgICAgICkge1xuICAgICAgICB0aHJvdyBSYW5nZUVycm9yKCdJbnZhbGlkIGNvZGUgcG9pbnQ6ICcgKyBjb2RlUG9pbnQpXG4gICAgICB9XG4gICAgICBpZiAoY29kZVBvaW50IDw9IDB4ZmZmZikge1xuICAgICAgICAvLyBCTVAgY29kZSBwb2ludFxuICAgICAgICBjb2RlVW5pdHMucHVzaChjb2RlUG9pbnQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBBc3RyYWwgY29kZSBwb2ludDsgc3BsaXQgaW4gc3Vycm9nYXRlIGhhbHZlc1xuICAgICAgICAvLyBodHRwOi8vbWF0aGlhc2J5bmVucy5iZS9ub3Rlcy9qYXZhc2NyaXB0LWVuY29kaW5nI3N1cnJvZ2F0ZS1mb3JtdWxhZVxuICAgICAgICBjb2RlUG9pbnQgLT0gMHgxMDAwMFxuICAgICAgICBoaWdoU3Vycm9nYXRlID0gKGNvZGVQb2ludCA+PiAxMCkgKyAweGQ4MDBcbiAgICAgICAgbG93U3Vycm9nYXRlID0gKGNvZGVQb2ludCAlIDB4NDAwKSArIDB4ZGMwMFxuICAgICAgICBjb2RlVW5pdHMucHVzaChoaWdoU3Vycm9nYXRlLCBsb3dTdXJyb2dhdGUpXG4gICAgICB9XG4gICAgICBpZiAoaW5kZXggKyAxID09PSBsZW5ndGggfHwgY29kZVVuaXRzLmxlbmd0aCA+IE1BWF9TSVpFKSB7XG4gICAgICAgIHJlc3VsdCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIGNvZGVVbml0cylcbiAgICAgICAgY29kZVVuaXRzLmxlbmd0aCA9IDBcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG4iLCJjb25zdCBTVkdzID0ge1xuICBhY3Rpdml0eTogYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj48cGF0aCBkPVwiTTEyIDBDNS4zNzMgMCAwIDUuMzcyIDAgMTJjMCA2LjYyNyA1LjM3MyAxMiAxMiAxMiA2LjYyOCAwIDEyLTUuMzczIDEyLTEyIDAtNi42MjgtNS4zNzItMTItMTItMTJtOS45NDkgMTFIMTcuMDVjLjIyNC0yLjUyNyAxLjIzMi00Ljc3MyAxLjk2OC02LjExM0E5Ljk2NiA5Ljk2NiAwIDAgMSAyMS45NDkgMTFNMTMgMTFWMi4wNTFhOS45NDUgOS45NDUgMCAwIDEgNC40MzIgMS41NjRjLS44NTggMS40OTEtMi4xNTYgNC4yMi0yLjM5MiA3LjM4NUgxM3ptLTIgMEg4Ljk2MWMtLjIzOC0zLjE2NS0xLjUzNi01Ljg5NC0yLjM5My03LjM4NUE5Ljk1IDkuOTUgMCAwIDEgMTEgMi4wNTFWMTF6bTAgMnY4Ljk0OWE5LjkzNyA5LjkzNyAwIDAgMS00LjQzMi0xLjU2NGMuODU3LTEuNDkyIDIuMTU1LTQuMjIxIDIuMzkzLTcuMzg1SDExem00LjA0IDBjLjIzNiAzLjE2NCAxLjUzNCA1Ljg5MyAyLjM5MiA3LjM4NUE5LjkyIDkuOTIgMCAwIDEgMTMgMjEuOTQ5VjEzaDIuMDR6TTQuOTgyIDQuODg3QzUuNzE4IDYuMjI3IDYuNzI2IDguNDczIDYuOTUxIDExaC00LjlhOS45NzcgOS45NzcgMCAwIDEgMi45MzEtNi4xMTNNMi4wNTEgMTNoNC45Yy0uMjI2IDIuNTI3LTEuMjMzIDQuNzcxLTEuOTY5IDYuMTEzQTkuOTcyIDkuOTcyIDAgMCAxIDIuMDUxIDEzbTE2Ljk2NyA2LjExM2MtLjczNS0xLjM0Mi0xLjc0NC0zLjU4Ni0xLjk2OC02LjExM2g0Ljg5OWE5Ljk2MSA5Ljk2MSAwIDAgMS0yLjkzMSA2LjExM1wiLz48L3N2Zz5gLFxuXG4gIGN1c3RvbTogYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj48ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMi4wMDAwMDAsIDEuMDAwMDAwKVwiPjxyZWN0IGlkPVwiUmVjdGFuZ2xlXCIgeD1cIjhcIiB5PVwiMFwiIHdpZHRoPVwiM1wiIGhlaWdodD1cIjIxXCIgcng9XCIxLjVcIj48L3JlY3Q+PHJlY3QgaWQ9XCJSZWN0YW5nbGVcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoOS44NDMsIDEwLjU0OSkgcm90YXRlKDYwKSB0cmFuc2xhdGUoLTkuODQzLCAtMTAuNTQ5KSBcIiB4PVwiOC4zNDNcIiB5PVwiMC4wNDlcIiB3aWR0aD1cIjNcIiBoZWlnaHQ9XCIyMVwiIHJ4PVwiMS41XCI+PC9yZWN0PjxyZWN0IGlkPVwiUmVjdGFuZ2xlXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDkuODQzLCAxMC41NDkpIHJvdGF0ZSgtNjApIHRyYW5zbGF0ZSgtOS44NDMsIC0xMC41NDkpIFwiIHg9XCI4LjM0M1wiIHk9XCIwLjA0OVwiIHdpZHRoPVwiM1wiIGhlaWdodD1cIjIxXCIgcng9XCIxLjVcIj48L3JlY3Q+PC9nPjwvc3ZnPmAsXG5cbiAgZmxhZ3M6IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+PHBhdGggZD1cIk0wIDBsNi4wODQgMjRIOEwxLjkxNiAwek0yMSA1aC00bC0xLTRINGwzIDEyaDNsMSA0aDEzTDIxIDV6TTYuNTYzIDNoNy44NzVsMiA4SDguNTYzbC0yLTh6bTguODMyIDEwbC0yLjg1NiAxLjkwNEwxMi4wNjMgMTNoMy4zMzJ6TTE5IDEzbC0xLjUtNmgxLjkzOGwyIDhIMTZsMy0yelwiLz48L3N2Zz5gLFxuXG4gIGZvb2RzOiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiPjxwYXRoIGQ9XCJNMTcgNC45NzhjLTEuODM4IDAtMi44NzYuMzk2LTMuNjguOTM0LjUxMy0xLjE3MiAxLjc2OC0yLjkzNCA0LjY4LTIuOTM0YTEgMSAwIDAgMCAwLTJjLTIuOTIxIDAtNC42MjkgMS4zNjUtNS41NDcgMi41MTItLjA2NC4wNzgtLjExOS4xNjItLjE4LjI0NEMxMS43MyAxLjgzOCAxMC43OTguMDIzIDkuMjA3LjAyMyA4LjU3OS4wMjIgNy44NS4zMDYgNyAuOTc4IDUuMDI3IDIuNTQgNS4zMjkgMy45MDIgNi40OTIgNC45OTkgMy42MDkgNS4yMjIgMCA3LjM1MiAwIDEyLjk2OWMwIDQuNTgyIDQuOTYxIDExLjAwOSA5IDExLjAwOSAxLjk3NSAwIDIuMzcxLS40ODYgMy0xIC42MjkuNTE0IDEuMDI1IDEgMyAxIDQuMDM5IDAgOS02LjQxOCA5LTExIDAtNS45NTMtNC4wNTUtOC03LThNOC4yNDIgMi41NDZjLjY0MS0uNTA4Ljk0My0uNTIzLjk2NS0uNTIzLjQyNi4xNjkuOTc1IDEuNDA1IDEuMzU3IDMuMDU1LTEuNTI3LS42MjktMi43NDEtMS4zNTItMi45OC0xLjg0Ni4wNTktLjExMi4yNDEtLjM1Ni42NTgtLjY4Nk0xNSAyMS45NzhjLTEuMDggMC0xLjIxLS4xMDktMS41NTktLjQwMmwtLjE3Ni0uMTQ2Yy0uMzY3LS4zMDItLjgxNi0uNDUyLTEuMjY2LS40NTJzLS44OTguMTUtMS4yNjYuNDUybC0uMTc2LjE0NmMtLjM0Ny4yOTItLjQ3Ny40MDItMS41NTcuNDAyLTIuODEzIDAtNy01LjM4OS03LTkuMDA5IDAtNS44MjMgNC40ODgtNS45OTEgNS01Ljk5MSAxLjkzOSAwIDIuNDg0LjQ3MSAzLjM4NyAxLjI1MWwuMzIzLjI3NmExLjk5NSAxLjk5NSAwIDAgMCAyLjU4IDBsLjMyMy0uMjc2Yy45MDItLjc4IDEuNDQ3LTEuMjUxIDMuMzg3LTEuMjUxLjUxMiAwIDUgLjE2OCA1IDYgMCAzLjYxNy00LjE4NyA5LTcgOVwiLz48L3N2Zz5gLFxuXG4gIG5hdHVyZTogYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj48cGF0aCBkPVwiTTE1LjUgOGExLjUgMS41IDAgMSAwIC4wMDEgMy4wMDFBMS41IDEuNSAwIDAgMCAxNS41IDhNOC41IDhhMS41IDEuNSAwIDEgMCAuMDAxIDMuMDAxQTEuNSAxLjUgMCAwIDAgOC41IDhcIi8+PHBhdGggZD1cIk0xOC45MzMgMGgtLjAyN2MtLjk3IDAtMi4xMzguNzg3LTMuMDE4IDEuNDk3LTEuMjc0LS4zNzQtMi42MTItLjUxLTMuODg3LS41MS0xLjI4NSAwLTIuNjE2LjEzMy0zLjg3NC41MTdDNy4yNDUuNzkgNi4wNjkgMCA1LjA5MyAwaC0uMDI3QzMuMzUyIDAgLjA3IDIuNjcuMDAyIDcuMDI2Yy0uMDM5IDIuNDc5LjI3NiA0LjIzOCAxLjA0IDUuMDEzLjI1NC4yNTguODgyLjY3NyAxLjI5NS44ODIuMTkxIDMuMTc3LjkyMiA1LjIzOCAyLjUzNiA2LjM4Ljg5Ny42MzcgMi4xODcuOTQ5IDMuMiAxLjEwMkM4LjA0IDIwLjYgOCAyMC43OTUgOCAyMWMwIDEuNzczIDIuMzUgMyA0IDMgMS42NDggMCA0LTEuMjI3IDQtMyAwLS4yMDEtLjAzOC0uMzkzLS4wNzItLjU4NiAyLjU3My0uMzg1IDUuNDM1LTEuODc3IDUuOTI1LTcuNTg3LjM5Ni0uMjIuODg3LS41NjggMS4xMDQtLjc4OC43NjMtLjc3NCAxLjA3OS0yLjUzNCAxLjA0LTUuMDEzQzIzLjkyOSAyLjY3IDIwLjY0NiAwIDE4LjkzMyAwTTMuMjIzIDkuMTM1Yy0uMjM3LjI4MS0uODM3IDEuMTU1LS44ODQgMS4yMzgtLjE1LS40MS0uMzY4LTEuMzQ5LS4zMzctMy4yOTEuMDUxLTMuMjgxIDIuNDc4LTQuOTcyIDMuMDkxLTUuMDMxLjI1Ni4wMTUuNzMxLjI3IDEuMjY1LjY0Ni0xLjExIDEuMTcxLTIuMjc1IDIuOTE1LTIuMzUyIDUuMTI1LS4xMzMuNTQ2LS4zOTguODU4LS43ODMgMS4zMTNNMTIgMjJjLS45MDEgMC0xLjk1NC0uNjkzLTItMSAwLS42NTQuNDc1LTEuMjM2IDEtMS42MDJWMjBhMSAxIDAgMSAwIDIgMHYtLjYwMmMuNTI0LjM2NSAxIC45NDcgMSAxLjYwMi0uMDQ2LjMwNy0xLjA5OSAxLTIgMW0zLTMuNDh2LjAyYTQuNzUyIDQuNzUyIDAgMCAwLTEuMjYyLTEuMDJjMS4wOTItLjUxNiAyLjIzOS0xLjMzNCAyLjIzOS0yLjIxNyAwLTEuODQyLTEuNzgxLTIuMTk1LTMuOTc3LTIuMTk1LTIuMTk2IDAtMy45NzguMzU0LTMuOTc4IDIuMTk1IDAgLjg4MyAxLjE0OCAxLjcwMSAyLjIzOCAyLjIxN0E0LjggNC44IDAgMCAwIDkgMTguNTM5di0uMDI1Yy0xLS4wNzYtMi4xODItLjI4MS0yLjk3My0uODQyLTEuMzAxLS45Mi0xLjgzOC0zLjA0NS0xLjg1My02LjQ3OGwuMDIzLS4wNDFjLjQ5Ni0uODI2IDEuNDktMS40NSAxLjgwNC0zLjEwMiAwLTIuMDQ3IDEuMzU3LTMuNjMxIDIuMzYyLTQuNTIyQzkuMzcgMy4xNzggMTAuNTU1IDMgMTEuOTQ4IDNjMS40NDcgMCAyLjY4NS4xOTIgMy43MzMuNTcgMSAuOSAyLjMxNiAyLjQ2NSAyLjMxNiA0LjQ4LjMxMyAxLjY1MSAxLjMwNyAyLjI3NSAxLjgwMyAzLjEwMi4wMzUuMDU4LjA2OC4xMTcuMTAyLjE3OC0uMDU5IDUuOTY3LTEuOTQ5IDcuMDEtNC45MDIgNy4xOW02LjYyOC04LjIwMmMtLjAzNy0uMDY1LS4wNzQtLjEzLS4xMTMtLjE5NWE3LjU4NyA3LjU4NyAwIDAgMC0uNzM5LS45ODdjLS4zODUtLjQ1NS0uNjQ4LS43NjgtLjc4Mi0xLjMxMy0uMDc2LTIuMjA5LTEuMjQxLTMuOTU0LTIuMzUzLTUuMTI0LjUzMS0uMzc2IDEuMDA0LS42MyAxLjI2MS0uNjQ3LjYzNi4wNzEgMy4wNDQgMS43NjQgMy4wOTYgNS4wMzEuMDI3IDEuODEtLjM0NyAzLjIxOC0uMzcgMy4yMzVcIi8+PC9zdmc+YCxcblxuICBvYmplY3RzOiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiPjxwYXRoIGQ9XCJNMTIgMGE5IDkgMCAwIDAtNSAxNi40ODJWMjFzMi4wMzUgMyA1IDMgNS0zIDUtM3YtNC41MThBOSA5IDAgMCAwIDEyIDB6bTAgMmMzLjg2IDAgNyAzLjE0MSA3IDdzLTMuMTQgNy03IDctNy0zLjE0MS03LTcgMy4xNC03IDctN3pNOSAxNy40NzdjLjk0LjMzMiAxLjk0Ni41MjMgMyAuNTIzczIuMDYtLjE5IDMtLjUyM3YuODM0Yy0uOTEuNDM2LTEuOTI1LjY4OS0zIC42ODlhNi45MjQgNi45MjQgMCAwIDEtMy0uNjl2LS44MzN6bS4yMzYgMy4wN0E4Ljg1NCA4Ljg1NCAwIDAgMCAxMiAyMWMuOTY1IDAgMS44ODgtLjE2NyAyLjc1OC0uNDUxQzE0LjE1NSAyMS4xNzMgMTMuMTUzIDIyIDEyIDIyYy0xLjEwMiAwLTIuMTE3LS43ODktMi43NjQtMS40NTN6XCIvPjxwYXRoIGQ9XCJNMTQuNzQ1IDEyLjQ0OWgtLjAwNGMtLjg1Mi0uMDI0LTEuMTg4LS44NTgtMS41NzctMS44MjQtLjQyMS0xLjA2MS0uNzAzLTEuNTYxLTEuMTgyLTEuNTY2aC0uMDA5Yy0uNDgxIDAtLjc4My40OTctMS4yMzUgMS41MzctLjQzNi45ODItLjgwMSAxLjgxMS0xLjYzNiAxLjc5MWwtLjI3Ni0uMDQzYy0uNTY1LS4xNzEtLjg1My0uNjkxLTEuMjg0LTEuNzk0LS4xMjUtLjMxMy0uMjAyLS42MzItLjI3LS45MTMtLjA1MS0uMjEzLS4xMjctLjUzLS4xOTUtLjYzNEM3LjA2NyA5LjAwNCA3LjAzOSA5IDYuOTkgOUExIDEgMCAwIDEgNyA3aC4wMWMxLjY2Mi4wMTcgMi4wMTUgMS4zNzMgMi4xOTggMi4xMzQuNDg2LS45ODEgMS4zMDQtMi4wNTggMi43OTctMi4wNzUgMS41MzEuMDE4IDIuMjggMS4xNTMgMi43MzEgMi4xNDFsLjAwMi0uMDA4QzE0Ljk0NCA4LjQyNCAxNS4zMjcgNyAxNi45NzkgN2guMDMyQTEgMSAwIDEgMSAxNyA5aC0uMDExYy0uMTQ5LjA3Ni0uMjU2LjQ3NC0uMzE5LjcwOWE2LjQ4NCA2LjQ4NCAwIDAgMS0uMzExLjk1MWMtLjQyOS45NzMtLjc5IDEuNzg5LTEuNjE0IDEuNzg5XCIvPjwvc3ZnPmAsXG5cbiAgc21pbGV5czogYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj48cGF0aCBkPVwiTTEyIDBDNS4zNzMgMCAwIDUuMzczIDAgMTJzNS4zNzMgMTIgMTIgMTIgMTItNS4zNzMgMTItMTJTMTguNjI3IDAgMTIgMG0wIDIyQzYuNDg2IDIyIDIgMTcuNTE0IDIgMTJTNi40ODYgMiAxMiAyczEwIDQuNDg2IDEwIDEwLTQuNDg2IDEwLTEwIDEwXCIvPjxwYXRoIGQ9XCJNOCA3YTIgMiAwIDEgMC0uMDAxIDMuOTk5QTIgMiAwIDAgMCA4IDdNMTYgN2EyIDIgMCAxIDAtLjAwMSAzLjk5OUEyIDIgMCAwIDAgMTYgN00xNS4yMzIgMTVjLS42OTMgMS4xOTUtMS44NyAyLTMuMzQ5IDItMS40NzcgMC0yLjY1NS0uODA1LTMuMzQ3LTJIMTVtMy0ySDZhNiA2IDAgMSAwIDEyIDBcIi8+PC9zdmc+YCxcblxuICBwZW9wbGU6IGA8c3ZnIHhtbG5zOnN2Zz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgaGVpZ2h0PVwiMjRcIiB3aWR0aD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPiA8cGF0aCBpZD1cInBhdGgzODE0XCIgZD1cIm0gMy4zNTkxMDg5LDIxLjE3NzI2IGMgMC4xNzIwMzYsMC4wOTM4NSA0LjI2NTk5NCwyLjI5ODM3IDguODE0NDQ1MSwyLjI5ODM3IDQuOTI3NzY3LDAgOC42NzA4OTQsLTIuMjExODgzIDguODI3ODIsLTIuMzA2MDE5IDAuMTEzMDc5LC0wLjA2Nzg1IDAuMTgyMjY4LC0wLjE5MDA1MSAwLjE4MjI2NywtMC4zMjE5MjMgMCwtMy4wMzExOSAtMC45Mjk0OTQsLTUuODA0OTM2IC0yLjYxNzE5NiwtNy44MTA3MTIgLTEuMTgwNjAzLC0xLjQwMzEzNCAtMi42NjE5MTgsLTIuMzU5NTE2IC00LjI5NTY5OSwtMi43OTk3OTEgNC42OTkxMTgsLTIuMjM2MjU4IDMuMTAyMzA2LC05LjI4NjE3MTYyIC0yLjA5NzE5MSwtOS4yODYxNzE2MiAtNS4xOTk0OTc4LDAgLTYuNzk2MzEwMyw3LjA0OTkxMzYyIC0yLjA5NzE5Miw5LjI4NjE3MTYyIC0xLjYzMzc4MjEsMC40NDAyNzUgLTMuMTE1MDk3MSwxLjM5Njc5OCAtNC4yOTU2OTkxLDIuNzk5NzkxIC0xLjY4NzcwMywyLjAwNTc3NiAtMi42MTcxOTYsNC43Nzk1MjIgLTIuNjE3MTk2LDcuODEwNzEyIDEuMmUtNiwwLjEzNzM3OCAwLjA3NTAzOSwwLjI2Mzc4NSAwLjE5NTY0MSwwLjMyOTU3MiB6IE0gOC4wNDM5MzE5LDUuODMwODc4MyBDIDguMDQzOTMwOSwyLjE1MTUyMSAxMi40OTIxMDcsMC4zMDk1NTgxMSAxNS4wOTM0OTEsMi45MTA5NDExIDE3LjY5NDg3NCw1LjUxMjMyNDEgMTUuODUyOTExLDkuOTYwNTAwNiAxMi4xNzM1NTQsOS45NjA1IDkuODkzODk5MSw5Ljk1NzkxMzUgOC4wNDY1MTg2LDguMTEwNTMzMiA4LjA0MzkzMTksNS44MzA4NzgzIFogbSAtMS42ODg3ODIsNy42ODk0OTc3IGMgMS41MjQ1MzUsLTEuODExNDQ5IDMuNTkwNjYwMSwtMi44MDkwMzUgNS44MTg0MDQxLC0yLjgwOTAzNSAyLjIyNzc0NCwwIDQuMjkzODY5LDAuOTk3NTg2IDUuODE4NDA0LDIuODA5MDM1IDEuNTMzNjM5LDEuODIyNTcxIDIuMzk1OTMyLDQuMzM5ODU4IDIuNDM5MTUyLDcuMTA4MzAxIC0wLjgwMzM1MiwwLjQzNDg3NyAtNC4xNDE2MzYsMi4wOTYxMTIgLTguMjU3NTU2LDIuMDk2MTEyIC0zLjgwNjI5MjEsMCAtNy4zOTEwODYxLC0xLjY3MTA0MyAtOC4yNTczNjgxLC0yLjEwNDk4MSAwLjA0NTA1LC0yLjc2NTAxNyAwLjkwNjk2OCwtNS4yNzg3ODUgMi40Mzg5NjQsLTcuMDk5NDMyIHpcIiAvPiA8cGF0aCBpZD1cInBhdGgzODE2XCIgZD1cIk0gMTIuMTczODI4IDAuMzg4NjcxODggQyA5LjMxOTg1MTMgMC4zODg2NzE4NyA3LjM3NzA5ODggMi4zNjcyMjg1IDYuODY1MjM0NCA0LjYzMDg1OTQgQyA2LjQyMTg2MDggNi41OTE2MDE1IDcuMTE1MzU2MiA4Ljc2NzYxMTcgOC45NjQ4NDM4IDEwLjEyNjk1MyBDIDcuNjE0MTI0OSAxMC42NzczNzYgNi4zNTUwNTExIDExLjQ4MDk0NCA1LjM0OTYwOTQgMTIuNjc1NzgxIEMgMy41NjI5MzE3IDE0Ljc5OTE4NSAyLjYwMTU2MjUgMTcuNzAxNDc1IDIuNjAxNTYyNSAyMC44NDc2NTYgQyAyLjYwMTU2NTQgMjEuMTg5ODYxIDIuNzg5NDI3NiAyMS41MDgwMDIgMy4wODk4NDM4IDIxLjY3MTg3NSBDIDMuMzA0NDA2OCAyMS43ODg5MjUgNy40NDM2MjM5IDI0LjAzOTA2MiAxMi4xNzM4MjggMjQuMDM5MDYyIEMgMTcuMjY5OTE4IDI0LjAzOTA2MiAyMS4wODM1NjggMjEuNzc2Nzg2IDIxLjI5MTAxNiAyMS42NTIzNDQgQyAyMS41NzI4MSAyMS40ODMyNjYgMjEuNzQ2MDk3IDIxLjE3NjI4MiAyMS43NDYwOTQgMjAuODQ3NjU2IEMgMjEuNzQ2MDk0IDE3LjcwMTQ3NSAyMC43ODI3NyAxNC43OTkxODUgMTguOTk2MDk0IDEyLjY3NTc4MSBDIDE3Ljk5MDQ1NSAxMS40ODA1OTEgMTYuNzMzODE4IDEwLjY3NTM2MiAxNS4zODI4MTIgMTAuMTI1IEMgMTcuMjMxMTMyIDguNzY1NTU1MiAxNy45MjU2NzUgNi41OTEwNzAxIDE3LjQ4MjQyMiA0LjYzMDg1OTQgQyAxNi45NzA1NTcgMi4zNjcyMjg1IDE1LjAyNzgwNSAwLjM4ODY3MTg4IDEyLjE3MzgyOCAwLjM4ODY3MTg4IHogTSAxMi43OTI5NjkgMi4zMDA3ODEyIEMgMTMuNDY2MjUzIDIuNDE2MTc5MiAxNC4xMjUxMTMgMi43MzgzOTQxIDE0LjY5NTMxMiAzLjMwODU5MzggQyAxNS44MzU3MTIgNC40NDg5OTMxIDE1Ljk4NTYwNCA1Ljk0NzM1NDkgMTUuNDY4NzUgNy4xOTUzMTI1IEMgMTQuOTUxODk2IDguNDQzMjcwMSAxMy43ODY4MjggOS4zOTg0Mzc4IDEyLjE3MzgyOCA5LjM5ODQzNzUgQyAxMC4xOTc3MTkgOS4zOTYxOTU0IDguNjA3NzExIDcuODA2MTg3IDguNjA1NDY4OCA1LjgzMDA3ODEgQyA4LjYwNTQ2ODMgNC4yMTcwNzg1IDkuNTYwNjM2MiAzLjA1MjAxMDIgMTAuODA4NTk0IDIuNTM1MTU2MiBDIDExLjQzMjU3MyAyLjI3NjcyOTMgMTIuMTE5Njg1IDIuMTg1MzgzMyAxMi43OTI5NjkgMi4zMDA3ODEyIHogTSAxMi4xNzM4MjggMTEuMjczNDM4IEMgMTQuMjMzNjQ3IDExLjI3MzQzOCAxNi4xMzM2NzQgMTIuMTg1MDg0IDE3LjU2MjUgMTMuODgyODEyIEMgMTguOTMwNjkgMTUuNTA4NzY1IDE5LjY5ODM0NyAxNy43NzY5NjkgMTkuODA4NTk0IDIwLjI4MzIwMyBDIDE4LjgwNzM5NSAyMC44MDAyMzUgMTUuODg2MTU3IDIyLjE2MjEwOSAxMi4xNzM4MjggMjIuMTYyMTA5IEMgOC43NjE0NjMyIDIyLjE2MjEwOSA1LjYyNDU3NTQgMjAuNzg3MDY5IDQuNTM5MDYyNSAyMC4yNjU2MjUgQyA0LjY1MjU4OTYgMTcuNzY2NzE3IDUuNDIwMzMxNSAxNS41MDQ3OTEgNi43ODUxNTYyIDEzLjg4MjgxMiBDIDguMjEzOTgyNyAxMi4xODUwODQgMTAuMTE0MDEgMTEuMjczNDM4IDEyLjE3MzgyOCAxMS4yNzM0MzggeiBcIiAvPiA8L3N2Zz5gLFxuXG4gIHBsYWNlczogYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj48cGF0aCBkPVwiTTYuNSAxMkM1LjEyMiAxMiA0IDEzLjEyMSA0IDE0LjVTNS4xMjIgMTcgNi41IDE3IDkgMTUuODc5IDkgMTQuNSA3Ljg3OCAxMiA2LjUgMTJtMCAzYy0uMjc1IDAtLjUtLjIyNS0uNS0uNXMuMjI1LS41LjUtLjUuNS4yMjUuNS41LS4yMjUuNS0uNS41TTE3LjUgMTJjLTEuMzc4IDAtMi41IDEuMTIxLTIuNSAyLjVzMS4xMjIgMi41IDIuNSAyLjUgMi41LTEuMTIxIDIuNS0yLjUtMS4xMjItMi41LTIuNS0yLjVtMCAzYy0uMjc1IDAtLjUtLjIyNS0uNS0uNXMuMjI1LS41LjUtLjUuNS4yMjUuNS41LS4yMjUuNS0uNS41XCIvPjxwYXRoIGQ9XCJNMjIuNDgyIDkuNDk0bC0xLjAzOS0uMzQ2TDIxLjQgOWguNmMuNTUyIDAgMS0uNDM5IDEtLjk5MiAwLS4wMDYtLjAwMy0uMDA4LS4wMDMtLjAwOEgyM2MwLTEtLjg4OS0yLTEuOTg0LTJoLS42NDJsLS43MzEtMS43MTdDMTkuMjYyIDMuMDEyIDE4LjA5MSAyIDE2Ljc2NCAySDcuMjM2QzUuOTA5IDIgNC43MzggMy4wMTIgNC4zNTcgNC4yODNMMy42MjYgNmgtLjY0MkMxLjg4OSA2IDEgNyAxIDhoLjAwM1MxIDguMDAyIDEgOC4wMDhDMSA4LjU2MSAxLjQ0OCA5IDIgOWguNmwtLjA0My4xNDgtMS4wMzkuMzQ2YTIuMDAxIDIuMDAxIDAgMCAwLTEuMzU5IDIuMDk3bC43NTEgNy41MDhhMSAxIDAgMCAwIC45OTQuOTAxSDN2MWMwIDEuMTAzLjg5NiAyIDIgMmgyYzEuMTA0IDAgMi0uODk3IDItMnYtMWg2djFjMCAxLjEwMy44OTYgMiAyIDJoMmMxLjEwNCAwIDItLjg5NyAyLTJ2LTFoMS4wOTZhLjk5OS45OTkgMCAwIDAgLjk5NC0uOTAxbC43NTEtNy41MDhhMi4wMDEgMi4wMDEgMCAwIDAtMS4zNTktMi4wOTdNNi4yNzMgNC44NTdDNi40MDIgNC40MyA2Ljc4OCA0IDcuMjM2IDRoOS41MjdjLjQ0OCAwIC44MzQuNDMuOTYzLjg1N0wxOS4zMTMgOUg0LjY4OGwxLjU4NS00LjE0M3pNNyAyMUg1di0xaDJ2MXptMTIgMGgtMnYtMWgydjF6bTIuMTg5LTNIMi44MTFsLS42NjItNi42MDdMMyAxMWgxOGwuODUyLjM5M0wyMS4xODkgMTh6XCIvPjwvc3ZnPmAsXG5cbiAgcmVjZW50OiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiPjxwYXRoIGQ9XCJNMTMgNGgtMmwtLjAwMSA3SDl2MmgydjJoMnYtMmg0di0yaC00elwiLz48cGF0aCBkPVwiTTEyIDBDNS4zNzMgMCAwIDUuMzczIDAgMTJzNS4zNzMgMTIgMTIgMTIgMTItNS4zNzMgMTItMTJTMTguNjI3IDAgMTIgMG0wIDIyQzYuNDg2IDIyIDIgMTcuNTE0IDIgMTJTNi40ODYgMiAxMiAyczEwIDQuNDg2IDEwIDEwLTQuNDg2IDEwLTEwIDEwXCIvPjwvc3ZnPmAsXG5cbiAgc3ltYm9sczogYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj48cGF0aCBkPVwiTTAgMGgxMXYySDB6TTQgMTFoM1Y2aDRWNEgwdjJoNHpNMTUuNSAxN2MxLjM4MSAwIDIuNS0xLjExNiAyLjUtMi40OTNzLTEuMTE5LTIuNDkzLTIuNS0yLjQ5M1MxMyAxMy4xMyAxMyAxNC41MDcgMTQuMTE5IDE3IDE1LjUgMTdtMC0yLjk4NmMuMjc2IDAgLjUuMjIyLjUuNDkzIDAgLjI3Mi0uMjI0LjQ5My0uNS40OTNzLS41LS4yMjEtLjUtLjQ5My4yMjQtLjQ5My41LS40OTNNMjEuNSAxOS4wMTRjLTEuMzgxIDAtMi41IDEuMTE2LTIuNSAyLjQ5M1MyMC4xMTkgMjQgMjEuNSAyNHMyLjUtMS4xMTYgMi41LTIuNDkzLTEuMTE5LTIuNDkzLTIuNS0yLjQ5M20wIDIuOTg2YS40OTcuNDk3IDAgMCAxLS41LS40OTNjMC0uMjcxLjIyNC0uNDkzLjUtLjQ5M3MuNS4yMjIuNS40OTNhLjQ5Ny40OTcgMCAwIDEtLjUuNDkzTTIyIDEzbC05IDkgMS41MTMgMS41IDguOTktOS4wMDl6TTE3IDExYzIuMjA5IDAgNC0xLjExOSA0LTIuNVYycy45ODUtLjE2MSAxLjQ5OC45NDlDMjMuMDEgNC4wNTUgMjMgNiAyMyA2czEtMS4xMTkgMS0zLjEzNUMyNC0uMDIgMjEgMCAyMSAwaC0ydjYuMzQ3QTUuODUzIDUuODUzIDAgMCAwIDE3IDZjLTIuMjA5IDAtNCAxLjExOS00IDIuNXMxLjc5MSAyLjUgNCAyLjVNMTAuMjk3IDIwLjQ4MmwtMS40NzUtMS41ODVhNDcuNTQgNDcuNTQgMCAwIDEtMS40NDIgMS4xMjljLS4zMDctLjI4OC0uOTg5LTEuMDE2LTIuMDQ1LTIuMTgzLjkwMi0uODM2IDEuNDc5LTEuNDY2IDEuNzI5LTEuODkycy4zNzYtLjg3MS4zNzYtMS4zMzZjMC0uNTkyLS4yNzMtMS4xNzgtLjgxOC0xLjc1OS0uNTQ2LS41ODEtMS4zMjktLjg3MS0yLjM0OS0uODcxLTEuMDA4IDAtMS43OS4yOTMtMi4zNDQuODc5LS41NTYuNTg3LS44MzIgMS4xODEtLjgzMiAxLjc4NCAwIC44MTMuNDE5IDEuNzQ4IDEuMjU2IDIuODA1LS44NDcuNjE0LTEuNDQ0IDEuMjA4LTEuNzk0IDEuNzg0YTMuNDY1IDMuNDY1IDAgMCAwLS41MjMgMS44MzNjMCAuODU3LjMwOCAxLjU2LjkyNCAyLjEwNy42MTYuNTQ5IDEuNDIzLjgyMyAyLjQyLjgyMyAxLjE3MyAwIDIuNDQ0LS4zNzkgMy44MTMtMS4xMzdMOC4yMzUgMjRoMi44MTlsLTIuMDktMi4zODMgMS4zMzMtMS4xMzV6bS02LjczNi02LjM4OWExLjAyIDEuMDIgMCAwIDEgLjczLS4yODZjLjMxIDAgLjU1OS4wODUuNzQ3LjI1NGEuODQ5Ljg0OSAwIDAgMSAuMjgzLjY1OWMwIC41MTgtLjQxOSAxLjExMi0xLjI1NyAxLjc4NC0uNTM2LS42NTEtLjgwNS0xLjIzMS0uODA1LTEuNzQyYS45MDEuOTAxIDAgMCAxIC4zMDItLjY2OU0zLjc0IDIyYy0uNDI3IDAtLjc3OC0uMTE2LTEuMDU3LS4zNDktLjI3OS0uMjMyLS40MTgtLjQ4Ny0uNDE4LS43NjYgMC0uNTk0LjUwOS0xLjI4OCAxLjUyNy0yLjA4My45NjggMS4xMzQgMS43MTcgMS45NDYgMi4yNDggMi40MzgtLjkyMS41MDctMS42ODYuNzYtMi4zLjc2XCIvPjwvc3ZnPmAsXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNWR3NcbiIsImNvbnN0IG1hcHBpbmcgPSB7XG4gIG5hbWU6ICdhJyxcbiAgdW5pZmllZDogJ2InLFxuICBub25fcXVhbGlmaWVkOiAnYycsXG4gIGhhc19pbWdfYXBwbGU6ICdkJyxcbiAgaGFzX2ltZ19nb29nbGU6ICdlJyxcbiAgaGFzX2ltZ190d2l0dGVyOiAnZicsXG4gIGhhc19pbWdfZmFjZWJvb2s6ICdoJyxcbiAga2V5d29yZHM6ICdqJyxcbiAgc2hlZXQ6ICdrJyxcbiAgZW1vdGljb25zOiAnbCcsXG4gIHRleHQ6ICdtJyxcbiAgc2hvcnRfbmFtZXM6ICduJyxcbiAgYWRkZWRfaW46ICdvJyxcbn1cblxuY29uc3QgYnVpbGRTZWFyY2ggPSAoZW1vamkpID0+IHtcbiAgY29uc3Qgc2VhcmNoID0gW11cblxuICB2YXIgYWRkVG9TZWFyY2ggPSAoc3RyaW5ncywgc3BsaXQpID0+IHtcbiAgICBpZiAoIXN0cmluZ3MpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIDsoQXJyYXkuaXNBcnJheShzdHJpbmdzKSA/IHN0cmluZ3MgOiBbc3RyaW5nc10pLmZvckVhY2goKHN0cmluZykgPT4ge1xuICAgICAgOyhzcGxpdCA/IHN0cmluZy5zcGxpdCgvWy18X3xcXHNdKy8pIDogW3N0cmluZ10pLmZvckVhY2goKHMpID0+IHtcbiAgICAgICAgcyA9IHMudG9Mb3dlckNhc2UoKVxuXG4gICAgICAgIGlmIChzZWFyY2guaW5kZXhPZihzKSA9PSAtMSkge1xuICAgICAgICAgIHNlYXJjaC5wdXNoKHMpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGFkZFRvU2VhcmNoKGVtb2ppLnNob3J0X25hbWVzLCB0cnVlKVxuICBhZGRUb1NlYXJjaChlbW9qaS5uYW1lLCB0cnVlKVxuICBhZGRUb1NlYXJjaChlbW9qaS5rZXl3b3JkcywgZmFsc2UpXG4gIGFkZFRvU2VhcmNoKGVtb2ppLmVtb3RpY29ucywgZmFsc2UpXG5cbiAgcmV0dXJuIHNlYXJjaC5qb2luKCcsJylcbn1cblxuY29uc3QgY29tcHJlc3MgPSAoZW1vamkpID0+IHtcbiAgZW1vamkuc2hvcnRfbmFtZXMgPSBlbW9qaS5zaG9ydF9uYW1lcy5maWx0ZXIoKHNob3J0X25hbWUpID0+IHtcbiAgICByZXR1cm4gc2hvcnRfbmFtZSAhPT0gZW1vamkuc2hvcnRfbmFtZVxuICB9KVxuICBkZWxldGUgZW1vamkuc2hvcnRfbmFtZVxuXG4gIGVtb2ppLnNoZWV0ID0gW2Vtb2ppLnNoZWV0X3gsIGVtb2ppLnNoZWV0X3ldXG4gIGRlbGV0ZSBlbW9qaS5zaGVldF94XG4gIGRlbGV0ZSBlbW9qaS5zaGVldF95XG5cbiAgZW1vamkuYWRkZWRfaW4gPSBwYXJzZUludChlbW9qaS5hZGRlZF9pbilcbiAgaWYgKGVtb2ppLmFkZGVkX2luID09PSA2KSB7XG4gICAgZGVsZXRlIGVtb2ppLmFkZGVkX2luXG4gIH1cblxuICBmb3IgKGxldCBrZXkgaW4gbWFwcGluZykge1xuICAgIGVtb2ppW21hcHBpbmdba2V5XV0gPSBlbW9qaVtrZXldXG4gICAgZGVsZXRlIGVtb2ppW2tleV1cbiAgfVxuXG4gIGZvciAobGV0IGtleSBpbiBlbW9qaSkge1xuICAgIGxldCB2YWx1ZSA9IGVtb2ppW2tleV1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSAmJiAhdmFsdWUubGVuZ3RoKSB7XG4gICAgICBkZWxldGUgZW1vamlba2V5XVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiAhdmFsdWUubGVuZ3RoKSB7XG4gICAgICBkZWxldGUgZW1vamlba2V5XVxuICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgIGRlbGV0ZSBlbW9qaVtrZXldXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGRlZXBGcmVlemUob2JqZWN0KSB7XG4gIC8vIFJldHJpZXZlIHRoZSBwcm9wZXJ0eSBuYW1lcyBkZWZpbmVkIG9uIG9iamVjdFxuICB2YXIgcHJvcE5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob2JqZWN0KVxuXG4gIC8vIEZyZWV6ZSBwcm9wZXJ0aWVzIGJlZm9yZSBmcmVlemluZyBzZWxmXG4gIGZvciAobGV0IG5hbWUgb2YgcHJvcE5hbWVzKSB7XG4gICAgbGV0IHZhbHVlID0gb2JqZWN0W25hbWVdXG4gICAgb2JqZWN0W25hbWVdID1cbiAgICAgIHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgPyBkZWVwRnJlZXplKHZhbHVlKSA6IHZhbHVlXG4gIH1cbiAgcmV0dXJuIE9iamVjdC5mcmVlemUob2JqZWN0KVxufVxuXG5jb25zdCB1bmNvbXByZXNzID0gKGRhdGEpID0+IHtcbiAgaWYgKCFkYXRhLmNvbXByZXNzZWQpIHtcbiAgICByZXR1cm4gZGF0YVxuICB9XG4gIGRhdGEuY29tcHJlc3NlZCA9IGZhbHNlXG5cbiAgZm9yIChsZXQgaWQgaW4gZGF0YS5lbW9qaXMpIHtcbiAgICBsZXQgZW1vamkgPSBkYXRhLmVtb2ppc1tpZF1cblxuICAgIGZvciAobGV0IGtleSBpbiBtYXBwaW5nKSB7XG4gICAgICBlbW9qaVtrZXldID0gZW1vamlbbWFwcGluZ1trZXldXVxuICAgICAgZGVsZXRlIGVtb2ppW21hcHBpbmdba2V5XV1cbiAgICB9XG5cbiAgICBpZiAoIWVtb2ppLnNob3J0X25hbWVzKSBlbW9qaS5zaG9ydF9uYW1lcyA9IFtdXG4gICAgZW1vamkuc2hvcnRfbmFtZXMudW5zaGlmdChpZClcblxuICAgIGVtb2ppLnNoZWV0X3ggPSBlbW9qaS5zaGVldFswXVxuICAgIGVtb2ppLnNoZWV0X3kgPSBlbW9qaS5zaGVldFsxXVxuICAgIGRlbGV0ZSBlbW9qaS5zaGVldFxuXG4gICAgaWYgKCFlbW9qaS50ZXh0KSBlbW9qaS50ZXh0ID0gJydcblxuICAgIGlmICghZW1vamkuYWRkZWRfaW4pIGVtb2ppLmFkZGVkX2luID0gNlxuICAgIGVtb2ppLmFkZGVkX2luID0gZW1vamkuYWRkZWRfaW4udG9GaXhlZCgxKVxuXG4gICAgZW1vamkuc2VhcmNoID0gYnVpbGRTZWFyY2goZW1vamkpXG4gIH1cbiAgZGF0YSA9IGRlZXBGcmVlemUoZGF0YSlcbiAgcmV0dXJuIGRhdGFcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7IGJ1aWxkU2VhcmNoLCBjb21wcmVzcywgdW5jb21wcmVzcyB9XG4iLCJpbXBvcnQgeyBpbnRlcnNlY3QsIHVuaWZpZWRUb05hdGl2ZSB9IGZyb20gJy4vaW5kZXgnXG5pbXBvcnQgeyB1bmNvbXByZXNzLCBidWlsZFNlYXJjaCB9IGZyb20gJy4vZGF0YSdcbmltcG9ydCBmcmVxdWVudGx5IGZyb20gJy4vZnJlcXVlbnRseSdcblxuY29uc3QgU0hFRVRfQ09MVU1OUyA9IDU2XG5jb25zdCBDT0xPTlNfUkVHRVggPSAvXig/OlxcOihbXlxcOl0rKVxcOikoPzpcXDpza2luLXRvbmUtKFxcZClcXDopPyQvXG4vLyBTa2luIHRvbmVzXG5jb25zdCBTS0lOUyA9IFsnMUYzRkEnLCAnMUYzRkInLCAnMUYzRkMnLCAnMUYzRkQnLCAnMUYzRkUnLCAnMUYzRkYnXVxuXG4vKipcbiAqIEVtb2ppIGRhdGEgc3RydWN0dXJlOlxuICoge1xuICogICAgXCJjb21wcmVzc2VkXCI6IGZhbHNlLFxuICogICAgXCJhbGlhc2VzXCI6IHtcbiAqICAgICAgY29sbGlzaW9uOiBcImJvb21cIlxuICogICAgICBjb29raW5nOiBcImZyaWVkX2VnZ1wiXG4gKiAgICAgIGVudmVsb3BlOiBcImVtYWlsXCJcbiAqICAgICAgZmFjZV93aXRoX2Zpbmdlcl9jb3ZlcmluZ19jbG9zZWRfbGlwczogXCJzaHVzaGluZ19mYWNlXCJcbiAqICAgICAgLi4uXG4gKiAgICB9LFxuICogICAgXCJjYXRlZ29yaWVzXCI6IFsge1xuICogICAgICBpZDogXCJwZW9wbGVcIixcbiAqICAgICAgbmFtZTogXCJTbWlsZXlzICYgRW1vdGlvblwiLFxuICogICAgICBlbW9qaXM6IFsgXCJncmlubmluZ1wiLCBcImdyaW5cIiwgXCJqb3lcIiwgLi4uIF1cbiAqICAgIH0sIHtcbiAqICAgICAgaWQ6IFwibmF0dXJlXCIsXG4gKiAgICAgIG5hbWU6IFwiQW5pbWFscyAmIE5hdHVyZVwiLFxuICogICAgICBlbW9qaXM6IFsgXCJtb25rZXlfZmFjZVwiLCBcIm1vbmV5XCIsIFwiZ29yaWxsYVwiLCAuLi4gXVxuICogICAgfSxcbiAqICAgIC4uLlxuICogICAgXSxcbiAqICAgIFwiZW1vamlzXCI6IFtcbiAqICAgICAgc21pbGV5OiB7XG4gKiAgICAgICAgYWRkZWRfaW46IFwiNi4wXCIsXG4gKiAgICAgICAgZW1vdGljb25zOiBbXCI9KVwiLCBcIj0tKVwiXSxcbiAqICAgICAgICBoYXNfaW1nX2FwcGxlOiB0cnVlLFxuICogICAgICAgIGhhc19pbWdfZmFjZWJvb2s6IHRydWUsXG4gKiAgICAgICAgaGFzX2ltZ19nb29nbGU6IHRydWUsXG4gKiAgICAgICAgaGFzX2ltZ190d2l0dGVyOiB0cnVlLFxuICogICAgICAgIGtleXdvcmRzOiBbXCJmYWNlXCIsIFwiaGFwcHlcIiwgXCJqb3lcIiwgXCJoYWhhXCIsIFwiOkRcIiwgXCI6KVwiLCBcInNtaWxlXCIsIFwiZnVubnlcIl0sXG4gKiAgICAgICAgbmFtZTogXCJTbWlsaW5nIEZhY2Ugd2l0aCBPcGVuIE1vdXRoXCIsXG4gKiAgICAgICAgbm9uX3F1YWxpZmllZDogdW5kZWZpbmVkLFxuICogICAgICAgIHNlYXJjaDogXCJzbWlsZXksc21pbGluZyxmYWNlLHdpdGgsb3Blbixtb3V0aCxoYXBweSxqb3ksaGFoYSw6ZCw6KSxzbWlsZSxmdW5ueSw9KSw9LSlcIixcbiAqICAgICAgICBzaGVldF94OiAzMCxcbiAqICAgICAgICBzaGVldF95OiAyNyxcbiAqICAgICAgICBzaG9ydF9uYW1lczogW1wic21pbGV5XCJdLFxuICogICAgICAgIHRleHQ6IFwiOilcIixcbiAqICAgICAgICB1bmlmaWVkOiBcIjFGNjAzXCIsXG4gKiAgICAgIH0sIHtcbiAqICAgICAgKzE6IHsgICAgLy8gZW1vamkgd2l0aCBza2luX3ZhcmlhdGlvbnNcbiAqICAgICAgICAgIC4uLiwgLy8gYWxsIHRoZSByZWd1bGFyIGZpZWxkcyBhcmUgcHJlc2VudFxuICogICAgICAgICAgbmFtZTogXCJUaHVtYnMgVXAgU2lnblwiLFxuICogICAgICAgICAgc2hvcnRfbmFtZXM6ICgyKSBbXCIrMVwiLCBcInRodW1ic3VwXCJdLFxuICogICAgICAgICAgc2tpbl92YXJpYXRpb25zOiB7XG4gKiAgICAgICAgICAgIDFGM0ZCOiAgICAgICAgICAgICAvLyBlYWNoIHZhcmlhdGlvbiBoYXMgYWRkaXRpb25hbCBzZXQgb2YgZmllbGRzOlxuICogICAgICAgICAgICAgIGFkZGVkX2luOiBcIjguMFwiLFxuICogICAgICAgICAgICAgIGhhc19pbWdfYXBwbGU6IHRydWUsXG4gKiAgICAgICAgICAgICAgaGFzX2ltZ19mYWNlYm9vazogdHJ1ZSxcbiAqICAgICAgICAgICAgICBoYXNfaW1nX2dvb2dsZTogdHJ1ZSxcbiAqICAgICAgICAgICAgICBoYXNfaW1nX3R3aXR0ZXI6IHRydWUsXG4gKiAgICAgICAgICAgICAgaW1hZ2U6IFwiMWY0NGQtMWYzZmIucG5nXCIsXG4gKiAgICAgICAgICAgICAgbm9uX3F1YWxpZmllZDogbnVsbCxcbiAqICAgICAgICAgICAgICBzaGVldF94OiAxNCxcbiAqICAgICAgICAgICAgICBzaGVldF95OiA1MCxcbiAqICAgICAgICAgICAgICB1bmlmaWVkOiBcIjFGNDRELTFGM0ZCXCIsXG4gKiAgICAgICAgICAgIDFGM0ZCOiB74oCmfSxcbiAqICAgICAgICAgICAgMUYzRkM6IHvigKZ9LFxuICogICAgICAgICAgICAxRjNGRDoge+KApn0sXG4gKiAgICAgICAgICAgIDFGM0ZFOiB74oCmfSxcbiAqICAgICAgICAgICAgMUYzRkY6IHvigKZ9XG4gKiAgICAgICAgICAgIH0sXG4gKiAgICAgICAgICAuLi5cbiAqICAgICAgfSxcbiAqICAgICAgYTogeyAgLy8gZW1vamkgd2l0aCBub25fcXVhbGlmaWVkIGZpZWxkIHNldFxuICogICAgICAgIGFkZGVkX2luOiBcIjYuMFwiLFxuICogICAgICAgIGVtb3RpY29uczogdW5kZWZpbmVkLFxuICogICAgICAgIGhhc19pbWdfYXBwbGU6IHRydWUsXG4gKiAgICAgICAgLi4uXG4gKiAgICAgICAgbm9uX3F1YWxpZmllZDogXCIxRjE3MFwiLFxuICogICAgICAgIHVuaWZpZWQ6IFwiMUYxNzAtRkUwRlwiLFxuICogICAgIH0sXG4gKiAgICAgLi4uXG4gKiAgIF1cbiAqIH1cbiAqL1xuXG4vKipcbiAqIFdyYXBzIHJhdyBqYXNvbiBlbW9qaSBkYXRhLCBzZXJ2ZXMgYXMgZGF0YSBzb3VyY2UgZm9yXG4gKiBlbW9qaSBwaWNrZXIgY29tcG9uZW50cy5cbiAqXG4gKiBVc2FnZTpcbiAqXG4gKiAgIGltcG9ydCBkYXRhIGZyb20gJy4uL2RhdGEvYWxsLmpzb24nXG4gKiAgIGxldCBpbmRleCA9IG5ldyBFbW9qaUluZGV4KGRhdGEpXG4gKlxuICovXG5leHBvcnQgY2xhc3MgRW1vamlJbmRleCB7XG4gIC8qKlxuICAgKiBDb25zdHJ1Y3Rvci5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGRhdGEgLSBSYXcganNvbiBkYXRhLCBzZWUgdGhlIHN0cnVjdHVyZSBhYm92ZS5cbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBhZGRpdGlvbmFsIG9wdGlvbnMsIGFzIGFuIG9iamVjdDpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZW1vamlzVG9TaG93RmlsdGVyIC0gb3B0aW9uYWwsIGZ1bmN0aW9uIHRvIGZpbHRlciBvdXRcbiAgICogICBzb21lIGVtb2ppcywgZnVuY3Rpb24oZW1vamkpIHsgcmV0dXJuIHRydWV8ZmFsc2UgfVxuICAgKiAgIHdoZXJlIGBlbW9qaWAgaXMgYW4gcmF3IGVtb2ppIG9iamVjdCwgc2VlIGRhdGEuZW1vamlzIGFib3ZlLlxuICAgKiBAcGFyYW0ge0FycmF5fSBpbmNsdWRlIC0gb3B0aW9uYWwsIGEgbGlzdCBvZiBjYXRlZ29yeSBpZHMgdG8gaW5jbHVkZS5cbiAgICogQHBhcmFtIHtBcnJheX0gZXhjbHVkZSAtIG9wdGlvbmFsLCBhIGxpc3Qgb2YgY2F0ZWdvcnkgaWRzIHRvIGV4Y2x1ZGUuXG4gICAqIEBwYXJhbSB7QXJyYXl9IGN1c3RvbSAtIG9wdGlvbmFsLCBhIGxpc3QgY3VzdG9tIGVtb2ppcywgZWFjaCBlbW9qaSBpc1xuICAgKiAgIGFuIG9iamVjdCwgc2VlIGRhdGEuZW1vamlzIGFib3ZlIGZvciBleGFtcGxlcy5cbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIGRhdGEsXG4gICAge1xuICAgICAgZW1vamlzVG9TaG93RmlsdGVyLFxuICAgICAgaW5jbHVkZSxcbiAgICAgIGV4Y2x1ZGUsXG4gICAgICBjdXN0b20sXG4gICAgICByZWNlbnQsXG4gICAgICByZWNlbnRMZW5ndGggPSAyMCxcbiAgICB9ID0ge30sXG4gICkge1xuICAgIHRoaXMuX2RhdGEgPSB1bmNvbXByZXNzKGRhdGEpXG4gICAgLy8gQ2FsbGJhY2sgdG8gZXhjbHVkZSBzcGVjaWZpYyBlbW9qaXNcbiAgICB0aGlzLl9lbW9qaXNGaWx0ZXIgPSBlbW9qaXNUb1Nob3dGaWx0ZXIgfHwgbnVsbFxuICAgIC8vIENhdGVnb3JpZXMgdG8gaW5jbHVkZSAvIGV4Y2x1ZGVcbiAgICB0aGlzLl9pbmNsdWRlID0gaW5jbHVkZSB8fCBudWxsXG4gICAgdGhpcy5fZXhjbHVkZSA9IGV4Y2x1ZGUgfHwgbnVsbFxuICAgIC8vIEN1c3RvbSBlbW9qaXNcbiAgICB0aGlzLl9jdXN0b20gPSBjdXN0b20gfHwgW11cbiAgICAvLyBSZWNlbnQgZW1vamlzXG4gICAgLy8gVE9ETzogbWFrZSBwYXJhbWV0ZXIgY29uZmlndXJhYmxlXG4gICAgdGhpcy5fcmVjZW50ID0gcmVjZW50IHx8IGZyZXF1ZW50bHkuZ2V0KHJlY2VudExlbmd0aClcblxuICAgIHRoaXMuX2Vtb2ppcyA9IHt9XG4gICAgdGhpcy5fbmF0aXZlRW1vamlzID0ge31cbiAgICB0aGlzLl9lbW90aWNvbnMgPSB7fVxuXG4gICAgdGhpcy5fY2F0ZWdvcmllcyA9IFtdXG4gICAgdGhpcy5fcmVjZW50Q2F0ZWdvcnkgPSB7IGlkOiAncmVjZW50JywgbmFtZTogJ1JlY2VudCcsIGVtb2ppczogW10gfVxuICAgIHRoaXMuX2N1c3RvbUNhdGVnb3J5ID0geyBpZDogJ2N1c3RvbScsIG5hbWU6ICdDdXN0b20nLCBlbW9qaXM6IFtdIH1cbiAgICB0aGlzLl9zZWFyY2hJbmRleCA9IHt9XG4gICAgdGhpcy5idWlsZEluZGV4KClcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpXG4gIH1cblxuICBidWlsZEluZGV4KCkge1xuICAgIHRoaXMuX2RhdGEuY2F0ZWdvcmllcy5mb3JFYWNoKChjYXRlZ29yeURhdGEpID0+IHtcbiAgICAgIGlmICghdGhpcy5pc0NhdGVnb3J5TmVlZGVkKGNhdGVnb3J5RGF0YS5pZCkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBsZXQgY2F0ZWdvcnkgPSB7XG4gICAgICAgIGlkOiBjYXRlZ29yeURhdGEuaWQsXG4gICAgICAgIG5hbWU6IGNhdGVnb3J5RGF0YS5uYW1lLFxuICAgICAgICBlbW9qaXM6IFtdLFxuICAgICAgfVxuICAgICAgY2F0ZWdvcnlEYXRhLmVtb2ppcy5mb3JFYWNoKChlbW9qaUlkKSA9PiB7XG4gICAgICAgIGxldCBlbW9qaSA9IHRoaXMuYWRkRW1vamkoZW1vamlJZClcbiAgICAgICAgaWYgKGVtb2ppKSB7XG4gICAgICAgICAgY2F0ZWdvcnkuZW1vamlzLnB1c2goZW1vamkpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBpZiAoY2F0ZWdvcnkuZW1vamlzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLl9jYXRlZ29yaWVzLnB1c2goY2F0ZWdvcnkpXG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmICh0aGlzLmlzQ2F0ZWdvcnlOZWVkZWQoJ2N1c3RvbScpKSB7XG4gICAgICBpZiAodGhpcy5fY3VzdG9tLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZm9yIChsZXQgY3VzdG9tRW1vamkgb2YgdGhpcy5fY3VzdG9tKSB7XG4gICAgICAgICAgdGhpcy5hZGRDdXN0b21FbW9qaShjdXN0b21FbW9qaSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX2N1c3RvbUNhdGVnb3J5LmVtb2ppcy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5fY2F0ZWdvcmllcy5wdXNoKHRoaXMuX2N1c3RvbUNhdGVnb3J5KVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLmlzQ2F0ZWdvcnlOZWVkZWQoJ3JlY2VudCcpKSB7XG4gICAgICBpZiAodGhpcy5fcmVjZW50Lmxlbmd0aCkge1xuICAgICAgICB0aGlzLl9yZWNlbnQubWFwKChpZCkgPT4ge1xuICAgICAgICAgIGZvciAobGV0IGN1c3RvbUVtb2ppIG9mIHRoaXMuX2N1c3RvbUNhdGVnb3J5LmVtb2ppcykge1xuICAgICAgICAgICAgaWYgKGN1c3RvbUVtb2ppLmlkID09PSBpZCkge1xuICAgICAgICAgICAgICB0aGlzLl9yZWNlbnRDYXRlZ29yeS5lbW9qaXMucHVzaChjdXN0b21FbW9qaSlcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0aGlzLmhhc0Vtb2ppKGlkKSkge1xuICAgICAgICAgICAgdGhpcy5fcmVjZW50Q2F0ZWdvcnkuZW1vamlzLnB1c2godGhpcy5lbW9qaShpZCkpXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgLy8gQWRkIHJlY2VudCBjYXRlZ29yeSB0byB0aGUgdG9wXG4gICAgICBpZiAodGhpcy5fcmVjZW50Q2F0ZWdvcnkuZW1vamlzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLl9jYXRlZ29yaWVzLnVuc2hpZnQodGhpcy5fcmVjZW50Q2F0ZWdvcnkpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgdGhlIGVtb2ppIGZyb20gdGhlIHN0cmluZ1xuICAgKi9cbiAgZmluZEVtb2ppKGVtb2ppLCBza2luKSB7XG4gICAgLy8gMS4gUGFyc2UgYXMgOmVtb2ppX25hbWU6c2tpbi10b25lLXh4OlxuICAgIGxldCBtYXRjaGVzID0gZW1vamkubWF0Y2goQ09MT05TX1JFR0VYKVxuXG4gICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgIGVtb2ppID0gbWF0Y2hlc1sxXVxuICAgICAgaWYgKG1hdGNoZXNbMl0pIHtcbiAgICAgICAgc2tpbiA9IHBhcnNlSW50KG1hdGNoZXNbMl0sIDEwKVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIDIuIENoZWNrIGlmIHRoZSBzcGVjaWZpZWQgZW1vamkgaXMgYW4gYWxpYXNcbiAgICBpZiAodGhpcy5fZGF0YS5hbGlhc2VzLmhhc093blByb3BlcnR5KGVtb2ppKSkge1xuICAgICAgZW1vamkgPSB0aGlzLl9kYXRhLmFsaWFzZXNbZW1vamldXG4gICAgfVxuXG4gICAgLy8gMy4gQ2hlY2sgaWYgd2UgaGF2ZSB0aGUgc3BlY2lmaWVkIGVtb2ppXG4gICAgaWYgKHRoaXMuX2Vtb2ppcy5oYXNPd25Qcm9wZXJ0eShlbW9qaSkpIHtcbiAgICAgIGxldCBlbW9qaU9iamVjdCA9IHRoaXMuX2Vtb2ppc1tlbW9qaV1cbiAgICAgIGlmIChza2luKSB7XG4gICAgICAgIHJldHVybiBlbW9qaU9iamVjdC5nZXRTa2luKHNraW4pXG4gICAgICB9XG4gICAgICByZXR1cm4gZW1vamlPYmplY3RcbiAgICB9XG5cbiAgICAvLyA0LiBDaGVjayBpZiB3ZSBoYXZlIHRoZSBzcGVjaWZpZWQgbmF0aXZlIGVtb2ppXG4gICAgaWYgKHRoaXMuX25hdGl2ZUVtb2ppcy5oYXNPd25Qcm9wZXJ0eShlbW9qaSkpIHtcbiAgICAgIHJldHVybiB0aGlzLl9uYXRpdmVFbW9qaXNbZW1vamldXG4gICAgfVxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBjYXRlZ29yaWVzKCkge1xuICAgIHJldHVybiB0aGlzLl9jYXRlZ29yaWVzXG4gIH1cblxuICBlbW9qaShlbW9qaUlkKSB7XG4gICAgaWYgKHRoaXMuX2RhdGEuYWxpYXNlcy5oYXNPd25Qcm9wZXJ0eShlbW9qaUlkKSkge1xuICAgICAgZW1vamlJZCA9IHRoaXMuX2RhdGEuYWxpYXNlc1tlbW9qaUlkXVxuICAgIH1cbiAgICBsZXQgZW1vamkgPSB0aGlzLl9lbW9qaXNbZW1vamlJZF1cbiAgICBpZiAoIWVtb2ppKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhbiBub3QgZmluZCBlbW9qaSBieSBpZDogJyArIGVtb2ppSWQpXG4gICAgfVxuICAgIHJldHVybiBlbW9qaVxuICB9XG5cbiAgaGFzRW1vamkoZW1vamlJZCkge1xuICAgIGlmICh0aGlzLl9kYXRhLmFsaWFzZXMuaGFzT3duUHJvcGVydHkoZW1vamlJZCkpIHtcbiAgICAgIGVtb2ppSWQgPSB0aGlzLl9kYXRhLmFsaWFzZXNbZW1vamlJZF1cbiAgICB9XG4gICAgaWYgKHRoaXMuX2Vtb2ppc1tlbW9qaUlkXSkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBuYXRpdmVFbW9qaSh1bmljb2RlRW1vamkpIHtcbiAgICBpZiAodGhpcy5fbmF0aXZlRW1vamlzLmhhc093blByb3BlcnR5KHVuaWNvZGVFbW9qaSkpIHtcbiAgICAgIHJldHVybiB0aGlzLl9uYXRpdmVFbW9qaXNbdW5pY29kZUVtb2ppXVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgc2VhcmNoKHZhbHVlLCBtYXhSZXN1bHRzKSB7XG4gICAgbWF4UmVzdWx0cyB8fCAobWF4UmVzdWx0cyA9IDc1KVxuICAgIGlmICghdmFsdWUubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICBpZiAodmFsdWUgPT0gJy0nIHx8IHZhbHVlID09ICctMScpIHtcbiAgICAgIHJldHVybiBbdGhpcy5lbW9qaSgnLTEnKV1cbiAgICB9XG5cbiAgICBsZXQgdmFsdWVzID0gdmFsdWUudG9Mb3dlckNhc2UoKS5zcGxpdCgvW1xcc3wsfFxcLXxfXSsvKVxuICAgIGxldCBhbGxSZXN1bHRzID0gW11cblxuICAgIGlmICh2YWx1ZXMubGVuZ3RoID4gMikge1xuICAgICAgdmFsdWVzID0gW3ZhbHVlc1swXSwgdmFsdWVzWzFdXVxuICAgIH1cblxuICAgIGFsbFJlc3VsdHMgPSB2YWx1ZXNcbiAgICAgIC5tYXAoKHZhbHVlKSA9PiB7XG4gICAgICAgIC8vIFN0YXJ0IHNlYXJjaGluIGluIHRoZSBnbG9iYWwgbGlzdCBvZiBlbW9qaXNcbiAgICAgICAgbGV0IGVtb2ppcyA9IHRoaXMuX2Vtb2ppc1xuICAgICAgICBsZXQgY3VycmVudEluZGV4ID0gdGhpcy5fc2VhcmNoSW5kZXhcbiAgICAgICAgbGV0IGxlbmd0aCA9IDBcblxuICAgICAgICBmb3IgKGxldCBjaGFySW5kZXggPSAwOyBjaGFySW5kZXggPCB2YWx1ZS5sZW5ndGg7IGNoYXJJbmRleCsrKSB7XG4gICAgICAgICAgY29uc3QgY2hhciA9IHZhbHVlW2NoYXJJbmRleF1cbiAgICAgICAgICBsZW5ndGgrK1xuXG4gICAgICAgICAgY3VycmVudEluZGV4W2NoYXJdIHx8IChjdXJyZW50SW5kZXhbY2hhcl0gPSB7fSlcbiAgICAgICAgICBjdXJyZW50SW5kZXggPSBjdXJyZW50SW5kZXhbY2hhcl1cblxuICAgICAgICAgIGlmICghY3VycmVudEluZGV4LnJlc3VsdHMpIHtcbiAgICAgICAgICAgIGxldCBzY29yZXMgPSB7fVxuICAgICAgICAgICAgY3VycmVudEluZGV4LnJlc3VsdHMgPSBbXVxuICAgICAgICAgICAgY3VycmVudEluZGV4LmVtb2ppcyA9IHt9XG5cbiAgICAgICAgICAgIGZvciAobGV0IGVtb2ppSWQgaW4gZW1vamlzKSB7XG4gICAgICAgICAgICAgIGxldCBlbW9qaSA9IGVtb2ppc1tlbW9qaUlkXVxuICAgICAgICAgICAgICAvLyBzZWFyY2ggaXMgYSBjb21tYS1zZXBhcmF0ZWQgc3RyaW5nIHdpdGggd29yZHMsIHJlbGF0ZWRcbiAgICAgICAgICAgICAgLy8gdG8gdGhlIGVtb2ppLCBmb3IgZXhhbXBsZTpcbiAgICAgICAgICAgICAgLy8gc2VhcmNoOiBcInNtaWxleSxzbWlsaW5nLGZhY2Usam95LGhhaGEsOmQsOiksc21pbGUsZnVubnksPSksPS0pXCIsXG4gICAgICAgICAgICAgIGxldCBzZWFyY2ggPSBlbW9qaS5fZGF0YS5zZWFyY2hcbiAgICAgICAgICAgICAgbGV0IHN1YiA9IHZhbHVlLnN1YnN0cigwLCBsZW5ndGgpXG4gICAgICAgICAgICAgIGxldCBzdWJJbmRleCA9IHNlYXJjaC5pbmRleE9mKHN1YilcbiAgICAgICAgICAgICAgaWYgKHN1YkluZGV4ICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNjb3JlID0gc3ViSW5kZXggKyAxXG4gICAgICAgICAgICAgICAgaWYgKHN1YiA9PSBlbW9qaUlkKSBzY29yZSA9IDBcblxuICAgICAgICAgICAgICAgIGN1cnJlbnRJbmRleC5yZXN1bHRzLnB1c2goZW1vamkpXG4gICAgICAgICAgICAgICAgY3VycmVudEluZGV4LmVtb2ppc1tlbW9qaUlkXSA9IGVtb2ppXG5cbiAgICAgICAgICAgICAgICBzY29yZXNbZW1vamlJZF0gPSBzY29yZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdXJyZW50SW5kZXgucmVzdWx0cy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgIHZhciBhU2NvcmUgPSBzY29yZXNbYS5pZF0sXG4gICAgICAgICAgICAgICAgYlNjb3JlID0gc2NvcmVzW2IuaWRdXG4gICAgICAgICAgICAgIHJldHVybiBhU2NvcmUgLSBiU2NvcmVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gY29udGludWUgc2VhcmNoIGluIHRoZSByZWR1Y2VkIHNldCBvZiBlbW9qaXNcbiAgICAgICAgICBlbW9qaXMgPSBjdXJyZW50SW5kZXguZW1vamlzXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGN1cnJlbnRJbmRleC5yZXN1bHRzXG4gICAgICAgIC8vIFRoZSBcImZpbHRlclwiIGNhbGwgcmVtb3ZlcyB1bmRlZmluZWQgdmFsdWVzIGZyb20gYWxsUmVzdWx0c1xuICAgICAgICAvLyBhcnJheSwgZm9yIGV4YW1wbGUsIGlmIHdlIGhhdmUgXCJ0ZXN0IFwiICh3aXRoIHRyYWlsaW5nIHNwYWNlKSxcbiAgICAgICAgLy8gd2Ugd2lsbCBnZXQgXCJbQXJyYXksIHVuZGVmaW5lZF1cIiBmb3IgYWxsUmVzdWx0cyBhbmQgYWZ0ZXJcbiAgICAgICAgLy8gdGhlIFwiZmlsdGVyXCIgY2FsbCBpdCB3aWxsIHR1cm4gaW50byBcIltBcnJheV1cIlxuICAgICAgfSlcbiAgICAgIC5maWx0ZXIoKGEpID0+IGEpXG5cbiAgICB2YXIgcmVzdWx0cyA9IG51bGxcbiAgICBpZiAoYWxsUmVzdWx0cy5sZW5ndGggPiAxKSB7XG4gICAgICByZXN1bHRzID0gaW50ZXJzZWN0LmFwcGx5KG51bGwsIGFsbFJlc3VsdHMpXG4gICAgfSBlbHNlIGlmIChhbGxSZXN1bHRzLmxlbmd0aCkge1xuICAgICAgcmVzdWx0cyA9IGFsbFJlc3VsdHNbMF1cbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0cyA9IFtdXG4gICAgfVxuICAgIGlmIChyZXN1bHRzICYmIHJlc3VsdHMubGVuZ3RoID4gbWF4UmVzdWx0cykge1xuICAgICAgcmVzdWx0cyA9IHJlc3VsdHMuc2xpY2UoMCwgbWF4UmVzdWx0cylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHNcbiAgfVxuXG4gIGFkZEN1c3RvbUVtb2ppKGN1c3RvbUVtb2ppKSB7XG4gICAgbGV0IGVtb2ppRGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIGN1c3RvbUVtb2ppLCB7XG4gICAgICBpZDogY3VzdG9tRW1vamkuc2hvcnRfbmFtZXNbMF0sXG4gICAgICBjdXN0b206IHRydWUsXG4gICAgfSlcbiAgICBpZiAoIWVtb2ppRGF0YS5zZWFyY2gpIHtcbiAgICAgIGVtb2ppRGF0YS5zZWFyY2ggPSBidWlsZFNlYXJjaChlbW9qaURhdGEpXG4gICAgfVxuICAgIGxldCBlbW9qaSA9IG5ldyBFbW9qaURhdGEoZW1vamlEYXRhKVxuICAgIHRoaXMuX2Vtb2ppc1tlbW9qaS5pZF0gPSBlbW9qaVxuICAgIHRoaXMuX2N1c3RvbUNhdGVnb3J5LmVtb2ppcy5wdXNoKGVtb2ppKVxuICAgIHJldHVybiBlbW9qaVxuICB9XG5cbiAgYWRkRW1vamkoZW1vamlJZCkge1xuICAgIC8vIFdlIGV4cGVjdCB0aGUgY29ycmVjdCBlbW9qaSBpZCB0aGF0IGlzIHByZXNlbnQgaW4gdGhlIGVtb2ppcyBkYXRhLlxuICAgIGxldCBkYXRhID0gdGhpcy5fZGF0YS5lbW9qaXNbZW1vamlJZF1cblxuICAgIGlmICghdGhpcy5pc0Vtb2ppTmVlZGVkKGRhdGEpKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBsZXQgZW1vamkgPSBuZXcgRW1vamlEYXRhKGRhdGEpXG4gICAgdGhpcy5fZW1vamlzW2Vtb2ppSWRdID0gZW1vamlcbiAgICBpZiAoZW1vamkubmF0aXZlKSB7XG4gICAgICB0aGlzLl9uYXRpdmVFbW9qaXNbZW1vamkubmF0aXZlXSA9IGVtb2ppXG4gICAgfVxuICAgIGlmIChlbW9qaS5fc2tpbnMpIHtcbiAgICAgIGZvciAobGV0IGlkeCBpbiBlbW9qaS5fc2tpbnMpIHtcbiAgICAgICAgbGV0IHNraW4gPSBlbW9qaS5fc2tpbnNbaWR4XVxuICAgICAgICBpZiAoc2tpbi5uYXRpdmUpIHtcbiAgICAgICAgICB0aGlzLl9uYXRpdmVFbW9qaXNbc2tpbi5uYXRpdmVdID0gc2tpblxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGVtb2ppLmVtb3RpY29ucykge1xuICAgICAgZW1vamkuZW1vdGljb25zLmZvckVhY2goKGVtb3RpY29uKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9lbW90aWNvbnNbZW1vdGljb25dKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZW1vdGljb25zW2Vtb3RpY29uXSA9IGVtb2ppSWRcbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBlbW9qaVxuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHdlIG5lZWQgdG8gaW5jbHVkZSBnaXZlbiBjYXRlZ29yeS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNhdGVnb3J5X2lkIC0gVGhlIGNhdGVnb3J5IGlkLlxuICAgKiBAcmV0dXJuIHtib29sZWFufSAtIFdoZXRoZXIgdG8gaW5jbHVkZSB0aGUgZW1vamkuXG4gICAqL1xuICBpc0NhdGVnb3J5TmVlZGVkKGNhdGVnb3J5X2lkKSB7XG4gICAgbGV0IGlzSW5jbHVkZWQgPVxuICAgICAgdGhpcy5faW5jbHVkZSAmJiB0aGlzLl9pbmNsdWRlLmxlbmd0aFxuICAgICAgICA/IHRoaXMuX2luY2x1ZGUuaW5kZXhPZihjYXRlZ29yeV9pZCkgPiAtMVxuICAgICAgICA6IHRydWVcbiAgICBsZXQgaXNFeGNsdWRlZCA9XG4gICAgICB0aGlzLl9leGNsdWRlICYmIHRoaXMuX2V4Y2x1ZGUubGVuZ3RoXG4gICAgICAgID8gdGhpcy5fZXhjbHVkZS5pbmRleE9mKGNhdGVnb3J5X2lkKSA+IC0xXG4gICAgICAgIDogZmFsc2VcbiAgICBpZiAoIWlzSW5jbHVkZWQgfHwgaXNFeGNsdWRlZCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgd2UgbmVlZCB0byBpbmNsdWRlIGdpdmVuIGVtb2ppLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZW1vamkgLSBUaGUgcmF3IGVtb2ppIG9iamVjdC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gLSBXaGV0aGVyIHRvIGluY2x1ZGUgdGhlIGVtb2ppLlxuICAgKi9cbiAgaXNFbW9qaU5lZWRlZChlbW9qaSkge1xuICAgIGlmICh0aGlzLl9lbW9qaXNGaWx0ZXIpIHtcbiAgICAgIHJldHVybiB0aGlzLl9lbW9qaXNGaWx0ZXIoZW1vamkpXG4gICAgfVxuICAgIHJldHVybiB0cnVlXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEVtb2ppRGF0YSB7XG4gIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICB0aGlzLl9kYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YSlcbiAgICB0aGlzLl9za2lucyA9IG51bGxcbiAgICBpZiAodGhpcy5fZGF0YS5za2luX3ZhcmlhdGlvbnMpIHtcbiAgICAgIHRoaXMuX3NraW5zID0gW11cbiAgICAgIGZvciAodmFyIHNraW5JZHggaW4gU0tJTlMpIHtcbiAgICAgICAgbGV0IHNraW5LZXkgPSBTS0lOU1tza2luSWR4XVxuICAgICAgICBsZXQgdmFyaWF0aW9uRGF0YSA9IHRoaXMuX2RhdGEuc2tpbl92YXJpYXRpb25zW3NraW5LZXldXG4gICAgICAgIGxldCBza2luRGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGEpXG4gICAgICAgIGZvciAobGV0IGsgaW4gdmFyaWF0aW9uRGF0YSkge1xuICAgICAgICAgIHNraW5EYXRhW2tdID0gdmFyaWF0aW9uRGF0YVtrXVxuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZSBza2luRGF0YS5za2luX3ZhcmlhdGlvbnNcbiAgICAgICAgdGhpcy5fc2tpbnMucHVzaChuZXcgRW1vamlEYXRhKHNraW5EYXRhKSlcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fc2FuaXRpemVkID0gc2FuaXRpemUodGhpcy5fZGF0YSlcbiAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5fc2FuaXRpemVkKSB7XG4gICAgICB0aGlzW2tleV0gPSB0aGlzLl9zYW5pdGl6ZWRba2V5XVxuICAgIH1cbiAgICB0aGlzLnNob3J0X25hbWVzID0gdGhpcy5fZGF0YS5zaG9ydF9uYW1lc1xuICAgIHRoaXMuc2hvcnRfbmFtZSA9IHRoaXMuX2RhdGEuc2hvcnRfbmFtZXNbMF1cbiAgICBPYmplY3QuZnJlZXplKHRoaXMpXG4gIH1cblxuICBnZXRTa2luKHNraW5JZHgpIHtcbiAgICBpZiAoc2tpbklkeCAmJiBza2luSWR4ICE9ICduYXRpdmUnICYmIHRoaXMuX3NraW5zKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2tpbnNbc2tpbklkeCAtIDFdXG4gICAgfVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICBsZXQgbXVsdGlwbHkgPSAxMDAgLyBTSEVFVF9DT0xVTU5TLFxuICAgICAgeCA9IE1hdGgucm91bmQobXVsdGlwbHkgKiB0aGlzLl9kYXRhLnNoZWV0X3ggKiAxMDApIC8gMTAwLFxuICAgICAgeSA9IE1hdGgucm91bmQobXVsdGlwbHkgKiB0aGlzLl9kYXRhLnNoZWV0X3kgKiAxMDApIC8gMTAwXG4gICAgcmV0dXJuIGAke3h9JSAke3l9JWBcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRW1vamlWaWV3IHtcbiAgLyoqXG4gICAqIGVtb2ppIC0gRW1vamkgdG8gZGlzcGxheVxuICAgKiBzZXQgLSBzdHJpbmcsIGVtb2ppIHNldCBuYW1lXG4gICAqIG5hdGl2ZSAtIGJvb2xlYW4sIHdoZXRoZXIgdG8gcmVuZGVyIG5hdGl2ZSBlbW9qaVxuICAgKiBmYWxsYmFjayAtIGZhbGxiYWNrIGZ1bmN0aW9uIHRvIHJlbmRlciBtaXNzaW5nIGVtb2ppLCBvcHRpb25hbFxuICAgKiBlbW9qaVRvb2x0aXAgLSB3ZXRoZXIgd2UgbmVlZCB0byBzaG93IHRoZSBlbW9qaSB0b29sdGlwLCBvcHRpb25hbFxuICAgKiBlbW9qaVNpemUgLSBlbW9qaSBzaXplIGluIHBpeGVscywgb3B0aW9uYWxcbiAgICovXG4gIGNvbnN0cnVjdG9yKGVtb2ppLCBza2luLCBzZXQsIG5hdGl2ZSwgZmFsbGJhY2ssIGVtb2ppVG9vbHRpcCwgZW1vamlTaXplKSB7XG4gICAgdGhpcy5fZW1vamkgPSBlbW9qaVxuICAgIHRoaXMuX25hdGl2ZSA9IG5hdGl2ZVxuICAgIHRoaXMuX3NraW4gPSBza2luXG4gICAgdGhpcy5fc2V0ID0gc2V0XG4gICAgdGhpcy5fZmFsbGJhY2sgPSBmYWxsYmFja1xuXG4gICAgdGhpcy5jYW5SZW5kZXIgPSB0aGlzLl9jYW5SZW5kZXIoKVxuICAgIHRoaXMuY3NzQ2xhc3MgPSB0aGlzLl9jc3NDbGFzcygpXG4gICAgdGhpcy5jc3NTdHlsZSA9IHRoaXMuX2Nzc1N0eWxlKGVtb2ppU2l6ZSlcbiAgICB0aGlzLmNvbnRlbnQgPSB0aGlzLl9jb250ZW50KClcbiAgICB0aGlzLnRpdGxlID0gZW1vamlUb29sdGlwID09PSB0cnVlID8gZW1vamkuc2hvcnRfbmFtZSA6IG51bGxcblxuICAgIE9iamVjdC5mcmVlemUodGhpcylcbiAgfVxuXG4gIGdldEVtb2ppKCkge1xuICAgIHJldHVybiB0aGlzLl9lbW9qaS5nZXRTa2luKHRoaXMuX3NraW4pXG4gIH1cblxuICBfY2FuUmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLl9pc0N1c3RvbSgpIHx8IHRoaXMuX2lzTmF0aXZlKCkgfHwgdGhpcy5faGFzRW1vamkoKSB8fCB0aGlzLl9mYWxsYmFja1xuICAgIClcbiAgfVxuXG4gIF9jc3NDbGFzcygpIHtcbiAgICByZXR1cm4gWydlbW9qaS1zZXQtJyArIHRoaXMuX3NldCwgJ2Vtb2ppLXR5cGUtJyArIHRoaXMuX2Vtb2ppVHlwZSgpXVxuICB9XG5cbiAgX2Nzc1N0eWxlKGVtb2ppU2l6ZSkge1xuICAgIGxldCBjc3NTdHlsZSA9IHt9XG4gICAgaWYgKHRoaXMuX2lzQ3VzdG9tKCkpIHtcbiAgICAgIGNzc1N0eWxlID0ge1xuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoJyArIHRoaXMuZ2V0RW1vamkoKS5fZGF0YS5pbWFnZVVybCArICcpJyxcbiAgICAgICAgYmFja2dyb3VuZFNpemU6ICcxMDAlJyxcbiAgICAgICAgd2lkdGg6IGVtb2ppU2l6ZSArICdweCcsXG4gICAgICAgIGhlaWdodDogZW1vamlTaXplICsgJ3B4JyxcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuX2hhc0Vtb2ppKCkgJiYgIXRoaXMuX2lzTmF0aXZlKCkpIHtcbiAgICAgIGNzc1N0eWxlID0ge1xuICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IHRoaXMuZ2V0RW1vamkoKS5nZXRQb3NpdGlvbigpLFxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW1vamlTaXplKSB7XG4gICAgICBpZiAodGhpcy5faXNOYXRpdmUoKSkge1xuICAgICAgICAvLyBTZXQgZm9udC1zaXplIGZvciBuYXRpdmUgZW1vamkuXG4gICAgICAgIGNzc1N0eWxlID0gT2JqZWN0LmFzc2lnbihjc3NTdHlsZSwge1xuICAgICAgICAgIC8vIGZvbnQtc2l6ZSBpcyB1c2VkIGZvciBuYXRpdmUgZW1vamkgd2hpY2ggd2UgbmVlZFxuICAgICAgICAgIC8vIHRvIHNjYWxlIHdpdGggMC44IGZhY3RvciB0byBoYXZlIHRoZW0gbG9vayBhcHByb3hpbWF0ZWx5XG4gICAgICAgICAgLy8gdGhlIHNhbWUgc2l6ZSBhcyBpbWFnZS1iYXNlZCBlbW9qbC5cbiAgICAgICAgICBmb250U2l6ZTogTWF0aC5yb3VuZChlbW9qaVNpemUgKiAwLjggKiAxMCkgLyAxMCArICdweCcsXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBTZXQgd2lkdGgvaGVpZ2h0IGZvciBpbWFnZSBlbW9qaS5cbiAgICAgICAgY3NzU3R5bGUgPSBPYmplY3QuYXNzaWduKGNzc1N0eWxlLCB7XG4gICAgICAgICAgd2lkdGg6IGVtb2ppU2l6ZSArICdweCcsXG4gICAgICAgICAgaGVpZ2h0OiBlbW9qaVNpemUgKyAncHgnLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY3NzU3R5bGVcbiAgfVxuXG4gIF9jb250ZW50KCkge1xuICAgIGlmICh0aGlzLl9pc0N1c3RvbSgpKSB7XG4gICAgICByZXR1cm4gJydcbiAgICB9XG4gICAgaWYgKHRoaXMuX2lzTmF0aXZlKCkpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldEVtb2ppKCkubmF0aXZlXG4gICAgfVxuICAgIGlmICh0aGlzLl9oYXNFbW9qaSgpKSB7XG4gICAgICByZXR1cm4gJydcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2ZhbGxiYWNrID8gdGhpcy5fZmFsbGJhY2sodGhpcy5nZXRFbW9qaSgpKSA6IG51bGxcbiAgfVxuXG4gIF9pc05hdGl2ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmF0aXZlXG4gIH1cblxuICBfaXNDdXN0b20oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0RW1vamkoKS5jdXN0b21cbiAgfVxuXG4gIF9oYXNFbW9qaSgpIHtcbiAgICBpZiAoIXRoaXMuZ2V0RW1vamkoKS5fZGF0YSkge1xuICAgICAgLy8gUmV0dXJuIGZhbHNlIGlmIHdlIGhhdmUgbm8gZGF0YS5cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICBjb25zdCBoYXNJbWFnZSA9IHRoaXMuZ2V0RW1vamkoKS5fZGF0YVsnaGFzX2ltZ18nICsgdGhpcy5fc2V0XVxuICAgIGlmIChoYXNJbWFnZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBJZiB0aGVyZSBpcyBubyBoYXNfaW1nX3h4eCBpbiB0aGUgZGF0YSwgd2UgYXJlIHdvcmtpbmcgd2l0aFxuICAgICAgLy8gc3BlY2lmaWMgZGF0YSBmaWxlLCBsaWtlIGZhY2Vib29rLmpzb24sIHNvIHdlIGFzc3VtZSBhbGxcbiAgICAgIC8vIGVtb2ppcyBhcmUgYXZhaWxhYmxlICh0aGUgOnNldCBzZXR0aW5nIGZvciBwaWNrZXIgc2hvdWxkXG4gICAgICAvLyBtYXRjaCB0aGUgZGF0YSBmaWxlKS5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIC8vIE90aGVyd2lzZSwgd2UgYXJlIHVzaW5nIGFsbC5qc29uIGFuZCBjYW4gc3dpdGNoIGJldHdlZW4gZGlmZmVyZW50XG4gICAgLy8gc2V0cyAtIGluIHRoaXMgY2FzZSB0aGUgYGhhc19pbWdfe3NldF9uYW1lfWAgaXMgYSBib29sZWFuIHRoYXRcbiAgICAvLyBpbmRpY2F0ZXMgaWYgdGhlcmUgaXMgc3VjaCBpbWFnZSBvciBub3QgZm9yIGEgZ2l2ZW4gc2V0LlxuICAgIHJldHVybiBoYXNJbWFnZVxuICB9XG5cbiAgX2Vtb2ppVHlwZSgpIHtcbiAgICBpZiAodGhpcy5faXNDdXN0b20oKSkge1xuICAgICAgcmV0dXJuICdjdXN0b20nXG4gICAgfVxuICAgIGlmICh0aGlzLl9pc05hdGl2ZSgpKSB7XG4gICAgICByZXR1cm4gJ25hdGl2ZSdcbiAgICB9XG4gICAgaWYgKHRoaXMuX2hhc0Vtb2ppKCkpIHtcbiAgICAgIHJldHVybiAnaW1hZ2UnXG4gICAgfVxuICAgIHJldHVybiAnZmFsbGJhY2snXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhbml0aXplKGVtb2ppKSB7XG4gIHZhciB7XG4gICAgICBuYW1lLFxuICAgICAgc2hvcnRfbmFtZXMsXG4gICAgICBza2luX3RvbmUsXG4gICAgICBza2luX3ZhcmlhdGlvbnMsXG4gICAgICBlbW90aWNvbnMsXG4gICAgICB1bmlmaWVkLFxuICAgICAgY3VzdG9tLFxuICAgICAgaW1hZ2VVcmwsXG4gICAgfSA9IGVtb2ppLFxuICAgIGlkID0gZW1vamkuaWQgfHwgc2hvcnRfbmFtZXNbMF0sXG4gICAgY29sb25zID0gYDoke2lkfTpgXG5cbiAgaWYgKGN1c3RvbSkge1xuICAgIHJldHVybiB7XG4gICAgICBpZCxcbiAgICAgIG5hbWUsXG4gICAgICBjb2xvbnMsXG4gICAgICBlbW90aWNvbnMsXG4gICAgICBjdXN0b20sXG4gICAgICBpbWFnZVVybCxcbiAgICB9XG4gIH1cblxuICBpZiAoc2tpbl90b25lKSB7XG4gICAgY29sb25zICs9IGA6c2tpbi10b25lLSR7c2tpbl90b25lfTpgXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGlkLFxuICAgIG5hbWUsXG4gICAgY29sb25zLFxuICAgIGVtb3RpY29ucyxcbiAgICB1bmlmaWVkOiB1bmlmaWVkLnRvTG93ZXJDYXNlKCksXG4gICAgc2tpbjogc2tpbl90b25lIHx8IChza2luX3ZhcmlhdGlvbnMgPyAxIDogbnVsbCksXG4gICAgbmF0aXZlOiB1bmlmaWVkVG9OYXRpdmUodW5pZmllZCksXG4gIH1cbn1cbiIsImltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlJ1xuXG5jb25zdCBERUZBVUxUUyA9IFtcbiAgJysxJyxcbiAgJ2dyaW5uaW5nJyxcbiAgJ2tpc3NpbmdfaGVhcnQnLFxuICAnaGVhcnRfZXllcycsXG4gICdsYXVnaGluZycsXG4gICdzdHVja19vdXRfdG9uZ3VlX3dpbmtpbmdfZXllJyxcbiAgJ3N3ZWF0X3NtaWxlJyxcbiAgJ2pveScsXG4gICdzY3JlYW0nLFxuICAnZGlzYXBwb2ludGVkJyxcbiAgJ3VuYW11c2VkJyxcbiAgJ3dlYXJ5JyxcbiAgJ3NvYicsXG4gICdzdW5nbGFzc2VzJyxcbiAgJ2hlYXJ0JyxcbiAgJ3Bvb3AnLFxuXVxuXG5sZXQgZnJlcXVlbnRseSwgaW5pdGlhbGl6ZWRcbmxldCBkZWZhdWx0cyA9IHt9XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gIGluaXRpYWxpemVkID0gdHJ1ZVxuICBmcmVxdWVudGx5ID0gc3RvcmUuZ2V0KCdmcmVxdWVudGx5Jylcbn1cblxuZnVuY3Rpb24gYWRkKGVtb2ppKSB7XG4gIGlmICghaW5pdGlhbGl6ZWQpIGluaXQoKVxuICB2YXIgeyBpZCB9ID0gZW1vamlcblxuICBmcmVxdWVudGx5IHx8IChmcmVxdWVudGx5ID0gZGVmYXVsdHMpXG4gIGZyZXF1ZW50bHlbaWRdIHx8IChmcmVxdWVudGx5W2lkXSA9IDApXG4gIGZyZXF1ZW50bHlbaWRdICs9IDFcblxuICBzdG9yZS5zZXQoJ2xhc3QnLCBpZClcbiAgc3RvcmUuc2V0KCdmcmVxdWVudGx5JywgZnJlcXVlbnRseSlcbn1cblxuZnVuY3Rpb24gZ2V0KG1heE51bWJlcikge1xuICBpZiAoIWluaXRpYWxpemVkKSBpbml0KClcbiAgaWYgKCFmcmVxdWVudGx5KSB7XG4gICAgZGVmYXVsdHMgPSB7fVxuXG4gICAgY29uc3QgcmVzdWx0ID0gW11cblxuICAgIGxldCBkZWZhdWx0TGVuZ3RoID0gTWF0aC5taW4obWF4TnVtYmVyLCBERUZBVUxUUy5sZW5ndGgpXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZWZhdWx0TGVuZ3RoOyBpKyspIHtcbiAgICAgIGRlZmF1bHRzW0RFRkFVTFRTW2ldXSA9IGRlZmF1bHRMZW5ndGggLSBpXG4gICAgICByZXN1bHQucHVzaChERUZBVUxUU1tpXSlcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICBjb25zdCBxdWFudGl0eSA9IG1heE51bWJlclxuICBjb25zdCBmcmVxdWVudGx5S2V5cyA9IFtdXG5cbiAgZm9yIChsZXQga2V5IGluIGZyZXF1ZW50bHkpIHtcbiAgICBpZiAoZnJlcXVlbnRseS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBmcmVxdWVudGx5S2V5cy5wdXNoKGtleSlcbiAgICB9XG4gIH1cblxuICBjb25zdCBzb3J0ZWQgPSBmcmVxdWVudGx5S2V5c1xuICAgIC5zb3J0KChhLCBiKSA9PiBmcmVxdWVudGx5W2FdIC0gZnJlcXVlbnRseVtiXSlcbiAgICAucmV2ZXJzZSgpXG4gIGNvbnN0IHNsaWNlZCA9IHNvcnRlZC5zbGljZSgwLCBxdWFudGl0eSlcblxuICBjb25zdCBsYXN0ID0gc3RvcmUuZ2V0KCdsYXN0JylcblxuICBpZiAobGFzdCAmJiBzbGljZWQuaW5kZXhPZihsYXN0KSA9PSAtMSkge1xuICAgIHNsaWNlZC5wb3AoKVxuICAgIHNsaWNlZC5wdXNoKGxhc3QpXG4gIH1cblxuICByZXR1cm4gc2xpY2VkXG59XG5cbmV4cG9ydCBkZWZhdWx0IHsgYWRkLCBnZXQgfVxuIiwiaW1wb3J0IHN0cmluZ0Zyb21Db2RlUG9pbnQgZnJvbSAnLi4vcG9seWZpbGxzL3N0cmluZ0Zyb21Db2RlUG9pbnQnXG5cbmZ1bmN0aW9uIHVuaWZpZWRUb05hdGl2ZSh1bmlmaWVkKSB7XG4gIHZhciB1bmljb2RlcyA9IHVuaWZpZWQuc3BsaXQoJy0nKSxcbiAgICBjb2RlUG9pbnRzID0gdW5pY29kZXMubWFwKCh1KSA9PiBgMHgke3V9YClcblxuICByZXR1cm4gc3RyaW5nRnJvbUNvZGVQb2ludC5hcHBseShudWxsLCBjb2RlUG9pbnRzKVxufVxuXG5mdW5jdGlvbiB1bmlxKGFycikge1xuICByZXR1cm4gYXJyLnJlZHVjZSgoYWNjLCBpdGVtKSA9PiB7XG4gICAgaWYgKGFjYy5pbmRleE9mKGl0ZW0pID09PSAtMSkge1xuICAgICAgYWNjLnB1c2goaXRlbSlcbiAgICB9XG4gICAgcmV0dXJuIGFjY1xuICB9LCBbXSlcbn1cblxuZnVuY3Rpb24gaW50ZXJzZWN0KGEsIGIpIHtcbiAgY29uc3QgdW5pcUEgPSB1bmlxKGEpXG4gIGNvbnN0IHVuaXFCID0gdW5pcShiKVxuXG4gIHJldHVybiB1bmlxQS5maWx0ZXIoKGl0ZW0pID0+IHVuaXFCLmluZGV4T2YoaXRlbSkgPj0gMClcbn1cblxuZnVuY3Rpb24gZGVlcE1lcmdlKGEsIGIpIHtcbiAgdmFyIG8gPSB7fVxuXG4gIGZvciAobGV0IGtleSBpbiBhKSB7XG4gICAgbGV0IG9yaWdpbmFsVmFsdWUgPSBhW2tleV0sXG4gICAgICB2YWx1ZSA9IG9yaWdpbmFsVmFsdWVcblxuICAgIGlmIChiLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHZhbHVlID0gYltrZXldXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHZhbHVlID0gZGVlcE1lcmdlKG9yaWdpbmFsVmFsdWUsIHZhbHVlKVxuICAgIH1cblxuICAgIG9ba2V5XSA9IHZhbHVlXG4gIH1cblxuICByZXR1cm4gb1xufVxuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vc29uaWNkb2UvbWVhc3VyZS1zY3JvbGxiYXJcbmZ1bmN0aW9uIG1lYXN1cmVTY3JvbGxiYXIoKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT0gJ3VuZGVmaW5lZCcpIHJldHVybiAwXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgZGl2LnN0eWxlLndpZHRoID0gJzEwMHB4J1xuICBkaXYuc3R5bGUuaGVpZ2h0ID0gJzEwMHB4J1xuICBkaXYuc3R5bGUub3ZlcmZsb3cgPSAnc2Nyb2xsJ1xuICBkaXYuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnXG4gIGRpdi5zdHlsZS50b3AgPSAnLTk5OTlweCdcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdilcbiAgY29uc3Qgc2Nyb2xsYmFyV2lkdGggPSBkaXYub2Zmc2V0V2lkdGggLSBkaXYuY2xpZW50V2lkdGhcbiAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkaXYpXG5cbiAgcmV0dXJuIHNjcm9sbGJhcldpZHRoXG59XG5cbmV4cG9ydCB7IHVuaXEsIGludGVyc2VjdCwgZGVlcE1lcmdlLCB1bmlmaWVkVG9OYXRpdmUsIG1lYXN1cmVTY3JvbGxiYXIgfVxuIiwiY29uc3QgRW1vamlQcm9wcyA9IHtcbiAgbmF0aXZlOiB7XG4gICAgdHlwZTogQm9vbGVhbixcbiAgICBkZWZhdWx0OiBmYWxzZSxcbiAgfSxcbiAgdG9vbHRpcDoge1xuICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgZGVmYXVsdDogZmFsc2UsXG4gIH0sXG4gIGZhbGxiYWNrOiB7XG4gICAgdHlwZTogRnVuY3Rpb24sXG4gIH0sXG4gIHNraW46IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gICAgZGVmYXVsdDogMSxcbiAgfSxcbiAgc2V0OiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGRlZmF1bHQ6ICdhcHBsZScsXG4gIH0sXG4gIGVtb2ppOiB7XG4gICAgdHlwZTogW1N0cmluZywgT2JqZWN0XSxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgfSxcbiAgc2l6ZToge1xuICAgIHR5cGU6IE51bWJlcixcbiAgICBkZWZhdWx0OiBudWxsLFxuICB9LFxufVxuXG5jb25zdCBQaWNrZXJQcm9wcyA9IHtcbiAgcGVyTGluZToge1xuICAgIHR5cGU6IE51bWJlcixcbiAgICBkZWZhdWx0OiA5LFxuICB9LFxuICBtYXhTZWFyY2hSZXN1bHRzOiB7XG4gICAgdHlwZTogTnVtYmVyLFxuICAgIGRlZmF1bHQ6IDc1LFxuICB9LFxuICBlbW9qaVNpemU6IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gICAgZGVmYXVsdDogMjQsXG4gIH0sXG4gIHRpdGxlOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGRlZmF1bHQ6ICdFbW9qaSBNYXJ04oSiJyxcbiAgfSxcbiAgZW1vamk6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgZGVmYXVsdDogJ2RlcGFydG1lbnRfc3RvcmUnLFxuICB9LFxuICBjb2xvcjoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBkZWZhdWx0OiAnI2FlNjVjNScsXG4gIH0sXG4gIHNldDoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBkZWZhdWx0OiAnYXBwbGUnLFxuICB9LFxuICBza2luOiB7XG4gICAgdHlwZTogTnVtYmVyLFxuICAgIGRlZmF1bHQ6IG51bGwsXG4gIH0sXG4gIGRlZmF1bHRTa2luOiB7XG4gICAgdHlwZTogTnVtYmVyLFxuICAgIGRlZmF1bHQ6IDEsXG4gIH0sXG4gIG5hdGl2ZToge1xuICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgZGVmYXVsdDogZmFsc2UsXG4gIH0sXG4gIGVtb2ppVG9vbHRpcDoge1xuICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgZGVmYXVsdDogZmFsc2UsXG4gIH0sXG4gIGF1dG9Gb2N1czoge1xuICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgZGVmYXVsdDogZmFsc2UsXG4gIH0sXG4gIGkxOG46IHtcbiAgICB0eXBlOiBPYmplY3QsXG4gICAgZGVmYXVsdCgpIHtcbiAgICAgIHJldHVybiB7fVxuICAgIH0sXG4gIH0sXG4gIHNob3dQcmV2aWV3OiB7XG4gICAgdHlwZTogQm9vbGVhbixcbiAgICBkZWZhdWx0OiB0cnVlLFxuICB9LFxuICBzaG93U2VhcmNoOiB7XG4gICAgdHlwZTogQm9vbGVhbixcbiAgICBkZWZhdWx0OiB0cnVlLFxuICB9LFxuICBzaG93Q2F0ZWdvcmllczoge1xuICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgZGVmYXVsdDogdHJ1ZSxcbiAgfSxcbiAgc2hvd1NraW5Ub25lczoge1xuICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgZGVmYXVsdDogdHJ1ZSxcbiAgfSxcbiAgaW5maW5pdGVTY3JvbGw6IHtcbiAgICB0eXBlOiBCb29sZWFuLFxuICAgIGRlZmF1bHQ6IHRydWUsXG4gIH0sXG4gIHBpY2tlclN0eWxlczoge1xuICAgIHR5cGU6IE9iamVjdCxcbiAgICBkZWZhdWx0KCkge1xuICAgICAgcmV0dXJuIHt9XG4gICAgfSxcbiAgfSxcbn1cblxuZXhwb3J0IHsgRW1vamlQcm9wcywgUGlja2VyUHJvcHMgfVxuIiwidmFyIE5BTUVTUEFDRSA9ICdlbW9qaS1tYXJ0J1xuXG5jb25zdCBfSlNPTiA9IEpTT05cblxudmFyIGlzTG9jYWxTdG9yYWdlU3VwcG9ydGVkID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgJ2xvY2FsU3RvcmFnZScgaW4gd2luZG93XG5cbmxldCBnZXR0ZXJcbmxldCBzZXR0ZXJcblxuZnVuY3Rpb24gc2V0SGFuZGxlcnMoaGFuZGxlcnMpIHtcbiAgaGFuZGxlcnMgfHwgKGhhbmRsZXJzID0ge30pXG5cbiAgZ2V0dGVyID0gaGFuZGxlcnMuZ2V0dGVyXG4gIHNldHRlciA9IGhhbmRsZXJzLnNldHRlclxufVxuXG5mdW5jdGlvbiBzZXROYW1lc3BhY2UobmFtZXNwYWNlKSB7XG4gIE5BTUVTUEFDRSA9IG5hbWVzcGFjZVxufVxuXG5mdW5jdGlvbiB1cGRhdGUoc3RhdGUpIHtcbiAgZm9yIChsZXQga2V5IGluIHN0YXRlKSB7XG4gICAgbGV0IHZhbHVlID0gc3RhdGVba2V5XVxuICAgIHNldChrZXksIHZhbHVlKVxuICB9XG59XG5cbmZ1bmN0aW9uIHNldChrZXksIHZhbHVlKSB7XG4gIGlmIChzZXR0ZXIpIHtcbiAgICBzZXR0ZXIoa2V5LCB2YWx1ZSlcbiAgfSBlbHNlIHtcbiAgICBpZiAoIWlzTG9jYWxTdG9yYWdlU3VwcG9ydGVkKSByZXR1cm5cbiAgICB0cnkge1xuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZVtgJHtOQU1FU1BBQ0V9LiR7a2V5fWBdID0gX0pTT04uc3RyaW5naWZ5KHZhbHVlKVxuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0KGtleSkge1xuICBpZiAoZ2V0dGVyKSB7XG4gICAgcmV0dXJuIGdldHRlcihrZXkpXG4gIH0gZWxzZSB7XG4gICAgaWYgKCFpc0xvY2FsU3RvcmFnZVN1cHBvcnRlZCkgcmV0dXJuXG4gICAgdHJ5IHtcbiAgICAgIHZhciB2YWx1ZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2VbYCR7TkFNRVNQQUNFfS4ke2tleX1gXVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIEpTT04ucGFyc2UodmFsdWUpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHsgdXBkYXRlLCBzZXQsIGdldCwgc2V0TmFtZXNwYWNlLCBzZXRIYW5kbGVycyB9XG4iLCIvLyBodHRwOi8vcGF1bGlyaXNoLmNvbS8yMDExL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtYW5pbWF0aW5nL1xuLy8gaHR0cDovL215Lm9wZXJhLmNvbS9lbW9sbGVyL2Jsb2cvMjAxMS8xMi8yMC9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWVyLWFuaW1hdGluZ1xuXG4vLyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGwgYnkgRXJpayBNw7ZsbGVyLiBmaXhlcyBmcm9tIFBhdWwgSXJpc2ggYW5kIFRpbm8gWmlqZGVsXG5cbi8vIE1JVCBsaWNlbnNlXG5cbnZhciBpc1dpbmRvd0F2YWlsYWJsZSA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG5cbmlzV2luZG93QXZhaWxhYmxlICYmXG4gIChmdW5jdGlvbigpIHtcbiAgICB2YXIgbGFzdFRpbWUgPSAwXG4gICAgdmFyIHZlbmRvcnMgPSBbJ21zJywgJ21veicsICd3ZWJraXQnLCAnbyddXG5cbiAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHZlbmRvcnMubGVuZ3RoICYmICF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lOyArK3gpIHtcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPVxuICAgICAgICB3aW5kb3dbdmVuZG9yc1t4XSArICdSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXVxuICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID1cbiAgICAgICAgd2luZG93W3ZlbmRvcnNbeF0gKyAnQ2FuY2VsQW5pbWF0aW9uRnJhbWUnXSB8fFxuICAgICAgICB3aW5kb3dbdmVuZG9yc1t4XSArICdDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXVxuICAgIH1cblxuICAgIGlmICghd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSlcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbihjYWxsYmFjaywgZWxlbWVudCkge1xuICAgICAgICB2YXIgY3VyclRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKVxuICAgICAgICB2YXIgdGltZVRvQ2FsbCA9IE1hdGgubWF4KDAsIDE2IC0gKGN1cnJUaW1lIC0gbGFzdFRpbWUpKVxuICAgICAgICB2YXIgaWQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICBjYWxsYmFjayhjdXJyVGltZSArIHRpbWVUb0NhbGwpXG4gICAgICAgIH0sIHRpbWVUb0NhbGwpXG5cbiAgICAgICAgbGFzdFRpbWUgPSBjdXJyVGltZSArIHRpbWVUb0NhbGxcbiAgICAgICAgcmV0dXJuIGlkXG4gICAgICB9XG5cbiAgICBpZiAoIXdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSlcbiAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uKGlkKSB7XG4gICAgICAgIGNsZWFyVGltZW91dChpZClcbiAgICAgIH1cbiAgfSkoKVxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3Z1ZV9fOyJdLCJzb3VyY2VSb290IjoiIn0=