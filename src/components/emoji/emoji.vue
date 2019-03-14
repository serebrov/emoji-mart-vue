<script>
import data from '../data/all.json'
import { uncompress } from '../../utils/data'
import { EmojiIndex } from '../../utils/emoji-data'
import NimbleEmoji from './nimbleEmoji'

import { EmojiProps } from '../../utils/shared-props'

export default {
  functional: true,
  props: {
    ...EmojiProps,
    data: {
      type: Object,
      default() {
        let index = new EmojiIndex(data)
        return index
      },
    },
  },
  render(h, ctx) {
    let { data, props, children } = ctx

    return h(NimbleEmoji, { ...data, props }, children)
  },
}
</script>
