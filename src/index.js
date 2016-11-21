import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';

import { createStore, combineReducers, applyMiddleware } from 'redux'; 
// compose for devtools: https://github.com/zalmoxisus/redux-devtools-extension#usage
import logger from 'redux-logger';
import { Provider } from 'react-redux'

const mathReducer = (state={
  count: 1,
  prevValues: []
}, action) => {
  switch(action.type) {
    case 'INCREMENT':
      state = {
        ...state, 
        count: state.count + action.payload,
        prevValues: [...state.prevValues, action.payload]
      }
      break;
    case 'DECREMENT' : 
      state = {
        ...state, 
        count: state.count - action.payload,
        prevValues: [...state.prevValues, action.payload]
      }
      break;
    default: break;
  }
  return state;
}

const userReducer = (state={
  name: 'Jeff',
  age: 22
}, action) => {
  switch(action.type) {
    case 'SET_NAME':
      state = {
        ...state, 
        name: action.payload
      }
      break;
    case 'SET_AGE' : 
      state = {
        ...state, 
        age: action.payload
      }
      break;
    default: break;
  }
  return state;
}

// const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(
  combineReducers({mathReducer, userReducer}), 
  {},
  applyMiddleware(logger())
);
// 1. reducer 2. store (empty because handled by reducer) 3. middleware 
// These reducers are what I reference in App.js to tell the component what to connect to

store.subscribe(()=> {
  // console.log('new store: ', store.getState());
})

//Importing and mounting the connected component - App
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);