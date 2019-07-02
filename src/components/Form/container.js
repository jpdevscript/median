import { connect } from 'react-redux';
import Form from './Form.Index.js';
import { inputValueChange, inputValueSubmit, displayError } from './actions';

const mapStateToProps = state => {
  const { inputNumber, data, error } = state.inputFieldData;
  return {
    inputNumber,
    data,
    error
  }
}
const mapDispatchToProps = dispatch => ({
  onInputValueChange: (...args) => dispatch(inputValueChange(...args)),
  onInputValueSubmit: () => dispatch(inputValueSubmit()),
  onDisplayError: () => dispatch(displayError())
})

export default connect(mapStateToProps, mapDispatchToProps)(Form);