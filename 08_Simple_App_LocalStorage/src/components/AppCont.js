import React from 'react';
import {connect} from 'react-redux'
import App from './App';

/*const mapStateToProps =(state, router) => {     
    const id = router.params.deckId    
    return{deckId:id}
}*/

const mapStateToProps = (state, router) => {
    console.log(`Router: `,router)

    const id = router.params.deckId    
    return{
        deckId:id
    }
}

const mapDispatchToProps = () => {}

export default connect(mapStateToProps)(App)