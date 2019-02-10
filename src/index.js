// import emojiIndex from './utils/emoji-index/emoji-index'
import store from './utils/store'
import { uncompress } from './utils/data'
import frequently from './utils/frequently'

export {
  Picker,
  NimblePicker,
  Emoji,
  NimbleEmoji,
  Category,
} from './components'

export { default as NimbleEmojiIndex } from './utils/emoji-index/nimble-emoji-index'
// export { emojiIndex, uncompress, store, frequently }
export { uncompress, store, frequently }
