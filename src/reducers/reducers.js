import { combineReducers } from 'redux'

const addImage =(state =[], action)=>{
  console.log('this action', action)
  switch(action.type){
    case "ADDING_IMAGE":
      return [...state, action.value]
    default:
      return state
  }
}
const setStyles = (state = {colorPrimary: '#BF94E4'}, action) =>{
  console.log('style action', action)
  switch(action.type){
    case "SET_STYLES":
      return action.value
    default:
      return state
  }
}

export default combineReducers({
  addImage,
  setStyles
})