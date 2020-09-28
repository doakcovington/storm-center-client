//WDGTR
//NCWH
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import {BrowserRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

//reducers
import eventReducer from './reducers/eventReducer'; //updates the value of store
import tutorReducer from './reducers/tutorReducer';
import admindReducer from './reducers/adminReducer';

//Calls every child reducer and stores into a single state object
const reducer = combineReducers({
  eventReducer,
  tutorReducer,
  admindReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//contains application state
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

ReactDOM.render(
  //store is available to all nested component that has been wrapped in connect()
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
