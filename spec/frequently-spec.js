import { mount } from '@vue/test-utils'

import { Picker, Category } from '../src/components'
import data from '../data/all.json'
import { EmojiIndex } from '../src/utils/emoji-data'

describe('Picker frequnt category', () => {
  let index = new EmojiIndex(data)
  const picker = mount(Picker, {
    propsData: {
      data: index,
    },
  })

  it('Has default emojis initially', () => {
    let categories = picker.findAllComponents(Category)
    expect(categories.at(0).vm.name).toBe('Recent')
    expect(categories.at(0).vm.emojis.length).toBe(16)

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

    for (let idx in categories.at(0).vm.emojis) {
      let emoji = categories.at(0).vm.emojis[idx]
      expect(emoji.id).toBe(DEFAULTS[idx])
    }
  })

  it('Picks up frequent emoji', (done) => {
    let testClicks = {
      nerd_face: 25,
      space_invader: 24,
      robot_face: 23,
    }
    for (let id in testClicks) {
      let emoji = picker.find(`[data-title="${id}"]`)
      let numClicks = testClicks[id]
      for (let num = 0; num < numClicks; num++) {
        emoji.trigger('click')
      }
    }

    expect(window.localStorage['emoji-mart.last']).toBe(
      JSON.stringify('robot_face'),
    )
    expect(window.localStorage['emoji-mart.frequently']).toEqual(
      JSON.stringify({
        '+1': 5,
        grinning: 4,
        kissing_heart: 4,
        heart_eyes: 4,
        laughing: 4,
        stuck_out_tongue_winking_eye: 3,
        sweat_smile: 3,
        joy: 3,
        scream: 3,
        disappointed: 2,
        unamused: 2,
        weary: 2,
        sob: 2,
        sunglasses: 1,
        heart: 1,
        poop: 1,
        nerd_face: 25,
        space_invader: 24,
        robot_face: 23,
      }),
    )

    // Frequently used category should be updated for the new picker.
    const index = new EmojiIndex(data)
    const newPicker = mount(Picker, {
      propsData: {
        data: index,
      },
    })
    // Wait for picker to be rendered.
    picker.vm.$nextTick(() => {
      let categories = newPicker.findAllComponents(Category)
      let recent = categories.at(0).vm

      expect(recent.emojis[0].id).toBe('nerd_face')
      expect(recent.emojis[1].id).toBe('space_invader')
      expect(recent.emojis[2].id).toBe('robot_face')

      done()
    })
  })
})
