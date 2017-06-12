
/**
 * 2.2 Create Sidebar Component
 */
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';

/**
 * Gets Deck id thanks to Store
 * <Toolbar deckId={this.props.deckId}/> 
 */

export class SideBar extends Component {

    constructor(props, context){
        super(props, context);
        // this.createNewDeck = this.createNewDeck.bind(this);
    }

    getId(evt){
        let deckId = evt.currentTarget.getAttribute('data-id')
        let deckName = evt.currentTarget.innerText;

        let selectedDeck = {
            id: deckId,
            name:deckName
        }

        this.props.onSelectedDeck(selectedDeck);
        this.props.onClickedDeck(deckId);
    }

    createNewDeck(evt){
        
        if(evt.which !== 13)
            return
        var name = ReactDOM.findDOMNode(this.refs.addNewDeck_IN).value;
        this.props.onAddDeck({id:+new Date, name:name});
        this.props.onHideDeck();
    }

    //React component methods
    componentDidUpdate(){
        var el = ReactDOM.findDOMNode(this.refs.addNewDeck_IN);
        if(el) el.focus();
    }
    render() {

        let props = this.props;

        return (
            <div className="sidebar">
                <h2>All Decks</h2>
                <button onClick={ e => props.onShowDeck()}>New Deck</button>
                <ul>
                    {props.decks.map( (deck, i) => 
                        <li key={i}>
                        <Link to={`/deck/${deck.id}`} 
                              data-id={deck.id} 
                              onClick={ (evt) => this.getId(evt)}>{deck.name}
                        </Link>
                        </li> )}
                </ul>
                { props.addingDeck && <input ref='addNewDeck_IN' onKeyPress={ (evt) => this.createNewDeck(evt) }/>}
                <div className='props'>Id: {this.props.selectedDeck.id}</div>
                <div className='props'>Name: {this.props.selectedDeck.name}</div>
            </div>
        );
    }
}

SideBar.defaultProps = {
    decks: [],
    addingDeck: false,
    onAddDeck: () => {},
    onShowDeck: () => {},
    onHideDeck: () => {}
}

SideBar.propTypes = {
    decks: PropTypes.array.isRequired,
    addingDeck: PropTypes.bool.isRequired,
    onAddDeck: PropTypes.func.isRequired,
    onShowDeck: PropTypes.func.isRequired,
    onHideDeck: PropTypes.func.isRequired
}

export default SideBar;