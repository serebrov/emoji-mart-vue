import { mount } from '@vue/test-utils'

import data from '../data/all.json'
// import { EmojiIndex } from '../src/utils/emoji-data'
import { Emoji, NimbleEmoji } from '../src/components'

describe('Emoji', () => {
  const emoji = mount(Emoji, {
    propsData: {
      emoji: 'point_up',
    },
  })

  it('works', () => {
    expect(emoji.isVueInstance()).toBeTruthy()
    expect(emoji.html()).toContain('emoji-set-apple emoji-type-image')
    expect(emoji.vm.emojiObject.id).toBe('point_up')
  })

  test('renders correctly', () => {
    expect(emoji.element).toMatchSnapshot()
  })

  test('renders correctly native emoji', () => {
    emoji.setProps({ native: true })
    expect(emoji.element).toMatchSnapshot()
  })
})
