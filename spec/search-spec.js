import { mount } from '@vue/test-utils'

import data from '../data/all.json'
import { EmojiIndex } from '../src/utils/emoji-data'
import { Picker, Category, Search, Anchors } from '../src/components'

describe('search', () => {
  let index = new EmojiIndex(data)
  const picker = mount(Picker, {
    propsData: {
      data: index,
      skin: 6,
    },
  })

  it('emoji can be filtered via search', (done) => {
    let search = picker.findComponent(Search)
    let input = search.find('input')
    input.element.value = '+1'
    input.trigger('input')

    picker.vm.$nextTick(() => {
      let categories = picker.findAllComponents(Category)
      let searchCategory = categories.at(0)
      expect(searchCategory.vm.id).toBe('search')
      expect(searchCategory.vm.emojiObjects.length).toBe(1)
      expect(searchCategory.vm.emojiObjects[0].emojiObject).toEqual(
        index.emoji('+1'),
      )
      done()
    })
  })

  it('can be cleared', () => {
    let search = picker.findComponent(Search)
    let input = search.find('input')
    input.element.value = '+1'
    input.trigger('input')
    expect(search.vm.value).toBe('+1')

    search.vm.clear()
    expect(search.vm.value).toBe('')
  })

  it('has emoji index', () => {
    let search = picker.findComponent(Search)
    expect(search.vm.emojiIndex).toBe(index)
  })

  it('no error when clicking anchor when search is active', async () => {
    let search = picker.findComponent(Search)
    let input = search.find('input')
    input.element.value = '+1'
    input.trigger('input')

    await picker.vm.$nextTick()

    let categories = picker.findAllComponents(Category)
    let searchCategory = categories.at(0)
    expect(searchCategory.vm.id).toBe('search')

    let anchors = picker.findComponent(Anchors)
    let anchorsCategories = anchors.findAll('.emoji-mart-anchor')
    let symbols = anchorsCategories.at(8)
    expect(symbols.element.attributes['data-title'].value).toBe('Symbols')
    symbols.trigger('click')

    await picker.vm.$nextTick()

    let events = anchors.emitted().click
    let category = events[0][0]
    expect(category.id).toBe('symbols')

    // Category does not change when the search is active.
    expect(anchors.vm.activeCategory.id).toBe('recent')
  })

  it('the text select event is not propagated', () => {
    // Note: the issue related to this test is not reproduced in Vue 2,
    // so I am not sure if the test really works (if we remove the fix,
    // the test will still pass).
    let search = picker.findComponent(Search)
    let input = search.find('input')
    input.element.value = 'zxcvb'
    input.trigger('select')

    let events = picker.emitted().select
    expect(events).toBeUndefined()
  })
})

describe('search no focus', () => {
  it('has no focus by default', () => {
    const rootDiv = document.createElement('div')
    document.body.appendChild(rootDiv)

    // Reset the active element before test.
    document.activeElement.blur()
    expect(document.activeElement).toBe(document.body)

    let index = new EmojiIndex(data)
    const picker = mount(Picker, {
      propsData: {
        data: index,
        autoFocus: false,
      },
      attachTo: rootDiv,
    })

    let search = picker.findComponent(Search)
    expect(search).toBeDefined()
    expect(document.activeElement).toBe(document.body)
  })
})

describe('search auto-focus', () => {
  it('can be auto focused', () => {
    const rootDiv = document.createElement('div')
    document.body.appendChild(rootDiv)

    // Reset the active element before test.
    document.activeElement.blur()
    expect(document.activeElement).toBe(document.body)

    let index = new EmojiIndex(data)
    const picker = mount(Picker, {
      propsData: {
        data: index,
        autoFocus: true,
      },
      attachTo: rootDiv,
    })

    let search = picker.findComponent(Search)
    let input = search.find('input')
    expect(document.activeElement).toBe(input.element)
  })
})
