import { connect } from 'react-redux';
import { addImage } from "../actions/actions";
import Images from "../components/Images";


const mapStateToProps = (state) => {
  console.log('images', state)
  return {
    images: state.addImage
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addImage: (imgUrl) => dispatch(addImage(imgUrl))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Images);
