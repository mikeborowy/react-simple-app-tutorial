// This component handles the App template used on every page.
//React ecosystem 
import React from 'react';
import ReactDOM from 'react-dom'; //generates Dom
import {Provider} from 'react-redux'; //allows to access store thru other components
import thunk from 'redux-thunk';
import routes from './routes';
//styles
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
//constants
import * as types from './constants/actionTypes';
//store
import configureStore from './store/configureStore';
import indexOfReducers from './store/reducers';
import * as deckActions from './store/actions/deckActions';
//components
import App from './components/App';
import SideBar from './components/sidebar/SideBarCont';

const store = configureStore();
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
    <Provider store={ store }>
      <App>
          <SideBar />
      </App>
    </Provider>
    ,
     document.getElementById('react-container')
  )
}

runApp();

store.subscribe(runApp);
