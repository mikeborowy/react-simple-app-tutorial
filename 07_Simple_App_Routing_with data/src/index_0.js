/**
 * we need to disable complaining about the fact we are using
 * the file doesn't have default export
 */
/*eslint-disable import/default */
import * as types from './constants/actionTypes';
//styles
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/toastr/build/toastr.css';
//babel
import 'babel-polyfill';
//react
import React from 'react';
import { render } from 'react-dom';
//redux
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
//routes
import routes from './routes';
//action creators
import App from './components/App';

const store = configureStore();

store.dispatch({
    type: types.ADD_NEW_CARD,
    data: {
        id: +new Date,
        score: 1,
        front:'this is front',
        back: 'this is back'
    }
})

store.dispatch({
    type: types.ADD_NEW_DECK,
    newDeck: {id:0, name:'Deck 2'}
})

store.subscribe( () => console.log("State: ", store.getState()))

const onHandleError = (error) => {
    store.dispatch(addError(error.message));
}

window.React = React;
window.store = store;
window.addEventListener("error", onHandleError);

render(
  <Provider store={store}>
      {routes} 
  </Provider>,
  document.getElementById('react-container')
);