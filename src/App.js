import EmojiGame from './components/EmojiGame'

import './App.css'

const emojisList = [
  {
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png',
    matched: false,
  },
  {
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-head-bandage-img.png',
    matched: false,
  },
  {
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-hugs-img.png',
    matched: false,
  },
  {
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-img.png',
    matched: false,
  },
  {
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-with-hand-infront-mouth-img.png',
    matched: false,
  },
  {
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-mask-img.png',
    matched: false,
  },
  {
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-silence-img.png',
    matched: false,
  },
  {
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-and-winking-eye-img.png',
    matched: false,
  },
  {
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/grinning-face-with-sweat-img.png',
    matched: false,
  },
  {
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-heart-eyes-img.png',
    matched: false,
  },
  {
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/grinning-face-img.png',
    matched: false,
  },
  {
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-star-eyes-img.png',
    matched: false,
  },
]

const App = () => <EmojiGame emojisList={emojisList} />

export default App
