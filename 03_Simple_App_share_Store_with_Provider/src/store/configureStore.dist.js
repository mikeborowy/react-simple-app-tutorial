/**
 * 1.4 Create Store
 */
import {createStore, applyMiddleware} from 'redux';
import allAppReducers from './reducers';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
    return createStore(
        allAppReducers, 
        initialState, 
        applyMiddleware(thunk)
        );
}
