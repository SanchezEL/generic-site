import { connect } from 'react-redux'

export function addImage(imgUrl) {
  return {
    type: "ADDING_IMAGE",
    value: imgUrl
  }
}
export function setStyles(styles) {
  console.log('action value of setStyles', styles)
  return {
    type: "SET_STYLES",
    value: styles
  }
}