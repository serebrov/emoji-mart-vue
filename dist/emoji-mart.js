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


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

//
//
//
//
//
//
//
//
//
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


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQSw4Q0FBOEM7Ozs7O1dDQTlDO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBRUE7QUFVQSIsInNvdXJjZXMiOlsid2VicGFjazovL0Vtb2ppTWFydC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0L3NyYy9jb21wb25lbnRzL0Vtb2ppLnZ1ZSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvc3JjL2NvbXBvbmVudHMvUGlja2VyLnZ1ZSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvc3JjL2NvbXBvbmVudHMvYW5jaG9ycy52dWUiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0L3NyYy9jb21wb25lbnRzL2NhdGVnb3J5LnZ1ZSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvc3JjL2NvbXBvbmVudHMvcHJldmlldy52dWUiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0L3NyYy9jb21wb25lbnRzL3NlYXJjaC52dWUiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0L3NyYy9jb21wb25lbnRzL3NraW5zLnZ1ZSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvcG9seWZpbGxzL3N0cmluZ0Zyb21Db2RlUG9pbnQuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL3N2Z3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL3V0aWxzL2RhdGEuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL3V0aWxzL2Vtb2ppLWRhdGEuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL3V0aWxzL2ZyZXF1ZW50bHkuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL3V0aWxzL2luZGV4LmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy91dGlscy9waWNrZXIuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL3V0aWxzL3NoYXJlZC1wcm9wcy5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvdXRpbHMvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL3ZlbmRvci9yYWYtcG9seWZpbGwuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvRW1vamkudnVlIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL1BpY2tlci52dWUiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvYW5jaG9ycy52dWUiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvY2F0ZWdvcnkudnVlIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL3ByZXZpZXcudnVlIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL3NlYXJjaC52dWUiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvc2tpbnMudnVlIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL0Vtb2ppLnZ1ZT9hZDg0Iiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL1BpY2tlci52dWU/NDk3MCIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9hbmNob3JzLnZ1ZT9iYjk2Iiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL2NhdGVnb3J5LnZ1ZT8zYzdhIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL3ByZXZpZXcudnVlPzBjNWYiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvc2VhcmNoLnZ1ZT8xMDVhIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL3NraW5zLnZ1ZT8wYzBlIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL0Vtb2ppLnZ1ZT82YTE0Iiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL1BpY2tlci52dWU/OGY2YyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9hbmNob3JzLnZ1ZT9kY2VmIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL2NhdGVnb3J5LnZ1ZT83NGQ1Iiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL3ByZXZpZXcudnVlP2I1NGEiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvc2VhcmNoLnZ1ZT83N2RkIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL3NraW5zLnZ1ZT81NjliIiwid2VicGFjazovL0Vtb2ppTWFydC8uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5TGlrZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aG91dEhvbGVzLmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL0Vtb2ppTWFydC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkVtb2ppTWFydFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJFbW9qaU1hcnRcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiPHRlbXBsYXRlPlxuICA8Y29tcG9uZW50XG4gICAgOmlzPVwidGFnXCJcbiAgICB2LWlmPVwidmlldy5jYW5SZW5kZXJcIlxuICAgIDp0aXRsZT1cInZpZXcudGl0bGVcIlxuICAgIDphcmlhLWxhYmVsPVwidmlldy5hcmlhTGFiZWxcIlxuICAgIDpkYXRhLXRpdGxlPVwidGl0bGVcIlxuICAgIGNsYXNzPVwiZW1vamktbWFydC1lbW9qaVwiXG4gICAgQG1vdXNlZW50ZXI9XCJvbk1vdXNlRW50ZXJcIlxuICAgIEBtb3VzZWxlYXZlPVwib25Nb3VzZUxlYXZlXCJcbiAgICBAY2xpY2s9XCJvbkNsaWNrXCJcbiAgPlxuICAgIDxzcGFuIDpjbGFzcz1cInZpZXcuY3NzQ2xhc3NcIiA6c3R5bGU9XCJ2aWV3LmNzc1N0eWxlXCI+e3tcbiAgICAgIHZpZXcuY29udGVudFxuICAgIH19PC9zcGFuPlxuICA8L2NvbXBvbmVudD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBFbW9qaVByb3BzIH0gZnJvbSAnLi4vdXRpbHMvc2hhcmVkLXByb3BzJ1xuaW1wb3J0IHsgRW1vamlWaWV3IH0gZnJvbSAnLi4vdXRpbHMvZW1vamktZGF0YSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczoge1xuICAgIC4uLkVtb2ppUHJvcHMsXG4gICAgZGF0YToge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICB2aWV3KCkge1xuICAgICAgcmV0dXJuIG5ldyBFbW9qaVZpZXcoXG4gICAgICAgIHRoaXMuZW1vamlPYmplY3QsXG4gICAgICAgIHRoaXMuc2tpbixcbiAgICAgICAgdGhpcy5zZXQsXG4gICAgICAgIHRoaXMubmF0aXZlLFxuICAgICAgICB0aGlzLmZhbGxiYWNrLFxuICAgICAgICB0aGlzLnRvb2x0aXAsXG4gICAgICAgIHRoaXMuc2l6ZSxcbiAgICAgIClcbiAgICB9LFxuICAgIHNhbml0aXplZERhdGEoKSB7XG4gICAgICByZXR1cm4gdGhpcy5lbW9qaU9iamVjdC5fc2FuaXRpemVkXG4gICAgfSxcbiAgICB0aXRsZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLnRvb2x0aXAgPyB0aGlzLmVtb2ppT2JqZWN0LnNob3J0X25hbWUgOiBudWxsXG4gICAgfSxcbiAgICBlbW9qaU9iamVjdCgpIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5lbW9qaSA9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmZpbmRFbW9qaSh0aGlzLmVtb2ppKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW1vamlcbiAgICAgIH1cbiAgICB9LFxuICB9LFxuICBjcmVhdGVkKCkge30sXG4gIG1ldGhvZHM6IHtcbiAgICBvbkNsaWNrKCkge1xuICAgICAgdGhpcy4kZW1pdCgnY2xpY2snLCB0aGlzLmVtb2ppT2JqZWN0KVxuICAgIH0sXG4gICAgb25Nb3VzZUVudGVyKCkge1xuICAgICAgdGhpcy4kZW1pdCgnbW91c2VlbnRlcicsIHRoaXMuZW1vamlPYmplY3QpXG4gICAgfSxcbiAgICBvbk1vdXNlTGVhdmUoKSB7XG4gICAgICB0aGlzLiRlbWl0KCdtb3VzZWxlYXZlJywgdGhpcy5lbW9qaU9iamVjdClcbiAgICB9LFxuICB9LFxufVxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxzZWN0aW9uIGNsYXNzPVwiZW1vamktbWFydCBlbW9qaS1tYXJ0LXN0YXRpY1wiIDpzdHlsZT1cImN1c3RvbVN0eWxlc1wiPlxuICAgIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LWJhciBlbW9qaS1tYXJ0LWJhci1hbmNob3JzXCIgdi1pZj1cInNob3dDYXRlZ29yaWVzXCI+XG4gICAgICA8YW5jaG9yc1xuICAgICAgICA6ZGF0YT1cImRhdGFcIlxuICAgICAgICA6aTE4bj1cIm1lcmdlZEkxOG5cIlxuICAgICAgICA6Y29sb3I9XCJjb2xvclwiXG4gICAgICAgIDpjYXRlZ29yaWVzPVwidmlldy5hbGxDYXRlZ29yaWVzXCJcbiAgICAgICAgOmFjdGl2ZS1jYXRlZ29yeT1cInZpZXcuYWN0aXZlQ2F0ZWdvcnlcIlxuICAgICAgICBAY2xpY2s9XCJvbkFuY2hvckNsaWNrXCJcbiAgICAgIC8+XG4gICAgPC9kaXY+XG5cbiAgICA8c2xvdFxuICAgICAgbmFtZT1cInNlYXJjaFRlbXBsYXRlXCJcbiAgICAgIDpkYXRhPVwiZGF0YVwiXG4gICAgICA6aTE4bj1cImkxOG5cIlxuICAgICAgOmF1dG8tZm9jdXM9XCJhdXRvRm9jdXNcIlxuICAgICAgOm9uLXNlYXJjaD1cIm9uU2VhcmNoXCJcbiAgICA+XG4gICAgICA8c2VhcmNoXG4gICAgICAgIHYtaWY9XCJzaG93U2VhcmNoXCJcbiAgICAgICAgcmVmPVwic2VhcmNoXCJcbiAgICAgICAgOmRhdGE9XCJkYXRhXCJcbiAgICAgICAgOmkxOG49XCJtZXJnZWRJMThuXCJcbiAgICAgICAgOmF1dG8tZm9jdXM9XCJhdXRvRm9jdXNcIlxuICAgICAgICA6b24tc2VhcmNoPVwib25TZWFyY2hcIlxuICAgICAgICBAc2VhcmNoPVwib25TZWFyY2hcIlxuICAgICAgICBAYXJyb3dMZWZ0PVwib25BcnJvd0xlZnRcIlxuICAgICAgICBAYXJyb3dSaWdodD1cIm9uQXJyb3dSaWdodFwiXG4gICAgICAgIEBhcnJvd0Rvd249XCJvbkFycm93RG93blwiXG4gICAgICAgIEBhcnJvd1VwPVwib25BcnJvd1VwXCJcbiAgICAgICAgQGVudGVyPVwib25FbnRlclwiXG4gICAgICAvPlxuICAgIDwvc2xvdD5cblxuICAgIDxkaXZcbiAgICAgIHJvbGU9XCJ0YWJwYW5lbFwiXG4gICAgICBjbGFzcz1cImVtb2ppLW1hcnQtc2Nyb2xsXCJcbiAgICAgIHJlZj1cInNjcm9sbFwiXG4gICAgICBAc2Nyb2xsPVwib25TY3JvbGxcIlxuICAgID5cbiAgICAgIDxkaXZcbiAgICAgICAgaWQ9XCJlbW9qaS1tYXJ0LWxpc3RcIlxuICAgICAgICByZWY9XCJzY3JvbGxDb250ZW50XCJcbiAgICAgICAgcm9sZT1cImxpc3Rib3hcIlxuICAgICAgICBhcmlhLWV4cGFuZGVkPVwidHJ1ZVwiXG4gICAgICA+XG4gICAgICAgIDxjYXRlZ29yeVxuICAgICAgICAgIHYtZm9yPVwiKGNhdGVnb3J5LCBpZHgpIGluIHZpZXcuZmlsdGVyZWRDYXRlZ29yaWVzXCJcbiAgICAgICAgICB2LXNob3c9XCJpbmZpbml0ZVNjcm9sbCB8fCBjYXRlZ29yeSA9PSB2aWV3LmFjdGl2ZUNhdGVnb3J5XCJcbiAgICAgICAgICA6cmVmPVwiJ2NhdGVnb3JpZXNfJyArIGlkeFwiXG4gICAgICAgICAgOmtleT1cImNhdGVnb3J5LmlkXCJcbiAgICAgICAgICA6ZGF0YT1cImRhdGFcIlxuICAgICAgICAgIDppMThuPVwibWVyZ2VkSTE4blwiXG4gICAgICAgICAgOmlkPVwiY2F0ZWdvcnkuaWRcIlxuICAgICAgICAgIDpuYW1lPVwiY2F0ZWdvcnkubmFtZVwiXG4gICAgICAgICAgOmVtb2ppcz1cImNhdGVnb3J5LmVtb2ppc1wiXG4gICAgICAgICAgOmVtb2ppLXByb3BzPVwiZW1vamlQcm9wc1wiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxzbG90XG4gICAgICBuYW1lPVwicHJldmlld1RlbXBsYXRlXCJcbiAgICAgIDpkYXRhPVwiZGF0YVwiXG4gICAgICA6dGl0bGU9XCJ0aXRsZVwiXG4gICAgICA6ZW1vamk9XCJ2aWV3LnByZXZpZXdFbW9qaVwiXG4gICAgICA6aWRsZS1lbW9qaT1cImlkbGVFbW9qaVwiXG4gICAgICA6c2hvdy1za2luLXRvbmVzPVwic2hvd1NraW5Ub25lc1wiXG4gICAgICA6ZW1vamktcHJvcHM9XCJlbW9qaVByb3BzXCJcbiAgICAgIDpza2luLXByb3BzPVwic2tpblByb3BzXCJcbiAgICAgIDpvbi1za2luLWNoYW5nZT1cIm9uU2tpbkNoYW5nZVwiXG4gICAgPlxuICAgICAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtYmFyIGVtb2ppLW1hcnQtYmFyLXByZXZpZXdcIiB2LWlmPVwic2hvd1ByZXZpZXdcIj5cbiAgICAgICAgPHByZXZpZXdcbiAgICAgICAgICA6ZGF0YT1cImRhdGFcIlxuICAgICAgICAgIDp0aXRsZT1cInRpdGxlXCJcbiAgICAgICAgICA6ZW1vamk9XCJ2aWV3LnByZXZpZXdFbW9qaVwiXG4gICAgICAgICAgOmlkbGUtZW1vamk9XCJpZGxlRW1vamlcIlxuICAgICAgICAgIDpzaG93LXNraW4tdG9uZXM9XCJzaG93U2tpblRvbmVzXCJcbiAgICAgICAgICA6ZW1vamktcHJvcHM9XCJlbW9qaVByb3BzXCJcbiAgICAgICAgICA6c2tpbi1wcm9wcz1cInNraW5Qcm9wc1wiXG4gICAgICAgICAgOm9uLXNraW4tY2hhbmdlPVwib25Ta2luQ2hhbmdlXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2xvdD5cbiAgPC9zZWN0aW9uPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCAnLi4vdmVuZG9yL3JhZi1wb2x5ZmlsbCdcbmltcG9ydCBzdG9yZSBmcm9tICcuLi91dGlscy9zdG9yZSdcbmltcG9ydCBmcmVxdWVudGx5IGZyb20gJy4uL3V0aWxzL2ZyZXF1ZW50bHknXG5pbXBvcnQgeyBkZWVwTWVyZ2UsIG1lYXN1cmVTY3JvbGxiYXIgfSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IFBpY2tlclByb3BzIH0gZnJvbSAnLi4vdXRpbHMvc2hhcmVkLXByb3BzJ1xuaW1wb3J0IHsgUGlja2VyVmlldyB9IGZyb20gJy4uL3V0aWxzL3BpY2tlcidcbmltcG9ydCBBbmNob3JzIGZyb20gJy4vYW5jaG9ycy52dWUnXG5pbXBvcnQgQ2F0ZWdvcnkgZnJvbSAnLi9jYXRlZ29yeS52dWUnXG5pbXBvcnQgUHJldmlldyBmcm9tICcuL3ByZXZpZXcudnVlJ1xuaW1wb3J0IFNlYXJjaCBmcm9tICcuL3NlYXJjaC52dWUnXG5cbmNvbnN0IEkxOE4gPSB7XG4gIHNlYXJjaDogJ1NlYXJjaCcsXG4gIG5vdGZvdW5kOiAnTm8gRW1vamkgRm91bmQnLFxuICBjYXRlZ29yaWVzOiB7XG4gICAgc2VhcmNoOiAnU2VhcmNoIFJlc3VsdHMnLFxuICAgIHJlY2VudDogJ0ZyZXF1ZW50bHkgVXNlZCcsXG4gICAgc21pbGV5czogJ1NtaWxleXMgJiBFbW90aW9uJyxcbiAgICBwZW9wbGU6ICdQZW9wbGUgJiBCb2R5JyxcbiAgICBuYXR1cmU6ICdBbmltYWxzICYgTmF0dXJlJyxcbiAgICBmb29kczogJ0Zvb2QgJiBEcmluaycsXG4gICAgYWN0aXZpdHk6ICdBY3Rpdml0eScsXG4gICAgcGxhY2VzOiAnVHJhdmVsICYgUGxhY2VzJyxcbiAgICBvYmplY3RzOiAnT2JqZWN0cycsXG4gICAgc3ltYm9sczogJ1N5bWJvbHMnLFxuICAgIGZsYWdzOiAnRmxhZ3MnLFxuICAgIGN1c3RvbTogJ0N1c3RvbScsXG4gIH0sXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IHtcbiAgICAuLi5QaWNrZXJQcm9wcyxcbiAgICBkYXRhOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBhY3RpdmVTa2luOiB0aGlzLnNraW4gfHwgc3RvcmUuZ2V0KCdza2luJykgfHwgdGhpcy5kZWZhdWx0U2tpbixcbiAgICAgIHZpZXc6IG5ldyBQaWNrZXJWaWV3KHRoaXMpLFxuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBjdXN0b21TdHlsZXMoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB3aWR0aDogdGhpcy5jYWxjdWxhdGVXaWR0aCArICdweCcsXG4gICAgICAgIC4uLnRoaXMucGlja2VyU3R5bGVzLFxuICAgICAgfVxuICAgIH0sXG4gICAgZW1vamlQcm9wcygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5hdGl2ZTogdGhpcy5uYXRpdmUsXG4gICAgICAgIHNraW46IHRoaXMuYWN0aXZlU2tpbixcbiAgICAgICAgc2V0OiB0aGlzLnNldCxcbiAgICAgICAgZW1vamlUb29sdGlwOiB0aGlzLmVtb2ppVG9vbHRpcCxcbiAgICAgICAgZW1vamlTaXplOiB0aGlzLmVtb2ppU2l6ZSxcbiAgICAgICAgc2VsZWN0ZWRFbW9qaTogdGhpcy52aWV3LnByZXZpZXdFbW9qaSxcbiAgICAgICAgc2VsZWN0ZWRFbW9qaUNhdGVnb3J5OiB0aGlzLnZpZXcucHJldmlld0Vtb2ppQ2F0ZWdvcnksXG4gICAgICAgIG9uRW50ZXI6IHRoaXMub25FbW9qaUVudGVyLmJpbmQodGhpcyksXG4gICAgICAgIG9uTGVhdmU6IHRoaXMub25FbW9qaUxlYXZlLmJpbmQodGhpcyksXG4gICAgICAgIG9uQ2xpY2s6IHRoaXMub25FbW9qaUNsaWNrLmJpbmQodGhpcyksXG4gICAgICB9XG4gICAgfSxcbiAgICBza2luUHJvcHMoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBza2luOiB0aGlzLmFjdGl2ZVNraW4sXG4gICAgICB9XG4gICAgfSxcbiAgICBjYWxjdWxhdGVXaWR0aCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnBlckxpbmUgKiAodGhpcy5lbW9qaVNpemUgKyAxMikgKyAxMiArIDIgKyBtZWFzdXJlU2Nyb2xsYmFyKClcbiAgICB9LFxuICAgIC8vIGVtb2ppc1BlclJvdygpIHtcbiAgICAvLyAgIGNvbnN0IGxpc3RFbCA9IHRoaXMuJHJlZnMuc2Nyb2xsQ29udGVudFxuICAgIC8vICAgY29uc3QgZW1vamlFbCA9IGxpc3RFbC5xdWVyeVNlbGVjdG9yKCcuZW1vamktbWFydC1lbW9qaScpXG4gICAgLy8gICByZXR1cm4gTWF0aC5mbG9vcihsaXN0RWwub2Zmc2V0V2lkdGggLyBlbW9qaUVsLm9mZnNldFdpZHRoKVxuICAgIC8vIH0sXG4gICAgZmlsdGVyZWRDYXRlZ29yaWVzKCkge1xuICAgICAgcmV0dXJuIHRoaXMudmlldy5maWx0ZXJlZENhdGVnb3JpZXNcbiAgICB9LFxuICAgIG1lcmdlZEkxOG4oKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmZyZWV6ZShkZWVwTWVyZ2UoSTE4TiwgdGhpcy5pMThuKSlcbiAgICB9LFxuICAgIGlkbGVFbW9qaSgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEuZW1vamkodGhpcy5lbW9qaSlcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAnRGVmYXVsdCBwcmV2aWV3IGVtb2ppIGAnICtcbiAgICAgICAgICAgIHRoaXMuZW1vamkgK1xuICAgICAgICAgICAgJ2AgaXMgbm90IGF2YWlsYWJsZSwgY2hlY2sgdGhlIFBpY2tlciBgZW1vamlgIHByb3BlcnR5JyxcbiAgICAgICAgKVxuICAgICAgICBjb25zb2xlLmVycm9yKGUpXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEuZmlyc3RFbW9qaSgpXG4gICAgICB9XG4gICAgfSxcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIG9uU2Nyb2xsKCkge1xuICAgICAgaWYgKHRoaXMuaW5maW5pdGVTY3JvbGwgJiYgIXRoaXMud2FpdGluZ0ZvclBhaW50KSB7XG4gICAgICAgIHRoaXMud2FpdGluZ0ZvclBhaW50ID0gdHJ1ZVxuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMub25TY3JvbGxQYWludC5iaW5kKHRoaXMpKVxuICAgICAgfVxuICAgIH0sXG4gICAgb25TY3JvbGxQYWludCgpIHtcbiAgICAgIHRoaXMud2FpdGluZ0ZvclBhaW50ID0gZmFsc2VcbiAgICAgIHRoaXMudmlldy5vblNjcm9sbCgpXG4gICAgfSxcbiAgICBvbkFuY2hvckNsaWNrKGNhdGVnb3J5KSB7XG4gICAgICB0aGlzLnZpZXcub25BbmNob3JDbGljayhjYXRlZ29yeSlcbiAgICB9LFxuICAgIG9uU2VhcmNoKHZhbHVlKSB7XG4gICAgICB0aGlzLnZpZXcub25TZWFyY2godmFsdWUpXG4gICAgfSxcbiAgICBvbkVtb2ppRW50ZXIoZW1vamkpIHtcbiAgICAgIHRoaXMudmlldy5vbkVtb2ppRW50ZXIoZW1vamkpXG4gICAgfSxcbiAgICBvbkVtb2ppTGVhdmUoZW1vamkpIHtcbiAgICAgIHRoaXMudmlldy5vbkVtb2ppTGVhdmUoZW1vamkpXG4gICAgfSxcbiAgICBvbkFycm93TGVmdCgkZXZlbnQpIHtcbiAgICAgIGNvbnN0IG9sZElkeCA9IHRoaXMudmlldy5wcmV2aWV3RW1vamlJZHhcbiAgICAgIHRoaXMudmlldy5vbkFycm93TGVmdCgpXG4gICAgICBpZiAoJGV2ZW50ICYmIHRoaXMudmlldy5wcmV2aWV3RW1vamlJZHggIT09IG9sZElkeCkge1xuICAgICAgICAvLyBQcmV2ZW50IGN1cnNvciBtb3ZlbWVudCBpbnNpZGUgdGhlIGlucHV0XG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB9XG4gICAgfSxcbiAgICBvbkFycm93UmlnaHQoKSB7XG4gICAgICB0aGlzLnZpZXcub25BcnJvd1JpZ2h0KClcbiAgICB9LFxuICAgIG9uQXJyb3dEb3duKCkge1xuICAgICAgdGhpcy52aWV3Lm9uQXJyb3dEb3duKClcbiAgICB9LFxuICAgIG9uQXJyb3dVcCgkZXZlbnQpIHtcbiAgICAgIHRoaXMudmlldy5vbkFycm93VXAoKVxuICAgICAgLy8gUHJldmVudCBjdXJzb3IgbW92ZW1lbnQgaW5zaWRlIHRoZSBpbnB1dFxuICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB9LFxuICAgIG9uRW50ZXIoZW1vamkpIHtcbiAgICAgIHRoaXMuJGVtaXQoJ3NlbGVjdCcsIHRoaXMudmlldy5wcmV2aWV3RW1vamkpXG4gICAgICBmcmVxdWVudGx5LmFkZCh0aGlzLnZpZXcucHJldmlld0Vtb2ppKVxuICAgIH0sXG4gICAgb25FbW9qaUNsaWNrKGVtb2ppKSB7XG4gICAgICB0aGlzLiRlbWl0KCdzZWxlY3QnLCBlbW9qaSlcbiAgICAgIGZyZXF1ZW50bHkuYWRkKGVtb2ppKVxuICAgIH0sXG4gICAgb25Ta2luQ2hhbmdlKHNraW4pIHtcbiAgICAgIHRoaXMuYWN0aXZlU2tpbiA9IHNraW5cbiAgICAgIHN0b3JlLnVwZGF0ZSh7IHNraW4gfSlcblxuICAgICAgdGhpcy4kZW1pdCgnc2tpbi1jaGFuZ2UnLCBza2luKVxuICAgIH0sXG4gICAgZ2V0Q2F0ZWdvcnlDb21wb25lbnQoaW5kZXgpIHtcbiAgICAgIGxldCBjb21wb25lbnQgPSB0aGlzLiRyZWZzWydjYXRlZ29yaWVzXycgKyBpbmRleF1cbiAgICAgIGlmIChjb21wb25lbnQgJiYgJzAnIGluIGNvbXBvbmVudCkge1xuICAgICAgICAvLyBWdWUgMiBoYXMgJHJlZnMgdW5kZXIgdi1mb3IgYXMgYW4gYXJyYXkuXG4gICAgICAgIHJldHVybiBjb21wb25lbnRbJzAnXVxuICAgICAgfVxuICAgICAgLy8gVnVlIDMgZG9lcyBub3Qgc3VwcG9ydCAkcmVmcyBhcyBhcnJheS5cbiAgICAgIHJldHVybiBjb21wb25lbnRcbiAgICB9LFxuICB9LFxuICBjb21wb25lbnRzOiB7XG4gICAgQW5jaG9ycyxcbiAgICBDYXRlZ29yeSxcbiAgICBQcmV2aWV3LFxuICAgIFNlYXJjaCxcbiAgfSxcbn1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IHJvbGU9XCJ0YWJsaXN0XCIgY2xhc3M9XCJlbW9qaS1tYXJ0LWFuY2hvcnNcIj5cbiAgICA8YnV0dG9uXG4gICAgICB2LWZvcj1cImNhdGVnb3J5IGluIGNhdGVnb3JpZXNcIlxuICAgICAgcm9sZT1cInRhYlwiXG4gICAgICA6YXJpYS1sYWJlbD1cImNhdGVnb3J5Lm5hbWVcIlxuICAgICAgOmFyaWEtc2VsZWN0ZWQ9XCJjYXRlZ29yeS5pZCA9PSBhY3RpdmVDYXRlZ29yeS5pZFwiXG4gICAgICA6a2V5PVwiY2F0ZWdvcnkuaWRcIlxuICAgICAgOmNsYXNzPVwie1xuICAgICAgICAnZW1vamktbWFydC1hbmNob3InOiB0cnVlLFxuICAgICAgICAnZW1vamktbWFydC1hbmNob3Itc2VsZWN0ZWQnOiBjYXRlZ29yeS5pZCA9PSBhY3RpdmVDYXRlZ29yeS5pZCxcbiAgICAgIH1cIlxuICAgICAgOnN0eWxlPVwieyBjb2xvcjogY2F0ZWdvcnkuaWQgPT0gYWN0aXZlQ2F0ZWdvcnkuaWQgPyBjb2xvciA6ICcnIH1cIlxuICAgICAgOmRhdGEtdGl0bGU9XCJpMThuLmNhdGVnb3JpZXNbY2F0ZWdvcnkuaWRdXCJcbiAgICAgIEBjbGljaz1cIiRlbWl0KCdjbGljaycsIGNhdGVnb3J5KVwiXG4gICAgPlxuICAgICAgPGRpdiBhcmlhLWhpZGRlbj1cInRydWVcIiB2LWh0bWw9XCJzdmdzW2NhdGVnb3J5LmlkXVwiIC8+XG4gICAgICA8c3BhblxuICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICBjbGFzcz1cImVtb2ppLW1hcnQtYW5jaG9yLWJhclwiXG4gICAgICAgIDpzdHlsZT1cInsgYmFja2dyb3VuZENvbG9yOiBjb2xvciB9XCJcbiAgICAgID48L3NwYW4+XG4gICAgPC9idXR0b24+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBzdmdzIGZyb20gJy4uL3N2Z3MnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IHtcbiAgICBpMThuOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICAgIGNvbG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgfSxcbiAgICBjYXRlZ29yaWVzOiB7XG4gICAgICB0eXBlOiBBcnJheSxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgYWN0aXZlQ2F0ZWdvcnk6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIGRlZmF1bHQoKSB7XG4gICAgICAgIHJldHVybiB7fVxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBjcmVhdGVkKCkge1xuICAgIHRoaXMuc3ZncyA9IHN2Z3NcbiAgfSxcbn1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8c2VjdGlvblxuICAgIDpjbGFzcz1cIntcbiAgICAgICdlbW9qaS1tYXJ0LWNhdGVnb3J5JzogdHJ1ZSxcbiAgICAgICdlbW9qaS1tYXJ0LW5vLXJlc3VsdHMnOiAhaGFzUmVzdWx0cyxcbiAgICB9XCJcbiAgICA6YXJpYS1sYWJlbD1cImkxOG4uY2F0ZWdvcmllc1tpZF1cIlxuICAgIHYtaWY9XCJpc1Zpc2libGUgJiYgKGlzU2VhcmNoIHx8IGhhc1Jlc3VsdHMpXCJcbiAgPlxuICAgIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LWNhdGVnb3J5LWxhYmVsXCI+XG4gICAgICA8aDMgY2xhc3M9XCJlbW9qaS1tYXJ0LWNhdGVnb3J5LWxhYmVsXCI+e3sgaTE4bi5jYXRlZ29yaWVzW2lkXSB9fTwvaDM+XG4gICAgPC9kaXY+XG5cbiAgICA8dGVtcGxhdGUgdi1mb3I9XCJ7IGVtb2ppT2JqZWN0LCBlbW9qaVZpZXcgfSBpbiBlbW9qaU9iamVjdHNcIj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgdi1pZj1cImVtb2ppVmlldy5jYW5SZW5kZXJcIlxuICAgICAgICA6YXJpYS1sYWJlbD1cImVtb2ppVmlldy5hcmlhTGFiZWxcIlxuICAgICAgICByb2xlPVwib3B0aW9uXCJcbiAgICAgICAgYXJpYS1zZWxlY3RlZD1cImZhbHNlXCJcbiAgICAgICAgYXJpYS1wb3NpbnNldD1cIjFcIlxuICAgICAgICBhcmlhLXNldHNpemU9XCIxODEyXCJcbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIDpkYXRhLXRpdGxlPVwiZW1vamlPYmplY3Quc2hvcnRfbmFtZVwiXG4gICAgICAgIDprZXk9XCJlbW9qaU9iamVjdC5pZFwiXG4gICAgICAgIDp0aXRsZT1cImVtb2ppVmlldy50aXRsZVwiXG4gICAgICAgIGNsYXNzPVwiZW1vamktbWFydC1lbW9qaVwiXG4gICAgICAgIDpjbGFzcz1cImFjdGl2ZUNsYXNzKGVtb2ppT2JqZWN0KVwiXG4gICAgICAgIEBtb3VzZWVudGVyPVwiZW1vamlQcm9wcy5vbkVudGVyKGVtb2ppVmlldy5nZXRFbW9qaSgpKVwiXG4gICAgICAgIEBtb3VzZWxlYXZlPVwiZW1vamlQcm9wcy5vbkxlYXZlKGVtb2ppVmlldy5nZXRFbW9qaSgpKVwiXG4gICAgICAgIEBjbGljaz1cImVtb2ppUHJvcHMub25DbGljayhlbW9qaVZpZXcuZ2V0RW1vamkoKSlcIlxuICAgICAgPlxuICAgICAgICA8c3BhbiA6Y2xhc3M9XCJlbW9qaVZpZXcuY3NzQ2xhc3NcIiA6c3R5bGU9XCJlbW9qaVZpZXcuY3NzU3R5bGVcIj57e1xuICAgICAgICAgIGVtb2ppVmlldy5jb250ZW50XG4gICAgICAgIH19PC9zcGFuPlxuICAgICAgPC9idXR0b24+XG4gICAgPC90ZW1wbGF0ZT5cblxuICAgIDxkaXYgdi1pZj1cIiFoYXNSZXN1bHRzXCI+XG4gICAgICA8ZW1vamlcbiAgICAgICAgOmRhdGE9XCJkYXRhXCJcbiAgICAgICAgZW1vamk9XCJzbGV1dGhfb3Jfc3B5XCJcbiAgICAgICAgOm5hdGl2ZT1cImVtb2ppUHJvcHMubmF0aXZlXCJcbiAgICAgICAgOnNraW49XCJlbW9qaVByb3BzLnNraW5cIlxuICAgICAgICA6c2V0PVwiZW1vamlQcm9wcy5zZXRcIlxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LW5vLXJlc3VsdHMtbGFiZWxcIj57eyBpMThuLm5vdGZvdW5kIH19PC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvc2VjdGlvbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBFbW9qaVZpZXcgfSBmcm9tICcuLi91dGlscy9lbW9qaS1kYXRhJ1xuaW1wb3J0IEVtb2ppIGZyb20gJy4vRW1vamkudnVlJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiB7XG4gICAgZGF0YToge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICBpMThuOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICAgIGlkOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICAgIG5hbWU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgZW1vamlzOiB7XG4gICAgICB0eXBlOiBBcnJheSxcbiAgICB9LFxuICAgIGVtb2ppUHJvcHM6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBhY3RpdmVDbGFzczogZnVuY3Rpb24oZW1vamlPYmplY3QpIHtcbiAgICAgIGlmICghdGhpcy5lbW9qaVByb3BzLnNlbGVjdGVkRW1vamkpIHtcbiAgICAgICAgcmV0dXJuICcnXG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuZW1vamlQcm9wcy5zZWxlY3RlZEVtb2ppQ2F0ZWdvcnkpIHtcbiAgICAgICAgcmV0dXJuICcnXG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuZW1vamlQcm9wcy5zZWxlY3RlZEVtb2ppLmlkID09IGVtb2ppT2JqZWN0LmlkICYmXG4gICAgICAgIHRoaXMuZW1vamlQcm9wcy5zZWxlY3RlZEVtb2ppQ2F0ZWdvcnkuaWQgPT0gdGhpcy5pZFxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiAnZW1vamktbWFydC1lbW9qaS1zZWxlY3RlZCdcbiAgICAgIH1cbiAgICAgIHJldHVybiAnJ1xuICAgIH0sXG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgaXNWaXNpYmxlKCkge1xuICAgICAgcmV0dXJuICEhdGhpcy5lbW9qaXNcbiAgICB9LFxuICAgIGlzU2VhcmNoKCkge1xuICAgICAgcmV0dXJuIHRoaXMubmFtZSA9PSAnU2VhcmNoJ1xuICAgIH0sXG4gICAgaGFzUmVzdWx0cygpIHtcbiAgICAgIHJldHVybiB0aGlzLmVtb2ppcy5sZW5ndGggPiAwXG4gICAgfSxcbiAgICBlbW9qaU9iamVjdHMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5lbW9qaXMubWFwKChlbW9qaSkgPT4ge1xuICAgICAgICBsZXQgZW1vamlPYmplY3QgPSBlbW9qaVxuICAgICAgICBsZXQgZW1vamlWaWV3ID0gbmV3IEVtb2ppVmlldyhcbiAgICAgICAgICBlbW9qaSxcbiAgICAgICAgICB0aGlzLmVtb2ppUHJvcHMuc2tpbixcbiAgICAgICAgICB0aGlzLmVtb2ppUHJvcHMuc2V0LFxuICAgICAgICAgIHRoaXMuZW1vamlQcm9wcy5uYXRpdmUsXG4gICAgICAgICAgdGhpcy5lbW9qaVByb3BzLmZhbGxiYWNrLFxuICAgICAgICAgIHRoaXMuZW1vamlQcm9wcy5lbW9qaVRvb2x0aXAsXG4gICAgICAgICAgdGhpcy5lbW9qaVByb3BzLmVtb2ppU2l6ZSxcbiAgICAgICAgKVxuICAgICAgICByZXR1cm4geyBlbW9qaU9iamVjdCwgZW1vamlWaWV3IH1cbiAgICAgIH0pXG4gICAgfSxcbiAgfSxcbiAgY29tcG9uZW50czoge1xuICAgIEVtb2ppLFxuICB9LFxufVxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG5cbjxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LXByZXZpZXdcIj5cbiAgPHRlbXBsYXRlIHYtaWY9XCJlbW9qaVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtcHJldmlldy1lbW9qaVwiPlxuICAgICAgICA8ZW1vamlcbiAgICAgICAgICA6ZGF0YT1cImRhdGFcIlxuICAgICAgICAgIDplbW9qaT1cImVtb2ppXCJcbiAgICAgICAgICA6bmF0aXZlPVwiZW1vamlQcm9wcy5uYXRpdmVcIlxuICAgICAgICAgIDpza2luPVwiZW1vamlQcm9wcy5za2luXCJcbiAgICAgICAgICA6c2V0PVwiZW1vamlQcm9wcy5zZXRcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LXByZXZpZXctZGF0YVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1wcmV2aWV3LW5hbWVcIj57eyBlbW9qaS5uYW1lIH19PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LXByZXZpZXctc2hvcnRuYW1lc1wiPlxuICAgICAgICAgIDxzcGFuIHYtZm9yPVwic2hvcnROYW1lIGluIGVtb2ppU2hvcnROYW1lc1wiIDprZXk9XCJzaG9ydE5hbWVcIiBjbGFzcz1cImVtb2ppLW1hcnQtcHJldmlldy1zaG9ydG5hbWVcIj46e3sgc2hvcnROYW1lIH19Ojwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LXByZXZpZXctZW1vdGljb25zXCI+XG4gICAgICAgICAgPHNwYW4gdi1mb3I9XCJlbW90aWNvbiBpbiBlbW9qaUVtb3RpY29uc1wiIDprZXk9XCJlbW90aWNvblwiIGNsYXNzPVwiZW1vamktbWFydC1wcmV2aWV3LWVtb3RpY29uXCI+e3sgZW1vdGljb24gfX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gIDwvdGVtcGxhdGU+XG5cbiAgPHRlbXBsYXRlIHYtZWxzZT5cbiAgICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1wcmV2aWV3LWVtb2ppXCI+XG4gICAgICA8ZW1vamlcbiAgICAgICAgOmRhdGE9XCJkYXRhXCJcbiAgICAgICAgOmVtb2ppPVwiaWRsZUVtb2ppXCJcbiAgICAgICAgOm5hdGl2ZT1cImVtb2ppUHJvcHMubmF0aXZlXCJcbiAgICAgICAgOnNraW49XCJlbW9qaVByb3BzLnNraW5cIlxuICAgICAgICA6c2V0PVwiZW1vamlQcm9wcy5zZXRcIlxuICAgICAgLz5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LXByZXZpZXctZGF0YVwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJlbW9qaS1tYXJ0LXRpdGxlLWxhYmVsXCI+e3sgdGl0bGUgfX08L3NwYW4+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IHYtaWY9XCJzaG93U2tpblRvbmVzXCIgY2xhc3M9XCJlbW9qaS1tYXJ0LXByZXZpZXctc2tpbnNcIj5cbiAgICAgIDxza2lucyA6c2tpbj1cInNraW5Qcm9wcy5za2luXCIgQGNoYW5nZT1cIm9uU2tpbkNoYW5nZSgkZXZlbnQpXCIgLz5cbiAgICA8L2Rpdj5cbiAgPC90ZW1wbGF0ZT5cbjwvZGl2PlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5pbXBvcnQgRW1vamkgZnJvbSAnLi9FbW9qaS52dWUnXG5pbXBvcnQgU2tpbnMgZnJvbSAnLi9za2lucy52dWUnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IHtcbiAgICBkYXRhOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgdGl0bGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBlbW9qaToge1xuICAgICAgdHlwZTogW1N0cmluZywgT2JqZWN0XVxuICAgIH0sXG4gICAgaWRsZUVtb2ppOiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBPYmplY3RdLFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIHNob3dTa2luVG9uZXM6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiB0cnVlXG4gICAgfSxcbiAgICBlbW9qaVByb3BzOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgc2tpblByb3BzOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgb25Ta2luQ2hhbmdlOiB7XG4gICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGVtb2ppRGF0YSgpIHtcbiAgICAgIGlmICh0aGlzLmVtb2ppKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVtb2ppXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4ge31cbiAgICAgIH1cbiAgICB9LFxuICAgIGVtb2ppU2hvcnROYW1lcygpIHtcbiAgICAgIHJldHVybiB0aGlzLmVtb2ppRGF0YS5zaG9ydF9uYW1lc1xuICAgIH0sXG4gICAgZW1vamlFbW90aWNvbnMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5lbW9qaURhdGEuZW1vdGljb25zXG4gICAgfVxuICB9LFxuICBjb21wb25lbnRzOiB7XG4gICAgRW1vamksXG4gICAgU2tpbnNcbiAgfVxufVxuXG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtc2VhcmNoXCI+XG4gICAgPGlucHV0XG4gICAgICB0eXBlPVwidGV4dFwiXG4gICAgICA6cGxhY2Vob2xkZXI9XCJpMThuLnNlYXJjaFwiXG4gICAgICByb2xlPVwidGV4dGJveFwiXG4gICAgICBhcmlhLWF1dG9jb21wbGV0ZT1cImxpc3RcIlxuICAgICAgYXJpYS1vd25zPVwiZW1vamktbWFydC1saXN0XCJcbiAgICAgIGFyaWEtbGFiZWw9XCJTZWFyY2ggZm9yIGFuIGVtb2ppXCJcbiAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJlbW9qaS1tYXJ0LXNlYXJjaC1kZXNjcmlwdGlvblwiXG4gICAgICBAa2V5ZG93bi5sZWZ0PVwiKCRldmVudCkgPT4gJGVtaXQoJ2Fycm93TGVmdCcsICRldmVudClcIlxuICAgICAgQGtleWRvd24ucmlnaHQ9XCIoKSA9PiAkZW1pdCgnYXJyb3dSaWdodCcpXCJcbiAgICAgIEBrZXlkb3duLmRvd249XCIoKSA9PiAkZW1pdCgnYXJyb3dEb3duJylcIlxuICAgICAgQGtleWRvd24udXA9XCIoJGV2ZW50KSA9PiAkZW1pdCgnYXJyb3dVcCcsICRldmVudClcIlxuICAgICAgQGtleWRvd24uZW50ZXI9XCIoKSA9PiAkZW1pdCgnZW50ZXInKVwiXG4gICAgICB2LW1vZGVsPVwidmFsdWVcIlxuICAgIC8+XG4gICAgPHNwYW4gY2xhc3M9XCJoaWRkZW5cIiBpZD1cImVtb2ppLXBpY2tlci1zZWFyY2gtZGVzY3JpcHRpb25cIlxuICAgICAgPlVzZSB0aGUgbGVmdCwgcmlnaHQsIHVwIGFuZCBkb3duIGFycm93IGtleXMgdG8gbmF2aWdhdGUgdGhlIGVtb2ppIHNlYXJjaFxuICAgICAgcmVzdWx0cy48L3NwYW5cbiAgICA+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IHtcbiAgICBkYXRhOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICAgIGkxOG46IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgYXV0b0ZvY3VzOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgfSxcbiAgICBvblNlYXJjaDoge1xuICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICAgIG9uQXJyb3dMZWZ0OiB7XG4gICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICB9LFxuICAgIG9uQXJyb3dSaWdodDoge1xuICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgfSxcbiAgICBvbkFycm93RG93bjoge1xuICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgfSxcbiAgICBvbkFycm93VXA6IHtcbiAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgIH0sXG4gICAgb25FbnRlcjoge1xuICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgfSxcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6ICcnLFxuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBlbW9qaUluZGV4KCkge1xuICAgICAgcmV0dXJuIHRoaXMuZGF0YVxuICAgIH0sXG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgdmFsdWUoKSB7XG4gICAgICB0aGlzLiRlbWl0KCdzZWFyY2gnLCB0aGlzLnZhbHVlKVxuICAgIH0sXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBjbGVhcigpIHtcbiAgICAgIHRoaXMudmFsdWUgPSAnJ1xuICAgIH0sXG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgbGV0ICRpbnB1dCA9IHRoaXMuJGVsLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JylcblxuICAgIGlmICh0aGlzLmF1dG9Gb2N1cykge1xuICAgICAgJGlucHV0LmZvY3VzKClcbiAgICB9XG4gIH0sXG59XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cblxuPGRpdiA6Y2xhc3M9XCJ7ICdlbW9qaS1tYXJ0LXNraW4tc3dhdGNoZXMnOiB0cnVlLCAnZW1vamktbWFydC1za2luLXN3YXRjaGVzLW9wZW5lZCc6IG9wZW5lZCB9XCI+XG4gIDxzcGFuIHYtZm9yPVwic2tpblRvbmUgaW4gNlwiIDprZXk9XCJza2luVG9uZVwiIDpjbGFzcz1cInsgJ2Vtb2ppLW1hcnQtc2tpbi1zd2F0Y2gnOiB0cnVlLCAnZW1vamktbWFydC1za2luLXN3YXRjaC1zZWxlY3RlZCc6IHNraW4gPT0gc2tpblRvbmUgfVwiPlxuICAgIDxzcGFuIDpjbGFzcz1cIidlbW9qaS1tYXJ0LXNraW4gZW1vamktbWFydC1za2luLXRvbmUtJyArIHNraW5Ub25lXCIgQGNsaWNrPVwib25DbGljayhza2luVG9uZSlcIj48L3NwYW4+XG4gIDwvc3Bhbj5cbjwvZGl2PlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiB7XG4gICAgc2tpbjoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9XG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9wZW5lZDogZmFsc2VcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBvbkNsaWNrKHNraW5Ub25lKSB7XG4gICAgICBpZiAodGhpcy5vcGVuZWQpIHtcbiAgICAgICAgaWYgKHNraW5Ub25lICE9IHRoaXMuc2tpbikge1xuICAgICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIHNraW5Ub25lKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMub3BlbmVkID0gIXRoaXMub3BlbmVkXG4gICAgfVxuICB9XG59XG5cbjwvc2NyaXB0PlxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBBbmNob3JzIH0gZnJvbSAnLi9hbmNob3JzLnZ1ZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2F0ZWdvcnkgfSBmcm9tICcuL2NhdGVnb3J5LnZ1ZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUHJldmlldyB9IGZyb20gJy4vcHJldmlldy52dWUnXG5leHBvcnQgeyBkZWZhdWx0IGFzIFNlYXJjaCB9IGZyb20gJy4vc2VhcmNoLnZ1ZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2tpbnMgfSBmcm9tICcuL3NraW5zLnZ1ZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRW1vamkgfSBmcm9tICcuL0Vtb2ppLnZ1ZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUGlja2VyIH0gZnJvbSAnLi9QaWNrZXIudnVlJ1xuIiwiY29uc3QgX1N0cmluZyA9IFN0cmluZ1xuXG5leHBvcnQgZGVmYXVsdCBfU3RyaW5nLmZyb21Db2RlUG9pbnQgfHxcbiAgZnVuY3Rpb24gc3RyaW5nRnJvbUNvZGVQb2ludCgpIHtcbiAgICB2YXIgTUFYX1NJWkUgPSAweDQwMDBcbiAgICB2YXIgY29kZVVuaXRzID0gW11cbiAgICB2YXIgaGlnaFN1cnJvZ2F0ZVxuICAgIHZhciBsb3dTdXJyb2dhdGVcbiAgICB2YXIgaW5kZXggPSAtMVxuICAgIHZhciBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgaWYgKCFsZW5ndGgpIHtcbiAgICAgIHJldHVybiAnJ1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gJydcbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgdmFyIGNvZGVQb2ludCA9IE51bWJlcihhcmd1bWVudHNbaW5kZXhdKVxuICAgICAgaWYgKFxuICAgICAgICAhaXNGaW5pdGUoY29kZVBvaW50KSB8fCAvLyBgTmFOYCwgYCtJbmZpbml0eWAsIG9yIGAtSW5maW5pdHlgXG4gICAgICAgIGNvZGVQb2ludCA8IDAgfHwgLy8gbm90IGEgdmFsaWQgVW5pY29kZSBjb2RlIHBvaW50XG4gICAgICAgIGNvZGVQb2ludCA+IDB4MTBmZmZmIHx8IC8vIG5vdCBhIHZhbGlkIFVuaWNvZGUgY29kZSBwb2ludFxuICAgICAgICBNYXRoLmZsb29yKGNvZGVQb2ludCkgIT0gY29kZVBvaW50IC8vIG5vdCBhbiBpbnRlZ2VyXG4gICAgICApIHtcbiAgICAgICAgdGhyb3cgUmFuZ2VFcnJvcignSW52YWxpZCBjb2RlIHBvaW50OiAnICsgY29kZVBvaW50KVxuICAgICAgfVxuICAgICAgaWYgKGNvZGVQb2ludCA8PSAweGZmZmYpIHtcbiAgICAgICAgLy8gQk1QIGNvZGUgcG9pbnRcbiAgICAgICAgY29kZVVuaXRzLnB1c2goY29kZVBvaW50KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQXN0cmFsIGNvZGUgcG9pbnQ7IHNwbGl0IGluIHN1cnJvZ2F0ZSBoYWx2ZXNcbiAgICAgICAgLy8gaHR0cDovL21hdGhpYXNieW5lbnMuYmUvbm90ZXMvamF2YXNjcmlwdC1lbmNvZGluZyNzdXJyb2dhdGUtZm9ybXVsYWVcbiAgICAgICAgY29kZVBvaW50IC09IDB4MTAwMDBcbiAgICAgICAgaGlnaFN1cnJvZ2F0ZSA9IChjb2RlUG9pbnQgPj4gMTApICsgMHhkODAwXG4gICAgICAgIGxvd1N1cnJvZ2F0ZSA9IChjb2RlUG9pbnQgJSAweDQwMCkgKyAweGRjMDBcbiAgICAgICAgY29kZVVuaXRzLnB1c2goaGlnaFN1cnJvZ2F0ZSwgbG93U3Vycm9nYXRlKVxuICAgICAgfVxuICAgICAgaWYgKGluZGV4ICsgMSA9PT0gbGVuZ3RoIHx8IGNvZGVVbml0cy5sZW5ndGggPiBNQVhfU0laRSkge1xuICAgICAgICByZXN1bHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLCBjb2RlVW5pdHMpXG4gICAgICAgIGNvZGVVbml0cy5sZW5ndGggPSAwXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfVxuIiwiY29uc3QgU1ZHcyA9IHtcbiAgYWN0aXZpdHk6IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+PHBhdGggZD1cIk0xMiAwQzUuMzczIDAgMCA1LjM3MiAwIDEyYzAgNi42MjcgNS4zNzMgMTIgMTIgMTIgNi42MjggMCAxMi01LjM3MyAxMi0xMiAwLTYuNjI4LTUuMzcyLTEyLTEyLTEybTkuOTQ5IDExSDE3LjA1Yy4yMjQtMi41MjcgMS4yMzItNC43NzMgMS45NjgtNi4xMTNBOS45NjYgOS45NjYgMCAwIDEgMjEuOTQ5IDExTTEzIDExVjIuMDUxYTkuOTQ1IDkuOTQ1IDAgMCAxIDQuNDMyIDEuNTY0Yy0uODU4IDEuNDkxLTIuMTU2IDQuMjItMi4zOTIgNy4zODVIMTN6bS0yIDBIOC45NjFjLS4yMzgtMy4xNjUtMS41MzYtNS44OTQtMi4zOTMtNy4zODVBOS45NSA5Ljk1IDAgMCAxIDExIDIuMDUxVjExem0wIDJ2OC45NDlhOS45MzcgOS45MzcgMCAwIDEtNC40MzItMS41NjRjLjg1Ny0xLjQ5MiAyLjE1NS00LjIyMSAyLjM5My03LjM4NUgxMXptNC4wNCAwYy4yMzYgMy4xNjQgMS41MzQgNS44OTMgMi4zOTIgNy4zODVBOS45MiA5LjkyIDAgMCAxIDEzIDIxLjk0OVYxM2gyLjA0ek00Ljk4MiA0Ljg4N0M1LjcxOCA2LjIyNyA2LjcyNiA4LjQ3MyA2Ljk1MSAxMWgtNC45YTkuOTc3IDkuOTc3IDAgMCAxIDIuOTMxLTYuMTEzTTIuMDUxIDEzaDQuOWMtLjIyNiAyLjUyNy0xLjIzMyA0Ljc3MS0xLjk2OSA2LjExM0E5Ljk3MiA5Ljk3MiAwIDAgMSAyLjA1MSAxM20xNi45NjcgNi4xMTNjLS43MzUtMS4zNDItMS43NDQtMy41ODYtMS45NjgtNi4xMTNoNC44OTlhOS45NjEgOS45NjEgMCAwIDEtMi45MzEgNi4xMTNcIi8+PC9zdmc+YCxcblxuICBjdXN0b206IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+PGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDIuMDAwMDAwLCAxLjAwMDAwMClcIj48cmVjdCBpZD1cIlJlY3RhbmdsZVwiIHg9XCI4XCIgeT1cIjBcIiB3aWR0aD1cIjNcIiBoZWlnaHQ9XCIyMVwiIHJ4PVwiMS41XCI+PC9yZWN0PjxyZWN0IGlkPVwiUmVjdGFuZ2xlXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDkuODQzLCAxMC41NDkpIHJvdGF0ZSg2MCkgdHJhbnNsYXRlKC05Ljg0MywgLTEwLjU0OSkgXCIgeD1cIjguMzQzXCIgeT1cIjAuMDQ5XCIgd2lkdGg9XCIzXCIgaGVpZ2h0PVwiMjFcIiByeD1cIjEuNVwiPjwvcmVjdD48cmVjdCBpZD1cIlJlY3RhbmdsZVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg5Ljg0MywgMTAuNTQ5KSByb3RhdGUoLTYwKSB0cmFuc2xhdGUoLTkuODQzLCAtMTAuNTQ5KSBcIiB4PVwiOC4zNDNcIiB5PVwiMC4wNDlcIiB3aWR0aD1cIjNcIiBoZWlnaHQ9XCIyMVwiIHJ4PVwiMS41XCI+PC9yZWN0PjwvZz48L3N2Zz5gLFxuXG4gIGZsYWdzOiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiPjxwYXRoIGQ9XCJNMCAwbDYuMDg0IDI0SDhMMS45MTYgMHpNMjEgNWgtNGwtMS00SDRsMyAxMmgzbDEgNGgxM0wyMSA1ek02LjU2MyAzaDcuODc1bDIgOEg4LjU2M2wtMi04em04LjgzMiAxMGwtMi44NTYgMS45MDRMMTIuMDYzIDEzaDMuMzMyek0xOSAxM2wtMS41LTZoMS45MzhsMiA4SDE2bDMtMnpcIi8+PC9zdmc+YCxcblxuICBmb29kczogYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj48cGF0aCBkPVwiTTE3IDQuOTc4Yy0xLjgzOCAwLTIuODc2LjM5Ni0zLjY4LjkzNC41MTMtMS4xNzIgMS43NjgtMi45MzQgNC42OC0yLjkzNGExIDEgMCAwIDAgMC0yYy0yLjkyMSAwLTQuNjI5IDEuMzY1LTUuNTQ3IDIuNTEyLS4wNjQuMDc4LS4xMTkuMTYyLS4xOC4yNDRDMTEuNzMgMS44MzggMTAuNzk4LjAyMyA5LjIwNy4wMjMgOC41NzkuMDIyIDcuODUuMzA2IDcgLjk3OCA1LjAyNyAyLjU0IDUuMzI5IDMuOTAyIDYuNDkyIDQuOTk5IDMuNjA5IDUuMjIyIDAgNy4zNTIgMCAxMi45NjljMCA0LjU4MiA0Ljk2MSAxMS4wMDkgOSAxMS4wMDkgMS45NzUgMCAyLjM3MS0uNDg2IDMtMSAuNjI5LjUxNCAxLjAyNSAxIDMgMSA0LjAzOSAwIDktNi40MTggOS0xMSAwLTUuOTUzLTQuMDU1LTgtNy04TTguMjQyIDIuNTQ2Yy42NDEtLjUwOC45NDMtLjUyMy45NjUtLjUyMy40MjYuMTY5Ljk3NSAxLjQwNSAxLjM1NyAzLjA1NS0xLjUyNy0uNjI5LTIuNzQxLTEuMzUyLTIuOTgtMS44NDYuMDU5LS4xMTIuMjQxLS4zNTYuNjU4LS42ODZNMTUgMjEuOTc4Yy0xLjA4IDAtMS4yMS0uMTA5LTEuNTU5LS40MDJsLS4xNzYtLjE0NmMtLjM2Ny0uMzAyLS44MTYtLjQ1Mi0xLjI2Ni0uNDUycy0uODk4LjE1LTEuMjY2LjQ1MmwtLjE3Ni4xNDZjLS4zNDcuMjkyLS40NzcuNDAyLTEuNTU3LjQwMi0yLjgxMyAwLTctNS4zODktNy05LjAwOSAwLTUuODIzIDQuNDg4LTUuOTkxIDUtNS45OTEgMS45MzkgMCAyLjQ4NC40NzEgMy4zODcgMS4yNTFsLjMyMy4yNzZhMS45OTUgMS45OTUgMCAwIDAgMi41OCAwbC4zMjMtLjI3NmMuOTAyLS43OCAxLjQ0Ny0xLjI1MSAzLjM4Ny0xLjI1MS41MTIgMCA1IC4xNjggNSA2IDAgMy42MTctNC4xODcgOS03IDlcIi8+PC9zdmc+YCxcblxuICBuYXR1cmU6IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+PHBhdGggZD1cIk0xNS41IDhhMS41IDEuNSAwIDEgMCAuMDAxIDMuMDAxQTEuNSAxLjUgMCAwIDAgMTUuNSA4TTguNSA4YTEuNSAxLjUgMCAxIDAgLjAwMSAzLjAwMUExLjUgMS41IDAgMCAwIDguNSA4XCIvPjxwYXRoIGQ9XCJNMTguOTMzIDBoLS4wMjdjLS45NyAwLTIuMTM4Ljc4Ny0zLjAxOCAxLjQ5Ny0xLjI3NC0uMzc0LTIuNjEyLS41MS0zLjg4Ny0uNTEtMS4yODUgMC0yLjYxNi4xMzMtMy44NzQuNTE3QzcuMjQ1Ljc5IDYuMDY5IDAgNS4wOTMgMGgtLjAyN0MzLjM1MiAwIC4wNyAyLjY3LjAwMiA3LjAyNmMtLjAzOSAyLjQ3OS4yNzYgNC4yMzggMS4wNCA1LjAxMy4yNTQuMjU4Ljg4Mi42NzcgMS4yOTUuODgyLjE5MSAzLjE3Ny45MjIgNS4yMzggMi41MzYgNi4zOC44OTcuNjM3IDIuMTg3Ljk0OSAzLjIgMS4xMDJDOC4wNCAyMC42IDggMjAuNzk1IDggMjFjMCAxLjc3MyAyLjM1IDMgNCAzIDEuNjQ4IDAgNC0xLjIyNyA0LTMgMC0uMjAxLS4wMzgtLjM5My0uMDcyLS41ODYgMi41NzMtLjM4NSA1LjQzNS0xLjg3NyA1LjkyNS03LjU4Ny4zOTYtLjIyLjg4Ny0uNTY4IDEuMTA0LS43ODguNzYzLS43NzQgMS4wNzktMi41MzQgMS4wNC01LjAxM0MyMy45MjkgMi42NyAyMC42NDYgMCAxOC45MzMgME0zLjIyMyA5LjEzNWMtLjIzNy4yODEtLjgzNyAxLjE1NS0uODg0IDEuMjM4LS4xNS0uNDEtLjM2OC0xLjM0OS0uMzM3LTMuMjkxLjA1MS0zLjI4MSAyLjQ3OC00Ljk3MiAzLjA5MS01LjAzMS4yNTYuMDE1LjczMS4yNyAxLjI2NS42NDYtMS4xMSAxLjE3MS0yLjI3NSAyLjkxNS0yLjM1MiA1LjEyNS0uMTMzLjU0Ni0uMzk4Ljg1OC0uNzgzIDEuMzEzTTEyIDIyYy0uOTAxIDAtMS45NTQtLjY5My0yLTEgMC0uNjU0LjQ3NS0xLjIzNiAxLTEuNjAyVjIwYTEgMSAwIDEgMCAyIDB2LS42MDJjLjUyNC4zNjUgMSAuOTQ3IDEgMS42MDItLjA0Ni4zMDctMS4wOTkgMS0yIDFtMy0zLjQ4di4wMmE0Ljc1MiA0Ljc1MiAwIDAgMC0xLjI2Mi0xLjAyYzEuMDkyLS41MTYgMi4yMzktMS4zMzQgMi4yMzktMi4yMTcgMC0xLjg0Mi0xLjc4MS0yLjE5NS0zLjk3Ny0yLjE5NS0yLjE5NiAwLTMuOTc4LjM1NC0zLjk3OCAyLjE5NSAwIC44ODMgMS4xNDggMS43MDEgMi4yMzggMi4yMTdBNC44IDQuOCAwIDAgMCA5IDE4LjUzOXYtLjAyNWMtMS0uMDc2LTIuMTgyLS4yODEtMi45NzMtLjg0Mi0xLjMwMS0uOTItMS44MzgtMy4wNDUtMS44NTMtNi40NzhsLjAyMy0uMDQxYy40OTYtLjgyNiAxLjQ5LTEuNDUgMS44MDQtMy4xMDIgMC0yLjA0NyAxLjM1Ny0zLjYzMSAyLjM2Mi00LjUyMkM5LjM3IDMuMTc4IDEwLjU1NSAzIDExLjk0OCAzYzEuNDQ3IDAgMi42ODUuMTkyIDMuNzMzLjU3IDEgLjkgMi4zMTYgMi40NjUgMi4zMTYgNC40OC4zMTMgMS42NTEgMS4zMDcgMi4yNzUgMS44MDMgMy4xMDIuMDM1LjA1OC4wNjguMTE3LjEwMi4xNzgtLjA1OSA1Ljk2Ny0xLjk0OSA3LjAxLTQuOTAyIDcuMTltNi42MjgtOC4yMDJjLS4wMzctLjA2NS0uMDc0LS4xMy0uMTEzLS4xOTVhNy41ODcgNy41ODcgMCAwIDAtLjczOS0uOTg3Yy0uMzg1LS40NTUtLjY0OC0uNzY4LS43ODItMS4zMTMtLjA3Ni0yLjIwOS0xLjI0MS0zLjk1NC0yLjM1My01LjEyNC41MzEtLjM3NiAxLjAwNC0uNjMgMS4yNjEtLjY0Ny42MzYuMDcxIDMuMDQ0IDEuNzY0IDMuMDk2IDUuMDMxLjAyNyAxLjgxLS4zNDcgMy4yMTgtLjM3IDMuMjM1XCIvPjwvc3ZnPmAsXG5cbiAgb2JqZWN0czogYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj48cGF0aCBkPVwiTTEyIDBhOSA5IDAgMCAwLTUgMTYuNDgyVjIxczIuMDM1IDMgNSAzIDUtMyA1LTN2LTQuNTE4QTkgOSAwIDAgMCAxMiAwem0wIDJjMy44NiAwIDcgMy4xNDEgNyA3cy0zLjE0IDctNyA3LTctMy4xNDEtNy03IDMuMTQtNyA3LTd6TTkgMTcuNDc3Yy45NC4zMzIgMS45NDYuNTIzIDMgLjUyM3MyLjA2LS4xOSAzLS41MjN2LjgzNGMtLjkxLjQzNi0xLjkyNS42ODktMyAuNjg5YTYuOTI0IDYuOTI0IDAgMCAxLTMtLjY5di0uODMzem0uMjM2IDMuMDdBOC44NTQgOC44NTQgMCAwIDAgMTIgMjFjLjk2NSAwIDEuODg4LS4xNjcgMi43NTgtLjQ1MUMxNC4xNTUgMjEuMTczIDEzLjE1MyAyMiAxMiAyMmMtMS4xMDIgMC0yLjExNy0uNzg5LTIuNzY0LTEuNDUzelwiLz48cGF0aCBkPVwiTTE0Ljc0NSAxMi40NDloLS4wMDRjLS44NTItLjAyNC0xLjE4OC0uODU4LTEuNTc3LTEuODI0LS40MjEtMS4wNjEtLjcwMy0xLjU2MS0xLjE4Mi0xLjU2NmgtLjAwOWMtLjQ4MSAwLS43ODMuNDk3LTEuMjM1IDEuNTM3LS40MzYuOTgyLS44MDEgMS44MTEtMS42MzYgMS43OTFsLS4yNzYtLjA0M2MtLjU2NS0uMTcxLS44NTMtLjY5MS0xLjI4NC0xLjc5NC0uMTI1LS4zMTMtLjIwMi0uNjMyLS4yNy0uOTEzLS4wNTEtLjIxMy0uMTI3LS41My0uMTk1LS42MzRDNy4wNjcgOS4wMDQgNy4wMzkgOSA2Ljk5IDlBMSAxIDAgMCAxIDcgN2guMDFjMS42NjIuMDE3IDIuMDE1IDEuMzczIDIuMTk4IDIuMTM0LjQ4Ni0uOTgxIDEuMzA0LTIuMDU4IDIuNzk3LTIuMDc1IDEuNTMxLjAxOCAyLjI4IDEuMTUzIDIuNzMxIDIuMTQxbC4wMDItLjAwOEMxNC45NDQgOC40MjQgMTUuMzI3IDcgMTYuOTc5IDdoLjAzMkExIDEgMCAxIDEgMTcgOWgtLjAxMWMtLjE0OS4wNzYtLjI1Ni40NzQtLjMxOS43MDlhNi40ODQgNi40ODQgMCAwIDEtLjMxMS45NTFjLS40MjkuOTczLS43OSAxLjc4OS0xLjYxNCAxLjc4OVwiLz48L3N2Zz5gLFxuXG4gIHNtaWxleXM6IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+PHBhdGggZD1cIk0xMiAwQzUuMzczIDAgMCA1LjM3MyAwIDEyczUuMzczIDEyIDEyIDEyIDEyLTUuMzczIDEyLTEyUzE4LjYyNyAwIDEyIDBtMCAyMkM2LjQ4NiAyMiAyIDE3LjUxNCAyIDEyUzYuNDg2IDIgMTIgMnMxMCA0LjQ4NiAxMCAxMC00LjQ4NiAxMC0xMCAxMFwiLz48cGF0aCBkPVwiTTggN2EyIDIgMCAxIDAtLjAwMSAzLjk5OUEyIDIgMCAwIDAgOCA3TTE2IDdhMiAyIDAgMSAwLS4wMDEgMy45OTlBMiAyIDAgMCAwIDE2IDdNMTUuMjMyIDE1Yy0uNjkzIDEuMTk1LTEuODcgMi0zLjM0OSAyLTEuNDc3IDAtMi42NTUtLjgwNS0zLjM0Ny0ySDE1bTMtMkg2YTYgNiAwIDEgMCAxMiAwXCIvPjwvc3ZnPmAsXG5cbiAgcGVvcGxlOiBgPHN2ZyB4bWxuczpzdmc9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGhlaWdodD1cIjI0XCIgd2lkdGg9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj4gPHBhdGggaWQ9XCJwYXRoMzgxNFwiIGQ9XCJtIDMuMzU5MTA4OSwyMS4xNzcyNiBjIDAuMTcyMDM2LDAuMDkzODUgNC4yNjU5OTQsMi4yOTgzNyA4LjgxNDQ0NTEsMi4yOTgzNyA0LjkyNzc2NywwIDguNjcwODk0LC0yLjIxMTg4MyA4LjgyNzgyLC0yLjMwNjAxOSAwLjExMzA3OSwtMC4wNjc4NSAwLjE4MjI2OCwtMC4xOTAwNTEgMC4xODIyNjcsLTAuMzIxOTIzIDAsLTMuMDMxMTkgLTAuOTI5NDk0LC01LjgwNDkzNiAtMi42MTcxOTYsLTcuODEwNzEyIC0xLjE4MDYwMywtMS40MDMxMzQgLTIuNjYxOTE4LC0yLjM1OTUxNiAtNC4yOTU2OTksLTIuNzk5NzkxIDQuNjk5MTE4LC0yLjIzNjI1OCAzLjEwMjMwNiwtOS4yODYxNzE2MiAtMi4wOTcxOTEsLTkuMjg2MTcxNjIgLTUuMTk5NDk3OCwwIC02Ljc5NjMxMDMsNy4wNDk5MTM2MiAtMi4wOTcxOTIsOS4yODYxNzE2MiAtMS42MzM3ODIxLDAuNDQwMjc1IC0zLjExNTA5NzEsMS4zOTY3OTggLTQuMjk1Njk5MSwyLjc5OTc5MSAtMS42ODc3MDMsMi4wMDU3NzYgLTIuNjE3MTk2LDQuNzc5NTIyIC0yLjYxNzE5Niw3LjgxMDcxMiAxLjJlLTYsMC4xMzczNzggMC4wNzUwMzksMC4yNjM3ODUgMC4xOTU2NDEsMC4zMjk1NzIgeiBNIDguMDQzOTMxOSw1LjgzMDg3ODMgQyA4LjA0MzkzMDksMi4xNTE1MjEgMTIuNDkyMTA3LDAuMzA5NTU4MTEgMTUuMDkzNDkxLDIuOTEwOTQxMSAxNy42OTQ4NzQsNS41MTIzMjQxIDE1Ljg1MjkxMSw5Ljk2MDUwMDYgMTIuMTczNTU0LDkuOTYwNSA5Ljg5Mzg5OTEsOS45NTc5MTM1IDguMDQ2NTE4Niw4LjExMDUzMzIgOC4wNDM5MzE5LDUuODMwODc4MyBaIG0gLTEuNjg4NzgyLDcuNjg5NDk3NyBjIDEuNTI0NTM1LC0xLjgxMTQ0OSAzLjU5MDY2MDEsLTIuODA5MDM1IDUuODE4NDA0MSwtMi44MDkwMzUgMi4yMjc3NDQsMCA0LjI5Mzg2OSwwLjk5NzU4NiA1LjgxODQwNCwyLjgwOTAzNSAxLjUzMzYzOSwxLjgyMjU3MSAyLjM5NTkzMiw0LjMzOTg1OCAyLjQzOTE1Miw3LjEwODMwMSAtMC44MDMzNTIsMC40MzQ4NzcgLTQuMTQxNjM2LDIuMDk2MTEyIC04LjI1NzU1NiwyLjA5NjExMiAtMy44MDYyOTIxLDAgLTcuMzkxMDg2MSwtMS42NzEwNDMgLTguMjU3MzY4MSwtMi4xMDQ5ODEgMC4wNDUwNSwtMi43NjUwMTcgMC45MDY5NjgsLTUuMjc4Nzg1IDIuNDM4OTY0LC03LjA5OTQzMiB6XCIgLz4gPHBhdGggaWQ9XCJwYXRoMzgxNlwiIGQ9XCJNIDEyLjE3MzgyOCAwLjM4ODY3MTg4IEMgOS4zMTk4NTEzIDAuMzg4NjcxODcgNy4zNzcwOTg4IDIuMzY3MjI4NSA2Ljg2NTIzNDQgNC42MzA4NTk0IEMgNi40MjE4NjA4IDYuNTkxNjAxNSA3LjExNTM1NjIgOC43Njc2MTE3IDguOTY0ODQzOCAxMC4xMjY5NTMgQyA3LjYxNDEyNDkgMTAuNjc3Mzc2IDYuMzU1MDUxMSAxMS40ODA5NDQgNS4zNDk2MDk0IDEyLjY3NTc4MSBDIDMuNTYyOTMxNyAxNC43OTkxODUgMi42MDE1NjI1IDE3LjcwMTQ3NSAyLjYwMTU2MjUgMjAuODQ3NjU2IEMgMi42MDE1NjU0IDIxLjE4OTg2MSAyLjc4OTQyNzYgMjEuNTA4MDAyIDMuMDg5ODQzOCAyMS42NzE4NzUgQyAzLjMwNDQwNjggMjEuNzg4OTI1IDcuNDQzNjIzOSAyNC4wMzkwNjIgMTIuMTczODI4IDI0LjAzOTA2MiBDIDE3LjI2OTkxOCAyNC4wMzkwNjIgMjEuMDgzNTY4IDIxLjc3Njc4NiAyMS4yOTEwMTYgMjEuNjUyMzQ0IEMgMjEuNTcyODEgMjEuNDgzMjY2IDIxLjc0NjA5NyAyMS4xNzYyODIgMjEuNzQ2MDk0IDIwLjg0NzY1NiBDIDIxLjc0NjA5NCAxNy43MDE0NzUgMjAuNzgyNzcgMTQuNzk5MTg1IDE4Ljk5NjA5NCAxMi42NzU3ODEgQyAxNy45OTA0NTUgMTEuNDgwNTkxIDE2LjczMzgxOCAxMC42NzUzNjIgMTUuMzgyODEyIDEwLjEyNSBDIDE3LjIzMTEzMiA4Ljc2NTU1NTIgMTcuOTI1Njc1IDYuNTkxMDcwMSAxNy40ODI0MjIgNC42MzA4NTk0IEMgMTYuOTcwNTU3IDIuMzY3MjI4NSAxNS4wMjc4MDUgMC4zODg2NzE4OCAxMi4xNzM4MjggMC4zODg2NzE4OCB6IE0gMTIuNzkyOTY5IDIuMzAwNzgxMiBDIDEzLjQ2NjI1MyAyLjQxNjE3OTIgMTQuMTI1MTEzIDIuNzM4Mzk0MSAxNC42OTUzMTIgMy4zMDg1OTM4IEMgMTUuODM1NzEyIDQuNDQ4OTkzMSAxNS45ODU2MDQgNS45NDczNTQ5IDE1LjQ2ODc1IDcuMTk1MzEyNSBDIDE0Ljk1MTg5NiA4LjQ0MzI3MDEgMTMuNzg2ODI4IDkuMzk4NDM3OCAxMi4xNzM4MjggOS4zOTg0Mzc1IEMgMTAuMTk3NzE5IDkuMzk2MTk1NCA4LjYwNzcxMSA3LjgwNjE4NyA4LjYwNTQ2ODggNS44MzAwNzgxIEMgOC42MDU0NjgzIDQuMjE3MDc4NSA5LjU2MDYzNjIgMy4wNTIwMTAyIDEwLjgwODU5NCAyLjUzNTE1NjIgQyAxMS40MzI1NzMgMi4yNzY3MjkzIDEyLjExOTY4NSAyLjE4NTM4MzMgMTIuNzkyOTY5IDIuMzAwNzgxMiB6IE0gMTIuMTczODI4IDExLjI3MzQzOCBDIDE0LjIzMzY0NyAxMS4yNzM0MzggMTYuMTMzNjc0IDEyLjE4NTA4NCAxNy41NjI1IDEzLjg4MjgxMiBDIDE4LjkzMDY5IDE1LjUwODc2NSAxOS42OTgzNDcgMTcuNzc2OTY5IDE5LjgwODU5NCAyMC4yODMyMDMgQyAxOC44MDczOTUgMjAuODAwMjM1IDE1Ljg4NjE1NyAyMi4xNjIxMDkgMTIuMTczODI4IDIyLjE2MjEwOSBDIDguNzYxNDYzMiAyMi4xNjIxMDkgNS42MjQ1NzU0IDIwLjc4NzA2OSA0LjUzOTA2MjUgMjAuMjY1NjI1IEMgNC42NTI1ODk2IDE3Ljc2NjcxNyA1LjQyMDMzMTUgMTUuNTA0NzkxIDYuNzg1MTU2MiAxMy44ODI4MTIgQyA4LjIxMzk4MjcgMTIuMTg1MDg0IDEwLjExNDAxIDExLjI3MzQzOCAxMi4xNzM4MjggMTEuMjczNDM4IHogXCIgLz4gPC9zdmc+YCxcblxuICBwbGFjZXM6IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+PHBhdGggZD1cIk02LjUgMTJDNS4xMjIgMTIgNCAxMy4xMjEgNCAxNC41UzUuMTIyIDE3IDYuNSAxNyA5IDE1Ljg3OSA5IDE0LjUgNy44NzggMTIgNi41IDEybTAgM2MtLjI3NSAwLS41LS4yMjUtLjUtLjVzLjIyNS0uNS41LS41LjUuMjI1LjUuNS0uMjI1LjUtLjUuNU0xNy41IDEyYy0xLjM3OCAwLTIuNSAxLjEyMS0yLjUgMi41czEuMTIyIDIuNSAyLjUgMi41IDIuNS0xLjEyMSAyLjUtMi41LTEuMTIyLTIuNS0yLjUtMi41bTAgM2MtLjI3NSAwLS41LS4yMjUtLjUtLjVzLjIyNS0uNS41LS41LjUuMjI1LjUuNS0uMjI1LjUtLjUuNVwiLz48cGF0aCBkPVwiTTIyLjQ4MiA5LjQ5NGwtMS4wMzktLjM0NkwyMS40IDloLjZjLjU1MiAwIDEtLjQzOSAxLS45OTIgMC0uMDA2LS4wMDMtLjAwOC0uMDAzLS4wMDhIMjNjMC0xLS44ODktMi0xLjk4NC0yaC0uNjQybC0uNzMxLTEuNzE3QzE5LjI2MiAzLjAxMiAxOC4wOTEgMiAxNi43NjQgMkg3LjIzNkM1LjkwOSAyIDQuNzM4IDMuMDEyIDQuMzU3IDQuMjgzTDMuNjI2IDZoLS42NDJDMS44ODkgNiAxIDcgMSA4aC4wMDNTMSA4LjAwMiAxIDguMDA4QzEgOC41NjEgMS40NDggOSAyIDloLjZsLS4wNDMuMTQ4LTEuMDM5LjM0NmEyLjAwMSAyLjAwMSAwIDAgMC0xLjM1OSAyLjA5N2wuNzUxIDcuNTA4YTEgMSAwIDAgMCAuOTk0LjkwMUgzdjFjMCAxLjEwMy44OTYgMiAyIDJoMmMxLjEwNCAwIDItLjg5NyAyLTJ2LTFoNnYxYzAgMS4xMDMuODk2IDIgMiAyaDJjMS4xMDQgMCAyLS44OTcgMi0ydi0xaDEuMDk2YS45OTkuOTk5IDAgMCAwIC45OTQtLjkwMWwuNzUxLTcuNTA4YTIuMDAxIDIuMDAxIDAgMCAwLTEuMzU5LTIuMDk3TTYuMjczIDQuODU3QzYuNDAyIDQuNDMgNi43ODggNCA3LjIzNiA0aDkuNTI3Yy40NDggMCAuODM0LjQzLjk2My44NTdMMTkuMzEzIDlINC42ODhsMS41ODUtNC4xNDN6TTcgMjFINXYtMWgydjF6bTEyIDBoLTJ2LTFoMnYxem0yLjE4OS0zSDIuODExbC0uNjYyLTYuNjA3TDMgMTFoMThsLjg1Mi4zOTNMMjEuMTg5IDE4elwiLz48L3N2Zz5gLFxuXG4gIHJlY2VudDogYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj48cGF0aCBkPVwiTTEzIDRoLTJsLS4wMDEgN0g5djJoMnYyaDJ2LTJoNHYtMmgtNHpcIi8+PHBhdGggZD1cIk0xMiAwQzUuMzczIDAgMCA1LjM3MyAwIDEyczUuMzczIDEyIDEyIDEyIDEyLTUuMzczIDEyLTEyUzE4LjYyNyAwIDEyIDBtMCAyMkM2LjQ4NiAyMiAyIDE3LjUxNCAyIDEyUzYuNDg2IDIgMTIgMnMxMCA0LjQ4NiAxMCAxMC00LjQ4NiAxMC0xMCAxMFwiLz48L3N2Zz5gLFxuXG4gIHN5bWJvbHM6IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+PHBhdGggZD1cIk0wIDBoMTF2Mkgwek00IDExaDNWNmg0VjRIMHYyaDR6TTE1LjUgMTdjMS4zODEgMCAyLjUtMS4xMTYgMi41LTIuNDkzcy0xLjExOS0yLjQ5My0yLjUtMi40OTNTMTMgMTMuMTMgMTMgMTQuNTA3IDE0LjExOSAxNyAxNS41IDE3bTAtMi45ODZjLjI3NiAwIC41LjIyMi41LjQ5MyAwIC4yNzItLjIyNC40OTMtLjUuNDkzcy0uNS0uMjIxLS41LS40OTMuMjI0LS40OTMuNS0uNDkzTTIxLjUgMTkuMDE0Yy0xLjM4MSAwLTIuNSAxLjExNi0yLjUgMi40OTNTMjAuMTE5IDI0IDIxLjUgMjRzMi41LTEuMTE2IDIuNS0yLjQ5My0xLjExOS0yLjQ5My0yLjUtMi40OTNtMCAyLjk4NmEuNDk3LjQ5NyAwIDAgMS0uNS0uNDkzYzAtLjI3MS4yMjQtLjQ5My41LS40OTNzLjUuMjIyLjUuNDkzYS40OTcuNDk3IDAgMCAxLS41LjQ5M00yMiAxM2wtOSA5IDEuNTEzIDEuNSA4Ljk5LTkuMDA5ek0xNyAxMWMyLjIwOSAwIDQtMS4xMTkgNC0yLjVWMnMuOTg1LS4xNjEgMS40OTguOTQ5QzIzLjAxIDQuMDU1IDIzIDYgMjMgNnMxLTEuMTE5IDEtMy4xMzVDMjQtLjAyIDIxIDAgMjEgMGgtMnY2LjM0N0E1Ljg1MyA1Ljg1MyAwIDAgMCAxNyA2Yy0yLjIwOSAwLTQgMS4xMTktNCAyLjVzMS43OTEgMi41IDQgMi41TTEwLjI5NyAyMC40ODJsLTEuNDc1LTEuNTg1YTQ3LjU0IDQ3LjU0IDAgMCAxLTEuNDQyIDEuMTI5Yy0uMzA3LS4yODgtLjk4OS0xLjAxNi0yLjA0NS0yLjE4My45MDItLjgzNiAxLjQ3OS0xLjQ2NiAxLjcyOS0xLjg5MnMuMzc2LS44NzEuMzc2LTEuMzM2YzAtLjU5Mi0uMjczLTEuMTc4LS44MTgtMS43NTktLjU0Ni0uNTgxLTEuMzI5LS44NzEtMi4zNDktLjg3MS0xLjAwOCAwLTEuNzkuMjkzLTIuMzQ0Ljg3OS0uNTU2LjU4Ny0uODMyIDEuMTgxLS44MzIgMS43ODQgMCAuODEzLjQxOSAxLjc0OCAxLjI1NiAyLjgwNS0uODQ3LjYxNC0xLjQ0NCAxLjIwOC0xLjc5NCAxLjc4NGEzLjQ2NSAzLjQ2NSAwIDAgMC0uNTIzIDEuODMzYzAgLjg1Ny4zMDggMS41Ni45MjQgMi4xMDcuNjE2LjU0OSAxLjQyMy44MjMgMi40Mi44MjMgMS4xNzMgMCAyLjQ0NC0uMzc5IDMuODEzLTEuMTM3TDguMjM1IDI0aDIuODE5bC0yLjA5LTIuMzgzIDEuMzMzLTEuMTM1em0tNi43MzYtNi4zODlhMS4wMiAxLjAyIDAgMCAxIC43My0uMjg2Yy4zMSAwIC41NTkuMDg1Ljc0Ny4yNTRhLjg0OS44NDkgMCAwIDEgLjI4My42NTljMCAuNTE4LS40MTkgMS4xMTItMS4yNTcgMS43ODQtLjUzNi0uNjUxLS44MDUtMS4yMzEtLjgwNS0xLjc0MmEuOTAxLjkwMSAwIDAgMSAuMzAyLS42NjlNMy43NCAyMmMtLjQyNyAwLS43NzgtLjExNi0xLjA1Ny0uMzQ5LS4yNzktLjIzMi0uNDE4LS40ODctLjQxOC0uNzY2IDAtLjU5NC41MDktMS4yODggMS41MjctMi4wODMuOTY4IDEuMTM0IDEuNzE3IDEuOTQ2IDIuMjQ4IDIuNDM4LS45MjEuNTA3LTEuNjg2Ljc2LTIuMy43NlwiLz48L3N2Zz5gLFxufVxuXG5leHBvcnQgZGVmYXVsdCBTVkdzXG4iLCJjb25zdCBtYXBwaW5nID0ge1xuICBuYW1lOiAnYScsXG4gIHVuaWZpZWQ6ICdiJyxcbiAgbm9uX3F1YWxpZmllZDogJ2MnLFxuICBoYXNfaW1nX2FwcGxlOiAnZCcsXG4gIGhhc19pbWdfZ29vZ2xlOiAnZScsXG4gIGhhc19pbWdfdHdpdHRlcjogJ2YnLFxuICBoYXNfaW1nX2ZhY2Vib29rOiAnaCcsXG4gIGtleXdvcmRzOiAnaicsXG4gIHNoZWV0OiAnaycsXG4gIGVtb3RpY29uczogJ2wnLFxuICB0ZXh0OiAnbScsXG4gIHNob3J0X25hbWVzOiAnbicsXG4gIGFkZGVkX2luOiAnbycsXG59XG5cbmNvbnN0IGJ1aWxkU2VhcmNoID0gKGVtb2ppKSA9PiB7XG4gIGNvbnN0IHNlYXJjaCA9IFtdXG5cbiAgdmFyIGFkZFRvU2VhcmNoID0gKHN0cmluZ3MsIHNwbGl0KSA9PiB7XG4gICAgaWYgKCFzdHJpbmdzKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICA7KEFycmF5LmlzQXJyYXkoc3RyaW5ncykgPyBzdHJpbmdzIDogW3N0cmluZ3NdKS5mb3JFYWNoKChzdHJpbmcpID0+IHtcbiAgICAgIDsoc3BsaXQgPyBzdHJpbmcuc3BsaXQoL1stfF98XFxzXSsvKSA6IFtzdHJpbmddKS5mb3JFYWNoKChzKSA9PiB7XG4gICAgICAgIHMgPSBzLnRvTG93ZXJDYXNlKClcblxuICAgICAgICBpZiAoc2VhcmNoLmluZGV4T2YocykgPT0gLTEpIHtcbiAgICAgICAgICBzZWFyY2gucHVzaChzKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBhZGRUb1NlYXJjaChlbW9qaS5zaG9ydF9uYW1lcywgdHJ1ZSlcbiAgYWRkVG9TZWFyY2goZW1vamkubmFtZSwgdHJ1ZSlcbiAgYWRkVG9TZWFyY2goZW1vamkua2V5d29yZHMsIGZhbHNlKVxuICBhZGRUb1NlYXJjaChlbW9qaS5lbW90aWNvbnMsIGZhbHNlKVxuXG4gIHJldHVybiBzZWFyY2guam9pbignLCcpXG59XG5cbmZ1bmN0aW9uIGRlZXBGcmVlemUob2JqZWN0KSB7XG4gIC8vIFJldHJpZXZlIHRoZSBwcm9wZXJ0eSBuYW1lcyBkZWZpbmVkIG9uIG9iamVjdFxuICB2YXIgcHJvcE5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob2JqZWN0KVxuXG4gIC8vIEZyZWV6ZSBwcm9wZXJ0aWVzIGJlZm9yZSBmcmVlemluZyBzZWxmXG4gIGZvciAobGV0IG5hbWUgb2YgcHJvcE5hbWVzKSB7XG4gICAgbGV0IHZhbHVlID0gb2JqZWN0W25hbWVdXG4gICAgb2JqZWN0W25hbWVdID1cbiAgICAgIHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgPyBkZWVwRnJlZXplKHZhbHVlKSA6IHZhbHVlXG4gIH1cbiAgcmV0dXJuIE9iamVjdC5mcmVlemUob2JqZWN0KVxufVxuXG5jb25zdCB1bmNvbXByZXNzID0gKGRhdGEpID0+IHtcbiAgaWYgKCFkYXRhLmNvbXByZXNzZWQpIHtcbiAgICByZXR1cm4gZGF0YVxuICB9XG4gIGRhdGEuY29tcHJlc3NlZCA9IGZhbHNlXG5cbiAgZm9yIChsZXQgaWQgaW4gZGF0YS5lbW9qaXMpIHtcbiAgICBsZXQgZW1vamkgPSBkYXRhLmVtb2ppc1tpZF1cblxuICAgIGZvciAobGV0IGtleSBpbiBtYXBwaW5nKSB7XG4gICAgICBlbW9qaVtrZXldID0gZW1vamlbbWFwcGluZ1trZXldXVxuICAgICAgZGVsZXRlIGVtb2ppW21hcHBpbmdba2V5XV1cbiAgICB9XG5cbiAgICBpZiAoIWVtb2ppLnNob3J0X25hbWVzKSBlbW9qaS5zaG9ydF9uYW1lcyA9IFtdXG4gICAgZW1vamkuc2hvcnRfbmFtZXMudW5zaGlmdChpZClcblxuICAgIGVtb2ppLnNoZWV0X3ggPSBlbW9qaS5zaGVldFswXVxuICAgIGVtb2ppLnNoZWV0X3kgPSBlbW9qaS5zaGVldFsxXVxuICAgIGRlbGV0ZSBlbW9qaS5zaGVldFxuXG4gICAgaWYgKCFlbW9qaS50ZXh0KSBlbW9qaS50ZXh0ID0gJydcblxuICAgIGlmICghZW1vamkuYWRkZWRfaW4pIGVtb2ppLmFkZGVkX2luID0gNlxuICAgIGVtb2ppLmFkZGVkX2luID0gZW1vamkuYWRkZWRfaW4udG9GaXhlZCgxKVxuXG4gICAgZW1vamkuc2VhcmNoID0gYnVpbGRTZWFyY2goZW1vamkpXG4gIH1cbiAgZGF0YSA9IGRlZXBGcmVlemUoZGF0YSlcbiAgcmV0dXJuIGRhdGFcbn1cblxuZXhwb3J0IHsgYnVpbGRTZWFyY2gsIHVuY29tcHJlc3MgfVxuIiwiaW1wb3J0IHsgaW50ZXJzZWN0LCB1bmlmaWVkVG9OYXRpdmUgfSBmcm9tICcuL2luZGV4J1xuaW1wb3J0IHsgdW5jb21wcmVzcywgYnVpbGRTZWFyY2ggfSBmcm9tICcuL2RhdGEnXG5pbXBvcnQgZnJlcXVlbnRseSBmcm9tICcuL2ZyZXF1ZW50bHknXG5cbmNvbnN0IFNIRUVUX0NPTFVNTlMgPSA1N1xuY29uc3QgQ09MT05TX1JFR0VYID0gL14oPzpcXDooW15cXDpdKylcXDopKD86XFw6c2tpbi10b25lLShcXGQpXFw6KT8kL1xuLy8gU2tpbiB0b25lc1xuY29uc3QgU0tJTlMgPSBbJzFGM0ZBJywgJzFGM0ZCJywgJzFGM0ZDJywgJzFGM0ZEJywgJzFGM0ZFJywgJzFGM0ZGJ11cblxuLyoqXG4gKiBFbW9qaSBkYXRhIHN0cnVjdHVyZTpcbiAqIHtcbiAqICAgIFwiY29tcHJlc3NlZFwiOiBmYWxzZSxcbiAqICAgIFwiYWxpYXNlc1wiOiB7XG4gKiAgICAgIGNvbGxpc2lvbjogXCJib29tXCJcbiAqICAgICAgY29va2luZzogXCJmcmllZF9lZ2dcIlxuICogICAgICBlbnZlbG9wZTogXCJlbWFpbFwiXG4gKiAgICAgIGZhY2Vfd2l0aF9maW5nZXJfY292ZXJpbmdfY2xvc2VkX2xpcHM6IFwic2h1c2hpbmdfZmFjZVwiXG4gKiAgICAgIC4uLlxuICogICAgfSxcbiAqICAgIFwiY2F0ZWdvcmllc1wiOiBbIHtcbiAqICAgICAgaWQ6IFwicGVvcGxlXCIsXG4gKiAgICAgIG5hbWU6IFwiU21pbGV5cyAmIEVtb3Rpb25cIixcbiAqICAgICAgZW1vamlzOiBbIFwiZ3Jpbm5pbmdcIiwgXCJncmluXCIsIFwiam95XCIsIC4uLiBdXG4gKiAgICB9LCB7XG4gKiAgICAgIGlkOiBcIm5hdHVyZVwiLFxuICogICAgICBuYW1lOiBcIkFuaW1hbHMgJiBOYXR1cmVcIixcbiAqICAgICAgZW1vamlzOiBbIFwibW9ua2V5X2ZhY2VcIiwgXCJtb25leVwiLCBcImdvcmlsbGFcIiwgLi4uIF1cbiAqICAgIH0sXG4gKiAgICAuLi5cbiAqICAgIF0sXG4gKiAgICBcImVtb2ppc1wiOiBbXG4gKiAgICAgIHNtaWxleToge1xuICogICAgICAgIGFkZGVkX2luOiBcIjYuMFwiLFxuICogICAgICAgIGVtb3RpY29uczogW1wiPSlcIiwgXCI9LSlcIl0sXG4gKiAgICAgICAgaGFzX2ltZ19hcHBsZTogdHJ1ZSxcbiAqICAgICAgICBoYXNfaW1nX2ZhY2Vib29rOiB0cnVlLFxuICogICAgICAgIGhhc19pbWdfZ29vZ2xlOiB0cnVlLFxuICogICAgICAgIGhhc19pbWdfdHdpdHRlcjogdHJ1ZSxcbiAqICAgICAgICBrZXl3b3JkczogW1wiZmFjZVwiLCBcImhhcHB5XCIsIFwiam95XCIsIFwiaGFoYVwiLCBcIjpEXCIsIFwiOilcIiwgXCJzbWlsZVwiLCBcImZ1bm55XCJdLFxuICogICAgICAgIG5hbWU6IFwiU21pbGluZyBGYWNlIHdpdGggT3BlbiBNb3V0aFwiLFxuICogICAgICAgIG5vbl9xdWFsaWZpZWQ6IHVuZGVmaW5lZCxcbiAqICAgICAgICBzZWFyY2g6IFwic21pbGV5LHNtaWxpbmcsZmFjZSx3aXRoLG9wZW4sbW91dGgsaGFwcHksam95LGhhaGEsOmQsOiksc21pbGUsZnVubnksPSksPS0pXCIsXG4gKiAgICAgICAgc2hlZXRfeDogMzAsXG4gKiAgICAgICAgc2hlZXRfeTogMjcsXG4gKiAgICAgICAgc2hvcnRfbmFtZXM6IFtcInNtaWxleVwiXSxcbiAqICAgICAgICB0ZXh0OiBcIjopXCIsXG4gKiAgICAgICAgdW5pZmllZDogXCIxRjYwM1wiLFxuICogICAgICB9LCB7XG4gKiAgICAgICsxOiB7ICAgIC8vIGVtb2ppIHdpdGggc2tpbl92YXJpYXRpb25zXG4gKiAgICAgICAgICAuLi4sIC8vIGFsbCB0aGUgcmVndWxhciBmaWVsZHMgYXJlIHByZXNlbnRcbiAqICAgICAgICAgIG5hbWU6IFwiVGh1bWJzIFVwIFNpZ25cIixcbiAqICAgICAgICAgIHNob3J0X25hbWVzOiAoMikgW1wiKzFcIiwgXCJ0aHVtYnN1cFwiXSxcbiAqICAgICAgICAgIHNraW5fdmFyaWF0aW9uczoge1xuICogICAgICAgICAgICAxRjNGQjogICAgICAgICAgICAgLy8gZWFjaCB2YXJpYXRpb24gaGFzIGFkZGl0aW9uYWwgc2V0IG9mIGZpZWxkczpcbiAqICAgICAgICAgICAgICBhZGRlZF9pbjogXCI4LjBcIixcbiAqICAgICAgICAgICAgICBoYXNfaW1nX2FwcGxlOiB0cnVlLFxuICogICAgICAgICAgICAgIGhhc19pbWdfZmFjZWJvb2s6IHRydWUsXG4gKiAgICAgICAgICAgICAgaGFzX2ltZ19nb29nbGU6IHRydWUsXG4gKiAgICAgICAgICAgICAgaGFzX2ltZ190d2l0dGVyOiB0cnVlLFxuICogICAgICAgICAgICAgIGltYWdlOiBcIjFmNDRkLTFmM2ZiLnBuZ1wiLFxuICogICAgICAgICAgICAgIG5vbl9xdWFsaWZpZWQ6IG51bGwsXG4gKiAgICAgICAgICAgICAgc2hlZXRfeDogMTQsXG4gKiAgICAgICAgICAgICAgc2hlZXRfeTogNTAsXG4gKiAgICAgICAgICAgICAgdW5pZmllZDogXCIxRjQ0RC0xRjNGQlwiLFxuICogICAgICAgICAgICAxRjNGQjoge+KApn0sXG4gKiAgICAgICAgICAgIDFGM0ZDOiB74oCmfSxcbiAqICAgICAgICAgICAgMUYzRkQ6IHvigKZ9LFxuICogICAgICAgICAgICAxRjNGRToge+KApn0sXG4gKiAgICAgICAgICAgIDFGM0ZGOiB74oCmfVxuICogICAgICAgICAgICB9LFxuICogICAgICAgICAgLi4uXG4gKiAgICAgIH0sXG4gKiAgICAgIGE6IHsgIC8vIGVtb2ppIHdpdGggbm9uX3F1YWxpZmllZCBmaWVsZCBzZXRcbiAqICAgICAgICBhZGRlZF9pbjogXCI2LjBcIixcbiAqICAgICAgICBlbW90aWNvbnM6IHVuZGVmaW5lZCxcbiAqICAgICAgICBoYXNfaW1nX2FwcGxlOiB0cnVlLFxuICogICAgICAgIC4uLlxuICogICAgICAgIG5vbl9xdWFsaWZpZWQ6IFwiMUYxNzBcIixcbiAqICAgICAgICB1bmlmaWVkOiBcIjFGMTcwLUZFMEZcIixcbiAqICAgICB9LFxuICogICAgIC4uLlxuICogICBdXG4gKiB9XG4gKi9cblxuLyoqXG4gKiBXcmFwcyByYXcgamFzb24gZW1vamkgZGF0YSwgc2VydmVzIGFzIGRhdGEgc291cmNlIGZvclxuICogZW1vamkgcGlja2VyIGNvbXBvbmVudHMuXG4gKlxuICogVXNhZ2U6XG4gKlxuICogICBpbXBvcnQgZGF0YSBmcm9tICcuLi9kYXRhL2FsbC5qc29uJ1xuICogICBsZXQgaW5kZXggPSBuZXcgRW1vamlJbmRleChkYXRhKVxuICpcbiAqL1xuZXhwb3J0IGNsYXNzIEVtb2ppSW5kZXgge1xuICAvKipcbiAgICogQ29uc3RydWN0b3IuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIC0gUmF3IGpzb24gZGF0YSwgc2VlIHRoZSBzdHJ1Y3R1cmUgYWJvdmUuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gYWRkaXRpb25hbCBvcHRpb25zLCBhcyBhbiBvYmplY3Q6XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGVtb2ppc1RvU2hvd0ZpbHRlciAtIG9wdGlvbmFsLCBmdW5jdGlvbiB0byBmaWx0ZXIgb3V0XG4gICAqICAgc29tZSBlbW9qaXMsIGZ1bmN0aW9uKGVtb2ppKSB7IHJldHVybiB0cnVlfGZhbHNlIH1cbiAgICogICB3aGVyZSBgZW1vamlgIGlzIGFuIHJhdyBlbW9qaSBvYmplY3QsIHNlZSBkYXRhLmVtb2ppcyBhYm92ZS5cbiAgICogQHBhcmFtIHtBcnJheX0gaW5jbHVkZSAtIG9wdGlvbmFsLCBhIGxpc3Qgb2YgY2F0ZWdvcnkgaWRzIHRvIGluY2x1ZGUuXG4gICAqIEBwYXJhbSB7QXJyYXl9IGV4Y2x1ZGUgLSBvcHRpb25hbCwgYSBsaXN0IG9mIGNhdGVnb3J5IGlkcyB0byBleGNsdWRlLlxuICAgKiBAcGFyYW0ge0FycmF5fSBjdXN0b20gLSBvcHRpb25hbCwgYSBsaXN0IGN1c3RvbSBlbW9qaXMsIGVhY2ggZW1vamkgaXNcbiAgICogICBhbiBvYmplY3QsIHNlZSBkYXRhLmVtb2ppcyBhYm92ZSBmb3IgZXhhbXBsZXMuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBkYXRhLFxuICAgIHtcbiAgICAgIGVtb2ppc1RvU2hvd0ZpbHRlcixcbiAgICAgIGluY2x1ZGUsXG4gICAgICBleGNsdWRlLFxuICAgICAgY3VzdG9tLFxuICAgICAgcmVjZW50LFxuICAgICAgcmVjZW50TGVuZ3RoID0gMjAsXG4gICAgfSA9IHt9LFxuICApIHtcbiAgICB0aGlzLl9kYXRhID0gdW5jb21wcmVzcyhkYXRhKVxuICAgIC8vIENhbGxiYWNrIHRvIGV4Y2x1ZGUgc3BlY2lmaWMgZW1vamlzXG4gICAgdGhpcy5fZW1vamlzRmlsdGVyID0gZW1vamlzVG9TaG93RmlsdGVyIHx8IG51bGxcbiAgICAvLyBDYXRlZ29yaWVzIHRvIGluY2x1ZGUgLyBleGNsdWRlXG4gICAgdGhpcy5faW5jbHVkZSA9IGluY2x1ZGUgfHwgbnVsbFxuICAgIHRoaXMuX2V4Y2x1ZGUgPSBleGNsdWRlIHx8IG51bGxcbiAgICAvLyBDdXN0b20gZW1vamlzXG4gICAgdGhpcy5fY3VzdG9tID0gY3VzdG9tIHx8IFtdXG4gICAgLy8gUmVjZW50IGVtb2ppc1xuICAgIC8vIFRPRE86IG1ha2UgcGFyYW1ldGVyIGNvbmZpZ3VyYWJsZVxuICAgIHRoaXMuX3JlY2VudCA9IHJlY2VudCB8fCBmcmVxdWVudGx5LmdldChyZWNlbnRMZW5ndGgpXG5cbiAgICB0aGlzLl9lbW9qaXMgPSB7fVxuICAgIHRoaXMuX25hdGl2ZUVtb2ppcyA9IHt9XG4gICAgdGhpcy5fZW1vdGljb25zID0ge31cblxuICAgIHRoaXMuX2NhdGVnb3JpZXMgPSBbXVxuICAgIHRoaXMuX3JlY2VudENhdGVnb3J5ID0geyBpZDogJ3JlY2VudCcsIG5hbWU6ICdSZWNlbnQnLCBlbW9qaXM6IFtdIH1cbiAgICB0aGlzLl9jdXN0b21DYXRlZ29yeSA9IHsgaWQ6ICdjdXN0b20nLCBuYW1lOiAnQ3VzdG9tJywgZW1vamlzOiBbXSB9XG4gICAgdGhpcy5fc2VhcmNoSW5kZXggPSB7fVxuICAgIHRoaXMuYnVpbGRJbmRleCgpXG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKVxuICB9XG5cbiAgYnVpbGRJbmRleCgpIHtcbiAgICBsZXQgYWxsQ2F0ZWdvcmllcyA9IHRoaXMuX2RhdGEuY2F0ZWdvcmllc1xuXG4gICAgaWYgKHRoaXMuX2luY2x1ZGUpIHtcbiAgICAgIC8vIFJlbW92ZSBjYXRlZ29yaWVzIHRoYXQgYXJlIG5vdCBpbiB0aGUgaW5jbHVkZSBsaXN0LlxuICAgICAgYWxsQ2F0ZWdvcmllcyA9IGFsbENhdGVnb3JpZXMuZmlsdGVyKChpdGVtKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbmNsdWRlLmluY2x1ZGVzKGl0ZW0uaWQpXG4gICAgICB9KVxuICAgICAgLy8gU29ydCBjYXRlZ29yaWVzIGFjY29yZGluZyB0byB0aGUgaW5jbHVkZSBsaXN0LlxuICAgICAgYWxsQ2F0ZWdvcmllcyA9IGFsbENhdGVnb3JpZXMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICBjb25zdCBpbmRleEEgPSB0aGlzLl9pbmNsdWRlLmluZGV4T2YoYS5pZClcbiAgICAgICAgY29uc3QgaW5kZXhCID0gdGhpcy5faW5jbHVkZS5pbmRleE9mKGIuaWQpXG4gICAgICAgIGlmIChpbmRleEEgPCBpbmRleEIpIHtcbiAgICAgICAgICByZXR1cm4gLTFcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5kZXhBID4gaW5kZXhCKSB7XG4gICAgICAgICAgcmV0dXJuIDFcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMFxuICAgICAgfSlcbiAgICB9XG5cbiAgICBhbGxDYXRlZ29yaWVzLmZvckVhY2goKGNhdGVnb3J5RGF0YSkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmlzQ2F0ZWdvcnlOZWVkZWQoY2F0ZWdvcnlEYXRhLmlkKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGxldCBjYXRlZ29yeSA9IHtcbiAgICAgICAgaWQ6IGNhdGVnb3J5RGF0YS5pZCxcbiAgICAgICAgbmFtZTogY2F0ZWdvcnlEYXRhLm5hbWUsXG4gICAgICAgIGVtb2ppczogW10sXG4gICAgICB9XG4gICAgICBjYXRlZ29yeURhdGEuZW1vamlzLmZvckVhY2goKGVtb2ppSWQpID0+IHtcbiAgICAgICAgbGV0IGVtb2ppID0gdGhpcy5hZGRFbW9qaShlbW9qaUlkKVxuICAgICAgICBpZiAoZW1vamkpIHtcbiAgICAgICAgICBjYXRlZ29yeS5lbW9qaXMucHVzaChlbW9qaSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIGlmIChjYXRlZ29yeS5lbW9qaXMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuX2NhdGVnb3JpZXMucHVzaChjYXRlZ29yeSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKHRoaXMuaXNDYXRlZ29yeU5lZWRlZCgnY3VzdG9tJykpIHtcbiAgICAgIGlmICh0aGlzLl9jdXN0b20ubGVuZ3RoID4gMCkge1xuICAgICAgICBmb3IgKGxldCBjdXN0b21FbW9qaSBvZiB0aGlzLl9jdXN0b20pIHtcbiAgICAgICAgICB0aGlzLmFkZEN1c3RvbUVtb2ppKGN1c3RvbUVtb2ppKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fY3VzdG9tQ2F0ZWdvcnkuZW1vamlzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLl9jYXRlZ29yaWVzLnB1c2godGhpcy5fY3VzdG9tQ2F0ZWdvcnkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNDYXRlZ29yeU5lZWRlZCgncmVjZW50JykpIHtcbiAgICAgIGlmICh0aGlzLl9yZWNlbnQubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuX3JlY2VudC5tYXAoKGlkKSA9PiB7XG4gICAgICAgICAgZm9yIChsZXQgY3VzdG9tRW1vamkgb2YgdGhpcy5fY3VzdG9tQ2F0ZWdvcnkuZW1vamlzKSB7XG4gICAgICAgICAgICBpZiAoY3VzdG9tRW1vamkuaWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgIHRoaXMuX3JlY2VudENhdGVnb3J5LmVtb2ppcy5wdXNoKGN1c3RvbUVtb2ppKVxuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRoaXMuaGFzRW1vamkoaWQpKSB7XG4gICAgICAgICAgICB0aGlzLl9yZWNlbnRDYXRlZ29yeS5lbW9qaXMucHVzaCh0aGlzLmVtb2ppKGlkKSlcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICAvLyBBZGQgcmVjZW50IGNhdGVnb3J5IHRvIHRoZSB0b3BcbiAgICAgIGlmICh0aGlzLl9yZWNlbnRDYXRlZ29yeS5lbW9qaXMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuX2NhdGVnb3JpZXMudW5zaGlmdCh0aGlzLl9yZWNlbnRDYXRlZ29yeSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRmluZCB0aGUgZW1vamkgZnJvbSB0aGUgc3RyaW5nXG4gICAqL1xuICBmaW5kRW1vamkoZW1vamksIHNraW4pIHtcbiAgICAvLyAxLiBQYXJzZSBhcyA6ZW1vamlfbmFtZTpza2luLXRvbmUteHg6XG4gICAgbGV0IG1hdGNoZXMgPSBlbW9qaS5tYXRjaChDT0xPTlNfUkVHRVgpXG5cbiAgICBpZiAobWF0Y2hlcykge1xuICAgICAgZW1vamkgPSBtYXRjaGVzWzFdXG4gICAgICBpZiAobWF0Y2hlc1syXSkge1xuICAgICAgICBza2luID0gcGFyc2VJbnQobWF0Y2hlc1syXSwgMTApXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gMi4gQ2hlY2sgaWYgdGhlIHNwZWNpZmllZCBlbW9qaSBpcyBhbiBhbGlhc1xuICAgIGlmICh0aGlzLl9kYXRhLmFsaWFzZXMuaGFzT3duUHJvcGVydHkoZW1vamkpKSB7XG4gICAgICBlbW9qaSA9IHRoaXMuX2RhdGEuYWxpYXNlc1tlbW9qaV1cbiAgICB9XG5cbiAgICAvLyAzLiBDaGVjayBpZiB3ZSBoYXZlIHRoZSBzcGVjaWZpZWQgZW1vamlcbiAgICBpZiAodGhpcy5fZW1vamlzLmhhc093blByb3BlcnR5KGVtb2ppKSkge1xuICAgICAgbGV0IGVtb2ppT2JqZWN0ID0gdGhpcy5fZW1vamlzW2Vtb2ppXVxuICAgICAgaWYgKHNraW4pIHtcbiAgICAgICAgcmV0dXJuIGVtb2ppT2JqZWN0LmdldFNraW4oc2tpbilcbiAgICAgIH1cbiAgICAgIHJldHVybiBlbW9qaU9iamVjdFxuICAgIH1cblxuICAgIC8vIDQuIENoZWNrIGlmIHdlIGhhdmUgdGhlIHNwZWNpZmllZCBuYXRpdmUgZW1vamlcbiAgICBpZiAodGhpcy5fbmF0aXZlRW1vamlzLmhhc093blByb3BlcnR5KGVtb2ppKSkge1xuICAgICAgcmV0dXJuIHRoaXMuX25hdGl2ZUVtb2ppc1tlbW9qaV1cbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGNhdGVnb3JpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhdGVnb3JpZXNcbiAgfVxuXG4gIGVtb2ppKGVtb2ppSWQpIHtcbiAgICBpZiAodGhpcy5fZGF0YS5hbGlhc2VzLmhhc093blByb3BlcnR5KGVtb2ppSWQpKSB7XG4gICAgICBlbW9qaUlkID0gdGhpcy5fZGF0YS5hbGlhc2VzW2Vtb2ppSWRdXG4gICAgfVxuICAgIGxldCBlbW9qaSA9IHRoaXMuX2Vtb2ppc1tlbW9qaUlkXVxuICAgIGlmICghZW1vamkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2FuIG5vdCBmaW5kIGVtb2ppIGJ5IGlkOiAnICsgZW1vamlJZClcbiAgICB9XG4gICAgcmV0dXJuIGVtb2ppXG4gIH1cblxuICBmaXJzdEVtb2ppKCkge1xuICAgIGxldCBlbW9qaSA9IHRoaXMuX2Vtb2ppc1tPYmplY3Qua2V5cyh0aGlzLl9lbW9qaXMpWzBdXVxuICAgIGlmICghZW1vamkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2FuIG5vdCBnZXQgZmlyc3QgZW1vamknKVxuICAgIH1cbiAgICByZXR1cm4gZW1vamlcbiAgfVxuXG4gIGhhc0Vtb2ppKGVtb2ppSWQpIHtcbiAgICBpZiAodGhpcy5fZGF0YS5hbGlhc2VzLmhhc093blByb3BlcnR5KGVtb2ppSWQpKSB7XG4gICAgICBlbW9qaUlkID0gdGhpcy5fZGF0YS5hbGlhc2VzW2Vtb2ppSWRdXG4gICAgfVxuICAgIGlmICh0aGlzLl9lbW9qaXNbZW1vamlJZF0pIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgbmF0aXZlRW1vamkodW5pY29kZUVtb2ppKSB7XG4gICAgaWYgKHRoaXMuX25hdGl2ZUVtb2ppcy5oYXNPd25Qcm9wZXJ0eSh1bmljb2RlRW1vamkpKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbmF0aXZlRW1vamlzW3VuaWNvZGVFbW9qaV1cbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIHNlYXJjaCh2YWx1ZSwgbWF4UmVzdWx0cykge1xuICAgIG1heFJlc3VsdHMgfHwgKG1heFJlc3VsdHMgPSA3NSlcbiAgICBpZiAoIXZhbHVlLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgaWYgKHZhbHVlID09ICctJyB8fCB2YWx1ZSA9PSAnLTEnKSB7XG4gICAgICByZXR1cm4gW3RoaXMuZW1vamkoJy0xJyldXG4gICAgfVxuXG4gICAgbGV0IHZhbHVlcyA9IHZhbHVlLnRvTG93ZXJDYXNlKCkuc3BsaXQoL1tcXHN8LHxcXC18X10rLylcbiAgICBsZXQgYWxsUmVzdWx0cyA9IFtdXG5cbiAgICBpZiAodmFsdWVzLmxlbmd0aCA+IDIpIHtcbiAgICAgIHZhbHVlcyA9IFt2YWx1ZXNbMF0sIHZhbHVlc1sxXV1cbiAgICB9XG5cbiAgICBhbGxSZXN1bHRzID0gdmFsdWVzXG4gICAgICAubWFwKCh2YWx1ZSkgPT4ge1xuICAgICAgICAvLyBTdGFydCBzZWFyY2hpbiBpbiB0aGUgZ2xvYmFsIGxpc3Qgb2YgZW1vamlzXG4gICAgICAgIGxldCBlbW9qaXMgPSB0aGlzLl9lbW9qaXNcbiAgICAgICAgbGV0IGN1cnJlbnRJbmRleCA9IHRoaXMuX3NlYXJjaEluZGV4XG4gICAgICAgIGxldCBsZW5ndGggPSAwXG5cbiAgICAgICAgZm9yIChsZXQgY2hhckluZGV4ID0gMDsgY2hhckluZGV4IDwgdmFsdWUubGVuZ3RoOyBjaGFySW5kZXgrKykge1xuICAgICAgICAgIGNvbnN0IGNoYXIgPSB2YWx1ZVtjaGFySW5kZXhdXG4gICAgICAgICAgbGVuZ3RoKytcblxuICAgICAgICAgIGN1cnJlbnRJbmRleFtjaGFyXSB8fCAoY3VycmVudEluZGV4W2NoYXJdID0ge30pXG4gICAgICAgICAgY3VycmVudEluZGV4ID0gY3VycmVudEluZGV4W2NoYXJdXG5cbiAgICAgICAgICBpZiAoIWN1cnJlbnRJbmRleC5yZXN1bHRzKSB7XG4gICAgICAgICAgICBsZXQgc2NvcmVzID0ge31cbiAgICAgICAgICAgIGN1cnJlbnRJbmRleC5yZXN1bHRzID0gW11cbiAgICAgICAgICAgIGN1cnJlbnRJbmRleC5lbW9qaXMgPSB7fVxuXG4gICAgICAgICAgICBmb3IgKGxldCBlbW9qaUlkIGluIGVtb2ppcykge1xuICAgICAgICAgICAgICBsZXQgZW1vamkgPSBlbW9qaXNbZW1vamlJZF1cbiAgICAgICAgICAgICAgLy8gc2VhcmNoIGlzIGEgY29tbWEtc2VwYXJhdGVkIHN0cmluZyB3aXRoIHdvcmRzLCByZWxhdGVkXG4gICAgICAgICAgICAgIC8vIHRvIHRoZSBlbW9qaSwgZm9yIGV4YW1wbGU6XG4gICAgICAgICAgICAgIC8vIHNlYXJjaDogXCJzbWlsZXksc21pbGluZyxmYWNlLGpveSxoYWhhLDpkLDopLHNtaWxlLGZ1bm55LD0pLD0tKVwiLFxuICAgICAgICAgICAgICBsZXQgc2VhcmNoID0gZW1vamkuX2RhdGEuc2VhcmNoXG4gICAgICAgICAgICAgIGxldCBzdWIgPSB2YWx1ZS5zdWJzdHIoMCwgbGVuZ3RoKVxuICAgICAgICAgICAgICBsZXQgc3ViSW5kZXggPSBzZWFyY2guaW5kZXhPZihzdWIpXG4gICAgICAgICAgICAgIGlmIChzdWJJbmRleCAhPSAtMSkge1xuICAgICAgICAgICAgICAgIGxldCBzY29yZSA9IHN1YkluZGV4ICsgMVxuICAgICAgICAgICAgICAgIGlmIChzdWIgPT0gZW1vamlJZCkgc2NvcmUgPSAwXG5cbiAgICAgICAgICAgICAgICBjdXJyZW50SW5kZXgucmVzdWx0cy5wdXNoKGVtb2ppKVxuICAgICAgICAgICAgICAgIGN1cnJlbnRJbmRleC5lbW9qaXNbZW1vamlJZF0gPSBlbW9qaVxuXG4gICAgICAgICAgICAgICAgc2NvcmVzW2Vtb2ppSWRdID0gc2NvcmVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3VycmVudEluZGV4LnJlc3VsdHMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgICB2YXIgYVNjb3JlID0gc2NvcmVzW2EuaWRdLFxuICAgICAgICAgICAgICAgIGJTY29yZSA9IHNjb3Jlc1tiLmlkXVxuICAgICAgICAgICAgICByZXR1cm4gYVNjb3JlIC0gYlNjb3JlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIGNvbnRpbnVlIHNlYXJjaCBpbiB0aGUgcmVkdWNlZCBzZXQgb2YgZW1vamlzXG4gICAgICAgICAgZW1vamlzID0gY3VycmVudEluZGV4LmVtb2ppc1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjdXJyZW50SW5kZXgucmVzdWx0c1xuICAgICAgICAvLyBUaGUgXCJmaWx0ZXJcIiBjYWxsIHJlbW92ZXMgdW5kZWZpbmVkIHZhbHVlcyBmcm9tIGFsbFJlc3VsdHNcbiAgICAgICAgLy8gYXJyYXksIGZvciBleGFtcGxlLCBpZiB3ZSBoYXZlIFwidGVzdCBcIiAod2l0aCB0cmFpbGluZyBzcGFjZSksXG4gICAgICAgIC8vIHdlIHdpbGwgZ2V0IFwiW0FycmF5LCB1bmRlZmluZWRdXCIgZm9yIGFsbFJlc3VsdHMgYW5kIGFmdGVyXG4gICAgICAgIC8vIHRoZSBcImZpbHRlclwiIGNhbGwgaXQgd2lsbCB0dXJuIGludG8gXCJbQXJyYXldXCJcbiAgICAgIH0pXG4gICAgICAuZmlsdGVyKChhKSA9PiBhKVxuXG4gICAgdmFyIHJlc3VsdHMgPSBudWxsXG4gICAgaWYgKGFsbFJlc3VsdHMubGVuZ3RoID4gMSkge1xuICAgICAgcmVzdWx0cyA9IGludGVyc2VjdC5hcHBseShudWxsLCBhbGxSZXN1bHRzKVxuICAgIH0gZWxzZSBpZiAoYWxsUmVzdWx0cy5sZW5ndGgpIHtcbiAgICAgIHJlc3VsdHMgPSBhbGxSZXN1bHRzWzBdXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdHMgPSBbXVxuICAgIH1cbiAgICBpZiAocmVzdWx0cyAmJiByZXN1bHRzLmxlbmd0aCA+IG1heFJlc3VsdHMpIHtcbiAgICAgIHJlc3VsdHMgPSByZXN1bHRzLnNsaWNlKDAsIG1heFJlc3VsdHMpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzXG4gIH1cblxuICBhZGRDdXN0b21FbW9qaShjdXN0b21FbW9qaSkge1xuICAgIGxldCBlbW9qaURhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBjdXN0b21FbW9qaSwge1xuICAgICAgaWQ6IGN1c3RvbUVtb2ppLnNob3J0X25hbWVzWzBdLFxuICAgICAgY3VzdG9tOiB0cnVlLFxuICAgIH0pXG4gICAgaWYgKCFlbW9qaURhdGEuc2VhcmNoKSB7XG4gICAgICBlbW9qaURhdGEuc2VhcmNoID0gYnVpbGRTZWFyY2goZW1vamlEYXRhKVxuICAgIH1cbiAgICBsZXQgZW1vamkgPSBuZXcgRW1vamlEYXRhKGVtb2ppRGF0YSlcbiAgICB0aGlzLl9lbW9qaXNbZW1vamkuaWRdID0gZW1vamlcbiAgICB0aGlzLl9jdXN0b21DYXRlZ29yeS5lbW9qaXMucHVzaChlbW9qaSlcbiAgICByZXR1cm4gZW1vamlcbiAgfVxuXG4gIGFkZEVtb2ppKGVtb2ppSWQpIHtcbiAgICAvLyBXZSBleHBlY3QgdGhlIGNvcnJlY3QgZW1vamkgaWQgdGhhdCBpcyBwcmVzZW50IGluIHRoZSBlbW9qaXMgZGF0YS5cbiAgICBsZXQgZGF0YSA9IHRoaXMuX2RhdGEuZW1vamlzW2Vtb2ppSWRdXG5cbiAgICBpZiAoIXRoaXMuaXNFbW9qaU5lZWRlZChkYXRhKSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgbGV0IGVtb2ppID0gbmV3IEVtb2ppRGF0YShkYXRhKVxuICAgIHRoaXMuX2Vtb2ppc1tlbW9qaUlkXSA9IGVtb2ppXG4gICAgaWYgKGVtb2ppLm5hdGl2ZSkge1xuICAgICAgdGhpcy5fbmF0aXZlRW1vamlzW2Vtb2ppLm5hdGl2ZV0gPSBlbW9qaVxuICAgIH1cbiAgICBpZiAoZW1vamkuX3NraW5zKSB7XG4gICAgICBmb3IgKGxldCBpZHggaW4gZW1vamkuX3NraW5zKSB7XG4gICAgICAgIGxldCBza2luID0gZW1vamkuX3NraW5zW2lkeF1cbiAgICAgICAgaWYgKHNraW4ubmF0aXZlKSB7XG4gICAgICAgICAgdGhpcy5fbmF0aXZlRW1vamlzW3NraW4ubmF0aXZlXSA9IHNraW5cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChlbW9qaS5lbW90aWNvbnMpIHtcbiAgICAgIGVtb2ppLmVtb3RpY29ucy5mb3JFYWNoKChlbW90aWNvbikgPT4ge1xuICAgICAgICBpZiAodGhpcy5fZW1vdGljb25zW2Vtb3RpY29uXSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2Vtb3RpY29uc1tlbW90aWNvbl0gPSBlbW9qaUlkXG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gZW1vamlcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB3ZSBuZWVkIHRvIGluY2x1ZGUgZ2l2ZW4gY2F0ZWdvcnkuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjYXRlZ29yeV9pZCAtIFRoZSBjYXRlZ29yeSBpZC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gLSBXaGV0aGVyIHRvIGluY2x1ZGUgdGhlIGVtb2ppLlxuICAgKi9cbiAgaXNDYXRlZ29yeU5lZWRlZChjYXRlZ29yeV9pZCkge1xuICAgIGxldCBpc0luY2x1ZGVkID1cbiAgICAgIHRoaXMuX2luY2x1ZGUgJiYgdGhpcy5faW5jbHVkZS5sZW5ndGhcbiAgICAgICAgPyB0aGlzLl9pbmNsdWRlLmluZGV4T2YoY2F0ZWdvcnlfaWQpID4gLTFcbiAgICAgICAgOiB0cnVlXG4gICAgbGV0IGlzRXhjbHVkZWQgPVxuICAgICAgdGhpcy5fZXhjbHVkZSAmJiB0aGlzLl9leGNsdWRlLmxlbmd0aFxuICAgICAgICA/IHRoaXMuX2V4Y2x1ZGUuaW5kZXhPZihjYXRlZ29yeV9pZCkgPiAtMVxuICAgICAgICA6IGZhbHNlXG4gICAgaWYgKCFpc0luY2x1ZGVkIHx8IGlzRXhjbHVkZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHdlIG5lZWQgdG8gaW5jbHVkZSBnaXZlbiBlbW9qaS5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGVtb2ppIC0gVGhlIHJhdyBlbW9qaSBvYmplY3QuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IC0gV2hldGhlciB0byBpbmNsdWRlIHRoZSBlbW9qaS5cbiAgICovXG4gIGlzRW1vamlOZWVkZWQoZW1vamkpIHtcbiAgICBpZiAodGhpcy5fZW1vamlzRmlsdGVyKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZW1vamlzRmlsdGVyKGVtb2ppKVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFbW9qaURhdGEge1xuICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgdGhpcy5fZGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGEpXG4gICAgdGhpcy5fc2tpbnMgPSBudWxsXG4gICAgaWYgKHRoaXMuX2RhdGEuc2tpbl92YXJpYXRpb25zKSB7XG4gICAgICB0aGlzLl9za2lucyA9IFtdXG4gICAgICBmb3IgKHZhciBza2luSWR4IGluIFNLSU5TKSB7XG4gICAgICAgIGxldCBza2luS2V5ID0gU0tJTlNbc2tpbklkeF1cbiAgICAgICAgbGV0IHZhcmlhdGlvbkRhdGEgPSB0aGlzLl9kYXRhLnNraW5fdmFyaWF0aW9uc1tza2luS2V5XVxuICAgICAgICBsZXQgc2tpbkRhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhKVxuICAgICAgICBmb3IgKGxldCBrIGluIHZhcmlhdGlvbkRhdGEpIHtcbiAgICAgICAgICBza2luRGF0YVtrXSA9IHZhcmlhdGlvbkRhdGFba11cbiAgICAgICAgfVxuICAgICAgICBkZWxldGUgc2tpbkRhdGEuc2tpbl92YXJpYXRpb25zXG4gICAgICAgIHNraW5EYXRhWydza2luX3RvbmUnXSA9IHBhcnNlSW50KHNraW5JZHgpICsgMVxuICAgICAgICB0aGlzLl9za2lucy5wdXNoKG5ldyBFbW9qaURhdGEoc2tpbkRhdGEpKVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9zYW5pdGl6ZWQgPSBzYW5pdGl6ZSh0aGlzLl9kYXRhKVxuICAgIGZvciAobGV0IGtleSBpbiB0aGlzLl9zYW5pdGl6ZWQpIHtcbiAgICAgIHRoaXNba2V5XSA9IHRoaXMuX3Nhbml0aXplZFtrZXldXG4gICAgfVxuICAgIHRoaXMuc2hvcnRfbmFtZXMgPSB0aGlzLl9kYXRhLnNob3J0X25hbWVzXG4gICAgdGhpcy5zaG9ydF9uYW1lID0gdGhpcy5fZGF0YS5zaG9ydF9uYW1lc1swXVxuICAgIE9iamVjdC5mcmVlemUodGhpcylcbiAgfVxuXG4gIGdldFNraW4oc2tpbklkeCkge1xuICAgIGlmIChza2luSWR4ICYmIHNraW5JZHggIT0gJ25hdGl2ZScgJiYgdGhpcy5fc2tpbnMpIHtcbiAgICAgIHJldHVybiB0aGlzLl9za2luc1tza2luSWR4IC0gMV1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGdldFBvc2l0aW9uKCkge1xuICAgIGxldCBtdWx0aXBseSA9IDEwMCAvIFNIRUVUX0NPTFVNTlMsXG4gICAgICB4ID0gTWF0aC5yb3VuZChtdWx0aXBseSAqIHRoaXMuX2RhdGEuc2hlZXRfeCAqIDEwMCkgLyAxMDAsXG4gICAgICB5ID0gTWF0aC5yb3VuZChtdWx0aXBseSAqIHRoaXMuX2RhdGEuc2hlZXRfeSAqIDEwMCkgLyAxMDBcbiAgICByZXR1cm4gYCR7eH0lICR7eX0lYFxuICB9XG5cbiAgYXJpYUxhYmVsKCkge1xuICAgIHJldHVybiBbdGhpcy5uYXRpdmVdLmNvbmNhdCh0aGlzLnNob3J0X25hbWVzKS5maWx0ZXIoQm9vbGVhbikuam9pbignLCAnKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFbW9qaVZpZXcge1xuICAvKipcbiAgICogZW1vamkgLSBFbW9qaSB0byBkaXNwbGF5XG4gICAqIHNldCAtIHN0cmluZywgZW1vamkgc2V0IG5hbWVcbiAgICogbmF0aXZlIC0gYm9vbGVhbiwgd2hldGhlciB0byByZW5kZXIgbmF0aXZlIGVtb2ppXG4gICAqIGZhbGxiYWNrIC0gZmFsbGJhY2sgZnVuY3Rpb24gdG8gcmVuZGVyIG1pc3NpbmcgZW1vamksIG9wdGlvbmFsXG4gICAqIGVtb2ppVG9vbHRpcCAtIHdldGhlciB3ZSBuZWVkIHRvIHNob3cgdGhlIGVtb2ppIHRvb2x0aXAsIG9wdGlvbmFsXG4gICAqIGVtb2ppU2l6ZSAtIGVtb2ppIHNpemUgaW4gcGl4ZWxzLCBvcHRpb25hbFxuICAgKi9cbiAgY29uc3RydWN0b3IoZW1vamksIHNraW4sIHNldCwgbmF0aXZlLCBmYWxsYmFjaywgZW1vamlUb29sdGlwLCBlbW9qaVNpemUpIHtcbiAgICB0aGlzLl9lbW9qaSA9IGVtb2ppXG4gICAgdGhpcy5fbmF0aXZlID0gbmF0aXZlXG4gICAgdGhpcy5fc2tpbiA9IHNraW5cbiAgICB0aGlzLl9zZXQgPSBzZXRcbiAgICB0aGlzLl9mYWxsYmFjayA9IGZhbGxiYWNrXG5cbiAgICB0aGlzLmNhblJlbmRlciA9IHRoaXMuX2NhblJlbmRlcigpXG4gICAgdGhpcy5jc3NDbGFzcyA9IHRoaXMuX2Nzc0NsYXNzKClcbiAgICB0aGlzLmNzc1N0eWxlID0gdGhpcy5fY3NzU3R5bGUoZW1vamlTaXplKVxuICAgIHRoaXMuY29udGVudCA9IHRoaXMuX2NvbnRlbnQoKVxuICAgIHRoaXMudGl0bGUgPSBlbW9qaVRvb2x0aXAgPT09IHRydWUgPyBlbW9qaS5zaG9ydF9uYW1lIDogbnVsbFxuICAgIHRoaXMuYXJpYUxhYmVsID0gZW1vamkuYXJpYUxhYmVsKClcblxuICAgIE9iamVjdC5mcmVlemUodGhpcylcbiAgfVxuXG4gIGdldEVtb2ppKCkge1xuICAgIHJldHVybiB0aGlzLl9lbW9qaS5nZXRTa2luKHRoaXMuX3NraW4pXG4gIH1cblxuICBfY2FuUmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLl9pc0N1c3RvbSgpIHx8IHRoaXMuX2lzTmF0aXZlKCkgfHwgdGhpcy5faGFzRW1vamkoKSB8fCB0aGlzLl9mYWxsYmFja1xuICAgIClcbiAgfVxuXG4gIF9jc3NDbGFzcygpIHtcbiAgICByZXR1cm4gWydlbW9qaS1zZXQtJyArIHRoaXMuX3NldCwgJ2Vtb2ppLXR5cGUtJyArIHRoaXMuX2Vtb2ppVHlwZSgpXVxuICB9XG5cbiAgX2Nzc1N0eWxlKGVtb2ppU2l6ZSkge1xuICAgIGxldCBjc3NTdHlsZSA9IHt9XG4gICAgaWYgKHRoaXMuX2lzQ3VzdG9tKCkpIHtcbiAgICAgIGNzc1N0eWxlID0ge1xuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoJyArIHRoaXMuZ2V0RW1vamkoKS5fZGF0YS5pbWFnZVVybCArICcpJyxcbiAgICAgICAgYmFja2dyb3VuZFNpemU6ICcxMDAlJyxcbiAgICAgICAgd2lkdGg6IGVtb2ppU2l6ZSArICdweCcsXG4gICAgICAgIGhlaWdodDogZW1vamlTaXplICsgJ3B4JyxcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuX2hhc0Vtb2ppKCkgJiYgIXRoaXMuX2lzTmF0aXZlKCkpIHtcbiAgICAgIGNzc1N0eWxlID0ge1xuICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IHRoaXMuZ2V0RW1vamkoKS5nZXRQb3NpdGlvbigpLFxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW1vamlTaXplKSB7XG4gICAgICBpZiAodGhpcy5faXNOYXRpdmUoKSkge1xuICAgICAgICAvLyBTZXQgZm9udC1zaXplIGZvciBuYXRpdmUgZW1vamkuXG4gICAgICAgIGNzc1N0eWxlID0gT2JqZWN0LmFzc2lnbihjc3NTdHlsZSwge1xuICAgICAgICAgIC8vIGZvbnQtc2l6ZSBpcyB1c2VkIGZvciBuYXRpdmUgZW1vamkgd2hpY2ggd2UgbmVlZFxuICAgICAgICAgIC8vIHRvIHNjYWxlIHdpdGggMC45NSBmYWN0b3IgdG8gaGF2ZSB0aGVtIGxvb2sgYXBwcm94aW1hdGVseVxuICAgICAgICAgIC8vIHRoZSBzYW1lIHNpemUgYXMgaW1hZ2UtYmFzZWQgZW1vamkuXG4gICAgICAgICAgZm9udFNpemU6IE1hdGgucm91bmQoZW1vamlTaXplICogMC45NSAqIDEwKSAvIDEwICsgJ3B4JyxcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFNldCB3aWR0aC9oZWlnaHQgZm9yIGltYWdlIGVtb2ppLlxuICAgICAgICBjc3NTdHlsZSA9IE9iamVjdC5hc3NpZ24oY3NzU3R5bGUsIHtcbiAgICAgICAgICB3aWR0aDogZW1vamlTaXplICsgJ3B4JyxcbiAgICAgICAgICBoZWlnaHQ6IGVtb2ppU2l6ZSArICdweCcsXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjc3NTdHlsZVxuICB9XG5cbiAgX2NvbnRlbnQoKSB7XG4gICAgaWYgKHRoaXMuX2lzQ3VzdG9tKCkpIHtcbiAgICAgIHJldHVybiAnJ1xuICAgIH1cbiAgICBpZiAodGhpcy5faXNOYXRpdmUoKSkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0RW1vamkoKS5uYXRpdmVcbiAgICB9XG4gICAgaWYgKHRoaXMuX2hhc0Vtb2ppKCkpIHtcbiAgICAgIHJldHVybiAnJ1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZmFsbGJhY2sgPyB0aGlzLl9mYWxsYmFjayh0aGlzLmdldEVtb2ppKCkpIDogbnVsbFxuICB9XG5cbiAgX2lzTmF0aXZlKCkge1xuICAgIHJldHVybiB0aGlzLl9uYXRpdmVcbiAgfVxuXG4gIF9pc0N1c3RvbSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRFbW9qaSgpLmN1c3RvbVxuICB9XG5cbiAgX2hhc0Vtb2ppKCkge1xuICAgIGlmICghdGhpcy5nZXRFbW9qaSgpLl9kYXRhKSB7XG4gICAgICAvLyBSZXR1cm4gZmFsc2UgaWYgd2UgaGF2ZSBubyBkYXRhLlxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIGNvbnN0IGhhc0ltYWdlID0gdGhpcy5nZXRFbW9qaSgpLl9kYXRhWydoYXNfaW1nXycgKyB0aGlzLl9zZXRdXG4gICAgaWYgKGhhc0ltYWdlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIElmIHRoZXJlIGlzIG5vIGhhc19pbWdfeHh4IGluIHRoZSBkYXRhLCB3ZSBhcmUgd29ya2luZyB3aXRoXG4gICAgICAvLyBzcGVjaWZpYyBkYXRhIGZpbGUsIGxpa2UgZmFjZWJvb2suanNvbiwgc28gd2UgYXNzdW1lIGFsbFxuICAgICAgLy8gZW1vamlzIGFyZSBhdmFpbGFibGUgKHRoZSA6c2V0IHNldHRpbmcgZm9yIHBpY2tlciBzaG91bGRcbiAgICAgIC8vIG1hdGNoIHRoZSBkYXRhIGZpbGUpLlxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgLy8gT3RoZXJ3aXNlLCB3ZSBhcmUgdXNpbmcgYWxsLmpzb24gYW5kIGNhbiBzd2l0Y2ggYmV0d2VlbiBkaWZmZXJlbnRcbiAgICAvLyBzZXRzIC0gaW4gdGhpcyBjYXNlIHRoZSBgaGFzX2ltZ197c2V0X25hbWV9YCBpcyBhIGJvb2xlYW4gdGhhdFxuICAgIC8vIGluZGljYXRlcyBpZiB0aGVyZSBpcyBzdWNoIGltYWdlIG9yIG5vdCBmb3IgYSBnaXZlbiBzZXQuXG4gICAgcmV0dXJuIGhhc0ltYWdlXG4gIH1cblxuICBfZW1vamlUeXBlKCkge1xuICAgIGlmICh0aGlzLl9pc0N1c3RvbSgpKSB7XG4gICAgICByZXR1cm4gJ2N1c3RvbSdcbiAgICB9XG4gICAgaWYgKHRoaXMuX2lzTmF0aXZlKCkpIHtcbiAgICAgIHJldHVybiAnbmF0aXZlJ1xuICAgIH1cbiAgICBpZiAodGhpcy5faGFzRW1vamkoKSkge1xuICAgICAgcmV0dXJuICdpbWFnZSdcbiAgICB9XG4gICAgcmV0dXJuICdmYWxsYmFjaydcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2FuaXRpemUoZW1vamkpIHtcbiAgdmFyIHtcbiAgICAgIG5hbWUsXG4gICAgICBzaG9ydF9uYW1lcyxcbiAgICAgIHNraW5fdG9uZSxcbiAgICAgIHNraW5fdmFyaWF0aW9ucyxcbiAgICAgIGVtb3RpY29ucyxcbiAgICAgIHVuaWZpZWQsXG4gICAgICBjdXN0b20sXG4gICAgICBpbWFnZVVybCxcbiAgICB9ID0gZW1vamksXG4gICAgaWQgPSBlbW9qaS5pZCB8fCBzaG9ydF9uYW1lc1swXSxcbiAgICBjb2xvbnMgPSBgOiR7aWR9OmBcblxuICBpZiAoY3VzdG9tKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkLFxuICAgICAgbmFtZSxcbiAgICAgIGNvbG9ucyxcbiAgICAgIGVtb3RpY29ucyxcbiAgICAgIGN1c3RvbSxcbiAgICAgIGltYWdlVXJsLFxuICAgIH1cbiAgfVxuXG4gIGlmIChza2luX3RvbmUpIHtcbiAgICBjb2xvbnMgKz0gYDpza2luLXRvbmUtJHtza2luX3RvbmV9OmBcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaWQsXG4gICAgbmFtZSxcbiAgICBjb2xvbnMsXG4gICAgZW1vdGljb25zLFxuICAgIHVuaWZpZWQ6IHVuaWZpZWQudG9Mb3dlckNhc2UoKSxcbiAgICBza2luOiBza2luX3RvbmUgfHwgKHNraW5fdmFyaWF0aW9ucyA/IDEgOiBudWxsKSxcbiAgICBuYXRpdmU6IHVuaWZpZWRUb05hdGl2ZSh1bmlmaWVkKSxcbiAgfVxufVxuIiwiaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUnXG5cbmNvbnN0IERFRkFVTFRTID0gW1xuICAnKzEnLFxuICAnZ3Jpbm5pbmcnLFxuICAna2lzc2luZ19oZWFydCcsXG4gICdoZWFydF9leWVzJyxcbiAgJ2xhdWdoaW5nJyxcbiAgJ3N0dWNrX291dF90b25ndWVfd2lua2luZ19leWUnLFxuICAnc3dlYXRfc21pbGUnLFxuICAnam95JyxcbiAgJ3NjcmVhbScsXG4gICdkaXNhcHBvaW50ZWQnLFxuICAndW5hbXVzZWQnLFxuICAnd2VhcnknLFxuICAnc29iJyxcbiAgJ3N1bmdsYXNzZXMnLFxuICAnaGVhcnQnLFxuICAncG9vcCcsXG5dXG5cbmxldCBmcmVxdWVudGx5LCBpbml0aWFsaXplZFxubGV0IGRlZmF1bHRzID0ge31cblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgaW5pdGlhbGl6ZWQgPSB0cnVlXG4gIGZyZXF1ZW50bHkgPSBzdG9yZS5nZXQoJ2ZyZXF1ZW50bHknKVxufVxuXG5mdW5jdGlvbiBhZGQoZW1vamkpIHtcbiAgaWYgKCFpbml0aWFsaXplZCkgaW5pdCgpXG4gIHZhciB7IGlkIH0gPSBlbW9qaVxuXG4gIGZyZXF1ZW50bHkgfHwgKGZyZXF1ZW50bHkgPSBkZWZhdWx0cylcbiAgZnJlcXVlbnRseVtpZF0gfHwgKGZyZXF1ZW50bHlbaWRdID0gMClcbiAgZnJlcXVlbnRseVtpZF0gKz0gMVxuXG4gIHN0b3JlLnNldCgnbGFzdCcsIGlkKVxuICBzdG9yZS5zZXQoJ2ZyZXF1ZW50bHknLCBmcmVxdWVudGx5KVxufVxuXG5mdW5jdGlvbiBnZXQobWF4TnVtYmVyKSB7XG4gIGlmICghaW5pdGlhbGl6ZWQpIGluaXQoKVxuICBpZiAoIWZyZXF1ZW50bHkpIHtcbiAgICBkZWZhdWx0cyA9IHt9XG5cbiAgICBjb25zdCByZXN1bHQgPSBbXVxuXG4gICAgbGV0IGRlZmF1bHRMZW5ndGggPSBNYXRoLm1pbihtYXhOdW1iZXIsIERFRkFVTFRTLmxlbmd0aClcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRlZmF1bHRMZW5ndGg7IGkrKykge1xuICAgICAgZGVmYXVsdHNbREVGQVVMVFNbaV1dID0gcGFyc2VJbnQoKGRlZmF1bHRMZW5ndGggLSBpKSAvIDQsIDEwKSArIDFcbiAgICAgIHJlc3VsdC5wdXNoKERFRkFVTFRTW2ldKVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIGNvbnN0IHF1YW50aXR5ID0gbWF4TnVtYmVyXG4gIGNvbnN0IGZyZXF1ZW50bHlLZXlzID0gW11cblxuICBmb3IgKGxldCBrZXkgaW4gZnJlcXVlbnRseSkge1xuICAgIGlmIChmcmVxdWVudGx5Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGZyZXF1ZW50bHlLZXlzLnB1c2goa2V5KVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHNvcnRlZCA9IGZyZXF1ZW50bHlLZXlzXG4gICAgLnNvcnQoKGEsIGIpID0+IGZyZXF1ZW50bHlbYV0gLSBmcmVxdWVudGx5W2JdKVxuICAgIC5yZXZlcnNlKClcbiAgY29uc3Qgc2xpY2VkID0gc29ydGVkLnNsaWNlKDAsIHF1YW50aXR5KVxuXG4gIGNvbnN0IGxhc3QgPSBzdG9yZS5nZXQoJ2xhc3QnKVxuXG4gIGlmIChsYXN0ICYmIHNsaWNlZC5pbmRleE9mKGxhc3QpID09IC0xKSB7XG4gICAgc2xpY2VkLnBvcCgpXG4gICAgc2xpY2VkLnB1c2gobGFzdClcbiAgfVxuXG4gIHJldHVybiBzbGljZWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgeyBhZGQsIGdldCB9XG4iLCJpbXBvcnQgc3RyaW5nRnJvbUNvZGVQb2ludCBmcm9tICcuLi9wb2x5ZmlsbHMvc3RyaW5nRnJvbUNvZGVQb2ludCdcblxuZnVuY3Rpb24gdW5pZmllZFRvTmF0aXZlKHVuaWZpZWQpIHtcbiAgdmFyIHVuaWNvZGVzID0gdW5pZmllZC5zcGxpdCgnLScpLFxuICAgIGNvZGVQb2ludHMgPSB1bmljb2Rlcy5tYXAoKHUpID0+IGAweCR7dX1gKVxuXG4gIHJldHVybiBzdHJpbmdGcm9tQ29kZVBvaW50LmFwcGx5KG51bGwsIGNvZGVQb2ludHMpXG59XG5cbmZ1bmN0aW9uIHVuaXEoYXJyKSB7XG4gIHJldHVybiBhcnIucmVkdWNlKChhY2MsIGl0ZW0pID0+IHtcbiAgICBpZiAoYWNjLmluZGV4T2YoaXRlbSkgPT09IC0xKSB7XG4gICAgICBhY2MucHVzaChpdGVtKVxuICAgIH1cbiAgICByZXR1cm4gYWNjXG4gIH0sIFtdKVxufVxuXG5mdW5jdGlvbiBpbnRlcnNlY3QoYSwgYikge1xuICBjb25zdCB1bmlxQSA9IHVuaXEoYSlcbiAgY29uc3QgdW5pcUIgPSB1bmlxKGIpXG5cbiAgcmV0dXJuIHVuaXFBLmZpbHRlcigoaXRlbSkgPT4gdW5pcUIuaW5kZXhPZihpdGVtKSA+PSAwKVxufVxuXG5mdW5jdGlvbiBkZWVwTWVyZ2UoYSwgYikge1xuICB2YXIgbyA9IHt9XG5cbiAgZm9yIChsZXQga2V5IGluIGEpIHtcbiAgICBsZXQgb3JpZ2luYWxWYWx1ZSA9IGFba2V5XSxcbiAgICAgIHZhbHVlID0gb3JpZ2luYWxWYWx1ZVxuXG4gICAgaWYgKGIuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgdmFsdWUgPSBiW2tleV1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgdmFsdWUgPSBkZWVwTWVyZ2Uob3JpZ2luYWxWYWx1ZSwgdmFsdWUpXG4gICAgfVxuXG4gICAgb1trZXldID0gdmFsdWVcbiAgfVxuXG4gIHJldHVybiBvXG59XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zb25pY2RvZS9tZWFzdXJlLXNjcm9sbGJhclxuZnVuY3Rpb24gbWVhc3VyZVNjcm9sbGJhcigpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PSAndW5kZWZpbmVkJykgcmV0dXJuIDBcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICBkaXYuc3R5bGUud2lkdGggPSAnMTAwcHgnXG4gIGRpdi5zdHlsZS5oZWlnaHQgPSAnMTAwcHgnXG4gIGRpdi5zdHlsZS5vdmVyZmxvdyA9ICdzY3JvbGwnXG4gIGRpdi5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSdcbiAgZGl2LnN0eWxlLnRvcCA9ICctOTk5OXB4J1xuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KVxuICBjb25zdCBzY3JvbGxiYXJXaWR0aCA9IGRpdi5vZmZzZXRXaWR0aCAtIGRpdi5jbGllbnRXaWR0aFxuICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRpdilcblxuICByZXR1cm4gc2Nyb2xsYmFyV2lkdGhcbn1cblxuZXhwb3J0IHsgdW5pcSwgaW50ZXJzZWN0LCBkZWVwTWVyZ2UsIHVuaWZpZWRUb05hdGl2ZSwgbWVhc3VyZVNjcm9sbGJhciB9XG4iLCJleHBvcnQgY2xhc3MgUGlja2VyVmlldyB7XG4gIGNvbnN0cnVjdG9yKHBpY2tlckNvbXBvbmVudCkge1xuICAgIHRoaXMuX3ZtID0gcGlja2VyQ29tcG9uZW50XG4gICAgdGhpcy5fZGF0YSA9IHBpY2tlckNvbXBvbmVudC5kYXRhXG4gICAgdGhpcy5fcGVyTGluZSA9IHBpY2tlckNvbXBvbmVudC5wZXJMaW5lXG5cbiAgICB0aGlzLl9jYXRlZ29yaWVzID0gW11cbiAgICB0aGlzLl9jYXRlZ29yaWVzLnB1c2goLi4udGhpcy5fZGF0YS5jYXRlZ29yaWVzKCkpXG4gICAgdGhpcy5fY2F0ZWdvcmllcyA9IHRoaXMuX2NhdGVnb3JpZXMuZmlsdGVyKChjYXRlZ29yeSkgPT4ge1xuICAgICAgcmV0dXJuIGNhdGVnb3J5LmVtb2ppcy5sZW5ndGggPiAwXG4gICAgfSlcblxuICAgIHRoaXMuX2NhdGVnb3JpZXNbMF0uZmlyc3QgPSB0cnVlXG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzLl9jYXRlZ29yaWVzKVxuXG4gICAgdGhpcy5hY3RpdmVDYXRlZ29yeSA9IHRoaXMuX2NhdGVnb3JpZXNbMF1cbiAgICB0aGlzLnNlYXJjaEVtb2ppcyA9IG51bGxcblxuICAgIC8vIFByZXZpZXcgZW1vamksIHNob3duIG9uIG1vdXNlIG92ZXIgb3Igd2hlbiB3ZSBtb3ZlXG4gICAgLy8gd2l0aCBhcnJvdyBrZXlzLlxuICAgIHRoaXMucHJldmlld0Vtb2ppID0gbnVsbFxuICAgIC8vIEluZGV4ZXMgYXJlIHVzZWQgdG8ga2VlcCB0aGUgcG9zaXRpb24gd2hlbiBtb3ZpbmdcbiAgICAvLyB3aXRoIGFycm93czogY3VycmVudCBjYXRlZ29yeSBhbmQgY3VycmVudCBlbW9qaVxuICAgIC8vIGluc2lkZSB0aGUgY2F0ZWdvcnkuXG4gICAgdGhpcy5wcmV2aWV3RW1vamlDYXRlZ29yeUlkeCA9IDBcbiAgICB0aGlzLnByZXZpZXdFbW9qaUlkeCA9IC0xXG4gIH1cblxuICBvblNjcm9sbCgpIHtcbiAgICBjb25zdCBzY3JvbGxFbGVtZW50ID0gdGhpcy5fdm0uJHJlZnMuc2Nyb2xsXG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gc2Nyb2xsRWxlbWVudC5zY3JvbGxUb3BcblxuICAgIGxldCBhY3RpdmVDYXRlZ29yeSA9IHRoaXMuZmlsdGVyZWRDYXRlZ29yaWVzWzBdXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLmZpbHRlcmVkQ2F0ZWdvcmllcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBjYXRlZ29yeSA9IHRoaXMuZmlsdGVyZWRDYXRlZ29yaWVzW2ldXG4gICAgICBsZXQgY29tcG9uZW50ID0gdGhpcy5fdm0uZ2V0Q2F0ZWdvcnlDb21wb25lbnQoaSlcbiAgICAgIC8vIFRoZSBgLTUwYCBvZmZzZXQgc3dpdGNoZXMgYWN0aXZlIGNhdGVnb3J5IChzZWxlY3RlZCBpbiB0aGVcbiAgICAgIC8vIGFuY2hvcnMgYmFyKSBhIGJpdCBlYXJpbGVyLCBiZWZvcmUgaXQgYWN0dWFsbHkgcmVhY2hlcyB0aGUgdG9wLlxuICAgICAgaWYgKGNvbXBvbmVudCAmJiBjb21wb25lbnQuJGVsLm9mZnNldFRvcCAtIDUwID4gc2Nyb2xsVG9wKSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgICBhY3RpdmVDYXRlZ29yeSA9IGNhdGVnb3J5XG4gICAgfVxuICAgIHRoaXMuYWN0aXZlQ2F0ZWdvcnkgPSBhY3RpdmVDYXRlZ29yeVxuICB9XG5cbiAgZ2V0IGFsbENhdGVnb3JpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhdGVnb3JpZXNcbiAgfVxuXG4gIGdldCBmaWx0ZXJlZENhdGVnb3JpZXMoKSB7XG4gICAgaWYgKHRoaXMuc2VhcmNoRW1vamlzKSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6ICdzZWFyY2gnLFxuICAgICAgICAgIG5hbWU6ICdTZWFyY2gnLFxuICAgICAgICAgIGVtb2ppczogdGhpcy5zZWFyY2hFbW9qaXMsXG4gICAgICAgIH0sXG4gICAgICBdXG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9jYXRlZ29yaWVzLmZpbHRlcigoY2F0ZWdvcnkpID0+IHtcbiAgICAgIGxldCBoYXNFbW9qaXMgPSBjYXRlZ29yeS5lbW9qaXMubGVuZ3RoID4gMFxuICAgICAgcmV0dXJuIGhhc0Vtb2ppc1xuICAgIH0pXG4gIH1cblxuICBnZXQgcHJldmlld0Vtb2ppQ2F0ZWdvcnkoKSB7XG4gICAgaWYgKHRoaXMucHJldmlld0Vtb2ppQ2F0ZWdvcnlJZHggPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyZWRDYXRlZ29yaWVzW3RoaXMucHJldmlld0Vtb2ppQ2F0ZWdvcnlJZHhdXG4gICAgfVxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBvbkFuY2hvckNsaWNrKGNhdGVnb3J5KSB7XG4gICAgaWYgKHRoaXMuc2VhcmNoRW1vamlzKSB7XG4gICAgICAvLyBObyBjYXRlZ29yaWVzIGFyZSBzaG93biB3aGVuIHNlYXJjaCBpcyBhY3RpdmUuXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgbGV0IGkgPSB0aGlzLmZpbHRlcmVkQ2F0ZWdvcmllcy5pbmRleE9mKGNhdGVnb3J5KVxuICAgIGxldCBjb21wb25lbnQgPSB0aGlzLl92bS5nZXRDYXRlZ29yeUNvbXBvbmVudChpKVxuICAgIGxldCBzY3JvbGxUb0NvbXBvbmVudCA9ICgpID0+IHtcbiAgICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgbGV0IHRvcCA9IGNvbXBvbmVudC4kZWwub2Zmc2V0VG9wXG4gICAgICAgIGlmIChjYXRlZ29yeS5maXJzdCkge1xuICAgICAgICAgIHRvcCA9IDBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl92bS4kcmVmcy5zY3JvbGwuc2Nyb2xsVG9wID0gdG9wXG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLl92bS5pbmZpbml0ZVNjcm9sbCkge1xuICAgICAgc2Nyb2xsVG9Db21wb25lbnQoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFjdGl2ZUNhdGVnb3J5ID0gdGhpcy5maWx0ZXJlZENhdGVnb3JpZXNbaV1cbiAgICB9XG4gIH1cblxuICBvblNlYXJjaCh2YWx1ZSkge1xuICAgIGxldCBlbW9qaXMgPSB0aGlzLl9kYXRhLnNlYXJjaCh2YWx1ZSwgdGhpcy5tYXhTZWFyY2hSZXN1bHRzKVxuICAgIHRoaXMuc2VhcmNoRW1vamlzID0gZW1vamlzXG5cbiAgICB0aGlzLnByZXZpZXdFbW9qaUNhdGVnb3J5SWR4ID0gMFxuICAgIHRoaXMucHJldmlld0Vtb2ppSWR4ID0gMFxuICAgIHRoaXMudXBkYXRlUHJldmlld0Vtb2ppKClcbiAgfVxuXG4gIG9uRW1vamlFbnRlcihlbW9qaSkge1xuICAgIHRoaXMucHJldmlld0Vtb2ppID0gZW1vamlcbiAgICB0aGlzLnByZXZpZXdFbW9qaUlkeCA9IC0xXG4gICAgdGhpcy5wcmV2aWV3RW1vamlDYXRlZ29yeUlkeCA9IC0xXG4gIH1cblxuICBvbkVtb2ppTGVhdmUoZW1vamkpIHtcbiAgICB0aGlzLnByZXZpZXdFbW9qaSA9IG51bGxcbiAgfVxuXG4gIG9uQXJyb3dMZWZ0KCkge1xuICAgIC8vIE1vdmluZyBsZWZ0LCBkZWNyZWFzZSBlbW9qaSBpbmRleC5cbiAgICBpZiAodGhpcy5wcmV2aWV3RW1vamlJZHggPiAwKSB7XG4gICAgICB0aGlzLnByZXZpZXdFbW9qaUlkeCAtPSAxXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIElmIGVtb2ppIGluZGV4IGlzIHplcm8sIGdvIHRvIHRoZSBwcmV2aW91cyBjYXRlZ29yeS5cbiAgICAgIHRoaXMucHJldmlld0Vtb2ppQ2F0ZWdvcnlJZHggLT0gMVxuICAgICAgaWYgKHRoaXMucHJldmlld0Vtb2ppQ2F0ZWdvcnlJZHggPCAwKSB7XG4gICAgICAgIC8vIElmIHdlIHJlYWNoZWQgZmlyc3QgY2F0ZWdvcnksIGtlZXAgaXQuXG4gICAgICAgIHRoaXMucHJldmlld0Vtb2ppQ2F0ZWdvcnlJZHggPSAwXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBVcGRhdGUgZW1vamkgaW5kZXggLSB3ZSBtb3ZlZCB0byB0aGUgcHJldmlvdXMgY2F0ZWdvcnksXG4gICAgICAgIC8vIGdldCB0aGUgbGFzdCBlbW9qaSBpbiBpdC5cbiAgICAgICAgdGhpcy5wcmV2aWV3RW1vamlJZHggPVxuICAgICAgICAgIHRoaXMuZmlsdGVyZWRDYXRlZ29yaWVzW3RoaXMucHJldmlld0Vtb2ppQ2F0ZWdvcnlJZHhdLmVtb2ppcy5sZW5ndGggLVxuICAgICAgICAgIDFcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy51cGRhdGVQcmV2aWV3RW1vamkoKVxuICB9XG5cbiAgb25BcnJvd1JpZ2h0KCkge1xuICAgIGlmIChcbiAgICAgIHRoaXMucHJldmlld0Vtb2ppSWR4IDxcbiAgICAgIHRoaXMuZW1vamlzTGVuZ3RoKHRoaXMucHJldmlld0Vtb2ppQ2F0ZWdvcnlJZHgpIC0gMVxuICAgICkge1xuICAgICAgLy8gTW92aW5nIHJpZ2h0IHdpdGhpbiBjYXRlZ29yeSwgaW5jcmVhc2UgZW1vamkgaW5kZXguXG4gICAgICB0aGlzLnByZXZpZXdFbW9qaUlkeCArPSAxXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEdvIHRvIHRoZSBuZXh0IGNhdGVnb3J5LlxuICAgICAgdGhpcy5wcmV2aWV3RW1vamlDYXRlZ29yeUlkeCArPSAxXG4gICAgICBpZiAodGhpcy5wcmV2aWV3RW1vamlDYXRlZ29yeUlkeCA+PSB0aGlzLmZpbHRlcmVkQ2F0ZWdvcmllcy5sZW5ndGgpIHtcbiAgICAgICAgLy8gSWYgd2UgcmVhY2hlZCB0aGUgbGFzdCBjYXRlZ29yeSAtIGtlZXAgaXQuXG4gICAgICAgIHRoaXMucHJldmlld0Vtb2ppQ2F0ZWdvcnlJZHggPSB0aGlzLmZpbHRlcmVkQ2F0ZWdvcmllcy5sZW5ndGggLSAxXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBJZiB3ZSBtb3ZlZCB0byB0aGUgbmV4dCBjYXRlZ29yeSwgdXBkYXRlIGVtb2ppIGluZGV4IHRvIHRoZVxuICAgICAgICAvLyBmaXJzdCBlbW9qaSBpbiB0aGUgbmV3IGNhdGVnb3J5LlxuICAgICAgICB0aGlzLnByZXZpZXdFbW9qaUlkeCA9IDBcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy51cGRhdGVQcmV2aWV3RW1vamkoKVxuICB9XG5cbiAgb25BcnJvd0Rvd24oKSB7XG4gICAgLy8gSWYgd2UgYXJlIG91dCBvZiB0aGUgZW1vamkgY29udHJvbCAoaW5kZXggaXMgLTEpLCBzZWxlY3QgdGhlIGZpcnN0XG4gICAgLy8gZW1vamkgaW4gdGhlIGZpcnN0IGNhdGVnb3J5IGJ5IGNhbGxpbmcgYG9uQXJyb3dSaWdodGAuXG4gICAgaWYgKHRoaXMucHJldmlld0Vtb2ppSWR4ID09IC0xKSB7XG4gICAgICByZXR1cm4gdGhpcy5vbkFycm93UmlnaHQoKVxuICAgIH1cblxuICAgIGNvbnN0IGNhdGVnb3J5TGVuZ3RoID1cbiAgICAgIHRoaXMuZmlsdGVyZWRDYXRlZ29yaWVzW3RoaXMucHJldmlld0Vtb2ppQ2F0ZWdvcnlJZHhdLmVtb2ppcy5sZW5ndGhcblxuICAgIC8vIFdoZW4gbW92aW5nIGRvd24sIHdlIGNhbiBtb3ZlIGBfcGVyTGluZWAgaWNvbnMgcmlnaHQgdG9cbiAgICAvLyBqdW1wIHRvIHRoZSBzYW1lIHBvc2l0aW9uIGluIHRoZSBuZXh0IHJvdy5cbiAgICBsZXQgZGlmZiA9IHRoaXMuX3BlckxpbmVcblxuICAgIC8vIFRPRE86IHByZXZpZXdDYXRlZ29yeSBzaG91bGQgbWF0Y2ggYWN0aXZlQ2F0ZWdvcnlcbiAgICAvLyAoc28gaXQgd291bGQgYmUgYm90aCBoaWdobGlnaHRlZCBpbiBVSSBhbmQgdXNlZFxuICAgIC8vIHdoZW4gd2Ugc3RhcnQgbW92aW5nIHdpdGggYXJyb3dzIGFmdGVyIGNsaWNraW5nXG4gICAgLy8gdGhlIGNhdGVnb3J5KS5cblxuICAgIC8vIE5vdGU6IHByb2JhYmx5IHdlIGNhbiBhbHdhc3kgdGFrZSBjdXJyZW50IHJvdyBsZW5ndGhcbiAgICAvLyBhcyBhIGBkaWZmYCAtIGl0IHdpbGwgZml0IGJvdGggY2FzZSBvZiBhbnkgcm93IGFuZFxuICAgIC8vIHNwZWNpYWwgY2FzZSBvZiB0aGUgbGFzdCByb3cuXG4gICAgLy8gTm90ZTogaXQgY2FuIGJlIGFsc28gZWFzaWVyIHRvIHVwZGF0ZSBpbmRleGVzXG4gICAgLy8gZGlyZWN0bHkgaGVyZSBpbnN0ZWFkIG9mIGNhbGxpbmcgb25BcnJvd1JpZ2h0LlxuICAgIC8vIFNhbWUgaXMgdHJ1ZSBmb3IgYG9uQXJyb3dVcGAuXG5cbiAgICAvLyBVbmxlc3MgaWYgd2UgYXJlIG9uIHRoZSBsYXN0IHJvdyBvZiB0aGUgY2F0ZWdvcnkgYW5kXG4gICAgLy8gdGhlcmUgYXJlIGxlc3MgdGhlbiBgX3BlckxpbmVgIGVtb2ppcyBpbiBpdC5cbiAgICAvLyBJbiB0aGlzIGNhc2Ugd2UgdXNlIHRoZSBsYXN0IHJvdyBsZW5ndGggYXMgZGlmZlxuICAgIC8vIHNvIHdlIGdvIHN0cmFpZ2h0IGRvd24sIGZvciBleGFtcGxlOlxuICAgIC8vXG4gICAgLy8gICAxIDIgMyA0IDUgNlxuICAgIC8vICAgNyA4IDlcbiAgICAvLyAgIEEgQiBDIEQgRSBGXG4gICAgLy9cbiAgICAvLyBJZiB3ZSBnbyBkb3duIGZyb20gYDhgLCB3ZSBuZWVkIHRvIG1vdmUgMyBlbW9qaXMgcmlnaHRcbiAgICAvLyB0byBsZW5kIGF0IGBCYCAoYW5kIDMgaXMgdGhlIGxlbmd0aCBvZiB0aGUgbGFzdCByb3cgb2ZcbiAgICAvLyB0aGlzIGNhdGVnb3J5KS5cbiAgICAvLyBBbmQgaWYgd2UgdXNlZCA2IGluc3RlYWQgKHJvdyBsZW5ndGgsIGBfcGVyTGluZWApLCB3ZSB3b3VsZFxuICAgIC8vIGxlbmQgdXAgYXQgYEVgLlxuICAgIGlmICh0aGlzLnByZXZpZXdFbW9qaUlkeCArIGRpZmYgPiBjYXRlZ29yeUxlbmd0aCkge1xuICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBsYXN0IHJvdyBsZW5ndGguXG4gICAgICBkaWZmID0gY2F0ZWdvcnlMZW5ndGggJSB0aGlzLl9wZXJMaW5lXG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGlmZjsgaSsrKSB7XG4gICAgICB0aGlzLm9uQXJyb3dSaWdodCgpXG4gICAgfVxuICAgIHRoaXMudXBkYXRlUHJldmlld0Vtb2ppKClcbiAgfVxuXG4gIG9uQXJyb3dVcCgpIHtcbiAgICAvLyBTaW1pbGFyIHRvIGBvbkFycm93RG93bmAsIHRvIG1vdmUgdXAgd2UgY2FuIG1vdmUgbGVmdFxuICAgIC8vIGJ5IGBfcGVyTGluZWAgbnVtYmVyIG9mIGVtb2ppcy5cbiAgICBsZXQgZGlmZiA9IHRoaXMuX3BlckxpbmVcblxuICAgIGlmICh0aGlzLnByZXZpZXdFbW9qaUlkeCAtIGRpZmYgPCAwKSB7XG4gICAgICBpZiAodGhpcy5wcmV2aWV3RW1vamlDYXRlZ29yeUlkeCA+IDApIHtcbiAgICAgICAgLy8gVW5sZXNzIGlmIHdlIGFyZSBvbiB0aGUgZmlyc3QgbGluZSBvZiB0aGUgY2F0ZWdvcnkgYW5kXG4gICAgICAgIC8vIHRoZSBsYXN0IGxpbmUgaW4gdGhlIHByZXZpb3VzIGNhdGVnb3J5IGlzIHNob3J0ZXIgdGhhblxuICAgICAgICAvLyBgX3BlckxpbmVgLlxuICAgICAgICAvLyBJbiB0aGlzIGNhc2Ugd2UgdXNlIHRoZSBsYXN0IHJvdyBsZW5ndGggYXMgZGlmZiwgc29cbiAgICAgICAgLy8gd2UgZ28gc3RyYWlnaHQgdXAsIGZvciBleGFtcGxlOlxuICAgICAgICAvL1xuICAgICAgICAvLyAgIDEgMiAzIDQgNVxuICAgICAgICAvLyAgIDYgNyA4XG4gICAgICAgIC8vICAgOSBBIEIgQyBEXG4gICAgICAgIC8vXG4gICAgICAgIC8vIElmIHdlIGdvIHVwIGZyb20gYEFgLCB3ZSBuZWVkIHRvIG1vdmUgMyBlbW9qaXMgbGVmdCB0byBnZXRcbiAgICAgICAgLy8gdG8gYDdgIChhbmQgMyBpcyB0aGUgbGVuZ3RoIG9mIHRoZSBsYXN0IHJvdyBvZiB0aGUgcHJldmlvdXNcbiAgICAgICAgLy8gY2F0ZWdvcnkpLlxuICAgICAgICBjb25zdCBwcmV2Q2F0ZWdvcnlMYXN0Um93TGVuZ3RoID1cbiAgICAgICAgICB0aGlzLmZpbHRlcmVkQ2F0ZWdvcmllc1t0aGlzLnByZXZpZXdFbW9qaUNhdGVnb3J5SWR4IC0gMV0uZW1vamlzXG4gICAgICAgICAgICAubGVuZ3RoICUgdGhpcy5fcGVyTGluZVxuICAgICAgICAvLyBkaWZmID0gdGhpcy5wcmV2aWV3RW1vamlJZHggKyBwcmV2Q2F0ZWdvcnlMYXN0Um93TGVuZ3RoXG4gICAgICAgIGRpZmYgPSBwcmV2Q2F0ZWdvcnlMYXN0Um93TGVuZ3RoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkaWZmID0gMFxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpZmY7IGkrKykge1xuICAgICAgdGhpcy5vbkFycm93TGVmdCgpXG4gICAgfVxuICAgIHRoaXMudXBkYXRlUHJldmlld0Vtb2ppKClcbiAgfVxuXG4gIHVwZGF0ZVByZXZpZXdFbW9qaSgpIHtcbiAgICB0aGlzLnByZXZpZXdFbW9qaSA9XG4gICAgICB0aGlzLmZpbHRlcmVkQ2F0ZWdvcmllc1t0aGlzLnByZXZpZXdFbW9qaUNhdGVnb3J5SWR4XS5lbW9qaXNbXG4gICAgICAgIHRoaXMucHJldmlld0Vtb2ppSWR4XG4gICAgICBdXG5cbiAgICB0aGlzLl92bS4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgLy8gU2Nyb2xsIHRoZSB2aWV3IGlmIHRoZSBgcHJldmlld0Vtb2ppYCBnb2VzIG91dCBvZiB0aGUgdmlzaWJsZSBhcmVhLlxuICAgICAgY29uc3Qgc2Nyb2xsRWwgPSB0aGlzLl92bS4kcmVmcy5zY3JvbGxcblxuICAgICAgLy8gTm90ZTogaXQgd291bGQgYmUgbW9yZSBWdWUtaXNoIHRvIG1hcmsgYWxsIGVtb2ppcyB3aXRoIGByZWZgc1xuICAgICAgLy8gYW5kIHRoZW4gZG8gc29tZXRoaW5nIHNpbWlsYXIgaGVyZSB0byB3aGF0IHdlIGRvIGluIHRoZVxuICAgICAgLy8gYGdldENhdGVnb3JpZXNgIGluc3RlYWQgb2YgdXNpbmcgYHF1ZXJ5U2VsZWN0b3JgIGRpcmVjdGx5LFxuICAgICAgLy8gYnV0IEkgYW0gbm90IHN1cmUgaWYgaGF2aW5nIG1hbnkgcmVmcyB3b3VsZCBhZmZlY3QgdGhlIHBlcmZvcm1hbmNlXG4gICAgICAvLyAoaXQgbWlnaHQsIHNvIEkgdXNlIGBxdWVyeVNlbGVjdG9yYCBmb3Igbm93KS5cbiAgICAgIGNvbnN0IGVtb2ppRWwgPSBzY3JvbGxFbC5xdWVyeVNlbGVjdG9yKCcuZW1vamktbWFydC1lbW9qaS1zZWxlY3RlZCcpXG5cbiAgICAgIGNvbnN0IHNjcm9sbEhlaWdodCA9IHNjcm9sbEVsLm9mZnNldFRvcCAtIHNjcm9sbEVsLm9mZnNldEhlaWdodFxuICAgICAgaWYgKFxuICAgICAgICBlbW9qaUVsICYmXG4gICAgICAgIGVtb2ppRWwub2Zmc2V0VG9wICsgZW1vamlFbC5vZmZzZXRIZWlnaHQgPlxuICAgICAgICAgIHNjcm9sbEhlaWdodCArIHNjcm9sbEVsLnNjcm9sbFRvcFxuICAgICAgKSB7XG4gICAgICAgIHNjcm9sbEVsLnNjcm9sbFRvcCArPSBlbW9qaUVsLm9mZnNldEhlaWdodFxuICAgICAgfVxuICAgICAgaWYgKGVtb2ppRWwgJiYgZW1vamlFbC5vZmZzZXRUb3AgPCBzY3JvbGxFbC5zY3JvbGxUb3ApIHtcbiAgICAgICAgc2Nyb2xsRWwuc2Nyb2xsVG9wIC09IGVtb2ppRWwub2Zmc2V0SGVpZ2h0XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGVtb2ppc0xlbmd0aChjYXRlZ29yeUlkeCkge1xuICAgIGlmIChjYXRlZ29yeUlkeCA9PSAtMSkge1xuICAgICAgcmV0dXJuIDBcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZmlsdGVyZWRDYXRlZ29yaWVzW2NhdGVnb3J5SWR4XS5lbW9qaXMubGVuZ3RoXG4gIH1cbn1cbiIsImNvbnN0IEVtb2ppUHJvcHMgPSB7XG4gIG5hdGl2ZToge1xuICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgZGVmYXVsdDogZmFsc2UsXG4gIH0sXG4gIHRvb2x0aXA6IHtcbiAgICB0eXBlOiBCb29sZWFuLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICB9LFxuICBmYWxsYmFjazoge1xuICAgIHR5cGU6IEZ1bmN0aW9uLFxuICB9LFxuICBza2luOiB7XG4gICAgdHlwZTogTnVtYmVyLFxuICAgIGRlZmF1bHQ6IDEsXG4gIH0sXG4gIHNldDoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBkZWZhdWx0OiAnYXBwbGUnLFxuICB9LFxuICBlbW9qaToge1xuICAgIHR5cGU6IFtTdHJpbmcsIE9iamVjdF0sXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gIH0sXG4gIHNpemU6IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gICAgZGVmYXVsdDogbnVsbCxcbiAgfSxcbiAgdGFnOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGRlZmF1bHQ6ICdzcGFuJyxcbiAgfSxcbn1cblxuY29uc3QgUGlja2VyUHJvcHMgPSB7XG4gIHBlckxpbmU6IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gICAgZGVmYXVsdDogOSxcbiAgfSxcbiAgbWF4U2VhcmNoUmVzdWx0czoge1xuICAgIHR5cGU6IE51bWJlcixcbiAgICBkZWZhdWx0OiA3NSxcbiAgfSxcbiAgZW1vamlTaXplOiB7XG4gICAgdHlwZTogTnVtYmVyLFxuICAgIGRlZmF1bHQ6IDI0LFxuICB9LFxuICB0aXRsZToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBkZWZhdWx0OiAnRW1vamkgTWFydOKEoicsXG4gIH0sXG4gIGVtb2ppOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGRlZmF1bHQ6ICdkZXBhcnRtZW50X3N0b3JlJyxcbiAgfSxcbiAgY29sb3I6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgZGVmYXVsdDogJyNhZTY1YzUnLFxuICB9LFxuICBzZXQ6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgZGVmYXVsdDogJ2FwcGxlJyxcbiAgfSxcbiAgc2tpbjoge1xuICAgIHR5cGU6IE51bWJlcixcbiAgICBkZWZhdWx0OiBudWxsLFxuICB9LFxuICBkZWZhdWx0U2tpbjoge1xuICAgIHR5cGU6IE51bWJlcixcbiAgICBkZWZhdWx0OiAxLFxuICB9LFxuICBuYXRpdmU6IHtcbiAgICB0eXBlOiBCb29sZWFuLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICB9LFxuICBlbW9qaVRvb2x0aXA6IHtcbiAgICB0eXBlOiBCb29sZWFuLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICB9LFxuICBhdXRvRm9jdXM6IHtcbiAgICB0eXBlOiBCb29sZWFuLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICB9LFxuICBpMThuOiB7XG4gICAgdHlwZTogT2JqZWN0LFxuICAgIGRlZmF1bHQoKSB7XG4gICAgICByZXR1cm4ge31cbiAgICB9LFxuICB9LFxuICBzaG93UHJldmlldzoge1xuICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgZGVmYXVsdDogdHJ1ZSxcbiAgfSxcbiAgc2hvd1NlYXJjaDoge1xuICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgZGVmYXVsdDogdHJ1ZSxcbiAgfSxcbiAgc2hvd0NhdGVnb3JpZXM6IHtcbiAgICB0eXBlOiBCb29sZWFuLFxuICAgIGRlZmF1bHQ6IHRydWUsXG4gIH0sXG4gIHNob3dTa2luVG9uZXM6IHtcbiAgICB0eXBlOiBCb29sZWFuLFxuICAgIGRlZmF1bHQ6IHRydWUsXG4gIH0sXG4gIGluZmluaXRlU2Nyb2xsOiB7XG4gICAgdHlwZTogQm9vbGVhbixcbiAgICBkZWZhdWx0OiB0cnVlLFxuICB9LFxuICBwaWNrZXJTdHlsZXM6IHtcbiAgICB0eXBlOiBPYmplY3QsXG4gICAgZGVmYXVsdCgpIHtcbiAgICAgIHJldHVybiB7fVxuICAgIH0sXG4gIH0sXG59XG5cbmV4cG9ydCB7IEVtb2ppUHJvcHMsIFBpY2tlclByb3BzIH1cbiIsInZhciBOQU1FU1BBQ0UgPSAnZW1vamktbWFydCdcblxuY29uc3QgX0pTT04gPSBKU09OXG5cbnZhciBpc0xvY2FsU3RvcmFnZVN1cHBvcnRlZCA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICdsb2NhbFN0b3JhZ2UnIGluIHdpbmRvd1xuXG5sZXQgZ2V0dGVyXG5sZXQgc2V0dGVyXG5cbmZ1bmN0aW9uIHNldEhhbmRsZXJzKGhhbmRsZXJzKSB7XG4gIGhhbmRsZXJzIHx8IChoYW5kbGVycyA9IHt9KVxuXG4gIGdldHRlciA9IGhhbmRsZXJzLmdldHRlclxuICBzZXR0ZXIgPSBoYW5kbGVycy5zZXR0ZXJcbn1cblxuZnVuY3Rpb24gc2V0TmFtZXNwYWNlKG5hbWVzcGFjZSkge1xuICBOQU1FU1BBQ0UgPSBuYW1lc3BhY2Vcbn1cblxuZnVuY3Rpb24gdXBkYXRlKHN0YXRlKSB7XG4gIGZvciAobGV0IGtleSBpbiBzdGF0ZSkge1xuICAgIGxldCB2YWx1ZSA9IHN0YXRlW2tleV1cbiAgICBzZXQoa2V5LCB2YWx1ZSlcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXQoa2V5LCB2YWx1ZSkge1xuICBpZiAoc2V0dGVyKSB7XG4gICAgc2V0dGVyKGtleSwgdmFsdWUpXG4gIH0gZWxzZSB7XG4gICAgaWYgKCFpc0xvY2FsU3RvcmFnZVN1cHBvcnRlZCkgcmV0dXJuXG4gICAgdHJ5IHtcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2VbYCR7TkFNRVNQQUNFfS4ke2tleX1gXSA9IF9KU09OLnN0cmluZ2lmeSh2YWx1ZSlcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldChrZXkpIHtcbiAgaWYgKGdldHRlcikge1xuICAgIHJldHVybiBnZXR0ZXIoa2V5KVxuICB9IGVsc2Uge1xuICAgIGlmICghaXNMb2NhbFN0b3JhZ2VTdXBwb3J0ZWQpIHJldHVyblxuICAgIHRyeSB7XG4gICAgICB2YXIgdmFsdWUgPSB3aW5kb3cubG9jYWxTdG9yYWdlW2Ake05BTUVTUEFDRX0uJHtrZXl9YF1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKHZhbHVlKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7IHVwZGF0ZSwgc2V0LCBnZXQsIHNldE5hbWVzcGFjZSwgc2V0SGFuZGxlcnMgfVxuIiwiLy8gaHR0cDovL3BhdWxpcmlzaC5jb20vMjAxMS9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWFuaW1hdGluZy9cbi8vIGh0dHA6Ly9teS5vcGVyYS5jb20vZW1vbGxlci9ibG9nLzIwMTEvMTIvMjAvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1lci1hbmltYXRpbmdcblxuLy8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHBvbHlmaWxsIGJ5IEVyaWsgTcO2bGxlci4gZml4ZXMgZnJvbSBQYXVsIElyaXNoIGFuZCBUaW5vIFppamRlbFxuXG4vLyBNSVQgbGljZW5zZVxuXG52YXIgaXNXaW5kb3dBdmFpbGFibGUgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuXG5pc1dpbmRvd0F2YWlsYWJsZSAmJlxuICAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBsYXN0VGltZSA9IDBcbiAgICB2YXIgdmVuZG9ycyA9IFsnbXMnLCAnbW96JywgJ3dlYmtpdCcsICdvJ11cblxuICAgIGZvciAodmFyIHggPSAwOyB4IDwgdmVuZG9ycy5sZW5ndGggJiYgIXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7ICsreCkge1xuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9XG4gICAgICAgIHdpbmRvd1t2ZW5kb3JzW3hdICsgJ1JlcXVlc3RBbmltYXRpb25GcmFtZSddXG4gICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPVxuICAgICAgICB3aW5kb3dbdmVuZG9yc1t4XSArICdDYW5jZWxBbmltYXRpb25GcmFtZSddIHx8XG4gICAgICAgIHdpbmRvd1t2ZW5kb3JzW3hdICsgJ0NhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSddXG4gICAgfVxuXG4gICAgaWYgKCF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKVxuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uIChjYWxsYmFjaywgZWxlbWVudCkge1xuICAgICAgICB2YXIgY3VyclRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKVxuICAgICAgICB2YXIgdGltZVRvQ2FsbCA9IE1hdGgubWF4KDAsIDE2IC0gKGN1cnJUaW1lIC0gbGFzdFRpbWUpKVxuICAgICAgICB2YXIgaWQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY2FsbGJhY2soY3VyclRpbWUgKyB0aW1lVG9DYWxsKVxuICAgICAgICB9LCB0aW1lVG9DYWxsKVxuXG4gICAgICAgIGxhc3RUaW1lID0gY3VyclRpbWUgKyB0aW1lVG9DYWxsXG4gICAgICAgIHJldHVybiBpZFxuICAgICAgfVxuXG4gICAgaWYgKCF3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUpXG4gICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KGlkKVxuICAgICAgfVxuICB9KSgpXG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0Vtb2ppLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MzRhZDk0NiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9FbW9qaS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0Vtb2ppLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3NlYi93ZWIvZW1vamktbWFydC9lbW9qaS1tYXJ0LXZ1ZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc1MzRhZDk0NicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc1MzRhZDk0NicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc1MzRhZDk0NicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRW1vamkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUzNGFkOTQ2JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzUzNGFkOTQ2Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9FbW9qaS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1BpY2tlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZDE2ZTkwODQmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUGlja2VyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vUGlja2VyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3NlYi93ZWIvZW1vamktbWFydC9lbW9qaS1tYXJ0LXZ1ZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdkMTZlOTA4NCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdkMTZlOTA4NCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdkMTZlOTA4NCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUGlja2VyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kMTZlOTA4NCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdkMTZlOTA4NCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvUGlja2VyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vYW5jaG9ycy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTExODgxMDQmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vYW5jaG9ycy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2FuY2hvcnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvc2ViL3dlYi9lbW9qaS1tYXJ0L2Vtb2ppLW1hcnQtdnVlL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzUxMTg4MTA0JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzUxMTg4MTA0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzUxMTg4MTA0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9hbmNob3JzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MTE4ODEwNCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1MTE4ODEwNCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvYW5jaG9ycy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2NhdGVnb3J5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNzZjZGEwZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9jYXRlZ29yeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2NhdGVnb3J5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3NlYi93ZWIvZW1vamktbWFydC9lbW9qaS1tYXJ0LXZ1ZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCczNzZjZGEwZScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczNzZjZGEwZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczNzZjZGEwZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vY2F0ZWdvcnkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM3NmNkYTBlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzM3NmNkYTBlJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9jYXRlZ29yeS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3ByZXZpZXcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM1MDU2YzMwJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3ByZXZpZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9wcmV2aWV3LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3NlYi93ZWIvZW1vamktbWFydC9lbW9qaS1tYXJ0LXZ1ZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCczNTA1NmMzMCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczNTA1NmMzMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczNTA1NmMzMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vcHJldmlldy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzUwNTZjMzAmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMzUwNTZjMzAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL3ByZXZpZXcudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9zZWFyY2gudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRhZDQxYmI4JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3NlYXJjaC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3NlYXJjaC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9zZWIvd2ViL2Vtb2ppLW1hcnQvZW1vamktbWFydC12dWUvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNGFkNDFiYjgnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNGFkNDFiYjgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNGFkNDFiYjgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3NlYXJjaC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGFkNDFiYjgmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNGFkNDFiYjgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL3NlYXJjaC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3NraW5zLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xYzYxNDg5NCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9za2lucy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3NraW5zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3NlYi93ZWIvZW1vamktbWFydC9lbW9qaS1tYXJ0LXZ1ZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcxYzYxNDg5NCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxYzYxNDg5NCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxYzYxNDg5NCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vc2tpbnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFjNjE0ODk0JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzFjNjE0ODk0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9za2lucy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRW1vamkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRW1vamkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BpY2tlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2UhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QaWNrZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FuY2hvcnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYW5jaG9ycy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2F0ZWdvcnkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2F0ZWdvcnkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3ByZXZpZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcHJldmlldy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2VhcmNoLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NlYXJjaC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2tpbnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2tpbnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX3ZtLnZpZXcuY2FuUmVuZGVyXG4gICAgPyBfYyhcbiAgICAgICAgX3ZtLnRhZyxcbiAgICAgICAge1xuICAgICAgICAgIHRhZzogXCJjb21wb25lbnRcIixcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LWVtb2ppXCIsXG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIHRpdGxlOiBfdm0udmlldy50aXRsZSxcbiAgICAgICAgICAgIFwiYXJpYS1sYWJlbFwiOiBfdm0udmlldy5hcmlhTGFiZWwsXG4gICAgICAgICAgICBcImRhdGEtdGl0bGVcIjogX3ZtLnRpdGxlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIG1vdXNlZW50ZXI6IF92bS5vbk1vdXNlRW50ZXIsXG4gICAgICAgICAgICBtb3VzZWxlYXZlOiBfdm0ub25Nb3VzZUxlYXZlLFxuICAgICAgICAgICAgY2xpY2s6IF92bS5vbkNsaWNrLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInNwYW5cIiwgeyBjbGFzczogX3ZtLnZpZXcuY3NzQ2xhc3MsIHN0eWxlOiBfdm0udmlldy5jc3NTdHlsZSB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS52aWV3LmNvbnRlbnQpKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgXVxuICAgICAgKVxuICAgIDogX3ZtLl9lKClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInNlY3Rpb25cIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQgZW1vamktbWFydC1zdGF0aWNcIiwgc3R5bGU6IF92bS5jdXN0b21TdHlsZXMgfSxcbiAgICBbXG4gICAgICBfdm0uc2hvd0NhdGVnb3JpZXNcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtYmFyIGVtb2ppLW1hcnQtYmFyLWFuY2hvcnNcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImFuY2hvcnNcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBkYXRhOiBfdm0uZGF0YSxcbiAgICAgICAgICAgICAgICAgIGkxOG46IF92bS5tZXJnZWRJMThuLFxuICAgICAgICAgICAgICAgICAgY29sb3I6IF92bS5jb2xvcixcbiAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IF92bS52aWV3LmFsbENhdGVnb3JpZXMsXG4gICAgICAgICAgICAgICAgICBcImFjdGl2ZS1jYXRlZ29yeVwiOiBfdm0udmlldy5hY3RpdmVDYXRlZ29yeSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0ub25BbmNob3JDbGljayB9LFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5fdChcbiAgICAgICAgXCJzZWFyY2hUZW1wbGF0ZVwiLFxuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIF92bS5zaG93U2VhcmNoXG4gICAgICAgICAgICAgID8gX2MoXCJzZWFyY2hcIiwge1xuICAgICAgICAgICAgICAgICAgcmVmOiBcInNlYXJjaFwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogX3ZtLmRhdGEsXG4gICAgICAgICAgICAgICAgICAgIGkxOG46IF92bS5tZXJnZWRJMThuLFxuICAgICAgICAgICAgICAgICAgICBcImF1dG8tZm9jdXNcIjogX3ZtLmF1dG9Gb2N1cyxcbiAgICAgICAgICAgICAgICAgICAgXCJvbi1zZWFyY2hcIjogX3ZtLm9uU2VhcmNoLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaDogX3ZtLm9uU2VhcmNoLFxuICAgICAgICAgICAgICAgICAgICBhcnJvd0xlZnQ6IF92bS5vbkFycm93TGVmdCxcbiAgICAgICAgICAgICAgICAgICAgYXJyb3dSaWdodDogX3ZtLm9uQXJyb3dSaWdodCxcbiAgICAgICAgICAgICAgICAgICAgYXJyb3dEb3duOiBfdm0ub25BcnJvd0Rvd24sXG4gICAgICAgICAgICAgICAgICAgIGFycm93VXA6IF92bS5vbkFycm93VXAsXG4gICAgICAgICAgICAgICAgICAgIGVudGVyOiBfdm0ub25FbnRlcixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBkYXRhOiBfdm0uZGF0YSxcbiAgICAgICAgICBpMThuOiBfdm0uaTE4bixcbiAgICAgICAgICBhdXRvRm9jdXM6IF92bS5hdXRvRm9jdXMsXG4gICAgICAgICAgb25TZWFyY2g6IF92bS5vblNlYXJjaCxcbiAgICAgICAgfVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHJlZjogXCJzY3JvbGxcIixcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LXNjcm9sbFwiLFxuICAgICAgICAgIGF0dHJzOiB7IHJvbGU6IFwidGFicGFuZWxcIiB9LFxuICAgICAgICAgIG9uOiB7IHNjcm9sbDogX3ZtLm9uU2Nyb2xsIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJlZjogXCJzY3JvbGxDb250ZW50XCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiZW1vamktbWFydC1saXN0XCIsXG4gICAgICAgICAgICAgICAgcm9sZTogXCJsaXN0Ym94XCIsXG4gICAgICAgICAgICAgICAgXCJhcmlhLWV4cGFuZGVkXCI6IFwidHJ1ZVwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF92bS5fbChfdm0udmlldy5maWx0ZXJlZENhdGVnb3JpZXMsIGZ1bmN0aW9uIChjYXRlZ29yeSwgaWR4KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfYyhcImNhdGVnb3J5XCIsIHtcbiAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTpcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uaW5maW5pdGVTY3JvbGwgfHwgY2F0ZWdvcnkgPT0gX3ZtLnZpZXcuYWN0aXZlQ2F0ZWdvcnksXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgICAgICAgXCJpbmZpbml0ZVNjcm9sbCB8fCBjYXRlZ29yeSA9PSB2aWV3LmFjdGl2ZUNhdGVnb3J5XCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAga2V5OiBjYXRlZ29yeS5pZCxcbiAgICAgICAgICAgICAgICByZWY6IFwiY2F0ZWdvcmllc19cIiArIGlkeCxcbiAgICAgICAgICAgICAgICByZWZJbkZvcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgZGF0YTogX3ZtLmRhdGEsXG4gICAgICAgICAgICAgICAgICBpMThuOiBfdm0ubWVyZ2VkSTE4bixcbiAgICAgICAgICAgICAgICAgIGlkOiBjYXRlZ29yeS5pZCxcbiAgICAgICAgICAgICAgICAgIG5hbWU6IGNhdGVnb3J5Lm5hbWUsXG4gICAgICAgICAgICAgICAgICBlbW9qaXM6IGNhdGVnb3J5LmVtb2ppcyxcbiAgICAgICAgICAgICAgICAgIFwiZW1vamktcHJvcHNcIjogX3ZtLmVtb2ppUHJvcHMsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl90KFxuICAgICAgICBcInByZXZpZXdUZW1wbGF0ZVwiLFxuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIF92bS5zaG93UHJldmlld1xuICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1iYXIgZW1vamktbWFydC1iYXItcHJldmlld1wiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwicHJldmlld1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IF92bS5kYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IF92bS50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtb2ppOiBfdm0udmlldy5wcmV2aWV3RW1vamksXG4gICAgICAgICAgICAgICAgICAgICAgICBcImlkbGUtZW1vamlcIjogX3ZtLmlkbGVFbW9qaSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvdy1za2luLXRvbmVzXCI6IF92bS5zaG93U2tpblRvbmVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJlbW9qaS1wcm9wc1wiOiBfdm0uZW1vamlQcm9wcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2tpbi1wcm9wc1wiOiBfdm0uc2tpblByb3BzLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJvbi1za2luLWNoYW5nZVwiOiBfdm0ub25Ta2luQ2hhbmdlLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZGF0YTogX3ZtLmRhdGEsXG4gICAgICAgICAgdGl0bGU6IF92bS50aXRsZSxcbiAgICAgICAgICBlbW9qaTogX3ZtLnZpZXcucHJldmlld0Vtb2ppLFxuICAgICAgICAgIGlkbGVFbW9qaTogX3ZtLmlkbGVFbW9qaSxcbiAgICAgICAgICBzaG93U2tpblRvbmVzOiBfdm0uc2hvd1NraW5Ub25lcyxcbiAgICAgICAgICBlbW9qaVByb3BzOiBfdm0uZW1vamlQcm9wcyxcbiAgICAgICAgICBza2luUHJvcHM6IF92bS5za2luUHJvcHMsXG4gICAgICAgICAgb25Ta2luQ2hhbmdlOiBfdm0ub25Ta2luQ2hhbmdlLFxuICAgICAgICB9XG4gICAgICApLFxuICAgIF0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtYW5jaG9yc1wiLCBhdHRyczogeyByb2xlOiBcInRhYmxpc3RcIiB9IH0sXG4gICAgX3ZtLl9sKF92bS5jYXRlZ29yaWVzLCBmdW5jdGlvbiAoY2F0ZWdvcnkpIHtcbiAgICAgIHJldHVybiBfYyhcbiAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAge1xuICAgICAgICAgIGtleTogY2F0ZWdvcnkuaWQsXG4gICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgIFwiZW1vamktbWFydC1hbmNob3JcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiZW1vamktbWFydC1hbmNob3Itc2VsZWN0ZWRcIjogY2F0ZWdvcnkuaWQgPT0gX3ZtLmFjdGl2ZUNhdGVnb3J5LmlkLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIGNvbG9yOiBjYXRlZ29yeS5pZCA9PSBfdm0uYWN0aXZlQ2F0ZWdvcnkuaWQgPyBfdm0uY29sb3IgOiBcIlwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIHJvbGU6IFwidGFiXCIsXG4gICAgICAgICAgICBcImFyaWEtbGFiZWxcIjogY2F0ZWdvcnkubmFtZSxcbiAgICAgICAgICAgIFwiYXJpYS1zZWxlY3RlZFwiOiBjYXRlZ29yeS5pZCA9PSBfdm0uYWN0aXZlQ2F0ZWdvcnkuaWQsXG4gICAgICAgICAgICBcImRhdGEtdGl0bGVcIjogX3ZtLmkxOG4uY2F0ZWdvcmllc1tjYXRlZ29yeS5pZF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcImNsaWNrXCIsIGNhdGVnb3J5KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9LFxuICAgICAgICAgICAgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLnN2Z3NbY2F0ZWdvcnkuaWRdKSB9LFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtYW5jaG9yLWJhclwiLFxuICAgICAgICAgICAgc3R5bGU6IHsgYmFja2dyb3VuZENvbG9yOiBfdm0uY29sb3IgfSxcbiAgICAgICAgICAgIGF0dHJzOiB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgXVxuICAgICAgKVxuICAgIH0pLFxuICAgIDBcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF92bS5pc1Zpc2libGUgJiYgKF92bS5pc1NlYXJjaCB8fCBfdm0uaGFzUmVzdWx0cylcbiAgICA/IF9jKFxuICAgICAgICBcInNlY3Rpb25cIixcbiAgICAgICAge1xuICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICBcImVtb2ppLW1hcnQtY2F0ZWdvcnlcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiZW1vamktbWFydC1uby1yZXN1bHRzXCI6ICFfdm0uaGFzUmVzdWx0cyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGF0dHJzOiB7IFwiYXJpYS1sYWJlbFwiOiBfdm0uaTE4bi5jYXRlZ29yaWVzW192bS5pZF0gfSxcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1jYXRlZ29yeS1sYWJlbFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiaDNcIiwgeyBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LWNhdGVnb3J5LWxhYmVsXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5pMThuLmNhdGVnb3JpZXNbX3ZtLmlkXSkpLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uX2woX3ZtLmVtb2ppT2JqZWN0cywgZnVuY3Rpb24gKHJlZikge1xuICAgICAgICAgICAgdmFyIGVtb2ppT2JqZWN0ID0gcmVmLmVtb2ppT2JqZWN0XG4gICAgICAgICAgICB2YXIgZW1vamlWaWV3ID0gcmVmLmVtb2ppVmlld1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgZW1vamlWaWV3LmNhblJlbmRlclxuICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBrZXk6IGVtb2ppT2JqZWN0LmlkLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtZW1vamlcIixcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLmFjdGl2ZUNsYXNzKGVtb2ppT2JqZWN0KSxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJhcmlhLWxhYmVsXCI6IGVtb2ppVmlldy5hcmlhTGFiZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICByb2xlOiBcIm9wdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhcmlhLXNlbGVjdGVkXCI6IFwiZmFsc2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYXJpYS1wb3NpbnNldFwiOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYXJpYS1zZXRzaXplXCI6IFwiMTgxMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS10aXRsZVwiOiBlbW9qaU9iamVjdC5zaG9ydF9uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGVtb2ppVmlldy50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb3VzZWVudGVyOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lbW9qaVByb3BzLm9uRW50ZXIoZW1vamlWaWV3LmdldEVtb2ppKCkpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW91c2VsZWF2ZTogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZW1vamlQcm9wcy5vbkxlYXZlKGVtb2ppVmlldy5nZXRFbW9qaSgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lbW9qaVByb3BzLm9uQ2xpY2soZW1vamlWaWV3LmdldEVtb2ppKCkpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogZW1vamlWaWV3LmNzc0NsYXNzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogZW1vamlWaWV3LmNzc1N0eWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKGVtb2ppVmlldy5jb250ZW50KSldXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAhX3ZtLmhhc1Jlc3VsdHNcbiAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImVtb2ppXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBfdm0uZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICBlbW9qaTogXCJzbGV1dGhfb3Jfc3B5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgbmF0aXZlOiBfdm0uZW1vamlQcm9wcy5uYXRpdmUsXG4gICAgICAgICAgICAgICAgICAgICAgc2tpbjogX3ZtLmVtb2ppUHJvcHMuc2tpbixcbiAgICAgICAgICAgICAgICAgICAgICBzZXQ6IF92bS5lbW9qaVByb3BzLnNldCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1uby1yZXN1bHRzLWxhYmVsXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5pMThuLm5vdGZvdW5kKSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgXSxcbiAgICAgICAgMlxuICAgICAgKVxuICAgIDogX3ZtLl9lKClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1wcmV2aWV3XCIgfSxcbiAgICBbXG4gICAgICBfdm0uZW1vamlcbiAgICAgICAgPyBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LXByZXZpZXctZW1vamlcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJlbW9qaVwiLCB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiBfdm0uZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgZW1vamk6IF92bS5lbW9qaSxcbiAgICAgICAgICAgICAgICAgICAgbmF0aXZlOiBfdm0uZW1vamlQcm9wcy5uYXRpdmUsXG4gICAgICAgICAgICAgICAgICAgIHNraW46IF92bS5lbW9qaVByb3BzLnNraW4sXG4gICAgICAgICAgICAgICAgICAgIHNldDogX3ZtLmVtb2ppUHJvcHMuc2V0LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtcHJldmlldy1kYXRhXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtcHJldmlldy1uYW1lXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmVtb2ppLm5hbWUpKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LXByZXZpZXctc2hvcnRuYW1lc1wiIH0sXG4gICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5lbW9qaVNob3J0TmFtZXMsIGZ1bmN0aW9uIChzaG9ydE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBrZXk6IHNob3J0TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LXByZXZpZXctc2hvcnRuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCI6XCIgKyBfdm0uX3Moc2hvcnROYW1lKSArIFwiOlwiKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LXByZXZpZXctZW1vdGljb25zXCIgfSxcbiAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmVtb2ppRW1vdGljb25zLCBmdW5jdGlvbiAoZW1vdGljb24pIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBrZXk6IGVtb3RpY29uLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtcHJldmlldy1lbW90aWNvblwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhlbW90aWNvbikpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgIF1cbiAgICAgICAgOiBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LXByZXZpZXctZW1vamlcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJlbW9qaVwiLCB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiBfdm0uZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgZW1vamk6IF92bS5pZGxlRW1vamksXG4gICAgICAgICAgICAgICAgICAgIG5hdGl2ZTogX3ZtLmVtb2ppUHJvcHMubmF0aXZlLFxuICAgICAgICAgICAgICAgICAgICBza2luOiBfdm0uZW1vamlQcm9wcy5za2luLFxuICAgICAgICAgICAgICAgICAgICBzZXQ6IF92bS5lbW9qaVByb3BzLnNldCxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LXByZXZpZXctZGF0YVwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC10aXRsZS1sYWJlbFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS50aXRsZSkpLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS5zaG93U2tpblRvbmVzXG4gICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LXByZXZpZXctc2tpbnNcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInNraW5zXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBza2luOiBfdm0uc2tpblByb3BzLnNraW4gfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub25Ta2luQ2hhbmdlKCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBdLFxuICAgIF0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LXNlYXJjaFwiIH0sIFtcbiAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICB2YWx1ZTogX3ZtLnZhbHVlLFxuICAgICAgICAgIGV4cHJlc3Npb246IFwidmFsdWVcIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBhdHRyczoge1xuICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgcGxhY2Vob2xkZXI6IF92bS5pMThuLnNlYXJjaCxcbiAgICAgICAgcm9sZTogXCJ0ZXh0Ym94XCIsXG4gICAgICAgIFwiYXJpYS1hdXRvY29tcGxldGVcIjogXCJsaXN0XCIsXG4gICAgICAgIFwiYXJpYS1vd25zXCI6IFwiZW1vamktbWFydC1saXN0XCIsXG4gICAgICAgIFwiYXJpYS1sYWJlbFwiOiBcIlNlYXJjaCBmb3IgYW4gZW1vamlcIixcbiAgICAgICAgXCJhcmlhLWRlc2NyaWJlZGJ5XCI6IFwiZW1vamktbWFydC1zZWFyY2gtZGVzY3JpcHRpb25cIixcbiAgICAgIH0sXG4gICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnZhbHVlIH0sXG4gICAgICBvbjoge1xuICAgICAgICBrZXlkb3duOiBbXG4gICAgICAgICAgZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAhJGV2ZW50LnR5cGUuaW5kZXhPZihcImtleVwiKSAmJlxuICAgICAgICAgICAgICBfdm0uX2soJGV2ZW50LmtleUNvZGUsIFwibGVmdFwiLCAzNywgJGV2ZW50LmtleSwgW1xuICAgICAgICAgICAgICAgIFwiTGVmdFwiLFxuICAgICAgICAgICAgICAgIFwiQXJyb3dMZWZ0XCIsXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChcImJ1dHRvblwiIGluICRldmVudCAmJiAkZXZlbnQuYnV0dG9uICE9PSAwKSB7XG4gICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRlbWl0KFwiYXJyb3dMZWZ0XCIsICRldmVudClcbiAgICAgICAgICAgIH0uYXBwbHkobnVsbCwgYXJndW1lbnRzKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAhJGV2ZW50LnR5cGUuaW5kZXhPZihcImtleVwiKSAmJlxuICAgICAgICAgICAgICBfdm0uX2soJGV2ZW50LmtleUNvZGUsIFwicmlnaHRcIiwgMzksICRldmVudC5rZXksIFtcbiAgICAgICAgICAgICAgICBcIlJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgXCJBcnJvd1JpZ2h0XCIsXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChcImJ1dHRvblwiIGluICRldmVudCAmJiAkZXZlbnQuYnV0dG9uICE9PSAyKSB7XG4gICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRlbWl0KFwiYXJyb3dSaWdodFwiKVxuICAgICAgICAgICAgfS5hcHBseShudWxsLCBhcmd1bWVudHMpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICEkZXZlbnQudHlwZS5pbmRleE9mKFwia2V5XCIpICYmXG4gICAgICAgICAgICAgIF92bS5faygkZXZlbnQua2V5Q29kZSwgXCJkb3duXCIsIDQwLCAkZXZlbnQua2V5LCBbXG4gICAgICAgICAgICAgICAgXCJEb3duXCIsXG4gICAgICAgICAgICAgICAgXCJBcnJvd0Rvd25cIixcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcImFycm93RG93blwiKVxuICAgICAgICAgICAgfS5hcHBseShudWxsLCBhcmd1bWVudHMpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICEkZXZlbnQudHlwZS5pbmRleE9mKFwia2V5XCIpICYmXG4gICAgICAgICAgICAgIF92bS5faygkZXZlbnQua2V5Q29kZSwgXCJ1cFwiLCAzOCwgJGV2ZW50LmtleSwgW1wiVXBcIiwgXCJBcnJvd1VwXCJdKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRlbWl0KFwiYXJyb3dVcFwiLCAkZXZlbnQpXG4gICAgICAgICAgICB9LmFwcGx5KG51bGwsIGFyZ3VtZW50cylcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgISRldmVudC50eXBlLmluZGV4T2YoXCJrZXlcIikgJiZcbiAgICAgICAgICAgICAgX3ZtLl9rKCRldmVudC5rZXlDb2RlLCBcImVudGVyXCIsIDEzLCAkZXZlbnQua2V5LCBcIkVudGVyXCIpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uJGVtaXQoXCJlbnRlclwiKVxuICAgICAgICAgICAgfS5hcHBseShudWxsLCBhcmd1bWVudHMpXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgICBfdm0udmFsdWUgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcInNwYW5cIixcbiAgICAgIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiaGlkZGVuXCIsXG4gICAgICAgIGF0dHJzOiB7IGlkOiBcImVtb2ppLXBpY2tlci1zZWFyY2gtZGVzY3JpcHRpb25cIiB9LFxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX3ZtLl92KFxuICAgICAgICAgIFwiVXNlIHRoZSBsZWZ0LCByaWdodCwgdXAgYW5kIGRvd24gYXJyb3cga2V5cyB0byBuYXZpZ2F0ZSB0aGUgZW1vamkgc2VhcmNoXFxuICAgIHJlc3VsdHMuXCJcbiAgICAgICAgKSxcbiAgICAgIF1cbiAgICApLFxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgY2xhc3M6IHtcbiAgICAgICAgXCJlbW9qaS1tYXJ0LXNraW4tc3dhdGNoZXNcIjogdHJ1ZSxcbiAgICAgICAgXCJlbW9qaS1tYXJ0LXNraW4tc3dhdGNoZXMtb3BlbmVkXCI6IF92bS5vcGVuZWQsXG4gICAgICB9LFxuICAgIH0sXG4gICAgX3ZtLl9sKDYsIGZ1bmN0aW9uIChza2luVG9uZSkge1xuICAgICAgcmV0dXJuIF9jKFxuICAgICAgICBcInNwYW5cIixcbiAgICAgICAge1xuICAgICAgICAgIGtleTogc2tpblRvbmUsXG4gICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgIFwiZW1vamktbWFydC1za2luLXN3YXRjaFwiOiB0cnVlLFxuICAgICAgICAgICAgXCJlbW9qaS1tYXJ0LXNraW4tc3dhdGNoLXNlbGVjdGVkXCI6IF92bS5za2luID09IHNraW5Ub25lLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInNwYW5cIiwge1xuICAgICAgICAgICAgY2xhc3M6IFwiZW1vamktbWFydC1za2luIGVtb2ppLW1hcnQtc2tpbi10b25lLVwiICsgc2tpblRvbmUsXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub25DbGljayhza2luVG9uZSlcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSksXG4gICAgICAgIF1cbiAgICAgIClcbiAgICB9KSxcbiAgICAwXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvKiBnbG9iYWxzIF9fVlVFX1NTUl9DT05URVhUX18gKi9cblxuLy8gSU1QT1JUQU5UOiBEbyBOT1QgdXNlIEVTMjAxNSBmZWF0dXJlcyBpbiB0aGlzIGZpbGUgKGV4Y2VwdCBmb3IgbW9kdWxlcykuXG4vLyBUaGlzIG1vZHVsZSBpcyBhIHJ1bnRpbWUgdXRpbGl0eSBmb3IgY2xlYW5lciBjb21wb25lbnQgbW9kdWxlIG91dHB1dCBhbmQgd2lsbFxuLy8gYmUgaW5jbHVkZWQgaW4gdGhlIGZpbmFsIHdlYnBhY2sgdXNlciBidW5kbGUuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHNjcmlwdEV4cG9ydHMsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmdW5jdGlvbmFsVGVtcGxhdGUsXG4gIGluamVjdFN0eWxlcyxcbiAgc2NvcGVJZCxcbiAgbW9kdWxlSWRlbnRpZmllciwgLyogc2VydmVyIG9ubHkgKi9cbiAgc2hhZG93TW9kZSAvKiB2dWUtY2xpIG9ubHkgKi9cbikge1xuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKHJlbmRlcikge1xuICAgIG9wdGlvbnMucmVuZGVyID0gcmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBzdGF0aWNSZW5kZXJGbnNcbiAgICBvcHRpb25zLl9jb21waWxlZCA9IHRydWVcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgaWYgKGZ1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMuZnVuY3Rpb25hbCA9IHRydWVcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9ICdkYXRhLXYtJyArIHNjb3BlSWRcbiAgfVxuXG4gIHZhciBob29rXG4gIGlmIChtb2R1bGVJZGVudGlmaWVyKSB7IC8vIHNlcnZlciBidWlsZFxuICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgY29udGV4dCA9XG4gICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpIC8vIGZ1bmN0aW9uYWxcbiAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgY29udGV4dClcbiAgICAgIH1cbiAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJyZW5jZVxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2tcbiAgfSBlbHNlIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICBob29rID0gc2hhZG93TW9kZVxuICAgICAgPyBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgKG9wdGlvbnMuZnVuY3Rpb25hbCA/IHRoaXMucGFyZW50IDogdGhpcykuJHJvb3QuJG9wdGlvbnMuc2hhZG93Um9vdFxuICAgICAgICApXG4gICAgICB9XG4gICAgICA6IGluamVjdFN0eWxlc1xuICB9XG5cbiAgaWYgKGhvb2spIHtcbiAgICBpZiAob3B0aW9ucy5mdW5jdGlvbmFsKSB7XG4gICAgICAvLyBmb3IgdGVtcGxhdGUtb25seSBob3QtcmVsb2FkIGJlY2F1c2UgaW4gdGhhdCBjYXNlIHRoZSByZW5kZXIgZm4gZG9lc24ndFxuICAgICAgLy8gZ28gdGhyb3VnaCB0aGUgbm9ybWFsaXplclxuICAgICAgb3B0aW9ucy5faW5qZWN0U3R5bGVzID0gaG9va1xuICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9uYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICB2YXIgb3JpZ2luYWxSZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24gKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBvcmlnaW5hbFJlbmRlcihoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgdmFyIGV4aXN0aW5nID0gb3B0aW9ucy5iZWZvcmVDcmVhdGVcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmdcbiAgICAgICAgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spXG4gICAgICAgIDogW2hvb2tdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufSIsImltcG9ydCBhcnJheUxpa2VUb0FycmF5IGZyb20gXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufSIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlcltTeW1ib2wuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlcltcIkBAaXRlcmF0b3JcIl0gIT0gbnVsbCkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn0iLCJpbXBvcnQgYXJyYXlXaXRob3V0SG9sZXMgZnJvbSBcIi4vYXJyYXlXaXRob3V0SG9sZXMuanNcIjtcbmltcG9ydCBpdGVyYWJsZVRvQXJyYXkgZnJvbSBcIi4vaXRlcmFibGVUb0FycmF5LmpzXCI7XG5pbXBvcnQgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgZnJvbSBcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIjtcbmltcG9ydCBub25JdGVyYWJsZVNwcmVhZCBmcm9tIFwiLi9ub25JdGVyYWJsZVNwcmVhZC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufSIsImltcG9ydCBhcnJheUxpa2VUb0FycmF5IGZyb20gXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGU7IH07XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBzdG9yZSBmcm9tICcuL3V0aWxzL3N0b3JlJ1xuaW1wb3J0IHsgdW5jb21wcmVzcyB9IGZyb20gJy4vdXRpbHMvZGF0YSdcbmltcG9ydCBmcmVxdWVudGx5IGZyb20gJy4vdXRpbHMvZnJlcXVlbnRseSdcblxuZXhwb3J0IHtcbiAgUGlja2VyLFxuICBFbW9qaSxcbiAgQW5jaG9ycyxcbiAgUHJldmlldyxcbiAgU2VhcmNoLFxuICBDYXRlZ29yeSxcbiAgU2tpbnMsXG59IGZyb20gJy4vY29tcG9uZW50cydcblxuZXhwb3J0IHsgRW1vamlJbmRleCwgRW1vamlWaWV3LCBFbW9qaURhdGEsIHNhbml0aXplIH0gZnJvbSAnLi91dGlscy9lbW9qaS1kYXRhJ1xuZXhwb3J0IHsgdW5jb21wcmVzcywgc3RvcmUsIGZyZXF1ZW50bHkgfVxuIl0sIm5hbWVzIjpbImRlZmF1bHQiLCJBbmNob3JzIiwiQ2F0ZWdvcnkiLCJQcmV2aWV3IiwiU2VhcmNoIiwiU2tpbnMiLCJFbW9qaSIsIlBpY2tlciIsIl9TdHJpbmciLCJTdHJpbmciLCJmcm9tQ29kZVBvaW50Iiwic3RyaW5nRnJvbUNvZGVQb2ludCIsIk1BWF9TSVpFIiwiY29kZVVuaXRzIiwiaGlnaFN1cnJvZ2F0ZSIsImxvd1N1cnJvZ2F0ZSIsImluZGV4IiwibGVuZ3RoIiwiYXJndW1lbnRzIiwicmVzdWx0IiwiY29kZVBvaW50IiwiTnVtYmVyIiwiaXNGaW5pdGUiLCJNYXRoIiwiZmxvb3IiLCJSYW5nZUVycm9yIiwicHVzaCIsImZyb21DaGFyQ29kZSIsImFwcGx5IiwiU1ZHcyIsImFjdGl2aXR5IiwiY3VzdG9tIiwiZmxhZ3MiLCJmb29kcyIsIm5hdHVyZSIsIm9iamVjdHMiLCJzbWlsZXlzIiwicGVvcGxlIiwicGxhY2VzIiwicmVjZW50Iiwic3ltYm9scyIsIm1hcHBpbmciLCJuYW1lIiwidW5pZmllZCIsIm5vbl9xdWFsaWZpZWQiLCJoYXNfaW1nX2FwcGxlIiwiaGFzX2ltZ19nb29nbGUiLCJoYXNfaW1nX3R3aXR0ZXIiLCJoYXNfaW1nX2ZhY2Vib29rIiwia2V5d29yZHMiLCJzaGVldCIsImVtb3RpY29ucyIsInRleHQiLCJzaG9ydF9uYW1lcyIsImFkZGVkX2luIiwiYnVpbGRTZWFyY2giLCJlbW9qaSIsInNlYXJjaCIsImFkZFRvU2VhcmNoIiwic3RyaW5ncyIsInNwbGl0IiwiQXJyYXkiLCJpc0FycmF5IiwiZm9yRWFjaCIsInN0cmluZyIsInMiLCJ0b0xvd2VyQ2FzZSIsImluZGV4T2YiLCJqb2luIiwiZGVlcEZyZWV6ZSIsIm9iamVjdCIsInByb3BOYW1lcyIsIk9iamVjdCIsImdldE93blByb3BlcnR5TmFtZXMiLCJ2YWx1ZSIsImZyZWV6ZSIsInVuY29tcHJlc3MiLCJkYXRhIiwiY29tcHJlc3NlZCIsImlkIiwiZW1vamlzIiwia2V5IiwidW5zaGlmdCIsInNoZWV0X3giLCJzaGVldF95IiwidG9GaXhlZCIsImludGVyc2VjdCIsInVuaWZpZWRUb05hdGl2ZSIsImZyZXF1ZW50bHkiLCJTSEVFVF9DT0xVTU5TIiwiQ09MT05TX1JFR0VYIiwiU0tJTlMiLCJFbW9qaUluZGV4IiwiZW1vamlzVG9TaG93RmlsdGVyIiwiaW5jbHVkZSIsImV4Y2x1ZGUiLCJyZWNlbnRMZW5ndGgiLCJfZGF0YSIsIl9lbW9qaXNGaWx0ZXIiLCJfaW5jbHVkZSIsIl9leGNsdWRlIiwiX2N1c3RvbSIsIl9yZWNlbnQiLCJnZXQiLCJfZW1vamlzIiwiX25hdGl2ZUVtb2ppcyIsIl9lbW90aWNvbnMiLCJfY2F0ZWdvcmllcyIsIl9yZWNlbnRDYXRlZ29yeSIsIl9jdXN0b21DYXRlZ29yeSIsIl9zZWFyY2hJbmRleCIsImJ1aWxkSW5kZXgiLCJhbGxDYXRlZ29yaWVzIiwiY2F0ZWdvcmllcyIsImZpbHRlciIsIml0ZW0iLCJpbmNsdWRlcyIsInNvcnQiLCJhIiwiYiIsImluZGV4QSIsImluZGV4QiIsImNhdGVnb3J5RGF0YSIsImlzQ2F0ZWdvcnlOZWVkZWQiLCJjYXRlZ29yeSIsImVtb2ppSWQiLCJhZGRFbW9qaSIsImN1c3RvbUVtb2ppIiwiYWRkQ3VzdG9tRW1vamkiLCJtYXAiLCJoYXNFbW9qaSIsInNraW4iLCJtYXRjaGVzIiwibWF0Y2giLCJwYXJzZUludCIsImFsaWFzZXMiLCJoYXNPd25Qcm9wZXJ0eSIsImVtb2ppT2JqZWN0IiwiZ2V0U2tpbiIsIkVycm9yIiwia2V5cyIsInVuaWNvZGVFbW9qaSIsIm1heFJlc3VsdHMiLCJ2YWx1ZXMiLCJhbGxSZXN1bHRzIiwiY3VycmVudEluZGV4IiwiY2hhckluZGV4IiwiY2hhciIsInJlc3VsdHMiLCJzY29yZXMiLCJzdWIiLCJzdWJzdHIiLCJzdWJJbmRleCIsInNjb3JlIiwiYVNjb3JlIiwiYlNjb3JlIiwic2xpY2UiLCJlbW9qaURhdGEiLCJhc3NpZ24iLCJFbW9qaURhdGEiLCJpc0Vtb2ppTmVlZGVkIiwibmF0aXZlIiwiX3NraW5zIiwiaWR4IiwiZW1vdGljb24iLCJjYXRlZ29yeV9pZCIsImlzSW5jbHVkZWQiLCJpc0V4Y2x1ZGVkIiwic2tpbl92YXJpYXRpb25zIiwic2tpbklkeCIsInNraW5LZXkiLCJ2YXJpYXRpb25EYXRhIiwic2tpbkRhdGEiLCJrIiwiX3Nhbml0aXplZCIsInNhbml0aXplIiwic2hvcnRfbmFtZSIsIm11bHRpcGx5IiwieCIsInJvdW5kIiwieSIsImNvbmNhdCIsIkJvb2xlYW4iLCJFbW9qaVZpZXciLCJzZXQiLCJmYWxsYmFjayIsImVtb2ppVG9vbHRpcCIsImVtb2ppU2l6ZSIsIl9lbW9qaSIsIl9uYXRpdmUiLCJfc2tpbiIsIl9zZXQiLCJfZmFsbGJhY2siLCJjYW5SZW5kZXIiLCJfY2FuUmVuZGVyIiwiY3NzQ2xhc3MiLCJfY3NzQ2xhc3MiLCJjc3NTdHlsZSIsIl9jc3NTdHlsZSIsImNvbnRlbnQiLCJfY29udGVudCIsInRpdGxlIiwiYXJpYUxhYmVsIiwiX2lzQ3VzdG9tIiwiX2lzTmF0aXZlIiwiX2hhc0Vtb2ppIiwiX2Vtb2ppVHlwZSIsImJhY2tncm91bmRJbWFnZSIsImdldEVtb2ppIiwiaW1hZ2VVcmwiLCJiYWNrZ3JvdW5kU2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiZ2V0UG9zaXRpb24iLCJmb250U2l6ZSIsImhhc0ltYWdlIiwidW5kZWZpbmVkIiwic2tpbl90b25lIiwiY29sb25zIiwic3RvcmUiLCJERUZBVUxUUyIsImluaXRpYWxpemVkIiwiZGVmYXVsdHMiLCJpbml0IiwiYWRkIiwibWF4TnVtYmVyIiwiZGVmYXVsdExlbmd0aCIsIm1pbiIsImkiLCJxdWFudGl0eSIsImZyZXF1ZW50bHlLZXlzIiwic29ydGVkIiwicmV2ZXJzZSIsInNsaWNlZCIsImxhc3QiLCJwb3AiLCJ1bmljb2RlcyIsImNvZGVQb2ludHMiLCJ1IiwidW5pcSIsImFyciIsInJlZHVjZSIsImFjYyIsInVuaXFBIiwidW5pcUIiLCJkZWVwTWVyZ2UiLCJvIiwib3JpZ2luYWxWYWx1ZSIsIm1lYXN1cmVTY3JvbGxiYXIiLCJkb2N1bWVudCIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsIm92ZXJmbG93IiwicG9zaXRpb24iLCJ0b3AiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJzY3JvbGxiYXJXaWR0aCIsIm9mZnNldFdpZHRoIiwiY2xpZW50V2lkdGgiLCJyZW1vdmVDaGlsZCIsIlBpY2tlclZpZXciLCJwaWNrZXJDb21wb25lbnQiLCJfdm0iLCJfcGVyTGluZSIsInBlckxpbmUiLCJmaXJzdCIsImFjdGl2ZUNhdGVnb3J5Iiwic2VhcmNoRW1vamlzIiwicHJldmlld0Vtb2ppIiwicHJldmlld0Vtb2ppQ2F0ZWdvcnlJZHgiLCJwcmV2aWV3RW1vamlJZHgiLCJzY3JvbGxFbGVtZW50IiwiJHJlZnMiLCJzY3JvbGwiLCJzY3JvbGxUb3AiLCJmaWx0ZXJlZENhdGVnb3JpZXMiLCJsIiwiY29tcG9uZW50IiwiZ2V0Q2F0ZWdvcnlDb21wb25lbnQiLCIkZWwiLCJvZmZzZXRUb3AiLCJoYXNFbW9qaXMiLCJzY3JvbGxUb0NvbXBvbmVudCIsImluZmluaXRlU2Nyb2xsIiwibWF4U2VhcmNoUmVzdWx0cyIsInVwZGF0ZVByZXZpZXdFbW9qaSIsImVtb2ppc0xlbmd0aCIsIm9uQXJyb3dSaWdodCIsImNhdGVnb3J5TGVuZ3RoIiwiZGlmZiIsInByZXZDYXRlZ29yeUxhc3RSb3dMZW5ndGgiLCJvbkFycm93TGVmdCIsIiRuZXh0VGljayIsInNjcm9sbEVsIiwiZW1vamlFbCIsInF1ZXJ5U2VsZWN0b3IiLCJzY3JvbGxIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJjYXRlZ29yeUlkeCIsIkVtb2ppUHJvcHMiLCJ0eXBlIiwidG9vbHRpcCIsIkZ1bmN0aW9uIiwicmVxdWlyZWQiLCJzaXplIiwidGFnIiwiUGlja2VyUHJvcHMiLCJjb2xvciIsImRlZmF1bHRTa2luIiwiYXV0b0ZvY3VzIiwiaTE4biIsInNob3dQcmV2aWV3Iiwic2hvd1NlYXJjaCIsInNob3dDYXRlZ29yaWVzIiwic2hvd1NraW5Ub25lcyIsInBpY2tlclN0eWxlcyIsIk5BTUVTUEFDRSIsIl9KU09OIiwiSlNPTiIsImlzTG9jYWxTdG9yYWdlU3VwcG9ydGVkIiwid2luZG93IiwiZ2V0dGVyIiwic2V0dGVyIiwic2V0SGFuZGxlcnMiLCJoYW5kbGVycyIsInNldE5hbWVzcGFjZSIsIm5hbWVzcGFjZSIsInVwZGF0ZSIsInN0YXRlIiwibG9jYWxTdG9yYWdlIiwic3RyaW5naWZ5IiwiZSIsInBhcnNlIiwiaXNXaW5kb3dBdmFpbGFibGUiLCJsYXN0VGltZSIsInZlbmRvcnMiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImNhbGxiYWNrIiwiZWxlbWVudCIsImN1cnJUaW1lIiwiRGF0ZSIsImdldFRpbWUiLCJ0aW1lVG9DYWxsIiwibWF4Iiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCJdLCJzb3VyY2VSb290IjoiIn0=