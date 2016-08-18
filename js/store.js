import { createStore, combineReducers } from 'redux';

// const masterReducer = combineReducers({
// });

const masterReducer = () => ({});

const Store = window.Store = createStore(
  masterReducer
);

export default Store;
