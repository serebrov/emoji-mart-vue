import { mount } from '@vue/test-utils'

import data from '../data/all.json'
import { EmojiIndex } from '../src/utils/emoji-data'
import {
  Anchors,
  Search,
  Picker,
  Category,
  Preview,
  Emoji,
} from '../src/components'

describe('Picker', () => {
  let index = new EmojiIndex(data)
  const picker = mount(Picker, {
    propsData: {
      data: index,
    },
  })

  it('works', () => {
    expect(picker.html()).toContain('woman-gesturing-ok')
  })

  test('renders correctly', () => {
    expect(picker.element).toMatchSnapshot()
  })
})

describe('Picker', () => {
  let index = new EmojiIndex(data)
  const picker = mount(Picker, {
    propsData: {
      data: index,
    },
  })

  it('works', () => {
    expect(picker.html()).toContain('woman-gesturing-ok"')
  })

  it('renders 10 categories', () => {
    let categories = picker.findAllComponents(Category)
    expect(categories.length).toBe(10)
    // // Hidden category with search results
    // expect(categories.at(0).vm.name).toBe('Search')
    expect(categories.at(0).vm.name).toBe('Recent')
    expect(categories.at(1).vm.name).toBe('Smileys & Emotion')
    expect(categories.at(2).vm.name).toBe('People & Body')
    expect(categories.at(3).vm.name).toBe('Animals & Nature')
    expect(categories.at(4).vm.name).toBe('Food & Drink')
    expect(categories.at(5).vm.name).toBe('Activities')
    expect(categories.at(6).vm.name).toBe('Travel & Places')
    expect(categories.at(7).vm.name).toBe('Objects')
    expect(categories.at(8).vm.name).toBe('Symbols')
    expect(categories.at(9).vm.name).toBe('Flags')
  })

  it('no error when clicking anchor when search is active', (done) => {
    let search = picker.findComponent(Search)
    let input = search.find('input')
    input.element.value = '+1'
    input.trigger('input')

    picker.vm.$nextTick(() => {
      let categories = picker.findAllComponents(Category)
      let searchCategory = categories.at(0)
      expect(searchCategory.vm.id).toBe('search')

      let anchors = picker.findComponent(Anchors)
      let anchorsCategories = anchors.findAll('.emoji-mart-anchor')
      let symbols = anchorsCategories.at(8)
      expect(symbols.element.attributes['data-title'].value).toBe('Symbols')
      symbols.trigger('click')

      picker.vm.$nextTick(() => {
        let events = anchors.emitted().click
        let category = events[0][0]
        expect(category.id).toBe('symbols')
        // Category didn't not change (search as active)
        expect(anchors.vm.activeCategory.id).toBe('recent')

        done()
      })
    })
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
    let categories = picker.findAllComponents(Category)
    expect(categories.length).toBe(2)
    // Visible cateogires - Flags and Activity
    expect(categories.at(0).vm.name).toBe('Activities')
    expect(categories.at(0).vm.id).toBe('activity')
    // only 1 emoji from Activities matches
    expect(categories.at(0).vm.emojis.length).toBe(1)
    expect(categories.at(1).vm.name).toBe('Flags')
    expect(categories.at(1).vm.id).toBe('flags')
    expect(categories.at(1).vm.emojis.length).toBe(250)
  })
})

describe('categories exclude preview emoji', () => {
  const consoleErrorMock = jest.spyOn(console, 'error').mockImplementation()

  let index = new EmojiIndex(data, {
    exclude: ['places'],
  })
  const picker = mount(Picker, {
    propsData: {
      data: index,
    },
  })

  // The error is printed into console.
  expect(consoleErrorMock.mock.calls.length).toEqual(2)
  const error = consoleErrorMock.mock.calls[0][0]
  expect(error).toEqual(
    'Default preview emoji `department_store` is not available, check the Picker `emoji` property',
  )
  const error2 = consoleErrorMock.mock.calls[1][0]
  expect(error2.message).toContain('Can not find emoji by id: department_store')
  consoleErrorMock.mockRestore()

  it('will not throw an error if default emoji is not available', () => {
    expect(picker.vm.emoji).toEqual('department_store')
    // When `emoji` (that is emoji id used for idleEmoji) is not available,
    // like in this case, since we excluded 'places' category that contains
    // the default `department_store` emoji.
    // In this case, picker logs en error and uses first emoji available.
    expect(picker.vm.idleEmoji.id).toEqual('100')
  })
})

