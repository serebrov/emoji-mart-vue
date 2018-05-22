const EmojiProps = {
  backgroundImageFn: {
    type: Function,
    default() {
      return function(set, sheetSize) {
        return `https://unpkg.com/emoji-datasource-${set}@${EMOJI_DATASOURCE_VERSION}/img/${set}/sheets/${sheetSize}.png`
      }
    }
  },
  native: {
    type: Boolean,
    default: false
  },
  forceSize: {
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
  sheetSize: {
    type: Number,
    default: 64
  },
  set: {
    type: String,
    default: 'apple'
  },
  size: {
    type: Number,
    default: 24
  },
  emoji: {
    type: [String, Object],
    required: true
  }
}

const PickerProps = {
  perLine: {
    type: Number,
    default: 9
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
  backgroundImageFn: {
    type: Function
  },
  sheetSize: {
    type: Number,
    default: 64
  },
  emojisToShowFilter: {
    type: Function
  },
  emojiTooltip: {
    type: Boolean,
    default: false
  },
  include: {
    type: Array
  },
  exclude: {
    type: Array
  },
  recent: {
    type: Array
  },
  autoFocus: {
    type: Boolean,
    default: false
  },
  custom: {
    type: Array,
    default() {
      return []
    }
  },
  i18n: {
    type: Object,
    default() {
      return {}
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
    default() {
      return {}
    }
  }
}

export {
  EmojiProps,
  PickerProps
}
