import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import '../App.css'

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
      <div className="slideshow-main">
        <div className="slideshow-container">
          <img className="slides" src={this.props.images[this.state.slideIndex]}/>
        </div>

        <Button className="prev" color="primary" onClick={() => {this.changeIndex(-1)}}>❮</Button>
        <Button className="next" color="primary" onClick={() => {this.changeIndex(1)}}>❯</Button>
      </div>
    )
  }
}

