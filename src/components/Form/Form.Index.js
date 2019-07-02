import React from 'react';
import PropTypes from 'prop-types';
import { formLabel } from './constants';
import { checkValidation } from './helper';

import './form.scss';

function Form(props) {

  const handleSubmit = evt => {
    evt.preventDefault();
    const isNumber = checkValidation(props.inputNumber);
    if (isNumber) {
      props.onInputValueSubmit(props.inputNumber);
    } else {
      props.onDisplayError();
    }
  }

  const handleChange = evt => {
    props.onInputValueChange(evt.target.value);
  }

  const displayData = () => {
    if (props.data && props.data.length > 0) {
      return `Median for set of Prime-Numbers: [${props.data}]`;
    }
    return null;
  }

  return (
    <div className='form-container'>
      <div  className='form-container--header'>{formLabel}</div>
      <div className='form-container--main'>
        <form className='form-group' onSubmit={handleSubmit}>
          <div className='form-group--input'>
            <label className='input-label' htmlFor='numberField'>Enter Number</label>
            <input
              className='input-control'
              type='text'
              name='number'
              id='input-value'
              value={props.inputNumber}
              onChange={handleChange}
            />
          </div>
          <div className='form-group--submit'>
            <input className='input-button' type='submit' value='Get Median'/>
          </div>
        </form>
        <div className='form-input-error'>{props.error}</div>
        <div className='form-output'>{displayData()}</div>
      </div>
    </div>
  );
}

Form.propTypes = {
  data: PropTypes.any,
  error: PropTypes.string,
  inputNumber: PropTypes.string,
  onInputValueChange: PropTypes.func,
  onInputValueSubmit: PropTypes.func,
  onDisplayError: PropTypes.func
}

export default Form;
