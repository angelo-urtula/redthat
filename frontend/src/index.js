import React from "react";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import {createStore, applyMiddleware} from "redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import thunk from "redux-thunk";
import combinedReducers from "./reducers/combinedReducer.js";

const store = createStore(combinedReducers, applyMiddleware(thunk))

ReactDOM.render(
  
  <Provider store={store}>
    <Router>
    <Route exact path="/" component={App} />
    <Route exact path="/about" component={About} />
    <Route exact path="/users" component={Users} />
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
