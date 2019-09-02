import React, { Component } from 'react'

export default class Images extends Component {
  constructor(props){
    super(props)
  }
  render() {
    console.log('props in images', this.props)
    return (
      <div>
        {
          this.props.images.map((image,i) => {
            console.log('this image: ', image)
            return(
              <div key={i}>
                <img src={image}/>
              </div>
            )
          })
        }
      </div>
    )
  }
}
