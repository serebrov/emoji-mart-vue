(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["EmojiMart"] = factory();
	else
		root["EmojiMart"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
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
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vendor_raf_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vendor/raf-polyfill */ "./src/vendor/raf-polyfill.js");
/* harmony import */ var _vendor_raf_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vendor_raf_polyfill__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/store */ "./src/utils/store.js");
/* harmony import */ var _utils_frequently__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/frequently */ "./src/utils/frequently.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");
/* harmony import */ var _utils_shared_props__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/shared-props */ "./src/utils/shared-props.js");
/* harmony import */ var _utils_picker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/picker */ "./src/utils/picker.js");
/* harmony import */ var _anchors_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./anchors.vue */ "./src/components/anchors.vue");
/* harmony import */ var _category_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./category.vue */ "./src/components/category.vue");
/* harmony import */ var _preview_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./preview.vue */ "./src/components/preview.vue");
/* harmony import */ var _search_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./search.vue */ "./src/components/search.vue");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, _utils_shared_props__WEBPACK_IMPORTED_MODULE_5__["PickerProps"], {
    data: {
      type: Object,
      required: true
    }
  }),
  data: function data() {
    return {
      activeSkin: this.skin || _utils_store__WEBPACK_IMPORTED_MODULE_2__["default"].get('skin') || this.defaultSkin,
      view: new _utils_picker__WEBPACK_IMPORTED_MODULE_6__["PickerView"](this)
    };
  },
  computed: {
    customStyles: function customStyles() {
      return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({
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
        selectedEmoji: this.view.previewEmoji,
        selectedEmojiCategory: this.view.previewEmojiCategory,
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
      return this.perLine * (this.emojiSize + 12) + 12 + 2 + Object(_utils__WEBPACK_IMPORTED_MODULE_4__["measureScrollbar"])();
    },
    // emojisPerRow() {
    //   const listEl = this.$refs.scrollContent
    //   const emojiEl = listEl.querySelector('.emoji-mart-emoji')
    //   return Math.floor(listEl.offsetWidth / emojiEl.offsetWidth)
    // },
    filteredCategories: function filteredCategories() {
      return this.view.filteredCategories;
    },
    mergedI18n: function mergedI18n() {
      return Object.freeze(Object(_utils__WEBPACK_IMPORTED_MODULE_4__["deepMerge"])(I18N, this.i18n));
    },
    idleEmoji: function idleEmoji() {
      try {
        return this.data.emoji(this.emoji);
      } catch (e) {
        console.error('Default preview emoji `' + this.emoji + '` is not available, check the Picker `emoji` property');
        console.error(e);
        return this.data.firstEmoji();
      }
    }
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
      this.view.onScroll();
    },
    onAnchorClick: function onAnchorClick(category) {
      this.view.onAnchorClick(category);
    },
    onSearch: function onSearch(value) {
      this.view.onSearch(value);
    },
    onEmojiEnter: function onEmojiEnter(emoji) {
      this.view.onEmojiEnter(emoji);
    },
    onEmojiLeave: function onEmojiLeave(emoji) {
      this.view.onEmojiLeave(emoji);
    },
    onArrowLeft: function onArrowLeft($event) {
      var oldIdx = this.view.previewEmojiIdx;
      this.view.onArrowLeft();

      if ($event && this.view.previewEmojiIdx !== oldIdx) {
        // Prevent cursor movement inside the input
        $event.preventDefault();
      }
    },
    onArrowRight: function onArrowRight() {
      this.view.onArrowRight();
    },
    onArrowDown: function onArrowDown() {
      this.view.onArrowDown();
    },
    onArrowUp: function onArrowUp($event) {
      this.view.onArrowUp(); // Prevent cursor movement inside the input

      $event.preventDefault();
    },
    onEnter: function onEnter(emoji) {
      this.$emit('select', this.view.previewEmoji);
      _utils_frequently__WEBPACK_IMPORTED_MODULE_3__["default"].add(this.view.previewEmoji);
    },
    onEmojiClick: function onEmojiClick(emoji) {
      this.$emit('select', emoji);
      _utils_frequently__WEBPACK_IMPORTED_MODULE_3__["default"].add(emoji);
    },
    onSkinChange: function onSkinChange(skin) {
      this.activeSkin = skin;
      _utils_store__WEBPACK_IMPORTED_MODULE_2__["default"].update({
        skin: skin
      });
      this.$emit('skin-change', skin);
    },
    getCategoryComponent: function getCategoryComponent(index) {
      var component = this.$refs['categories_' + index];

      if (component && '0' in component) {
        // Vue 2 has $refs under v-for as an array.
        return component['0'];
      } // Vue 3 does not support $refs as array.


      return component;
    }
  },
  components: {
    Anchors: _anchors_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    Category: _category_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    Preview: _preview_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    Search: _search_vue__WEBPACK_IMPORTED_MODULE_10__["default"]
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
/* harmony import */ var _Emoji_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Emoji.vue */ "./src/components/Emoji.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  methods: {
    activeClass: function activeClass(emojiObject) {
      if (!this.emojiProps.selectedEmoji) {
        return '';
      }

      if (!this.emojiProps.selectedEmojiCategory) {
        return '';
      }

      if (this.emojiProps.selectedEmoji.id == emojiObject.id && this.emojiProps.selectedEmojiCategory.id == this.id) {
        return 'emoji-mart-emoji-selected';
      }

      return '';
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
    Emoji: _Emoji_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
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
/* harmony import */ var _Emoji_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Emoji.vue */ "./src/components/Emoji.vue");
/* harmony import */ var _skins_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./skins.vue */ "./src/components/skins.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Emoji: _Emoji_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Skins: _skins_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
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
//
//
//
//
//
//
//
//
//
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
    autoFocus: {
      type: Boolean,
      default: false
    },
    onSearch: {
      type: Function,
      required: true
    },
    onArrowLeft: {
      type: Function,
      required: false
    },
    onArrowRight: {
      type: Function,
      required: false
    },
    onArrowDown: {
      type: Function,
      required: false
    },
    onArrowUp: {
      type: Function,
      required: false
    },
    onEnter: {
      type: Function,
      required: false
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
        _vm.tag,
        {
          tag: "component",
          staticClass: "emoji-mart-emoji",
          attrs: {
            title: _vm.view.title,
            "aria-label": _vm.view.ariaLabel,
            "data-title": _vm.title
          },
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
    "section",
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
                  categories: _vm.view.allCategories,
                  "active-category": _vm.view.activeCategory
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
                on: {
                  search: _vm.onSearch,
                  arrowLeft: _vm.onArrowLeft,
                  arrowRight: _vm.onArrowRight,
                  arrowDown: _vm.onArrowDown,
                  arrowUp: _vm.onArrowUp,
                  enter: _vm.onEnter
                }
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
          attrs: { role: "tabpanel" },
          on: { scroll: _vm.onScroll }
        },
        [
          _c(
            "div",
            {
              ref: "scrollContent",
              attrs: {
                id: "emoji-mart-list",
                role: "listbox",
                "aria-expanded": "true"
              }
            },
            _vm._l(_vm.view.filteredCategories, function(category, idx) {
              return _c("category", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value:
                      _vm.infiniteScroll || category == _vm.view.activeCategory,
                    expression:
                      "infiniteScroll || category == view.activeCategory"
                  }
                ],
                key: category.id,
                ref: "categories_" + idx,
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
            }),
            1
          )
        ]
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
                      emoji: _vm.view.previewEmoji,
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
          emoji: _vm.view.previewEmoji,
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
    { staticClass: "emoji-mart-anchors", attrs: { role: "tablist" } },
    _vm._l(_vm.categories, function(category) {
      return _c(
        "button",
        {
          key: category.id,
          class: {
            "emoji-mart-anchor": true,
            "emoji-mart-anchor-selected": category.id == _vm.activeCategory.id
          },
          style: {
            color: category.id == _vm.activeCategory.id ? _vm.color : ""
          },
          attrs: {
            role: "tab",
            "aria-label": category.name,
            "aria-selected": category.id == _vm.activeCategory.id,
            "data-title": _vm.i18n.categories[category.id]
          },
          on: {
            click: function($event) {
              return _vm.$emit("click", category)
            }
          }
        },
        [
          _c("div", {
            attrs: { "aria-hidden": "true" },
            domProps: { innerHTML: _vm._s(_vm.svgs[category.id]) }
          }),
          _vm._v(" "),
          _c("span", {
            staticClass: "emoji-mart-anchor-bar",
            style: { backgroundColor: _vm.color },
            attrs: { "aria-hidden": "true" }
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
        "section",
        {
          class: {
            "emoji-mart-category": true,
            "emoji-mart-no-results": !_vm.hasResults
          },
          attrs: { "aria-label": _vm.i18n.categories[_vm.id] }
        },
        [
          _c("div", { staticClass: "emoji-mart-category-label" }, [
            _c("h3", { staticClass: "emoji-mart-category-label" }, [
              _vm._v(_vm._s(_vm.i18n.categories[_vm.id]))
            ])
          ]),
          _vm._v(" "),
          _vm._l(_vm.emojiObjects, function(ref) {
            var emojiObject = ref.emojiObject
            var emojiView = ref.emojiView
            return [
              emojiView.canRender
                ? _c(
                    "button",
                    {
                      key: emojiObject.id,
                      staticClass: "emoji-mart-emoji",
                      class: _vm.activeClass(emojiObject),
                      attrs: {
                        "aria-label": emojiView.ariaLabel,
                        role: "option",
                        "aria-selected": "false",
                        "aria-posinset": "1",
                        "aria-setsize": "1812",
                        type: "button",
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
      attrs: {
        type: "text",
        placeholder: _vm.i18n.search,
        role: "textbox",
        "aria-autocomplete": "list",
        "aria-owns": "emoji-mart-list",
        "aria-label": "Search for an emoji",
        "aria-describedby": "emoji-mart-search-description"
      },
      domProps: { value: _vm.value },
      on: {
        keydown: [
          function($event) {
            if (
              !$event.type.indexOf("key") &&
              _vm._k($event.keyCode, "left", 37, $event.key, [
                "Left",
                "ArrowLeft"
              ])
            ) {
              return null
            }
            if ("button" in $event && $event.button !== 0) {
              return null
            }
            return (function($event) {
              return _vm.$emit("arrowLeft", $event)
            })($event)
          },
          function($event) {
            if (
              !$event.type.indexOf("key") &&
              _vm._k($event.keyCode, "right", 39, $event.key, [
                "Right",
                "ArrowRight"
              ])
            ) {
              return null
            }
            if ("button" in $event && $event.button !== 2) {
              return null
            }
            return (function() {
              return _vm.$emit("arrowRight")
            })($event)
          },
          function($event) {
            if (
              !$event.type.indexOf("key") &&
              _vm._k($event.keyCode, "down", 40, $event.key, [
                "Down",
                "ArrowDown"
              ])
            ) {
              return null
            }
            return (function() {
              return _vm.$emit("arrowDown")
            })($event)
          },
          function($event) {
            if (
              !$event.type.indexOf("key") &&
              _vm._k($event.keyCode, "up", 38, $event.key, ["Up", "ArrowUp"])
            ) {
              return null
            }
            return (function($event) {
              return _vm.$emit("arrowUp", $event)
            })($event)
          },
          function($event) {
            if (
              !$event.type.indexOf("key") &&
              _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
            ) {
              return null
            }
            return (function() {
              return _vm.$emit("enter")
            })($event)
          }
        ],
        input: function($event) {
          if ($event.target.composing) {
            return
          }
          _vm.value = $event.target.value
        }
      }
    }),
    _vm._v(" "),
    _c(
      "span",
      {
        staticClass: "hidden",
        attrs: { id: "emoji-picker-search-description" }
      },
      [
        _vm._v(
          "Use the left, right, up and down arrow keys to navigate the emoji search\n    results."
        )
      ]
    )
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
/*! exports provided: Anchors, Category, Preview, Search, Skins, Emoji, Picker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _anchors_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anchors.vue */ "./src/components/anchors.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Anchors", function() { return _anchors_vue__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _category_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category.vue */ "./src/components/category.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return _category_vue__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _preview_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./preview.vue */ "./src/components/preview.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Preview", function() { return _preview_vue__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _search_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search.vue */ "./src/components/search.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return _search_vue__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _skins_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./skins.vue */ "./src/components/skins.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Skins", function() { return _skins_vue__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _Emoji_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Emoji.vue */ "./src/components/Emoji.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Emoji", function() { return _Emoji_vue__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _Picker_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Picker.vue */ "./src/components/Picker.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Picker", function() { return _Picker_vue__WEBPACK_IMPORTED_MODULE_6__["default"]; });









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
/*! exports provided: Picker, Emoji, Anchors, Preview, Search, Category, Skins, EmojiIndex, EmojiView, EmojiData, sanitize, uncompress, store, frequently */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/store */ "./src/utils/store.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "store", function() { return _utils_store__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/data */ "./src/utils/data.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uncompress", function() { return _utils_data__WEBPACK_IMPORTED_MODULE_1__["uncompress"]; });

/* harmony import */ var _utils_frequently__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/frequently */ "./src/utils/frequently.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "frequently", function() { return _utils_frequently__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ "./src/components/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Picker", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["Picker"]; });

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
/*! exports provided: buildSearch, uncompress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildSearch", function() { return buildSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uncompress", function() { return uncompress; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);

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
      object[name] = value && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(value) === 'object' ? deepFreeze(value) : value;
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
/* harmony import */ var _frequently__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./frequently */ "./src/utils/frequently.js");





var SHEET_COLUMNS = 57;
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

      var allCategories = this._data.categories;

      if (this._include) {
        // Remove categories that are not in the include list.
        allCategories = allCategories.filter(function (item) {
          return _this._include.includes(item.id);
        }); // Sort categories according to the include list.

        allCategories = allCategories.sort(function (a, b) {
          var indexA = _this._include.indexOf(a.id);

          var indexB = _this._include.indexOf(b.id);

          if (indexA < indexB) {
            return -1;
          }

          if (indexA > indexB) {
            return 1;
          }

          return 0;
        });
      }

      allCategories.forEach(function (categoryData) {
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
    key: "firstEmoji",
    value: function firstEmoji() {
      var emoji = this._emojis[Object.keys(this._emojis)[0]];

      if (!emoji) {
        throw new Error('Can not get first emoji');
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
        skinData['skin_tone'] = parseInt(skinIdx) + 1;

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
  }, {
    key: "ariaLabel",
    value: function ariaLabel() {
      return [this.native].concat(this.short_names).filter(Boolean).join(', ');
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
    this.ariaLabel = emoji.ariaLabel();
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
            // to scale with 0.95 factor to have them look approximately
            // the same size as image-based emoji.
            fontSize: Math.round(emojiSize * 0.95 * 10) / 10 + 'px'
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

/***/ "./src/utils/picker.js":
/*!*****************************!*\
  !*** ./src/utils/picker.js ***!
  \*****************************/
/*! exports provided: PickerView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickerView", function() { return PickerView; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);



var PickerView =
/*#__PURE__*/
function () {
  function PickerView(pickerComponent) {
    var _this$_categories;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, PickerView);

    this._vm = pickerComponent;
    this._data = pickerComponent.data;
    this._perLine = pickerComponent.perLine;
    this._categories = [];

    (_this$_categories = this._categories).push.apply(_this$_categories, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(this._data.categories()));

    this._categories = this._categories.filter(function (category) {
      return category.emojis.length > 0;
    });
    this._categories[0].first = true;
    Object.freeze(this._categories);
    this.activeCategory = this._categories[0];
    this.searchEmojis = null; // Preview emoji, shown on mouse over or when we move
    // with arrow keys.

    this.previewEmoji = null; // Indexes are used to keep the position when moving
    // with arrows: current category and current emoji
    // inside the category.

    this.previewEmojiCategoryIdx = 0;
    this.previewEmojiIdx = -1;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(PickerView, [{
    key: "onScroll",
    value: function onScroll() {
      var scrollElement = this._vm.$refs.scroll;
      var scrollTop = scrollElement.scrollTop;
      var activeCategory = this.filteredCategories[0];

      for (var i = 0, l = this.filteredCategories.length; i < l; i++) {
        var category = this.filteredCategories[i];

        var component = this._vm.getCategoryComponent(i); // The `-50` offset switches active category (selected in the
        // anchors bar) a bit eariler, before it actually reaches the top.


        if (component && component.$el.offsetTop - 50 > scrollTop) {
          break;
        }

        activeCategory = category;
      }

      this.activeCategory = activeCategory;
    }
  }, {
    key: "onAnchorClick",
    value: function onAnchorClick(category) {
      var _this = this;

      if (this.searchEmojis) {
        // No categories are shown when search is active.
        return;
      }

      var i = this.filteredCategories.indexOf(category);

      var component = this._vm.getCategoryComponent(i);

      var scrollToComponent = function scrollToComponent() {
        if (component) {
          var top = component.$el.offsetTop;

          if (category.first) {
            top = 0;
          }

          _this._vm.$refs.scroll.scrollTop = top;
        }
      };

      if (this._vm.infiniteScroll) {
        scrollToComponent();
      } else {
        this.activeCategory = this.filteredCategories[i];
      }
    }
  }, {
    key: "onSearch",
    value: function onSearch(value) {
      var emojis = this._data.search(value, this.maxSearchResults);

      this.searchEmojis = emojis;
      this.previewEmojiCategoryIdx = 0;
      this.previewEmojiIdx = 0;
      this.updatePreviewEmoji();
    }
  }, {
    key: "onEmojiEnter",
    value: function onEmojiEnter(emoji) {
      this.previewEmoji = emoji;
      this.previewEmojiIdx = -1;
      this.previewEmojiCategoryIdx = -1;
    }
  }, {
    key: "onEmojiLeave",
    value: function onEmojiLeave(emoji) {
      this.previewEmoji = null;
    }
  }, {
    key: "onArrowLeft",
    value: function onArrowLeft() {
      // Moving left, decrease emoji index.
      if (this.previewEmojiIdx > 0) {
        this.previewEmojiIdx -= 1;
      } else {
        // If emoji index is zero, go to the previous category.
        this.previewEmojiCategoryIdx -= 1;

        if (this.previewEmojiCategoryIdx < 0) {
          // If we reached first category, keep it.
          this.previewEmojiCategoryIdx = 0;
        } else {
          // Update emoji index - we moved to the previous category,
          // get the last emoji in it.
          this.previewEmojiIdx = this.filteredCategories[this.previewEmojiCategoryIdx].emojis.length - 1;
        }
      }

      this.updatePreviewEmoji();
    }
  }, {
    key: "onArrowRight",
    value: function onArrowRight() {
      if (this.previewEmojiIdx < this.emojisLength(this.previewEmojiCategoryIdx) - 1) {
        // Moving right within category, increase emoji index.
        this.previewEmojiIdx += 1;
      } else {
        // Go to the next category.
        this.previewEmojiCategoryIdx += 1;

        if (this.previewEmojiCategoryIdx >= this.filteredCategories.length) {
          // If we reached the last category - keep it.
          this.previewEmojiCategoryIdx = this.filteredCategories.length - 1;
        } else {
          // If we moved to the next category, update emoji index to the
          // first emoji in the new category.
          this.previewEmojiIdx = 0;
        }
      }

      this.updatePreviewEmoji();
    }
  }, {
    key: "onArrowDown",
    value: function onArrowDown() {
      // If we are out of the emoji control (index is -1), select the first
      // emoji in the first category by calling `onArrowRight`.
      if (this.previewEmojiIdx == -1) {
        return this.onArrowRight();
      }

      var categoryLength = this.filteredCategories[this.previewEmojiCategoryIdx].emojis.length; // When moving down, we can move `_perLine` icons right to
      // jump to the same position in the next row.

      var diff = this._perLine; // TODO: previewCategory should match activeCategory
      // (so it would be both highlighted in UI and used
      // when we start moving with arrows after clicking
      // the category).
      // Note: probably we can alwasy take current row length
      // as a `diff` - it will fit both case of any row and
      // special case of the last row.
      // Note: it can be also easier to update indexes
      // directly here instead of calling onArrowRight.
      // Same is true for `onArrowUp`.
      // Unless if we are on the last row of the category and
      // there are less then `_perLine` emojis in it.
      // In this case we use the last row length as diff
      // so we go straight down, for example:
      //
      //   1 2 3 4 5 6
      //   7 8 9
      //   A B C D E F
      //
      // If we go down from `8`, we need to move 3 emojis right
      // to lend at `B` (and 3 is the length of the last row of
      // this category).
      // And if we used 6 instead (row length, `_perLine`), we would
      // lend up at `E`.

      if (this.previewEmojiIdx + diff > categoryLength) {
        // Calculate the last row length.
        diff = categoryLength % this._perLine;
      }

      for (var i = 0; i < diff; i++) {
        this.onArrowRight();
      }

      this.updatePreviewEmoji();
    }
  }, {
    key: "onArrowUp",
    value: function onArrowUp() {
      // Similar to `onArrowDown`, to move up we can move left
      // by `_perLine` number of emojis.
      var diff = this._perLine;

      if (this.previewEmojiIdx - diff < 0) {
        if (this.previewEmojiCategoryIdx > 0) {
          // Unless if we are on the first line of the category and
          // the last line in the previous category is shorter than
          // `_perLine`.
          // In this case we use the last row length as diff, so
          // we go straight up, for example:
          //
          //   1 2 3 4 5
          //   6 7 8
          //   9 A B C D
          //
          // If we go up from `A`, we need to move 3 emojis left to get
          // to `7` (and 3 is the length of the last row of the previous
          // category).
          var prevCategoryLastRowLength = this.filteredCategories[this.previewEmojiCategoryIdx - 1].emojis.length % this._perLine; // diff = this.previewEmojiIdx + prevCategoryLastRowLength

          diff = prevCategoryLastRowLength;
        } else {
          diff = 0;
        }
      }

      for (var i = 0; i < diff; i++) {
        this.onArrowLeft();
      }

      this.updatePreviewEmoji();
    }
  }, {
    key: "updatePreviewEmoji",
    value: function updatePreviewEmoji() {
      var _this2 = this;

      this.previewEmoji = this.filteredCategories[this.previewEmojiCategoryIdx].emojis[this.previewEmojiIdx];

      this._vm.$nextTick(function () {
        // Scroll the view if the `previewEmoji` goes out of the visible area.
        var scrollEl = _this2._vm.$refs.scroll; // Note: it would be more Vue-ish to mark all emojis with `ref`s
        // and then do something similar here to what we do in the
        // `getCategories` instead of using `querySelector` directly,
        // but I am not sure if having many refs would affect the performance
        // (it might, so I use `querySelector` for now).

        var emojiEl = scrollEl.querySelector('.emoji-mart-emoji-selected');
        var scrollHeight = scrollEl.offsetTop - scrollEl.offsetHeight;

        if (emojiEl && emojiEl.offsetTop + emojiEl.offsetHeight > scrollHeight + scrollEl.scrollTop) {
          scrollEl.scrollTop += emojiEl.offsetHeight;
        }

        if (emojiEl && emojiEl.offsetTop < scrollEl.scrollTop) {
          scrollEl.scrollTop -= emojiEl.offsetHeight;
        }
      });
    }
  }, {
    key: "emojisLength",
    value: function emojisLength(categoryIdx) {
      if (categoryIdx == -1) {
        return 0;
      }

      return this.filteredCategories[categoryIdx].emojis.length;
    }
  }, {
    key: "allCategories",
    get: function get() {
      return this._categories;
    }
  }, {
    key: "filteredCategories",
    get: function get() {
      if (this.searchEmojis) {
        return [{
          id: 'search',
          name: 'Search',
          emojis: this.searchEmojis
        }];
      }

      return this._categories.filter(function (category) {
        var hasEmojis = category.emojis.length > 0;
        return hasEmojis;
      });
    }
  }, {
    key: "previewEmojiCategory",
    get: function get() {
      if (this.previewEmojiCategoryIdx >= 0) {
        return this.filteredCategories[this.previewEmojiCategoryIdx];
      }

      return null;
    }
  }]);

  return PickerView;
}();

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
  },
  tag: {
    type: String,
    default: 'span'
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

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9FbW9qaU1hcnQvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0Vtb2ppTWFydC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0U3ByZWFkLmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvc3JjL2NvbXBvbmVudHMvRW1vamkudnVlIiwid2VicGFjazovL0Vtb2ppTWFydC9zcmMvY29tcG9uZW50cy9QaWNrZXIudnVlIiwid2VicGFjazovL0Vtb2ppTWFydC9zcmMvY29tcG9uZW50cy9hbmNob3JzLnZ1ZSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvc3JjL2NvbXBvbmVudHMvY2F0ZWdvcnkudnVlIiwid2VicGFjazovL0Vtb2ppTWFydC9zcmMvY29tcG9uZW50cy9wcmV2aWV3LnZ1ZSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvc3JjL2NvbXBvbmVudHMvc2VhcmNoLnZ1ZSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvc3JjL2NvbXBvbmVudHMvc2tpbnMudnVlIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL0Vtb2ppLnZ1ZT8wNTQ1Iiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL1BpY2tlci52dWU/YzNkNyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9hbmNob3JzLnZ1ZT8zNGRhIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL2NhdGVnb3J5LnZ1ZT80MjRhIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL3ByZXZpZXcudnVlP2Y3MTgiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvc2VhcmNoLnZ1ZT8yZDJiIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL3NraW5zLnZ1ZT9jMzQ5Iiwid2VicGFjazovL0Vtb2ppTWFydC8uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvRW1vamkudnVlIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL0Vtb2ppLnZ1ZT83YTM4Iiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL0Vtb2ppLnZ1ZT85NGFkIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL1BpY2tlci52dWUiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvUGlja2VyLnZ1ZT9jODI3Iiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL1BpY2tlci52dWU/ZjBmMiIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9hbmNob3JzLnZ1ZSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9hbmNob3JzLnZ1ZT9hY2NhIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL2FuY2hvcnMudnVlPzFiOTgiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvY2F0ZWdvcnkudnVlIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL2NhdGVnb3J5LnZ1ZT8yMzk1Iiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL2NhdGVnb3J5LnZ1ZT83M2I1Iiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL3ByZXZpZXcudnVlIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL3ByZXZpZXcudnVlPzIzYTkiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvcHJldmlldy52dWU/ZTM1OSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9zZWFyY2gudnVlIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL3NlYXJjaC52dWU/MTNmMSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9zZWFyY2gudnVlP2U1ODYiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvc2tpbnMudnVlIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL3NraW5zLnZ1ZT9kN2M0Iiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL3NraW5zLnZ1ZT85OTVlIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvcG9seWZpbGxzL3N0cmluZ0Zyb21Db2RlUG9pbnQuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL3N2Z3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL3V0aWxzL2RhdGEuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL3V0aWxzL2Vtb2ppLWRhdGEuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL3V0aWxzL2ZyZXF1ZW50bHkuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL3V0aWxzL2luZGV4LmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy91dGlscy9waWNrZXIuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL3V0aWxzL3NoYXJlZC1wcm9wcy5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvdXRpbHMvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL3ZlbmRvci9yYWYtcG9seWZpbGwuanMiXSwibmFtZXMiOlsiX1N0cmluZyIsIlN0cmluZyIsImZyb21Db2RlUG9pbnQiLCJzdHJpbmdGcm9tQ29kZVBvaW50IiwiTUFYX1NJWkUiLCJjb2RlVW5pdHMiLCJoaWdoU3Vycm9nYXRlIiwibG93U3Vycm9nYXRlIiwiaW5kZXgiLCJsZW5ndGgiLCJhcmd1bWVudHMiLCJyZXN1bHQiLCJjb2RlUG9pbnQiLCJOdW1iZXIiLCJpc0Zpbml0ZSIsIk1hdGgiLCJmbG9vciIsIlJhbmdlRXJyb3IiLCJwdXNoIiwiZnJvbUNoYXJDb2RlIiwiYXBwbHkiLCJTVkdzIiwiYWN0aXZpdHkiLCJjdXN0b20iLCJmbGFncyIsImZvb2RzIiwibmF0dXJlIiwib2JqZWN0cyIsInNtaWxleXMiLCJwZW9wbGUiLCJwbGFjZXMiLCJyZWNlbnQiLCJzeW1ib2xzIiwibWFwcGluZyIsIm5hbWUiLCJ1bmlmaWVkIiwibm9uX3F1YWxpZmllZCIsImhhc19pbWdfYXBwbGUiLCJoYXNfaW1nX2dvb2dsZSIsImhhc19pbWdfdHdpdHRlciIsImhhc19pbWdfZmFjZWJvb2siLCJrZXl3b3JkcyIsInNoZWV0IiwiZW1vdGljb25zIiwidGV4dCIsInNob3J0X25hbWVzIiwiYWRkZWRfaW4iLCJidWlsZFNlYXJjaCIsImVtb2ppIiwic2VhcmNoIiwiYWRkVG9TZWFyY2giLCJzdHJpbmdzIiwic3BsaXQiLCJBcnJheSIsImlzQXJyYXkiLCJmb3JFYWNoIiwic3RyaW5nIiwicyIsInRvTG93ZXJDYXNlIiwiaW5kZXhPZiIsImpvaW4iLCJkZWVwRnJlZXplIiwib2JqZWN0IiwicHJvcE5hbWVzIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsInZhbHVlIiwiZnJlZXplIiwidW5jb21wcmVzcyIsImRhdGEiLCJjb21wcmVzc2VkIiwiaWQiLCJlbW9qaXMiLCJrZXkiLCJ1bnNoaWZ0Iiwic2hlZXRfeCIsInNoZWV0X3kiLCJ0b0ZpeGVkIiwiU0hFRVRfQ09MVU1OUyIsIkNPTE9OU19SRUdFWCIsIlNLSU5TIiwiRW1vamlJbmRleCIsImVtb2ppc1RvU2hvd0ZpbHRlciIsImluY2x1ZGUiLCJleGNsdWRlIiwicmVjZW50TGVuZ3RoIiwiX2RhdGEiLCJfZW1vamlzRmlsdGVyIiwiX2luY2x1ZGUiLCJfZXhjbHVkZSIsIl9jdXN0b20iLCJfcmVjZW50IiwiZnJlcXVlbnRseSIsImdldCIsIl9lbW9qaXMiLCJfbmF0aXZlRW1vamlzIiwiX2Vtb3RpY29ucyIsIl9jYXRlZ29yaWVzIiwiX3JlY2VudENhdGVnb3J5IiwiX2N1c3RvbUNhdGVnb3J5IiwiX3NlYXJjaEluZGV4IiwiYnVpbGRJbmRleCIsImFsbENhdGVnb3JpZXMiLCJjYXRlZ29yaWVzIiwiZmlsdGVyIiwiaXRlbSIsImluY2x1ZGVzIiwic29ydCIsImEiLCJiIiwiaW5kZXhBIiwiaW5kZXhCIiwiY2F0ZWdvcnlEYXRhIiwiaXNDYXRlZ29yeU5lZWRlZCIsImNhdGVnb3J5IiwiZW1vamlJZCIsImFkZEVtb2ppIiwiY3VzdG9tRW1vamkiLCJhZGRDdXN0b21FbW9qaSIsIm1hcCIsImhhc0Vtb2ppIiwic2tpbiIsIm1hdGNoZXMiLCJtYXRjaCIsInBhcnNlSW50IiwiYWxpYXNlcyIsImhhc093blByb3BlcnR5IiwiZW1vamlPYmplY3QiLCJnZXRTa2luIiwiRXJyb3IiLCJrZXlzIiwidW5pY29kZUVtb2ppIiwibWF4UmVzdWx0cyIsInZhbHVlcyIsImFsbFJlc3VsdHMiLCJjdXJyZW50SW5kZXgiLCJjaGFySW5kZXgiLCJjaGFyIiwicmVzdWx0cyIsInNjb3JlcyIsInN1YiIsInN1YnN0ciIsInN1YkluZGV4Iiwic2NvcmUiLCJhU2NvcmUiLCJiU2NvcmUiLCJpbnRlcnNlY3QiLCJzbGljZSIsImVtb2ppRGF0YSIsImFzc2lnbiIsIkVtb2ppRGF0YSIsImlzRW1vamlOZWVkZWQiLCJuYXRpdmUiLCJfc2tpbnMiLCJpZHgiLCJlbW90aWNvbiIsImNhdGVnb3J5X2lkIiwiaXNJbmNsdWRlZCIsImlzRXhjbHVkZWQiLCJza2luX3ZhcmlhdGlvbnMiLCJza2luSWR4Iiwic2tpbktleSIsInZhcmlhdGlvbkRhdGEiLCJza2luRGF0YSIsImsiLCJfc2FuaXRpemVkIiwic2FuaXRpemUiLCJzaG9ydF9uYW1lIiwibXVsdGlwbHkiLCJ4Iiwicm91bmQiLCJ5IiwiY29uY2F0IiwiQm9vbGVhbiIsIkVtb2ppVmlldyIsInNldCIsImZhbGxiYWNrIiwiZW1vamlUb29sdGlwIiwiZW1vamlTaXplIiwiX2Vtb2ppIiwiX25hdGl2ZSIsIl9za2luIiwiX3NldCIsIl9mYWxsYmFjayIsImNhblJlbmRlciIsIl9jYW5SZW5kZXIiLCJjc3NDbGFzcyIsIl9jc3NDbGFzcyIsImNzc1N0eWxlIiwiX2Nzc1N0eWxlIiwiY29udGVudCIsIl9jb250ZW50IiwidGl0bGUiLCJhcmlhTGFiZWwiLCJfaXNDdXN0b20iLCJfaXNOYXRpdmUiLCJfaGFzRW1vamkiLCJfZW1vamlUeXBlIiwiYmFja2dyb3VuZEltYWdlIiwiZ2V0RW1vamkiLCJpbWFnZVVybCIsImJhY2tncm91bmRTaXplIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJnZXRQb3NpdGlvbiIsImZvbnRTaXplIiwiaGFzSW1hZ2UiLCJ1bmRlZmluZWQiLCJza2luX3RvbmUiLCJjb2xvbnMiLCJ1bmlmaWVkVG9OYXRpdmUiLCJERUZBVUxUUyIsImluaXRpYWxpemVkIiwiZGVmYXVsdHMiLCJpbml0Iiwic3RvcmUiLCJhZGQiLCJtYXhOdW1iZXIiLCJkZWZhdWx0TGVuZ3RoIiwibWluIiwiaSIsInF1YW50aXR5IiwiZnJlcXVlbnRseUtleXMiLCJzb3J0ZWQiLCJyZXZlcnNlIiwic2xpY2VkIiwibGFzdCIsInBvcCIsInVuaWNvZGVzIiwiY29kZVBvaW50cyIsInUiLCJ1bmlxIiwiYXJyIiwicmVkdWNlIiwiYWNjIiwidW5pcUEiLCJ1bmlxQiIsImRlZXBNZXJnZSIsIm8iLCJvcmlnaW5hbFZhbHVlIiwibWVhc3VyZVNjcm9sbGJhciIsImRvY3VtZW50IiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwib3ZlcmZsb3ciLCJwb3NpdGlvbiIsInRvcCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInNjcm9sbGJhcldpZHRoIiwib2Zmc2V0V2lkdGgiLCJjbGllbnRXaWR0aCIsInJlbW92ZUNoaWxkIiwiUGlja2VyVmlldyIsInBpY2tlckNvbXBvbmVudCIsIl92bSIsIl9wZXJMaW5lIiwicGVyTGluZSIsImZpcnN0IiwiYWN0aXZlQ2F0ZWdvcnkiLCJzZWFyY2hFbW9qaXMiLCJwcmV2aWV3RW1vamkiLCJwcmV2aWV3RW1vamlDYXRlZ29yeUlkeCIsInByZXZpZXdFbW9qaUlkeCIsInNjcm9sbEVsZW1lbnQiLCIkcmVmcyIsInNjcm9sbCIsInNjcm9sbFRvcCIsImZpbHRlcmVkQ2F0ZWdvcmllcyIsImwiLCJjb21wb25lbnQiLCJnZXRDYXRlZ29yeUNvbXBvbmVudCIsIiRlbCIsIm9mZnNldFRvcCIsInNjcm9sbFRvQ29tcG9uZW50IiwiaW5maW5pdGVTY3JvbGwiLCJtYXhTZWFyY2hSZXN1bHRzIiwidXBkYXRlUHJldmlld0Vtb2ppIiwiZW1vamlzTGVuZ3RoIiwib25BcnJvd1JpZ2h0IiwiY2F0ZWdvcnlMZW5ndGgiLCJkaWZmIiwicHJldkNhdGVnb3J5TGFzdFJvd0xlbmd0aCIsIm9uQXJyb3dMZWZ0IiwiJG5leHRUaWNrIiwic2Nyb2xsRWwiLCJlbW9qaUVsIiwicXVlcnlTZWxlY3RvciIsInNjcm9sbEhlaWdodCIsIm9mZnNldEhlaWdodCIsImNhdGVnb3J5SWR4IiwiaGFzRW1vamlzIiwiRW1vamlQcm9wcyIsInR5cGUiLCJkZWZhdWx0IiwidG9vbHRpcCIsIkZ1bmN0aW9uIiwicmVxdWlyZWQiLCJzaXplIiwidGFnIiwiUGlja2VyUHJvcHMiLCJjb2xvciIsImRlZmF1bHRTa2luIiwiYXV0b0ZvY3VzIiwiaTE4biIsInNob3dQcmV2aWV3Iiwic2hvd1NlYXJjaCIsInNob3dDYXRlZ29yaWVzIiwic2hvd1NraW5Ub25lcyIsInBpY2tlclN0eWxlcyIsIk5BTUVTUEFDRSIsIl9KU09OIiwiSlNPTiIsImlzTG9jYWxTdG9yYWdlU3VwcG9ydGVkIiwid2luZG93IiwiZ2V0dGVyIiwic2V0dGVyIiwic2V0SGFuZGxlcnMiLCJoYW5kbGVycyIsInNldE5hbWVzcGFjZSIsIm5hbWVzcGFjZSIsInVwZGF0ZSIsInN0YXRlIiwibG9jYWxTdG9yYWdlIiwic3RyaW5naWZ5IiwiZSIsInBhcnNlIiwiaXNXaW5kb3dBdmFpbGFibGUiLCJsYXN0VGltZSIsInZlbmRvcnMiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImNhbGxiYWNrIiwiZWxlbWVudCIsImN1cnJUaW1lIiwiRGF0ZSIsImdldFRpbWUiLCJ0aW1lVG9DYWxs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QUFDYixXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN6SEE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdENBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFD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cnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJFbW9qaU1hcnRcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiRW1vamlNYXJ0XCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFycjJbaV0gPSBhcnJbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycjI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRob3V0SG9sZXM7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2s7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzczsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpdGVyKSA9PT0gXCJbb2JqZWN0IEFyZ3VtZW50c11cIikgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheTsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVTcHJlYWQ7IiwidmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcIi4vZGVmaW5lUHJvcGVydHlcIik7XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307XG4gICAgdmFyIG93bktleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuXG4gICAgaWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBvd25LZXlzID0gb3duS2V5cy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwgc3ltKS5lbnVtZXJhYmxlO1xuICAgICAgfSkpO1xuICAgIH1cblxuICAgIG93bktleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0U3ByZWFkOyIsInZhciBhcnJheVdpdGhvdXRIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aG91dEhvbGVzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5XCIpO1xuXG52YXIgbm9uSXRlcmFibGVTcHJlYWQgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVNwcmVhZFwiKTtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90b0NvbnN1bWFibGVBcnJheTsiLCJmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YyID0gZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mMiA9IGZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZjIob2JqKTsgfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIF90eXBlb2YyKFN5bWJvbC5pdGVyYXRvcikgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIF90eXBlb2YyKG9iaik7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IF90eXBlb2YyKG9iaik7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCI8dGVtcGxhdGU+XG4gIDxjb21wb25lbnRcbiAgICA6aXM9XCJ0YWdcIlxuICAgIHYtaWY9XCJ2aWV3LmNhblJlbmRlclwiXG4gICAgOnRpdGxlPVwidmlldy50aXRsZVwiXG4gICAgOmFyaWEtbGFiZWw9XCJ2aWV3LmFyaWFMYWJlbFwiXG4gICAgOmRhdGEtdGl0bGU9XCJ0aXRsZVwiXG4gICAgY2xhc3M9XCJlbW9qaS1tYXJ0LWVtb2ppXCJcbiAgICBAbW91c2VlbnRlcj1cIm9uTW91c2VFbnRlclwiXG4gICAgQG1vdXNlbGVhdmU9XCJvbk1vdXNlTGVhdmVcIlxuICAgIEBjbGljaz1cIm9uQ2xpY2tcIlxuICA+XG4gICAgPHNwYW4gOmNsYXNzPVwidmlldy5jc3NDbGFzc1wiIDpzdHlsZT1cInZpZXcuY3NzU3R5bGVcIj57e1xuICAgICAgdmlldy5jb250ZW50XG4gICAgfX08L3NwYW4+XG4gIDwvY29tcG9uZW50PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IEVtb2ppUHJvcHMgfSBmcm9tICcuLi91dGlscy9zaGFyZWQtcHJvcHMnXG5pbXBvcnQgeyBFbW9qaVZpZXcgfSBmcm9tICcuLi91dGlscy9lbW9qaS1kYXRhJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiB7XG4gICAgLi4uRW1vamlQcm9wcyxcbiAgICBkYXRhOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIHZpZXcoKSB7XG4gICAgICByZXR1cm4gbmV3IEVtb2ppVmlldyhcbiAgICAgICAgdGhpcy5lbW9qaU9iamVjdCxcbiAgICAgICAgdGhpcy5za2luLFxuICAgICAgICB0aGlzLnNldCxcbiAgICAgICAgdGhpcy5uYXRpdmUsXG4gICAgICAgIHRoaXMuZmFsbGJhY2ssXG4gICAgICAgIHRoaXMudG9vbHRpcCxcbiAgICAgICAgdGhpcy5zaXplLFxuICAgICAgKVxuICAgIH0sXG4gICAgc2FuaXRpemVkRGF0YSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmVtb2ppT2JqZWN0Ll9zYW5pdGl6ZWRcbiAgICB9LFxuICAgIHRpdGxlKCkge1xuICAgICAgcmV0dXJuIHRoaXMudG9vbHRpcCA/IHRoaXMuZW1vamlPYmplY3Quc2hvcnRfbmFtZSA6IG51bGxcbiAgICB9LFxuICAgIGVtb2ppT2JqZWN0KCkge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLmVtb2ppID09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEuZmluZEVtb2ppKHRoaXMuZW1vamkpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5lbW9qaVxuICAgICAgfVxuICAgIH0sXG4gIH0sXG4gIGNyZWF0ZWQoKSB7fSxcbiAgbWV0aG9kczoge1xuICAgIG9uQ2xpY2soKSB7XG4gICAgICB0aGlzLiRlbWl0KCdjbGljaycsIHRoaXMuZW1vamlPYmplY3QpXG4gICAgfSxcbiAgICBvbk1vdXNlRW50ZXIoKSB7XG4gICAgICB0aGlzLiRlbWl0KCdtb3VzZWVudGVyJywgdGhpcy5lbW9qaU9iamVjdClcbiAgICB9LFxuICAgIG9uTW91c2VMZWF2ZSgpIHtcbiAgICAgIHRoaXMuJGVtaXQoJ21vdXNlbGVhdmUnLCB0aGlzLmVtb2ppT2JqZWN0KVxuICAgIH0sXG4gIH0sXG59XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPHNlY3Rpb24gY2xhc3M9XCJlbW9qaS1tYXJ0IGVtb2ppLW1hcnQtc3RhdGljXCIgOnN0eWxlPVwiY3VzdG9tU3R5bGVzXCI+XG4gICAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtYmFyIGVtb2ppLW1hcnQtYmFyLWFuY2hvcnNcIiB2LWlmPVwic2hvd0NhdGVnb3JpZXNcIj5cbiAgICAgIDxhbmNob3JzXG4gICAgICAgIDpkYXRhPVwiZGF0YVwiXG4gICAgICAgIDppMThuPVwibWVyZ2VkSTE4blwiXG4gICAgICAgIDpjb2xvcj1cImNvbG9yXCJcbiAgICAgICAgOmNhdGVnb3JpZXM9XCJ2aWV3LmFsbENhdGVnb3JpZXNcIlxuICAgICAgICA6YWN0aXZlLWNhdGVnb3J5PVwidmlldy5hY3RpdmVDYXRlZ29yeVwiXG4gICAgICAgIEBjbGljaz1cIm9uQW5jaG9yQ2xpY2tcIlxuICAgICAgLz5cbiAgICA8L2Rpdj5cblxuICAgIDxzbG90XG4gICAgICBuYW1lPVwic2VhcmNoVGVtcGxhdGVcIlxuICAgICAgOmRhdGE9XCJkYXRhXCJcbiAgICAgIDppMThuPVwiaTE4blwiXG4gICAgICA6YXV0by1mb2N1cz1cImF1dG9Gb2N1c1wiXG4gICAgICA6b24tc2VhcmNoPVwib25TZWFyY2hcIlxuICAgID5cbiAgICAgIDxzZWFyY2hcbiAgICAgICAgdi1pZj1cInNob3dTZWFyY2hcIlxuICAgICAgICByZWY9XCJzZWFyY2hcIlxuICAgICAgICA6ZGF0YT1cImRhdGFcIlxuICAgICAgICA6aTE4bj1cIm1lcmdlZEkxOG5cIlxuICAgICAgICA6YXV0by1mb2N1cz1cImF1dG9Gb2N1c1wiXG4gICAgICAgIDpvbi1zZWFyY2g9XCJvblNlYXJjaFwiXG4gICAgICAgIEBzZWFyY2g9XCJvblNlYXJjaFwiXG4gICAgICAgIEBhcnJvd0xlZnQ9XCJvbkFycm93TGVmdFwiXG4gICAgICAgIEBhcnJvd1JpZ2h0PVwib25BcnJvd1JpZ2h0XCJcbiAgICAgICAgQGFycm93RG93bj1cIm9uQXJyb3dEb3duXCJcbiAgICAgICAgQGFycm93VXA9XCJvbkFycm93VXBcIlxuICAgICAgICBAZW50ZXI9XCJvbkVudGVyXCJcbiAgICAgIC8+XG4gICAgPC9zbG90PlxuXG4gICAgPGRpdlxuICAgICAgcm9sZT1cInRhYnBhbmVsXCJcbiAgICAgIGNsYXNzPVwiZW1vamktbWFydC1zY3JvbGxcIlxuICAgICAgcmVmPVwic2Nyb2xsXCJcbiAgICAgIEBzY3JvbGw9XCJvblNjcm9sbFwiXG4gICAgPlxuICAgICAgPGRpdlxuICAgICAgICBpZD1cImVtb2ppLW1hcnQtbGlzdFwiXG4gICAgICAgIHJlZj1cInNjcm9sbENvbnRlbnRcIlxuICAgICAgICByb2xlPVwibGlzdGJveFwiXG4gICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJ0cnVlXCJcbiAgICAgID5cbiAgICAgICAgPGNhdGVnb3J5XG4gICAgICAgICAgdi1mb3I9XCIoY2F0ZWdvcnksIGlkeCkgaW4gdmlldy5maWx0ZXJlZENhdGVnb3JpZXNcIlxuICAgICAgICAgIHYtc2hvdz1cImluZmluaXRlU2Nyb2xsIHx8IGNhdGVnb3J5ID09IHZpZXcuYWN0aXZlQ2F0ZWdvcnlcIlxuICAgICAgICAgIDpyZWY9XCInY2F0ZWdvcmllc18nICsgaWR4XCJcbiAgICAgICAgICA6a2V5PVwiY2F0ZWdvcnkuaWRcIlxuICAgICAgICAgIDpkYXRhPVwiZGF0YVwiXG4gICAgICAgICAgOmkxOG49XCJtZXJnZWRJMThuXCJcbiAgICAgICAgICA6aWQ9XCJjYXRlZ29yeS5pZFwiXG4gICAgICAgICAgOm5hbWU9XCJjYXRlZ29yeS5uYW1lXCJcbiAgICAgICAgICA6ZW1vamlzPVwiY2F0ZWdvcnkuZW1vamlzXCJcbiAgICAgICAgICA6ZW1vamktcHJvcHM9XCJlbW9qaVByb3BzXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPHNsb3RcbiAgICAgIG5hbWU9XCJwcmV2aWV3VGVtcGxhdGVcIlxuICAgICAgOmRhdGE9XCJkYXRhXCJcbiAgICAgIDp0aXRsZT1cInRpdGxlXCJcbiAgICAgIDplbW9qaT1cInZpZXcucHJldmlld0Vtb2ppXCJcbiAgICAgIDppZGxlLWVtb2ppPVwiaWRsZUVtb2ppXCJcbiAgICAgIDpzaG93LXNraW4tdG9uZXM9XCJzaG93U2tpblRvbmVzXCJcbiAgICAgIDplbW9qaS1wcm9wcz1cImVtb2ppUHJvcHNcIlxuICAgICAgOnNraW4tcHJvcHM9XCJza2luUHJvcHNcIlxuICAgICAgOm9uLXNraW4tY2hhbmdlPVwib25Ta2luQ2hhbmdlXCJcbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1iYXIgZW1vamktbWFydC1iYXItcHJldmlld1wiIHYtaWY9XCJzaG93UHJldmlld1wiPlxuICAgICAgICA8cHJldmlld1xuICAgICAgICAgIDpkYXRhPVwiZGF0YVwiXG4gICAgICAgICAgOnRpdGxlPVwidGl0bGVcIlxuICAgICAgICAgIDplbW9qaT1cInZpZXcucHJldmlld0Vtb2ppXCJcbiAgICAgICAgICA6aWRsZS1lbW9qaT1cImlkbGVFbW9qaVwiXG4gICAgICAgICAgOnNob3ctc2tpbi10b25lcz1cInNob3dTa2luVG9uZXNcIlxuICAgICAgICAgIDplbW9qaS1wcm9wcz1cImVtb2ppUHJvcHNcIlxuICAgICAgICAgIDpza2luLXByb3BzPVwic2tpblByb3BzXCJcbiAgICAgICAgICA6b24tc2tpbi1jaGFuZ2U9XCJvblNraW5DaGFuZ2VcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9zbG90PlxuICA8L3NlY3Rpb24+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0ICcuLi92ZW5kb3IvcmFmLXBvbHlmaWxsJ1xuaW1wb3J0IHN0b3JlIGZyb20gJy4uL3V0aWxzL3N0b3JlJ1xuaW1wb3J0IGZyZXF1ZW50bHkgZnJvbSAnLi4vdXRpbHMvZnJlcXVlbnRseSdcbmltcG9ydCB7IGRlZXBNZXJnZSwgbWVhc3VyZVNjcm9sbGJhciB9IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgUGlja2VyUHJvcHMgfSBmcm9tICcuLi91dGlscy9zaGFyZWQtcHJvcHMnXG5pbXBvcnQgeyBQaWNrZXJWaWV3IH0gZnJvbSAnLi4vdXRpbHMvcGlja2VyJ1xuaW1wb3J0IEFuY2hvcnMgZnJvbSAnLi9hbmNob3JzLnZ1ZSdcbmltcG9ydCBDYXRlZ29yeSBmcm9tICcuL2NhdGVnb3J5LnZ1ZSdcbmltcG9ydCBQcmV2aWV3IGZyb20gJy4vcHJldmlldy52dWUnXG5pbXBvcnQgU2VhcmNoIGZyb20gJy4vc2VhcmNoLnZ1ZSdcblxuY29uc3QgSTE4TiA9IHtcbiAgc2VhcmNoOiAnU2VhcmNoJyxcbiAgbm90Zm91bmQ6ICdObyBFbW9qaSBGb3VuZCcsXG4gIGNhdGVnb3JpZXM6IHtcbiAgICBzZWFyY2g6ICdTZWFyY2ggUmVzdWx0cycsXG4gICAgcmVjZW50OiAnRnJlcXVlbnRseSBVc2VkJyxcbiAgICBzbWlsZXlzOiAnU21pbGV5cyAmIEVtb3Rpb24nLFxuICAgIHBlb3BsZTogJ1Blb3BsZSAmIEJvZHknLFxuICAgIG5hdHVyZTogJ0FuaW1hbHMgJiBOYXR1cmUnLFxuICAgIGZvb2RzOiAnRm9vZCAmIERyaW5rJyxcbiAgICBhY3Rpdml0eTogJ0FjdGl2aXR5JyxcbiAgICBwbGFjZXM6ICdUcmF2ZWwgJiBQbGFjZXMnLFxuICAgIG9iamVjdHM6ICdPYmplY3RzJyxcbiAgICBzeW1ib2xzOiAnU3ltYm9scycsXG4gICAgZmxhZ3M6ICdGbGFncycsXG4gICAgY3VzdG9tOiAnQ3VzdG9tJyxcbiAgfSxcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczoge1xuICAgIC4uLlBpY2tlclByb3BzLFxuICAgIGRhdGE6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFjdGl2ZVNraW46IHRoaXMuc2tpbiB8fCBzdG9yZS5nZXQoJ3NraW4nKSB8fCB0aGlzLmRlZmF1bHRTa2luLFxuICAgICAgdmlldzogbmV3IFBpY2tlclZpZXcodGhpcyksXG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGN1c3RvbVN0eWxlcygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRoOiB0aGlzLmNhbGN1bGF0ZVdpZHRoICsgJ3B4JyxcbiAgICAgICAgLi4udGhpcy5waWNrZXJTdHlsZXMsXG4gICAgICB9XG4gICAgfSxcbiAgICBlbW9qaVByb3BzKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmF0aXZlOiB0aGlzLm5hdGl2ZSxcbiAgICAgICAgc2tpbjogdGhpcy5hY3RpdmVTa2luLFxuICAgICAgICBzZXQ6IHRoaXMuc2V0LFxuICAgICAgICBlbW9qaVRvb2x0aXA6IHRoaXMuZW1vamlUb29sdGlwLFxuICAgICAgICBlbW9qaVNpemU6IHRoaXMuZW1vamlTaXplLFxuICAgICAgICBzZWxlY3RlZEVtb2ppOiB0aGlzLnZpZXcucHJldmlld0Vtb2ppLFxuICAgICAgICBzZWxlY3RlZEVtb2ppQ2F0ZWdvcnk6IHRoaXMudmlldy5wcmV2aWV3RW1vamlDYXRlZ29yeSxcbiAgICAgICAgb25FbnRlcjogdGhpcy5vbkVtb2ppRW50ZXIuYmluZCh0aGlzKSxcbiAgICAgICAgb25MZWF2ZTogdGhpcy5vbkVtb2ppTGVhdmUuYmluZCh0aGlzKSxcbiAgICAgICAgb25DbGljazogdGhpcy5vbkVtb2ppQ2xpY2suYmluZCh0aGlzKSxcbiAgICAgIH1cbiAgICB9LFxuICAgIHNraW5Qcm9wcygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHNraW46IHRoaXMuYWN0aXZlU2tpbixcbiAgICAgIH1cbiAgICB9LFxuICAgIGNhbGN1bGF0ZVdpZHRoKCkge1xuICAgICAgcmV0dXJuIHRoaXMucGVyTGluZSAqICh0aGlzLmVtb2ppU2l6ZSArIDEyKSArIDEyICsgMiArIG1lYXN1cmVTY3JvbGxiYXIoKVxuICAgIH0sXG4gICAgLy8gZW1vamlzUGVyUm93KCkge1xuICAgIC8vICAgY29uc3QgbGlzdEVsID0gdGhpcy4kcmVmcy5zY3JvbGxDb250ZW50XG4gICAgLy8gICBjb25zdCBlbW9qaUVsID0gbGlzdEVsLnF1ZXJ5U2VsZWN0b3IoJy5lbW9qaS1tYXJ0LWVtb2ppJylcbiAgICAvLyAgIHJldHVybiBNYXRoLmZsb29yKGxpc3RFbC5vZmZzZXRXaWR0aCAvIGVtb2ppRWwub2Zmc2V0V2lkdGgpXG4gICAgLy8gfSxcbiAgICBmaWx0ZXJlZENhdGVnb3JpZXMoKSB7XG4gICAgICByZXR1cm4gdGhpcy52aWV3LmZpbHRlcmVkQ2F0ZWdvcmllc1xuICAgIH0sXG4gICAgbWVyZ2VkSTE4bigpIHtcbiAgICAgIHJldHVybiBPYmplY3QuZnJlZXplKGRlZXBNZXJnZShJMThOLCB0aGlzLmkxOG4pKVxuICAgIH0sXG4gICAgaWRsZUVtb2ppKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5lbW9qaSh0aGlzLmVtb2ppKVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICdEZWZhdWx0IHByZXZpZXcgZW1vamkgYCcgK1xuICAgICAgICAgICAgdGhpcy5lbW9qaSArXG4gICAgICAgICAgICAnYCBpcyBub3QgYXZhaWxhYmxlLCBjaGVjayB0aGUgUGlja2VyIGBlbW9qaWAgcHJvcGVydHknLFxuICAgICAgICApXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSlcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5maXJzdEVtb2ppKClcbiAgICAgIH1cbiAgICB9LFxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgb25TY3JvbGwoKSB7XG4gICAgICBpZiAodGhpcy5pbmZpbml0ZVNjcm9sbCAmJiAhdGhpcy53YWl0aW5nRm9yUGFpbnQpIHtcbiAgICAgICAgdGhpcy53YWl0aW5nRm9yUGFpbnQgPSB0cnVlXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5vblNjcm9sbFBhaW50LmJpbmQodGhpcykpXG4gICAgICB9XG4gICAgfSxcbiAgICBvblNjcm9sbFBhaW50KCkge1xuICAgICAgdGhpcy53YWl0aW5nRm9yUGFpbnQgPSBmYWxzZVxuICAgICAgdGhpcy52aWV3Lm9uU2Nyb2xsKClcbiAgICB9LFxuICAgIG9uQW5jaG9yQ2xpY2soY2F0ZWdvcnkpIHtcbiAgICAgIHRoaXMudmlldy5vbkFuY2hvckNsaWNrKGNhdGVnb3J5KVxuICAgIH0sXG4gICAgb25TZWFyY2godmFsdWUpIHtcbiAgICAgIHRoaXMudmlldy5vblNlYXJjaCh2YWx1ZSlcbiAgICB9LFxuICAgIG9uRW1vamlFbnRlcihlbW9qaSkge1xuICAgICAgdGhpcy52aWV3Lm9uRW1vamlFbnRlcihlbW9qaSlcbiAgICB9LFxuICAgIG9uRW1vamlMZWF2ZShlbW9qaSkge1xuICAgICAgdGhpcy52aWV3Lm9uRW1vamlMZWF2ZShlbW9qaSlcbiAgICB9LFxuICAgIG9uQXJyb3dMZWZ0KCRldmVudCkge1xuICAgICAgY29uc3Qgb2xkSWR4ID0gdGhpcy52aWV3LnByZXZpZXdFbW9qaUlkeFxuICAgICAgdGhpcy52aWV3Lm9uQXJyb3dMZWZ0KClcbiAgICAgIGlmICgkZXZlbnQgJiYgdGhpcy52aWV3LnByZXZpZXdFbW9qaUlkeCAhPT0gb2xkSWR4KSB7XG4gICAgICAgIC8vIFByZXZlbnQgY3Vyc29yIG1vdmVtZW50IGluc2lkZSB0aGUgaW5wdXRcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIH1cbiAgICB9LFxuICAgIG9uQXJyb3dSaWdodCgpIHtcbiAgICAgIHRoaXMudmlldy5vbkFycm93UmlnaHQoKVxuICAgIH0sXG4gICAgb25BcnJvd0Rvd24oKSB7XG4gICAgICB0aGlzLnZpZXcub25BcnJvd0Rvd24oKVxuICAgIH0sXG4gICAgb25BcnJvd1VwKCRldmVudCkge1xuICAgICAgdGhpcy52aWV3Lm9uQXJyb3dVcCgpXG4gICAgICAvLyBQcmV2ZW50IGN1cnNvciBtb3ZlbWVudCBpbnNpZGUgdGhlIGlucHV0XG4gICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIH0sXG4gICAgb25FbnRlcihlbW9qaSkge1xuICAgICAgdGhpcy4kZW1pdCgnc2VsZWN0JywgdGhpcy52aWV3LnByZXZpZXdFbW9qaSlcbiAgICAgIGZyZXF1ZW50bHkuYWRkKHRoaXMudmlldy5wcmV2aWV3RW1vamkpXG4gICAgfSxcbiAgICBvbkVtb2ppQ2xpY2soZW1vamkpIHtcbiAgICAgIHRoaXMuJGVtaXQoJ3NlbGVjdCcsIGVtb2ppKVxuICAgICAgZnJlcXVlbnRseS5hZGQoZW1vamkpXG4gICAgfSxcbiAgICBvblNraW5DaGFuZ2Uoc2tpbikge1xuICAgICAgdGhpcy5hY3RpdmVTa2luID0gc2tpblxuICAgICAgc3RvcmUudXBkYXRlKHsgc2tpbiB9KVxuXG4gICAgICB0aGlzLiRlbWl0KCdza2luLWNoYW5nZScsIHNraW4pXG4gICAgfSxcbiAgICBnZXRDYXRlZ29yeUNvbXBvbmVudChpbmRleCkge1xuICAgICAgbGV0IGNvbXBvbmVudCA9IHRoaXMuJHJlZnNbJ2NhdGVnb3JpZXNfJyArIGluZGV4XVxuICAgICAgaWYgKGNvbXBvbmVudCAmJiAnMCcgaW4gY29tcG9uZW50KSB7XG4gICAgICAgIC8vIFZ1ZSAyIGhhcyAkcmVmcyB1bmRlciB2LWZvciBhcyBhbiBhcnJheS5cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudFsnMCddXG4gICAgICB9XG4gICAgICAvLyBWdWUgMyBkb2VzIG5vdCBzdXBwb3J0ICRyZWZzIGFzIGFycmF5LlxuICAgICAgcmV0dXJuIGNvbXBvbmVudFxuICAgIH0sXG4gIH0sXG4gIGNvbXBvbmVudHM6IHtcbiAgICBBbmNob3JzLFxuICAgIENhdGVnb3J5LFxuICAgIFByZXZpZXcsXG4gICAgU2VhcmNoLFxuICB9LFxufVxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgcm9sZT1cInRhYmxpc3RcIiBjbGFzcz1cImVtb2ppLW1hcnQtYW5jaG9yc1wiPlxuICAgIDxidXR0b25cbiAgICAgIHYtZm9yPVwiY2F0ZWdvcnkgaW4gY2F0ZWdvcmllc1wiXG4gICAgICByb2xlPVwidGFiXCJcbiAgICAgIDphcmlhLWxhYmVsPVwiY2F0ZWdvcnkubmFtZVwiXG4gICAgICA6YXJpYS1zZWxlY3RlZD1cImNhdGVnb3J5LmlkID09IGFjdGl2ZUNhdGVnb3J5LmlkXCJcbiAgICAgIDprZXk9XCJjYXRlZ29yeS5pZFwiXG4gICAgICA6Y2xhc3M9XCJ7XG4gICAgICAgICdlbW9qaS1tYXJ0LWFuY2hvcic6IHRydWUsXG4gICAgICAgICdlbW9qaS1tYXJ0LWFuY2hvci1zZWxlY3RlZCc6IGNhdGVnb3J5LmlkID09IGFjdGl2ZUNhdGVnb3J5LmlkLFxuICAgICAgfVwiXG4gICAgICA6c3R5bGU9XCJ7IGNvbG9yOiBjYXRlZ29yeS5pZCA9PSBhY3RpdmVDYXRlZ29yeS5pZCA/IGNvbG9yIDogJycgfVwiXG4gICAgICA6ZGF0YS10aXRsZT1cImkxOG4uY2F0ZWdvcmllc1tjYXRlZ29yeS5pZF1cIlxuICAgICAgQGNsaWNrPVwiJGVtaXQoJ2NsaWNrJywgY2F0ZWdvcnkpXCJcbiAgICA+XG4gICAgICA8ZGl2IGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHYtaHRtbD1cInN2Z3NbY2F0ZWdvcnkuaWRdXCIgLz5cbiAgICAgIDxzcGFuXG4gICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgIGNsYXNzPVwiZW1vamktbWFydC1hbmNob3ItYmFyXCJcbiAgICAgICAgOnN0eWxlPVwieyBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yIH1cIlxuICAgICAgPjwvc3Bhbj5cbiAgICA8L2J1dHRvbj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHN2Z3MgZnJvbSAnLi4vc3ZncydcblxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczoge1xuICAgIGkxOG46IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgY29sb3I6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICB9LFxuICAgIGNhdGVnb3JpZXM6IHtcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICBhY3RpdmVDYXRlZ29yeToge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgZGVmYXVsdCgpIHtcbiAgICAgICAgcmV0dXJuIHt9XG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5zdmdzID0gc3Znc1xuICB9LFxufVxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxzZWN0aW9uXG4gICAgOmNsYXNzPVwie1xuICAgICAgJ2Vtb2ppLW1hcnQtY2F0ZWdvcnknOiB0cnVlLFxuICAgICAgJ2Vtb2ppLW1hcnQtbm8tcmVzdWx0cyc6ICFoYXNSZXN1bHRzLFxuICAgIH1cIlxuICAgIDphcmlhLWxhYmVsPVwiaTE4bi5jYXRlZ29yaWVzW2lkXVwiXG4gICAgdi1pZj1cImlzVmlzaWJsZSAmJiAoaXNTZWFyY2ggfHwgaGFzUmVzdWx0cylcIlxuICA+XG4gICAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtY2F0ZWdvcnktbGFiZWxcIj5cbiAgICAgIDxoMyBjbGFzcz1cImVtb2ppLW1hcnQtY2F0ZWdvcnktbGFiZWxcIj57eyBpMThuLmNhdGVnb3JpZXNbaWRdIH19PC9oMz5cbiAgICA8L2Rpdj5cblxuICAgIDx0ZW1wbGF0ZSB2LWZvcj1cInsgZW1vamlPYmplY3QsIGVtb2ppVmlldyB9IGluIGVtb2ppT2JqZWN0c1wiPlxuICAgICAgPGJ1dHRvblxuICAgICAgICB2LWlmPVwiZW1vamlWaWV3LmNhblJlbmRlclwiXG4gICAgICAgIDphcmlhLWxhYmVsPVwiZW1vamlWaWV3LmFyaWFMYWJlbFwiXG4gICAgICAgIHJvbGU9XCJvcHRpb25cIlxuICAgICAgICBhcmlhLXNlbGVjdGVkPVwiZmFsc2VcIlxuICAgICAgICBhcmlhLXBvc2luc2V0PVwiMVwiXG4gICAgICAgIGFyaWEtc2V0c2l6ZT1cIjE4MTJcIlxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgOmRhdGEtdGl0bGU9XCJlbW9qaU9iamVjdC5zaG9ydF9uYW1lXCJcbiAgICAgICAgOmtleT1cImVtb2ppT2JqZWN0LmlkXCJcbiAgICAgICAgOnRpdGxlPVwiZW1vamlWaWV3LnRpdGxlXCJcbiAgICAgICAgY2xhc3M9XCJlbW9qaS1tYXJ0LWVtb2ppXCJcbiAgICAgICAgOmNsYXNzPVwiYWN0aXZlQ2xhc3MoZW1vamlPYmplY3QpXCJcbiAgICAgICAgQG1vdXNlZW50ZXI9XCJlbW9qaVByb3BzLm9uRW50ZXIoZW1vamlWaWV3LmdldEVtb2ppKCkpXCJcbiAgICAgICAgQG1vdXNlbGVhdmU9XCJlbW9qaVByb3BzLm9uTGVhdmUoZW1vamlWaWV3LmdldEVtb2ppKCkpXCJcbiAgICAgICAgQGNsaWNrPVwiZW1vamlQcm9wcy5vbkNsaWNrKGVtb2ppVmlldy5nZXRFbW9qaSgpKVwiXG4gICAgICA+XG4gICAgICAgIDxzcGFuIDpjbGFzcz1cImVtb2ppVmlldy5jc3NDbGFzc1wiIDpzdHlsZT1cImVtb2ppVmlldy5jc3NTdHlsZVwiPnt7XG4gICAgICAgICAgZW1vamlWaWV3LmNvbnRlbnRcbiAgICAgICAgfX08L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L3RlbXBsYXRlPlxuXG4gICAgPGRpdiB2LWlmPVwiIWhhc1Jlc3VsdHNcIj5cbiAgICAgIDxlbW9qaVxuICAgICAgICA6ZGF0YT1cImRhdGFcIlxuICAgICAgICBlbW9qaT1cInNsZXV0aF9vcl9zcHlcIlxuICAgICAgICA6bmF0aXZlPVwiZW1vamlQcm9wcy5uYXRpdmVcIlxuICAgICAgICA6c2tpbj1cImVtb2ppUHJvcHMuc2tpblwiXG4gICAgICAgIDpzZXQ9XCJlbW9qaVByb3BzLnNldFwiXG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtbm8tcmVzdWx0cy1sYWJlbFwiPnt7IGkxOG4ubm90Zm91bmQgfX08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9zZWN0aW9uPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IEVtb2ppVmlldyB9IGZyb20gJy4uL3V0aWxzL2Vtb2ppLWRhdGEnXG5pbXBvcnQgRW1vamkgZnJvbSAnLi9FbW9qaS52dWUnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IHtcbiAgICBkYXRhOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICAgIGkxOG46IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgaWQ6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgbmFtZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICBlbW9qaXM6IHtcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgIH0sXG4gICAgZW1vamlQcm9wczoge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGFjdGl2ZUNsYXNzOiBmdW5jdGlvbihlbW9qaU9iamVjdCkge1xuICAgICAgaWYgKCF0aGlzLmVtb2ppUHJvcHMuc2VsZWN0ZWRFbW9qaSkge1xuICAgICAgICByZXR1cm4gJydcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5lbW9qaVByb3BzLnNlbGVjdGVkRW1vamlDYXRlZ29yeSkge1xuICAgICAgICByZXR1cm4gJydcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5lbW9qaVByb3BzLnNlbGVjdGVkRW1vamkuaWQgPT0gZW1vamlPYmplY3QuaWQgJiZcbiAgICAgICAgdGhpcy5lbW9qaVByb3BzLnNlbGVjdGVkRW1vamlDYXRlZ29yeS5pZCA9PSB0aGlzLmlkXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuICdlbW9qaS1tYXJ0LWVtb2ppLXNlbGVjdGVkJ1xuICAgICAgfVxuICAgICAgcmV0dXJuICcnXG4gICAgfSxcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBpc1Zpc2libGUoKSB7XG4gICAgICByZXR1cm4gISF0aGlzLmVtb2ppc1xuICAgIH0sXG4gICAgaXNTZWFyY2goKSB7XG4gICAgICByZXR1cm4gdGhpcy5uYW1lID09ICdTZWFyY2gnXG4gICAgfSxcbiAgICBoYXNSZXN1bHRzKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZW1vamlzLmxlbmd0aCA+IDBcbiAgICB9LFxuICAgIGVtb2ppT2JqZWN0cygpIHtcbiAgICAgIHJldHVybiB0aGlzLmVtb2ppcy5tYXAoKGVtb2ppKSA9PiB7XG4gICAgICAgIGxldCBlbW9qaU9iamVjdCA9IGVtb2ppXG4gICAgICAgIGxldCBlbW9qaVZpZXcgPSBuZXcgRW1vamlWaWV3KFxuICAgICAgICAgIGVtb2ppLFxuICAgICAgICAgIHRoaXMuZW1vamlQcm9wcy5za2luLFxuICAgICAgICAgIHRoaXMuZW1vamlQcm9wcy5zZXQsXG4gICAgICAgICAgdGhpcy5lbW9qaVByb3BzLm5hdGl2ZSxcbiAgICAgICAgICB0aGlzLmVtb2ppUHJvcHMuZmFsbGJhY2ssXG4gICAgICAgICAgdGhpcy5lbW9qaVByb3BzLmVtb2ppVG9vbHRpcCxcbiAgICAgICAgICB0aGlzLmVtb2ppUHJvcHMuZW1vamlTaXplLFxuICAgICAgICApXG4gICAgICAgIHJldHVybiB7IGVtb2ppT2JqZWN0LCBlbW9qaVZpZXcgfVxuICAgICAgfSlcbiAgICB9LFxuICB9LFxuICBjb21wb25lbnRzOiB7XG4gICAgRW1vamksXG4gIH0sXG59XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cblxuPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtcHJldmlld1wiPlxuICA8dGVtcGxhdGUgdi1pZj1cImVtb2ppXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1wcmV2aWV3LWVtb2ppXCI+XG4gICAgICAgIDxlbW9qaVxuICAgICAgICAgIDpkYXRhPVwiZGF0YVwiXG4gICAgICAgICAgOmVtb2ppPVwiZW1vamlcIlxuICAgICAgICAgIDpuYXRpdmU9XCJlbW9qaVByb3BzLm5hdGl2ZVwiXG4gICAgICAgICAgOnNraW49XCJlbW9qaVByb3BzLnNraW5cIlxuICAgICAgICAgIDpzZXQ9XCJlbW9qaVByb3BzLnNldFwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtcHJldmlldy1kYXRhXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LXByZXZpZXctbmFtZVwiPnt7IGVtb2ppLm5hbWUgfX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtcHJldmlldy1zaG9ydG5hbWVzXCI+XG4gICAgICAgICAgPHNwYW4gdi1mb3I9XCJzaG9ydE5hbWUgaW4gZW1vamlTaG9ydE5hbWVzXCIgOmtleT1cInNob3J0TmFtZVwiIGNsYXNzPVwiZW1vamktbWFydC1wcmV2aWV3LXNob3J0bmFtZVwiPjp7eyBzaG9ydE5hbWUgfX06PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtcHJldmlldy1lbW90aWNvbnNcIj5cbiAgICAgICAgICA8c3BhbiB2LWZvcj1cImVtb3RpY29uIGluIGVtb2ppRW1vdGljb25zXCIgOmtleT1cImVtb3RpY29uXCIgY2xhc3M9XCJlbW9qaS1tYXJ0LXByZXZpZXctZW1vdGljb25cIj57eyBlbW90aWNvbiB9fTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgPC90ZW1wbGF0ZT5cblxuICA8dGVtcGxhdGUgdi1lbHNlPlxuICAgIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LXByZXZpZXctZW1vamlcIj5cbiAgICAgIDxlbW9qaVxuICAgICAgICA6ZGF0YT1cImRhdGFcIlxuICAgICAgICA6ZW1vamk9XCJpZGxlRW1vamlcIlxuICAgICAgICA6bmF0aXZlPVwiZW1vamlQcm9wcy5uYXRpdmVcIlxuICAgICAgICA6c2tpbj1cImVtb2ppUHJvcHMuc2tpblwiXG4gICAgICAgIDpzZXQ9XCJlbW9qaVByb3BzLnNldFwiXG4gICAgICAvPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtcHJldmlldy1kYXRhXCI+XG4gICAgICA8c3BhbiBjbGFzcz1cImVtb2ppLW1hcnQtdGl0bGUtbGFiZWxcIj57eyB0aXRsZSB9fTwvc3Bhbj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgdi1pZj1cInNob3dTa2luVG9uZXNcIiBjbGFzcz1cImVtb2ppLW1hcnQtcHJldmlldy1za2luc1wiPlxuICAgICAgPHNraW5zIDpza2luPVwic2tpblByb3BzLnNraW5cIiBAY2hhbmdlPVwib25Ta2luQ2hhbmdlKCRldmVudClcIiAvPlxuICAgIDwvZGl2PlxuICA8L3RlbXBsYXRlPlxuPC9kaXY+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCBFbW9qaSBmcm9tICcuL0Vtb2ppLnZ1ZSdcbmltcG9ydCBTa2lucyBmcm9tICcuL3NraW5zLnZ1ZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczoge1xuICAgIGRhdGE6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICB0aXRsZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIGVtb2ppOiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBPYmplY3RdXG4gICAgfSxcbiAgICBpZGxlRW1vamk6IHtcbiAgICAgIHR5cGU6IFtTdHJpbmcsIE9iamVjdF0sXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgc2hvd1NraW5Ub25lczoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICB9LFxuICAgIGVtb2ppUHJvcHM6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBza2luUHJvcHM6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBvblNraW5DaGFuZ2U6IHtcbiAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgZW1vamlEYXRhKCkge1xuICAgICAgaWYgKHRoaXMuZW1vamkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW1vamlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB7fVxuICAgICAgfVxuICAgIH0sXG4gICAgZW1vamlTaG9ydE5hbWVzKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZW1vamlEYXRhLnNob3J0X25hbWVzXG4gICAgfSxcbiAgICBlbW9qaUVtb3RpY29ucygpIHtcbiAgICAgIHJldHVybiB0aGlzLmVtb2ppRGF0YS5lbW90aWNvbnNcbiAgICB9XG4gIH0sXG4gIGNvbXBvbmVudHM6IHtcbiAgICBFbW9qaSxcbiAgICBTa2luc1xuICB9XG59XG5cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1zZWFyY2hcIj5cbiAgICA8aW5wdXRcbiAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgIDpwbGFjZWhvbGRlcj1cImkxOG4uc2VhcmNoXCJcbiAgICAgIHJvbGU9XCJ0ZXh0Ym94XCJcbiAgICAgIGFyaWEtYXV0b2NvbXBsZXRlPVwibGlzdFwiXG4gICAgICBhcmlhLW93bnM9XCJlbW9qaS1tYXJ0LWxpc3RcIlxuICAgICAgYXJpYS1sYWJlbD1cIlNlYXJjaCBmb3IgYW4gZW1vamlcIlxuICAgICAgYXJpYS1kZXNjcmliZWRieT1cImVtb2ppLW1hcnQtc2VhcmNoLWRlc2NyaXB0aW9uXCJcbiAgICAgIEBrZXlkb3duLmxlZnQ9XCIoJGV2ZW50KSA9PiAkZW1pdCgnYXJyb3dMZWZ0JywgJGV2ZW50KVwiXG4gICAgICBAa2V5ZG93bi5yaWdodD1cIigpID0+ICRlbWl0KCdhcnJvd1JpZ2h0JylcIlxuICAgICAgQGtleWRvd24uZG93bj1cIigpID0+ICRlbWl0KCdhcnJvd0Rvd24nKVwiXG4gICAgICBAa2V5ZG93bi51cD1cIigkZXZlbnQpID0+ICRlbWl0KCdhcnJvd1VwJywgJGV2ZW50KVwiXG4gICAgICBAa2V5ZG93bi5lbnRlcj1cIigpID0+ICRlbWl0KCdlbnRlcicpXCJcbiAgICAgIHYtbW9kZWw9XCJ2YWx1ZVwiXG4gICAgLz5cbiAgICA8c3BhbiBjbGFzcz1cImhpZGRlblwiIGlkPVwiZW1vamktcGlja2VyLXNlYXJjaC1kZXNjcmlwdGlvblwiXG4gICAgICA+VXNlIHRoZSBsZWZ0LCByaWdodCwgdXAgYW5kIGRvd24gYXJyb3cga2V5cyB0byBuYXZpZ2F0ZSB0aGUgZW1vamkgc2VhcmNoXG4gICAgICByZXN1bHRzLjwvc3BhblxuICAgID5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczoge1xuICAgIGRhdGE6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgaTE4bjoge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICBhdXRvRm9jdXM6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICB9LFxuICAgIG9uU2VhcmNoOiB7XG4gICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgb25BcnJvd0xlZnQ6IHtcbiAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgIH0sXG4gICAgb25BcnJvd1JpZ2h0OiB7XG4gICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICB9LFxuICAgIG9uQXJyb3dEb3duOiB7XG4gICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICB9LFxuICAgIG9uQXJyb3dVcDoge1xuICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgfSxcbiAgICBvbkVudGVyOiB7XG4gICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICB9LFxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogJycsXG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGVtb2ppSW5kZXgoKSB7XG4gICAgICByZXR1cm4gdGhpcy5kYXRhXG4gICAgfSxcbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICB2YWx1ZSgpIHtcbiAgICAgIHRoaXMuJGVtaXQoJ3NlYXJjaCcsIHRoaXMudmFsdWUpXG4gICAgfSxcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGNsZWFyKCkge1xuICAgICAgdGhpcy52YWx1ZSA9ICcnXG4gICAgfSxcbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICBsZXQgJGlucHV0ID0gdGhpcy4kZWwucXVlcnlTZWxlY3RvcignaW5wdXQnKVxuXG4gICAgaWYgKHRoaXMuYXV0b0ZvY3VzKSB7XG4gICAgICAkaW5wdXQuZm9jdXMoKVxuICAgIH1cbiAgfSxcbn1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuXG48ZGl2IDpjbGFzcz1cInsgJ2Vtb2ppLW1hcnQtc2tpbi1zd2F0Y2hlcyc6IHRydWUsICdlbW9qaS1tYXJ0LXNraW4tc3dhdGNoZXMtb3BlbmVkJzogb3BlbmVkIH1cIj5cbiAgPHNwYW4gdi1mb3I9XCJza2luVG9uZSBpbiA2XCIgOmtleT1cInNraW5Ub25lXCIgOmNsYXNzPVwieyAnZW1vamktbWFydC1za2luLXN3YXRjaCc6IHRydWUsICdlbW9qaS1tYXJ0LXNraW4tc3dhdGNoLXNlbGVjdGVkJzogc2tpbiA9PSBza2luVG9uZSB9XCI+XG4gICAgPHNwYW4gOmNsYXNzPVwiJ2Vtb2ppLW1hcnQtc2tpbiBlbW9qaS1tYXJ0LXNraW4tdG9uZS0nICsgc2tpblRvbmVcIiBAY2xpY2s9XCJvbkNsaWNrKHNraW5Ub25lKVwiPjwvc3Bhbj5cbiAgPC9zcGFuPlxuPC9kaXY+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IHtcbiAgICBza2luOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH1cbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb3BlbmVkOiBmYWxzZVxuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIG9uQ2xpY2soc2tpblRvbmUpIHtcbiAgICAgIGlmICh0aGlzLm9wZW5lZCkge1xuICAgICAgICBpZiAoc2tpblRvbmUgIT0gdGhpcy5za2luKSB7XG4gICAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgc2tpblRvbmUpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5vcGVuZWQgPSAhdGhpcy5vcGVuZWRcbiAgICB9XG4gIH1cbn1cblxuPC9zY3JpcHQ+XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF92bS52aWV3LmNhblJlbmRlclxuICAgID8gX2MoXG4gICAgICAgIF92bS50YWcsXG4gICAgICAgIHtcbiAgICAgICAgICB0YWc6IFwiY29tcG9uZW50XCIsXG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1lbW9qaVwiLFxuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICB0aXRsZTogX3ZtLnZpZXcudGl0bGUsXG4gICAgICAgICAgICBcImFyaWEtbGFiZWxcIjogX3ZtLnZpZXcuYXJpYUxhYmVsLFxuICAgICAgICAgICAgXCJkYXRhLXRpdGxlXCI6IF92bS50aXRsZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIG1vdXNlZW50ZXI6IF92bS5vbk1vdXNlRW50ZXIsXG4gICAgICAgICAgICBtb3VzZWxlYXZlOiBfdm0ub25Nb3VzZUxlYXZlLFxuICAgICAgICAgICAgY2xpY2s6IF92bS5vbkNsaWNrXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIHsgY2xhc3M6IF92bS52aWV3LmNzc0NsYXNzLCBzdHlsZTogX3ZtLnZpZXcuY3NzU3R5bGUgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0udmlldy5jb250ZW50KSlcbiAgICAgICAgICBdKVxuICAgICAgICBdXG4gICAgICApXG4gICAgOiBfdm0uX2UoKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJzZWN0aW9uXCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0IGVtb2ppLW1hcnQtc3RhdGljXCIsIHN0eWxlOiBfdm0uY3VzdG9tU3R5bGVzIH0sXG4gICAgW1xuICAgICAgX3ZtLnNob3dDYXRlZ29yaWVzXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LWJhciBlbW9qaS1tYXJ0LWJhci1hbmNob3JzXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJhbmNob3JzXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgZGF0YTogX3ZtLmRhdGEsXG4gICAgICAgICAgICAgICAgICBpMThuOiBfdm0ubWVyZ2VkSTE4bixcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBfdm0uY29sb3IsXG4gICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBfdm0udmlldy5hbGxDYXRlZ29yaWVzLFxuICAgICAgICAgICAgICAgICAgXCJhY3RpdmUtY2F0ZWdvcnlcIjogX3ZtLnZpZXcuYWN0aXZlQ2F0ZWdvcnlcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0ub25BbmNob3JDbGljayB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uX3QoXG4gICAgICAgIFwic2VhcmNoVGVtcGxhdGVcIixcbiAgICAgICAgW1xuICAgICAgICAgIF92bS5zaG93U2VhcmNoXG4gICAgICAgICAgICA/IF9jKFwic2VhcmNoXCIsIHtcbiAgICAgICAgICAgICAgICByZWY6IFwic2VhcmNoXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGRhdGE6IF92bS5kYXRhLFxuICAgICAgICAgICAgICAgICAgaTE4bjogX3ZtLm1lcmdlZEkxOG4sXG4gICAgICAgICAgICAgICAgICBcImF1dG8tZm9jdXNcIjogX3ZtLmF1dG9Gb2N1cyxcbiAgICAgICAgICAgICAgICAgIFwib24tc2VhcmNoXCI6IF92bS5vblNlYXJjaFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIHNlYXJjaDogX3ZtLm9uU2VhcmNoLFxuICAgICAgICAgICAgICAgICAgYXJyb3dMZWZ0OiBfdm0ub25BcnJvd0xlZnQsXG4gICAgICAgICAgICAgICAgICBhcnJvd1JpZ2h0OiBfdm0ub25BcnJvd1JpZ2h0LFxuICAgICAgICAgICAgICAgICAgYXJyb3dEb3duOiBfdm0ub25BcnJvd0Rvd24sXG4gICAgICAgICAgICAgICAgICBhcnJvd1VwOiBfdm0ub25BcnJvd1VwLFxuICAgICAgICAgICAgICAgICAgZW50ZXI6IF92bS5vbkVudGVyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICBdLFxuICAgICAgICB7XG4gICAgICAgICAgZGF0YTogX3ZtLmRhdGEsXG4gICAgICAgICAgaTE4bjogX3ZtLmkxOG4sXG4gICAgICAgICAgYXV0b0ZvY3VzOiBfdm0uYXV0b0ZvY3VzLFxuICAgICAgICAgIG9uU2VhcmNoOiBfdm0ub25TZWFyY2hcbiAgICAgICAgfVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHJlZjogXCJzY3JvbGxcIixcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LXNjcm9sbFwiLFxuICAgICAgICAgIGF0dHJzOiB7IHJvbGU6IFwidGFicGFuZWxcIiB9LFxuICAgICAgICAgIG9uOiB7IHNjcm9sbDogX3ZtLm9uU2Nyb2xsIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmVmOiBcInNjcm9sbENvbnRlbnRcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBpZDogXCJlbW9qaS1tYXJ0LWxpc3RcIixcbiAgICAgICAgICAgICAgICByb2xlOiBcImxpc3Rib3hcIixcbiAgICAgICAgICAgICAgICBcImFyaWEtZXhwYW5kZWRcIjogXCJ0cnVlXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF92bS5fbChfdm0udmlldy5maWx0ZXJlZENhdGVnb3JpZXMsIGZ1bmN0aW9uKGNhdGVnb3J5LCBpZHgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF9jKFwiY2F0ZWdvcnlcIiwge1xuICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOlxuICAgICAgICAgICAgICAgICAgICAgIF92bS5pbmZpbml0ZVNjcm9sbCB8fCBjYXRlZ29yeSA9PSBfdm0udmlldy5hY3RpdmVDYXRlZ29yeSxcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICAgICAgICBcImluZmluaXRlU2Nyb2xsIHx8IGNhdGVnb3J5ID09IHZpZXcuYWN0aXZlQ2F0ZWdvcnlcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAga2V5OiBjYXRlZ29yeS5pZCxcbiAgICAgICAgICAgICAgICByZWY6IFwiY2F0ZWdvcmllc19cIiArIGlkeCxcbiAgICAgICAgICAgICAgICByZWZJbkZvcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgZGF0YTogX3ZtLmRhdGEsXG4gICAgICAgICAgICAgICAgICBpMThuOiBfdm0ubWVyZ2VkSTE4bixcbiAgICAgICAgICAgICAgICAgIGlkOiBjYXRlZ29yeS5pZCxcbiAgICAgICAgICAgICAgICAgIG5hbWU6IGNhdGVnb3J5Lm5hbWUsXG4gICAgICAgICAgICAgICAgICBlbW9qaXM6IGNhdGVnb3J5LmVtb2ppcyxcbiAgICAgICAgICAgICAgICAgIFwiZW1vamktcHJvcHNcIjogX3ZtLmVtb2ppUHJvcHNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl90KFxuICAgICAgICBcInByZXZpZXdUZW1wbGF0ZVwiLFxuICAgICAgICBbXG4gICAgICAgICAgX3ZtLnNob3dQcmV2aWV3XG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LWJhciBlbW9qaS1tYXJ0LWJhci1wcmV2aWV3XCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInByZXZpZXdcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IF92bS5kYXRhLFxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBfdm0udGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgZW1vamk6IF92bS52aWV3LnByZXZpZXdFbW9qaSxcbiAgICAgICAgICAgICAgICAgICAgICBcImlkbGUtZW1vamlcIjogX3ZtLmlkbGVFbW9qaSxcbiAgICAgICAgICAgICAgICAgICAgICBcInNob3ctc2tpbi10b25lc1wiOiBfdm0uc2hvd1NraW5Ub25lcyxcbiAgICAgICAgICAgICAgICAgICAgICBcImVtb2ppLXByb3BzXCI6IF92bS5lbW9qaVByb3BzLFxuICAgICAgICAgICAgICAgICAgICAgIFwic2tpbi1wcm9wc1wiOiBfdm0uc2tpblByb3BzLFxuICAgICAgICAgICAgICAgICAgICAgIFwib24tc2tpbi1jaGFuZ2VcIjogX3ZtLm9uU2tpbkNoYW5nZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgIF0sXG4gICAgICAgIHtcbiAgICAgICAgICBkYXRhOiBfdm0uZGF0YSxcbiAgICAgICAgICB0aXRsZTogX3ZtLnRpdGxlLFxuICAgICAgICAgIGVtb2ppOiBfdm0udmlldy5wcmV2aWV3RW1vamksXG4gICAgICAgICAgaWRsZUVtb2ppOiBfdm0uaWRsZUVtb2ppLFxuICAgICAgICAgIHNob3dTa2luVG9uZXM6IF92bS5zaG93U2tpblRvbmVzLFxuICAgICAgICAgIGVtb2ppUHJvcHM6IF92bS5lbW9qaVByb3BzLFxuICAgICAgICAgIHNraW5Qcm9wczogX3ZtLnNraW5Qcm9wcyxcbiAgICAgICAgICBvblNraW5DaGFuZ2U6IF92bS5vblNraW5DaGFuZ2VcbiAgICAgICAgfVxuICAgICAgKVxuICAgIF0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1hbmNob3JzXCIsIGF0dHJzOiB7IHJvbGU6IFwidGFibGlzdFwiIH0gfSxcbiAgICBfdm0uX2woX3ZtLmNhdGVnb3JpZXMsIGZ1bmN0aW9uKGNhdGVnb3J5KSB7XG4gICAgICByZXR1cm4gX2MoXG4gICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6IGNhdGVnb3J5LmlkLFxuICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICBcImVtb2ppLW1hcnQtYW5jaG9yXCI6IHRydWUsXG4gICAgICAgICAgICBcImVtb2ppLW1hcnQtYW5jaG9yLXNlbGVjdGVkXCI6IGNhdGVnb3J5LmlkID09IF92bS5hY3RpdmVDYXRlZ29yeS5pZFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIGNvbG9yOiBjYXRlZ29yeS5pZCA9PSBfdm0uYWN0aXZlQ2F0ZWdvcnkuaWQgPyBfdm0uY29sb3IgOiBcIlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgcm9sZTogXCJ0YWJcIixcbiAgICAgICAgICAgIFwiYXJpYS1sYWJlbFwiOiBjYXRlZ29yeS5uYW1lLFxuICAgICAgICAgICAgXCJhcmlhLXNlbGVjdGVkXCI6IGNhdGVnb3J5LmlkID09IF92bS5hY3RpdmVDYXRlZ29yeS5pZCxcbiAgICAgICAgICAgIFwiZGF0YS10aXRsZVwiOiBfdm0uaTE4bi5jYXRlZ29yaWVzW2NhdGVnb3J5LmlkXVxuICAgICAgICAgIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcImNsaWNrXCIsIGNhdGVnb3J5KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfSxcbiAgICAgICAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS5zdmdzW2NhdGVnb3J5LmlkXSkgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtYW5jaG9yLWJhclwiLFxuICAgICAgICAgICAgc3R5bGU6IHsgYmFja2dyb3VuZENvbG9yOiBfdm0uY29sb3IgfSxcbiAgICAgICAgICAgIGF0dHJzOiB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF1cbiAgICAgIClcbiAgICB9KSxcbiAgICAwXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF92bS5pc1Zpc2libGUgJiYgKF92bS5pc1NlYXJjaCB8fCBfdm0uaGFzUmVzdWx0cylcbiAgICA/IF9jKFxuICAgICAgICBcInNlY3Rpb25cIixcbiAgICAgICAge1xuICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICBcImVtb2ppLW1hcnQtY2F0ZWdvcnlcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiZW1vamktbWFydC1uby1yZXN1bHRzXCI6ICFfdm0uaGFzUmVzdWx0c1xuICAgICAgICAgIH0sXG4gICAgICAgICAgYXR0cnM6IHsgXCJhcmlhLWxhYmVsXCI6IF92bS5pMThuLmNhdGVnb3JpZXNbX3ZtLmlkXSB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtY2F0ZWdvcnktbGFiZWxcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImgzXCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1jYXRlZ29yeS1sYWJlbFwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uaTE4bi5jYXRlZ29yaWVzW192bS5pZF0pKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS5fbChfdm0uZW1vamlPYmplY3RzLCBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgIHZhciBlbW9qaU9iamVjdCA9IHJlZi5lbW9qaU9iamVjdFxuICAgICAgICAgICAgdmFyIGVtb2ppVmlldyA9IHJlZi5lbW9qaVZpZXdcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgIGVtb2ppVmlldy5jYW5SZW5kZXJcbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiBlbW9qaU9iamVjdC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LWVtb2ppXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5hY3RpdmVDbGFzcyhlbW9qaU9iamVjdCksXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYXJpYS1sYWJlbFwiOiBlbW9qaVZpZXcuYXJpYUxhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgcm9sZTogXCJvcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYXJpYS1zZWxlY3RlZFwiOiBcImZhbHNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFyaWEtcG9zaW5zZXRcIjogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFyaWEtc2V0c2l6ZVwiOiBcIjE4MTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdGl0bGVcIjogZW1vamlPYmplY3Quc2hvcnRfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBlbW9qaVZpZXcudGl0bGVcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb3VzZWVudGVyOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmVtb2ppUHJvcHMub25FbnRlcihlbW9qaVZpZXcuZ2V0RW1vamkoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb3VzZWxlYXZlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmVtb2ppUHJvcHMub25MZWF2ZShlbW9qaVZpZXcuZ2V0RW1vamkoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lbW9qaVByb3BzLm9uQ2xpY2soZW1vamlWaWV3LmdldEVtb2ppKCkpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IGVtb2ppVmlldy5jc3NDbGFzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IGVtb2ppVmlldy5jc3NTdHlsZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKGVtb2ppVmlldy5jb250ZW50KSldXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgIV92bS5oYXNSZXN1bHRzXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJlbW9qaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZGF0YTogX3ZtLmRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgZW1vamk6IFwic2xldXRoX29yX3NweVwiLFxuICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZTogX3ZtLmVtb2ppUHJvcHMubmF0aXZlLFxuICAgICAgICAgICAgICAgICAgICAgIHNraW46IF92bS5lbW9qaVByb3BzLnNraW4sXG4gICAgICAgICAgICAgICAgICAgICAgc2V0OiBfdm0uZW1vamlQcm9wcy5zZXRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LW5vLXJlc3VsdHMtbGFiZWxcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmkxOG4ubm90Zm91bmQpKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICBdLFxuICAgICAgICAyXG4gICAgICApXG4gICAgOiBfdm0uX2UoKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtcHJldmlld1wiIH0sXG4gICAgW1xuICAgICAgX3ZtLmVtb2ppXG4gICAgICAgID8gW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1wcmV2aWV3LWVtb2ppXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiZW1vamlcIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogX3ZtLmRhdGEsXG4gICAgICAgICAgICAgICAgICAgIGVtb2ppOiBfdm0uZW1vamksXG4gICAgICAgICAgICAgICAgICAgIG5hdGl2ZTogX3ZtLmVtb2ppUHJvcHMubmF0aXZlLFxuICAgICAgICAgICAgICAgICAgICBza2luOiBfdm0uZW1vamlQcm9wcy5za2luLFxuICAgICAgICAgICAgICAgICAgICBzZXQ6IF92bS5lbW9qaVByb3BzLnNldFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LXByZXZpZXctZGF0YVwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LXByZXZpZXctbmFtZVwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5lbW9qaS5uYW1lKSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LXByZXZpZXctc2hvcnRuYW1lc1wiIH0sXG4gICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5lbW9qaVNob3J0TmFtZXMsIGZ1bmN0aW9uKHNob3J0TmFtZSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGtleTogc2hvcnROYW1lLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtcHJldmlldy1zaG9ydG5hbWVcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiOlwiICsgX3ZtLl9zKHNob3J0TmFtZSkgKyBcIjpcIildXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1wcmV2aWV3LWVtb3RpY29uc1wiIH0sXG4gICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5lbW9qaUVtb3RpY29ucywgZnVuY3Rpb24oZW1vdGljb24pIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBrZXk6IGVtb3RpY29uLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtcHJldmlldy1lbW90aWNvblwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKGVtb3RpY29uKSldXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF1cbiAgICAgICAgOiBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LXByZXZpZXctZW1vamlcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJlbW9qaVwiLCB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiBfdm0uZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgZW1vamk6IF92bS5pZGxlRW1vamksXG4gICAgICAgICAgICAgICAgICAgIG5hdGl2ZTogX3ZtLmVtb2ppUHJvcHMubmF0aXZlLFxuICAgICAgICAgICAgICAgICAgICBza2luOiBfdm0uZW1vamlQcm9wcy5za2luLFxuICAgICAgICAgICAgICAgICAgICBzZXQ6IF92bS5lbW9qaVByb3BzLnNldFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LXByZXZpZXctZGF0YVwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC10aXRsZS1sYWJlbFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS50aXRsZSkpXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0uc2hvd1NraW5Ub25lc1xuICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1wcmV2aWV3LXNraW5zXCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJza2luc1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc2tpbjogX3ZtLnNraW5Qcm9wcy5za2luIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub25Ta2luQ2hhbmdlKCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgIF1cbiAgICBdLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LXNlYXJjaFwiIH0sIFtcbiAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICB2YWx1ZTogX3ZtLnZhbHVlLFxuICAgICAgICAgIGV4cHJlc3Npb246IFwidmFsdWVcIlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgIHBsYWNlaG9sZGVyOiBfdm0uaTE4bi5zZWFyY2gsXG4gICAgICAgIHJvbGU6IFwidGV4dGJveFwiLFxuICAgICAgICBcImFyaWEtYXV0b2NvbXBsZXRlXCI6IFwibGlzdFwiLFxuICAgICAgICBcImFyaWEtb3duc1wiOiBcImVtb2ppLW1hcnQtbGlzdFwiLFxuICAgICAgICBcImFyaWEtbGFiZWxcIjogXCJTZWFyY2ggZm9yIGFuIGVtb2ppXCIsXG4gICAgICAgIFwiYXJpYS1kZXNjcmliZWRieVwiOiBcImVtb2ppLW1hcnQtc2VhcmNoLWRlc2NyaXB0aW9uXCJcbiAgICAgIH0sXG4gICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnZhbHVlIH0sXG4gICAgICBvbjoge1xuICAgICAgICBrZXlkb3duOiBbXG4gICAgICAgICAgZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICEkZXZlbnQudHlwZS5pbmRleE9mKFwia2V5XCIpICYmXG4gICAgICAgICAgICAgIF92bS5faygkZXZlbnQua2V5Q29kZSwgXCJsZWZ0XCIsIDM3LCAkZXZlbnQua2V5LCBbXG4gICAgICAgICAgICAgICAgXCJMZWZ0XCIsXG4gICAgICAgICAgICAgICAgXCJBcnJvd0xlZnRcIlxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoXCJidXR0b25cIiBpbiAkZXZlbnQgJiYgJGV2ZW50LmJ1dHRvbiAhPT0gMCkge1xuICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIChmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcImFycm93TGVmdFwiLCAkZXZlbnQpXG4gICAgICAgICAgICB9KSgkZXZlbnQpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgISRldmVudC50eXBlLmluZGV4T2YoXCJrZXlcIikgJiZcbiAgICAgICAgICAgICAgX3ZtLl9rKCRldmVudC5rZXlDb2RlLCBcInJpZ2h0XCIsIDM5LCAkZXZlbnQua2V5LCBbXG4gICAgICAgICAgICAgICAgXCJSaWdodFwiLFxuICAgICAgICAgICAgICAgIFwiQXJyb3dSaWdodFwiXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChcImJ1dHRvblwiIGluICRldmVudCAmJiAkZXZlbnQuYnV0dG9uICE9PSAyKSB7XG4gICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRlbWl0KFwiYXJyb3dSaWdodFwiKVxuICAgICAgICAgICAgfSkoJGV2ZW50KVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICEkZXZlbnQudHlwZS5pbmRleE9mKFwia2V5XCIpICYmXG4gICAgICAgICAgICAgIF92bS5faygkZXZlbnQua2V5Q29kZSwgXCJkb3duXCIsIDQwLCAkZXZlbnQua2V5LCBbXG4gICAgICAgICAgICAgICAgXCJEb3duXCIsXG4gICAgICAgICAgICAgICAgXCJBcnJvd0Rvd25cIlxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRlbWl0KFwiYXJyb3dEb3duXCIpXG4gICAgICAgICAgICB9KSgkZXZlbnQpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgISRldmVudC50eXBlLmluZGV4T2YoXCJrZXlcIikgJiZcbiAgICAgICAgICAgICAgX3ZtLl9rKCRldmVudC5rZXlDb2RlLCBcInVwXCIsIDM4LCAkZXZlbnQua2V5LCBbXCJVcFwiLCBcIkFycm93VXBcIl0pXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAoZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uJGVtaXQoXCJhcnJvd1VwXCIsICRldmVudClcbiAgICAgICAgICAgIH0pKCRldmVudClcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAhJGV2ZW50LnR5cGUuaW5kZXhPZihcImtleVwiKSAmJlxuICAgICAgICAgICAgICBfdm0uX2soJGV2ZW50LmtleUNvZGUsIFwiZW50ZXJcIiwgMTMsICRldmVudC5rZXksIFwiRW50ZXJcIilcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcImVudGVyXCIpXG4gICAgICAgICAgICB9KSgkZXZlbnQpXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG4gICAgICAgICAgX3ZtLnZhbHVlID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwic3BhblwiLFxuICAgICAge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJoaWRkZW5cIixcbiAgICAgICAgYXR0cnM6IHsgaWQ6IFwiZW1vamktcGlja2VyLXNlYXJjaC1kZXNjcmlwdGlvblwiIH1cbiAgICAgIH0sXG4gICAgICBbXG4gICAgICAgIF92bS5fdihcbiAgICAgICAgICBcIlVzZSB0aGUgbGVmdCwgcmlnaHQsIHVwIGFuZCBkb3duIGFycm93IGtleXMgdG8gbmF2aWdhdGUgdGhlIGVtb2ppIHNlYXJjaFxcbiAgICByZXN1bHRzLlwiXG4gICAgICAgIClcbiAgICAgIF1cbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIGNsYXNzOiB7XG4gICAgICAgIFwiZW1vamktbWFydC1za2luLXN3YXRjaGVzXCI6IHRydWUsXG4gICAgICAgIFwiZW1vamktbWFydC1za2luLXN3YXRjaGVzLW9wZW5lZFwiOiBfdm0ub3BlbmVkXG4gICAgICB9XG4gICAgfSxcbiAgICBfdm0uX2woNiwgZnVuY3Rpb24oc2tpblRvbmUpIHtcbiAgICAgIHJldHVybiBfYyhcbiAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6IHNraW5Ub25lLFxuICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICBcImVtb2ppLW1hcnQtc2tpbi1zd2F0Y2hcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiZW1vamktbWFydC1za2luLXN3YXRjaC1zZWxlY3RlZFwiOiBfdm0uc2tpbiA9PSBza2luVG9uZVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwic3BhblwiLCB7XG4gICAgICAgICAgICBjbGFzczogXCJlbW9qaS1tYXJ0LXNraW4gZW1vamktbWFydC1za2luLXRvbmUtXCIgKyBza2luVG9uZSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9uQ2xpY2soc2tpblRvbmUpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdXG4gICAgICApXG4gICAgfSksXG4gICAgMFxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiLyogZ2xvYmFscyBfX1ZVRV9TU1JfQ09OVEVYVF9fICovXG5cbi8vIElNUE9SVEFOVDogRG8gTk9UIHVzZSBFUzIwMTUgZmVhdHVyZXMgaW4gdGhpcyBmaWxlIChleGNlcHQgZm9yIG1vZHVsZXMpLlxuLy8gVGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICBzY3JpcHRFeHBvcnRzLFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZnVuY3Rpb25hbFRlbXBsYXRlLFxuICBpbmplY3RTdHlsZXMsXG4gIHNjb3BlSWQsXG4gIG1vZHVsZUlkZW50aWZpZXIsIC8qIHNlcnZlciBvbmx5ICovXG4gIHNoYWRvd01vZGUgLyogdnVlLWNsaSBvbmx5ICovXG4pIHtcbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nXG4gICAgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnNcbiAgICA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChyZW5kZXIpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IHJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gc3RhdGljUmVuZGVyRm5zXG4gICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlXG4gIH1cblxuICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gIGlmIChmdW5jdGlvbmFsVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLmZ1bmN0aW9uYWwgPSB0cnVlXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSAnZGF0YS12LScgKyBzY29wZUlkXG4gIH1cblxuICB2YXIgaG9va1xuICBpZiAobW9kdWxlSWRlbnRpZmllcikgeyAvLyBzZXJ2ZXIgYnVpbGRcbiAgICBob29rID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIC8vIDIuMyBpbmplY3Rpb25cbiAgICAgIGNvbnRleHQgPVxuICAgICAgICBjb250ZXh0IHx8IC8vIGNhY2hlZCBjYWxsXG4gICAgICAgICh0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0KSB8fCAvLyBzdGF0ZWZ1bFxuICAgICAgICAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuJHZub2RlICYmIHRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KSAvLyBmdW5jdGlvbmFsXG4gICAgICAvLyAyLjIgd2l0aCBydW5Jbk5ld0NvbnRleHQ6IHRydWVcbiAgICAgIGlmICghY29udGV4dCAmJiB0eXBlb2YgX19WVUVfU1NSX0NPTlRFWFRfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29udGV4dCA9IF9fVlVFX1NTUl9DT05URVhUX19cbiAgICAgIH1cbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgc3R5bGVzXG4gICAgICBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIGNvbnRleHQpXG4gICAgICB9XG4gICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgbW9kdWxlIGlkZW50aWZpZXIgZm9yIGFzeW5jIGNodW5rIGluZmVycmVuY2VcbiAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzKSB7XG4gICAgICAgIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzLmFkZChtb2R1bGVJZGVudGlmaWVyKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyB1c2VkIGJ5IHNzciBpbiBjYXNlIGNvbXBvbmVudCBpcyBjYWNoZWQgYW5kIGJlZm9yZUNyZWF0ZVxuICAgIC8vIG5ldmVyIGdldHMgY2FsbGVkXG4gICAgb3B0aW9ucy5fc3NyUmVnaXN0ZXIgPSBob29rXG4gIH0gZWxzZSBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgaG9vayA9IHNoYWRvd01vZGVcbiAgICAgID8gZnVuY3Rpb24gKCkgeyBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCB0aGlzLiRyb290LiRvcHRpb25zLnNoYWRvd1Jvb3QpIH1cbiAgICAgIDogaW5qZWN0U3R5bGVzXG4gIH1cblxuICBpZiAoaG9vaykge1xuICAgIGlmIChvcHRpb25zLmZ1bmN0aW9uYWwpIHtcbiAgICAgIC8vIGZvciB0ZW1wbGF0ZS1vbmx5IGhvdC1yZWxvYWQgYmVjYXVzZSBpbiB0aGF0IGNhc2UgdGhlIHJlbmRlciBmbiBkb2Vzbid0XG4gICAgICAvLyBnbyB0aHJvdWdoIHRoZSBub3JtYWxpemVyXG4gICAgICBvcHRpb25zLl9pbmplY3RTdHlsZXMgPSBob29rXG4gICAgICAvLyByZWdpc3RlciBmb3IgZnVuY3Rpb2FsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgdmFyIG9yaWdpbmFsUmVuZGVyID0gb3B0aW9ucy5yZW5kZXJcbiAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uIChoLCBjb250ZXh0KSB7XG4gICAgICAgIGhvb2suY2FsbChjb250ZXh0KVxuICAgICAgICByZXR1cm4gb3JpZ2luYWxSZW5kZXIoaCwgY29udGV4dClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCByZWdpc3RyYXRpb24gYXMgYmVmb3JlQ3JlYXRlIGhvb2tcbiAgICAgIHZhciBleGlzdGluZyA9IG9wdGlvbnMuYmVmb3JlQ3JlYXRlXG4gICAgICBvcHRpb25zLmJlZm9yZUNyZWF0ZSA9IGV4aXN0aW5nXG4gICAgICAgID8gW10uY29uY2F0KGV4aXN0aW5nLCBob29rKVxuICAgICAgICA6IFtob29rXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRW1vamkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUzNGFkOTQ2JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0Vtb2ppLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRW1vamkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvc2ViL3dlYi9lbW9qaS1tYXJ0LXZ1ZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNTM0YWQ5NDYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNTM0YWQ5NDYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0Vtb2ppLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MzRhZDk0NiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1MzRhZDk0NicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvRW1vamkudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRW1vamkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FbW9qaS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRW1vamkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUzNGFkOTQ2JlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9QaWNrZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWQxNmU5MDg0JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1BpY2tlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1BpY2tlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9zZWIvd2ViL2Vtb2ppLW1hcnQtdnVlL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdkMTZlOTA4NCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdkMTZlOTA4NCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUGlja2VyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kMTZlOTA4NCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdkMTZlOTA4NCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvUGlja2VyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BpY2tlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BpY2tlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGlja2VyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kMTZlOTA4NCZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vYW5jaG9ycy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTExODgxMDQmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vYW5jaG9ycy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2FuY2hvcnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvc2ViL3dlYi9lbW9qaS1tYXJ0LXZ1ZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNTExODgxMDQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNTExODgxMDQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2FuY2hvcnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUxMTg4MTA0JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzUxMTg4MTA0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9hbmNob3JzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FuY2hvcnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9hbmNob3JzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9hbmNob3JzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MTE4ODEwNCZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vY2F0ZWdvcnkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM3NmNkYTBlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2NhdGVnb3J5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vY2F0ZWdvcnkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvc2ViL3dlYi9lbW9qaS1tYXJ0LXZ1ZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMzc2Y2RhMGUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMzc2Y2RhMGUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2NhdGVnb3J5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNzZjZGEwZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczNzZjZGEwZScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvY2F0ZWdvcnkudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2F0ZWdvcnkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jYXRlZ29yeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2F0ZWdvcnkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM3NmNkYTBlJlwiIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBBbmNob3JzIH0gZnJvbSAnLi9hbmNob3JzLnZ1ZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2F0ZWdvcnkgfSBmcm9tICcuL2NhdGVnb3J5LnZ1ZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUHJldmlldyB9IGZyb20gJy4vcHJldmlldy52dWUnXG5leHBvcnQgeyBkZWZhdWx0IGFzIFNlYXJjaCB9IGZyb20gJy4vc2VhcmNoLnZ1ZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2tpbnMgfSBmcm9tICcuL3NraW5zLnZ1ZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRW1vamkgfSBmcm9tICcuL0Vtb2ppLnZ1ZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUGlja2VyIH0gZnJvbSAnLi9QaWNrZXIudnVlJ1xuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9wcmV2aWV3LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNTA1NmMzMCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9wcmV2aWV3LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vcHJldmlldy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9zZWIvd2ViL2Vtb2ppLW1hcnQtdnVlL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczNTA1NmMzMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczNTA1NmMzMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vcHJldmlldy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzUwNTZjMzAmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMzUwNTZjMzAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL3ByZXZpZXcudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcHJldmlldy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3ByZXZpZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3ByZXZpZXcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM1MDU2YzMwJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9zZWFyY2gudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRhZDQxYmI4JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3NlYXJjaC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3NlYXJjaC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9zZWIvd2ViL2Vtb2ppLW1hcnQtdnVlL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0YWQ0MWJiOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0YWQ0MWJiOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vc2VhcmNoLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00YWQ0MWJiOCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0YWQ0MWJiOCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvc2VhcmNoLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NlYXJjaC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NlYXJjaC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2VhcmNoLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00YWQ0MWJiOCZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vc2tpbnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFjNjE0ODk0JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3NraW5zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vc2tpbnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvc2ViL3dlYi9lbW9qaS1tYXJ0LXZ1ZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMWM2MTQ4OTQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMWM2MTQ4OTQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3NraW5zLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xYzYxNDg5NCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxYzYxNDg5NCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvc2tpbnMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2tpbnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9za2lucy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2tpbnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFjNjE0ODk0JlwiIiwiaW1wb3J0IHN0b3JlIGZyb20gJy4vdXRpbHMvc3RvcmUnXG5pbXBvcnQgeyB1bmNvbXByZXNzIH0gZnJvbSAnLi91dGlscy9kYXRhJ1xuaW1wb3J0IGZyZXF1ZW50bHkgZnJvbSAnLi91dGlscy9mcmVxdWVudGx5J1xuXG5leHBvcnQge1xuICBQaWNrZXIsXG4gIEVtb2ppLFxuICBBbmNob3JzLFxuICBQcmV2aWV3LFxuICBTZWFyY2gsXG4gIENhdGVnb3J5LFxuICBTa2lucyxcbn0gZnJvbSAnLi9jb21wb25lbnRzJ1xuXG5leHBvcnQgeyBFbW9qaUluZGV4LCBFbW9qaVZpZXcsIEVtb2ppRGF0YSwgc2FuaXRpemUgfSBmcm9tICcuL3V0aWxzL2Vtb2ppLWRhdGEnXG5leHBvcnQgeyB1bmNvbXByZXNzLCBzdG9yZSwgZnJlcXVlbnRseSB9XG4iLCJjb25zdCBfU3RyaW5nID0gU3RyaW5nXG5cbmV4cG9ydCBkZWZhdWx0IF9TdHJpbmcuZnJvbUNvZGVQb2ludCB8fFxuICBmdW5jdGlvbiBzdHJpbmdGcm9tQ29kZVBvaW50KCkge1xuICAgIHZhciBNQVhfU0laRSA9IDB4NDAwMFxuICAgIHZhciBjb2RlVW5pdHMgPSBbXVxuICAgIHZhciBoaWdoU3Vycm9nYXRlXG4gICAgdmFyIGxvd1N1cnJvZ2F0ZVxuICAgIHZhciBpbmRleCA9IC0xXG4gICAgdmFyIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICBpZiAoIWxlbmd0aCkge1xuICAgICAgcmV0dXJuICcnXG4gICAgfVxuICAgIHZhciByZXN1bHQgPSAnJ1xuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICB2YXIgY29kZVBvaW50ID0gTnVtYmVyKGFyZ3VtZW50c1tpbmRleF0pXG4gICAgICBpZiAoXG4gICAgICAgICFpc0Zpbml0ZShjb2RlUG9pbnQpIHx8IC8vIGBOYU5gLCBgK0luZmluaXR5YCwgb3IgYC1JbmZpbml0eWBcbiAgICAgICAgY29kZVBvaW50IDwgMCB8fCAvLyBub3QgYSB2YWxpZCBVbmljb2RlIGNvZGUgcG9pbnRcbiAgICAgICAgY29kZVBvaW50ID4gMHgxMGZmZmYgfHwgLy8gbm90IGEgdmFsaWQgVW5pY29kZSBjb2RlIHBvaW50XG4gICAgICAgIE1hdGguZmxvb3IoY29kZVBvaW50KSAhPSBjb2RlUG9pbnQgLy8gbm90IGFuIGludGVnZXJcbiAgICAgICkge1xuICAgICAgICB0aHJvdyBSYW5nZUVycm9yKCdJbnZhbGlkIGNvZGUgcG9pbnQ6ICcgKyBjb2RlUG9pbnQpXG4gICAgICB9XG4gICAgICBpZiAoY29kZVBvaW50IDw9IDB4ZmZmZikge1xuICAgICAgICAvLyBCTVAgY29kZSBwb2ludFxuICAgICAgICBjb2RlVW5pdHMucHVzaChjb2RlUG9pbnQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBBc3RyYWwgY29kZSBwb2ludDsgc3BsaXQgaW4gc3Vycm9nYXRlIGhhbHZlc1xuICAgICAgICAvLyBodHRwOi8vbWF0aGlhc2J5bmVucy5iZS9ub3Rlcy9qYXZhc2NyaXB0LWVuY29kaW5nI3N1cnJvZ2F0ZS1mb3JtdWxhZVxuICAgICAgICBjb2RlUG9pbnQgLT0gMHgxMDAwMFxuICAgICAgICBoaWdoU3Vycm9nYXRlID0gKGNvZGVQb2ludCA+PiAxMCkgKyAweGQ4MDBcbiAgICAgICAgbG93U3Vycm9nYXRlID0gKGNvZGVQb2ludCAlIDB4NDAwKSArIDB4ZGMwMFxuICAgICAgICBjb2RlVW5pdHMucHVzaChoaWdoU3Vycm9nYXRlLCBsb3dTdXJyb2dhdGUpXG4gICAgICB9XG4gICAgICBpZiAoaW5kZXggKyAxID09PSBsZW5ndGggfHwgY29kZVVuaXRzLmxlbmd0aCA+IE1BWF9TSVpFKSB7XG4gICAgICAgIHJlc3VsdCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIGNvZGVVbml0cylcbiAgICAgICAgY29kZVVuaXRzLmxlbmd0aCA9IDBcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG4iLCJjb25zdCBTVkdzID0ge1xuICBhY3Rpdml0eTogYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj48cGF0aCBkPVwiTTEyIDBDNS4zNzMgMCAwIDUuMzcyIDAgMTJjMCA2LjYyNyA1LjM3MyAxMiAxMiAxMiA2LjYyOCAwIDEyLTUuMzczIDEyLTEyIDAtNi42MjgtNS4zNzItMTItMTItMTJtOS45NDkgMTFIMTcuMDVjLjIyNC0yLjUyNyAxLjIzMi00Ljc3MyAxLjk2OC02LjExM0E5Ljk2NiA5Ljk2NiAwIDAgMSAyMS45NDkgMTFNMTMgMTFWMi4wNTFhOS45NDUgOS45NDUgMCAwIDEgNC40MzIgMS41NjRjLS44NTggMS40OTEtMi4xNTYgNC4yMi0yLjM5MiA3LjM4NUgxM3ptLTIgMEg4Ljk2MWMtLjIzOC0zLjE2NS0xLjUzNi01Ljg5NC0yLjM5My03LjM4NUE5Ljk1IDkuOTUgMCAwIDEgMTEgMi4wNTFWMTF6bTAgMnY4Ljk0OWE5LjkzNyA5LjkzNyAwIDAgMS00LjQzMi0xLjU2NGMuODU3LTEuNDkyIDIuMTU1LTQuMjIxIDIuMzkzLTcuMzg1SDExem00LjA0IDBjLjIzNiAzLjE2NCAxLjUzNCA1Ljg5MyAyLjM5MiA3LjM4NUE5LjkyIDkuOTIgMCAwIDEgMTMgMjEuOTQ5VjEzaDIuMDR6TTQuOTgyIDQuODg3QzUuNzE4IDYuMjI3IDYuNzI2IDguNDczIDYuOTUxIDExaC00LjlhOS45NzcgOS45NzcgMCAwIDEgMi45MzEtNi4xMTNNMi4wNTEgMTNoNC45Yy0uMjI2IDIuNTI3LTEuMjMzIDQuNzcxLTEuOTY5IDYuMTEzQTkuOTcyIDkuOTcyIDAgMCAxIDIuMDUxIDEzbTE2Ljk2NyA2LjExM2MtLjczNS0xLjM0Mi0xLjc0NC0zLjU4Ni0xLjk2OC02LjExM2g0Ljg5OWE5Ljk2MSA5Ljk2MSAwIDAgMS0yLjkzMSA2LjExM1wiLz48L3N2Zz5gLFxuXG4gIGN1c3RvbTogYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj48ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMi4wMDAwMDAsIDEuMDAwMDAwKVwiPjxyZWN0IGlkPVwiUmVjdGFuZ2xlXCIgeD1cIjhcIiB5PVwiMFwiIHdpZHRoPVwiM1wiIGhlaWdodD1cIjIxXCIgcng9XCIxLjVcIj48L3JlY3Q+PHJlY3QgaWQ9XCJSZWN0YW5nbGVcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoOS44NDMsIDEwLjU0OSkgcm90YXRlKDYwKSB0cmFuc2xhdGUoLTkuODQzLCAtMTAuNTQ5KSBcIiB4PVwiOC4zNDNcIiB5PVwiMC4wNDlcIiB3aWR0aD1cIjNcIiBoZWlnaHQ9XCIyMVwiIHJ4PVwiMS41XCI+PC9yZWN0PjxyZWN0IGlkPVwiUmVjdGFuZ2xlXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDkuODQzLCAxMC41NDkpIHJvdGF0ZSgtNjApIHRyYW5zbGF0ZSgtOS44NDMsIC0xMC41NDkpIFwiIHg9XCI4LjM0M1wiIHk9XCIwLjA0OVwiIHdpZHRoPVwiM1wiIGhlaWdodD1cIjIxXCIgcng9XCIxLjVcIj48L3JlY3Q+PC9nPjwvc3ZnPmAsXG5cbiAgZmxhZ3M6IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+PHBhdGggZD1cIk0wIDBsNi4wODQgMjRIOEwxLjkxNiAwek0yMSA1aC00bC0xLTRINGwzIDEyaDNsMSA0aDEzTDIxIDV6TTYuNTYzIDNoNy44NzVsMiA4SDguNTYzbC0yLTh6bTguODMyIDEwbC0yLjg1NiAxLjkwNEwxMi4wNjMgMTNoMy4zMzJ6TTE5IDEzbC0xLjUtNmgxLjkzOGwyIDhIMTZsMy0yelwiLz48L3N2Zz5gLFxuXG4gIGZvb2RzOiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiPjxwYXRoIGQ9XCJNMTcgNC45NzhjLTEuODM4IDAtMi44NzYuMzk2LTMuNjguOTM0LjUxMy0xLjE3MiAxLjc2OC0yLjkzNCA0LjY4LTIuOTM0YTEgMSAwIDAgMCAwLTJjLTIuOTIxIDAtNC42MjkgMS4zNjUtNS41NDcgMi41MTItLjA2NC4wNzgtLjExOS4xNjItLjE4LjI0NEMxMS43MyAxLjgzOCAxMC43OTguMDIzIDkuMjA3LjAyMyA4LjU3OS4wMjIgNy44NS4zMDYgNyAuOTc4IDUuMDI3IDIuNTQgNS4zMjkgMy45MDIgNi40OTIgNC45OTkgMy42MDkgNS4yMjIgMCA3LjM1MiAwIDEyLjk2OWMwIDQuNTgyIDQuOTYxIDExLjAwOSA5IDExLjAwOSAxLjk3NSAwIDIuMzcxLS40ODYgMy0xIC42MjkuNTE0IDEuMDI1IDEgMyAxIDQuMDM5IDAgOS02LjQxOCA5LTExIDAtNS45NTMtNC4wNTUtOC03LThNOC4yNDIgMi41NDZjLjY0MS0uNTA4Ljk0My0uNTIzLjk2NS0uNTIzLjQyNi4xNjkuOTc1IDEuNDA1IDEuMzU3IDMuMDU1LTEuNTI3LS42MjktMi43NDEtMS4zNTItMi45OC0xLjg0Ni4wNTktLjExMi4yNDEtLjM1Ni42NTgtLjY4Nk0xNSAyMS45NzhjLTEuMDggMC0xLjIxLS4xMDktMS41NTktLjQwMmwtLjE3Ni0uMTQ2Yy0uMzY3LS4zMDItLjgxNi0uNDUyLTEuMjY2LS40NTJzLS44OTguMTUtMS4yNjYuNDUybC0uMTc2LjE0NmMtLjM0Ny4yOTItLjQ3Ny40MDItMS41NTcuNDAyLTIuODEzIDAtNy01LjM4OS03LTkuMDA5IDAtNS44MjMgNC40ODgtNS45OTEgNS01Ljk5MSAxLjkzOSAwIDIuNDg0LjQ3MSAzLjM4NyAxLjI1MWwuMzIzLjI3NmExLjk5NSAxLjk5NSAwIDAgMCAyLjU4IDBsLjMyMy0uMjc2Yy45MDItLjc4IDEuNDQ3LTEuMjUxIDMuMzg3LTEuMjUxLjUxMiAwIDUgLjE2OCA1IDYgMCAzLjYxNy00LjE4NyA5LTcgOVwiLz48L3N2Zz5gLFxuXG4gIG5hdHVyZTogYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj48cGF0aCBkPVwiTTE1LjUgOGExLjUgMS41IDAgMSAwIC4wMDEgMy4wMDFBMS41IDEuNSAwIDAgMCAxNS41IDhNOC41IDhhMS41IDEuNSAwIDEgMCAuMDAxIDMuMDAxQTEuNSAxLjUgMCAwIDAgOC41IDhcIi8+PHBhdGggZD1cIk0xOC45MzMgMGgtLjAyN2MtLjk3IDAtMi4xMzguNzg3LTMuMDE4IDEuNDk3LTEuMjc0LS4zNzQtMi42MTItLjUxLTMuODg3LS41MS0xLjI4NSAwLTIuNjE2LjEzMy0zLjg3NC41MTdDNy4yNDUuNzkgNi4wNjkgMCA1LjA5MyAwaC0uMDI3QzMuMzUyIDAgLjA3IDIuNjcuMDAyIDcuMDI2Yy0uMDM5IDIuNDc5LjI3NiA0LjIzOCAxLjA0IDUuMDEzLjI1NC4yNTguODgyLjY3NyAxLjI5NS44ODIuMTkxIDMuMTc3LjkyMiA1LjIzOCAyLjUzNiA2LjM4Ljg5Ny42MzcgMi4xODcuOTQ5IDMuMiAxLjEwMkM4LjA0IDIwLjYgOCAyMC43OTUgOCAyMWMwIDEuNzczIDIuMzUgMyA0IDMgMS42NDggMCA0LTEuMjI3IDQtMyAwLS4yMDEtLjAzOC0uMzkzLS4wNzItLjU4NiAyLjU3My0uMzg1IDUuNDM1LTEuODc3IDUuOTI1LTcuNTg3LjM5Ni0uMjIuODg3LS41NjggMS4xMDQtLjc4OC43NjMtLjc3NCAxLjA3OS0yLjUzNCAxLjA0LTUuMDEzQzIzLjkyOSAyLjY3IDIwLjY0NiAwIDE4LjkzMyAwTTMuMjIzIDkuMTM1Yy0uMjM3LjI4MS0uODM3IDEuMTU1LS44ODQgMS4yMzgtLjE1LS40MS0uMzY4LTEuMzQ5LS4zMzctMy4yOTEuMDUxLTMuMjgxIDIuNDc4LTQuOTcyIDMuMDkxLTUuMDMxLjI1Ni4wMTUuNzMxLjI3IDEuMjY1LjY0Ni0xLjExIDEuMTcxLTIuMjc1IDIuOTE1LTIuMzUyIDUuMTI1LS4xMzMuNTQ2LS4zOTguODU4LS43ODMgMS4zMTNNMTIgMjJjLS45MDEgMC0xLjk1NC0uNjkzLTItMSAwLS42NTQuNDc1LTEuMjM2IDEtMS42MDJWMjBhMSAxIDAgMSAwIDIgMHYtLjYwMmMuNTI0LjM2NSAxIC45NDcgMSAxLjYwMi0uMDQ2LjMwNy0xLjA5OSAxLTIgMW0zLTMuNDh2LjAyYTQuNzUyIDQuNzUyIDAgMCAwLTEuMjYyLTEuMDJjMS4wOTItLjUxNiAyLjIzOS0xLjMzNCAyLjIzOS0yLjIxNyAwLTEuODQyLTEuNzgxLTIuMTk1LTMuOTc3LTIuMTk1LTIuMTk2IDAtMy45NzguMzU0LTMuOTc4IDIuMTk1IDAgLjg4MyAxLjE0OCAxLjcwMSAyLjIzOCAyLjIxN0E0LjggNC44IDAgMCAwIDkgMTguNTM5di0uMDI1Yy0xLS4wNzYtMi4xODItLjI4MS0yLjk3My0uODQyLTEuMzAxLS45Mi0xLjgzOC0zLjA0NS0xLjg1My02LjQ3OGwuMDIzLS4wNDFjLjQ5Ni0uODI2IDEuNDktMS40NSAxLjgwNC0zLjEwMiAwLTIuMDQ3IDEuMzU3LTMuNjMxIDIuMzYyLTQuNTIyQzkuMzcgMy4xNzggMTAuNTU1IDMgMTEuOTQ4IDNjMS40NDcgMCAyLjY4NS4xOTIgMy43MzMuNTcgMSAuOSAyLjMxNiAyLjQ2NSAyLjMxNiA0LjQ4LjMxMyAxLjY1MSAxLjMwNyAyLjI3NSAxLjgwMyAzLjEwMi4wMzUuMDU4LjA2OC4xMTcuMTAyLjE3OC0uMDU5IDUuOTY3LTEuOTQ5IDcuMDEtNC45MDIgNy4xOW02LjYyOC04LjIwMmMtLjAzNy0uMDY1LS4wNzQtLjEzLS4xMTMtLjE5NWE3LjU4NyA3LjU4NyAwIDAgMC0uNzM5LS45ODdjLS4zODUtLjQ1NS0uNjQ4LS43NjgtLjc4Mi0xLjMxMy0uMDc2LTIuMjA5LTEuMjQxLTMuOTU0LTIuMzUzLTUuMTI0LjUzMS0uMzc2IDEuMDA0LS42MyAxLjI2MS0uNjQ3LjYzNi4wNzEgMy4wNDQgMS43NjQgMy4wOTYgNS4wMzEuMDI3IDEuODEtLjM0NyAzLjIxOC0uMzcgMy4yMzVcIi8+PC9zdmc+YCxcblxuICBvYmplY3RzOiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiPjxwYXRoIGQ9XCJNMTIgMGE5IDkgMCAwIDAtNSAxNi40ODJWMjFzMi4wMzUgMyA1IDMgNS0zIDUtM3YtNC41MThBOSA5IDAgMCAwIDEyIDB6bTAgMmMzLjg2IDAgNyAzLjE0MSA3IDdzLTMuMTQgNy03IDctNy0zLjE0MS03LTcgMy4xNC03IDctN3pNOSAxNy40NzdjLjk0LjMzMiAxLjk0Ni41MjMgMyAuNTIzczIuMDYtLjE5IDMtLjUyM3YuODM0Yy0uOTEuNDM2LTEuOTI1LjY4OS0zIC42ODlhNi45MjQgNi45MjQgMCAwIDEtMy0uNjl2LS44MzN6bS4yMzYgMy4wN0E4Ljg1NCA4Ljg1NCAwIDAgMCAxMiAyMWMuOTY1IDAgMS44ODgtLjE2NyAyLjc1OC0uNDUxQzE0LjE1NSAyMS4xNzMgMTMuMTUzIDIyIDEyIDIyYy0xLjEwMiAwLTIuMTE3LS43ODktMi43NjQtMS40NTN6XCIvPjxwYXRoIGQ9XCJNMTQuNzQ1IDEyLjQ0OWgtLjAwNGMtLjg1Mi0uMDI0LTEuMTg4LS44NTgtMS41NzctMS44MjQtLjQyMS0xLjA2MS0uNzAzLTEuNTYxLTEuMTgyLTEuNTY2aC0uMDA5Yy0uNDgxIDAtLjc4My40OTctMS4yMzUgMS41MzctLjQzNi45ODItLjgwMSAxLjgxMS0xLjYzNiAxLjc5MWwtLjI3Ni0uMDQzYy0uNTY1LS4xNzEtLjg1My0uNjkxLTEuMjg0LTEuNzk0LS4xMjUtLjMxMy0uMjAyLS42MzItLjI3LS45MTMtLjA1MS0uMjEzLS4xMjctLjUzLS4xOTUtLjYzNEM3LjA2NyA5LjAwNCA3LjAzOSA5IDYuOTkgOUExIDEgMCAwIDEgNyA3aC4wMWMxLjY2Mi4wMTcgMi4wMTUgMS4zNzMgMi4xOTggMi4xMzQuNDg2LS45ODEgMS4zMDQtMi4wNTggMi43OTctMi4wNzUgMS41MzEuMDE4IDIuMjggMS4xNTMgMi43MzEgMi4xNDFsLjAwMi0uMDA4QzE0Ljk0NCA4LjQyNCAxNS4zMjcgNyAxNi45NzkgN2guMDMyQTEgMSAwIDEgMSAxNyA5aC0uMDExYy0uMTQ5LjA3Ni0uMjU2LjQ3NC0uMzE5LjcwOWE2LjQ4NCA2LjQ4NCAwIDAgMS0uMzExLjk1MWMtLjQyOS45NzMtLjc5IDEuNzg5LTEuNjE0IDEuNzg5XCIvPjwvc3ZnPmAsXG5cbiAgc21pbGV5czogYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj48cGF0aCBkPVwiTTEyIDBDNS4zNzMgMCAwIDUuMzczIDAgMTJzNS4zNzMgMTIgMTIgMTIgMTItNS4zNzMgMTItMTJTMTguNjI3IDAgMTIgMG0wIDIyQzYuNDg2IDIyIDIgMTcuNTE0IDIgMTJTNi40ODYgMiAxMiAyczEwIDQuNDg2IDEwIDEwLTQuNDg2IDEwLTEwIDEwXCIvPjxwYXRoIGQ9XCJNOCA3YTIgMiAwIDEgMC0uMDAxIDMuOTk5QTIgMiAwIDAgMCA4IDdNMTYgN2EyIDIgMCAxIDAtLjAwMSAzLjk5OUEyIDIgMCAwIDAgMTYgN00xNS4yMzIgMTVjLS42OTMgMS4xOTUtMS44NyAyLTMuMzQ5IDItMS40NzcgMC0yLjY1NS0uODA1LTMuMzQ3LTJIMTVtMy0ySDZhNiA2IDAgMSAwIDEyIDBcIi8+PC9zdmc+YCxcblxuICBwZW9wbGU6IGA8c3ZnIHhtbG5zOnN2Zz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgaGVpZ2h0PVwiMjRcIiB3aWR0aD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPiA8cGF0aCBpZD1cInBhdGgzODE0XCIgZD1cIm0gMy4zNTkxMDg5LDIxLjE3NzI2IGMgMC4xNzIwMzYsMC4wOTM4NSA0LjI2NTk5NCwyLjI5ODM3IDguODE0NDQ1MSwyLjI5ODM3IDQuOTI3NzY3LDAgOC42NzA4OTQsLTIuMjExODgzIDguODI3ODIsLTIuMzA2MDE5IDAuMTEzMDc5LC0wLjA2Nzg1IDAuMTgyMjY4LC0wLjE5MDA1MSAwLjE4MjI2NywtMC4zMjE5MjMgMCwtMy4wMzExOSAtMC45Mjk0OTQsLTUuODA0OTM2IC0yLjYxNzE5NiwtNy44MTA3MTIgLTEuMTgwNjAzLC0xLjQwMzEzNCAtMi42NjE5MTgsLTIuMzU5NTE2IC00LjI5NTY5OSwtMi43OTk3OTEgNC42OTkxMTgsLTIuMjM2MjU4IDMuMTAyMzA2LC05LjI4NjE3MTYyIC0yLjA5NzE5MSwtOS4yODYxNzE2MiAtNS4xOTk0OTc4LDAgLTYuNzk2MzEwMyw3LjA0OTkxMzYyIC0yLjA5NzE5Miw5LjI4NjE3MTYyIC0xLjYzMzc4MjEsMC40NDAyNzUgLTMuMTE1MDk3MSwxLjM5Njc5OCAtNC4yOTU2OTkxLDIuNzk5NzkxIC0xLjY4NzcwMywyLjAwNTc3NiAtMi42MTcxOTYsNC43Nzk1MjIgLTIuNjE3MTk2LDcuODEwNzEyIDEuMmUtNiwwLjEzNzM3OCAwLjA3NTAzOSwwLjI2Mzc4NSAwLjE5NTY0MSwwLjMyOTU3MiB6IE0gOC4wNDM5MzE5LDUuODMwODc4MyBDIDguMDQzOTMwOSwyLjE1MTUyMSAxMi40OTIxMDcsMC4zMDk1NTgxMSAxNS4wOTM0OTEsMi45MTA5NDExIDE3LjY5NDg3NCw1LjUxMjMyNDEgMTUuODUyOTExLDkuOTYwNTAwNiAxMi4xNzM1NTQsOS45NjA1IDkuODkzODk5MSw5Ljk1NzkxMzUgOC4wNDY1MTg2LDguMTEwNTMzMiA4LjA0MzkzMTksNS44MzA4NzgzIFogbSAtMS42ODg3ODIsNy42ODk0OTc3IGMgMS41MjQ1MzUsLTEuODExNDQ5IDMuNTkwNjYwMSwtMi44MDkwMzUgNS44MTg0MDQxLC0yLjgwOTAzNSAyLjIyNzc0NCwwIDQuMjkzODY5LDAuOTk3NTg2IDUuODE4NDA0LDIuODA5MDM1IDEuNTMzNjM5LDEuODIyNTcxIDIuMzk1OTMyLDQuMzM5ODU4IDIuNDM5MTUyLDcuMTA4MzAxIC0wLjgwMzM1MiwwLjQzNDg3NyAtNC4xNDE2MzYsMi4wOTYxMTIgLTguMjU3NTU2LDIuMDk2MTEyIC0zLjgwNjI5MjEsMCAtNy4zOTEwODYxLC0xLjY3MTA0MyAtOC4yNTczNjgxLC0yLjEwNDk4MSAwLjA0NTA1LC0yLjc2NTAxNyAwLjkwNjk2OCwtNS4yNzg3ODUgMi40Mzg5NjQsLTcuMDk5NDMyIHpcIiAvPiA8cGF0aCBpZD1cInBhdGgzODE2XCIgZD1cIk0gMTIuMTczODI4IDAuMzg4NjcxODggQyA5LjMxOTg1MTMgMC4zODg2NzE4NyA3LjM3NzA5ODggMi4zNjcyMjg1IDYuODY1MjM0NCA0LjYzMDg1OTQgQyA2LjQyMTg2MDggNi41OTE2MDE1IDcuMTE1MzU2MiA4Ljc2NzYxMTcgOC45NjQ4NDM4IDEwLjEyNjk1MyBDIDcuNjE0MTI0OSAxMC42NzczNzYgNi4zNTUwNTExIDExLjQ4MDk0NCA1LjM0OTYwOTQgMTIuNjc1NzgxIEMgMy41NjI5MzE3IDE0Ljc5OTE4NSAyLjYwMTU2MjUgMTcuNzAxNDc1IDIuNjAxNTYyNSAyMC44NDc2NTYgQyAyLjYwMTU2NTQgMjEuMTg5ODYxIDIuNzg5NDI3NiAyMS41MDgwMDIgMy4wODk4NDM4IDIxLjY3MTg3NSBDIDMuMzA0NDA2OCAyMS43ODg5MjUgNy40NDM2MjM5IDI0LjAzOTA2MiAxMi4xNzM4MjggMjQuMDM5MDYyIEMgMTcuMjY5OTE4IDI0LjAzOTA2MiAyMS4wODM1NjggMjEuNzc2Nzg2IDIxLjI5MTAxNiAyMS42NTIzNDQgQyAyMS41NzI4MSAyMS40ODMyNjYgMjEuNzQ2MDk3IDIxLjE3NjI4MiAyMS43NDYwOTQgMjAuODQ3NjU2IEMgMjEuNzQ2MDk0IDE3LjcwMTQ3NSAyMC43ODI3NyAxNC43OTkxODUgMTguOTk2MDk0IDEyLjY3NTc4MSBDIDE3Ljk5MDQ1NSAxMS40ODA1OTEgMTYuNzMzODE4IDEwLjY3NTM2MiAxNS4zODI4MTIgMTAuMTI1IEMgMTcuMjMxMTMyIDguNzY1NTU1MiAxNy45MjU2NzUgNi41OTEwNzAxIDE3LjQ4MjQyMiA0LjYzMDg1OTQgQyAxNi45NzA1NTcgMi4zNjcyMjg1IDE1LjAyNzgwNSAwLjM4ODY3MTg4IDEyLjE3MzgyOCAwLjM4ODY3MTg4IHogTSAxMi43OTI5NjkgMi4zMDA3ODEyIEMgMTMuNDY2MjUzIDIuNDE2MTc5MiAxNC4xMjUxMTMgMi43MzgzOTQxIDE0LjY5NTMxMiAzLjMwODU5MzggQyAxNS44MzU3MTIgNC40NDg5OTMxIDE1Ljk4NTYwNCA1Ljk0NzM1NDkgMTUuNDY4NzUgNy4xOTUzMTI1IEMgMTQuOTUxODk2IDguNDQzMjcwMSAxMy43ODY4MjggOS4zOTg0Mzc4IDEyLjE3MzgyOCA5LjM5ODQzNzUgQyAxMC4xOTc3MTkgOS4zOTYxOTU0IDguNjA3NzExIDcuODA2MTg3IDguNjA1NDY4OCA1LjgzMDA3ODEgQyA4LjYwNTQ2ODMgNC4yMTcwNzg1IDkuNTYwNjM2MiAzLjA1MjAxMDIgMTAuODA4NTk0IDIuNTM1MTU2MiBDIDExLjQzMjU3MyAyLjI3NjcyOTMgMTIuMTE5Njg1IDIuMTg1MzgzMyAxMi43OTI5NjkgMi4zMDA3ODEyIHogTSAxMi4xNzM4MjggMTEuMjczNDM4IEMgMTQuMjMzNjQ3IDExLjI3MzQzOCAxNi4xMzM2NzQgMTIuMTg1MDg0IDE3LjU2MjUgMTMuODgyODEyIEMgMTguOTMwNjkgMTUuNTA4NzY1IDE5LjY5ODM0NyAxNy43NzY5NjkgMTkuODA4NTk0IDIwLjI4MzIwMyBDIDE4LjgwNzM5NSAyMC44MDAyMzUgMTUuODg2MTU3IDIyLjE2MjEwOSAxMi4xNzM4MjggMjIuMTYyMTA5IEMgOC43NjE0NjMyIDIyLjE2MjEwOSA1LjYyNDU3NTQgMjAuNzg3MDY5IDQuNTM5MDYyNSAyMC4yNjU2MjUgQyA0LjY1MjU4OTYgMTcuNzY2NzE3IDUuNDIwMzMxNSAxNS41MDQ3OTEgNi43ODUxNTYyIDEzLjg4MjgxMiBDIDguMjEzOTgyNyAxMi4xODUwODQgMTAuMTE0MDEgMTEuMjczNDM4IDEyLjE3MzgyOCAxMS4yNzM0MzggeiBcIiAvPiA8L3N2Zz5gLFxuXG4gIHBsYWNlczogYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj48cGF0aCBkPVwiTTYuNSAxMkM1LjEyMiAxMiA0IDEzLjEyMSA0IDE0LjVTNS4xMjIgMTcgNi41IDE3IDkgMTUuODc5IDkgMTQuNSA3Ljg3OCAxMiA2LjUgMTJtMCAzYy0uMjc1IDAtLjUtLjIyNS0uNS0uNXMuMjI1LS41LjUtLjUuNS4yMjUuNS41LS4yMjUuNS0uNS41TTE3LjUgMTJjLTEuMzc4IDAtMi41IDEuMTIxLTIuNSAyLjVzMS4xMjIgMi41IDIuNSAyLjUgMi41LTEuMTIxIDIuNS0yLjUtMS4xMjItMi41LTIuNS0yLjVtMCAzYy0uMjc1IDAtLjUtLjIyNS0uNS0uNXMuMjI1LS41LjUtLjUuNS4yMjUuNS41LS4yMjUuNS0uNS41XCIvPjxwYXRoIGQ9XCJNMjIuNDgyIDkuNDk0bC0xLjAzOS0uMzQ2TDIxLjQgOWguNmMuNTUyIDAgMS0uNDM5IDEtLjk5MiAwLS4wMDYtLjAwMy0uMDA4LS4wMDMtLjAwOEgyM2MwLTEtLjg4OS0yLTEuOTg0LTJoLS42NDJsLS43MzEtMS43MTdDMTkuMjYyIDMuMDEyIDE4LjA5MSAyIDE2Ljc2NCAySDcuMjM2QzUuOTA5IDIgNC43MzggMy4wMTIgNC4zNTcgNC4yODNMMy42MjYgNmgtLjY0MkMxLjg4OSA2IDEgNyAxIDhoLjAwM1MxIDguMDAyIDEgOC4wMDhDMSA4LjU2MSAxLjQ0OCA5IDIgOWguNmwtLjA0My4xNDgtMS4wMzkuMzQ2YTIuMDAxIDIuMDAxIDAgMCAwLTEuMzU5IDIuMDk3bC43NTEgNy41MDhhMSAxIDAgMCAwIC45OTQuOTAxSDN2MWMwIDEuMTAzLjg5NiAyIDIgMmgyYzEuMTA0IDAgMi0uODk3IDItMnYtMWg2djFjMCAxLjEwMy44OTYgMiAyIDJoMmMxLjEwNCAwIDItLjg5NyAyLTJ2LTFoMS4wOTZhLjk5OS45OTkgMCAwIDAgLjk5NC0uOTAxbC43NTEtNy41MDhhMi4wMDEgMi4wMDEgMCAwIDAtMS4zNTktMi4wOTdNNi4yNzMgNC44NTdDNi40MDIgNC40MyA2Ljc4OCA0IDcuMjM2IDRoOS41MjdjLjQ0OCAwIC44MzQuNDMuOTYzLjg1N0wxOS4zMTMgOUg0LjY4OGwxLjU4NS00LjE0M3pNNyAyMUg1di0xaDJ2MXptMTIgMGgtMnYtMWgydjF6bTIuMTg5LTNIMi44MTFsLS42NjItNi42MDdMMyAxMWgxOGwuODUyLjM5M0wyMS4xODkgMTh6XCIvPjwvc3ZnPmAsXG5cbiAgcmVjZW50OiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiPjxwYXRoIGQ9XCJNMTMgNGgtMmwtLjAwMSA3SDl2MmgydjJoMnYtMmg0di0yaC00elwiLz48cGF0aCBkPVwiTTEyIDBDNS4zNzMgMCAwIDUuMzczIDAgMTJzNS4zNzMgMTIgMTIgMTIgMTItNS4zNzMgMTItMTJTMTguNjI3IDAgMTIgMG0wIDIyQzYuNDg2IDIyIDIgMTcuNTE0IDIgMTJTNi40ODYgMiAxMiAyczEwIDQuNDg2IDEwIDEwLTQuNDg2IDEwLTEwIDEwXCIvPjwvc3ZnPmAsXG5cbiAgc3ltYm9sczogYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj48cGF0aCBkPVwiTTAgMGgxMXYySDB6TTQgMTFoM1Y2aDRWNEgwdjJoNHpNMTUuNSAxN2MxLjM4MSAwIDIuNS0xLjExNiAyLjUtMi40OTNzLTEuMTE5LTIuNDkzLTIuNS0yLjQ5M1MxMyAxMy4xMyAxMyAxNC41MDcgMTQuMTE5IDE3IDE1LjUgMTdtMC0yLjk4NmMuMjc2IDAgLjUuMjIyLjUuNDkzIDAgLjI3Mi0uMjI0LjQ5My0uNS40OTNzLS41LS4yMjEtLjUtLjQ5My4yMjQtLjQ5My41LS40OTNNMjEuNSAxOS4wMTRjLTEuMzgxIDAtMi41IDEuMTE2LTIuNSAyLjQ5M1MyMC4xMTkgMjQgMjEuNSAyNHMyLjUtMS4xMTYgMi41LTIuNDkzLTEuMTE5LTIuNDkzLTIuNS0yLjQ5M20wIDIuOTg2YS40OTcuNDk3IDAgMCAxLS41LS40OTNjMC0uMjcxLjIyNC0uNDkzLjUtLjQ5M3MuNS4yMjIuNS40OTNhLjQ5Ny40OTcgMCAwIDEtLjUuNDkzTTIyIDEzbC05IDkgMS41MTMgMS41IDguOTktOS4wMDl6TTE3IDExYzIuMjA5IDAgNC0xLjExOSA0LTIuNVYycy45ODUtLjE2MSAxLjQ5OC45NDlDMjMuMDEgNC4wNTUgMjMgNiAyMyA2czEtMS4xMTkgMS0zLjEzNUMyNC0uMDIgMjEgMCAyMSAwaC0ydjYuMzQ3QTUuODUzIDUuODUzIDAgMCAwIDE3IDZjLTIuMjA5IDAtNCAxLjExOS00IDIuNXMxLjc5MSAyLjUgNCAyLjVNMTAuMjk3IDIwLjQ4MmwtMS40NzUtMS41ODVhNDcuNTQgNDcuNTQgMCAwIDEtMS40NDIgMS4xMjljLS4zMDctLjI4OC0uOTg5LTEuMDE2LTIuMDQ1LTIuMTgzLjkwMi0uODM2IDEuNDc5LTEuNDY2IDEuNzI5LTEuODkycy4zNzYtLjg3MS4zNzYtMS4zMzZjMC0uNTkyLS4yNzMtMS4xNzgtLjgxOC0xLjc1OS0uNTQ2LS41ODEtMS4zMjktLjg3MS0yLjM0OS0uODcxLTEuMDA4IDAtMS43OS4yOTMtMi4zNDQuODc5LS41NTYuNTg3LS44MzIgMS4xODEtLjgzMiAxLjc4NCAwIC44MTMuNDE5IDEuNzQ4IDEuMjU2IDIuODA1LS44NDcuNjE0LTEuNDQ0IDEuMjA4LTEuNzk0IDEuNzg0YTMuNDY1IDMuNDY1IDAgMCAwLS41MjMgMS44MzNjMCAuODU3LjMwOCAxLjU2LjkyNCAyLjEwNy42MTYuNTQ5IDEuNDIzLjgyMyAyLjQyLjgyMyAxLjE3MyAwIDIuNDQ0LS4zNzkgMy44MTMtMS4xMzdMOC4yMzUgMjRoMi44MTlsLTIuMDktMi4zODMgMS4zMzMtMS4xMzV6bS02LjczNi02LjM4OWExLjAyIDEuMDIgMCAwIDEgLjczLS4yODZjLjMxIDAgLjU1OS4wODUuNzQ3LjI1NGEuODQ5Ljg0OSAwIDAgMSAuMjgzLjY1OWMwIC41MTgtLjQxOSAxLjExMi0xLjI1NyAxLjc4NC0uNTM2LS42NTEtLjgwNS0xLjIzMS0uODA1LTEuNzQyYS45MDEuOTAxIDAgMCAxIC4zMDItLjY2OU0zLjc0IDIyYy0uNDI3IDAtLjc3OC0uMTE2LTEuMDU3LS4zNDktLjI3OS0uMjMyLS40MTgtLjQ4Ny0uNDE4LS43NjYgMC0uNTk0LjUwOS0xLjI4OCAxLjUyNy0yLjA4My45NjggMS4xMzQgMS43MTcgMS45NDYgMi4yNDggMi40MzgtLjkyMS41MDctMS42ODYuNzYtMi4zLjc2XCIvPjwvc3ZnPmAsXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNWR3NcbiIsImNvbnN0IG1hcHBpbmcgPSB7XG4gIG5hbWU6ICdhJyxcbiAgdW5pZmllZDogJ2InLFxuICBub25fcXVhbGlmaWVkOiAnYycsXG4gIGhhc19pbWdfYXBwbGU6ICdkJyxcbiAgaGFzX2ltZ19nb29nbGU6ICdlJyxcbiAgaGFzX2ltZ190d2l0dGVyOiAnZicsXG4gIGhhc19pbWdfZmFjZWJvb2s6ICdoJyxcbiAga2V5d29yZHM6ICdqJyxcbiAgc2hlZXQ6ICdrJyxcbiAgZW1vdGljb25zOiAnbCcsXG4gIHRleHQ6ICdtJyxcbiAgc2hvcnRfbmFtZXM6ICduJyxcbiAgYWRkZWRfaW46ICdvJyxcbn1cblxuY29uc3QgYnVpbGRTZWFyY2ggPSAoZW1vamkpID0+IHtcbiAgY29uc3Qgc2VhcmNoID0gW11cblxuICB2YXIgYWRkVG9TZWFyY2ggPSAoc3RyaW5ncywgc3BsaXQpID0+IHtcbiAgICBpZiAoIXN0cmluZ3MpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIDsoQXJyYXkuaXNBcnJheShzdHJpbmdzKSA/IHN0cmluZ3MgOiBbc3RyaW5nc10pLmZvckVhY2goKHN0cmluZykgPT4ge1xuICAgICAgOyhzcGxpdCA/IHN0cmluZy5zcGxpdCgvWy18X3xcXHNdKy8pIDogW3N0cmluZ10pLmZvckVhY2goKHMpID0+IHtcbiAgICAgICAgcyA9IHMudG9Mb3dlckNhc2UoKVxuXG4gICAgICAgIGlmIChzZWFyY2guaW5kZXhPZihzKSA9PSAtMSkge1xuICAgICAgICAgIHNlYXJjaC5wdXNoKHMpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGFkZFRvU2VhcmNoKGVtb2ppLnNob3J0X25hbWVzLCB0cnVlKVxuICBhZGRUb1NlYXJjaChlbW9qaS5uYW1lLCB0cnVlKVxuICBhZGRUb1NlYXJjaChlbW9qaS5rZXl3b3JkcywgZmFsc2UpXG4gIGFkZFRvU2VhcmNoKGVtb2ppLmVtb3RpY29ucywgZmFsc2UpXG5cbiAgcmV0dXJuIHNlYXJjaC5qb2luKCcsJylcbn1cblxuZnVuY3Rpb24gZGVlcEZyZWV6ZShvYmplY3QpIHtcbiAgLy8gUmV0cmlldmUgdGhlIHByb3BlcnR5IG5hbWVzIGRlZmluZWQgb24gb2JqZWN0XG4gIHZhciBwcm9wTmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmplY3QpXG5cbiAgLy8gRnJlZXplIHByb3BlcnRpZXMgYmVmb3JlIGZyZWV6aW5nIHNlbGZcbiAgZm9yIChsZXQgbmFtZSBvZiBwcm9wTmFtZXMpIHtcbiAgICBsZXQgdmFsdWUgPSBvYmplY3RbbmFtZV1cbiAgICBvYmplY3RbbmFtZV0gPVxuICAgICAgdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyA/IGRlZXBGcmVlemUodmFsdWUpIDogdmFsdWVcbiAgfVxuICByZXR1cm4gT2JqZWN0LmZyZWV6ZShvYmplY3QpXG59XG5cbmNvbnN0IHVuY29tcHJlc3MgPSAoZGF0YSkgPT4ge1xuICBpZiAoIWRhdGEuY29tcHJlc3NlZCkge1xuICAgIHJldHVybiBkYXRhXG4gIH1cbiAgZGF0YS5jb21wcmVzc2VkID0gZmFsc2VcblxuICBmb3IgKGxldCBpZCBpbiBkYXRhLmVtb2ppcykge1xuICAgIGxldCBlbW9qaSA9IGRhdGEuZW1vamlzW2lkXVxuXG4gICAgZm9yIChsZXQga2V5IGluIG1hcHBpbmcpIHtcbiAgICAgIGVtb2ppW2tleV0gPSBlbW9qaVttYXBwaW5nW2tleV1dXG4gICAgICBkZWxldGUgZW1vamlbbWFwcGluZ1trZXldXVxuICAgIH1cblxuICAgIGlmICghZW1vamkuc2hvcnRfbmFtZXMpIGVtb2ppLnNob3J0X25hbWVzID0gW11cbiAgICBlbW9qaS5zaG9ydF9uYW1lcy51bnNoaWZ0KGlkKVxuXG4gICAgZW1vamkuc2hlZXRfeCA9IGVtb2ppLnNoZWV0WzBdXG4gICAgZW1vamkuc2hlZXRfeSA9IGVtb2ppLnNoZWV0WzFdXG4gICAgZGVsZXRlIGVtb2ppLnNoZWV0XG5cbiAgICBpZiAoIWVtb2ppLnRleHQpIGVtb2ppLnRleHQgPSAnJ1xuXG4gICAgaWYgKCFlbW9qaS5hZGRlZF9pbikgZW1vamkuYWRkZWRfaW4gPSA2XG4gICAgZW1vamkuYWRkZWRfaW4gPSBlbW9qaS5hZGRlZF9pbi50b0ZpeGVkKDEpXG5cbiAgICBlbW9qaS5zZWFyY2ggPSBidWlsZFNlYXJjaChlbW9qaSlcbiAgfVxuICBkYXRhID0gZGVlcEZyZWV6ZShkYXRhKVxuICByZXR1cm4gZGF0YVxufVxuXG5leHBvcnQgeyBidWlsZFNlYXJjaCwgdW5jb21wcmVzcyB9XG4iLCJpbXBvcnQgeyBpbnRlcnNlY3QsIHVuaWZpZWRUb05hdGl2ZSB9IGZyb20gJy4vaW5kZXgnXG5pbXBvcnQgeyB1bmNvbXByZXNzLCBidWlsZFNlYXJjaCB9IGZyb20gJy4vZGF0YSdcbmltcG9ydCBmcmVxdWVudGx5IGZyb20gJy4vZnJlcXVlbnRseSdcblxuY29uc3QgU0hFRVRfQ09MVU1OUyA9IDU3XG5jb25zdCBDT0xPTlNfUkVHRVggPSAvXig/OlxcOihbXlxcOl0rKVxcOikoPzpcXDpza2luLXRvbmUtKFxcZClcXDopPyQvXG4vLyBTa2luIHRvbmVzXG5jb25zdCBTS0lOUyA9IFsnMUYzRkEnLCAnMUYzRkInLCAnMUYzRkMnLCAnMUYzRkQnLCAnMUYzRkUnLCAnMUYzRkYnXVxuXG4vKipcbiAqIEVtb2ppIGRhdGEgc3RydWN0dXJlOlxuICoge1xuICogICAgXCJjb21wcmVzc2VkXCI6IGZhbHNlLFxuICogICAgXCJhbGlhc2VzXCI6IHtcbiAqICAgICAgY29sbGlzaW9uOiBcImJvb21cIlxuICogICAgICBjb29raW5nOiBcImZyaWVkX2VnZ1wiXG4gKiAgICAgIGVudmVsb3BlOiBcImVtYWlsXCJcbiAqICAgICAgZmFjZV93aXRoX2Zpbmdlcl9jb3ZlcmluZ19jbG9zZWRfbGlwczogXCJzaHVzaGluZ19mYWNlXCJcbiAqICAgICAgLi4uXG4gKiAgICB9LFxuICogICAgXCJjYXRlZ29yaWVzXCI6IFsge1xuICogICAgICBpZDogXCJwZW9wbGVcIixcbiAqICAgICAgbmFtZTogXCJTbWlsZXlzICYgRW1vdGlvblwiLFxuICogICAgICBlbW9qaXM6IFsgXCJncmlubmluZ1wiLCBcImdyaW5cIiwgXCJqb3lcIiwgLi4uIF1cbiAqICAgIH0sIHtcbiAqICAgICAgaWQ6IFwibmF0dXJlXCIsXG4gKiAgICAgIG5hbWU6IFwiQW5pbWFscyAmIE5hdHVyZVwiLFxuICogICAgICBlbW9qaXM6IFsgXCJtb25rZXlfZmFjZVwiLCBcIm1vbmV5XCIsIFwiZ29yaWxsYVwiLCAuLi4gXVxuICogICAgfSxcbiAqICAgIC4uLlxuICogICAgXSxcbiAqICAgIFwiZW1vamlzXCI6IFtcbiAqICAgICAgc21pbGV5OiB7XG4gKiAgICAgICAgYWRkZWRfaW46IFwiNi4wXCIsXG4gKiAgICAgICAgZW1vdGljb25zOiBbXCI9KVwiLCBcIj0tKVwiXSxcbiAqICAgICAgICBoYXNfaW1nX2FwcGxlOiB0cnVlLFxuICogICAgICAgIGhhc19pbWdfZmFjZWJvb2s6IHRydWUsXG4gKiAgICAgICAgaGFzX2ltZ19nb29nbGU6IHRydWUsXG4gKiAgICAgICAgaGFzX2ltZ190d2l0dGVyOiB0cnVlLFxuICogICAgICAgIGtleXdvcmRzOiBbXCJmYWNlXCIsIFwiaGFwcHlcIiwgXCJqb3lcIiwgXCJoYWhhXCIsIFwiOkRcIiwgXCI6KVwiLCBcInNtaWxlXCIsIFwiZnVubnlcIl0sXG4gKiAgICAgICAgbmFtZTogXCJTbWlsaW5nIEZhY2Ugd2l0aCBPcGVuIE1vdXRoXCIsXG4gKiAgICAgICAgbm9uX3F1YWxpZmllZDogdW5kZWZpbmVkLFxuICogICAgICAgIHNlYXJjaDogXCJzbWlsZXksc21pbGluZyxmYWNlLHdpdGgsb3Blbixtb3V0aCxoYXBweSxqb3ksaGFoYSw6ZCw6KSxzbWlsZSxmdW5ueSw9KSw9LSlcIixcbiAqICAgICAgICBzaGVldF94OiAzMCxcbiAqICAgICAgICBzaGVldF95OiAyNyxcbiAqICAgICAgICBzaG9ydF9uYW1lczogW1wic21pbGV5XCJdLFxuICogICAgICAgIHRleHQ6IFwiOilcIixcbiAqICAgICAgICB1bmlmaWVkOiBcIjFGNjAzXCIsXG4gKiAgICAgIH0sIHtcbiAqICAgICAgKzE6IHsgICAgLy8gZW1vamkgd2l0aCBza2luX3ZhcmlhdGlvbnNcbiAqICAgICAgICAgIC4uLiwgLy8gYWxsIHRoZSByZWd1bGFyIGZpZWxkcyBhcmUgcHJlc2VudFxuICogICAgICAgICAgbmFtZTogXCJUaHVtYnMgVXAgU2lnblwiLFxuICogICAgICAgICAgc2hvcnRfbmFtZXM6ICgyKSBbXCIrMVwiLCBcInRodW1ic3VwXCJdLFxuICogICAgICAgICAgc2tpbl92YXJpYXRpb25zOiB7XG4gKiAgICAgICAgICAgIDFGM0ZCOiAgICAgICAgICAgICAvLyBlYWNoIHZhcmlhdGlvbiBoYXMgYWRkaXRpb25hbCBzZXQgb2YgZmllbGRzOlxuICogICAgICAgICAgICAgIGFkZGVkX2luOiBcIjguMFwiLFxuICogICAgICAgICAgICAgIGhhc19pbWdfYXBwbGU6IHRydWUsXG4gKiAgICAgICAgICAgICAgaGFzX2ltZ19mYWNlYm9vazogdHJ1ZSxcbiAqICAgICAgICAgICAgICBoYXNfaW1nX2dvb2dsZTogdHJ1ZSxcbiAqICAgICAgICAgICAgICBoYXNfaW1nX3R3aXR0ZXI6IHRydWUsXG4gKiAgICAgICAgICAgICAgaW1hZ2U6IFwiMWY0NGQtMWYzZmIucG5nXCIsXG4gKiAgICAgICAgICAgICAgbm9uX3F1YWxpZmllZDogbnVsbCxcbiAqICAgICAgICAgICAgICBzaGVldF94OiAxNCxcbiAqICAgICAgICAgICAgICBzaGVldF95OiA1MCxcbiAqICAgICAgICAgICAgICB1bmlmaWVkOiBcIjFGNDRELTFGM0ZCXCIsXG4gKiAgICAgICAgICAgIDFGM0ZCOiB74oCmfSxcbiAqICAgICAgICAgICAgMUYzRkM6IHvigKZ9LFxuICogICAgICAgICAgICAxRjNGRDoge+KApn0sXG4gKiAgICAgICAgICAgIDFGM0ZFOiB74oCmfSxcbiAqICAgICAgICAgICAgMUYzRkY6IHvigKZ9XG4gKiAgICAgICAgICAgIH0sXG4gKiAgICAgICAgICAuLi5cbiAqICAgICAgfSxcbiAqICAgICAgYTogeyAgLy8gZW1vamkgd2l0aCBub25fcXVhbGlmaWVkIGZpZWxkIHNldFxuICogICAgICAgIGFkZGVkX2luOiBcIjYuMFwiLFxuICogICAgICAgIGVtb3RpY29uczogdW5kZWZpbmVkLFxuICogICAgICAgIGhhc19pbWdfYXBwbGU6IHRydWUsXG4gKiAgICAgICAgLi4uXG4gKiAgICAgICAgbm9uX3F1YWxpZmllZDogXCIxRjE3MFwiLFxuICogICAgICAgIHVuaWZpZWQ6IFwiMUYxNzAtRkUwRlwiLFxuICogICAgIH0sXG4gKiAgICAgLi4uXG4gKiAgIF1cbiAqIH1cbiAqL1xuXG4vKipcbiAqIFdyYXBzIHJhdyBqYXNvbiBlbW9qaSBkYXRhLCBzZXJ2ZXMgYXMgZGF0YSBzb3VyY2UgZm9yXG4gKiBlbW9qaSBwaWNrZXIgY29tcG9uZW50cy5cbiAqXG4gKiBVc2FnZTpcbiAqXG4gKiAgIGltcG9ydCBkYXRhIGZyb20gJy4uL2RhdGEvYWxsLmpzb24nXG4gKiAgIGxldCBpbmRleCA9IG5ldyBFbW9qaUluZGV4KGRhdGEpXG4gKlxuICovXG5leHBvcnQgY2xhc3MgRW1vamlJbmRleCB7XG4gIC8qKlxuICAgKiBDb25zdHJ1Y3Rvci5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGRhdGEgLSBSYXcganNvbiBkYXRhLCBzZWUgdGhlIHN0cnVjdHVyZSBhYm92ZS5cbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBhZGRpdGlvbmFsIG9wdGlvbnMsIGFzIGFuIG9iamVjdDpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZW1vamlzVG9TaG93RmlsdGVyIC0gb3B0aW9uYWwsIGZ1bmN0aW9uIHRvIGZpbHRlciBvdXRcbiAgICogICBzb21lIGVtb2ppcywgZnVuY3Rpb24oZW1vamkpIHsgcmV0dXJuIHRydWV8ZmFsc2UgfVxuICAgKiAgIHdoZXJlIGBlbW9qaWAgaXMgYW4gcmF3IGVtb2ppIG9iamVjdCwgc2VlIGRhdGEuZW1vamlzIGFib3ZlLlxuICAgKiBAcGFyYW0ge0FycmF5fSBpbmNsdWRlIC0gb3B0aW9uYWwsIGEgbGlzdCBvZiBjYXRlZ29yeSBpZHMgdG8gaW5jbHVkZS5cbiAgICogQHBhcmFtIHtBcnJheX0gZXhjbHVkZSAtIG9wdGlvbmFsLCBhIGxpc3Qgb2YgY2F0ZWdvcnkgaWRzIHRvIGV4Y2x1ZGUuXG4gICAqIEBwYXJhbSB7QXJyYXl9IGN1c3RvbSAtIG9wdGlvbmFsLCBhIGxpc3QgY3VzdG9tIGVtb2ppcywgZWFjaCBlbW9qaSBpc1xuICAgKiAgIGFuIG9iamVjdCwgc2VlIGRhdGEuZW1vamlzIGFib3ZlIGZvciBleGFtcGxlcy5cbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIGRhdGEsXG4gICAge1xuICAgICAgZW1vamlzVG9TaG93RmlsdGVyLFxuICAgICAgaW5jbHVkZSxcbiAgICAgIGV4Y2x1ZGUsXG4gICAgICBjdXN0b20sXG4gICAgICByZWNlbnQsXG4gICAgICByZWNlbnRMZW5ndGggPSAyMCxcbiAgICB9ID0ge30sXG4gICkge1xuICAgIHRoaXMuX2RhdGEgPSB1bmNvbXByZXNzKGRhdGEpXG4gICAgLy8gQ2FsbGJhY2sgdG8gZXhjbHVkZSBzcGVjaWZpYyBlbW9qaXNcbiAgICB0aGlzLl9lbW9qaXNGaWx0ZXIgPSBlbW9qaXNUb1Nob3dGaWx0ZXIgfHwgbnVsbFxuICAgIC8vIENhdGVnb3JpZXMgdG8gaW5jbHVkZSAvIGV4Y2x1ZGVcbiAgICB0aGlzLl9pbmNsdWRlID0gaW5jbHVkZSB8fCBudWxsXG4gICAgdGhpcy5fZXhjbHVkZSA9IGV4Y2x1ZGUgfHwgbnVsbFxuICAgIC8vIEN1c3RvbSBlbW9qaXNcbiAgICB0aGlzLl9jdXN0b20gPSBjdXN0b20gfHwgW11cbiAgICAvLyBSZWNlbnQgZW1vamlzXG4gICAgLy8gVE9ETzogbWFrZSBwYXJhbWV0ZXIgY29uZmlndXJhYmxlXG4gICAgdGhpcy5fcmVjZW50ID0gcmVjZW50IHx8IGZyZXF1ZW50bHkuZ2V0KHJlY2VudExlbmd0aClcblxuICAgIHRoaXMuX2Vtb2ppcyA9IHt9XG4gICAgdGhpcy5fbmF0aXZlRW1vamlzID0ge31cbiAgICB0aGlzLl9lbW90aWNvbnMgPSB7fVxuXG4gICAgdGhpcy5fY2F0ZWdvcmllcyA9IFtdXG4gICAgdGhpcy5fcmVjZW50Q2F0ZWdvcnkgPSB7IGlkOiAncmVjZW50JywgbmFtZTogJ1JlY2VudCcsIGVtb2ppczogW10gfVxuICAgIHRoaXMuX2N1c3RvbUNhdGVnb3J5ID0geyBpZDogJ2N1c3RvbScsIG5hbWU6ICdDdXN0b20nLCBlbW9qaXM6IFtdIH1cbiAgICB0aGlzLl9zZWFyY2hJbmRleCA9IHt9XG4gICAgdGhpcy5idWlsZEluZGV4KClcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpXG4gIH1cblxuICBidWlsZEluZGV4KCkge1xuICAgIGxldCBhbGxDYXRlZ29yaWVzID0gdGhpcy5fZGF0YS5jYXRlZ29yaWVzXG5cbiAgICBpZiAodGhpcy5faW5jbHVkZSkge1xuICAgICAgLy8gUmVtb3ZlIGNhdGVnb3JpZXMgdGhhdCBhcmUgbm90IGluIHRoZSBpbmNsdWRlIGxpc3QuXG4gICAgICBhbGxDYXRlZ29yaWVzID0gYWxsQ2F0ZWdvcmllcy5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luY2x1ZGUuaW5jbHVkZXMoaXRlbS5pZClcbiAgICAgIH0pXG4gICAgICAvLyBTb3J0IGNhdGVnb3JpZXMgYWNjb3JkaW5nIHRvIHRoZSBpbmNsdWRlIGxpc3QuXG4gICAgICBhbGxDYXRlZ29yaWVzID0gYWxsQ2F0ZWdvcmllcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIGNvbnN0IGluZGV4QSA9IHRoaXMuX2luY2x1ZGUuaW5kZXhPZihhLmlkKVxuICAgICAgICBjb25zdCBpbmRleEIgPSB0aGlzLl9pbmNsdWRlLmluZGV4T2YoYi5pZClcbiAgICAgICAgaWYgKGluZGV4QSA8IGluZGV4Qikge1xuICAgICAgICAgIHJldHVybiAtMVxuICAgICAgICB9XG4gICAgICAgIGlmIChpbmRleEEgPiBpbmRleEIpIHtcbiAgICAgICAgICByZXR1cm4gMVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwXG4gICAgICB9KVxuICAgIH1cblxuICAgIGFsbENhdGVnb3JpZXMuZm9yRWFjaCgoY2F0ZWdvcnlEYXRhKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuaXNDYXRlZ29yeU5lZWRlZChjYXRlZ29yeURhdGEuaWQpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgbGV0IGNhdGVnb3J5ID0ge1xuICAgICAgICBpZDogY2F0ZWdvcnlEYXRhLmlkLFxuICAgICAgICBuYW1lOiBjYXRlZ29yeURhdGEubmFtZSxcbiAgICAgICAgZW1vamlzOiBbXSxcbiAgICAgIH1cbiAgICAgIGNhdGVnb3J5RGF0YS5lbW9qaXMuZm9yRWFjaCgoZW1vamlJZCkgPT4ge1xuICAgICAgICBsZXQgZW1vamkgPSB0aGlzLmFkZEVtb2ppKGVtb2ppSWQpXG4gICAgICAgIGlmIChlbW9qaSkge1xuICAgICAgICAgIGNhdGVnb3J5LmVtb2ppcy5wdXNoKGVtb2ppKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgaWYgKGNhdGVnb3J5LmVtb2ppcy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5fY2F0ZWdvcmllcy5wdXNoKGNhdGVnb3J5KVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5pc0NhdGVnb3J5TmVlZGVkKCdjdXN0b20nKSkge1xuICAgICAgaWYgKHRoaXMuX2N1c3RvbS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZvciAobGV0IGN1c3RvbUVtb2ppIG9mIHRoaXMuX2N1c3RvbSkge1xuICAgICAgICAgIHRoaXMuYWRkQ3VzdG9tRW1vamkoY3VzdG9tRW1vamkpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9jdXN0b21DYXRlZ29yeS5lbW9qaXMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuX2NhdGVnb3JpZXMucHVzaCh0aGlzLl9jdXN0b21DYXRlZ29yeSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc0NhdGVnb3J5TmVlZGVkKCdyZWNlbnQnKSkge1xuICAgICAgaWYgKHRoaXMuX3JlY2VudC5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5fcmVjZW50Lm1hcCgoaWQpID0+IHtcbiAgICAgICAgICBmb3IgKGxldCBjdXN0b21FbW9qaSBvZiB0aGlzLl9jdXN0b21DYXRlZ29yeS5lbW9qaXMpIHtcbiAgICAgICAgICAgIGlmIChjdXN0b21FbW9qaS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgdGhpcy5fcmVjZW50Q2F0ZWdvcnkuZW1vamlzLnB1c2goY3VzdG9tRW1vamkpXG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGhpcy5oYXNFbW9qaShpZCkpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlY2VudENhdGVnb3J5LmVtb2ppcy5wdXNoKHRoaXMuZW1vamkoaWQpKVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIC8vIEFkZCByZWNlbnQgY2F0ZWdvcnkgdG8gdGhlIHRvcFxuICAgICAgaWYgKHRoaXMuX3JlY2VudENhdGVnb3J5LmVtb2ppcy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5fY2F0ZWdvcmllcy51bnNoaWZ0KHRoaXMuX3JlY2VudENhdGVnb3J5KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIHRoZSBlbW9qaSBmcm9tIHRoZSBzdHJpbmdcbiAgICovXG4gIGZpbmRFbW9qaShlbW9qaSwgc2tpbikge1xuICAgIC8vIDEuIFBhcnNlIGFzIDplbW9qaV9uYW1lOnNraW4tdG9uZS14eDpcbiAgICBsZXQgbWF0Y2hlcyA9IGVtb2ppLm1hdGNoKENPTE9OU19SRUdFWClcblxuICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICBlbW9qaSA9IG1hdGNoZXNbMV1cbiAgICAgIGlmIChtYXRjaGVzWzJdKSB7XG4gICAgICAgIHNraW4gPSBwYXJzZUludChtYXRjaGVzWzJdLCAxMClcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAyLiBDaGVjayBpZiB0aGUgc3BlY2lmaWVkIGVtb2ppIGlzIGFuIGFsaWFzXG4gICAgaWYgKHRoaXMuX2RhdGEuYWxpYXNlcy5oYXNPd25Qcm9wZXJ0eShlbW9qaSkpIHtcbiAgICAgIGVtb2ppID0gdGhpcy5fZGF0YS5hbGlhc2VzW2Vtb2ppXVxuICAgIH1cblxuICAgIC8vIDMuIENoZWNrIGlmIHdlIGhhdmUgdGhlIHNwZWNpZmllZCBlbW9qaVxuICAgIGlmICh0aGlzLl9lbW9qaXMuaGFzT3duUHJvcGVydHkoZW1vamkpKSB7XG4gICAgICBsZXQgZW1vamlPYmplY3QgPSB0aGlzLl9lbW9qaXNbZW1vamldXG4gICAgICBpZiAoc2tpbikge1xuICAgICAgICByZXR1cm4gZW1vamlPYmplY3QuZ2V0U2tpbihza2luKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGVtb2ppT2JqZWN0XG4gICAgfVxuXG4gICAgLy8gNC4gQ2hlY2sgaWYgd2UgaGF2ZSB0aGUgc3BlY2lmaWVkIG5hdGl2ZSBlbW9qaVxuICAgIGlmICh0aGlzLl9uYXRpdmVFbW9qaXMuaGFzT3duUHJvcGVydHkoZW1vamkpKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbmF0aXZlRW1vamlzW2Vtb2ppXVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgY2F0ZWdvcmllcygpIHtcbiAgICByZXR1cm4gdGhpcy5fY2F0ZWdvcmllc1xuICB9XG5cbiAgZW1vamkoZW1vamlJZCkge1xuICAgIGlmICh0aGlzLl9kYXRhLmFsaWFzZXMuaGFzT3duUHJvcGVydHkoZW1vamlJZCkpIHtcbiAgICAgIGVtb2ppSWQgPSB0aGlzLl9kYXRhLmFsaWFzZXNbZW1vamlJZF1cbiAgICB9XG4gICAgbGV0IGVtb2ppID0gdGhpcy5fZW1vamlzW2Vtb2ppSWRdXG4gICAgaWYgKCFlbW9qaSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW4gbm90IGZpbmQgZW1vamkgYnkgaWQ6ICcgKyBlbW9qaUlkKVxuICAgIH1cbiAgICByZXR1cm4gZW1vamlcbiAgfVxuXG4gIGZpcnN0RW1vamkoKSB7XG4gICAgbGV0IGVtb2ppID0gdGhpcy5fZW1vamlzW09iamVjdC5rZXlzKHRoaXMuX2Vtb2ppcylbMF1dXG4gICAgaWYgKCFlbW9qaSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW4gbm90IGdldCBmaXJzdCBlbW9qaScpXG4gICAgfVxuICAgIHJldHVybiBlbW9qaVxuICB9XG5cbiAgaGFzRW1vamkoZW1vamlJZCkge1xuICAgIGlmICh0aGlzLl9kYXRhLmFsaWFzZXMuaGFzT3duUHJvcGVydHkoZW1vamlJZCkpIHtcbiAgICAgIGVtb2ppSWQgPSB0aGlzLl9kYXRhLmFsaWFzZXNbZW1vamlJZF1cbiAgICB9XG4gICAgaWYgKHRoaXMuX2Vtb2ppc1tlbW9qaUlkXSkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBuYXRpdmVFbW9qaSh1bmljb2RlRW1vamkpIHtcbiAgICBpZiAodGhpcy5fbmF0aXZlRW1vamlzLmhhc093blByb3BlcnR5KHVuaWNvZGVFbW9qaSkpIHtcbiAgICAgIHJldHVybiB0aGlzLl9uYXRpdmVFbW9qaXNbdW5pY29kZUVtb2ppXVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgc2VhcmNoKHZhbHVlLCBtYXhSZXN1bHRzKSB7XG4gICAgbWF4UmVzdWx0cyB8fCAobWF4UmVzdWx0cyA9IDc1KVxuICAgIGlmICghdmFsdWUubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICBpZiAodmFsdWUgPT0gJy0nIHx8IHZhbHVlID09ICctMScpIHtcbiAgICAgIHJldHVybiBbdGhpcy5lbW9qaSgnLTEnKV1cbiAgICB9XG5cbiAgICBsZXQgdmFsdWVzID0gdmFsdWUudG9Mb3dlckNhc2UoKS5zcGxpdCgvW1xcc3wsfFxcLXxfXSsvKVxuICAgIGxldCBhbGxSZXN1bHRzID0gW11cblxuICAgIGlmICh2YWx1ZXMubGVuZ3RoID4gMikge1xuICAgICAgdmFsdWVzID0gW3ZhbHVlc1swXSwgdmFsdWVzWzFdXVxuICAgIH1cblxuICAgIGFsbFJlc3VsdHMgPSB2YWx1ZXNcbiAgICAgIC5tYXAoKHZhbHVlKSA9PiB7XG4gICAgICAgIC8vIFN0YXJ0IHNlYXJjaGluIGluIHRoZSBnbG9iYWwgbGlzdCBvZiBlbW9qaXNcbiAgICAgICAgbGV0IGVtb2ppcyA9IHRoaXMuX2Vtb2ppc1xuICAgICAgICBsZXQgY3VycmVudEluZGV4ID0gdGhpcy5fc2VhcmNoSW5kZXhcbiAgICAgICAgbGV0IGxlbmd0aCA9IDBcblxuICAgICAgICBmb3IgKGxldCBjaGFySW5kZXggPSAwOyBjaGFySW5kZXggPCB2YWx1ZS5sZW5ndGg7IGNoYXJJbmRleCsrKSB7XG4gICAgICAgICAgY29uc3QgY2hhciA9IHZhbHVlW2NoYXJJbmRleF1cbiAgICAgICAgICBsZW5ndGgrK1xuXG4gICAgICAgICAgY3VycmVudEluZGV4W2NoYXJdIHx8IChjdXJyZW50SW5kZXhbY2hhcl0gPSB7fSlcbiAgICAgICAgICBjdXJyZW50SW5kZXggPSBjdXJyZW50SW5kZXhbY2hhcl1cblxuICAgICAgICAgIGlmICghY3VycmVudEluZGV4LnJlc3VsdHMpIHtcbiAgICAgICAgICAgIGxldCBzY29yZXMgPSB7fVxuICAgICAgICAgICAgY3VycmVudEluZGV4LnJlc3VsdHMgPSBbXVxuICAgICAgICAgICAgY3VycmVudEluZGV4LmVtb2ppcyA9IHt9XG5cbiAgICAgICAgICAgIGZvciAobGV0IGVtb2ppSWQgaW4gZW1vamlzKSB7XG4gICAgICAgICAgICAgIGxldCBlbW9qaSA9IGVtb2ppc1tlbW9qaUlkXVxuICAgICAgICAgICAgICAvLyBzZWFyY2ggaXMgYSBjb21tYS1zZXBhcmF0ZWQgc3RyaW5nIHdpdGggd29yZHMsIHJlbGF0ZWRcbiAgICAgICAgICAgICAgLy8gdG8gdGhlIGVtb2ppLCBmb3IgZXhhbXBsZTpcbiAgICAgICAgICAgICAgLy8gc2VhcmNoOiBcInNtaWxleSxzbWlsaW5nLGZhY2Usam95LGhhaGEsOmQsOiksc21pbGUsZnVubnksPSksPS0pXCIsXG4gICAgICAgICAgICAgIGxldCBzZWFyY2ggPSBlbW9qaS5fZGF0YS5zZWFyY2hcbiAgICAgICAgICAgICAgbGV0IHN1YiA9IHZhbHVlLnN1YnN0cigwLCBsZW5ndGgpXG4gICAgICAgICAgICAgIGxldCBzdWJJbmRleCA9IHNlYXJjaC5pbmRleE9mKHN1YilcbiAgICAgICAgICAgICAgaWYgKHN1YkluZGV4ICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNjb3JlID0gc3ViSW5kZXggKyAxXG4gICAgICAgICAgICAgICAgaWYgKHN1YiA9PSBlbW9qaUlkKSBzY29yZSA9IDBcblxuICAgICAgICAgICAgICAgIGN1cnJlbnRJbmRleC5yZXN1bHRzLnB1c2goZW1vamkpXG4gICAgICAgICAgICAgICAgY3VycmVudEluZGV4LmVtb2ppc1tlbW9qaUlkXSA9IGVtb2ppXG5cbiAgICAgICAgICAgICAgICBzY29yZXNbZW1vamlJZF0gPSBzY29yZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdXJyZW50SW5kZXgucmVzdWx0cy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgIHZhciBhU2NvcmUgPSBzY29yZXNbYS5pZF0sXG4gICAgICAgICAgICAgICAgYlNjb3JlID0gc2NvcmVzW2IuaWRdXG4gICAgICAgICAgICAgIHJldHVybiBhU2NvcmUgLSBiU2NvcmVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gY29udGludWUgc2VhcmNoIGluIHRoZSByZWR1Y2VkIHNldCBvZiBlbW9qaXNcbiAgICAgICAgICBlbW9qaXMgPSBjdXJyZW50SW5kZXguZW1vamlzXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGN1cnJlbnRJbmRleC5yZXN1bHRzXG4gICAgICAgIC8vIFRoZSBcImZpbHRlclwiIGNhbGwgcmVtb3ZlcyB1bmRlZmluZWQgdmFsdWVzIGZyb20gYWxsUmVzdWx0c1xuICAgICAgICAvLyBhcnJheSwgZm9yIGV4YW1wbGUsIGlmIHdlIGhhdmUgXCJ0ZXN0IFwiICh3aXRoIHRyYWlsaW5nIHNwYWNlKSxcbiAgICAgICAgLy8gd2Ugd2lsbCBnZXQgXCJbQXJyYXksIHVuZGVmaW5lZF1cIiBmb3IgYWxsUmVzdWx0cyBhbmQgYWZ0ZXJcbiAgICAgICAgLy8gdGhlIFwiZmlsdGVyXCIgY2FsbCBpdCB3aWxsIHR1cm4gaW50byBcIltBcnJheV1cIlxuICAgICAgfSlcbiAgICAgIC5maWx0ZXIoKGEpID0+IGEpXG5cbiAgICB2YXIgcmVzdWx0cyA9IG51bGxcbiAgICBpZiAoYWxsUmVzdWx0cy5sZW5ndGggPiAxKSB7XG4gICAgICByZXN1bHRzID0gaW50ZXJzZWN0LmFwcGx5KG51bGwsIGFsbFJlc3VsdHMpXG4gICAgfSBlbHNlIGlmIChhbGxSZXN1bHRzLmxlbmd0aCkge1xuICAgICAgcmVzdWx0cyA9IGFsbFJlc3VsdHNbMF1cbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0cyA9IFtdXG4gICAgfVxuICAgIGlmIChyZXN1bHRzICYmIHJlc3VsdHMubGVuZ3RoID4gbWF4UmVzdWx0cykge1xuICAgICAgcmVzdWx0cyA9IHJlc3VsdHMuc2xpY2UoMCwgbWF4UmVzdWx0cylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHNcbiAgfVxuXG4gIGFkZEN1c3RvbUVtb2ppKGN1c3RvbUVtb2ppKSB7XG4gICAgbGV0IGVtb2ppRGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIGN1c3RvbUVtb2ppLCB7XG4gICAgICBpZDogY3VzdG9tRW1vamkuc2hvcnRfbmFtZXNbMF0sXG4gICAgICBjdXN0b206IHRydWUsXG4gICAgfSlcbiAgICBpZiAoIWVtb2ppRGF0YS5zZWFyY2gpIHtcbiAgICAgIGVtb2ppRGF0YS5zZWFyY2ggPSBidWlsZFNlYXJjaChlbW9qaURhdGEpXG4gICAgfVxuICAgIGxldCBlbW9qaSA9IG5ldyBFbW9qaURhdGEoZW1vamlEYXRhKVxuICAgIHRoaXMuX2Vtb2ppc1tlbW9qaS5pZF0gPSBlbW9qaVxuICAgIHRoaXMuX2N1c3RvbUNhdGVnb3J5LmVtb2ppcy5wdXNoKGVtb2ppKVxuICAgIHJldHVybiBlbW9qaVxuICB9XG5cbiAgYWRkRW1vamkoZW1vamlJZCkge1xuICAgIC8vIFdlIGV4cGVjdCB0aGUgY29ycmVjdCBlbW9qaSBpZCB0aGF0IGlzIHByZXNlbnQgaW4gdGhlIGVtb2ppcyBkYXRhLlxuICAgIGxldCBkYXRhID0gdGhpcy5fZGF0YS5lbW9qaXNbZW1vamlJZF1cblxuICAgIGlmICghdGhpcy5pc0Vtb2ppTmVlZGVkKGRhdGEpKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBsZXQgZW1vamkgPSBuZXcgRW1vamlEYXRhKGRhdGEpXG4gICAgdGhpcy5fZW1vamlzW2Vtb2ppSWRdID0gZW1vamlcbiAgICBpZiAoZW1vamkubmF0aXZlKSB7XG4gICAgICB0aGlzLl9uYXRpdmVFbW9qaXNbZW1vamkubmF0aXZlXSA9IGVtb2ppXG4gICAgfVxuICAgIGlmIChlbW9qaS5fc2tpbnMpIHtcbiAgICAgIGZvciAobGV0IGlkeCBpbiBlbW9qaS5fc2tpbnMpIHtcbiAgICAgICAgbGV0IHNraW4gPSBlbW9qaS5fc2tpbnNbaWR4XVxuICAgICAgICBpZiAoc2tpbi5uYXRpdmUpIHtcbiAgICAgICAgICB0aGlzLl9uYXRpdmVFbW9qaXNbc2tpbi5uYXRpdmVdID0gc2tpblxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGVtb2ppLmVtb3RpY29ucykge1xuICAgICAgZW1vamkuZW1vdGljb25zLmZvckVhY2goKGVtb3RpY29uKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9lbW90aWNvbnNbZW1vdGljb25dKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZW1vdGljb25zW2Vtb3RpY29uXSA9IGVtb2ppSWRcbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBlbW9qaVxuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHdlIG5lZWQgdG8gaW5jbHVkZSBnaXZlbiBjYXRlZ29yeS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNhdGVnb3J5X2lkIC0gVGhlIGNhdGVnb3J5IGlkLlxuICAgKiBAcmV0dXJuIHtib29sZWFufSAtIFdoZXRoZXIgdG8gaW5jbHVkZSB0aGUgZW1vamkuXG4gICAqL1xuICBpc0NhdGVnb3J5TmVlZGVkKGNhdGVnb3J5X2lkKSB7XG4gICAgbGV0IGlzSW5jbHVkZWQgPVxuICAgICAgdGhpcy5faW5jbHVkZSAmJiB0aGlzLl9pbmNsdWRlLmxlbmd0aFxuICAgICAgICA/IHRoaXMuX2luY2x1ZGUuaW5kZXhPZihjYXRlZ29yeV9pZCkgPiAtMVxuICAgICAgICA6IHRydWVcbiAgICBsZXQgaXNFeGNsdWRlZCA9XG4gICAgICB0aGlzLl9leGNsdWRlICYmIHRoaXMuX2V4Y2x1ZGUubGVuZ3RoXG4gICAgICAgID8gdGhpcy5fZXhjbHVkZS5pbmRleE9mKGNhdGVnb3J5X2lkKSA+IC0xXG4gICAgICAgIDogZmFsc2VcbiAgICBpZiAoIWlzSW5jbHVkZWQgfHwgaXNFeGNsdWRlZCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgd2UgbmVlZCB0byBpbmNsdWRlIGdpdmVuIGVtb2ppLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZW1vamkgLSBUaGUgcmF3IGVtb2ppIG9iamVjdC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gLSBXaGV0aGVyIHRvIGluY2x1ZGUgdGhlIGVtb2ppLlxuICAgKi9cbiAgaXNFbW9qaU5lZWRlZChlbW9qaSkge1xuICAgIGlmICh0aGlzLl9lbW9qaXNGaWx0ZXIpIHtcbiAgICAgIHJldHVybiB0aGlzLl9lbW9qaXNGaWx0ZXIoZW1vamkpXG4gICAgfVxuICAgIHJldHVybiB0cnVlXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEVtb2ppRGF0YSB7XG4gIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICB0aGlzLl9kYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YSlcbiAgICB0aGlzLl9za2lucyA9IG51bGxcbiAgICBpZiAodGhpcy5fZGF0YS5za2luX3ZhcmlhdGlvbnMpIHtcbiAgICAgIHRoaXMuX3NraW5zID0gW11cbiAgICAgIGZvciAodmFyIHNraW5JZHggaW4gU0tJTlMpIHtcbiAgICAgICAgbGV0IHNraW5LZXkgPSBTS0lOU1tza2luSWR4XVxuICAgICAgICBsZXQgdmFyaWF0aW9uRGF0YSA9IHRoaXMuX2RhdGEuc2tpbl92YXJpYXRpb25zW3NraW5LZXldXG4gICAgICAgIGxldCBza2luRGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGEpXG4gICAgICAgIGZvciAobGV0IGsgaW4gdmFyaWF0aW9uRGF0YSkge1xuICAgICAgICAgIHNraW5EYXRhW2tdID0gdmFyaWF0aW9uRGF0YVtrXVxuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZSBza2luRGF0YS5za2luX3ZhcmlhdGlvbnNcbiAgICAgICAgc2tpbkRhdGFbJ3NraW5fdG9uZSddID0gcGFyc2VJbnQoc2tpbklkeCkgKyAxXG4gICAgICAgIHRoaXMuX3NraW5zLnB1c2gobmV3IEVtb2ppRGF0YShza2luRGF0YSkpXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX3Nhbml0aXplZCA9IHNhbml0aXplKHRoaXMuX2RhdGEpXG4gICAgZm9yIChsZXQga2V5IGluIHRoaXMuX3Nhbml0aXplZCkge1xuICAgICAgdGhpc1trZXldID0gdGhpcy5fc2FuaXRpemVkW2tleV1cbiAgICB9XG4gICAgdGhpcy5zaG9ydF9uYW1lcyA9IHRoaXMuX2RhdGEuc2hvcnRfbmFtZXNcbiAgICB0aGlzLnNob3J0X25hbWUgPSB0aGlzLl9kYXRhLnNob3J0X25hbWVzWzBdXG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKVxuICB9XG5cbiAgZ2V0U2tpbihza2luSWR4KSB7XG4gICAgaWYgKHNraW5JZHggJiYgc2tpbklkeCAhPSAnbmF0aXZlJyAmJiB0aGlzLl9za2lucykge1xuICAgICAgcmV0dXJuIHRoaXMuX3NraW5zW3NraW5JZHggLSAxXVxuICAgIH1cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgbGV0IG11bHRpcGx5ID0gMTAwIC8gU0hFRVRfQ09MVU1OUyxcbiAgICAgIHggPSBNYXRoLnJvdW5kKG11bHRpcGx5ICogdGhpcy5fZGF0YS5zaGVldF94ICogMTAwKSAvIDEwMCxcbiAgICAgIHkgPSBNYXRoLnJvdW5kKG11bHRpcGx5ICogdGhpcy5fZGF0YS5zaGVldF95ICogMTAwKSAvIDEwMFxuICAgIHJldHVybiBgJHt4fSUgJHt5fSVgXG4gIH1cblxuICBhcmlhTGFiZWwoKSB7XG4gICAgcmV0dXJuIFt0aGlzLm5hdGl2ZV1cbiAgICAgIC5jb25jYXQodGhpcy5zaG9ydF9uYW1lcylcbiAgICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICAgIC5qb2luKCcsICcpXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEVtb2ppVmlldyB7XG4gIC8qKlxuICAgKiBlbW9qaSAtIEVtb2ppIHRvIGRpc3BsYXlcbiAgICogc2V0IC0gc3RyaW5nLCBlbW9qaSBzZXQgbmFtZVxuICAgKiBuYXRpdmUgLSBib29sZWFuLCB3aGV0aGVyIHRvIHJlbmRlciBuYXRpdmUgZW1vamlcbiAgICogZmFsbGJhY2sgLSBmYWxsYmFjayBmdW5jdGlvbiB0byByZW5kZXIgbWlzc2luZyBlbW9qaSwgb3B0aW9uYWxcbiAgICogZW1vamlUb29sdGlwIC0gd2V0aGVyIHdlIG5lZWQgdG8gc2hvdyB0aGUgZW1vamkgdG9vbHRpcCwgb3B0aW9uYWxcbiAgICogZW1vamlTaXplIC0gZW1vamkgc2l6ZSBpbiBwaXhlbHMsIG9wdGlvbmFsXG4gICAqL1xuICBjb25zdHJ1Y3RvcihlbW9qaSwgc2tpbiwgc2V0LCBuYXRpdmUsIGZhbGxiYWNrLCBlbW9qaVRvb2x0aXAsIGVtb2ppU2l6ZSkge1xuICAgIHRoaXMuX2Vtb2ppID0gZW1vamlcbiAgICB0aGlzLl9uYXRpdmUgPSBuYXRpdmVcbiAgICB0aGlzLl9za2luID0gc2tpblxuICAgIHRoaXMuX3NldCA9IHNldFxuICAgIHRoaXMuX2ZhbGxiYWNrID0gZmFsbGJhY2tcblxuICAgIHRoaXMuY2FuUmVuZGVyID0gdGhpcy5fY2FuUmVuZGVyKClcbiAgICB0aGlzLmNzc0NsYXNzID0gdGhpcy5fY3NzQ2xhc3MoKVxuICAgIHRoaXMuY3NzU3R5bGUgPSB0aGlzLl9jc3NTdHlsZShlbW9qaVNpemUpXG4gICAgdGhpcy5jb250ZW50ID0gdGhpcy5fY29udGVudCgpXG4gICAgdGhpcy50aXRsZSA9IGVtb2ppVG9vbHRpcCA9PT0gdHJ1ZSA/IGVtb2ppLnNob3J0X25hbWUgOiBudWxsXG4gICAgdGhpcy5hcmlhTGFiZWwgPSBlbW9qaS5hcmlhTGFiZWwoKVxuXG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKVxuICB9XG5cbiAgZ2V0RW1vamkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Vtb2ppLmdldFNraW4odGhpcy5fc2tpbilcbiAgfVxuXG4gIF9jYW5SZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuX2lzQ3VzdG9tKCkgfHwgdGhpcy5faXNOYXRpdmUoKSB8fCB0aGlzLl9oYXNFbW9qaSgpIHx8IHRoaXMuX2ZhbGxiYWNrXG4gICAgKVxuICB9XG5cbiAgX2Nzc0NsYXNzKCkge1xuICAgIHJldHVybiBbJ2Vtb2ppLXNldC0nICsgdGhpcy5fc2V0LCAnZW1vamktdHlwZS0nICsgdGhpcy5fZW1vamlUeXBlKCldXG4gIH1cblxuICBfY3NzU3R5bGUoZW1vamlTaXplKSB7XG4gICAgbGV0IGNzc1N0eWxlID0ge31cbiAgICBpZiAodGhpcy5faXNDdXN0b20oKSkge1xuICAgICAgY3NzU3R5bGUgPSB7XG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogJ3VybCgnICsgdGhpcy5nZXRFbW9qaSgpLl9kYXRhLmltYWdlVXJsICsgJyknLFxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogJzEwMCUnLFxuICAgICAgICB3aWR0aDogZW1vamlTaXplICsgJ3B4JyxcbiAgICAgICAgaGVpZ2h0OiBlbW9qaVNpemUgKyAncHgnLFxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5faGFzRW1vamkoKSAmJiAhdGhpcy5faXNOYXRpdmUoKSkge1xuICAgICAgY3NzU3R5bGUgPSB7XG4gICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogdGhpcy5nZXRFbW9qaSgpLmdldFBvc2l0aW9uKCksXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChlbW9qaVNpemUpIHtcbiAgICAgIGlmICh0aGlzLl9pc05hdGl2ZSgpKSB7XG4gICAgICAgIC8vIFNldCBmb250LXNpemUgZm9yIG5hdGl2ZSBlbW9qaS5cbiAgICAgICAgY3NzU3R5bGUgPSBPYmplY3QuYXNzaWduKGNzc1N0eWxlLCB7XG4gICAgICAgICAgLy8gZm9udC1zaXplIGlzIHVzZWQgZm9yIG5hdGl2ZSBlbW9qaSB3aGljaCB3ZSBuZWVkXG4gICAgICAgICAgLy8gdG8gc2NhbGUgd2l0aCAwLjk1IGZhY3RvciB0byBoYXZlIHRoZW0gbG9vayBhcHByb3hpbWF0ZWx5XG4gICAgICAgICAgLy8gdGhlIHNhbWUgc2l6ZSBhcyBpbWFnZS1iYXNlZCBlbW9qaS5cbiAgICAgICAgICBmb250U2l6ZTogTWF0aC5yb3VuZChlbW9qaVNpemUgKiAwLjk1ICogMTApIC8gMTAgKyAncHgnLFxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gU2V0IHdpZHRoL2hlaWdodCBmb3IgaW1hZ2UgZW1vamkuXG4gICAgICAgIGNzc1N0eWxlID0gT2JqZWN0LmFzc2lnbihjc3NTdHlsZSwge1xuICAgICAgICAgIHdpZHRoOiBlbW9qaVNpemUgKyAncHgnLFxuICAgICAgICAgIGhlaWdodDogZW1vamlTaXplICsgJ3B4JyxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNzc1N0eWxlXG4gIH1cblxuICBfY29udGVudCgpIHtcbiAgICBpZiAodGhpcy5faXNDdXN0b20oKSkge1xuICAgICAgcmV0dXJuICcnXG4gICAgfVxuICAgIGlmICh0aGlzLl9pc05hdGl2ZSgpKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRFbW9qaSgpLm5hdGl2ZVxuICAgIH1cbiAgICBpZiAodGhpcy5faGFzRW1vamkoKSkge1xuICAgICAgcmV0dXJuICcnXG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9mYWxsYmFjayA/IHRoaXMuX2ZhbGxiYWNrKHRoaXMuZ2V0RW1vamkoKSkgOiBudWxsXG4gIH1cblxuICBfaXNOYXRpdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hdGl2ZVxuICB9XG5cbiAgX2lzQ3VzdG9tKCkge1xuICAgIHJldHVybiB0aGlzLmdldEVtb2ppKCkuY3VzdG9tXG4gIH1cblxuICBfaGFzRW1vamkoKSB7XG4gICAgaWYgKCF0aGlzLmdldEVtb2ppKCkuX2RhdGEpIHtcbiAgICAgIC8vIFJldHVybiBmYWxzZSBpZiB3ZSBoYXZlIG5vIGRhdGEuXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgY29uc3QgaGFzSW1hZ2UgPSB0aGlzLmdldEVtb2ppKCkuX2RhdGFbJ2hhc19pbWdfJyArIHRoaXMuX3NldF1cbiAgICBpZiAoaGFzSW1hZ2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gSWYgdGhlcmUgaXMgbm8gaGFzX2ltZ194eHggaW4gdGhlIGRhdGEsIHdlIGFyZSB3b3JraW5nIHdpdGhcbiAgICAgIC8vIHNwZWNpZmljIGRhdGEgZmlsZSwgbGlrZSBmYWNlYm9vay5qc29uLCBzbyB3ZSBhc3N1bWUgYWxsXG4gICAgICAvLyBlbW9qaXMgYXJlIGF2YWlsYWJsZSAodGhlIDpzZXQgc2V0dGluZyBmb3IgcGlja2VyIHNob3VsZFxuICAgICAgLy8gbWF0Y2ggdGhlIGRhdGEgZmlsZSkuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICAvLyBPdGhlcndpc2UsIHdlIGFyZSB1c2luZyBhbGwuanNvbiBhbmQgY2FuIHN3aXRjaCBiZXR3ZWVuIGRpZmZlcmVudFxuICAgIC8vIHNldHMgLSBpbiB0aGlzIGNhc2UgdGhlIGBoYXNfaW1nX3tzZXRfbmFtZX1gIGlzIGEgYm9vbGVhbiB0aGF0XG4gICAgLy8gaW5kaWNhdGVzIGlmIHRoZXJlIGlzIHN1Y2ggaW1hZ2Ugb3Igbm90IGZvciBhIGdpdmVuIHNldC5cbiAgICByZXR1cm4gaGFzSW1hZ2VcbiAgfVxuXG4gIF9lbW9qaVR5cGUoKSB7XG4gICAgaWYgKHRoaXMuX2lzQ3VzdG9tKCkpIHtcbiAgICAgIHJldHVybiAnY3VzdG9tJ1xuICAgIH1cbiAgICBpZiAodGhpcy5faXNOYXRpdmUoKSkge1xuICAgICAgcmV0dXJuICduYXRpdmUnXG4gICAgfVxuICAgIGlmICh0aGlzLl9oYXNFbW9qaSgpKSB7XG4gICAgICByZXR1cm4gJ2ltYWdlJ1xuICAgIH1cbiAgICByZXR1cm4gJ2ZhbGxiYWNrJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYW5pdGl6ZShlbW9qaSkge1xuICB2YXIge1xuICAgICAgbmFtZSxcbiAgICAgIHNob3J0X25hbWVzLFxuICAgICAgc2tpbl90b25lLFxuICAgICAgc2tpbl92YXJpYXRpb25zLFxuICAgICAgZW1vdGljb25zLFxuICAgICAgdW5pZmllZCxcbiAgICAgIGN1c3RvbSxcbiAgICAgIGltYWdlVXJsLFxuICAgIH0gPSBlbW9qaSxcbiAgICBpZCA9IGVtb2ppLmlkIHx8IHNob3J0X25hbWVzWzBdLFxuICAgIGNvbG9ucyA9IGA6JHtpZH06YFxuXG4gIGlmIChjdXN0b20pIHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQsXG4gICAgICBuYW1lLFxuICAgICAgY29sb25zLFxuICAgICAgZW1vdGljb25zLFxuICAgICAgY3VzdG9tLFxuICAgICAgaW1hZ2VVcmwsXG4gICAgfVxuICB9XG5cbiAgaWYgKHNraW5fdG9uZSkge1xuICAgIGNvbG9ucyArPSBgOnNraW4tdG9uZS0ke3NraW5fdG9uZX06YFxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBpZCxcbiAgICBuYW1lLFxuICAgIGNvbG9ucyxcbiAgICBlbW90aWNvbnMsXG4gICAgdW5pZmllZDogdW5pZmllZC50b0xvd2VyQ2FzZSgpLFxuICAgIHNraW46IHNraW5fdG9uZSB8fCAoc2tpbl92YXJpYXRpb25zID8gMSA6IG51bGwpLFxuICAgIG5hdGl2ZTogdW5pZmllZFRvTmF0aXZlKHVuaWZpZWQpLFxuICB9XG59XG4iLCJpbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZSdcblxuY29uc3QgREVGQVVMVFMgPSBbXG4gICcrMScsXG4gICdncmlubmluZycsXG4gICdraXNzaW5nX2hlYXJ0JyxcbiAgJ2hlYXJ0X2V5ZXMnLFxuICAnbGF1Z2hpbmcnLFxuICAnc3R1Y2tfb3V0X3Rvbmd1ZV93aW5raW5nX2V5ZScsXG4gICdzd2VhdF9zbWlsZScsXG4gICdqb3knLFxuICAnc2NyZWFtJyxcbiAgJ2Rpc2FwcG9pbnRlZCcsXG4gICd1bmFtdXNlZCcsXG4gICd3ZWFyeScsXG4gICdzb2InLFxuICAnc3VuZ2xhc3NlcycsXG4gICdoZWFydCcsXG4gICdwb29wJyxcbl1cblxubGV0IGZyZXF1ZW50bHksIGluaXRpYWxpemVkXG5sZXQgZGVmYXVsdHMgPSB7fVxuXG5mdW5jdGlvbiBpbml0KCkge1xuICBpbml0aWFsaXplZCA9IHRydWVcbiAgZnJlcXVlbnRseSA9IHN0b3JlLmdldCgnZnJlcXVlbnRseScpXG59XG5cbmZ1bmN0aW9uIGFkZChlbW9qaSkge1xuICBpZiAoIWluaXRpYWxpemVkKSBpbml0KClcbiAgdmFyIHsgaWQgfSA9IGVtb2ppXG5cbiAgZnJlcXVlbnRseSB8fCAoZnJlcXVlbnRseSA9IGRlZmF1bHRzKVxuICBmcmVxdWVudGx5W2lkXSB8fCAoZnJlcXVlbnRseVtpZF0gPSAwKVxuICBmcmVxdWVudGx5W2lkXSArPSAxXG5cbiAgc3RvcmUuc2V0KCdsYXN0JywgaWQpXG4gIHN0b3JlLnNldCgnZnJlcXVlbnRseScsIGZyZXF1ZW50bHkpXG59XG5cbmZ1bmN0aW9uIGdldChtYXhOdW1iZXIpIHtcbiAgaWYgKCFpbml0aWFsaXplZCkgaW5pdCgpXG4gIGlmICghZnJlcXVlbnRseSkge1xuICAgIGRlZmF1bHRzID0ge31cblxuICAgIGNvbnN0IHJlc3VsdCA9IFtdXG5cbiAgICBsZXQgZGVmYXVsdExlbmd0aCA9IE1hdGgubWluKG1heE51bWJlciwgREVGQVVMVFMubGVuZ3RoKVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVmYXVsdExlbmd0aDsgaSsrKSB7XG4gICAgICBkZWZhdWx0c1tERUZBVUxUU1tpXV0gPSBkZWZhdWx0TGVuZ3RoIC0gaVxuICAgICAgcmVzdWx0LnB1c2goREVGQVVMVFNbaV0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgY29uc3QgcXVhbnRpdHkgPSBtYXhOdW1iZXJcbiAgY29uc3QgZnJlcXVlbnRseUtleXMgPSBbXVxuXG4gIGZvciAobGV0IGtleSBpbiBmcmVxdWVudGx5KSB7XG4gICAgaWYgKGZyZXF1ZW50bHkuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgZnJlcXVlbnRseUtleXMucHVzaChrZXkpXG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc29ydGVkID0gZnJlcXVlbnRseUtleXNcbiAgICAuc29ydCgoYSwgYikgPT4gZnJlcXVlbnRseVthXSAtIGZyZXF1ZW50bHlbYl0pXG4gICAgLnJldmVyc2UoKVxuICBjb25zdCBzbGljZWQgPSBzb3J0ZWQuc2xpY2UoMCwgcXVhbnRpdHkpXG5cbiAgY29uc3QgbGFzdCA9IHN0b3JlLmdldCgnbGFzdCcpXG5cbiAgaWYgKGxhc3QgJiYgc2xpY2VkLmluZGV4T2YobGFzdCkgPT0gLTEpIHtcbiAgICBzbGljZWQucG9wKClcbiAgICBzbGljZWQucHVzaChsYXN0KVxuICB9XG5cbiAgcmV0dXJuIHNsaWNlZFxufVxuXG5leHBvcnQgZGVmYXVsdCB7IGFkZCwgZ2V0IH1cbiIsImltcG9ydCBzdHJpbmdGcm9tQ29kZVBvaW50IGZyb20gJy4uL3BvbHlmaWxscy9zdHJpbmdGcm9tQ29kZVBvaW50J1xuXG5mdW5jdGlvbiB1bmlmaWVkVG9OYXRpdmUodW5pZmllZCkge1xuICB2YXIgdW5pY29kZXMgPSB1bmlmaWVkLnNwbGl0KCctJyksXG4gICAgY29kZVBvaW50cyA9IHVuaWNvZGVzLm1hcCgodSkgPT4gYDB4JHt1fWApXG5cbiAgcmV0dXJuIHN0cmluZ0Zyb21Db2RlUG9pbnQuYXBwbHkobnVsbCwgY29kZVBvaW50cylcbn1cblxuZnVuY3Rpb24gdW5pcShhcnIpIHtcbiAgcmV0dXJuIGFyci5yZWR1Y2UoKGFjYywgaXRlbSkgPT4ge1xuICAgIGlmIChhY2MuaW5kZXhPZihpdGVtKSA9PT0gLTEpIHtcbiAgICAgIGFjYy5wdXNoKGl0ZW0pXG4gICAgfVxuICAgIHJldHVybiBhY2NcbiAgfSwgW10pXG59XG5cbmZ1bmN0aW9uIGludGVyc2VjdChhLCBiKSB7XG4gIGNvbnN0IHVuaXFBID0gdW5pcShhKVxuICBjb25zdCB1bmlxQiA9IHVuaXEoYilcblxuICByZXR1cm4gdW5pcUEuZmlsdGVyKChpdGVtKSA9PiB1bmlxQi5pbmRleE9mKGl0ZW0pID49IDApXG59XG5cbmZ1bmN0aW9uIGRlZXBNZXJnZShhLCBiKSB7XG4gIHZhciBvID0ge31cblxuICBmb3IgKGxldCBrZXkgaW4gYSkge1xuICAgIGxldCBvcmlnaW5hbFZhbHVlID0gYVtrZXldLFxuICAgICAgdmFsdWUgPSBvcmlnaW5hbFZhbHVlXG5cbiAgICBpZiAoYi5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICB2YWx1ZSA9IGJba2V5XVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICB2YWx1ZSA9IGRlZXBNZXJnZShvcmlnaW5hbFZhbHVlLCB2YWx1ZSlcbiAgICB9XG5cbiAgICBvW2tleV0gPSB2YWx1ZVxuICB9XG5cbiAgcmV0dXJuIG9cbn1cblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3NvbmljZG9lL21lYXN1cmUtc2Nyb2xsYmFyXG5mdW5jdGlvbiBtZWFzdXJlU2Nyb2xsYmFyKCkge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09ICd1bmRlZmluZWQnKSByZXR1cm4gMFxuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gIGRpdi5zdHlsZS53aWR0aCA9ICcxMDBweCdcbiAgZGl2LnN0eWxlLmhlaWdodCA9ICcxMDBweCdcbiAgZGl2LnN0eWxlLm92ZXJmbG93ID0gJ3Njcm9sbCdcbiAgZGl2LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJ1xuICBkaXYuc3R5bGUudG9wID0gJy05OTk5cHgnXG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpXG4gIGNvbnN0IHNjcm9sbGJhcldpZHRoID0gZGl2Lm9mZnNldFdpZHRoIC0gZGl2LmNsaWVudFdpZHRoXG4gIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZGl2KVxuXG4gIHJldHVybiBzY3JvbGxiYXJXaWR0aFxufVxuXG5leHBvcnQgeyB1bmlxLCBpbnRlcnNlY3QsIGRlZXBNZXJnZSwgdW5pZmllZFRvTmF0aXZlLCBtZWFzdXJlU2Nyb2xsYmFyIH1cbiIsImV4cG9ydCBjbGFzcyBQaWNrZXJWaWV3IHtcbiAgY29uc3RydWN0b3IocGlja2VyQ29tcG9uZW50KSB7XG4gICAgdGhpcy5fdm0gPSBwaWNrZXJDb21wb25lbnRcbiAgICB0aGlzLl9kYXRhID0gcGlja2VyQ29tcG9uZW50LmRhdGFcbiAgICB0aGlzLl9wZXJMaW5lID0gcGlja2VyQ29tcG9uZW50LnBlckxpbmVcblxuICAgIHRoaXMuX2NhdGVnb3JpZXMgPSBbXVxuICAgIHRoaXMuX2NhdGVnb3JpZXMucHVzaCguLi50aGlzLl9kYXRhLmNhdGVnb3JpZXMoKSlcbiAgICB0aGlzLl9jYXRlZ29yaWVzID0gdGhpcy5fY2F0ZWdvcmllcy5maWx0ZXIoKGNhdGVnb3J5KSA9PiB7XG4gICAgICByZXR1cm4gY2F0ZWdvcnkuZW1vamlzLmxlbmd0aCA+IDBcbiAgICB9KVxuXG4gICAgdGhpcy5fY2F0ZWdvcmllc1swXS5maXJzdCA9IHRydWVcbiAgICBPYmplY3QuZnJlZXplKHRoaXMuX2NhdGVnb3JpZXMpXG5cbiAgICB0aGlzLmFjdGl2ZUNhdGVnb3J5ID0gdGhpcy5fY2F0ZWdvcmllc1swXVxuICAgIHRoaXMuc2VhcmNoRW1vamlzID0gbnVsbFxuXG4gICAgLy8gUHJldmlldyBlbW9qaSwgc2hvd24gb24gbW91c2Ugb3ZlciBvciB3aGVuIHdlIG1vdmVcbiAgICAvLyB3aXRoIGFycm93IGtleXMuXG4gICAgdGhpcy5wcmV2aWV3RW1vamkgPSBudWxsXG4gICAgLy8gSW5kZXhlcyBhcmUgdXNlZCB0byBrZWVwIHRoZSBwb3NpdGlvbiB3aGVuIG1vdmluZ1xuICAgIC8vIHdpdGggYXJyb3dzOiBjdXJyZW50IGNhdGVnb3J5IGFuZCBjdXJyZW50IGVtb2ppXG4gICAgLy8gaW5zaWRlIHRoZSBjYXRlZ29yeS5cbiAgICB0aGlzLnByZXZpZXdFbW9qaUNhdGVnb3J5SWR4ID0gMFxuICAgIHRoaXMucHJldmlld0Vtb2ppSWR4ID0gLTFcbiAgfVxuXG4gIG9uU2Nyb2xsKCkge1xuICAgIGNvbnN0IHNjcm9sbEVsZW1lbnQgPSB0aGlzLl92bS4kcmVmcy5zY3JvbGxcbiAgICBjb25zdCBzY3JvbGxUb3AgPSBzY3JvbGxFbGVtZW50LnNjcm9sbFRvcFxuXG4gICAgbGV0IGFjdGl2ZUNhdGVnb3J5ID0gdGhpcy5maWx0ZXJlZENhdGVnb3JpZXNbMF1cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuZmlsdGVyZWRDYXRlZ29yaWVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGNhdGVnb3J5ID0gdGhpcy5maWx0ZXJlZENhdGVnb3JpZXNbaV1cbiAgICAgIGxldCBjb21wb25lbnQgPSB0aGlzLl92bS5nZXRDYXRlZ29yeUNvbXBvbmVudChpKVxuICAgICAgLy8gVGhlIGAtNTBgIG9mZnNldCBzd2l0Y2hlcyBhY3RpdmUgY2F0ZWdvcnkgKHNlbGVjdGVkIGluIHRoZVxuICAgICAgLy8gYW5jaG9ycyBiYXIpIGEgYml0IGVhcmlsZXIsIGJlZm9yZSBpdCBhY3R1YWxseSByZWFjaGVzIHRoZSB0b3AuXG4gICAgICBpZiAoY29tcG9uZW50ICYmIGNvbXBvbmVudC4kZWwub2Zmc2V0VG9wIC0gNTAgPiBzY3JvbGxUb3ApIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgIGFjdGl2ZUNhdGVnb3J5ID0gY2F0ZWdvcnlcbiAgICB9XG4gICAgdGhpcy5hY3RpdmVDYXRlZ29yeSA9IGFjdGl2ZUNhdGVnb3J5XG4gIH1cblxuICBnZXQgYWxsQ2F0ZWdvcmllcygpIHtcbiAgICByZXR1cm4gdGhpcy5fY2F0ZWdvcmllc1xuICB9XG5cbiAgZ2V0IGZpbHRlcmVkQ2F0ZWdvcmllcygpIHtcbiAgICBpZiAodGhpcy5zZWFyY2hFbW9qaXMpIHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogJ3NlYXJjaCcsXG4gICAgICAgICAgbmFtZTogJ1NlYXJjaCcsXG4gICAgICAgICAgZW1vamlzOiB0aGlzLnNlYXJjaEVtb2ppcyxcbiAgICAgICAgfSxcbiAgICAgIF1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2NhdGVnb3JpZXMuZmlsdGVyKChjYXRlZ29yeSkgPT4ge1xuICAgICAgbGV0IGhhc0Vtb2ppcyA9IGNhdGVnb3J5LmVtb2ppcy5sZW5ndGggPiAwXG4gICAgICByZXR1cm4gaGFzRW1vamlzXG4gICAgfSlcbiAgfVxuXG4gIGdldCBwcmV2aWV3RW1vamlDYXRlZ29yeSgpIHtcbiAgICBpZiAodGhpcy5wcmV2aWV3RW1vamlDYXRlZ29yeUlkeCA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5maWx0ZXJlZENhdGVnb3JpZXNbdGhpcy5wcmV2aWV3RW1vamlDYXRlZ29yeUlkeF1cbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIG9uQW5jaG9yQ2xpY2soY2F0ZWdvcnkpIHtcbiAgICBpZiAodGhpcy5zZWFyY2hFbW9qaXMpIHtcbiAgICAgIC8vIE5vIGNhdGVnb3JpZXMgYXJlIHNob3duIHdoZW4gc2VhcmNoIGlzIGFjdGl2ZS5cbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBsZXQgaSA9IHRoaXMuZmlsdGVyZWRDYXRlZ29yaWVzLmluZGV4T2YoY2F0ZWdvcnkpXG4gICAgbGV0IGNvbXBvbmVudCA9IHRoaXMuX3ZtLmdldENhdGVnb3J5Q29tcG9uZW50KGkpXG4gICAgbGV0IHNjcm9sbFRvQ29tcG9uZW50ID0gKCkgPT4ge1xuICAgICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgICBsZXQgdG9wID0gY29tcG9uZW50LiRlbC5vZmZzZXRUb3BcbiAgICAgICAgaWYgKGNhdGVnb3J5LmZpcnN0KSB7XG4gICAgICAgICAgdG9wID0gMFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3ZtLiRyZWZzLnNjcm9sbC5zY3JvbGxUb3AgPSB0b3BcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuX3ZtLmluZmluaXRlU2Nyb2xsKSB7XG4gICAgICBzY3JvbGxUb0NvbXBvbmVudCgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWN0aXZlQ2F0ZWdvcnkgPSB0aGlzLmZpbHRlcmVkQ2F0ZWdvcmllc1tpXVxuICAgIH1cbiAgfVxuXG4gIG9uU2VhcmNoKHZhbHVlKSB7XG4gICAgbGV0IGVtb2ppcyA9IHRoaXMuX2RhdGEuc2VhcmNoKHZhbHVlLCB0aGlzLm1heFNlYXJjaFJlc3VsdHMpXG4gICAgdGhpcy5zZWFyY2hFbW9qaXMgPSBlbW9qaXNcblxuICAgIHRoaXMucHJldmlld0Vtb2ppQ2F0ZWdvcnlJZHggPSAwXG4gICAgdGhpcy5wcmV2aWV3RW1vamlJZHggPSAwXG4gICAgdGhpcy51cGRhdGVQcmV2aWV3RW1vamkoKVxuICB9XG5cbiAgb25FbW9qaUVudGVyKGVtb2ppKSB7XG4gICAgdGhpcy5wcmV2aWV3RW1vamkgPSBlbW9qaVxuICAgIHRoaXMucHJldmlld0Vtb2ppSWR4ID0gLTFcbiAgICB0aGlzLnByZXZpZXdFbW9qaUNhdGVnb3J5SWR4ID0gLTFcbiAgfVxuXG4gIG9uRW1vamlMZWF2ZShlbW9qaSkge1xuICAgIHRoaXMucHJldmlld0Vtb2ppID0gbnVsbFxuICB9XG5cbiAgb25BcnJvd0xlZnQoKSB7XG4gICAgLy8gTW92aW5nIGxlZnQsIGRlY3JlYXNlIGVtb2ppIGluZGV4LlxuICAgIGlmICh0aGlzLnByZXZpZXdFbW9qaUlkeCA+IDApIHtcbiAgICAgIHRoaXMucHJldmlld0Vtb2ppSWR4IC09IDFcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSWYgZW1vamkgaW5kZXggaXMgemVybywgZ28gdG8gdGhlIHByZXZpb3VzIGNhdGVnb3J5LlxuICAgICAgdGhpcy5wcmV2aWV3RW1vamlDYXRlZ29yeUlkeCAtPSAxXG4gICAgICBpZiAodGhpcy5wcmV2aWV3RW1vamlDYXRlZ29yeUlkeCA8IDApIHtcbiAgICAgICAgLy8gSWYgd2UgcmVhY2hlZCBmaXJzdCBjYXRlZ29yeSwga2VlcCBpdC5cbiAgICAgICAgdGhpcy5wcmV2aWV3RW1vamlDYXRlZ29yeUlkeCA9IDBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFVwZGF0ZSBlbW9qaSBpbmRleCAtIHdlIG1vdmVkIHRvIHRoZSBwcmV2aW91cyBjYXRlZ29yeSxcbiAgICAgICAgLy8gZ2V0IHRoZSBsYXN0IGVtb2ppIGluIGl0LlxuICAgICAgICB0aGlzLnByZXZpZXdFbW9qaUlkeCA9XG4gICAgICAgICAgdGhpcy5maWx0ZXJlZENhdGVnb3JpZXNbdGhpcy5wcmV2aWV3RW1vamlDYXRlZ29yeUlkeF0uZW1vamlzLmxlbmd0aCAtXG4gICAgICAgICAgMVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnVwZGF0ZVByZXZpZXdFbW9qaSgpXG4gIH1cblxuICBvbkFycm93UmlnaHQoKSB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5wcmV2aWV3RW1vamlJZHggPFxuICAgICAgdGhpcy5lbW9qaXNMZW5ndGgodGhpcy5wcmV2aWV3RW1vamlDYXRlZ29yeUlkeCkgLSAxXG4gICAgKSB7XG4gICAgICAvLyBNb3ZpbmcgcmlnaHQgd2l0aGluIGNhdGVnb3J5LCBpbmNyZWFzZSBlbW9qaSBpbmRleC5cbiAgICAgIHRoaXMucHJldmlld0Vtb2ppSWR4ICs9IDFcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gR28gdG8gdGhlIG5leHQgY2F0ZWdvcnkuXG4gICAgICB0aGlzLnByZXZpZXdFbW9qaUNhdGVnb3J5SWR4ICs9IDFcbiAgICAgIGlmICh0aGlzLnByZXZpZXdFbW9qaUNhdGVnb3J5SWR4ID49IHRoaXMuZmlsdGVyZWRDYXRlZ29yaWVzLmxlbmd0aCkge1xuICAgICAgICAvLyBJZiB3ZSByZWFjaGVkIHRoZSBsYXN0IGNhdGVnb3J5IC0ga2VlcCBpdC5cbiAgICAgICAgdGhpcy5wcmV2aWV3RW1vamlDYXRlZ29yeUlkeCA9IHRoaXMuZmlsdGVyZWRDYXRlZ29yaWVzLmxlbmd0aCAtIDFcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIElmIHdlIG1vdmVkIHRvIHRoZSBuZXh0IGNhdGVnb3J5LCB1cGRhdGUgZW1vamkgaW5kZXggdG8gdGhlXG4gICAgICAgIC8vIGZpcnN0IGVtb2ppIGluIHRoZSBuZXcgY2F0ZWdvcnkuXG4gICAgICAgIHRoaXMucHJldmlld0Vtb2ppSWR4ID0gMFxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnVwZGF0ZVByZXZpZXdFbW9qaSgpXG4gIH1cblxuICBvbkFycm93RG93bigpIHtcbiAgICAvLyBJZiB3ZSBhcmUgb3V0IG9mIHRoZSBlbW9qaSBjb250cm9sIChpbmRleCBpcyAtMSksIHNlbGVjdCB0aGUgZmlyc3RcbiAgICAvLyBlbW9qaSBpbiB0aGUgZmlyc3QgY2F0ZWdvcnkgYnkgY2FsbGluZyBgb25BcnJvd1JpZ2h0YC5cbiAgICBpZiAodGhpcy5wcmV2aWV3RW1vamlJZHggPT0gLTEpIHtcbiAgICAgIHJldHVybiB0aGlzLm9uQXJyb3dSaWdodCgpXG4gICAgfVxuXG4gICAgY29uc3QgY2F0ZWdvcnlMZW5ndGggPSB0aGlzLmZpbHRlcmVkQ2F0ZWdvcmllc1t0aGlzLnByZXZpZXdFbW9qaUNhdGVnb3J5SWR4XVxuICAgICAgLmVtb2ppcy5sZW5ndGhcblxuICAgIC8vIFdoZW4gbW92aW5nIGRvd24sIHdlIGNhbiBtb3ZlIGBfcGVyTGluZWAgaWNvbnMgcmlnaHQgdG9cbiAgICAvLyBqdW1wIHRvIHRoZSBzYW1lIHBvc2l0aW9uIGluIHRoZSBuZXh0IHJvdy5cbiAgICBsZXQgZGlmZiA9IHRoaXMuX3BlckxpbmVcblxuICAgIC8vIFRPRE86IHByZXZpZXdDYXRlZ29yeSBzaG91bGQgbWF0Y2ggYWN0aXZlQ2F0ZWdvcnlcbiAgICAvLyAoc28gaXQgd291bGQgYmUgYm90aCBoaWdobGlnaHRlZCBpbiBVSSBhbmQgdXNlZFxuICAgIC8vIHdoZW4gd2Ugc3RhcnQgbW92aW5nIHdpdGggYXJyb3dzIGFmdGVyIGNsaWNraW5nXG4gICAgLy8gdGhlIGNhdGVnb3J5KS5cblxuICAgIC8vIE5vdGU6IHByb2JhYmx5IHdlIGNhbiBhbHdhc3kgdGFrZSBjdXJyZW50IHJvdyBsZW5ndGhcbiAgICAvLyBhcyBhIGBkaWZmYCAtIGl0IHdpbGwgZml0IGJvdGggY2FzZSBvZiBhbnkgcm93IGFuZFxuICAgIC8vIHNwZWNpYWwgY2FzZSBvZiB0aGUgbGFzdCByb3cuXG4gICAgLy8gTm90ZTogaXQgY2FuIGJlIGFsc28gZWFzaWVyIHRvIHVwZGF0ZSBpbmRleGVzXG4gICAgLy8gZGlyZWN0bHkgaGVyZSBpbnN0ZWFkIG9mIGNhbGxpbmcgb25BcnJvd1JpZ2h0LlxuICAgIC8vIFNhbWUgaXMgdHJ1ZSBmb3IgYG9uQXJyb3dVcGAuXG5cbiAgICAvLyBVbmxlc3MgaWYgd2UgYXJlIG9uIHRoZSBsYXN0IHJvdyBvZiB0aGUgY2F0ZWdvcnkgYW5kXG4gICAgLy8gdGhlcmUgYXJlIGxlc3MgdGhlbiBgX3BlckxpbmVgIGVtb2ppcyBpbiBpdC5cbiAgICAvLyBJbiB0aGlzIGNhc2Ugd2UgdXNlIHRoZSBsYXN0IHJvdyBsZW5ndGggYXMgZGlmZlxuICAgIC8vIHNvIHdlIGdvIHN0cmFpZ2h0IGRvd24sIGZvciBleGFtcGxlOlxuICAgIC8vXG4gICAgLy8gICAxIDIgMyA0IDUgNlxuICAgIC8vICAgNyA4IDlcbiAgICAvLyAgIEEgQiBDIEQgRSBGXG4gICAgLy9cbiAgICAvLyBJZiB3ZSBnbyBkb3duIGZyb20gYDhgLCB3ZSBuZWVkIHRvIG1vdmUgMyBlbW9qaXMgcmlnaHRcbiAgICAvLyB0byBsZW5kIGF0IGBCYCAoYW5kIDMgaXMgdGhlIGxlbmd0aCBvZiB0aGUgbGFzdCByb3cgb2ZcbiAgICAvLyB0aGlzIGNhdGVnb3J5KS5cbiAgICAvLyBBbmQgaWYgd2UgdXNlZCA2IGluc3RlYWQgKHJvdyBsZW5ndGgsIGBfcGVyTGluZWApLCB3ZSB3b3VsZFxuICAgIC8vIGxlbmQgdXAgYXQgYEVgLlxuICAgIGlmICh0aGlzLnByZXZpZXdFbW9qaUlkeCArIGRpZmYgPiBjYXRlZ29yeUxlbmd0aCkge1xuICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBsYXN0IHJvdyBsZW5ndGguXG4gICAgICBkaWZmID0gY2F0ZWdvcnlMZW5ndGggJSB0aGlzLl9wZXJMaW5lXG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGlmZjsgaSsrKSB7XG4gICAgICB0aGlzLm9uQXJyb3dSaWdodCgpXG4gICAgfVxuICAgIHRoaXMudXBkYXRlUHJldmlld0Vtb2ppKClcbiAgfVxuXG4gIG9uQXJyb3dVcCgpIHtcbiAgICAvLyBTaW1pbGFyIHRvIGBvbkFycm93RG93bmAsIHRvIG1vdmUgdXAgd2UgY2FuIG1vdmUgbGVmdFxuICAgIC8vIGJ5IGBfcGVyTGluZWAgbnVtYmVyIG9mIGVtb2ppcy5cbiAgICBsZXQgZGlmZiA9IHRoaXMuX3BlckxpbmVcblxuICAgIGlmICh0aGlzLnByZXZpZXdFbW9qaUlkeCAtIGRpZmYgPCAwKSB7XG4gICAgICBpZiAodGhpcy5wcmV2aWV3RW1vamlDYXRlZ29yeUlkeCA+IDApIHtcbiAgICAgICAgLy8gVW5sZXNzIGlmIHdlIGFyZSBvbiB0aGUgZmlyc3QgbGluZSBvZiB0aGUgY2F0ZWdvcnkgYW5kXG4gICAgICAgIC8vIHRoZSBsYXN0IGxpbmUgaW4gdGhlIHByZXZpb3VzIGNhdGVnb3J5IGlzIHNob3J0ZXIgdGhhblxuICAgICAgICAvLyBgX3BlckxpbmVgLlxuICAgICAgICAvLyBJbiB0aGlzIGNhc2Ugd2UgdXNlIHRoZSBsYXN0IHJvdyBsZW5ndGggYXMgZGlmZiwgc29cbiAgICAgICAgLy8gd2UgZ28gc3RyYWlnaHQgdXAsIGZvciBleGFtcGxlOlxuICAgICAgICAvL1xuICAgICAgICAvLyAgIDEgMiAzIDQgNVxuICAgICAgICAvLyAgIDYgNyA4XG4gICAgICAgIC8vICAgOSBBIEIgQyBEXG4gICAgICAgIC8vXG4gICAgICAgIC8vIElmIHdlIGdvIHVwIGZyb20gYEFgLCB3ZSBuZWVkIHRvIG1vdmUgMyBlbW9qaXMgbGVmdCB0byBnZXRcbiAgICAgICAgLy8gdG8gYDdgIChhbmQgMyBpcyB0aGUgbGVuZ3RoIG9mIHRoZSBsYXN0IHJvdyBvZiB0aGUgcHJldmlvdXNcbiAgICAgICAgLy8gY2F0ZWdvcnkpLlxuICAgICAgICBjb25zdCBwcmV2Q2F0ZWdvcnlMYXN0Um93TGVuZ3RoID1cbiAgICAgICAgICB0aGlzLmZpbHRlcmVkQ2F0ZWdvcmllc1t0aGlzLnByZXZpZXdFbW9qaUNhdGVnb3J5SWR4IC0gMV0uZW1vamlzXG4gICAgICAgICAgICAubGVuZ3RoICUgdGhpcy5fcGVyTGluZVxuICAgICAgICAvLyBkaWZmID0gdGhpcy5wcmV2aWV3RW1vamlJZHggKyBwcmV2Q2F0ZWdvcnlMYXN0Um93TGVuZ3RoXG4gICAgICAgIGRpZmYgPSBwcmV2Q2F0ZWdvcnlMYXN0Um93TGVuZ3RoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkaWZmID0gMFxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpZmY7IGkrKykge1xuICAgICAgdGhpcy5vbkFycm93TGVmdCgpXG4gICAgfVxuICAgIHRoaXMudXBkYXRlUHJldmlld0Vtb2ppKClcbiAgfVxuXG4gIHVwZGF0ZVByZXZpZXdFbW9qaSgpIHtcbiAgICB0aGlzLnByZXZpZXdFbW9qaSA9IHRoaXMuZmlsdGVyZWRDYXRlZ29yaWVzW1xuICAgICAgdGhpcy5wcmV2aWV3RW1vamlDYXRlZ29yeUlkeFxuICAgIF0uZW1vamlzW3RoaXMucHJldmlld0Vtb2ppSWR4XVxuXG4gICAgdGhpcy5fdm0uJG5leHRUaWNrKCgpID0+IHtcbiAgICAgIC8vIFNjcm9sbCB0aGUgdmlldyBpZiB0aGUgYHByZXZpZXdFbW9qaWAgZ29lcyBvdXQgb2YgdGhlIHZpc2libGUgYXJlYS5cbiAgICAgIGNvbnN0IHNjcm9sbEVsID0gdGhpcy5fdm0uJHJlZnMuc2Nyb2xsXG5cbiAgICAgIC8vIE5vdGU6IGl0IHdvdWxkIGJlIG1vcmUgVnVlLWlzaCB0byBtYXJrIGFsbCBlbW9qaXMgd2l0aCBgcmVmYHNcbiAgICAgIC8vIGFuZCB0aGVuIGRvIHNvbWV0aGluZyBzaW1pbGFyIGhlcmUgdG8gd2hhdCB3ZSBkbyBpbiB0aGVcbiAgICAgIC8vIGBnZXRDYXRlZ29yaWVzYCBpbnN0ZWFkIG9mIHVzaW5nIGBxdWVyeVNlbGVjdG9yYCBkaXJlY3RseSxcbiAgICAgIC8vIGJ1dCBJIGFtIG5vdCBzdXJlIGlmIGhhdmluZyBtYW55IHJlZnMgd291bGQgYWZmZWN0IHRoZSBwZXJmb3JtYW5jZVxuICAgICAgLy8gKGl0IG1pZ2h0LCBzbyBJIHVzZSBgcXVlcnlTZWxlY3RvcmAgZm9yIG5vdykuXG4gICAgICBjb25zdCBlbW9qaUVsID0gc2Nyb2xsRWwucXVlcnlTZWxlY3RvcignLmVtb2ppLW1hcnQtZW1vamktc2VsZWN0ZWQnKVxuXG4gICAgICBjb25zdCBzY3JvbGxIZWlnaHQgPSBzY3JvbGxFbC5vZmZzZXRUb3AgLSBzY3JvbGxFbC5vZmZzZXRIZWlnaHRcbiAgICAgIGlmIChcbiAgICAgICAgZW1vamlFbCAmJlxuICAgICAgICBlbW9qaUVsLm9mZnNldFRvcCArIGVtb2ppRWwub2Zmc2V0SGVpZ2h0ID5cbiAgICAgICAgICBzY3JvbGxIZWlnaHQgKyBzY3JvbGxFbC5zY3JvbGxUb3BcbiAgICAgICkge1xuICAgICAgICBzY3JvbGxFbC5zY3JvbGxUb3AgKz0gZW1vamlFbC5vZmZzZXRIZWlnaHRcbiAgICAgIH1cbiAgICAgIGlmIChlbW9qaUVsICYmIGVtb2ppRWwub2Zmc2V0VG9wIDwgc2Nyb2xsRWwuc2Nyb2xsVG9wKSB7XG4gICAgICAgIHNjcm9sbEVsLnNjcm9sbFRvcCAtPSBlbW9qaUVsLm9mZnNldEhlaWdodFxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBlbW9qaXNMZW5ndGgoY2F0ZWdvcnlJZHgpIHtcbiAgICBpZiAoY2F0ZWdvcnlJZHggPT0gLTEpIHtcbiAgICAgIHJldHVybiAwXG4gICAgfVxuICAgIHJldHVybiB0aGlzLmZpbHRlcmVkQ2F0ZWdvcmllc1tjYXRlZ29yeUlkeF0uZW1vamlzLmxlbmd0aFxuICB9XG59XG4iLCJjb25zdCBFbW9qaVByb3BzID0ge1xuICBuYXRpdmU6IHtcbiAgICB0eXBlOiBCb29sZWFuLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICB9LFxuICB0b29sdGlwOiB7XG4gICAgdHlwZTogQm9vbGVhbixcbiAgICBkZWZhdWx0OiBmYWxzZSxcbiAgfSxcbiAgZmFsbGJhY2s6IHtcbiAgICB0eXBlOiBGdW5jdGlvbixcbiAgfSxcbiAgc2tpbjoge1xuICAgIHR5cGU6IE51bWJlcixcbiAgICBkZWZhdWx0OiAxLFxuICB9LFxuICBzZXQ6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgZGVmYXVsdDogJ2FwcGxlJyxcbiAgfSxcbiAgZW1vamk6IHtcbiAgICB0eXBlOiBbU3RyaW5nLCBPYmplY3RdLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICB9LFxuICBzaXplOiB7XG4gICAgdHlwZTogTnVtYmVyLFxuICAgIGRlZmF1bHQ6IG51bGwsXG4gIH0sXG4gIHRhZzoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBkZWZhdWx0OiAnc3BhbicsXG4gIH0sXG59XG5cbmNvbnN0IFBpY2tlclByb3BzID0ge1xuICBwZXJMaW5lOiB7XG4gICAgdHlwZTogTnVtYmVyLFxuICAgIGRlZmF1bHQ6IDksXG4gIH0sXG4gIG1heFNlYXJjaFJlc3VsdHM6IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gICAgZGVmYXVsdDogNzUsXG4gIH0sXG4gIGVtb2ppU2l6ZToge1xuICAgIHR5cGU6IE51bWJlcixcbiAgICBkZWZhdWx0OiAyNCxcbiAgfSxcbiAgdGl0bGU6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgZGVmYXVsdDogJ0Vtb2ppIE1hcnTihKInLFxuICB9LFxuICBlbW9qaToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBkZWZhdWx0OiAnZGVwYXJ0bWVudF9zdG9yZScsXG4gIH0sXG4gIGNvbG9yOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGRlZmF1bHQ6ICcjYWU2NWM1JyxcbiAgfSxcbiAgc2V0OiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGRlZmF1bHQ6ICdhcHBsZScsXG4gIH0sXG4gIHNraW46IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gICAgZGVmYXVsdDogbnVsbCxcbiAgfSxcbiAgZGVmYXVsdFNraW46IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gICAgZGVmYXVsdDogMSxcbiAgfSxcbiAgbmF0aXZlOiB7XG4gICAgdHlwZTogQm9vbGVhbixcbiAgICBkZWZhdWx0OiBmYWxzZSxcbiAgfSxcbiAgZW1vamlUb29sdGlwOiB7XG4gICAgdHlwZTogQm9vbGVhbixcbiAgICBkZWZhdWx0OiBmYWxzZSxcbiAgfSxcbiAgYXV0b0ZvY3VzOiB7XG4gICAgdHlwZTogQm9vbGVhbixcbiAgICBkZWZhdWx0OiBmYWxzZSxcbiAgfSxcbiAgaTE4bjoge1xuICAgIHR5cGU6IE9iamVjdCxcbiAgICBkZWZhdWx0KCkge1xuICAgICAgcmV0dXJuIHt9XG4gICAgfSxcbiAgfSxcbiAgc2hvd1ByZXZpZXc6IHtcbiAgICB0eXBlOiBCb29sZWFuLFxuICAgIGRlZmF1bHQ6IHRydWUsXG4gIH0sXG4gIHNob3dTZWFyY2g6IHtcbiAgICB0eXBlOiBCb29sZWFuLFxuICAgIGRlZmF1bHQ6IHRydWUsXG4gIH0sXG4gIHNob3dDYXRlZ29yaWVzOiB7XG4gICAgdHlwZTogQm9vbGVhbixcbiAgICBkZWZhdWx0OiB0cnVlLFxuICB9LFxuICBzaG93U2tpblRvbmVzOiB7XG4gICAgdHlwZTogQm9vbGVhbixcbiAgICBkZWZhdWx0OiB0cnVlLFxuICB9LFxuICBpbmZpbml0ZVNjcm9sbDoge1xuICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgZGVmYXVsdDogdHJ1ZSxcbiAgfSxcbiAgcGlja2VyU3R5bGVzOiB7XG4gICAgdHlwZTogT2JqZWN0LFxuICAgIGRlZmF1bHQoKSB7XG4gICAgICByZXR1cm4ge31cbiAgICB9LFxuICB9LFxufVxuXG5leHBvcnQgeyBFbW9qaVByb3BzLCBQaWNrZXJQcm9wcyB9XG4iLCJ2YXIgTkFNRVNQQUNFID0gJ2Vtb2ppLW1hcnQnXG5cbmNvbnN0IF9KU09OID0gSlNPTlxuXG52YXIgaXNMb2NhbFN0b3JhZ2VTdXBwb3J0ZWQgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAnbG9jYWxTdG9yYWdlJyBpbiB3aW5kb3dcblxubGV0IGdldHRlclxubGV0IHNldHRlclxuXG5mdW5jdGlvbiBzZXRIYW5kbGVycyhoYW5kbGVycykge1xuICBoYW5kbGVycyB8fCAoaGFuZGxlcnMgPSB7fSlcblxuICBnZXR0ZXIgPSBoYW5kbGVycy5nZXR0ZXJcbiAgc2V0dGVyID0gaGFuZGxlcnMuc2V0dGVyXG59XG5cbmZ1bmN0aW9uIHNldE5hbWVzcGFjZShuYW1lc3BhY2UpIHtcbiAgTkFNRVNQQUNFID0gbmFtZXNwYWNlXG59XG5cbmZ1bmN0aW9uIHVwZGF0ZShzdGF0ZSkge1xuICBmb3IgKGxldCBrZXkgaW4gc3RhdGUpIHtcbiAgICBsZXQgdmFsdWUgPSBzdGF0ZVtrZXldXG4gICAgc2V0KGtleSwgdmFsdWUpXG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0KGtleSwgdmFsdWUpIHtcbiAgaWYgKHNldHRlcikge1xuICAgIHNldHRlcihrZXksIHZhbHVlKVxuICB9IGVsc2Uge1xuICAgIGlmICghaXNMb2NhbFN0b3JhZ2VTdXBwb3J0ZWQpIHJldHVyblxuICAgIHRyeSB7XG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlW2Ake05BTUVTUEFDRX0uJHtrZXl9YF0gPSBfSlNPTi5zdHJpbmdpZnkodmFsdWUpXG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXQoa2V5KSB7XG4gIGlmIChnZXR0ZXIpIHtcbiAgICByZXR1cm4gZ2V0dGVyKGtleSlcbiAgfSBlbHNlIHtcbiAgICBpZiAoIWlzTG9jYWxTdG9yYWdlU3VwcG9ydGVkKSByZXR1cm5cbiAgICB0cnkge1xuICAgICAgdmFyIHZhbHVlID0gd2luZG93LmxvY2FsU3RvcmFnZVtgJHtOQU1FU1BBQ0V9LiR7a2V5fWBdXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZSh2YWx1ZSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgeyB1cGRhdGUsIHNldCwgZ2V0LCBzZXROYW1lc3BhY2UsIHNldEhhbmRsZXJzIH1cbiIsIi8vIGh0dHA6Ly9wYXVsaXJpc2guY29tLzIwMTEvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1hbmltYXRpbmcvXG4vLyBodHRwOi8vbXkub3BlcmEuY29tL2Vtb2xsZXIvYmxvZy8yMDExLzEyLzIwL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtZXItYW5pbWF0aW5nXG5cbi8vIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbCBieSBFcmlrIE3DtmxsZXIuIGZpeGVzIGZyb20gUGF1bCBJcmlzaCBhbmQgVGlubyBaaWpkZWxcblxuLy8gTUlUIGxpY2Vuc2VcblxudmFyIGlzV2luZG93QXZhaWxhYmxlID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcblxuaXNXaW5kb3dBdmFpbGFibGUgJiZcbiAgKGZ1bmN0aW9uKCkge1xuICAgIHZhciBsYXN0VGltZSA9IDBcbiAgICB2YXIgdmVuZG9ycyA9IFsnbXMnLCAnbW96JywgJ3dlYmtpdCcsICdvJ11cblxuICAgIGZvciAodmFyIHggPSAwOyB4IDwgdmVuZG9ycy5sZW5ndGggJiYgIXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7ICsreCkge1xuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9XG4gICAgICAgIHdpbmRvd1t2ZW5kb3JzW3hdICsgJ1JlcXVlc3RBbmltYXRpb25GcmFtZSddXG4gICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPVxuICAgICAgICB3aW5kb3dbdmVuZG9yc1t4XSArICdDYW5jZWxBbmltYXRpb25GcmFtZSddIHx8XG4gICAgICAgIHdpbmRvd1t2ZW5kb3JzW3hdICsgJ0NhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSddXG4gICAgfVxuXG4gICAgaWYgKCF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKVxuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uKGNhbGxiYWNrLCBlbGVtZW50KSB7XG4gICAgICAgIHZhciBjdXJyVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpXG4gICAgICAgIHZhciB0aW1lVG9DYWxsID0gTWF0aC5tYXgoMCwgMTYgLSAoY3VyclRpbWUgLSBsYXN0VGltZSkpXG4gICAgICAgIHZhciBpZCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGNhbGxiYWNrKGN1cnJUaW1lICsgdGltZVRvQ2FsbClcbiAgICAgICAgfSwgdGltZVRvQ2FsbClcblxuICAgICAgICBsYXN0VGltZSA9IGN1cnJUaW1lICsgdGltZVRvQ2FsbFxuICAgICAgICByZXR1cm4gaWRcbiAgICAgIH1cblxuICAgIGlmICghd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKVxuICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24oaWQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KGlkKVxuICAgICAgfVxuICB9KSgpXG4iXSwic291cmNlUm9vdCI6IiJ9