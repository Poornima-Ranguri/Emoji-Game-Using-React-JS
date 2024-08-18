import './index.css'

const WinOrLoseCard = props => {
  const {score, onResettingGame} = props

  const wonOrLoseImageUrl =
    score === 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const wonOrLoseText = score === 12 ? 'Won' : 'Lose'

  const playAgain = () => {
    onResettingGame(score)
  }

  return (
    <div className="won-card">
      <div className="text-container">
        <h1 className="heading">You {wonOrLoseText}</h1>
        <p className="parag">Best Score</p>
        <p className="score">{score}/12</p>
        <button className="btn-play" type="button" onClick={playAgain}>
          Play Again
        </button>
      </div>
      <div className="image-container">
        <img src={wonOrLoseImageUrl} alt="win or lose" className="image-won" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
