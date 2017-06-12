/**
 * 2.1 Create Wrapper Component -This component handles the 
 * App template used on every page.
 */
import React, {PropTypes, Component} from 'react';
import Sidebar from './sidebar/SideBarCont';

/**
 * <App children={{}}, deckId={0}/>
 */

export class App extends Component {
  render() {

    let props = this.props;

    return (
      <div className="app">
        <Sidebar/>
        <h1>Deck Id: {props.deckId}</h1>
        {props.children}
      </div>
    );
  }
};

App.defaultProps = {
  deckId: 0,
  children: {}
  // isLoading: false
};

App.propTypes = {
  // children: PropTypes.object.isRequired,
  // deckId: PropTypes.number.isRequired
  // isLoading: PropTypes.bool.isRequired
};

export default App;

