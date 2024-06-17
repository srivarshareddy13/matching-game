import {Component} from 'react'
import './index.css'
import EmojiCard from '../EmojiCard'

const apiConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
}

class EmojiGame extends Component {
  state = {
    apiStatus: apiConstants.initial,
    choiceOne: null,
    choiceTwo: null,
    setChoiceOne: null,
    setChoiceTwo: null,
    cards: [],
    score: 0,
    time: 0,
    name: '',
  }

  onClickPlay = () => {
    const {name} = this.state
    if (name !== undefined) {
      this.setState({apiStatus: apiConstants.inProgress})
    } else {
      this.setState({apiStatus: apiConstants.initial})
    }
    this.getShuffledEmojiList()
  }

  renderWelcome = () => {
    const {name} = this.state
    return (
      <div className="container">
        <h1 className="heading">React Tiles</h1>
        <div className="card-container">
          <h1 className="heading">Enter Your Name</h1>
          <input type="text" className="name" value={name}/>
          <button type="button" className="button" onClick={this.onClickPlay}>
            Play
          </button>
        </div>
      </div>
    )
  }

  successPage = () => {
    const {score, name, time} = this.state

    return (
      <div className="container">
        <h1 className="heading">React Tiles</h1>
        <div className="">
          <p className="text">Score: {score}</p>
          <p className="text">Time Taken: {time}</p>
        </div>
        <div className="card-container">
          <p>Welcome {name}</p>
          <h1 className="heading">Game Finished!</h1>
          <div>
            <p className="final-text">Score: {score}</p>
            <p className="final-text">Time Taken: {time}</p>
          </div>
        </div>
      </div>
    )
  }

  getShuffledEmojiList = () => {
    const {emojisList} = this.props
    const shuffledEmojis = [...emojisList, ...emojisList]

    shuffledEmojis.sort(() => Math.random() - 0.5)
    shuffledEmojis.map(card => ({...card, id: Math.random()}))
    this.setState({cards: shuffledEmojis})
  }

  resetTurn = () => {
    this.setState({setChoiceOne: null})
    this.setState({setChoiceTwo: null})
  }

  handleChoice = card => {
    const {choiceOne, choiceTwo, setChoiceOne, setChoiceTwo} = this.state
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)

    if (choiceOne && choiceTwo) {
      if (choiceOne.emojiUrl === choiceTwo.emojiUrl) {
        this.setState(prevState => {
          return prevState.map(card => {
            if (card.emojiUrl === choiceOne.emojiUrl) {
              return {...card, matched: true}
            } else {
              return card
            }
          })
        })
        this.setState(prevState => {
          prevState.score + 1
        })
        this.resetTurn()
      } else {
        this.resetTurn()
      }
    }
  }

  gameBoard = () => {
    const {cards} = this.state

    return (
      <div className="card-grid">
        {cards.map(each => (
          <div className="card">
            <EmojiCard
              card={each}
              key={each.id}
              handleChoice={this.handleChoice}
            />
          </div>
        ))}
      </div>
    )
  }

  renderGame = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstants.initial:
        return this.renderWelcome()
      case apiConstants.inProgress:
        return this.gameBoard()
      case apiConstants.success:
        return this.successPage()
      default:
        return null
    }
  }

  render() {
    return <div className="app-container">{this.renderGame()}</div>
  }
}
export default EmojiGame
