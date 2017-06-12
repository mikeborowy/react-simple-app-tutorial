/**
 * 1.2 Create Reducers
 */
import * as types from '../../constants/actionTypes';
import initialState from '../initialState';

export function selectedDeck(prevState = initialState.selectedDeck, action) {
    switch (action.type) {

        case types.SELECTED_DECK:

            return action.selectedDeck;
            break;

        default:
            return prevState || {}
            break;
    }
}

export function deckReducer(prevState = initialState.decks, action) {

    switch (action.type) {
            /**{type: types.ADD_NEW_DECK, newDeck}*/
        case types.ADD_NEW_DECK:

            let newDeck = {
                id: + new Date,
                name: action.newDeck.name
            }

            return [
                ...prevState,
                Object.assign({}, newDeck)
            ]

            break;

        default:
            return prevState || []
            break;
    }
}

export function clickedDeckId(prevState = initialState.clickedDeckId, action) {
    switch (action.type) {
            /**{type: types.SHOW_ADD_DECK}*/
        case types.SET_DECK_ID:
            return parseInt(action.clickedDeckId)
        default:
            return parseInt(prevState) || 0
            break;
    }
}

export function addingDeckReducer(prevState = initialState.showAddingDeck, action) {

    switch (action.type) {
            /**{type: types.SHOW_ADD_DECK}*/
        case types.SHOW_ADD_DECK:
            return true;
            break;
            /**{type: types.HIDE_ADD_DECK}*/
        case types.HIDE_ADD_DECK:
            return false;
            break;

        default:
            return prevState || false
            break;
    }
}
