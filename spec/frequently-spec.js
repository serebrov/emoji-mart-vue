import { mount } from '@vue/test-utils'

import { Picker, Category } from '../src/components'

describe('Picker frequnt category', () => {
  const picker = mount(Picker)

  it('Has default emojis initially', () => {
    let categories = picker.findAll(Category)
    expect(categories.at(1).vm.name).toBe('Recent')
    expect(categories.at(1).vm.emojis.length).toBe(16)

    const DEFAULTS = [
      '+1',
      'grinning',
      'kissing_heart',
      'heart_eyes',
      'laughing',
      'stuck_out_tongue_winking_eye',
      'sweat_smile',
      'joy',
      'scream',
      'disappointed',
      'unamused',
      'weary',
      'sob',
      'sunglasses',
      'heart',
      'hankey',
    ]

    for (let idx in categories.at(1).vm.emojis) {
      let emoji = categories.at(1).vm.emojis[idx]
      expect(emoji.id).toBe(DEFAULTS[idx])
    }
  })

  test('renders correctly', () => {
    expect(picker.element).toMatchSnapshot()
  })
})
