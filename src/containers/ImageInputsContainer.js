import { connect } from 'react-redux';
import { addImage } from "../actions/actions";
import ImageInputs from "../components/ImageInputs";


const mapStateToProps = (state) => {
  console.log('imginput', state)
  return {
    images: state.addImage
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addImage: (imgUrl) => dispatch(addImage(imgUrl))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageInputs);
