export class PickerView {
  constructor(pickerComponent) {
    this._vm = pickerComponent
    this._data = pickerComponent.data
    this._perLine = pickerComponent.perLine

    this._categories = []
    this._categories.push(...this._data.categories())
    this._categories = this._categories.filter((category) => {
      return category.emojis.length > 0
    })

    this._categories[0].first = true
    Object.freeze(this._categories)

    this.activeCategory = this._categories[0]
    this.searchEmojis = null

    this.previewEmoji = null
    this.previewEmojiCategoryIdx = 0
    this.previewEmojiIdx = -1
  }

  onScroll() {
    const scrollElement = this._vm.$refs.scroll
    const scrollTop = scrollElement.scrollTop

    let activeCategory = this.filteredCategories[0]
    for (let i = 0, l = this.filteredCategories.length; i < l; i++) {
      let category = this.filteredCategories[i]
      let component = this._vm.getCategoryComponent(i)
      // The `-50` offset switches active category (selected in the
      // anchors bar) a bit eariler, before it actually reaches the top.
      if (component && component.$el.offsetTop - 50 > scrollTop) {
        break
      }
      activeCategory = category
    }
    this.activeCategory = activeCategory
  }

  get allCategories() {
    return this._categories
  }

  get filteredCategories() {
    if (this.searchEmojis) {
      return [
        {
          id: 'search',
          name: 'Search',
          emojis: this.searchEmojis,
        },
      ]
    }
    return this._categories.filter((category) => {
      let hasEmojis = category.emojis.length > 0
      return hasEmojis
    })
  }

  get previewEmojiCategory() {
    if (this.previewEmojiCategoryIdx >= 0) {
      return this.filteredCategories[this.previewEmojiCategoryIdx]
    }
    return null
  }

  onAnchorClick(category) {
    if (this.searchEmojis) {
      // No categories are shown when search is active.
      return
    }
    let i = this.filteredCategories.indexOf(category)
    let component = this._vm.getCategoryComponent(i)
    let scrollToComponent = () => {
      if (component) {
        let top = component.$el.offsetTop
        if (category.first) {
          top = 0
        }
        this._vm.$refs.scroll.scrollTop = top
      }
    }
    if (this._vm.infiniteScroll) {
      scrollToComponent()
    } else {
      this.activeCategory = this.filteredCategories[i]
    }
  }

  onSearch(value) {
    let emojis = this._data.search(value, this.maxSearchResults)
    this.searchEmojis = emojis

    this.previewEmojiCategoryIdx = 0
    this.previewEmojiIdx = 0
    this.updatePreviewEmoji()
  }

  onEmojiEnter(emoji) {
    this.previewEmoji = emoji
    this.previewEmojiIdx = -1
    this.previewEmojiCategoryIdx = -1
  }

  onEmojiLeave(emoji) {
    this.previewEmoji = null
  }

  onArrowLeft() {
    if (this.previewEmojiIdx > 0) {
      this.previewEmojiIdx -= 1
    } else {
      this.previewEmojiCategoryIdx -= 1
      if (this.previewEmojiCategoryIdx < 0) {
        this.previewEmojiCategoryIdx = 0
      } else {
        this.previewEmojiIdx =
          this.filteredCategories[this.previewEmojiCategoryIdx].emojis.length -
          1
      }
    }
    this.updatePreviewEmoji()
  }

  onArrowRight() {
    if (
      this.previewEmojiIdx <
      this.emojisLength(this.previewEmojiCategoryIdx) - 1
    ) {
      this.previewEmojiIdx += 1
    } else {
      this.previewEmojiCategoryIdx += 1
      if (this.previewEmojiCategoryIdx >= this.filteredCategories.length) {
        this.previewEmojiCategoryIdx = this.filteredCategories.length - 1
      } else {
        this.previewEmojiIdx = 0
      }
    }
    this.updatePreviewEmoji()
  }

  onArrowDown() {
    if (this.previewEmojiIdx == -1) {
      return this.onArrowRight()
    }

    const categoryLength = this.filteredCategories[this.previewEmojiCategoryIdx]
      .emojis.length

    let diff = this._perLine
    // If we jump to the next category and current category
    // has the last row shorter than `_perLine`, use the
    // last row length as diff, so we go straight down,
    // for example:
    //
    //   1 2 3 4 5 6
    //   7 8 9
    //   A B C D E F
    //
    // If we go down from `8`, we need to move 3 emojis right
    // to lend at `B` (and 3 is the length of the last row of
    // this category).
    // And if we used 6 instead (row length, `_perLine`), we would
    // lend up at `E`.
    if (this.previewEmojiIdx + diff > categoryLength) {
      diff = categoryLength % this._perLine
    }
    for (let i = 0; i < diff; i++) {
      this.onArrowRight()
    }
    this.updatePreviewEmoji()
  }

  onArrowUp() {
    let diff = this._perLine
    if (this.previewEmojiIdx - diff < 0) {
      if (this.previewEmojiCategoryIdx > 0) {
        // If the previous category is shorter and does not extend to
        // the end of row, use the last row length as diff, so
        // we go straight up, for example:
        //
        //   1 2 3 4 5
        //   6 7 8
        //   9 A B C D
        //
        // If we go up from `A`, we need to move 3 emojis left to get
        // to `7` (and 3 is the length of the last row of the previous
        // category).
        const prevCategoryLastRowLength =
          this.filteredCategories[this.previewEmojiCategoryIdx - 1].emojis
            .length % this._perLine
        // diff = this.previewEmojiIdx + prevCategoryLastRowLength
        diff = prevCategoryLastRowLength
      } else {
        diff = 0
      }
    }
    for (let i = 0; i < diff; i++) {
      this.onArrowLeft()
    }
    this.updatePreviewEmoji()
  }

  updatePreviewEmoji() {
    this.previewEmoji = this.filteredCategories[
      this.previewEmojiCategoryIdx
    ].emojis[this.previewEmojiIdx]

    this._vm.$nextTick(() => {
      // Scroll the view if the `previewEmoji` goes out of the visible area.
      const scrollEl = this._vm.$refs.scroll

      // Note: it would be more Vue-ish to mark all emojis with `ref`s
      // and then do something similar here to what we do in the
      // `getCategories` instead of using `querySelector` directly,
      // but I am not sure if having many refs would affect the performance
      // (it might, so I use `querySelector` for now).
      const emojiEl = scrollEl.querySelector('.emoji-mart-emoji-selected')

      const scrollHeight = scrollEl.offsetTop - scrollEl.offsetHeight
      if (
        emojiEl &&
        emojiEl.offsetTop + emojiEl.offsetHeight >
          scrollHeight + scrollEl.scrollTop
      ) {
        scrollEl.scrollTop += emojiEl.offsetHeight
      }
      if (emojiEl && emojiEl.offsetTop < scrollEl.scrollTop) {
        scrollEl.scrollTop -= emojiEl.offsetHeight
      }
    })
  }

  emojisLength(categoryIdx) {
    if (categoryIdx == -1) {
      return 0
    }
    return this.filteredCategories[categoryIdx].emojis.length
  }
}
