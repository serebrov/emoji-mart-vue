import { mount } from '@vue/test-utils'

import data from '../data/all.json'
import { EmojiIndex } from '../src/utils/emoji-data'
import { Picker, NimblePicker } from '../src/components'

// const { click } = TestUtils.Simulate

/*
const {
  renderIntoDocument,
  scryRenderedComponentsWithType,
  findRenderedComponentWithType,
} = TestUtils
*/

/*
const render = (props = {}) => {
  const defaultProps = { data }
  return renderIntoDocument(<NimblePicker {...defaultProps} {...props} />)
}
*/

describe('Picker', () => {
  const picker = mount(Picker)

  it('works', () => {
    expect(picker.html()).toContain('woman-gesturing-ok')
  })
})

describe('NimblePicker', () => {
  let index = new EmojiIndex(data)
  const picker = mount(NimblePicker, {
    propsData: {
      data: index
    }
  })

  it('works', () => {
    expect(picker.html()).toContain('woman-gesturing-ok"')
  })

  /*
  describe('categories', () => {
    it('shows 10 by default', () => {
      subject = render()
      expect(subject.categories.length).toEqual(10)
    })

    it('will not show some based upon our filter', () => {
      subject = render({ emojisToShowFilter: (unified) => false })
      expect(subject.categories.length).toEqual(2)
    })

    it('maintains category ids after it is filtered', () => {
      subject = render({ emojisToShowFilter: (emoji) => true })
      const categoriesWithIds = subject.categories.filter(
        (category) => category.id,
      )
      expect(categoriesWithIds.length).toEqual(10)
    })
  })
  */
})
