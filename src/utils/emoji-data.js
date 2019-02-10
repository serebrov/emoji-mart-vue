import { getData, sanitize } from './index'

const SHEET_COLUMNS = 52

export default class EmojiData {

  constructor(emoji, skin, set, data) {
    this.data = Object.assign({}, getData(
        emoji, skin, set, data))
    this.sanitized = sanitize(this.data)
    Object.freeze(this)
  }

  getPosition() {
      let multiply = 100 / (SHEET_COLUMNS - 1),
          x = multiply * this.data.sheet_x,
          y = multiply * this.data.sheet_y
      return `${x}% ${y}%`
  }

}
