/**
 * 2.1 Create Wrapper Component -This component handles the 
 * App template used on every page.
 */
import React, {PropTypes, Component} from 'react';
import Sidebar from './sidebar/SideBarCont';

export class App extends Component {

  render() {
    return (
      <div className="app">
        <Sidebar/>
        {this.props.children}
      </div>
    );
  }
};

App.defaultProps = {
  //children: {},
  //isLoading: false
};

App.propTypes = {
  //children: PropTypes.object.isRequired,
  //isLoading: PropTypes.bool.isRequired
};

export default App;

