import React, { Component } from 'react'
import GameBoard from './GameBoard'
class Game extends Component {
  constructor() {
    super()
    this.colors = ['red', 'yellow', 'green', 'blue', 'pink', 'gray', 'brown']
    this.state = {
      nextRandomColors: this.getRandomColors(),
      board: this.generateBoardWithId(),
      // nextRandomCells: 
    }
  }
  generateBoardWithId() {
    //each cell in the board has {id, color}
    const board = []
    for (let i = 0; i <= 9; i++) {
      const arr = []
      for (let j = 0; j <= 9; j++) {
        arr.push({id: [[i],[j]], color: null})
      }
      board.push(arr)
    }
    return board
  }
  getRandomColors() {
    const randomColors = []
    for (let i = 0; i < 3; i++) {
      randomColors.push(this.colors[Math.floor(Math.random() * this.colors.length)])
    }
    return randomColors
  }
  getNextRandomCells() {
    const randomCells = []
    while (randomCells.length < 3) {
      const row = Math.floor(Math.random() * 9)
      const column = Math.floor(Math.random() * 9)
      if (this.state.board[row][column].color === null) {
        randomCells.push([row, column])
      }
    }
    return randomCells
  }
  writeCells(cells, colors) {
    //cells = [[row, col], [row, col]...]
    const board = this.state.board.slice()
    cells.forEach(([row, column]) => {
      board[row][column].color = colors.pop()
    })
    this.setState({board})
  }
  componentDidMount() {
    const cells = this.getNextRandomCells()
    const colors = this.getRandomColors()
    this.writeCells(cells, colors)
  }

  render() {
    console.log(this.state.board)
    return (
      <div>
        <GameBoard randomColors={this.state.nextRandomColors} board={this.state.board} />
      </div>
    )
  }
}
export default Game