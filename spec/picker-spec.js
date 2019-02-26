import { mount } from '@vue/test-utils'

import data from '../data/all.json'
import { EmojiIndex } from '../src/utils/emoji-data'
import { Picker, NimblePicker, Category } from '../src/components'

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
  // const picker = mount(Picker, {
  //   stubs: ['DynamicScroller']
  // })

  it('works', () => {
    expect(picker.isVueInstance()).toBeTruthy()
    expect(picker.html()).toContain('woman-gesturing-ok')
  })

  test('renders correctly', () => {
    expect(picker.element).toMatchSnapshot()
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

  it('shows 5 categories by default', () => {
    // Due to the virtual scroller, not all the categories
    // are rendered at once
    expect(picker.findAll(Category).length).toBe(5)
  })

})

/*
describe('categories', () => {
  let index = new EmojiIndex(data, {
    emojisToShowFilter: (emoji) => {
      return emoji.short_names[0].match(/[0-9+-]+/) !== null
    }
  })
  // let index = new EmojiIndex(data)
  const picker = mount(Picker, {
    propsData: {
      data: index,
      // Set idle emoji (in preview) to "+1"
      emoji: '+1'
    }
  })

  it('will not show some based upon our filter', () => {
    expect(picker.findAll(Category).length).toBe(5)
    // Filter out all emojis, except numeric like +1
    // // debugger;
    // // let result = picker.findAll(Category)[0]
    // expect(picker.findAll(Category).length).toBe(2)
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
