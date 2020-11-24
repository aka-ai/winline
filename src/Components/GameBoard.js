import React, { Component } from 'react'
import Square from './Square'
class GameBoard extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <h1>playerName</h1>
        {this.props.board.map((row, idx) => {
          return (
            <div key={idx} className='board-row'>
              {row.map((cell, idx) => {
                // cell >> {id: [[],[]], color: ''}
                return (
                  <Square
                    key={idx}
                    id={cell.id}
                    color={cell.color}
                    onClick={() => this.props.onClick(cell.id, [cell.color])}
                  />
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