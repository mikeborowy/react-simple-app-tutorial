import * as types from '../../constants/actionTypes';
import initialState from '../initialState';

export function cardReducer(prevState = initialState.cards, action) {

    switch (action.type) {
        case types.ADD_CARD:

            let newCard = {
                id: action.data.id,
                scrore: action.data.score,
                front: action.data.front,
                back: action.data.back
            }

            return [
                ...prevState,
                Object.assign({}, newCard)
            ]

            break;
       
        default:
            return prevState || []
            break;
    }

}