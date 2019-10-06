import React, { Component } from 'react'
import { SketchPicker } from 'react-color';

export default class EditStyles extends Component {
  constructor(props){
    super(props)
    this.state = {
      colorPrimary: 'BF94E4'
    }
  }
  handleChangeComplete = (color) => {
    console.log('Edit Styles Component props', this.props)
    this.setState({ colorPrimary: color.hex });
    this.props.setStyles(this.state)
  };
  render() {
    console.log(this.state)
    return (
         <SketchPicker
        color={ this.state.background }
        onChangeComplete={ this.handleChangeComplete }
      />
    )
  }
}
