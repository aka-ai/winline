import React, { Component } from 'react'
import Square from './Square'
class NextColors extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nextColorsBoard: this.props.colors
    }
  }

  render() {
    console.log('nextColors', this.props.colors)
    return (
      <div>
        <p>next</p>
        {this.props.colors.map((color, idx) => {
          return (
            <Square key={idx} id={idx} color={color} />
          )
        })}
      </div>
    )
  }
}

export default NextColors