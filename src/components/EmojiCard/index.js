import './index.css'

const EmojiCard = props => {
  const {emojiDetails, clickEmoji, shuffleEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const emojiClicks = () => {
    clickEmoji(id)
    shuffleEmoji(id)
  }

  return (
    <div>
      <li key={id} className="emoji-container">
        <button type="button" className="emoji-btn" onClick={emojiClicks}>
          <img alt={emojiName} src={emojiUrl} className="emoji-icon" />
        </button>
      </li>
    </div>
  )
}

export default EmojiCard
