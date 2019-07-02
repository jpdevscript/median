import { call, put, takeLatest, select } from 'redux-saga/effects';
import { types } from './constants';
import { getMedianData } from './services';
 
export function* sendInputNumber() {
  try {
    const inputNumber = yield select(state => state.inputFieldData.inputNumber);
    const data = yield call(getMedianData, inputNumber);
    yield put({ type: types.LOAD_RECEIVED_DATA, data });
  } catch (error) {
    console.log('error.in.sendInputNumber.saga...', error);
  }
}

function* inputNumberSaga() {
  yield takeLatest(types.SEND_INPUT_NUMBER, sendInputNumber);
}

export default inputNumberSaga;