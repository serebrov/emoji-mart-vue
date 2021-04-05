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
    expect(picker.vm.previewEmoji).toEqual(null)

    const search = picker.find(Search)
    const input = search.find('input')
    input.trigger('click')

    input.trigger('keydown.down')
    expect(picker.vm.previewEmoji.native).toEqual('👍')
    expect(picker.vm.previewEmojiCategory.id).toEqual('recent')

    input.trigger('keydown.down')
    expect(picker.vm.previewEmoji.native).toEqual('😒')
    expect(picker.vm.previewEmojiCategory.id).toEqual('recent')

    input.trigger('keydown.down')
    expect(picker.vm.previewEmoji.native).toEqual('😀')
    expect(picker.vm.previewEmojiCategory.id).toEqual('smileys')
  })

  it('Arrow down selects emoji above', () => {
    expect(picker.vm.previewEmoji).toEqual(null)

    const search = picker.find(Search)
    const input = search.find('input')

    input.trigger('click')
    input.trigger('keydown.down')
    input.trigger('keydown.down')
    input.trigger('keydown.down')

    expect(picker.vm.previewEmoji.native).toEqual('😀')
    expect(picker.vm.previewEmojiCategory.id).toEqual('smileys')

    input.trigger('keydown.up')
    expect(picker.vm.previewEmoji.native).toEqual('😒')
    expect(picker.vm.previewEmojiCategory.id).toEqual('recent')

    input.trigger('keydown.up')
    expect(picker.vm.previewEmoji.native).toEqual('👍')
    expect(picker.vm.previewEmojiCategory.id).toEqual('recent')
  })

})
