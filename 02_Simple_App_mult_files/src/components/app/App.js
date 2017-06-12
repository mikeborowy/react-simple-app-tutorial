/**
 * 2.1 Create Wrapper Component -This component handles the 
 * App template used on every page.
 */
import React, {PropTypes, Component} from 'react';

export class App extends Component {
  render() {
    return (
      <div className="app">
        {this.props.children}
      </div>
    );
  }
};

export default App;

App.propTypes = {
  // children: PropTypes.object.isRequired,
  //isLoading: PropTypes.bool.isRequired
};
