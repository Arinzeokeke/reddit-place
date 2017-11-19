import React, { Component } from 'react'
import { Layer, Stage, Image } from 'react-konva'

class Canvas extends Component {
  state = {
    image: null
  }
  componentDidMount() {
    const image = new window.Image()
    image.src = 'http://konvajs.github.io/assets/yoda.jpg'
    image.onload = () => {
      this.setState({
        image: image
      })
    }
  }

  render() {
    return <Image image={this.state.image} />
  }
}
