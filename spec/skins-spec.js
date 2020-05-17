import { mount } from '@vue/test-utils'

import data from '../data/all.json'
import { EmojiIndex } from '../src/utils/emoji-data'
import { Picker, Skins } from '../src/components'

describe('emjois skin', () => {
  let index = new EmojiIndex(data)
  const picker = mount(Picker, {
    propsData: {
      data: index,
      skin: 6,
    },
  })

  it('emoji skin tone can be changed dynamically', () => {
    // Find the Skins component, make sure it is closed.
    let skins = picker.find(Skins)
    expect(skins.vm.opened).toEqual(false)
    // Find the +1 emoji and make sure skin tone is set to 6.
    let emojiSkin6 = picker.find('[data-title="+1"]')
    emojiSkin6.trigger('click')
    let eventsBefore = picker.emitted().select
    expect(eventsBefore.length).toBe(1)
    let emojiDataSkin6 = eventsBefore[0][0]
    expect(emojiDataSkin6).toBe(index.emoji('+1').getSkin(6))
    expect(emojiDataSkin6.native).toBe('👍🏿')

    // Click the Skins component, it should be open now.
    let skin_6 = skins.find('.emoji-mart-skin-tone-6')
    skin_6.trigger('click')
    expect(skins.vm.opened).toEqual(true)

    // Click the skin 2 option.
    let skin_3 = skins.find('.emoji-mart-skin-tone-3')
    skin_3.trigger('click')

    // Check that 'change' event was emmited.
    let skinEvents = skins.emitted().change
    expect(skinEvents.length).toBe(1)
    let skinTone = skinEvents[0][0]
    expect(skinTone).toEqual(3)

    // Find the +1 emoji and make sure skin tone has changed for the picker.
    let emojiSkin3 = picker.find('[data-title="+1"]')
    emojiSkin3.trigger('click')
    let eventsAfter = picker.emitted().select
    expect(eventsAfter.length).toBe(2)
    let emojiDataSkin3 = eventsAfter[1][0]
    expect(emojiDataSkin3).toBe(index.emoji('+1').getSkin(3))
    expect(emojiDataSkin3.native).toBe('👍🏼')
  })
})

describe('emjois skin data', () => {
  let index = new EmojiIndex(data)
  const picker = mount(Picker, {
    propsData: {
      data: index,
      skin: 6,
    },
  })

  it('emoji skin tone is returned in the emoji data', () => {
    // Find the Skins component, make sure it is closed.
    let skins = picker.find(Skins)

    // Find the +1 emoji and make sure skin tone is set to 6.
    let emojiSkin6 = picker.find('[data-title="+1"]')
    emojiSkin6.trigger('click')

    let eventsBefore = picker.emitted().select
    expect(eventsBefore.length).toBe(1)
    let emojiDataSkin6 = eventsBefore[0][0]

    // Verify skin_tone and colons in emoji properties.
    expect(emojiDataSkin6.skin).toBe(6)
    expect(emojiDataSkin6.colons).toBe(':+1::skin-tone-6:')
  })
})
