import React, { Component } from 'react'
import GameBoard from './GameBoard'
class Game extends Component {
  constructor() {
    super()

  }
  render() {
    return (
      <div>
        <GameBoard />
      </div>
    )
  }
}
export default Game