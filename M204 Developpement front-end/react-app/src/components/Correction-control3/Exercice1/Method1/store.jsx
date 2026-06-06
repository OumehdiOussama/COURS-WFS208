import { legacy_createStore } from 'redux';
import reducer from './voteReducer';

const store = legacy_createStore(reducer);
export default store;