<script>

import data from '../../../data/all.json'
import { EmojiIndex } from '../../utils/emoji-data'
import NimblePicker from './nimblePicker'

import { PickerProps } from '../../utils/shared-props'

let index = new EmojiIndex(data)

export default {
  functional: true,
  props: {
    ...PickerProps,
    data: {
      type: Object,
      default() {
        return index
      }
    }
  },
  render(h, ctx) {
    let { data, props, children } = ctx

    return h(NimblePicker, { ...data, props }, children)
  }
}

</script>
