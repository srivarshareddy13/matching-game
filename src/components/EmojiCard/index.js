// Write your code here.
import './index.css'
const EmojiCard = props => {
  const {card, handleChoice, flipped} = props
  const {emojiUrl} = card

  const handleClick = () => {
    handleChoice(card)
  }

  return (
    <div className="card">
      <div>
        <img className="front back" src={emojiUrl} />
        <img className="back" onClick={handleClick} />
      </div>
    </div>
  )
}
export default EmojiCard
