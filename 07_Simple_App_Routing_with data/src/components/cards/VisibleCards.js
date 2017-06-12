import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/deckActions';

/**
 * Gets Deck id from url router thank to Router
 *  {this.props.children}
 */

const mapStateToProps = (state, {params:{deckId}}) => ({
    deckId
})

const mapDispatchToProps = (dispatch) => ({
    onShowDeck: () => dispatch(actions.showAddDeck()),
    onHideDeck: () => dispatch(actions.hideAddDeck())
});

class VisibleCards extends Component {
    render() {
        return (
            <div>
                <h4>Child: Visible Cards Component, loaded into App container</h4>
                <div className='props'>Deck Id: {this.props.deckId}</div>
                <button onClick={this.props.onShowDeck}>Add card from Visible Component</button>
            </div>
        );
    }
}

VisibleCards.propTypes = {
    deckId: PropTypes.string.isRequired,
    onShowDeck: PropTypes.func.isRequired
};

const Connector = connect(mapStateToProps, mapDispatchToProps)(VisibleCards);
export default Connector;