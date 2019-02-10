import { getData, sanitize } from './index'

const SHEET_COLUMNS = 52

export default class EmojiData {

  constructor(emoji, skin, set, data) {
    this._key = emoji
    this._data = Object.assign({}, getData(
        emoji, skin, set, data))
    this._sanitized = sanitize(this._data)
    Object.freeze(this)
  }

  getPosition() {
      let multiply = 100 / (SHEET_COLUMNS - 1),
          x = multiply * this._data.sheet_x,
          y = multiply * this._data.sheet_y
      return `${x}% ${y}%`
  }

}
