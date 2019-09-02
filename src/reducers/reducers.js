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

export default combineReducers({
  addImage
})