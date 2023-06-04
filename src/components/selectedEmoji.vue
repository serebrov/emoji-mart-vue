<template>
  <section class="emoji-mart-category" :aria-label="i18n.selected">
    <div class="emoji-mart-category-label">
      <h3 class="emoji-mart-category-label">{{ i18n.selected }}</h3>
    </div>

    <emoji :data="data" :emoji="emoji" :size="32" @click="onClick" />
    <emoji
      @click="onRemove"
      class="emoji-delete"
      :data="data"
      emoji=":x:"
      :size="10"
    />
  </section>
</template>

<script>
import Emoji from './emoji.vue'

export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
    i18n: {
      type: Object,
      required: true,
    },
    emoji: {
      type: Object,
      required: true,
    },
  },
  emits: ['click', 'remove'],
  computed: {},
  created() {},
  methods: {
    onClick() {
      this.$emit('click', this.emoji)
    },
    onRemove() {
      this.$emit('remove', this.emoji)
    },
  },
  components: {
    Emoji,
  },
}
</script>
