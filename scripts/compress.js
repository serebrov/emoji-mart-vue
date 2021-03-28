const mapping = {
  name: 'a',
  unified: 'b',
  non_qualified: 'c',
  has_img_apple: 'd',
  has_img_google: 'e',
  has_img_twitter: 'f',
  has_img_facebook: 'h',
  keywords: 'j',
  sheet: 'k',
  emoticons: 'l',
  text: 'm',
  short_names: 'n',
  added_in: 'o',
}

const compress = (emoji) => {
  emoji.short_names = emoji.short_names.filter((short_name) => {
    return short_name !== emoji.short_name
  })
  delete emoji.short_name

  emoji.sheet = [emoji.sheet_x, emoji.sheet_y]
  delete emoji.sheet_x
  delete emoji.sheet_y

  emoji.added_in = parseInt(emoji.added_in)
  if (emoji.added_in === 6) {
    delete emoji.added_in
  }

  for (let key in mapping) {
    emoji[mapping[key]] = emoji[key]
    delete emoji[key]
  }

  for (let key in emoji) {
    let value = emoji[key]

    if (Array.isArray(value) && !value.length) {
      delete emoji[key]
    } else if (typeof value === 'string' && !value.length) {
      delete emoji[key]
    } else if (value === null) {
      delete emoji[key]
    }
  }
}

module.exports = { compress }
