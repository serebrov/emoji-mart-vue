<template>
  <div class="example">
    <h2>I18n picker example</h2>
    <div class="row">Picker with category translations.</div>
    <div class="row">
      <Picker emoji="department_store" :data="indexI18n" :i18n="i18n" />
    </div>
  </div>
</template>

<script>
import data from '../data/all.json'
import { Picker, EmojiIndex } from '../src'

const i18n = {
  categories: {
    search: '搜索结果',
    recent: '经常使用',
    smileys: '心情',
    people: '人物',
    nature: '动物 & 大自然',
    foods: '食物 & 饮料',
    activity: '活动',
    places: '旅行 & 地标',
    objects: '物体',
    symbols: '符号',
    flags: '国旗',
    custom: '自定义',
  },
}

const indexI18n = new EmojiIndex(data, {
  exclude: [
    'flags',
    'symbols',
    'objects',
    'activity',
    'foods',
    'people',
    'places',
  ],
})

export default {
  props: {
    index: {
      type: Object,
    },
  },
  data() {
    return {
      indexI18n: indexI18n,
      i18n: i18n,
    }
  },
  components: {
    Picker,
  },
}
</script>

<style scoped></style>
