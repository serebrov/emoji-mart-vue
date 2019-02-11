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
    return this.isCustom() || this.isNative() || this.hasEmoji() || this._fallback
  }

  _cssClass() {
    return [
      'emoji-set-' + this._set,
      'emoji-type-' + this.emojiType()
    ]
  }

  _cssStyle() {
    if (this.isCustom()) {
      return {
        backgroundImage: 'url(' + this._emoji._data.imageUrl + ')',
        backgroundSize: '100%',
      }
    }
    if (this.hasEmoji()) {
      return {
        backgroundPosition: this._emoji.getPosition()
      }
    }
    return {}
  }

  _content() {
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

  isNative() {
    return this._native
  }

  isCustom() {
    return this._emoji.custom
  }

  hasEmoji() {
    return this._emoji._data && this._emoji._data['has_img_' + this._set]
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


}
