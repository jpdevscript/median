import { types } from './constants';

export const inputValueChange = (value) => {
  return {
    type: types.SET_INPUT_VALUE,
    value,
  }
}

export const inputValueSubmit = () => {
  return {
    type: types.SEND_INPUT_NUMBER,
  }
}

export const displayError = () => {
  return {
    type: types.DISPLAY_ERROR
  }
}