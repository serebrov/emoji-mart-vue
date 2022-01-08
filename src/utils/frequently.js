import store from './store'

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

let frequently, initialized
let defaults = {}

function init() {
  initialized = true
  frequently = store.get('frequently')
}

function add(emoji) {
  if (!initialized) init()
  var { id } = emoji

  frequently || (frequently = defaults)
  frequently[id] || (frequently[id] = 0)
  frequently[id] += 1

  store.set('last', id)
  store.set('frequently', frequently)
}

function get(maxNumber) {
  if (!initialized) init()
  if (!frequently) {
    defaults = {}

    const result = []

    let defaultLength = Math.min(maxNumber, DEFAULTS.length)
    for (let i = 0; i < defaultLength; i++) {
      defaults[DEFAULTS[i]] = parseInt((defaultLength - i) / 4, 10) + 1
      result.push(DEFAULTS[i])
    }

    return result
  }

  const quantity = maxNumber
  const frequentlyKeys = []

  for (let key in frequently) {
    if (frequently.hasOwnProperty(key)) {
      frequentlyKeys.push(key)
    }
  }

  const sorted = frequentlyKeys
    .sort((a, b) => frequently[a] - frequently[b])
    .reverse()
  const sliced = sorted.slice(0, quantity)

  const last = store.get('last')

  if (last && sliced.indexOf(last) == -1) {
    sliced.pop()
    sliced.push(last)
  }

  return sliced
}

export default { add, get }
