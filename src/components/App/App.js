import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import PizzaForm from '../PizzaForm/PizzaForm';
import PizzaList from '../PizzaList/PizzaList';
import {connect} from 'react-redux';
// import { Router } from 'react-router-dom';
import {HashRouter as Router, Route, Link} from 'react-router-dom';

class App extends Component {

componentDidMount = () => {
  this.getPizza();
}

getPizza = () => {
  axios ({
    method: 'GET',
    url: '/api/pizza'
  }).then((response) => {
    console.log(response.data)
    this.props.dispatch({type: 'SET_PIZZAS', payload: response.data})
  }).catch((error) =>{
    console.log('error in get pizza', error)
  })
}

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Prime Pizza</h1>
            {/* <p>{this.props.reduxStore}</p> */}
          </header>
          <br/>
          <img src="images/pizza_photo.png"/>
          <p>Pizza is great.</p>
          {/* <PizzaList /> */}
          {/* <PizzaForm /> */}
          <Route exact path='/' component={PizzaList} />
          <Route path='/PizzaForm' component={PizzaForm} />
          {/* <Route path='/Checkout' component={Checkout} /> */}
        </div>
      </Router >
    );
  }
}

const putReduxStateOnProps = (reduxStore) => ({
  reduxStore
})

export default connect(putReduxStateOnProps)(App);
