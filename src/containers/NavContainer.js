import { connect } from 'react-redux'
import { setStyles } from "../actions/actions";
import Nav from "../components/Nav";

const mapStateToProps = (state) => {
  console.log('styles ahhh', state)
  return {
    styles: state.setStyles
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setStyles: (styles) => dispatch(setStyles(styles))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
