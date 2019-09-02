import React, { Component } from 'react'
import Input from '@material-ui/core/Input'

export default class ImageInputs extends Component {
  constructor(props){
    super(props)
    this.state = {
      text: '',
      imgUrl: '',
      searched: false
    }
  }
  render() {
    console.log('props in inputs: ', this.props)
      return (
        <div className='imgInputs'>
          <Input 
              onChange={(e)=>{this.setState({text: e.target.value})}} onKeyUp={ (e)=>{
                  console.log('imgUrl: ', this.state.imgUrl, 'text: ', this.state.text)
                  if(e.key === "Enter" && this.state.text){
                    console.log('you got through')
                    let tempText = this.state.text
                    this.setState({
                      imgUrl: tempText,
                      searched: true
                    })
                    console.log('before add image', this.state.text)
                    this.props.addImage(this.state.text)
                  }
                }
              }
              placeholder="Image address.." />
          
          {/* <img src={this.state.imgUrl}/> */}
        </div>
      )
     
    }
    
  
}
