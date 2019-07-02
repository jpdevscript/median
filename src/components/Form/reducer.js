import createReducer from "../../utils/createReducer";
import { types, error } from './constants';
const Immutable = require("seamless-immutable").static;

const initialState = Immutable.from({
    inputNumber: '',
    error: '',
    data: []
});

const setInputValue = (state, { value }) => {
  return Immutable.merge (state, {inputNumber: value, error: '', data: []});
}

const setReceivedData = (state, { data }) => {
  return Immutable.merge (state, {data: data});
}

const setError = (state) => {
  return Immutable.merge(state, {error});
}

const handlers = {
  [types.SET_INPUT_VALUE]: setInputValue,
  [types.LOAD_RECEIVED_DATA]: setReceivedData,
  [types.DISPLAY_ERROR]: setError
}

export default createReducer(initialState, handlers);