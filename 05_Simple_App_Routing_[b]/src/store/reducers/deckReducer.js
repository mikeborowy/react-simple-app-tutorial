/**
 * 1.2 Create Reducers
 */
import * as types from '../../constants/actionTypes';
import initialState from '../../constants/initialState';

export function deckReducer(prevState = initialState.decks, action) {

    switch (action.type) {
        /**{type: types.ADD_NEW_DECK, newDeck}*/
        case types.ADD_NEW_DECK: 
           
            let newDeck = {
                name: action.newDeck.name,
                id: + new Date
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
