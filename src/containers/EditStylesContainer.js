import { connect } from 'react-redux'
import { setStyles } from "../actions/actions";
import EditStyles from "../components/EditStyles";

const mapStateToProps = (state) => {
  console.log('styles in Edit Styles', state)
  return {
    styles: state.setStyles
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setStyles: (styles) => dispatch(setStyles(styles))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditStyles);
