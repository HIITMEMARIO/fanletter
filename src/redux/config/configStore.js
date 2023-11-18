import { createStore } from 'redux';
import { combineReducers } from 'redux';
import listReducer from 'redux/modules/list';

const rootReducer = combineReducers({
  listReducer,
});

const store = createStore(rootReducer);

export default store;
