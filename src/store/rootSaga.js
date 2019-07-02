import { fork, all } from 'redux-saga/effects';
import inputNumberSaga from '../components/Form/sagas';

function* rootSaga() {
    yield all ([
        fork(inputNumberSaga)
    ]);
}

export default rootSaga;