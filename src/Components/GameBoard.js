import React, { Component } from 'react'
import Square from './Square'
class GameBoard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      board: new Array(9).fill(0)
    }
  }
  render() {
    return (
      <div>
        {this.props.board.map((row, idx) => {
          return (
            <div key={idx} className='board-row'>
              {row.map((cell, idx) => {
                return (
                  <Square key={idx} id={cell.id} color={cell.color}  />
                )
              })}
            </div>
          )
        })}
      </div>
    )
  }
}

export default GameBoard