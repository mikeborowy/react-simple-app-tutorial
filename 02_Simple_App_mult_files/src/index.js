// This component handles the App template used on every page.
import React, {createClass, PropTypes, Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
//styles
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
//constants
import * as types from './constants/actionTypes';
import * as deckActions from './store/actions/deckActions';
import configureStore from './store/configureStore';
import App from './components/app/App';
import SideBar from './components/sidebar/SideBar';
import indexOfReducers from './store/reducers';
/**
 * 1.3 Setup Store
 */
const store = createStore(indexOfReducers);
store.subscribe(() => console.log("State: ", store.getState()));

store.dispatch({
  type: types.ADD_NEW_CARD,
  data: {
    id: + new Date,
    score: 1,
    front: 'this is front',
    back: 'this is back'
  }
});

store.dispatch({
  type: types.ADD_NEW_DECK,
  newDeck: {
    id: 0,
    name: 'Deck 2'
  }
});


function runApp() {

  let state = store.getState()
  
  ReactDOM.render(
    <App>
      <SideBar  decks={ state.decks } 
                addingDeck={state.addingDeck}
                onAddDeck = { (deck) => store.dispatch(deckActions.addNewDeck(deck))}
                onShowDeck = {() => store.dispatch(deckActions.showAddDeck())}
                onHideDeck = {() => store.dispatch(deckActions.hideAddDeck())}
                />
    </App>,
     document.getElementById('react-container')
  )
}

runApp();

store.subscribe(runApp);