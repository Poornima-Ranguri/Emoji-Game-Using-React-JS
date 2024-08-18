import {Component} from 'react'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    clickedEmojisList: [],
    topScore: 0,
    score: 0,
    isWon: false,
    emojisList: [],
  }

  onResettingGame = result => {
    const {topScore} = this.state

    if (topScore > result) {
      this.setState({topScore: result})
    } else {
      this.setState(prevState => ({topScore: prevState.topScore}))
    }

    this.setState({
      score: 0,
      emojisList: [],
      isWon: false,
      clickedEmojisList: [],
    })
  }

  finishGameAndSetTopScore = length => {
    const {topScore} = this.state

    if (topScore > length) {
      this.setState({topScore: length})
    }

    this.setState(prevState => ({isWon: !prevState.isWon}))
  }

  shuffleEmoji = () => {
    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }

    this.setState({emojisList: shuffledEmojisList()})
  }

  clickEmoji = id => {
    const {clickedEmojisList, emojisList} = this.state

    const isEmojiPresent = clickedEmojisList.includes(id)

    const clickedEmojisLength = clickedEmojisList.length

    if (isEmojiPresent) {
      this.finishGameAndSetTopScore(clickedEmojisLength)
    } else {
      if (emojisList.length - 1 === clickedEmojisLength) {
        this.finishGameAndSetTopScore(emojisList.length)
      }

      this.setState(prevState => ({
        clickedEmojisList: [...prevState.clickedEmojisList, id],
        score: prevState.score + 1,
      }))
    }
  }

  render() {
    const {emojisList} = this.props

    const {isWon, score, topScore} = this.state

    return (
      <div className="home">
        <NavBar score={score} topScore={topScore} isWon={isWon} />
        <div className="card-container">
          {isWon ? (
            <div className="card-container-show">
              <WinOrLoseCard
                isWon={isWon}
                score={score}
                topScore={topScore}
                onResettingGame={this.onResettingGame}
              />
            </div>
          ) : (
            <ul className="emoji-container-show">
              {emojisList.map(eachEmoji => (
                <EmojiCard
                  key={eachEmoji.id}
                  emojiDetails={eachEmoji}
                  clickEmoji={this.clickEmoji}
                  shuffleEmoji={this.shuffleEmoji}
                />
              ))}
            </ul>
          )}
        </div>
        <div className="poori">
          <h1>Poornima Ranguri</h1>
        </div>
      </div>
    )
  }
}

export default EmojiGame
