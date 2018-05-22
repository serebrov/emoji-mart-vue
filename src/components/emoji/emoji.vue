<script>

import data from '../../../data/all.json'
import NimbleEmoji from './nimbleEmoji'

import { EmojiProps } from '../../utils/shared-props'

export default {
  functional: true,
  props: {
    ...EmojiProps,
    data: {
      type: Object,
      default() {
        return data
      }
    }
  },
  render(h, ctx) {
    return h(NimbleEmoji, ctx.data, ctx.children)
  }
}

</script>
