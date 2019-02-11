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
   */
  constructor(emoji, set, native, fallback) {
    this._emoji = emoji
    this._native = native
    this._set = set
    this._fallback = fallback

    this.canRender = this._canRender()
    this.cssClass = this._cssClass()
    this.cssStyle = this._cssStyle()
    this.content = this._content()

    Object.freeze(this)
  }

  _canRender() {
    return this._isCustom() || this._isNative() || this._hasEmoji() || this._fallback
  }

  _cssClass() {
    return [
      'emoji-set-' + this._set,
      'emoji-type-' + this._emojiType()
    ]
  }

  _cssStyle() {
    if (this._isCustom()) {
      return {
        backgroundImage: 'url(' + this._emoji._data.imageUrl + ')',
        backgroundSize: '100%',
      }
    }
    if (this._hasEmoji()) {
      return {
        backgroundPosition: this._emoji.getPosition()
      }
    }
    return {}
  }

  _content() {
    if (this._isCustom()) {
      return ''
    }
    if (this._isNative()) {
      return this._emoji.native
    }
    if (this._hasEmoji()) {
      return ''
    }
    return this._fallback ? this._fallback(this._emoji) : null
  }

  _isNative() {
    return this._native
  }

  _isCustom() {
    return this._emoji.custom
  }

  _hasEmoji() {
    return this._emoji._data && this._emoji._data['has_img_' + this._set]
  }

  _emojiType() {
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

}
