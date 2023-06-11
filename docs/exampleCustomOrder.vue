<template>
  <div class="example">
    <div class="row"></div>
    <h2>Custom order example</h2>
    <div class="row">
      Show 'objects', 'nature', 'smileys' emoji categories, dispalyed in the
      specified order (also 'recent' which is always the first).
    </div>
    <div class="row">
      <Picker :data="indexInclude" />
    </div>
  </div>
</template>

<script>
import data from '../data/all.json'
import { Picker, EmojiIndex } from '../src'

const indexInclude = new EmojiIndex(data, {
  include: ['objects', 'nature', 'smileys', 'recent'],
})

export default {
  props: {
    index: {
      type: Object,
    },
  },
  data() {
    return {
      indexInclude: indexInclude,
    }
  },
  components: {
    Picker,
  },
}
</script>

<style scoped></style>
