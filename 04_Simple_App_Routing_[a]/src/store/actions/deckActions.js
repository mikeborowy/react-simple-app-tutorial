
/**
 *  1.1 Deck Actions (Events)
 */
import * as types from '../../constants/actionTypes';

export const addNewDeck = (newDeck) => ({type: types.ADD_NEW_DECK, newDeck})
export const showAddDeck = () => ({type: types.SHOW_ADD_DECK})
export const hideAddDeck = () => ({type: types.HIDE_ADD_DECK})