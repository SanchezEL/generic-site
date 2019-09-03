import React, { Component } from 'react'

export default class Images extends Component {
  constructor(props){
    super(props)
    this.state = {
      slideIndex: 0
    }
  }
  
  changeIndex(n){
    console.log(n)
    let tempIndex = this.state.slideIndex + n
    if(tempIndex > this.props.images.length-1){
      tempIndex = 0;
    }
    if(tempIndex < 0){
      tempIndex = this.props.images.length-1
    }
    if(tempIndex !== this.state.slideIndex){
      console.log(this.state)
      this.setState({slideIndex: tempIndex})
    }
    console.log('changing index')
  }
  render() {
    console.log('props in images', this.props)
    return (
      <div>
        <div className="slideshow-container">
          <div className="slides fade">
            <img src={this.props.images[this.state.slideIndex]} height='200' width='200'/>
          </div>
        </div>

        <a className="prev" onClick={() => {this.changeIndex(-1)}}>❮</a>
        <a className="next" onClick={() => {this.changeIndex(1)}}>❯</a>
      </div>
    )
  }
}

