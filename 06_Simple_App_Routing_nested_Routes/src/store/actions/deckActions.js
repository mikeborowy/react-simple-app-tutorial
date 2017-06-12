
/**
 *  1.1 Deck Actions (Events)
 */

/*
<SideBar
    decks={ state.decks }
    addingDeck={ state.addingDeck}
    onAddDeck = { (deck) => store.dispatch(deckActions.addNewDeck(deck))}
    onShowDeck = {() => store.dispatch(deckActions.showAddDeck())}
    onHideDeck = {() => store.dispatch(deckActions.hideAddDeck())}
/>
*/

import * as types from '../../constants/actionTypes';

// export const onAddDeck = (newDeck) => ({type: types.ADD_NEW_DECK, newDeck})
// export const onShowDeck = () => ({type: types.SHOW_ADD_DECK})
// export const onHideDeck = () => ({type: types.HIDE_ADD_DECK})

export const addNewDeck = (newDeck) => ({type: types.ADD_NEW_DECK, newDeck})
export const showAddDeck = () => ({type: types.SHOW_ADD_DECK})
export const hideAddDeck = () => ({type: types.HIDE_ADD_DECK})

/*when use the same actions names as component actions/functions 
you can bind them in Container (Controller) as:
 
const mapStateToProps = (state, ownProps) => {
    return {
        decks: state.decks, 
        addingDeck: state.addingDeck
    };
}
*/