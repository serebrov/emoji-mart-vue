import { mount } from '@vue/test-utils'

import { Picker, Search } from '../src/components'
import data from '../data/all.json'
import { EmojiIndex } from '../src/utils/emoji-data'

describe('Picker keyboard control', () => {
  let index = new EmojiIndex(data)
  let picker = null

  beforeEach(() => {
    picker = mount(Picker, {
      propsData: {
        data: index,
      },
    })
  })

  it('Arrow down selects emoji below', () => {
    expect(picker.vm.view.previewEmoji).toEqual(null)

    const search = picker.findComponent(Search)
    const input = search.find('input')
    input.trigger('click')

    input.trigger('keydown.down')
    expect(picker.vm.view.previewEmoji.native).toEqual('👍')
    expect(picker.vm.view.previewEmojiCategory.id).toEqual('recent')

    input.trigger('keydown.down')
    expect(picker.vm.view.previewEmoji.native).toEqual('😞')
    expect(picker.vm.view.previewEmojiCategory.id).toEqual('recent')

    input.trigger('keydown.down')
    expect(picker.vm.view.previewEmoji.native).toEqual('😀')
    expect(picker.vm.view.previewEmojiCategory.id).toEqual('smileys')
  })

  it('Arrow down selects emoji above', () => {
    expect(picker.vm.view.previewEmoji).toEqual(null)

    const search = picker.findComponent(Search)
    const input = search.find('input')

    input.trigger('click')
    input.trigger('keydown.down')
    input.trigger('keydown.down')
    input.trigger('keydown.down')

    expect(picker.vm.view.previewEmoji.native).toEqual('😀')
    expect(picker.vm.view.previewEmojiCategory.id).toEqual('smileys')

    input.trigger('keydown.up')
    expect(picker.vm.view.previewEmoji.native).toEqual('😞')
    expect(picker.vm.view.previewEmojiCategory.id).toEqual('recent')

    input.trigger('keydown.up')
    expect(picker.vm.view.previewEmoji.native).toEqual('👍')
    expect(picker.vm.view.previewEmojiCategory.id).toEqual('recent')
  })

  it('Arrow right selects emoji on the right', () => {
    expect(picker.vm.view.previewEmoji).toEqual(null)

    const search = picker.findComponent(Search)
    const input = search.find('input')
    input.trigger('click')

    input.trigger('keydown.right')
    expect(picker.vm.view.previewEmoji.native).toEqual('👍')
    expect(picker.vm.view.previewEmojiCategory.id).toEqual('recent')

    input.trigger('keydown.right')
    expect(picker.vm.view.previewEmoji.native).toEqual('😀')
    expect(picker.vm.view.previewEmojiCategory.id).toEqual('recent')

    input.trigger('keydown.right')
    expect(picker.vm.view.previewEmoji.native).toEqual('😘')
    expect(picker.vm.view.previewEmojiCategory.id).toEqual('recent')
  })

  it('Arrow left selects emoji on the left', () => {
    expect(picker.vm.view.previewEmoji).toEqual(null)

    const search = picker.findComponent(Search)
    const input = search.find('input')

    input.trigger('click')
    input.trigger('keydown.right')
    input.trigger('keydown.right')
    input.trigger('keydown.right')

    expect(picker.vm.view.previewEmoji.native).toEqual('😘')
    expect(picker.vm.view.previewEmojiCategory.id).toEqual('recent')

    input.trigger('keydown.left')
    expect(picker.vm.view.previewEmoji.native).toEqual('😀')
    expect(picker.vm.view.previewEmojiCategory.id).toEqual('recent')

    input.trigger('keydown.left')
    expect(picker.vm.view.previewEmoji.native).toEqual('👍')
    expect(picker.vm.view.previewEmojiCategory.id).toEqual('recent')
  })

  it('Enter selects the emoji', () => {
    expect(picker.vm.view.previewEmoji).toEqual(null)

    const search = picker.findComponent(Search)
    const input = search.find('input')
    input.trigger('click')

    input.trigger('keydown.down')
    input.trigger('keydown.down')
    input.trigger('keydown.down')

    expect(picker.vm.view.previewEmoji.native).toEqual('😀')
    expect(picker.vm.view.previewEmojiCategory.id).toEqual('smileys')

    input.trigger('keydown.enter')

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
