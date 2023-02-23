import { combineReducers, createStore } from 'redux';
import { itemReducer } from './ItemReducer';
import { numberReducer } from './numberReducer';

const mainReducer = combineReducers({
    number: numberReducer,
    items: itemReducer,

})

export const store = createStore(mainReducer);