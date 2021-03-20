import { mount } from '@vue/test-utils'

import data from '../data/all.json'
import { EmojiIndex, EmojiView } from '../src/utils/emoji-data'
import { Emoji } from '../src/components'

describe('Emoji', () => {
  const index = new EmojiIndex(data)
  const emoji = mount(Emoji, {
    propsData: {
      data: index,
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

  it('has correct emoji and emoji view', () => {
    let expectedEmoji = index.emoji('point_up')
    let expectedView = new EmojiView(expectedEmoji, 1, 'apple', true, undefined)
    expect(emoji.vm.emojiObject).toEqual(expectedEmoji)
    expect(emoji.vm.view).toEqual(expectedView)
  })

  it('has correct sanitized data', () => {
    expect(emoji.vm.sanitizedData).toEqual({
      colons: ':point_up:',
      emoticons: undefined,
      id: 'point_up',
      name: 'White Up Pointing Index',
      native: '☝️',
      skin: 1,
      unified: '261d-fe0f',
    })
  })

  it('emits click event', () => {
    emoji.trigger('click')
    let events = emoji.emitted().click
    expect(events.length).toBe(1)
    let emojiData = events[0][0]
    expect(emojiData).toEqual(index.emoji('point_up'))
  })

  it('emits mouseenter event', () => {
    emoji.trigger('mouseenter')
    let events = emoji.emitted().click
    expect(events.length).toBe(1)
    let emojiData = events[0][0]
    expect(emojiData).toEqual(index.emoji('point_up'))
  })

  it('emits mouseleave event', () => {
    emoji.trigger('mouseleave')
    let events = emoji.emitted().click
    expect(events.length).toBe(1)
    let emojiData = events[0][0]
    expect(emojiData).toEqual(index.emoji('point_up'))
  })
})

describe('Emoji native', () => {
  const index = new EmojiIndex(data)
  const emoji = mount(Emoji, {
    propsData: {
      data: index,
      native: true,
      emoji: 'point_up',
    },
  })

  test('renders correctly native emoji', () => {
    expect(emoji.element).toMatchSnapshot()
  })

  it('has correct emoji and emoji view', () => {
    let expectedEmoji = index.emoji('point_up')
    let expectedView = new EmojiView(expectedEmoji, 1, 'apple', true, undefined)
    expect(emoji.vm.emojiObject).toEqual(expectedEmoji)
    expect(emoji.vm.view).toEqual(expectedView)
  })
})

describe('Emoji title', () => {
  const index = new EmojiIndex(data)
  const emoji = mount(Emoji, {
    propsData: {
      data: index,
      emoji: 'point_up',
    },
  })

  it('has no title by default', () => {
    expect(emoji.vm.title).toBe(null)
  })

  it('has short name as a title if tooltip property is set to true', () => {
    emoji.setProps({ tooltip: true })
    expect(emoji.vm.title).toBe('point_up')
  })

  it('does not have title if tooltop property is set to false', () => {
    emoji.setProps({ tooltip: false })
    expect(emoji.vm.title).toBe(null)
  })
})

describe('Emoji size', () => {
  const index = new EmojiIndex(data)
  const emoji = mount(Emoji, {
    propsData: {
      data: index,
      emoji: 'point_up',
    },
  })

  it('has no size by default', () => {
    expect(emoji.vm.size).toBe(null)
    expect(emoji.vm.view.cssStyle).toEqual({
      backgroundPosition: '94.74% 12.28%',
    })
  })

  it('size can be set', () => {
    emoji.setProps({ size: 32 })
    expect(emoji.vm.size).toBe(32)
    expect(emoji.vm.view.cssStyle).toEqual({
      backgroundPosition: '94.74% 12.28%',
      height: '32px',
      width: '32px',
    })
  })
})
