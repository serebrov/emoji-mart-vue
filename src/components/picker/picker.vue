<script>

import data from '../../../data/all.json'
import NimblePicker from './nimblePicker'

import { PickerProps } from '../../utils/shared-props'

export default {
  functional: true,
  props: {
    ...PickerProps,
    data: {
      type: Object,
      default() {
        return data
      }
    }
  },
  render(h, ctx) {
    let { data, props, children } = ctx

    return h(NimblePicker, { ...data, props }, children)
  }
}

</script>
