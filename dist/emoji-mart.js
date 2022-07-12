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
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Emoji.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Emoji.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _utils_shared_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/shared-props */ "./src/utils/shared-props.js");
/* harmony import */ var _utils_emoji_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/emoji-data */ "./src/utils/emoji-data.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

//
//
//
//
//
//
//
//
//
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
  props: _objectSpread(_objectSpread({}, _utils_shared_props__WEBPACK_IMPORTED_MODULE_1__.EmojiProps), {}, {
    data: {
      type: Object,
      required: true
    }
  }),
  computed: {
    view: function view() {
      return new _utils_emoji_data__WEBPACK_IMPORTED_MODULE_2__.EmojiView(this.emojiObject, this.skin, this.set, this.native, this.fallback, this.tooltip, this.size);
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Picker.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Picker.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
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


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: _objectSpread(_objectSpread({}, _utils_shared_props__WEBPACK_IMPORTED_MODULE_5__.PickerProps), {}, {
    data: {
      type: Object,
      required: true
    }
  }),
  data: function data() {
    return {
      activeSkin: this.skin || _utils_store__WEBPACK_IMPORTED_MODULE_2__["default"].get('skin') || this.defaultSkin,
      view: new _utils_picker__WEBPACK_IMPORTED_MODULE_6__.PickerView(this)
    };
  },
  computed: {
    customStyles: function customStyles() {
      return _objectSpread({
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
      return this.perLine * (this.emojiSize + 12) + 12 + 2 + (0,_utils__WEBPACK_IMPORTED_MODULE_4__.measureScrollbar)();
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
      return Object.freeze((0,_utils__WEBPACK_IMPORTED_MODULE_4__.deepMerge)(I18N, this.i18n));
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/anchors.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/anchors.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/category.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/category.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
        var emojiView = new _utils_emoji_data__WEBPACK_IMPORTED_MODULE_0__.EmojiView(emoji, _this.emojiProps.skin, _this.emojiProps.set, _this.emojiProps.native, _this.emojiProps.fallback, _this.emojiProps.emojiTooltip, _this.emojiProps.emojiSize);
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/preview.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/preview.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/search.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/search.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/skins.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/skins.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Anchors": function() { return /* reexport safe */ _anchors_vue__WEBPACK_IMPORTED_MODULE_0__["default"]; },
/* harmony export */   "Category": function() { return /* reexport safe */ _category_vue__WEBPACK_IMPORTED_MODULE_1__["default"]; },
/* harmony export */   "Preview": function() { return /* reexport safe */ _preview_vue__WEBPACK_IMPORTED_MODULE_2__["default"]; },
/* harmony export */   "Search": function() { return /* reexport safe */ _search_vue__WEBPACK_IMPORTED_MODULE_3__["default"]; },
/* harmony export */   "Skins": function() { return /* reexport safe */ _skins_vue__WEBPACK_IMPORTED_MODULE_4__["default"]; },
/* harmony export */   "Emoji": function() { return /* reexport safe */ _Emoji_vue__WEBPACK_IMPORTED_MODULE_5__["default"]; },
/* harmony export */   "Picker": function() { return /* reexport safe */ _Picker_vue__WEBPACK_IMPORTED_MODULE_6__["default"]; }
/* harmony export */ });
/* harmony import */ var _anchors_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anchors.vue */ "./src/components/anchors.vue");
/* harmony import */ var _category_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category.vue */ "./src/components/category.vue");
/* harmony import */ var _preview_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./preview.vue */ "./src/components/preview.vue");
/* harmony import */ var _search_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search.vue */ "./src/components/search.vue");
/* harmony import */ var _skins_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./skins.vue */ "./src/components/skins.vue");
/* harmony import */ var _Emoji_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Emoji.vue */ "./src/components/Emoji.vue");
/* harmony import */ var _Picker_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Picker.vue */ "./src/components/Picker.vue");








/***/ }),

/***/ "./src/polyfills/stringFromCodePoint.js":
/*!**********************************************!*\
  !*** ./src/polyfills/stringFromCodePoint.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildSearch": function() { return /* binding */ buildSearch; },
/* harmony export */   "uncompress": function() { return /* binding */ uncompress; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");


function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

  var _iterator = _createForOfIteratorHelper(propNames),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var name = _step.value;
      var value = object[name];
      object[name] = value && (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(value) === 'object' ? deepFreeze(value) : value;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmojiIndex": function() { return /* binding */ EmojiIndex; },
/* harmony export */   "EmojiData": function() { return /* binding */ EmojiData; },
/* harmony export */   "EmojiView": function() { return /* binding */ EmojiView; },
/* harmony export */   "sanitize": function() { return /* binding */ sanitize; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./src/utils/index.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ "./src/utils/data.js");
/* harmony import */ var _frequently__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./frequently */ "./src/utils/frequently.js");



function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




var SHEET_COLUMNS = 61;
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

var EmojiIndex = /*#__PURE__*/function () {
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

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, EmojiIndex);

    this._data = (0,_data__WEBPACK_IMPORTED_MODULE_3__.uncompress)(data); // Callback to exclude specific emojis

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

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(EmojiIndex, [{
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
          var _iterator = _createForOfIteratorHelper(this._custom),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var customEmoji = _step.value;
              this.addCustomEmoji(customEmoji);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }

        if (this._customCategory.emojis.length) {
          this._categories.push(this._customCategory);
        }
      }

      if (this.isCategoryNeeded('recent')) {
        if (this._recent.length) {
          this._recent.map(function (id) {
            var _iterator2 = _createForOfIteratorHelper(_this._customCategory.emojis),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var _customEmoji = _step2.value;

                if (_customEmoji.id === id) {
                  _this._recentCategory.emojis.push(_customEmoji);

                  return;
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
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
        results = _index__WEBPACK_IMPORTED_MODULE_2__.intersect.apply(null, allResults);
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
        emojiData.search = (0,_data__WEBPACK_IMPORTED_MODULE_3__.buildSearch)(emojiData);
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
var EmojiData = /*#__PURE__*/function () {
  function EmojiData(data) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, EmojiData);

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

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(EmojiData, [{
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
      var adjustedColumns = SHEET_COLUMNS - 1,
          x = +(100 / adjustedColumns * this._data.sheet_x).toFixed(2),
          y = +(100 / adjustedColumns * this._data.sheet_y).toFixed(2);
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
var EmojiView = /*#__PURE__*/function () {
  /**
   * emoji - Emoji to display
   * set - string, emoji set name
   * native - boolean, whether to render native emoji
   * fallback - fallback function to render missing emoji, optional
   * emojiTooltip - wether we need to show the emoji tooltip, optional
   * emojiSize - emoji size in pixels, optional
   */
  function EmojiView(emoji, skin, set, native, fallback, emojiTooltip, emojiSize) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, EmojiView);

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

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(EmojiView, [{
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
    native: (0,_index__WEBPACK_IMPORTED_MODULE_2__.unifiedToNative)(unified)
  };
}

/***/ }),

/***/ "./src/utils/frequently.js":
/*!*********************************!*\
  !*** ./src/utils/frequently.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "./src/utils/store.js");

var DEFAULTS = ['+1', 'grinning', 'kissing_heart', 'heart_eyes', 'laughing', 'stuck_out_tongue_winking_eye', 'sweat_smile', 'joy', 'scream', 'disappointed', 'unamused', 'weary', 'sob', 'sunglasses', 'heart', 'hankey'];
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
      defaults[DEFAULTS[i]] = parseInt((defaultLength - i) / 4, 10) + 1;
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "uniq": function() { return /* binding */ uniq; },
/* harmony export */   "intersect": function() { return /* binding */ intersect; },
/* harmony export */   "deepMerge": function() { return /* binding */ deepMerge; },
/* harmony export */   "unifiedToNative": function() { return /* binding */ unifiedToNative; },
/* harmony export */   "measureScrollbar": function() { return /* binding */ measureScrollbar; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
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

    if ((0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(value) === 'object') {
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PickerView": function() { return /* binding */ PickerView; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");



var PickerView = /*#__PURE__*/function () {
  function PickerView(pickerComponent) {
    var _this$_categories;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PickerView);

    this._vm = pickerComponent;
    this._data = pickerComponent.data;
    this._perLine = pickerComponent.perLine;
    this._categories = [];

    (_this$_categories = this._categories).push.apply(_this$_categories, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this._data.categories()));

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

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(PickerView, [{
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
  }]);

  return PickerView;
}();

/***/ }),

/***/ "./src/utils/shared-props.js":
/*!***********************************!*\
  !*** ./src/utils/shared-props.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmojiProps": function() { return /* binding */ EmojiProps; },
/* harmony export */   "PickerProps": function() { return /* binding */ PickerProps; }
/* harmony export */ });
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/***/ (function() {

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

/***/ "./src/components/Emoji.vue":
/*!**********************************!*\
  !*** ./src/components/Emoji.vue ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Emoji_vue_vue_type_template_id_534ad946___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Emoji.vue?vue&type=template&id=534ad946& */ "./src/components/Emoji.vue?vue&type=template&id=534ad946&");
/* harmony import */ var _Emoji_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Emoji.vue?vue&type=script&lang=js& */ "./src/components/Emoji.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Emoji_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Emoji_vue_vue_type_template_id_534ad946___WEBPACK_IMPORTED_MODULE_0__.render,
  _Emoji_vue_vue_type_template_id_534ad946___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
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

/***/ "./src/components/Picker.vue":
/*!***********************************!*\
  !*** ./src/components/Picker.vue ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Picker_vue_vue_type_template_id_d16e9084___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Picker.vue?vue&type=template&id=d16e9084& */ "./src/components/Picker.vue?vue&type=template&id=d16e9084&");
/* harmony import */ var _Picker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Picker.vue?vue&type=script&lang=js& */ "./src/components/Picker.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Picker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Picker_vue_vue_type_template_id_d16e9084___WEBPACK_IMPORTED_MODULE_0__.render,
  _Picker_vue_vue_type_template_id_d16e9084___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
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

/***/ "./src/components/anchors.vue":
/*!************************************!*\
  !*** ./src/components/anchors.vue ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _anchors_vue_vue_type_template_id_51188104___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anchors.vue?vue&type=template&id=51188104& */ "./src/components/anchors.vue?vue&type=template&id=51188104&");
/* harmony import */ var _anchors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./anchors.vue?vue&type=script&lang=js& */ "./src/components/anchors.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _anchors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _anchors_vue_vue_type_template_id_51188104___WEBPACK_IMPORTED_MODULE_0__.render,
  _anchors_vue_vue_type_template_id_51188104___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
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

/***/ "./src/components/category.vue":
/*!*************************************!*\
  !*** ./src/components/category.vue ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _category_vue_vue_type_template_id_376cda0e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category.vue?vue&type=template&id=376cda0e& */ "./src/components/category.vue?vue&type=template&id=376cda0e&");
/* harmony import */ var _category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category.vue?vue&type=script&lang=js& */ "./src/components/category.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _category_vue_vue_type_template_id_376cda0e___WEBPACK_IMPORTED_MODULE_0__.render,
  _category_vue_vue_type_template_id_376cda0e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
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

/***/ "./src/components/preview.vue":
/*!************************************!*\
  !*** ./src/components/preview.vue ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _preview_vue_vue_type_template_id_35056c30___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./preview.vue?vue&type=template&id=35056c30& */ "./src/components/preview.vue?vue&type=template&id=35056c30&");
/* harmony import */ var _preview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preview.vue?vue&type=script&lang=js& */ "./src/components/preview.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _preview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _preview_vue_vue_type_template_id_35056c30___WEBPACK_IMPORTED_MODULE_0__.render,
  _preview_vue_vue_type_template_id_35056c30___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
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

/***/ "./src/components/search.vue":
/*!***********************************!*\
  !*** ./src/components/search.vue ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _search_vue_vue_type_template_id_4ad41bb8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.vue?vue&type=template&id=4ad41bb8& */ "./src/components/search.vue?vue&type=template&id=4ad41bb8&");
/* harmony import */ var _search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.vue?vue&type=script&lang=js& */ "./src/components/search.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _search_vue_vue_type_template_id_4ad41bb8___WEBPACK_IMPORTED_MODULE_0__.render,
  _search_vue_vue_type_template_id_4ad41bb8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
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

/***/ "./src/components/skins.vue":
/*!**********************************!*\
  !*** ./src/components/skins.vue ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _skins_vue_vue_type_template_id_1c614894___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./skins.vue?vue&type=template&id=1c614894& */ "./src/components/skins.vue?vue&type=template&id=1c614894&");
/* harmony import */ var _skins_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./skins.vue?vue&type=script&lang=js& */ "./src/components/skins.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _skins_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _skins_vue_vue_type_template_id_1c614894___WEBPACK_IMPORTED_MODULE_0__.render,
  _skins_vue_vue_type_template_id_1c614894___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
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

/***/ "./src/components/Emoji.vue?vue&type=script&lang=js&":
/*!***********************************************************!*\
  !*** ./src/components/Emoji.vue?vue&type=script&lang=js& ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_node_modules_vue_loader_lib_index_js_vue_loader_options_Emoji_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Emoji.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Emoji.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_node_modules_vue_loader_lib_index_js_vue_loader_options_Emoji_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/Picker.vue?vue&type=script&lang=js&":
/*!************************************************************!*\
  !*** ./src/components/Picker.vue?vue&type=script&lang=js& ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_node_modules_vue_loader_lib_index_js_vue_loader_options_Picker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Picker.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Picker.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_node_modules_vue_loader_lib_index_js_vue_loader_options_Picker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/anchors.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./src/components/anchors.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_node_modules_vue_loader_lib_index_js_vue_loader_options_anchors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./anchors.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/anchors.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_node_modules_vue_loader_lib_index_js_vue_loader_options_anchors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/category.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./src/components/category.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./category.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/category.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/preview.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./src/components/preview.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_node_modules_vue_loader_lib_index_js_vue_loader_options_preview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./preview.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/preview.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_node_modules_vue_loader_lib_index_js_vue_loader_options_preview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/search.vue?vue&type=script&lang=js&":
/*!************************************************************!*\
  !*** ./src/components/search.vue?vue&type=script&lang=js& ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./search.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/search.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/skins.vue?vue&type=script&lang=js&":
/*!***********************************************************!*\
  !*** ./src/components/skins.vue?vue&type=script&lang=js& ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_node_modules_vue_loader_lib_index_js_vue_loader_options_skins_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./skins.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/skins.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_node_modules_vue_loader_lib_index_js_vue_loader_options_skins_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/Emoji.vue?vue&type=template&id=534ad946&":
/*!*****************************************************************!*\
  !*** ./src/components/Emoji.vue?vue&type=template&id=534ad946& ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Emoji_vue_vue_type_template_id_534ad946___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Emoji_vue_vue_type_template_id_534ad946___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Emoji_vue_vue_type_template_id_534ad946___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Emoji.vue?vue&type=template&id=534ad946& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Emoji.vue?vue&type=template&id=534ad946&");


/***/ }),

/***/ "./src/components/Picker.vue?vue&type=template&id=d16e9084&":
/*!******************************************************************!*\
  !*** ./src/components/Picker.vue?vue&type=template&id=d16e9084& ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Picker_vue_vue_type_template_id_d16e9084___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Picker_vue_vue_type_template_id_d16e9084___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Picker_vue_vue_type_template_id_d16e9084___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Picker.vue?vue&type=template&id=d16e9084& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Picker.vue?vue&type=template&id=d16e9084&");


/***/ }),

/***/ "./src/components/anchors.vue?vue&type=template&id=51188104&":
/*!*******************************************************************!*\
  !*** ./src/components/anchors.vue?vue&type=template&id=51188104& ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_anchors_vue_vue_type_template_id_51188104___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_anchors_vue_vue_type_template_id_51188104___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_anchors_vue_vue_type_template_id_51188104___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./anchors.vue?vue&type=template&id=51188104& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/anchors.vue?vue&type=template&id=51188104&");


/***/ }),

/***/ "./src/components/category.vue?vue&type=template&id=376cda0e&":
/*!********************************************************************!*\
  !*** ./src/components/category.vue?vue&type=template&id=376cda0e& ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_template_id_376cda0e___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_template_id_376cda0e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_template_id_376cda0e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./category.vue?vue&type=template&id=376cda0e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/category.vue?vue&type=template&id=376cda0e&");


/***/ }),

/***/ "./src/components/preview.vue?vue&type=template&id=35056c30&":
/*!*******************************************************************!*\
  !*** ./src/components/preview.vue?vue&type=template&id=35056c30& ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_preview_vue_vue_type_template_id_35056c30___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_preview_vue_vue_type_template_id_35056c30___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_preview_vue_vue_type_template_id_35056c30___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./preview.vue?vue&type=template&id=35056c30& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/preview.vue?vue&type=template&id=35056c30&");


/***/ }),

/***/ "./src/components/search.vue?vue&type=template&id=4ad41bb8&":
/*!******************************************************************!*\
  !*** ./src/components/search.vue?vue&type=template&id=4ad41bb8& ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_template_id_4ad41bb8___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_template_id_4ad41bb8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_template_id_4ad41bb8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./search.vue?vue&type=template&id=4ad41bb8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/search.vue?vue&type=template&id=4ad41bb8&");


/***/ }),

