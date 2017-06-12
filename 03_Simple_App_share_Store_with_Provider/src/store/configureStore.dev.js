/**
 * 1.4 Create Store
 */
import {createStore, applyMiddleware} from 'redux';
import indexOfReducers from './reducers';
import thunk from 'redux-thunk';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function configureStore(initialState) {

    return createStore(
        indexOfReducers, 
        initialState, 
        applyMiddleware(thunk, reduxImmutableStateInvariant())
        );
}

// const consoleMessages = (store) => (next) => (action) => {
//     let result;
//     console.group()
//     console.log(`dispatching action => ${ action.type }`);
//     console.log(`dispatching course:`, store.getState().course);
    
//     result = next(action);
//     let {courses} = store.getState();

//     // ski days: ${JSON.stringify(allSkiDays)}
//     console.log(`
//     courses num: ${courses.length}
//     courses:${JSON.stringify(courses, null, "      ")}
//     `)

//     console.groupEnd();
//     return result;
// }