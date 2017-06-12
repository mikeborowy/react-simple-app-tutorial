import {connect} from 'react-redux';
//actions
import * as actions from '../../store/actions/deckActions';
//component
import Toolbar from './Toolbar';

const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = (dispatch) => ({
    onShowDeck: () => dispatch(actions.showAddDeck()),
    onHideDeck: () => dispatch(actions.hideAddDeck())
});

const Connector = connect(null, mapDispatchToProps)(Toolbar);
export default Connector;