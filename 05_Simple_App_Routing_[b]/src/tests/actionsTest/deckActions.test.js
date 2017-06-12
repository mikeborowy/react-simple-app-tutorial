import expect from 'expect';
import * as deckActions from '../../store/actions/deckActions';
import * as types from '../../constants/actionTypes';

describe('Deck Actions', () => {
  describe('- addNewDeck', () => {
    it('should create a ADD_NEW_DECK action', () => {

      //arrange
      const deck = {id: '1', name: 'Deck 1'};
      //action
      const action = deckActions.onAddDeck(deck);
      //expected result
      const expectedAction = { type: types.ADD_NEW_DECK, newDeck: deck };
      //assert
      expect(action).toEqual(expectedAction);
    });
  });

 describe('- showAddDeck', () => {
    it('should return { type: types.SHOW_ADD_DECK }', () => {

      //action
      const action = deckActions.onShowDeck();
      //expected result
      const expectedAction = { type: types.SHOW_ADD_DECK };
      //assert
      expect(action).toEqual(expectedAction);
    });
  });

});