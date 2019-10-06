import React, { Component } from 'react'
import { SketchPicker } from 'react-color';

export default class EditStyles extends Component {
  constructor(props){
    super(props)
    this.state = {
      colorPrimary: '#BF94E4',
      buttonColor: '#FFFF00'
    }
  }
  handleChangeComplete = (color) => {
    console.log('Edit Styles Component props', this.props)
    this.setState({ colorPrimary: color.hex });
    this.props.setStyles(this.state)
  };
  somethingElse = (color) => {
    console.log('Button Styles Component props', this.props)
    this.setState({ buttonColor: color.hex });
    this.props.setStyles(this.state)
  };
  
  render() {
    console.log(this.state)
    return (
      <div>
        <SketchPicker
          color={ this.state.background }
          onChangeComplete={ this.handleChangeComplete }
        />
        <SketchPicker
          color={ this.state.background }
          onChangeComplete={ this.somethingElse }
        />
      </div>
    )
  }
}
