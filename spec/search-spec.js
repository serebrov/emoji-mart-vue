import { mount } from '@vue/test-utils'

import data from '../data/all.json'
import { EmojiIndex } from '../src/utils/emoji-data'
import { Picker, Category, Search } from '../src/components'

describe('search', () => {
  let index = new EmojiIndex(data)
  const picker = mount(Picker, {
    propsData: {
      data: index,
      skin: 6,
    },
  })

  it('emoji can be filtered via search', (done) => {
    let search = picker.find(Search)
    let input = search.find('input')
    input.element.value = '+1'
    input.trigger('input')

    picker.vm.$nextTick(() => {
      let categories = picker.findAll(Category)
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
    let search = picker.find(Search)
    let input = search.find('input')
    input.element.value = '+1'
    input.trigger('input')
    expect(search.vm.value).toBe('+1')

    search.vm.clear()
    expect(search.vm.value).toBe('')
  })

  it('has emoji index', () => {
    let search = picker.find(Search)
    expect(search.vm.emojiIndex).toBe(index)
  })
})

describe('search no focus', () => {
  it('has no focus by default', () => {
    // Reset the active element before test.
    document.activeElement.blur()
    expect(document.activeElement).toBe(document.body)

    const picker = mount(Picker, {
      propsData: {
        autoFocus: false,
      },
    })

    let search = picker.find(Search)
    expect(search).toBeDefined()
    expect(document.activeElement).toBe(document.body)
  })

  it('can be auto focused', () => {
    // Reset the active element before test.
    document.activeElement.blur()
    expect(document.activeElement).toBe(document.body)

    const picker = mount(Picker, {
      propsData: {
        autoFocus: true,
      },
    })

    let search = picker.find(Search)
    let input = search.find('input')
    expect(document.activeElement).toBe(input.element)
  })
})
