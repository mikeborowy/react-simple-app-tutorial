/*
Objects held in store
*/
export default {
    ajaxCallsInProgress: 0, //this will be global variable for ajaxCallReducer,
    cards : [],
    card: {
        id: '',
        score: '',
        front:'',
        back: ''
    },
    decks: [],
    deck: {
        id: '',
        name: ''
    },
    showAddingDeck: false
}