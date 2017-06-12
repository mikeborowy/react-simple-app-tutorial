// This component handles the App template used on every page.
import React, {createClass, PropTypes, Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
//constants
import * as types from './constants/actionTypes';
//styles
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

/**
 *  1.1 Deck Actions
 */

export const addNewDeck = (newDeck) => ({type: types.ADD_NEW_DECK, newDeck})
export const showAddDeck = () => ({type: types.SHOW_ADD_DECK})
export const hideAddDeck = () => ({type: types.HIDE_ADD_DECK})

/**
 * 1.2 Create Reducers
 */
const cards = (prevState, action) => {
  switch (action.type) {
    case types.ADD_NEW_CARD:

      let newCard = {
        id: action.data.id,
        scrore: action.data.score,
        front: action.data.front,
        back: action.data.back
      }

      return [
        ...prevState,
        Object.assign({}, newCard)
      ]

      break;

    default:
      return prevState || []
      break;
  }
}

const decks = (prevState, action) => {
  switch (action.type) {
      /**{type: types.ADD_NEW_DECK, newDeck}*/
    case types.ADD_NEW_DECK:

      let newDeck = {
        name: action.newDeck.name,
        id: + new Date
      }

      return [
        ...prevState,
        Object.assign({}, newDeck)
      ]

      break;

    default:
      return prevState || []
      break;
  }
}

const addingDeck = (prevState, action) => {

  switch (action.type) {
      /**{type: types.SHOW_ADD_DECK}*/
    case types.SHOW_ADD_DECK:
      return true;
      break;
      /**{type: types.HIDE_ADD_DECK}*/
    case types.HIDE_ADD_DECK:
      return false;
      break;

    default:
      return !!prevState
      break;
  }
}

/**
 * 1.3 Setup Store
 */
const store = createStore(combineReducers({
  cards,
  decks, 
  addingDeck
}));

store.subscribe(() => console.log("State: ", store.getState()));


/**
 * 1.4 Dispatch Actions
 */
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

/**
 * 2.1 Create Wrapper Component
 */

const App = (props) => {
  return (
    <div className="app">
      {props.children}
    </div>
  )
}

/**
 * 2.2 Create Sidebar Component
 */
const Sidebar = createClass({

  componentDidUpdate(){
     var el = ReactDOM.findDOMNode(this.refs.addNewDeck_IN);
     if(el) el.focus();
  },
  createNewDeck(evt){
      
    if(evt.which !== 13)
        return
    var name = ReactDOM.findDOMNode(this.refs.addNewDeck_IN).value;
    this.props.onAddDeck({id:+new Date, name:name});
    this.props.onHideDeck();
  }, 
  render() {

    let props = this.props;

    return (
      <div className="sidebar">
        <h2>All Decks</h2>
        <button onClick={ e => this.props.onShowDeck()}>New Deck</button>
        <ul>
          {props.decks.map((deck, i) => <li key={i}>{deck.name}</li>)}
        </ul>
        {props.addingDeck && <input ref='addNewDeck_IN' onKeyPress={(evt) => this.createNewDeck(evt)}/>}
      </div>
    );
  }
})

/**
 * 2.3 Render Wrapper with components Component
 */

// window.show = () => store.dispatch(showAddDeck())
// window.hide = () => store.dispatch(hideAddDeck())
// window.add = () => store.dispatch(addNewDeck({id:+new Date, name: 'Deck 3'}))



function runApp() {

  let state = store.getState()
  
  ReactDOM.render(
    <App>
      <Sidebar  decks={state.decks} 
                addingDeck={state.addingDeck}
                onAddDeck = { (deck) => store.dispatch( addNewDeck(deck))}
                onShowDeck = {() => store.dispatch(showAddDeck())}
                onHideDeck = {() => store.dispatch(hideAddDeck())}
                />
    </App>,
     document.getElementById('react-container')
  )
}

runApp();

store.subscribe(runApp);