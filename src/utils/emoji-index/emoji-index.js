import data from '../../../data/all.json'
import { uncompress } from '../data'
import NimbleEmojiIndex from './nimble-emoji-index'

const emojiIndex = new NimbleEmojiIndex(uncompress(data))
const { emojis, emoticons } = emojiIndex

function search() {
  return emojiIndex.search(...arguments)
}

export default { search, emojis, emoticons }
