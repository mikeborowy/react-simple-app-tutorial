// This component handles the App template used on every page. React ecosystem
import React from 'react';
import ReactDOM from 'react-dom'; //generates Dom
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux'; //allows to access store thru other components
import routes from './routes';
//styles
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
//constants
import * as types from './constants/actionTypes';
//store
import initStore from './store';
import reducers from './store/reducers';
import * as localStore from './store/localStore';
//components
import App from './components/App';
import SideBar from './components/sidebar/SideBarCont';

// Create Store
const initialState = localStore.get();
const store = initStore(initialState);
// const store = createStore(combineReducers( reducers, localStore.get()));
store.subscribe(() => {
  let state = store.getState();
  localStore.set(state, ['decks', 'cards'])
})

function startApp() {
  ReactDOM.render(
    <Provider store={store}>
    {routes}
  </Provider>, document.getElementById('react-container'))
}

startApp();