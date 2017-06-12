/*
 * SideBar Container (Controller) - is used to send properties and functions
 * that components should have and actions(events):
 * <SideBar
 *      decks={ state.decks }
 *      addingDeck={ state.addingDeck}
 *      onAddDeck = { (deck) => store.dispatch(deckActions.addNewDeck(deck))}
 *      onShowDeck = {() => store.dispatch(deckActions.showAddDeck())}
 *      onHideDeck = {() => store.dispatch(deckActions.hideAddDeck())}
 * />
 */

// import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/deckActions';
import SideBar from './SideBar';

/*
<SideBar
    decks={ state.decks }
    addingDeck={ state.addingDeck}
    onAddDeck = { (deck) => store.dispatch(deckActions.addNewDeck(deck))}
    onShowDeck = {() => store.dispatch(deckActions.showAddDeck())}
    onHideDeck = {() => store.dispatch(deckActions.hideAddDeck())}
/>
*/

const mapStateToProps = (state, ownProps) => {
    return {
        decks: state.decks, 
        addingDeck: state.addingDeck
    };
}

/**
 * pass events to Component, so can be called from if
 * if action names in deckActions.js match names of components
 * functions you can use just bindActionCreators(deckActions, dispatch)
 * instead of listening all functions and assigning to them actions
 */
const mapDispatchToProps = (dispatch) => {
    return {
        // actions: bindActionCreators(deckActions, dispatch)
        onAddDeck: (deck) => dispatch( actions.addNewDeck(deck) ),
        onShowDeck: () => dispatch( actions.showAddDeck() ),
        onHideDeck: () => dispatch( actions.hideAddDeck() )
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);