import { mount } from '@vue/test-utils'

import data from '../data/all.json'
import { EmojiIndex } from '../src/utils/emoji-data'
import { Picker, NimblePicker, Category } from '../src/components'

describe('Picker', () => {
  const picker = mount(Picker)

  it('works', () => {
    expect(picker.isVueInstance()).toBeTruthy()
    expect(picker.html()).toContain('woman-gesturing-ok')
  })

  test('renders correctly', () => {
    expect(picker.element).toMatchSnapshot()
  })
})

describe('NimblePicker', () => {
  let index = new EmojiIndex(data)
  const picker = mount(NimblePicker, {
    propsData: {
      data: index,
    },
  })

  it('works', () => {
    expect(picker.html()).toContain('woman-gesturing-ok"')
  })

  it('shows 5 categories by default', () => {
    // Due to the virtual scroller, not all the categories
    // are rendered at once
    expect(picker.findAll(Category).length).toBe(5)
  })
})

describe('categories', () => {
  let index = new EmojiIndex(data, {
    emojisToShowFilter: (emoji) => {
      return emoji.short_names[0].match(/^flag.*/) !== null
    },
  })
  // let index = new EmojiIndex(data)
  const picker = mount(Picker, {
    propsData: {
      data: index,
      // Set idle emoji (in preview) to "flag-tf"
      emoji: 'flag-tf',
    },
  })

  it('will not show some based upon our filter', () => {
    let categories = picker.findAll(Category)
    expect(categories.length).toBe(3)
    // Hidden category with search results
    expect(categories.at(0).vm.name).toBe('Search')
    expect(categories.at(0).vm.id).toBe('search')
    // Visible cateogires - Flags and Activity
    expect(categories.at(1).vm.name).toBe('Activities')
    expect(categories.at(1).vm.id).toBe('activity')
    // only 1 emoji from Activities matches
    expect(categories.at(1).vm.emojis.length).toBe(1)
    expect(categories.at(2).vm.name).toBe('Flags')
    expect(categories.at(2).vm.id).toBe('flags')
    expect(categories.at(2).vm.emojis.length).toBe(250)
  })
})

describe('emjois', () => {
  let index = new EmojiIndex(data)
  const picker = mount(NimblePicker, {
    propsData: {
      data: index,
    },
  })

  it('emoji can be selected', () => {
    let emoji = picker.find('[data-title="grinning"]')
    emoji.trigger('click')

    let events = picker.emitted().select
    expect(events.length).toBe(1)
    let emojiData = events[0][0]
    expect(emojiData).toBe(index.emoji('grinning'))
    expect(emojiData.id).toBe('grinning')
    expect(emojiData.name).toBe('Grinning Face')
    expect(emojiData.colons).toBe(':grinning:')
    expect(emojiData.native).toBe('😀')
  })
})

describe('emjois skin', () => {
  let index = new EmojiIndex(data)
  const picker = mount(NimblePicker, {
    propsData: {
      data: index,
      skin: 6,
    },
  })

  it('emoji with skin tone can be selected', () => {
    let emoji = picker.find('[data-title="+1"]')
    emoji.trigger('click')

    let events = picker.emitted().select
    expect(events.length).toBe(1)
    let emojiData = events[0][0]
    expect(emojiData).toBe(index.emoji('+1').getSkin(6))
    expect(emojiData.id).toBe('+1')
    expect(emojiData.name).toBe('Thumbs Up Sign')
    expect(emojiData.colons).toBe(':+1:')
    expect(emojiData.native).toBe('👍🏿')
  })
})
