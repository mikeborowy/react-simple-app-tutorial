/**
 * 1.4 Create Store
 */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; //allows can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. 
import indexOfReducers from './reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function initStore(initialState) {

    console.log(initialState)

    return createStore(
        indexOfReducers, 
        initialState, 
        applyMiddleware(thunk, reduxImmutableStateInvariant())
        );
}

const consoleMessages = (store) => (next) => (action) => {
    let result;
    result = next(action);
    console.log(`Store: `, store.getState());
    return result;
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