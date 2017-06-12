// This component handles the App template used on every page.
//React ecosystem 
import React from 'react';
import ReactDOM from 'react-dom'; //generates Dom
import {Provider} from 'react-redux'; //allows to access store thru other components
import {Router, browserHistory} from 'react-router';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'; // it is been added to react-router v4
import routes from './routes';
//styles
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
//constants
import * as types from './constants/actionTypes';
//store
import initStore from './store';
import reducers from './store/reducers';
import * as deckActions from './store/actions/deckActions';
//components
import App from './components/App';
import SideBar from './components/sidebar/SideBarCont';

// Create Store
// const store = createStore(combineReducers({routing: routerReducer, reducers});
const store = initStore();
// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={ store }>
      <Router history={ history }>
        {routes} 
    </Router>
  </Provider>,
  document.getElementById('react-container')
)