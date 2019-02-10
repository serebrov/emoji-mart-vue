import { getData, sanitize } from './index'

const SHEET_COLUMNS = 52

export class EmojiData {

  constructor(emoji, skin, set, data) {
    this._key = emoji
    this._data = Object.assign({}, getData(
        emoji, skin, set, data))
    this._sanitized = sanitize(this._data)
    for (let key in this._sanitized) {
      this[key] = this._sanitized[key]
    }
    Object.freeze(this)
  }

  getPosition() {
      let multiply = 100 / (SHEET_COLUMNS - 1),
          x = multiply * this._data.sheet_x,
          y = multiply * this._data.sheet_y
      return `${x}% ${y}%`
  }

}

export class EmojiView {

  /**
   * emoji - EmojiData to display
   * set - string, emoji set name
   * native - boolean, whether to render native emoji
   * fallback - fallback function to render missing emoji, optional
   * size - integer, emoji size
   * forceSize - boolean, whether to force size for native emoji
   * sheetSize - integer, 16, 20, 32, 64 - emoji image sheet size
   * backgroundImageFn - function to get background image url
   */
  constructor(
    emoji, set, native, fallback, 
    size, forceSize, sheetSize, backgroundImageFn
  ) {
    this._emoji = emoji
    this._native = native
    this._set = set
    this._fallback = fallback
    this._size = size
    this._forceSize = forceSize
    this._sheetSize = sheetSize
    this._backgroundImageFn = backgroundImageFn
  }

  canRender() {
    return this.isCustom() || this.isNative() || this.hasEmoji() || this._fallback
  }

  isNative() {
    return this._native
  }

  isCustom() {
    return this._emoji.custom
  }

  hasEmoji() {
    return this._emoji._data['has_img_' + this._set]
  }

  emojiType() {
    if (this.isCustom()) {
      return 'custom';
    }
    if (this.isNative()) {
      return 'native';
    }
    if (this.hasEmoji()) {
      return 'image';
    }
    return 'fallback';
  }

  cssClass() {
    return [
      'emoji-mart-emoji',
      'emoji-mart-emoji-set-' + this._set,
      'emoji-mart-emoji-type-' + this.emojiType()
    ]
  }

  cssStyle() {
    if (this.isCustom()) {
      return {
        display: 'inline-block',
        width: this._size + 'px',
        height: this._size + 'px',
        backgroundImage: 'url(' + this._emoji._data.imageUrl + ')',
        backgroundSize: '100%',
      }
    }
    if (this.isNative()) {
      let styles = { fontSize: this._size + 'px' }
      if (this.forceSize) {
        styles.display = 'inline-block'
        styles.width = this._size + 'px'
        styles.height = this._size + 'px'
      }
      return styles
    }
    if (this.hasEmoji()) {
      return {
        display: 'inline-block',
        width: this._size + 'px',
        height: this._size + 'px',
        backgroundImage: 'url(' + this._backgroundImageFn(this._set, this._sheetSize) + ')',
        backgroundSize: (100 * SHEET_COLUMNS) + '%',
        backgroundPosition: this._emoji.getPosition()
      }
    }
  }

  content() {
    if (this.isCustom()) {
      return ''
    }
    if (this.isNative()) {
      return this._emoji.native
    }
    if (this.hasEmoji()) {
      return ''
    }
    return this._fallback ? this._fallback(this._emoji) : null
  }

}