/***/ "./src/components/skins.vue?vue&type=template&id=1c614894&":
/*!*****************************************************************!*\
  !*** ./src/components/skins.vue?vue&type=template&id=1c614894& ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_skins_vue_vue_type_template_id_1c614894___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_skins_vue_vue_type_template_id_1c614894___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_skins_vue_vue_type_template_id_1c614894___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./skins.vue?vue&type=template&id=1c614894& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/skins.vue?vue&type=template&id=1c614894&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Emoji.vue?vue&type=template&id=534ad946&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Emoji.vue?vue&type=template&id=534ad946& ***!
  \********************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function () {
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
            "data-title": _vm.title,
          },
          on: {
            mouseenter: _vm.onMouseEnter,
            mouseleave: _vm.onMouseLeave,
            click: _vm.onClick,
          },
        },
        [
          _c("span", { class: _vm.view.cssClass, style: _vm.view.cssStyle }, [
            _vm._v(_vm._s(_vm.view.content)),
          ]),
        ]
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Picker.vue?vue&type=template&id=d16e9084&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Picker.vue?vue&type=template&id=d16e9084& ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function () {
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
                  "active-category": _vm.view.activeCategory,
                },
                on: { click: _vm.onAnchorClick },
              }),
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm._t(
        "searchTemplate",
        function () {
          return [
            _vm.showSearch
              ? _c("search", {
                  ref: "search",
                  attrs: {
                    data: _vm.data,
                    i18n: _vm.mergedI18n,
                    "auto-focus": _vm.autoFocus,
                    "on-search": _vm.onSearch,
                  },
                  on: {
                    search: _vm.onSearch,
                    arrowLeft: _vm.onArrowLeft,
                    arrowRight: _vm.onArrowRight,
                    arrowDown: _vm.onArrowDown,
                    arrowUp: _vm.onArrowUp,
                    enter: _vm.onEnter,
                  },
                })
              : _vm._e(),
          ]
        },
        {
          data: _vm.data,
          i18n: _vm.i18n,
          autoFocus: _vm.autoFocus,
          onSearch: _vm.onSearch,
        }
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          ref: "scroll",
          staticClass: "emoji-mart-scroll",
          attrs: { role: "tabpanel" },
          on: { scroll: _vm.onScroll },
        },
        [
          _c(
            "div",
            {
              ref: "scrollContent",
              attrs: {
                id: "emoji-mart-list",
                role: "listbox",
                "aria-expanded": "true",
              },
            },
            _vm._l(_vm.view.filteredCategories, function (category, idx) {
              return _c("category", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value:
                      _vm.infiniteScroll || category == _vm.view.activeCategory,
                    expression:
                      "infiniteScroll || category == view.activeCategory",
                  },
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
                  "emoji-props": _vm.emojiProps,
                },
              })
            }),
            1
          ),
        ]
      ),
      _vm._v(" "),
      _vm._t(
        "previewTemplate",
        function () {
          return [
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
                        "on-skin-change": _vm.onSkinChange,
                      },
                    }),
                  ],
                  1
                )
              : _vm._e(),
          ]
        },
        {
          data: _vm.data,
          title: _vm.title,
          emoji: _vm.view.previewEmoji,
          idleEmoji: _vm.idleEmoji,
          showSkinTones: _vm.showSkinTones,
          emojiProps: _vm.emojiProps,
          skinProps: _vm.skinProps,
          onSkinChange: _vm.onSkinChange,
        }
      ),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/anchors.vue?vue&type=template&id=51188104&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/anchors.vue?vue&type=template&id=51188104& ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "emoji-mart-anchors", attrs: { role: "tablist" } },
    _vm._l(_vm.categories, function (category) {
      return _c(
        "button",
        {
          key: category.id,
          class: {
            "emoji-mart-anchor": true,
            "emoji-mart-anchor-selected": category.id == _vm.activeCategory.id,
          },
          style: {
            color: category.id == _vm.activeCategory.id ? _vm.color : "",
          },
          attrs: {
            role: "tab",
            type: "button",
            "aria-label": category.name,
            "aria-selected": category.id == _vm.activeCategory.id,
            "data-title": _vm.i18n.categories[category.id],
          },
          on: {
            click: function ($event) {
              return _vm.$emit("click", category)
            },
          },
        },
        [
          _c("div", {
            attrs: { "aria-hidden": "true" },
            domProps: { innerHTML: _vm._s(_vm.svgs[category.id]) },
          }),
          _vm._v(" "),
          _c("span", {
            staticClass: "emoji-mart-anchor-bar",
            style: { backgroundColor: _vm.color },
            attrs: { "aria-hidden": "true" },
          }),
        ]
      )
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/category.vue?vue&type=template&id=376cda0e&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/category.vue?vue&type=template&id=376cda0e& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.isVisible && (_vm.isSearch || _vm.hasResults)
    ? _c(
        "section",
        {
          class: {
            "emoji-mart-category": true,
            "emoji-mart-no-results": !_vm.hasResults,
          },
          attrs: { "aria-label": _vm.i18n.categories[_vm.id] },
        },
        [
          _c("div", { staticClass: "emoji-mart-category-label" }, [
            _c("h3", { staticClass: "emoji-mart-category-label" }, [
              _vm._v(_vm._s(_vm.i18n.categories[_vm.id])),
            ]),
          ]),
          _vm._v(" "),
          _vm._l(_vm.emojiObjects, function (ref) {
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
                        title: emojiView.title,
                      },
                      on: {
                        mouseenter: function ($event) {
                          _vm.emojiProps.onEnter(emojiView.getEmoji())
                        },
                        mouseleave: function ($event) {
                          _vm.emojiProps.onLeave(emojiView.getEmoji())
                        },
                        click: function ($event) {
                          _vm.emojiProps.onClick(emojiView.getEmoji())
                        },
                      },
                    },
                    [
                      _c(
                        "span",
                        {
                          class: emojiView.cssClass,
                          style: emojiView.cssStyle,
                        },
                        [_vm._v(_vm._s(emojiView.content))]
                      ),
                    ]
                  )
                : _vm._e(),
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
                      set: _vm.emojiProps.set,
                    },
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "emoji-mart-no-results-label" }, [
                    _vm._v(_vm._s(_vm.i18n.notfound)),
                  ]),
                ],
                1
              )
            : _vm._e(),
        ],
        2
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/preview.vue?vue&type=template&id=35056c30&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/preview.vue?vue&type=template&id=35056c30& ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function () {
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
                    set: _vm.emojiProps.set,
                  },
                }),
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "emoji-mart-preview-data" }, [
              _c("div", { staticClass: "emoji-mart-preview-name" }, [
                _vm._v(_vm._s(_vm.emoji.name)),
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "emoji-mart-preview-shortnames" },
                _vm._l(_vm.emojiShortNames, function (shortName) {
                  return _c(
                    "span",
                    {
                      key: shortName,
                      staticClass: "emoji-mart-preview-shortname",
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
                _vm._l(_vm.emojiEmoticons, function (emoticon) {
                  return _c(
                    "span",
                    {
                      key: emoticon,
                      staticClass: "emoji-mart-preview-emoticon",
                    },
                    [_vm._v(_vm._s(emoticon))]
                  )
                }),
                0
              ),
            ]),
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
                    set: _vm.emojiProps.set,
                  },
                }),
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "emoji-mart-preview-data" }, [
              _c("span", { staticClass: "emoji-mart-title-label" }, [
                _vm._v(_vm._s(_vm.title)),
              ]),
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
                        change: function ($event) {
                          return _vm.onSkinChange($event)
                        },
                      },
                    }),
                  ],
                  1
                )
              : _vm._e(),
          ],
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/search.vue?vue&type=template&id=4ad41bb8&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/search.vue?vue&type=template&id=4ad41bb8& ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function () {
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
          expression: "value",
        },
      ],
      attrs: {
        type: "text",
        placeholder: _vm.i18n.search,
        role: "textbox",
        "aria-autocomplete": "list",
        "aria-owns": "emoji-mart-list",
        "aria-label": "Search for an emoji",
        "aria-describedby": "emoji-mart-search-description",
      },
      domProps: { value: _vm.value },
      on: {
        keydown: [
          function ($event) {
            if (
              !$event.type.indexOf("key") &&
              _vm._k($event.keyCode, "left", 37, $event.key, [
                "Left",
                "ArrowLeft",
              ])
            ) {
              return null
            }
            if ("button" in $event && $event.button !== 0) {
              return null
            }
            return function ($event) {
              return _vm.$emit("arrowLeft", $event)
            }.apply(null, arguments)
          },
          function ($event) {
            if (
              !$event.type.indexOf("key") &&
              _vm._k($event.keyCode, "right", 39, $event.key, [
                "Right",
                "ArrowRight",
              ])
            ) {
              return null
            }
            if ("button" in $event && $event.button !== 2) {
              return null
            }
            return function () {
              return _vm.$emit("arrowRight")
            }.apply(null, arguments)
          },
          function ($event) {
            if (
              !$event.type.indexOf("key") &&
              _vm._k($event.keyCode, "down", 40, $event.key, [
                "Down",
                "ArrowDown",
              ])
            ) {
              return null
            }
            return function () {
              return _vm.$emit("arrowDown")
            }.apply(null, arguments)
          },
          function ($event) {
            if (
              !$event.type.indexOf("key") &&
              _vm._k($event.keyCode, "up", 38, $event.key, ["Up", "ArrowUp"])
            ) {
              return null
            }
            return function ($event) {
              return _vm.$emit("arrowUp", $event)
            }.apply(null, arguments)
          },
          function ($event) {
            if (
              !$event.type.indexOf("key") &&
              _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
            ) {
              return null
            }
            return function () {
              return _vm.$emit("enter")
            }.apply(null, arguments)
          },
        ],
        input: function ($event) {
          if ($event.target.composing) {
            return
          }
          _vm.value = $event.target.value
        },
      },
    }),
    _vm._v(" "),
    _c(
      "span",
      {
        staticClass: "hidden",
        attrs: { id: "emoji-picker-search-description" },
      },
      [
        _vm._v(
          "Use the left, right, up and down arrow keys to navigate the emoji search\n    results."
        ),
      ]
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/skins.vue?vue&type=template&id=1c614894&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/skins.vue?vue&type=template&id=1c614894& ***!
  \********************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      class: {
        "emoji-mart-skin-swatches": true,
        "emoji-mart-skin-swatches-opened": _vm.opened,
      },
    },
    _vm._l(6, function (skinTone) {
      return _c(
        "span",
        {
          key: skinTone,
          class: {
            "emoji-mart-skin-swatch": true,
            "emoji-mart-skin-swatch-selected": _vm.skin == skinTone,
          },
        },
        [
          _c("span", {
            class: "emoji-mart-skin emoji-mart-skin-tone-" + skinTone,
            on: {
              click: function ($event) {
                return _vm.onClick(skinTone)
              },
            },
          }),
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ normalizeComponent; }
/* harmony export */ });
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
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
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

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayLikeToArray; }
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayWithoutHoles; }
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _classCallCheck; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _createClass; }
/* harmony export */ });
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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _iterableToArray; }
/* harmony export */ });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _nonIterableSpread; }
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _toConsumableArray; }
/* harmony export */ });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _typeof; }
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _unsupportedIterableToArray; }
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Picker": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_3__.Picker; },
/* harmony export */   "Emoji": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_3__.Emoji; },
/* harmony export */   "Anchors": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_3__.Anchors; },
/* harmony export */   "Preview": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_3__.Preview; },
/* harmony export */   "Search": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_3__.Search; },
/* harmony export */   "Category": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_3__.Category; },
/* harmony export */   "Skins": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_3__.Skins; },
/* harmony export */   "EmojiIndex": function() { return /* reexport safe */ _utils_emoji_data__WEBPACK_IMPORTED_MODULE_4__.EmojiIndex; },
/* harmony export */   "EmojiView": function() { return /* reexport safe */ _utils_emoji_data__WEBPACK_IMPORTED_MODULE_4__.EmojiView; },
/* harmony export */   "EmojiData": function() { return /* reexport safe */ _utils_emoji_data__WEBPACK_IMPORTED_MODULE_4__.EmojiData; },
/* harmony export */   "sanitize": function() { return /* reexport safe */ _utils_emoji_data__WEBPACK_IMPORTED_MODULE_4__.sanitize; },
/* harmony export */   "uncompress": function() { return /* reexport safe */ _utils_data__WEBPACK_IMPORTED_MODULE_1__.uncompress; },
/* harmony export */   "store": function() { return /* reexport safe */ _utils_store__WEBPACK_IMPORTED_MODULE_0__["default"]; },
/* harmony export */   "frequently": function() { return /* reexport safe */ _utils_frequently__WEBPACK_IMPORTED_MODULE_2__["default"]; }
/* harmony export */ });
/* harmony import */ var _utils_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/store */ "./src/utils/store.js");
/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/data */ "./src/utils/data.js");
/* harmony import */ var _utils_frequently__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/frequently */ "./src/utils/frequently.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ "./src/components/index.js");
/* harmony import */ var _utils_emoji_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/emoji-data */ "./src/utils/emoji-data.js");






}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBLDhDQUE4Qzs7Ozs7V0NBOUM7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFFQTtBQVVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vRW1vamlNYXJ0L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvc3JjL2NvbXBvbmVudHMvRW1vamkudnVlIiwid2VicGFjazovL0Vtb2ppTWFydC9zcmMvY29tcG9uZW50cy9QaWNrZXIudnVlIiwid2VicGFjazovL0Vtb2ppTWFydC9zcmMvY29tcG9uZW50cy9hbmNob3JzLnZ1ZSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvc3JjL2NvbXBvbmVudHMvY2F0ZWdvcnkudnVlIiwid2VicGFjazovL0Vtb2ppTWFydC9zcmMvY29tcG9uZW50cy9wcmV2aWV3LnZ1ZSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvc3JjL2NvbXBvbmVudHMvc2VhcmNoLnZ1ZSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvc3JjL2NvbXBvbmVudHMvc2tpbnMudnVlIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9wb2x5ZmlsbHMvc3RyaW5nRnJvbUNvZGVQb2ludC5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvc3Zncy9pbmRleC5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvdXRpbHMvZGF0YS5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvdXRpbHMvZW1vamktZGF0YS5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvdXRpbHMvZnJlcXVlbnRseS5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvdXRpbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL3V0aWxzL3BpY2tlci5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvdXRpbHMvc2hhcmVkLXByb3BzLmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy91dGlscy9zdG9yZS5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvdmVuZG9yL3JhZi1wb2x5ZmlsbC5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9FbW9qaS52dWUiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvUGlja2VyLnZ1ZSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9hbmNob3JzLnZ1ZSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9jYXRlZ29yeS52dWUiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvcHJldmlldy52dWUiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvc2VhcmNoLnZ1ZSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9za2lucy52dWUiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvRW1vamkudnVlP2FkODQiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvUGlja2VyLnZ1ZT80OTcwIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL2FuY2hvcnMudnVlP2JiOTYiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvY2F0ZWdvcnkudnVlPzNjN2EiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvcHJldmlldy52dWU/MGM1ZiIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9zZWFyY2gudnVlPzEwNWEiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvc2tpbnMudnVlPzBjMGUiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvRW1vamkudnVlPzliOWQiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvUGlja2VyLnZ1ZT9lZGE1Iiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL2FuY2hvcnMudnVlPzRlNTciLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvY2F0ZWdvcnkudnVlPzYwMTIiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvcHJldmlldy52dWU/MDJiNSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9zZWFyY2gudnVlPzBmZDgiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvc2tpbnMudnVlPzE2YTEiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvRW1vamkudnVlPzZhMTQiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvUGlja2VyLnZ1ZT84ZjZjIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL2FuY2hvcnMudnVlP2RjZWYiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvY2F0ZWdvcnkudnVlPzc0ZDUiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvcHJldmlldy52dWU/YjU0YSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9zZWFyY2gudnVlPzc3ZGQiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvc2tpbnMudnVlPzU2OWIiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL0Vtb2ppTWFydC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiRW1vamlNYXJ0XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkVtb2ppTWFydFwiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCI8dGVtcGxhdGU+XHJcbiAgPGNvbXBvbmVudFxyXG4gICAgOmlzPVwidGFnXCJcclxuICAgIHYtaWY9XCJ2aWV3LmNhblJlbmRlclwiXHJcbiAgICA6dGl0bGU9XCJ2aWV3LnRpdGxlXCJcclxuICAgIDphcmlhLWxhYmVsPVwidmlldy5hcmlhTGFiZWxcIlxyXG4gICAgOmRhdGEtdGl0bGU9XCJ0aXRsZVwiXHJcbiAgICBjbGFzcz1cImVtb2ppLW1hcnQtZW1vamlcIlxyXG4gICAgQG1vdXNlZW50ZXI9XCJvbk1vdXNlRW50ZXJcIlxyXG4gICAgQG1vdXNlbGVhdmU9XCJvbk1vdXNlTGVhdmVcIlxyXG4gICAgQGNsaWNrPVwib25DbGlja1wiXHJcbiAgPlxyXG4gICAgPHNwYW4gOmNsYXNzPVwidmlldy5jc3NDbGFzc1wiIDpzdHlsZT1cInZpZXcuY3NzU3R5bGVcIj57e1xyXG4gICAgICB2aWV3LmNvbnRlbnRcclxuICAgIH19PC9zcGFuPlxyXG4gIDwvY29tcG9uZW50PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IHsgRW1vamlQcm9wcyB9IGZyb20gJy4uL3V0aWxzL3NoYXJlZC1wcm9wcydcclxuaW1wb3J0IHsgRW1vamlWaWV3IH0gZnJvbSAnLi4vdXRpbHMvZW1vamktZGF0YSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBwcm9wczoge1xyXG4gICAgLi4uRW1vamlQcm9wcyxcclxuICAgIGRhdGE6IHtcclxuICAgICAgdHlwZTogT2JqZWN0LFxyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBjb21wdXRlZDoge1xyXG4gICAgdmlldygpIHtcclxuICAgICAgcmV0dXJuIG5ldyBFbW9qaVZpZXcoXHJcbiAgICAgICAgdGhpcy5lbW9qaU9iamVjdCxcclxuICAgICAgICB0aGlzLnNraW4sXHJcbiAgICAgICAgdGhpcy5zZXQsXHJcbiAgICAgICAgdGhpcy5uYXRpdmUsXHJcbiAgICAgICAgdGhpcy5mYWxsYmFjayxcclxuICAgICAgICB0aGlzLnRvb2x0aXAsXHJcbiAgICAgICAgdGhpcy5zaXplLFxyXG4gICAgICApXHJcbiAgICB9LFxyXG4gICAgc2FuaXRpemVkRGF0YSgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZW1vamlPYmplY3QuX3Nhbml0aXplZFxyXG4gICAgfSxcclxuICAgIHRpdGxlKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy50b29sdGlwID8gdGhpcy5lbW9qaU9iamVjdC5zaG9ydF9uYW1lIDogbnVsbFxyXG4gICAgfSxcclxuICAgIGVtb2ppT2JqZWN0KCkge1xyXG4gICAgICBpZiAodHlwZW9mIHRoaXMuZW1vamkgPT0gJ3N0cmluZycpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmZpbmRFbW9qaSh0aGlzLmVtb2ppKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVtb2ppXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfSxcclxuICBjcmVhdGVkKCkge30sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgb25DbGljaygpIHtcclxuICAgICAgdGhpcy4kZW1pdCgnY2xpY2snLCB0aGlzLmVtb2ppT2JqZWN0KVxyXG4gICAgfSxcclxuICAgIG9uTW91c2VFbnRlcigpIHtcclxuICAgICAgdGhpcy4kZW1pdCgnbW91c2VlbnRlcicsIHRoaXMuZW1vamlPYmplY3QpXHJcbiAgICB9LFxyXG4gICAgb25Nb3VzZUxlYXZlKCkge1xyXG4gICAgICB0aGlzLiRlbWl0KCdtb3VzZWxlYXZlJywgdGhpcy5lbW9qaU9iamVjdClcclxuICAgIH0sXHJcbiAgfSxcclxufVxyXG48L3NjcmlwdD5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxzZWN0aW9uIGNsYXNzPVwiZW1vamktbWFydCBlbW9qaS1tYXJ0LXN0YXRpY1wiIDpzdHlsZT1cImN1c3RvbVN0eWxlc1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtYmFyIGVtb2ppLW1hcnQtYmFyLWFuY2hvcnNcIiB2LWlmPVwic2hvd0NhdGVnb3JpZXNcIj5cclxuICAgICAgPGFuY2hvcnNcclxuICAgICAgICA6ZGF0YT1cImRhdGFcIlxyXG4gICAgICAgIDppMThuPVwibWVyZ2VkSTE4blwiXHJcbiAgICAgICAgOmNvbG9yPVwiY29sb3JcIlxyXG4gICAgICAgIDpjYXRlZ29yaWVzPVwidmlldy5hbGxDYXRlZ29yaWVzXCJcclxuICAgICAgICA6YWN0aXZlLWNhdGVnb3J5PVwidmlldy5hY3RpdmVDYXRlZ29yeVwiXHJcbiAgICAgICAgQGNsaWNrPVwib25BbmNob3JDbGlja1wiXHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8c2xvdFxyXG4gICAgICBuYW1lPVwic2VhcmNoVGVtcGxhdGVcIlxyXG4gICAgICA6ZGF0YT1cImRhdGFcIlxyXG4gICAgICA6aTE4bj1cImkxOG5cIlxyXG4gICAgICA6YXV0by1mb2N1cz1cImF1dG9Gb2N1c1wiXHJcbiAgICAgIDpvbi1zZWFyY2g9XCJvblNlYXJjaFwiXHJcbiAgICA+XHJcbiAgICAgIDxzZWFyY2hcclxuICAgICAgICB2LWlmPVwic2hvd1NlYXJjaFwiXHJcbiAgICAgICAgcmVmPVwic2VhcmNoXCJcclxuICAgICAgICA6ZGF0YT1cImRhdGFcIlxyXG4gICAgICAgIDppMThuPVwibWVyZ2VkSTE4blwiXHJcbiAgICAgICAgOmF1dG8tZm9jdXM9XCJhdXRvRm9jdXNcIlxyXG4gICAgICAgIDpvbi1zZWFyY2g9XCJvblNlYXJjaFwiXHJcbiAgICAgICAgQHNlYXJjaD1cIm9uU2VhcmNoXCJcclxuICAgICAgICBAYXJyb3dMZWZ0PVwib25BcnJvd0xlZnRcIlxyXG4gICAgICAgIEBhcnJvd1JpZ2h0PVwib25BcnJvd1JpZ2h0XCJcclxuICAgICAgICBAYXJyb3dEb3duPVwib25BcnJvd0Rvd25cIlxyXG4gICAgICAgIEBhcnJvd1VwPVwib25BcnJvd1VwXCJcclxuICAgICAgICBAZW50ZXI9XCJvbkVudGVyXCJcclxuICAgICAgLz5cclxuICAgIDwvc2xvdD5cclxuXHJcbiAgICA8ZGl2XHJcbiAgICAgIHJvbGU9XCJ0YWJwYW5lbFwiXHJcbiAgICAgIGNsYXNzPVwiZW1vamktbWFydC1zY3JvbGxcIlxyXG4gICAgICByZWY9XCJzY3JvbGxcIlxyXG4gICAgICBAc2Nyb2xsPVwib25TY3JvbGxcIlxyXG4gICAgPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgaWQ9XCJlbW9qaS1tYXJ0LWxpc3RcIlxyXG4gICAgICAgIHJlZj1cInNjcm9sbENvbnRlbnRcIlxyXG4gICAgICAgIHJvbGU9XCJsaXN0Ym94XCJcclxuICAgICAgICBhcmlhLWV4cGFuZGVkPVwidHJ1ZVwiXHJcbiAgICAgID5cclxuICAgICAgICA8Y2F0ZWdvcnlcclxuICAgICAgICAgIHYtZm9yPVwiKGNhdGVnb3J5LCBpZHgpIGluIHZpZXcuZmlsdGVyZWRDYXRlZ29yaWVzXCJcclxuICAgICAgICAgIHYtc2hvdz1cImluZmluaXRlU2Nyb2xsIHx8IGNhdGVnb3J5ID09IHZpZXcuYWN0aXZlQ2F0ZWdvcnlcIlxyXG4gICAgICAgICAgOnJlZj1cIidjYXRlZ29yaWVzXycgKyBpZHhcIlxyXG4gICAgICAgICAgOmtleT1cImNhdGVnb3J5LmlkXCJcclxuICAgICAgICAgIDpkYXRhPVwiZGF0YVwiXHJcbiAgICAgICAgICA6aTE4bj1cIm1lcmdlZEkxOG5cIlxyXG4gICAgICAgICAgOmlkPVwiY2F0ZWdvcnkuaWRcIlxyXG4gICAgICAgICAgOm5hbWU9XCJjYXRlZ29yeS5uYW1lXCJcclxuICAgICAgICAgIDplbW9qaXM9XCJjYXRlZ29yeS5lbW9qaXNcIlxyXG4gICAgICAgICAgOmVtb2ppLXByb3BzPVwiZW1vamlQcm9wc1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8c2xvdFxyXG4gICAgICBuYW1lPVwicHJldmlld1RlbXBsYXRlXCJcclxuICAgICAgOmRhdGE9XCJkYXRhXCJcclxuICAgICAgOnRpdGxlPVwidGl0bGVcIlxyXG4gICAgICA6ZW1vamk9XCJ2aWV3LnByZXZpZXdFbW9qaVwiXHJcbiAgICAgIDppZGxlLWVtb2ppPVwiaWRsZUVtb2ppXCJcclxuICAgICAgOnNob3ctc2tpbi10b25lcz1cInNob3dTa2luVG9uZXNcIlxyXG4gICAgICA6ZW1vamktcHJvcHM9XCJlbW9qaVByb3BzXCJcclxuICAgICAgOnNraW4tcHJvcHM9XCJza2luUHJvcHNcIlxyXG4gICAgICA6b24tc2tpbi1jaGFuZ2U9XCJvblNraW5DaGFuZ2VcIlxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1iYXIgZW1vamktbWFydC1iYXItcHJldmlld1wiIHYtaWY9XCJzaG93UHJldmlld1wiPlxyXG4gICAgICAgIDxwcmV2aWV3XHJcbiAgICAgICAgICA6ZGF0YT1cImRhdGFcIlxyXG4gICAgICAgICAgOnRpdGxlPVwidGl0bGVcIlxyXG4gICAgICAgICAgOmVtb2ppPVwidmlldy5wcmV2aWV3RW1vamlcIlxyXG4gICAgICAgICAgOmlkbGUtZW1vamk9XCJpZGxlRW1vamlcIlxyXG4gICAgICAgICAgOnNob3ctc2tpbi10b25lcz1cInNob3dTa2luVG9uZXNcIlxyXG4gICAgICAgICAgOmVtb2ppLXByb3BzPVwiZW1vamlQcm9wc1wiXHJcbiAgICAgICAgICA6c2tpbi1wcm9wcz1cInNraW5Qcm9wc1wiXHJcbiAgICAgICAgICA6b24tc2tpbi1jaGFuZ2U9XCJvblNraW5DaGFuZ2VcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zbG90PlxyXG4gIDwvc2VjdGlvbj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCAnLi4vdmVuZG9yL3JhZi1wb2x5ZmlsbCdcclxuaW1wb3J0IHN0b3JlIGZyb20gJy4uL3V0aWxzL3N0b3JlJ1xyXG5pbXBvcnQgZnJlcXVlbnRseSBmcm9tICcuLi91dGlscy9mcmVxdWVudGx5J1xyXG5pbXBvcnQgeyBkZWVwTWVyZ2UsIG1lYXN1cmVTY3JvbGxiYXIgfSBmcm9tICcuLi91dGlscydcclxuaW1wb3J0IHsgUGlja2VyUHJvcHMgfSBmcm9tICcuLi91dGlscy9zaGFyZWQtcHJvcHMnXHJcbmltcG9ydCB7IFBpY2tlclZpZXcgfSBmcm9tICcuLi91dGlscy9waWNrZXInXHJcbmltcG9ydCBBbmNob3JzIGZyb20gJy4vYW5jaG9ycy52dWUnXHJcbmltcG9ydCBDYXRlZ29yeSBmcm9tICcuL2NhdGVnb3J5LnZ1ZSdcclxuaW1wb3J0IFByZXZpZXcgZnJvbSAnLi9wcmV2aWV3LnZ1ZSdcclxuaW1wb3J0IFNlYXJjaCBmcm9tICcuL3NlYXJjaC52dWUnXHJcblxyXG5jb25zdCBJMThOID0ge1xyXG4gIHNlYXJjaDogJ1NlYXJjaCcsXHJcbiAgbm90Zm91bmQ6ICdObyBFbW9qaSBGb3VuZCcsXHJcbiAgY2F0ZWdvcmllczoge1xyXG4gICAgc2VhcmNoOiAnU2VhcmNoIFJlc3VsdHMnLFxyXG4gICAgcmVjZW50OiAnRnJlcXVlbnRseSBVc2VkJyxcclxuICAgIHNtaWxleXM6ICdTbWlsZXlzICYgRW1vdGlvbicsXHJcbiAgICBwZW9wbGU6ICdQZW9wbGUgJiBCb2R5JyxcclxuICAgIG5hdHVyZTogJ0FuaW1hbHMgJiBOYXR1cmUnLFxyXG4gICAgZm9vZHM6ICdGb29kICYgRHJpbmsnLFxyXG4gICAgYWN0aXZpdHk6ICdBY3Rpdml0eScsXHJcbiAgICBwbGFjZXM6ICdUcmF2ZWwgJiBQbGFjZXMnLFxyXG4gICAgb2JqZWN0czogJ09iamVjdHMnLFxyXG4gICAgc3ltYm9sczogJ1N5bWJvbHMnLFxyXG4gICAgZmxhZ3M6ICdGbGFncycsXHJcbiAgICBjdXN0b206ICdDdXN0b20nLFxyXG4gIH0sXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBwcm9wczoge1xyXG4gICAgLi4uUGlja2VyUHJvcHMsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIHR5cGU6IE9iamVjdCxcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGFjdGl2ZVNraW46IHRoaXMuc2tpbiB8fCBzdG9yZS5nZXQoJ3NraW4nKSB8fCB0aGlzLmRlZmF1bHRTa2luLFxyXG4gICAgICB2aWV3OiBuZXcgUGlja2VyVmlldyh0aGlzKSxcclxuICAgIH1cclxuICB9LFxyXG4gIGNvbXB1dGVkOiB7XHJcbiAgICBjdXN0b21TdHlsZXMoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgd2lkdGg6IHRoaXMuY2FsY3VsYXRlV2lkdGggKyAncHgnLFxyXG4gICAgICAgIC4uLnRoaXMucGlja2VyU3R5bGVzLFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZW1vamlQcm9wcygpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBuYXRpdmU6IHRoaXMubmF0aXZlLFxyXG4gICAgICAgIHNraW46IHRoaXMuYWN0aXZlU2tpbixcclxuICAgICAgICBzZXQ6IHRoaXMuc2V0LFxyXG4gICAgICAgIGVtb2ppVG9vbHRpcDogdGhpcy5lbW9qaVRvb2x0aXAsXHJcbiAgICAgICAgZW1vamlTaXplOiB0aGlzLmVtb2ppU2l6ZSxcclxuICAgICAgICBzZWxlY3RlZEVtb2ppOiB0aGlzLnZpZXcucHJldmlld0Vtb2ppLFxyXG4gICAgICAgIHNlbGVjdGVkRW1vamlDYXRlZ29yeTogdGhpcy52aWV3LnByZXZpZXdFbW9qaUNhdGVnb3J5LFxyXG4gICAgICAgIG9uRW50ZXI6IHRoaXMub25FbW9qaUVudGVyLmJpbmQodGhpcyksXHJcbiAgICAgICAgb25MZWF2ZTogdGhpcy5vbkVtb2ppTGVhdmUuYmluZCh0aGlzKSxcclxuICAgICAgICBvbkNsaWNrOiB0aGlzLm9uRW1vamlDbGljay5iaW5kKHRoaXMpLFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2tpblByb3BzKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHNraW46IHRoaXMuYWN0aXZlU2tpbixcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNhbGN1bGF0ZVdpZHRoKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5wZXJMaW5lICogKHRoaXMuZW1vamlTaXplICsgMTIpICsgMTIgKyAyICsgbWVhc3VyZVNjcm9sbGJhcigpXHJcbiAgICB9LFxyXG4gICAgLy8gZW1vamlzUGVyUm93KCkge1xyXG4gICAgLy8gICBjb25zdCBsaXN0RWwgPSB0aGlzLiRyZWZzLnNjcm9sbENvbnRlbnRcclxuICAgIC8vICAgY29uc3QgZW1vamlFbCA9IGxpc3RFbC5xdWVyeVNlbGVjdG9yKCcuZW1vamktbWFydC1lbW9qaScpXHJcbiAgICAvLyAgIHJldHVybiBNYXRoLmZsb29yKGxpc3RFbC5vZmZzZXRXaWR0aCAvIGVtb2ppRWwub2Zmc2V0V2lkdGgpXHJcbiAgICAvLyB9LFxyXG4gICAgZmlsdGVyZWRDYXRlZ29yaWVzKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy52aWV3LmZpbHRlcmVkQ2F0ZWdvcmllc1xyXG4gICAgfSxcclxuICAgIG1lcmdlZEkxOG4oKSB7XHJcbiAgICAgIHJldHVybiBPYmplY3QuZnJlZXplKGRlZXBNZXJnZShJMThOLCB0aGlzLmkxOG4pKVxyXG4gICAgfSxcclxuICAgIGlkbGVFbW9qaSgpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmVtb2ppKHRoaXMuZW1vamkpXHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFxyXG4gICAgICAgICAgJ0RlZmF1bHQgcHJldmlldyBlbW9qaSBgJyArXHJcbiAgICAgICAgICAgIHRoaXMuZW1vamkgK1xyXG4gICAgICAgICAgICAnYCBpcyBub3QgYXZhaWxhYmxlLCBjaGVjayB0aGUgUGlja2VyIGBlbW9qaWAgcHJvcGVydHknLFxyXG4gICAgICAgIClcclxuICAgICAgICBjb25zb2xlLmVycm9yKGUpXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5maXJzdEVtb2ppKClcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIG9uU2Nyb2xsKCkge1xyXG4gICAgICBpZiAodGhpcy5pbmZpbml0ZVNjcm9sbCAmJiAhdGhpcy53YWl0aW5nRm9yUGFpbnQpIHtcclxuICAgICAgICB0aGlzLndhaXRpbmdGb3JQYWludCA9IHRydWVcclxuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMub25TY3JvbGxQYWludC5iaW5kKHRoaXMpKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25TY3JvbGxQYWludCgpIHtcclxuICAgICAgdGhpcy53YWl0aW5nRm9yUGFpbnQgPSBmYWxzZVxyXG4gICAgICB0aGlzLnZpZXcub25TY3JvbGwoKVxyXG4gICAgfSxcclxuICAgIG9uQW5jaG9yQ2xpY2soY2F0ZWdvcnkpIHtcclxuICAgICAgdGhpcy52aWV3Lm9uQW5jaG9yQ2xpY2soY2F0ZWdvcnkpXHJcbiAgICB9LFxyXG4gICAgb25TZWFyY2godmFsdWUpIHtcclxuICAgICAgdGhpcy52aWV3Lm9uU2VhcmNoKHZhbHVlKVxyXG4gICAgfSxcclxuICAgIG9uRW1vamlFbnRlcihlbW9qaSkge1xyXG4gICAgICB0aGlzLnZpZXcub25FbW9qaUVudGVyKGVtb2ppKVxyXG4gICAgfSxcclxuICAgIG9uRW1vamlMZWF2ZShlbW9qaSkge1xyXG4gICAgICB0aGlzLnZpZXcub25FbW9qaUxlYXZlKGVtb2ppKVxyXG4gICAgfSxcclxuICAgIG9uQXJyb3dMZWZ0KCRldmVudCkge1xyXG4gICAgICBjb25zdCBvbGRJZHggPSB0aGlzLnZpZXcucHJldmlld0Vtb2ppSWR4XHJcbiAgICAgIHRoaXMudmlldy5vbkFycm93TGVmdCgpXHJcbiAgICAgIGlmICgkZXZlbnQgJiYgdGhpcy52aWV3LnByZXZpZXdFbW9qaUlkeCAhPT0gb2xkSWR4KSB7XHJcbiAgICAgICAgLy8gUHJldmVudCBjdXJzb3IgbW92ZW1lbnQgaW5zaWRlIHRoZSBpbnB1dFxyXG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvbkFycm93UmlnaHQoKSB7XHJcbiAgICAgIHRoaXMudmlldy5vbkFycm93UmlnaHQoKVxyXG4gICAgfSxcclxuICAgIG9uQXJyb3dEb3duKCkge1xyXG4gICAgICB0aGlzLnZpZXcub25BcnJvd0Rvd24oKVxyXG4gICAgfSxcclxuICAgIG9uQXJyb3dVcCgkZXZlbnQpIHtcclxuICAgICAgdGhpcy52aWV3Lm9uQXJyb3dVcCgpXHJcbiAgICAgIC8vIFByZXZlbnQgY3Vyc29yIG1vdmVtZW50IGluc2lkZSB0aGUgaW5wdXRcclxuICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgIH0sXHJcbiAgICBvbkVudGVyKGVtb2ppKSB7XHJcbiAgICAgIHRoaXMuJGVtaXQoJ3NlbGVjdCcsIHRoaXMudmlldy5wcmV2aWV3RW1vamkpXHJcbiAgICAgIGZyZXF1ZW50bHkuYWRkKHRoaXMudmlldy5wcmV2aWV3RW1vamkpXHJcbiAgICB9LFxyXG4gICAgb25FbW9qaUNsaWNrKGVtb2ppKSB7XHJcbiAgICAgIHRoaXMuJGVtaXQoJ3NlbGVjdCcsIGVtb2ppKVxyXG4gICAgICBmcmVxdWVudGx5LmFkZChlbW9qaSlcclxuICAgIH0sXHJcbiAgICBvblNraW5DaGFuZ2Uoc2tpbikge1xyXG4gICAgICB0aGlzLmFjdGl2ZVNraW4gPSBza2luXHJcbiAgICAgIHN0b3JlLnVwZGF0ZSh7IHNraW4gfSlcclxuXHJcbiAgICAgIHRoaXMuJGVtaXQoJ3NraW4tY2hhbmdlJywgc2tpbilcclxuICAgIH0sXHJcbiAgICBnZXRDYXRlZ29yeUNvbXBvbmVudChpbmRleCkge1xyXG4gICAgICBsZXQgY29tcG9uZW50ID0gdGhpcy4kcmVmc1snY2F0ZWdvcmllc18nICsgaW5kZXhdXHJcbiAgICAgIGlmIChjb21wb25lbnQgJiYgJzAnIGluIGNvbXBvbmVudCkge1xyXG4gICAgICAgIC8vIFZ1ZSAyIGhhcyAkcmVmcyB1bmRlciB2LWZvciBhcyBhbiBhcnJheS5cclxuICAgICAgICByZXR1cm4gY29tcG9uZW50WycwJ11cclxuICAgICAgfVxyXG4gICAgICAvLyBWdWUgMyBkb2VzIG5vdCBzdXBwb3J0ICRyZWZzIGFzIGFycmF5LlxyXG4gICAgICByZXR1cm4gY29tcG9uZW50XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY29tcG9uZW50czoge1xyXG4gICAgQW5jaG9ycyxcclxuICAgIENhdGVnb3J5LFxyXG4gICAgUHJldmlldyxcclxuICAgIFNlYXJjaCxcclxuICB9LFxyXG59XHJcbjwvc2NyaXB0PlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiByb2xlPVwidGFibGlzdFwiIGNsYXNzPVwiZW1vamktbWFydC1hbmNob3JzXCI+XHJcbiAgICA8YnV0dG9uXHJcbiAgICAgIHYtZm9yPVwiY2F0ZWdvcnkgaW4gY2F0ZWdvcmllc1wiXHJcbiAgICAgIHJvbGU9XCJ0YWJcIlxyXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgOmFyaWEtbGFiZWw9XCJjYXRlZ29yeS5uYW1lXCJcclxuICAgICAgOmFyaWEtc2VsZWN0ZWQ9XCJjYXRlZ29yeS5pZCA9PSBhY3RpdmVDYXRlZ29yeS5pZFwiXHJcbiAgICAgIDprZXk9XCJjYXRlZ29yeS5pZFwiXHJcbiAgICAgIDpjbGFzcz1cIntcclxuICAgICAgICAnZW1vamktbWFydC1hbmNob3InOiB0cnVlLFxyXG4gICAgICAgICdlbW9qaS1tYXJ0LWFuY2hvci1zZWxlY3RlZCc6IGNhdGVnb3J5LmlkID09IGFjdGl2ZUNhdGVnb3J5LmlkLFxyXG4gICAgICB9XCJcclxuICAgICAgOnN0eWxlPVwieyBjb2xvcjogY2F0ZWdvcnkuaWQgPT0gYWN0aXZlQ2F0ZWdvcnkuaWQgPyBjb2xvciA6ICcnIH1cIlxyXG4gICAgICA6ZGF0YS10aXRsZT1cImkxOG4uY2F0ZWdvcmllc1tjYXRlZ29yeS5pZF1cIlxyXG4gICAgICBAY2xpY2s9XCIkZW1pdCgnY2xpY2snLCBjYXRlZ29yeSlcIlxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHYtaHRtbD1cInN2Z3NbY2F0ZWdvcnkuaWRdXCIgLz5cclxuICAgICAgPHNwYW5cclxuICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgIGNsYXNzPVwiZW1vamktbWFydC1hbmNob3ItYmFyXCJcclxuICAgICAgICA6c3R5bGU9XCJ7IGJhY2tncm91bmRDb2xvcjogY29sb3IgfVwiXHJcbiAgICAgID48L3NwYW4+XHJcbiAgICA8L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBzdmdzIGZyb20gJy4uL3N2Z3MnXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgcHJvcHM6IHtcclxuICAgIGkxOG46IHtcclxuICAgICAgdHlwZTogT2JqZWN0LFxyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBjb2xvcjoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICB9LFxyXG4gICAgY2F0ZWdvcmllczoge1xyXG4gICAgICB0eXBlOiBBcnJheSxcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgYWN0aXZlQ2F0ZWdvcnk6IHtcclxuICAgICAgdHlwZTogT2JqZWN0LFxyXG4gICAgICBkZWZhdWx0KCkge1xyXG4gICAgICAgIHJldHVybiB7fVxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGNyZWF0ZWQoKSB7XHJcbiAgICB0aGlzLnN2Z3MgPSBzdmdzXHJcbiAgfSxcclxufVxyXG48L3NjcmlwdD5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxzZWN0aW9uXHJcbiAgICA6Y2xhc3M9XCJ7XHJcbiAgICAgICdlbW9qaS1tYXJ0LWNhdGVnb3J5JzogdHJ1ZSxcclxuICAgICAgJ2Vtb2ppLW1hcnQtbm8tcmVzdWx0cyc6ICFoYXNSZXN1bHRzLFxyXG4gICAgfVwiXHJcbiAgICA6YXJpYS1sYWJlbD1cImkxOG4uY2F0ZWdvcmllc1tpZF1cIlxyXG4gICAgdi1pZj1cImlzVmlzaWJsZSAmJiAoaXNTZWFyY2ggfHwgaGFzUmVzdWx0cylcIlxyXG4gID5cclxuICAgIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LWNhdGVnb3J5LWxhYmVsXCI+XHJcbiAgICAgIDxoMyBjbGFzcz1cImVtb2ppLW1hcnQtY2F0ZWdvcnktbGFiZWxcIj57eyBpMThuLmNhdGVnb3JpZXNbaWRdIH19PC9oMz5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDx0ZW1wbGF0ZSB2LWZvcj1cInsgZW1vamlPYmplY3QsIGVtb2ppVmlldyB9IGluIGVtb2ppT2JqZWN0c1wiPlxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgdi1pZj1cImVtb2ppVmlldy5jYW5SZW5kZXJcIlxyXG4gICAgICAgIDphcmlhLWxhYmVsPVwiZW1vamlWaWV3LmFyaWFMYWJlbFwiXHJcbiAgICAgICAgcm9sZT1cIm9wdGlvblwiXHJcbiAgICAgICAgYXJpYS1zZWxlY3RlZD1cImZhbHNlXCJcclxuICAgICAgICBhcmlhLXBvc2luc2V0PVwiMVwiXHJcbiAgICAgICAgYXJpYS1zZXRzaXplPVwiMTgxMlwiXHJcbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgOmRhdGEtdGl0bGU9XCJlbW9qaU9iamVjdC5zaG9ydF9uYW1lXCJcclxuICAgICAgICA6a2V5PVwiZW1vamlPYmplY3QuaWRcIlxyXG4gICAgICAgIDp0aXRsZT1cImVtb2ppVmlldy50aXRsZVwiXHJcbiAgICAgICAgY2xhc3M9XCJlbW9qaS1tYXJ0LWVtb2ppXCJcclxuICAgICAgICA6Y2xhc3M9XCJhY3RpdmVDbGFzcyhlbW9qaU9iamVjdClcIlxyXG4gICAgICAgIEBtb3VzZWVudGVyPVwiZW1vamlQcm9wcy5vbkVudGVyKGVtb2ppVmlldy5nZXRFbW9qaSgpKVwiXHJcbiAgICAgICAgQG1vdXNlbGVhdmU9XCJlbW9qaVByb3BzLm9uTGVhdmUoZW1vamlWaWV3LmdldEVtb2ppKCkpXCJcclxuICAgICAgICBAY2xpY2s9XCJlbW9qaVByb3BzLm9uQ2xpY2soZW1vamlWaWV3LmdldEVtb2ppKCkpXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxzcGFuIDpjbGFzcz1cImVtb2ppVmlldy5jc3NDbGFzc1wiIDpzdHlsZT1cImVtb2ppVmlldy5jc3NTdHlsZVwiPnt7XHJcbiAgICAgICAgICBlbW9qaVZpZXcuY29udGVudFxyXG4gICAgICAgIH19PC9zcGFuPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvdGVtcGxhdGU+XHJcblxyXG4gICAgPGRpdiB2LWlmPVwiIWhhc1Jlc3VsdHNcIj5cclxuICAgICAgPGVtb2ppXHJcbiAgICAgICAgOmRhdGE9XCJkYXRhXCJcclxuICAgICAgICBlbW9qaT1cInNsZXV0aF9vcl9zcHlcIlxyXG4gICAgICAgIDpuYXRpdmU9XCJlbW9qaVByb3BzLm5hdGl2ZVwiXHJcbiAgICAgICAgOnNraW49XCJlbW9qaVByb3BzLnNraW5cIlxyXG4gICAgICAgIDpzZXQ9XCJlbW9qaVByb3BzLnNldFwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LW5vLXJlc3VsdHMtbGFiZWxcIj57eyBpMThuLm5vdGZvdW5kIH19PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L3NlY3Rpb24+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgeyBFbW9qaVZpZXcgfSBmcm9tICcuLi91dGlscy9lbW9qaS1kYXRhJ1xyXG5pbXBvcnQgRW1vamkgZnJvbSAnLi9FbW9qaS52dWUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgcHJvcHM6IHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgdHlwZTogT2JqZWN0LFxyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBpMThuOiB7XHJcbiAgICAgIHR5cGU6IE9iamVjdCxcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgaWQ6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBuYW1lOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgZW1vamlzOiB7XHJcbiAgICAgIHR5cGU6IEFycmF5LFxyXG4gICAgfSxcclxuICAgIGVtb2ppUHJvcHM6IHtcclxuICAgICAgdHlwZTogT2JqZWN0LFxyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBhY3RpdmVDbGFzczogZnVuY3Rpb24oZW1vamlPYmplY3QpIHtcclxuICAgICAgaWYgKCF0aGlzLmVtb2ppUHJvcHMuc2VsZWN0ZWRFbW9qaSkge1xyXG4gICAgICAgIHJldHVybiAnJ1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghdGhpcy5lbW9qaVByb3BzLnNlbGVjdGVkRW1vamlDYXRlZ29yeSkge1xyXG4gICAgICAgIHJldHVybiAnJ1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChcclxuICAgICAgICB0aGlzLmVtb2ppUHJvcHMuc2VsZWN0ZWRFbW9qaS5pZCA9PSBlbW9qaU9iamVjdC5pZCAmJlxyXG4gICAgICAgIHRoaXMuZW1vamlQcm9wcy5zZWxlY3RlZEVtb2ppQ2F0ZWdvcnkuaWQgPT0gdGhpcy5pZFxyXG4gICAgICApIHtcclxuICAgICAgICByZXR1cm4gJ2Vtb2ppLW1hcnQtZW1vamktc2VsZWN0ZWQnXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuICcnXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIGlzVmlzaWJsZSgpIHtcclxuICAgICAgcmV0dXJuICEhdGhpcy5lbW9qaXNcclxuICAgIH0sXHJcbiAgICBpc1NlYXJjaCgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMubmFtZSA9PSAnU2VhcmNoJ1xyXG4gICAgfSxcclxuICAgIGhhc1Jlc3VsdHMoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmVtb2ppcy5sZW5ndGggPiAwXHJcbiAgICB9LFxyXG4gICAgZW1vamlPYmplY3RzKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5lbW9qaXMubWFwKChlbW9qaSkgPT4ge1xyXG4gICAgICAgIGxldCBlbW9qaU9iamVjdCA9IGVtb2ppXHJcbiAgICAgICAgbGV0IGVtb2ppVmlldyA9IG5ldyBFbW9qaVZpZXcoXHJcbiAgICAgICAgICBlbW9qaSxcclxuICAgICAgICAgIHRoaXMuZW1vamlQcm9wcy5za2luLFxyXG4gICAgICAgICAgdGhpcy5lbW9qaVByb3BzLnNldCxcclxuICAgICAgICAgIHRoaXMuZW1vamlQcm9wcy5uYXRpdmUsXHJcbiAgICAgICAgICB0aGlzLmVtb2ppUHJvcHMuZmFsbGJhY2ssXHJcbiAgICAgICAgICB0aGlzLmVtb2ppUHJvcHMuZW1vamlUb29sdGlwLFxyXG4gICAgICAgICAgdGhpcy5lbW9qaVByb3BzLmVtb2ppU2l6ZSxcclxuICAgICAgICApXHJcbiAgICAgICAgcmV0dXJuIHsgZW1vamlPYmplY3QsIGVtb2ppVmlldyB9XHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY29tcG9uZW50czoge1xyXG4gICAgRW1vamksXHJcbiAgfSxcclxufVxyXG48L3NjcmlwdD5cclxuIiwiPHRlbXBsYXRlPlxyXG5cclxuPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtcHJldmlld1wiPlxyXG4gIDx0ZW1wbGF0ZSB2LWlmPVwiZW1vamlcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtcHJldmlldy1lbW9qaVwiPlxyXG4gICAgICAgIDxlbW9qaVxyXG4gICAgICAgICAgOmRhdGE9XCJkYXRhXCJcclxuICAgICAgICAgIDplbW9qaT1cImVtb2ppXCJcclxuICAgICAgICAgIDpuYXRpdmU9XCJlbW9qaVByb3BzLm5hdGl2ZVwiXHJcbiAgICAgICAgICA6c2tpbj1cImVtb2ppUHJvcHMuc2tpblwiXHJcbiAgICAgICAgICA6c2V0PVwiZW1vamlQcm9wcy5zZXRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtcHJldmlldy1kYXRhXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtcHJldmlldy1uYW1lXCI+e3sgZW1vamkubmFtZSB9fTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LXByZXZpZXctc2hvcnRuYW1lc1wiPlxyXG4gICAgICAgICAgPHNwYW4gdi1mb3I9XCJzaG9ydE5hbWUgaW4gZW1vamlTaG9ydE5hbWVzXCIgOmtleT1cInNob3J0TmFtZVwiIGNsYXNzPVwiZW1vamktbWFydC1wcmV2aWV3LXNob3J0bmFtZVwiPjp7eyBzaG9ydE5hbWUgfX06PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LXByZXZpZXctZW1vdGljb25zXCI+XHJcbiAgICAgICAgICA8c3BhbiB2LWZvcj1cImVtb3RpY29uIGluIGVtb2ppRW1vdGljb25zXCIgOmtleT1cImVtb3RpY29uXCIgY2xhc3M9XCJlbW9qaS1tYXJ0LXByZXZpZXctZW1vdGljb25cIj57eyBlbW90aWNvbiB9fTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgPC90ZW1wbGF0ZT5cclxuXHJcbiAgPHRlbXBsYXRlIHYtZWxzZT5cclxuICAgIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LXByZXZpZXctZW1vamlcIj5cclxuICAgICAgPGVtb2ppXHJcbiAgICAgICAgOmRhdGE9XCJkYXRhXCJcclxuICAgICAgICA6ZW1vamk9XCJpZGxlRW1vamlcIlxyXG4gICAgICAgIDpuYXRpdmU9XCJlbW9qaVByb3BzLm5hdGl2ZVwiXHJcbiAgICAgICAgOnNraW49XCJlbW9qaVByb3BzLnNraW5cIlxyXG4gICAgICAgIDpzZXQ9XCJlbW9qaVByb3BzLnNldFwiXHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1wcmV2aWV3LWRhdGFcIj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJlbW9qaS1tYXJ0LXRpdGxlLWxhYmVsXCI+e3sgdGl0bGUgfX08L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IHYtaWY9XCJzaG93U2tpblRvbmVzXCIgY2xhc3M9XCJlbW9qaS1tYXJ0LXByZXZpZXctc2tpbnNcIj5cclxuICAgICAgPHNraW5zIDpza2luPVwic2tpblByb3BzLnNraW5cIiBAY2hhbmdlPVwib25Ta2luQ2hhbmdlKCRldmVudClcIiAvPlxyXG4gICAgPC9kaXY+XHJcbiAgPC90ZW1wbGF0ZT5cclxuPC9kaXY+XHJcblxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHJcbmltcG9ydCBFbW9qaSBmcm9tICcuL0Vtb2ppLnZ1ZSdcclxuaW1wb3J0IFNraW5zIGZyb20gJy4vc2tpbnMudnVlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHByb3BzOiB7XHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIHR5cGU6IE9iamVjdCxcclxuICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgIH0sXHJcbiAgICB0aXRsZToge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgZW1vamk6IHtcclxuICAgICAgdHlwZTogW1N0cmluZywgT2JqZWN0XVxyXG4gICAgfSxcclxuICAgIGlkbGVFbW9qaToge1xyXG4gICAgICB0eXBlOiBbU3RyaW5nLCBPYmplY3RdLFxyXG4gICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHNob3dTa2luVG9uZXM6IHtcclxuICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgZGVmYXVsdDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGVtb2ppUHJvcHM6IHtcclxuICAgICAgdHlwZTogT2JqZWN0LFxyXG4gICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHNraW5Qcm9wczoge1xyXG4gICAgICB0eXBlOiBPYmplY3QsXHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgb25Ta2luQ2hhbmdlOiB7XHJcbiAgICAgIHR5cGU6IEZ1bmN0aW9uLFxyXG4gICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIGVtb2ppRGF0YSgpIHtcclxuICAgICAgaWYgKHRoaXMuZW1vamkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbW9qaVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB7fVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZW1vamlTaG9ydE5hbWVzKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5lbW9qaURhdGEuc2hvcnRfbmFtZXNcclxuICAgIH0sXHJcbiAgICBlbW9qaUVtb3RpY29ucygpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZW1vamlEYXRhLmVtb3RpY29uc1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgY29tcG9uZW50czoge1xyXG4gICAgRW1vamksXHJcbiAgICBTa2luc1xyXG4gIH1cclxufVxyXG5cclxuPC9zY3JpcHQ+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1zZWFyY2hcIj5cclxuICAgIDxpbnB1dFxyXG4gICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgIDpwbGFjZWhvbGRlcj1cImkxOG4uc2VhcmNoXCJcclxuICAgICAgcm9sZT1cInRleHRib3hcIlxyXG4gICAgICBhcmlhLWF1dG9jb21wbGV0ZT1cImxpc3RcIlxyXG4gICAgICBhcmlhLW93bnM9XCJlbW9qaS1tYXJ0LWxpc3RcIlxyXG4gICAgICBhcmlhLWxhYmVsPVwiU2VhcmNoIGZvciBhbiBlbW9qaVwiXHJcbiAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJlbW9qaS1tYXJ0LXNlYXJjaC1kZXNjcmlwdGlvblwiXHJcbiAgICAgIEBrZXlkb3duLmxlZnQ9XCIoJGV2ZW50KSA9PiAkZW1pdCgnYXJyb3dMZWZ0JywgJGV2ZW50KVwiXHJcbiAgICAgIEBrZXlkb3duLnJpZ2h0PVwiKCkgPT4gJGVtaXQoJ2Fycm93UmlnaHQnKVwiXHJcbiAgICAgIEBrZXlkb3duLmRvd249XCIoKSA9PiAkZW1pdCgnYXJyb3dEb3duJylcIlxyXG4gICAgICBAa2V5ZG93bi51cD1cIigkZXZlbnQpID0+ICRlbWl0KCdhcnJvd1VwJywgJGV2ZW50KVwiXHJcbiAgICAgIEBrZXlkb3duLmVudGVyPVwiKCkgPT4gJGVtaXQoJ2VudGVyJylcIlxyXG4gICAgICB2LW1vZGVsPVwidmFsdWVcIlxyXG4gICAgLz5cclxuICAgIDxzcGFuIGNsYXNzPVwiaGlkZGVuXCIgaWQ9XCJlbW9qaS1waWNrZXItc2VhcmNoLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlVzZSB0aGUgbGVmdCwgcmlnaHQsIHVwIGFuZCBkb3duIGFycm93IGtleXMgdG8gbmF2aWdhdGUgdGhlIGVtb2ppIHNlYXJjaFxyXG4gICAgICByZXN1bHRzLjwvc3BhblxyXG4gICAgPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHByb3BzOiB7XHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIHR5cGU6IE9iamVjdCxcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgaTE4bjoge1xyXG4gICAgICB0eXBlOiBPYmplY3QsXHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIGF1dG9Gb2N1czoge1xyXG4gICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICBvblNlYXJjaDoge1xyXG4gICAgICB0eXBlOiBGdW5jdGlvbixcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgb25BcnJvd0xlZnQ6IHtcclxuICAgICAgdHlwZTogRnVuY3Rpb24sXHJcbiAgICAgIHJlcXVpcmVkOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICBvbkFycm93UmlnaHQ6IHtcclxuICAgICAgdHlwZTogRnVuY3Rpb24sXHJcbiAgICAgIHJlcXVpcmVkOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICBvbkFycm93RG93bjoge1xyXG4gICAgICB0eXBlOiBGdW5jdGlvbixcclxuICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIG9uQXJyb3dVcDoge1xyXG4gICAgICB0eXBlOiBGdW5jdGlvbixcclxuICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIG9uRW50ZXI6IHtcclxuICAgICAgdHlwZTogRnVuY3Rpb24sXHJcbiAgICAgIHJlcXVpcmVkOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdmFsdWU6ICcnLFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIGVtb2ppSW5kZXgoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmRhdGFcclxuICAgIH0sXHJcbiAgfSxcclxuICB3YXRjaDoge1xyXG4gICAgdmFsdWUoKSB7XHJcbiAgICAgIHRoaXMuJGVtaXQoJ3NlYXJjaCcsIHRoaXMudmFsdWUpXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSAnJ1xyXG4gICAgfSxcclxuICB9LFxyXG4gIG1vdW50ZWQoKSB7XHJcbiAgICBsZXQgJGlucHV0ID0gdGhpcy4kZWwucXVlcnlTZWxlY3RvcignaW5wdXQnKVxyXG5cclxuICAgIGlmICh0aGlzLmF1dG9Gb2N1cykge1xyXG4gICAgICAkaW5wdXQuZm9jdXMoKVxyXG4gICAgfVxyXG4gIH0sXHJcbn1cclxuPC9zY3JpcHQ+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuXHJcbjxkaXYgOmNsYXNzPVwieyAnZW1vamktbWFydC1za2luLXN3YXRjaGVzJzogdHJ1ZSwgJ2Vtb2ppLW1hcnQtc2tpbi1zd2F0Y2hlcy1vcGVuZWQnOiBvcGVuZWQgfVwiPlxyXG4gIDxzcGFuIHYtZm9yPVwic2tpblRvbmUgaW4gNlwiIDprZXk9XCJza2luVG9uZVwiIDpjbGFzcz1cInsgJ2Vtb2ppLW1hcnQtc2tpbi1zd2F0Y2gnOiB0cnVlLCAnZW1vamktbWFydC1za2luLXN3YXRjaC1zZWxlY3RlZCc6IHNraW4gPT0gc2tpblRvbmUgfVwiPlxyXG4gICAgPHNwYW4gOmNsYXNzPVwiJ2Vtb2ppLW1hcnQtc2tpbiBlbW9qaS1tYXJ0LXNraW4tdG9uZS0nICsgc2tpblRvbmVcIiBAY2xpY2s9XCJvbkNsaWNrKHNraW5Ub25lKVwiPjwvc3Bhbj5cclxuICA8L3NwYW4+XHJcbjwvZGl2PlxyXG5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgcHJvcHM6IHtcclxuICAgIHNraW46IHtcclxuICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG9wZW5lZDogZmFsc2VcclxuICAgIH1cclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIG9uQ2xpY2soc2tpblRvbmUpIHtcclxuICAgICAgaWYgKHRoaXMub3BlbmVkKSB7XHJcbiAgICAgICAgaWYgKHNraW5Ub25lICE9IHRoaXMuc2tpbikge1xyXG4gICAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgc2tpblRvbmUpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLm9wZW5lZCA9ICF0aGlzLm9wZW5lZFxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuPC9zY3JpcHQ+XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgQW5jaG9ycyB9IGZyb20gJy4vYW5jaG9ycy52dWUnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2F0ZWdvcnkgfSBmcm9tICcuL2NhdGVnb3J5LnZ1ZSdcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBQcmV2aWV3IH0gZnJvbSAnLi9wcmV2aWV3LnZ1ZSdcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZWFyY2ggfSBmcm9tICcuL3NlYXJjaC52dWUnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2tpbnMgfSBmcm9tICcuL3NraW5zLnZ1ZSdcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBFbW9qaSB9IGZyb20gJy4vRW1vamkudnVlJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIFBpY2tlciB9IGZyb20gJy4vUGlja2VyLnZ1ZSdcclxuIiwiY29uc3QgX1N0cmluZyA9IFN0cmluZ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgX1N0cmluZy5mcm9tQ29kZVBvaW50IHx8XHJcbiAgZnVuY3Rpb24gc3RyaW5nRnJvbUNvZGVQb2ludCgpIHtcclxuICAgIHZhciBNQVhfU0laRSA9IDB4NDAwMFxyXG4gICAgdmFyIGNvZGVVbml0cyA9IFtdXHJcbiAgICB2YXIgaGlnaFN1cnJvZ2F0ZVxyXG4gICAgdmFyIGxvd1N1cnJvZ2F0ZVxyXG4gICAgdmFyIGluZGV4ID0gLTFcclxuICAgIHZhciBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoXHJcbiAgICBpZiAoIWxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gJydcclxuICAgIH1cclxuICAgIHZhciByZXN1bHQgPSAnJ1xyXG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcclxuICAgICAgdmFyIGNvZGVQb2ludCA9IE51bWJlcihhcmd1bWVudHNbaW5kZXhdKVxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgIWlzRmluaXRlKGNvZGVQb2ludCkgfHwgLy8gYE5hTmAsIGArSW5maW5pdHlgLCBvciBgLUluZmluaXR5YFxyXG4gICAgICAgIGNvZGVQb2ludCA8IDAgfHwgLy8gbm90IGEgdmFsaWQgVW5pY29kZSBjb2RlIHBvaW50XHJcbiAgICAgICAgY29kZVBvaW50ID4gMHgxMGZmZmYgfHwgLy8gbm90IGEgdmFsaWQgVW5pY29kZSBjb2RlIHBvaW50XHJcbiAgICAgICAgTWF0aC5mbG9vcihjb2RlUG9pbnQpICE9IGNvZGVQb2ludCAvLyBub3QgYW4gaW50ZWdlclxyXG4gICAgICApIHtcclxuICAgICAgICB0aHJvdyBSYW5nZUVycm9yKCdJbnZhbGlkIGNvZGUgcG9pbnQ6ICcgKyBjb2RlUG9pbnQpXHJcbiAgICAgIH1cclxuICAgICAgaWYgKGNvZGVQb2ludCA8PSAweGZmZmYpIHtcclxuICAgICAgICAvLyBCTVAgY29kZSBwb2ludFxyXG4gICAgICAgIGNvZGVVbml0cy5wdXNoKGNvZGVQb2ludClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBBc3RyYWwgY29kZSBwb2ludDsgc3BsaXQgaW4gc3Vycm9nYXRlIGhhbHZlc1xyXG4gICAgICAgIC8vIGh0dHA6Ly9tYXRoaWFzYnluZW5zLmJlL25vdGVzL2phdmFzY3JpcHQtZW5jb2Rpbmcjc3Vycm9nYXRlLWZvcm11bGFlXHJcbiAgICAgICAgY29kZVBvaW50IC09IDB4MTAwMDBcclxuICAgICAgICBoaWdoU3Vycm9nYXRlID0gKGNvZGVQb2ludCA+PiAxMCkgKyAweGQ4MDBcclxuICAgICAgICBsb3dTdXJyb2dhdGUgPSAoY29kZVBvaW50ICUgMHg0MDApICsgMHhkYzAwXHJcbiAgICAgICAgY29kZVVuaXRzLnB1c2goaGlnaFN1cnJvZ2F0ZSwgbG93U3Vycm9nYXRlKVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChpbmRleCArIDEgPT09IGxlbmd0aCB8fCBjb2RlVW5pdHMubGVuZ3RoID4gTUFYX1NJWkUpIHtcclxuICAgICAgICByZXN1bHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLCBjb2RlVW5pdHMpXHJcbiAgICAgICAgY29kZVVuaXRzLmxlbmd0aCA9IDBcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdFxyXG4gIH1cclxuIiwiY29uc3QgU1ZHcyA9IHtcclxuICBhY3Rpdml0eTogYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj48cGF0aCBkPVwiTTEyIDBDNS4zNzMgMCAwIDUuMzcyIDAgMTJjMCA2LjYyNyA1LjM3MyAxMiAxMiAxMiA2LjYyOCAwIDEyLTUuMzczIDEyLTEyIDAtNi42MjgtNS4zNzItMTItMTItMTJtOS45NDkgMTFIMTcuMDVjLjIyNC0yLjUyNyAxLjIzMi00Ljc3MyAxLjk2OC02LjExM0E5Ljk2NiA5Ljk2NiAwIDAgMSAyMS45NDkgMTFNMTMgMTFWMi4wNTFhOS45NDUgOS45NDUgMCAwIDEgNC40MzIgMS41NjRjLS44NTggMS40OTEtMi4xNTYgNC4yMi0yLjM5MiA3LjM4NUgxM3ptLTIgMEg4Ljk2MWMtLjIzOC0zLjE2NS0xLjUzNi01Ljg5NC0yLjM5My03LjM4NUE5Ljk1IDkuOTUgMCAwIDEgMTEgMi4wNTFWMTF6bTAgMnY4Ljk0OWE5LjkzNyA5LjkzNyAwIDAgMS00LjQzMi0xLjU2NGMuODU3LTEuNDkyIDIuMTU1LTQuMjIxIDIuMzkzLTcuMzg1SDExem00LjA0IDBjLjIzNiAzLjE2NCAxLjUzNCA1Ljg5MyAyLjM5MiA3LjM4NUE5LjkyIDkuOTIgMCAwIDEgMTMgMjEuOTQ5VjEzaDIuMDR6TTQuOTgyIDQuODg3QzUuNzE4IDYuMjI3IDYuNzI2IDguNDczIDYuOTUxIDExaC00LjlhOS45NzcgOS45NzcgMCAwIDEgMi45MzEtNi4xMTNNMi4wNTEgMTNoNC45Yy0uMjI2IDIuNTI3LTEuMjMzIDQuNzcxLTEuOTY5IDYuMTEzQTkuOTcyIDkuOTcyIDAgMCAxIDIuMDUxIDEzbTE2Ljk2NyA2LjExM2MtLjczNS0xLjM0Mi0xLjc0NC0zLjU4Ni0xLjk2OC02LjExM2g0Ljg5OWE5Ljk2MSA5Ljk2MSAwIDAgMS0yLjkzMSA2LjExM1wiLz48L3N2Zz5gLFxyXG5cclxuICBjdXN0b206IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+PGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDIuMDAwMDAwLCAxLjAwMDAwMClcIj48cmVjdCBpZD1cIlJlY3RhbmdsZVwiIHg9XCI4XCIgeT1cIjBcIiB3aWR0aD1cIjNcIiBoZWlnaHQ9XCIyMVwiIHJ4PVwiMS41XCI+PC9yZWN0PjxyZWN0IGlkPVwiUmVjdGFuZ2xlXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDkuODQzLCAxMC41NDkpIHJvdGF0ZSg2MCkgdHJhbnNsYXRlKC05Ljg0MywgLTEwLjU0OSkgXCIgeD1cIjguMzQzXCIgeT1cIjAuMDQ5XCIgd2lkdGg9XCIzXCIgaGVpZ2h0PVwiMjFcIiByeD1cIjEuNVwiPjwvcmVjdD48cmVjdCBpZD1cIlJlY3RhbmdsZVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg5Ljg0MywgMTAuNTQ5KSByb3RhdGUoLTYwKSB0cmFuc2xhdGUoLTkuODQzLCAtMTAuNTQ5KSBcIiB4PVwiOC4zNDNcIiB5PVwiMC4wNDlcIiB3aWR0aD1cIjNcIiBoZWlnaHQ9XCIyMVwiIHJ4PVwiMS41XCI+PC9yZWN0PjwvZz48L3N2Zz5gLFxyXG5cclxuICBmbGFnczogYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj48cGF0aCBkPVwiTTAgMGw2LjA4NCAyNEg4TDEuOTE2IDB6TTIxIDVoLTRsLTEtNEg0bDMgMTJoM2wxIDRoMTNMMjEgNXpNNi41NjMgM2g3Ljg3NWwyIDhIOC41NjNsLTItOHptOC44MzIgMTBsLTIuODU2IDEuOTA0TDEyLjA2MyAxM2gzLjMzMnpNMTkgMTNsLTEuNS02aDEuOTM4bDIgOEgxNmwzLTJ6XCIvPjwvc3ZnPmAsXHJcblxyXG4gIGZvb2RzOiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiPjxwYXRoIGQ9XCJNMTcgNC45NzhjLTEuODM4IDAtMi44NzYuMzk2LTMuNjguOTM0LjUxMy0xLjE3MiAxLjc2OC0yLjkzNCA0LjY4LTIuOTM0YTEgMSAwIDAgMCAwLTJjLTIuOTIxIDAtNC42MjkgMS4zNjUtNS41NDcgMi41MTItLjA2NC4wNzgtLjExOS4xNjItLjE4LjI0NEMxMS43MyAxLjgzOCAxMC43OTguMDIzIDkuMjA3LjAyMyA4LjU3OS4wMjIgNy44NS4zMDYgNyAuOTc4IDUuMDI3IDIuNTQgNS4zMjkgMy45MDIgNi40OTIgNC45OTkgMy42MDkgNS4yMjIgMCA3LjM1MiAwIDEyLjk2OWMwIDQuNTgyIDQuOTYxIDExLjAwOSA5IDExLjAwOSAxLjk3NSAwIDIuMzcxLS40ODYgMy0xIC42MjkuNTE0IDEuMDI1IDEgMyAxIDQuMDM5IDAgOS02LjQxOCA5LTExIDAtNS45NTMtNC4wNTUtOC03LThNOC4yNDIgMi41NDZjLjY0MS0uNTA4Ljk0My0uNTIzLjk2NS0uNTIzLjQyNi4xNjkuOTc1IDEuNDA1IDEuMzU3IDMuMDU1LTEuNTI3LS42MjktMi43NDEtMS4zNTItMi45OC0xLjg0Ni4wNTktLjExMi4yNDEtLjM1Ni42NTgtLjY4Nk0xNSAyMS45NzhjLTEuMDggMC0xLjIxLS4xMDktMS41NTktLjQwMmwtLjE3Ni0uMTQ2Yy0uMzY3LS4zMDItLjgxNi0uNDUyLTEuMjY2LS40NTJzLS44OTguMTUtMS4yNjYuNDUybC0uMTc2LjE0NmMtLjM0Ny4yOTItLjQ3Ny40MDItMS41NTcuNDAyLTIuODEzIDAtNy01LjM4OS03LTkuMDA5IDAtNS44MjMgNC40ODgtNS45OTEgNS01Ljk5MSAxLjkzOSAwIDIuNDg0LjQ3MSAzLjM4NyAxLjI1MWwuMzIzLjI3NmExLjk5NSAxLjk5NSAwIDAgMCAyLjU4IDBsLjMyMy0uMjc2Yy45MDItLjc4IDEuNDQ3LTEuMjUxIDMuMzg3LTEuMjUxLjUxMiAwIDUgLjE2OCA1IDYgMCAzLjYxNy00LjE4NyA5LTcgOVwiLz48L3N2Zz5gLFxyXG5cclxuICBuYXR1cmU6IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+PHBhdGggZD1cIk0xNS41IDhhMS41IDEuNSAwIDEgMCAuMDAxIDMuMDAxQTEuNSAxLjUgMCAwIDAgMTUuNSA4TTguNSA4YTEuNSAxLjUgMCAxIDAgLjAwMSAzLjAwMUExLjUgMS41IDAgMCAwIDguNSA4XCIvPjxwYXRoIGQ9XCJNMTguOTMzIDBoLS4wMjdjLS45NyAwLTIuMTM4Ljc4Ny0zLjAxOCAxLjQ5Ny0xLjI3NC0uMzc0LTIuNjEyLS41MS0zLjg4Ny0uNTEtMS4yODUgMC0yLjYxNi4xMzMtMy44NzQuNTE3QzcuMjQ1Ljc5IDYuMDY5IDAgNS4wOTMgMGgtLjAyN0MzLjM1MiAwIC4wNyAyLjY3LjAwMiA3LjAyNmMtLjAzOSAyLjQ3OS4yNzYgNC4yMzggMS4wNCA1LjAxMy4yNTQuMjU4Ljg4Mi42NzcgMS4yOTUuODgyLjE5MSAzLjE3Ny45MjIgNS4yMzggMi41MzYgNi4zOC44OTcuNjM3IDIuMTg3Ljk0OSAzLjIgMS4xMDJDOC4wNCAyMC42IDggMjAuNzk1IDggMjFjMCAxLjc3MyAyLjM1IDMgNCAzIDEuNjQ4IDAgNC0xLjIyNyA0LTMgMC0uMjAxLS4wMzgtLjM5My0uMDcyLS41ODYgMi41NzMtLjM4NSA1LjQzNS0xLjg3NyA1LjkyNS03LjU4Ny4zOTYtLjIyLjg4Ny0uNTY4IDEuMTA0LS43ODguNzYzLS43NzQgMS4wNzktMi41MzQgMS4wNC01LjAxM0MyMy45MjkgMi42NyAyMC42NDYgMCAxOC45MzMgME0zLjIyMyA5LjEzNWMtLjIzNy4yODEtLjgzNyAxLjE1NS0uODg0IDEuMjM4LS4xNS0uNDEtLjM2OC0xLjM0OS0uMzM3LTMuMjkxLjA1MS0zLjI4MSAyLjQ3OC00Ljk3MiAzLjA5MS01LjAzMS4yNTYuMDE1LjczMS4yNyAxLjI2NS42NDYtMS4xMSAxLjE3MS0yLjI3NSAyLjkxNS0yLjM1MiA1LjEyNS0uMTMzLjU0Ni0uMzk4Ljg1OC0uNzgzIDEuMzEzTTEyIDIyYy0uOTAxIDAtMS45NTQtLjY5My0yLTEgMC0uNjU0LjQ3NS0xLjIzNiAxLTEuNjAyVjIwYTEgMSAwIDEgMCAyIDB2LS42MDJjLjUyNC4zNjUgMSAuOTQ3IDEgMS42MDItLjA0Ni4zMDctMS4wOTkgMS0yIDFtMy0zLjQ4di4wMmE0Ljc1MiA0Ljc1MiAwIDAgMC0xLjI2Mi0xLjAyYzEuMDkyLS41MTYgMi4yMzktMS4zMzQgMi4yMzktMi4yMTcgMC0xLjg0Mi0xLjc4MS0yLjE5NS0zLjk3Ny0yLjE5NS0yLjE5NiAwLTMuOTc4LjM1NC0zLjk3OCAyLjE5NSAwIC44ODMgMS4xNDggMS43MDEgMi4yMzggMi4yMTdBNC44IDQuOCAwIDAgMCA5IDE4LjUzOXYtLjAyNWMtMS0uMDc2LTIuMTgyLS4yODEtMi45NzMtLjg0Mi0xLjMwMS0uOTItMS44MzgtMy4wNDUtMS44NTMtNi40NzhsLjAyMy0uMDQxYy40OTYtLjgyNiAxLjQ5LTEuNDUgMS44MDQtMy4xMDIgMC0yLjA0NyAxLjM1Ny0zLjYzMSAyLjM2Mi00LjUyMkM5LjM3IDMuMTc4IDEwLjU1NSAzIDExLjk0OCAzYzEuNDQ3IDAgMi42ODUuMTkyIDMuNzMzLjU3IDEgLjkgMi4zMTYgMi40NjUgMi4zMTYgNC40OC4zMTMgMS42NTEgMS4zMDcgMi4yNzUgMS44MDMgMy4xMDIuMDM1LjA1OC4wNjguMTE3LjEwMi4xNzgtLjA1OSA1Ljk2Ny0xLjk0OSA3LjAxLTQuOTAyIDcuMTltNi42MjgtOC4yMDJjLS4wMzctLjA2NS0uMDc0LS4xMy0uMTEzLS4xOTVhNy41ODcgNy41ODcgMCAwIDAtLjczOS0uOTg3Yy0uMzg1LS40NTUtLjY0OC0uNzY4LS43ODItMS4zMTMtLjA3Ni0yLjIwOS0xLjI0MS0zLjk1NC0yLjM1My01LjEyNC41MzEtLjM3NiAxLjAwNC0uNjMgMS4yNjEtLjY0Ny42MzYuMDcxIDMuMDQ0IDEuNzY0IDMuMDk2IDUuMDMxLjAyNyAxLjgxLS4zNDcgMy4yMTgtLjM3IDMuMjM1XCIvPjwvc3ZnPmAsXHJcblxyXG4gIG9iamVjdHM6IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+PHBhdGggZD1cIk0xMiAwYTkgOSAwIDAgMC01IDE2LjQ4MlYyMXMyLjAzNSAzIDUgMyA1LTMgNS0zdi00LjUxOEE5IDkgMCAwIDAgMTIgMHptMCAyYzMuODYgMCA3IDMuMTQxIDcgN3MtMy4xNCA3LTcgNy03LTMuMTQxLTctNyAzLjE0LTcgNy03ek05IDE3LjQ3N2MuOTQuMzMyIDEuOTQ2LjUyMyAzIC41MjNzMi4wNi0uMTkgMy0uNTIzdi44MzRjLS45MS40MzYtMS45MjUuNjg5LTMgLjY4OWE2LjkyNCA2LjkyNCAwIDAgMS0zLS42OXYtLjgzM3ptLjIzNiAzLjA3QTguODU0IDguODU0IDAgMCAwIDEyIDIxYy45NjUgMCAxLjg4OC0uMTY3IDIuNzU4LS40NTFDMTQuMTU1IDIxLjE3MyAxMy4xNTMgMjIgMTIgMjJjLTEuMTAyIDAtMi4xMTctLjc4OS0yLjc2NC0xLjQ1M3pcIi8+PHBhdGggZD1cIk0xNC43NDUgMTIuNDQ5aC0uMDA0Yy0uODUyLS4wMjQtMS4xODgtLjg1OC0xLjU3Ny0xLjgyNC0uNDIxLTEuMDYxLS43MDMtMS41NjEtMS4xODItMS41NjZoLS4wMDljLS40ODEgMC0uNzgzLjQ5Ny0xLjIzNSAxLjUzNy0uNDM2Ljk4Mi0uODAxIDEuODExLTEuNjM2IDEuNzkxbC0uMjc2LS4wNDNjLS41NjUtLjE3MS0uODUzLS42OTEtMS4yODQtMS43OTQtLjEyNS0uMzEzLS4yMDItLjYzMi0uMjctLjkxMy0uMDUxLS4yMTMtLjEyNy0uNTMtLjE5NS0uNjM0QzcuMDY3IDkuMDA0IDcuMDM5IDkgNi45OSA5QTEgMSAwIDAgMSA3IDdoLjAxYzEuNjYyLjAxNyAyLjAxNSAxLjM3MyAyLjE5OCAyLjEzNC40ODYtLjk4MSAxLjMwNC0yLjA1OCAyLjc5Ny0yLjA3NSAxLjUzMS4wMTggMi4yOCAxLjE1MyAyLjczMSAyLjE0MWwuMDAyLS4wMDhDMTQuOTQ0IDguNDI0IDE1LjMyNyA3IDE2Ljk3OSA3aC4wMzJBMSAxIDAgMSAxIDE3IDloLS4wMTFjLS4xNDkuMDc2LS4yNTYuNDc0LS4zMTkuNzA5YTYuNDg0IDYuNDg0IDAgMCAxLS4zMTEuOTUxYy0uNDI5Ljk3My0uNzkgMS43ODktMS42MTQgMS43ODlcIi8+PC9zdmc+YCxcclxuXHJcbiAgc21pbGV5czogYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj48cGF0aCBkPVwiTTEyIDBDNS4zNzMgMCAwIDUuMzczIDAgMTJzNS4zNzMgMTIgMTIgMTIgMTItNS4zNzMgMTItMTJTMTguNjI3IDAgMTIgMG0wIDIyQzYuNDg2IDIyIDIgMTcuNTE0IDIgMTJTNi40ODYgMiAxMiAyczEwIDQuNDg2IDEwIDEwLTQuNDg2IDEwLTEwIDEwXCIvPjxwYXRoIGQ9XCJNOCA3YTIgMiAwIDEgMC0uMDAxIDMuOTk5QTIgMiAwIDAgMCA4IDdNMTYgN2EyIDIgMCAxIDAtLjAwMSAzLjk5OUEyIDIgMCAwIDAgMTYgN00xNS4yMzIgMTVjLS42OTMgMS4xOTUtMS44NyAyLTMuMzQ5IDItMS40NzcgMC0yLjY1NS0uODA1LTMuMzQ3LTJIMTVtMy0ySDZhNiA2IDAgMSAwIDEyIDBcIi8+PC9zdmc+YCxcclxuXHJcbiAgcGVvcGxlOiBgPHN2ZyB4bWxuczpzdmc9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGhlaWdodD1cIjI0XCIgd2lkdGg9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj4gPHBhdGggaWQ9XCJwYXRoMzgxNFwiIGQ9XCJtIDMuMzU5MTA4OSwyMS4xNzcyNiBjIDAuMTcyMDM2LDAuMDkzODUgNC4yNjU5OTQsMi4yOTgzNyA4LjgxNDQ0NTEsMi4yOTgzNyA0LjkyNzc2NywwIDguNjcwODk0LC0yLjIxMTg4MyA4LjgyNzgyLC0yLjMwNjAxOSAwLjExMzA3OSwtMC4wNjc4NSAwLjE4MjI2OCwtMC4xOTAwNTEgMC4xODIyNjcsLTAuMzIxOTIzIDAsLTMuMDMxMTkgLTAuOTI5NDk0LC01LjgwNDkzNiAtMi42MTcxOTYsLTcuODEwNzEyIC0xLjE4MDYwMywtMS40MDMxMzQgLTIuNjYxOTE4LC0yLjM1OTUxNiAtNC4yOTU2OTksLTIuNzk5NzkxIDQuNjk5MTE4LC0yLjIzNjI1OCAzLjEwMjMwNiwtOS4yODYxNzE2MiAtMi4wOTcxOTEsLTkuMjg2MTcxNjIgLTUuMTk5NDk3OCwwIC02Ljc5NjMxMDMsNy4wNDk5MTM2MiAtMi4wOTcxOTIsOS4yODYxNzE2MiAtMS42MzM3ODIxLDAuNDQwMjc1IC0zLjExNTA5NzEsMS4zOTY3OTggLTQuMjk1Njk5MSwyLjc5OTc5MSAtMS42ODc3MDMsMi4wMDU3NzYgLTIuNjE3MTk2LDQuNzc5NTIyIC0yLjYxNzE5Niw3LjgxMDcxMiAxLjJlLTYsMC4xMzczNzggMC4wNzUwMzksMC4yNjM3ODUgMC4xOTU2NDEsMC4zMjk1NzIgeiBNIDguMDQzOTMxOSw1LjgzMDg3ODMgQyA4LjA0MzkzMDksMi4xNTE1MjEgMTIuNDkyMTA3LDAuMzA5NTU4MTEgMTUuMDkzNDkxLDIuOTEwOTQxMSAxNy42OTQ4NzQsNS41MTIzMjQxIDE1Ljg1MjkxMSw5Ljk2MDUwMDYgMTIuMTczNTU0LDkuOTYwNSA5Ljg5Mzg5OTEsOS45NTc5MTM1IDguMDQ2NTE4Niw4LjExMDUzMzIgOC4wNDM5MzE5LDUuODMwODc4MyBaIG0gLTEuNjg4NzgyLDcuNjg5NDk3NyBjIDEuNTI0NTM1LC0xLjgxMTQ0OSAzLjU5MDY2MDEsLTIuODA5MDM1IDUuODE4NDA0MSwtMi44MDkwMzUgMi4yMjc3NDQsMCA0LjI5Mzg2OSwwLjk5NzU4NiA1LjgxODQwNCwyLjgwOTAzNSAxLjUzMzYzOSwxLjgyMjU3MSAyLjM5NTkzMiw0LjMzOTg1OCAyLjQzOTE1Miw3LjEwODMwMSAtMC44MDMzNTIsMC40MzQ4NzcgLTQuMTQxNjM2LDIuMDk2MTEyIC04LjI1NzU1NiwyLjA5NjExMiAtMy44MDYyOTIxLDAgLTcuMzkxMDg2MSwtMS42NzEwNDMgLTguMjU3MzY4MSwtMi4xMDQ5ODEgMC4wNDUwNSwtMi43NjUwMTcgMC45MDY5NjgsLTUuMjc4Nzg1IDIuNDM4OTY0LC03LjA5OTQzMiB6XCIgLz4gPHBhdGggaWQ9XCJwYXRoMzgxNlwiIGQ9XCJNIDEyLjE3MzgyOCAwLjM4ODY3MTg4IEMgOS4zMTk4NTEzIDAuMzg4NjcxODcgNy4zNzcwOTg4IDIuMzY3MjI4NSA2Ljg2NTIzNDQgNC42MzA4NTk0IEMgNi40MjE4NjA4IDYuNTkxNjAxNSA3LjExNTM1NjIgOC43Njc2MTE3IDguOTY0ODQzOCAxMC4xMjY5NTMgQyA3LjYxNDEyNDkgMTAuNjc3Mzc2IDYuMzU1MDUxMSAxMS40ODA5NDQgNS4zNDk2MDk0IDEyLjY3NTc4MSBDIDMuNTYyOTMxNyAxNC43OTkxODUgMi42MDE1NjI1IDE3LjcwMTQ3NSAyLjYwMTU2MjUgMjAuODQ3NjU2IEMgMi42MDE1NjU0IDIxLjE4OTg2MSAyLjc4OTQyNzYgMjEuNTA4MDAyIDMuMDg5ODQzOCAyMS42NzE4NzUgQyAzLjMwNDQwNjggMjEuNzg4OTI1IDcuNDQzNjIzOSAyNC4wMzkwNjIgMTIuMTczODI4IDI0LjAzOTA2MiBDIDE3LjI2OTkxOCAyNC4wMzkwNjIgMjEuMDgzNTY4IDIxLjc3Njc4NiAyMS4yOTEwMTYgMjEuNjUyMzQ0IEMgMjEuNTcyODEgMjEuNDgzMjY2IDIxLjc0NjA5NyAyMS4xNzYyODIgMjEuNzQ2MDk0IDIwLjg0NzY1NiBDIDIxLjc0NjA5NCAxNy43MDE0NzUgMjAuNzgyNzcgMTQuNzk5MTg1IDE4Ljk5NjA5NCAxMi42NzU3ODEgQyAxNy45OTA0NTUgMTEuNDgwNTkxIDE2LjczMzgxOCAxMC42NzUzNjIgMTUuMzgyODEyIDEwLjEyNSBDIDE3LjIzMTEzMiA4Ljc2NTU1NTIgMTcuOTI1Njc1IDYuNTkxMDcwMSAxNy40ODI0MjIgNC42MzA4NTk0IEMgMTYuOTcwNTU3IDIuMzY3MjI4NSAxNS4wMjc4MDUgMC4zODg2NzE4OCAxMi4xNzM4MjggMC4zODg2NzE4OCB6IE0gMTIuNzkyOTY5IDIuMzAwNzgxMiBDIDEzLjQ2NjI1MyAyLjQxNjE3OTIgMTQuMTI1MTEzIDIuNzM4Mzk0MSAxNC42OTUzMTIgMy4zMDg1OTM4IEMgMTUuODM1NzEyIDQuNDQ4OTkzMSAxNS45ODU2MDQgNS45NDczNTQ5IDE1LjQ2ODc1IDcuMTk1MzEyNSBDIDE0Ljk1MTg5NiA4LjQ0MzI3MDEgMTMuNzg2ODI4IDkuMzk4NDM3OCAxMi4xNzM4MjggOS4zOTg0Mzc1IEMgMTAuMTk3NzE5IDkuMzk2MTk1NCA4LjYwNzcxMSA3LjgwNjE4NyA4LjYwNTQ2ODggNS44MzAwNzgxIEMgOC42MDU0NjgzIDQuMjE3MDc4NSA5LjU2MDYzNjIgMy4wNTIwMTAyIDEwLjgwODU5NCAyLjUzNTE1NjIgQyAxMS40MzI1NzMgMi4yNzY3MjkzIDEyLjExOTY4NSAyLjE4NTM4MzMgMTIuNzkyOTY5IDIuMzAwNzgxMiB6IE0gMTIuMTczODI4IDExLjI3MzQzOCBDIDE0LjIzMzY0NyAxMS4yNzM0MzggMTYuMTMzNjc0IDEyLjE4NTA4NCAxNy41NjI1IDEzLjg4MjgxMiBDIDE4LjkzMDY5IDE1LjUwODc2NSAxOS42OTgzNDcgMTcuNzc2OTY5IDE5LjgwODU5NCAyMC4yODMyMDMgQyAxOC44MDczOTUgMjAuODAwMjM1IDE1Ljg4NjE1NyAyMi4xNjIxMDkgMTIuMTczODI4IDIyLjE2MjEwOSBDIDguNzYxNDYzMiAyMi4xNjIxMDkgNS42MjQ1NzU0IDIwLjc4NzA2OSA0LjUzOTA2MjUgMjAuMjY1NjI1IEMgNC42NTI1ODk2IDE3Ljc2NjcxNyA1LjQyMDMzMTUgMTUuNTA0NzkxIDYuNzg1MTU2MiAxMy44ODI4MTIgQyA4LjIxMzk4MjcgMTIuMTg1MDg0IDEwLjExNDAxIDExLjI3MzQzOCAxMi4xNzM4MjggMTEuMjczNDM4IHogXCIgLz4gPC9zdmc+YCxcclxuXHJcbiAgcGxhY2VzOiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiPjxwYXRoIGQ9XCJNNi41IDEyQzUuMTIyIDEyIDQgMTMuMTIxIDQgMTQuNVM1LjEyMiAxNyA2LjUgMTcgOSAxNS44NzkgOSAxNC41IDcuODc4IDEyIDYuNSAxMm0wIDNjLS4yNzUgMC0uNS0uMjI1LS41LS41cy4yMjUtLjUuNS0uNS41LjIyNS41LjUtLjIyNS41LS41LjVNMTcuNSAxMmMtMS4zNzggMC0yLjUgMS4xMjEtMi41IDIuNXMxLjEyMiAyLjUgMi41IDIuNSAyLjUtMS4xMjEgMi41LTIuNS0xLjEyMi0yLjUtMi41LTIuNW0wIDNjLS4yNzUgMC0uNS0uMjI1LS41LS41cy4yMjUtLjUuNS0uNS41LjIyNS41LjUtLjIyNS41LS41LjVcIi8+PHBhdGggZD1cIk0yMi40ODIgOS40OTRsLTEuMDM5LS4zNDZMMjEuNCA5aC42Yy41NTIgMCAxLS40MzkgMS0uOTkyIDAtLjAwNi0uMDAzLS4wMDgtLjAwMy0uMDA4SDIzYzAtMS0uODg5LTItMS45ODQtMmgtLjY0MmwtLjczMS0xLjcxN0MxOS4yNjIgMy4wMTIgMTguMDkxIDIgMTYuNzY0IDJINy4yMzZDNS45MDkgMiA0LjczOCAzLjAxMiA0LjM1NyA0LjI4M0wzLjYyNiA2aC0uNjQyQzEuODg5IDYgMSA3IDEgOGguMDAzUzEgOC4wMDIgMSA4LjAwOEMxIDguNTYxIDEuNDQ4IDkgMiA5aC42bC0uMDQzLjE0OC0xLjAzOS4zNDZhMi4wMDEgMi4wMDEgMCAwIDAtMS4zNTkgMi4wOTdsLjc1MSA3LjUwOGExIDEgMCAwIDAgLjk5NC45MDFIM3YxYzAgMS4xMDMuODk2IDIgMiAyaDJjMS4xMDQgMCAyLS44OTcgMi0ydi0xaDZ2MWMwIDEuMTAzLjg5NiAyIDIgMmgyYzEuMTA0IDAgMi0uODk3IDItMnYtMWgxLjA5NmEuOTk5Ljk5OSAwIDAgMCAuOTk0LS45MDFsLjc1MS03LjUwOGEyLjAwMSAyLjAwMSAwIDAgMC0xLjM1OS0yLjA5N002LjI3MyA0Ljg1N0M2LjQwMiA0LjQzIDYuNzg4IDQgNy4yMzYgNGg5LjUyN2MuNDQ4IDAgLjgzNC40My45NjMuODU3TDE5LjMxMyA5SDQuNjg4bDEuNTg1LTQuMTQzek03IDIxSDV2LTFoMnYxem0xMiAwaC0ydi0xaDJ2MXptMi4xODktM0gyLjgxMWwtLjY2Mi02LjYwN0wzIDExaDE4bC44NTIuMzkzTDIxLjE4OSAxOHpcIi8+PC9zdmc+YCxcclxuXHJcbiAgcmVjZW50OiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiPjxwYXRoIGQ9XCJNMTMgNGgtMmwtLjAwMSA3SDl2MmgydjJoMnYtMmg0di0yaC00elwiLz48cGF0aCBkPVwiTTEyIDBDNS4zNzMgMCAwIDUuMzczIDAgMTJzNS4zNzMgMTIgMTIgMTIgMTItNS4zNzMgMTItMTJTMTguNjI3IDAgMTIgMG0wIDIyQzYuNDg2IDIyIDIgMTcuNTE0IDIgMTJTNi40ODYgMiAxMiAyczEwIDQuNDg2IDEwIDEwLTQuNDg2IDEwLTEwIDEwXCIvPjwvc3ZnPmAsXHJcblxyXG4gIHN5bWJvbHM6IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+PHBhdGggZD1cIk0wIDBoMTF2Mkgwek00IDExaDNWNmg0VjRIMHYyaDR6TTE1LjUgMTdjMS4zODEgMCAyLjUtMS4xMTYgMi41LTIuNDkzcy0xLjExOS0yLjQ5My0yLjUtMi40OTNTMTMgMTMuMTMgMTMgMTQuNTA3IDE0LjExOSAxNyAxNS41IDE3bTAtMi45ODZjLjI3NiAwIC41LjIyMi41LjQ5MyAwIC4yNzItLjIyNC40OTMtLjUuNDkzcy0uNS0uMjIxLS41LS40OTMuMjI0LS40OTMuNS0uNDkzTTIxLjUgMTkuMDE0Yy0xLjM4MSAwLTIuNSAxLjExNi0yLjUgMi40OTNTMjAuMTE5IDI0IDIxLjUgMjRzMi41LTEuMTE2IDIuNS0yLjQ5My0xLjExOS0yLjQ5My0yLjUtMi40OTNtMCAyLjk4NmEuNDk3LjQ5NyAwIDAgMS0uNS0uNDkzYzAtLjI3MS4yMjQtLjQ5My41LS40OTNzLjUuMjIyLjUuNDkzYS40OTcuNDk3IDAgMCAxLS41LjQ5M00yMiAxM2wtOSA5IDEuNTEzIDEuNSA4Ljk5LTkuMDA5ek0xNyAxMWMyLjIwOSAwIDQtMS4xMTkgNC0yLjVWMnMuOTg1LS4xNjEgMS40OTguOTQ5QzIzLjAxIDQuMDU1IDIzIDYgMjMgNnMxLTEuMTE5IDEtMy4xMzVDMjQtLjAyIDIxIDAgMjEgMGgtMnY2LjM0N0E1Ljg1MyA1Ljg1MyAwIDAgMCAxNyA2Yy0yLjIwOSAwLTQgMS4xMTktNCAyLjVzMS43OTEgMi41IDQgMi41TTEwLjI5NyAyMC40ODJsLTEuNDc1LTEuNTg1YTQ3LjU0IDQ3LjU0IDAgMCAxLTEuNDQyIDEuMTI5Yy0uMzA3LS4yODgtLjk4OS0xLjAxNi0yLjA0NS0yLjE4My45MDItLjgzNiAxLjQ3OS0xLjQ2NiAxLjcyOS0xLjg5MnMuMzc2LS44NzEuMzc2LTEuMzM2YzAtLjU5Mi0uMjczLTEuMTc4LS44MTgtMS43NTktLjU0Ni0uNTgxLTEuMzI5LS44NzEtMi4zNDktLjg3MS0xLjAwOCAwLTEuNzkuMjkzLTIuMzQ0Ljg3OS0uNTU2LjU4Ny0uODMyIDEuMTgxLS44MzIgMS43ODQgMCAuODEzLjQxOSAxLjc0OCAxLjI1NiAyLjgwNS0uODQ3LjYxNC0xLjQ0NCAxLjIwOC0xLjc5NCAxLjc4NGEzLjQ2NSAzLjQ2NSAwIDAgMC0uNTIzIDEuODMzYzAgLjg1Ny4zMDggMS41Ni45MjQgMi4xMDcuNjE2LjU0OSAxLjQyMy44MjMgMi40Mi44MjMgMS4xNzMgMCAyLjQ0NC0uMzc5IDMuODEzLTEuMTM3TDguMjM1IDI0aDIuODE5bC0yLjA5LTIuMzgzIDEuMzMzLTEuMTM1em0tNi43MzYtNi4zODlhMS4wMiAxLjAyIDAgMCAxIC43My0uMjg2Yy4zMSAwIC41NTkuMDg1Ljc0Ny4yNTRhLjg0OS44NDkgMCAwIDEgLjI4My42NTljMCAuNTE4LS40MTkgMS4xMTItMS4yNTcgMS43ODQtLjUzNi0uNjUxLS44MDUtMS4yMzEtLjgwNS0xLjc0MmEuOTAxLjkwMSAwIDAgMSAuMzAyLS42NjlNMy43NCAyMmMtLjQyNyAwLS43NzgtLjExNi0xLjA1Ny0uMzQ5LS4yNzktLjIzMi0uNDE4LS40ODctLjQxOC0uNzY2IDAtLjU5NC41MDktMS4yODggMS41MjctMi4wODMuOTY4IDEuMTM0IDEuNzE3IDEuOTQ2IDIuMjQ4IDIuNDM4LS45MjEuNTA3LTEuNjg2Ljc2LTIuMy43NlwiLz48L3N2Zz5gLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTVkdzXHJcbiIsImNvbnN0IG1hcHBpbmcgPSB7XHJcbiAgbmFtZTogJ2EnLFxyXG4gIHVuaWZpZWQ6ICdiJyxcclxuICBub25fcXVhbGlmaWVkOiAnYycsXHJcbiAgaGFzX2ltZ19hcHBsZTogJ2QnLFxyXG4gIGhhc19pbWdfZ29vZ2xlOiAnZScsXHJcbiAgaGFzX2ltZ190d2l0dGVyOiAnZicsXHJcbiAgaGFzX2ltZ19mYWNlYm9vazogJ2gnLFxyXG4gIGtleXdvcmRzOiAnaicsXHJcbiAgc2hlZXQ6ICdrJyxcclxuICBlbW90aWNvbnM6ICdsJyxcclxuICB0ZXh0OiAnbScsXHJcbiAgc2hvcnRfbmFtZXM6ICduJyxcclxuICBhZGRlZF9pbjogJ28nLFxyXG59XHJcblxyXG5jb25zdCBidWlsZFNlYXJjaCA9IChlbW9qaSkgPT4ge1xyXG4gIGNvbnN0IHNlYXJjaCA9IFtdXHJcblxyXG4gIHZhciBhZGRUb1NlYXJjaCA9IChzdHJpbmdzLCBzcGxpdCkgPT4ge1xyXG4gICAgaWYgKCFzdHJpbmdzKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIDsoQXJyYXkuaXNBcnJheShzdHJpbmdzKSA/IHN0cmluZ3MgOiBbc3RyaW5nc10pLmZvckVhY2goKHN0cmluZykgPT4ge1xyXG4gICAgICA7KHNwbGl0ID8gc3RyaW5nLnNwbGl0KC9bLXxffFxcc10rLykgOiBbc3RyaW5nXSkuZm9yRWFjaCgocykgPT4ge1xyXG4gICAgICAgIHMgPSBzLnRvTG93ZXJDYXNlKClcclxuXHJcbiAgICAgICAgaWYgKHNlYXJjaC5pbmRleE9mKHMpID09IC0xKSB7XHJcbiAgICAgICAgICBzZWFyY2gucHVzaChzKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBhZGRUb1NlYXJjaChlbW9qaS5zaG9ydF9uYW1lcywgdHJ1ZSlcclxuICBhZGRUb1NlYXJjaChlbW9qaS5uYW1lLCB0cnVlKVxyXG4gIGFkZFRvU2VhcmNoKGVtb2ppLmtleXdvcmRzLCBmYWxzZSlcclxuICBhZGRUb1NlYXJjaChlbW9qaS5lbW90aWNvbnMsIGZhbHNlKVxyXG5cclxuICByZXR1cm4gc2VhcmNoLmpvaW4oJywnKVxyXG59XHJcblxyXG5mdW5jdGlvbiBkZWVwRnJlZXplKG9iamVjdCkge1xyXG4gIC8vIFJldHJpZXZlIHRoZSBwcm9wZXJ0eSBuYW1lcyBkZWZpbmVkIG9uIG9iamVjdFxyXG4gIHZhciBwcm9wTmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmplY3QpXHJcblxyXG4gIC8vIEZyZWV6ZSBwcm9wZXJ0aWVzIGJlZm9yZSBmcmVlemluZyBzZWxmXHJcbiAgZm9yIChsZXQgbmFtZSBvZiBwcm9wTmFtZXMpIHtcclxuICAgIGxldCB2YWx1ZSA9IG9iamVjdFtuYW1lXVxyXG4gICAgb2JqZWN0W25hbWVdID1cclxuICAgICAgdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyA/IGRlZXBGcmVlemUodmFsdWUpIDogdmFsdWVcclxuICB9XHJcbiAgcmV0dXJuIE9iamVjdC5mcmVlemUob2JqZWN0KVxyXG59XHJcblxyXG5jb25zdCB1bmNvbXByZXNzID0gKGRhdGEpID0+IHtcclxuICBpZiAoIWRhdGEuY29tcHJlc3NlZCkge1xyXG4gICAgcmV0dXJuIGRhdGFcclxuICB9XHJcbiAgZGF0YS5jb21wcmVzc2VkID0gZmFsc2VcclxuXHJcbiAgZm9yIChsZXQgaWQgaW4gZGF0YS5lbW9qaXMpIHtcclxuICAgIGxldCBlbW9qaSA9IGRhdGEuZW1vamlzW2lkXVxyXG5cclxuICAgIGZvciAobGV0IGtleSBpbiBtYXBwaW5nKSB7XHJcbiAgICAgIGVtb2ppW2tleV0gPSBlbW9qaVttYXBwaW5nW2tleV1dXHJcbiAgICAgIGRlbGV0ZSBlbW9qaVttYXBwaW5nW2tleV1dXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFlbW9qaS5zaG9ydF9uYW1lcykgZW1vamkuc2hvcnRfbmFtZXMgPSBbXVxyXG4gICAgZW1vamkuc2hvcnRfbmFtZXMudW5zaGlmdChpZClcclxuXHJcbiAgICBlbW9qaS5zaGVldF94ID0gZW1vamkuc2hlZXRbMF1cclxuICAgIGVtb2ppLnNoZWV0X3kgPSBlbW9qaS5zaGVldFsxXVxyXG4gICAgZGVsZXRlIGVtb2ppLnNoZWV0XHJcblxyXG4gICAgaWYgKCFlbW9qaS50ZXh0KSBlbW9qaS50ZXh0ID0gJydcclxuXHJcbiAgICBpZiAoIWVtb2ppLmFkZGVkX2luKSBlbW9qaS5hZGRlZF9pbiA9IDZcclxuICAgIGVtb2ppLmFkZGVkX2luID0gZW1vamkuYWRkZWRfaW4udG9GaXhlZCgxKVxyXG5cclxuICAgIGVtb2ppLnNlYXJjaCA9IGJ1aWxkU2VhcmNoKGVtb2ppKVxyXG4gIH1cclxuICBkYXRhID0gZGVlcEZyZWV6ZShkYXRhKVxyXG4gIHJldHVybiBkYXRhXHJcbn1cclxuXHJcbmV4cG9ydCB7IGJ1aWxkU2VhcmNoLCB1bmNvbXByZXNzIH1cclxuIiwiaW1wb3J0IHsgaW50ZXJzZWN0LCB1bmlmaWVkVG9OYXRpdmUgfSBmcm9tICcuL2luZGV4J1xyXG5pbXBvcnQgeyB1bmNvbXByZXNzLCBidWlsZFNlYXJjaCB9IGZyb20gJy4vZGF0YSdcclxuaW1wb3J0IGZyZXF1ZW50bHkgZnJvbSAnLi9mcmVxdWVudGx5J1xyXG5cclxuY29uc3QgU0hFRVRfQ09MVU1OUyA9IDYxXHJcbmNvbnN0IENPTE9OU19SRUdFWCA9IC9eKD86XFw6KFteXFw6XSspXFw6KSg/OlxcOnNraW4tdG9uZS0oXFxkKVxcOik/JC9cclxuLy8gU2tpbiB0b25lc1xyXG5jb25zdCBTS0lOUyA9IFsnMUYzRkEnLCAnMUYzRkInLCAnMUYzRkMnLCAnMUYzRkQnLCAnMUYzRkUnLCAnMUYzRkYnXVxyXG5cclxuLyoqXHJcbiAqIEVtb2ppIGRhdGEgc3RydWN0dXJlOlxyXG4gKiB7XHJcbiAqICAgIFwiY29tcHJlc3NlZFwiOiBmYWxzZSxcclxuICogICAgXCJhbGlhc2VzXCI6IHtcclxuICogICAgICBjb2xsaXNpb246IFwiYm9vbVwiXHJcbiAqICAgICAgY29va2luZzogXCJmcmllZF9lZ2dcIlxyXG4gKiAgICAgIGVudmVsb3BlOiBcImVtYWlsXCJcclxuICogICAgICBmYWNlX3dpdGhfZmluZ2VyX2NvdmVyaW5nX2Nsb3NlZF9saXBzOiBcInNodXNoaW5nX2ZhY2VcIlxyXG4gKiAgICAgIC4uLlxyXG4gKiAgICB9LFxyXG4gKiAgICBcImNhdGVnb3JpZXNcIjogWyB7XHJcbiAqICAgICAgaWQ6IFwicGVvcGxlXCIsXHJcbiAqICAgICAgbmFtZTogXCJTbWlsZXlzICYgRW1vdGlvblwiLFxyXG4gKiAgICAgIGVtb2ppczogWyBcImdyaW5uaW5nXCIsIFwiZ3JpblwiLCBcImpveVwiLCAuLi4gXVxyXG4gKiAgICB9LCB7XHJcbiAqICAgICAgaWQ6IFwibmF0dXJlXCIsXHJcbiAqICAgICAgbmFtZTogXCJBbmltYWxzICYgTmF0dXJlXCIsXHJcbiAqICAgICAgZW1vamlzOiBbIFwibW9ua2V5X2ZhY2VcIiwgXCJtb25leVwiLCBcImdvcmlsbGFcIiwgLi4uIF1cclxuICogICAgfSxcclxuICogICAgLi4uXHJcbiAqICAgIF0sXHJcbiAqICAgIFwiZW1vamlzXCI6IFtcclxuICogICAgICBzbWlsZXk6IHtcclxuICogICAgICAgIGFkZGVkX2luOiBcIjYuMFwiLFxyXG4gKiAgICAgICAgZW1vdGljb25zOiBbXCI9KVwiLCBcIj0tKVwiXSxcclxuICogICAgICAgIGhhc19pbWdfYXBwbGU6IHRydWUsXHJcbiAqICAgICAgICBoYXNfaW1nX2ZhY2Vib29rOiB0cnVlLFxyXG4gKiAgICAgICAgaGFzX2ltZ19nb29nbGU6IHRydWUsXHJcbiAqICAgICAgICBoYXNfaW1nX3R3aXR0ZXI6IHRydWUsXHJcbiAqICAgICAgICBrZXl3b3JkczogW1wiZmFjZVwiLCBcImhhcHB5XCIsIFwiam95XCIsIFwiaGFoYVwiLCBcIjpEXCIsIFwiOilcIiwgXCJzbWlsZVwiLCBcImZ1bm55XCJdLFxyXG4gKiAgICAgICAgbmFtZTogXCJTbWlsaW5nIEZhY2Ugd2l0aCBPcGVuIE1vdXRoXCIsXHJcbiAqICAgICAgICBub25fcXVhbGlmaWVkOiB1bmRlZmluZWQsXHJcbiAqICAgICAgICBzZWFyY2g6IFwic21pbGV5LHNtaWxpbmcsZmFjZSx3aXRoLG9wZW4sbW91dGgsaGFwcHksam95LGhhaGEsOmQsOiksc21pbGUsZnVubnksPSksPS0pXCIsXHJcbiAqICAgICAgICBzaGVldF94OiAzMCxcclxuICogICAgICAgIHNoZWV0X3k6IDI3LFxyXG4gKiAgICAgICAgc2hvcnRfbmFtZXM6IFtcInNtaWxleVwiXSxcclxuICogICAgICAgIHRleHQ6IFwiOilcIixcclxuICogICAgICAgIHVuaWZpZWQ6IFwiMUY2MDNcIixcclxuICogICAgICB9LCB7XHJcbiAqICAgICAgKzE6IHsgICAgLy8gZW1vamkgd2l0aCBza2luX3ZhcmlhdGlvbnNcclxuICogICAgICAgICAgLi4uLCAvLyBhbGwgdGhlIHJlZ3VsYXIgZmllbGRzIGFyZSBwcmVzZW50XHJcbiAqICAgICAgICAgIG5hbWU6IFwiVGh1bWJzIFVwIFNpZ25cIixcclxuICogICAgICAgICAgc2hvcnRfbmFtZXM6ICgyKSBbXCIrMVwiLCBcInRodW1ic3VwXCJdLFxyXG4gKiAgICAgICAgICBza2luX3ZhcmlhdGlvbnM6IHtcclxuICogICAgICAgICAgICAxRjNGQjogICAgICAgICAgICAgLy8gZWFjaCB2YXJpYXRpb24gaGFzIGFkZGl0aW9uYWwgc2V0IG9mIGZpZWxkczpcclxuICogICAgICAgICAgICAgIGFkZGVkX2luOiBcIjguMFwiLFxyXG4gKiAgICAgICAgICAgICAgaGFzX2ltZ19hcHBsZTogdHJ1ZSxcclxuICogICAgICAgICAgICAgIGhhc19pbWdfZmFjZWJvb2s6IHRydWUsXHJcbiAqICAgICAgICAgICAgICBoYXNfaW1nX2dvb2dsZTogdHJ1ZSxcclxuICogICAgICAgICAgICAgIGhhc19pbWdfdHdpdHRlcjogdHJ1ZSxcclxuICogICAgICAgICAgICAgIGltYWdlOiBcIjFmNDRkLTFmM2ZiLnBuZ1wiLFxyXG4gKiAgICAgICAgICAgICAgbm9uX3F1YWxpZmllZDogbnVsbCxcclxuICogICAgICAgICAgICAgIHNoZWV0X3g6IDE0LFxyXG4gKiAgICAgICAgICAgICAgc2hlZXRfeTogNTAsXHJcbiAqICAgICAgICAgICAgICB1bmlmaWVkOiBcIjFGNDRELTFGM0ZCXCIsXHJcbiAqICAgICAgICAgICAgMUYzRkI6IHvigKZ9LFxyXG4gKiAgICAgICAgICAgIDFGM0ZDOiB74oCmfSxcclxuICogICAgICAgICAgICAxRjNGRDoge+KApn0sXHJcbiAqICAgICAgICAgICAgMUYzRkU6IHvigKZ9LFxyXG4gKiAgICAgICAgICAgIDFGM0ZGOiB74oCmfVxyXG4gKiAgICAgICAgICAgIH0sXHJcbiAqICAgICAgICAgIC4uLlxyXG4gKiAgICAgIH0sXHJcbiAqICAgICAgYTogeyAgLy8gZW1vamkgd2l0aCBub25fcXVhbGlmaWVkIGZpZWxkIHNldFxyXG4gKiAgICAgICAgYWRkZWRfaW46IFwiNi4wXCIsXHJcbiAqICAgICAgICBlbW90aWNvbnM6IHVuZGVmaW5lZCxcclxuICogICAgICAgIGhhc19pbWdfYXBwbGU6IHRydWUsXHJcbiAqICAgICAgICAuLi5cclxuICogICAgICAgIG5vbl9xdWFsaWZpZWQ6IFwiMUYxNzBcIixcclxuICogICAgICAgIHVuaWZpZWQ6IFwiMUYxNzAtRkUwRlwiLFxyXG4gKiAgICAgfSxcclxuICogICAgIC4uLlxyXG4gKiAgIF1cclxuICogfVxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBXcmFwcyByYXcgamFzb24gZW1vamkgZGF0YSwgc2VydmVzIGFzIGRhdGEgc291cmNlIGZvclxyXG4gKiBlbW9qaSBwaWNrZXIgY29tcG9uZW50cy5cclxuICpcclxuICogVXNhZ2U6XHJcbiAqXHJcbiAqICAgaW1wb3J0IGRhdGEgZnJvbSAnLi4vZGF0YS9hbGwuanNvbidcclxuICogICBsZXQgaW5kZXggPSBuZXcgRW1vamlJbmRleChkYXRhKVxyXG4gKlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEVtb2ppSW5kZXgge1xyXG4gIC8qKlxyXG4gICAqIENvbnN0cnVjdG9yLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtvYmplY3R9IGRhdGEgLSBSYXcganNvbiBkYXRhLCBzZWUgdGhlIHN0cnVjdHVyZSBhYm92ZS5cclxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIGFkZGl0aW9uYWwgb3B0aW9ucywgYXMgYW4gb2JqZWN0OlxyXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGVtb2ppc1RvU2hvd0ZpbHRlciAtIG9wdGlvbmFsLCBmdW5jdGlvbiB0byBmaWx0ZXIgb3V0XHJcbiAgICogICBzb21lIGVtb2ppcywgZnVuY3Rpb24oZW1vamkpIHsgcmV0dXJuIHRydWV8ZmFsc2UgfVxyXG4gICAqICAgd2hlcmUgYGVtb2ppYCBpcyBhbiByYXcgZW1vamkgb2JqZWN0LCBzZWUgZGF0YS5lbW9qaXMgYWJvdmUuXHJcbiAgICogQHBhcmFtIHtBcnJheX0gaW5jbHVkZSAtIG9wdGlvbmFsLCBhIGxpc3Qgb2YgY2F0ZWdvcnkgaWRzIHRvIGluY2x1ZGUuXHJcbiAgICogQHBhcmFtIHtBcnJheX0gZXhjbHVkZSAtIG9wdGlvbmFsLCBhIGxpc3Qgb2YgY2F0ZWdvcnkgaWRzIHRvIGV4Y2x1ZGUuXHJcbiAgICogQHBhcmFtIHtBcnJheX0gY3VzdG9tIC0gb3B0aW9uYWwsIGEgbGlzdCBjdXN0b20gZW1vamlzLCBlYWNoIGVtb2ppIGlzXHJcbiAgICogICBhbiBvYmplY3QsIHNlZSBkYXRhLmVtb2ppcyBhYm92ZSBmb3IgZXhhbXBsZXMuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBkYXRhLFxyXG4gICAge1xyXG4gICAgICBlbW9qaXNUb1Nob3dGaWx0ZXIsXHJcbiAgICAgIGluY2x1ZGUsXHJcbiAgICAgIGV4Y2x1ZGUsXHJcbiAgICAgIGN1c3RvbSxcclxuICAgICAgcmVjZW50LFxyXG4gICAgICByZWNlbnRMZW5ndGggPSAyMCxcclxuICAgIH0gPSB7fSxcclxuICApIHtcclxuICAgIHRoaXMuX2RhdGEgPSB1bmNvbXByZXNzKGRhdGEpXHJcbiAgICAvLyBDYWxsYmFjayB0byBleGNsdWRlIHNwZWNpZmljIGVtb2ppc1xyXG4gICAgdGhpcy5fZW1vamlzRmlsdGVyID0gZW1vamlzVG9TaG93RmlsdGVyIHx8IG51bGxcclxuICAgIC8vIENhdGVnb3JpZXMgdG8gaW5jbHVkZSAvIGV4Y2x1ZGVcclxuICAgIHRoaXMuX2luY2x1ZGUgPSBpbmNsdWRlIHx8IG51bGxcclxuICAgIHRoaXMuX2V4Y2x1ZGUgPSBleGNsdWRlIHx8IG51bGxcclxuICAgIC8vIEN1c3RvbSBlbW9qaXNcclxuICAgIHRoaXMuX2N1c3RvbSA9IGN1c3RvbSB8fCBbXVxyXG4gICAgLy8gUmVjZW50IGVtb2ppc1xyXG4gICAgLy8gVE9ETzogbWFrZSBwYXJhbWV0ZXIgY29uZmlndXJhYmxlXHJcbiAgICB0aGlzLl9yZWNlbnQgPSByZWNlbnQgfHwgZnJlcXVlbnRseS5nZXQocmVjZW50TGVuZ3RoKVxyXG5cclxuICAgIHRoaXMuX2Vtb2ppcyA9IHt9XHJcbiAgICB0aGlzLl9uYXRpdmVFbW9qaXMgPSB7fVxyXG4gICAgdGhpcy5fZW1vdGljb25zID0ge31cclxuXHJcbiAgICB0aGlzLl9jYXRlZ29yaWVzID0gW11cclxuICAgIHRoaXMuX3JlY2VudENhdGVnb3J5ID0geyBpZDogJ3JlY2VudCcsIG5hbWU6ICdSZWNlbnQnLCBlbW9qaXM6IFtdIH1cclxuICAgIHRoaXMuX2N1c3RvbUNhdGVnb3J5ID0geyBpZDogJ2N1c3RvbScsIG5hbWU6ICdDdXN0b20nLCBlbW9qaXM6IFtdIH1cclxuICAgIHRoaXMuX3NlYXJjaEluZGV4ID0ge31cclxuICAgIHRoaXMuYnVpbGRJbmRleCgpXHJcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpXHJcbiAgfVxyXG5cclxuICBidWlsZEluZGV4KCkge1xyXG4gICAgbGV0IGFsbENhdGVnb3JpZXMgPSB0aGlzLl9kYXRhLmNhdGVnb3JpZXNcclxuXHJcbiAgICBpZiAodGhpcy5faW5jbHVkZSkge1xyXG4gICAgICAvLyBSZW1vdmUgY2F0ZWdvcmllcyB0aGF0IGFyZSBub3QgaW4gdGhlIGluY2x1ZGUgbGlzdC5cclxuICAgICAgYWxsQ2F0ZWdvcmllcyA9IGFsbENhdGVnb3JpZXMuZmlsdGVyKChpdGVtKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luY2x1ZGUuaW5jbHVkZXMoaXRlbS5pZClcclxuICAgICAgfSlcclxuICAgICAgLy8gU29ydCBjYXRlZ29yaWVzIGFjY29yZGluZyB0byB0aGUgaW5jbHVkZSBsaXN0LlxyXG4gICAgICBhbGxDYXRlZ29yaWVzID0gYWxsQ2F0ZWdvcmllcy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW5kZXhBID0gdGhpcy5faW5jbHVkZS5pbmRleE9mKGEuaWQpXHJcbiAgICAgICAgY29uc3QgaW5kZXhCID0gdGhpcy5faW5jbHVkZS5pbmRleE9mKGIuaWQpXHJcbiAgICAgICAgaWYgKGluZGV4QSA8IGluZGV4Qikge1xyXG4gICAgICAgICAgcmV0dXJuIC0xXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpbmRleEEgPiBpbmRleEIpIHtcclxuICAgICAgICAgIHJldHVybiAxXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAwXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgYWxsQ2F0ZWdvcmllcy5mb3JFYWNoKChjYXRlZ29yeURhdGEpID0+IHtcclxuICAgICAgaWYgKCF0aGlzLmlzQ2F0ZWdvcnlOZWVkZWQoY2F0ZWdvcnlEYXRhLmlkKSkge1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcbiAgICAgIGxldCBjYXRlZ29yeSA9IHtcclxuICAgICAgICBpZDogY2F0ZWdvcnlEYXRhLmlkLFxyXG4gICAgICAgIG5hbWU6IGNhdGVnb3J5RGF0YS5uYW1lLFxyXG4gICAgICAgIGVtb2ppczogW10sXHJcbiAgICAgIH1cclxuICAgICAgY2F0ZWdvcnlEYXRhLmVtb2ppcy5mb3JFYWNoKChlbW9qaUlkKSA9PiB7XHJcbiAgICAgICAgbGV0IGVtb2ppID0gdGhpcy5hZGRFbW9qaShlbW9qaUlkKVxyXG4gICAgICAgIGlmIChlbW9qaSkge1xyXG4gICAgICAgICAgY2F0ZWdvcnkuZW1vamlzLnB1c2goZW1vamkpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICBpZiAoY2F0ZWdvcnkuZW1vamlzLmxlbmd0aCkge1xyXG4gICAgICAgIHRoaXMuX2NhdGVnb3JpZXMucHVzaChjYXRlZ29yeSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBpZiAodGhpcy5pc0NhdGVnb3J5TmVlZGVkKCdjdXN0b20nKSkge1xyXG4gICAgICBpZiAodGhpcy5fY3VzdG9tLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBmb3IgKGxldCBjdXN0b21FbW9qaSBvZiB0aGlzLl9jdXN0b20pIHtcclxuICAgICAgICAgIHRoaXMuYWRkQ3VzdG9tRW1vamkoY3VzdG9tRW1vamkpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLl9jdXN0b21DYXRlZ29yeS5lbW9qaXMubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5fY2F0ZWdvcmllcy5wdXNoKHRoaXMuX2N1c3RvbUNhdGVnb3J5KVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuaXNDYXRlZ29yeU5lZWRlZCgncmVjZW50JykpIHtcclxuICAgICAgaWYgKHRoaXMuX3JlY2VudC5sZW5ndGgpIHtcclxuICAgICAgICB0aGlzLl9yZWNlbnQubWFwKChpZCkgPT4ge1xyXG4gICAgICAgICAgZm9yIChsZXQgY3VzdG9tRW1vamkgb2YgdGhpcy5fY3VzdG9tQ2F0ZWdvcnkuZW1vamlzKSB7XHJcbiAgICAgICAgICAgIGlmIChjdXN0b21FbW9qaS5pZCA9PT0gaWQpIHtcclxuICAgICAgICAgICAgICB0aGlzLl9yZWNlbnRDYXRlZ29yeS5lbW9qaXMucHVzaChjdXN0b21FbW9qaSlcclxuICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHRoaXMuaGFzRW1vamkoaWQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlY2VudENhdGVnb3J5LmVtb2ppcy5wdXNoKHRoaXMuZW1vamkoaWQpKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgICAvLyBBZGQgcmVjZW50IGNhdGVnb3J5IHRvIHRoZSB0b3BcclxuICAgICAgaWYgKHRoaXMuX3JlY2VudENhdGVnb3J5LmVtb2ppcy5sZW5ndGgpIHtcclxuICAgICAgICB0aGlzLl9jYXRlZ29yaWVzLnVuc2hpZnQodGhpcy5fcmVjZW50Q2F0ZWdvcnkpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZpbmQgdGhlIGVtb2ppIGZyb20gdGhlIHN0cmluZ1xyXG4gICAqL1xyXG4gIGZpbmRFbW9qaShlbW9qaSwgc2tpbikge1xyXG4gICAgLy8gMS4gUGFyc2UgYXMgOmVtb2ppX25hbWU6c2tpbi10b25lLXh4OlxyXG4gICAgbGV0IG1hdGNoZXMgPSBlbW9qaS5tYXRjaChDT0xPTlNfUkVHRVgpXHJcblxyXG4gICAgaWYgKG1hdGNoZXMpIHtcclxuICAgICAgZW1vamkgPSBtYXRjaGVzWzFdXHJcbiAgICAgIGlmIChtYXRjaGVzWzJdKSB7XHJcbiAgICAgICAgc2tpbiA9IHBhcnNlSW50KG1hdGNoZXNbMl0sIDEwKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gMi4gQ2hlY2sgaWYgdGhlIHNwZWNpZmllZCBlbW9qaSBpcyBhbiBhbGlhc1xyXG4gICAgaWYgKHRoaXMuX2RhdGEuYWxpYXNlcy5oYXNPd25Qcm9wZXJ0eShlbW9qaSkpIHtcclxuICAgICAgZW1vamkgPSB0aGlzLl9kYXRhLmFsaWFzZXNbZW1vamldXHJcbiAgICB9XHJcblxyXG4gICAgLy8gMy4gQ2hlY2sgaWYgd2UgaGF2ZSB0aGUgc3BlY2lmaWVkIGVtb2ppXHJcbiAgICBpZiAodGhpcy5fZW1vamlzLmhhc093blByb3BlcnR5KGVtb2ppKSkge1xyXG4gICAgICBsZXQgZW1vamlPYmplY3QgPSB0aGlzLl9lbW9qaXNbZW1vamldXHJcbiAgICAgIGlmIChza2luKSB7XHJcbiAgICAgICAgcmV0dXJuIGVtb2ppT2JqZWN0LmdldFNraW4oc2tpbilcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZW1vamlPYmplY3RcclxuICAgIH1cclxuXHJcbiAgICAvLyA0LiBDaGVjayBpZiB3ZSBoYXZlIHRoZSBzcGVjaWZpZWQgbmF0aXZlIGVtb2ppXHJcbiAgICBpZiAodGhpcy5fbmF0aXZlRW1vamlzLmhhc093blByb3BlcnR5KGVtb2ppKSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fbmF0aXZlRW1vamlzW2Vtb2ppXVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGxcclxuICB9XHJcblxyXG4gIGNhdGVnb3JpZXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY2F0ZWdvcmllc1xyXG4gIH1cclxuXHJcbiAgZW1vamkoZW1vamlJZCkge1xyXG4gICAgaWYgKHRoaXMuX2RhdGEuYWxpYXNlcy5oYXNPd25Qcm9wZXJ0eShlbW9qaUlkKSkge1xyXG4gICAgICBlbW9qaUlkID0gdGhpcy5fZGF0YS5hbGlhc2VzW2Vtb2ppSWRdXHJcbiAgICB9XHJcbiAgICBsZXQgZW1vamkgPSB0aGlzLl9lbW9qaXNbZW1vamlJZF1cclxuICAgIGlmICghZW1vamkpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW4gbm90IGZpbmQgZW1vamkgYnkgaWQ6ICcgKyBlbW9qaUlkKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVtb2ppXHJcbiAgfVxyXG5cclxuICBmaXJzdEVtb2ppKCkge1xyXG4gICAgbGV0IGVtb2ppID0gdGhpcy5fZW1vamlzW09iamVjdC5rZXlzKHRoaXMuX2Vtb2ppcylbMF1dXHJcbiAgICBpZiAoIWVtb2ppKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2FuIG5vdCBnZXQgZmlyc3QgZW1vamknKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVtb2ppXHJcbiAgfVxyXG5cclxuICBoYXNFbW9qaShlbW9qaUlkKSB7XHJcbiAgICBpZiAodGhpcy5fZGF0YS5hbGlhc2VzLmhhc093blByb3BlcnR5KGVtb2ppSWQpKSB7XHJcbiAgICAgIGVtb2ppSWQgPSB0aGlzLl9kYXRhLmFsaWFzZXNbZW1vamlJZF1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLl9lbW9qaXNbZW1vamlJZF0pIHtcclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxuXHJcbiAgbmF0aXZlRW1vamkodW5pY29kZUVtb2ppKSB7XHJcbiAgICBpZiAodGhpcy5fbmF0aXZlRW1vamlzLmhhc093blByb3BlcnR5KHVuaWNvZGVFbW9qaSkpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX25hdGl2ZUVtb2ppc1t1bmljb2RlRW1vamldXHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cclxuXHJcbiAgc2VhcmNoKHZhbHVlLCBtYXhSZXN1bHRzKSB7XHJcbiAgICBtYXhSZXN1bHRzIHx8IChtYXhSZXN1bHRzID0gNzUpXHJcbiAgICBpZiAoIXZhbHVlLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG4gICAgaWYgKHZhbHVlID09ICctJyB8fCB2YWx1ZSA9PSAnLTEnKSB7XHJcbiAgICAgIHJldHVybiBbdGhpcy5lbW9qaSgnLTEnKV1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgdmFsdWVzID0gdmFsdWUudG9Mb3dlckNhc2UoKS5zcGxpdCgvW1xcc3wsfFxcLXxfXSsvKVxyXG4gICAgbGV0IGFsbFJlc3VsdHMgPSBbXVxyXG5cclxuICAgIGlmICh2YWx1ZXMubGVuZ3RoID4gMikge1xyXG4gICAgICB2YWx1ZXMgPSBbdmFsdWVzWzBdLCB2YWx1ZXNbMV1dXHJcbiAgICB9XHJcblxyXG4gICAgYWxsUmVzdWx0cyA9IHZhbHVlc1xyXG4gICAgICAubWFwKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIC8vIFN0YXJ0IHNlYXJjaGluIGluIHRoZSBnbG9iYWwgbGlzdCBvZiBlbW9qaXNcclxuICAgICAgICBsZXQgZW1vamlzID0gdGhpcy5fZW1vamlzXHJcbiAgICAgICAgbGV0IGN1cnJlbnRJbmRleCA9IHRoaXMuX3NlYXJjaEluZGV4XHJcbiAgICAgICAgbGV0IGxlbmd0aCA9IDBcclxuXHJcbiAgICAgICAgZm9yIChsZXQgY2hhckluZGV4ID0gMDsgY2hhckluZGV4IDwgdmFsdWUubGVuZ3RoOyBjaGFySW5kZXgrKykge1xyXG4gICAgICAgICAgY29uc3QgY2hhciA9IHZhbHVlW2NoYXJJbmRleF1cclxuICAgICAgICAgIGxlbmd0aCsrXHJcblxyXG4gICAgICAgICAgY3VycmVudEluZGV4W2NoYXJdIHx8IChjdXJyZW50SW5kZXhbY2hhcl0gPSB7fSlcclxuICAgICAgICAgIGN1cnJlbnRJbmRleCA9IGN1cnJlbnRJbmRleFtjaGFyXVxyXG5cclxuICAgICAgICAgIGlmICghY3VycmVudEluZGV4LnJlc3VsdHMpIHtcclxuICAgICAgICAgICAgbGV0IHNjb3JlcyA9IHt9XHJcbiAgICAgICAgICAgIGN1cnJlbnRJbmRleC5yZXN1bHRzID0gW11cclxuICAgICAgICAgICAgY3VycmVudEluZGV4LmVtb2ppcyA9IHt9XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBlbW9qaUlkIGluIGVtb2ppcykge1xyXG4gICAgICAgICAgICAgIGxldCBlbW9qaSA9IGVtb2ppc1tlbW9qaUlkXVxyXG4gICAgICAgICAgICAgIC8vIHNlYXJjaCBpcyBhIGNvbW1hLXNlcGFyYXRlZCBzdHJpbmcgd2l0aCB3b3JkcywgcmVsYXRlZFxyXG4gICAgICAgICAgICAgIC8vIHRvIHRoZSBlbW9qaSwgZm9yIGV4YW1wbGU6XHJcbiAgICAgICAgICAgICAgLy8gc2VhcmNoOiBcInNtaWxleSxzbWlsaW5nLGZhY2Usam95LGhhaGEsOmQsOiksc21pbGUsZnVubnksPSksPS0pXCIsXHJcbiAgICAgICAgICAgICAgbGV0IHNlYXJjaCA9IGVtb2ppLl9kYXRhLnNlYXJjaFxyXG4gICAgICAgICAgICAgIGxldCBzdWIgPSB2YWx1ZS5zdWJzdHIoMCwgbGVuZ3RoKVxyXG4gICAgICAgICAgICAgIGxldCBzdWJJbmRleCA9IHNlYXJjaC5pbmRleE9mKHN1YilcclxuICAgICAgICAgICAgICBpZiAoc3ViSW5kZXggIT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIGxldCBzY29yZSA9IHN1YkluZGV4ICsgMVxyXG4gICAgICAgICAgICAgICAgaWYgKHN1YiA9PSBlbW9qaUlkKSBzY29yZSA9IDBcclxuXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50SW5kZXgucmVzdWx0cy5wdXNoKGVtb2ppKVxyXG4gICAgICAgICAgICAgICAgY3VycmVudEluZGV4LmVtb2ppc1tlbW9qaUlkXSA9IGVtb2ppXHJcblxyXG4gICAgICAgICAgICAgICAgc2NvcmVzW2Vtb2ppSWRdID0gc2NvcmVcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY3VycmVudEluZGV4LnJlc3VsdHMuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAgIHZhciBhU2NvcmUgPSBzY29yZXNbYS5pZF0sXHJcbiAgICAgICAgICAgICAgICBiU2NvcmUgPSBzY29yZXNbYi5pZF1cclxuICAgICAgICAgICAgICByZXR1cm4gYVNjb3JlIC0gYlNjb3JlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLy8gY29udGludWUgc2VhcmNoIGluIHRoZSByZWR1Y2VkIHNldCBvZiBlbW9qaXNcclxuICAgICAgICAgIGVtb2ppcyA9IGN1cnJlbnRJbmRleC5lbW9qaXNcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRJbmRleC5yZXN1bHRzXHJcbiAgICAgICAgLy8gVGhlIFwiZmlsdGVyXCIgY2FsbCByZW1vdmVzIHVuZGVmaW5lZCB2YWx1ZXMgZnJvbSBhbGxSZXN1bHRzXHJcbiAgICAgICAgLy8gYXJyYXksIGZvciBleGFtcGxlLCBpZiB3ZSBoYXZlIFwidGVzdCBcIiAod2l0aCB0cmFpbGluZyBzcGFjZSksXHJcbiAgICAgICAgLy8gd2Ugd2lsbCBnZXQgXCJbQXJyYXksIHVuZGVmaW5lZF1cIiBmb3IgYWxsUmVzdWx0cyBhbmQgYWZ0ZXJcclxuICAgICAgICAvLyB0aGUgXCJmaWx0ZXJcIiBjYWxsIGl0IHdpbGwgdHVybiBpbnRvIFwiW0FycmF5XVwiXHJcbiAgICAgIH0pXHJcbiAgICAgIC5maWx0ZXIoKGEpID0+IGEpXHJcblxyXG4gICAgdmFyIHJlc3VsdHMgPSBudWxsXHJcbiAgICBpZiAoYWxsUmVzdWx0cy5sZW5ndGggPiAxKSB7XHJcbiAgICAgIHJlc3VsdHMgPSBpbnRlcnNlY3QuYXBwbHkobnVsbCwgYWxsUmVzdWx0cylcclxuICAgIH0gZWxzZSBpZiAoYWxsUmVzdWx0cy5sZW5ndGgpIHtcclxuICAgICAgcmVzdWx0cyA9IGFsbFJlc3VsdHNbMF1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlc3VsdHMgPSBbXVxyXG4gICAgfVxyXG4gICAgaWYgKHJlc3VsdHMgJiYgcmVzdWx0cy5sZW5ndGggPiBtYXhSZXN1bHRzKSB7XHJcbiAgICAgIHJlc3VsdHMgPSByZXN1bHRzLnNsaWNlKDAsIG1heFJlc3VsdHMpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0c1xyXG4gIH1cclxuXHJcbiAgYWRkQ3VzdG9tRW1vamkoY3VzdG9tRW1vamkpIHtcclxuICAgIGxldCBlbW9qaURhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBjdXN0b21FbW9qaSwge1xyXG4gICAgICBpZDogY3VzdG9tRW1vamkuc2hvcnRfbmFtZXNbMF0sXHJcbiAgICAgIGN1c3RvbTogdHJ1ZSxcclxuICAgIH0pXHJcbiAgICBpZiAoIWVtb2ppRGF0YS5zZWFyY2gpIHtcclxuICAgICAgZW1vamlEYXRhLnNlYXJjaCA9IGJ1aWxkU2VhcmNoKGVtb2ppRGF0YSlcclxuICAgIH1cclxuICAgIGxldCBlbW9qaSA9IG5ldyBFbW9qaURhdGEoZW1vamlEYXRhKVxyXG4gICAgdGhpcy5fZW1vamlzW2Vtb2ppLmlkXSA9IGVtb2ppXHJcbiAgICB0aGlzLl9jdXN0b21DYXRlZ29yeS5lbW9qaXMucHVzaChlbW9qaSlcclxuICAgIHJldHVybiBlbW9qaVxyXG4gIH1cclxuXHJcbiAgYWRkRW1vamkoZW1vamlJZCkge1xyXG4gICAgLy8gV2UgZXhwZWN0IHRoZSBjb3JyZWN0IGVtb2ppIGlkIHRoYXQgaXMgcHJlc2VudCBpbiB0aGUgZW1vamlzIGRhdGEuXHJcbiAgICBsZXQgZGF0YSA9IHRoaXMuX2RhdGEuZW1vamlzW2Vtb2ppSWRdXHJcblxyXG4gICAgaWYgKCF0aGlzLmlzRW1vamlOZWVkZWQoZGF0YSkpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGVtb2ppID0gbmV3IEVtb2ppRGF0YShkYXRhKVxyXG4gICAgdGhpcy5fZW1vamlzW2Vtb2ppSWRdID0gZW1vamlcclxuICAgIGlmIChlbW9qaS5uYXRpdmUpIHtcclxuICAgICAgdGhpcy5fbmF0aXZlRW1vamlzW2Vtb2ppLm5hdGl2ZV0gPSBlbW9qaVxyXG4gICAgfVxyXG4gICAgaWYgKGVtb2ppLl9za2lucykge1xyXG4gICAgICBmb3IgKGxldCBpZHggaW4gZW1vamkuX3NraW5zKSB7XHJcbiAgICAgICAgbGV0IHNraW4gPSBlbW9qaS5fc2tpbnNbaWR4XVxyXG4gICAgICAgIGlmIChza2luLm5hdGl2ZSkge1xyXG4gICAgICAgICAgdGhpcy5fbmF0aXZlRW1vamlzW3NraW4ubmF0aXZlXSA9IHNraW5cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoZW1vamkuZW1vdGljb25zKSB7XHJcbiAgICAgIGVtb2ppLmVtb3RpY29ucy5mb3JFYWNoKChlbW90aWNvbikgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLl9lbW90aWNvbnNbZW1vdGljb25dKSB7XHJcbiAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fZW1vdGljb25zW2Vtb3RpY29uXSA9IGVtb2ppSWRcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIHJldHVybiBlbW9qaVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgd2UgbmVlZCB0byBpbmNsdWRlIGdpdmVuIGNhdGVnb3J5LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNhdGVnb3J5X2lkIC0gVGhlIGNhdGVnb3J5IGlkLlxyXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IC0gV2hldGhlciB0byBpbmNsdWRlIHRoZSBlbW9qaS5cclxuICAgKi9cclxuICBpc0NhdGVnb3J5TmVlZGVkKGNhdGVnb3J5X2lkKSB7XHJcbiAgICBsZXQgaXNJbmNsdWRlZCA9XHJcbiAgICAgIHRoaXMuX2luY2x1ZGUgJiYgdGhpcy5faW5jbHVkZS5sZW5ndGhcclxuICAgICAgICA/IHRoaXMuX2luY2x1ZGUuaW5kZXhPZihjYXRlZ29yeV9pZCkgPiAtMVxyXG4gICAgICAgIDogdHJ1ZVxyXG4gICAgbGV0IGlzRXhjbHVkZWQgPVxyXG4gICAgICB0aGlzLl9leGNsdWRlICYmIHRoaXMuX2V4Y2x1ZGUubGVuZ3RoXHJcbiAgICAgICAgPyB0aGlzLl9leGNsdWRlLmluZGV4T2YoY2F0ZWdvcnlfaWQpID4gLTFcclxuICAgICAgICA6IGZhbHNlXHJcbiAgICBpZiAoIWlzSW5jbHVkZWQgfHwgaXNFeGNsdWRlZCkge1xyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVjayBpZiB3ZSBuZWVkIHRvIGluY2x1ZGUgZ2l2ZW4gZW1vamkuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge29iamVjdH0gZW1vamkgLSBUaGUgcmF3IGVtb2ppIG9iamVjdC5cclxuICAgKiBAcmV0dXJuIHtib29sZWFufSAtIFdoZXRoZXIgdG8gaW5jbHVkZSB0aGUgZW1vamkuXHJcbiAgICovXHJcbiAgaXNFbW9qaU5lZWRlZChlbW9qaSkge1xyXG4gICAgaWYgKHRoaXMuX2Vtb2ppc0ZpbHRlcikge1xyXG4gICAgICByZXR1cm4gdGhpcy5fZW1vamlzRmlsdGVyKGVtb2ppKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBFbW9qaURhdGEge1xyXG4gIGNvbnN0cnVjdG9yKGRhdGEpIHtcclxuICAgIHRoaXMuX2RhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhKVxyXG4gICAgdGhpcy5fc2tpbnMgPSBudWxsXHJcbiAgICBpZiAodGhpcy5fZGF0YS5za2luX3ZhcmlhdGlvbnMpIHtcclxuICAgICAgdGhpcy5fc2tpbnMgPSBbXVxyXG4gICAgICBmb3IgKHZhciBza2luSWR4IGluIFNLSU5TKSB7XHJcbiAgICAgICAgbGV0IHNraW5LZXkgPSBTS0lOU1tza2luSWR4XVxyXG4gICAgICAgIGxldCB2YXJpYXRpb25EYXRhID0gdGhpcy5fZGF0YS5za2luX3ZhcmlhdGlvbnNbc2tpbktleV1cclxuICAgICAgICBsZXQgc2tpbkRhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhKVxyXG4gICAgICAgIGZvciAobGV0IGsgaW4gdmFyaWF0aW9uRGF0YSkge1xyXG4gICAgICAgICAgc2tpbkRhdGFba10gPSB2YXJpYXRpb25EYXRhW2tdXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlbGV0ZSBza2luRGF0YS5za2luX3ZhcmlhdGlvbnNcclxuICAgICAgICBza2luRGF0YVsnc2tpbl90b25lJ10gPSBwYXJzZUludChza2luSWR4KSArIDFcclxuICAgICAgICB0aGlzLl9za2lucy5wdXNoKG5ldyBFbW9qaURhdGEoc2tpbkRhdGEpKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLl9zYW5pdGl6ZWQgPSBzYW5pdGl6ZSh0aGlzLl9kYXRhKVxyXG4gICAgZm9yIChsZXQga2V5IGluIHRoaXMuX3Nhbml0aXplZCkge1xyXG4gICAgICB0aGlzW2tleV0gPSB0aGlzLl9zYW5pdGl6ZWRba2V5XVxyXG4gICAgfVxyXG4gICAgdGhpcy5zaG9ydF9uYW1lcyA9IHRoaXMuX2RhdGEuc2hvcnRfbmFtZXNcclxuICAgIHRoaXMuc2hvcnRfbmFtZSA9IHRoaXMuX2RhdGEuc2hvcnRfbmFtZXNbMF1cclxuICAgIE9iamVjdC5mcmVlemUodGhpcylcclxuICB9XHJcblxyXG4gIGdldFNraW4oc2tpbklkeCkge1xyXG4gICAgaWYgKHNraW5JZHggJiYgc2tpbklkeCAhPSAnbmF0aXZlJyAmJiB0aGlzLl9za2lucykge1xyXG4gICAgICByZXR1cm4gdGhpcy5fc2tpbnNbc2tpbklkeCAtIDFdXHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpc1xyXG4gIH1cclxuXHJcbiAgZ2V0UG9zaXRpb24oKSB7XHJcbiAgICBsZXQgYWRqdXN0ZWRDb2x1bW5zID0gU0hFRVRfQ09MVU1OUyAtIDEsXHJcbiAgICAgIHggPSArKCgxMDAgLyBhZGp1c3RlZENvbHVtbnMpICogdGhpcy5fZGF0YS5zaGVldF94KS50b0ZpeGVkKDIpLFxyXG4gICAgICB5ID0gKygoMTAwIC8gYWRqdXN0ZWRDb2x1bW5zKSAqIHRoaXMuX2RhdGEuc2hlZXRfeSkudG9GaXhlZCgyKVxyXG4gICAgcmV0dXJuIGAke3h9JSAke3l9JWBcclxuICB9XHJcblxyXG4gIGFyaWFMYWJlbCgpIHtcclxuICAgIHJldHVybiBbdGhpcy5uYXRpdmVdLmNvbmNhdCh0aGlzLnNob3J0X25hbWVzKS5maWx0ZXIoQm9vbGVhbikuam9pbignLCAnKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEVtb2ppVmlldyB7XHJcbiAgLyoqXHJcbiAgICogZW1vamkgLSBFbW9qaSB0byBkaXNwbGF5XHJcbiAgICogc2V0IC0gc3RyaW5nLCBlbW9qaSBzZXQgbmFtZVxyXG4gICAqIG5hdGl2ZSAtIGJvb2xlYW4sIHdoZXRoZXIgdG8gcmVuZGVyIG5hdGl2ZSBlbW9qaVxyXG4gICAqIGZhbGxiYWNrIC0gZmFsbGJhY2sgZnVuY3Rpb24gdG8gcmVuZGVyIG1pc3NpbmcgZW1vamksIG9wdGlvbmFsXHJcbiAgICogZW1vamlUb29sdGlwIC0gd2V0aGVyIHdlIG5lZWQgdG8gc2hvdyB0aGUgZW1vamkgdG9vbHRpcCwgb3B0aW9uYWxcclxuICAgKiBlbW9qaVNpemUgLSBlbW9qaSBzaXplIGluIHBpeGVscywgb3B0aW9uYWxcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihlbW9qaSwgc2tpbiwgc2V0LCBuYXRpdmUsIGZhbGxiYWNrLCBlbW9qaVRvb2x0aXAsIGVtb2ppU2l6ZSkge1xyXG4gICAgdGhpcy5fZW1vamkgPSBlbW9qaVxyXG4gICAgdGhpcy5fbmF0aXZlID0gbmF0aXZlXHJcbiAgICB0aGlzLl9za2luID0gc2tpblxyXG4gICAgdGhpcy5fc2V0ID0gc2V0XHJcbiAgICB0aGlzLl9mYWxsYmFjayA9IGZhbGxiYWNrXHJcblxyXG4gICAgdGhpcy5jYW5SZW5kZXIgPSB0aGlzLl9jYW5SZW5kZXIoKVxyXG4gICAgdGhpcy5jc3NDbGFzcyA9IHRoaXMuX2Nzc0NsYXNzKClcclxuICAgIHRoaXMuY3NzU3R5bGUgPSB0aGlzLl9jc3NTdHlsZShlbW9qaVNpemUpXHJcbiAgICB0aGlzLmNvbnRlbnQgPSB0aGlzLl9jb250ZW50KClcclxuICAgIHRoaXMudGl0bGUgPSBlbW9qaVRvb2x0aXAgPT09IHRydWUgPyBlbW9qaS5zaG9ydF9uYW1lIDogbnVsbFxyXG4gICAgdGhpcy5hcmlhTGFiZWwgPSBlbW9qaS5hcmlhTGFiZWwoKVxyXG5cclxuICAgIE9iamVjdC5mcmVlemUodGhpcylcclxuICB9XHJcblxyXG4gIGdldEVtb2ppKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Vtb2ppLmdldFNraW4odGhpcy5fc2tpbilcclxuICB9XHJcblxyXG4gIF9jYW5SZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICB0aGlzLl9pc0N1c3RvbSgpIHx8IHRoaXMuX2lzTmF0aXZlKCkgfHwgdGhpcy5faGFzRW1vamkoKSB8fCB0aGlzLl9mYWxsYmFja1xyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgX2Nzc0NsYXNzKCkge1xyXG4gICAgcmV0dXJuIFsnZW1vamktc2V0LScgKyB0aGlzLl9zZXQsICdlbW9qaS10eXBlLScgKyB0aGlzLl9lbW9qaVR5cGUoKV1cclxuICB9XHJcblxyXG4gIF9jc3NTdHlsZShlbW9qaVNpemUpIHtcclxuICAgIGxldCBjc3NTdHlsZSA9IHt9XHJcbiAgICBpZiAodGhpcy5faXNDdXN0b20oKSkge1xyXG4gICAgICBjc3NTdHlsZSA9IHtcclxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoJyArIHRoaXMuZ2V0RW1vamkoKS5fZGF0YS5pbWFnZVVybCArICcpJyxcclxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogJzEwMCUnLFxyXG4gICAgICAgIHdpZHRoOiBlbW9qaVNpemUgKyAncHgnLFxyXG4gICAgICAgIGhlaWdodDogZW1vamlTaXplICsgJ3B4JyxcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICh0aGlzLl9oYXNFbW9qaSgpICYmICF0aGlzLl9pc05hdGl2ZSgpKSB7XHJcbiAgICAgIGNzc1N0eWxlID0ge1xyXG4gICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogdGhpcy5nZXRFbW9qaSgpLmdldFBvc2l0aW9uKCksXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChlbW9qaVNpemUpIHtcclxuICAgICAgaWYgKHRoaXMuX2lzTmF0aXZlKCkpIHtcclxuICAgICAgICAvLyBTZXQgZm9udC1zaXplIGZvciBuYXRpdmUgZW1vamkuXHJcbiAgICAgICAgY3NzU3R5bGUgPSBPYmplY3QuYXNzaWduKGNzc1N0eWxlLCB7XHJcbiAgICAgICAgICAvLyBmb250LXNpemUgaXMgdXNlZCBmb3IgbmF0aXZlIGVtb2ppIHdoaWNoIHdlIG5lZWRcclxuICAgICAgICAgIC8vIHRvIHNjYWxlIHdpdGggMC45NSBmYWN0b3IgdG8gaGF2ZSB0aGVtIGxvb2sgYXBwcm94aW1hdGVseVxyXG4gICAgICAgICAgLy8gdGhlIHNhbWUgc2l6ZSBhcyBpbWFnZS1iYXNlZCBlbW9qaS5cclxuICAgICAgICAgIGZvbnRTaXplOiBNYXRoLnJvdW5kKGVtb2ppU2l6ZSAqIDAuOTUgKiAxMCkgLyAxMCArICdweCcsXHJcbiAgICAgICAgfSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBTZXQgd2lkdGgvaGVpZ2h0IGZvciBpbWFnZSBlbW9qaS5cclxuICAgICAgICBjc3NTdHlsZSA9IE9iamVjdC5hc3NpZ24oY3NzU3R5bGUsIHtcclxuICAgICAgICAgIHdpZHRoOiBlbW9qaVNpemUgKyAncHgnLFxyXG4gICAgICAgICAgaGVpZ2h0OiBlbW9qaVNpemUgKyAncHgnLFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBjc3NTdHlsZVxyXG4gIH1cclxuXHJcbiAgX2NvbnRlbnQoKSB7XHJcbiAgICBpZiAodGhpcy5faXNDdXN0b20oKSkge1xyXG4gICAgICByZXR1cm4gJydcclxuICAgIH1cclxuICAgIGlmICh0aGlzLl9pc05hdGl2ZSgpKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmdldEVtb2ppKCkubmF0aXZlXHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5faGFzRW1vamkoKSkge1xyXG4gICAgICByZXR1cm4gJydcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLl9mYWxsYmFjayA/IHRoaXMuX2ZhbGxiYWNrKHRoaXMuZ2V0RW1vamkoKSkgOiBudWxsXHJcbiAgfVxyXG5cclxuICBfaXNOYXRpdmUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fbmF0aXZlXHJcbiAgfVxyXG5cclxuICBfaXNDdXN0b20oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRFbW9qaSgpLmN1c3RvbVxyXG4gIH1cclxuXHJcbiAgX2hhc0Vtb2ppKCkge1xyXG4gICAgaWYgKCF0aGlzLmdldEVtb2ppKCkuX2RhdGEpIHtcclxuICAgICAgLy8gUmV0dXJuIGZhbHNlIGlmIHdlIGhhdmUgbm8gZGF0YS5cclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICBjb25zdCBoYXNJbWFnZSA9IHRoaXMuZ2V0RW1vamkoKS5fZGF0YVsnaGFzX2ltZ18nICsgdGhpcy5fc2V0XVxyXG4gICAgaWYgKGhhc0ltYWdlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgLy8gSWYgdGhlcmUgaXMgbm8gaGFzX2ltZ194eHggaW4gdGhlIGRhdGEsIHdlIGFyZSB3b3JraW5nIHdpdGhcclxuICAgICAgLy8gc3BlY2lmaWMgZGF0YSBmaWxlLCBsaWtlIGZhY2Vib29rLmpzb24sIHNvIHdlIGFzc3VtZSBhbGxcclxuICAgICAgLy8gZW1vamlzIGFyZSBhdmFpbGFibGUgKHRoZSA6c2V0IHNldHRpbmcgZm9yIHBpY2tlciBzaG91bGRcclxuICAgICAgLy8gbWF0Y2ggdGhlIGRhdGEgZmlsZSkuXHJcbiAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgICAvLyBPdGhlcndpc2UsIHdlIGFyZSB1c2luZyBhbGwuanNvbiBhbmQgY2FuIHN3aXRjaCBiZXR3ZWVuIGRpZmZlcmVudFxyXG4gICAgLy8gc2V0cyAtIGluIHRoaXMgY2FzZSB0aGUgYGhhc19pbWdfe3NldF9uYW1lfWAgaXMgYSBib29sZWFuIHRoYXRcclxuICAgIC8vIGluZGljYXRlcyBpZiB0aGVyZSBpcyBzdWNoIGltYWdlIG9yIG5vdCBmb3IgYSBnaXZlbiBzZXQuXHJcbiAgICByZXR1cm4gaGFzSW1hZ2VcclxuICB9XHJcblxyXG4gIF9lbW9qaVR5cGUoKSB7XHJcbiAgICBpZiAodGhpcy5faXNDdXN0b20oKSkge1xyXG4gICAgICByZXR1cm4gJ2N1c3RvbSdcclxuICAgIH1cclxuICAgIGlmICh0aGlzLl9pc05hdGl2ZSgpKSB7XHJcbiAgICAgIHJldHVybiAnbmF0aXZlJ1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuX2hhc0Vtb2ppKCkpIHtcclxuICAgICAgcmV0dXJuICdpbWFnZSdcclxuICAgIH1cclxuICAgIHJldHVybiAnZmFsbGJhY2snXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2FuaXRpemUoZW1vamkpIHtcclxuICB2YXIge1xyXG4gICAgICBuYW1lLFxyXG4gICAgICBzaG9ydF9uYW1lcyxcclxuICAgICAgc2tpbl90b25lLFxyXG4gICAgICBza2luX3ZhcmlhdGlvbnMsXHJcbiAgICAgIGVtb3RpY29ucyxcclxuICAgICAgdW5pZmllZCxcclxuICAgICAgY3VzdG9tLFxyXG4gICAgICBpbWFnZVVybCxcclxuICAgIH0gPSBlbW9qaSxcclxuICAgIGlkID0gZW1vamkuaWQgfHwgc2hvcnRfbmFtZXNbMF0sXHJcbiAgICBjb2xvbnMgPSBgOiR7aWR9OmBcclxuXHJcbiAgaWYgKGN1c3RvbSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaWQsXHJcbiAgICAgIG5hbWUsXHJcbiAgICAgIGNvbG9ucyxcclxuICAgICAgZW1vdGljb25zLFxyXG4gICAgICBjdXN0b20sXHJcbiAgICAgIGltYWdlVXJsLFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKHNraW5fdG9uZSkge1xyXG4gICAgY29sb25zICs9IGA6c2tpbi10b25lLSR7c2tpbl90b25lfTpgXHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgaWQsXHJcbiAgICBuYW1lLFxyXG4gICAgY29sb25zLFxyXG4gICAgZW1vdGljb25zLFxyXG4gICAgdW5pZmllZDogdW5pZmllZC50b0xvd2VyQ2FzZSgpLFxyXG4gICAgc2tpbjogc2tpbl90b25lIHx8IChza2luX3ZhcmlhdGlvbnMgPyAxIDogbnVsbCksXHJcbiAgICBuYXRpdmU6IHVuaWZpZWRUb05hdGl2ZSh1bmlmaWVkKSxcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUnXHJcblxyXG5jb25zdCBERUZBVUxUUyA9IFtcclxuICAnKzEnLFxyXG4gICdncmlubmluZycsXHJcbiAgJ2tpc3NpbmdfaGVhcnQnLFxyXG4gICdoZWFydF9leWVzJyxcclxuICAnbGF1Z2hpbmcnLFxyXG4gICdzdHVja19vdXRfdG9uZ3VlX3dpbmtpbmdfZXllJyxcclxuICAnc3dlYXRfc21pbGUnLFxyXG4gICdqb3knLFxyXG4gICdzY3JlYW0nLFxyXG4gICdkaXNhcHBvaW50ZWQnLFxyXG4gICd1bmFtdXNlZCcsXHJcbiAgJ3dlYXJ5JyxcclxuICAnc29iJyxcclxuICAnc3VuZ2xhc3NlcycsXHJcbiAgJ2hlYXJ0JyxcclxuICAnaGFua2V5JyxcclxuXVxyXG5cclxubGV0IGZyZXF1ZW50bHksIGluaXRpYWxpemVkXHJcbmxldCBkZWZhdWx0cyA9IHt9XHJcblxyXG5mdW5jdGlvbiBpbml0KCkge1xyXG4gIGluaXRpYWxpemVkID0gdHJ1ZVxyXG4gIGZyZXF1ZW50bHkgPSBzdG9yZS5nZXQoJ2ZyZXF1ZW50bHknKVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGQoZW1vamkpIHtcclxuICBpZiAoIWluaXRpYWxpemVkKSBpbml0KClcclxuICB2YXIgeyBpZCB9ID0gZW1vamlcclxuXHJcbiAgZnJlcXVlbnRseSB8fCAoZnJlcXVlbnRseSA9IGRlZmF1bHRzKVxyXG4gIGZyZXF1ZW50bHlbaWRdIHx8IChmcmVxdWVudGx5W2lkXSA9IDApXHJcbiAgZnJlcXVlbnRseVtpZF0gKz0gMVxyXG5cclxuICBzdG9yZS5zZXQoJ2xhc3QnLCBpZClcclxuICBzdG9yZS5zZXQoJ2ZyZXF1ZW50bHknLCBmcmVxdWVudGx5KVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXQobWF4TnVtYmVyKSB7XHJcbiAgaWYgKCFpbml0aWFsaXplZCkgaW5pdCgpXHJcbiAgaWYgKCFmcmVxdWVudGx5KSB7XHJcbiAgICBkZWZhdWx0cyA9IHt9XHJcblxyXG4gICAgY29uc3QgcmVzdWx0ID0gW11cclxuXHJcbiAgICBsZXQgZGVmYXVsdExlbmd0aCA9IE1hdGgubWluKG1heE51bWJlciwgREVGQVVMVFMubGVuZ3RoKVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZWZhdWx0TGVuZ3RoOyBpKyspIHtcclxuICAgICAgZGVmYXVsdHNbREVGQVVMVFNbaV1dID0gcGFyc2VJbnQoKGRlZmF1bHRMZW5ndGggLSBpKSAvIDQsIDEwKSArIDFcclxuICAgICAgcmVzdWx0LnB1c2goREVGQVVMVFNbaV0pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdFxyXG4gIH1cclxuXHJcbiAgY29uc3QgcXVhbnRpdHkgPSBtYXhOdW1iZXJcclxuICBjb25zdCBmcmVxdWVudGx5S2V5cyA9IFtdXHJcblxyXG4gIGZvciAobGV0IGtleSBpbiBmcmVxdWVudGx5KSB7XHJcbiAgICBpZiAoZnJlcXVlbnRseS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgIGZyZXF1ZW50bHlLZXlzLnB1c2goa2V5KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgc29ydGVkID0gZnJlcXVlbnRseUtleXNcclxuICAgIC5zb3J0KChhLCBiKSA9PiBmcmVxdWVudGx5W2FdIC0gZnJlcXVlbnRseVtiXSlcclxuICAgIC5yZXZlcnNlKClcclxuICBjb25zdCBzbGljZWQgPSBzb3J0ZWQuc2xpY2UoMCwgcXVhbnRpdHkpXHJcblxyXG4gIGNvbnN0IGxhc3QgPSBzdG9yZS5nZXQoJ2xhc3QnKVxyXG5cclxuICBpZiAobGFzdCAmJiBzbGljZWQuaW5kZXhPZihsYXN0KSA9PSAtMSkge1xyXG4gICAgc2xpY2VkLnBvcCgpXHJcbiAgICBzbGljZWQucHVzaChsYXN0KVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHNsaWNlZFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7IGFkZCwgZ2V0IH1cclxuIiwiaW1wb3J0IHN0cmluZ0Zyb21Db2RlUG9pbnQgZnJvbSAnLi4vcG9seWZpbGxzL3N0cmluZ0Zyb21Db2RlUG9pbnQnXHJcblxyXG5mdW5jdGlvbiB1bmlmaWVkVG9OYXRpdmUodW5pZmllZCkge1xyXG4gIHZhciB1bmljb2RlcyA9IHVuaWZpZWQuc3BsaXQoJy0nKSxcclxuICAgIGNvZGVQb2ludHMgPSB1bmljb2Rlcy5tYXAoKHUpID0+IGAweCR7dX1gKVxyXG5cclxuICByZXR1cm4gc3RyaW5nRnJvbUNvZGVQb2ludC5hcHBseShudWxsLCBjb2RlUG9pbnRzKVxyXG59XHJcblxyXG5mdW5jdGlvbiB1bmlxKGFycikge1xyXG4gIHJldHVybiBhcnIucmVkdWNlKChhY2MsIGl0ZW0pID0+IHtcclxuICAgIGlmIChhY2MuaW5kZXhPZihpdGVtKSA9PT0gLTEpIHtcclxuICAgICAgYWNjLnB1c2goaXRlbSlcclxuICAgIH1cclxuICAgIHJldHVybiBhY2NcclxuICB9LCBbXSlcclxufVxyXG5cclxuZnVuY3Rpb24gaW50ZXJzZWN0KGEsIGIpIHtcclxuICBjb25zdCB1bmlxQSA9IHVuaXEoYSlcclxuICBjb25zdCB1bmlxQiA9IHVuaXEoYilcclxuXHJcbiAgcmV0dXJuIHVuaXFBLmZpbHRlcigoaXRlbSkgPT4gdW5pcUIuaW5kZXhPZihpdGVtKSA+PSAwKVxyXG59XHJcblxyXG5mdW5jdGlvbiBkZWVwTWVyZ2UoYSwgYikge1xyXG4gIHZhciBvID0ge31cclxuXHJcbiAgZm9yIChsZXQga2V5IGluIGEpIHtcclxuICAgIGxldCBvcmlnaW5hbFZhbHVlID0gYVtrZXldLFxyXG4gICAgICB2YWx1ZSA9IG9yaWdpbmFsVmFsdWVcclxuXHJcbiAgICBpZiAoYi5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgIHZhbHVlID0gYltrZXldXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgdmFsdWUgPSBkZWVwTWVyZ2Uob3JpZ2luYWxWYWx1ZSwgdmFsdWUpXHJcbiAgICB9XHJcblxyXG4gICAgb1trZXldID0gdmFsdWVcclxuICB9XHJcblxyXG4gIHJldHVybiBvXHJcbn1cclxuXHJcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zb25pY2RvZS9tZWFzdXJlLXNjcm9sbGJhclxyXG5mdW5jdGlvbiBtZWFzdXJlU2Nyb2xsYmFyKCkge1xyXG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT0gJ3VuZGVmaW5lZCcpIHJldHVybiAwXHJcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuXHJcbiAgZGl2LnN0eWxlLndpZHRoID0gJzEwMHB4J1xyXG4gIGRpdi5zdHlsZS5oZWlnaHQgPSAnMTAwcHgnXHJcbiAgZGl2LnN0eWxlLm92ZXJmbG93ID0gJ3Njcm9sbCdcclxuICBkaXYuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnXHJcbiAgZGl2LnN0eWxlLnRvcCA9ICctOTk5OXB4J1xyXG5cclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdilcclxuICBjb25zdCBzY3JvbGxiYXJXaWR0aCA9IGRpdi5vZmZzZXRXaWR0aCAtIGRpdi5jbGllbnRXaWR0aFxyXG4gIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZGl2KVxyXG5cclxuICByZXR1cm4gc2Nyb2xsYmFyV2lkdGhcclxufVxyXG5cclxuZXhwb3J0IHsgdW5pcSwgaW50ZXJzZWN0LCBkZWVwTWVyZ2UsIHVuaWZpZWRUb05hdGl2ZSwgbWVhc3VyZVNjcm9sbGJhciB9XHJcbiIsImV4cG9ydCBjbGFzcyBQaWNrZXJWaWV3IHtcclxuICBjb25zdHJ1Y3RvcihwaWNrZXJDb21wb25lbnQpIHtcclxuICAgIHRoaXMuX3ZtID0gcGlja2VyQ29tcG9uZW50XHJcbiAgICB0aGlzLl9kYXRhID0gcGlja2VyQ29tcG9uZW50LmRhdGFcclxuICAgIHRoaXMuX3BlckxpbmUgPSBwaWNrZXJDb21wb25lbnQucGVyTGluZVxyXG5cclxuICAgIHRoaXMuX2NhdGVnb3JpZXMgPSBbXVxyXG4gICAgdGhpcy5fY2F0ZWdvcmllcy5wdXNoKC4uLnRoaXMuX2RhdGEuY2F0ZWdvcmllcygpKVxyXG4gICAgdGhpcy5fY2F0ZWdvcmllcyA9IHRoaXMuX2NhdGVnb3JpZXMuZmlsdGVyKChjYXRlZ29yeSkgPT4ge1xyXG4gICAgICByZXR1cm4gY2F0ZWdvcnkuZW1vamlzLmxlbmd0aCA+IDBcclxuICAgIH0pXHJcblxyXG4gICAgdGhpcy5fY2F0ZWdvcmllc1swXS5maXJzdCA9IHRydWVcclxuICAgIE9iamVjdC5mcmVlemUodGhpcy5fY2F0ZWdvcmllcylcclxuXHJcbiAgICB0aGlzLmFjdGl2ZUNhdGVnb3J5ID0gdGhpcy5fY2F0ZWdvcmllc1swXVxyXG4gICAgdGhpcy5zZWFyY2hFbW9qaXMgPSBudWxsXHJcblxyXG4gICAgLy8gUHJldmlldyBlbW9qaSwgc2hvd24gb24gbW91c2Ugb3ZlciBvciB3aGVuIHdlIG1vdmVcclxuICAgIC8vIHdpdGggYXJyb3cga2V5cy5cclxuICAgIHRoaXMucHJldmlld0Vtb2ppID0gbnVsbFxyXG4gICAgLy8gSW5kZXhlcyBhcmUgdXNlZCB0byBrZWVwIHRoZSBwb3NpdGlvbiB3aGVuIG1vdmluZ1xyXG4gICAgLy8gd2l0aCBhcnJvd3M6IGN1cnJlbnQgY2F0ZWdvcnkgYW5kIGN1cnJlbnQgZW1vamlcclxuICAgIC8vIGluc2lkZSB0aGUgY2F0ZWdvcnkuXHJcbiAgICB0aGlzLnByZXZpZXdFbW9qaUNhdGVnb3J5SWR4ID0gMFxyXG4gICAgdGhpcy5wcmV2aWV3RW1vamlJZHggPSAtMVxyXG4gIH1cclxuXHJcbiAgb25TY3JvbGwoKSB7XHJcbiAgICBjb25zdCBzY3JvbGxFbGVtZW50ID0gdGhpcy5fdm0uJHJlZnMuc2Nyb2xsXHJcbiAgICBjb25zdCBzY3JvbGxUb3AgPSBzY3JvbGxFbGVtZW50LnNjcm9sbFRvcFxyXG5cclxuICAgIGxldCBhY3RpdmVDYXRlZ29yeSA9IHRoaXMuZmlsdGVyZWRDYXRlZ29yaWVzWzBdXHJcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuZmlsdGVyZWRDYXRlZ29yaWVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG4gICAgICBsZXQgY2F0ZWdvcnkgPSB0aGlzLmZpbHRlcmVkQ2F0ZWdvcmllc1tpXVxyXG4gICAgICBsZXQgY29tcG9uZW50ID0gdGhpcy5fdm0uZ2V0Q2F0ZWdvcnlDb21wb25lbnQoaSlcclxuICAgICAgLy8gVGhlIGAtNTBgIG9mZnNldCBzd2l0Y2hlcyBhY3RpdmUgY2F0ZWdvcnkgKHNlbGVjdGVkIGluIHRoZVxyXG4gICAgICAvLyBhbmNob3JzIGJhcikgYSBiaXQgZWFyaWxlciwgYmVmb3JlIGl0IGFjdHVhbGx5IHJlYWNoZXMgdGhlIHRvcC5cclxuICAgICAgaWYgKGNvbXBvbmVudCAmJiBjb21wb25lbnQuJGVsLm9mZnNldFRvcCAtIDUwID4gc2Nyb2xsVG9wKSB7XHJcbiAgICAgICAgYnJlYWtcclxuICAgICAgfVxyXG4gICAgICBhY3RpdmVDYXRlZ29yeSA9IGNhdGVnb3J5XHJcbiAgICB9XHJcbiAgICB0aGlzLmFjdGl2ZUNhdGVnb3J5ID0gYWN0aXZlQ2F0ZWdvcnlcclxuICB9XHJcblxyXG4gIGdldCBhbGxDYXRlZ29yaWVzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NhdGVnb3JpZXNcclxuICB9XHJcblxyXG4gIGdldCBmaWx0ZXJlZENhdGVnb3JpZXMoKSB7XHJcbiAgICBpZiAodGhpcy5zZWFyY2hFbW9qaXMpIHtcclxuICAgICAgcmV0dXJuIFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogJ3NlYXJjaCcsXHJcbiAgICAgICAgICBuYW1lOiAnU2VhcmNoJyxcclxuICAgICAgICAgIGVtb2ppczogdGhpcy5zZWFyY2hFbW9qaXMsXHJcbiAgICAgICAgfSxcclxuICAgICAgXVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuX2NhdGVnb3JpZXMuZmlsdGVyKChjYXRlZ29yeSkgPT4ge1xyXG4gICAgICBsZXQgaGFzRW1vamlzID0gY2F0ZWdvcnkuZW1vamlzLmxlbmd0aCA+IDBcclxuICAgICAgcmV0dXJuIGhhc0Vtb2ppc1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGdldCBwcmV2aWV3RW1vamlDYXRlZ29yeSgpIHtcclxuICAgIGlmICh0aGlzLnByZXZpZXdFbW9qaUNhdGVnb3J5SWR4ID49IDApIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyZWRDYXRlZ29yaWVzW3RoaXMucHJldmlld0Vtb2ppQ2F0ZWdvcnlJZHhdXHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cclxuXHJcbiAgb25BbmNob3JDbGljayhjYXRlZ29yeSkge1xyXG4gICAgaWYgKHRoaXMuc2VhcmNoRW1vamlzKSB7XHJcbiAgICAgIC8vIE5vIGNhdGVnb3JpZXMgYXJlIHNob3duIHdoZW4gc2VhcmNoIGlzIGFjdGl2ZS5cclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBsZXQgaSA9IHRoaXMuZmlsdGVyZWRDYXRlZ29yaWVzLmluZGV4T2YoY2F0ZWdvcnkpXHJcbiAgICBsZXQgY29tcG9uZW50ID0gdGhpcy5fdm0uZ2V0Q2F0ZWdvcnlDb21wb25lbnQoaSlcclxuICAgIGxldCBzY3JvbGxUb0NvbXBvbmVudCA9ICgpID0+IHtcclxuICAgICAgaWYgKGNvbXBvbmVudCkge1xyXG4gICAgICAgIGxldCB0b3AgPSBjb21wb25lbnQuJGVsLm9mZnNldFRvcFxyXG4gICAgICAgIGlmIChjYXRlZ29yeS5maXJzdCkge1xyXG4gICAgICAgICAgdG9wID0gMFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl92bS4kcmVmcy5zY3JvbGwuc2Nyb2xsVG9wID0gdG9wXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLl92bS5pbmZpbml0ZVNjcm9sbCkge1xyXG4gICAgICBzY3JvbGxUb0NvbXBvbmVudCgpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmFjdGl2ZUNhdGVnb3J5ID0gdGhpcy5maWx0ZXJlZENhdGVnb3JpZXNbaV1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uU2VhcmNoKHZhbHVlKSB7XHJcbiAgICBsZXQgZW1vamlzID0gdGhpcy5fZGF0YS5zZWFyY2godmFsdWUsIHRoaXMubWF4U2VhcmNoUmVzdWx0cylcclxuICAgIHRoaXMuc2VhcmNoRW1vamlzID0gZW1vamlzXHJcblxyXG4gICAgdGhpcy5wcmV2aWV3RW1vamlDYXRlZ29yeUlkeCA9IDBcclxuICAgIHRoaXMucHJldmlld0Vtb2ppSWR4ID0gMFxyXG4gICAgdGhpcy51cGRhdGVQcmV2aWV3RW1vamkoKVxyXG4gIH1cclxuXHJcbiAgb25FbW9qaUVudGVyKGVtb2ppKSB7XHJcbiAgICB0aGlzLnByZXZpZXdFbW9qaSA9IGVtb2ppXHJcbiAgICB0aGlzLnByZXZpZXdFbW9qaUlkeCA9IC0xXHJcbiAgICB0aGlzLnByZXZpZXdFbW9qaUNhdGVnb3J5SWR4ID0gLTFcclxuICB9XHJcblxyXG4gIG9uRW1vamlMZWF2ZShlbW9qaSkge1xyXG4gICAgdGhpcy5wcmV2aWV3RW1vamkgPSBudWxsXHJcbiAgfVxyXG5cclxuICBvbkFycm93TGVmdCgpIHtcclxuICAgIC8vIE1vdmluZyBsZWZ0LCBkZWNyZWFzZSBlbW9qaSBpbmRleC5cclxuICAgIGlmICh0aGlzLnByZXZpZXdFbW9qaUlkeCA+IDApIHtcclxuICAgICAgdGhpcy5wcmV2aWV3RW1vamlJZHggLT0gMVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gSWYgZW1vamkgaW5kZXggaXMgemVybywgZ28gdG8gdGhlIHByZXZpb3VzIGNhdGVnb3J5LlxyXG4gICAgICB0aGlzLnByZXZpZXdFbW9qaUNhdGVnb3J5SWR4IC09IDFcclxuICAgICAgaWYgKHRoaXMucHJldmlld0Vtb2ppQ2F0ZWdvcnlJZHggPCAwKSB7XHJcbiAgICAgICAgLy8gSWYgd2UgcmVhY2hlZCBmaXJzdCBjYXRlZ29yeSwga2VlcCBpdC5cclxuICAgICAgICB0aGlzLnByZXZpZXdFbW9qaUNhdGVnb3J5SWR4ID0gMFxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIFVwZGF0ZSBlbW9qaSBpbmRleCAtIHdlIG1vdmVkIHRvIHRoZSBwcmV2aW91cyBjYXRlZ29yeSxcclxuICAgICAgICAvLyBnZXQgdGhlIGxhc3QgZW1vamkgaW4gaXQuXHJcbiAgICAgICAgdGhpcy5wcmV2aWV3RW1vamlJZHggPVxyXG4gICAgICAgICAgdGhpcy5maWx0ZXJlZENhdGVnb3JpZXNbdGhpcy5wcmV2aWV3RW1vamlDYXRlZ29yeUlkeF0uZW1vamlzLmxlbmd0aCAtXHJcbiAgICAgICAgICAxXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMudXBkYXRlUHJldmlld0Vtb2ppKClcclxuICB9XHJcblxyXG4gIG9uQXJyb3dSaWdodCgpIHtcclxuICAgIGlmIChcclxuICAgICAgdGhpcy5wcmV2aWV3RW1vamlJZHggPFxyXG4gICAgICB0aGlzLmVtb2ppc0xlbmd0aCh0aGlzLnByZXZpZXdFbW9qaUNhdGVnb3J5SWR4KSAtIDFcclxuICAgICkge1xyXG4gICAgICAvLyBNb3ZpbmcgcmlnaHQgd2l0aGluIGNhdGVnb3J5LCBpbmNyZWFzZSBlbW9qaSBpbmRleC5cclxuICAgICAgdGhpcy5wcmV2aWV3RW1vamlJZHggKz0gMVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gR28gdG8gdGhlIG5leHQgY2F0ZWdvcnkuXHJcbiAgICAgIHRoaXMucHJldmlld0Vtb2ppQ2F0ZWdvcnlJZHggKz0gMVxyXG4gICAgICBpZiAodGhpcy5wcmV2aWV3RW1vamlDYXRlZ29yeUlkeCA+PSB0aGlzLmZpbHRlcmVkQ2F0ZWdvcmllcy5sZW5ndGgpIHtcclxuICAgICAgICAvLyBJZiB3ZSByZWFjaGVkIHRoZSBsYXN0IGNhdGVnb3J5IC0ga2VlcCBpdC5cclxuICAgICAgICB0aGlzLnByZXZpZXdFbW9qaUNhdGVnb3J5SWR4ID0gdGhpcy5maWx0ZXJlZENhdGVnb3JpZXMubGVuZ3RoIC0gMVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIElmIHdlIG1vdmVkIHRvIHRoZSBuZXh0IGNhdGVnb3J5LCB1cGRhdGUgZW1vamkgaW5kZXggdG8gdGhlXHJcbiAgICAgICAgLy8gZmlyc3QgZW1vamkgaW4gdGhlIG5ldyBjYXRlZ29yeS5cclxuICAgICAgICB0aGlzLnByZXZpZXdFbW9qaUlkeCA9IDBcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy51cGRhdGVQcmV2aWV3RW1vamkoKVxyXG4gIH1cclxuXHJcbiAgb25BcnJvd0Rvd24oKSB7XHJcbiAgICAvLyBJZiB3ZSBhcmUgb3V0IG9mIHRoZSBlbW9qaSBjb250cm9sIChpbmRleCBpcyAtMSksIHNlbGVjdCB0aGUgZmlyc3RcclxuICAgIC8vIGVtb2ppIGluIHRoZSBmaXJzdCBjYXRlZ29yeSBieSBjYWxsaW5nIGBvbkFycm93UmlnaHRgLlxyXG4gICAgaWYgKHRoaXMucHJldmlld0Vtb2ppSWR4ID09IC0xKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm9uQXJyb3dSaWdodCgpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2F0ZWdvcnlMZW5ndGggPVxyXG4gICAgICB0aGlzLmZpbHRlcmVkQ2F0ZWdvcmllc1t0aGlzLnByZXZpZXdFbW9qaUNhdGVnb3J5SWR4XS5lbW9qaXMubGVuZ3RoXHJcblxyXG4gICAgLy8gV2hlbiBtb3ZpbmcgZG93biwgd2UgY2FuIG1vdmUgYF9wZXJMaW5lYCBpY29ucyByaWdodCB0b1xyXG4gICAgLy8ganVtcCB0byB0aGUgc2FtZSBwb3NpdGlvbiBpbiB0aGUgbmV4dCByb3cuXHJcbiAgICBsZXQgZGlmZiA9IHRoaXMuX3BlckxpbmVcclxuXHJcbiAgICAvLyBUT0RPOiBwcmV2aWV3Q2F0ZWdvcnkgc2hvdWxkIG1hdGNoIGFjdGl2ZUNhdGVnb3J5XHJcbiAgICAvLyAoc28gaXQgd291bGQgYmUgYm90aCBoaWdobGlnaHRlZCBpbiBVSSBhbmQgdXNlZFxyXG4gICAgLy8gd2hlbiB3ZSBzdGFydCBtb3Zpbmcgd2l0aCBhcnJvd3MgYWZ0ZXIgY2xpY2tpbmdcclxuICAgIC8vIHRoZSBjYXRlZ29yeSkuXHJcblxyXG4gICAgLy8gTm90ZTogcHJvYmFibHkgd2UgY2FuIGFsd2FzeSB0YWtlIGN1cnJlbnQgcm93IGxlbmd0aFxyXG4gICAgLy8gYXMgYSBgZGlmZmAgLSBpdCB3aWxsIGZpdCBib3RoIGNhc2Ugb2YgYW55IHJvdyBhbmRcclxuICAgIC8vIHNwZWNpYWwgY2FzZSBvZiB0aGUgbGFzdCByb3cuXHJcbiAgICAvLyBOb3RlOiBpdCBjYW4gYmUgYWxzbyBlYXNpZXIgdG8gdXBkYXRlIGluZGV4ZXNcclxuICAgIC8vIGRpcmVjdGx5IGhlcmUgaW5zdGVhZCBvZiBjYWxsaW5nIG9uQXJyb3dSaWdodC5cclxuICAgIC8vIFNhbWUgaXMgdHJ1ZSBmb3IgYG9uQXJyb3dVcGAuXHJcblxyXG4gICAgLy8gVW5sZXNzIGlmIHdlIGFyZSBvbiB0aGUgbGFzdCByb3cgb2YgdGhlIGNhdGVnb3J5IGFuZFxyXG4gICAgLy8gdGhlcmUgYXJlIGxlc3MgdGhlbiBgX3BlckxpbmVgIGVtb2ppcyBpbiBpdC5cclxuICAgIC8vIEluIHRoaXMgY2FzZSB3ZSB1c2UgdGhlIGxhc3Qgcm93IGxlbmd0aCBhcyBkaWZmXHJcbiAgICAvLyBzbyB3ZSBnbyBzdHJhaWdodCBkb3duLCBmb3IgZXhhbXBsZTpcclxuICAgIC8vXHJcbiAgICAvLyAgIDEgMiAzIDQgNSA2XHJcbiAgICAvLyAgIDcgOCA5XHJcbiAgICAvLyAgIEEgQiBDIEQgRSBGXHJcbiAgICAvL1xyXG4gICAgLy8gSWYgd2UgZ28gZG93biBmcm9tIGA4YCwgd2UgbmVlZCB0byBtb3ZlIDMgZW1vamlzIHJpZ2h0XHJcbiAgICAvLyB0byBsZW5kIGF0IGBCYCAoYW5kIDMgaXMgdGhlIGxlbmd0aCBvZiB0aGUgbGFzdCByb3cgb2ZcclxuICAgIC8vIHRoaXMgY2F0ZWdvcnkpLlxyXG4gICAgLy8gQW5kIGlmIHdlIHVzZWQgNiBpbnN0ZWFkIChyb3cgbGVuZ3RoLCBgX3BlckxpbmVgKSwgd2Ugd291bGRcclxuICAgIC8vIGxlbmQgdXAgYXQgYEVgLlxyXG4gICAgaWYgKHRoaXMucHJldmlld0Vtb2ppSWR4ICsgZGlmZiA+IGNhdGVnb3J5TGVuZ3RoKSB7XHJcbiAgICAgIC8vIENhbGN1bGF0ZSB0aGUgbGFzdCByb3cgbGVuZ3RoLlxyXG4gICAgICBkaWZmID0gY2F0ZWdvcnlMZW5ndGggJSB0aGlzLl9wZXJMaW5lXHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpZmY7IGkrKykge1xyXG4gICAgICB0aGlzLm9uQXJyb3dSaWdodCgpXHJcbiAgICB9XHJcbiAgICB0aGlzLnVwZGF0ZVByZXZpZXdFbW9qaSgpXHJcbiAgfVxyXG5cclxuICBvbkFycm93VXAoKSB7XHJcbiAgICAvLyBTaW1pbGFyIHRvIGBvbkFycm93RG93bmAsIHRvIG1vdmUgdXAgd2UgY2FuIG1vdmUgbGVmdFxyXG4gICAgLy8gYnkgYF9wZXJMaW5lYCBudW1iZXIgb2YgZW1vamlzLlxyXG4gICAgbGV0IGRpZmYgPSB0aGlzLl9wZXJMaW5lXHJcblxyXG4gICAgaWYgKHRoaXMucHJldmlld0Vtb2ppSWR4IC0gZGlmZiA8IDApIHtcclxuICAgICAgaWYgKHRoaXMucHJldmlld0Vtb2ppQ2F0ZWdvcnlJZHggPiAwKSB7XHJcbiAgICAgICAgLy8gVW5sZXNzIGlmIHdlIGFyZSBvbiB0aGUgZmlyc3QgbGluZSBvZiB0aGUgY2F0ZWdvcnkgYW5kXHJcbiAgICAgICAgLy8gdGhlIGxhc3QgbGluZSBpbiB0aGUgcHJldmlvdXMgY2F0ZWdvcnkgaXMgc2hvcnRlciB0aGFuXHJcbiAgICAgICAgLy8gYF9wZXJMaW5lYC5cclxuICAgICAgICAvLyBJbiB0aGlzIGNhc2Ugd2UgdXNlIHRoZSBsYXN0IHJvdyBsZW5ndGggYXMgZGlmZiwgc29cclxuICAgICAgICAvLyB3ZSBnbyBzdHJhaWdodCB1cCwgZm9yIGV4YW1wbGU6XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgIDEgMiAzIDQgNVxyXG4gICAgICAgIC8vICAgNiA3IDhcclxuICAgICAgICAvLyAgIDkgQSBCIEMgRFxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gSWYgd2UgZ28gdXAgZnJvbSBgQWAsIHdlIG5lZWQgdG8gbW92ZSAzIGVtb2ppcyBsZWZ0IHRvIGdldFxyXG4gICAgICAgIC8vIHRvIGA3YCAoYW5kIDMgaXMgdGhlIGxlbmd0aCBvZiB0aGUgbGFzdCByb3cgb2YgdGhlIHByZXZpb3VzXHJcbiAgICAgICAgLy8gY2F0ZWdvcnkpLlxyXG4gICAgICAgIGNvbnN0IHByZXZDYXRlZ29yeUxhc3RSb3dMZW5ndGggPVxyXG4gICAgICAgICAgdGhpcy5maWx0ZXJlZENhdGVnb3JpZXNbdGhpcy5wcmV2aWV3RW1vamlDYXRlZ29yeUlkeCAtIDFdLmVtb2ppc1xyXG4gICAgICAgICAgICAubGVuZ3RoICUgdGhpcy5fcGVyTGluZVxyXG4gICAgICAgIC8vIGRpZmYgPSB0aGlzLnByZXZpZXdFbW9qaUlkeCArIHByZXZDYXRlZ29yeUxhc3RSb3dMZW5ndGhcclxuICAgICAgICBkaWZmID0gcHJldkNhdGVnb3J5TGFzdFJvd0xlbmd0aFxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRpZmYgPSAwXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGlmZjsgaSsrKSB7XHJcbiAgICAgIHRoaXMub25BcnJvd0xlZnQoKVxyXG4gICAgfVxyXG4gICAgdGhpcy51cGRhdGVQcmV2aWV3RW1vamkoKVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlUHJldmlld0Vtb2ppKCkge1xyXG4gICAgdGhpcy5wcmV2aWV3RW1vamkgPVxyXG4gICAgICB0aGlzLmZpbHRlcmVkQ2F0ZWdvcmllc1t0aGlzLnByZXZpZXdFbW9qaUNhdGVnb3J5SWR4XS5lbW9qaXNbXHJcbiAgICAgICAgdGhpcy5wcmV2aWV3RW1vamlJZHhcclxuICAgICAgXVxyXG5cclxuICAgIHRoaXMuX3ZtLiRuZXh0VGljaygoKSA9PiB7XHJcbiAgICAgIC8vIFNjcm9sbCB0aGUgdmlldyBpZiB0aGUgYHByZXZpZXdFbW9qaWAgZ29lcyBvdXQgb2YgdGhlIHZpc2libGUgYXJlYS5cclxuICAgICAgY29uc3Qgc2Nyb2xsRWwgPSB0aGlzLl92bS4kcmVmcy5zY3JvbGxcclxuXHJcbiAgICAgIC8vIE5vdGU6IGl0IHdvdWxkIGJlIG1vcmUgVnVlLWlzaCB0byBtYXJrIGFsbCBlbW9qaXMgd2l0aCBgcmVmYHNcclxuICAgICAgLy8gYW5kIHRoZW4gZG8gc29tZXRoaW5nIHNpbWlsYXIgaGVyZSB0byB3aGF0IHdlIGRvIGluIHRoZVxyXG4gICAgICAvLyBgZ2V0Q2F0ZWdvcmllc2AgaW5zdGVhZCBvZiB1c2luZyBgcXVlcnlTZWxlY3RvcmAgZGlyZWN0bHksXHJcbiAgICAgIC8vIGJ1dCBJIGFtIG5vdCBzdXJlIGlmIGhhdmluZyBtYW55IHJlZnMgd291bGQgYWZmZWN0IHRoZSBwZXJmb3JtYW5jZVxyXG4gICAgICAvLyAoaXQgbWlnaHQsIHNvIEkgdXNlIGBxdWVyeVNlbGVjdG9yYCBmb3Igbm93KS5cclxuICAgICAgY29uc3QgZW1vamlFbCA9IHNjcm9sbEVsLnF1ZXJ5U2VsZWN0b3IoJy5lbW9qaS1tYXJ0LWVtb2ppLXNlbGVjdGVkJylcclxuXHJcbiAgICAgIGNvbnN0IHNjcm9sbEhlaWdodCA9IHNjcm9sbEVsLm9mZnNldFRvcCAtIHNjcm9sbEVsLm9mZnNldEhlaWdodFxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgZW1vamlFbCAmJlxyXG4gICAgICAgIGVtb2ppRWwub2Zmc2V0VG9wICsgZW1vamlFbC5vZmZzZXRIZWlnaHQgPlxyXG4gICAgICAgICAgc2Nyb2xsSGVpZ2h0ICsgc2Nyb2xsRWwuc2Nyb2xsVG9wXHJcbiAgICAgICkge1xyXG4gICAgICAgIHNjcm9sbEVsLnNjcm9sbFRvcCArPSBlbW9qaUVsLm9mZnNldEhlaWdodFxyXG4gICAgICB9XHJcbiAgICAgIGlmIChlbW9qaUVsICYmIGVtb2ppRWwub2Zmc2V0VG9wIDwgc2Nyb2xsRWwuc2Nyb2xsVG9wKSB7XHJcbiAgICAgICAgc2Nyb2xsRWwuc2Nyb2xsVG9wIC09IGVtb2ppRWwub2Zmc2V0SGVpZ2h0XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBlbW9qaXNMZW5ndGgoY2F0ZWdvcnlJZHgpIHtcclxuICAgIGlmIChjYXRlZ29yeUlkeCA9PSAtMSkge1xyXG4gICAgICByZXR1cm4gMFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuZmlsdGVyZWRDYXRlZ29yaWVzW2NhdGVnb3J5SWR4XS5lbW9qaXMubGVuZ3RoXHJcbiAgfVxyXG59XHJcbiIsImNvbnN0IEVtb2ppUHJvcHMgPSB7XHJcbiAgbmF0aXZlOiB7XHJcbiAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgZGVmYXVsdDogZmFsc2UsXHJcbiAgfSxcclxuICB0b29sdGlwOiB7XHJcbiAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgZGVmYXVsdDogZmFsc2UsXHJcbiAgfSxcclxuICBmYWxsYmFjazoge1xyXG4gICAgdHlwZTogRnVuY3Rpb24sXHJcbiAgfSxcclxuICBza2luOiB7XHJcbiAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICBkZWZhdWx0OiAxLFxyXG4gIH0sXHJcbiAgc2V0OiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICBkZWZhdWx0OiAnYXBwbGUnLFxyXG4gIH0sXHJcbiAgZW1vamk6IHtcclxuICAgIHR5cGU6IFtTdHJpbmcsIE9iamVjdF0sXHJcbiAgICByZXF1aXJlZDogdHJ1ZSxcclxuICB9LFxyXG4gIHNpemU6IHtcclxuICAgIHR5cGU6IE51bWJlcixcclxuICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgfSxcclxuICB0YWc6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIGRlZmF1bHQ6ICdzcGFuJyxcclxuICB9LFxyXG59XHJcblxyXG5jb25zdCBQaWNrZXJQcm9wcyA9IHtcclxuICBwZXJMaW5lOiB7XHJcbiAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICBkZWZhdWx0OiA5LFxyXG4gIH0sXHJcbiAgbWF4U2VhcmNoUmVzdWx0czoge1xyXG4gICAgdHlwZTogTnVtYmVyLFxyXG4gICAgZGVmYXVsdDogNzUsXHJcbiAgfSxcclxuICBlbW9qaVNpemU6IHtcclxuICAgIHR5cGU6IE51bWJlcixcclxuICAgIGRlZmF1bHQ6IDI0LFxyXG4gIH0sXHJcbiAgdGl0bGU6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIGRlZmF1bHQ6ICdFbW9qaSBNYXJ04oSiJyxcclxuICB9LFxyXG4gIGVtb2ppOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICBkZWZhdWx0OiAnZGVwYXJ0bWVudF9zdG9yZScsXHJcbiAgfSxcclxuICBjb2xvcjoge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgZGVmYXVsdDogJyNhZTY1YzUnLFxyXG4gIH0sXHJcbiAgc2V0OiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICBkZWZhdWx0OiAnYXBwbGUnLFxyXG4gIH0sXHJcbiAgc2tpbjoge1xyXG4gICAgdHlwZTogTnVtYmVyLFxyXG4gICAgZGVmYXVsdDogbnVsbCxcclxuICB9LFxyXG4gIGRlZmF1bHRTa2luOiB7XHJcbiAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICBkZWZhdWx0OiAxLFxyXG4gIH0sXHJcbiAgbmF0aXZlOiB7XHJcbiAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgZGVmYXVsdDogZmFsc2UsXHJcbiAgfSxcclxuICBlbW9qaVRvb2x0aXA6IHtcclxuICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICBkZWZhdWx0OiBmYWxzZSxcclxuICB9LFxyXG4gIGF1dG9Gb2N1czoge1xyXG4gICAgdHlwZTogQm9vbGVhbixcclxuICAgIGRlZmF1bHQ6IGZhbHNlLFxyXG4gIH0sXHJcbiAgaTE4bjoge1xyXG4gICAgdHlwZTogT2JqZWN0LFxyXG4gICAgZGVmYXVsdCgpIHtcclxuICAgICAgcmV0dXJuIHt9XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2hvd1ByZXZpZXc6IHtcclxuICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICBkZWZhdWx0OiB0cnVlLFxyXG4gIH0sXHJcbiAgc2hvd1NlYXJjaDoge1xyXG4gICAgdHlwZTogQm9vbGVhbixcclxuICAgIGRlZmF1bHQ6IHRydWUsXHJcbiAgfSxcclxuICBzaG93Q2F0ZWdvcmllczoge1xyXG4gICAgdHlwZTogQm9vbGVhbixcclxuICAgIGRlZmF1bHQ6IHRydWUsXHJcbiAgfSxcclxuICBzaG93U2tpblRvbmVzOiB7XHJcbiAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgZGVmYXVsdDogdHJ1ZSxcclxuICB9LFxyXG4gIGluZmluaXRlU2Nyb2xsOiB7XHJcbiAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgZGVmYXVsdDogdHJ1ZSxcclxuICB9LFxyXG4gIHBpY2tlclN0eWxlczoge1xyXG4gICAgdHlwZTogT2JqZWN0LFxyXG4gICAgZGVmYXVsdCgpIHtcclxuICAgICAgcmV0dXJuIHt9XHJcbiAgICB9LFxyXG4gIH0sXHJcbn1cclxuXHJcbmV4cG9ydCB7IEVtb2ppUHJvcHMsIFBpY2tlclByb3BzIH1cclxuIiwidmFyIE5BTUVTUEFDRSA9ICdlbW9qaS1tYXJ0J1xyXG5cclxuY29uc3QgX0pTT04gPSBKU09OXHJcblxyXG52YXIgaXNMb2NhbFN0b3JhZ2VTdXBwb3J0ZWQgPVxyXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICdsb2NhbFN0b3JhZ2UnIGluIHdpbmRvd1xyXG5cclxubGV0IGdldHRlclxyXG5sZXQgc2V0dGVyXHJcblxyXG5mdW5jdGlvbiBzZXRIYW5kbGVycyhoYW5kbGVycykge1xyXG4gIGhhbmRsZXJzIHx8IChoYW5kbGVycyA9IHt9KVxyXG5cclxuICBnZXR0ZXIgPSBoYW5kbGVycy5nZXR0ZXJcclxuICBzZXR0ZXIgPSBoYW5kbGVycy5zZXR0ZXJcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0TmFtZXNwYWNlKG5hbWVzcGFjZSkge1xyXG4gIE5BTUVTUEFDRSA9IG5hbWVzcGFjZVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGUoc3RhdGUpIHtcclxuICBmb3IgKGxldCBrZXkgaW4gc3RhdGUpIHtcclxuICAgIGxldCB2YWx1ZSA9IHN0YXRlW2tleV1cclxuICAgIHNldChrZXksIHZhbHVlKVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2V0KGtleSwgdmFsdWUpIHtcclxuICBpZiAoc2V0dGVyKSB7XHJcbiAgICBzZXR0ZXIoa2V5LCB2YWx1ZSlcclxuICB9IGVsc2Uge1xyXG4gICAgaWYgKCFpc0xvY2FsU3RvcmFnZVN1cHBvcnRlZCkgcmV0dXJuXHJcbiAgICB0cnkge1xyXG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlW2Ake05BTUVTUEFDRX0uJHtrZXl9YF0gPSBfSlNPTi5zdHJpbmdpZnkodmFsdWUpXHJcbiAgICB9IGNhdGNoIChlKSB7fVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0KGtleSkge1xyXG4gIGlmIChnZXR0ZXIpIHtcclxuICAgIHJldHVybiBnZXR0ZXIoa2V5KVxyXG4gIH0gZWxzZSB7XHJcbiAgICBpZiAoIWlzTG9jYWxTdG9yYWdlU3VwcG9ydGVkKSByZXR1cm5cclxuICAgIHRyeSB7XHJcbiAgICAgIHZhciB2YWx1ZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2VbYCR7TkFNRVNQQUNFfS4ke2tleX1gXVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgcmV0dXJuIEpTT04ucGFyc2UodmFsdWUpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7IHVwZGF0ZSwgc2V0LCBnZXQsIHNldE5hbWVzcGFjZSwgc2V0SGFuZGxlcnMgfVxyXG4iLCIvLyBodHRwOi8vcGF1bGlyaXNoLmNvbS8yMDExL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtYW5pbWF0aW5nL1xyXG4vLyBodHRwOi8vbXkub3BlcmEuY29tL2Vtb2xsZXIvYmxvZy8yMDExLzEyLzIwL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtZXItYW5pbWF0aW5nXHJcblxyXG4vLyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGwgYnkgRXJpayBNw7ZsbGVyLiBmaXhlcyBmcm9tIFBhdWwgSXJpc2ggYW5kIFRpbm8gWmlqZGVsXHJcblxyXG4vLyBNSVQgbGljZW5zZVxyXG5cclxudmFyIGlzV2luZG93QXZhaWxhYmxlID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcclxuXHJcbmlzV2luZG93QXZhaWxhYmxlICYmXHJcbiAgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBsYXN0VGltZSA9IDBcclxuICAgIHZhciB2ZW5kb3JzID0gWydtcycsICdtb3onLCAnd2Via2l0JywgJ28nXVxyXG5cclxuICAgIGZvciAodmFyIHggPSAwOyB4IDwgdmVuZG9ycy5sZW5ndGggJiYgIXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7ICsreCkge1xyXG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID1cclxuICAgICAgICB3aW5kb3dbdmVuZG9yc1t4XSArICdSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXVxyXG4gICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPVxyXG4gICAgICAgIHdpbmRvd1t2ZW5kb3JzW3hdICsgJ0NhbmNlbEFuaW1hdGlvbkZyYW1lJ10gfHxcclxuICAgICAgICB3aW5kb3dbdmVuZG9yc1t4XSArICdDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXVxyXG4gICAgfVxyXG5cclxuICAgIGlmICghd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSlcclxuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uIChjYWxsYmFjaywgZWxlbWVudCkge1xyXG4gICAgICAgIHZhciBjdXJyVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpXHJcbiAgICAgICAgdmFyIHRpbWVUb0NhbGwgPSBNYXRoLm1heCgwLCAxNiAtIChjdXJyVGltZSAtIGxhc3RUaW1lKSlcclxuICAgICAgICB2YXIgaWQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICBjYWxsYmFjayhjdXJyVGltZSArIHRpbWVUb0NhbGwpXHJcbiAgICAgICAgfSwgdGltZVRvQ2FsbClcclxuXHJcbiAgICAgICAgbGFzdFRpbWUgPSBjdXJyVGltZSArIHRpbWVUb0NhbGxcclxuICAgICAgICByZXR1cm4gaWRcclxuICAgICAgfVxyXG5cclxuICAgIGlmICghd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKVxyXG4gICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICBjbGVhclRpbWVvdXQoaWQpXHJcbiAgICAgIH1cclxuICB9KSgpXHJcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRW1vamkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUzNGFkOTQ2JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0Vtb2ppLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRW1vamkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxTdHVhcnRcXFxcRG9jdW1lbnRzXFxcXE1hcmN1c1xcXFxQcm9ncmFtbWluZ1xcXFxQdWxsIFJlcVxcXFxFbW9qaU1hcnRWdWVcXFxcZW1vamktbWFydC12dWVcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNTM0YWQ5NDYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNTM0YWQ5NDYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNTM0YWQ5NDYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0Vtb2ppLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MzRhZDk0NiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1MzRhZDk0NicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvRW1vamkudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9QaWNrZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWQxNmU5MDg0JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1BpY2tlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1BpY2tlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXFN0dWFydFxcXFxEb2N1bWVudHNcXFxcTWFyY3VzXFxcXFByb2dyYW1taW5nXFxcXFB1bGwgUmVxXFxcXEVtb2ppTWFydFZ1ZVxcXFxlbW9qaS1tYXJ0LXZ1ZVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdkMTZlOTA4NCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdkMTZlOTA4NCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdkMTZlOTA4NCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUGlja2VyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kMTZlOTA4NCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdkMTZlOTA4NCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvUGlja2VyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vYW5jaG9ycy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTExODgxMDQmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vYW5jaG9ycy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2FuY2hvcnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxTdHVhcnRcXFxcRG9jdW1lbnRzXFxcXE1hcmN1c1xcXFxQcm9ncmFtbWluZ1xcXFxQdWxsIFJlcVxcXFxFbW9qaU1hcnRWdWVcXFxcZW1vamktbWFydC12dWVcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNTExODgxMDQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNTExODgxMDQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNTExODgxMDQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2FuY2hvcnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUxMTg4MTA0JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzUxMTg4MTA0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9hbmNob3JzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vY2F0ZWdvcnkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM3NmNkYTBlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2NhdGVnb3J5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vY2F0ZWdvcnkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxTdHVhcnRcXFxcRG9jdW1lbnRzXFxcXE1hcmN1c1xcXFxQcm9ncmFtbWluZ1xcXFxQdWxsIFJlcVxcXFxFbW9qaU1hcnRWdWVcXFxcZW1vamktbWFydC12dWVcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMzc2Y2RhMGUnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMzc2Y2RhMGUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMzc2Y2RhMGUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2NhdGVnb3J5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNzZjZGEwZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczNzZjZGEwZScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvY2F0ZWdvcnkudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9wcmV2aWV3LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNTA1NmMzMCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9wcmV2aWV3LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vcHJldmlldy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXFN0dWFydFxcXFxEb2N1bWVudHNcXFxcTWFyY3VzXFxcXFByb2dyYW1taW5nXFxcXFB1bGwgUmVxXFxcXEVtb2ppTWFydFZ1ZVxcXFxlbW9qaS1tYXJ0LXZ1ZVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCczNTA1NmMzMCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczNTA1NmMzMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczNTA1NmMzMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vcHJldmlldy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzUwNTZjMzAmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMzUwNTZjMzAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL3ByZXZpZXcudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9zZWFyY2gudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRhZDQxYmI4JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3NlYXJjaC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3NlYXJjaC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXFN0dWFydFxcXFxEb2N1bWVudHNcXFxcTWFyY3VzXFxcXFByb2dyYW1taW5nXFxcXFB1bGwgUmVxXFxcXEVtb2ppTWFydFZ1ZVxcXFxlbW9qaS1tYXJ0LXZ1ZVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc0YWQ0MWJiOCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0YWQ0MWJiOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0YWQ0MWJiOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vc2VhcmNoLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00YWQ0MWJiOCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0YWQ0MWJiOCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvc2VhcmNoLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vc2tpbnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFjNjE0ODk0JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3NraW5zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vc2tpbnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxTdHVhcnRcXFxcRG9jdW1lbnRzXFxcXE1hcmN1c1xcXFxQcm9ncmFtbWluZ1xcXFxQdWxsIFJlcVxcXFxFbW9qaU1hcnRWdWVcXFxcZW1vamktbWFydC12dWVcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMWM2MTQ4OTQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMWM2MTQ4OTQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMWM2MTQ4OTQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3NraW5zLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xYzYxNDg5NCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxYzYxNDg5NCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvc2tpbnMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Vtb2ppLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Vtb2ppLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2UhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QaWNrZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGlja2VyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2UhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9hbmNob3JzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FuY2hvcnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NhdGVnb3J5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NhdGVnb3J5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2UhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wcmV2aWV3LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3ByZXZpZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NlYXJjaC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2UhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zZWFyY2gudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NraW5zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NraW5zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FbW9qaS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTM0YWQ5NDYmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGlja2VyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kMTZlOTA4NCZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9hbmNob3JzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MTE4ODEwNCZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jYXRlZ29yeS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Mzc2Y2RhMGUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcHJldmlldy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzUwNTZjMzAmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2VhcmNoLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00YWQ0MWJiOCZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9za2lucy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWM2MTQ4OTQmXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfdm0udmlldy5jYW5SZW5kZXJcbiAgICA/IF9jKFxuICAgICAgICBfdm0udGFnLFxuICAgICAgICB7XG4gICAgICAgICAgdGFnOiBcImNvbXBvbmVudFwiLFxuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtZW1vamlcIixcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgdGl0bGU6IF92bS52aWV3LnRpdGxlLFxuICAgICAgICAgICAgXCJhcmlhLWxhYmVsXCI6IF92bS52aWV3LmFyaWFMYWJlbCxcbiAgICAgICAgICAgIFwiZGF0YS10aXRsZVwiOiBfdm0udGl0bGUsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgbW91c2VlbnRlcjogX3ZtLm9uTW91c2VFbnRlcixcbiAgICAgICAgICAgIG1vdXNlbGVhdmU6IF92bS5vbk1vdXNlTGVhdmUsXG4gICAgICAgICAgICBjbGljazogX3ZtLm9uQ2xpY2ssXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwic3BhblwiLCB7IGNsYXNzOiBfdm0udmlldy5jc3NDbGFzcywgc3R5bGU6IF92bS52aWV3LmNzc1N0eWxlIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnZpZXcuY29udGVudCkpLFxuICAgICAgICAgIF0pLFxuICAgICAgICBdXG4gICAgICApXG4gICAgOiBfdm0uX2UoKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwic2VjdGlvblwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydCBlbW9qaS1tYXJ0LXN0YXRpY1wiLCBzdHlsZTogX3ZtLmN1c3RvbVN0eWxlcyB9LFxuICAgIFtcbiAgICAgIF92bS5zaG93Q2F0ZWdvcmllc1xuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1iYXIgZW1vamktbWFydC1iYXItYW5jaG9yc1wiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiYW5jaG9yc1wiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGRhdGE6IF92bS5kYXRhLFxuICAgICAgICAgICAgICAgICAgaTE4bjogX3ZtLm1lcmdlZEkxOG4sXG4gICAgICAgICAgICAgICAgICBjb2xvcjogX3ZtLmNvbG9yLFxuICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllczogX3ZtLnZpZXcuYWxsQ2F0ZWdvcmllcyxcbiAgICAgICAgICAgICAgICAgIFwiYWN0aXZlLWNhdGVnb3J5XCI6IF92bS52aWV3LmFjdGl2ZUNhdGVnb3J5LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5vbkFuY2hvckNsaWNrIH0sXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl90KFxuICAgICAgICBcInNlYXJjaFRlbXBsYXRlXCIsXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgX3ZtLnNob3dTZWFyY2hcbiAgICAgICAgICAgICAgPyBfYyhcInNlYXJjaFwiLCB7XG4gICAgICAgICAgICAgICAgICByZWY6IFwic2VhcmNoXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiBfdm0uZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgaTE4bjogX3ZtLm1lcmdlZEkxOG4sXG4gICAgICAgICAgICAgICAgICAgIFwiYXV0by1mb2N1c1wiOiBfdm0uYXV0b0ZvY3VzLFxuICAgICAgICAgICAgICAgICAgICBcIm9uLXNlYXJjaFwiOiBfdm0ub25TZWFyY2gsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoOiBfdm0ub25TZWFyY2gsXG4gICAgICAgICAgICAgICAgICAgIGFycm93TGVmdDogX3ZtLm9uQXJyb3dMZWZ0LFxuICAgICAgICAgICAgICAgICAgICBhcnJvd1JpZ2h0OiBfdm0ub25BcnJvd1JpZ2h0LFxuICAgICAgICAgICAgICAgICAgICBhcnJvd0Rvd246IF92bS5vbkFycm93RG93bixcbiAgICAgICAgICAgICAgICAgICAgYXJyb3dVcDogX3ZtLm9uQXJyb3dVcCxcbiAgICAgICAgICAgICAgICAgICAgZW50ZXI6IF92bS5vbkVudGVyLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGRhdGE6IF92bS5kYXRhLFxuICAgICAgICAgIGkxOG46IF92bS5pMThuLFxuICAgICAgICAgIGF1dG9Gb2N1czogX3ZtLmF1dG9Gb2N1cyxcbiAgICAgICAgICBvblNlYXJjaDogX3ZtLm9uU2VhcmNoLFxuICAgICAgICB9XG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgcmVmOiBcInNjcm9sbFwiLFxuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtc2Nyb2xsXCIsXG4gICAgICAgICAgYXR0cnM6IHsgcm9sZTogXCJ0YWJwYW5lbFwiIH0sXG4gICAgICAgICAgb246IHsgc2Nyb2xsOiBfdm0ub25TY3JvbGwgfSxcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmVmOiBcInNjcm9sbENvbnRlbnRcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBpZDogXCJlbW9qaS1tYXJ0LWxpc3RcIixcbiAgICAgICAgICAgICAgICByb2xlOiBcImxpc3Rib3hcIixcbiAgICAgICAgICAgICAgICBcImFyaWEtZXhwYW5kZWRcIjogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgX3ZtLl9sKF92bS52aWV3LmZpbHRlcmVkQ2F0ZWdvcmllcywgZnVuY3Rpb24gKGNhdGVnb3J5LCBpZHgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF9jKFwiY2F0ZWdvcnlcIiwge1xuICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOlxuICAgICAgICAgICAgICAgICAgICAgIF92bS5pbmZpbml0ZVNjcm9sbCB8fCBjYXRlZ29yeSA9PSBfdm0udmlldy5hY3RpdmVDYXRlZ29yeSxcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICAgICAgICBcImluZmluaXRlU2Nyb2xsIHx8IGNhdGVnb3J5ID09IHZpZXcuYWN0aXZlQ2F0ZWdvcnlcIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBrZXk6IGNhdGVnb3J5LmlkLFxuICAgICAgICAgICAgICAgIHJlZjogXCJjYXRlZ29yaWVzX1wiICsgaWR4LFxuICAgICAgICAgICAgICAgIHJlZkluRm9yOiB0cnVlLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBkYXRhOiBfdm0uZGF0YSxcbiAgICAgICAgICAgICAgICAgIGkxOG46IF92bS5tZXJnZWRJMThuLFxuICAgICAgICAgICAgICAgICAgaWQ6IGNhdGVnb3J5LmlkLFxuICAgICAgICAgICAgICAgICAgbmFtZTogY2F0ZWdvcnkubmFtZSxcbiAgICAgICAgICAgICAgICAgIGVtb2ppczogY2F0ZWdvcnkuZW1vamlzLFxuICAgICAgICAgICAgICAgICAgXCJlbW9qaS1wcm9wc1wiOiBfdm0uZW1vamlQcm9wcyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uX3QoXG4gICAgICAgIFwicHJldmlld1RlbXBsYXRlXCIsXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgX3ZtLnNob3dQcmV2aWV3XG4gICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LWJhciBlbW9qaS1tYXJ0LWJhci1wcmV2aWV3XCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJwcmV2aWV3XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogX3ZtLmRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogX3ZtLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW1vamk6IF92bS52aWV3LnByZXZpZXdFbW9qaSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaWRsZS1lbW9qaVwiOiBfdm0uaWRsZUVtb2ppLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzaG93LXNraW4tdG9uZXNcIjogX3ZtLnNob3dTa2luVG9uZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImVtb2ppLXByb3BzXCI6IF92bS5lbW9qaVByb3BzLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJza2luLXByb3BzXCI6IF92bS5za2luUHJvcHMsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm9uLXNraW4tY2hhbmdlXCI6IF92bS5vblNraW5DaGFuZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBkYXRhOiBfdm0uZGF0YSxcbiAgICAgICAgICB0aXRsZTogX3ZtLnRpdGxlLFxuICAgICAgICAgIGVtb2ppOiBfdm0udmlldy5wcmV2aWV3RW1vamksXG4gICAgICAgICAgaWRsZUVtb2ppOiBfdm0uaWRsZUVtb2ppLFxuICAgICAgICAgIHNob3dTa2luVG9uZXM6IF92bS5zaG93U2tpblRvbmVzLFxuICAgICAgICAgIGVtb2ppUHJvcHM6IF92bS5lbW9qaVByb3BzLFxuICAgICAgICAgIHNraW5Qcm9wczogX3ZtLnNraW5Qcm9wcyxcbiAgICAgICAgICBvblNraW5DaGFuZ2U6IF92bS5vblNraW5DaGFuZ2UsXG4gICAgICAgIH1cbiAgICAgICksXG4gICAgXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1hbmNob3JzXCIsIGF0dHJzOiB7IHJvbGU6IFwidGFibGlzdFwiIH0gfSxcbiAgICBfdm0uX2woX3ZtLmNhdGVnb3JpZXMsIGZ1bmN0aW9uIChjYXRlZ29yeSkge1xuICAgICAgcmV0dXJuIF9jKFxuICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICB7XG4gICAgICAgICAga2V5OiBjYXRlZ29yeS5pZCxcbiAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgXCJlbW9qaS1tYXJ0LWFuY2hvclwiOiB0cnVlLFxuICAgICAgICAgICAgXCJlbW9qaS1tYXJ0LWFuY2hvci1zZWxlY3RlZFwiOiBjYXRlZ29yeS5pZCA9PSBfdm0uYWN0aXZlQ2F0ZWdvcnkuaWQsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgY29sb3I6IGNhdGVnb3J5LmlkID09IF92bS5hY3RpdmVDYXRlZ29yeS5pZCA/IF92bS5jb2xvciA6IFwiXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgcm9sZTogXCJ0YWJcIixcbiAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICBcImFyaWEtbGFiZWxcIjogY2F0ZWdvcnkubmFtZSxcbiAgICAgICAgICAgIFwiYXJpYS1zZWxlY3RlZFwiOiBjYXRlZ29yeS5pZCA9PSBfdm0uYWN0aXZlQ2F0ZWdvcnkuaWQsXG4gICAgICAgICAgICBcImRhdGEtdGl0bGVcIjogX3ZtLmkxOG4uY2F0ZWdvcmllc1tjYXRlZ29yeS5pZF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcImNsaWNrXCIsIGNhdGVnb3J5KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9LFxuICAgICAgICAgICAgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLnN2Z3NbY2F0ZWdvcnkuaWRdKSB9LFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtYW5jaG9yLWJhclwiLFxuICAgICAgICAgICAgc3R5bGU6IHsgYmFja2dyb3VuZENvbG9yOiBfdm0uY29sb3IgfSxcbiAgICAgICAgICAgIGF0dHJzOiB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgXVxuICAgICAgKVxuICAgIH0pLFxuICAgIDBcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF92bS5pc1Zpc2libGUgJiYgKF92bS5pc1NlYXJjaCB8fCBfdm0uaGFzUmVzdWx0cylcbiAgICA/IF9jKFxuICAgICAgICBcInNlY3Rpb25cIixcbiAgICAgICAge1xuICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICBcImVtb2ppLW1hcnQtY2F0ZWdvcnlcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiZW1vamktbWFydC1uby1yZXN1bHRzXCI6ICFfdm0uaGFzUmVzdWx0cyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGF0dHJzOiB7IFwiYXJpYS1sYWJlbFwiOiBfdm0uaTE4bi5jYXRlZ29yaWVzW192bS5pZF0gfSxcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1jYXRlZ29yeS1sYWJlbFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiaDNcIiwgeyBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LWNhdGVnb3J5LWxhYmVsXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5pMThuLmNhdGVnb3JpZXNbX3ZtLmlkXSkpLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uX2woX3ZtLmVtb2ppT2JqZWN0cywgZnVuY3Rpb24gKHJlZikge1xuICAgICAgICAgICAgdmFyIGVtb2ppT2JqZWN0ID0gcmVmLmVtb2ppT2JqZWN0XG4gICAgICAgICAgICB2YXIgZW1vamlWaWV3ID0gcmVmLmVtb2ppVmlld1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgZW1vamlWaWV3LmNhblJlbmRlclxuICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBrZXk6IGVtb2ppT2JqZWN0LmlkLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtZW1vamlcIixcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLmFjdGl2ZUNsYXNzKGVtb2ppT2JqZWN0KSxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJhcmlhLWxhYmVsXCI6IGVtb2ppVmlldy5hcmlhTGFiZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICByb2xlOiBcIm9wdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhcmlhLXNlbGVjdGVkXCI6IFwiZmFsc2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYXJpYS1wb3NpbnNldFwiOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYXJpYS1zZXRzaXplXCI6IFwiMTgxMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS10aXRsZVwiOiBlbW9qaU9iamVjdC5zaG9ydF9uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGVtb2ppVmlldy50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb3VzZWVudGVyOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lbW9qaVByb3BzLm9uRW50ZXIoZW1vamlWaWV3LmdldEVtb2ppKCkpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW91c2VsZWF2ZTogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZW1vamlQcm9wcy5vbkxlYXZlKGVtb2ppVmlldy5nZXRFbW9qaSgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lbW9qaVByb3BzLm9uQ2xpY2soZW1vamlWaWV3LmdldEVtb2ppKCkpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogZW1vamlWaWV3LmNzc0NsYXNzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogZW1vamlWaWV3LmNzc1N0eWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKGVtb2ppVmlldy5jb250ZW50KSldXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAhX3ZtLmhhc1Jlc3VsdHNcbiAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImVtb2ppXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBfdm0uZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICBlbW9qaTogXCJzbGV1dGhfb3Jfc3B5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgbmF0aXZlOiBfdm0uZW1vamlQcm9wcy5uYXRpdmUsXG4gICAgICAgICAgICAgICAgICAgICAgc2tpbjogX3ZtLmVtb2ppUHJvcHMuc2tpbixcbiAgICAgICAgICAgICAgICAgICAgICBzZXQ6IF92bS5lbW9qaVByb3BzLnNldCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1uby1yZXN1bHRzLWxhYmVsXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5pMThuLm5vdGZvdW5kKSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgXSxcbiAgICAgICAgMlxuICAgICAgKVxuICAgIDogX3ZtLl9lKClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1wcmV2aWV3XCIgfSxcbiAgICBbXG4gICAgICBfdm0uZW1vamlcbiAgICAgICAgPyBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LXByZXZpZXctZW1vamlcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJlbW9qaVwiLCB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiBfdm0uZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgZW1vamk6IF92bS5lbW9qaSxcbiAgICAgICAgICAgICAgICAgICAgbmF0aXZlOiBfdm0uZW1vamlQcm9wcy5uYXRpdmUsXG4gICAgICAgICAgICAgICAgICAgIHNraW46IF92bS5lbW9qaVByb3BzLnNraW4sXG4gICAgICAgICAgICAgICAgICAgIHNldDogX3ZtLmVtb2ppUHJvcHMuc2V0LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtcHJldmlldy1kYXRhXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtcHJldmlldy1uYW1lXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmVtb2ppLm5hbWUpKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LXByZXZpZXctc2hvcnRuYW1lc1wiIH0sXG4gICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5lbW9qaVNob3J0TmFtZXMsIGZ1bmN0aW9uIChzaG9ydE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBrZXk6IHNob3J0TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LXByZXZpZXctc2hvcnRuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCI6XCIgKyBfdm0uX3Moc2hvcnROYW1lKSArIFwiOlwiKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LXByZXZpZXctZW1vdGljb25zXCIgfSxcbiAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmVtb2ppRW1vdGljb25zLCBmdW5jdGlvbiAoZW1vdGljb24pIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBrZXk6IGVtb3RpY29uLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtcHJldmlldy1lbW90aWNvblwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhlbW90aWNvbikpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgIF1cbiAgICAgICAgOiBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LXByZXZpZXctZW1vamlcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJlbW9qaVwiLCB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiBfdm0uZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgZW1vamk6IF92bS5pZGxlRW1vamksXG4gICAgICAgICAgICAgICAgICAgIG5hdGl2ZTogX3ZtLmVtb2ppUHJvcHMubmF0aXZlLFxuICAgICAgICAgICAgICAgICAgICBza2luOiBfdm0uZW1vamlQcm9wcy5za2luLFxuICAgICAgICAgICAgICAgICAgICBzZXQ6IF92bS5lbW9qaVByb3BzLnNldCxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LXByZXZpZXctZGF0YVwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC10aXRsZS1sYWJlbFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS50aXRsZSkpLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS5zaG93U2tpblRvbmVzXG4gICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LXByZXZpZXctc2tpbnNcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInNraW5zXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBza2luOiBfdm0uc2tpblByb3BzLnNraW4gfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub25Ta2luQ2hhbmdlKCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBdLFxuICAgIF0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LXNlYXJjaFwiIH0sIFtcbiAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICB2YWx1ZTogX3ZtLnZhbHVlLFxuICAgICAgICAgIGV4cHJlc3Npb246IFwidmFsdWVcIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBhdHRyczoge1xuICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgcGxhY2Vob2xkZXI6IF92bS5pMThuLnNlYXJjaCxcbiAgICAgICAgcm9sZTogXCJ0ZXh0Ym94XCIsXG4gICAgICAgIFwiYXJpYS1hdXRvY29tcGxldGVcIjogXCJsaXN0XCIsXG4gICAgICAgIFwiYXJpYS1vd25zXCI6IFwiZW1vamktbWFydC1saXN0XCIsXG4gICAgICAgIFwiYXJpYS1sYWJlbFwiOiBcIlNlYXJjaCBmb3IgYW4gZW1vamlcIixcbiAgICAgICAgXCJhcmlhLWRlc2NyaWJlZGJ5XCI6IFwiZW1vamktbWFydC1zZWFyY2gtZGVzY3JpcHRpb25cIixcbiAgICAgIH0sXG4gICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnZhbHVlIH0sXG4gICAgICBvbjoge1xuICAgICAgICBrZXlkb3duOiBbXG4gICAgICAgICAgZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAhJGV2ZW50LnR5cGUuaW5kZXhPZihcImtleVwiKSAmJlxuICAgICAgICAgICAgICBfdm0uX2soJGV2ZW50LmtleUNvZGUsIFwibGVmdFwiLCAzNywgJGV2ZW50LmtleSwgW1xuICAgICAgICAgICAgICAgIFwiTGVmdFwiLFxuICAgICAgICAgICAgICAgIFwiQXJyb3dMZWZ0XCIsXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChcImJ1dHRvblwiIGluICRldmVudCAmJiAkZXZlbnQuYnV0dG9uICE9PSAwKSB7XG4gICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRlbWl0KFwiYXJyb3dMZWZ0XCIsICRldmVudClcbiAgICAgICAgICAgIH0uYXBwbHkobnVsbCwgYXJndW1lbnRzKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAhJGV2ZW50LnR5cGUuaW5kZXhPZihcImtleVwiKSAmJlxuICAgICAgICAgICAgICBfdm0uX2soJGV2ZW50LmtleUNvZGUsIFwicmlnaHRcIiwgMzksICRldmVudC5rZXksIFtcbiAgICAgICAgICAgICAgICBcIlJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgXCJBcnJvd1JpZ2h0XCIsXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChcImJ1dHRvblwiIGluICRldmVudCAmJiAkZXZlbnQuYnV0dG9uICE9PSAyKSB7XG4gICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRlbWl0KFwiYXJyb3dSaWdodFwiKVxuICAgICAgICAgICAgfS5hcHBseShudWxsLCBhcmd1bWVudHMpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICEkZXZlbnQudHlwZS5pbmRleE9mKFwia2V5XCIpICYmXG4gICAgICAgICAgICAgIF92bS5faygkZXZlbnQua2V5Q29kZSwgXCJkb3duXCIsIDQwLCAkZXZlbnQua2V5LCBbXG4gICAgICAgICAgICAgICAgXCJEb3duXCIsXG4gICAgICAgICAgICAgICAgXCJBcnJvd0Rvd25cIixcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcImFycm93RG93blwiKVxuICAgICAgICAgICAgfS5hcHBseShudWxsLCBhcmd1bWVudHMpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICEkZXZlbnQudHlwZS5pbmRleE9mKFwia2V5XCIpICYmXG4gICAgICAgICAgICAgIF92bS5faygkZXZlbnQua2V5Q29kZSwgXCJ1cFwiLCAzOCwgJGV2ZW50LmtleSwgW1wiVXBcIiwgXCJBcnJvd1VwXCJdKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRlbWl0KFwiYXJyb3dVcFwiLCAkZXZlbnQpXG4gICAgICAgICAgICB9LmFwcGx5KG51bGwsIGFyZ3VtZW50cylcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgISRldmVudC50eXBlLmluZGV4T2YoXCJrZXlcIikgJiZcbiAgICAgICAgICAgICAgX3ZtLl9rKCRldmVudC5rZXlDb2RlLCBcImVudGVyXCIsIDEzLCAkZXZlbnQua2V5LCBcIkVudGVyXCIpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uJGVtaXQoXCJlbnRlclwiKVxuICAgICAgICAgICAgfS5hcHBseShudWxsLCBhcmd1bWVudHMpXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgICBfdm0udmFsdWUgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcInNwYW5cIixcbiAgICAgIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiaGlkZGVuXCIsXG4gICAgICAgIGF0dHJzOiB7IGlkOiBcImVtb2ppLXBpY2tlci1zZWFyY2gtZGVzY3JpcHRpb25cIiB9LFxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX3ZtLl92KFxuICAgICAgICAgIFwiVXNlIHRoZSBsZWZ0LCByaWdodCwgdXAgYW5kIGRvd24gYXJyb3cga2V5cyB0byBuYXZpZ2F0ZSB0aGUgZW1vamkgc2VhcmNoXFxuICAgIHJlc3VsdHMuXCJcbiAgICAgICAgKSxcbiAgICAgIF1cbiAgICApLFxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgY2xhc3M6IHtcbiAgICAgICAgXCJlbW9qaS1tYXJ0LXNraW4tc3dhdGNoZXNcIjogdHJ1ZSxcbiAgICAgICAgXCJlbW9qaS1tYXJ0LXNraW4tc3dhdGNoZXMtb3BlbmVkXCI6IF92bS5vcGVuZWQsXG4gICAgICB9LFxuICAgIH0sXG4gICAgX3ZtLl9sKDYsIGZ1bmN0aW9uIChza2luVG9uZSkge1xuICAgICAgcmV0dXJuIF9jKFxuICAgICAgICBcInNwYW5cIixcbiAgICAgICAge1xuICAgICAgICAgIGtleTogc2tpblRvbmUsXG4gICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgIFwiZW1vamktbWFydC1za2luLXN3YXRjaFwiOiB0cnVlLFxuICAgICAgICAgICAgXCJlbW9qaS1tYXJ0LXNraW4tc3dhdGNoLXNlbGVjdGVkXCI6IF92bS5za2luID09IHNraW5Ub25lLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInNwYW5cIiwge1xuICAgICAgICAgICAgY2xhc3M6IFwiZW1vamktbWFydC1za2luIGVtb2ppLW1hcnQtc2tpbi10b25lLVwiICsgc2tpblRvbmUsXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub25DbGljayhza2luVG9uZSlcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSksXG4gICAgICAgIF1cbiAgICAgIClcbiAgICB9KSxcbiAgICAwXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvKiBnbG9iYWxzIF9fVlVFX1NTUl9DT05URVhUX18gKi9cblxuLy8gSU1QT1JUQU5UOiBEbyBOT1QgdXNlIEVTMjAxNSBmZWF0dXJlcyBpbiB0aGlzIGZpbGUgKGV4Y2VwdCBmb3IgbW9kdWxlcykuXG4vLyBUaGlzIG1vZHVsZSBpcyBhIHJ1bnRpbWUgdXRpbGl0eSBmb3IgY2xlYW5lciBjb21wb25lbnQgbW9kdWxlIG91dHB1dCBhbmQgd2lsbFxuLy8gYmUgaW5jbHVkZWQgaW4gdGhlIGZpbmFsIHdlYnBhY2sgdXNlciBidW5kbGUuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHNjcmlwdEV4cG9ydHMsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmdW5jdGlvbmFsVGVtcGxhdGUsXG4gIGluamVjdFN0eWxlcyxcbiAgc2NvcGVJZCxcbiAgbW9kdWxlSWRlbnRpZmllciwgLyogc2VydmVyIG9ubHkgKi9cbiAgc2hhZG93TW9kZSAvKiB2dWUtY2xpIG9ubHkgKi9cbikge1xuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKHJlbmRlcikge1xuICAgIG9wdGlvbnMucmVuZGVyID0gcmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBzdGF0aWNSZW5kZXJGbnNcbiAgICBvcHRpb25zLl9jb21waWxlZCA9IHRydWVcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgaWYgKGZ1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMuZnVuY3Rpb25hbCA9IHRydWVcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9ICdkYXRhLXYtJyArIHNjb3BlSWRcbiAgfVxuXG4gIHZhciBob29rXG4gIGlmIChtb2R1bGVJZGVudGlmaWVyKSB7IC8vIHNlcnZlciBidWlsZFxuICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgY29udGV4dCA9XG4gICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpIC8vIGZ1bmN0aW9uYWxcbiAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgY29udGV4dClcbiAgICAgIH1cbiAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJyZW5jZVxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2tcbiAgfSBlbHNlIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICBob29rID0gc2hhZG93TW9kZVxuICAgICAgPyBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgKG9wdGlvbnMuZnVuY3Rpb25hbCA/IHRoaXMucGFyZW50IDogdGhpcykuJHJvb3QuJG9wdGlvbnMuc2hhZG93Um9vdFxuICAgICAgICApXG4gICAgICB9XG4gICAgICA6IGluamVjdFN0eWxlc1xuICB9XG5cbiAgaWYgKGhvb2spIHtcbiAgICBpZiAob3B0aW9ucy5mdW5jdGlvbmFsKSB7XG4gICAgICAvLyBmb3IgdGVtcGxhdGUtb25seSBob3QtcmVsb2FkIGJlY2F1c2UgaW4gdGhhdCBjYXNlIHRoZSByZW5kZXIgZm4gZG9lc24ndFxuICAgICAgLy8gZ28gdGhyb3VnaCB0aGUgbm9ybWFsaXplclxuICAgICAgb3B0aW9ucy5faW5qZWN0U3R5bGVzID0gaG9va1xuICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9uYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICB2YXIgb3JpZ2luYWxSZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24gKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBvcmlnaW5hbFJlbmRlcihoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgdmFyIGV4aXN0aW5nID0gb3B0aW9ucy5iZWZvcmVDcmVhdGVcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmdcbiAgICAgICAgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spXG4gICAgICAgIDogW2hvb2tdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufSIsImltcG9ydCBhcnJheUxpa2VUb0FycmF5IGZyb20gXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufSIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlcltTeW1ib2wuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlcltcIkBAaXRlcmF0b3JcIl0gIT0gbnVsbCkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn0iLCJpbXBvcnQgYXJyYXlXaXRob3V0SG9sZXMgZnJvbSBcIi4vYXJyYXlXaXRob3V0SG9sZXMuanNcIjtcbmltcG9ydCBpdGVyYWJsZVRvQXJyYXkgZnJvbSBcIi4vaXRlcmFibGVUb0FycmF5LmpzXCI7XG5pbXBvcnQgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgZnJvbSBcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIjtcbmltcG9ydCBub25JdGVyYWJsZVNwcmVhZCBmcm9tIFwiLi9ub25JdGVyYWJsZVNwcmVhZC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufSIsImltcG9ydCBhcnJheUxpa2VUb0FycmF5IGZyb20gXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGU7IH07XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBzdG9yZSBmcm9tICcuL3V0aWxzL3N0b3JlJ1xyXG5pbXBvcnQgeyB1bmNvbXByZXNzIH0gZnJvbSAnLi91dGlscy9kYXRhJ1xyXG5pbXBvcnQgZnJlcXVlbnRseSBmcm9tICcuL3V0aWxzL2ZyZXF1ZW50bHknXHJcblxyXG5leHBvcnQge1xyXG4gIFBpY2tlcixcclxuICBFbW9qaSxcclxuICBBbmNob3JzLFxyXG4gIFByZXZpZXcsXHJcbiAgU2VhcmNoLFxyXG4gIENhdGVnb3J5LFxyXG4gIFNraW5zLFxyXG59IGZyb20gJy4vY29tcG9uZW50cydcclxuXHJcbmV4cG9ydCB7IEVtb2ppSW5kZXgsIEVtb2ppVmlldywgRW1vamlEYXRhLCBzYW5pdGl6ZSB9IGZyb20gJy4vdXRpbHMvZW1vamktZGF0YSdcclxuZXhwb3J0IHsgdW5jb21wcmVzcywgc3RvcmUsIGZyZXF1ZW50bHkgfVxyXG4iXSwibmFtZXMiOlsiZGVmYXVsdCIsIkFuY2hvcnMiLCJDYXRlZ29yeSIsIlByZXZpZXciLCJTZWFyY2giLCJTa2lucyIsIkVtb2ppIiwiUGlja2VyIiwiX1N0cmluZyIsIlN0cmluZyIsImZyb21Db2RlUG9pbnQiLCJzdHJpbmdGcm9tQ29kZVBvaW50IiwiTUFYX1NJWkUiLCJjb2RlVW5pdHMiLCJoaWdoU3Vycm9nYXRlIiwibG93U3Vycm9nYXRlIiwiaW5kZXgiLCJsZW5ndGgiLCJhcmd1bWVudHMiLCJyZXN1bHQiLCJjb2RlUG9pbnQiLCJOdW1iZXIiLCJpc0Zpbml0ZSIsIk1hdGgiLCJmbG9vciIsIlJhbmdlRXJyb3IiLCJwdXNoIiwiZnJvbUNoYXJDb2RlIiwiYXBwbHkiLCJTVkdzIiwiYWN0aXZpdHkiLCJjdXN0b20iLCJmbGFncyIsImZvb2RzIiwibmF0dXJlIiwib2JqZWN0cyIsInNtaWxleXMiLCJwZW9wbGUiLCJwbGFjZXMiLCJyZWNlbnQiLCJzeW1ib2xzIiwibWFwcGluZyIsIm5hbWUiLCJ1bmlmaWVkIiwibm9uX3F1YWxpZmllZCIsImhhc19pbWdfYXBwbGUiLCJoYXNfaW1nX2dvb2dsZSIsImhhc19pbWdfdHdpdHRlciIsImhhc19pbWdfZmFjZWJvb2siLCJrZXl3b3JkcyIsInNoZWV0IiwiZW1vdGljb25zIiwidGV4dCIsInNob3J0X25hbWVzIiwiYWRkZWRfaW4iLCJidWlsZFNlYXJjaCIsImVtb2ppIiwic2VhcmNoIiwiYWRkVG9TZWFyY2giLCJzdHJpbmdzIiwic3BsaXQiLCJBcnJheSIsImlzQXJyYXkiLCJmb3JFYWNoIiwic3RyaW5nIiwicyIsInRvTG93ZXJDYXNlIiwiaW5kZXhPZiIsImpvaW4iLCJkZWVwRnJlZXplIiwib2JqZWN0IiwicHJvcE5hbWVzIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsInZhbHVlIiwiZnJlZXplIiwidW5jb21wcmVzcyIsImRhdGEiLCJjb21wcmVzc2VkIiwiaWQiLCJlbW9qaXMiLCJrZXkiLCJ1bnNoaWZ0Iiwic2hlZXRfeCIsInNoZWV0X3kiLCJ0b0ZpeGVkIiwiaW50ZXJzZWN0IiwidW5pZmllZFRvTmF0aXZlIiwiZnJlcXVlbnRseSIsIlNIRUVUX0NPTFVNTlMiLCJDT0xPTlNfUkVHRVgiLCJTS0lOUyIsIkVtb2ppSW5kZXgiLCJlbW9qaXNUb1Nob3dGaWx0ZXIiLCJpbmNsdWRlIiwiZXhjbHVkZSIsInJlY2VudExlbmd0aCIsIl9kYXRhIiwiX2Vtb2ppc0ZpbHRlciIsIl9pbmNsdWRlIiwiX2V4Y2x1ZGUiLCJfY3VzdG9tIiwiX3JlY2VudCIsImdldCIsIl9lbW9qaXMiLCJfbmF0aXZlRW1vamlzIiwiX2Vtb3RpY29ucyIsIl9jYXRlZ29yaWVzIiwiX3JlY2VudENhdGVnb3J5IiwiX2N1c3RvbUNhdGVnb3J5IiwiX3NlYXJjaEluZGV4IiwiYnVpbGRJbmRleCIsImFsbENhdGVnb3JpZXMiLCJjYXRlZ29yaWVzIiwiZmlsdGVyIiwiaXRlbSIsImluY2x1ZGVzIiwic29ydCIsImEiLCJiIiwiaW5kZXhBIiwiaW5kZXhCIiwiY2F0ZWdvcnlEYXRhIiwiaXNDYXRlZ29yeU5lZWRlZCIsImNhdGVnb3J5IiwiZW1vamlJZCIsImFkZEVtb2ppIiwiY3VzdG9tRW1vamkiLCJhZGRDdXN0b21FbW9qaSIsIm1hcCIsImhhc0Vtb2ppIiwic2tpbiIsIm1hdGNoZXMiLCJtYXRjaCIsInBhcnNlSW50IiwiYWxpYXNlcyIsImhhc093blByb3BlcnR5IiwiZW1vamlPYmplY3QiLCJnZXRTa2luIiwiRXJyb3IiLCJrZXlzIiwidW5pY29kZUVtb2ppIiwibWF4UmVzdWx0cyIsInZhbHVlcyIsImFsbFJlc3VsdHMiLCJjdXJyZW50SW5kZXgiLCJjaGFySW5kZXgiLCJjaGFyIiwicmVzdWx0cyIsInNjb3JlcyIsInN1YiIsInN1YnN0ciIsInN1YkluZGV4Iiwic2NvcmUiLCJhU2NvcmUiLCJiU2NvcmUiLCJzbGljZSIsImVtb2ppRGF0YSIsImFzc2lnbiIsIkVtb2ppRGF0YSIsImlzRW1vamlOZWVkZWQiLCJuYXRpdmUiLCJfc2tpbnMiLCJpZHgiLCJlbW90aWNvbiIsImNhdGVnb3J5X2lkIiwiaXNJbmNsdWRlZCIsImlzRXhjbHVkZWQiLCJza2luX3ZhcmlhdGlvbnMiLCJza2luSWR4Iiwic2tpbktleSIsInZhcmlhdGlvbkRhdGEiLCJza2luRGF0YSIsImsiLCJfc2FuaXRpemVkIiwic2FuaXRpemUiLCJzaG9ydF9uYW1lIiwiYWRqdXN0ZWRDb2x1bW5zIiwieCIsInkiLCJjb25jYXQiLCJCb29sZWFuIiwiRW1vamlWaWV3Iiwic2V0IiwiZmFsbGJhY2siLCJlbW9qaVRvb2x0aXAiLCJlbW9qaVNpemUiLCJfZW1vamkiLCJfbmF0aXZlIiwiX3NraW4iLCJfc2V0IiwiX2ZhbGxiYWNrIiwiY2FuUmVuZGVyIiwiX2NhblJlbmRlciIsImNzc0NsYXNzIiwiX2Nzc0NsYXNzIiwiY3NzU3R5bGUiLCJfY3NzU3R5bGUiLCJjb250ZW50IiwiX2NvbnRlbnQiLCJ0aXRsZSIsImFyaWFMYWJlbCIsIl9pc0N1c3RvbSIsIl9pc05hdGl2ZSIsIl9oYXNFbW9qaSIsIl9lbW9qaVR5cGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJnZXRFbW9qaSIsImltYWdlVXJsIiwiYmFja2dyb3VuZFNpemUiLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmRQb3NpdGlvbiIsImdldFBvc2l0aW9uIiwiZm9udFNpemUiLCJyb3VuZCIsImhhc0ltYWdlIiwidW5kZWZpbmVkIiwic2tpbl90b25lIiwiY29sb25zIiwic3RvcmUiLCJERUZBVUxUUyIsImluaXRpYWxpemVkIiwiZGVmYXVsdHMiLCJpbml0IiwiYWRkIiwibWF4TnVtYmVyIiwiZGVmYXVsdExlbmd0aCIsIm1pbiIsImkiLCJxdWFudGl0eSIsImZyZXF1ZW50bHlLZXlzIiwic29ydGVkIiwicmV2ZXJzZSIsInNsaWNlZCIsImxhc3QiLCJwb3AiLCJ1bmljb2RlcyIsImNvZGVQb2ludHMiLCJ1IiwidW5pcSIsImFyciIsInJlZHVjZSIsImFjYyIsInVuaXFBIiwidW5pcUIiLCJkZWVwTWVyZ2UiLCJvIiwib3JpZ2luYWxWYWx1ZSIsIm1lYXN1cmVTY3JvbGxiYXIiLCJkb2N1bWVudCIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsIm92ZXJmbG93IiwicG9zaXRpb24iLCJ0b3AiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJzY3JvbGxiYXJXaWR0aCIsIm9mZnNldFdpZHRoIiwiY2xpZW50V2lkdGgiLCJyZW1vdmVDaGlsZCIsIlBpY2tlclZpZXciLCJwaWNrZXJDb21wb25lbnQiLCJfdm0iLCJfcGVyTGluZSIsInBlckxpbmUiLCJmaXJzdCIsImFjdGl2ZUNhdGVnb3J5Iiwic2VhcmNoRW1vamlzIiwicHJldmlld0Vtb2ppIiwicHJldmlld0Vtb2ppQ2F0ZWdvcnlJZHgiLCJwcmV2aWV3RW1vamlJZHgiLCJzY3JvbGxFbGVtZW50IiwiJHJlZnMiLCJzY3JvbGwiLCJzY3JvbGxUb3AiLCJmaWx0ZXJlZENhdGVnb3JpZXMiLCJsIiwiY29tcG9uZW50IiwiZ2V0Q2F0ZWdvcnlDb21wb25lbnQiLCIkZWwiLCJvZmZzZXRUb3AiLCJoYXNFbW9qaXMiLCJzY3JvbGxUb0NvbXBvbmVudCIsImluZmluaXRlU2Nyb2xsIiwibWF4U2VhcmNoUmVzdWx0cyIsInVwZGF0ZVByZXZpZXdFbW9qaSIsImVtb2ppc0xlbmd0aCIsIm9uQXJyb3dSaWdodCIsImNhdGVnb3J5TGVuZ3RoIiwiZGlmZiIsInByZXZDYXRlZ29yeUxhc3RSb3dMZW5ndGgiLCJvbkFycm93TGVmdCIsIiRuZXh0VGljayIsInNjcm9sbEVsIiwiZW1vamlFbCIsInF1ZXJ5U2VsZWN0b3IiLCJzY3JvbGxIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJjYXRlZ29yeUlkeCIsIkVtb2ppUHJvcHMiLCJ0eXBlIiwidG9vbHRpcCIsIkZ1bmN0aW9uIiwicmVxdWlyZWQiLCJzaXplIiwidGFnIiwiUGlja2VyUHJvcHMiLCJjb2xvciIsImRlZmF1bHRTa2luIiwiYXV0b0ZvY3VzIiwiaTE4biIsInNob3dQcmV2aWV3Iiwic2hvd1NlYXJjaCIsInNob3dDYXRlZ29yaWVzIiwic2hvd1NraW5Ub25lcyIsInBpY2tlclN0eWxlcyIsIk5BTUVTUEFDRSIsIl9KU09OIiwiSlNPTiIsImlzTG9jYWxTdG9yYWdlU3VwcG9ydGVkIiwid2luZG93IiwiZ2V0dGVyIiwic2V0dGVyIiwic2V0SGFuZGxlcnMiLCJoYW5kbGVycyIsInNldE5hbWVzcGFjZSIsIm5hbWVzcGFjZSIsInVwZGF0ZSIsInN0YXRlIiwibG9jYWxTdG9yYWdlIiwic3RyaW5naWZ5IiwiZSIsInBhcnNlIiwiaXNXaW5kb3dBdmFpbGFibGUiLCJsYXN0VGltZSIsInZlbmRvcnMiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImNhbGxiYWNrIiwiZWxlbWVudCIsImN1cnJUaW1lIiwiRGF0ZSIsImdldFRpbWUiLCJ0aW1lVG9DYWxsIiwibWF4Iiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCJdLCJzb3VyY2VSb290IjoiIn0=