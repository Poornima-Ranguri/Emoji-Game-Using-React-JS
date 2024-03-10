/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

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
      isWon: false,
      emojisList: [],
      clickedEmojisList: [],
    })
  }

  finishGameAndSetTopScore = length => {
    const {topScore} = this.state

    if (length > topScore) {
      this.setState({topScore: length})
    }

    this.setState(prevState => ({isWon: !prevState.isWon}))

    console.log(length)
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
                onResttingGame={this.onResettingGame}
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
      </div>
    )
  }
}

export default EmojiGame
