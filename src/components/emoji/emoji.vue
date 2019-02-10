<script>

import data from '../../../data/all.json'
import {uncompress} from '../../utils/data'
import NimbleEmoji from './nimbleEmoji'

import { EmojiProps } from '../../utils/shared-props'

export default {
  functional: true,
  props: {
    ...EmojiProps,
    data: {
      type: Object,
      default() {
        return uncompress(data)
      }
    }
  },
  render(h, ctx) {
    let { data, props, children } = ctx

    return h(NimbleEmoji, { ...data, props }, children)
  }
}

</script>
