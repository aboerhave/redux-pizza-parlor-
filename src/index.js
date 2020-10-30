import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux'; 
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const pizzaList = (state = [], action) => {
  switch(action.type){
    case 'SET_PIZZAS': 
    return action.payload;
    default: 
    return state;
  }
}

const orderInfo = (state = {}, action) => {
  switch(action.type){
    case 'GET_INFO': 
    return action.payload;
    default: 
    return state;
  }
}

const allOrders = (state = [], action) => {
  switch (action.type) {
    case "GET_ORDERS":
      return action.payload;
    default:
      return state;
  }
};




const reduxStore = createStore(
  combineReducers({
    pizzaList,
    orderInfo,
    allOrders,
  }),
  applyMiddleware(logger)
);

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
