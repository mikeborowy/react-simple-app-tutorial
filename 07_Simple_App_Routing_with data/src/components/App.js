/**
 * 2.1 Create Wrapper Component -This component handles the
 * App template used on every page.
 */
import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import Toolbar from './toolbar/ToolbarCont';
import Sidebar from './sidebar/SideBarCont';
import VisibleCards from './cards/VisibleCards';
import * as actions from '../store/actions/deckActions';

const mapStateToProps = (state, router) => {
  return {deckId: router.params.deckId}
}

const mapDispatchToProps = () => {}

export class App extends Component {
  render() {
    return (
      <div className="app">
        <Toolbar deckId={this.props.deckId}/> 
        <Sidebar />
        <h4>Parent: App Component</h4>
        <div className='props'>Deck Id: {this.props.deckId}</div>
        {this.props.children}
      </div>
    );
  }
};

App.propTypes = {
  // children: PropTypes.object.isRequired, deckId: PropTypes.number.isRequired
  // isLoading: PropTypes.bool.isRequired
};

const Connector = connect(mapStateToProps, null)(App);
export default Connector;
