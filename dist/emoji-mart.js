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
  emits: ["click", "mouseenter", "mouseleave"],
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
    onEnter: function onEnter() {
      if (!this.view.previewEmoji) {
        // We may press "Enter" when nothing is selected,
        // for example, if we search for "asdf".
        return;
      }

      this.$emit('select', this.view.previewEmoji);
      _utils_frequently__WEBPACK_IMPORTED_MODULE_3__["default"].add(this.view.previewEmoji);
    },
    onEmojiClick: function onEmojiClick(emoji) {
      this.$emit('select', emoji);
      _utils_frequently__WEBPACK_IMPORTED_MODULE_3__["default"].add(emoji);
    },
    onTextSelect: function onTextSelect($event) {
      // Prevent default text select event.
      // In Vue 3 it goes through the component and triggers the `select`
      // event that is supposed to be emmited only with emoji.
      // (there is no such problem in Vue 2).
      $event.stopPropagation();
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
/* harmony export */   Anchors: function() { return /* reexport safe */ _anchors_vue__WEBPACK_IMPORTED_MODULE_0__["default"]; },
/* harmony export */   Category: function() { return /* reexport safe */ _category_vue__WEBPACK_IMPORTED_MODULE_1__["default"]; },
/* harmony export */   Emoji: function() { return /* reexport safe */ _Emoji_vue__WEBPACK_IMPORTED_MODULE_5__["default"]; },
/* harmony export */   Picker: function() { return /* reexport safe */ _Picker_vue__WEBPACK_IMPORTED_MODULE_6__["default"]; },
/* harmony export */   Preview: function() { return /* reexport safe */ _preview_vue__WEBPACK_IMPORTED_MODULE_2__["default"]; },
/* harmony export */   Search: function() { return /* reexport safe */ _search_vue__WEBPACK_IMPORTED_MODULE_3__["default"]; },
/* harmony export */   Skins: function() { return /* reexport safe */ _skins_vue__WEBPACK_IMPORTED_MODULE_4__["default"]; }
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
/* harmony export */   buildSearch: function() { return /* binding */ buildSearch; },
/* harmony export */   uncompress: function() { return /* binding */ uncompress; }
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
/* harmony export */   EmojiData: function() { return /* binding */ EmojiData; },
/* harmony export */   EmojiIndex: function() { return /* binding */ EmojiIndex; },
/* harmony export */   EmojiView: function() { return /* binding */ EmojiView; },
/* harmony export */   sanitize: function() { return /* binding */ sanitize; }
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
/* harmony export */   deepMerge: function() { return /* binding */ deepMerge; },
/* harmony export */   intersect: function() { return /* binding */ intersect; },
/* harmony export */   measureScrollbar: function() { return /* binding */ measureScrollbar; },
/* harmony export */   unifiedToNative: function() { return /* binding */ unifiedToNative; },
/* harmony export */   uniq: function() { return /* binding */ uniq; }
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
/* harmony export */   PickerView: function() { return /* binding */ PickerView; }
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
/* harmony export */   EmojiProps: function() { return /* binding */ EmojiProps; },
/* harmony export */   PickerProps: function() { return /* binding */ PickerProps; }
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
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Emoji_vue_vue_type_template_id_534ad946___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Emoji_vue_vue_type_template_id_534ad946___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
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
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Picker_vue_vue_type_template_id_d16e9084___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Picker_vue_vue_type_template_id_d16e9084___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
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
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_anchors_vue_vue_type_template_id_51188104___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_anchors_vue_vue_type_template_id_51188104___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
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
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_template_id_376cda0e___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_template_id_376cda0e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
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
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_preview_vue_vue_type_template_id_35056c30___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_preview_vue_vue_type_template_id_35056c30___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
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
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_template_id_4ad41bb8___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_template_id_4ad41bb8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
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
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_skins_vue_vue_type_template_id_1c614894___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_skins_vue_vue_type_template_id_1c614894___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
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
/* harmony export */   render: function() { return /* binding */ render; },
/* harmony export */   staticRenderFns: function() { return /* binding */ staticRenderFns; }
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
/* harmony export */   render: function() { return /* binding */ render; },
/* harmony export */   staticRenderFns: function() { return /* binding */ staticRenderFns; }
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
                    select: _vm.onTextSelect,
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
            [
              _vm._t("customCategory"),
              _vm._v(" "),
              _vm._l(_vm.view.filteredCategories, function (category, idx) {
                return _c("category", {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value:
                        _vm.infiniteScroll ||
                        category == _vm.view.activeCategory,
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
            ],
            2
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
/* harmony export */   render: function() { return /* binding */ render; },
/* harmony export */   staticRenderFns: function() { return /* binding */ staticRenderFns; }
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
/* harmony export */   render: function() { return /* binding */ render; },
/* harmony export */   staticRenderFns: function() { return /* binding */ staticRenderFns; }
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
/* harmony export */   render: function() { return /* binding */ render; },
/* harmony export */   staticRenderFns: function() { return /* binding */ staticRenderFns; }
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
/* harmony export */   render: function() { return /* binding */ render; },
/* harmony export */   staticRenderFns: function() { return /* binding */ staticRenderFns; }
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
/* harmony export */   render: function() { return /* binding */ render; },
/* harmony export */   staticRenderFns: function() { return /* binding */ staticRenderFns; }
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
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
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

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
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
/* harmony export */   Anchors: function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_3__.Anchors; },
/* harmony export */   Category: function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_3__.Category; },
/* harmony export */   Emoji: function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_3__.Emoji; },
/* harmony export */   EmojiData: function() { return /* reexport safe */ _utils_emoji_data__WEBPACK_IMPORTED_MODULE_4__.EmojiData; },
/* harmony export */   EmojiIndex: function() { return /* reexport safe */ _utils_emoji_data__WEBPACK_IMPORTED_MODULE_4__.EmojiIndex; },
/* harmony export */   EmojiView: function() { return /* reexport safe */ _utils_emoji_data__WEBPACK_IMPORTED_MODULE_4__.EmojiView; },
/* harmony export */   Picker: function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_3__.Picker; },
/* harmony export */   Preview: function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_3__.Preview; },
/* harmony export */   Search: function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_3__.Search; },
/* harmony export */   Skins: function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_3__.Skins; },
/* harmony export */   frequently: function() { return /* reexport safe */ _utils_frequently__WEBPACK_IMPORTED_MODULE_2__["default"]; },
/* harmony export */   sanitize: function() { return /* reexport safe */ _utils_emoji_data__WEBPACK_IMPORTED_MODULE_4__.sanitize; },
/* harmony export */   store: function() { return /* reexport safe */ _utils_store__WEBPACK_IMPORTED_MODULE_0__["default"]; },
/* harmony export */   uncompress: function() { return /* reexport safe */ _utils_data__WEBPACK_IMPORTED_MODULE_1__.uncompress; }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0EsZUFBZSw0QkFBNEI7V0FDM0MsZUFBZTtXQUNmLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQSw4Q0FBOEM7Ozs7O1dDQTlDO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBRUE7QUFVQSIsInNvdXJjZXMiOlsid2VicGFjazovL0Vtb2ppTWFydC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0L3NyYy9jb21wb25lbnRzL0Vtb2ppLnZ1ZSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvc3JjL2NvbXBvbmVudHMvUGlja2VyLnZ1ZSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvc3JjL2NvbXBvbmVudHMvYW5jaG9ycy52dWUiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0L3NyYy9jb21wb25lbnRzL2NhdGVnb3J5LnZ1ZSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvc3JjL2NvbXBvbmVudHMvcHJldmlldy52dWUiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0L3NyYy9jb21wb25lbnRzL3NlYXJjaC52dWUiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0L3NyYy9jb21wb25lbnRzL3NraW5zLnZ1ZSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvcG9seWZpbGxzL3N0cmluZ0Zyb21Db2RlUG9pbnQuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL3N2Z3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL3V0aWxzL2RhdGEuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL3V0aWxzL2Vtb2ppLWRhdGEuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL3V0aWxzL2ZyZXF1ZW50bHkuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL3V0aWxzL2luZGV4LmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy91dGlscy9waWNrZXIuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL3V0aWxzL3NoYXJlZC1wcm9wcy5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvdXRpbHMvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL3ZlbmRvci9yYWYtcG9seWZpbGwuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvRW1vamkudnVlIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL1BpY2tlci52dWUiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvYW5jaG9ycy52dWUiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvY2F0ZWdvcnkudnVlIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL3ByZXZpZXcudnVlIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL3NlYXJjaC52dWUiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvc2tpbnMudnVlIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL0Vtb2ppLnZ1ZT9hZDg0Iiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL1BpY2tlci52dWU/NDk3MCIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9hbmNob3JzLnZ1ZT9iYjk2Iiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL2NhdGVnb3J5LnZ1ZT8zYzdhIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL3ByZXZpZXcudnVlPzBjNWYiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvc2VhcmNoLnZ1ZT8xMDVhIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL3NraW5zLnZ1ZT8wYzBlIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL0Vtb2ppLnZ1ZT85YjlkIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL1BpY2tlci52dWU/ZWRhNSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9hbmNob3JzLnZ1ZT80ZTU3Iiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL2NhdGVnb3J5LnZ1ZT82MDEyIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL3ByZXZpZXcudnVlPzAyYjUiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvc2VhcmNoLnZ1ZT8wZmQ4Iiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL3NraW5zLnZ1ZT8xNmExIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL0Vtb2ppLnZ1ZT82YTE0Iiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL1BpY2tlci52dWU/OGY2YyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9hbmNob3JzLnZ1ZT9kY2VmIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL2NhdGVnb3J5LnZ1ZT83NGQ1Iiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL3ByZXZpZXcudnVlP2I1NGEiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvc2VhcmNoLnZ1ZT83N2RkIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL3NraW5zLnZ1ZT81NjliIiwid2VicGFjazovL0Vtb2ppTWFydC8uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5TGlrZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aG91dEhvbGVzLmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL0Vtb2ppTWFydC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkVtb2ppTWFydFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJFbW9qaU1hcnRcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiPHRlbXBsYXRlPlxuICA8Y29tcG9uZW50XG4gICAgOmlzPVwidGFnXCJcbiAgICB2LWlmPVwidmlldy5jYW5SZW5kZXJcIlxuICAgIDp0aXRsZT1cInZpZXcudGl0bGVcIlxuICAgIDphcmlhLWxhYmVsPVwidmlldy5hcmlhTGFiZWxcIlxuICAgIDpkYXRhLXRpdGxlPVwidGl0bGVcIlxuICAgIGNsYXNzPVwiZW1vamktbWFydC1lbW9qaVwiXG4gICAgQG1vdXNlZW50ZXI9XCJvbk1vdXNlRW50ZXJcIlxuICAgIEBtb3VzZWxlYXZlPVwib25Nb3VzZUxlYXZlXCJcbiAgICBAY2xpY2s9XCJvbkNsaWNrXCJcbiAgPlxuICAgIDxzcGFuIDpjbGFzcz1cInZpZXcuY3NzQ2xhc3NcIiA6c3R5bGU9XCJ2aWV3LmNzc1N0eWxlXCI+e3tcbiAgICAgIHZpZXcuY29udGVudFxuICAgIH19PC9zcGFuPlxuICA8L2NvbXBvbmVudD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBFbW9qaVByb3BzIH0gZnJvbSAnLi4vdXRpbHMvc2hhcmVkLXByb3BzJ1xuaW1wb3J0IHsgRW1vamlWaWV3IH0gZnJvbSAnLi4vdXRpbHMvZW1vamktZGF0YSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczoge1xuICAgIC4uLkVtb2ppUHJvcHMsXG4gICAgZGF0YToge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgfSxcbiAgZW1pdHM6IFtcImNsaWNrXCIsIFwibW91c2VlbnRlclwiLCBcIm1vdXNlbGVhdmVcIl0sXG4gIGNvbXB1dGVkOiB7XG4gICAgdmlldygpIHtcbiAgICAgIHJldHVybiBuZXcgRW1vamlWaWV3KFxuICAgICAgICB0aGlzLmVtb2ppT2JqZWN0LFxuICAgICAgICB0aGlzLnNraW4sXG4gICAgICAgIHRoaXMuc2V0LFxuICAgICAgICB0aGlzLm5hdGl2ZSxcbiAgICAgICAgdGhpcy5mYWxsYmFjayxcbiAgICAgICAgdGhpcy50b29sdGlwLFxuICAgICAgICB0aGlzLnNpemUsXG4gICAgICApXG4gICAgfSxcbiAgICBzYW5pdGl6ZWREYXRhKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZW1vamlPYmplY3QuX3Nhbml0aXplZFxuICAgIH0sXG4gICAgdGl0bGUoKSB7XG4gICAgICByZXR1cm4gdGhpcy50b29sdGlwID8gdGhpcy5lbW9qaU9iamVjdC5zaG9ydF9uYW1lIDogbnVsbFxuICAgIH0sXG4gICAgZW1vamlPYmplY3QoKSB7XG4gICAgICBpZiAodHlwZW9mIHRoaXMuZW1vamkgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5maW5kRW1vamkodGhpcy5lbW9qaSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVtb2ppXG4gICAgICB9XG4gICAgfSxcbiAgfSxcbiAgY3JlYXRlZCgpIHt9LFxuICBtZXRob2RzOiB7XG4gICAgb25DbGljaygpIHtcbiAgICAgIHRoaXMuJGVtaXQoJ2NsaWNrJywgdGhpcy5lbW9qaU9iamVjdClcbiAgICB9LFxuICAgIG9uTW91c2VFbnRlcigpIHtcbiAgICAgIHRoaXMuJGVtaXQoJ21vdXNlZW50ZXInLCB0aGlzLmVtb2ppT2JqZWN0KVxuICAgIH0sXG4gICAgb25Nb3VzZUxlYXZlKCkge1xuICAgICAgdGhpcy4kZW1pdCgnbW91c2VsZWF2ZScsIHRoaXMuZW1vamlPYmplY3QpXG4gICAgfSxcbiAgfSxcbn1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8c2VjdGlvbiBjbGFzcz1cImVtb2ppLW1hcnQgZW1vamktbWFydC1zdGF0aWNcIiA6c3R5bGU9XCJjdXN0b21TdHlsZXNcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1iYXIgZW1vamktbWFydC1iYXItYW5jaG9yc1wiIHYtaWY9XCJzaG93Q2F0ZWdvcmllc1wiPlxuICAgICAgPGFuY2hvcnNcbiAgICAgICAgOmRhdGE9XCJkYXRhXCJcbiAgICAgICAgOmkxOG49XCJtZXJnZWRJMThuXCJcbiAgICAgICAgOmNvbG9yPVwiY29sb3JcIlxuICAgICAgICA6Y2F0ZWdvcmllcz1cInZpZXcuYWxsQ2F0ZWdvcmllc1wiXG4gICAgICAgIDphY3RpdmUtY2F0ZWdvcnk9XCJ2aWV3LmFjdGl2ZUNhdGVnb3J5XCJcbiAgICAgICAgQGNsaWNrPVwib25BbmNob3JDbGlja1wiXG4gICAgICAvPlxuICAgIDwvZGl2PlxuXG4gICAgPHNsb3RcbiAgICAgIG5hbWU9XCJzZWFyY2hUZW1wbGF0ZVwiXG4gICAgICA6ZGF0YT1cImRhdGFcIlxuICAgICAgOmkxOG49XCJpMThuXCJcbiAgICAgIDphdXRvLWZvY3VzPVwiYXV0b0ZvY3VzXCJcbiAgICAgIDpvbi1zZWFyY2g9XCJvblNlYXJjaFwiXG4gICAgPlxuICAgICAgPHNlYXJjaFxuICAgICAgICB2LWlmPVwic2hvd1NlYXJjaFwiXG4gICAgICAgIHJlZj1cInNlYXJjaFwiXG4gICAgICAgIDpkYXRhPVwiZGF0YVwiXG4gICAgICAgIDppMThuPVwibWVyZ2VkSTE4blwiXG4gICAgICAgIDphdXRvLWZvY3VzPVwiYXV0b0ZvY3VzXCJcbiAgICAgICAgOm9uLXNlYXJjaD1cIm9uU2VhcmNoXCJcbiAgICAgICAgQHNlYXJjaD1cIm9uU2VhcmNoXCJcbiAgICAgICAgQGFycm93TGVmdD1cIm9uQXJyb3dMZWZ0XCJcbiAgICAgICAgQGFycm93UmlnaHQ9XCJvbkFycm93UmlnaHRcIlxuICAgICAgICBAYXJyb3dEb3duPVwib25BcnJvd0Rvd25cIlxuICAgICAgICBAYXJyb3dVcD1cIm9uQXJyb3dVcFwiXG4gICAgICAgIEBlbnRlcj1cIm9uRW50ZXJcIlxuICAgICAgICBAc2VsZWN0PVwib25UZXh0U2VsZWN0XCJcbiAgICAgIC8+XG4gICAgPC9zbG90PlxuXG4gICAgPGRpdlxuICAgICAgcm9sZT1cInRhYnBhbmVsXCJcbiAgICAgIGNsYXNzPVwiZW1vamktbWFydC1zY3JvbGxcIlxuICAgICAgcmVmPVwic2Nyb2xsXCJcbiAgICAgIEBzY3JvbGw9XCJvblNjcm9sbFwiXG4gICAgPlxuICAgICAgPGRpdlxuICAgICAgICBpZD1cImVtb2ppLW1hcnQtbGlzdFwiXG4gICAgICAgIHJlZj1cInNjcm9sbENvbnRlbnRcIlxuICAgICAgICByb2xlPVwibGlzdGJveFwiXG4gICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJ0cnVlXCJcbiAgICAgID5cbiAgICAgICAgPHNsb3QgbmFtZT1cImN1c3RvbUNhdGVnb3J5XCI+IDwvc2xvdD5cblxuICAgICAgICA8Y2F0ZWdvcnlcbiAgICAgICAgICB2LWZvcj1cIihjYXRlZ29yeSwgaWR4KSBpbiB2aWV3LmZpbHRlcmVkQ2F0ZWdvcmllc1wiXG4gICAgICAgICAgdi1zaG93PVwiaW5maW5pdGVTY3JvbGwgfHwgY2F0ZWdvcnkgPT0gdmlldy5hY3RpdmVDYXRlZ29yeVwiXG4gICAgICAgICAgOnJlZj1cIidjYXRlZ29yaWVzXycgKyBpZHhcIlxuICAgICAgICAgIDprZXk9XCJjYXRlZ29yeS5pZFwiXG4gICAgICAgICAgOmRhdGE9XCJkYXRhXCJcbiAgICAgICAgICA6aTE4bj1cIm1lcmdlZEkxOG5cIlxuICAgICAgICAgIDppZD1cImNhdGVnb3J5LmlkXCJcbiAgICAgICAgICA6bmFtZT1cImNhdGVnb3J5Lm5hbWVcIlxuICAgICAgICAgIDplbW9qaXM9XCJjYXRlZ29yeS5lbW9qaXNcIlxuICAgICAgICAgIDplbW9qaS1wcm9wcz1cImVtb2ppUHJvcHNcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8c2xvdFxuICAgICAgbmFtZT1cInByZXZpZXdUZW1wbGF0ZVwiXG4gICAgICA6ZGF0YT1cImRhdGFcIlxuICAgICAgOnRpdGxlPVwidGl0bGVcIlxuICAgICAgOmVtb2ppPVwidmlldy5wcmV2aWV3RW1vamlcIlxuICAgICAgOmlkbGUtZW1vamk9XCJpZGxlRW1vamlcIlxuICAgICAgOnNob3ctc2tpbi10b25lcz1cInNob3dTa2luVG9uZXNcIlxuICAgICAgOmVtb2ppLXByb3BzPVwiZW1vamlQcm9wc1wiXG4gICAgICA6c2tpbi1wcm9wcz1cInNraW5Qcm9wc1wiXG4gICAgICA6b24tc2tpbi1jaGFuZ2U9XCJvblNraW5DaGFuZ2VcIlxuICAgID5cbiAgICAgIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LWJhciBlbW9qaS1tYXJ0LWJhci1wcmV2aWV3XCIgdi1pZj1cInNob3dQcmV2aWV3XCI+XG4gICAgICAgIDxwcmV2aWV3XG4gICAgICAgICAgOmRhdGE9XCJkYXRhXCJcbiAgICAgICAgICA6dGl0bGU9XCJ0aXRsZVwiXG4gICAgICAgICAgOmVtb2ppPVwidmlldy5wcmV2aWV3RW1vamlcIlxuICAgICAgICAgIDppZGxlLWVtb2ppPVwiaWRsZUVtb2ppXCJcbiAgICAgICAgICA6c2hvdy1za2luLXRvbmVzPVwic2hvd1NraW5Ub25lc1wiXG4gICAgICAgICAgOmVtb2ppLXByb3BzPVwiZW1vamlQcm9wc1wiXG4gICAgICAgICAgOnNraW4tcHJvcHM9XCJza2luUHJvcHNcIlxuICAgICAgICAgIDpvbi1za2luLWNoYW5nZT1cIm9uU2tpbkNoYW5nZVwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L3Nsb3Q+XG4gIDwvc2VjdGlvbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgJy4uL3ZlbmRvci9yYWYtcG9seWZpbGwnXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vdXRpbHMvc3RvcmUnXG5pbXBvcnQgZnJlcXVlbnRseSBmcm9tICcuLi91dGlscy9mcmVxdWVudGx5J1xuaW1wb3J0IHsgZGVlcE1lcmdlLCBtZWFzdXJlU2Nyb2xsYmFyIH0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBQaWNrZXJQcm9wcyB9IGZyb20gJy4uL3V0aWxzL3NoYXJlZC1wcm9wcydcbmltcG9ydCB7IFBpY2tlclZpZXcgfSBmcm9tICcuLi91dGlscy9waWNrZXInXG5pbXBvcnQgQW5jaG9ycyBmcm9tICcuL2FuY2hvcnMudnVlJ1xuaW1wb3J0IENhdGVnb3J5IGZyb20gJy4vY2F0ZWdvcnkudnVlJ1xuaW1wb3J0IFByZXZpZXcgZnJvbSAnLi9wcmV2aWV3LnZ1ZSdcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi9zZWFyY2gudnVlJ1xuXG5jb25zdCBJMThOID0ge1xuICBzZWFyY2g6ICdTZWFyY2gnLFxuICBub3Rmb3VuZDogJ05vIEVtb2ppIEZvdW5kJyxcbiAgY2F0ZWdvcmllczoge1xuICAgIHNlYXJjaDogJ1NlYXJjaCBSZXN1bHRzJyxcbiAgICByZWNlbnQ6ICdGcmVxdWVudGx5IFVzZWQnLFxuICAgIHNtaWxleXM6ICdTbWlsZXlzICYgRW1vdGlvbicsXG4gICAgcGVvcGxlOiAnUGVvcGxlICYgQm9keScsXG4gICAgbmF0dXJlOiAnQW5pbWFscyAmIE5hdHVyZScsXG4gICAgZm9vZHM6ICdGb29kICYgRHJpbmsnLFxuICAgIGFjdGl2aXR5OiAnQWN0aXZpdHknLFxuICAgIHBsYWNlczogJ1RyYXZlbCAmIFBsYWNlcycsXG4gICAgb2JqZWN0czogJ09iamVjdHMnLFxuICAgIHN5bWJvbHM6ICdTeW1ib2xzJyxcbiAgICBmbGFnczogJ0ZsYWdzJyxcbiAgICBjdXN0b206ICdDdXN0b20nLFxuICB9LFxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiB7XG4gICAgLi4uUGlja2VyUHJvcHMsXG4gICAgZGF0YToge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYWN0aXZlU2tpbjogdGhpcy5za2luIHx8IHN0b3JlLmdldCgnc2tpbicpIHx8IHRoaXMuZGVmYXVsdFNraW4sXG4gICAgICB2aWV3OiBuZXcgUGlja2VyVmlldyh0aGlzKSxcbiAgICB9XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgY3VzdG9tU3R5bGVzKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgd2lkdGg6IHRoaXMuY2FsY3VsYXRlV2lkdGggKyAncHgnLFxuICAgICAgICAuLi50aGlzLnBpY2tlclN0eWxlcyxcbiAgICAgIH1cbiAgICB9LFxuICAgIGVtb2ppUHJvcHMoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuYXRpdmU6IHRoaXMubmF0aXZlLFxuICAgICAgICBza2luOiB0aGlzLmFjdGl2ZVNraW4sXG4gICAgICAgIHNldDogdGhpcy5zZXQsXG4gICAgICAgIGVtb2ppVG9vbHRpcDogdGhpcy5lbW9qaVRvb2x0aXAsXG4gICAgICAgIGVtb2ppU2l6ZTogdGhpcy5lbW9qaVNpemUsXG4gICAgICAgIHNlbGVjdGVkRW1vamk6IHRoaXMudmlldy5wcmV2aWV3RW1vamksXG4gICAgICAgIHNlbGVjdGVkRW1vamlDYXRlZ29yeTogdGhpcy52aWV3LnByZXZpZXdFbW9qaUNhdGVnb3J5LFxuICAgICAgICBvbkVudGVyOiB0aGlzLm9uRW1vamlFbnRlci5iaW5kKHRoaXMpLFxuICAgICAgICBvbkxlYXZlOiB0aGlzLm9uRW1vamlMZWF2ZS5iaW5kKHRoaXMpLFxuICAgICAgICBvbkNsaWNrOiB0aGlzLm9uRW1vamlDbGljay5iaW5kKHRoaXMpLFxuICAgICAgfVxuICAgIH0sXG4gICAgc2tpblByb3BzKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc2tpbjogdGhpcy5hY3RpdmVTa2luLFxuICAgICAgfVxuICAgIH0sXG4gICAgY2FsY3VsYXRlV2lkdGgoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wZXJMaW5lICogKHRoaXMuZW1vamlTaXplICsgMTIpICsgMTIgKyAyICsgbWVhc3VyZVNjcm9sbGJhcigpXG4gICAgfSxcbiAgICAvLyBlbW9qaXNQZXJSb3coKSB7XG4gICAgLy8gICBjb25zdCBsaXN0RWwgPSB0aGlzLiRyZWZzLnNjcm9sbENvbnRlbnRcbiAgICAvLyAgIGNvbnN0IGVtb2ppRWwgPSBsaXN0RWwucXVlcnlTZWxlY3RvcignLmVtb2ppLW1hcnQtZW1vamknKVxuICAgIC8vICAgcmV0dXJuIE1hdGguZmxvb3IobGlzdEVsLm9mZnNldFdpZHRoIC8gZW1vamlFbC5vZmZzZXRXaWR0aClcbiAgICAvLyB9LFxuICAgIGZpbHRlcmVkQ2F0ZWdvcmllcygpIHtcbiAgICAgIHJldHVybiB0aGlzLnZpZXcuZmlsdGVyZWRDYXRlZ29yaWVzXG4gICAgfSxcbiAgICBtZXJnZWRJMThuKCkge1xuICAgICAgcmV0dXJuIE9iamVjdC5mcmVlemUoZGVlcE1lcmdlKEkxOE4sIHRoaXMuaTE4bikpXG4gICAgfSxcbiAgICBpZGxlRW1vamkoKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmVtb2ppKHRoaXMuZW1vamkpXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgJ0RlZmF1bHQgcHJldmlldyBlbW9qaSBgJyArXG4gICAgICAgICAgICB0aGlzLmVtb2ppICtcbiAgICAgICAgICAgICdgIGlzIG5vdCBhdmFpbGFibGUsIGNoZWNrIHRoZSBQaWNrZXIgYGVtb2ppYCBwcm9wZXJ0eScsXG4gICAgICAgIClcbiAgICAgICAgY29uc29sZS5lcnJvcihlKVxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmZpcnN0RW1vamkoKVxuICAgICAgfVxuICAgIH0sXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBvblNjcm9sbCgpIHtcbiAgICAgIGlmICh0aGlzLmluZmluaXRlU2Nyb2xsICYmICF0aGlzLndhaXRpbmdGb3JQYWludCkge1xuICAgICAgICB0aGlzLndhaXRpbmdGb3JQYWludCA9IHRydWVcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLm9uU2Nyb2xsUGFpbnQuYmluZCh0aGlzKSlcbiAgICAgIH1cbiAgICB9LFxuICAgIG9uU2Nyb2xsUGFpbnQoKSB7XG4gICAgICB0aGlzLndhaXRpbmdGb3JQYWludCA9IGZhbHNlXG4gICAgICB0aGlzLnZpZXcub25TY3JvbGwoKVxuICAgIH0sXG4gICAgb25BbmNob3JDbGljayhjYXRlZ29yeSkge1xuICAgICAgdGhpcy52aWV3Lm9uQW5jaG9yQ2xpY2soY2F0ZWdvcnkpXG4gICAgfSxcbiAgICBvblNlYXJjaCh2YWx1ZSkge1xuICAgICAgdGhpcy52aWV3Lm9uU2VhcmNoKHZhbHVlKVxuICAgIH0sXG4gICAgb25FbW9qaUVudGVyKGVtb2ppKSB7XG4gICAgICB0aGlzLnZpZXcub25FbW9qaUVudGVyKGVtb2ppKVxuICAgIH0sXG4gICAgb25FbW9qaUxlYXZlKGVtb2ppKSB7XG4gICAgICB0aGlzLnZpZXcub25FbW9qaUxlYXZlKGVtb2ppKVxuICAgIH0sXG4gICAgb25BcnJvd0xlZnQoJGV2ZW50KSB7XG4gICAgICBjb25zdCBvbGRJZHggPSB0aGlzLnZpZXcucHJldmlld0Vtb2ppSWR4XG4gICAgICB0aGlzLnZpZXcub25BcnJvd0xlZnQoKVxuICAgICAgaWYgKCRldmVudCAmJiB0aGlzLnZpZXcucHJldmlld0Vtb2ppSWR4ICE9PSBvbGRJZHgpIHtcbiAgICAgICAgLy8gUHJldmVudCBjdXJzb3IgbW92ZW1lbnQgaW5zaWRlIHRoZSBpbnB1dFxuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgfVxuICAgIH0sXG4gICAgb25BcnJvd1JpZ2h0KCkge1xuICAgICAgdGhpcy52aWV3Lm9uQXJyb3dSaWdodCgpXG4gICAgfSxcbiAgICBvbkFycm93RG93bigpIHtcbiAgICAgIHRoaXMudmlldy5vbkFycm93RG93bigpXG4gICAgfSxcbiAgICBvbkFycm93VXAoJGV2ZW50KSB7XG4gICAgICB0aGlzLnZpZXcub25BcnJvd1VwKClcbiAgICAgIC8vIFByZXZlbnQgY3Vyc29yIG1vdmVtZW50IGluc2lkZSB0aGUgaW5wdXRcbiAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfSxcbiAgICBvbkVudGVyKCkge1xuICAgICAgaWYgKCF0aGlzLnZpZXcucHJldmlld0Vtb2ppKSB7XG4gICAgICAgIC8vIFdlIG1heSBwcmVzcyBcIkVudGVyXCIgd2hlbiBub3RoaW5nIGlzIHNlbGVjdGVkLFxuICAgICAgICAvLyBmb3IgZXhhbXBsZSwgaWYgd2Ugc2VhcmNoIGZvciBcImFzZGZcIi5cbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICB0aGlzLiRlbWl0KCdzZWxlY3QnLCB0aGlzLnZpZXcucHJldmlld0Vtb2ppKVxuICAgICAgZnJlcXVlbnRseS5hZGQodGhpcy52aWV3LnByZXZpZXdFbW9qaSlcbiAgICB9LFxuICAgIG9uRW1vamlDbGljayhlbW9qaSkge1xuICAgICAgdGhpcy4kZW1pdCgnc2VsZWN0JywgZW1vamkpXG4gICAgICBmcmVxdWVudGx5LmFkZChlbW9qaSlcbiAgICB9LFxuICAgIG9uVGV4dFNlbGVjdCgkZXZlbnQpIHtcbiAgICAgIC8vIFByZXZlbnQgZGVmYXVsdCB0ZXh0IHNlbGVjdCBldmVudC5cbiAgICAgIC8vIEluIFZ1ZSAzIGl0IGdvZXMgdGhyb3VnaCB0aGUgY29tcG9uZW50IGFuZCB0cmlnZ2VycyB0aGUgYHNlbGVjdGBcbiAgICAgIC8vIGV2ZW50IHRoYXQgaXMgc3VwcG9zZWQgdG8gYmUgZW1taXRlZCBvbmx5IHdpdGggZW1vamkuXG4gICAgICAvLyAodGhlcmUgaXMgbm8gc3VjaCBwcm9ibGVtIGluIFZ1ZSAyKS5cbiAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIH0sXG4gICAgb25Ta2luQ2hhbmdlKHNraW4pIHtcbiAgICAgIHRoaXMuYWN0aXZlU2tpbiA9IHNraW5cbiAgICAgIHN0b3JlLnVwZGF0ZSh7IHNraW4gfSlcblxuICAgICAgdGhpcy4kZW1pdCgnc2tpbi1jaGFuZ2UnLCBza2luKVxuICAgIH0sXG4gICAgZ2V0Q2F0ZWdvcnlDb21wb25lbnQoaW5kZXgpIHtcbiAgICAgIGxldCBjb21wb25lbnQgPSB0aGlzLiRyZWZzWydjYXRlZ29yaWVzXycgKyBpbmRleF1cbiAgICAgIGlmIChjb21wb25lbnQgJiYgJzAnIGluIGNvbXBvbmVudCkge1xuICAgICAgICAvLyBWdWUgMiBoYXMgJHJlZnMgdW5kZXIgdi1mb3IgYXMgYW4gYXJyYXkuXG4gICAgICAgIHJldHVybiBjb21wb25lbnRbJzAnXVxuICAgICAgfVxuICAgICAgLy8gVnVlIDMgZG9lcyBub3Qgc3VwcG9ydCAkcmVmcyBhcyBhcnJheS5cbiAgICAgIHJldHVybiBjb21wb25lbnRcbiAgICB9LFxuICB9LFxuICBjb21wb25lbnRzOiB7XG4gICAgQW5jaG9ycyxcbiAgICBDYXRlZ29yeSxcbiAgICBQcmV2aWV3LFxuICAgIFNlYXJjaCxcbiAgfSxcbn1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IHJvbGU9XCJ0YWJsaXN0XCIgY2xhc3M9XCJlbW9qaS1tYXJ0LWFuY2hvcnNcIj5cbiAgICA8YnV0dG9uXG4gICAgICB2LWZvcj1cImNhdGVnb3J5IGluIGNhdGVnb3JpZXNcIlxuICAgICAgcm9sZT1cInRhYlwiXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgIDphcmlhLWxhYmVsPVwiY2F0ZWdvcnkubmFtZVwiXG4gICAgICA6YXJpYS1zZWxlY3RlZD1cImNhdGVnb3J5LmlkID09IGFjdGl2ZUNhdGVnb3J5LmlkXCJcbiAgICAgIDprZXk9XCJjYXRlZ29yeS5pZFwiXG4gICAgICA6Y2xhc3M9XCJ7XG4gICAgICAgICdlbW9qaS1tYXJ0LWFuY2hvcic6IHRydWUsXG4gICAgICAgICdlbW9qaS1tYXJ0LWFuY2hvci1zZWxlY3RlZCc6IGNhdGVnb3J5LmlkID09IGFjdGl2ZUNhdGVnb3J5LmlkLFxuICAgICAgfVwiXG4gICAgICA6c3R5bGU9XCJ7IGNvbG9yOiBjYXRlZ29yeS5pZCA9PSBhY3RpdmVDYXRlZ29yeS5pZCA/IGNvbG9yIDogJycgfVwiXG4gICAgICA6ZGF0YS10aXRsZT1cImkxOG4uY2F0ZWdvcmllc1tjYXRlZ29yeS5pZF1cIlxuICAgICAgQGNsaWNrPVwiJGVtaXQoJ2NsaWNrJywgY2F0ZWdvcnkpXCJcbiAgICA+XG4gICAgICA8ZGl2IGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHYtaHRtbD1cInN2Z3NbY2F0ZWdvcnkuaWRdXCIgLz5cbiAgICAgIDxzcGFuXG4gICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgIGNsYXNzPVwiZW1vamktbWFydC1hbmNob3ItYmFyXCJcbiAgICAgICAgOnN0eWxlPVwieyBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yIH1cIlxuICAgICAgPjwvc3Bhbj5cbiAgICA8L2J1dHRvbj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHN2Z3MgZnJvbSAnLi4vc3ZncydcblxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczoge1xuICAgIGkxOG46IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgY29sb3I6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICB9LFxuICAgIGNhdGVnb3JpZXM6IHtcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICBhY3RpdmVDYXRlZ29yeToge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgZGVmYXVsdCgpIHtcbiAgICAgICAgcmV0dXJuIHt9XG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5zdmdzID0gc3Znc1xuICB9LFxufVxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxzZWN0aW9uXG4gICAgOmNsYXNzPVwie1xuICAgICAgJ2Vtb2ppLW1hcnQtY2F0ZWdvcnknOiB0cnVlLFxuICAgICAgJ2Vtb2ppLW1hcnQtbm8tcmVzdWx0cyc6ICFoYXNSZXN1bHRzLFxuICAgIH1cIlxuICAgIDphcmlhLWxhYmVsPVwiaTE4bi5jYXRlZ29yaWVzW2lkXVwiXG4gICAgdi1pZj1cImlzVmlzaWJsZSAmJiAoaXNTZWFyY2ggfHwgaGFzUmVzdWx0cylcIlxuICA+XG4gICAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtY2F0ZWdvcnktbGFiZWxcIj5cbiAgICAgIDxoMyBjbGFzcz1cImVtb2ppLW1hcnQtY2F0ZWdvcnktbGFiZWxcIj57eyBpMThuLmNhdGVnb3JpZXNbaWRdIH19PC9oMz5cbiAgICA8L2Rpdj5cblxuICAgIDx0ZW1wbGF0ZSB2LWZvcj1cInsgZW1vamlPYmplY3QsIGVtb2ppVmlldyB9IGluIGVtb2ppT2JqZWN0c1wiPlxuICAgICAgPGJ1dHRvblxuICAgICAgICB2LWlmPVwiZW1vamlWaWV3LmNhblJlbmRlclwiXG4gICAgICAgIDphcmlhLWxhYmVsPVwiZW1vamlWaWV3LmFyaWFMYWJlbFwiXG4gICAgICAgIHJvbGU9XCJvcHRpb25cIlxuICAgICAgICBhcmlhLXNlbGVjdGVkPVwiZmFsc2VcIlxuICAgICAgICBhcmlhLXBvc2luc2V0PVwiMVwiXG4gICAgICAgIGFyaWEtc2V0c2l6ZT1cIjE4MTJcIlxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgOmRhdGEtdGl0bGU9XCJlbW9qaU9iamVjdC5zaG9ydF9uYW1lXCJcbiAgICAgICAgOmtleT1cImVtb2ppT2JqZWN0LmlkXCJcbiAgICAgICAgOnRpdGxlPVwiZW1vamlWaWV3LnRpdGxlXCJcbiAgICAgICAgY2xhc3M9XCJlbW9qaS1tYXJ0LWVtb2ppXCJcbiAgICAgICAgOmNsYXNzPVwiYWN0aXZlQ2xhc3MoZW1vamlPYmplY3QpXCJcbiAgICAgICAgQG1vdXNlZW50ZXI9XCJlbW9qaVByb3BzLm9uRW50ZXIoZW1vamlWaWV3LmdldEVtb2ppKCkpXCJcbiAgICAgICAgQG1vdXNlbGVhdmU9XCJlbW9qaVByb3BzLm9uTGVhdmUoZW1vamlWaWV3LmdldEVtb2ppKCkpXCJcbiAgICAgICAgQGNsaWNrPVwiZW1vamlQcm9wcy5vbkNsaWNrKGVtb2ppVmlldy5nZXRFbW9qaSgpKVwiXG4gICAgICA+XG4gICAgICAgIDxzcGFuIDpjbGFzcz1cImVtb2ppVmlldy5jc3NDbGFzc1wiIDpzdHlsZT1cImVtb2ppVmlldy5jc3NTdHlsZVwiPnt7XG4gICAgICAgICAgZW1vamlWaWV3LmNvbnRlbnRcbiAgICAgICAgfX08L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L3RlbXBsYXRlPlxuXG4gICAgPGRpdiB2LWlmPVwiIWhhc1Jlc3VsdHNcIj5cbiAgICAgIDxlbW9qaVxuICAgICAgICA6ZGF0YT1cImRhdGFcIlxuICAgICAgICBlbW9qaT1cInNsZXV0aF9vcl9zcHlcIlxuICAgICAgICA6bmF0aXZlPVwiZW1vamlQcm9wcy5uYXRpdmVcIlxuICAgICAgICA6c2tpbj1cImVtb2ppUHJvcHMuc2tpblwiXG4gICAgICAgIDpzZXQ9XCJlbW9qaVByb3BzLnNldFwiXG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtbm8tcmVzdWx0cy1sYWJlbFwiPnt7IGkxOG4ubm90Zm91bmQgfX08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9zZWN0aW9uPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IEVtb2ppVmlldyB9IGZyb20gJy4uL3V0aWxzL2Vtb2ppLWRhdGEnXG5pbXBvcnQgRW1vamkgZnJvbSAnLi9FbW9qaS52dWUnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IHtcbiAgICBkYXRhOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICAgIGkxOG46IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgaWQ6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgbmFtZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICBlbW9qaXM6IHtcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgIH0sXG4gICAgZW1vamlQcm9wczoge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGFjdGl2ZUNsYXNzOiBmdW5jdGlvbihlbW9qaU9iamVjdCkge1xuICAgICAgaWYgKCF0aGlzLmVtb2ppUHJvcHMuc2VsZWN0ZWRFbW9qaSkge1xuICAgICAgICByZXR1cm4gJydcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5lbW9qaVByb3BzLnNlbGVjdGVkRW1vamlDYXRlZ29yeSkge1xuICAgICAgICByZXR1cm4gJydcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5lbW9qaVByb3BzLnNlbGVjdGVkRW1vamkuaWQgPT0gZW1vamlPYmplY3QuaWQgJiZcbiAgICAgICAgdGhpcy5lbW9qaVByb3BzLnNlbGVjdGVkRW1vamlDYXRlZ29yeS5pZCA9PSB0aGlzLmlkXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuICdlbW9qaS1tYXJ0LWVtb2ppLXNlbGVjdGVkJ1xuICAgICAgfVxuICAgICAgcmV0dXJuICcnXG4gICAgfSxcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBpc1Zpc2libGUoKSB7XG4gICAgICByZXR1cm4gISF0aGlzLmVtb2ppc1xuICAgIH0sXG4gICAgaXNTZWFyY2goKSB7XG4gICAgICByZXR1cm4gdGhpcy5uYW1lID09ICdTZWFyY2gnXG4gICAgfSxcbiAgICBoYXNSZXN1bHRzKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZW1vamlzLmxlbmd0aCA+IDBcbiAgICB9LFxuICAgIGVtb2ppT2JqZWN0cygpIHtcbiAgICAgIHJldHVybiB0aGlzLmVtb2ppcy5tYXAoKGVtb2ppKSA9PiB7XG4gICAgICAgIGxldCBlbW9qaU9iamVjdCA9IGVtb2ppXG4gICAgICAgIGxldCBlbW9qaVZpZXcgPSBuZXcgRW1vamlWaWV3KFxuICAgICAgICAgIGVtb2ppLFxuICAgICAgICAgIHRoaXMuZW1vamlQcm9wcy5za2luLFxuICAgICAgICAgIHRoaXMuZW1vamlQcm9wcy5zZXQsXG4gICAgICAgICAgdGhpcy5lbW9qaVByb3BzLm5hdGl2ZSxcbiAgICAgICAgICB0aGlzLmVtb2ppUHJvcHMuZmFsbGJhY2ssXG4gICAgICAgICAgdGhpcy5lbW9qaVByb3BzLmVtb2ppVG9vbHRpcCxcbiAgICAgICAgICB0aGlzLmVtb2ppUHJvcHMuZW1vamlTaXplLFxuICAgICAgICApXG4gICAgICAgIHJldHVybiB7IGVtb2ppT2JqZWN0LCBlbW9qaVZpZXcgfVxuICAgICAgfSlcbiAgICB9LFxuICB9LFxuICBjb21wb25lbnRzOiB7XG4gICAgRW1vamksXG4gIH0sXG59XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cblxuPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtcHJldmlld1wiPlxuICA8dGVtcGxhdGUgdi1pZj1cImVtb2ppXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1wcmV2aWV3LWVtb2ppXCI+XG4gICAgICAgIDxlbW9qaVxuICAgICAgICAgIDpkYXRhPVwiZGF0YVwiXG4gICAgICAgICAgOmVtb2ppPVwiZW1vamlcIlxuICAgICAgICAgIDpuYXRpdmU9XCJlbW9qaVByb3BzLm5hdGl2ZVwiXG4gICAgICAgICAgOnNraW49XCJlbW9qaVByb3BzLnNraW5cIlxuICAgICAgICAgIDpzZXQ9XCJlbW9qaVByb3BzLnNldFwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtcHJldmlldy1kYXRhXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LXByZXZpZXctbmFtZVwiPnt7IGVtb2ppLm5hbWUgfX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtcHJldmlldy1zaG9ydG5hbWVzXCI+XG4gICAgICAgICAgPHNwYW4gdi1mb3I9XCJzaG9ydE5hbWUgaW4gZW1vamlTaG9ydE5hbWVzXCIgOmtleT1cInNob3J0TmFtZVwiIGNsYXNzPVwiZW1vamktbWFydC1wcmV2aWV3LXNob3J0bmFtZVwiPjp7eyBzaG9ydE5hbWUgfX06PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtcHJldmlldy1lbW90aWNvbnNcIj5cbiAgICAgICAgICA8c3BhbiB2LWZvcj1cImVtb3RpY29uIGluIGVtb2ppRW1vdGljb25zXCIgOmtleT1cImVtb3RpY29uXCIgY2xhc3M9XCJlbW9qaS1tYXJ0LXByZXZpZXctZW1vdGljb25cIj57eyBlbW90aWNvbiB9fTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgPC90ZW1wbGF0ZT5cblxuICA8dGVtcGxhdGUgdi1lbHNlPlxuICAgIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LXByZXZpZXctZW1vamlcIj5cbiAgICAgIDxlbW9qaVxuICAgICAgICA6ZGF0YT1cImRhdGFcIlxuICAgICAgICA6ZW1vamk9XCJpZGxlRW1vamlcIlxuICAgICAgICA6bmF0aXZlPVwiZW1vamlQcm9wcy5uYXRpdmVcIlxuICAgICAgICA6c2tpbj1cImVtb2ppUHJvcHMuc2tpblwiXG4gICAgICAgIDpzZXQ9XCJlbW9qaVByb3BzLnNldFwiXG4gICAgICAvPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtcHJldmlldy1kYXRhXCI+XG4gICAgICA8c3BhbiBjbGFzcz1cImVtb2ppLW1hcnQtdGl0bGUtbGFiZWxcIj57eyB0aXRsZSB9fTwvc3Bhbj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgdi1pZj1cInNob3dTa2luVG9uZXNcIiBjbGFzcz1cImVtb2ppLW1hcnQtcHJldmlldy1za2luc1wiPlxuICAgICAgPHNraW5zIDpza2luPVwic2tpblByb3BzLnNraW5cIiBAY2hhbmdlPVwib25Ta2luQ2hhbmdlKCRldmVudClcIiAvPlxuICAgIDwvZGl2PlxuICA8L3RlbXBsYXRlPlxuPC9kaXY+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCBFbW9qaSBmcm9tICcuL0Vtb2ppLnZ1ZSdcbmltcG9ydCBTa2lucyBmcm9tICcuL3NraW5zLnZ1ZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczoge1xuICAgIGRhdGE6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICB0aXRsZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIGVtb2ppOiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBPYmplY3RdXG4gICAgfSxcbiAgICBpZGxlRW1vamk6IHtcbiAgICAgIHR5cGU6IFtTdHJpbmcsIE9iamVjdF0sXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgc2hvd1NraW5Ub25lczoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICB9LFxuICAgIGVtb2ppUHJvcHM6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBza2luUHJvcHM6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBvblNraW5DaGFuZ2U6IHtcbiAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgZW1vamlEYXRhKCkge1xuICAgICAgaWYgKHRoaXMuZW1vamkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW1vamlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB7fVxuICAgICAgfVxuICAgIH0sXG4gICAgZW1vamlTaG9ydE5hbWVzKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZW1vamlEYXRhLnNob3J0X25hbWVzXG4gICAgfSxcbiAgICBlbW9qaUVtb3RpY29ucygpIHtcbiAgICAgIHJldHVybiB0aGlzLmVtb2ppRGF0YS5lbW90aWNvbnNcbiAgICB9XG4gIH0sXG4gIGNvbXBvbmVudHM6IHtcbiAgICBFbW9qaSxcbiAgICBTa2luc1xuICB9XG59XG5cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1zZWFyY2hcIj5cbiAgICA8aW5wdXRcbiAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgIDpwbGFjZWhvbGRlcj1cImkxOG4uc2VhcmNoXCJcbiAgICAgIHJvbGU9XCJ0ZXh0Ym94XCJcbiAgICAgIGFyaWEtYXV0b2NvbXBsZXRlPVwibGlzdFwiXG4gICAgICBhcmlhLW93bnM9XCJlbW9qaS1tYXJ0LWxpc3RcIlxuICAgICAgYXJpYS1sYWJlbD1cIlNlYXJjaCBmb3IgYW4gZW1vamlcIlxuICAgICAgYXJpYS1kZXNjcmliZWRieT1cImVtb2ppLW1hcnQtc2VhcmNoLWRlc2NyaXB0aW9uXCJcbiAgICAgIEBrZXlkb3duLmxlZnQ9XCIoJGV2ZW50KSA9PiAkZW1pdCgnYXJyb3dMZWZ0JywgJGV2ZW50KVwiXG4gICAgICBAa2V5ZG93bi5yaWdodD1cIigpID0+ICRlbWl0KCdhcnJvd1JpZ2h0JylcIlxuICAgICAgQGtleWRvd24uZG93bj1cIigpID0+ICRlbWl0KCdhcnJvd0Rvd24nKVwiXG4gICAgICBAa2V5ZG93bi51cD1cIigkZXZlbnQpID0+ICRlbWl0KCdhcnJvd1VwJywgJGV2ZW50KVwiXG4gICAgICBAa2V5ZG93bi5lbnRlcj1cIigpID0+ICRlbWl0KCdlbnRlcicpXCJcbiAgICAgIHYtbW9kZWw9XCJ2YWx1ZVwiXG4gICAgLz5cbiAgICA8c3BhbiBjbGFzcz1cImhpZGRlblwiIGlkPVwiZW1vamktcGlja2VyLXNlYXJjaC1kZXNjcmlwdGlvblwiXG4gICAgICA+VXNlIHRoZSBsZWZ0LCByaWdodCwgdXAgYW5kIGRvd24gYXJyb3cga2V5cyB0byBuYXZpZ2F0ZSB0aGUgZW1vamkgc2VhcmNoXG4gICAgICByZXN1bHRzLjwvc3BhblxuICAgID5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczoge1xuICAgIGRhdGE6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgaTE4bjoge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICBhdXRvRm9jdXM6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICB9LFxuICAgIG9uU2VhcmNoOiB7XG4gICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgb25BcnJvd0xlZnQ6IHtcbiAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgIH0sXG4gICAgb25BcnJvd1JpZ2h0OiB7XG4gICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICB9LFxuICAgIG9uQXJyb3dEb3duOiB7XG4gICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICB9LFxuICAgIG9uQXJyb3dVcDoge1xuICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgfSxcbiAgICBvbkVudGVyOiB7XG4gICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICB9LFxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogJycsXG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGVtb2ppSW5kZXgoKSB7XG4gICAgICByZXR1cm4gdGhpcy5kYXRhXG4gICAgfSxcbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICB2YWx1ZSgpIHtcbiAgICAgIHRoaXMuJGVtaXQoJ3NlYXJjaCcsIHRoaXMudmFsdWUpXG4gICAgfSxcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGNsZWFyKCkge1xuICAgICAgdGhpcy52YWx1ZSA9ICcnXG4gICAgfSxcbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICBsZXQgJGlucHV0ID0gdGhpcy4kZWwucXVlcnlTZWxlY3RvcignaW5wdXQnKVxuXG4gICAgaWYgKHRoaXMuYXV0b0ZvY3VzKSB7XG4gICAgICAkaW5wdXQuZm9jdXMoKVxuICAgIH1cbiAgfSxcbn1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuXG48ZGl2IDpjbGFzcz1cInsgJ2Vtb2ppLW1hcnQtc2tpbi1zd2F0Y2hlcyc6IHRydWUsICdlbW9qaS1tYXJ0LXNraW4tc3dhdGNoZXMtb3BlbmVkJzogb3BlbmVkIH1cIj5cbiAgPHNwYW4gdi1mb3I9XCJza2luVG9uZSBpbiA2XCIgOmtleT1cInNraW5Ub25lXCIgOmNsYXNzPVwieyAnZW1vamktbWFydC1za2luLXN3YXRjaCc6IHRydWUsICdlbW9qaS1tYXJ0LXNraW4tc3dhdGNoLXNlbGVjdGVkJzogc2tpbiA9PSBza2luVG9uZSB9XCI+XG4gICAgPHNwYW4gOmNsYXNzPVwiJ2Vtb2ppLW1hcnQtc2tpbiBlbW9qaS1tYXJ0LXNraW4tdG9uZS0nICsgc2tpblRvbmVcIiBAY2xpY2s9XCJvbkNsaWNrKHNraW5Ub25lKVwiPjwvc3Bhbj5cbiAgPC9zcGFuPlxuPC9kaXY+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IHtcbiAgICBza2luOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH1cbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb3BlbmVkOiBmYWxzZVxuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIG9uQ2xpY2soc2tpblRvbmUpIHtcbiAgICAgIGlmICh0aGlzLm9wZW5lZCkge1xuICAgICAgICBpZiAoc2tpblRvbmUgIT0gdGhpcy5za2luKSB7XG4gICAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgc2tpblRvbmUpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5vcGVuZWQgPSAhdGhpcy5vcGVuZWRcbiAgICB9XG4gIH1cbn1cblxuPC9zY3JpcHQ+XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIEFuY2hvcnMgfSBmcm9tICcuL2FuY2hvcnMudnVlJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDYXRlZ29yeSB9IGZyb20gJy4vY2F0ZWdvcnkudnVlJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQcmV2aWV3IH0gZnJvbSAnLi9wcmV2aWV3LnZ1ZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2VhcmNoIH0gZnJvbSAnLi9zZWFyY2gudnVlJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTa2lucyB9IGZyb20gJy4vc2tpbnMudnVlJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBFbW9qaSB9IGZyb20gJy4vRW1vamkudnVlJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQaWNrZXIgfSBmcm9tICcuL1BpY2tlci52dWUnXG4iLCJjb25zdCBfU3RyaW5nID0gU3RyaW5nXG5cbmV4cG9ydCBkZWZhdWx0IF9TdHJpbmcuZnJvbUNvZGVQb2ludCB8fFxuICBmdW5jdGlvbiBzdHJpbmdGcm9tQ29kZVBvaW50KCkge1xuICAgIHZhciBNQVhfU0laRSA9IDB4NDAwMFxuICAgIHZhciBjb2RlVW5pdHMgPSBbXVxuICAgIHZhciBoaWdoU3Vycm9nYXRlXG4gICAgdmFyIGxvd1N1cnJvZ2F0ZVxuICAgIHZhciBpbmRleCA9IC0xXG4gICAgdmFyIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICBpZiAoIWxlbmd0aCkge1xuICAgICAgcmV0dXJuICcnXG4gICAgfVxuICAgIHZhciByZXN1bHQgPSAnJ1xuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICB2YXIgY29kZVBvaW50ID0gTnVtYmVyKGFyZ3VtZW50c1tpbmRleF0pXG4gICAgICBpZiAoXG4gICAgICAgICFpc0Zpbml0ZShjb2RlUG9pbnQpIHx8IC8vIGBOYU5gLCBgK0luZmluaXR5YCwgb3IgYC1JbmZpbml0eWBcbiAgICAgICAgY29kZVBvaW50IDwgMCB8fCAvLyBub3QgYSB2YWxpZCBVbmljb2RlIGNvZGUgcG9pbnRcbiAgICAgICAgY29kZVBvaW50ID4gMHgxMGZmZmYgfHwgLy8gbm90IGEgdmFsaWQgVW5pY29kZSBjb2RlIHBvaW50XG4gICAgICAgIE1hdGguZmxvb3IoY29kZVBvaW50KSAhPSBjb2RlUG9pbnQgLy8gbm90IGFuIGludGVnZXJcbiAgICAgICkge1xuICAgICAgICB0aHJvdyBSYW5nZUVycm9yKCdJbnZhbGlkIGNvZGUgcG9pbnQ6ICcgKyBjb2RlUG9pbnQpXG4gICAgICB9XG4gICAgICBpZiAoY29kZVBvaW50IDw9IDB4ZmZmZikge1xuICAgICAgICAvLyBCTVAgY29kZSBwb2ludFxuICAgICAgICBjb2RlVW5pdHMucHVzaChjb2RlUG9pbnQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBBc3RyYWwgY29kZSBwb2ludDsgc3BsaXQgaW4gc3Vycm9nYXRlIGhhbHZlc1xuICAgICAgICAvLyBodHRwOi8vbWF0aGlhc2J5bmVucy5iZS9ub3Rlcy9qYXZhc2NyaXB0LWVuY29kaW5nI3N1cnJvZ2F0ZS1mb3JtdWxhZVxuICAgICAgICBjb2RlUG9pbnQgLT0gMHgxMDAwMFxuICAgICAgICBoaWdoU3Vycm9nYXRlID0gKGNvZGVQb2ludCA+PiAxMCkgKyAweGQ4MDBcbiAgICAgICAgbG93U3Vycm9nYXRlID0gKGNvZGVQb2ludCAlIDB4NDAwKSArIDB4ZGMwMFxuICAgICAgICBjb2RlVW5pdHMucHVzaChoaWdoU3Vycm9nYXRlLCBsb3dTdXJyb2dhdGUpXG4gICAgICB9XG4gICAgICBpZiAoaW5kZXggKyAxID09PSBsZW5ndGggfHwgY29kZVVuaXRzLmxlbmd0aCA+IE1BWF9TSVpFKSB7XG4gICAgICAgIHJlc3VsdCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIGNvZGVVbml0cylcbiAgICAgICAgY29kZVVuaXRzLmxlbmd0aCA9IDBcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG4iLCJjb25zdCBTVkdzID0ge1xuICBhY3Rpdml0eTogYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj48cGF0aCBkPVwiTTEyIDBDNS4zNzMgMCAwIDUuMzcyIDAgMTJjMCA2LjYyNyA1LjM3MyAxMiAxMiAxMiA2LjYyOCAwIDEyLTUuMzczIDEyLTEyIDAtNi42MjgtNS4zNzItMTItMTItMTJtOS45NDkgMTFIMTcuMDVjLjIyNC0yLjUyNyAxLjIzMi00Ljc3MyAxLjk2OC02LjExM0E5Ljk2NiA5Ljk2NiAwIDAgMSAyMS45NDkgMTFNMTMgMTFWMi4wNTFhOS45NDUgOS45NDUgMCAwIDEgNC40MzIgMS41NjRjLS44NTggMS40OTEtMi4xNTYgNC4yMi0yLjM5MiA3LjM4NUgxM3ptLTIgMEg4Ljk2MWMtLjIzOC0zLjE2NS0xLjUzNi01Ljg5NC0yLjM5My03LjM4NUE5Ljk1IDkuOTUgMCAwIDEgMTEgMi4wNTFWMTF6bTAgMnY4Ljk0OWE5LjkzNyA5LjkzNyAwIDAgMS00LjQzMi0xLjU2NGMuODU3LTEuNDkyIDIuMTU1LTQuMjIxIDIuMzkzLTcuMzg1SDExem00LjA0IDBjLjIzNiAzLjE2NCAxLjUzNCA1Ljg5MyAyLjM5MiA3LjM4NUE5LjkyIDkuOTIgMCAwIDEgMTMgMjEuOTQ5VjEzaDIuMDR6TTQuOTgyIDQuODg3QzUuNzE4IDYuMjI3IDYuNzI2IDguNDczIDYuOTUxIDExaC00LjlhOS45NzcgOS45NzcgMCAwIDEgMi45MzEtNi4xMTNNMi4wNTEgMTNoNC45Yy0uMjI2IDIuNTI3LTEuMjMzIDQuNzcxLTEuOTY5IDYuMTEzQTkuOTcyIDkuOTcyIDAgMCAxIDIuMDUxIDEzbTE2Ljk2NyA2LjExM2MtLjczNS0xLjM0Mi0xLjc0NC0zLjU4Ni0xLjk2OC02LjExM2g0Ljg5OWE5Ljk2MSA5Ljk2MSAwIDAgMS0yLjkzMSA2LjExM1wiLz48L3N2Zz5gLFxuXG4gIGN1c3RvbTogYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj48ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMi4wMDAwMDAsIDEuMDAwMDAwKVwiPjxyZWN0IGlkPVwiUmVjdGFuZ2xlXCIgeD1cIjhcIiB5PVwiMFwiIHdpZHRoPVwiM1wiIGhlaWdodD1cIjIxXCIgcng9XCIxLjVcIj48L3JlY3Q+PHJlY3QgaWQ9XCJSZWN0YW5nbGVcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoOS44NDMsIDEwLjU0OSkgcm90YXRlKDYwKSB0cmFuc2xhdGUoLTkuODQzLCAtMTAuNTQ5KSBcIiB4PVwiOC4zNDNcIiB5PVwiMC4wNDlcIiB3aWR0aD1cIjNcIiBoZWlnaHQ9XCIyMVwiIHJ4PVwiMS41XCI+PC9yZWN0PjxyZWN0IGlkPVwiUmVjdGFuZ2xlXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDkuODQzLCAxMC41NDkpIHJvdGF0ZSgtNjApIHRyYW5zbGF0ZSgtOS44NDMsIC0xMC41NDkpIFwiIHg9XCI4LjM0M1wiIHk9XCIwLjA0OVwiIHdpZHRoPVwiM1wiIGhlaWdodD1cIjIxXCIgcng9XCIxLjVcIj48L3JlY3Q+PC9nPjwvc3ZnPmAsXG5cbiAgZmxhZ3M6IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+PHBhdGggZD1cIk0wIDBsNi4wODQgMjRIOEwxLjkxNiAwek0yMSA1aC00bC0xLTRINGwzIDEyaDNsMSA0aDEzTDIxIDV6TTYuNTYzIDNoNy44NzVsMiA4SDguNTYzbC0yLTh6bTguODMyIDEwbC0yLjg1NiAxLjkwNEwxMi4wNjMgMTNoMy4zMzJ6TTE5IDEzbC0xLjUtNmgxLjkzOGwyIDhIMTZsMy0yelwiLz48L3N2Zz5gLFxuXG4gIGZvb2RzOiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiPjxwYXRoIGQ9XCJNMTcgNC45NzhjLTEuODM4IDAtMi44NzYuMzk2LTMuNjguOTM0LjUxMy0xLjE3MiAxLjc2OC0yLjkzNCA0LjY4LTIuOTM0YTEgMSAwIDAgMCAwLTJjLTIuOTIxIDAtNC42MjkgMS4zNjUtNS41NDcgMi41MTItLjA2NC4wNzgtLjExOS4xNjItLjE4LjI0NEMxMS43MyAxLjgzOCAxMC43OTguMDIzIDkuMjA3LjAyMyA4LjU3OS4wMjIgNy44NS4zMDYgNyAuOTc4IDUuMDI3IDIuNTQgNS4zMjkgMy45MDIgNi40OTIgNC45OTkgMy42MDkgNS4yMjIgMCA3LjM1MiAwIDEyLjk2OWMwIDQuNTgyIDQuOTYxIDExLjAwOSA5IDExLjAwOSAxLjk3NSAwIDIuMzcxLS40ODYgMy0xIC42MjkuNTE0IDEuMDI1IDEgMyAxIDQuMDM5IDAgOS02LjQxOCA5LTExIDAtNS45NTMtNC4wNTUtOC03LThNOC4yNDIgMi41NDZjLjY0MS0uNTA4Ljk0My0uNTIzLjk2NS0uNTIzLjQyNi4xNjkuOTc1IDEuNDA1IDEuMzU3IDMuMDU1LTEuNTI3LS42MjktMi43NDEtMS4zNTItMi45OC0xLjg0Ni4wNTktLjExMi4yNDEtLjM1Ni42NTgtLjY4Nk0xNSAyMS45NzhjLTEuMDggMC0xLjIxLS4xMDktMS41NTktLjQwMmwtLjE3Ni0uMTQ2Yy0uMzY3LS4zMDItLjgxNi0uNDUyLTEuMjY2LS40NTJzLS44OTguMTUtMS4yNjYuNDUybC0uMTc2LjE0NmMtLjM0Ny4yOTItLjQ3Ny40MDItMS41NTcuNDAyLTIuODEzIDAtNy01LjM4OS03LTkuMDA5IDAtNS44MjMgNC40ODgtNS45OTEgNS01Ljk5MSAxLjkzOSAwIDIuNDg0LjQ3MSAzLjM4NyAxLjI1MWwuMzIzLjI3NmExLjk5NSAxLjk5NSAwIDAgMCAyLjU4IDBsLjMyMy0uMjc2Yy45MDItLjc4IDEuNDQ3LTEuMjUxIDMuMzg3LTEuMjUxLjUxMiAwIDUgLjE2OCA1IDYgMCAzLjYxNy00LjE4NyA5LTcgOVwiLz48L3N2Zz5gLFxuXG4gIG5hdHVyZTogYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj48cGF0aCBkPVwiTTE1LjUgOGExLjUgMS41IDAgMSAwIC4wMDEgMy4wMDFBMS41IDEuNSAwIDAgMCAxNS41IDhNOC41IDhhMS41IDEuNSAwIDEgMCAuMDAxIDMuMDAxQTEuNSAxLjUgMCAwIDAgOC41IDhcIi8+PHBhdGggZD1cIk0xOC45MzMgMGgtLjAyN2MtLjk3IDAtMi4xMzguNzg3LTMuMDE4IDEuNDk3LTEuMjc0LS4zNzQtMi42MTItLjUxLTMuODg3LS41MS0xLjI4NSAwLTIuNjE2LjEzMy0zLjg3NC41MTdDNy4yNDUuNzkgNi4wNjkgMCA1LjA5MyAwaC0uMDI3QzMuMzUyIDAgLjA3IDIuNjcuMDAyIDcuMDI2Yy0uMDM5IDIuNDc5LjI3NiA0LjIzOCAxLjA0IDUuMDEzLjI1NC4yNTguODgyLjY3NyAxLjI5NS44ODIuMTkxIDMuMTc3LjkyMiA1LjIzOCAyLjUzNiA2LjM4Ljg5Ny42MzcgMi4xODcuOTQ5IDMuMiAxLjEwMkM4LjA0IDIwLjYgOCAyMC43OTUgOCAyMWMwIDEuNzczIDIuMzUgMyA0IDMgMS42NDggMCA0LTEuMjI3IDQtMyAwLS4yMDEtLjAzOC0uMzkzLS4wNzItLjU4NiAyLjU3My0uMzg1IDUuNDM1LTEuODc3IDUuOTI1LTcuNTg3LjM5Ni0uMjIuODg3LS41NjggMS4xMDQtLjc4OC43NjMtLjc3NCAxLjA3OS0yLjUzNCAxLjA0LTUuMDEzQzIzLjkyOSAyLjY3IDIwLjY0NiAwIDE4LjkzMyAwTTMuMjIzIDkuMTM1Yy0uMjM3LjI4MS0uODM3IDEuMTU1LS44ODQgMS4yMzgtLjE1LS40MS0uMzY4LTEuMzQ5LS4zMzctMy4yOTEuMDUxLTMuMjgxIDIuNDc4LTQuOTcyIDMuMDkxLTUuMDMxLjI1Ni4wMTUuNzMxLjI3IDEuMjY1LjY0Ni0xLjExIDEuMTcxLTIuMjc1IDIuOTE1LTIuMzUyIDUuMTI1LS4xMzMuNTQ2LS4zOTguODU4LS43ODMgMS4zMTNNMTIgMjJjLS45MDEgMC0xLjk1NC0uNjkzLTItMSAwLS42NTQuNDc1LTEuMjM2IDEtMS42MDJWMjBhMSAxIDAgMSAwIDIgMHYtLjYwMmMuNTI0LjM2NSAxIC45NDcgMSAxLjYwMi0uMDQ2LjMwNy0xLjA5OSAxLTIgMW0zLTMuNDh2LjAyYTQuNzUyIDQuNzUyIDAgMCAwLTEuMjYyLTEuMDJjMS4wOTItLjUxNiAyLjIzOS0xLjMzNCAyLjIzOS0yLjIxNyAwLTEuODQyLTEuNzgxLTIuMTk1LTMuOTc3LTIuMTk1LTIuMTk2IDAtMy45NzguMzU0LTMuOTc4IDIuMTk1IDAgLjg4MyAxLjE0OCAxLjcwMSAyLjIzOCAyLjIxN0E0LjggNC44IDAgMCAwIDkgMTguNTM5di0uMDI1Yy0xLS4wNzYtMi4xODItLjI4MS0yLjk3My0uODQyLTEuMzAxLS45Mi0xLjgzOC0zLjA0NS0xLjg1My02LjQ3OGwuMDIzLS4wNDFjLjQ5Ni0uODI2IDEuNDktMS40NSAxLjgwNC0zLjEwMiAwLTIuMDQ3IDEuMzU3LTMuNjMxIDIuMzYyLTQuNTIyQzkuMzcgMy4xNzggMTAuNTU1IDMgMTEuOTQ4IDNjMS40NDcgMCAyLjY4NS4xOTIgMy43MzMuNTcgMSAuOSAyLjMxNiAyLjQ2NSAyLjMxNiA0LjQ4LjMxMyAxLjY1MSAxLjMwNyAyLjI3NSAxLjgwMyAzLjEwMi4wMzUuMDU4LjA2OC4xMTcuMTAyLjE3OC0uMDU5IDUuOTY3LTEuOTQ5IDcuMDEtNC45MDIgNy4xOW02LjYyOC04LjIwMmMtLjAzNy0uMDY1LS4wNzQtLjEzLS4xMTMtLjE5NWE3LjU4NyA3LjU4NyAwIDAgMC0uNzM5LS45ODdjLS4zODUtLjQ1NS0uNjQ4LS43NjgtLjc4Mi0xLjMxMy0uMDc2LTIuMjA5LTEuMjQxLTMuOTU0LTIuMzUzLTUuMTI0LjUzMS0uMzc2IDEuMDA0LS42MyAxLjI2MS0uNjQ3LjYzNi4wNzEgMy4wNDQgMS43NjQgMy4wOTYgNS4wMzEuMDI3IDEuODEtLjM0NyAzLjIxOC0uMzcgMy4yMzVcIi8+PC9zdmc+YCxcblxuICBvYmplY3RzOiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiPjxwYXRoIGQ9XCJNMTIgMGE5IDkgMCAwIDAtNSAxNi40ODJWMjFzMi4wMzUgMyA1IDMgNS0zIDUtM3YtNC41MThBOSA5IDAgMCAwIDEyIDB6bTAgMmMzLjg2IDAgNyAzLjE0MSA3IDdzLTMuMTQgNy03IDctNy0zLjE0MS03LTcgMy4xNC03IDctN3pNOSAxNy40NzdjLjk0LjMzMiAxLjk0Ni41MjMgMyAuNTIzczIuMDYtLjE5IDMtLjUyM3YuODM0Yy0uOTEuNDM2LTEuOTI1LjY4OS0zIC42ODlhNi45MjQgNi45MjQgMCAwIDEtMy0uNjl2LS44MzN6bS4yMzYgMy4wN0E4Ljg1NCA4Ljg1NCAwIDAgMCAxMiAyMWMuOTY1IDAgMS44ODgtLjE2NyAyLjc1OC0uNDUxQzE0LjE1NSAyMS4xNzMgMTMuMTUzIDIyIDEyIDIyYy0xLjEwMiAwLTIuMTE3LS43ODktMi43NjQtMS40NTN6XCIvPjxwYXRoIGQ9XCJNMTQuNzQ1IDEyLjQ0OWgtLjAwNGMtLjg1Mi0uMDI0LTEuMTg4LS44NTgtMS41NzctMS44MjQtLjQyMS0xLjA2MS0uNzAzLTEuNTYxLTEuMTgyLTEuNTY2aC0uMDA5Yy0uNDgxIDAtLjc4My40OTctMS4yMzUgMS41MzctLjQzNi45ODItLjgwMSAxLjgxMS0xLjYzNiAxLjc5MWwtLjI3Ni0uMDQzYy0uNTY1LS4xNzEtLjg1My0uNjkxLTEuMjg0LTEuNzk0LS4xMjUtLjMxMy0uMjAyLS42MzItLjI3LS45MTMtLjA1MS0uMjEzLS4xMjctLjUzLS4xOTUtLjYzNEM3LjA2NyA5LjAwNCA3LjAzOSA5IDYuOTkgOUExIDEgMCAwIDEgNyA3aC4wMWMxLjY2Mi4wMTcgMi4wMTUgMS4zNzMgMi4xOTggMi4xMzQuNDg2LS45ODEgMS4zMDQtMi4wNTggMi43OTctMi4wNzUgMS41MzEuMDE4IDIuMjggMS4xNTMgMi43MzEgMi4xNDFsLjAwMi0uMDA4QzE0Ljk0NCA4LjQyNCAxNS4zMjcgNyAxNi45NzkgN2guMDMyQTEgMSAwIDEgMSAxNyA5aC0uMDExYy0uMTQ5LjA3Ni0uMjU2LjQ3NC0uMzE5LjcwOWE2LjQ4NCA2LjQ4NCAwIDAgMS0uMzExLjk1MWMtLjQyOS45NzMtLjc5IDEuNzg5LTEuNjE0IDEuNzg5XCIvPjwvc3ZnPmAsXG5cbiAgc21pbGV5czogYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj48cGF0aCBkPVwiTTEyIDBDNS4zNzMgMCAwIDUuMzczIDAgMTJzNS4zNzMgMTIgMTIgMTIgMTItNS4zNzMgMTItMTJTMTguNjI3IDAgMTIgMG0wIDIyQzYuNDg2IDIyIDIgMTcuNTE0IDIgMTJTNi40ODYgMiAxMiAyczEwIDQuNDg2IDEwIDEwLTQuNDg2IDEwLTEwIDEwXCIvPjxwYXRoIGQ9XCJNOCA3YTIgMiAwIDEgMC0uMDAxIDMuOTk5QTIgMiAwIDAgMCA4IDdNMTYgN2EyIDIgMCAxIDAtLjAwMSAzLjk5OUEyIDIgMCAwIDAgMTYgN00xNS4yMzIgMTVjLS42OTMgMS4xOTUtMS44NyAyLTMuMzQ5IDItMS40NzcgMC0yLjY1NS0uODA1LTMuMzQ3LTJIMTVtMy0ySDZhNiA2IDAgMSAwIDEyIDBcIi8+PC9zdmc+YCxcblxuICBwZW9wbGU6IGA8c3ZnIHhtbG5zOnN2Zz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgaGVpZ2h0PVwiMjRcIiB3aWR0aD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPiA8cGF0aCBpZD1cInBhdGgzODE0XCIgZD1cIm0gMy4zNTkxMDg5LDIxLjE3NzI2IGMgMC4xNzIwMzYsMC4wOTM4NSA0LjI2NTk5NCwyLjI5ODM3IDguODE0NDQ1MSwyLjI5ODM3IDQuOTI3NzY3LDAgOC42NzA4OTQsLTIuMjExODgzIDguODI3ODIsLTIuMzA2MDE5IDAuMTEzMDc5LC0wLjA2Nzg1IDAuMTgyMjY4LC0wLjE5MDA1MSAwLjE4MjI2NywtMC4zMjE5MjMgMCwtMy4wMzExOSAtMC45Mjk0OTQsLTUuODA0OTM2IC0yLjYxNzE5NiwtNy44MTA3MTIgLTEuMTgwNjAzLC0xLjQwMzEzNCAtMi42NjE5MTgsLTIuMzU5NTE2IC00LjI5NTY5OSwtMi43OTk3OTEgNC42OTkxMTgsLTIuMjM2MjU4IDMuMTAyMzA2LC05LjI4NjE3MTYyIC0yLjA5NzE5MSwtOS4yODYxNzE2MiAtNS4xOTk0OTc4LDAgLTYuNzk2MzEwMyw3LjA0OTkxMzYyIC0yLjA5NzE5Miw5LjI4NjE3MTYyIC0xLjYzMzc4MjEsMC40NDAyNzUgLTMuMTE1MDk3MSwxLjM5Njc5OCAtNC4yOTU2OTkxLDIuNzk5NzkxIC0xLjY4NzcwMywyLjAwNTc3NiAtMi42MTcxOTYsNC43Nzk1MjIgLTIuNjE3MTk2LDcuODEwNzEyIDEuMmUtNiwwLjEzNzM3OCAwLjA3NTAzOSwwLjI2Mzc4NSAwLjE5NTY0MSwwLjMyOTU3MiB6IE0gOC4wNDM5MzE5LDUuODMwODc4MyBDIDguMDQzOTMwOSwyLjE1MTUyMSAxMi40OTIxMDcsMC4zMDk1NTgxMSAxNS4wOTM0OTEsMi45MTA5NDExIDE3LjY5NDg3NCw1LjUxMjMyNDEgMTUuODUyOTExLDkuOTYwNTAwNiAxMi4xNzM1NTQsOS45NjA1IDkuODkzODk5MSw5Ljk1NzkxMzUgOC4wNDY1MTg2LDguMTEwNTMzMiA4LjA0MzkzMTksNS44MzA4NzgzIFogbSAtMS42ODg3ODIsNy42ODk0OTc3IGMgMS41MjQ1MzUsLTEuODExNDQ5IDMuNTkwNjYwMSwtMi44MDkwMzUgNS44MTg0MDQxLC0yLjgwOTAzNSAyLjIyNzc0NCwwIDQuMjkzODY5LDAuOTk3NTg2IDUuODE4NDA0LDIuODA5MDM1IDEuNTMzNjM5LDEuODIyNTcxIDIuMzk1OTMyLDQuMzM5ODU4IDIuNDM5MTUyLDcuMTA4MzAxIC0wLjgwMzM1MiwwLjQzNDg3NyAtNC4xNDE2MzYsMi4wOTYxMTIgLTguMjU3NTU2LDIuMDk2MTEyIC0zLjgwNjI5MjEsMCAtNy4zOTEwODYxLC0xLjY3MTA0MyAtOC4yNTczNjgxLC0yLjEwNDk4MSAwLjA0NTA1LC0yLjc2NTAxNyAwLjkwNjk2OCwtNS4yNzg3ODUgMi40Mzg5NjQsLTcuMDk5NDMyIHpcIiAvPiA8cGF0aCBpZD1cInBhdGgzODE2XCIgZD1cIk0gMTIuMTczODI4IDAuMzg4NjcxODggQyA5LjMxOTg1MTMgMC4zODg2NzE4NyA3LjM3NzA5ODggMi4zNjcyMjg1IDYuODY1MjM0NCA0LjYzMDg1OTQgQyA2LjQyMTg2MDggNi41OTE2MDE1IDcuMTE1MzU2MiA4Ljc2NzYxMTcgOC45NjQ4NDM4IDEwLjEyNjk1MyBDIDcuNjE0MTI0OSAxMC42NzczNzYgNi4zNTUwNTExIDExLjQ4MDk0NCA1LjM0OTYwOTQgMTIuNjc1NzgxIEMgMy41NjI5MzE3IDE0Ljc5OTE4NSAyLjYwMTU2MjUgMTcuNzAxNDc1IDIuNjAxNTYyNSAyMC44NDc2NTYgQyAyLjYwMTU2NTQgMjEuMTg5ODYxIDIuNzg5NDI3NiAyMS41MDgwMDIgMy4wODk4NDM4IDIxLjY3MTg3NSBDIDMuMzA0NDA2OCAyMS43ODg5MjUgNy40NDM2MjM5IDI0LjAzOTA2MiAxMi4xNzM4MjggMjQuMDM5MDYyIEMgMTcuMjY5OTE4IDI0LjAzOTA2MiAyMS4wODM1NjggMjEuNzc2Nzg2IDIxLjI5MTAxNiAyMS42NTIzNDQgQyAyMS41NzI4MSAyMS40ODMyNjYgMjEuNzQ2MDk3IDIxLjE3NjI4MiAyMS43NDYwOTQgMjAuODQ3NjU2IEMgMjEuNzQ2MDk0IDE3LjcwMTQ3NSAyMC43ODI3NyAxNC43OTkxODUgMTguOTk2MDk0IDEyLjY3NTc4MSBDIDE3Ljk5MDQ1NSAxMS40ODA1OTEgMTYuNzMzODE4IDEwLjY3NTM2MiAxNS4zODI4MTIgMTAuMTI1IEMgMTcuMjMxMTMyIDguNzY1NTU1MiAxNy45MjU2NzUgNi41OTEwNzAxIDE3LjQ4MjQyMiA0LjYzMDg1OTQgQyAxNi45NzA1NTcgMi4zNjcyMjg1IDE1LjAyNzgwNSAwLjM4ODY3MTg4IDEyLjE3MzgyOCAwLjM4ODY3MTg4IHogTSAxMi43OTI5NjkgMi4zMDA3ODEyIEMgMTMuNDY2MjUzIDIuNDE2MTc5MiAxNC4xMjUxMTMgMi43MzgzOTQxIDE0LjY5NTMxMiAzLjMwODU5MzggQyAxNS44MzU3MTIgNC40NDg5OTMxIDE1Ljk4NTYwNCA1Ljk0NzM1NDkgMTUuNDY4NzUgNy4xOTUzMTI1IEMgMTQuOTUxODk2IDguNDQzMjcwMSAxMy43ODY4MjggOS4zOTg0Mzc4IDEyLjE3MzgyOCA5LjM5ODQzNzUgQyAxMC4xOTc3MTkgOS4zOTYxOTU0IDguNjA3NzExIDcuODA2MTg3IDguNjA1NDY4OCA1LjgzMDA3ODEgQyA4LjYwNTQ2ODMgNC4yMTcwNzg1IDkuNTYwNjM2MiAzLjA1MjAxMDIgMTAuODA4NTk0IDIuNTM1MTU2MiBDIDExLjQzMjU3MyAyLjI3NjcyOTMgMTIuMTE5Njg1IDIuMTg1MzgzMyAxMi43OTI5NjkgMi4zMDA3ODEyIHogTSAxMi4xNzM4MjggMTEuMjczNDM4IEMgMTQuMjMzNjQ3IDExLjI3MzQzOCAxNi4xMzM2NzQgMTIuMTg1MDg0IDE3LjU2MjUgMTMuODgyODEyIEMgMTguOTMwNjkgMTUuNTA4NzY1IDE5LjY5ODM0NyAxNy43NzY5NjkgMTkuODA4NTk0IDIwLjI4MzIwMyBDIDE4LjgwNzM5NSAyMC44MDAyMzUgMTUuODg2MTU3IDIyLjE2MjEwOSAxMi4xNzM4MjggMjIuMTYyMTA5IEMgOC43NjE0NjMyIDIyLjE2MjEwOSA1LjYyNDU3NTQgMjAuNzg3MDY5IDQuNTM5MDYyNSAyMC4yNjU2MjUgQyA0LjY1MjU4OTYgMTcuNzY2NzE3IDUuNDIwMzMxNSAxNS41MDQ3OTEgNi43ODUxNTYyIDEzLjg4MjgxMiBDIDguMjEzOTgyNyAxMi4xODUwODQgMTAuMTE0MDEgMTEuMjczNDM4IDEyLjE3MzgyOCAxMS4yNzM0MzggeiBcIiAvPiA8L3N2Zz5gLFxuXG4gIHBsYWNlczogYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj48cGF0aCBkPVwiTTYuNSAxMkM1LjEyMiAxMiA0IDEzLjEyMSA0IDE0LjVTNS4xMjIgMTcgNi41IDE3IDkgMTUuODc5IDkgMTQuNSA3Ljg3OCAxMiA2LjUgMTJtMCAzYy0uMjc1IDAtLjUtLjIyNS0uNS0uNXMuMjI1LS41LjUtLjUuNS4yMjUuNS41LS4yMjUuNS0uNS41TTE3LjUgMTJjLTEuMzc4IDAtMi41IDEuMTIxLTIuNSAyLjVzMS4xMjIgMi41IDIuNSAyLjUgMi41LTEuMTIxIDIuNS0yLjUtMS4xMjItMi41LTIuNS0yLjVtMCAzYy0uMjc1IDAtLjUtLjIyNS0uNS0uNXMuMjI1LS41LjUtLjUuNS4yMjUuNS41LS4yMjUuNS0uNS41XCIvPjxwYXRoIGQ9XCJNMjIuNDgyIDkuNDk0bC0xLjAzOS0uMzQ2TDIxLjQgOWguNmMuNTUyIDAgMS0uNDM5IDEtLjk5MiAwLS4wMDYtLjAwMy0uMDA4LS4wMDMtLjAwOEgyM2MwLTEtLjg4OS0yLTEuOTg0LTJoLS42NDJsLS43MzEtMS43MTdDMTkuMjYyIDMuMDEyIDE4LjA5MSAyIDE2Ljc2NCAySDcuMjM2QzUuOTA5IDIgNC43MzggMy4wMTIgNC4zNTcgNC4yODNMMy42MjYgNmgtLjY0MkMxLjg4OSA2IDEgNyAxIDhoLjAwM1MxIDguMDAyIDEgOC4wMDhDMSA4LjU2MSAxLjQ0OCA5IDIgOWguNmwtLjA0My4xNDgtMS4wMzkuMzQ2YTIuMDAxIDIuMDAxIDAgMCAwLTEuMzU5IDIuMDk3bC43NTEgNy41MDhhMSAxIDAgMCAwIC45OTQuOTAxSDN2MWMwIDEuMTAzLjg5NiAyIDIgMmgyYzEuMTA0IDAgMi0uODk3IDItMnYtMWg2djFjMCAxLjEwMy44OTYgMiAyIDJoMmMxLjEwNCAwIDItLjg5NyAyLTJ2LTFoMS4wOTZhLjk5OS45OTkgMCAwIDAgLjk5NC0uOTAxbC43NTEtNy41MDhhMi4wMDEgMi4wMDEgMCAwIDAtMS4zNTktMi4wOTdNNi4yNzMgNC44NTdDNi40MDIgNC40MyA2Ljc4OCA0IDcuMjM2IDRoOS41MjdjLjQ0OCAwIC44MzQuNDMuOTYzLjg1N0wxOS4zMTMgOUg0LjY4OGwxLjU4NS00LjE0M3pNNyAyMUg1di0xaDJ2MXptMTIgMGgtMnYtMWgydjF6bTIuMTg5LTNIMi44MTFsLS42NjItNi42MDdMMyAxMWgxOGwuODUyLjM5M0wyMS4xODkgMTh6XCIvPjwvc3ZnPmAsXG5cbiAgcmVjZW50OiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiPjxwYXRoIGQ9XCJNMTMgNGgtMmwtLjAwMSA3SDl2MmgydjJoMnYtMmg0di0yaC00elwiLz48cGF0aCBkPVwiTTEyIDBDNS4zNzMgMCAwIDUuMzczIDAgMTJzNS4zNzMgMTIgMTIgMTIgMTItNS4zNzMgMTItMTJTMTguNjI3IDAgMTIgMG0wIDIyQzYuNDg2IDIyIDIgMTcuNTE0IDIgMTJTNi40ODYgMiAxMiAyczEwIDQuNDg2IDEwIDEwLTQuNDg2IDEwLTEwIDEwXCIvPjwvc3ZnPmAsXG5cbiAgc3ltYm9sczogYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj48cGF0aCBkPVwiTTAgMGgxMXYySDB6TTQgMTFoM1Y2aDRWNEgwdjJoNHpNMTUuNSAxN2MxLjM4MSAwIDIuNS0xLjExNiAyLjUtMi40OTNzLTEuMTE5LTIuNDkzLTIuNS0yLjQ5M1MxMyAxMy4xMyAxMyAxNC41MDcgMTQuMTE5IDE3IDE1LjUgMTdtMC0yLjk4NmMuMjc2IDAgLjUuMjIyLjUuNDkzIDAgLjI3Mi0uMjI0LjQ5My0uNS40OTNzLS41LS4yMjEtLjUtLjQ5My4yMjQtLjQ5My41LS40OTNNMjEuNSAxOS4wMTRjLTEuMzgxIDAtMi41IDEuMTE2LTIuNSAyLjQ5M1MyMC4xMTkgMjQgMjEuNSAyNHMyLjUtMS4xMTYgMi41LTIuNDkzLTEuMTE5LTIuNDkzLTIuNS0yLjQ5M20wIDIuOTg2YS40OTcuNDk3IDAgMCAxLS41LS40OTNjMC0uMjcxLjIyNC0uNDkzLjUtLjQ5M3MuNS4yMjIuNS40OTNhLjQ5Ny40OTcgMCAwIDEtLjUuNDkzTTIyIDEzbC05IDkgMS41MTMgMS41IDguOTktOS4wMDl6TTE3IDExYzIuMjA5IDAgNC0xLjExOSA0LTIuNVYycy45ODUtLjE2MSAxLjQ5OC45NDlDMjMuMDEgNC4wNTUgMjMgNiAyMyA2czEtMS4xMTkgMS0zLjEzNUMyNC0uMDIgMjEgMCAyMSAwaC0ydjYuMzQ3QTUuODUzIDUuODUzIDAgMCAwIDE3IDZjLTIuMjA5IDAtNCAxLjExOS00IDIuNXMxLjc5MSAyLjUgNCAyLjVNMTAuMjk3IDIwLjQ4MmwtMS40NzUtMS41ODVhNDcuNTQgNDcuNTQgMCAwIDEtMS40NDIgMS4xMjljLS4zMDctLjI4OC0uOTg5LTEuMDE2LTIuMDQ1LTIuMTgzLjkwMi0uODM2IDEuNDc5LTEuNDY2IDEuNzI5LTEuODkycy4zNzYtLjg3MS4zNzYtMS4zMzZjMC0uNTkyLS4yNzMtMS4xNzgtLjgxOC0xLjc1OS0uNTQ2LS41ODEtMS4zMjktLjg3MS0yLjM0OS0uODcxLTEuMDA4IDAtMS43OS4yOTMtMi4zNDQuODc5LS41NTYuNTg3LS44MzIgMS4xODEtLjgzMiAxLjc4NCAwIC44MTMuNDE5IDEuNzQ4IDEuMjU2IDIuODA1LS44NDcuNjE0LTEuNDQ0IDEuMjA4LTEuNzk0IDEuNzg0YTMuNDY1IDMuNDY1IDAgMCAwLS41MjMgMS44MzNjMCAuODU3LjMwOCAxLjU2LjkyNCAyLjEwNy42MTYuNTQ5IDEuNDIzLjgyMyAyLjQyLjgyMyAxLjE3MyAwIDIuNDQ0LS4zNzkgMy44MTMtMS4xMzdMOC4yMzUgMjRoMi44MTlsLTIuMDktMi4zODMgMS4zMzMtMS4xMzV6bS02LjczNi02LjM4OWExLjAyIDEuMDIgMCAwIDEgLjczLS4yODZjLjMxIDAgLjU1OS4wODUuNzQ3LjI1NGEuODQ5Ljg0OSAwIDAgMSAuMjgzLjY1OWMwIC41MTgtLjQxOSAxLjExMi0xLjI1NyAxLjc4NC0uNTM2LS42NTEtLjgwNS0xLjIzMS0uODA1LTEuNzQyYS45MDEuOTAxIDAgMCAxIC4zMDItLjY2OU0zLjc0IDIyYy0uNDI3IDAtLjc3OC0uMTE2LTEuMDU3LS4zNDktLjI3OS0uMjMyLS40MTgtLjQ4Ny0uNDE4LS43NjYgMC0uNTk0LjUwOS0xLjI4OCAxLjUyNy0yLjA4My45NjggMS4xMzQgMS43MTcgMS45NDYgMi4yNDggMi40MzgtLjkyMS41MDctMS42ODYuNzYtMi4zLjc2XCIvPjwvc3ZnPmAsXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNWR3NcbiIsImNvbnN0IG1hcHBpbmcgPSB7XG4gIG5hbWU6ICdhJyxcbiAgdW5pZmllZDogJ2InLFxuICBub25fcXVhbGlmaWVkOiAnYycsXG4gIGhhc19pbWdfYXBwbGU6ICdkJyxcbiAgaGFzX2ltZ19nb29nbGU6ICdlJyxcbiAgaGFzX2ltZ190d2l0dGVyOiAnZicsXG4gIGhhc19pbWdfZmFjZWJvb2s6ICdoJyxcbiAga2V5d29yZHM6ICdqJyxcbiAgc2hlZXQ6ICdrJyxcbiAgZW1vdGljb25zOiAnbCcsXG4gIHRleHQ6ICdtJyxcbiAgc2hvcnRfbmFtZXM6ICduJyxcbiAgYWRkZWRfaW46ICdvJyxcbn1cblxuY29uc3QgYnVpbGRTZWFyY2ggPSAoZW1vamkpID0+IHtcbiAgY29uc3Qgc2VhcmNoID0gW11cblxuICB2YXIgYWRkVG9TZWFyY2ggPSAoc3RyaW5ncywgc3BsaXQpID0+IHtcbiAgICBpZiAoIXN0cmluZ3MpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIDsoQXJyYXkuaXNBcnJheShzdHJpbmdzKSA/IHN0cmluZ3MgOiBbc3RyaW5nc10pLmZvckVhY2goKHN0cmluZykgPT4ge1xuICAgICAgOyhzcGxpdCA/IHN0cmluZy5zcGxpdCgvWy18X3xcXHNdKy8pIDogW3N0cmluZ10pLmZvckVhY2goKHMpID0+IHtcbiAgICAgICAgcyA9IHMudG9Mb3dlckNhc2UoKVxuXG4gICAgICAgIGlmIChzZWFyY2guaW5kZXhPZihzKSA9PSAtMSkge1xuICAgICAgICAgIHNlYXJjaC5wdXNoKHMpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGFkZFRvU2VhcmNoKGVtb2ppLnNob3J0X25hbWVzLCB0cnVlKVxuICBhZGRUb1NlYXJjaChlbW9qaS5uYW1lLCB0cnVlKVxuICBhZGRUb1NlYXJjaChlbW9qaS5rZXl3b3JkcywgZmFsc2UpXG4gIGFkZFRvU2VhcmNoKGVtb2ppLmVtb3RpY29ucywgZmFsc2UpXG5cbiAgcmV0dXJuIHNlYXJjaC5qb2luKCcsJylcbn1cblxuZnVuY3Rpb24gZGVlcEZyZWV6ZShvYmplY3QpIHtcbiAgLy8gUmV0cmlldmUgdGhlIHByb3BlcnR5IG5hbWVzIGRlZmluZWQgb24gb2JqZWN0XG4gIHZhciBwcm9wTmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmplY3QpXG5cbiAgLy8gRnJlZXplIHByb3BlcnRpZXMgYmVmb3JlIGZyZWV6aW5nIHNlbGZcbiAgZm9yIChsZXQgbmFtZSBvZiBwcm9wTmFtZXMpIHtcbiAgICBsZXQgdmFsdWUgPSBvYmplY3RbbmFtZV1cbiAgICBvYmplY3RbbmFtZV0gPVxuICAgICAgdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyA/IGRlZXBGcmVlemUodmFsdWUpIDogdmFsdWVcbiAgfVxuICByZXR1cm4gT2JqZWN0LmZyZWV6ZShvYmplY3QpXG59XG5cbmNvbnN0IHVuY29tcHJlc3MgPSAoZGF0YSkgPT4ge1xuICBpZiAoIWRhdGEuY29tcHJlc3NlZCkge1xuICAgIHJldHVybiBkYXRhXG4gIH1cbiAgZGF0YS5jb21wcmVzc2VkID0gZmFsc2VcblxuICBmb3IgKGxldCBpZCBpbiBkYXRhLmVtb2ppcykge1xuICAgIGxldCBlbW9qaSA9IGRhdGEuZW1vamlzW2lkXVxuXG4gICAgZm9yIChsZXQga2V5IGluIG1hcHBpbmcpIHtcbiAgICAgIGVtb2ppW2tleV0gPSBlbW9qaVttYXBwaW5nW2tleV1dXG4gICAgICBkZWxldGUgZW1vamlbbWFwcGluZ1trZXldXVxuICAgIH1cblxuICAgIGlmICghZW1vamkuc2hvcnRfbmFtZXMpIGVtb2ppLnNob3J0X25hbWVzID0gW11cbiAgICBlbW9qaS5zaG9ydF9uYW1lcy51bnNoaWZ0KGlkKVxuXG4gICAgZW1vamkuc2hlZXRfeCA9IGVtb2ppLnNoZWV0WzBdXG4gICAgZW1vamkuc2hlZXRfeSA9IGVtb2ppLnNoZWV0WzFdXG4gICAgZGVsZXRlIGVtb2ppLnNoZWV0XG5cbiAgICBpZiAoIWVtb2ppLnRleHQpIGVtb2ppLnRleHQgPSAnJ1xuXG4gICAgaWYgKCFlbW9qaS5hZGRlZF9pbikgZW1vamkuYWRkZWRfaW4gPSA2XG4gICAgZW1vamkuYWRkZWRfaW4gPSBlbW9qaS5hZGRlZF9pbi50b0ZpeGVkKDEpXG5cbiAgICBlbW9qaS5zZWFyY2ggPSBidWlsZFNlYXJjaChlbW9qaSlcbiAgfVxuICBkYXRhID0gZGVlcEZyZWV6ZShkYXRhKVxuICByZXR1cm4gZGF0YVxufVxuXG5leHBvcnQgeyBidWlsZFNlYXJjaCwgdW5jb21wcmVzcyB9XG4iLCJpbXBvcnQgeyBpbnRlcnNlY3QsIHVuaWZpZWRUb05hdGl2ZSB9IGZyb20gJy4vaW5kZXgnXG5pbXBvcnQgeyB1bmNvbXByZXNzLCBidWlsZFNlYXJjaCB9IGZyb20gJy4vZGF0YSdcbmltcG9ydCBmcmVxdWVudGx5IGZyb20gJy4vZnJlcXVlbnRseSdcblxuY29uc3QgU0hFRVRfQ09MVU1OUyA9IDYxXG5jb25zdCBDT0xPTlNfUkVHRVggPSAvXig/OlxcOihbXlxcOl0rKVxcOikoPzpcXDpza2luLXRvbmUtKFxcZClcXDopPyQvXG4vLyBTa2luIHRvbmVzXG5jb25zdCBTS0lOUyA9IFsnMUYzRkEnLCAnMUYzRkInLCAnMUYzRkMnLCAnMUYzRkQnLCAnMUYzRkUnLCAnMUYzRkYnXVxuXG4vKipcbiAqIEVtb2ppIGRhdGEgc3RydWN0dXJlOlxuICoge1xuICogICAgXCJjb21wcmVzc2VkXCI6IGZhbHNlLFxuICogICAgXCJhbGlhc2VzXCI6IHtcbiAqICAgICAgY29sbGlzaW9uOiBcImJvb21cIlxuICogICAgICBjb29raW5nOiBcImZyaWVkX2VnZ1wiXG4gKiAgICAgIGVudmVsb3BlOiBcImVtYWlsXCJcbiAqICAgICAgZmFjZV93aXRoX2Zpbmdlcl9jb3ZlcmluZ19jbG9zZWRfbGlwczogXCJzaHVzaGluZ19mYWNlXCJcbiAqICAgICAgLi4uXG4gKiAgICB9LFxuICogICAgXCJjYXRlZ29yaWVzXCI6IFsge1xuICogICAgICBpZDogXCJwZW9wbGVcIixcbiAqICAgICAgbmFtZTogXCJTbWlsZXlzICYgRW1vdGlvblwiLFxuICogICAgICBlbW9qaXM6IFsgXCJncmlubmluZ1wiLCBcImdyaW5cIiwgXCJqb3lcIiwgLi4uIF1cbiAqICAgIH0sIHtcbiAqICAgICAgaWQ6IFwibmF0dXJlXCIsXG4gKiAgICAgIG5hbWU6IFwiQW5pbWFscyAmIE5hdHVyZVwiLFxuICogICAgICBlbW9qaXM6IFsgXCJtb25rZXlfZmFjZVwiLCBcIm1vbmV5XCIsIFwiZ29yaWxsYVwiLCAuLi4gXVxuICogICAgfSxcbiAqICAgIC4uLlxuICogICAgXSxcbiAqICAgIFwiZW1vamlzXCI6IFtcbiAqICAgICAgc21pbGV5OiB7XG4gKiAgICAgICAgYWRkZWRfaW46IFwiNi4wXCIsXG4gKiAgICAgICAgZW1vdGljb25zOiBbXCI9KVwiLCBcIj0tKVwiXSxcbiAqICAgICAgICBoYXNfaW1nX2FwcGxlOiB0cnVlLFxuICogICAgICAgIGhhc19pbWdfZmFjZWJvb2s6IHRydWUsXG4gKiAgICAgICAgaGFzX2ltZ19nb29nbGU6IHRydWUsXG4gKiAgICAgICAgaGFzX2ltZ190d2l0dGVyOiB0cnVlLFxuICogICAgICAgIGtleXdvcmRzOiBbXCJmYWNlXCIsIFwiaGFwcHlcIiwgXCJqb3lcIiwgXCJoYWhhXCIsIFwiOkRcIiwgXCI6KVwiLCBcInNtaWxlXCIsIFwiZnVubnlcIl0sXG4gKiAgICAgICAgbmFtZTogXCJTbWlsaW5nIEZhY2Ugd2l0aCBPcGVuIE1vdXRoXCIsXG4gKiAgICAgICAgbm9uX3F1YWxpZmllZDogdW5kZWZpbmVkLFxuICogICAgICAgIHNlYXJjaDogXCJzbWlsZXksc21pbGluZyxmYWNlLHdpdGgsb3Blbixtb3V0aCxoYXBweSxqb3ksaGFoYSw6ZCw6KSxzbWlsZSxmdW5ueSw9KSw9LSlcIixcbiAqICAgICAgICBzaGVldF94OiAzMCxcbiAqICAgICAgICBzaGVldF95OiAyNyxcbiAqICAgICAgICBzaG9ydF9uYW1lczogW1wic21pbGV5XCJdLFxuICogICAgICAgIHRleHQ6IFwiOilcIixcbiAqICAgICAgICB1bmlmaWVkOiBcIjFGNjAzXCIsXG4gKiAgICAgIH0sIHtcbiAqICAgICAgKzE6IHsgICAgLy8gZW1vamkgd2l0aCBza2luX3ZhcmlhdGlvbnNcbiAqICAgICAgICAgIC4uLiwgLy8gYWxsIHRoZSByZWd1bGFyIGZpZWxkcyBhcmUgcHJlc2VudFxuICogICAgICAgICAgbmFtZTogXCJUaHVtYnMgVXAgU2lnblwiLFxuICogICAgICAgICAgc2hvcnRfbmFtZXM6ICgyKSBbXCIrMVwiLCBcInRodW1ic3VwXCJdLFxuICogICAgICAgICAgc2tpbl92YXJpYXRpb25zOiB7XG4gKiAgICAgICAgICAgIDFGM0ZCOiAgICAgICAgICAgICAvLyBlYWNoIHZhcmlhdGlvbiBoYXMgYWRkaXRpb25hbCBzZXQgb2YgZmllbGRzOlxuICogICAgICAgICAgICAgIGFkZGVkX2luOiBcIjguMFwiLFxuICogICAgICAgICAgICAgIGhhc19pbWdfYXBwbGU6IHRydWUsXG4gKiAgICAgICAgICAgICAgaGFzX2ltZ19mYWNlYm9vazogdHJ1ZSxcbiAqICAgICAgICAgICAgICBoYXNfaW1nX2dvb2dsZTogdHJ1ZSxcbiAqICAgICAgICAgICAgICBoYXNfaW1nX3R3aXR0ZXI6IHRydWUsXG4gKiAgICAgICAgICAgICAgaW1hZ2U6IFwiMWY0NGQtMWYzZmIucG5nXCIsXG4gKiAgICAgICAgICAgICAgbm9uX3F1YWxpZmllZDogbnVsbCxcbiAqICAgICAgICAgICAgICBzaGVldF94OiAxNCxcbiAqICAgICAgICAgICAgICBzaGVldF95OiA1MCxcbiAqICAgICAgICAgICAgICB1bmlmaWVkOiBcIjFGNDRELTFGM0ZCXCIsXG4gKiAgICAgICAgICAgIDFGM0ZCOiB74oCmfSxcbiAqICAgICAgICAgICAgMUYzRkM6IHvigKZ9LFxuICogICAgICAgICAgICAxRjNGRDoge+KApn0sXG4gKiAgICAgICAgICAgIDFGM0ZFOiB74oCmfSxcbiAqICAgICAgICAgICAgMUYzRkY6IHvigKZ9XG4gKiAgICAgICAgICAgIH0sXG4gKiAgICAgICAgICAuLi5cbiAqICAgICAgfSxcbiAqICAgICAgYTogeyAgLy8gZW1vamkgd2l0aCBub25fcXVhbGlmaWVkIGZpZWxkIHNldFxuICogICAgICAgIGFkZGVkX2luOiBcIjYuMFwiLFxuICogICAgICAgIGVtb3RpY29uczogdW5kZWZpbmVkLFxuICogICAgICAgIGhhc19pbWdfYXBwbGU6IHRydWUsXG4gKiAgICAgICAgLi4uXG4gKiAgICAgICAgbm9uX3F1YWxpZmllZDogXCIxRjE3MFwiLFxuICogICAgICAgIHVuaWZpZWQ6IFwiMUYxNzAtRkUwRlwiLFxuICogICAgIH0sXG4gKiAgICAgLi4uXG4gKiAgIF1cbiAqIH1cbiAqL1xuXG4vKipcbiAqIFdyYXBzIHJhdyBqYXNvbiBlbW9qaSBkYXRhLCBzZXJ2ZXMgYXMgZGF0YSBzb3VyY2UgZm9yXG4gKiBlbW9qaSBwaWNrZXIgY29tcG9uZW50cy5cbiAqXG4gKiBVc2FnZTpcbiAqXG4gKiAgIGltcG9ydCBkYXRhIGZyb20gJy4uL2RhdGEvYWxsLmpzb24nXG4gKiAgIGxldCBpbmRleCA9IG5ldyBFbW9qaUluZGV4KGRhdGEpXG4gKlxuICovXG5leHBvcnQgY2xhc3MgRW1vamlJbmRleCB7XG4gIC8qKlxuICAgKiBDb25zdHJ1Y3Rvci5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGRhdGEgLSBSYXcganNvbiBkYXRhLCBzZWUgdGhlIHN0cnVjdHVyZSBhYm92ZS5cbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBhZGRpdGlvbmFsIG9wdGlvbnMsIGFzIGFuIG9iamVjdDpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZW1vamlzVG9TaG93RmlsdGVyIC0gb3B0aW9uYWwsIGZ1bmN0aW9uIHRvIGZpbHRlciBvdXRcbiAgICogICBzb21lIGVtb2ppcywgZnVuY3Rpb24oZW1vamkpIHsgcmV0dXJuIHRydWV8ZmFsc2UgfVxuICAgKiAgIHdoZXJlIGBlbW9qaWAgaXMgYW4gcmF3IGVtb2ppIG9iamVjdCwgc2VlIGRhdGEuZW1vamlzIGFib3ZlLlxuICAgKiBAcGFyYW0ge0FycmF5fSBpbmNsdWRlIC0gb3B0aW9uYWwsIGEgbGlzdCBvZiBjYXRlZ29yeSBpZHMgdG8gaW5jbHVkZS5cbiAgICogQHBhcmFtIHtBcnJheX0gZXhjbHVkZSAtIG9wdGlvbmFsLCBhIGxpc3Qgb2YgY2F0ZWdvcnkgaWRzIHRvIGV4Y2x1ZGUuXG4gICAqIEBwYXJhbSB7QXJyYXl9IGN1c3RvbSAtIG9wdGlvbmFsLCBhIGxpc3QgY3VzdG9tIGVtb2ppcywgZWFjaCBlbW9qaSBpc1xuICAgKiAgIGFuIG9iamVjdCwgc2VlIGRhdGEuZW1vamlzIGFib3ZlIGZvciBleGFtcGxlcy5cbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIGRhdGEsXG4gICAge1xuICAgICAgZW1vamlzVG9TaG93RmlsdGVyLFxuICAgICAgaW5jbHVkZSxcbiAgICAgIGV4Y2x1ZGUsXG4gICAgICBjdXN0b20sXG4gICAgICByZWNlbnQsXG4gICAgICByZWNlbnRMZW5ndGggPSAyMCxcbiAgICB9ID0ge30sXG4gICkge1xuICAgIHRoaXMuX2RhdGEgPSB1bmNvbXByZXNzKGRhdGEpXG4gICAgLy8gQ2FsbGJhY2sgdG8gZXhjbHVkZSBzcGVjaWZpYyBlbW9qaXNcbiAgICB0aGlzLl9lbW9qaXNGaWx0ZXIgPSBlbW9qaXNUb1Nob3dGaWx0ZXIgfHwgbnVsbFxuICAgIC8vIENhdGVnb3JpZXMgdG8gaW5jbHVkZSAvIGV4Y2x1ZGVcbiAgICB0aGlzLl9pbmNsdWRlID0gaW5jbHVkZSB8fCBudWxsXG4gICAgdGhpcy5fZXhjbHVkZSA9IGV4Y2x1ZGUgfHwgbnVsbFxuICAgIC8vIEN1c3RvbSBlbW9qaXNcbiAgICB0aGlzLl9jdXN0b20gPSBjdXN0b20gfHwgW11cbiAgICAvLyBSZWNlbnQgZW1vamlzXG4gICAgLy8gVE9ETzogbWFrZSBwYXJhbWV0ZXIgY29uZmlndXJhYmxlXG4gICAgdGhpcy5fcmVjZW50ID0gcmVjZW50IHx8IGZyZXF1ZW50bHkuZ2V0KHJlY2VudExlbmd0aClcblxuICAgIHRoaXMuX2Vtb2ppcyA9IHt9XG4gICAgdGhpcy5fbmF0aXZlRW1vamlzID0ge31cbiAgICB0aGlzLl9lbW90aWNvbnMgPSB7fVxuXG4gICAgdGhpcy5fY2F0ZWdvcmllcyA9IFtdXG4gICAgdGhpcy5fcmVjZW50Q2F0ZWdvcnkgPSB7IGlkOiAncmVjZW50JywgbmFtZTogJ1JlY2VudCcsIGVtb2ppczogW10gfVxuICAgIHRoaXMuX2N1c3RvbUNhdGVnb3J5ID0geyBpZDogJ2N1c3RvbScsIG5hbWU6ICdDdXN0b20nLCBlbW9qaXM6IFtdIH1cbiAgICB0aGlzLl9zZWFyY2hJbmRleCA9IHt9XG4gICAgdGhpcy5idWlsZEluZGV4KClcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpXG4gIH1cblxuICBidWlsZEluZGV4KCkge1xuICAgIGxldCBhbGxDYXRlZ29yaWVzID0gdGhpcy5fZGF0YS5jYXRlZ29yaWVzXG5cbiAgICBpZiAodGhpcy5faW5jbHVkZSkge1xuICAgICAgLy8gUmVtb3ZlIGNhdGVnb3JpZXMgdGhhdCBhcmUgbm90IGluIHRoZSBpbmNsdWRlIGxpc3QuXG4gICAgICBhbGxDYXRlZ29yaWVzID0gYWxsQ2F0ZWdvcmllcy5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luY2x1ZGUuaW5jbHVkZXMoaXRlbS5pZClcbiAgICAgIH0pXG4gICAgICAvLyBTb3J0IGNhdGVnb3JpZXMgYWNjb3JkaW5nIHRvIHRoZSBpbmNsdWRlIGxpc3QuXG4gICAgICBhbGxDYXRlZ29yaWVzID0gYWxsQ2F0ZWdvcmllcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIGNvbnN0IGluZGV4QSA9IHRoaXMuX2luY2x1ZGUuaW5kZXhPZihhLmlkKVxuICAgICAgICBjb25zdCBpbmRleEIgPSB0aGlzLl9pbmNsdWRlLmluZGV4T2YoYi5pZClcbiAgICAgICAgaWYgKGluZGV4QSA8IGluZGV4Qikge1xuICAgICAgICAgIHJldHVybiAtMVxuICAgICAgICB9XG4gICAgICAgIGlmIChpbmRleEEgPiBpbmRleEIpIHtcbiAgICAgICAgICByZXR1cm4gMVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwXG4gICAgICB9KVxuICAgIH1cblxuICAgIGFsbENhdGVnb3JpZXMuZm9yRWFjaCgoY2F0ZWdvcnlEYXRhKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuaXNDYXRlZ29yeU5lZWRlZChjYXRlZ29yeURhdGEuaWQpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgbGV0IGNhdGVnb3J5ID0ge1xuICAgICAgICBpZDogY2F0ZWdvcnlEYXRhLmlkLFxuICAgICAgICBuYW1lOiBjYXRlZ29yeURhdGEubmFtZSxcbiAgICAgICAgZW1vamlzOiBbXSxcbiAgICAgIH1cbiAgICAgIGNhdGVnb3J5RGF0YS5lbW9qaXMuZm9yRWFjaCgoZW1vamlJZCkgPT4ge1xuICAgICAgICBsZXQgZW1vamkgPSB0aGlzLmFkZEVtb2ppKGVtb2ppSWQpXG4gICAgICAgIGlmIChlbW9qaSkge1xuICAgICAgICAgIGNhdGVnb3J5LmVtb2ppcy5wdXNoKGVtb2ppKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgaWYgKGNhdGVnb3J5LmVtb2ppcy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5fY2F0ZWdvcmllcy5wdXNoKGNhdGVnb3J5KVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5pc0NhdGVnb3J5TmVlZGVkKCdjdXN0b20nKSkge1xuICAgICAgaWYgKHRoaXMuX2N1c3RvbS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZvciAobGV0IGN1c3RvbUVtb2ppIG9mIHRoaXMuX2N1c3RvbSkge1xuICAgICAgICAgIHRoaXMuYWRkQ3VzdG9tRW1vamkoY3VzdG9tRW1vamkpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9jdXN0b21DYXRlZ29yeS5lbW9qaXMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuX2NhdGVnb3JpZXMucHVzaCh0aGlzLl9jdXN0b21DYXRlZ29yeSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc0NhdGVnb3J5TmVlZGVkKCdyZWNlbnQnKSkge1xuICAgICAgaWYgKHRoaXMuX3JlY2VudC5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5fcmVjZW50Lm1hcCgoaWQpID0+IHtcbiAgICAgICAgICBmb3IgKGxldCBjdXN0b21FbW9qaSBvZiB0aGlzLl9jdXN0b21DYXRlZ29yeS5lbW9qaXMpIHtcbiAgICAgICAgICAgIGlmIChjdXN0b21FbW9qaS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgdGhpcy5fcmVjZW50Q2F0ZWdvcnkuZW1vamlzLnB1c2goY3VzdG9tRW1vamkpXG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGhpcy5oYXNFbW9qaShpZCkpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlY2VudENhdGVnb3J5LmVtb2ppcy5wdXNoKHRoaXMuZW1vamkoaWQpKVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIC8vIEFkZCByZWNlbnQgY2F0ZWdvcnkgdG8gdGhlIHRvcFxuICAgICAgaWYgKHRoaXMuX3JlY2VudENhdGVnb3J5LmVtb2ppcy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5fY2F0ZWdvcmllcy51bnNoaWZ0KHRoaXMuX3JlY2VudENhdGVnb3J5KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIHRoZSBlbW9qaSBmcm9tIHRoZSBzdHJpbmdcbiAgICovXG4gIGZpbmRFbW9qaShlbW9qaSwgc2tpbikge1xuICAgIC8vIDEuIFBhcnNlIGFzIDplbW9qaV9uYW1lOnNraW4tdG9uZS14eDpcbiAgICBsZXQgbWF0Y2hlcyA9IGVtb2ppLm1hdGNoKENPTE9OU19SRUdFWClcblxuICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICBlbW9qaSA9IG1hdGNoZXNbMV1cbiAgICAgIGlmIChtYXRjaGVzWzJdKSB7XG4gICAgICAgIHNraW4gPSBwYXJzZUludChtYXRjaGVzWzJdLCAxMClcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAyLiBDaGVjayBpZiB0aGUgc3BlY2lmaWVkIGVtb2ppIGlzIGFuIGFsaWFzXG4gICAgaWYgKHRoaXMuX2RhdGEuYWxpYXNlcy5oYXNPd25Qcm9wZXJ0eShlbW9qaSkpIHtcbiAgICAgIGVtb2ppID0gdGhpcy5fZGF0YS5hbGlhc2VzW2Vtb2ppXVxuICAgIH1cblxuICAgIC8vIDMuIENoZWNrIGlmIHdlIGhhdmUgdGhlIHNwZWNpZmllZCBlbW9qaVxuICAgIGlmICh0aGlzLl9lbW9qaXMuaGFzT3duUHJvcGVydHkoZW1vamkpKSB7XG4gICAgICBsZXQgZW1vamlPYmplY3QgPSB0aGlzLl9lbW9qaXNbZW1vamldXG4gICAgICBpZiAoc2tpbikge1xuICAgICAgICByZXR1cm4gZW1vamlPYmplY3QuZ2V0U2tpbihza2luKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGVtb2ppT2JqZWN0XG4gICAgfVxuXG4gICAgLy8gNC4gQ2hlY2sgaWYgd2UgaGF2ZSB0aGUgc3BlY2lmaWVkIG5hdGl2ZSBlbW9qaVxuICAgIGlmICh0aGlzLl9uYXRpdmVFbW9qaXMuaGFzT3duUHJvcGVydHkoZW1vamkpKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbmF0aXZlRW1vamlzW2Vtb2ppXVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgY2F0ZWdvcmllcygpIHtcbiAgICByZXR1cm4gdGhpcy5fY2F0ZWdvcmllc1xuICB9XG5cbiAgZW1vamkoZW1vamlJZCkge1xuICAgIGlmICh0aGlzLl9kYXRhLmFsaWFzZXMuaGFzT3duUHJvcGVydHkoZW1vamlJZCkpIHtcbiAgICAgIGVtb2ppSWQgPSB0aGlzLl9kYXRhLmFsaWFzZXNbZW1vamlJZF1cbiAgICB9XG4gICAgbGV0IGVtb2ppID0gdGhpcy5fZW1vamlzW2Vtb2ppSWRdXG4gICAgaWYgKCFlbW9qaSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW4gbm90IGZpbmQgZW1vamkgYnkgaWQ6ICcgKyBlbW9qaUlkKVxuICAgIH1cbiAgICByZXR1cm4gZW1vamlcbiAgfVxuXG4gIGZpcnN0RW1vamkoKSB7XG4gICAgbGV0IGVtb2ppID0gdGhpcy5fZW1vamlzW09iamVjdC5rZXlzKHRoaXMuX2Vtb2ppcylbMF1dXG4gICAgaWYgKCFlbW9qaSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW4gbm90IGdldCBmaXJzdCBlbW9qaScpXG4gICAgfVxuICAgIHJldHVybiBlbW9qaVxuICB9XG5cbiAgaGFzRW1vamkoZW1vamlJZCkge1xuICAgIGlmICh0aGlzLl9kYXRhLmFsaWFzZXMuaGFzT3duUHJvcGVydHkoZW1vamlJZCkpIHtcbiAgICAgIGVtb2ppSWQgPSB0aGlzLl9kYXRhLmFsaWFzZXNbZW1vamlJZF1cbiAgICB9XG4gICAgaWYgKHRoaXMuX2Vtb2ppc1tlbW9qaUlkXSkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBuYXRpdmVFbW9qaSh1bmljb2RlRW1vamkpIHtcbiAgICBpZiAodGhpcy5fbmF0aXZlRW1vamlzLmhhc093blByb3BlcnR5KHVuaWNvZGVFbW9qaSkpIHtcbiAgICAgIHJldHVybiB0aGlzLl9uYXRpdmVFbW9qaXNbdW5pY29kZUVtb2ppXVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgc2VhcmNoKHZhbHVlLCBtYXhSZXN1bHRzKSB7XG4gICAgbWF4UmVzdWx0cyB8fCAobWF4UmVzdWx0cyA9IDc1KVxuICAgIGlmICghdmFsdWUubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICBpZiAodmFsdWUgPT0gJy0nIHx8IHZhbHVlID09ICctMScpIHtcbiAgICAgIHJldHVybiBbdGhpcy5lbW9qaSgnLTEnKV1cbiAgICB9XG5cbiAgICBsZXQgdmFsdWVzID0gdmFsdWUudG9Mb3dlckNhc2UoKS5zcGxpdCgvW1xcc3wsfFxcLXxfXSsvKVxuICAgIGxldCBhbGxSZXN1bHRzID0gW11cblxuICAgIGlmICh2YWx1ZXMubGVuZ3RoID4gMikge1xuICAgICAgdmFsdWVzID0gW3ZhbHVlc1swXSwgdmFsdWVzWzFdXVxuICAgIH1cblxuICAgIGFsbFJlc3VsdHMgPSB2YWx1ZXNcbiAgICAgIC5tYXAoKHZhbHVlKSA9PiB7XG4gICAgICAgIC8vIFN0YXJ0IHNlYXJjaGluIGluIHRoZSBnbG9iYWwgbGlzdCBvZiBlbW9qaXNcbiAgICAgICAgbGV0IGVtb2ppcyA9IHRoaXMuX2Vtb2ppc1xuICAgICAgICBsZXQgY3VycmVudEluZGV4ID0gdGhpcy5fc2VhcmNoSW5kZXhcbiAgICAgICAgbGV0IGxlbmd0aCA9IDBcblxuICAgICAgICBmb3IgKGxldCBjaGFySW5kZXggPSAwOyBjaGFySW5kZXggPCB2YWx1ZS5sZW5ndGg7IGNoYXJJbmRleCsrKSB7XG4gICAgICAgICAgY29uc3QgY2hhciA9IHZhbHVlW2NoYXJJbmRleF1cbiAgICAgICAgICBsZW5ndGgrK1xuXG4gICAgICAgICAgY3VycmVudEluZGV4W2NoYXJdIHx8IChjdXJyZW50SW5kZXhbY2hhcl0gPSB7fSlcbiAgICAgICAgICBjdXJyZW50SW5kZXggPSBjdXJyZW50SW5kZXhbY2hhcl1cblxuICAgICAgICAgIGlmICghY3VycmVudEluZGV4LnJlc3VsdHMpIHtcbiAgICAgICAgICAgIGxldCBzY29yZXMgPSB7fVxuICAgICAgICAgICAgY3VycmVudEluZGV4LnJlc3VsdHMgPSBbXVxuICAgICAgICAgICAgY3VycmVudEluZGV4LmVtb2ppcyA9IHt9XG5cbiAgICAgICAgICAgIGZvciAobGV0IGVtb2ppSWQgaW4gZW1vamlzKSB7XG4gICAgICAgICAgICAgIGxldCBlbW9qaSA9IGVtb2ppc1tlbW9qaUlkXVxuICAgICAgICAgICAgICAvLyBzZWFyY2ggaXMgYSBjb21tYS1zZXBhcmF0ZWQgc3RyaW5nIHdpdGggd29yZHMsIHJlbGF0ZWRcbiAgICAgICAgICAgICAgLy8gdG8gdGhlIGVtb2ppLCBmb3IgZXhhbXBsZTpcbiAgICAgICAgICAgICAgLy8gc2VhcmNoOiBcInNtaWxleSxzbWlsaW5nLGZhY2Usam95LGhhaGEsOmQsOiksc21pbGUsZnVubnksPSksPS0pXCIsXG4gICAgICAgICAgICAgIGxldCBzZWFyY2ggPSBlbW9qaS5fZGF0YS5zZWFyY2hcbiAgICAgICAgICAgICAgbGV0IHN1YiA9IHZhbHVlLnN1YnN0cigwLCBsZW5ndGgpXG4gICAgICAgICAgICAgIGxldCBzdWJJbmRleCA9IHNlYXJjaC5pbmRleE9mKHN1YilcbiAgICAgICAgICAgICAgaWYgKHN1YkluZGV4ICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNjb3JlID0gc3ViSW5kZXggKyAxXG4gICAgICAgICAgICAgICAgaWYgKHN1YiA9PSBlbW9qaUlkKSBzY29yZSA9IDBcblxuICAgICAgICAgICAgICAgIGN1cnJlbnRJbmRleC5yZXN1bHRzLnB1c2goZW1vamkpXG4gICAgICAgICAgICAgICAgY3VycmVudEluZGV4LmVtb2ppc1tlbW9qaUlkXSA9IGVtb2ppXG5cbiAgICAgICAgICAgICAgICBzY29yZXNbZW1vamlJZF0gPSBzY29yZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdXJyZW50SW5kZXgucmVzdWx0cy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgIHZhciBhU2NvcmUgPSBzY29yZXNbYS5pZF0sXG4gICAgICAgICAgICAgICAgYlNjb3JlID0gc2NvcmVzW2IuaWRdXG4gICAgICAgICAgICAgIHJldHVybiBhU2NvcmUgLSBiU2NvcmVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gY29udGludWUgc2VhcmNoIGluIHRoZSByZWR1Y2VkIHNldCBvZiBlbW9qaXNcbiAgICAgICAgICBlbW9qaXMgPSBjdXJyZW50SW5kZXguZW1vamlzXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGN1cnJlbnRJbmRleC5yZXN1bHRzXG4gICAgICAgIC8vIFRoZSBcImZpbHRlclwiIGNhbGwgcmVtb3ZlcyB1bmRlZmluZWQgdmFsdWVzIGZyb20gYWxsUmVzdWx0c1xuICAgICAgICAvLyBhcnJheSwgZm9yIGV4YW1wbGUsIGlmIHdlIGhhdmUgXCJ0ZXN0IFwiICh3aXRoIHRyYWlsaW5nIHNwYWNlKSxcbiAgICAgICAgLy8gd2Ugd2lsbCBnZXQgXCJbQXJyYXksIHVuZGVmaW5lZF1cIiBmb3IgYWxsUmVzdWx0cyBhbmQgYWZ0ZXJcbiAgICAgICAgLy8gdGhlIFwiZmlsdGVyXCIgY2FsbCBpdCB3aWxsIHR1cm4gaW50byBcIltBcnJheV1cIlxuICAgICAgfSlcbiAgICAgIC5maWx0ZXIoKGEpID0+IGEpXG5cbiAgICB2YXIgcmVzdWx0cyA9IG51bGxcbiAgICBpZiAoYWxsUmVzdWx0cy5sZW5ndGggPiAxKSB7XG4gICAgICByZXN1bHRzID0gaW50ZXJzZWN0LmFwcGx5KG51bGwsIGFsbFJlc3VsdHMpXG4gICAgfSBlbHNlIGlmIChhbGxSZXN1bHRzLmxlbmd0aCkge1xuICAgICAgcmVzdWx0cyA9IGFsbFJlc3VsdHNbMF1cbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0cyA9IFtdXG4gICAgfVxuICAgIGlmIChyZXN1bHRzICYmIHJlc3VsdHMubGVuZ3RoID4gbWF4UmVzdWx0cykge1xuICAgICAgcmVzdWx0cyA9IHJlc3VsdHMuc2xpY2UoMCwgbWF4UmVzdWx0cylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHNcbiAgfVxuXG4gIGFkZEN1c3RvbUVtb2ppKGN1c3RvbUVtb2ppKSB7XG4gICAgbGV0IGVtb2ppRGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIGN1c3RvbUVtb2ppLCB7XG4gICAgICBpZDogY3VzdG9tRW1vamkuc2hvcnRfbmFtZXNbMF0sXG4gICAgICBjdXN0b206IHRydWUsXG4gICAgfSlcbiAgICBpZiAoIWVtb2ppRGF0YS5zZWFyY2gpIHtcbiAgICAgIGVtb2ppRGF0YS5zZWFyY2ggPSBidWlsZFNlYXJjaChlbW9qaURhdGEpXG4gICAgfVxuICAgIGxldCBlbW9qaSA9IG5ldyBFbW9qaURhdGEoZW1vamlEYXRhKVxuICAgIHRoaXMuX2Vtb2ppc1tlbW9qaS5pZF0gPSBlbW9qaVxuICAgIHRoaXMuX2N1c3RvbUNhdGVnb3J5LmVtb2ppcy5wdXNoKGVtb2ppKVxuICAgIHJldHVybiBlbW9qaVxuICB9XG5cbiAgYWRkRW1vamkoZW1vamlJZCkge1xuICAgIC8vIFdlIGV4cGVjdCB0aGUgY29ycmVjdCBlbW9qaSBpZCB0aGF0IGlzIHByZXNlbnQgaW4gdGhlIGVtb2ppcyBkYXRhLlxuICAgIGxldCBkYXRhID0gdGhpcy5fZGF0YS5lbW9qaXNbZW1vamlJZF1cblxuICAgIGlmICghdGhpcy5pc0Vtb2ppTmVlZGVkKGRhdGEpKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBsZXQgZW1vamkgPSBuZXcgRW1vamlEYXRhKGRhdGEpXG4gICAgdGhpcy5fZW1vamlzW2Vtb2ppSWRdID0gZW1vamlcbiAgICBpZiAoZW1vamkubmF0aXZlKSB7XG4gICAgICB0aGlzLl9uYXRpdmVFbW9qaXNbZW1vamkubmF0aXZlXSA9IGVtb2ppXG4gICAgfVxuICAgIGlmIChlbW9qaS5fc2tpbnMpIHtcbiAgICAgIGZvciAobGV0IGlkeCBpbiBlbW9qaS5fc2tpbnMpIHtcbiAgICAgICAgbGV0IHNraW4gPSBlbW9qaS5fc2tpbnNbaWR4XVxuICAgICAgICBpZiAoc2tpbi5uYXRpdmUpIHtcbiAgICAgICAgICB0aGlzLl9uYXRpdmVFbW9qaXNbc2tpbi5uYXRpdmVdID0gc2tpblxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGVtb2ppLmVtb3RpY29ucykge1xuICAgICAgZW1vamkuZW1vdGljb25zLmZvckVhY2goKGVtb3RpY29uKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9lbW90aWNvbnNbZW1vdGljb25dKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZW1vdGljb25zW2Vtb3RpY29uXSA9IGVtb2ppSWRcbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBlbW9qaVxuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHdlIG5lZWQgdG8gaW5jbHVkZSBnaXZlbiBjYXRlZ29yeS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNhdGVnb3J5X2lkIC0gVGhlIGNhdGVnb3J5IGlkLlxuICAgKiBAcmV0dXJuIHtib29sZWFufSAtIFdoZXRoZXIgdG8gaW5jbHVkZSB0aGUgZW1vamkuXG4gICAqL1xuICBpc0NhdGVnb3J5TmVlZGVkKGNhdGVnb3J5X2lkKSB7XG4gICAgbGV0IGlzSW5jbHVkZWQgPVxuICAgICAgdGhpcy5faW5jbHVkZSAmJiB0aGlzLl9pbmNsdWRlLmxlbmd0aFxuICAgICAgICA/IHRoaXMuX2luY2x1ZGUuaW5kZXhPZihjYXRlZ29yeV9pZCkgPiAtMVxuICAgICAgICA6IHRydWVcbiAgICBsZXQgaXNFeGNsdWRlZCA9XG4gICAgICB0aGlzLl9leGNsdWRlICYmIHRoaXMuX2V4Y2x1ZGUubGVuZ3RoXG4gICAgICAgID8gdGhpcy5fZXhjbHVkZS5pbmRleE9mKGNhdGVnb3J5X2lkKSA+IC0xXG4gICAgICAgIDogZmFsc2VcbiAgICBpZiAoIWlzSW5jbHVkZWQgfHwgaXNFeGNsdWRlZCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgd2UgbmVlZCB0byBpbmNsdWRlIGdpdmVuIGVtb2ppLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZW1vamkgLSBUaGUgcmF3IGVtb2ppIG9iamVjdC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gLSBXaGV0aGVyIHRvIGluY2x1ZGUgdGhlIGVtb2ppLlxuICAgKi9cbiAgaXNFbW9qaU5lZWRlZChlbW9qaSkge1xuICAgIGlmICh0aGlzLl9lbW9qaXNGaWx0ZXIpIHtcbiAgICAgIHJldHVybiB0aGlzLl9lbW9qaXNGaWx0ZXIoZW1vamkpXG4gICAgfVxuICAgIHJldHVybiB0cnVlXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEVtb2ppRGF0YSB7XG4gIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICB0aGlzLl9kYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YSlcbiAgICB0aGlzLl9za2lucyA9IG51bGxcbiAgICBpZiAodGhpcy5fZGF0YS5za2luX3ZhcmlhdGlvbnMpIHtcbiAgICAgIHRoaXMuX3NraW5zID0gW11cbiAgICAgIGZvciAodmFyIHNraW5JZHggaW4gU0tJTlMpIHtcbiAgICAgICAgbGV0IHNraW5LZXkgPSBTS0lOU1tza2luSWR4XVxuICAgICAgICBsZXQgdmFyaWF0aW9uRGF0YSA9IHRoaXMuX2RhdGEuc2tpbl92YXJpYXRpb25zW3NraW5LZXldXG4gICAgICAgIGxldCBza2luRGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGEpXG4gICAgICAgIGZvciAobGV0IGsgaW4gdmFyaWF0aW9uRGF0YSkge1xuICAgICAgICAgIHNraW5EYXRhW2tdID0gdmFyaWF0aW9uRGF0YVtrXVxuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZSBza2luRGF0YS5za2luX3ZhcmlhdGlvbnNcbiAgICAgICAgc2tpbkRhdGFbJ3NraW5fdG9uZSddID0gcGFyc2VJbnQoc2tpbklkeCkgKyAxXG4gICAgICAgIHRoaXMuX3NraW5zLnB1c2gobmV3IEVtb2ppRGF0YShza2luRGF0YSkpXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX3Nhbml0aXplZCA9IHNhbml0aXplKHRoaXMuX2RhdGEpXG4gICAgZm9yIChsZXQga2V5IGluIHRoaXMuX3Nhbml0aXplZCkge1xuICAgICAgdGhpc1trZXldID0gdGhpcy5fc2FuaXRpemVkW2tleV1cbiAgICB9XG4gICAgdGhpcy5zaG9ydF9uYW1lcyA9IHRoaXMuX2RhdGEuc2hvcnRfbmFtZXNcbiAgICB0aGlzLnNob3J0X25hbWUgPSB0aGlzLl9kYXRhLnNob3J0X25hbWVzWzBdXG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKVxuICB9XG5cbiAgZ2V0U2tpbihza2luSWR4KSB7XG4gICAgaWYgKHNraW5JZHggJiYgc2tpbklkeCAhPSAnbmF0aXZlJyAmJiB0aGlzLl9za2lucykge1xuICAgICAgcmV0dXJuIHRoaXMuX3NraW5zW3NraW5JZHggLSAxXVxuICAgIH1cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgbGV0IGFkanVzdGVkQ29sdW1ucyA9IFNIRUVUX0NPTFVNTlMgLSAxLFxuICAgICAgeCA9ICsoKDEwMCAvIGFkanVzdGVkQ29sdW1ucykgKiB0aGlzLl9kYXRhLnNoZWV0X3gpLnRvRml4ZWQoMiksXG4gICAgICB5ID0gKygoMTAwIC8gYWRqdXN0ZWRDb2x1bW5zKSAqIHRoaXMuX2RhdGEuc2hlZXRfeSkudG9GaXhlZCgyKVxuICAgIHJldHVybiBgJHt4fSUgJHt5fSVgXG4gIH1cblxuICBhcmlhTGFiZWwoKSB7XG4gICAgcmV0dXJuIFt0aGlzLm5hdGl2ZV0uY29uY2F0KHRoaXMuc2hvcnRfbmFtZXMpLmZpbHRlcihCb29sZWFuKS5qb2luKCcsICcpXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEVtb2ppVmlldyB7XG4gIC8qKlxuICAgKiBlbW9qaSAtIEVtb2ppIHRvIGRpc3BsYXlcbiAgICogc2V0IC0gc3RyaW5nLCBlbW9qaSBzZXQgbmFtZVxuICAgKiBuYXRpdmUgLSBib29sZWFuLCB3aGV0aGVyIHRvIHJlbmRlciBuYXRpdmUgZW1vamlcbiAgICogZmFsbGJhY2sgLSBmYWxsYmFjayBmdW5jdGlvbiB0byByZW5kZXIgbWlzc2luZyBlbW9qaSwgb3B0aW9uYWxcbiAgICogZW1vamlUb29sdGlwIC0gd2V0aGVyIHdlIG5lZWQgdG8gc2hvdyB0aGUgZW1vamkgdG9vbHRpcCwgb3B0aW9uYWxcbiAgICogZW1vamlTaXplIC0gZW1vamkgc2l6ZSBpbiBwaXhlbHMsIG9wdGlvbmFsXG4gICAqL1xuICBjb25zdHJ1Y3RvcihlbW9qaSwgc2tpbiwgc2V0LCBuYXRpdmUsIGZhbGxiYWNrLCBlbW9qaVRvb2x0aXAsIGVtb2ppU2l6ZSkge1xuICAgIHRoaXMuX2Vtb2ppID0gZW1vamlcbiAgICB0aGlzLl9uYXRpdmUgPSBuYXRpdmVcbiAgICB0aGlzLl9za2luID0gc2tpblxuICAgIHRoaXMuX3NldCA9IHNldFxuICAgIHRoaXMuX2ZhbGxiYWNrID0gZmFsbGJhY2tcblxuICAgIHRoaXMuY2FuUmVuZGVyID0gdGhpcy5fY2FuUmVuZGVyKClcbiAgICB0aGlzLmNzc0NsYXNzID0gdGhpcy5fY3NzQ2xhc3MoKVxuICAgIHRoaXMuY3NzU3R5bGUgPSB0aGlzLl9jc3NTdHlsZShlbW9qaVNpemUpXG4gICAgdGhpcy5jb250ZW50ID0gdGhpcy5fY29udGVudCgpXG4gICAgdGhpcy50aXRsZSA9IGVtb2ppVG9vbHRpcCA9PT0gdHJ1ZSA/IGVtb2ppLnNob3J0X25hbWUgOiBudWxsXG4gICAgdGhpcy5hcmlhTGFiZWwgPSBlbW9qaS5hcmlhTGFiZWwoKVxuXG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKVxuICB9XG5cbiAgZ2V0RW1vamkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Vtb2ppLmdldFNraW4odGhpcy5fc2tpbilcbiAgfVxuXG4gIF9jYW5SZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuX2lzQ3VzdG9tKCkgfHwgdGhpcy5faXNOYXRpdmUoKSB8fCB0aGlzLl9oYXNFbW9qaSgpIHx8IHRoaXMuX2ZhbGxiYWNrXG4gICAgKVxuICB9XG5cbiAgX2Nzc0NsYXNzKCkge1xuICAgIHJldHVybiBbJ2Vtb2ppLXNldC0nICsgdGhpcy5fc2V0LCAnZW1vamktdHlwZS0nICsgdGhpcy5fZW1vamlUeXBlKCldXG4gIH1cblxuICBfY3NzU3R5bGUoZW1vamlTaXplKSB7XG4gICAgbGV0IGNzc1N0eWxlID0ge31cbiAgICBpZiAodGhpcy5faXNDdXN0b20oKSkge1xuICAgICAgY3NzU3R5bGUgPSB7XG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogJ3VybCgnICsgdGhpcy5nZXRFbW9qaSgpLl9kYXRhLmltYWdlVXJsICsgJyknLFxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogJzEwMCUnLFxuICAgICAgICB3aWR0aDogZW1vamlTaXplICsgJ3B4JyxcbiAgICAgICAgaGVpZ2h0OiBlbW9qaVNpemUgKyAncHgnLFxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5faGFzRW1vamkoKSAmJiAhdGhpcy5faXNOYXRpdmUoKSkge1xuICAgICAgY3NzU3R5bGUgPSB7XG4gICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogdGhpcy5nZXRFbW9qaSgpLmdldFBvc2l0aW9uKCksXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChlbW9qaVNpemUpIHtcbiAgICAgIGlmICh0aGlzLl9pc05hdGl2ZSgpKSB7XG4gICAgICAgIC8vIFNldCBmb250LXNpemUgZm9yIG5hdGl2ZSBlbW9qaS5cbiAgICAgICAgY3NzU3R5bGUgPSBPYmplY3QuYXNzaWduKGNzc1N0eWxlLCB7XG4gICAgICAgICAgLy8gZm9udC1zaXplIGlzIHVzZWQgZm9yIG5hdGl2ZSBlbW9qaSB3aGljaCB3ZSBuZWVkXG4gICAgICAgICAgLy8gdG8gc2NhbGUgd2l0aCAwLjk1IGZhY3RvciB0byBoYXZlIHRoZW0gbG9vayBhcHByb3hpbWF0ZWx5XG4gICAgICAgICAgLy8gdGhlIHNhbWUgc2l6ZSBhcyBpbWFnZS1iYXNlZCBlbW9qaS5cbiAgICAgICAgICBmb250U2l6ZTogTWF0aC5yb3VuZChlbW9qaVNpemUgKiAwLjk1ICogMTApIC8gMTAgKyAncHgnLFxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gU2V0IHdpZHRoL2hlaWdodCBmb3IgaW1hZ2UgZW1vamkuXG4gICAgICAgIGNzc1N0eWxlID0gT2JqZWN0LmFzc2lnbihjc3NTdHlsZSwge1xuICAgICAgICAgIHdpZHRoOiBlbW9qaVNpemUgKyAncHgnLFxuICAgICAgICAgIGhlaWdodDogZW1vamlTaXplICsgJ3B4JyxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNzc1N0eWxlXG4gIH1cblxuICBfY29udGVudCgpIHtcbiAgICBpZiAodGhpcy5faXNDdXN0b20oKSkge1xuICAgICAgcmV0dXJuICcnXG4gICAgfVxuICAgIGlmICh0aGlzLl9pc05hdGl2ZSgpKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRFbW9qaSgpLm5hdGl2ZVxuICAgIH1cbiAgICBpZiAodGhpcy5faGFzRW1vamkoKSkge1xuICAgICAgcmV0dXJuICcnXG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9mYWxsYmFjayA/IHRoaXMuX2ZhbGxiYWNrKHRoaXMuZ2V0RW1vamkoKSkgOiBudWxsXG4gIH1cblxuICBfaXNOYXRpdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hdGl2ZVxuICB9XG5cbiAgX2lzQ3VzdG9tKCkge1xuICAgIHJldHVybiB0aGlzLmdldEVtb2ppKCkuY3VzdG9tXG4gIH1cblxuICBfaGFzRW1vamkoKSB7XG4gICAgaWYgKCF0aGlzLmdldEVtb2ppKCkuX2RhdGEpIHtcbiAgICAgIC8vIFJldHVybiBmYWxzZSBpZiB3ZSBoYXZlIG5vIGRhdGEuXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgY29uc3QgaGFzSW1hZ2UgPSB0aGlzLmdldEVtb2ppKCkuX2RhdGFbJ2hhc19pbWdfJyArIHRoaXMuX3NldF1cbiAgICBpZiAoaGFzSW1hZ2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gSWYgdGhlcmUgaXMgbm8gaGFzX2ltZ194eHggaW4gdGhlIGRhdGEsIHdlIGFyZSB3b3JraW5nIHdpdGhcbiAgICAgIC8vIHNwZWNpZmljIGRhdGEgZmlsZSwgbGlrZSBmYWNlYm9vay5qc29uLCBzbyB3ZSBhc3N1bWUgYWxsXG4gICAgICAvLyBlbW9qaXMgYXJlIGF2YWlsYWJsZSAodGhlIDpzZXQgc2V0dGluZyBmb3IgcGlja2VyIHNob3VsZFxuICAgICAgLy8gbWF0Y2ggdGhlIGRhdGEgZmlsZSkuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICAvLyBPdGhlcndpc2UsIHdlIGFyZSB1c2luZyBhbGwuanNvbiBhbmQgY2FuIHN3aXRjaCBiZXR3ZWVuIGRpZmZlcmVudFxuICAgIC8vIHNldHMgLSBpbiB0aGlzIGNhc2UgdGhlIGBoYXNfaW1nX3tzZXRfbmFtZX1gIGlzIGEgYm9vbGVhbiB0aGF0XG4gICAgLy8gaW5kaWNhdGVzIGlmIHRoZXJlIGlzIHN1Y2ggaW1hZ2Ugb3Igbm90IGZvciBhIGdpdmVuIHNldC5cbiAgICByZXR1cm4gaGFzSW1hZ2VcbiAgfVxuXG4gIF9lbW9qaVR5cGUoKSB7XG4gICAgaWYgKHRoaXMuX2lzQ3VzdG9tKCkpIHtcbiAgICAgIHJldHVybiAnY3VzdG9tJ1xuICAgIH1cbiAgICBpZiAodGhpcy5faXNOYXRpdmUoKSkge1xuICAgICAgcmV0dXJuICduYXRpdmUnXG4gICAgfVxuICAgIGlmICh0aGlzLl9oYXNFbW9qaSgpKSB7XG4gICAgICByZXR1cm4gJ2ltYWdlJ1xuICAgIH1cbiAgICByZXR1cm4gJ2ZhbGxiYWNrJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYW5pdGl6ZShlbW9qaSkge1xuICB2YXIge1xuICAgICAgbmFtZSxcbiAgICAgIHNob3J0X25hbWVzLFxuICAgICAgc2tpbl90b25lLFxuICAgICAgc2tpbl92YXJpYXRpb25zLFxuICAgICAgZW1vdGljb25zLFxuICAgICAgdW5pZmllZCxcbiAgICAgIGN1c3RvbSxcbiAgICAgIGltYWdlVXJsLFxuICAgIH0gPSBlbW9qaSxcbiAgICBpZCA9IGVtb2ppLmlkIHx8IHNob3J0X25hbWVzWzBdLFxuICAgIGNvbG9ucyA9IGA6JHtpZH06YFxuXG4gIGlmIChjdXN0b20pIHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQsXG4gICAgICBuYW1lLFxuICAgICAgY29sb25zLFxuICAgICAgZW1vdGljb25zLFxuICAgICAgY3VzdG9tLFxuICAgICAgaW1hZ2VVcmwsXG4gICAgfVxuICB9XG5cbiAgaWYgKHNraW5fdG9uZSkge1xuICAgIGNvbG9ucyArPSBgOnNraW4tdG9uZS0ke3NraW5fdG9uZX06YFxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBpZCxcbiAgICBuYW1lLFxuICAgIGNvbG9ucyxcbiAgICBlbW90aWNvbnMsXG4gICAgdW5pZmllZDogdW5pZmllZC50b0xvd2VyQ2FzZSgpLFxuICAgIHNraW46IHNraW5fdG9uZSB8fCAoc2tpbl92YXJpYXRpb25zID8gMSA6IG51bGwpLFxuICAgIG5hdGl2ZTogdW5pZmllZFRvTmF0aXZlKHVuaWZpZWQpLFxuICB9XG59XG4iLCJpbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZSdcblxuY29uc3QgREVGQVVMVFMgPSBbXG4gICcrMScsXG4gICdncmlubmluZycsXG4gICdraXNzaW5nX2hlYXJ0JyxcbiAgJ2hlYXJ0X2V5ZXMnLFxuICAnbGF1Z2hpbmcnLFxuICAnc3R1Y2tfb3V0X3Rvbmd1ZV93aW5raW5nX2V5ZScsXG4gICdzd2VhdF9zbWlsZScsXG4gICdqb3knLFxuICAnc2NyZWFtJyxcbiAgJ2Rpc2FwcG9pbnRlZCcsXG4gICd1bmFtdXNlZCcsXG4gICd3ZWFyeScsXG4gICdzb2InLFxuICAnc3VuZ2xhc3NlcycsXG4gICdoZWFydCcsXG4gICdoYW5rZXknLFxuXVxuXG5sZXQgZnJlcXVlbnRseSwgaW5pdGlhbGl6ZWRcbmxldCBkZWZhdWx0cyA9IHt9XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gIGluaXRpYWxpemVkID0gdHJ1ZVxuICBmcmVxdWVudGx5ID0gc3RvcmUuZ2V0KCdmcmVxdWVudGx5Jylcbn1cblxuZnVuY3Rpb24gYWRkKGVtb2ppKSB7XG4gIGlmICghaW5pdGlhbGl6ZWQpIGluaXQoKVxuICB2YXIgeyBpZCB9ID0gZW1vamlcblxuICBmcmVxdWVudGx5IHx8IChmcmVxdWVudGx5ID0gZGVmYXVsdHMpXG4gIGZyZXF1ZW50bHlbaWRdIHx8IChmcmVxdWVudGx5W2lkXSA9IDApXG4gIGZyZXF1ZW50bHlbaWRdICs9IDFcblxuICBzdG9yZS5zZXQoJ2xhc3QnLCBpZClcbiAgc3RvcmUuc2V0KCdmcmVxdWVudGx5JywgZnJlcXVlbnRseSlcbn1cblxuZnVuY3Rpb24gZ2V0KG1heE51bWJlcikge1xuICBpZiAoIWluaXRpYWxpemVkKSBpbml0KClcbiAgaWYgKCFmcmVxdWVudGx5KSB7XG4gICAgZGVmYXVsdHMgPSB7fVxuXG4gICAgY29uc3QgcmVzdWx0ID0gW11cblxuICAgIGxldCBkZWZhdWx0TGVuZ3RoID0gTWF0aC5taW4obWF4TnVtYmVyLCBERUZBVUxUUy5sZW5ndGgpXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZWZhdWx0TGVuZ3RoOyBpKyspIHtcbiAgICAgIGRlZmF1bHRzW0RFRkFVTFRTW2ldXSA9IHBhcnNlSW50KChkZWZhdWx0TGVuZ3RoIC0gaSkgLyA0LCAxMCkgKyAxXG4gICAgICByZXN1bHQucHVzaChERUZBVUxUU1tpXSlcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICBjb25zdCBxdWFudGl0eSA9IG1heE51bWJlclxuICBjb25zdCBmcmVxdWVudGx5S2V5cyA9IFtdXG5cbiAgZm9yIChsZXQga2V5IGluIGZyZXF1ZW50bHkpIHtcbiAgICBpZiAoZnJlcXVlbnRseS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBmcmVxdWVudGx5S2V5cy5wdXNoKGtleSlcbiAgICB9XG4gIH1cblxuICBjb25zdCBzb3J0ZWQgPSBmcmVxdWVudGx5S2V5c1xuICAgIC5zb3J0KChhLCBiKSA9PiBmcmVxdWVudGx5W2FdIC0gZnJlcXVlbnRseVtiXSlcbiAgICAucmV2ZXJzZSgpXG4gIGNvbnN0IHNsaWNlZCA9IHNvcnRlZC5zbGljZSgwLCBxdWFudGl0eSlcblxuICBjb25zdCBsYXN0ID0gc3RvcmUuZ2V0KCdsYXN0JylcblxuICBpZiAobGFzdCAmJiBzbGljZWQuaW5kZXhPZihsYXN0KSA9PSAtMSkge1xuICAgIHNsaWNlZC5wb3AoKVxuICAgIHNsaWNlZC5wdXNoKGxhc3QpXG4gIH1cblxuICByZXR1cm4gc2xpY2VkXG59XG5cbmV4cG9ydCBkZWZhdWx0IHsgYWRkLCBnZXQgfVxuIiwiaW1wb3J0IHN0cmluZ0Zyb21Db2RlUG9pbnQgZnJvbSAnLi4vcG9seWZpbGxzL3N0cmluZ0Zyb21Db2RlUG9pbnQnXG5cbmZ1bmN0aW9uIHVuaWZpZWRUb05hdGl2ZSh1bmlmaWVkKSB7XG4gIHZhciB1bmljb2RlcyA9IHVuaWZpZWQuc3BsaXQoJy0nKSxcbiAgICBjb2RlUG9pbnRzID0gdW5pY29kZXMubWFwKCh1KSA9PiBgMHgke3V9YClcblxuICByZXR1cm4gc3RyaW5nRnJvbUNvZGVQb2ludC5hcHBseShudWxsLCBjb2RlUG9pbnRzKVxufVxuXG5mdW5jdGlvbiB1bmlxKGFycikge1xuICByZXR1cm4gYXJyLnJlZHVjZSgoYWNjLCBpdGVtKSA9PiB7XG4gICAgaWYgKGFjYy5pbmRleE9mKGl0ZW0pID09PSAtMSkge1xuICAgICAgYWNjLnB1c2goaXRlbSlcbiAgICB9XG4gICAgcmV0dXJuIGFjY1xuICB9LCBbXSlcbn1cblxuZnVuY3Rpb24gaW50ZXJzZWN0KGEsIGIpIHtcbiAgY29uc3QgdW5pcUEgPSB1bmlxKGEpXG4gIGNvbnN0IHVuaXFCID0gdW5pcShiKVxuXG4gIHJldHVybiB1bmlxQS5maWx0ZXIoKGl0ZW0pID0+IHVuaXFCLmluZGV4T2YoaXRlbSkgPj0gMClcbn1cblxuZnVuY3Rpb24gZGVlcE1lcmdlKGEsIGIpIHtcbiAgdmFyIG8gPSB7fVxuXG4gIGZvciAobGV0IGtleSBpbiBhKSB7XG4gICAgbGV0IG9yaWdpbmFsVmFsdWUgPSBhW2tleV0sXG4gICAgICB2YWx1ZSA9IG9yaWdpbmFsVmFsdWVcblxuICAgIGlmIChiLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHZhbHVlID0gYltrZXldXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHZhbHVlID0gZGVlcE1lcmdlKG9yaWdpbmFsVmFsdWUsIHZhbHVlKVxuICAgIH1cblxuICAgIG9ba2V5XSA9IHZhbHVlXG4gIH1cblxuICByZXR1cm4gb1xufVxuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vc29uaWNkb2UvbWVhc3VyZS1zY3JvbGxiYXJcbmZ1bmN0aW9uIG1lYXN1cmVTY3JvbGxiYXIoKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT0gJ3VuZGVmaW5lZCcpIHJldHVybiAwXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgZGl2LnN0eWxlLndpZHRoID0gJzEwMHB4J1xuICBkaXYuc3R5bGUuaGVpZ2h0ID0gJzEwMHB4J1xuICBkaXYuc3R5bGUub3ZlcmZsb3cgPSAnc2Nyb2xsJ1xuICBkaXYuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnXG4gIGRpdi5zdHlsZS50b3AgPSAnLTk5OTlweCdcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdilcbiAgY29uc3Qgc2Nyb2xsYmFyV2lkdGggPSBkaXYub2Zmc2V0V2lkdGggLSBkaXYuY2xpZW50V2lkdGhcbiAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkaXYpXG5cbiAgcmV0dXJuIHNjcm9sbGJhcldpZHRoXG59XG5cbmV4cG9ydCB7IHVuaXEsIGludGVyc2VjdCwgZGVlcE1lcmdlLCB1bmlmaWVkVG9OYXRpdmUsIG1lYXN1cmVTY3JvbGxiYXIgfVxuIiwiZXhwb3J0IGNsYXNzIFBpY2tlclZpZXcge1xuICBjb25zdHJ1Y3RvcihwaWNrZXJDb21wb25lbnQpIHtcbiAgICB0aGlzLl92bSA9IHBpY2tlckNvbXBvbmVudFxuICAgIHRoaXMuX2RhdGEgPSBwaWNrZXJDb21wb25lbnQuZGF0YVxuICAgIHRoaXMuX3BlckxpbmUgPSBwaWNrZXJDb21wb25lbnQucGVyTGluZVxuXG4gICAgdGhpcy5fY2F0ZWdvcmllcyA9IFtdXG4gICAgdGhpcy5fY2F0ZWdvcmllcy5wdXNoKC4uLnRoaXMuX2RhdGEuY2F0ZWdvcmllcygpKVxuICAgIHRoaXMuX2NhdGVnb3JpZXMgPSB0aGlzLl9jYXRlZ29yaWVzLmZpbHRlcigoY2F0ZWdvcnkpID0+IHtcbiAgICAgIHJldHVybiBjYXRlZ29yeS5lbW9qaXMubGVuZ3RoID4gMFxuICAgIH0pXG5cbiAgICB0aGlzLl9jYXRlZ29yaWVzWzBdLmZpcnN0ID0gdHJ1ZVxuICAgIE9iamVjdC5mcmVlemUodGhpcy5fY2F0ZWdvcmllcylcblxuICAgIHRoaXMuYWN0aXZlQ2F0ZWdvcnkgPSB0aGlzLl9jYXRlZ29yaWVzWzBdXG4gICAgdGhpcy5zZWFyY2hFbW9qaXMgPSBudWxsXG5cbiAgICAvLyBQcmV2aWV3IGVtb2ppLCBzaG93biBvbiBtb3VzZSBvdmVyIG9yIHdoZW4gd2UgbW92ZVxuICAgIC8vIHdpdGggYXJyb3cga2V5cy5cbiAgICB0aGlzLnByZXZpZXdFbW9qaSA9IG51bGxcbiAgICAvLyBJbmRleGVzIGFyZSB1c2VkIHRvIGtlZXAgdGhlIHBvc2l0aW9uIHdoZW4gbW92aW5nXG4gICAgLy8gd2l0aCBhcnJvd3M6IGN1cnJlbnQgY2F0ZWdvcnkgYW5kIGN1cnJlbnQgZW1vamlcbiAgICAvLyBpbnNpZGUgdGhlIGNhdGVnb3J5LlxuICAgIHRoaXMucHJldmlld0Vtb2ppQ2F0ZWdvcnlJZHggPSAwXG4gICAgdGhpcy5wcmV2aWV3RW1vamlJZHggPSAtMVxuICB9XG5cbiAgb25TY3JvbGwoKSB7XG4gICAgY29uc3Qgc2Nyb2xsRWxlbWVudCA9IHRoaXMuX3ZtLiRyZWZzLnNjcm9sbFxuICAgIGNvbnN0IHNjcm9sbFRvcCA9IHNjcm9sbEVsZW1lbnQuc2Nyb2xsVG9wXG5cbiAgICBsZXQgYWN0aXZlQ2F0ZWdvcnkgPSB0aGlzLmZpbHRlcmVkQ2F0ZWdvcmllc1swXVxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5maWx0ZXJlZENhdGVnb3JpZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgY2F0ZWdvcnkgPSB0aGlzLmZpbHRlcmVkQ2F0ZWdvcmllc1tpXVxuICAgICAgbGV0IGNvbXBvbmVudCA9IHRoaXMuX3ZtLmdldENhdGVnb3J5Q29tcG9uZW50KGkpXG4gICAgICAvLyBUaGUgYC01MGAgb2Zmc2V0IHN3aXRjaGVzIGFjdGl2ZSBjYXRlZ29yeSAoc2VsZWN0ZWQgaW4gdGhlXG4gICAgICAvLyBhbmNob3JzIGJhcikgYSBiaXQgZWFyaWxlciwgYmVmb3JlIGl0IGFjdHVhbGx5IHJlYWNoZXMgdGhlIHRvcC5cbiAgICAgIGlmIChjb21wb25lbnQgJiYgY29tcG9uZW50LiRlbC5vZmZzZXRUb3AgLSA1MCA+IHNjcm9sbFRvcCkge1xuICAgICAgICBicmVha1xuICAgICAgfVxuICAgICAgYWN0aXZlQ2F0ZWdvcnkgPSBjYXRlZ29yeVxuICAgIH1cbiAgICB0aGlzLmFjdGl2ZUNhdGVnb3J5ID0gYWN0aXZlQ2F0ZWdvcnlcbiAgfVxuXG4gIGdldCBhbGxDYXRlZ29yaWVzKCkge1xuICAgIHJldHVybiB0aGlzLl9jYXRlZ29yaWVzXG4gIH1cblxuICBnZXQgZmlsdGVyZWRDYXRlZ29yaWVzKCkge1xuICAgIGlmICh0aGlzLnNlYXJjaEVtb2ppcykge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAnc2VhcmNoJyxcbiAgICAgICAgICBuYW1lOiAnU2VhcmNoJyxcbiAgICAgICAgICBlbW9qaXM6IHRoaXMuc2VhcmNoRW1vamlzLFxuICAgICAgICB9LFxuICAgICAgXVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fY2F0ZWdvcmllcy5maWx0ZXIoKGNhdGVnb3J5KSA9PiB7XG4gICAgICBsZXQgaGFzRW1vamlzID0gY2F0ZWdvcnkuZW1vamlzLmxlbmd0aCA+IDBcbiAgICAgIHJldHVybiBoYXNFbW9qaXNcbiAgICB9KVxuICB9XG5cbiAgZ2V0IHByZXZpZXdFbW9qaUNhdGVnb3J5KCkge1xuICAgIGlmICh0aGlzLnByZXZpZXdFbW9qaUNhdGVnb3J5SWR4ID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLmZpbHRlcmVkQ2F0ZWdvcmllc1t0aGlzLnByZXZpZXdFbW9qaUNhdGVnb3J5SWR4XVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgb25BbmNob3JDbGljayhjYXRlZ29yeSkge1xuICAgIGlmICh0aGlzLnNlYXJjaEVtb2ppcykge1xuICAgICAgLy8gTm8gY2F0ZWdvcmllcyBhcmUgc2hvd24gd2hlbiBzZWFyY2ggaXMgYWN0aXZlLlxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGxldCBpID0gdGhpcy5maWx0ZXJlZENhdGVnb3JpZXMuaW5kZXhPZihjYXRlZ29yeSlcbiAgICBsZXQgY29tcG9uZW50ID0gdGhpcy5fdm0uZ2V0Q2F0ZWdvcnlDb21wb25lbnQoaSlcbiAgICBsZXQgc2Nyb2xsVG9Db21wb25lbnQgPSAoKSA9PiB7XG4gICAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICAgIGxldCB0b3AgPSBjb21wb25lbnQuJGVsLm9mZnNldFRvcFxuICAgICAgICBpZiAoY2F0ZWdvcnkuZmlyc3QpIHtcbiAgICAgICAgICB0b3AgPSAwXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fdm0uJHJlZnMuc2Nyb2xsLnNjcm9sbFRvcCA9IHRvcFxuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5fdm0uaW5maW5pdGVTY3JvbGwpIHtcbiAgICAgIHNjcm9sbFRvQ29tcG9uZW50KClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hY3RpdmVDYXRlZ29yeSA9IHRoaXMuZmlsdGVyZWRDYXRlZ29yaWVzW2ldXG4gICAgfVxuICB9XG5cbiAgb25TZWFyY2godmFsdWUpIHtcbiAgICBsZXQgZW1vamlzID0gdGhpcy5fZGF0YS5zZWFyY2godmFsdWUsIHRoaXMubWF4U2VhcmNoUmVzdWx0cylcbiAgICB0aGlzLnNlYXJjaEVtb2ppcyA9IGVtb2ppc1xuXG4gICAgdGhpcy5wcmV2aWV3RW1vamlDYXRlZ29yeUlkeCA9IDBcbiAgICB0aGlzLnByZXZpZXdFbW9qaUlkeCA9IDBcbiAgICB0aGlzLnVwZGF0ZVByZXZpZXdFbW9qaSgpXG4gIH1cblxuICBvbkVtb2ppRW50ZXIoZW1vamkpIHtcbiAgICB0aGlzLnByZXZpZXdFbW9qaSA9IGVtb2ppXG4gICAgdGhpcy5wcmV2aWV3RW1vamlJZHggPSAtMVxuICAgIHRoaXMucHJldmlld0Vtb2ppQ2F0ZWdvcnlJZHggPSAtMVxuICB9XG5cbiAgb25FbW9qaUxlYXZlKGVtb2ppKSB7XG4gICAgdGhpcy5wcmV2aWV3RW1vamkgPSBudWxsXG4gIH1cblxuICBvbkFycm93TGVmdCgpIHtcbiAgICAvLyBNb3ZpbmcgbGVmdCwgZGVjcmVhc2UgZW1vamkgaW5kZXguXG4gICAgaWYgKHRoaXMucHJldmlld0Vtb2ppSWR4ID4gMCkge1xuICAgICAgdGhpcy5wcmV2aWV3RW1vamlJZHggLT0gMVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJZiBlbW9qaSBpbmRleCBpcyB6ZXJvLCBnbyB0byB0aGUgcHJldmlvdXMgY2F0ZWdvcnkuXG4gICAgICB0aGlzLnByZXZpZXdFbW9qaUNhdGVnb3J5SWR4IC09IDFcbiAgICAgIGlmICh0aGlzLnByZXZpZXdFbW9qaUNhdGVnb3J5SWR4IDwgMCkge1xuICAgICAgICAvLyBJZiB3ZSByZWFjaGVkIGZpcnN0IGNhdGVnb3J5LCBrZWVwIGl0LlxuICAgICAgICB0aGlzLnByZXZpZXdFbW9qaUNhdGVnb3J5SWR4ID0gMFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVXBkYXRlIGVtb2ppIGluZGV4IC0gd2UgbW92ZWQgdG8gdGhlIHByZXZpb3VzIGNhdGVnb3J5LFxuICAgICAgICAvLyBnZXQgdGhlIGxhc3QgZW1vamkgaW4gaXQuXG4gICAgICAgIHRoaXMucHJldmlld0Vtb2ppSWR4ID1cbiAgICAgICAgICB0aGlzLmZpbHRlcmVkQ2F0ZWdvcmllc1t0aGlzLnByZXZpZXdFbW9qaUNhdGVnb3J5SWR4XS5lbW9qaXMubGVuZ3RoIC1cbiAgICAgICAgICAxXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMudXBkYXRlUHJldmlld0Vtb2ppKClcbiAgfVxuXG4gIG9uQXJyb3dSaWdodCgpIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLnByZXZpZXdFbW9qaUlkeCA8XG4gICAgICB0aGlzLmVtb2ppc0xlbmd0aCh0aGlzLnByZXZpZXdFbW9qaUNhdGVnb3J5SWR4KSAtIDFcbiAgICApIHtcbiAgICAgIC8vIE1vdmluZyByaWdodCB3aXRoaW4gY2F0ZWdvcnksIGluY3JlYXNlIGVtb2ppIGluZGV4LlxuICAgICAgdGhpcy5wcmV2aWV3RW1vamlJZHggKz0gMVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBHbyB0byB0aGUgbmV4dCBjYXRlZ29yeS5cbiAgICAgIHRoaXMucHJldmlld0Vtb2ppQ2F0ZWdvcnlJZHggKz0gMVxuICAgICAgaWYgKHRoaXMucHJldmlld0Vtb2ppQ2F0ZWdvcnlJZHggPj0gdGhpcy5maWx0ZXJlZENhdGVnb3JpZXMubGVuZ3RoKSB7XG4gICAgICAgIC8vIElmIHdlIHJlYWNoZWQgdGhlIGxhc3QgY2F0ZWdvcnkgLSBrZWVwIGl0LlxuICAgICAgICB0aGlzLnByZXZpZXdFbW9qaUNhdGVnb3J5SWR4ID0gdGhpcy5maWx0ZXJlZENhdGVnb3JpZXMubGVuZ3RoIC0gMVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSWYgd2UgbW92ZWQgdG8gdGhlIG5leHQgY2F0ZWdvcnksIHVwZGF0ZSBlbW9qaSBpbmRleCB0byB0aGVcbiAgICAgICAgLy8gZmlyc3QgZW1vamkgaW4gdGhlIG5ldyBjYXRlZ29yeS5cbiAgICAgICAgdGhpcy5wcmV2aWV3RW1vamlJZHggPSAwXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMudXBkYXRlUHJldmlld0Vtb2ppKClcbiAgfVxuXG4gIG9uQXJyb3dEb3duKCkge1xuICAgIC8vIElmIHdlIGFyZSBvdXQgb2YgdGhlIGVtb2ppIGNvbnRyb2wgKGluZGV4IGlzIC0xKSwgc2VsZWN0IHRoZSBmaXJzdFxuICAgIC8vIGVtb2ppIGluIHRoZSBmaXJzdCBjYXRlZ29yeSBieSBjYWxsaW5nIGBvbkFycm93UmlnaHRgLlxuICAgIGlmICh0aGlzLnByZXZpZXdFbW9qaUlkeCA9PSAtMSkge1xuICAgICAgcmV0dXJuIHRoaXMub25BcnJvd1JpZ2h0KClcbiAgICB9XG5cbiAgICBjb25zdCBjYXRlZ29yeUxlbmd0aCA9XG4gICAgICB0aGlzLmZpbHRlcmVkQ2F0ZWdvcmllc1t0aGlzLnByZXZpZXdFbW9qaUNhdGVnb3J5SWR4XS5lbW9qaXMubGVuZ3RoXG5cbiAgICAvLyBXaGVuIG1vdmluZyBkb3duLCB3ZSBjYW4gbW92ZSBgX3BlckxpbmVgIGljb25zIHJpZ2h0IHRvXG4gICAgLy8ganVtcCB0byB0aGUgc2FtZSBwb3NpdGlvbiBpbiB0aGUgbmV4dCByb3cuXG4gICAgbGV0IGRpZmYgPSB0aGlzLl9wZXJMaW5lXG5cbiAgICAvLyBUT0RPOiBwcmV2aWV3Q2F0ZWdvcnkgc2hvdWxkIG1hdGNoIGFjdGl2ZUNhdGVnb3J5XG4gICAgLy8gKHNvIGl0IHdvdWxkIGJlIGJvdGggaGlnaGxpZ2h0ZWQgaW4gVUkgYW5kIHVzZWRcbiAgICAvLyB3aGVuIHdlIHN0YXJ0IG1vdmluZyB3aXRoIGFycm93cyBhZnRlciBjbGlja2luZ1xuICAgIC8vIHRoZSBjYXRlZ29yeSkuXG5cbiAgICAvLyBOb3RlOiBwcm9iYWJseSB3ZSBjYW4gYWx3YXN5IHRha2UgY3VycmVudCByb3cgbGVuZ3RoXG4gICAgLy8gYXMgYSBgZGlmZmAgLSBpdCB3aWxsIGZpdCBib3RoIGNhc2Ugb2YgYW55IHJvdyBhbmRcbiAgICAvLyBzcGVjaWFsIGNhc2Ugb2YgdGhlIGxhc3Qgcm93LlxuICAgIC8vIE5vdGU6IGl0IGNhbiBiZSBhbHNvIGVhc2llciB0byB1cGRhdGUgaW5kZXhlc1xuICAgIC8vIGRpcmVjdGx5IGhlcmUgaW5zdGVhZCBvZiBjYWxsaW5nIG9uQXJyb3dSaWdodC5cbiAgICAvLyBTYW1lIGlzIHRydWUgZm9yIGBvbkFycm93VXBgLlxuXG4gICAgLy8gVW5sZXNzIGlmIHdlIGFyZSBvbiB0aGUgbGFzdCByb3cgb2YgdGhlIGNhdGVnb3J5IGFuZFxuICAgIC8vIHRoZXJlIGFyZSBsZXNzIHRoZW4gYF9wZXJMaW5lYCBlbW9qaXMgaW4gaXQuXG4gICAgLy8gSW4gdGhpcyBjYXNlIHdlIHVzZSB0aGUgbGFzdCByb3cgbGVuZ3RoIGFzIGRpZmZcbiAgICAvLyBzbyB3ZSBnbyBzdHJhaWdodCBkb3duLCBmb3IgZXhhbXBsZTpcbiAgICAvL1xuICAgIC8vICAgMSAyIDMgNCA1IDZcbiAgICAvLyAgIDcgOCA5XG4gICAgLy8gICBBIEIgQyBEIEUgRlxuICAgIC8vXG4gICAgLy8gSWYgd2UgZ28gZG93biBmcm9tIGA4YCwgd2UgbmVlZCB0byBtb3ZlIDMgZW1vamlzIHJpZ2h0XG4gICAgLy8gdG8gbGVuZCBhdCBgQmAgKGFuZCAzIGlzIHRoZSBsZW5ndGggb2YgdGhlIGxhc3Qgcm93IG9mXG4gICAgLy8gdGhpcyBjYXRlZ29yeSkuXG4gICAgLy8gQW5kIGlmIHdlIHVzZWQgNiBpbnN0ZWFkIChyb3cgbGVuZ3RoLCBgX3BlckxpbmVgKSwgd2Ugd291bGRcbiAgICAvLyBsZW5kIHVwIGF0IGBFYC5cbiAgICBpZiAodGhpcy5wcmV2aWV3RW1vamlJZHggKyBkaWZmID4gY2F0ZWdvcnlMZW5ndGgpIHtcbiAgICAgIC8vIENhbGN1bGF0ZSB0aGUgbGFzdCByb3cgbGVuZ3RoLlxuICAgICAgZGlmZiA9IGNhdGVnb3J5TGVuZ3RoICUgdGhpcy5fcGVyTGluZVxuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpZmY7IGkrKykge1xuICAgICAgdGhpcy5vbkFycm93UmlnaHQoKVxuICAgIH1cbiAgICB0aGlzLnVwZGF0ZVByZXZpZXdFbW9qaSgpXG4gIH1cblxuICBvbkFycm93VXAoKSB7XG4gICAgLy8gU2ltaWxhciB0byBgb25BcnJvd0Rvd25gLCB0byBtb3ZlIHVwIHdlIGNhbiBtb3ZlIGxlZnRcbiAgICAvLyBieSBgX3BlckxpbmVgIG51bWJlciBvZiBlbW9qaXMuXG4gICAgbGV0IGRpZmYgPSB0aGlzLl9wZXJMaW5lXG5cbiAgICBpZiAodGhpcy5wcmV2aWV3RW1vamlJZHggLSBkaWZmIDwgMCkge1xuICAgICAgaWYgKHRoaXMucHJldmlld0Vtb2ppQ2F0ZWdvcnlJZHggPiAwKSB7XG4gICAgICAgIC8vIFVubGVzcyBpZiB3ZSBhcmUgb24gdGhlIGZpcnN0IGxpbmUgb2YgdGhlIGNhdGVnb3J5IGFuZFxuICAgICAgICAvLyB0aGUgbGFzdCBsaW5lIGluIHRoZSBwcmV2aW91cyBjYXRlZ29yeSBpcyBzaG9ydGVyIHRoYW5cbiAgICAgICAgLy8gYF9wZXJMaW5lYC5cbiAgICAgICAgLy8gSW4gdGhpcyBjYXNlIHdlIHVzZSB0aGUgbGFzdCByb3cgbGVuZ3RoIGFzIGRpZmYsIHNvXG4gICAgICAgIC8vIHdlIGdvIHN0cmFpZ2h0IHVwLCBmb3IgZXhhbXBsZTpcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICAxIDIgMyA0IDVcbiAgICAgICAgLy8gICA2IDcgOFxuICAgICAgICAvLyAgIDkgQSBCIEMgRFxuICAgICAgICAvL1xuICAgICAgICAvLyBJZiB3ZSBnbyB1cCBmcm9tIGBBYCwgd2UgbmVlZCB0byBtb3ZlIDMgZW1vamlzIGxlZnQgdG8gZ2V0XG4gICAgICAgIC8vIHRvIGA3YCAoYW5kIDMgaXMgdGhlIGxlbmd0aCBvZiB0aGUgbGFzdCByb3cgb2YgdGhlIHByZXZpb3VzXG4gICAgICAgIC8vIGNhdGVnb3J5KS5cbiAgICAgICAgY29uc3QgcHJldkNhdGVnb3J5TGFzdFJvd0xlbmd0aCA9XG4gICAgICAgICAgdGhpcy5maWx0ZXJlZENhdGVnb3JpZXNbdGhpcy5wcmV2aWV3RW1vamlDYXRlZ29yeUlkeCAtIDFdLmVtb2ppc1xuICAgICAgICAgICAgLmxlbmd0aCAlIHRoaXMuX3BlckxpbmVcbiAgICAgICAgLy8gZGlmZiA9IHRoaXMucHJldmlld0Vtb2ppSWR4ICsgcHJldkNhdGVnb3J5TGFzdFJvd0xlbmd0aFxuICAgICAgICBkaWZmID0gcHJldkNhdGVnb3J5TGFzdFJvd0xlbmd0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGlmZiA9IDBcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaWZmOyBpKyspIHtcbiAgICAgIHRoaXMub25BcnJvd0xlZnQoKVxuICAgIH1cbiAgICB0aGlzLnVwZGF0ZVByZXZpZXdFbW9qaSgpXG4gIH1cblxuICB1cGRhdGVQcmV2aWV3RW1vamkoKSB7XG4gICAgdGhpcy5wcmV2aWV3RW1vamkgPVxuICAgICAgdGhpcy5maWx0ZXJlZENhdGVnb3JpZXNbdGhpcy5wcmV2aWV3RW1vamlDYXRlZ29yeUlkeF0uZW1vamlzW1xuICAgICAgICB0aGlzLnByZXZpZXdFbW9qaUlkeFxuICAgICAgXVxuXG4gICAgdGhpcy5fdm0uJG5leHRUaWNrKCgpID0+IHtcbiAgICAgIC8vIFNjcm9sbCB0aGUgdmlldyBpZiB0aGUgYHByZXZpZXdFbW9qaWAgZ29lcyBvdXQgb2YgdGhlIHZpc2libGUgYXJlYS5cbiAgICAgIGNvbnN0IHNjcm9sbEVsID0gdGhpcy5fdm0uJHJlZnMuc2Nyb2xsXG5cbiAgICAgIC8vIE5vdGU6IGl0IHdvdWxkIGJlIG1vcmUgVnVlLWlzaCB0byBtYXJrIGFsbCBlbW9qaXMgd2l0aCBgcmVmYHNcbiAgICAgIC8vIGFuZCB0aGVuIGRvIHNvbWV0aGluZyBzaW1pbGFyIGhlcmUgdG8gd2hhdCB3ZSBkbyBpbiB0aGVcbiAgICAgIC8vIGBnZXRDYXRlZ29yaWVzYCBpbnN0ZWFkIG9mIHVzaW5nIGBxdWVyeVNlbGVjdG9yYCBkaXJlY3RseSxcbiAgICAgIC8vIGJ1dCBJIGFtIG5vdCBzdXJlIGlmIGhhdmluZyBtYW55IHJlZnMgd291bGQgYWZmZWN0IHRoZSBwZXJmb3JtYW5jZVxuICAgICAgLy8gKGl0IG1pZ2h0LCBzbyBJIHVzZSBgcXVlcnlTZWxlY3RvcmAgZm9yIG5vdykuXG4gICAgICBjb25zdCBlbW9qaUVsID0gc2Nyb2xsRWwucXVlcnlTZWxlY3RvcignLmVtb2ppLW1hcnQtZW1vamktc2VsZWN0ZWQnKVxuXG4gICAgICBjb25zdCBzY3JvbGxIZWlnaHQgPSBzY3JvbGxFbC5vZmZzZXRUb3AgLSBzY3JvbGxFbC5vZmZzZXRIZWlnaHRcbiAgICAgIGlmIChcbiAgICAgICAgZW1vamlFbCAmJlxuICAgICAgICBlbW9qaUVsLm9mZnNldFRvcCArIGVtb2ppRWwub2Zmc2V0SGVpZ2h0ID5cbiAgICAgICAgICBzY3JvbGxIZWlnaHQgKyBzY3JvbGxFbC5zY3JvbGxUb3BcbiAgICAgICkge1xuICAgICAgICBzY3JvbGxFbC5zY3JvbGxUb3AgKz0gZW1vamlFbC5vZmZzZXRIZWlnaHRcbiAgICAgIH1cbiAgICAgIGlmIChlbW9qaUVsICYmIGVtb2ppRWwub2Zmc2V0VG9wIDwgc2Nyb2xsRWwuc2Nyb2xsVG9wKSB7XG4gICAgICAgIHNjcm9sbEVsLnNjcm9sbFRvcCAtPSBlbW9qaUVsLm9mZnNldEhlaWdodFxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBlbW9qaXNMZW5ndGgoY2F0ZWdvcnlJZHgpIHtcbiAgICBpZiAoY2F0ZWdvcnlJZHggPT0gLTEpIHtcbiAgICAgIHJldHVybiAwXG4gICAgfVxuICAgIHJldHVybiB0aGlzLmZpbHRlcmVkQ2F0ZWdvcmllc1tjYXRlZ29yeUlkeF0uZW1vamlzLmxlbmd0aFxuICB9XG59XG4iLCJjb25zdCBFbW9qaVByb3BzID0ge1xuICBuYXRpdmU6IHtcbiAgICB0eXBlOiBCb29sZWFuLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICB9LFxuICB0b29sdGlwOiB7XG4gICAgdHlwZTogQm9vbGVhbixcbiAgICBkZWZhdWx0OiBmYWxzZSxcbiAgfSxcbiAgZmFsbGJhY2s6IHtcbiAgICB0eXBlOiBGdW5jdGlvbixcbiAgfSxcbiAgc2tpbjoge1xuICAgIHR5cGU6IE51bWJlcixcbiAgICBkZWZhdWx0OiAxLFxuICB9LFxuICBzZXQ6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgZGVmYXVsdDogJ2FwcGxlJyxcbiAgfSxcbiAgZW1vamk6IHtcbiAgICB0eXBlOiBbU3RyaW5nLCBPYmplY3RdLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICB9LFxuICBzaXplOiB7XG4gICAgdHlwZTogTnVtYmVyLFxuICAgIGRlZmF1bHQ6IG51bGwsXG4gIH0sXG4gIHRhZzoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBkZWZhdWx0OiAnc3BhbicsXG4gIH0sXG59XG5cbmNvbnN0IFBpY2tlclByb3BzID0ge1xuICBwZXJMaW5lOiB7XG4gICAgdHlwZTogTnVtYmVyLFxuICAgIGRlZmF1bHQ6IDksXG4gIH0sXG4gIG1heFNlYXJjaFJlc3VsdHM6IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gICAgZGVmYXVsdDogNzUsXG4gIH0sXG4gIGVtb2ppU2l6ZToge1xuICAgIHR5cGU6IE51bWJlcixcbiAgICBkZWZhdWx0OiAyNCxcbiAgfSxcbiAgdGl0bGU6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgZGVmYXVsdDogJ0Vtb2ppIE1hcnTihKInLFxuICB9LFxuICBlbW9qaToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBkZWZhdWx0OiAnZGVwYXJ0bWVudF9zdG9yZScsXG4gIH0sXG4gIGNvbG9yOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGRlZmF1bHQ6ICcjYWU2NWM1JyxcbiAgfSxcbiAgc2V0OiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGRlZmF1bHQ6ICdhcHBsZScsXG4gIH0sXG4gIHNraW46IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gICAgZGVmYXVsdDogbnVsbCxcbiAgfSxcbiAgZGVmYXVsdFNraW46IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gICAgZGVmYXVsdDogMSxcbiAgfSxcbiAgbmF0aXZlOiB7XG4gICAgdHlwZTogQm9vbGVhbixcbiAgICBkZWZhdWx0OiBmYWxzZSxcbiAgfSxcbiAgZW1vamlUb29sdGlwOiB7XG4gICAgdHlwZTogQm9vbGVhbixcbiAgICBkZWZhdWx0OiBmYWxzZSxcbiAgfSxcbiAgYXV0b0ZvY3VzOiB7XG4gICAgdHlwZTogQm9vbGVhbixcbiAgICBkZWZhdWx0OiBmYWxzZSxcbiAgfSxcbiAgaTE4bjoge1xuICAgIHR5cGU6IE9iamVjdCxcbiAgICBkZWZhdWx0KCkge1xuICAgICAgcmV0dXJuIHt9XG4gICAgfSxcbiAgfSxcbiAgc2hvd1ByZXZpZXc6IHtcbiAgICB0eXBlOiBCb29sZWFuLFxuICAgIGRlZmF1bHQ6IHRydWUsXG4gIH0sXG4gIHNob3dTZWFyY2g6IHtcbiAgICB0eXBlOiBCb29sZWFuLFxuICAgIGRlZmF1bHQ6IHRydWUsXG4gIH0sXG4gIHNob3dDYXRlZ29yaWVzOiB7XG4gICAgdHlwZTogQm9vbGVhbixcbiAgICBkZWZhdWx0OiB0cnVlLFxuICB9LFxuICBzaG93U2tpblRvbmVzOiB7XG4gICAgdHlwZTogQm9vbGVhbixcbiAgICBkZWZhdWx0OiB0cnVlLFxuICB9LFxuICBpbmZpbml0ZVNjcm9sbDoge1xuICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgZGVmYXVsdDogdHJ1ZSxcbiAgfSxcbiAgcGlja2VyU3R5bGVzOiB7XG4gICAgdHlwZTogT2JqZWN0LFxuICAgIGRlZmF1bHQoKSB7XG4gICAgICByZXR1cm4ge31cbiAgICB9LFxuICB9LFxufVxuXG5leHBvcnQgeyBFbW9qaVByb3BzLCBQaWNrZXJQcm9wcyB9XG4iLCJ2YXIgTkFNRVNQQUNFID0gJ2Vtb2ppLW1hcnQnXG5cbmNvbnN0IF9KU09OID0gSlNPTlxuXG52YXIgaXNMb2NhbFN0b3JhZ2VTdXBwb3J0ZWQgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAnbG9jYWxTdG9yYWdlJyBpbiB3aW5kb3dcblxubGV0IGdldHRlclxubGV0IHNldHRlclxuXG5mdW5jdGlvbiBzZXRIYW5kbGVycyhoYW5kbGVycykge1xuICBoYW5kbGVycyB8fCAoaGFuZGxlcnMgPSB7fSlcblxuICBnZXR0ZXIgPSBoYW5kbGVycy5nZXR0ZXJcbiAgc2V0dGVyID0gaGFuZGxlcnMuc2V0dGVyXG59XG5cbmZ1bmN0aW9uIHNldE5hbWVzcGFjZShuYW1lc3BhY2UpIHtcbiAgTkFNRVNQQUNFID0gbmFtZXNwYWNlXG59XG5cbmZ1bmN0aW9uIHVwZGF0ZShzdGF0ZSkge1xuICBmb3IgKGxldCBrZXkgaW4gc3RhdGUpIHtcbiAgICBsZXQgdmFsdWUgPSBzdGF0ZVtrZXldXG4gICAgc2V0KGtleSwgdmFsdWUpXG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0KGtleSwgdmFsdWUpIHtcbiAgaWYgKHNldHRlcikge1xuICAgIHNldHRlcihrZXksIHZhbHVlKVxuICB9IGVsc2Uge1xuICAgIGlmICghaXNMb2NhbFN0b3JhZ2VTdXBwb3J0ZWQpIHJldHVyblxuICAgIHRyeSB7XG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlW2Ake05BTUVTUEFDRX0uJHtrZXl9YF0gPSBfSlNPTi5zdHJpbmdpZnkodmFsdWUpXG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXQoa2V5KSB7XG4gIGlmIChnZXR0ZXIpIHtcbiAgICByZXR1cm4gZ2V0dGVyKGtleSlcbiAgfSBlbHNlIHtcbiAgICBpZiAoIWlzTG9jYWxTdG9yYWdlU3VwcG9ydGVkKSByZXR1cm5cbiAgICB0cnkge1xuICAgICAgdmFyIHZhbHVlID0gd2luZG93LmxvY2FsU3RvcmFnZVtgJHtOQU1FU1BBQ0V9LiR7a2V5fWBdXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZSh2YWx1ZSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgeyB1cGRhdGUsIHNldCwgZ2V0LCBzZXROYW1lc3BhY2UsIHNldEhhbmRsZXJzIH1cbiIsIi8vIGh0dHA6Ly9wYXVsaXJpc2guY29tLzIwMTEvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1hbmltYXRpbmcvXG4vLyBodHRwOi8vbXkub3BlcmEuY29tL2Vtb2xsZXIvYmxvZy8yMDExLzEyLzIwL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtZXItYW5pbWF0aW5nXG5cbi8vIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbCBieSBFcmlrIE3DtmxsZXIuIGZpeGVzIGZyb20gUGF1bCBJcmlzaCBhbmQgVGlubyBaaWpkZWxcblxuLy8gTUlUIGxpY2Vuc2VcblxudmFyIGlzV2luZG93QXZhaWxhYmxlID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcblxuaXNXaW5kb3dBdmFpbGFibGUgJiZcbiAgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbGFzdFRpbWUgPSAwXG4gICAgdmFyIHZlbmRvcnMgPSBbJ21zJywgJ21veicsICd3ZWJraXQnLCAnbyddXG5cbiAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHZlbmRvcnMubGVuZ3RoICYmICF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lOyArK3gpIHtcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPVxuICAgICAgICB3aW5kb3dbdmVuZG9yc1t4XSArICdSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXVxuICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID1cbiAgICAgICAgd2luZG93W3ZlbmRvcnNbeF0gKyAnQ2FuY2VsQW5pbWF0aW9uRnJhbWUnXSB8fFxuICAgICAgICB3aW5kb3dbdmVuZG9yc1t4XSArICdDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXVxuICAgIH1cblxuICAgIGlmICghd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSlcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIGN1cnJUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKClcbiAgICAgICAgdmFyIHRpbWVUb0NhbGwgPSBNYXRoLm1heCgwLCAxNiAtIChjdXJyVGltZSAtIGxhc3RUaW1lKSlcbiAgICAgICAgdmFyIGlkID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNhbGxiYWNrKGN1cnJUaW1lICsgdGltZVRvQ2FsbClcbiAgICAgICAgfSwgdGltZVRvQ2FsbClcblxuICAgICAgICBsYXN0VGltZSA9IGN1cnJUaW1lICsgdGltZVRvQ2FsbFxuICAgICAgICByZXR1cm4gaWRcbiAgICAgIH1cblxuICAgIGlmICghd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKVxuICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIGNsZWFyVGltZW91dChpZClcbiAgICAgIH1cbiAgfSkoKVxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9FbW9qaS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTM0YWQ5NDYmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRW1vamkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9FbW9qaS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9zZWIvd2ViL2Vtb2ppLW1hcnQvZW1vamktbWFydC12dWUvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNTM0YWQ5NDYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNTM0YWQ5NDYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNTM0YWQ5NDYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0Vtb2ppLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MzRhZDk0NiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1MzRhZDk0NicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvRW1vamkudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9QaWNrZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWQxNmU5MDg0JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1BpY2tlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1BpY2tlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9zZWIvd2ViL2Vtb2ppLW1hcnQvZW1vamktbWFydC12dWUvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnZDE2ZTkwODQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnZDE2ZTkwODQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnZDE2ZTkwODQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1BpY2tlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZDE2ZTkwODQmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZDE2ZTkwODQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL1BpY2tlci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2FuY2hvcnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUxMTg4MTA0JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2FuY2hvcnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9hbmNob3JzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3NlYi93ZWIvZW1vamktbWFydC9lbW9qaS1tYXJ0LXZ1ZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc1MTE4ODEwNCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc1MTE4ODEwNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc1MTE4ODEwNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vYW5jaG9ycy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTExODgxMDQmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNTExODgxMDQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL2FuY2hvcnMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9jYXRlZ29yeS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Mzc2Y2RhMGUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vY2F0ZWdvcnkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9jYXRlZ29yeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9zZWIvd2ViL2Vtb2ppLW1hcnQvZW1vamktbWFydC12dWUvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMzc2Y2RhMGUnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMzc2Y2RhMGUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMzc2Y2RhMGUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2NhdGVnb3J5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNzZjZGEwZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczNzZjZGEwZScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvY2F0ZWdvcnkudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9wcmV2aWV3LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNTA1NmMzMCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9wcmV2aWV3LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vcHJldmlldy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9zZWIvd2ViL2Vtb2ppLW1hcnQvZW1vamktbWFydC12dWUvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMzUwNTZjMzAnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMzUwNTZjMzAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMzUwNTZjMzAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3ByZXZpZXcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM1MDU2YzMwJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzM1MDU2YzMwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9wcmV2aWV3LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vc2VhcmNoLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00YWQ0MWJiOCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9zZWFyY2gudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9zZWFyY2gudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvc2ViL3dlYi9lbW9qaS1tYXJ0L2Vtb2ppLW1hcnQtdnVlL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzRhZDQxYmI4JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzRhZDQxYmI4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzRhZDQxYmI4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9zZWFyY2gudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRhZDQxYmI4JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzRhZDQxYmI4Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9zZWFyY2gudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9za2lucy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWM2MTQ4OTQmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vc2tpbnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9za2lucy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9zZWIvd2ViL2Vtb2ppLW1hcnQvZW1vamktbWFydC12dWUvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMWM2MTQ4OTQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMWM2MTQ4OTQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMWM2MTQ4OTQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3NraW5zLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xYzYxNDg5NCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxYzYxNDg5NCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvc2tpbnMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Vtb2ppLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Vtb2ppLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2UhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QaWNrZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGlja2VyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2UhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9hbmNob3JzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FuY2hvcnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NhdGVnb3J5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NhdGVnb3J5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2UhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wcmV2aWV3LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3ByZXZpZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NlYXJjaC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2UhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zZWFyY2gudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NraW5zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NraW5zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FbW9qaS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTM0YWQ5NDYmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGlja2VyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kMTZlOTA4NCZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9hbmNob3JzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MTE4ODEwNCZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jYXRlZ29yeS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Mzc2Y2RhMGUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcHJldmlldy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzUwNTZjMzAmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2VhcmNoLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00YWQ0MWJiOCZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9za2lucy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWM2MTQ4OTQmXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfdm0udmlldy5jYW5SZW5kZXJcbiAgICA/IF9jKFxuICAgICAgICBfdm0udGFnLFxuICAgICAgICB7XG4gICAgICAgICAgdGFnOiBcImNvbXBvbmVudFwiLFxuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtZW1vamlcIixcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgdGl0bGU6IF92bS52aWV3LnRpdGxlLFxuICAgICAgICAgICAgXCJhcmlhLWxhYmVsXCI6IF92bS52aWV3LmFyaWFMYWJlbCxcbiAgICAgICAgICAgIFwiZGF0YS10aXRsZVwiOiBfdm0udGl0bGUsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgbW91c2VlbnRlcjogX3ZtLm9uTW91c2VFbnRlcixcbiAgICAgICAgICAgIG1vdXNlbGVhdmU6IF92bS5vbk1vdXNlTGVhdmUsXG4gICAgICAgICAgICBjbGljazogX3ZtLm9uQ2xpY2ssXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwic3BhblwiLCB7IGNsYXNzOiBfdm0udmlldy5jc3NDbGFzcywgc3R5bGU6IF92bS52aWV3LmNzc1N0eWxlIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnZpZXcuY29udGVudCkpLFxuICAgICAgICAgIF0pLFxuICAgICAgICBdXG4gICAgICApXG4gICAgOiBfdm0uX2UoKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwic2VjdGlvblwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydCBlbW9qaS1tYXJ0LXN0YXRpY1wiLCBzdHlsZTogX3ZtLmN1c3RvbVN0eWxlcyB9LFxuICAgIFtcbiAgICAgIF92bS5zaG93Q2F0ZWdvcmllc1xuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1iYXIgZW1vamktbWFydC1iYXItYW5jaG9yc1wiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiYW5jaG9yc1wiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGRhdGE6IF92bS5kYXRhLFxuICAgICAgICAgICAgICAgICAgaTE4bjogX3ZtLm1lcmdlZEkxOG4sXG4gICAgICAgICAgICAgICAgICBjb2xvcjogX3ZtLmNvbG9yLFxuICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllczogX3ZtLnZpZXcuYWxsQ2F0ZWdvcmllcyxcbiAgICAgICAgICAgICAgICAgIFwiYWN0aXZlLWNhdGVnb3J5XCI6IF92bS52aWV3LmFjdGl2ZUNhdGVnb3J5LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5vbkFuY2hvckNsaWNrIH0sXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl90KFxuICAgICAgICBcInNlYXJjaFRlbXBsYXRlXCIsXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgX3ZtLnNob3dTZWFyY2hcbiAgICAgICAgICAgICAgPyBfYyhcInNlYXJjaFwiLCB7XG4gICAgICAgICAgICAgICAgICByZWY6IFwic2VhcmNoXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiBfdm0uZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgaTE4bjogX3ZtLm1lcmdlZEkxOG4sXG4gICAgICAgICAgICAgICAgICAgIFwiYXV0by1mb2N1c1wiOiBfdm0uYXV0b0ZvY3VzLFxuICAgICAgICAgICAgICAgICAgICBcIm9uLXNlYXJjaFwiOiBfdm0ub25TZWFyY2gsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoOiBfdm0ub25TZWFyY2gsXG4gICAgICAgICAgICAgICAgICAgIGFycm93TGVmdDogX3ZtLm9uQXJyb3dMZWZ0LFxuICAgICAgICAgICAgICAgICAgICBhcnJvd1JpZ2h0OiBfdm0ub25BcnJvd1JpZ2h0LFxuICAgICAgICAgICAgICAgICAgICBhcnJvd0Rvd246IF92bS5vbkFycm93RG93bixcbiAgICAgICAgICAgICAgICAgICAgYXJyb3dVcDogX3ZtLm9uQXJyb3dVcCxcbiAgICAgICAgICAgICAgICAgICAgZW50ZXI6IF92bS5vbkVudGVyLFxuICAgICAgICAgICAgICAgICAgICBzZWxlY3Q6IF92bS5vblRleHRTZWxlY3QsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZGF0YTogX3ZtLmRhdGEsXG4gICAgICAgICAgaTE4bjogX3ZtLmkxOG4sXG4gICAgICAgICAgYXV0b0ZvY3VzOiBfdm0uYXV0b0ZvY3VzLFxuICAgICAgICAgIG9uU2VhcmNoOiBfdm0ub25TZWFyY2gsXG4gICAgICAgIH1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICByZWY6IFwic2Nyb2xsXCIsXG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1zY3JvbGxcIixcbiAgICAgICAgICBhdHRyczogeyByb2xlOiBcInRhYnBhbmVsXCIgfSxcbiAgICAgICAgICBvbjogeyBzY3JvbGw6IF92bS5vblNjcm9sbCB9LFxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICByZWY6IFwic2Nyb2xsQ29udGVudFwiLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIGlkOiBcImVtb2ppLW1hcnQtbGlzdFwiLFxuICAgICAgICAgICAgICAgIHJvbGU6IFwibGlzdGJveFwiLFxuICAgICAgICAgICAgICAgIFwiYXJpYS1leHBhbmRlZFwiOiBcInRydWVcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF92bS5fdChcImN1c3RvbUNhdGVnb3J5XCIpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uX2woX3ZtLnZpZXcuZmlsdGVyZWRDYXRlZ29yaWVzLCBmdW5jdGlvbiAoY2F0ZWdvcnksIGlkeCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfYyhcImNhdGVnb3J5XCIsIHtcbiAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uaW5maW5pdGVTY3JvbGwgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5ID09IF92bS52aWV3LmFjdGl2ZUNhdGVnb3J5LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgICAgICAgICBcImluZmluaXRlU2Nyb2xsIHx8IGNhdGVnb3J5ID09IHZpZXcuYWN0aXZlQ2F0ZWdvcnlcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBrZXk6IGNhdGVnb3J5LmlkLFxuICAgICAgICAgICAgICAgICAgcmVmOiBcImNhdGVnb3JpZXNfXCIgKyBpZHgsXG4gICAgICAgICAgICAgICAgICByZWZJbkZvcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IF92bS5kYXRhLFxuICAgICAgICAgICAgICAgICAgICBpMThuOiBfdm0ubWVyZ2VkSTE4bixcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGNhdGVnb3J5LmlkLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBjYXRlZ29yeS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBlbW9qaXM6IGNhdGVnb3J5LmVtb2ppcyxcbiAgICAgICAgICAgICAgICAgICAgXCJlbW9qaS1wcm9wc1wiOiBfdm0uZW1vamlQcm9wcyxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMlxuICAgICAgICAgICksXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl90KFxuICAgICAgICBcInByZXZpZXdUZW1wbGF0ZVwiLFxuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIF92bS5zaG93UHJldmlld1xuICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1iYXIgZW1vamktbWFydC1iYXItcHJldmlld1wiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwicHJldmlld1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IF92bS5kYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IF92bS50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtb2ppOiBfdm0udmlldy5wcmV2aWV3RW1vamksXG4gICAgICAgICAgICAgICAgICAgICAgICBcImlkbGUtZW1vamlcIjogX3ZtLmlkbGVFbW9qaSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvdy1za2luLXRvbmVzXCI6IF92bS5zaG93U2tpblRvbmVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJlbW9qaS1wcm9wc1wiOiBfdm0uZW1vamlQcm9wcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2tpbi1wcm9wc1wiOiBfdm0uc2tpblByb3BzLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJvbi1za2luLWNoYW5nZVwiOiBfdm0ub25Ta2luQ2hhbmdlLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZGF0YTogX3ZtLmRhdGEsXG4gICAgICAgICAgdGl0bGU6IF92bS50aXRsZSxcbiAgICAgICAgICBlbW9qaTogX3ZtLnZpZXcucHJldmlld0Vtb2ppLFxuICAgICAgICAgIGlkbGVFbW9qaTogX3ZtLmlkbGVFbW9qaSxcbiAgICAgICAgICBzaG93U2tpblRvbmVzOiBfdm0uc2hvd1NraW5Ub25lcyxcbiAgICAgICAgICBlbW9qaVByb3BzOiBfdm0uZW1vamlQcm9wcyxcbiAgICAgICAgICBza2luUHJvcHM6IF92bS5za2luUHJvcHMsXG4gICAgICAgICAgb25Ta2luQ2hhbmdlOiBfdm0ub25Ta2luQ2hhbmdlLFxuICAgICAgICB9XG4gICAgICApLFxuICAgIF0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtYW5jaG9yc1wiLCBhdHRyczogeyByb2xlOiBcInRhYmxpc3RcIiB9IH0sXG4gICAgX3ZtLl9sKF92bS5jYXRlZ29yaWVzLCBmdW5jdGlvbiAoY2F0ZWdvcnkpIHtcbiAgICAgIHJldHVybiBfYyhcbiAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAge1xuICAgICAgICAgIGtleTogY2F0ZWdvcnkuaWQsXG4gICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgIFwiZW1vamktbWFydC1hbmNob3JcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiZW1vamktbWFydC1hbmNob3Itc2VsZWN0ZWRcIjogY2F0ZWdvcnkuaWQgPT0gX3ZtLmFjdGl2ZUNhdGVnb3J5LmlkLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIGNvbG9yOiBjYXRlZ29yeS5pZCA9PSBfdm0uYWN0aXZlQ2F0ZWdvcnkuaWQgPyBfdm0uY29sb3IgOiBcIlwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIHJvbGU6IFwidGFiXCIsXG4gICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgXCJhcmlhLWxhYmVsXCI6IGNhdGVnb3J5Lm5hbWUsXG4gICAgICAgICAgICBcImFyaWEtc2VsZWN0ZWRcIjogY2F0ZWdvcnkuaWQgPT0gX3ZtLmFjdGl2ZUNhdGVnb3J5LmlkLFxuICAgICAgICAgICAgXCJkYXRhLXRpdGxlXCI6IF92bS5pMThuLmNhdGVnb3JpZXNbY2F0ZWdvcnkuaWRdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uJGVtaXQoXCJjbGlja1wiLCBjYXRlZ29yeSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfSxcbiAgICAgICAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS5zdmdzW2NhdGVnb3J5LmlkXSkgfSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwic3BhblwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LWFuY2hvci1iYXJcIixcbiAgICAgICAgICAgIHN0eWxlOiB7IGJhY2tncm91bmRDb2xvcjogX3ZtLmNvbG9yIH0sXG4gICAgICAgICAgICBhdHRyczogeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH0sXG4gICAgICAgICAgfSksXG4gICAgICAgIF1cbiAgICAgIClcbiAgICB9KSxcbiAgICAwXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfdm0uaXNWaXNpYmxlICYmIChfdm0uaXNTZWFyY2ggfHwgX3ZtLmhhc1Jlc3VsdHMpXG4gICAgPyBfYyhcbiAgICAgICAgXCJzZWN0aW9uXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgXCJlbW9qaS1tYXJ0LWNhdGVnb3J5XCI6IHRydWUsXG4gICAgICAgICAgICBcImVtb2ppLW1hcnQtbm8tcmVzdWx0c1wiOiAhX3ZtLmhhc1Jlc3VsdHMsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBhdHRyczogeyBcImFyaWEtbGFiZWxcIjogX3ZtLmkxOG4uY2F0ZWdvcmllc1tfdm0uaWRdIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtY2F0ZWdvcnktbGFiZWxcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImgzXCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1jYXRlZ29yeS1sYWJlbFwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uaTE4bi5jYXRlZ29yaWVzW192bS5pZF0pKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLl9sKF92bS5lbW9qaU9iamVjdHMsIGZ1bmN0aW9uIChyZWYpIHtcbiAgICAgICAgICAgIHZhciBlbW9qaU9iamVjdCA9IHJlZi5lbW9qaU9iamVjdFxuICAgICAgICAgICAgdmFyIGVtb2ppVmlldyA9IHJlZi5lbW9qaVZpZXdcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgIGVtb2ppVmlldy5jYW5SZW5kZXJcbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiBlbW9qaU9iamVjdC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LWVtb2ppXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5hY3RpdmVDbGFzcyhlbW9qaU9iamVjdCksXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYXJpYS1sYWJlbFwiOiBlbW9qaVZpZXcuYXJpYUxhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgcm9sZTogXCJvcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYXJpYS1zZWxlY3RlZFwiOiBcImZhbHNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFyaWEtcG9zaW5zZXRcIjogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFyaWEtc2V0c2l6ZVwiOiBcIjE4MTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdGl0bGVcIjogZW1vamlPYmplY3Quc2hvcnRfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBlbW9qaVZpZXcudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW91c2VlbnRlcjogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZW1vamlQcm9wcy5vbkVudGVyKGVtb2ppVmlldy5nZXRFbW9qaSgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdXNlbGVhdmU6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmVtb2ppUHJvcHMub25MZWF2ZShlbW9qaVZpZXcuZ2V0RW1vamkoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZW1vamlQcm9wcy5vbkNsaWNrKGVtb2ppVmlldy5nZXRFbW9qaSgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IGVtb2ppVmlldy5jc3NDbGFzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IGVtb2ppVmlldy5jc3NTdHlsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhlbW9qaVZpZXcuY29udGVudCkpXVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgIV92bS5oYXNSZXN1bHRzXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJlbW9qaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZGF0YTogX3ZtLmRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgZW1vamk6IFwic2xldXRoX29yX3NweVwiLFxuICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZTogX3ZtLmVtb2ppUHJvcHMubmF0aXZlLFxuICAgICAgICAgICAgICAgICAgICAgIHNraW46IF92bS5lbW9qaVByb3BzLnNraW4sXG4gICAgICAgICAgICAgICAgICAgICAgc2V0OiBfdm0uZW1vamlQcm9wcy5zZXQsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtbm8tcmVzdWx0cy1sYWJlbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uaTE4bi5ub3Rmb3VuZCkpLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgIF0sXG4gICAgICAgIDJcbiAgICAgIClcbiAgICA6IF92bS5fZSgpXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtcHJldmlld1wiIH0sXG4gICAgW1xuICAgICAgX3ZtLmVtb2ppXG4gICAgICAgID8gW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1wcmV2aWV3LWVtb2ppXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiZW1vamlcIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogX3ZtLmRhdGEsXG4gICAgICAgICAgICAgICAgICAgIGVtb2ppOiBfdm0uZW1vamksXG4gICAgICAgICAgICAgICAgICAgIG5hdGl2ZTogX3ZtLmVtb2ppUHJvcHMubmF0aXZlLFxuICAgICAgICAgICAgICAgICAgICBza2luOiBfdm0uZW1vamlQcm9wcy5za2luLFxuICAgICAgICAgICAgICAgICAgICBzZXQ6IF92bS5lbW9qaVByb3BzLnNldCxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LXByZXZpZXctZGF0YVwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LXByZXZpZXctbmFtZVwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5lbW9qaS5uYW1lKSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1wcmV2aWV3LXNob3J0bmFtZXNcIiB9LFxuICAgICAgICAgICAgICAgIF92bS5fbChfdm0uZW1vamlTaG9ydE5hbWVzLCBmdW5jdGlvbiAoc2hvcnROYW1lKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiBzaG9ydE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1wcmV2aWV3LXNob3J0bmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiOlwiICsgX3ZtLl9zKHNob3J0TmFtZSkgKyBcIjpcIildXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1wcmV2aWV3LWVtb3RpY29uc1wiIH0sXG4gICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5lbW9qaUVtb3RpY29ucywgZnVuY3Rpb24gKGVtb3RpY29uKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiBlbW90aWNvbixcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LXByZXZpZXctZW1vdGljb25cIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoZW1vdGljb24pKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICBdXG4gICAgICAgIDogW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1wcmV2aWV3LWVtb2ppXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiZW1vamlcIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogX3ZtLmRhdGEsXG4gICAgICAgICAgICAgICAgICAgIGVtb2ppOiBfdm0uaWRsZUVtb2ppLFxuICAgICAgICAgICAgICAgICAgICBuYXRpdmU6IF92bS5lbW9qaVByb3BzLm5hdGl2ZSxcbiAgICAgICAgICAgICAgICAgICAgc2tpbjogX3ZtLmVtb2ppUHJvcHMuc2tpbixcbiAgICAgICAgICAgICAgICAgICAgc2V0OiBfdm0uZW1vamlQcm9wcy5zZXQsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1wcmV2aWV3LWRhdGFcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtdGl0bGUtbGFiZWxcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0udGl0bGUpKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0uc2hvd1NraW5Ub25lc1xuICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1wcmV2aWV3LXNraW5zXCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJza2luc1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc2tpbjogX3ZtLnNraW5Qcm9wcy5za2luIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9uU2tpbkNoYW5nZSgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgXSxcbiAgICBdLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1zZWFyY2hcIiB9LCBbXG4gICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgdmFsdWU6IF92bS52YWx1ZSxcbiAgICAgICAgICBleHByZXNzaW9uOiBcInZhbHVlXCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgIHBsYWNlaG9sZGVyOiBfdm0uaTE4bi5zZWFyY2gsXG4gICAgICAgIHJvbGU6IFwidGV4dGJveFwiLFxuICAgICAgICBcImFyaWEtYXV0b2NvbXBsZXRlXCI6IFwibGlzdFwiLFxuICAgICAgICBcImFyaWEtb3duc1wiOiBcImVtb2ppLW1hcnQtbGlzdFwiLFxuICAgICAgICBcImFyaWEtbGFiZWxcIjogXCJTZWFyY2ggZm9yIGFuIGVtb2ppXCIsXG4gICAgICAgIFwiYXJpYS1kZXNjcmliZWRieVwiOiBcImVtb2ppLW1hcnQtc2VhcmNoLWRlc2NyaXB0aW9uXCIsXG4gICAgICB9LFxuICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS52YWx1ZSB9LFxuICAgICAgb246IHtcbiAgICAgICAga2V5ZG93bjogW1xuICAgICAgICAgIGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgISRldmVudC50eXBlLmluZGV4T2YoXCJrZXlcIikgJiZcbiAgICAgICAgICAgICAgX3ZtLl9rKCRldmVudC5rZXlDb2RlLCBcImxlZnRcIiwgMzcsICRldmVudC5rZXksIFtcbiAgICAgICAgICAgICAgICBcIkxlZnRcIixcbiAgICAgICAgICAgICAgICBcIkFycm93TGVmdFwiLFxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoXCJidXR0b25cIiBpbiAkZXZlbnQgJiYgJGV2ZW50LmJ1dHRvbiAhPT0gMCkge1xuICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcImFycm93TGVmdFwiLCAkZXZlbnQpXG4gICAgICAgICAgICB9LmFwcGx5KG51bGwsIGFyZ3VtZW50cylcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgISRldmVudC50eXBlLmluZGV4T2YoXCJrZXlcIikgJiZcbiAgICAgICAgICAgICAgX3ZtLl9rKCRldmVudC5rZXlDb2RlLCBcInJpZ2h0XCIsIDM5LCAkZXZlbnQua2V5LCBbXG4gICAgICAgICAgICAgICAgXCJSaWdodFwiLFxuICAgICAgICAgICAgICAgIFwiQXJyb3dSaWdodFwiLFxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoXCJidXR0b25cIiBpbiAkZXZlbnQgJiYgJGV2ZW50LmJ1dHRvbiAhPT0gMikge1xuICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcImFycm93UmlnaHRcIilcbiAgICAgICAgICAgIH0uYXBwbHkobnVsbCwgYXJndW1lbnRzKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAhJGV2ZW50LnR5cGUuaW5kZXhPZihcImtleVwiKSAmJlxuICAgICAgICAgICAgICBfdm0uX2soJGV2ZW50LmtleUNvZGUsIFwiZG93blwiLCA0MCwgJGV2ZW50LmtleSwgW1xuICAgICAgICAgICAgICAgIFwiRG93blwiLFxuICAgICAgICAgICAgICAgIFwiQXJyb3dEb3duXCIsXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uJGVtaXQoXCJhcnJvd0Rvd25cIilcbiAgICAgICAgICAgIH0uYXBwbHkobnVsbCwgYXJndW1lbnRzKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAhJGV2ZW50LnR5cGUuaW5kZXhPZihcImtleVwiKSAmJlxuICAgICAgICAgICAgICBfdm0uX2soJGV2ZW50LmtleUNvZGUsIFwidXBcIiwgMzgsICRldmVudC5rZXksIFtcIlVwXCIsIFwiQXJyb3dVcFwiXSlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcImFycm93VXBcIiwgJGV2ZW50KVxuICAgICAgICAgICAgfS5hcHBseShudWxsLCBhcmd1bWVudHMpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICEkZXZlbnQudHlwZS5pbmRleE9mKFwia2V5XCIpICYmXG4gICAgICAgICAgICAgIF92bS5faygkZXZlbnQua2V5Q29kZSwgXCJlbnRlclwiLCAxMywgJGV2ZW50LmtleSwgXCJFbnRlclwiKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRlbWl0KFwiZW50ZXJcIilcbiAgICAgICAgICAgIH0uYXBwbHkobnVsbCwgYXJndW1lbnRzKVxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG4gICAgICAgICAgX3ZtLnZhbHVlID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJzcGFuXCIsXG4gICAgICB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImhpZGRlblwiLFxuICAgICAgICBhdHRyczogeyBpZDogXCJlbW9qaS1waWNrZXItc2VhcmNoLWRlc2NyaXB0aW9uXCIgfSxcbiAgICAgIH0sXG4gICAgICBbXG4gICAgICAgIF92bS5fdihcbiAgICAgICAgICBcIlVzZSB0aGUgbGVmdCwgcmlnaHQsIHVwIGFuZCBkb3duIGFycm93IGtleXMgdG8gbmF2aWdhdGUgdGhlIGVtb2ppIHNlYXJjaFxcbiAgICByZXN1bHRzLlwiXG4gICAgICAgICksXG4gICAgICBdXG4gICAgKSxcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIGNsYXNzOiB7XG4gICAgICAgIFwiZW1vamktbWFydC1za2luLXN3YXRjaGVzXCI6IHRydWUsXG4gICAgICAgIFwiZW1vamktbWFydC1za2luLXN3YXRjaGVzLW9wZW5lZFwiOiBfdm0ub3BlbmVkLFxuICAgICAgfSxcbiAgICB9LFxuICAgIF92bS5fbCg2LCBmdW5jdGlvbiAoc2tpblRvbmUpIHtcbiAgICAgIHJldHVybiBfYyhcbiAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6IHNraW5Ub25lLFxuICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICBcImVtb2ppLW1hcnQtc2tpbi1zd2F0Y2hcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiZW1vamktbWFydC1za2luLXN3YXRjaC1zZWxlY3RlZFwiOiBfdm0uc2tpbiA9PSBza2luVG9uZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgIGNsYXNzOiBcImVtb2ppLW1hcnQtc2tpbiBlbW9qaS1tYXJ0LXNraW4tdG9uZS1cIiArIHNraW5Ub25lLFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9uQ2xpY2soc2tpblRvbmUpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pLFxuICAgICAgICBdXG4gICAgICApXG4gICAgfSksXG4gICAgMFxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiLyogZ2xvYmFscyBfX1ZVRV9TU1JfQ09OVEVYVF9fICovXG5cbi8vIElNUE9SVEFOVDogRG8gTk9UIHVzZSBFUzIwMTUgZmVhdHVyZXMgaW4gdGhpcyBmaWxlIChleGNlcHQgZm9yIG1vZHVsZXMpLlxuLy8gVGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICBzY3JpcHRFeHBvcnRzLFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZnVuY3Rpb25hbFRlbXBsYXRlLFxuICBpbmplY3RTdHlsZXMsXG4gIHNjb3BlSWQsXG4gIG1vZHVsZUlkZW50aWZpZXIsIC8qIHNlcnZlciBvbmx5ICovXG4gIHNoYWRvd01vZGUgLyogdnVlLWNsaSBvbmx5ICovXG4pIHtcbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nXG4gICAgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnNcbiAgICA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChyZW5kZXIpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IHJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gc3RhdGljUmVuZGVyRm5zXG4gICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlXG4gIH1cblxuICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gIGlmIChmdW5jdGlvbmFsVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLmZ1bmN0aW9uYWwgPSB0cnVlXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSAnZGF0YS12LScgKyBzY29wZUlkXG4gIH1cblxuICB2YXIgaG9va1xuICBpZiAobW9kdWxlSWRlbnRpZmllcikgeyAvLyBzZXJ2ZXIgYnVpbGRcbiAgICBob29rID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIC8vIDIuMyBpbmplY3Rpb25cbiAgICAgIGNvbnRleHQgPVxuICAgICAgICBjb250ZXh0IHx8IC8vIGNhY2hlZCBjYWxsXG4gICAgICAgICh0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0KSB8fCAvLyBzdGF0ZWZ1bFxuICAgICAgICAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuJHZub2RlICYmIHRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KSAvLyBmdW5jdGlvbmFsXG4gICAgICAvLyAyLjIgd2l0aCBydW5Jbk5ld0NvbnRleHQ6IHRydWVcbiAgICAgIGlmICghY29udGV4dCAmJiB0eXBlb2YgX19WVUVfU1NSX0NPTlRFWFRfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29udGV4dCA9IF9fVlVFX1NTUl9DT05URVhUX19cbiAgICAgIH1cbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgc3R5bGVzXG4gICAgICBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIGNvbnRleHQpXG4gICAgICB9XG4gICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgbW9kdWxlIGlkZW50aWZpZXIgZm9yIGFzeW5jIGNodW5rIGluZmVycmVuY2VcbiAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzKSB7XG4gICAgICAgIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzLmFkZChtb2R1bGVJZGVudGlmaWVyKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyB1c2VkIGJ5IHNzciBpbiBjYXNlIGNvbXBvbmVudCBpcyBjYWNoZWQgYW5kIGJlZm9yZUNyZWF0ZVxuICAgIC8vIG5ldmVyIGdldHMgY2FsbGVkXG4gICAgb3B0aW9ucy5fc3NyUmVnaXN0ZXIgPSBob29rXG4gIH0gZWxzZSBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgaG9vayA9IHNoYWRvd01vZGVcbiAgICAgID8gZnVuY3Rpb24gKCkge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbChcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIChvcHRpb25zLmZ1bmN0aW9uYWwgPyB0aGlzLnBhcmVudCA6IHRoaXMpLiRyb290LiRvcHRpb25zLnNoYWRvd1Jvb3RcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgOiBpbmplY3RTdHlsZXNcbiAgfVxuXG4gIGlmIChob29rKSB7XG4gICAgaWYgKG9wdGlvbnMuZnVuY3Rpb25hbCkge1xuICAgICAgLy8gZm9yIHRlbXBsYXRlLW9ubHkgaG90LXJlbG9hZCBiZWNhdXNlIGluIHRoYXQgY2FzZSB0aGUgcmVuZGVyIGZuIGRvZXNuJ3RcbiAgICAgIC8vIGdvIHRocm91Z2ggdGhlIG5vcm1hbGl6ZXJcbiAgICAgIG9wdGlvbnMuX2luamVjdFN0eWxlcyA9IGhvb2tcbiAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvbmFsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgdmFyIG9yaWdpbmFsUmVuZGVyID0gb3B0aW9ucy5yZW5kZXJcbiAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uIChoLCBjb250ZXh0KSB7XG4gICAgICAgIGhvb2suY2FsbChjb250ZXh0KVxuICAgICAgICByZXR1cm4gb3JpZ2luYWxSZW5kZXIoaCwgY29udGV4dClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCByZWdpc3RyYXRpb24gYXMgYmVmb3JlQ3JlYXRlIGhvb2tcbiAgICAgIHZhciBleGlzdGluZyA9IG9wdGlvbnMuYmVmb3JlQ3JlYXRlXG4gICAgICBvcHRpb25zLmJlZm9yZUNyZWF0ZSA9IGV4aXN0aW5nXG4gICAgICAgID8gW10uY29uY2F0KGV4aXN0aW5nLCBob29rKVxuICAgICAgICA6IFtob29rXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn0iLCJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn0iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlcltTeW1ib2wuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlcltcIkBAaXRlcmF0b3JcIl0gIT0gbnVsbCkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn0iLCJpbXBvcnQgYXJyYXlXaXRob3V0SG9sZXMgZnJvbSBcIi4vYXJyYXlXaXRob3V0SG9sZXMuanNcIjtcbmltcG9ydCBpdGVyYWJsZVRvQXJyYXkgZnJvbSBcIi4vaXRlcmFibGVUb0FycmF5LmpzXCI7XG5pbXBvcnQgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgZnJvbSBcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIjtcbmltcG9ydCBub25JdGVyYWJsZVNwcmVhZCBmcm9tIFwiLi9ub25JdGVyYWJsZVNwcmVhZC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICB9IDogZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gIH0sIF90eXBlb2Yob2JqKTtcbn0iLCJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgc3RvcmUgZnJvbSAnLi91dGlscy9zdG9yZSdcbmltcG9ydCB7IHVuY29tcHJlc3MgfSBmcm9tICcuL3V0aWxzL2RhdGEnXG5pbXBvcnQgZnJlcXVlbnRseSBmcm9tICcuL3V0aWxzL2ZyZXF1ZW50bHknXG5cbmV4cG9ydCB7XG4gIFBpY2tlcixcbiAgRW1vamksXG4gIEFuY2hvcnMsXG4gIFByZXZpZXcsXG4gIFNlYXJjaCxcbiAgQ2F0ZWdvcnksXG4gIFNraW5zLFxufSBmcm9tICcuL2NvbXBvbmVudHMnXG5cbmV4cG9ydCB7IEVtb2ppSW5kZXgsIEVtb2ppVmlldywgRW1vamlEYXRhLCBzYW5pdGl6ZSB9IGZyb20gJy4vdXRpbHMvZW1vamktZGF0YSdcbmV4cG9ydCB7IHVuY29tcHJlc3MsIHN0b3JlLCBmcmVxdWVudGx5IH1cbiJdLCJuYW1lcyI6WyJwcm9wcyIsIkVtb2ppUHJvcHMiLCJkYXRhIiwidHlwZSIsInJlcXVpcmVkIiwiZW1pdHMiLCJjb21wdXRlZCIsInZpZXciLCJzYW5pdGl6ZWREYXRhIiwidGl0bGUiLCJlbW9qaU9iamVjdCIsImNyZWF0ZWQiLCJtZXRob2RzIiwib25DbGljayIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsInNlYXJjaCIsIm5vdGZvdW5kIiwiY2F0ZWdvcmllcyIsInJlY2VudCIsInNtaWxleXMiLCJwZW9wbGUiLCJuYXR1cmUiLCJmb29kcyIsImFjdGl2aXR5IiwicGxhY2VzIiwib2JqZWN0cyIsInN5bWJvbHMiLCJmbGFncyIsImN1c3RvbSIsIlBpY2tlclByb3BzIiwiYWN0aXZlU2tpbiIsImN1c3RvbVN0eWxlcyIsIndpZHRoIiwiZW1vamlQcm9wcyIsIm5hdGl2ZSIsInNraW4iLCJzZXQiLCJlbW9qaVRvb2x0aXAiLCJlbW9qaVNpemUiLCJzZWxlY3RlZEVtb2ppIiwic2VsZWN0ZWRFbW9qaUNhdGVnb3J5Iiwib25FbnRlciIsIm9uTGVhdmUiLCJza2luUHJvcHMiLCJjYWxjdWxhdGVXaWR0aCIsImZpbHRlcmVkQ2F0ZWdvcmllcyIsIm1lcmdlZEkxOG4iLCJpZGxlRW1vamkiLCJjb25zb2xlIiwib25TY3JvbGwiLCJ3aW5kb3ciLCJvblNjcm9sbFBhaW50Iiwib25BbmNob3JDbGljayIsImNhdGVnb3J5Iiwib25TZWFyY2giLCJ2YWx1ZSIsIm9uRW1vamlFbnRlciIsImVtb2ppIiwib25FbW9qaUxlYXZlIiwib25BcnJvd0xlZnQiLCIkZXZlbnQiLCJvbkFycm93UmlnaHQiLCJvbkFycm93RG93biIsIm9uQXJyb3dVcCIsImZyZXF1ZW50bHkiLCJvbkVtb2ppQ2xpY2siLCJvblRleHRTZWxlY3QiLCJvblNraW5DaGFuZ2UiLCJzdG9yZSIsImdldENhdGVnb3J5Q29tcG9uZW50IiwiaW5kZXgiLCJjb21wb25lbnRzIiwiQW5jaG9ycyIsIkNhdGVnb3J5IiwiUHJldmlldyIsIlNlYXJjaCIsImkxOG4iLCJjb2xvciIsImFjdGl2ZUNhdGVnb3J5IiwiZGVmYXVsdCIsImlkIiwibmFtZSIsImVtb2ppcyIsImFjdGl2ZUNsYXNzIiwiaXNWaXNpYmxlIiwiaXNTZWFyY2giLCJoYXNSZXN1bHRzIiwiZW1vamlPYmplY3RzIiwiZW1vamlWaWV3IiwiRW1vamkiLCJzaG93U2tpblRvbmVzIiwiZW1vamlEYXRhIiwiZW1vamlTaG9ydE5hbWVzIiwiZW1vamlFbW90aWNvbnMiLCJTa2lucyIsImF1dG9Gb2N1cyIsImVtb2ppSW5kZXgiLCJ3YXRjaCIsImNsZWFyIiwibW91bnRlZCIsIiRpbnB1dCIsIm9wZW5lZCIsInNraW5Ub25lIiwiUGlja2VyIiwiX1N0cmluZyIsIlN0cmluZyIsImZyb21Db2RlUG9pbnQiLCJzdHJpbmdGcm9tQ29kZVBvaW50IiwiTUFYX1NJWkUiLCJjb2RlVW5pdHMiLCJoaWdoU3Vycm9nYXRlIiwibG93U3Vycm9nYXRlIiwibGVuZ3RoIiwiYXJndW1lbnRzIiwicmVzdWx0IiwiY29kZVBvaW50IiwiTnVtYmVyIiwiaXNGaW5pdGUiLCJNYXRoIiwiZmxvb3IiLCJSYW5nZUVycm9yIiwicHVzaCIsImZyb21DaGFyQ29kZSIsImFwcGx5IiwiU1ZHcyIsIm1hcHBpbmciLCJ1bmlmaWVkIiwibm9uX3F1YWxpZmllZCIsImhhc19pbWdfYXBwbGUiLCJoYXNfaW1nX2dvb2dsZSIsImhhc19pbWdfdHdpdHRlciIsImhhc19pbWdfZmFjZWJvb2siLCJrZXl3b3JkcyIsInNoZWV0IiwiZW1vdGljb25zIiwidGV4dCIsInNob3J0X25hbWVzIiwiYWRkZWRfaW4iLCJidWlsZFNlYXJjaCIsImFkZFRvU2VhcmNoIiwic3RyaW5ncyIsInNwbGl0IiwiQXJyYXkiLCJpc0FycmF5IiwiZm9yRWFjaCIsInN0cmluZyIsInMiLCJ0b0xvd2VyQ2FzZSIsImluZGV4T2YiLCJqb2luIiwiZGVlcEZyZWV6ZSIsIm9iamVjdCIsInByb3BOYW1lcyIsIk9iamVjdCIsImdldE93blByb3BlcnR5TmFtZXMiLCJmcmVlemUiLCJ1bmNvbXByZXNzIiwiY29tcHJlc3NlZCIsImtleSIsInVuc2hpZnQiLCJzaGVldF94Iiwic2hlZXRfeSIsInRvRml4ZWQiLCJpbnRlcnNlY3QiLCJ1bmlmaWVkVG9OYXRpdmUiLCJTSEVFVF9DT0xVTU5TIiwiQ09MT05TX1JFR0VYIiwiU0tJTlMiLCJFbW9qaUluZGV4IiwiZW1vamlzVG9TaG93RmlsdGVyIiwiaW5jbHVkZSIsImV4Y2x1ZGUiLCJyZWNlbnRMZW5ndGgiLCJfZGF0YSIsIl9lbW9qaXNGaWx0ZXIiLCJfaW5jbHVkZSIsIl9leGNsdWRlIiwiX2N1c3RvbSIsIl9yZWNlbnQiLCJnZXQiLCJfZW1vamlzIiwiX25hdGl2ZUVtb2ppcyIsIl9lbW90aWNvbnMiLCJfY2F0ZWdvcmllcyIsIl9yZWNlbnRDYXRlZ29yeSIsIl9jdXN0b21DYXRlZ29yeSIsIl9zZWFyY2hJbmRleCIsImJ1aWxkSW5kZXgiLCJhbGxDYXRlZ29yaWVzIiwiZmlsdGVyIiwiaXRlbSIsImluY2x1ZGVzIiwic29ydCIsImEiLCJiIiwiaW5kZXhBIiwiaW5kZXhCIiwiY2F0ZWdvcnlEYXRhIiwiaXNDYXRlZ29yeU5lZWRlZCIsImVtb2ppSWQiLCJhZGRFbW9qaSIsImN1c3RvbUVtb2ppIiwiYWRkQ3VzdG9tRW1vamkiLCJtYXAiLCJoYXNFbW9qaSIsIm1hdGNoZXMiLCJtYXRjaCIsInBhcnNlSW50IiwiYWxpYXNlcyIsImhhc093blByb3BlcnR5IiwiZ2V0U2tpbiIsIkVycm9yIiwia2V5cyIsInVuaWNvZGVFbW9qaSIsIm1heFJlc3VsdHMiLCJ2YWx1ZXMiLCJhbGxSZXN1bHRzIiwiY3VycmVudEluZGV4IiwiY2hhckluZGV4IiwiY2hhciIsInJlc3VsdHMiLCJzY29yZXMiLCJzdWIiLCJzdWJzdHIiLCJzdWJJbmRleCIsInNjb3JlIiwiYVNjb3JlIiwiYlNjb3JlIiwic2xpY2UiLCJhc3NpZ24iLCJFbW9qaURhdGEiLCJpc0Vtb2ppTmVlZGVkIiwiX3NraW5zIiwiaWR4IiwiZW1vdGljb24iLCJjYXRlZ29yeV9pZCIsImlzSW5jbHVkZWQiLCJpc0V4Y2x1ZGVkIiwic2tpbl92YXJpYXRpb25zIiwic2tpbklkeCIsInNraW5LZXkiLCJ2YXJpYXRpb25EYXRhIiwic2tpbkRhdGEiLCJrIiwiX3Nhbml0aXplZCIsInNhbml0aXplIiwic2hvcnRfbmFtZSIsImFkanVzdGVkQ29sdW1ucyIsIngiLCJ5IiwiY29uY2F0IiwiQm9vbGVhbiIsIkVtb2ppVmlldyIsImZhbGxiYWNrIiwiX2Vtb2ppIiwiX25hdGl2ZSIsIl9za2luIiwiX3NldCIsIl9mYWxsYmFjayIsImNhblJlbmRlciIsIl9jYW5SZW5kZXIiLCJjc3NDbGFzcyIsIl9jc3NDbGFzcyIsImNzc1N0eWxlIiwiX2Nzc1N0eWxlIiwiY29udGVudCIsIl9jb250ZW50IiwiYXJpYUxhYmVsIiwiX2lzQ3VzdG9tIiwiX2lzTmF0aXZlIiwiX2hhc0Vtb2ppIiwiX2Vtb2ppVHlwZSIsImJhY2tncm91bmRJbWFnZSIsImdldEVtb2ppIiwiaW1hZ2VVcmwiLCJiYWNrZ3JvdW5kU2l6ZSIsImhlaWdodCIsImJhY2tncm91bmRQb3NpdGlvbiIsImdldFBvc2l0aW9uIiwiZm9udFNpemUiLCJyb3VuZCIsImhhc0ltYWdlIiwidW5kZWZpbmVkIiwic2tpbl90b25lIiwiY29sb25zIiwiREVGQVVMVFMiLCJpbml0aWFsaXplZCIsImRlZmF1bHRzIiwiaW5pdCIsImFkZCIsIm1heE51bWJlciIsImRlZmF1bHRMZW5ndGgiLCJtaW4iLCJpIiwicXVhbnRpdHkiLCJmcmVxdWVudGx5S2V5cyIsInNvcnRlZCIsInJldmVyc2UiLCJzbGljZWQiLCJsYXN0IiwicG9wIiwidW5pY29kZXMiLCJjb2RlUG9pbnRzIiwidSIsInVuaXEiLCJhcnIiLCJyZWR1Y2UiLCJhY2MiLCJ1bmlxQSIsInVuaXFCIiwiZGVlcE1lcmdlIiwibyIsIm9yaWdpbmFsVmFsdWUiLCJtZWFzdXJlU2Nyb2xsYmFyIiwiZG9jdW1lbnQiLCJkaXYiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJvdmVyZmxvdyIsInBvc2l0aW9uIiwidG9wIiwiYm9keSIsImFwcGVuZENoaWxkIiwic2Nyb2xsYmFyV2lkdGgiLCJvZmZzZXRXaWR0aCIsImNsaWVudFdpZHRoIiwicmVtb3ZlQ2hpbGQiLCJQaWNrZXJWaWV3IiwicGlja2VyQ29tcG9uZW50IiwiX3ZtIiwiX3BlckxpbmUiLCJwZXJMaW5lIiwiZmlyc3QiLCJzZWFyY2hFbW9qaXMiLCJwcmV2aWV3RW1vamkiLCJwcmV2aWV3RW1vamlDYXRlZ29yeUlkeCIsInByZXZpZXdFbW9qaUlkeCIsInNjcm9sbEVsZW1lbnQiLCIkcmVmcyIsInNjcm9sbCIsInNjcm9sbFRvcCIsImwiLCJjb21wb25lbnQiLCIkZWwiLCJvZmZzZXRUb3AiLCJoYXNFbW9qaXMiLCJzY3JvbGxUb0NvbXBvbmVudCIsImluZmluaXRlU2Nyb2xsIiwibWF4U2VhcmNoUmVzdWx0cyIsInVwZGF0ZVByZXZpZXdFbW9qaSIsImVtb2ppc0xlbmd0aCIsImNhdGVnb3J5TGVuZ3RoIiwiZGlmZiIsInByZXZDYXRlZ29yeUxhc3RSb3dMZW5ndGgiLCIkbmV4dFRpY2siLCJzY3JvbGxFbCIsImVtb2ppRWwiLCJxdWVyeVNlbGVjdG9yIiwic2Nyb2xsSGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiY2F0ZWdvcnlJZHgiLCJ0b29sdGlwIiwiRnVuY3Rpb24iLCJzaXplIiwidGFnIiwiZGVmYXVsdFNraW4iLCJzaG93UHJldmlldyIsInNob3dTZWFyY2giLCJzaG93Q2F0ZWdvcmllcyIsInBpY2tlclN0eWxlcyIsIk5BTUVTUEFDRSIsIl9KU09OIiwiSlNPTiIsImlzTG9jYWxTdG9yYWdlU3VwcG9ydGVkIiwiZ2V0dGVyIiwic2V0dGVyIiwic2V0SGFuZGxlcnMiLCJoYW5kbGVycyIsInNldE5hbWVzcGFjZSIsIm5hbWVzcGFjZSIsInVwZGF0ZSIsInN0YXRlIiwibG9jYWxTdG9yYWdlIiwic3RyaW5naWZ5IiwiZSIsInBhcnNlIiwiaXNXaW5kb3dBdmFpbGFibGUiLCJsYXN0VGltZSIsInZlbmRvcnMiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImNhbGxiYWNrIiwiZWxlbWVudCIsImN1cnJUaW1lIiwiRGF0ZSIsImdldFRpbWUiLCJ0aW1lVG9DYWxsIiwibWF4Iiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCJdLCJzb3VyY2VSb290IjoiIn0=