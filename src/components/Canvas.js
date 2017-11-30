import React, { Component } from 'react'
import { Layer, Stage, Image } from 'react-konva'
import { Place } from '../agent'

class Canvas extends Component {
  state = {
    image: null
  }
  async componentDidMount() {
    const board = await Place.board()
    //console.log(board)
    const image = new window.Image()
    const url = URL.createObjectURL(board)
    image.src = url
    image.onload = () => {
      this.setState({
        image: image
      })
    }
  }

  render() {
    return (
      <div>
        {this.state.image ? (
          <Stage width={1000} height={1000}>
            <Layer>
              <Image image={this.state.image} />
            </Layer>
          </Stage>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    )
  }
}

export default Canvas
