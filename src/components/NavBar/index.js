import './index.css'

const NavBar = props => {
  const {score, topScore, isWon} = props

  const textClassName = score === 12 ? 'text-hide' : 'text-show'

  return (
    <div className="app-container">
      <div className="app-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            className="logo"
          />
          <h1 className="logo-text">Emoji Game</h1>
        </div>

        {isWon ? (
          ''
        ) : (
          <div className={textClassName}>
            <p className="para">Score: {score}</p>
            <p className="para">Top Score: {topScore}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default NavBar
