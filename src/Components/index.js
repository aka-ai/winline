import React, { Component } from 'react'
import GameBoard from './GameBoard'
import NextColors from './NextColors'
import board from './utilities/board'
class Game extends Component {
  constructor() {
    super()
    this.colors = ['red', 'yellow', 'green', 'blue', 'pink', 'gray', 'brown']
    this.state = {
      board: board,
      nextRandomColors: this.getRandomColors(),
      colorPicked: null,
      cellPicked: null
    }
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
    this.setState({ board })
  }
  componentDidMount() {
    const cells = this.getNextRandomCells()
    const colors = this.state.nextRandomColors
    const nextColors = this.getRandomColors()
    this.setState({
      nextRandomColors: nextColors
    })
    this.writeCells(cells, colors)
  }
  handleClick(cell, color) {
    //cell >> [int, int]
    //color >> [str]
    if (color[0] !== null) {
      //if the clicked cell has color, store picked color and cell
      this.setState({ 
        colorPicked: color[0],
        cellPicked: cell
      })
    } else {
      //if the clicked cell doesn't have color, check if there's previous picked color, if so, write color on that cell
      if (color[0] === null && this.state.colorPicked !== null) {
        this.writeCells([cell], [this.state.colorPicked])
        this.writeCells([this.state.cellPicked], [null])
        this.setState({
          colorPicked: null,
          cellPicked: null,
          nextRandomColors: this.getRandomColors(),
        })
        this.writeCells(this.getNextRandomCells(), this.getRandomColors())
      }
    }
  }

  render() {
    console.log('index', this.state.nextRandomColors)
    return (
      <React.Fragment>
          <div>score</div>
          <GameBoard 
            board={this.state.board} 
            onClick={(cell, color) => this.handleClick(cell, color)}
          />
          <NextColors colors={this.state.nextRandomColors} />
      </React.Fragment>
    )
  }
}
export default Game