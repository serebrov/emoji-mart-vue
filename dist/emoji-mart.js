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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0EsZUFBZSw0QkFBNEI7V0FDM0MsZUFBZTtXQUNmLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQSw4Q0FBOEM7Ozs7O1dDQTlDO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBRUE7QUFVQSIsInNvdXJjZXMiOlsid2VicGFjazovL0Vtb2ppTWFydC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0L3NyYy9jb21wb25lbnRzL0Vtb2ppLnZ1ZSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvc3JjL2NvbXBvbmVudHMvUGlja2VyLnZ1ZSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvc3JjL2NvbXBvbmVudHMvYW5jaG9ycy52dWUiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0L3NyYy9jb21wb25lbnRzL2NhdGVnb3J5LnZ1ZSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvc3JjL2NvbXBvbmVudHMvcHJldmlldy52dWUiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0L3NyYy9jb21wb25lbnRzL3NlYXJjaC52dWUiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0L3NyYy9jb21wb25lbnRzL3NraW5zLnZ1ZSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvcG9seWZpbGxzL3N0cmluZ0Zyb21Db2RlUG9pbnQuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL3N2Z3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL3V0aWxzL2RhdGEuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL3V0aWxzL2Vtb2ppLWRhdGEuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL3V0aWxzL2ZyZXF1ZW50bHkuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL3V0aWxzL2luZGV4LmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy91dGlscy9waWNrZXIuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL3V0aWxzL3NoYXJlZC1wcm9wcy5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvdXRpbHMvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL3ZlbmRvci9yYWYtcG9seWZpbGwuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvRW1vamkudnVlIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL1BpY2tlci52dWUiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvYW5jaG9ycy52dWUiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvY2F0ZWdvcnkudnVlIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL3ByZXZpZXcudnVlIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL3NlYXJjaC52dWUiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvc2tpbnMudnVlIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL0Vtb2ppLnZ1ZT9hZDg0Iiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL1BpY2tlci52dWU/NDk3MCIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9hbmNob3JzLnZ1ZT9iYjk2Iiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL2NhdGVnb3J5LnZ1ZT8zYzdhIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL3ByZXZpZXcudnVlPzBjNWYiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvc2VhcmNoLnZ1ZT8xMDVhIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL3NraW5zLnZ1ZT8wYzBlIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL0Vtb2ppLnZ1ZT85YjlkIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL1BpY2tlci52dWU/ZWRhNSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9hbmNob3JzLnZ1ZT80ZTU3Iiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL2NhdGVnb3J5LnZ1ZT82MDEyIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL3ByZXZpZXcudnVlPzAyYjUiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvc2VhcmNoLnZ1ZT8wZmQ4Iiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL3NraW5zLnZ1ZT8xNmExIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL0Vtb2ppLnZ1ZT82YTE0Iiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL1BpY2tlci52dWU/OGY2YyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9hbmNob3JzLnZ1ZT9kY2VmIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL2NhdGVnb3J5LnZ1ZT83NGQ1Iiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL3ByZXZpZXcudnVlP2I1NGEiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvc2VhcmNoLnZ1ZT83N2RkIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL3NraW5zLnZ1ZT81NjliIiwid2VicGFjazovL0Vtb2ppTWFydC8uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5TGlrZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aG91dEhvbGVzLmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL0Vtb2ppTWFydC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkVtb2ppTWFydFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJFbW9qaU1hcnRcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiPHRlbXBsYXRlPlxuICA8Y29tcG9uZW50XG4gICAgOmlzPVwidGFnXCJcbiAgICB2LWlmPVwidmlldy5jYW5SZW5kZXJcIlxuICAgIDp0aXRsZT1cInZpZXcudGl0bGVcIlxuICAgIDphcmlhLWxhYmVsPVwidmlldy5hcmlhTGFiZWxcIlxuICAgIDpkYXRhLXRpdGxlPVwidGl0bGVcIlxuICAgIGNsYXNzPVwiZW1vamktbWFydC1lbW9qaVwiXG4gICAgQG1vdXNlZW50ZXI9XCJvbk1vdXNlRW50ZXJcIlxuICAgIEBtb3VzZWxlYXZlPVwib25Nb3VzZUxlYXZlXCJcbiAgICBAY2xpY2s9XCJvbkNsaWNrXCJcbiAgPlxuICAgIDxzcGFuIDpjbGFzcz1cInZpZXcuY3NzQ2xhc3NcIiA6c3R5bGU9XCJ2aWV3LmNzc1N0eWxlXCI+e3tcbiAgICAgIHZpZXcuY29udGVudFxuICAgIH19PC9zcGFuPlxuICA8L2NvbXBvbmVudD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBFbW9qaVByb3BzIH0gZnJvbSAnLi4vdXRpbHMvc2hhcmVkLXByb3BzJ1xuaW1wb3J0IHsgRW1vamlWaWV3IH0gZnJvbSAnLi4vdXRpbHMvZW1vamktZGF0YSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczoge1xuICAgIC4uLkVtb2ppUHJvcHMsXG4gICAgZGF0YToge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgfSxcbiAgZW1pdHM6IFtcImNsaWNrXCIsIFwibW91c2VlbnRlclwiLCBcIm1vdXNlbGVhdmVcIl0sXG4gIGNvbXB1dGVkOiB7XG4gICAgdmlldygpIHtcbiAgICAgIHJldHVybiBuZXcgRW1vamlWaWV3KFxuICAgICAgICB0aGlzLmVtb2ppT2JqZWN0LFxuICAgICAgICB0aGlzLnNraW4sXG4gICAgICAgIHRoaXMuc2V0LFxuICAgICAgICB0aGlzLm5hdGl2ZSxcbiAgICAgICAgdGhpcy5mYWxsYmFjayxcbiAgICAgICAgdGhpcy50b29sdGlwLFxuICAgICAgICB0aGlzLnNpemUsXG4gICAgICApXG4gICAgfSxcbiAgICBzYW5pdGl6ZWREYXRhKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZW1vamlPYmplY3QuX3Nhbml0aXplZFxuICAgIH0sXG4gICAgdGl0bGUoKSB7XG4gICAgICByZXR1cm4gdGhpcy50b29sdGlwID8gdGhpcy5lbW9qaU9iamVjdC5zaG9ydF9uYW1lIDogbnVsbFxuICAgIH0sXG4gICAgZW1vamlPYmplY3QoKSB7XG4gICAgICBpZiAodHlwZW9mIHRoaXMuZW1vamkgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5maW5kRW1vamkodGhpcy5lbW9qaSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVtb2ppXG4gICAgICB9XG4gICAgfSxcbiAgfSxcbiAgY3JlYXRlZCgpIHt9LFxuICBtZXRob2RzOiB7XG4gICAgb25DbGljaygpIHtcbiAgICAgIHRoaXMuJGVtaXQoJ2NsaWNrJywgdGhpcy5lbW9qaU9iamVjdClcbiAgICB9LFxuICAgIG9uTW91c2VFbnRlcigpIHtcbiAgICAgIHRoaXMuJGVtaXQoJ21vdXNlZW50ZXInLCB0aGlzLmVtb2ppT2JqZWN0KVxuICAgIH0sXG4gICAgb25Nb3VzZUxlYXZlKCkge1xuICAgICAgdGhpcy4kZW1pdCgnbW91c2VsZWF2ZScsIHRoaXMuZW1vamlPYmplY3QpXG4gICAgfSxcbiAgfSxcbn1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8c2VjdGlvbiBjbGFzcz1cImVtb2ppLW1hcnQgZW1vamktbWFydC1zdGF0aWNcIiA6c3R5bGU9XCJjdXN0b21TdHlsZXNcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1iYXIgZW1vamktbWFydC1iYXItYW5jaG9yc1wiIHYtaWY9XCJzaG93Q2F0ZWdvcmllc1wiPlxuICAgICAgPGFuY2hvcnNcbiAgICAgICAgOmRhdGE9XCJkYXRhXCJcbiAgICAgICAgOmkxOG49XCJtZXJnZWRJMThuXCJcbiAgICAgICAgOmNvbG9yPVwiY29sb3JcIlxuICAgICAgICA6Y2F0ZWdvcmllcz1cInZpZXcuYWxsQ2F0ZWdvcmllc1wiXG4gICAgICAgIDphY3RpdmUtY2F0ZWdvcnk9XCJ2aWV3LmFjdGl2ZUNhdGVnb3J5XCJcbiAgICAgICAgQGNsaWNrPVwib25BbmNob3JDbGlja1wiXG4gICAgICAvPlxuICAgIDwvZGl2PlxuXG4gICAgPHNsb3RcbiAgICAgIG5hbWU9XCJzZWFyY2hUZW1wbGF0ZVwiXG4gICAgICA6ZGF0YT1cImRhdGFcIlxuICAgICAgOmkxOG49XCJpMThuXCJcbiAgICAgIDphdXRvLWZvY3VzPVwiYXV0b0ZvY3VzXCJcbiAgICAgIDpvbi1zZWFyY2g9XCJvblNlYXJjaFwiXG4gICAgPlxuICAgICAgPHNlYXJjaFxuICAgICAgICB2LWlmPVwic2hvd1NlYXJjaFwiXG4gICAgICAgIHJlZj1cInNlYXJjaFwiXG4gICAgICAgIDpkYXRhPVwiZGF0YVwiXG4gICAgICAgIDppMThuPVwibWVyZ2VkSTE4blwiXG4gICAgICAgIDphdXRvLWZvY3VzPVwiYXV0b0ZvY3VzXCJcbiAgICAgICAgOm9uLXNlYXJjaD1cIm9uU2VhcmNoXCJcbiAgICAgICAgQHNlYXJjaD1cIm9uU2VhcmNoXCJcbiAgICAgICAgQGFycm93TGVmdD1cIm9uQXJyb3dMZWZ0XCJcbiAgICAgICAgQGFycm93UmlnaHQ9XCJvbkFycm93UmlnaHRcIlxuICAgICAgICBAYXJyb3dEb3duPVwib25BcnJvd0Rvd25cIlxuICAgICAgICBAYXJyb3dVcD1cIm9uQXJyb3dVcFwiXG4gICAgICAgIEBlbnRlcj1cIm9uRW50ZXJcIlxuICAgICAgICBAc2VsZWN0PVwib25UZXh0U2VsZWN0XCJcbiAgICAgIC8+XG4gICAgPC9zbG90PlxuXG4gICAgPGRpdlxuICAgICAgcm9sZT1cInRhYnBhbmVsXCJcbiAgICAgIGNsYXNzPVwiZW1vamktbWFydC1zY3JvbGxcIlxuICAgICAgcmVmPVwic2Nyb2xsXCJcbiAgICAgIEBzY3JvbGw9XCJvblNjcm9sbFwiXG4gICAgPlxuICAgICAgPGRpdlxuICAgICAgICBpZD1cImVtb2ppLW1hcnQtbGlzdFwiXG4gICAgICAgIHJlZj1cInNjcm9sbENvbnRlbnRcIlxuICAgICAgICByb2xlPVwibGlzdGJveFwiXG4gICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJ0cnVlXCJcbiAgICAgID5cbiAgICAgICAgPGNhdGVnb3J5XG4gICAgICAgICAgdi1mb3I9XCIoY2F0ZWdvcnksIGlkeCkgaW4gdmlldy5maWx0ZXJlZENhdGVnb3JpZXNcIlxuICAgICAgICAgIHYtc2hvdz1cImluZmluaXRlU2Nyb2xsIHx8IGNhdGVnb3J5ID09IHZpZXcuYWN0aXZlQ2F0ZWdvcnlcIlxuICAgICAgICAgIDpyZWY9XCInY2F0ZWdvcmllc18nICsgaWR4XCJcbiAgICAgICAgICA6a2V5PVwiY2F0ZWdvcnkuaWRcIlxuICAgICAgICAgIDpkYXRhPVwiZGF0YVwiXG4gICAgICAgICAgOmkxOG49XCJtZXJnZWRJMThuXCJcbiAgICAgICAgICA6aWQ9XCJjYXRlZ29yeS5pZFwiXG4gICAgICAgICAgOm5hbWU9XCJjYXRlZ29yeS5uYW1lXCJcbiAgICAgICAgICA6ZW1vamlzPVwiY2F0ZWdvcnkuZW1vamlzXCJcbiAgICAgICAgICA6ZW1vamktcHJvcHM9XCJlbW9qaVByb3BzXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPHNsb3RcbiAgICAgIG5hbWU9XCJwcmV2aWV3VGVtcGxhdGVcIlxuICAgICAgOmRhdGE9XCJkYXRhXCJcbiAgICAgIDp0aXRsZT1cInRpdGxlXCJcbiAgICAgIDplbW9qaT1cInZpZXcucHJldmlld0Vtb2ppXCJcbiAgICAgIDppZGxlLWVtb2ppPVwiaWRsZUVtb2ppXCJcbiAgICAgIDpzaG93LXNraW4tdG9uZXM9XCJzaG93U2tpblRvbmVzXCJcbiAgICAgIDplbW9qaS1wcm9wcz1cImVtb2ppUHJvcHNcIlxuICAgICAgOnNraW4tcHJvcHM9XCJza2luUHJvcHNcIlxuICAgICAgOm9uLXNraW4tY2hhbmdlPVwib25Ta2luQ2hhbmdlXCJcbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1iYXIgZW1vamktbWFydC1iYXItcHJldmlld1wiIHYtaWY9XCJzaG93UHJldmlld1wiPlxuICAgICAgICA8cHJldmlld1xuICAgICAgICAgIDpkYXRhPVwiZGF0YVwiXG4gICAgICAgICAgOnRpdGxlPVwidGl0bGVcIlxuICAgICAgICAgIDplbW9qaT1cInZpZXcucHJldmlld0Vtb2ppXCJcbiAgICAgICAgICA6aWRsZS1lbW9qaT1cImlkbGVFbW9qaVwiXG4gICAgICAgICAgOnNob3ctc2tpbi10b25lcz1cInNob3dTa2luVG9uZXNcIlxuICAgICAgICAgIDplbW9qaS1wcm9wcz1cImVtb2ppUHJvcHNcIlxuICAgICAgICAgIDpza2luLXByb3BzPVwic2tpblByb3BzXCJcbiAgICAgICAgICA6b24tc2tpbi1jaGFuZ2U9XCJvblNraW5DaGFuZ2VcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9zbG90PlxuICA8L3NlY3Rpb24+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0ICcuLi92ZW5kb3IvcmFmLXBvbHlmaWxsJ1xuaW1wb3J0IHN0b3JlIGZyb20gJy4uL3V0aWxzL3N0b3JlJ1xuaW1wb3J0IGZyZXF1ZW50bHkgZnJvbSAnLi4vdXRpbHMvZnJlcXVlbnRseSdcbmltcG9ydCB7IGRlZXBNZXJnZSwgbWVhc3VyZVNjcm9sbGJhciB9IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgUGlja2VyUHJvcHMgfSBmcm9tICcuLi91dGlscy9zaGFyZWQtcHJvcHMnXG5pbXBvcnQgeyBQaWNrZXJWaWV3IH0gZnJvbSAnLi4vdXRpbHMvcGlja2VyJ1xuaW1wb3J0IEFuY2hvcnMgZnJvbSAnLi9hbmNob3JzLnZ1ZSdcbmltcG9ydCBDYXRlZ29yeSBmcm9tICcuL2NhdGVnb3J5LnZ1ZSdcbmltcG9ydCBQcmV2aWV3IGZyb20gJy4vcHJldmlldy52dWUnXG5pbXBvcnQgU2VhcmNoIGZyb20gJy4vc2VhcmNoLnZ1ZSdcblxuY29uc3QgSTE4TiA9IHtcbiAgc2VhcmNoOiAnU2VhcmNoJyxcbiAgbm90Zm91bmQ6ICdObyBFbW9qaSBGb3VuZCcsXG4gIGNhdGVnb3JpZXM6IHtcbiAgICBzZWFyY2g6ICdTZWFyY2ggUmVzdWx0cycsXG4gICAgcmVjZW50OiAnRnJlcXVlbnRseSBVc2VkJyxcbiAgICBzbWlsZXlzOiAnU21pbGV5cyAmIEVtb3Rpb24nLFxuICAgIHBlb3BsZTogJ1Blb3BsZSAmIEJvZHknLFxuICAgIG5hdHVyZTogJ0FuaW1hbHMgJiBOYXR1cmUnLFxuICAgIGZvb2RzOiAnRm9vZCAmIERyaW5rJyxcbiAgICBhY3Rpdml0eTogJ0FjdGl2aXR5JyxcbiAgICBwbGFjZXM6ICdUcmF2ZWwgJiBQbGFjZXMnLFxuICAgIG9iamVjdHM6ICdPYmplY3RzJyxcbiAgICBzeW1ib2xzOiAnU3ltYm9scycsXG4gICAgZmxhZ3M6ICdGbGFncycsXG4gICAgY3VzdG9tOiAnQ3VzdG9tJyxcbiAgfSxcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczoge1xuICAgIC4uLlBpY2tlclByb3BzLFxuICAgIGRhdGE6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFjdGl2ZVNraW46IHRoaXMuc2tpbiB8fCBzdG9yZS5nZXQoJ3NraW4nKSB8fCB0aGlzLmRlZmF1bHRTa2luLFxuICAgICAgdmlldzogbmV3IFBpY2tlclZpZXcodGhpcyksXG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGN1c3RvbVN0eWxlcygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRoOiB0aGlzLmNhbGN1bGF0ZVdpZHRoICsgJ3B4JyxcbiAgICAgICAgLi4udGhpcy5waWNrZXJTdHlsZXMsXG4gICAgICB9XG4gICAgfSxcbiAgICBlbW9qaVByb3BzKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmF0aXZlOiB0aGlzLm5hdGl2ZSxcbiAgICAgICAgc2tpbjogdGhpcy5hY3RpdmVTa2luLFxuICAgICAgICBzZXQ6IHRoaXMuc2V0LFxuICAgICAgICBlbW9qaVRvb2x0aXA6IHRoaXMuZW1vamlUb29sdGlwLFxuICAgICAgICBlbW9qaVNpemU6IHRoaXMuZW1vamlTaXplLFxuICAgICAgICBzZWxlY3RlZEVtb2ppOiB0aGlzLnZpZXcucHJldmlld0Vtb2ppLFxuICAgICAgICBzZWxlY3RlZEVtb2ppQ2F0ZWdvcnk6IHRoaXMudmlldy5wcmV2aWV3RW1vamlDYXRlZ29yeSxcbiAgICAgICAgb25FbnRlcjogdGhpcy5vbkVtb2ppRW50ZXIuYmluZCh0aGlzKSxcbiAgICAgICAgb25MZWF2ZTogdGhpcy5vbkVtb2ppTGVhdmUuYmluZCh0aGlzKSxcbiAgICAgICAgb25DbGljazogdGhpcy5vbkVtb2ppQ2xpY2suYmluZCh0aGlzKSxcbiAgICAgIH1cbiAgICB9LFxuICAgIHNraW5Qcm9wcygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHNraW46IHRoaXMuYWN0aXZlU2tpbixcbiAgICAgIH1cbiAgICB9LFxuICAgIGNhbGN1bGF0ZVdpZHRoKCkge1xuICAgICAgcmV0dXJuIHRoaXMucGVyTGluZSAqICh0aGlzLmVtb2ppU2l6ZSArIDEyKSArIDEyICsgMiArIG1lYXN1cmVTY3JvbGxiYXIoKVxuICAgIH0sXG4gICAgLy8gZW1vamlzUGVyUm93KCkge1xuICAgIC8vICAgY29uc3QgbGlzdEVsID0gdGhpcy4kcmVmcy5zY3JvbGxDb250ZW50XG4gICAgLy8gICBjb25zdCBlbW9qaUVsID0gbGlzdEVsLnF1ZXJ5U2VsZWN0b3IoJy5lbW9qaS1tYXJ0LWVtb2ppJylcbiAgICAvLyAgIHJldHVybiBNYXRoLmZsb29yKGxpc3RFbC5vZmZzZXRXaWR0aCAvIGVtb2ppRWwub2Zmc2V0V2lkdGgpXG4gICAgLy8gfSxcbiAgICBmaWx0ZXJlZENhdGVnb3JpZXMoKSB7XG4gICAgICByZXR1cm4gdGhpcy52aWV3LmZpbHRlcmVkQ2F0ZWdvcmllc1xuICAgIH0sXG4gICAgbWVyZ2VkSTE4bigpIHtcbiAgICAgIHJldHVybiBPYmplY3QuZnJlZXplKGRlZXBNZXJnZShJMThOLCB0aGlzLmkxOG4pKVxuICAgIH0sXG4gICAgaWRsZUVtb2ppKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5lbW9qaSh0aGlzLmVtb2ppKVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICdEZWZhdWx0IHByZXZpZXcgZW1vamkgYCcgK1xuICAgICAgICAgICAgdGhpcy5lbW9qaSArXG4gICAgICAgICAgICAnYCBpcyBub3QgYXZhaWxhYmxlLCBjaGVjayB0aGUgUGlja2VyIGBlbW9qaWAgcHJvcGVydHknLFxuICAgICAgICApXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSlcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5maXJzdEVtb2ppKClcbiAgICAgIH1cbiAgICB9LFxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgb25TY3JvbGwoKSB7XG4gICAgICBpZiAodGhpcy5pbmZpbml0ZVNjcm9sbCAmJiAhdGhpcy53YWl0aW5nRm9yUGFpbnQpIHtcbiAgICAgICAgdGhpcy53YWl0aW5nRm9yUGFpbnQgPSB0cnVlXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5vblNjcm9sbFBhaW50LmJpbmQodGhpcykpXG4gICAgICB9XG4gICAgfSxcbiAgICBvblNjcm9sbFBhaW50KCkge1xuICAgICAgdGhpcy53YWl0aW5nRm9yUGFpbnQgPSBmYWxzZVxuICAgICAgdGhpcy52aWV3Lm9uU2Nyb2xsKClcbiAgICB9LFxuICAgIG9uQW5jaG9yQ2xpY2soY2F0ZWdvcnkpIHtcbiAgICAgIHRoaXMudmlldy5vbkFuY2hvckNsaWNrKGNhdGVnb3J5KVxuICAgIH0sXG4gICAgb25TZWFyY2godmFsdWUpIHtcbiAgICAgIHRoaXMudmlldy5vblNlYXJjaCh2YWx1ZSlcbiAgICB9LFxuICAgIG9uRW1vamlFbnRlcihlbW9qaSkge1xuICAgICAgdGhpcy52aWV3Lm9uRW1vamlFbnRlcihlbW9qaSlcbiAgICB9LFxuICAgIG9uRW1vamlMZWF2ZShlbW9qaSkge1xuICAgICAgdGhpcy52aWV3Lm9uRW1vamlMZWF2ZShlbW9qaSlcbiAgICB9LFxuICAgIG9uQXJyb3dMZWZ0KCRldmVudCkge1xuICAgICAgY29uc3Qgb2xkSWR4ID0gdGhpcy52aWV3LnByZXZpZXdFbW9qaUlkeFxuICAgICAgdGhpcy52aWV3Lm9uQXJyb3dMZWZ0KClcbiAgICAgIGlmICgkZXZlbnQgJiYgdGhpcy52aWV3LnByZXZpZXdFbW9qaUlkeCAhPT0gb2xkSWR4KSB7XG4gICAgICAgIC8vIFByZXZlbnQgY3Vyc29yIG1vdmVtZW50IGluc2lkZSB0aGUgaW5wdXRcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIH1cbiAgICB9LFxuICAgIG9uQXJyb3dSaWdodCgpIHtcbiAgICAgIHRoaXMudmlldy5vbkFycm93UmlnaHQoKVxuICAgIH0sXG4gICAgb25BcnJvd0Rvd24oKSB7XG4gICAgICB0aGlzLnZpZXcub25BcnJvd0Rvd24oKVxuICAgIH0sXG4gICAgb25BcnJvd1VwKCRldmVudCkge1xuICAgICAgdGhpcy52aWV3Lm9uQXJyb3dVcCgpXG4gICAgICAvLyBQcmV2ZW50IGN1cnNvciBtb3ZlbWVudCBpbnNpZGUgdGhlIGlucHV0XG4gICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIH0sXG4gICAgb25FbnRlcigpIHtcbiAgICAgIGlmICghdGhpcy52aWV3LnByZXZpZXdFbW9qaSkge1xuICAgICAgICAvLyBXZSBtYXkgcHJlc3MgXCJFbnRlclwiIHdoZW4gbm90aGluZyBpcyBzZWxlY3RlZCxcbiAgICAgICAgLy8gZm9yIGV4YW1wbGUsIGlmIHdlIHNlYXJjaCBmb3IgXCJhc2RmXCIuXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgdGhpcy4kZW1pdCgnc2VsZWN0JywgdGhpcy52aWV3LnByZXZpZXdFbW9qaSlcbiAgICAgIGZyZXF1ZW50bHkuYWRkKHRoaXMudmlldy5wcmV2aWV3RW1vamkpXG4gICAgfSxcbiAgICBvbkVtb2ppQ2xpY2soZW1vamkpIHtcbiAgICAgIHRoaXMuJGVtaXQoJ3NlbGVjdCcsIGVtb2ppKVxuICAgICAgZnJlcXVlbnRseS5hZGQoZW1vamkpXG4gICAgfSxcbiAgICBvblRleHRTZWxlY3QoJGV2ZW50KSB7XG4gICAgICAvLyBQcmV2ZW50IGRlZmF1bHQgdGV4dCBzZWxlY3QgZXZlbnQuXG4gICAgICAvLyBJbiBWdWUgMyBpdCBnb2VzIHRocm91Z2ggdGhlIGNvbXBvbmVudCBhbmQgdHJpZ2dlcnMgdGhlIGBzZWxlY3RgXG4gICAgICAvLyBldmVudCB0aGF0IGlzIHN1cHBvc2VkIHRvIGJlIGVtbWl0ZWQgb25seSB3aXRoIGVtb2ppLlxuICAgICAgLy8gKHRoZXJlIGlzIG5vIHN1Y2ggcHJvYmxlbSBpbiBWdWUgMikuXG4gICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICB9LFxuICAgIG9uU2tpbkNoYW5nZShza2luKSB7XG4gICAgICB0aGlzLmFjdGl2ZVNraW4gPSBza2luXG4gICAgICBzdG9yZS51cGRhdGUoeyBza2luIH0pXG5cbiAgICAgIHRoaXMuJGVtaXQoJ3NraW4tY2hhbmdlJywgc2tpbilcbiAgICB9LFxuICAgIGdldENhdGVnb3J5Q29tcG9uZW50KGluZGV4KSB7XG4gICAgICBsZXQgY29tcG9uZW50ID0gdGhpcy4kcmVmc1snY2F0ZWdvcmllc18nICsgaW5kZXhdXG4gICAgICBpZiAoY29tcG9uZW50ICYmICcwJyBpbiBjb21wb25lbnQpIHtcbiAgICAgICAgLy8gVnVlIDIgaGFzICRyZWZzIHVuZGVyIHYtZm9yIGFzIGFuIGFycmF5LlxuICAgICAgICByZXR1cm4gY29tcG9uZW50WycwJ11cbiAgICAgIH1cbiAgICAgIC8vIFZ1ZSAzIGRvZXMgbm90IHN1cHBvcnQgJHJlZnMgYXMgYXJyYXkuXG4gICAgICByZXR1cm4gY29tcG9uZW50XG4gICAgfSxcbiAgfSxcbiAgY29tcG9uZW50czoge1xuICAgIEFuY2hvcnMsXG4gICAgQ2F0ZWdvcnksXG4gICAgUHJldmlldyxcbiAgICBTZWFyY2gsXG4gIH0sXG59XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiByb2xlPVwidGFibGlzdFwiIGNsYXNzPVwiZW1vamktbWFydC1hbmNob3JzXCI+XG4gICAgPGJ1dHRvblxuICAgICAgdi1mb3I9XCJjYXRlZ29yeSBpbiBjYXRlZ29yaWVzXCJcbiAgICAgIHJvbGU9XCJ0YWJcIlxuICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICA6YXJpYS1sYWJlbD1cImNhdGVnb3J5Lm5hbWVcIlxuICAgICAgOmFyaWEtc2VsZWN0ZWQ9XCJjYXRlZ29yeS5pZCA9PSBhY3RpdmVDYXRlZ29yeS5pZFwiXG4gICAgICA6a2V5PVwiY2F0ZWdvcnkuaWRcIlxuICAgICAgOmNsYXNzPVwie1xuICAgICAgICAnZW1vamktbWFydC1hbmNob3InOiB0cnVlLFxuICAgICAgICAnZW1vamktbWFydC1hbmNob3Itc2VsZWN0ZWQnOiBjYXRlZ29yeS5pZCA9PSBhY3RpdmVDYXRlZ29yeS5pZCxcbiAgICAgIH1cIlxuICAgICAgOnN0eWxlPVwieyBjb2xvcjogY2F0ZWdvcnkuaWQgPT0gYWN0aXZlQ2F0ZWdvcnkuaWQgPyBjb2xvciA6ICcnIH1cIlxuICAgICAgOmRhdGEtdGl0bGU9XCJpMThuLmNhdGVnb3JpZXNbY2F0ZWdvcnkuaWRdXCJcbiAgICAgIEBjbGljaz1cIiRlbWl0KCdjbGljaycsIGNhdGVnb3J5KVwiXG4gICAgPlxuICAgICAgPGRpdiBhcmlhLWhpZGRlbj1cInRydWVcIiB2LWh0bWw9XCJzdmdzW2NhdGVnb3J5LmlkXVwiIC8+XG4gICAgICA8c3BhblxuICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICBjbGFzcz1cImVtb2ppLW1hcnQtYW5jaG9yLWJhclwiXG4gICAgICAgIDpzdHlsZT1cInsgYmFja2dyb3VuZENvbG9yOiBjb2xvciB9XCJcbiAgICAgID48L3NwYW4+XG4gICAgPC9idXR0b24+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBzdmdzIGZyb20gJy4uL3N2Z3MnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IHtcbiAgICBpMThuOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICAgIGNvbG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgfSxcbiAgICBjYXRlZ29yaWVzOiB7XG4gICAgICB0eXBlOiBBcnJheSxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgYWN0aXZlQ2F0ZWdvcnk6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIGRlZmF1bHQoKSB7XG4gICAgICAgIHJldHVybiB7fVxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBjcmVhdGVkKCkge1xuICAgIHRoaXMuc3ZncyA9IHN2Z3NcbiAgfSxcbn1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8c2VjdGlvblxuICAgIDpjbGFzcz1cIntcbiAgICAgICdlbW9qaS1tYXJ0LWNhdGVnb3J5JzogdHJ1ZSxcbiAgICAgICdlbW9qaS1tYXJ0LW5vLXJlc3VsdHMnOiAhaGFzUmVzdWx0cyxcbiAgICB9XCJcbiAgICA6YXJpYS1sYWJlbD1cImkxOG4uY2F0ZWdvcmllc1tpZF1cIlxuICAgIHYtaWY9XCJpc1Zpc2libGUgJiYgKGlzU2VhcmNoIHx8IGhhc1Jlc3VsdHMpXCJcbiAgPlxuICAgIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LWNhdGVnb3J5LWxhYmVsXCI+XG4gICAgICA8aDMgY2xhc3M9XCJlbW9qaS1tYXJ0LWNhdGVnb3J5LWxhYmVsXCI+e3sgaTE4bi5jYXRlZ29yaWVzW2lkXSB9fTwvaDM+XG4gICAgPC9kaXY+XG5cbiAgICA8dGVtcGxhdGUgdi1mb3I9XCJ7IGVtb2ppT2JqZWN0LCBlbW9qaVZpZXcgfSBpbiBlbW9qaU9iamVjdHNcIj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgdi1pZj1cImVtb2ppVmlldy5jYW5SZW5kZXJcIlxuICAgICAgICA6YXJpYS1sYWJlbD1cImVtb2ppVmlldy5hcmlhTGFiZWxcIlxuICAgICAgICByb2xlPVwib3B0aW9uXCJcbiAgICAgICAgYXJpYS1zZWxlY3RlZD1cImZhbHNlXCJcbiAgICAgICAgYXJpYS1wb3NpbnNldD1cIjFcIlxuICAgICAgICBhcmlhLXNldHNpemU9XCIxODEyXCJcbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIDpkYXRhLXRpdGxlPVwiZW1vamlPYmplY3Quc2hvcnRfbmFtZVwiXG4gICAgICAgIDprZXk9XCJlbW9qaU9iamVjdC5pZFwiXG4gICAgICAgIDp0aXRsZT1cImVtb2ppVmlldy50aXRsZVwiXG4gICAgICAgIGNsYXNzPVwiZW1vamktbWFydC1lbW9qaVwiXG4gICAgICAgIDpjbGFzcz1cImFjdGl2ZUNsYXNzKGVtb2ppT2JqZWN0KVwiXG4gICAgICAgIEBtb3VzZWVudGVyPVwiZW1vamlQcm9wcy5vbkVudGVyKGVtb2ppVmlldy5nZXRFbW9qaSgpKVwiXG4gICAgICAgIEBtb3VzZWxlYXZlPVwiZW1vamlQcm9wcy5vbkxlYXZlKGVtb2ppVmlldy5nZXRFbW9qaSgpKVwiXG4gICAgICAgIEBjbGljaz1cImVtb2ppUHJvcHMub25DbGljayhlbW9qaVZpZXcuZ2V0RW1vamkoKSlcIlxuICAgICAgPlxuICAgICAgICA8c3BhbiA6Y2xhc3M9XCJlbW9qaVZpZXcuY3NzQ2xhc3NcIiA6c3R5bGU9XCJlbW9qaVZpZXcuY3NzU3R5bGVcIj57e1xuICAgICAgICAgIGVtb2ppVmlldy5jb250ZW50XG4gICAgICAgIH19PC9zcGFuPlxuICAgICAgPC9idXR0b24+XG4gICAgPC90ZW1wbGF0ZT5cblxuICAgIDxkaXYgdi1pZj1cIiFoYXNSZXN1bHRzXCI+XG4gICAgICA8ZW1vamlcbiAgICAgICAgOmRhdGE9XCJkYXRhXCJcbiAgICAgICAgZW1vamk9XCJzbGV1dGhfb3Jfc3B5XCJcbiAgICAgICAgOm5hdGl2ZT1cImVtb2ppUHJvcHMubmF0aXZlXCJcbiAgICAgICAgOnNraW49XCJlbW9qaVByb3BzLnNraW5cIlxuICAgICAgICA6c2V0PVwiZW1vamlQcm9wcy5zZXRcIlxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LW5vLXJlc3VsdHMtbGFiZWxcIj57eyBpMThuLm5vdGZvdW5kIH19PC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvc2VjdGlvbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBFbW9qaVZpZXcgfSBmcm9tICcuLi91dGlscy9lbW9qaS1kYXRhJ1xuaW1wb3J0IEVtb2ppIGZyb20gJy4vRW1vamkudnVlJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiB7XG4gICAgZGF0YToge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICBpMThuOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICAgIGlkOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICAgIG5hbWU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgZW1vamlzOiB7XG4gICAgICB0eXBlOiBBcnJheSxcbiAgICB9LFxuICAgIGVtb2ppUHJvcHM6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBhY3RpdmVDbGFzczogZnVuY3Rpb24oZW1vamlPYmplY3QpIHtcbiAgICAgIGlmICghdGhpcy5lbW9qaVByb3BzLnNlbGVjdGVkRW1vamkpIHtcbiAgICAgICAgcmV0dXJuICcnXG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuZW1vamlQcm9wcy5zZWxlY3RlZEVtb2ppQ2F0ZWdvcnkpIHtcbiAgICAgICAgcmV0dXJuICcnXG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuZW1vamlQcm9wcy5zZWxlY3RlZEVtb2ppLmlkID09IGVtb2ppT2JqZWN0LmlkICYmXG4gICAgICAgIHRoaXMuZW1vamlQcm9wcy5zZWxlY3RlZEVtb2ppQ2F0ZWdvcnkuaWQgPT0gdGhpcy5pZFxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiAnZW1vamktbWFydC1lbW9qaS1zZWxlY3RlZCdcbiAgICAgIH1cbiAgICAgIHJldHVybiAnJ1xuICAgIH0sXG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgaXNWaXNpYmxlKCkge1xuICAgICAgcmV0dXJuICEhdGhpcy5lbW9qaXNcbiAgICB9LFxuICAgIGlzU2VhcmNoKCkge1xuICAgICAgcmV0dXJuIHRoaXMubmFtZSA9PSAnU2VhcmNoJ1xuICAgIH0sXG4gICAgaGFzUmVzdWx0cygpIHtcbiAgICAgIHJldHVybiB0aGlzLmVtb2ppcy5sZW5ndGggPiAwXG4gICAgfSxcbiAgICBlbW9qaU9iamVjdHMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5lbW9qaXMubWFwKChlbW9qaSkgPT4ge1xuICAgICAgICBsZXQgZW1vamlPYmplY3QgPSBlbW9qaVxuICAgICAgICBsZXQgZW1vamlWaWV3ID0gbmV3IEVtb2ppVmlldyhcbiAgICAgICAgICBlbW9qaSxcbiAgICAgICAgICB0aGlzLmVtb2ppUHJvcHMuc2tpbixcbiAgICAgICAgICB0aGlzLmVtb2ppUHJvcHMuc2V0LFxuICAgICAgICAgIHRoaXMuZW1vamlQcm9wcy5uYXRpdmUsXG4gICAgICAgICAgdGhpcy5lbW9qaVByb3BzLmZhbGxiYWNrLFxuICAgICAgICAgIHRoaXMuZW1vamlQcm9wcy5lbW9qaVRvb2x0aXAsXG4gICAgICAgICAgdGhpcy5lbW9qaVByb3BzLmVtb2ppU2l6ZSxcbiAgICAgICAgKVxuICAgICAgICByZXR1cm4geyBlbW9qaU9iamVjdCwgZW1vamlWaWV3IH1cbiAgICAgIH0pXG4gICAgfSxcbiAgfSxcbiAgY29tcG9uZW50czoge1xuICAgIEVtb2ppLFxuICB9LFxufVxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG5cbjxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LXByZXZpZXdcIj5cbiAgPHRlbXBsYXRlIHYtaWY9XCJlbW9qaVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtcHJldmlldy1lbW9qaVwiPlxuICAgICAgICA8ZW1vamlcbiAgICAgICAgICA6ZGF0YT1cImRhdGFcIlxuICAgICAgICAgIDplbW9qaT1cImVtb2ppXCJcbiAgICAgICAgICA6bmF0aXZlPVwiZW1vamlQcm9wcy5uYXRpdmVcIlxuICAgICAgICAgIDpza2luPVwiZW1vamlQcm9wcy5za2luXCJcbiAgICAgICAgICA6c2V0PVwiZW1vamlQcm9wcy5zZXRcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LXByZXZpZXctZGF0YVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1wcmV2aWV3LW5hbWVcIj57eyBlbW9qaS5uYW1lIH19PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LXByZXZpZXctc2hvcnRuYW1lc1wiPlxuICAgICAgICAgIDxzcGFuIHYtZm9yPVwic2hvcnROYW1lIGluIGVtb2ppU2hvcnROYW1lc1wiIDprZXk9XCJzaG9ydE5hbWVcIiBjbGFzcz1cImVtb2ppLW1hcnQtcHJldmlldy1zaG9ydG5hbWVcIj46e3sgc2hvcnROYW1lIH19Ojwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LXByZXZpZXctZW1vdGljb25zXCI+XG4gICAgICAgICAgPHNwYW4gdi1mb3I9XCJlbW90aWNvbiBpbiBlbW9qaUVtb3RpY29uc1wiIDprZXk9XCJlbW90aWNvblwiIGNsYXNzPVwiZW1vamktbWFydC1wcmV2aWV3LWVtb3RpY29uXCI+e3sgZW1vdGljb24gfX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gIDwvdGVtcGxhdGU+XG5cbiAgPHRlbXBsYXRlIHYtZWxzZT5cbiAgICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1wcmV2aWV3LWVtb2ppXCI+XG4gICAgICA8ZW1vamlcbiAgICAgICAgOmRhdGE9XCJkYXRhXCJcbiAgICAgICAgOmVtb2ppPVwiaWRsZUVtb2ppXCJcbiAgICAgICAgOm5hdGl2ZT1cImVtb2ppUHJvcHMubmF0aXZlXCJcbiAgICAgICAgOnNraW49XCJlbW9qaVByb3BzLnNraW5cIlxuICAgICAgICA6c2V0PVwiZW1vamlQcm9wcy5zZXRcIlxuICAgICAgLz5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LXByZXZpZXctZGF0YVwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJlbW9qaS1tYXJ0LXRpdGxlLWxhYmVsXCI+e3sgdGl0bGUgfX08L3NwYW4+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IHYtaWY9XCJzaG93U2tpblRvbmVzXCIgY2xhc3M9XCJlbW9qaS1tYXJ0LXByZXZpZXctc2tpbnNcIj5cbiAgICAgIDxza2lucyA6c2tpbj1cInNraW5Qcm9wcy5za2luXCIgQGNoYW5nZT1cIm9uU2tpbkNoYW5nZSgkZXZlbnQpXCIgLz5cbiAgICA8L2Rpdj5cbiAgPC90ZW1wbGF0ZT5cbjwvZGl2PlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5pbXBvcnQgRW1vamkgZnJvbSAnLi9FbW9qaS52dWUnXG5pbXBvcnQgU2tpbnMgZnJvbSAnLi9za2lucy52dWUnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IHtcbiAgICBkYXRhOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgdGl0bGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBlbW9qaToge1xuICAgICAgdHlwZTogW1N0cmluZywgT2JqZWN0XVxuICAgIH0sXG4gICAgaWRsZUVtb2ppOiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBPYmplY3RdLFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIHNob3dTa2luVG9uZXM6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiB0cnVlXG4gICAgfSxcbiAgICBlbW9qaVByb3BzOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgc2tpblByb3BzOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgb25Ta2luQ2hhbmdlOiB7XG4gICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGVtb2ppRGF0YSgpIHtcbiAgICAgIGlmICh0aGlzLmVtb2ppKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVtb2ppXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4ge31cbiAgICAgIH1cbiAgICB9LFxuICAgIGVtb2ppU2hvcnROYW1lcygpIHtcbiAgICAgIHJldHVybiB0aGlzLmVtb2ppRGF0YS5zaG9ydF9uYW1lc1xuICAgIH0sXG4gICAgZW1vamlFbW90aWNvbnMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5lbW9qaURhdGEuZW1vdGljb25zXG4gICAgfVxuICB9LFxuICBjb21wb25lbnRzOiB7XG4gICAgRW1vamksXG4gICAgU2tpbnNcbiAgfVxufVxuXG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtc2VhcmNoXCI+XG4gICAgPGlucHV0XG4gICAgICB0eXBlPVwidGV4dFwiXG4gICAgICA6cGxhY2Vob2xkZXI9XCJpMThuLnNlYXJjaFwiXG4gICAgICByb2xlPVwidGV4dGJveFwiXG4gICAgICBhcmlhLWF1dG9jb21wbGV0ZT1cImxpc3RcIlxuICAgICAgYXJpYS1vd25zPVwiZW1vamktbWFydC1saXN0XCJcbiAgICAgIGFyaWEtbGFiZWw9XCJTZWFyY2ggZm9yIGFuIGVtb2ppXCJcbiAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJlbW9qaS1tYXJ0LXNlYXJjaC1kZXNjcmlwdGlvblwiXG4gICAgICBAa2V5ZG93bi5sZWZ0PVwiKCRldmVudCkgPT4gJGVtaXQoJ2Fycm93TGVmdCcsICRldmVudClcIlxuICAgICAgQGtleWRvd24ucmlnaHQ9XCIoKSA9PiAkZW1pdCgnYXJyb3dSaWdodCcpXCJcbiAgICAgIEBrZXlkb3duLmRvd249XCIoKSA9PiAkZW1pdCgnYXJyb3dEb3duJylcIlxuICAgICAgQGtleWRvd24udXA9XCIoJGV2ZW50KSA9PiAkZW1pdCgnYXJyb3dVcCcsICRldmVudClcIlxuICAgICAgQGtleWRvd24uZW50ZXI9XCIoKSA9PiAkZW1pdCgnZW50ZXInKVwiXG4gICAgICB2LW1vZGVsPVwidmFsdWVcIlxuICAgIC8+XG4gICAgPHNwYW4gY2xhc3M9XCJoaWRkZW5cIiBpZD1cImVtb2ppLXBpY2tlci1zZWFyY2gtZGVzY3JpcHRpb25cIlxuICAgICAgPlVzZSB0aGUgbGVmdCwgcmlnaHQsIHVwIGFuZCBkb3duIGFycm93IGtleXMgdG8gbmF2aWdhdGUgdGhlIGVtb2ppIHNlYXJjaFxuICAgICAgcmVzdWx0cy48L3NwYW5cbiAgICA+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IHtcbiAgICBkYXRhOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICAgIGkxOG46IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgYXV0b0ZvY3VzOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgfSxcbiAgICBvblNlYXJjaDoge1xuICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICAgIG9uQXJyb3dMZWZ0OiB7XG4gICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICB9LFxuICAgIG9uQXJyb3dSaWdodDoge1xuICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgfSxcbiAgICBvbkFycm93RG93bjoge1xuICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgfSxcbiAgICBvbkFycm93VXA6IHtcbiAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgIH0sXG4gICAgb25FbnRlcjoge1xuICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgfSxcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6ICcnLFxuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBlbW9qaUluZGV4KCkge1xuICAgICAgcmV0dXJuIHRoaXMuZGF0YVxuICAgIH0sXG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgdmFsdWUoKSB7XG4gICAgICB0aGlzLiRlbWl0KCdzZWFyY2gnLCB0aGlzLnZhbHVlKVxuICAgIH0sXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBjbGVhcigpIHtcbiAgICAgIHRoaXMudmFsdWUgPSAnJ1xuICAgIH0sXG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgbGV0ICRpbnB1dCA9IHRoaXMuJGVsLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JylcblxuICAgIGlmICh0aGlzLmF1dG9Gb2N1cykge1xuICAgICAgJGlucHV0LmZvY3VzKClcbiAgICB9XG4gIH0sXG59XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cblxuPGRpdiA6Y2xhc3M9XCJ7ICdlbW9qaS1tYXJ0LXNraW4tc3dhdGNoZXMnOiB0cnVlLCAnZW1vamktbWFydC1za2luLXN3YXRjaGVzLW9wZW5lZCc6IG9wZW5lZCB9XCI+XG4gIDxzcGFuIHYtZm9yPVwic2tpblRvbmUgaW4gNlwiIDprZXk9XCJza2luVG9uZVwiIDpjbGFzcz1cInsgJ2Vtb2ppLW1hcnQtc2tpbi1zd2F0Y2gnOiB0cnVlLCAnZW1vamktbWFydC1za2luLXN3YXRjaC1zZWxlY3RlZCc6IHNraW4gPT0gc2tpblRvbmUgfVwiPlxuICAgIDxzcGFuIDpjbGFzcz1cIidlbW9qaS1tYXJ0LXNraW4gZW1vamktbWFydC1za2luLXRvbmUtJyArIHNraW5Ub25lXCIgQGNsaWNrPVwib25DbGljayhza2luVG9uZSlcIj48L3NwYW4+XG4gIDwvc3Bhbj5cbjwvZGl2PlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiB7XG4gICAgc2tpbjoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9XG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9wZW5lZDogZmFsc2VcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBvbkNsaWNrKHNraW5Ub25lKSB7XG4gICAgICBpZiAodGhpcy5vcGVuZWQpIHtcbiAgICAgICAgaWYgKHNraW5Ub25lICE9IHRoaXMuc2tpbikge1xuICAgICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIHNraW5Ub25lKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMub3BlbmVkID0gIXRoaXMub3BlbmVkXG4gICAgfVxuICB9XG59XG5cbjwvc2NyaXB0PlxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBBbmNob3JzIH0gZnJvbSAnLi9hbmNob3JzLnZ1ZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2F0ZWdvcnkgfSBmcm9tICcuL2NhdGVnb3J5LnZ1ZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUHJldmlldyB9IGZyb20gJy4vcHJldmlldy52dWUnXG5leHBvcnQgeyBkZWZhdWx0IGFzIFNlYXJjaCB9IGZyb20gJy4vc2VhcmNoLnZ1ZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2tpbnMgfSBmcm9tICcuL3NraW5zLnZ1ZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRW1vamkgfSBmcm9tICcuL0Vtb2ppLnZ1ZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUGlja2VyIH0gZnJvbSAnLi9QaWNrZXIudnVlJ1xuIiwiY29uc3QgX1N0cmluZyA9IFN0cmluZ1xuXG5leHBvcnQgZGVmYXVsdCBfU3RyaW5nLmZyb21Db2RlUG9pbnQgfHxcbiAgZnVuY3Rpb24gc3RyaW5nRnJvbUNvZGVQb2ludCgpIHtcbiAgICB2YXIgTUFYX1NJWkUgPSAweDQwMDBcbiAgICB2YXIgY29kZVVuaXRzID0gW11cbiAgICB2YXIgaGlnaFN1cnJvZ2F0ZVxuICAgIHZhciBsb3dTdXJyb2dhdGVcbiAgICB2YXIgaW5kZXggPSAtMVxuICAgIHZhciBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgaWYgKCFsZW5ndGgpIHtcbiAgICAgIHJldHVybiAnJ1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gJydcbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgdmFyIGNvZGVQb2ludCA9IE51bWJlcihhcmd1bWVudHNbaW5kZXhdKVxuICAgICAgaWYgKFxuICAgICAgICAhaXNGaW5pdGUoY29kZVBvaW50KSB8fCAvLyBgTmFOYCwgYCtJbmZpbml0eWAsIG9yIGAtSW5maW5pdHlgXG4gICAgICAgIGNvZGVQb2ludCA8IDAgfHwgLy8gbm90IGEgdmFsaWQgVW5pY29kZSBjb2RlIHBvaW50XG4gICAgICAgIGNvZGVQb2ludCA+IDB4MTBmZmZmIHx8IC8vIG5vdCBhIHZhbGlkIFVuaWNvZGUgY29kZSBwb2ludFxuICAgICAgICBNYXRoLmZsb29yKGNvZGVQb2ludCkgIT0gY29kZVBvaW50IC8vIG5vdCBhbiBpbnRlZ2VyXG4gICAgICApIHtcbiAgICAgICAgdGhyb3cgUmFuZ2VFcnJvcignSW52YWxpZCBjb2RlIHBvaW50OiAnICsgY29kZVBvaW50KVxuICAgICAgfVxuICAgICAgaWYgKGNvZGVQb2ludCA8PSAweGZmZmYpIHtcbiAgICAgICAgLy8gQk1QIGNvZGUgcG9pbnRcbiAgICAgICAgY29kZVVuaXRzLnB1c2goY29kZVBvaW50KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQXN0cmFsIGNvZGUgcG9pbnQ7IHNwbGl0IGluIHN1cnJvZ2F0ZSBoYWx2ZXNcbiAgICAgICAgLy8gaHR0cDovL21hdGhpYXNieW5lbnMuYmUvbm90ZXMvamF2YXNjcmlwdC1lbmNvZGluZyNzdXJyb2dhdGUtZm9ybXVsYWVcbiAgICAgICAgY29kZVBvaW50IC09IDB4MTAwMDBcbiAgICAgICAgaGlnaFN1cnJvZ2F0ZSA9IChjb2RlUG9pbnQgPj4gMTApICsgMHhkODAwXG4gICAgICAgIGxvd1N1cnJvZ2F0ZSA9IChjb2RlUG9pbnQgJSAweDQwMCkgKyAweGRjMDBcbiAgICAgICAgY29kZVVuaXRzLnB1c2goaGlnaFN1cnJvZ2F0ZSwgbG93U3Vycm9nYXRlKVxuICAgICAgfVxuICAgICAgaWYgKGluZGV4ICsgMSA9PT0gbGVuZ3RoIHx8IGNvZGVVbml0cy5sZW5ndGggPiBNQVhfU0laRSkge1xuICAgICAgICByZXN1bHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLCBjb2RlVW5pdHMpXG4gICAgICAgIGNvZGVVbml0cy5sZW5ndGggPSAwXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfVxuIiwiY29uc3QgU1ZHcyA9IHtcbiAgYWN0aXZpdHk6IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+PHBhdGggZD1cIk0xMiAwQzUuMzczIDAgMCA1LjM3MiAwIDEyYzAgNi42MjcgNS4zNzMgMTIgMTIgMTIgNi42MjggMCAxMi01LjM3MyAxMi0xMiAwLTYuNjI4LTUuMzcyLTEyLTEyLTEybTkuOTQ5IDExSDE3LjA1Yy4yMjQtMi41MjcgMS4yMzItNC43NzMgMS45NjgtNi4xMTNBOS45NjYgOS45NjYgMCAwIDEgMjEuOTQ5IDExTTEzIDExVjIuMDUxYTkuOTQ1IDkuOTQ1IDAgMCAxIDQuNDMyIDEuNTY0Yy0uODU4IDEuNDkxLTIuMTU2IDQuMjItMi4zOTIgNy4zODVIMTN6bS0yIDBIOC45NjFjLS4yMzgtMy4xNjUtMS41MzYtNS44OTQtMi4zOTMtNy4zODVBOS45NSA5Ljk1IDAgMCAxIDExIDIuMDUxVjExem0wIDJ2OC45NDlhOS45MzcgOS45MzcgMCAwIDEtNC40MzItMS41NjRjLjg1Ny0xLjQ5MiAyLjE1NS00LjIyMSAyLjM5My03LjM4NUgxMXptNC4wNCAwYy4yMzYgMy4xNjQgMS41MzQgNS44OTMgMi4zOTIgNy4zODVBOS45MiA5LjkyIDAgMCAxIDEzIDIxLjk0OVYxM2gyLjA0ek00Ljk4MiA0Ljg4N0M1LjcxOCA2LjIyNyA2LjcyNiA4LjQ3MyA2Ljk1MSAxMWgtNC45YTkuOTc3IDkuOTc3IDAgMCAxIDIuOTMxLTYuMTEzTTIuMDUxIDEzaDQuOWMtLjIyNiAyLjUyNy0xLjIzMyA0Ljc3MS0xLjk2OSA2LjExM0E5Ljk3MiA5Ljk3MiAwIDAgMSAyLjA1MSAxM20xNi45NjcgNi4xMTNjLS43MzUtMS4zNDItMS43NDQtMy41ODYtMS45NjgtNi4xMTNoNC44OTlhOS45NjEgOS45NjEgMCAwIDEtMi45MzEgNi4xMTNcIi8+PC9zdmc+YCxcblxuICBjdXN0b206IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+PGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDIuMDAwMDAwLCAxLjAwMDAwMClcIj48cmVjdCBpZD1cIlJlY3RhbmdsZVwiIHg9XCI4XCIgeT1cIjBcIiB3aWR0aD1cIjNcIiBoZWlnaHQ9XCIyMVwiIHJ4PVwiMS41XCI+PC9yZWN0PjxyZWN0IGlkPVwiUmVjdGFuZ2xlXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDkuODQzLCAxMC41NDkpIHJvdGF0ZSg2MCkgdHJhbnNsYXRlKC05Ljg0MywgLTEwLjU0OSkgXCIgeD1cIjguMzQzXCIgeT1cIjAuMDQ5XCIgd2lkdGg9XCIzXCIgaGVpZ2h0PVwiMjFcIiByeD1cIjEuNVwiPjwvcmVjdD48cmVjdCBpZD1cIlJlY3RhbmdsZVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg5Ljg0MywgMTAuNTQ5KSByb3RhdGUoLTYwKSB0cmFuc2xhdGUoLTkuODQzLCAtMTAuNTQ5KSBcIiB4PVwiOC4zNDNcIiB5PVwiMC4wNDlcIiB3aWR0aD1cIjNcIiBoZWlnaHQ9XCIyMVwiIHJ4PVwiMS41XCI+PC9yZWN0PjwvZz48L3N2Zz5gLFxuXG4gIGZsYWdzOiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiPjxwYXRoIGQ9XCJNMCAwbDYuMDg0IDI0SDhMMS45MTYgMHpNMjEgNWgtNGwtMS00SDRsMyAxMmgzbDEgNGgxM0wyMSA1ek02LjU2MyAzaDcuODc1bDIgOEg4LjU2M2wtMi04em04LjgzMiAxMGwtMi44NTYgMS45MDRMMTIuMDYzIDEzaDMuMzMyek0xOSAxM2wtMS41LTZoMS45MzhsMiA4SDE2bDMtMnpcIi8+PC9zdmc+YCxcblxuICBmb29kczogYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj48cGF0aCBkPVwiTTE3IDQuOTc4Yy0xLjgzOCAwLTIuODc2LjM5Ni0zLjY4LjkzNC41MTMtMS4xNzIgMS43NjgtMi45MzQgNC42OC0yLjkzNGExIDEgMCAwIDAgMC0yYy0yLjkyMSAwLTQuNjI5IDEuMzY1LTUuNTQ3IDIuNTEyLS4wNjQuMDc4LS4xMTkuMTYyLS4xOC4yNDRDMTEuNzMgMS44MzggMTAuNzk4LjAyMyA5LjIwNy4wMjMgOC41NzkuMDIyIDcuODUuMzA2IDcgLjk3OCA1LjAyNyAyLjU0IDUuMzI5IDMuOTAyIDYuNDkyIDQuOTk5IDMuNjA5IDUuMjIyIDAgNy4zNTIgMCAxMi45NjljMCA0LjU4MiA0Ljk2MSAxMS4wMDkgOSAxMS4wMDkgMS45NzUgMCAyLjM3MS0uNDg2IDMtMSAuNjI5LjUxNCAxLjAyNSAxIDMgMSA0LjAzOSAwIDktNi40MTggOS0xMSAwLTUuOTUzLTQuMDU1LTgtNy04TTguMjQyIDIuNTQ2Yy42NDEtLjUwOC45NDMtLjUyMy45NjUtLjUyMy40MjYuMTY5Ljk3NSAxLjQwNSAxLjM1NyAzLjA1NS0xLjUyNy0uNjI5LTIuNzQxLTEuMzUyLTIuOTgtMS44NDYuMDU5LS4xMTIuMjQxLS4zNTYuNjU4LS42ODZNMTUgMjEuOTc4Yy0xLjA4IDAtMS4yMS0uMTA5LTEuNTU5LS40MDJsLS4xNzYtLjE0NmMtLjM2Ny0uMzAyLS44MTYtLjQ1Mi0xLjI2Ni0uNDUycy0uODk4LjE1LTEuMjY2LjQ1MmwtLjE3Ni4xNDZjLS4zNDcuMjkyLS40NzcuNDAyLTEuNTU3LjQwMi0yLjgxMyAwLTctNS4zODktNy05LjAwOSAwLTUuODIzIDQuNDg4LTUuOTkxIDUtNS45OTEgMS45MzkgMCAyLjQ4NC40NzEgMy4zODcgMS4yNTFsLjMyMy4yNzZhMS45OTUgMS45OTUgMCAwIDAgMi41OCAwbC4zMjMtLjI3NmMuOTAyLS43OCAxLjQ0Ny0xLjI1MSAzLjM4Ny0xLjI1MS41MTIgMCA1IC4xNjggNSA2IDAgMy42MTctNC4xODcgOS03IDlcIi8+PC9zdmc+YCxcblxuICBuYXR1cmU6IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+PHBhdGggZD1cIk0xNS41IDhhMS41IDEuNSAwIDEgMCAuMDAxIDMuMDAxQTEuNSAxLjUgMCAwIDAgMTUuNSA4TTguNSA4YTEuNSAxLjUgMCAxIDAgLjAwMSAzLjAwMUExLjUgMS41IDAgMCAwIDguNSA4XCIvPjxwYXRoIGQ9XCJNMTguOTMzIDBoLS4wMjdjLS45NyAwLTIuMTM4Ljc4Ny0zLjAxOCAxLjQ5Ny0xLjI3NC0uMzc0LTIuNjEyLS41MS0zLjg4Ny0uNTEtMS4yODUgMC0yLjYxNi4xMzMtMy44NzQuNTE3QzcuMjQ1Ljc5IDYuMDY5IDAgNS4wOTMgMGgtLjAyN0MzLjM1MiAwIC4wNyAyLjY3LjAwMiA3LjAyNmMtLjAzOSAyLjQ3OS4yNzYgNC4yMzggMS4wNCA1LjAxMy4yNTQuMjU4Ljg4Mi42NzcgMS4yOTUuODgyLjE5MSAzLjE3Ny45MjIgNS4yMzggMi41MzYgNi4zOC44OTcuNjM3IDIuMTg3Ljk0OSAzLjIgMS4xMDJDOC4wNCAyMC42IDggMjAuNzk1IDggMjFjMCAxLjc3MyAyLjM1IDMgNCAzIDEuNjQ4IDAgNC0xLjIyNyA0LTMgMC0uMjAxLS4wMzgtLjM5My0uMDcyLS41ODYgMi41NzMtLjM4NSA1LjQzNS0xLjg3NyA1LjkyNS03LjU4Ny4zOTYtLjIyLjg4Ny0uNTY4IDEuMTA0LS43ODguNzYzLS43NzQgMS4wNzktMi41MzQgMS4wNC01LjAxM0MyMy45MjkgMi42NyAyMC42NDYgMCAxOC45MzMgME0zLjIyMyA5LjEzNWMtLjIzNy4yODEtLjgzNyAxLjE1NS0uODg0IDEuMjM4LS4xNS0uNDEtLjM2OC0xLjM0OS0uMzM3LTMuMjkxLjA1MS0zLjI4MSAyLjQ3OC00Ljk3MiAzLjA5MS01LjAzMS4yNTYuMDE1LjczMS4yNyAxLjI2NS42NDYtMS4xMSAxLjE3MS0yLjI3NSAyLjkxNS0yLjM1MiA1LjEyNS0uMTMzLjU0Ni0uMzk4Ljg1OC0uNzgzIDEuMzEzTTEyIDIyYy0uOTAxIDAtMS45NTQtLjY5My0yLTEgMC0uNjU0LjQ3NS0xLjIzNiAxLTEuNjAyVjIwYTEgMSAwIDEgMCAyIDB2LS42MDJjLjUyNC4zNjUgMSAuOTQ3IDEgMS42MDItLjA0Ni4zMDctMS4wOTkgMS0yIDFtMy0zLjQ4di4wMmE0Ljc1MiA0Ljc1MiAwIDAgMC0xLjI2Mi0xLjAyYzEuMDkyLS41MTYgMi4yMzktMS4zMzQgMi4yMzktMi4yMTcgMC0xLjg0Mi0xLjc4MS0yLjE5NS0zLjk3Ny0yLjE5NS0yLjE5NiAwLTMuOTc4LjM1NC0zLjk3OCAyLjE5NSAwIC44ODMgMS4xNDggMS43MDEgMi4yMzggMi4yMTdBNC44IDQuOCAwIDAgMCA5IDE4LjUzOXYtLjAyNWMtMS0uMDc2LTIuMTgyLS4yODEtMi45NzMtLjg0Mi0xLjMwMS0uOTItMS44MzgtMy4wNDUtMS44NTMtNi40NzhsLjAyMy0uMDQxYy40OTYtLjgyNiAxLjQ5LTEuNDUgMS44MDQtMy4xMDIgMC0yLjA0NyAxLjM1Ny0zLjYzMSAyLjM2Mi00LjUyMkM5LjM3IDMuMTc4IDEwLjU1NSAzIDExLjk0OCAzYzEuNDQ3IDAgMi42ODUuMTkyIDMuNzMzLjU3IDEgLjkgMi4zMTYgMi40NjUgMi4zMTYgNC40OC4zMTMgMS42NTEgMS4zMDcgMi4yNzUgMS44MDMgMy4xMDIuMDM1LjA1OC4wNjguMTE3LjEwMi4xNzgtLjA1OSA1Ljk2Ny0xLjk0OSA3LjAxLTQuOTAyIDcuMTltNi42MjgtOC4yMDJjLS4wMzctLjA2NS0uMDc0LS4xMy0uMTEzLS4xOTVhNy41ODcgNy41ODcgMCAwIDAtLjczOS0uOTg3Yy0uMzg1LS40NTUtLjY0OC0uNzY4LS43ODItMS4zMTMtLjA3Ni0yLjIwOS0xLjI0MS0zLjk1NC0yLjM1My01LjEyNC41MzEtLjM3NiAxLjAwNC0uNjMgMS4yNjEtLjY0Ny42MzYuMDcxIDMuMDQ0IDEuNzY0IDMuMDk2IDUuMDMxLjAyNyAxLjgxLS4zNDcgMy4yMTgtLjM3IDMuMjM1XCIvPjwvc3ZnPmAsXG5cbiAgb2JqZWN0czogYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj48cGF0aCBkPVwiTTEyIDBhOSA5IDAgMCAwLTUgMTYuNDgyVjIxczIuMDM1IDMgNSAzIDUtMyA1LTN2LTQuNTE4QTkgOSAwIDAgMCAxMiAwem0wIDJjMy44NiAwIDcgMy4xNDEgNyA3cy0zLjE0IDctNyA3LTctMy4xNDEtNy03IDMuMTQtNyA3LTd6TTkgMTcuNDc3Yy45NC4zMzIgMS45NDYuNTIzIDMgLjUyM3MyLjA2LS4xOSAzLS41MjN2LjgzNGMtLjkxLjQzNi0xLjkyNS42ODktMyAuNjg5YTYuOTI0IDYuOTI0IDAgMCAxLTMtLjY5di0uODMzem0uMjM2IDMuMDdBOC44NTQgOC44NTQgMCAwIDAgMTIgMjFjLjk2NSAwIDEuODg4LS4xNjcgMi43NTgtLjQ1MUMxNC4xNTUgMjEuMTczIDEzLjE1MyAyMiAxMiAyMmMtMS4xMDIgMC0yLjExNy0uNzg5LTIuNzY0LTEuNDUzelwiLz48cGF0aCBkPVwiTTE0Ljc0NSAxMi40NDloLS4wMDRjLS44NTItLjAyNC0xLjE4OC0uODU4LTEuNTc3LTEuODI0LS40MjEtMS4wNjEtLjcwMy0xLjU2MS0xLjE4Mi0xLjU2NmgtLjAwOWMtLjQ4MSAwLS43ODMuNDk3LTEuMjM1IDEuNTM3LS40MzYuOTgyLS44MDEgMS44MTEtMS42MzYgMS43OTFsLS4yNzYtLjA0M2MtLjU2NS0uMTcxLS44NTMtLjY5MS0xLjI4NC0xLjc5NC0uMTI1LS4zMTMtLjIwMi0uNjMyLS4yNy0uOTEzLS4wNTEtLjIxMy0uMTI3LS41My0uMTk1LS42MzRDNy4wNjcgOS4wMDQgNy4wMzkgOSA2Ljk5IDlBMSAxIDAgMCAxIDcgN2guMDFjMS42NjIuMDE3IDIuMDE1IDEuMzczIDIuMTk4IDIuMTM0LjQ4Ni0uOTgxIDEuMzA0LTIuMDU4IDIuNzk3LTIuMDc1IDEuNTMxLjAxOCAyLjI4IDEuMTUzIDIuNzMxIDIuMTQxbC4wMDItLjAwOEMxNC45NDQgOC40MjQgMTUuMzI3IDcgMTYuOTc5IDdoLjAzMkExIDEgMCAxIDEgMTcgOWgtLjAxMWMtLjE0OS4wNzYtLjI1Ni40NzQtLjMxOS43MDlhNi40ODQgNi40ODQgMCAwIDEtLjMxMS45NTFjLS40MjkuOTczLS43OSAxLjc4OS0xLjYxNCAxLjc4OVwiLz48L3N2Zz5gLFxuXG4gIHNtaWxleXM6IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+PHBhdGggZD1cIk0xMiAwQzUuMzczIDAgMCA1LjM3MyAwIDEyczUuMzczIDEyIDEyIDEyIDEyLTUuMzczIDEyLTEyUzE4LjYyNyAwIDEyIDBtMCAyMkM2LjQ4NiAyMiAyIDE3LjUxNCAyIDEyUzYuNDg2IDIgMTIgMnMxMCA0LjQ4NiAxMCAxMC00LjQ4NiAxMC0xMCAxMFwiLz48cGF0aCBkPVwiTTggN2EyIDIgMCAxIDAtLjAwMSAzLjk5OUEyIDIgMCAwIDAgOCA3TTE2IDdhMiAyIDAgMSAwLS4wMDEgMy45OTlBMiAyIDAgMCAwIDE2IDdNMTUuMjMyIDE1Yy0uNjkzIDEuMTk1LTEuODcgMi0zLjM0OSAyLTEuNDc3IDAtMi42NTUtLjgwNS0zLjM0Ny0ySDE1bTMtMkg2YTYgNiAwIDEgMCAxMiAwXCIvPjwvc3ZnPmAsXG5cbiAgcGVvcGxlOiBgPHN2ZyB4bWxuczpzdmc9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGhlaWdodD1cIjI0XCIgd2lkdGg9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj4gPHBhdGggaWQ9XCJwYXRoMzgxNFwiIGQ9XCJtIDMuMzU5MTA4OSwyMS4xNzcyNiBjIDAuMTcyMDM2LDAuMDkzODUgNC4yNjU5OTQsMi4yOTgzNyA4LjgxNDQ0NTEsMi4yOTgzNyA0LjkyNzc2NywwIDguNjcwODk0LC0yLjIxMTg4MyA4LjgyNzgyLC0yLjMwNjAxOSAwLjExMzA3OSwtMC4wNjc4NSAwLjE4MjI2OCwtMC4xOTAwNTEgMC4xODIyNjcsLTAuMzIxOTIzIDAsLTMuMDMxMTkgLTAuOTI5NDk0LC01LjgwNDkzNiAtMi42MTcxOTYsLTcuODEwNzEyIC0xLjE4MDYwMywtMS40MDMxMzQgLTIuNjYxOTE4LC0yLjM1OTUxNiAtNC4yOTU2OTksLTIuNzk5NzkxIDQuNjk5MTE4LC0yLjIzNjI1OCAzLjEwMjMwNiwtOS4yODYxNzE2MiAtMi4wOTcxOTEsLTkuMjg2MTcxNjIgLTUuMTk5NDk3OCwwIC02Ljc5NjMxMDMsNy4wNDk5MTM2MiAtMi4wOTcxOTIsOS4yODYxNzE2MiAtMS42MzM3ODIxLDAuNDQwMjc1IC0zLjExNTA5NzEsMS4zOTY3OTggLTQuMjk1Njk5MSwyLjc5OTc5MSAtMS42ODc3MDMsMi4wMDU3NzYgLTIuNjE3MTk2LDQuNzc5NTIyIC0yLjYxNzE5Niw3LjgxMDcxMiAxLjJlLTYsMC4xMzczNzggMC4wNzUwMzksMC4yNjM3ODUgMC4xOTU2NDEsMC4zMjk1NzIgeiBNIDguMDQzOTMxOSw1LjgzMDg3ODMgQyA4LjA0MzkzMDksMi4xNTE1MjEgMTIuNDkyMTA3LDAuMzA5NTU4MTEgMTUuMDkzNDkxLDIuOTEwOTQxMSAxNy42OTQ4NzQsNS41MTIzMjQxIDE1Ljg1MjkxMSw5Ljk2MDUwMDYgMTIuMTczNTU0LDkuOTYwNSA5Ljg5Mzg5OTEsOS45NTc5MTM1IDguMDQ2NTE4Niw4LjExMDUzMzIgOC4wNDM5MzE5LDUuODMwODc4MyBaIG0gLTEuNjg4NzgyLDcuNjg5NDk3NyBjIDEuNTI0NTM1LC0xLjgxMTQ0OSAzLjU5MDY2MDEsLTIuODA5MDM1IDUuODE4NDA0MSwtMi44MDkwMzUgMi4yMjc3NDQsMCA0LjI5Mzg2OSwwLjk5NzU4NiA1LjgxODQwNCwyLjgwOTAzNSAxLjUzMzYzOSwxLjgyMjU3MSAyLjM5NTkzMiw0LjMzOTg1OCAyLjQzOTE1Miw3LjEwODMwMSAtMC44MDMzNTIsMC40MzQ4NzcgLTQuMTQxNjM2LDIuMDk2MTEyIC04LjI1NzU1NiwyLjA5NjExMiAtMy44MDYyOTIxLDAgLTcuMzkxMDg2MSwtMS42NzEwNDMgLTguMjU3MzY4MSwtMi4xMDQ5ODEgMC4wNDUwNSwtMi43NjUwMTcgMC45MDY5NjgsLTUuMjc4Nzg1IDIuNDM4OTY0LC03LjA5OTQzMiB6XCIgLz4gPHBhdGggaWQ9XCJwYXRoMzgxNlwiIGQ9XCJNIDEyLjE3MzgyOCAwLjM4ODY3MTg4IEMgOS4zMTk4NTEzIDAuMzg4NjcxODcgNy4zNzcwOTg4IDIuMzY3MjI4NSA2Ljg2NTIzNDQgNC42MzA4NTk0IEMgNi40MjE4NjA4IDYuNTkxNjAxNSA3LjExNTM1NjIgOC43Njc2MTE3IDguOTY0ODQzOCAxMC4xMjY5NTMgQyA3LjYxNDEyNDkgMTAuNjc3Mzc2IDYuMzU1MDUxMSAxMS40ODA5NDQgNS4zNDk2MDk0IDEyLjY3NTc4MSBDIDMuNTYyOTMxNyAxNC43OTkxODUgMi42MDE1NjI1IDE3LjcwMTQ3NSAyLjYwMTU2MjUgMjAuODQ3NjU2IEMgMi42MDE1NjU0IDIxLjE4OTg2MSAyLjc4OTQyNzYgMjEuNTA4MDAyIDMuMDg5ODQzOCAyMS42NzE4NzUgQyAzLjMwNDQwNjggMjEuNzg4OTI1IDcuNDQzNjIzOSAyNC4wMzkwNjIgMTIuMTczODI4IDI0LjAzOTA2MiBDIDE3LjI2OTkxOCAyNC4wMzkwNjIgMjEuMDgzNTY4IDIxLjc3Njc4NiAyMS4yOTEwMTYgMjEuNjUyMzQ0IEMgMjEuNTcyODEgMjEuNDgzMjY2IDIxLjc0NjA5NyAyMS4xNzYyODIgMjEuNzQ2MDk0IDIwLjg0NzY1NiBDIDIxLjc0NjA5NCAxNy43MDE0NzUgMjAuNzgyNzcgMTQuNzk5MTg1IDE4Ljk5NjA5NCAxMi42NzU3ODEgQyAxNy45OTA0NTUgMTEuNDgwNTkxIDE2LjczMzgxOCAxMC42NzUzNjIgMTUuMzgyODEyIDEwLjEyNSBDIDE3LjIzMTEzMiA4Ljc2NTU1NTIgMTcuOTI1Njc1IDYuNTkxMDcwMSAxNy40ODI0MjIgNC42MzA4NTk0IEMgMTYuOTcwNTU3IDIuMzY3MjI4NSAxNS4wMjc4MDUgMC4zODg2NzE4OCAxMi4xNzM4MjggMC4zODg2NzE4OCB6IE0gMTIuNzkyOTY5IDIuMzAwNzgxMiBDIDEzLjQ2NjI1MyAyLjQxNjE3OTIgMTQuMTI1MTEzIDIuNzM4Mzk0MSAxNC42OTUzMTIgMy4zMDg1OTM4IEMgMTUuODM1NzEyIDQuNDQ4OTkzMSAxNS45ODU2MDQgNS45NDczNTQ5IDE1LjQ2ODc1IDcuMTk1MzEyNSBDIDE0Ljk1MTg5NiA4LjQ0MzI3MDEgMTMuNzg2ODI4IDkuMzk4NDM3OCAxMi4xNzM4MjggOS4zOTg0Mzc1IEMgMTAuMTk3NzE5IDkuMzk2MTk1NCA4LjYwNzcxMSA3LjgwNjE4NyA4LjYwNTQ2ODggNS44MzAwNzgxIEMgOC42MDU0NjgzIDQuMjE3MDc4NSA5LjU2MDYzNjIgMy4wNTIwMTAyIDEwLjgwODU5NCAyLjUzNTE1NjIgQyAxMS40MzI1NzMgMi4yNzY3MjkzIDEyLjExOTY4NSAyLjE4NTM4MzMgMTIuNzkyOTY5IDIuMzAwNzgxMiB6IE0gMTIuMTczODI4IDExLjI3MzQzOCBDIDE0LjIzMzY0NyAxMS4yNzM0MzggMTYuMTMzNjc0IDEyLjE4NTA4NCAxNy41NjI1IDEzLjg4MjgxMiBDIDE4LjkzMDY5IDE1LjUwODc2NSAxOS42OTgzNDcgMTcuNzc2OTY5IDE5LjgwODU5NCAyMC4yODMyMDMgQyAxOC44MDczOTUgMjAuODAwMjM1IDE1Ljg4NjE1NyAyMi4xNjIxMDkgMTIuMTczODI4IDIyLjE2MjEwOSBDIDguNzYxNDYzMiAyMi4xNjIxMDkgNS42MjQ1NzU0IDIwLjc4NzA2OSA0LjUzOTA2MjUgMjAuMjY1NjI1IEMgNC42NTI1ODk2IDE3Ljc2NjcxNyA1LjQyMDMzMTUgMTUuNTA0NzkxIDYuNzg1MTU2MiAxMy44ODI4MTIgQyA4LjIxMzk4MjcgMTIuMTg1MDg0IDEwLjExNDAxIDExLjI3MzQzOCAxMi4xNzM4MjggMTEuMjczNDM4IHogXCIgLz4gPC9zdmc+YCxcblxuICBwbGFjZXM6IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+PHBhdGggZD1cIk02LjUgMTJDNS4xMjIgMTIgNCAxMy4xMjEgNCAxNC41UzUuMTIyIDE3IDYuNSAxNyA5IDE1Ljg3OSA5IDE0LjUgNy44NzggMTIgNi41IDEybTAgM2MtLjI3NSAwLS41LS4yMjUtLjUtLjVzLjIyNS0uNS41LS41LjUuMjI1LjUuNS0uMjI1LjUtLjUuNU0xNy41IDEyYy0xLjM3OCAwLTIuNSAxLjEyMS0yLjUgMi41czEuMTIyIDIuNSAyLjUgMi41IDIuNS0xLjEyMSAyLjUtMi41LTEuMTIyLTIuNS0yLjUtMi41bTAgM2MtLjI3NSAwLS41LS4yMjUtLjUtLjVzLjIyNS0uNS41LS41LjUuMjI1LjUuNS0uMjI1LjUtLjUuNVwiLz48cGF0aCBkPVwiTTIyLjQ4MiA5LjQ5NGwtMS4wMzktLjM0NkwyMS40IDloLjZjLjU1MiAwIDEtLjQzOSAxLS45OTIgMC0uMDA2LS4wMDMtLjAwOC0uMDAzLS4wMDhIMjNjMC0xLS44ODktMi0xLjk4NC0yaC0uNjQybC0uNzMxLTEuNzE3QzE5LjI2MiAzLjAxMiAxOC4wOTEgMiAxNi43NjQgMkg3LjIzNkM1LjkwOSAyIDQuNzM4IDMuMDEyIDQuMzU3IDQuMjgzTDMuNjI2IDZoLS42NDJDMS44ODkgNiAxIDcgMSA4aC4wMDNTMSA4LjAwMiAxIDguMDA4QzEgOC41NjEgMS40NDggOSAyIDloLjZsLS4wNDMuMTQ4LTEuMDM5LjM0NmEyLjAwMSAyLjAwMSAwIDAgMC0xLjM1OSAyLjA5N2wuNzUxIDcuNTA4YTEgMSAwIDAgMCAuOTk0LjkwMUgzdjFjMCAxLjEwMy44OTYgMiAyIDJoMmMxLjEwNCAwIDItLjg5NyAyLTJ2LTFoNnYxYzAgMS4xMDMuODk2IDIgMiAyaDJjMS4xMDQgMCAyLS44OTcgMi0ydi0xaDEuMDk2YS45OTkuOTk5IDAgMCAwIC45OTQtLjkwMWwuNzUxLTcuNTA4YTIuMDAxIDIuMDAxIDAgMCAwLTEuMzU5LTIuMDk3TTYuMjczIDQuODU3QzYuNDAyIDQuNDMgNi43ODggNCA3LjIzNiA0aDkuNTI3Yy40NDggMCAuODM0LjQzLjk2My44NTdMMTkuMzEzIDlINC42ODhsMS41ODUtNC4xNDN6TTcgMjFINXYtMWgydjF6bTEyIDBoLTJ2LTFoMnYxem0yLjE4OS0zSDIuODExbC0uNjYyLTYuNjA3TDMgMTFoMThsLjg1Mi4zOTNMMjEuMTg5IDE4elwiLz48L3N2Zz5gLFxuXG4gIHJlY2VudDogYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj48cGF0aCBkPVwiTTEzIDRoLTJsLS4wMDEgN0g5djJoMnYyaDJ2LTJoNHYtMmgtNHpcIi8+PHBhdGggZD1cIk0xMiAwQzUuMzczIDAgMCA1LjM3MyAwIDEyczUuMzczIDEyIDEyIDEyIDEyLTUuMzczIDEyLTEyUzE4LjYyNyAwIDEyIDBtMCAyMkM2LjQ4NiAyMiAyIDE3LjUxNCAyIDEyUzYuNDg2IDIgMTIgMnMxMCA0LjQ4NiAxMCAxMC00LjQ4NiAxMC0xMCAxMFwiLz48L3N2Zz5gLFxuXG4gIHN5bWJvbHM6IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+PHBhdGggZD1cIk0wIDBoMTF2Mkgwek00IDExaDNWNmg0VjRIMHYyaDR6TTE1LjUgMTdjMS4zODEgMCAyLjUtMS4xMTYgMi41LTIuNDkzcy0xLjExOS0yLjQ5My0yLjUtMi40OTNTMTMgMTMuMTMgMTMgMTQuNTA3IDE0LjExOSAxNyAxNS41IDE3bTAtMi45ODZjLjI3NiAwIC41LjIyMi41LjQ5MyAwIC4yNzItLjIyNC40OTMtLjUuNDkzcy0uNS0uMjIxLS41LS40OTMuMjI0LS40OTMuNS0uNDkzTTIxLjUgMTkuMDE0Yy0xLjM4MSAwLTIuNSAxLjExNi0yLjUgMi40OTNTMjAuMTE5IDI0IDIxLjUgMjRzMi41LTEuMTE2IDIuNS0yLjQ5My0xLjExOS0yLjQ5My0yLjUtMi40OTNtMCAyLjk4NmEuNDk3LjQ5NyAwIDAgMS0uNS0uNDkzYzAtLjI3MS4yMjQtLjQ5My41LS40OTNzLjUuMjIyLjUuNDkzYS40OTcuNDk3IDAgMCAxLS41LjQ5M00yMiAxM2wtOSA5IDEuNTEzIDEuNSA4Ljk5LTkuMDA5ek0xNyAxMWMyLjIwOSAwIDQtMS4xMTkgNC0yLjVWMnMuOTg1LS4xNjEgMS40OTguOTQ5QzIzLjAxIDQuMDU1IDIzIDYgMjMgNnMxLTEuMTE5IDEtMy4xMzVDMjQtLjAyIDIxIDAgMjEgMGgtMnY2LjM0N0E1Ljg1MyA1Ljg1MyAwIDAgMCAxNyA2Yy0yLjIwOSAwLTQgMS4xMTktNCAyLjVzMS43OTEgMi41IDQgMi41TTEwLjI5NyAyMC40ODJsLTEuNDc1LTEuNTg1YTQ3LjU0IDQ3LjU0IDAgMCAxLTEuNDQyIDEuMTI5Yy0uMzA3LS4yODgtLjk4OS0xLjAxNi0yLjA0NS0yLjE4My45MDItLjgzNiAxLjQ3OS0xLjQ2NiAxLjcyOS0xLjg5MnMuMzc2LS44NzEuMzc2LTEuMzM2YzAtLjU5Mi0uMjczLTEuMTc4LS44MTgtMS43NTktLjU0Ni0uNTgxLTEuMzI5LS44NzEtMi4zNDktLjg3MS0xLjAwOCAwLTEuNzkuMjkzLTIuMzQ0Ljg3OS0uNTU2LjU4Ny0uODMyIDEuMTgxLS44MzIgMS43ODQgMCAuODEzLjQxOSAxLjc0OCAxLjI1NiAyLjgwNS0uODQ3LjYxNC0xLjQ0NCAxLjIwOC0xLjc5NCAxLjc4NGEzLjQ2NSAzLjQ2NSAwIDAgMC0uNTIzIDEuODMzYzAgLjg1Ny4zMDggMS41Ni45MjQgMi4xMDcuNjE2LjU0OSAxLjQyMy44MjMgMi40Mi44MjMgMS4xNzMgMCAyLjQ0NC0uMzc5IDMuODEzLTEuMTM3TDguMjM1IDI0aDIuODE5bC0yLjA5LTIuMzgzIDEuMzMzLTEuMTM1em0tNi43MzYtNi4zODlhMS4wMiAxLjAyIDAgMCAxIC43My0uMjg2Yy4zMSAwIC41NTkuMDg1Ljc0Ny4yNTRhLjg0OS44NDkgMCAwIDEgLjI4My42NTljMCAuNTE4LS40MTkgMS4xMTItMS4yNTcgMS43ODQtLjUzNi0uNjUxLS44MDUtMS4yMzEtLjgwNS0xLjc0MmEuOTAxLjkwMSAwIDAgMSAuMzAyLS42NjlNMy43NCAyMmMtLjQyNyAwLS43NzgtLjExNi0xLjA1Ny0uMzQ5LS4yNzktLjIzMi0uNDE4LS40ODctLjQxOC0uNzY2IDAtLjU5NC41MDktMS4yODggMS41MjctMi4wODMuOTY4IDEuMTM0IDEuNzE3IDEuOTQ2IDIuMjQ4IDIuNDM4LS45MjEuNTA3LTEuNjg2Ljc2LTIuMy43NlwiLz48L3N2Zz5gLFxufVxuXG5leHBvcnQgZGVmYXVsdCBTVkdzXG4iLCJjb25zdCBtYXBwaW5nID0ge1xuICBuYW1lOiAnYScsXG4gIHVuaWZpZWQ6ICdiJyxcbiAgbm9uX3F1YWxpZmllZDogJ2MnLFxuICBoYXNfaW1nX2FwcGxlOiAnZCcsXG4gIGhhc19pbWdfZ29vZ2xlOiAnZScsXG4gIGhhc19pbWdfdHdpdHRlcjogJ2YnLFxuICBoYXNfaW1nX2ZhY2Vib29rOiAnaCcsXG4gIGtleXdvcmRzOiAnaicsXG4gIHNoZWV0OiAnaycsXG4gIGVtb3RpY29uczogJ2wnLFxuICB0ZXh0OiAnbScsXG4gIHNob3J0X25hbWVzOiAnbicsXG4gIGFkZGVkX2luOiAnbycsXG59XG5cbmNvbnN0IGJ1aWxkU2VhcmNoID0gKGVtb2ppKSA9PiB7XG4gIGNvbnN0IHNlYXJjaCA9IFtdXG5cbiAgdmFyIGFkZFRvU2VhcmNoID0gKHN0cmluZ3MsIHNwbGl0KSA9PiB7XG4gICAgaWYgKCFzdHJpbmdzKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICA7KEFycmF5LmlzQXJyYXkoc3RyaW5ncykgPyBzdHJpbmdzIDogW3N0cmluZ3NdKS5mb3JFYWNoKChzdHJpbmcpID0+IHtcbiAgICAgIDsoc3BsaXQgPyBzdHJpbmcuc3BsaXQoL1stfF98XFxzXSsvKSA6IFtzdHJpbmddKS5mb3JFYWNoKChzKSA9PiB7XG4gICAgICAgIHMgPSBzLnRvTG93ZXJDYXNlKClcblxuICAgICAgICBpZiAoc2VhcmNoLmluZGV4T2YocykgPT0gLTEpIHtcbiAgICAgICAgICBzZWFyY2gucHVzaChzKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBhZGRUb1NlYXJjaChlbW9qaS5zaG9ydF9uYW1lcywgdHJ1ZSlcbiAgYWRkVG9TZWFyY2goZW1vamkubmFtZSwgdHJ1ZSlcbiAgYWRkVG9TZWFyY2goZW1vamkua2V5d29yZHMsIGZhbHNlKVxuICBhZGRUb1NlYXJjaChlbW9qaS5lbW90aWNvbnMsIGZhbHNlKVxuXG4gIHJldHVybiBzZWFyY2guam9pbignLCcpXG59XG5cbmZ1bmN0aW9uIGRlZXBGcmVlemUob2JqZWN0KSB7XG4gIC8vIFJldHJpZXZlIHRoZSBwcm9wZXJ0eSBuYW1lcyBkZWZpbmVkIG9uIG9iamVjdFxuICB2YXIgcHJvcE5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob2JqZWN0KVxuXG4gIC8vIEZyZWV6ZSBwcm9wZXJ0aWVzIGJlZm9yZSBmcmVlemluZyBzZWxmXG4gIGZvciAobGV0IG5hbWUgb2YgcHJvcE5hbWVzKSB7XG4gICAgbGV0IHZhbHVlID0gb2JqZWN0W25hbWVdXG4gICAgb2JqZWN0W25hbWVdID1cbiAgICAgIHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgPyBkZWVwRnJlZXplKHZhbHVlKSA6IHZhbHVlXG4gIH1cbiAgcmV0dXJuIE9iamVjdC5mcmVlemUob2JqZWN0KVxufVxuXG5jb25zdCB1bmNvbXByZXNzID0gKGRhdGEpID0+IHtcbiAgaWYgKCFkYXRhLmNvbXByZXNzZWQpIHtcbiAgICByZXR1cm4gZGF0YVxuICB9XG4gIGRhdGEuY29tcHJlc3NlZCA9IGZhbHNlXG5cbiAgZm9yIChsZXQgaWQgaW4gZGF0YS5lbW9qaXMpIHtcbiAgICBsZXQgZW1vamkgPSBkYXRhLmVtb2ppc1tpZF1cblxuICAgIGZvciAobGV0IGtleSBpbiBtYXBwaW5nKSB7XG4gICAgICBlbW9qaVtrZXldID0gZW1vamlbbWFwcGluZ1trZXldXVxuICAgICAgZGVsZXRlIGVtb2ppW21hcHBpbmdba2V5XV1cbiAgICB9XG5cbiAgICBpZiAoIWVtb2ppLnNob3J0X25hbWVzKSBlbW9qaS5zaG9ydF9uYW1lcyA9IFtdXG4gICAgZW1vamkuc2hvcnRfbmFtZXMudW5zaGlmdChpZClcblxuICAgIGVtb2ppLnNoZWV0X3ggPSBlbW9qaS5zaGVldFswXVxuICAgIGVtb2ppLnNoZWV0X3kgPSBlbW9qaS5zaGVldFsxXVxuICAgIGRlbGV0ZSBlbW9qaS5zaGVldFxuXG4gICAgaWYgKCFlbW9qaS50ZXh0KSBlbW9qaS50ZXh0ID0gJydcblxuICAgIGlmICghZW1vamkuYWRkZWRfaW4pIGVtb2ppLmFkZGVkX2luID0gNlxuICAgIGVtb2ppLmFkZGVkX2luID0gZW1vamkuYWRkZWRfaW4udG9GaXhlZCgxKVxuXG4gICAgZW1vamkuc2VhcmNoID0gYnVpbGRTZWFyY2goZW1vamkpXG4gIH1cbiAgZGF0YSA9IGRlZXBGcmVlemUoZGF0YSlcbiAgcmV0dXJuIGRhdGFcbn1cblxuZXhwb3J0IHsgYnVpbGRTZWFyY2gsIHVuY29tcHJlc3MgfVxuIiwiaW1wb3J0IHsgaW50ZXJzZWN0LCB1bmlmaWVkVG9OYXRpdmUgfSBmcm9tICcuL2luZGV4J1xuaW1wb3J0IHsgdW5jb21wcmVzcywgYnVpbGRTZWFyY2ggfSBmcm9tICcuL2RhdGEnXG5pbXBvcnQgZnJlcXVlbnRseSBmcm9tICcuL2ZyZXF1ZW50bHknXG5cbmNvbnN0IFNIRUVUX0NPTFVNTlMgPSA2MVxuY29uc3QgQ09MT05TX1JFR0VYID0gL14oPzpcXDooW15cXDpdKylcXDopKD86XFw6c2tpbi10b25lLShcXGQpXFw6KT8kL1xuLy8gU2tpbiB0b25lc1xuY29uc3QgU0tJTlMgPSBbJzFGM0ZBJywgJzFGM0ZCJywgJzFGM0ZDJywgJzFGM0ZEJywgJzFGM0ZFJywgJzFGM0ZGJ11cblxuLyoqXG4gKiBFbW9qaSBkYXRhIHN0cnVjdHVyZTpcbiAqIHtcbiAqICAgIFwiY29tcHJlc3NlZFwiOiBmYWxzZSxcbiAqICAgIFwiYWxpYXNlc1wiOiB7XG4gKiAgICAgIGNvbGxpc2lvbjogXCJib29tXCJcbiAqICAgICAgY29va2luZzogXCJmcmllZF9lZ2dcIlxuICogICAgICBlbnZlbG9wZTogXCJlbWFpbFwiXG4gKiAgICAgIGZhY2Vfd2l0aF9maW5nZXJfY292ZXJpbmdfY2xvc2VkX2xpcHM6IFwic2h1c2hpbmdfZmFjZVwiXG4gKiAgICAgIC4uLlxuICogICAgfSxcbiAqICAgIFwiY2F0ZWdvcmllc1wiOiBbIHtcbiAqICAgICAgaWQ6IFwicGVvcGxlXCIsXG4gKiAgICAgIG5hbWU6IFwiU21pbGV5cyAmIEVtb3Rpb25cIixcbiAqICAgICAgZW1vamlzOiBbIFwiZ3Jpbm5pbmdcIiwgXCJncmluXCIsIFwiam95XCIsIC4uLiBdXG4gKiAgICB9LCB7XG4gKiAgICAgIGlkOiBcIm5hdHVyZVwiLFxuICogICAgICBuYW1lOiBcIkFuaW1hbHMgJiBOYXR1cmVcIixcbiAqICAgICAgZW1vamlzOiBbIFwibW9ua2V5X2ZhY2VcIiwgXCJtb25leVwiLCBcImdvcmlsbGFcIiwgLi4uIF1cbiAqICAgIH0sXG4gKiAgICAuLi5cbiAqICAgIF0sXG4gKiAgICBcImVtb2ppc1wiOiBbXG4gKiAgICAgIHNtaWxleToge1xuICogICAgICAgIGFkZGVkX2luOiBcIjYuMFwiLFxuICogICAgICAgIGVtb3RpY29uczogW1wiPSlcIiwgXCI9LSlcIl0sXG4gKiAgICAgICAgaGFzX2ltZ19hcHBsZTogdHJ1ZSxcbiAqICAgICAgICBoYXNfaW1nX2ZhY2Vib29rOiB0cnVlLFxuICogICAgICAgIGhhc19pbWdfZ29vZ2xlOiB0cnVlLFxuICogICAgICAgIGhhc19pbWdfdHdpdHRlcjogdHJ1ZSxcbiAqICAgICAgICBrZXl3b3JkczogW1wiZmFjZVwiLCBcImhhcHB5XCIsIFwiam95XCIsIFwiaGFoYVwiLCBcIjpEXCIsIFwiOilcIiwgXCJzbWlsZVwiLCBcImZ1bm55XCJdLFxuICogICAgICAgIG5hbWU6IFwiU21pbGluZyBGYWNlIHdpdGggT3BlbiBNb3V0aFwiLFxuICogICAgICAgIG5vbl9xdWFsaWZpZWQ6IHVuZGVmaW5lZCxcbiAqICAgICAgICBzZWFyY2g6IFwic21pbGV5LHNtaWxpbmcsZmFjZSx3aXRoLG9wZW4sbW91dGgsaGFwcHksam95LGhhaGEsOmQsOiksc21pbGUsZnVubnksPSksPS0pXCIsXG4gKiAgICAgICAgc2hlZXRfeDogMzAsXG4gKiAgICAgICAgc2hlZXRfeTogMjcsXG4gKiAgICAgICAgc2hvcnRfbmFtZXM6IFtcInNtaWxleVwiXSxcbiAqICAgICAgICB0ZXh0OiBcIjopXCIsXG4gKiAgICAgICAgdW5pZmllZDogXCIxRjYwM1wiLFxuICogICAgICB9LCB7XG4gKiAgICAgICsxOiB7ICAgIC8vIGVtb2ppIHdpdGggc2tpbl92YXJpYXRpb25zXG4gKiAgICAgICAgICAuLi4sIC8vIGFsbCB0aGUgcmVndWxhciBmaWVsZHMgYXJlIHByZXNlbnRcbiAqICAgICAgICAgIG5hbWU6IFwiVGh1bWJzIFVwIFNpZ25cIixcbiAqICAgICAgICAgIHNob3J0X25hbWVzOiAoMikgW1wiKzFcIiwgXCJ0aHVtYnN1cFwiXSxcbiAqICAgICAgICAgIHNraW5fdmFyaWF0aW9uczoge1xuICogICAgICAgICAgICAxRjNGQjogICAgICAgICAgICAgLy8gZWFjaCB2YXJpYXRpb24gaGFzIGFkZGl0aW9uYWwgc2V0IG9mIGZpZWxkczpcbiAqICAgICAgICAgICAgICBhZGRlZF9pbjogXCI4LjBcIixcbiAqICAgICAgICAgICAgICBoYXNfaW1nX2FwcGxlOiB0cnVlLFxuICogICAgICAgICAgICAgIGhhc19pbWdfZmFjZWJvb2s6IHRydWUsXG4gKiAgICAgICAgICAgICAgaGFzX2ltZ19nb29nbGU6IHRydWUsXG4gKiAgICAgICAgICAgICAgaGFzX2ltZ190d2l0dGVyOiB0cnVlLFxuICogICAgICAgICAgICAgIGltYWdlOiBcIjFmNDRkLTFmM2ZiLnBuZ1wiLFxuICogICAgICAgICAgICAgIG5vbl9xdWFsaWZpZWQ6IG51bGwsXG4gKiAgICAgICAgICAgICAgc2hlZXRfeDogMTQsXG4gKiAgICAgICAgICAgICAgc2hlZXRfeTogNTAsXG4gKiAgICAgICAgICAgICAgdW5pZmllZDogXCIxRjQ0RC0xRjNGQlwiLFxuICogICAgICAgICAgICAxRjNGQjoge+KApn0sXG4gKiAgICAgICAgICAgIDFGM0ZDOiB74oCmfSxcbiAqICAgICAgICAgICAgMUYzRkQ6IHvigKZ9LFxuICogICAgICAgICAgICAxRjNGRToge+KApn0sXG4gKiAgICAgICAgICAgIDFGM0ZGOiB74oCmfVxuICogICAgICAgICAgICB9LFxuICogICAgICAgICAgLi4uXG4gKiAgICAgIH0sXG4gKiAgICAgIGE6IHsgIC8vIGVtb2ppIHdpdGggbm9uX3F1YWxpZmllZCBmaWVsZCBzZXRcbiAqICAgICAgICBhZGRlZF9pbjogXCI2LjBcIixcbiAqICAgICAgICBlbW90aWNvbnM6IHVuZGVmaW5lZCxcbiAqICAgICAgICBoYXNfaW1nX2FwcGxlOiB0cnVlLFxuICogICAgICAgIC4uLlxuICogICAgICAgIG5vbl9xdWFsaWZpZWQ6IFwiMUYxNzBcIixcbiAqICAgICAgICB1bmlmaWVkOiBcIjFGMTcwLUZFMEZcIixcbiAqICAgICB9LFxuICogICAgIC4uLlxuICogICBdXG4gKiB9XG4gKi9cblxuLyoqXG4gKiBXcmFwcyByYXcgamFzb24gZW1vamkgZGF0YSwgc2VydmVzIGFzIGRhdGEgc291cmNlIGZvclxuICogZW1vamkgcGlja2VyIGNvbXBvbmVudHMuXG4gKlxuICogVXNhZ2U6XG4gKlxuICogICBpbXBvcnQgZGF0YSBmcm9tICcuLi9kYXRhL2FsbC5qc29uJ1xuICogICBsZXQgaW5kZXggPSBuZXcgRW1vamlJbmRleChkYXRhKVxuICpcbiAqL1xuZXhwb3J0IGNsYXNzIEVtb2ppSW5kZXgge1xuICAvKipcbiAgICogQ29uc3RydWN0b3IuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIC0gUmF3IGpzb24gZGF0YSwgc2VlIHRoZSBzdHJ1Y3R1cmUgYWJvdmUuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gYWRkaXRpb25hbCBvcHRpb25zLCBhcyBhbiBvYmplY3Q6XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGVtb2ppc1RvU2hvd0ZpbHRlciAtIG9wdGlvbmFsLCBmdW5jdGlvbiB0byBmaWx0ZXIgb3V0XG4gICAqICAgc29tZSBlbW9qaXMsIGZ1bmN0aW9uKGVtb2ppKSB7IHJldHVybiB0cnVlfGZhbHNlIH1cbiAgICogICB3aGVyZSBgZW1vamlgIGlzIGFuIHJhdyBlbW9qaSBvYmplY3QsIHNlZSBkYXRhLmVtb2ppcyBhYm92ZS5cbiAgICogQHBhcmFtIHtBcnJheX0gaW5jbHVkZSAtIG9wdGlvbmFsLCBhIGxpc3Qgb2YgY2F0ZWdvcnkgaWRzIHRvIGluY2x1ZGUuXG4gICAqIEBwYXJhbSB7QXJyYXl9IGV4Y2x1ZGUgLSBvcHRpb25hbCwgYSBsaXN0IG9mIGNhdGVnb3J5IGlkcyB0byBleGNsdWRlLlxuICAgKiBAcGFyYW0ge0FycmF5fSBjdXN0b20gLSBvcHRpb25hbCwgYSBsaXN0IGN1c3RvbSBlbW9qaXMsIGVhY2ggZW1vamkgaXNcbiAgICogICBhbiBvYmplY3QsIHNlZSBkYXRhLmVtb2ppcyBhYm92ZSBmb3IgZXhhbXBsZXMuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBkYXRhLFxuICAgIHtcbiAgICAgIGVtb2ppc1RvU2hvd0ZpbHRlcixcbiAgICAgIGluY2x1ZGUsXG4gICAgICBleGNsdWRlLFxuICAgICAgY3VzdG9tLFxuICAgICAgcmVjZW50LFxuICAgICAgcmVjZW50TGVuZ3RoID0gMjAsXG4gICAgfSA9IHt9LFxuICApIHtcbiAgICB0aGlzLl9kYXRhID0gdW5jb21wcmVzcyhkYXRhKVxuICAgIC8vIENhbGxiYWNrIHRvIGV4Y2x1ZGUgc3BlY2lmaWMgZW1vamlzXG4gICAgdGhpcy5fZW1vamlzRmlsdGVyID0gZW1vamlzVG9TaG93RmlsdGVyIHx8IG51bGxcbiAgICAvLyBDYXRlZ29yaWVzIHRvIGluY2x1ZGUgLyBleGNsdWRlXG4gICAgdGhpcy5faW5jbHVkZSA9IGluY2x1ZGUgfHwgbnVsbFxuICAgIHRoaXMuX2V4Y2x1ZGUgPSBleGNsdWRlIHx8IG51bGxcbiAgICAvLyBDdXN0b20gZW1vamlzXG4gICAgdGhpcy5fY3VzdG9tID0gY3VzdG9tIHx8IFtdXG4gICAgLy8gUmVjZW50IGVtb2ppc1xuICAgIC8vIFRPRE86IG1ha2UgcGFyYW1ldGVyIGNvbmZpZ3VyYWJsZVxuICAgIHRoaXMuX3JlY2VudCA9IHJlY2VudCB8fCBmcmVxdWVudGx5LmdldChyZWNlbnRMZW5ndGgpXG5cbiAgICB0aGlzLl9lbW9qaXMgPSB7fVxuICAgIHRoaXMuX25hdGl2ZUVtb2ppcyA9IHt9XG4gICAgdGhpcy5fZW1vdGljb25zID0ge31cblxuICAgIHRoaXMuX2NhdGVnb3JpZXMgPSBbXVxuICAgIHRoaXMuX3JlY2VudENhdGVnb3J5ID0geyBpZDogJ3JlY2VudCcsIG5hbWU6ICdSZWNlbnQnLCBlbW9qaXM6IFtdIH1cbiAgICB0aGlzLl9jdXN0b21DYXRlZ29yeSA9IHsgaWQ6ICdjdXN0b20nLCBuYW1lOiAnQ3VzdG9tJywgZW1vamlzOiBbXSB9XG4gICAgdGhpcy5fc2VhcmNoSW5kZXggPSB7fVxuICAgIHRoaXMuYnVpbGRJbmRleCgpXG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKVxuICB9XG5cbiAgYnVpbGRJbmRleCgpIHtcbiAgICBsZXQgYWxsQ2F0ZWdvcmllcyA9IHRoaXMuX2RhdGEuY2F0ZWdvcmllc1xuXG4gICAgaWYgKHRoaXMuX2luY2x1ZGUpIHtcbiAgICAgIC8vIFJlbW92ZSBjYXRlZ29yaWVzIHRoYXQgYXJlIG5vdCBpbiB0aGUgaW5jbHVkZSBsaXN0LlxuICAgICAgYWxsQ2F0ZWdvcmllcyA9IGFsbENhdGVnb3JpZXMuZmlsdGVyKChpdGVtKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbmNsdWRlLmluY2x1ZGVzKGl0ZW0uaWQpXG4gICAgICB9KVxuICAgICAgLy8gU29ydCBjYXRlZ29yaWVzIGFjY29yZGluZyB0byB0aGUgaW5jbHVkZSBsaXN0LlxuICAgICAgYWxsQ2F0ZWdvcmllcyA9IGFsbENhdGVnb3JpZXMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICBjb25zdCBpbmRleEEgPSB0aGlzLl9pbmNsdWRlLmluZGV4T2YoYS5pZClcbiAgICAgICAgY29uc3QgaW5kZXhCID0gdGhpcy5faW5jbHVkZS5pbmRleE9mKGIuaWQpXG4gICAgICAgIGlmIChpbmRleEEgPCBpbmRleEIpIHtcbiAgICAgICAgICByZXR1cm4gLTFcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5kZXhBID4gaW5kZXhCKSB7XG4gICAgICAgICAgcmV0dXJuIDFcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMFxuICAgICAgfSlcbiAgICB9XG5cbiAgICBhbGxDYXRlZ29yaWVzLmZvckVhY2goKGNhdGVnb3J5RGF0YSkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmlzQ2F0ZWdvcnlOZWVkZWQoY2F0ZWdvcnlEYXRhLmlkKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGxldCBjYXRlZ29yeSA9IHtcbiAgICAgICAgaWQ6IGNhdGVnb3J5RGF0YS5pZCxcbiAgICAgICAgbmFtZTogY2F0ZWdvcnlEYXRhLm5hbWUsXG4gICAgICAgIGVtb2ppczogW10sXG4gICAgICB9XG4gICAgICBjYXRlZ29yeURhdGEuZW1vamlzLmZvckVhY2goKGVtb2ppSWQpID0+IHtcbiAgICAgICAgbGV0IGVtb2ppID0gdGhpcy5hZGRFbW9qaShlbW9qaUlkKVxuICAgICAgICBpZiAoZW1vamkpIHtcbiAgICAgICAgICBjYXRlZ29yeS5lbW9qaXMucHVzaChlbW9qaSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIGlmIChjYXRlZ29yeS5lbW9qaXMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuX2NhdGVnb3JpZXMucHVzaChjYXRlZ29yeSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKHRoaXMuaXNDYXRlZ29yeU5lZWRlZCgnY3VzdG9tJykpIHtcbiAgICAgIGlmICh0aGlzLl9jdXN0b20ubGVuZ3RoID4gMCkge1xuICAgICAgICBmb3IgKGxldCBjdXN0b21FbW9qaSBvZiB0aGlzLl9jdXN0b20pIHtcbiAgICAgICAgICB0aGlzLmFkZEN1c3RvbUVtb2ppKGN1c3RvbUVtb2ppKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fY3VzdG9tQ2F0ZWdvcnkuZW1vamlzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLl9jYXRlZ29yaWVzLnB1c2godGhpcy5fY3VzdG9tQ2F0ZWdvcnkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNDYXRlZ29yeU5lZWRlZCgncmVjZW50JykpIHtcbiAgICAgIGlmICh0aGlzLl9yZWNlbnQubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuX3JlY2VudC5tYXAoKGlkKSA9PiB7XG4gICAgICAgICAgZm9yIChsZXQgY3VzdG9tRW1vamkgb2YgdGhpcy5fY3VzdG9tQ2F0ZWdvcnkuZW1vamlzKSB7XG4gICAgICAgICAgICBpZiAoY3VzdG9tRW1vamkuaWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgIHRoaXMuX3JlY2VudENhdGVnb3J5LmVtb2ppcy5wdXNoKGN1c3RvbUVtb2ppKVxuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRoaXMuaGFzRW1vamkoaWQpKSB7XG4gICAgICAgICAgICB0aGlzLl9yZWNlbnRDYXRlZ29yeS5lbW9qaXMucHVzaCh0aGlzLmVtb2ppKGlkKSlcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICAvLyBBZGQgcmVjZW50IGNhdGVnb3J5IHRvIHRoZSB0b3BcbiAgICAgIGlmICh0aGlzLl9yZWNlbnRDYXRlZ29yeS5lbW9qaXMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuX2NhdGVnb3JpZXMudW5zaGlmdCh0aGlzLl9yZWNlbnRDYXRlZ29yeSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRmluZCB0aGUgZW1vamkgZnJvbSB0aGUgc3RyaW5nXG4gICAqL1xuICBmaW5kRW1vamkoZW1vamksIHNraW4pIHtcbiAgICAvLyAxLiBQYXJzZSBhcyA6ZW1vamlfbmFtZTpza2luLXRvbmUteHg6XG4gICAgbGV0IG1hdGNoZXMgPSBlbW9qaS5tYXRjaChDT0xPTlNfUkVHRVgpXG5cbiAgICBpZiAobWF0Y2hlcykge1xuICAgICAgZW1vamkgPSBtYXRjaGVzWzFdXG4gICAgICBpZiAobWF0Y2hlc1syXSkge1xuICAgICAgICBza2luID0gcGFyc2VJbnQobWF0Y2hlc1syXSwgMTApXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gMi4gQ2hlY2sgaWYgdGhlIHNwZWNpZmllZCBlbW9qaSBpcyBhbiBhbGlhc1xuICAgIGlmICh0aGlzLl9kYXRhLmFsaWFzZXMuaGFzT3duUHJvcGVydHkoZW1vamkpKSB7XG4gICAgICBlbW9qaSA9IHRoaXMuX2RhdGEuYWxpYXNlc1tlbW9qaV1cbiAgICB9XG5cbiAgICAvLyAzLiBDaGVjayBpZiB3ZSBoYXZlIHRoZSBzcGVjaWZpZWQgZW1vamlcbiAgICBpZiAodGhpcy5fZW1vamlzLmhhc093blByb3BlcnR5KGVtb2ppKSkge1xuICAgICAgbGV0IGVtb2ppT2JqZWN0ID0gdGhpcy5fZW1vamlzW2Vtb2ppXVxuICAgICAgaWYgKHNraW4pIHtcbiAgICAgICAgcmV0dXJuIGVtb2ppT2JqZWN0LmdldFNraW4oc2tpbilcbiAgICAgIH1cbiAgICAgIHJldHVybiBlbW9qaU9iamVjdFxuICAgIH1cblxuICAgIC8vIDQuIENoZWNrIGlmIHdlIGhhdmUgdGhlIHNwZWNpZmllZCBuYXRpdmUgZW1vamlcbiAgICBpZiAodGhpcy5fbmF0aXZlRW1vamlzLmhhc093blByb3BlcnR5KGVtb2ppKSkge1xuICAgICAgcmV0dXJuIHRoaXMuX25hdGl2ZUVtb2ppc1tlbW9qaV1cbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGNhdGVnb3JpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhdGVnb3JpZXNcbiAgfVxuXG4gIGVtb2ppKGVtb2ppSWQpIHtcbiAgICBpZiAodGhpcy5fZGF0YS5hbGlhc2VzLmhhc093blByb3BlcnR5KGVtb2ppSWQpKSB7XG4gICAgICBlbW9qaUlkID0gdGhpcy5fZGF0YS5hbGlhc2VzW2Vtb2ppSWRdXG4gICAgfVxuICAgIGxldCBlbW9qaSA9IHRoaXMuX2Vtb2ppc1tlbW9qaUlkXVxuICAgIGlmICghZW1vamkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2FuIG5vdCBmaW5kIGVtb2ppIGJ5IGlkOiAnICsgZW1vamlJZClcbiAgICB9XG4gICAgcmV0dXJuIGVtb2ppXG4gIH1cblxuICBmaXJzdEVtb2ppKCkge1xuICAgIGxldCBlbW9qaSA9IHRoaXMuX2Vtb2ppc1tPYmplY3Qua2V5cyh0aGlzLl9lbW9qaXMpWzBdXVxuICAgIGlmICghZW1vamkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2FuIG5vdCBnZXQgZmlyc3QgZW1vamknKVxuICAgIH1cbiAgICByZXR1cm4gZW1vamlcbiAgfVxuXG4gIGhhc0Vtb2ppKGVtb2ppSWQpIHtcbiAgICBpZiAodGhpcy5fZGF0YS5hbGlhc2VzLmhhc093blByb3BlcnR5KGVtb2ppSWQpKSB7XG4gICAgICBlbW9qaUlkID0gdGhpcy5fZGF0YS5hbGlhc2VzW2Vtb2ppSWRdXG4gICAgfVxuICAgIGlmICh0aGlzLl9lbW9qaXNbZW1vamlJZF0pIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgbmF0aXZlRW1vamkodW5pY29kZUVtb2ppKSB7XG4gICAgaWYgKHRoaXMuX25hdGl2ZUVtb2ppcy5oYXNPd25Qcm9wZXJ0eSh1bmljb2RlRW1vamkpKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbmF0aXZlRW1vamlzW3VuaWNvZGVFbW9qaV1cbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIHNlYXJjaCh2YWx1ZSwgbWF4UmVzdWx0cykge1xuICAgIG1heFJlc3VsdHMgfHwgKG1heFJlc3VsdHMgPSA3NSlcbiAgICBpZiAoIXZhbHVlLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgaWYgKHZhbHVlID09ICctJyB8fCB2YWx1ZSA9PSAnLTEnKSB7XG4gICAgICByZXR1cm4gW3RoaXMuZW1vamkoJy0xJyldXG4gICAgfVxuXG4gICAgbGV0IHZhbHVlcyA9IHZhbHVlLnRvTG93ZXJDYXNlKCkuc3BsaXQoL1tcXHN8LHxcXC18X10rLylcbiAgICBsZXQgYWxsUmVzdWx0cyA9IFtdXG5cbiAgICBpZiAodmFsdWVzLmxlbmd0aCA+IDIpIHtcbiAgICAgIHZhbHVlcyA9IFt2YWx1ZXNbMF0sIHZhbHVlc1sxXV1cbiAgICB9XG5cbiAgICBhbGxSZXN1bHRzID0gdmFsdWVzXG4gICAgICAubWFwKCh2YWx1ZSkgPT4ge1xuICAgICAgICAvLyBTdGFydCBzZWFyY2hpbiBpbiB0aGUgZ2xvYmFsIGxpc3Qgb2YgZW1vamlzXG4gICAgICAgIGxldCBlbW9qaXMgPSB0aGlzLl9lbW9qaXNcbiAgICAgICAgbGV0IGN1cnJlbnRJbmRleCA9IHRoaXMuX3NlYXJjaEluZGV4XG4gICAgICAgIGxldCBsZW5ndGggPSAwXG5cbiAgICAgICAgZm9yIChsZXQgY2hhckluZGV4ID0gMDsgY2hhckluZGV4IDwgdmFsdWUubGVuZ3RoOyBjaGFySW5kZXgrKykge1xuICAgICAgICAgIGNvbnN0IGNoYXIgPSB2YWx1ZVtjaGFySW5kZXhdXG4gICAgICAgICAgbGVuZ3RoKytcblxuICAgICAgICAgIGN1cnJlbnRJbmRleFtjaGFyXSB8fCAoY3VycmVudEluZGV4W2NoYXJdID0ge30pXG4gICAgICAgICAgY3VycmVudEluZGV4ID0gY3VycmVudEluZGV4W2NoYXJdXG5cbiAgICAgICAgICBpZiAoIWN1cnJlbnRJbmRleC5yZXN1bHRzKSB7XG4gICAgICAgICAgICBsZXQgc2NvcmVzID0ge31cbiAgICAgICAgICAgIGN1cnJlbnRJbmRleC5yZXN1bHRzID0gW11cbiAgICAgICAgICAgIGN1cnJlbnRJbmRleC5lbW9qaXMgPSB7fVxuXG4gICAgICAgICAgICBmb3IgKGxldCBlbW9qaUlkIGluIGVtb2ppcykge1xuICAgICAgICAgICAgICBsZXQgZW1vamkgPSBlbW9qaXNbZW1vamlJZF1cbiAgICAgICAgICAgICAgLy8gc2VhcmNoIGlzIGEgY29tbWEtc2VwYXJhdGVkIHN0cmluZyB3aXRoIHdvcmRzLCByZWxhdGVkXG4gICAgICAgICAgICAgIC8vIHRvIHRoZSBlbW9qaSwgZm9yIGV4YW1wbGU6XG4gICAgICAgICAgICAgIC8vIHNlYXJjaDogXCJzbWlsZXksc21pbGluZyxmYWNlLGpveSxoYWhhLDpkLDopLHNtaWxlLGZ1bm55LD0pLD0tKVwiLFxuICAgICAgICAgICAgICBsZXQgc2VhcmNoID0gZW1vamkuX2RhdGEuc2VhcmNoXG4gICAgICAgICAgICAgIGxldCBzdWIgPSB2YWx1ZS5zdWJzdHIoMCwgbGVuZ3RoKVxuICAgICAgICAgICAgICBsZXQgc3ViSW5kZXggPSBzZWFyY2guaW5kZXhPZihzdWIpXG4gICAgICAgICAgICAgIGlmIChzdWJJbmRleCAhPSAtMSkge1xuICAgICAgICAgICAgICAgIGxldCBzY29yZSA9IHN1YkluZGV4ICsgMVxuICAgICAgICAgICAgICAgIGlmIChzdWIgPT0gZW1vamlJZCkgc2NvcmUgPSAwXG5cbiAgICAgICAgICAgICAgICBjdXJyZW50SW5kZXgucmVzdWx0cy5wdXNoKGVtb2ppKVxuICAgICAgICAgICAgICAgIGN1cnJlbnRJbmRleC5lbW9qaXNbZW1vamlJZF0gPSBlbW9qaVxuXG4gICAgICAgICAgICAgICAgc2NvcmVzW2Vtb2ppSWRdID0gc2NvcmVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3VycmVudEluZGV4LnJlc3VsdHMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgICB2YXIgYVNjb3JlID0gc2NvcmVzW2EuaWRdLFxuICAgICAgICAgICAgICAgIGJTY29yZSA9IHNjb3Jlc1tiLmlkXVxuICAgICAgICAgICAgICByZXR1cm4gYVNjb3JlIC0gYlNjb3JlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIGNvbnRpbnVlIHNlYXJjaCBpbiB0aGUgcmVkdWNlZCBzZXQgb2YgZW1vamlzXG4gICAgICAgICAgZW1vamlzID0gY3VycmVudEluZGV4LmVtb2ppc1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjdXJyZW50SW5kZXgucmVzdWx0c1xuICAgICAgICAvLyBUaGUgXCJmaWx0ZXJcIiBjYWxsIHJlbW92ZXMgdW5kZWZpbmVkIHZhbHVlcyBmcm9tIGFsbFJlc3VsdHNcbiAgICAgICAgLy8gYXJyYXksIGZvciBleGFtcGxlLCBpZiB3ZSBoYXZlIFwidGVzdCBcIiAod2l0aCB0cmFpbGluZyBzcGFjZSksXG4gICAgICAgIC8vIHdlIHdpbGwgZ2V0IFwiW0FycmF5LCB1bmRlZmluZWRdXCIgZm9yIGFsbFJlc3VsdHMgYW5kIGFmdGVyXG4gICAgICAgIC8vIHRoZSBcImZpbHRlclwiIGNhbGwgaXQgd2lsbCB0dXJuIGludG8gXCJbQXJyYXldXCJcbiAgICAgIH0pXG4gICAgICAuZmlsdGVyKChhKSA9PiBhKVxuXG4gICAgdmFyIHJlc3VsdHMgPSBudWxsXG4gICAgaWYgKGFsbFJlc3VsdHMubGVuZ3RoID4gMSkge1xuICAgICAgcmVzdWx0cyA9IGludGVyc2VjdC5hcHBseShudWxsLCBhbGxSZXN1bHRzKVxuICAgIH0gZWxzZSBpZiAoYWxsUmVzdWx0cy5sZW5ndGgpIHtcbiAgICAgIHJlc3VsdHMgPSBhbGxSZXN1bHRzWzBdXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdHMgPSBbXVxuICAgIH1cbiAgICBpZiAocmVzdWx0cyAmJiByZXN1bHRzLmxlbmd0aCA+IG1heFJlc3VsdHMpIHtcbiAgICAgIHJlc3VsdHMgPSByZXN1bHRzLnNsaWNlKDAsIG1heFJlc3VsdHMpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzXG4gIH1cblxuICBhZGRDdXN0b21FbW9qaShjdXN0b21FbW9qaSkge1xuICAgIGxldCBlbW9qaURhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBjdXN0b21FbW9qaSwge1xuICAgICAgaWQ6IGN1c3RvbUVtb2ppLnNob3J0X25hbWVzWzBdLFxuICAgICAgY3VzdG9tOiB0cnVlLFxuICAgIH0pXG4gICAgaWYgKCFlbW9qaURhdGEuc2VhcmNoKSB7XG4gICAgICBlbW9qaURhdGEuc2VhcmNoID0gYnVpbGRTZWFyY2goZW1vamlEYXRhKVxuICAgIH1cbiAgICBsZXQgZW1vamkgPSBuZXcgRW1vamlEYXRhKGVtb2ppRGF0YSlcbiAgICB0aGlzLl9lbW9qaXNbZW1vamkuaWRdID0gZW1vamlcbiAgICB0aGlzLl9jdXN0b21DYXRlZ29yeS5lbW9qaXMucHVzaChlbW9qaSlcbiAgICByZXR1cm4gZW1vamlcbiAgfVxuXG4gIGFkZEVtb2ppKGVtb2ppSWQpIHtcbiAgICAvLyBXZSBleHBlY3QgdGhlIGNvcnJlY3QgZW1vamkgaWQgdGhhdCBpcyBwcmVzZW50IGluIHRoZSBlbW9qaXMgZGF0YS5cbiAgICBsZXQgZGF0YSA9IHRoaXMuX2RhdGEuZW1vamlzW2Vtb2ppSWRdXG5cbiAgICBpZiAoIXRoaXMuaXNFbW9qaU5lZWRlZChkYXRhKSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgbGV0IGVtb2ppID0gbmV3IEVtb2ppRGF0YShkYXRhKVxuICAgIHRoaXMuX2Vtb2ppc1tlbW9qaUlkXSA9IGVtb2ppXG4gICAgaWYgKGVtb2ppLm5hdGl2ZSkge1xuICAgICAgdGhpcy5fbmF0aXZlRW1vamlzW2Vtb2ppLm5hdGl2ZV0gPSBlbW9qaVxuICAgIH1cbiAgICBpZiAoZW1vamkuX3NraW5zKSB7XG4gICAgICBmb3IgKGxldCBpZHggaW4gZW1vamkuX3NraW5zKSB7XG4gICAgICAgIGxldCBza2luID0gZW1vamkuX3NraW5zW2lkeF1cbiAgICAgICAgaWYgKHNraW4ubmF0aXZlKSB7XG4gICAgICAgICAgdGhpcy5fbmF0aXZlRW1vamlzW3NraW4ubmF0aXZlXSA9IHNraW5cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChlbW9qaS5lbW90aWNvbnMpIHtcbiAgICAgIGVtb2ppLmVtb3RpY29ucy5mb3JFYWNoKChlbW90aWNvbikgPT4ge1xuICAgICAgICBpZiAodGhpcy5fZW1vdGljb25zW2Vtb3RpY29uXSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2Vtb3RpY29uc1tlbW90aWNvbl0gPSBlbW9qaUlkXG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gZW1vamlcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB3ZSBuZWVkIHRvIGluY2x1ZGUgZ2l2ZW4gY2F0ZWdvcnkuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjYXRlZ29yeV9pZCAtIFRoZSBjYXRlZ29yeSBpZC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gLSBXaGV0aGVyIHRvIGluY2x1ZGUgdGhlIGVtb2ppLlxuICAgKi9cbiAgaXNDYXRlZ29yeU5lZWRlZChjYXRlZ29yeV9pZCkge1xuICAgIGxldCBpc0luY2x1ZGVkID1cbiAgICAgIHRoaXMuX2luY2x1ZGUgJiYgdGhpcy5faW5jbHVkZS5sZW5ndGhcbiAgICAgICAgPyB0aGlzLl9pbmNsdWRlLmluZGV4T2YoY2F0ZWdvcnlfaWQpID4gLTFcbiAgICAgICAgOiB0cnVlXG4gICAgbGV0IGlzRXhjbHVkZWQgPVxuICAgICAgdGhpcy5fZXhjbHVkZSAmJiB0aGlzLl9leGNsdWRlLmxlbmd0aFxuICAgICAgICA/IHRoaXMuX2V4Y2x1ZGUuaW5kZXhPZihjYXRlZ29yeV9pZCkgPiAtMVxuICAgICAgICA6IGZhbHNlXG4gICAgaWYgKCFpc0luY2x1ZGVkIHx8IGlzRXhjbHVkZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHdlIG5lZWQgdG8gaW5jbHVkZSBnaXZlbiBlbW9qaS5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGVtb2ppIC0gVGhlIHJhdyBlbW9qaSBvYmplY3QuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IC0gV2hldGhlciB0byBpbmNsdWRlIHRoZSBlbW9qaS5cbiAgICovXG4gIGlzRW1vamlOZWVkZWQoZW1vamkpIHtcbiAgICBpZiAodGhpcy5fZW1vamlzRmlsdGVyKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZW1vamlzRmlsdGVyKGVtb2ppKVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFbW9qaURhdGEge1xuICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgdGhpcy5fZGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGEpXG4gICAgdGhpcy5fc2tpbnMgPSBudWxsXG4gICAgaWYgKHRoaXMuX2RhdGEuc2tpbl92YXJpYXRpb25zKSB7XG4gICAgICB0aGlzLl9za2lucyA9IFtdXG4gICAgICBmb3IgKHZhciBza2luSWR4IGluIFNLSU5TKSB7XG4gICAgICAgIGxldCBza2luS2V5ID0gU0tJTlNbc2tpbklkeF1cbiAgICAgICAgbGV0IHZhcmlhdGlvbkRhdGEgPSB0aGlzLl9kYXRhLnNraW5fdmFyaWF0aW9uc1tza2luS2V5XVxuICAgICAgICBsZXQgc2tpbkRhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhKVxuICAgICAgICBmb3IgKGxldCBrIGluIHZhcmlhdGlvbkRhdGEpIHtcbiAgICAgICAgICBza2luRGF0YVtrXSA9IHZhcmlhdGlvbkRhdGFba11cbiAgICAgICAgfVxuICAgICAgICBkZWxldGUgc2tpbkRhdGEuc2tpbl92YXJpYXRpb25zXG4gICAgICAgIHNraW5EYXRhWydza2luX3RvbmUnXSA9IHBhcnNlSW50KHNraW5JZHgpICsgMVxuICAgICAgICB0aGlzLl9za2lucy5wdXNoKG5ldyBFbW9qaURhdGEoc2tpbkRhdGEpKVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9zYW5pdGl6ZWQgPSBzYW5pdGl6ZSh0aGlzLl9kYXRhKVxuICAgIGZvciAobGV0IGtleSBpbiB0aGlzLl9zYW5pdGl6ZWQpIHtcbiAgICAgIHRoaXNba2V5XSA9IHRoaXMuX3Nhbml0aXplZFtrZXldXG4gICAgfVxuICAgIHRoaXMuc2hvcnRfbmFtZXMgPSB0aGlzLl9kYXRhLnNob3J0X25hbWVzXG4gICAgdGhpcy5zaG9ydF9uYW1lID0gdGhpcy5fZGF0YS5zaG9ydF9uYW1lc1swXVxuICAgIE9iamVjdC5mcmVlemUodGhpcylcbiAgfVxuXG4gIGdldFNraW4oc2tpbklkeCkge1xuICAgIGlmIChza2luSWR4ICYmIHNraW5JZHggIT0gJ25hdGl2ZScgJiYgdGhpcy5fc2tpbnMpIHtcbiAgICAgIHJldHVybiB0aGlzLl9za2luc1tza2luSWR4IC0gMV1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGdldFBvc2l0aW9uKCkge1xuICAgIGxldCBhZGp1c3RlZENvbHVtbnMgPSBTSEVFVF9DT0xVTU5TIC0gMSxcbiAgICAgIHggPSArKCgxMDAgLyBhZGp1c3RlZENvbHVtbnMpICogdGhpcy5fZGF0YS5zaGVldF94KS50b0ZpeGVkKDIpLFxuICAgICAgeSA9ICsoKDEwMCAvIGFkanVzdGVkQ29sdW1ucykgKiB0aGlzLl9kYXRhLnNoZWV0X3kpLnRvRml4ZWQoMilcbiAgICByZXR1cm4gYCR7eH0lICR7eX0lYFxuICB9XG5cbiAgYXJpYUxhYmVsKCkge1xuICAgIHJldHVybiBbdGhpcy5uYXRpdmVdLmNvbmNhdCh0aGlzLnNob3J0X25hbWVzKS5maWx0ZXIoQm9vbGVhbikuam9pbignLCAnKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFbW9qaVZpZXcge1xuICAvKipcbiAgICogZW1vamkgLSBFbW9qaSB0byBkaXNwbGF5XG4gICAqIHNldCAtIHN0cmluZywgZW1vamkgc2V0IG5hbWVcbiAgICogbmF0aXZlIC0gYm9vbGVhbiwgd2hldGhlciB0byByZW5kZXIgbmF0aXZlIGVtb2ppXG4gICAqIGZhbGxiYWNrIC0gZmFsbGJhY2sgZnVuY3Rpb24gdG8gcmVuZGVyIG1pc3NpbmcgZW1vamksIG9wdGlvbmFsXG4gICAqIGVtb2ppVG9vbHRpcCAtIHdldGhlciB3ZSBuZWVkIHRvIHNob3cgdGhlIGVtb2ppIHRvb2x0aXAsIG9wdGlvbmFsXG4gICAqIGVtb2ppU2l6ZSAtIGVtb2ppIHNpemUgaW4gcGl4ZWxzLCBvcHRpb25hbFxuICAgKi9cbiAgY29uc3RydWN0b3IoZW1vamksIHNraW4sIHNldCwgbmF0aXZlLCBmYWxsYmFjaywgZW1vamlUb29sdGlwLCBlbW9qaVNpemUpIHtcbiAgICB0aGlzLl9lbW9qaSA9IGVtb2ppXG4gICAgdGhpcy5fbmF0aXZlID0gbmF0aXZlXG4gICAgdGhpcy5fc2tpbiA9IHNraW5cbiAgICB0aGlzLl9zZXQgPSBzZXRcbiAgICB0aGlzLl9mYWxsYmFjayA9IGZhbGxiYWNrXG5cbiAgICB0aGlzLmNhblJlbmRlciA9IHRoaXMuX2NhblJlbmRlcigpXG4gICAgdGhpcy5jc3NDbGFzcyA9IHRoaXMuX2Nzc0NsYXNzKClcbiAgICB0aGlzLmNzc1N0eWxlID0gdGhpcy5fY3NzU3R5bGUoZW1vamlTaXplKVxuICAgIHRoaXMuY29udGVudCA9IHRoaXMuX2NvbnRlbnQoKVxuICAgIHRoaXMudGl0bGUgPSBlbW9qaVRvb2x0aXAgPT09IHRydWUgPyBlbW9qaS5zaG9ydF9uYW1lIDogbnVsbFxuICAgIHRoaXMuYXJpYUxhYmVsID0gZW1vamkuYXJpYUxhYmVsKClcblxuICAgIE9iamVjdC5mcmVlemUodGhpcylcbiAgfVxuXG4gIGdldEVtb2ppKCkge1xuICAgIHJldHVybiB0aGlzLl9lbW9qaS5nZXRTa2luKHRoaXMuX3NraW4pXG4gIH1cblxuICBfY2FuUmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLl9pc0N1c3RvbSgpIHx8IHRoaXMuX2lzTmF0aXZlKCkgfHwgdGhpcy5faGFzRW1vamkoKSB8fCB0aGlzLl9mYWxsYmFja1xuICAgIClcbiAgfVxuXG4gIF9jc3NDbGFzcygpIHtcbiAgICByZXR1cm4gWydlbW9qaS1zZXQtJyArIHRoaXMuX3NldCwgJ2Vtb2ppLXR5cGUtJyArIHRoaXMuX2Vtb2ppVHlwZSgpXVxuICB9XG5cbiAgX2Nzc1N0eWxlKGVtb2ppU2l6ZSkge1xuICAgIGxldCBjc3NTdHlsZSA9IHt9XG4gICAgaWYgKHRoaXMuX2lzQ3VzdG9tKCkpIHtcbiAgICAgIGNzc1N0eWxlID0ge1xuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoJyArIHRoaXMuZ2V0RW1vamkoKS5fZGF0YS5pbWFnZVVybCArICcpJyxcbiAgICAgICAgYmFja2dyb3VuZFNpemU6ICcxMDAlJyxcbiAgICAgICAgd2lkdGg6IGVtb2ppU2l6ZSArICdweCcsXG4gICAgICAgIGhlaWdodDogZW1vamlTaXplICsgJ3B4JyxcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuX2hhc0Vtb2ppKCkgJiYgIXRoaXMuX2lzTmF0aXZlKCkpIHtcbiAgICAgIGNzc1N0eWxlID0ge1xuICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IHRoaXMuZ2V0RW1vamkoKS5nZXRQb3NpdGlvbigpLFxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW1vamlTaXplKSB7XG4gICAgICBpZiAodGhpcy5faXNOYXRpdmUoKSkge1xuICAgICAgICAvLyBTZXQgZm9udC1zaXplIGZvciBuYXRpdmUgZW1vamkuXG4gICAgICAgIGNzc1N0eWxlID0gT2JqZWN0LmFzc2lnbihjc3NTdHlsZSwge1xuICAgICAgICAgIC8vIGZvbnQtc2l6ZSBpcyB1c2VkIGZvciBuYXRpdmUgZW1vamkgd2hpY2ggd2UgbmVlZFxuICAgICAgICAgIC8vIHRvIHNjYWxlIHdpdGggMC45NSBmYWN0b3IgdG8gaGF2ZSB0aGVtIGxvb2sgYXBwcm94aW1hdGVseVxuICAgICAgICAgIC8vIHRoZSBzYW1lIHNpemUgYXMgaW1hZ2UtYmFzZWQgZW1vamkuXG4gICAgICAgICAgZm9udFNpemU6IE1hdGgucm91bmQoZW1vamlTaXplICogMC45NSAqIDEwKSAvIDEwICsgJ3B4JyxcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFNldCB3aWR0aC9oZWlnaHQgZm9yIGltYWdlIGVtb2ppLlxuICAgICAgICBjc3NTdHlsZSA9IE9iamVjdC5hc3NpZ24oY3NzU3R5bGUsIHtcbiAgICAgICAgICB3aWR0aDogZW1vamlTaXplICsgJ3B4JyxcbiAgICAgICAgICBoZWlnaHQ6IGVtb2ppU2l6ZSArICdweCcsXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjc3NTdHlsZVxuICB9XG5cbiAgX2NvbnRlbnQoKSB7XG4gICAgaWYgKHRoaXMuX2lzQ3VzdG9tKCkpIHtcbiAgICAgIHJldHVybiAnJ1xuICAgIH1cbiAgICBpZiAodGhpcy5faXNOYXRpdmUoKSkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0RW1vamkoKS5uYXRpdmVcbiAgICB9XG4gICAgaWYgKHRoaXMuX2hhc0Vtb2ppKCkpIHtcbiAgICAgIHJldHVybiAnJ1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZmFsbGJhY2sgPyB0aGlzLl9mYWxsYmFjayh0aGlzLmdldEVtb2ppKCkpIDogbnVsbFxuICB9XG5cbiAgX2lzTmF0aXZlKCkge1xuICAgIHJldHVybiB0aGlzLl9uYXRpdmVcbiAgfVxuXG4gIF9pc0N1c3RvbSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRFbW9qaSgpLmN1c3RvbVxuICB9XG5cbiAgX2hhc0Vtb2ppKCkge1xuICAgIGlmICghdGhpcy5nZXRFbW9qaSgpLl9kYXRhKSB7XG4gICAgICAvLyBSZXR1cm4gZmFsc2UgaWYgd2UgaGF2ZSBubyBkYXRhLlxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIGNvbnN0IGhhc0ltYWdlID0gdGhpcy5nZXRFbW9qaSgpLl9kYXRhWydoYXNfaW1nXycgKyB0aGlzLl9zZXRdXG4gICAgaWYgKGhhc0ltYWdlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIElmIHRoZXJlIGlzIG5vIGhhc19pbWdfeHh4IGluIHRoZSBkYXRhLCB3ZSBhcmUgd29ya2luZyB3aXRoXG4gICAgICAvLyBzcGVjaWZpYyBkYXRhIGZpbGUsIGxpa2UgZmFjZWJvb2suanNvbiwgc28gd2UgYXNzdW1lIGFsbFxuICAgICAgLy8gZW1vamlzIGFyZSBhdmFpbGFibGUgKHRoZSA6c2V0IHNldHRpbmcgZm9yIHBpY2tlciBzaG91bGRcbiAgICAgIC8vIG1hdGNoIHRoZSBkYXRhIGZpbGUpLlxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgLy8gT3RoZXJ3aXNlLCB3ZSBhcmUgdXNpbmcgYWxsLmpzb24gYW5kIGNhbiBzd2l0Y2ggYmV0d2VlbiBkaWZmZXJlbnRcbiAgICAvLyBzZXRzIC0gaW4gdGhpcyBjYXNlIHRoZSBgaGFzX2ltZ197c2V0X25hbWV9YCBpcyBhIGJvb2xlYW4gdGhhdFxuICAgIC8vIGluZGljYXRlcyBpZiB0aGVyZSBpcyBzdWNoIGltYWdlIG9yIG5vdCBmb3IgYSBnaXZlbiBzZXQuXG4gICAgcmV0dXJuIGhhc0ltYWdlXG4gIH1cblxuICBfZW1vamlUeXBlKCkge1xuICAgIGlmICh0aGlzLl9pc0N1c3RvbSgpKSB7XG4gICAgICByZXR1cm4gJ2N1c3RvbSdcbiAgICB9XG4gICAgaWYgKHRoaXMuX2lzTmF0aXZlKCkpIHtcbiAgICAgIHJldHVybiAnbmF0aXZlJ1xuICAgIH1cbiAgICBpZiAodGhpcy5faGFzRW1vamkoKSkge1xuICAgICAgcmV0dXJuICdpbWFnZSdcbiAgICB9XG4gICAgcmV0dXJuICdmYWxsYmFjaydcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2FuaXRpemUoZW1vamkpIHtcbiAgdmFyIHtcbiAgICAgIG5hbWUsXG4gICAgICBzaG9ydF9uYW1lcyxcbiAgICAgIHNraW5fdG9uZSxcbiAgICAgIHNraW5fdmFyaWF0aW9ucyxcbiAgICAgIGVtb3RpY29ucyxcbiAgICAgIHVuaWZpZWQsXG4gICAgICBjdXN0b20sXG4gICAgICBpbWFnZVVybCxcbiAgICB9ID0gZW1vamksXG4gICAgaWQgPSBlbW9qaS5pZCB8fCBzaG9ydF9uYW1lc1swXSxcbiAgICBjb2xvbnMgPSBgOiR7aWR9OmBcblxuICBpZiAoY3VzdG9tKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkLFxuICAgICAgbmFtZSxcbiAgICAgIGNvbG9ucyxcbiAgICAgIGVtb3RpY29ucyxcbiAgICAgIGN1c3RvbSxcbiAgICAgIGltYWdlVXJsLFxuICAgIH1cbiAgfVxuXG4gIGlmIChza2luX3RvbmUpIHtcbiAgICBjb2xvbnMgKz0gYDpza2luLXRvbmUtJHtza2luX3RvbmV9OmBcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaWQsXG4gICAgbmFtZSxcbiAgICBjb2xvbnMsXG4gICAgZW1vdGljb25zLFxuICAgIHVuaWZpZWQ6IHVuaWZpZWQudG9Mb3dlckNhc2UoKSxcbiAgICBza2luOiBza2luX3RvbmUgfHwgKHNraW5fdmFyaWF0aW9ucyA/IDEgOiBudWxsKSxcbiAgICBuYXRpdmU6IHVuaWZpZWRUb05hdGl2ZSh1bmlmaWVkKSxcbiAgfVxufVxuIiwiaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUnXG5cbmNvbnN0IERFRkFVTFRTID0gW1xuICAnKzEnLFxuICAnZ3Jpbm5pbmcnLFxuICAna2lzc2luZ19oZWFydCcsXG4gICdoZWFydF9leWVzJyxcbiAgJ2xhdWdoaW5nJyxcbiAgJ3N0dWNrX291dF90b25ndWVfd2lua2luZ19leWUnLFxuICAnc3dlYXRfc21pbGUnLFxuICAnam95JyxcbiAgJ3NjcmVhbScsXG4gICdkaXNhcHBvaW50ZWQnLFxuICAndW5hbXVzZWQnLFxuICAnd2VhcnknLFxuICAnc29iJyxcbiAgJ3N1bmdsYXNzZXMnLFxuICAnaGVhcnQnLFxuICAnaGFua2V5Jyxcbl1cblxubGV0IGZyZXF1ZW50bHksIGluaXRpYWxpemVkXG5sZXQgZGVmYXVsdHMgPSB7fVxuXG5mdW5jdGlvbiBpbml0KCkge1xuICBpbml0aWFsaXplZCA9IHRydWVcbiAgZnJlcXVlbnRseSA9IHN0b3JlLmdldCgnZnJlcXVlbnRseScpXG59XG5cbmZ1bmN0aW9uIGFkZChlbW9qaSkge1xuICBpZiAoIWluaXRpYWxpemVkKSBpbml0KClcbiAgdmFyIHsgaWQgfSA9IGVtb2ppXG5cbiAgZnJlcXVlbnRseSB8fCAoZnJlcXVlbnRseSA9IGRlZmF1bHRzKVxuICBmcmVxdWVudGx5W2lkXSB8fCAoZnJlcXVlbnRseVtpZF0gPSAwKVxuICBmcmVxdWVudGx5W2lkXSArPSAxXG5cbiAgc3RvcmUuc2V0KCdsYXN0JywgaWQpXG4gIHN0b3JlLnNldCgnZnJlcXVlbnRseScsIGZyZXF1ZW50bHkpXG59XG5cbmZ1bmN0aW9uIGdldChtYXhOdW1iZXIpIHtcbiAgaWYgKCFpbml0aWFsaXplZCkgaW5pdCgpXG4gIGlmICghZnJlcXVlbnRseSkge1xuICAgIGRlZmF1bHRzID0ge31cblxuICAgIGNvbnN0IHJlc3VsdCA9IFtdXG5cbiAgICBsZXQgZGVmYXVsdExlbmd0aCA9IE1hdGgubWluKG1heE51bWJlciwgREVGQVVMVFMubGVuZ3RoKVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVmYXVsdExlbmd0aDsgaSsrKSB7XG4gICAgICBkZWZhdWx0c1tERUZBVUxUU1tpXV0gPSBwYXJzZUludCgoZGVmYXVsdExlbmd0aCAtIGkpIC8gNCwgMTApICsgMVxuICAgICAgcmVzdWx0LnB1c2goREVGQVVMVFNbaV0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgY29uc3QgcXVhbnRpdHkgPSBtYXhOdW1iZXJcbiAgY29uc3QgZnJlcXVlbnRseUtleXMgPSBbXVxuXG4gIGZvciAobGV0IGtleSBpbiBmcmVxdWVudGx5KSB7XG4gICAgaWYgKGZyZXF1ZW50bHkuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgZnJlcXVlbnRseUtleXMucHVzaChrZXkpXG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc29ydGVkID0gZnJlcXVlbnRseUtleXNcbiAgICAuc29ydCgoYSwgYikgPT4gZnJlcXVlbnRseVthXSAtIGZyZXF1ZW50bHlbYl0pXG4gICAgLnJldmVyc2UoKVxuICBjb25zdCBzbGljZWQgPSBzb3J0ZWQuc2xpY2UoMCwgcXVhbnRpdHkpXG5cbiAgY29uc3QgbGFzdCA9IHN0b3JlLmdldCgnbGFzdCcpXG5cbiAgaWYgKGxhc3QgJiYgc2xpY2VkLmluZGV4T2YobGFzdCkgPT0gLTEpIHtcbiAgICBzbGljZWQucG9wKClcbiAgICBzbGljZWQucHVzaChsYXN0KVxuICB9XG5cbiAgcmV0dXJuIHNsaWNlZFxufVxuXG5leHBvcnQgZGVmYXVsdCB7IGFkZCwgZ2V0IH1cbiIsImltcG9ydCBzdHJpbmdGcm9tQ29kZVBvaW50IGZyb20gJy4uL3BvbHlmaWxscy9zdHJpbmdGcm9tQ29kZVBvaW50J1xuXG5mdW5jdGlvbiB1bmlmaWVkVG9OYXRpdmUodW5pZmllZCkge1xuICB2YXIgdW5pY29kZXMgPSB1bmlmaWVkLnNwbGl0KCctJyksXG4gICAgY29kZVBvaW50cyA9IHVuaWNvZGVzLm1hcCgodSkgPT4gYDB4JHt1fWApXG5cbiAgcmV0dXJuIHN0cmluZ0Zyb21Db2RlUG9pbnQuYXBwbHkobnVsbCwgY29kZVBvaW50cylcbn1cblxuZnVuY3Rpb24gdW5pcShhcnIpIHtcbiAgcmV0dXJuIGFyci5yZWR1Y2UoKGFjYywgaXRlbSkgPT4ge1xuICAgIGlmIChhY2MuaW5kZXhPZihpdGVtKSA9PT0gLTEpIHtcbiAgICAgIGFjYy5wdXNoKGl0ZW0pXG4gICAgfVxuICAgIHJldHVybiBhY2NcbiAgfSwgW10pXG59XG5cbmZ1bmN0aW9uIGludGVyc2VjdChhLCBiKSB7XG4gIGNvbnN0IHVuaXFBID0gdW5pcShhKVxuICBjb25zdCB1bmlxQiA9IHVuaXEoYilcblxuICByZXR1cm4gdW5pcUEuZmlsdGVyKChpdGVtKSA9PiB1bmlxQi5pbmRleE9mKGl0ZW0pID49IDApXG59XG5cbmZ1bmN0aW9uIGRlZXBNZXJnZShhLCBiKSB7XG4gIHZhciBvID0ge31cblxuICBmb3IgKGxldCBrZXkgaW4gYSkge1xuICAgIGxldCBvcmlnaW5hbFZhbHVlID0gYVtrZXldLFxuICAgICAgdmFsdWUgPSBvcmlnaW5hbFZhbHVlXG5cbiAgICBpZiAoYi5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICB2YWx1ZSA9IGJba2V5XVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICB2YWx1ZSA9IGRlZXBNZXJnZShvcmlnaW5hbFZhbHVlLCB2YWx1ZSlcbiAgICB9XG5cbiAgICBvW2tleV0gPSB2YWx1ZVxuICB9XG5cbiAgcmV0dXJuIG9cbn1cblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3NvbmljZG9lL21lYXN1cmUtc2Nyb2xsYmFyXG5mdW5jdGlvbiBtZWFzdXJlU2Nyb2xsYmFyKCkge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09ICd1bmRlZmluZWQnKSByZXR1cm4gMFxuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gIGRpdi5zdHlsZS53aWR0aCA9ICcxMDBweCdcbiAgZGl2LnN0eWxlLmhlaWdodCA9ICcxMDBweCdcbiAgZGl2LnN0eWxlLm92ZXJmbG93ID0gJ3Njcm9sbCdcbiAgZGl2LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJ1xuICBkaXYuc3R5bGUudG9wID0gJy05OTk5cHgnXG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpXG4gIGNvbnN0IHNjcm9sbGJhcldpZHRoID0gZGl2Lm9mZnNldFdpZHRoIC0gZGl2LmNsaWVudFdpZHRoXG4gIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZGl2KVxuXG4gIHJldHVybiBzY3JvbGxiYXJXaWR0aFxufVxuXG5leHBvcnQgeyB1bmlxLCBpbnRlcnNlY3QsIGRlZXBNZXJnZSwgdW5pZmllZFRvTmF0aXZlLCBtZWFzdXJlU2Nyb2xsYmFyIH1cbiIsImV4cG9ydCBjbGFzcyBQaWNrZXJWaWV3IHtcbiAgY29uc3RydWN0b3IocGlja2VyQ29tcG9uZW50KSB7XG4gICAgdGhpcy5fdm0gPSBwaWNrZXJDb21wb25lbnRcbiAgICB0aGlzLl9kYXRhID0gcGlja2VyQ29tcG9uZW50LmRhdGFcbiAgICB0aGlzLl9wZXJMaW5lID0gcGlja2VyQ29tcG9uZW50LnBlckxpbmVcblxuICAgIHRoaXMuX2NhdGVnb3JpZXMgPSBbXVxuICAgIHRoaXMuX2NhdGVnb3JpZXMucHVzaCguLi50aGlzLl9kYXRhLmNhdGVnb3JpZXMoKSlcbiAgICB0aGlzLl9jYXRlZ29yaWVzID0gdGhpcy5fY2F0ZWdvcmllcy5maWx0ZXIoKGNhdGVnb3J5KSA9PiB7XG4gICAgICByZXR1cm4gY2F0ZWdvcnkuZW1vamlzLmxlbmd0aCA+IDBcbiAgICB9KVxuXG4gICAgdGhpcy5fY2F0ZWdvcmllc1swXS5maXJzdCA9IHRydWVcbiAgICBPYmplY3QuZnJlZXplKHRoaXMuX2NhdGVnb3JpZXMpXG5cbiAgICB0aGlzLmFjdGl2ZUNhdGVnb3J5ID0gdGhpcy5fY2F0ZWdvcmllc1swXVxuICAgIHRoaXMuc2VhcmNoRW1vamlzID0gbnVsbFxuXG4gICAgLy8gUHJldmlldyBlbW9qaSwgc2hvd24gb24gbW91c2Ugb3ZlciBvciB3aGVuIHdlIG1vdmVcbiAgICAvLyB3aXRoIGFycm93IGtleXMuXG4gICAgdGhpcy5wcmV2aWV3RW1vamkgPSBudWxsXG4gICAgLy8gSW5kZXhlcyBhcmUgdXNlZCB0byBrZWVwIHRoZSBwb3NpdGlvbiB3aGVuIG1vdmluZ1xuICAgIC8vIHdpdGggYXJyb3dzOiBjdXJyZW50IGNhdGVnb3J5IGFuZCBjdXJyZW50IGVtb2ppXG4gICAgLy8gaW5zaWRlIHRoZSBjYXRlZ29yeS5cbiAgICB0aGlzLnByZXZpZXdFbW9qaUNhdGVnb3J5SWR4ID0gMFxuICAgIHRoaXMucHJldmlld0Vtb2ppSWR4ID0gLTFcbiAgfVxuXG4gIG9uU2Nyb2xsKCkge1xuICAgIGNvbnN0IHNjcm9sbEVsZW1lbnQgPSB0aGlzLl92bS4kcmVmcy5zY3JvbGxcbiAgICBjb25zdCBzY3JvbGxUb3AgPSBzY3JvbGxFbGVtZW50LnNjcm9sbFRvcFxuXG4gICAgbGV0IGFjdGl2ZUNhdGVnb3J5ID0gdGhpcy5maWx0ZXJlZENhdGVnb3JpZXNbMF1cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuZmlsdGVyZWRDYXRlZ29yaWVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGNhdGVnb3J5ID0gdGhpcy5maWx0ZXJlZENhdGVnb3JpZXNbaV1cbiAgICAgIGxldCBjb21wb25lbnQgPSB0aGlzLl92bS5nZXRDYXRlZ29yeUNvbXBvbmVudChpKVxuICAgICAgLy8gVGhlIGAtNTBgIG9mZnNldCBzd2l0Y2hlcyBhY3RpdmUgY2F0ZWdvcnkgKHNlbGVjdGVkIGluIHRoZVxuICAgICAgLy8gYW5jaG9ycyBiYXIpIGEgYml0IGVhcmlsZXIsIGJlZm9yZSBpdCBhY3R1YWxseSByZWFjaGVzIHRoZSB0b3AuXG4gICAgICBpZiAoY29tcG9uZW50ICYmIGNvbXBvbmVudC4kZWwub2Zmc2V0VG9wIC0gNTAgPiBzY3JvbGxUb3ApIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgIGFjdGl2ZUNhdGVnb3J5ID0gY2F0ZWdvcnlcbiAgICB9XG4gICAgdGhpcy5hY3RpdmVDYXRlZ29yeSA9IGFjdGl2ZUNhdGVnb3J5XG4gIH1cblxuICBnZXQgYWxsQ2F0ZWdvcmllcygpIHtcbiAgICByZXR1cm4gdGhpcy5fY2F0ZWdvcmllc1xuICB9XG5cbiAgZ2V0IGZpbHRlcmVkQ2F0ZWdvcmllcygpIHtcbiAgICBpZiAodGhpcy5zZWFyY2hFbW9qaXMpIHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogJ3NlYXJjaCcsXG4gICAgICAgICAgbmFtZTogJ1NlYXJjaCcsXG4gICAgICAgICAgZW1vamlzOiB0aGlzLnNlYXJjaEVtb2ppcyxcbiAgICAgICAgfSxcbiAgICAgIF1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2NhdGVnb3JpZXMuZmlsdGVyKChjYXRlZ29yeSkgPT4ge1xuICAgICAgbGV0IGhhc0Vtb2ppcyA9IGNhdGVnb3J5LmVtb2ppcy5sZW5ndGggPiAwXG4gICAgICByZXR1cm4gaGFzRW1vamlzXG4gICAgfSlcbiAgfVxuXG4gIGdldCBwcmV2aWV3RW1vamlDYXRlZ29yeSgpIHtcbiAgICBpZiAodGhpcy5wcmV2aWV3RW1vamlDYXRlZ29yeUlkeCA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5maWx0ZXJlZENhdGVnb3JpZXNbdGhpcy5wcmV2aWV3RW1vamlDYXRlZ29yeUlkeF1cbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIG9uQW5jaG9yQ2xpY2soY2F0ZWdvcnkpIHtcbiAgICBpZiAodGhpcy5zZWFyY2hFbW9qaXMpIHtcbiAgICAgIC8vIE5vIGNhdGVnb3JpZXMgYXJlIHNob3duIHdoZW4gc2VhcmNoIGlzIGFjdGl2ZS5cbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBsZXQgaSA9IHRoaXMuZmlsdGVyZWRDYXRlZ29yaWVzLmluZGV4T2YoY2F0ZWdvcnkpXG4gICAgbGV0IGNvbXBvbmVudCA9IHRoaXMuX3ZtLmdldENhdGVnb3J5Q29tcG9uZW50KGkpXG4gICAgbGV0IHNjcm9sbFRvQ29tcG9uZW50ID0gKCkgPT4ge1xuICAgICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgICBsZXQgdG9wID0gY29tcG9uZW50LiRlbC5vZmZzZXRUb3BcbiAgICAgICAgaWYgKGNhdGVnb3J5LmZpcnN0KSB7XG4gICAgICAgICAgdG9wID0gMFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3ZtLiRyZWZzLnNjcm9sbC5zY3JvbGxUb3AgPSB0b3BcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuX3ZtLmluZmluaXRlU2Nyb2xsKSB7XG4gICAgICBzY3JvbGxUb0NvbXBvbmVudCgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWN0aXZlQ2F0ZWdvcnkgPSB0aGlzLmZpbHRlcmVkQ2F0ZWdvcmllc1tpXVxuICAgIH1cbiAgfVxuXG4gIG9uU2VhcmNoKHZhbHVlKSB7XG4gICAgbGV0IGVtb2ppcyA9IHRoaXMuX2RhdGEuc2VhcmNoKHZhbHVlLCB0aGlzLm1heFNlYXJjaFJlc3VsdHMpXG4gICAgdGhpcy5zZWFyY2hFbW9qaXMgPSBlbW9qaXNcblxuICAgIHRoaXMucHJldmlld0Vtb2ppQ2F0ZWdvcnlJZHggPSAwXG4gICAgdGhpcy5wcmV2aWV3RW1vamlJZHggPSAwXG4gICAgdGhpcy51cGRhdGVQcmV2aWV3RW1vamkoKVxuICB9XG5cbiAgb25FbW9qaUVudGVyKGVtb2ppKSB7XG4gICAgdGhpcy5wcmV2aWV3RW1vamkgPSBlbW9qaVxuICAgIHRoaXMucHJldmlld0Vtb2ppSWR4ID0gLTFcbiAgICB0aGlzLnByZXZpZXdFbW9qaUNhdGVnb3J5SWR4ID0gLTFcbiAgfVxuXG4gIG9uRW1vamlMZWF2ZShlbW9qaSkge1xuICAgIHRoaXMucHJldmlld0Vtb2ppID0gbnVsbFxuICB9XG5cbiAgb25BcnJvd0xlZnQoKSB7XG4gICAgLy8gTW92aW5nIGxlZnQsIGRlY3JlYXNlIGVtb2ppIGluZGV4LlxuICAgIGlmICh0aGlzLnByZXZpZXdFbW9qaUlkeCA+IDApIHtcbiAgICAgIHRoaXMucHJldmlld0Vtb2ppSWR4IC09IDFcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSWYgZW1vamkgaW5kZXggaXMgemVybywgZ28gdG8gdGhlIHByZXZpb3VzIGNhdGVnb3J5LlxuICAgICAgdGhpcy5wcmV2aWV3RW1vamlDYXRlZ29yeUlkeCAtPSAxXG4gICAgICBpZiAodGhpcy5wcmV2aWV3RW1vamlDYXRlZ29yeUlkeCA8IDApIHtcbiAgICAgICAgLy8gSWYgd2UgcmVhY2hlZCBmaXJzdCBjYXRlZ29yeSwga2VlcCBpdC5cbiAgICAgICAgdGhpcy5wcmV2aWV3RW1vamlDYXRlZ29yeUlkeCA9IDBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFVwZGF0ZSBlbW9qaSBpbmRleCAtIHdlIG1vdmVkIHRvIHRoZSBwcmV2aW91cyBjYXRlZ29yeSxcbiAgICAgICAgLy8gZ2V0IHRoZSBsYXN0IGVtb2ppIGluIGl0LlxuICAgICAgICB0aGlzLnByZXZpZXdFbW9qaUlkeCA9XG4gICAgICAgICAgdGhpcy5maWx0ZXJlZENhdGVnb3JpZXNbdGhpcy5wcmV2aWV3RW1vamlDYXRlZ29yeUlkeF0uZW1vamlzLmxlbmd0aCAtXG4gICAgICAgICAgMVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnVwZGF0ZVByZXZpZXdFbW9qaSgpXG4gIH1cblxuICBvbkFycm93UmlnaHQoKSB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5wcmV2aWV3RW1vamlJZHggPFxuICAgICAgdGhpcy5lbW9qaXNMZW5ndGgodGhpcy5wcmV2aWV3RW1vamlDYXRlZ29yeUlkeCkgLSAxXG4gICAgKSB7XG4gICAgICAvLyBNb3ZpbmcgcmlnaHQgd2l0aGluIGNhdGVnb3J5LCBpbmNyZWFzZSBlbW9qaSBpbmRleC5cbiAgICAgIHRoaXMucHJldmlld0Vtb2ppSWR4ICs9IDFcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gR28gdG8gdGhlIG5leHQgY2F0ZWdvcnkuXG4gICAgICB0aGlzLnByZXZpZXdFbW9qaUNhdGVnb3J5SWR4ICs9IDFcbiAgICAgIGlmICh0aGlzLnByZXZpZXdFbW9qaUNhdGVnb3J5SWR4ID49IHRoaXMuZmlsdGVyZWRDYXRlZ29yaWVzLmxlbmd0aCkge1xuICAgICAgICAvLyBJZiB3ZSByZWFjaGVkIHRoZSBsYXN0IGNhdGVnb3J5IC0ga2VlcCBpdC5cbiAgICAgICAgdGhpcy5wcmV2aWV3RW1vamlDYXRlZ29yeUlkeCA9IHRoaXMuZmlsdGVyZWRDYXRlZ29yaWVzLmxlbmd0aCAtIDFcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIElmIHdlIG1vdmVkIHRvIHRoZSBuZXh0IGNhdGVnb3J5LCB1cGRhdGUgZW1vamkgaW5kZXggdG8gdGhlXG4gICAgICAgIC8vIGZpcnN0IGVtb2ppIGluIHRoZSBuZXcgY2F0ZWdvcnkuXG4gICAgICAgIHRoaXMucHJldmlld0Vtb2ppSWR4ID0gMFxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnVwZGF0ZVByZXZpZXdFbW9qaSgpXG4gIH1cblxuICBvbkFycm93RG93bigpIHtcbiAgICAvLyBJZiB3ZSBhcmUgb3V0IG9mIHRoZSBlbW9qaSBjb250cm9sIChpbmRleCBpcyAtMSksIHNlbGVjdCB0aGUgZmlyc3RcbiAgICAvLyBlbW9qaSBpbiB0aGUgZmlyc3QgY2F0ZWdvcnkgYnkgY2FsbGluZyBgb25BcnJvd1JpZ2h0YC5cbiAgICBpZiAodGhpcy5wcmV2aWV3RW1vamlJZHggPT0gLTEpIHtcbiAgICAgIHJldHVybiB0aGlzLm9uQXJyb3dSaWdodCgpXG4gICAgfVxuXG4gICAgY29uc3QgY2F0ZWdvcnlMZW5ndGggPVxuICAgICAgdGhpcy5maWx0ZXJlZENhdGVnb3JpZXNbdGhpcy5wcmV2aWV3RW1vamlDYXRlZ29yeUlkeF0uZW1vamlzLmxlbmd0aFxuXG4gICAgLy8gV2hlbiBtb3ZpbmcgZG93biwgd2UgY2FuIG1vdmUgYF9wZXJMaW5lYCBpY29ucyByaWdodCB0b1xuICAgIC8vIGp1bXAgdG8gdGhlIHNhbWUgcG9zaXRpb24gaW4gdGhlIG5leHQgcm93LlxuICAgIGxldCBkaWZmID0gdGhpcy5fcGVyTGluZVxuXG4gICAgLy8gVE9ETzogcHJldmlld0NhdGVnb3J5IHNob3VsZCBtYXRjaCBhY3RpdmVDYXRlZ29yeVxuICAgIC8vIChzbyBpdCB3b3VsZCBiZSBib3RoIGhpZ2hsaWdodGVkIGluIFVJIGFuZCB1c2VkXG4gICAgLy8gd2hlbiB3ZSBzdGFydCBtb3Zpbmcgd2l0aCBhcnJvd3MgYWZ0ZXIgY2xpY2tpbmdcbiAgICAvLyB0aGUgY2F0ZWdvcnkpLlxuXG4gICAgLy8gTm90ZTogcHJvYmFibHkgd2UgY2FuIGFsd2FzeSB0YWtlIGN1cnJlbnQgcm93IGxlbmd0aFxuICAgIC8vIGFzIGEgYGRpZmZgIC0gaXQgd2lsbCBmaXQgYm90aCBjYXNlIG9mIGFueSByb3cgYW5kXG4gICAgLy8gc3BlY2lhbCBjYXNlIG9mIHRoZSBsYXN0IHJvdy5cbiAgICAvLyBOb3RlOiBpdCBjYW4gYmUgYWxzbyBlYXNpZXIgdG8gdXBkYXRlIGluZGV4ZXNcbiAgICAvLyBkaXJlY3RseSBoZXJlIGluc3RlYWQgb2YgY2FsbGluZyBvbkFycm93UmlnaHQuXG4gICAgLy8gU2FtZSBpcyB0cnVlIGZvciBgb25BcnJvd1VwYC5cblxuICAgIC8vIFVubGVzcyBpZiB3ZSBhcmUgb24gdGhlIGxhc3Qgcm93IG9mIHRoZSBjYXRlZ29yeSBhbmRcbiAgICAvLyB0aGVyZSBhcmUgbGVzcyB0aGVuIGBfcGVyTGluZWAgZW1vamlzIGluIGl0LlxuICAgIC8vIEluIHRoaXMgY2FzZSB3ZSB1c2UgdGhlIGxhc3Qgcm93IGxlbmd0aCBhcyBkaWZmXG4gICAgLy8gc28gd2UgZ28gc3RyYWlnaHQgZG93biwgZm9yIGV4YW1wbGU6XG4gICAgLy9cbiAgICAvLyAgIDEgMiAzIDQgNSA2XG4gICAgLy8gICA3IDggOVxuICAgIC8vICAgQSBCIEMgRCBFIEZcbiAgICAvL1xuICAgIC8vIElmIHdlIGdvIGRvd24gZnJvbSBgOGAsIHdlIG5lZWQgdG8gbW92ZSAzIGVtb2ppcyByaWdodFxuICAgIC8vIHRvIGxlbmQgYXQgYEJgIChhbmQgMyBpcyB0aGUgbGVuZ3RoIG9mIHRoZSBsYXN0IHJvdyBvZlxuICAgIC8vIHRoaXMgY2F0ZWdvcnkpLlxuICAgIC8vIEFuZCBpZiB3ZSB1c2VkIDYgaW5zdGVhZCAocm93IGxlbmd0aCwgYF9wZXJMaW5lYCksIHdlIHdvdWxkXG4gICAgLy8gbGVuZCB1cCBhdCBgRWAuXG4gICAgaWYgKHRoaXMucHJldmlld0Vtb2ppSWR4ICsgZGlmZiA+IGNhdGVnb3J5TGVuZ3RoKSB7XG4gICAgICAvLyBDYWxjdWxhdGUgdGhlIGxhc3Qgcm93IGxlbmd0aC5cbiAgICAgIGRpZmYgPSBjYXRlZ29yeUxlbmd0aCAlIHRoaXMuX3BlckxpbmVcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaWZmOyBpKyspIHtcbiAgICAgIHRoaXMub25BcnJvd1JpZ2h0KClcbiAgICB9XG4gICAgdGhpcy51cGRhdGVQcmV2aWV3RW1vamkoKVxuICB9XG5cbiAgb25BcnJvd1VwKCkge1xuICAgIC8vIFNpbWlsYXIgdG8gYG9uQXJyb3dEb3duYCwgdG8gbW92ZSB1cCB3ZSBjYW4gbW92ZSBsZWZ0XG4gICAgLy8gYnkgYF9wZXJMaW5lYCBudW1iZXIgb2YgZW1vamlzLlxuICAgIGxldCBkaWZmID0gdGhpcy5fcGVyTGluZVxuXG4gICAgaWYgKHRoaXMucHJldmlld0Vtb2ppSWR4IC0gZGlmZiA8IDApIHtcbiAgICAgIGlmICh0aGlzLnByZXZpZXdFbW9qaUNhdGVnb3J5SWR4ID4gMCkge1xuICAgICAgICAvLyBVbmxlc3MgaWYgd2UgYXJlIG9uIHRoZSBmaXJzdCBsaW5lIG9mIHRoZSBjYXRlZ29yeSBhbmRcbiAgICAgICAgLy8gdGhlIGxhc3QgbGluZSBpbiB0aGUgcHJldmlvdXMgY2F0ZWdvcnkgaXMgc2hvcnRlciB0aGFuXG4gICAgICAgIC8vIGBfcGVyTGluZWAuXG4gICAgICAgIC8vIEluIHRoaXMgY2FzZSB3ZSB1c2UgdGhlIGxhc3Qgcm93IGxlbmd0aCBhcyBkaWZmLCBzb1xuICAgICAgICAvLyB3ZSBnbyBzdHJhaWdodCB1cCwgZm9yIGV4YW1wbGU6XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgMSAyIDMgNCA1XG4gICAgICAgIC8vICAgNiA3IDhcbiAgICAgICAgLy8gICA5IEEgQiBDIERcbiAgICAgICAgLy9cbiAgICAgICAgLy8gSWYgd2UgZ28gdXAgZnJvbSBgQWAsIHdlIG5lZWQgdG8gbW92ZSAzIGVtb2ppcyBsZWZ0IHRvIGdldFxuICAgICAgICAvLyB0byBgN2AgKGFuZCAzIGlzIHRoZSBsZW5ndGggb2YgdGhlIGxhc3Qgcm93IG9mIHRoZSBwcmV2aW91c1xuICAgICAgICAvLyBjYXRlZ29yeSkuXG4gICAgICAgIGNvbnN0IHByZXZDYXRlZ29yeUxhc3RSb3dMZW5ndGggPVxuICAgICAgICAgIHRoaXMuZmlsdGVyZWRDYXRlZ29yaWVzW3RoaXMucHJldmlld0Vtb2ppQ2F0ZWdvcnlJZHggLSAxXS5lbW9qaXNcbiAgICAgICAgICAgIC5sZW5ndGggJSB0aGlzLl9wZXJMaW5lXG4gICAgICAgIC8vIGRpZmYgPSB0aGlzLnByZXZpZXdFbW9qaUlkeCArIHByZXZDYXRlZ29yeUxhc3RSb3dMZW5ndGhcbiAgICAgICAgZGlmZiA9IHByZXZDYXRlZ29yeUxhc3RSb3dMZW5ndGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRpZmYgPSAwXG4gICAgICB9XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGlmZjsgaSsrKSB7XG4gICAgICB0aGlzLm9uQXJyb3dMZWZ0KClcbiAgICB9XG4gICAgdGhpcy51cGRhdGVQcmV2aWV3RW1vamkoKVxuICB9XG5cbiAgdXBkYXRlUHJldmlld0Vtb2ppKCkge1xuICAgIHRoaXMucHJldmlld0Vtb2ppID1cbiAgICAgIHRoaXMuZmlsdGVyZWRDYXRlZ29yaWVzW3RoaXMucHJldmlld0Vtb2ppQ2F0ZWdvcnlJZHhdLmVtb2ppc1tcbiAgICAgICAgdGhpcy5wcmV2aWV3RW1vamlJZHhcbiAgICAgIF1cblxuICAgIHRoaXMuX3ZtLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICAvLyBTY3JvbGwgdGhlIHZpZXcgaWYgdGhlIGBwcmV2aWV3RW1vamlgIGdvZXMgb3V0IG9mIHRoZSB2aXNpYmxlIGFyZWEuXG4gICAgICBjb25zdCBzY3JvbGxFbCA9IHRoaXMuX3ZtLiRyZWZzLnNjcm9sbFxuXG4gICAgICAvLyBOb3RlOiBpdCB3b3VsZCBiZSBtb3JlIFZ1ZS1pc2ggdG8gbWFyayBhbGwgZW1vamlzIHdpdGggYHJlZmBzXG4gICAgICAvLyBhbmQgdGhlbiBkbyBzb21ldGhpbmcgc2ltaWxhciBoZXJlIHRvIHdoYXQgd2UgZG8gaW4gdGhlXG4gICAgICAvLyBgZ2V0Q2F0ZWdvcmllc2AgaW5zdGVhZCBvZiB1c2luZyBgcXVlcnlTZWxlY3RvcmAgZGlyZWN0bHksXG4gICAgICAvLyBidXQgSSBhbSBub3Qgc3VyZSBpZiBoYXZpbmcgbWFueSByZWZzIHdvdWxkIGFmZmVjdCB0aGUgcGVyZm9ybWFuY2VcbiAgICAgIC8vIChpdCBtaWdodCwgc28gSSB1c2UgYHF1ZXJ5U2VsZWN0b3JgIGZvciBub3cpLlxuICAgICAgY29uc3QgZW1vamlFbCA9IHNjcm9sbEVsLnF1ZXJ5U2VsZWN0b3IoJy5lbW9qaS1tYXJ0LWVtb2ppLXNlbGVjdGVkJylcblxuICAgICAgY29uc3Qgc2Nyb2xsSGVpZ2h0ID0gc2Nyb2xsRWwub2Zmc2V0VG9wIC0gc2Nyb2xsRWwub2Zmc2V0SGVpZ2h0XG4gICAgICBpZiAoXG4gICAgICAgIGVtb2ppRWwgJiZcbiAgICAgICAgZW1vamlFbC5vZmZzZXRUb3AgKyBlbW9qaUVsLm9mZnNldEhlaWdodCA+XG4gICAgICAgICAgc2Nyb2xsSGVpZ2h0ICsgc2Nyb2xsRWwuc2Nyb2xsVG9wXG4gICAgICApIHtcbiAgICAgICAgc2Nyb2xsRWwuc2Nyb2xsVG9wICs9IGVtb2ppRWwub2Zmc2V0SGVpZ2h0XG4gICAgICB9XG4gICAgICBpZiAoZW1vamlFbCAmJiBlbW9qaUVsLm9mZnNldFRvcCA8IHNjcm9sbEVsLnNjcm9sbFRvcCkge1xuICAgICAgICBzY3JvbGxFbC5zY3JvbGxUb3AgLT0gZW1vamlFbC5vZmZzZXRIZWlnaHRcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgZW1vamlzTGVuZ3RoKGNhdGVnb3J5SWR4KSB7XG4gICAgaWYgKGNhdGVnb3J5SWR4ID09IC0xKSB7XG4gICAgICByZXR1cm4gMFxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5maWx0ZXJlZENhdGVnb3JpZXNbY2F0ZWdvcnlJZHhdLmVtb2ppcy5sZW5ndGhcbiAgfVxufVxuIiwiY29uc3QgRW1vamlQcm9wcyA9IHtcbiAgbmF0aXZlOiB7XG4gICAgdHlwZTogQm9vbGVhbixcbiAgICBkZWZhdWx0OiBmYWxzZSxcbiAgfSxcbiAgdG9vbHRpcDoge1xuICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgZGVmYXVsdDogZmFsc2UsXG4gIH0sXG4gIGZhbGxiYWNrOiB7XG4gICAgdHlwZTogRnVuY3Rpb24sXG4gIH0sXG4gIHNraW46IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gICAgZGVmYXVsdDogMSxcbiAgfSxcbiAgc2V0OiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGRlZmF1bHQ6ICdhcHBsZScsXG4gIH0sXG4gIGVtb2ppOiB7XG4gICAgdHlwZTogW1N0cmluZywgT2JqZWN0XSxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgfSxcbiAgc2l6ZToge1xuICAgIHR5cGU6IE51bWJlcixcbiAgICBkZWZhdWx0OiBudWxsLFxuICB9LFxuICB0YWc6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgZGVmYXVsdDogJ3NwYW4nLFxuICB9LFxufVxuXG5jb25zdCBQaWNrZXJQcm9wcyA9IHtcbiAgcGVyTGluZToge1xuICAgIHR5cGU6IE51bWJlcixcbiAgICBkZWZhdWx0OiA5LFxuICB9LFxuICBtYXhTZWFyY2hSZXN1bHRzOiB7XG4gICAgdHlwZTogTnVtYmVyLFxuICAgIGRlZmF1bHQ6IDc1LFxuICB9LFxuICBlbW9qaVNpemU6IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gICAgZGVmYXVsdDogMjQsXG4gIH0sXG4gIHRpdGxlOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGRlZmF1bHQ6ICdFbW9qaSBNYXJ04oSiJyxcbiAgfSxcbiAgZW1vamk6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgZGVmYXVsdDogJ2RlcGFydG1lbnRfc3RvcmUnLFxuICB9LFxuICBjb2xvcjoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBkZWZhdWx0OiAnI2FlNjVjNScsXG4gIH0sXG4gIHNldDoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBkZWZhdWx0OiAnYXBwbGUnLFxuICB9LFxuICBza2luOiB7XG4gICAgdHlwZTogTnVtYmVyLFxuICAgIGRlZmF1bHQ6IG51bGwsXG4gIH0sXG4gIGRlZmF1bHRTa2luOiB7XG4gICAgdHlwZTogTnVtYmVyLFxuICAgIGRlZmF1bHQ6IDEsXG4gIH0sXG4gIG5hdGl2ZToge1xuICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgZGVmYXVsdDogZmFsc2UsXG4gIH0sXG4gIGVtb2ppVG9vbHRpcDoge1xuICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgZGVmYXVsdDogZmFsc2UsXG4gIH0sXG4gIGF1dG9Gb2N1czoge1xuICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgZGVmYXVsdDogZmFsc2UsXG4gIH0sXG4gIGkxOG46IHtcbiAgICB0eXBlOiBPYmplY3QsXG4gICAgZGVmYXVsdCgpIHtcbiAgICAgIHJldHVybiB7fVxuICAgIH0sXG4gIH0sXG4gIHNob3dQcmV2aWV3OiB7XG4gICAgdHlwZTogQm9vbGVhbixcbiAgICBkZWZhdWx0OiB0cnVlLFxuICB9LFxuICBzaG93U2VhcmNoOiB7XG4gICAgdHlwZTogQm9vbGVhbixcbiAgICBkZWZhdWx0OiB0cnVlLFxuICB9LFxuICBzaG93Q2F0ZWdvcmllczoge1xuICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgZGVmYXVsdDogdHJ1ZSxcbiAgfSxcbiAgc2hvd1NraW5Ub25lczoge1xuICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgZGVmYXVsdDogdHJ1ZSxcbiAgfSxcbiAgaW5maW5pdGVTY3JvbGw6IHtcbiAgICB0eXBlOiBCb29sZWFuLFxuICAgIGRlZmF1bHQ6IHRydWUsXG4gIH0sXG4gIHBpY2tlclN0eWxlczoge1xuICAgIHR5cGU6IE9iamVjdCxcbiAgICBkZWZhdWx0KCkge1xuICAgICAgcmV0dXJuIHt9XG4gICAgfSxcbiAgfSxcbn1cblxuZXhwb3J0IHsgRW1vamlQcm9wcywgUGlja2VyUHJvcHMgfVxuIiwidmFyIE5BTUVTUEFDRSA9ICdlbW9qaS1tYXJ0J1xuXG5jb25zdCBfSlNPTiA9IEpTT05cblxudmFyIGlzTG9jYWxTdG9yYWdlU3VwcG9ydGVkID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgJ2xvY2FsU3RvcmFnZScgaW4gd2luZG93XG5cbmxldCBnZXR0ZXJcbmxldCBzZXR0ZXJcblxuZnVuY3Rpb24gc2V0SGFuZGxlcnMoaGFuZGxlcnMpIHtcbiAgaGFuZGxlcnMgfHwgKGhhbmRsZXJzID0ge30pXG5cbiAgZ2V0dGVyID0gaGFuZGxlcnMuZ2V0dGVyXG4gIHNldHRlciA9IGhhbmRsZXJzLnNldHRlclxufVxuXG5mdW5jdGlvbiBzZXROYW1lc3BhY2UobmFtZXNwYWNlKSB7XG4gIE5BTUVTUEFDRSA9IG5hbWVzcGFjZVxufVxuXG5mdW5jdGlvbiB1cGRhdGUoc3RhdGUpIHtcbiAgZm9yIChsZXQga2V5IGluIHN0YXRlKSB7XG4gICAgbGV0IHZhbHVlID0gc3RhdGVba2V5XVxuICAgIHNldChrZXksIHZhbHVlKVxuICB9XG59XG5cbmZ1bmN0aW9uIHNldChrZXksIHZhbHVlKSB7XG4gIGlmIChzZXR0ZXIpIHtcbiAgICBzZXR0ZXIoa2V5LCB2YWx1ZSlcbiAgfSBlbHNlIHtcbiAgICBpZiAoIWlzTG9jYWxTdG9yYWdlU3VwcG9ydGVkKSByZXR1cm5cbiAgICB0cnkge1xuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZVtgJHtOQU1FU1BBQ0V9LiR7a2V5fWBdID0gX0pTT04uc3RyaW5naWZ5KHZhbHVlKVxuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0KGtleSkge1xuICBpZiAoZ2V0dGVyKSB7XG4gICAgcmV0dXJuIGdldHRlcihrZXkpXG4gIH0gZWxzZSB7XG4gICAgaWYgKCFpc0xvY2FsU3RvcmFnZVN1cHBvcnRlZCkgcmV0dXJuXG4gICAgdHJ5IHtcbiAgICAgIHZhciB2YWx1ZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2VbYCR7TkFNRVNQQUNFfS4ke2tleX1gXVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIEpTT04ucGFyc2UodmFsdWUpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHsgdXBkYXRlLCBzZXQsIGdldCwgc2V0TmFtZXNwYWNlLCBzZXRIYW5kbGVycyB9XG4iLCIvLyBodHRwOi8vcGF1bGlyaXNoLmNvbS8yMDExL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtYW5pbWF0aW5nL1xuLy8gaHR0cDovL215Lm9wZXJhLmNvbS9lbW9sbGVyL2Jsb2cvMjAxMS8xMi8yMC9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWVyLWFuaW1hdGluZ1xuXG4vLyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGwgYnkgRXJpayBNw7ZsbGVyLiBmaXhlcyBmcm9tIFBhdWwgSXJpc2ggYW5kIFRpbm8gWmlqZGVsXG5cbi8vIE1JVCBsaWNlbnNlXG5cbnZhciBpc1dpbmRvd0F2YWlsYWJsZSA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG5cbmlzV2luZG93QXZhaWxhYmxlICYmXG4gIChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGxhc3RUaW1lID0gMFxuICAgIHZhciB2ZW5kb3JzID0gWydtcycsICdtb3onLCAnd2Via2l0JywgJ28nXVxuXG4gICAgZm9yICh2YXIgeCA9IDA7IHggPCB2ZW5kb3JzLmxlbmd0aCAmJiAhd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZTsgKyt4KSB7XG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID1cbiAgICAgICAgd2luZG93W3ZlbmRvcnNbeF0gKyAnUmVxdWVzdEFuaW1hdGlvbkZyYW1lJ11cbiAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSA9XG4gICAgICAgIHdpbmRvd1t2ZW5kb3JzW3hdICsgJ0NhbmNlbEFuaW1hdGlvbkZyYW1lJ10gfHxcbiAgICAgICAgd2luZG93W3ZlbmRvcnNbeF0gKyAnQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lJ11cbiAgICB9XG5cbiAgICBpZiAoIXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpXG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24gKGNhbGxiYWNrLCBlbGVtZW50KSB7XG4gICAgICAgIHZhciBjdXJyVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpXG4gICAgICAgIHZhciB0aW1lVG9DYWxsID0gTWF0aC5tYXgoMCwgMTYgLSAoY3VyclRpbWUgLSBsYXN0VGltZSkpXG4gICAgICAgIHZhciBpZCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBjYWxsYmFjayhjdXJyVGltZSArIHRpbWVUb0NhbGwpXG4gICAgICAgIH0sIHRpbWVUb0NhbGwpXG5cbiAgICAgICAgbGFzdFRpbWUgPSBjdXJyVGltZSArIHRpbWVUb0NhbGxcbiAgICAgICAgcmV0dXJuIGlkXG4gICAgICB9XG5cbiAgICBpZiAoIXdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSlcbiAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICBjbGVhclRpbWVvdXQoaWQpXG4gICAgICB9XG4gIH0pKClcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRW1vamkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUzNGFkOTQ2JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0Vtb2ppLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRW1vamkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS9mZXJkaW5hbmQvRG9rdW1lbnRlL1Byb2pla3RlL25leHRjbG91ZC9lbW9qaS1tYXJ0LXZ1ZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc1MzRhZDk0NicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc1MzRhZDk0NicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc1MzRhZDk0NicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRW1vamkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUzNGFkOTQ2JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzUzNGFkOTQ2Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9FbW9qaS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1BpY2tlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZDE2ZTkwODQmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUGlja2VyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vUGlja2VyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL2hvbWUvZmVyZGluYW5kL0Rva3VtZW50ZS9Qcm9qZWt0ZS9uZXh0Y2xvdWQvZW1vamktbWFydC12dWUvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnZDE2ZTkwODQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnZDE2ZTkwODQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnZDE2ZTkwODQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1BpY2tlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZDE2ZTkwODQmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZDE2ZTkwODQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL1BpY2tlci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2FuY2hvcnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUxMTg4MTA0JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2FuY2hvcnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9hbmNob3JzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL2hvbWUvZmVyZGluYW5kL0Rva3VtZW50ZS9Qcm9qZWt0ZS9uZXh0Y2xvdWQvZW1vamktbWFydC12dWUvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNTExODgxMDQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNTExODgxMDQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNTExODgxMDQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2FuY2hvcnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUxMTg4MTA0JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzUxMTg4MTA0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9hbmNob3JzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vY2F0ZWdvcnkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM3NmNkYTBlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2NhdGVnb3J5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vY2F0ZWdvcnkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS9mZXJkaW5hbmQvRG9rdW1lbnRlL1Byb2pla3RlL25leHRjbG91ZC9lbW9qaS1tYXJ0LXZ1ZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCczNzZjZGEwZScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczNzZjZGEwZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczNzZjZGEwZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vY2F0ZWdvcnkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM3NmNkYTBlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzM3NmNkYTBlJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9jYXRlZ29yeS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3ByZXZpZXcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM1MDU2YzMwJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3ByZXZpZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9wcmV2aWV3LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL2hvbWUvZmVyZGluYW5kL0Rva3VtZW50ZS9Qcm9qZWt0ZS9uZXh0Y2xvdWQvZW1vamktbWFydC12dWUvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMzUwNTZjMzAnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMzUwNTZjMzAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMzUwNTZjMzAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3ByZXZpZXcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM1MDU2YzMwJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzM1MDU2YzMwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9wcmV2aWV3LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vc2VhcmNoLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00YWQ0MWJiOCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9zZWFyY2gudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9zZWFyY2gudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS9mZXJkaW5hbmQvRG9rdW1lbnRlL1Byb2pla3RlL25leHRjbG91ZC9lbW9qaS1tYXJ0LXZ1ZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc0YWQ0MWJiOCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0YWQ0MWJiOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0YWQ0MWJiOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vc2VhcmNoLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00YWQ0MWJiOCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0YWQ0MWJiOCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvc2VhcmNoLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vc2tpbnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFjNjE0ODk0JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3NraW5zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vc2tpbnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS9mZXJkaW5hbmQvRG9rdW1lbnRlL1Byb2pla3RlL25leHRjbG91ZC9lbW9qaS1tYXJ0LXZ1ZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcxYzYxNDg5NCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxYzYxNDg5NCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxYzYxNDg5NCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vc2tpbnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFjNjE0ODk0JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzFjNjE0ODk0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9za2lucy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRW1vamkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRW1vamkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BpY2tlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2UhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QaWNrZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FuY2hvcnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYW5jaG9ycy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2F0ZWdvcnkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2F0ZWdvcnkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3ByZXZpZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcHJldmlldy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2VhcmNoLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NlYXJjaC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2tpbnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2tpbnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Vtb2ppLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MzRhZDk0NiZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QaWNrZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWQxNmU5MDg0JlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FuY2hvcnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUxMTg4MTA0JlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NhdGVnb3J5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNzZjZGEwZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wcmV2aWV3LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNTA1NmMzMCZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zZWFyY2gudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRhZDQxYmI4JlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NraW5zLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xYzYxNDg5NCZcIiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF92bS52aWV3LmNhblJlbmRlclxuICAgID8gX2MoXG4gICAgICAgIF92bS50YWcsXG4gICAgICAgIHtcbiAgICAgICAgICB0YWc6IFwiY29tcG9uZW50XCIsXG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1lbW9qaVwiLFxuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICB0aXRsZTogX3ZtLnZpZXcudGl0bGUsXG4gICAgICAgICAgICBcImFyaWEtbGFiZWxcIjogX3ZtLnZpZXcuYXJpYUxhYmVsLFxuICAgICAgICAgICAgXCJkYXRhLXRpdGxlXCI6IF92bS50aXRsZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBtb3VzZWVudGVyOiBfdm0ub25Nb3VzZUVudGVyLFxuICAgICAgICAgICAgbW91c2VsZWF2ZTogX3ZtLm9uTW91c2VMZWF2ZSxcbiAgICAgICAgICAgIGNsaWNrOiBfdm0ub25DbGljayxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIHsgY2xhc3M6IF92bS52aWV3LmNzc0NsYXNzLCBzdHlsZTogX3ZtLnZpZXcuY3NzU3R5bGUgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0udmlldy5jb250ZW50KSksXG4gICAgICAgICAgXSksXG4gICAgICAgIF1cbiAgICAgIClcbiAgICA6IF92bS5fZSgpXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJzZWN0aW9uXCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0IGVtb2ppLW1hcnQtc3RhdGljXCIsIHN0eWxlOiBfdm0uY3VzdG9tU3R5bGVzIH0sXG4gICAgW1xuICAgICAgX3ZtLnNob3dDYXRlZ29yaWVzXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LWJhciBlbW9qaS1tYXJ0LWJhci1hbmNob3JzXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJhbmNob3JzXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgZGF0YTogX3ZtLmRhdGEsXG4gICAgICAgICAgICAgICAgICBpMThuOiBfdm0ubWVyZ2VkSTE4bixcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBfdm0uY29sb3IsXG4gICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBfdm0udmlldy5hbGxDYXRlZ29yaWVzLFxuICAgICAgICAgICAgICAgICAgXCJhY3RpdmUtY2F0ZWdvcnlcIjogX3ZtLnZpZXcuYWN0aXZlQ2F0ZWdvcnksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLm9uQW5jaG9yQ2xpY2sgfSxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uX3QoXG4gICAgICAgIFwic2VhcmNoVGVtcGxhdGVcIixcbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBfdm0uc2hvd1NlYXJjaFxuICAgICAgICAgICAgICA/IF9jKFwic2VhcmNoXCIsIHtcbiAgICAgICAgICAgICAgICAgIHJlZjogXCJzZWFyY2hcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IF92bS5kYXRhLFxuICAgICAgICAgICAgICAgICAgICBpMThuOiBfdm0ubWVyZ2VkSTE4bixcbiAgICAgICAgICAgICAgICAgICAgXCJhdXRvLWZvY3VzXCI6IF92bS5hdXRvRm9jdXMsXG4gICAgICAgICAgICAgICAgICAgIFwib24tc2VhcmNoXCI6IF92bS5vblNlYXJjaCxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBzZWFyY2g6IF92bS5vblNlYXJjaCxcbiAgICAgICAgICAgICAgICAgICAgYXJyb3dMZWZ0OiBfdm0ub25BcnJvd0xlZnQsXG4gICAgICAgICAgICAgICAgICAgIGFycm93UmlnaHQ6IF92bS5vbkFycm93UmlnaHQsXG4gICAgICAgICAgICAgICAgICAgIGFycm93RG93bjogX3ZtLm9uQXJyb3dEb3duLFxuICAgICAgICAgICAgICAgICAgICBhcnJvd1VwOiBfdm0ub25BcnJvd1VwLFxuICAgICAgICAgICAgICAgICAgICBlbnRlcjogX3ZtLm9uRW50ZXIsXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdDogX3ZtLm9uVGV4dFNlbGVjdCxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBkYXRhOiBfdm0uZGF0YSxcbiAgICAgICAgICBpMThuOiBfdm0uaTE4bixcbiAgICAgICAgICBhdXRvRm9jdXM6IF92bS5hdXRvRm9jdXMsXG4gICAgICAgICAgb25TZWFyY2g6IF92bS5vblNlYXJjaCxcbiAgICAgICAgfVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHJlZjogXCJzY3JvbGxcIixcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LXNjcm9sbFwiLFxuICAgICAgICAgIGF0dHJzOiB7IHJvbGU6IFwidGFicGFuZWxcIiB9LFxuICAgICAgICAgIG9uOiB7IHNjcm9sbDogX3ZtLm9uU2Nyb2xsIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJlZjogXCJzY3JvbGxDb250ZW50XCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiZW1vamktbWFydC1saXN0XCIsXG4gICAgICAgICAgICAgICAgcm9sZTogXCJsaXN0Ym94XCIsXG4gICAgICAgICAgICAgICAgXCJhcmlhLWV4cGFuZGVkXCI6IFwidHJ1ZVwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF92bS5fbChfdm0udmlldy5maWx0ZXJlZENhdGVnb3JpZXMsIGZ1bmN0aW9uIChjYXRlZ29yeSwgaWR4KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfYyhcImNhdGVnb3J5XCIsIHtcbiAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTpcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uaW5maW5pdGVTY3JvbGwgfHwgY2F0ZWdvcnkgPT0gX3ZtLnZpZXcuYWN0aXZlQ2F0ZWdvcnksXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgICAgICAgXCJpbmZpbml0ZVNjcm9sbCB8fCBjYXRlZ29yeSA9PSB2aWV3LmFjdGl2ZUNhdGVnb3J5XCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAga2V5OiBjYXRlZ29yeS5pZCxcbiAgICAgICAgICAgICAgICByZWY6IFwiY2F0ZWdvcmllc19cIiArIGlkeCxcbiAgICAgICAgICAgICAgICByZWZJbkZvcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgZGF0YTogX3ZtLmRhdGEsXG4gICAgICAgICAgICAgICAgICBpMThuOiBfdm0ubWVyZ2VkSTE4bixcbiAgICAgICAgICAgICAgICAgIGlkOiBjYXRlZ29yeS5pZCxcbiAgICAgICAgICAgICAgICAgIG5hbWU6IGNhdGVnb3J5Lm5hbWUsXG4gICAgICAgICAgICAgICAgICBlbW9qaXM6IGNhdGVnb3J5LmVtb2ppcyxcbiAgICAgICAgICAgICAgICAgIFwiZW1vamktcHJvcHNcIjogX3ZtLmVtb2ppUHJvcHMsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl90KFxuICAgICAgICBcInByZXZpZXdUZW1wbGF0ZVwiLFxuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIF92bS5zaG93UHJldmlld1xuICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1iYXIgZW1vamktbWFydC1iYXItcHJldmlld1wiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwicHJldmlld1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IF92bS5kYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IF92bS50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtb2ppOiBfdm0udmlldy5wcmV2aWV3RW1vamksXG4gICAgICAgICAgICAgICAgICAgICAgICBcImlkbGUtZW1vamlcIjogX3ZtLmlkbGVFbW9qaSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvdy1za2luLXRvbmVzXCI6IF92bS5zaG93U2tpblRvbmVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJlbW9qaS1wcm9wc1wiOiBfdm0uZW1vamlQcm9wcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2tpbi1wcm9wc1wiOiBfdm0uc2tpblByb3BzLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJvbi1za2luLWNoYW5nZVwiOiBfdm0ub25Ta2luQ2hhbmdlLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZGF0YTogX3ZtLmRhdGEsXG4gICAgICAgICAgdGl0bGU6IF92bS50aXRsZSxcbiAgICAgICAgICBlbW9qaTogX3ZtLnZpZXcucHJldmlld0Vtb2ppLFxuICAgICAgICAgIGlkbGVFbW9qaTogX3ZtLmlkbGVFbW9qaSxcbiAgICAgICAgICBzaG93U2tpblRvbmVzOiBfdm0uc2hvd1NraW5Ub25lcyxcbiAgICAgICAgICBlbW9qaVByb3BzOiBfdm0uZW1vamlQcm9wcyxcbiAgICAgICAgICBza2luUHJvcHM6IF92bS5za2luUHJvcHMsXG4gICAgICAgICAgb25Ta2luQ2hhbmdlOiBfdm0ub25Ta2luQ2hhbmdlLFxuICAgICAgICB9XG4gICAgICApLFxuICAgIF0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtYW5jaG9yc1wiLCBhdHRyczogeyByb2xlOiBcInRhYmxpc3RcIiB9IH0sXG4gICAgX3ZtLl9sKF92bS5jYXRlZ29yaWVzLCBmdW5jdGlvbiAoY2F0ZWdvcnkpIHtcbiAgICAgIHJldHVybiBfYyhcbiAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAge1xuICAgICAgICAgIGtleTogY2F0ZWdvcnkuaWQsXG4gICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgIFwiZW1vamktbWFydC1hbmNob3JcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiZW1vamktbWFydC1hbmNob3Itc2VsZWN0ZWRcIjogY2F0ZWdvcnkuaWQgPT0gX3ZtLmFjdGl2ZUNhdGVnb3J5LmlkLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIGNvbG9yOiBjYXRlZ29yeS5pZCA9PSBfdm0uYWN0aXZlQ2F0ZWdvcnkuaWQgPyBfdm0uY29sb3IgOiBcIlwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIHJvbGU6IFwidGFiXCIsXG4gICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgXCJhcmlhLWxhYmVsXCI6IGNhdGVnb3J5Lm5hbWUsXG4gICAgICAgICAgICBcImFyaWEtc2VsZWN0ZWRcIjogY2F0ZWdvcnkuaWQgPT0gX3ZtLmFjdGl2ZUNhdGVnb3J5LmlkLFxuICAgICAgICAgICAgXCJkYXRhLXRpdGxlXCI6IF92bS5pMThuLmNhdGVnb3JpZXNbY2F0ZWdvcnkuaWRdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uJGVtaXQoXCJjbGlja1wiLCBjYXRlZ29yeSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfSxcbiAgICAgICAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS5zdmdzW2NhdGVnb3J5LmlkXSkgfSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwic3BhblwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LWFuY2hvci1iYXJcIixcbiAgICAgICAgICAgIHN0eWxlOiB7IGJhY2tncm91bmRDb2xvcjogX3ZtLmNvbG9yIH0sXG4gICAgICAgICAgICBhdHRyczogeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH0sXG4gICAgICAgICAgfSksXG4gICAgICAgIF1cbiAgICAgIClcbiAgICB9KSxcbiAgICAwXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfdm0uaXNWaXNpYmxlICYmIChfdm0uaXNTZWFyY2ggfHwgX3ZtLmhhc1Jlc3VsdHMpXG4gICAgPyBfYyhcbiAgICAgICAgXCJzZWN0aW9uXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgXCJlbW9qaS1tYXJ0LWNhdGVnb3J5XCI6IHRydWUsXG4gICAgICAgICAgICBcImVtb2ppLW1hcnQtbm8tcmVzdWx0c1wiOiAhX3ZtLmhhc1Jlc3VsdHMsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBhdHRyczogeyBcImFyaWEtbGFiZWxcIjogX3ZtLmkxOG4uY2F0ZWdvcmllc1tfdm0uaWRdIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtY2F0ZWdvcnktbGFiZWxcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImgzXCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1jYXRlZ29yeS1sYWJlbFwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uaTE4bi5jYXRlZ29yaWVzW192bS5pZF0pKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLl9sKF92bS5lbW9qaU9iamVjdHMsIGZ1bmN0aW9uIChyZWYpIHtcbiAgICAgICAgICAgIHZhciBlbW9qaU9iamVjdCA9IHJlZi5lbW9qaU9iamVjdFxuICAgICAgICAgICAgdmFyIGVtb2ppVmlldyA9IHJlZi5lbW9qaVZpZXdcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgIGVtb2ppVmlldy5jYW5SZW5kZXJcbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiBlbW9qaU9iamVjdC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LWVtb2ppXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5hY3RpdmVDbGFzcyhlbW9qaU9iamVjdCksXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYXJpYS1sYWJlbFwiOiBlbW9qaVZpZXcuYXJpYUxhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgcm9sZTogXCJvcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYXJpYS1zZWxlY3RlZFwiOiBcImZhbHNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFyaWEtcG9zaW5zZXRcIjogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFyaWEtc2V0c2l6ZVwiOiBcIjE4MTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdGl0bGVcIjogZW1vamlPYmplY3Quc2hvcnRfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBlbW9qaVZpZXcudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW91c2VlbnRlcjogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZW1vamlQcm9wcy5vbkVudGVyKGVtb2ppVmlldy5nZXRFbW9qaSgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdXNlbGVhdmU6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmVtb2ppUHJvcHMub25MZWF2ZShlbW9qaVZpZXcuZ2V0RW1vamkoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZW1vamlQcm9wcy5vbkNsaWNrKGVtb2ppVmlldy5nZXRFbW9qaSgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IGVtb2ppVmlldy5jc3NDbGFzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IGVtb2ppVmlldy5jc3NTdHlsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhlbW9qaVZpZXcuY29udGVudCkpXVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgIV92bS5oYXNSZXN1bHRzXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJlbW9qaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZGF0YTogX3ZtLmRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgZW1vamk6IFwic2xldXRoX29yX3NweVwiLFxuICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZTogX3ZtLmVtb2ppUHJvcHMubmF0aXZlLFxuICAgICAgICAgICAgICAgICAgICAgIHNraW46IF92bS5lbW9qaVByb3BzLnNraW4sXG4gICAgICAgICAgICAgICAgICAgICAgc2V0OiBfdm0uZW1vamlQcm9wcy5zZXQsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtbm8tcmVzdWx0cy1sYWJlbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uaTE4bi5ub3Rmb3VuZCkpLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgIF0sXG4gICAgICAgIDJcbiAgICAgIClcbiAgICA6IF92bS5fZSgpXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtcHJldmlld1wiIH0sXG4gICAgW1xuICAgICAgX3ZtLmVtb2ppXG4gICAgICAgID8gW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1wcmV2aWV3LWVtb2ppXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiZW1vamlcIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogX3ZtLmRhdGEsXG4gICAgICAgICAgICAgICAgICAgIGVtb2ppOiBfdm0uZW1vamksXG4gICAgICAgICAgICAgICAgICAgIG5hdGl2ZTogX3ZtLmVtb2ppUHJvcHMubmF0aXZlLFxuICAgICAgICAgICAgICAgICAgICBza2luOiBfdm0uZW1vamlQcm9wcy5za2luLFxuICAgICAgICAgICAgICAgICAgICBzZXQ6IF92bS5lbW9qaVByb3BzLnNldCxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LXByZXZpZXctZGF0YVwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LXByZXZpZXctbmFtZVwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5lbW9qaS5uYW1lKSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1wcmV2aWV3LXNob3J0bmFtZXNcIiB9LFxuICAgICAgICAgICAgICAgIF92bS5fbChfdm0uZW1vamlTaG9ydE5hbWVzLCBmdW5jdGlvbiAoc2hvcnROYW1lKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiBzaG9ydE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1wcmV2aWV3LXNob3J0bmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiOlwiICsgX3ZtLl9zKHNob3J0TmFtZSkgKyBcIjpcIildXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1wcmV2aWV3LWVtb3RpY29uc1wiIH0sXG4gICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5lbW9qaUVtb3RpY29ucywgZnVuY3Rpb24gKGVtb3RpY29uKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiBlbW90aWNvbixcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LXByZXZpZXctZW1vdGljb25cIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoZW1vdGljb24pKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICBdXG4gICAgICAgIDogW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1wcmV2aWV3LWVtb2ppXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiZW1vamlcIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogX3ZtLmRhdGEsXG4gICAgICAgICAgICAgICAgICAgIGVtb2ppOiBfdm0uaWRsZUVtb2ppLFxuICAgICAgICAgICAgICAgICAgICBuYXRpdmU6IF92bS5lbW9qaVByb3BzLm5hdGl2ZSxcbiAgICAgICAgICAgICAgICAgICAgc2tpbjogX3ZtLmVtb2ppUHJvcHMuc2tpbixcbiAgICAgICAgICAgICAgICAgICAgc2V0OiBfdm0uZW1vamlQcm9wcy5zZXQsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1wcmV2aWV3LWRhdGFcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtdGl0bGUtbGFiZWxcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0udGl0bGUpKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0uc2hvd1NraW5Ub25lc1xuICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1wcmV2aWV3LXNraW5zXCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJza2luc1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc2tpbjogX3ZtLnNraW5Qcm9wcy5za2luIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9uU2tpbkNoYW5nZSgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgXSxcbiAgICBdLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1zZWFyY2hcIiB9LCBbXG4gICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgdmFsdWU6IF92bS52YWx1ZSxcbiAgICAgICAgICBleHByZXNzaW9uOiBcInZhbHVlXCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgIHBsYWNlaG9sZGVyOiBfdm0uaTE4bi5zZWFyY2gsXG4gICAgICAgIHJvbGU6IFwidGV4dGJveFwiLFxuICAgICAgICBcImFyaWEtYXV0b2NvbXBsZXRlXCI6IFwibGlzdFwiLFxuICAgICAgICBcImFyaWEtb3duc1wiOiBcImVtb2ppLW1hcnQtbGlzdFwiLFxuICAgICAgICBcImFyaWEtbGFiZWxcIjogXCJTZWFyY2ggZm9yIGFuIGVtb2ppXCIsXG4gICAgICAgIFwiYXJpYS1kZXNjcmliZWRieVwiOiBcImVtb2ppLW1hcnQtc2VhcmNoLWRlc2NyaXB0aW9uXCIsXG4gICAgICB9LFxuICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS52YWx1ZSB9LFxuICAgICAgb246IHtcbiAgICAgICAga2V5ZG93bjogW1xuICAgICAgICAgIGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgISRldmVudC50eXBlLmluZGV4T2YoXCJrZXlcIikgJiZcbiAgICAgICAgICAgICAgX3ZtLl9rKCRldmVudC5rZXlDb2RlLCBcImxlZnRcIiwgMzcsICRldmVudC5rZXksIFtcbiAgICAgICAgICAgICAgICBcIkxlZnRcIixcbiAgICAgICAgICAgICAgICBcIkFycm93TGVmdFwiLFxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoXCJidXR0b25cIiBpbiAkZXZlbnQgJiYgJGV2ZW50LmJ1dHRvbiAhPT0gMCkge1xuICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcImFycm93TGVmdFwiLCAkZXZlbnQpXG4gICAgICAgICAgICB9LmFwcGx5KG51bGwsIGFyZ3VtZW50cylcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgISRldmVudC50eXBlLmluZGV4T2YoXCJrZXlcIikgJiZcbiAgICAgICAgICAgICAgX3ZtLl9rKCRldmVudC5rZXlDb2RlLCBcInJpZ2h0XCIsIDM5LCAkZXZlbnQua2V5LCBbXG4gICAgICAgICAgICAgICAgXCJSaWdodFwiLFxuICAgICAgICAgICAgICAgIFwiQXJyb3dSaWdodFwiLFxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoXCJidXR0b25cIiBpbiAkZXZlbnQgJiYgJGV2ZW50LmJ1dHRvbiAhPT0gMikge1xuICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcImFycm93UmlnaHRcIilcbiAgICAgICAgICAgIH0uYXBwbHkobnVsbCwgYXJndW1lbnRzKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAhJGV2ZW50LnR5cGUuaW5kZXhPZihcImtleVwiKSAmJlxuICAgICAgICAgICAgICBfdm0uX2soJGV2ZW50LmtleUNvZGUsIFwiZG93blwiLCA0MCwgJGV2ZW50LmtleSwgW1xuICAgICAgICAgICAgICAgIFwiRG93blwiLFxuICAgICAgICAgICAgICAgIFwiQXJyb3dEb3duXCIsXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uJGVtaXQoXCJhcnJvd0Rvd25cIilcbiAgICAgICAgICAgIH0uYXBwbHkobnVsbCwgYXJndW1lbnRzKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAhJGV2ZW50LnR5cGUuaW5kZXhPZihcImtleVwiKSAmJlxuICAgICAgICAgICAgICBfdm0uX2soJGV2ZW50LmtleUNvZGUsIFwidXBcIiwgMzgsICRldmVudC5rZXksIFtcIlVwXCIsIFwiQXJyb3dVcFwiXSlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcImFycm93VXBcIiwgJGV2ZW50KVxuICAgICAgICAgICAgfS5hcHBseShudWxsLCBhcmd1bWVudHMpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICEkZXZlbnQudHlwZS5pbmRleE9mKFwia2V5XCIpICYmXG4gICAgICAgICAgICAgIF92bS5faygkZXZlbnQua2V5Q29kZSwgXCJlbnRlclwiLCAxMywgJGV2ZW50LmtleSwgXCJFbnRlclwiKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRlbWl0KFwiZW50ZXJcIilcbiAgICAgICAgICAgIH0uYXBwbHkobnVsbCwgYXJndW1lbnRzKVxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG4gICAgICAgICAgX3ZtLnZhbHVlID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJzcGFuXCIsXG4gICAgICB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImhpZGRlblwiLFxuICAgICAgICBhdHRyczogeyBpZDogXCJlbW9qaS1waWNrZXItc2VhcmNoLWRlc2NyaXB0aW9uXCIgfSxcbiAgICAgIH0sXG4gICAgICBbXG4gICAgICAgIF92bS5fdihcbiAgICAgICAgICBcIlVzZSB0aGUgbGVmdCwgcmlnaHQsIHVwIGFuZCBkb3duIGFycm93IGtleXMgdG8gbmF2aWdhdGUgdGhlIGVtb2ppIHNlYXJjaFxcbiAgICByZXN1bHRzLlwiXG4gICAgICAgICksXG4gICAgICBdXG4gICAgKSxcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIGNsYXNzOiB7XG4gICAgICAgIFwiZW1vamktbWFydC1za2luLXN3YXRjaGVzXCI6IHRydWUsXG4gICAgICAgIFwiZW1vamktbWFydC1za2luLXN3YXRjaGVzLW9wZW5lZFwiOiBfdm0ub3BlbmVkLFxuICAgICAgfSxcbiAgICB9LFxuICAgIF92bS5fbCg2LCBmdW5jdGlvbiAoc2tpblRvbmUpIHtcbiAgICAgIHJldHVybiBfYyhcbiAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6IHNraW5Ub25lLFxuICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICBcImVtb2ppLW1hcnQtc2tpbi1zd2F0Y2hcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiZW1vamktbWFydC1za2luLXN3YXRjaC1zZWxlY3RlZFwiOiBfdm0uc2tpbiA9PSBza2luVG9uZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgIGNsYXNzOiBcImVtb2ppLW1hcnQtc2tpbiBlbW9qaS1tYXJ0LXNraW4tdG9uZS1cIiArIHNraW5Ub25lLFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9uQ2xpY2soc2tpblRvbmUpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pLFxuICAgICAgICBdXG4gICAgICApXG4gICAgfSksXG4gICAgMFxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiLyogZ2xvYmFscyBfX1ZVRV9TU1JfQ09OVEVYVF9fICovXG5cbi8vIElNUE9SVEFOVDogRG8gTk9UIHVzZSBFUzIwMTUgZmVhdHVyZXMgaW4gdGhpcyBmaWxlIChleGNlcHQgZm9yIG1vZHVsZXMpLlxuLy8gVGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICBzY3JpcHRFeHBvcnRzLFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZnVuY3Rpb25hbFRlbXBsYXRlLFxuICBpbmplY3RTdHlsZXMsXG4gIHNjb3BlSWQsXG4gIG1vZHVsZUlkZW50aWZpZXIsIC8qIHNlcnZlciBvbmx5ICovXG4gIHNoYWRvd01vZGUgLyogdnVlLWNsaSBvbmx5ICovXG4pIHtcbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nXG4gICAgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnNcbiAgICA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChyZW5kZXIpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IHJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gc3RhdGljUmVuZGVyRm5zXG4gICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlXG4gIH1cblxuICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gIGlmIChmdW5jdGlvbmFsVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLmZ1bmN0aW9uYWwgPSB0cnVlXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSAnZGF0YS12LScgKyBzY29wZUlkXG4gIH1cblxuICB2YXIgaG9va1xuICBpZiAobW9kdWxlSWRlbnRpZmllcikgeyAvLyBzZXJ2ZXIgYnVpbGRcbiAgICBob29rID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIC8vIDIuMyBpbmplY3Rpb25cbiAgICAgIGNvbnRleHQgPVxuICAgICAgICBjb250ZXh0IHx8IC8vIGNhY2hlZCBjYWxsXG4gICAgICAgICh0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0KSB8fCAvLyBzdGF0ZWZ1bFxuICAgICAgICAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuJHZub2RlICYmIHRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KSAvLyBmdW5jdGlvbmFsXG4gICAgICAvLyAyLjIgd2l0aCBydW5Jbk5ld0NvbnRleHQ6IHRydWVcbiAgICAgIGlmICghY29udGV4dCAmJiB0eXBlb2YgX19WVUVfU1NSX0NPTlRFWFRfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29udGV4dCA9IF9fVlVFX1NTUl9DT05URVhUX19cbiAgICAgIH1cbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgc3R5bGVzXG4gICAgICBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIGNvbnRleHQpXG4gICAgICB9XG4gICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgbW9kdWxlIGlkZW50aWZpZXIgZm9yIGFzeW5jIGNodW5rIGluZmVycmVuY2VcbiAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzKSB7XG4gICAgICAgIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzLmFkZChtb2R1bGVJZGVudGlmaWVyKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyB1c2VkIGJ5IHNzciBpbiBjYXNlIGNvbXBvbmVudCBpcyBjYWNoZWQgYW5kIGJlZm9yZUNyZWF0ZVxuICAgIC8vIG5ldmVyIGdldHMgY2FsbGVkXG4gICAgb3B0aW9ucy5fc3NyUmVnaXN0ZXIgPSBob29rXG4gIH0gZWxzZSBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgaG9vayA9IHNoYWRvd01vZGVcbiAgICAgID8gZnVuY3Rpb24gKCkge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbChcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIChvcHRpb25zLmZ1bmN0aW9uYWwgPyB0aGlzLnBhcmVudCA6IHRoaXMpLiRyb290LiRvcHRpb25zLnNoYWRvd1Jvb3RcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgOiBpbmplY3RTdHlsZXNcbiAgfVxuXG4gIGlmIChob29rKSB7XG4gICAgaWYgKG9wdGlvbnMuZnVuY3Rpb25hbCkge1xuICAgICAgLy8gZm9yIHRlbXBsYXRlLW9ubHkgaG90LXJlbG9hZCBiZWNhdXNlIGluIHRoYXQgY2FzZSB0aGUgcmVuZGVyIGZuIGRvZXNuJ3RcbiAgICAgIC8vIGdvIHRocm91Z2ggdGhlIG5vcm1hbGl6ZXJcbiAgICAgIG9wdGlvbnMuX2luamVjdFN0eWxlcyA9IGhvb2tcbiAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvbmFsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgdmFyIG9yaWdpbmFsUmVuZGVyID0gb3B0aW9ucy5yZW5kZXJcbiAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uIChoLCBjb250ZXh0KSB7XG4gICAgICAgIGhvb2suY2FsbChjb250ZXh0KVxuICAgICAgICByZXR1cm4gb3JpZ2luYWxSZW5kZXIoaCwgY29udGV4dClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCByZWdpc3RyYXRpb24gYXMgYmVmb3JlQ3JlYXRlIGhvb2tcbiAgICAgIHZhciBleGlzdGluZyA9IG9wdGlvbnMuYmVmb3JlQ3JlYXRlXG4gICAgICBvcHRpb25zLmJlZm9yZUNyZWF0ZSA9IGV4aXN0aW5nXG4gICAgICAgID8gW10uY29uY2F0KGV4aXN0aW5nLCBob29rKVxuICAgICAgICA6IFtob29rXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn0iLCJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn0iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlcltTeW1ib2wuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlcltcIkBAaXRlcmF0b3JcIl0gIT0gbnVsbCkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn0iLCJpbXBvcnQgYXJyYXlXaXRob3V0SG9sZXMgZnJvbSBcIi4vYXJyYXlXaXRob3V0SG9sZXMuanNcIjtcbmltcG9ydCBpdGVyYWJsZVRvQXJyYXkgZnJvbSBcIi4vaXRlcmFibGVUb0FycmF5LmpzXCI7XG5pbXBvcnQgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgZnJvbSBcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIjtcbmltcG9ydCBub25JdGVyYWJsZVNwcmVhZCBmcm9tIFwiLi9ub25JdGVyYWJsZVNwcmVhZC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICB9IDogZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gIH0sIF90eXBlb2Yob2JqKTtcbn0iLCJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgc3RvcmUgZnJvbSAnLi91dGlscy9zdG9yZSdcbmltcG9ydCB7IHVuY29tcHJlc3MgfSBmcm9tICcuL3V0aWxzL2RhdGEnXG5pbXBvcnQgZnJlcXVlbnRseSBmcm9tICcuL3V0aWxzL2ZyZXF1ZW50bHknXG5cbmV4cG9ydCB7XG4gIFBpY2tlcixcbiAgRW1vamksXG4gIEFuY2hvcnMsXG4gIFByZXZpZXcsXG4gIFNlYXJjaCxcbiAgQ2F0ZWdvcnksXG4gIFNraW5zLFxufSBmcm9tICcuL2NvbXBvbmVudHMnXG5cbmV4cG9ydCB7IEVtb2ppSW5kZXgsIEVtb2ppVmlldywgRW1vamlEYXRhLCBzYW5pdGl6ZSB9IGZyb20gJy4vdXRpbHMvZW1vamktZGF0YSdcbmV4cG9ydCB7IHVuY29tcHJlc3MsIHN0b3JlLCBmcmVxdWVudGx5IH1cbiJdLCJuYW1lcyI6WyJwcm9wcyIsIkVtb2ppUHJvcHMiLCJkYXRhIiwidHlwZSIsInJlcXVpcmVkIiwiZW1pdHMiLCJjb21wdXRlZCIsInZpZXciLCJzYW5pdGl6ZWREYXRhIiwidGl0bGUiLCJlbW9qaU9iamVjdCIsImNyZWF0ZWQiLCJtZXRob2RzIiwib25DbGljayIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsInNlYXJjaCIsIm5vdGZvdW5kIiwiY2F0ZWdvcmllcyIsInJlY2VudCIsInNtaWxleXMiLCJwZW9wbGUiLCJuYXR1cmUiLCJmb29kcyIsImFjdGl2aXR5IiwicGxhY2VzIiwib2JqZWN0cyIsInN5bWJvbHMiLCJmbGFncyIsImN1c3RvbSIsIlBpY2tlclByb3BzIiwiYWN0aXZlU2tpbiIsImN1c3RvbVN0eWxlcyIsIndpZHRoIiwiZW1vamlQcm9wcyIsIm5hdGl2ZSIsInNraW4iLCJzZXQiLCJlbW9qaVRvb2x0aXAiLCJlbW9qaVNpemUiLCJzZWxlY3RlZEVtb2ppIiwic2VsZWN0ZWRFbW9qaUNhdGVnb3J5Iiwib25FbnRlciIsIm9uTGVhdmUiLCJza2luUHJvcHMiLCJjYWxjdWxhdGVXaWR0aCIsImZpbHRlcmVkQ2F0ZWdvcmllcyIsIm1lcmdlZEkxOG4iLCJpZGxlRW1vamkiLCJjb25zb2xlIiwib25TY3JvbGwiLCJ3aW5kb3ciLCJvblNjcm9sbFBhaW50Iiwib25BbmNob3JDbGljayIsImNhdGVnb3J5Iiwib25TZWFyY2giLCJ2YWx1ZSIsIm9uRW1vamlFbnRlciIsImVtb2ppIiwib25FbW9qaUxlYXZlIiwib25BcnJvd0xlZnQiLCIkZXZlbnQiLCJvbkFycm93UmlnaHQiLCJvbkFycm93RG93biIsIm9uQXJyb3dVcCIsImZyZXF1ZW50bHkiLCJvbkVtb2ppQ2xpY2siLCJvblRleHRTZWxlY3QiLCJvblNraW5DaGFuZ2UiLCJzdG9yZSIsImdldENhdGVnb3J5Q29tcG9uZW50IiwiaW5kZXgiLCJjb21wb25lbnRzIiwiQW5jaG9ycyIsIkNhdGVnb3J5IiwiUHJldmlldyIsIlNlYXJjaCIsImkxOG4iLCJjb2xvciIsImFjdGl2ZUNhdGVnb3J5IiwiZGVmYXVsdCIsImlkIiwibmFtZSIsImVtb2ppcyIsImFjdGl2ZUNsYXNzIiwiaXNWaXNpYmxlIiwiaXNTZWFyY2giLCJoYXNSZXN1bHRzIiwiZW1vamlPYmplY3RzIiwiZW1vamlWaWV3IiwiRW1vamkiLCJzaG93U2tpblRvbmVzIiwiZW1vamlEYXRhIiwiZW1vamlTaG9ydE5hbWVzIiwiZW1vamlFbW90aWNvbnMiLCJTa2lucyIsImF1dG9Gb2N1cyIsImVtb2ppSW5kZXgiLCJ3YXRjaCIsImNsZWFyIiwibW91bnRlZCIsIiRpbnB1dCIsIm9wZW5lZCIsInNraW5Ub25lIiwiUGlja2VyIiwiX1N0cmluZyIsIlN0cmluZyIsImZyb21Db2RlUG9pbnQiLCJzdHJpbmdGcm9tQ29kZVBvaW50IiwiTUFYX1NJWkUiLCJjb2RlVW5pdHMiLCJoaWdoU3Vycm9nYXRlIiwibG93U3Vycm9nYXRlIiwibGVuZ3RoIiwiYXJndW1lbnRzIiwicmVzdWx0IiwiY29kZVBvaW50IiwiTnVtYmVyIiwiaXNGaW5pdGUiLCJNYXRoIiwiZmxvb3IiLCJSYW5nZUVycm9yIiwicHVzaCIsImZyb21DaGFyQ29kZSIsImFwcGx5IiwiU1ZHcyIsIm1hcHBpbmciLCJ1bmlmaWVkIiwibm9uX3F1YWxpZmllZCIsImhhc19pbWdfYXBwbGUiLCJoYXNfaW1nX2dvb2dsZSIsImhhc19pbWdfdHdpdHRlciIsImhhc19pbWdfZmFjZWJvb2siLCJrZXl3b3JkcyIsInNoZWV0IiwiZW1vdGljb25zIiwidGV4dCIsInNob3J0X25hbWVzIiwiYWRkZWRfaW4iLCJidWlsZFNlYXJjaCIsImFkZFRvU2VhcmNoIiwic3RyaW5ncyIsInNwbGl0IiwiQXJyYXkiLCJpc0FycmF5IiwiZm9yRWFjaCIsInN0cmluZyIsInMiLCJ0b0xvd2VyQ2FzZSIsImluZGV4T2YiLCJqb2luIiwiZGVlcEZyZWV6ZSIsIm9iamVjdCIsInByb3BOYW1lcyIsIk9iamVjdCIsImdldE93blByb3BlcnR5TmFtZXMiLCJmcmVlemUiLCJ1bmNvbXByZXNzIiwiY29tcHJlc3NlZCIsImtleSIsInVuc2hpZnQiLCJzaGVldF94Iiwic2hlZXRfeSIsInRvRml4ZWQiLCJpbnRlcnNlY3QiLCJ1bmlmaWVkVG9OYXRpdmUiLCJTSEVFVF9DT0xVTU5TIiwiQ09MT05TX1JFR0VYIiwiU0tJTlMiLCJFbW9qaUluZGV4IiwiZW1vamlzVG9TaG93RmlsdGVyIiwiaW5jbHVkZSIsImV4Y2x1ZGUiLCJyZWNlbnRMZW5ndGgiLCJfZGF0YSIsIl9lbW9qaXNGaWx0ZXIiLCJfaW5jbHVkZSIsIl9leGNsdWRlIiwiX2N1c3RvbSIsIl9yZWNlbnQiLCJnZXQiLCJfZW1vamlzIiwiX25hdGl2ZUVtb2ppcyIsIl9lbW90aWNvbnMiLCJfY2F0ZWdvcmllcyIsIl9yZWNlbnRDYXRlZ29yeSIsIl9jdXN0b21DYXRlZ29yeSIsIl9zZWFyY2hJbmRleCIsImJ1aWxkSW5kZXgiLCJhbGxDYXRlZ29yaWVzIiwiZmlsdGVyIiwiaXRlbSIsImluY2x1ZGVzIiwic29ydCIsImEiLCJiIiwiaW5kZXhBIiwiaW5kZXhCIiwiY2F0ZWdvcnlEYXRhIiwiaXNDYXRlZ29yeU5lZWRlZCIsImVtb2ppSWQiLCJhZGRFbW9qaSIsImN1c3RvbUVtb2ppIiwiYWRkQ3VzdG9tRW1vamkiLCJtYXAiLCJoYXNFbW9qaSIsIm1hdGNoZXMiLCJtYXRjaCIsInBhcnNlSW50IiwiYWxpYXNlcyIsImhhc093blByb3BlcnR5IiwiZ2V0U2tpbiIsIkVycm9yIiwia2V5cyIsInVuaWNvZGVFbW9qaSIsIm1heFJlc3VsdHMiLCJ2YWx1ZXMiLCJhbGxSZXN1bHRzIiwiY3VycmVudEluZGV4IiwiY2hhckluZGV4IiwiY2hhciIsInJlc3VsdHMiLCJzY29yZXMiLCJzdWIiLCJzdWJzdHIiLCJzdWJJbmRleCIsInNjb3JlIiwiYVNjb3JlIiwiYlNjb3JlIiwic2xpY2UiLCJhc3NpZ24iLCJFbW9qaURhdGEiLCJpc0Vtb2ppTmVlZGVkIiwiX3NraW5zIiwiaWR4IiwiZW1vdGljb24iLCJjYXRlZ29yeV9pZCIsImlzSW5jbHVkZWQiLCJpc0V4Y2x1ZGVkIiwic2tpbl92YXJpYXRpb25zIiwic2tpbklkeCIsInNraW5LZXkiLCJ2YXJpYXRpb25EYXRhIiwic2tpbkRhdGEiLCJrIiwiX3Nhbml0aXplZCIsInNhbml0aXplIiwic2hvcnRfbmFtZSIsImFkanVzdGVkQ29sdW1ucyIsIngiLCJ5IiwiY29uY2F0IiwiQm9vbGVhbiIsIkVtb2ppVmlldyIsImZhbGxiYWNrIiwiX2Vtb2ppIiwiX25hdGl2ZSIsIl9za2luIiwiX3NldCIsIl9mYWxsYmFjayIsImNhblJlbmRlciIsIl9jYW5SZW5kZXIiLCJjc3NDbGFzcyIsIl9jc3NDbGFzcyIsImNzc1N0eWxlIiwiX2Nzc1N0eWxlIiwiY29udGVudCIsIl9jb250ZW50IiwiYXJpYUxhYmVsIiwiX2lzQ3VzdG9tIiwiX2lzTmF0aXZlIiwiX2hhc0Vtb2ppIiwiX2Vtb2ppVHlwZSIsImJhY2tncm91bmRJbWFnZSIsImdldEVtb2ppIiwiaW1hZ2VVcmwiLCJiYWNrZ3JvdW5kU2l6ZSIsImhlaWdodCIsImJhY2tncm91bmRQb3NpdGlvbiIsImdldFBvc2l0aW9uIiwiZm9udFNpemUiLCJyb3VuZCIsImhhc0ltYWdlIiwidW5kZWZpbmVkIiwic2tpbl90b25lIiwiY29sb25zIiwiREVGQVVMVFMiLCJpbml0aWFsaXplZCIsImRlZmF1bHRzIiwiaW5pdCIsImFkZCIsIm1heE51bWJlciIsImRlZmF1bHRMZW5ndGgiLCJtaW4iLCJpIiwicXVhbnRpdHkiLCJmcmVxdWVudGx5S2V5cyIsInNvcnRlZCIsInJldmVyc2UiLCJzbGljZWQiLCJsYXN0IiwicG9wIiwidW5pY29kZXMiLCJjb2RlUG9pbnRzIiwidSIsInVuaXEiLCJhcnIiLCJyZWR1Y2UiLCJhY2MiLCJ1bmlxQSIsInVuaXFCIiwiZGVlcE1lcmdlIiwibyIsIm9yaWdpbmFsVmFsdWUiLCJtZWFzdXJlU2Nyb2xsYmFyIiwiZG9jdW1lbnQiLCJkaXYiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJvdmVyZmxvdyIsInBvc2l0aW9uIiwidG9wIiwiYm9keSIsImFwcGVuZENoaWxkIiwic2Nyb2xsYmFyV2lkdGgiLCJvZmZzZXRXaWR0aCIsImNsaWVudFdpZHRoIiwicmVtb3ZlQ2hpbGQiLCJQaWNrZXJWaWV3IiwicGlja2VyQ29tcG9uZW50IiwiX3ZtIiwiX3BlckxpbmUiLCJwZXJMaW5lIiwiZmlyc3QiLCJzZWFyY2hFbW9qaXMiLCJwcmV2aWV3RW1vamkiLCJwcmV2aWV3RW1vamlDYXRlZ29yeUlkeCIsInByZXZpZXdFbW9qaUlkeCIsInNjcm9sbEVsZW1lbnQiLCIkcmVmcyIsInNjcm9sbCIsInNjcm9sbFRvcCIsImwiLCJjb21wb25lbnQiLCIkZWwiLCJvZmZzZXRUb3AiLCJoYXNFbW9qaXMiLCJzY3JvbGxUb0NvbXBvbmVudCIsImluZmluaXRlU2Nyb2xsIiwibWF4U2VhcmNoUmVzdWx0cyIsInVwZGF0ZVByZXZpZXdFbW9qaSIsImVtb2ppc0xlbmd0aCIsImNhdGVnb3J5TGVuZ3RoIiwiZGlmZiIsInByZXZDYXRlZ29yeUxhc3RSb3dMZW5ndGgiLCIkbmV4dFRpY2siLCJzY3JvbGxFbCIsImVtb2ppRWwiLCJxdWVyeVNlbGVjdG9yIiwic2Nyb2xsSGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiY2F0ZWdvcnlJZHgiLCJ0b29sdGlwIiwiRnVuY3Rpb24iLCJzaXplIiwidGFnIiwiZGVmYXVsdFNraW4iLCJzaG93UHJldmlldyIsInNob3dTZWFyY2giLCJzaG93Q2F0ZWdvcmllcyIsInBpY2tlclN0eWxlcyIsIk5BTUVTUEFDRSIsIl9KU09OIiwiSlNPTiIsImlzTG9jYWxTdG9yYWdlU3VwcG9ydGVkIiwiZ2V0dGVyIiwic2V0dGVyIiwic2V0SGFuZGxlcnMiLCJoYW5kbGVycyIsInNldE5hbWVzcGFjZSIsIm5hbWVzcGFjZSIsInVwZGF0ZSIsInN0YXRlIiwibG9jYWxTdG9yYWdlIiwic3RyaW5naWZ5IiwiZSIsInBhcnNlIiwiaXNXaW5kb3dBdmFpbGFibGUiLCJsYXN0VGltZSIsInZlbmRvcnMiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImNhbGxiYWNrIiwiZWxlbWVudCIsImN1cnJUaW1lIiwiRGF0ZSIsImdldFRpbWUiLCJ0aW1lVG9DYWxsIiwibWF4Iiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCJdLCJzb3VyY2VSb290IjoiIn0=