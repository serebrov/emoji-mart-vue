import { mount } from '@vue/test-utils'

import data from '../data/all.json'
import { EmojiIndex } from '../src/utils/emoji-data'
import {
  Anchors,
  Picker,
  NimblePicker,
  Category,
  Preview,
  NimbleEmoji,
} from '../src/components'

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
    let categories = picker.findAll(Category)
    expect(categories.length).toBe(5)
    // Hidden category with search results
    expect(categories.at(0).vm.name).toBe('Search')
    expect(categories.at(1).vm.name).toBe('Recent')
    expect(categories.at(2).vm.name).toBe('Smileys & People')
    expect(categories.at(3).vm.name).toBe('Animals & Nature')
    expect(categories.at(4).vm.name).toBe('Food & Drink')
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

describe('anchors', () => {
  let index = new EmojiIndex(data, {
    custom: [
      {
        name: 'Octocat',
        short_names: ['octocat'],
        keywords: ['github'],
        imageUrl:
          'https://github.githubassets.com/images/icons/emoji/octocat.png',
      },
    ],
  })
  const picker = mount(NimblePicker, {
    propsData: {
      data: index,
    },
  })

  it('contains all categories', () => {
    let anchors = picker.find(Anchors)
    let categories = anchors.findAll('span.emoji-mart-anchor')
    let names = []
    for (let idx = 0; idx < categories.length; idx++) {
      names.push(categories.at(idx).element.attributes['data-title'].value)
    }
    expect(names).toEqual([
      'Frequently Used',
      'Smileys & People',
      'Animals & Nature',
      'Food & Drink',
      'Activity',
      'Travel & Places',
      'Objects',
      'Symbols',
      'Flags',
      'Custom',
    ])
  })

  it('can be clicked to scroll to the category', () => {
    let anchors = picker.find(Anchors)

    let anchorsCategories = anchors.findAll('span.emoji-mart-anchor')
    let symbols = anchorsCategories.at(7)
    expect(symbols.element.attributes['data-title'].value).toBe('Symbols')

    symbols.trigger('click')
    let events = anchors.emitted().click
    expect(events.length).toBe(1)
    let category = events[0][0]
    expect(category.id).toBe('symbols')
    expect(category.name).toBe('Symbols')

    expect(anchors.vm.activeCategory.id).toBe('symbols')
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

describe('emjoi tooltip', () => {
  let index = new EmojiIndex(data)
  const picker = mount(NimblePicker, {
    propsData: {
      data: index,
    },
  })

  it('emoji title is set to emoji id when emojiTooltip is true', () => {
    picker.setProps({ emojiTooltip: true })
    let emoji = picker.find('[data-title="+1"]')
    expect(emoji.element.title).toBe('+1')
  })

  it('emoji title is not set when emojiTooltip is false', () => {
    picker.setProps({ emojiTooltip: false })
    let emoji = picker.find('[data-title="+1"]')
    expect(emoji.element.title).toBe('')
  })
})

describe('emjoi preview', () => {
  let index = new EmojiIndex(data)
  const picker = mount(NimblePicker, {
    propsData: {
      data: index,
      emoji: 'point_up',
    },
  })

  it('preview shows point_up when no emoji is hovered', () => {
    let emoji = picker.find(Preview).find(NimbleEmoji)
    expect(emoji.vm.emojiObject.id).toBe('point_up')
  })

  it('preview shows the hovered emoji', () => {
    let emoji = picker.find('[data-title="+1"]')
    emoji.trigger('mouseenter')

    let previewEmoji = picker.find(Preview).find(NimbleEmoji)
    expect(previewEmoji.vm.emojiObject.id).toBe('+1')
  })
})

describe('emjoiSize', () => {
  const picker = mount(Picker)

  it('default emojiSize is 24', () => {
    let emoji = picker.find('[data-title="+1"]')
    // The inner span with applied inline style.
    let emojiSpan = emoji.element.childNodes[0]
    expect(emojiSpan.style['width']).toBe('24px')
    expect(emojiSpan.style.cssText).toBe(
      'background-position: 27.45% 96.08%; width: 24px; height: 24px;',
    )
  })

  it('emojiSize can be changed', () => {
    picker.setProps({ emojiSize: 20 })
    let emoji = picker.find('[data-title="+1"]')
    // The inner span with applied inline style.
    let emojiSpan = emoji.element.childNodes[0]
    expect(emojiSpan.style.cssText).toBe(
      'background-position: 27.45% 96.08%; width: 20px; height: 20px;',
    )
  })

  it('native emoji font size is 19.2px by default', () => {
    picker.setProps({ emojiSize: 24, native: true })
    let emoji = picker.find('[data-title="+1"]')
    // The inner span with applied inline style.
    let emojiSpan = emoji.element.childNodes[0]
    // Font-size is 80% of width/height value.
    expect(emojiSpan.style.cssText).toBe(
      'background-position: 27.45% 96.08%; font-size: 19.2px;',
    )
  })

  it('native emoji font size is smaller when emojiSize is smaller', () => {
    picker.setProps({ emojiSize: 20, native: true })
    let emoji = picker.find('[data-title="+1"]')
    // The inner span with applied inline style.
    let emojiSpan = emoji.element.childNodes[0]
    // Font-size is 80% of width/height value.
    expect(emojiSpan.style.cssText).toBe(
      'background-position: 27.45% 96.08%; font-size: 16px;',
    )
  })
})
