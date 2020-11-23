import { computeHeadingLevel } from '@testing-library/react';
import React, { Component } from 'react'
import Square from './Square'
class GameBoard extends Component {
  render() {
    return (
      <div>
        <p>This is the gameboard</p>
        <Square />
      </div>
    )
  }
}

export default GameBoard