describe('categories include allows to select and order categories', () => {
  const consoleErrorMock = jest.spyOn(console, 'error').mockImplementation()

  let index = new EmojiIndex(data, {
    // Note: the 'recent' category is always first.
    include: ['nature', 'smileys', 'recent'],
  })
  const picker = mount(Picker, {
    propsData: {
      data: index,
    },
  })

  // The error is printed into console.
  const error = consoleErrorMock.mock.calls[0][0]
  expect(error).toEqual(
    'Default preview emoji `department_store` is not available, check the Picker `emoji` property',
  )
  const error2 = consoleErrorMock.mock.calls[1][0]
  expect(error2.message).toContain('Can not find emoji by id: department_store')
  consoleErrorMock.mockRestore()

  it('will not throw an error if default emoji is not available', () => {
    let categories = picker.findAllComponents(Category)
    expect(categories.length).toBe(3)
    expect(categories.at(0).vm.name).toBe('Recent')
    expect(categories.at(1).vm.name).toBe('Animals & Nature')
    expect(categories.at(2).vm.name).toBe('Smileys & Emotion')
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
  const picker = mount(Picker, {
    propsData: {
      data: index,
    },
  })

  it('contains all categories', () => {
    let anchors = picker.findComponent(Anchors)
    let categories = anchors.findAll('.emoji-mart-anchor')
    let names = []
    for (let idx = 0; idx < categories.length; idx++) {
      names.push(categories.at(idx).element.attributes['data-title'].value)
    }
    expect(names).toEqual([
      'Frequently Used',
      'Smileys & Emotion',
      'People & Body',
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

  it('can be clicked to scroll to the category', async () => {
    let anchors = picker.findComponent(Anchors)

    let anchorsCategories = anchors.findAll('.emoji-mart-anchor')
    let symbols = anchorsCategories.at(8)
    expect(symbols.element.attributes['data-title'].value).toBe('Symbols')

    // The `recent` category is selected initially.
    expect(picker.vm.view.activeCategory.id).toBe('recent')
    expect(anchors.vm.activeCategory.id).toBe('recent')

    symbols.trigger('click')
    let events = anchors.emitted().click
    expect(events.length).toBe(1)

    let category = events[0][0]
    expect(category.id).toBe('symbols')
    expect(category.name).toBe('Symbols')

    await picker.vm.$nextTick()

    // Picker change - the check below fails (although works in demo app)
    // scrollTop if 0 for all categories and activeCategory is changed in the
    // onScroll handler, need to find a way to thes this.
    // expect(picker.vm.view.activeCategory.id).toBe('symbols')
    // expect(anchors.vm.activeCategory.id).toBe('symbols')
  })
})

describe('emjois', () => {
  let index = new EmojiIndex(data)
  const picker = mount(Picker, {
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
  const picker = mount(Picker, {
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
    expect(emojiData.colons).toBe(':+1::skin-tone-6:')
    expect(emojiData.native).toBe('👍🏿')
  })
})

describe('emjoi tooltip is true', () => {
  let index = new EmojiIndex(data)
  const picker = mount(Picker, {
    propsData: {
      data: index,
      emojiTooltip: true,
    },
  })

  it('emoji title is set to emoji id when emojiTooltip is true', () => {
    let emoji = picker.find('[data-title="+1"]')
    expect(emoji.element.title).toBe('+1')
  })
})

describe('emjoi tooltip is false', () => {
  let index = new EmojiIndex(data)
  const picker = mount(Picker, {
    propsData: {
      data: index,
      emojiTooltip: false,
    },
  })

  it('emoji title is not set when emojiTooltip is false', () => {
    let emoji = picker.find('[data-title="+1"]')
    expect(emoji.element.title).toBe('')
  })
})

describe('emjoi preview', () => {
  let index = new EmojiIndex(data)
  const picker = mount(Picker, {
    propsData: {
      data: index,
      emoji: 'point_up',
    },
  })

  it('preview shows point_up when no emoji is hovered', () => {
    let emoji = picker.findComponent(Preview).findComponent(Emoji)
    expect(emoji.vm.emojiObject.id).toBe('point_up')
  })

  it('preview shows the hovered emoji', async () => {
    let emoji = picker.find('[data-title="+1"]')
    await emoji.trigger('mouseenter')

    let previewEmoji = picker.findComponent(Preview).findComponent(Emoji)
    expect(previewEmoji.vm.emojiObject.id).toBe('+1')
  })
})

describe('emjoiSize', () => {
  let index = new EmojiIndex(data)
  const picker = mount(Picker, {
    propsData: {
      data: index,
    },
  })

  it('default emojiSize is 24', () => {
    let emoji = picker.find('[data-title="+1"]')
    // The inner span with applied inline style.
    let emojiSpan = emoji.element.childNodes[0]
    expect(emojiSpan.style['width']).toBe('24px')
    expect(emojiSpan.style.cssText).toBe(
      'background-position: 20% 85%; width: 24px; height: 24px;',
    )
  })

  it('emojiSize can be changed', async () => {
    await picker.setProps({ emojiSize: 20 })
    let emoji = picker.find('[data-title="+1"]')
    // The inner span with applied inline style.
    let emojiSpan = emoji.element.childNodes[0]
    expect(emojiSpan.style.cssText).toBe(
      'background-position: 20% 85%; width: 20px; height: 20px;',
    )
  })

  it('native emoji font size is 19.2px by default', async () => {
    await picker.setProps({ emojiSize: 24, native: true })
    let emoji = picker.find('[data-title="+1"]')
    // The inner span with applied inline style.
    let emojiSpan = emoji.element.childNodes[0]
    // Font-size is 95% of width/height value.
    expect(emojiSpan.style.cssText).toBe(
      'background-position: 20% 85%; font-size: 22.8px;',
    )
  })

  it('native emoji font size is smaller when emojiSize is smaller', async () => {
    await picker.setProps({ emojiSize: 20, native: true })
    let emoji = picker.find('[data-title="+1"]')
    // The inner span with applied inline style.
    let emojiSpan = emoji.element.childNodes[0]
    // Font-size is 95% of width/height value.
    expect(emojiSpan.style.cssText).toBe(
      'background-position: 20% 85%; font-size: 19px;',
    )
  })
})

describe('infiniteScroll is off', () => {
  let index = new EmojiIndex(data)
  const picker = mount(Picker, {
    propsData: {
      data: index,
      infiniteScroll: false,
    },
  })

  test('renders correctly', () => {
    expect(picker.element).toMatchSnapshot()
  })

  it('renders 10 categories', () => {
    let categories = picker.findAllComponents(Category)
    expect(categories.length).toBe(10)
    // // Hidden category with search results
    // expect(categories.at(0).vm.name).toBe('Search')
    expect(categories.at(0).vm.name).toBe('Recent')
    expect(categories.at(0).isVisible()).toBe(true)

    const restCategories = [
      'Smileys & Emotion',
      'People & Body',
      'Animals & Nature',
      'Food & Drink',
      'Activities',
      'Travel & Places',
      'Objects',
      'Symbols',
      'Flags',
    ]
    for (let idx = 1; idx < categories.length; idx++) {
      expect(categories.at(idx).vm.name).toBe(restCategories[idx - 1])
      expect(categories.at(idx).isVisible()).toBe(false)
    }
  })

  it('search results are visible', (done) => {
    // See https://github.com/serebrov/emoji-mart-vue/pull/298
    // we had an issue with search results not being displayed
    // when `infiniteSearch` is disabled.
    let search = picker.findComponent(Search)
    let input = search.find('input')
    input.element.value = '+1'
    input.trigger('input')

    picker.vm.$nextTick(() => {
      let categories = picker.findAllComponents(Category)
      let searchCategory = categories.at(0)
      expect(searchCategory.vm.id).toBe('search')
      expect(searchCategory.isVisible()).toBe(true)

      done()
    })
  })
})
