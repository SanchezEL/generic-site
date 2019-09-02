import { connect } from 'react-redux'

export function addImage(imgUrl) {
  return {
    type: "ADDING_IMAGE",
    value: imgUrl
  }
}