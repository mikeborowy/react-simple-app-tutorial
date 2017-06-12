import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

/**
 * Gets Deck id by App Component:
 * <Toolbar deckId={this.props.deckId}/> 
 */

export class Toolbar extends Component{
    render(){

        let deckTools = this.props.deckId ? (<div>
            <Link className='btn' to={`/deck/${this.props.deckId}/new`} >+ New Card</Link>
            <Link className='btn' to={`/deck/${this.props.deckId}/study`} >Study Card</Link>
        </div>) : null

        return(
             <div className='toolbar'>
                <div>
                    <button onClick={ this.props.onShowDeck }>+ Add New Deck</button>
                </div>
                {deckTools}
                <div className='props'>Deck Id: { this.props.deckId }</div>
            </div> 
        )
    }
}

export default Toolbar;