import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import App from './App';
import './index.css';

import {combineReducers, createStore} from 'redux';
import { Provider } from 'react-redux';

import postReducer from './reducers/postReducer';

// The reducer=> a pure function that takes the previous state and an action, and returns the next state.

// As your app grows more complex, you'll want to split your reducing function
//into separate functions, each managing independent parts of the state.
//The combineReducers helper function turns an object whose values are different
//reducing functions into a single reducing function you can pass to createStore.
 const allReducers  = combineReducers({
    postReducer: postReducer
 });

 // A store holds the whole state tree of your application.
 // The only way to change the state inside it is to dispatch an action on it.
 // To Have a single source of truth: The state of your whole application is
 // stored in an object tree within a single Redux store.
const store = createStore(allReducers);

ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
