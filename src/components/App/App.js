import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import PizzaForm from '../PizzaForm/PizzaForm';
import PizzaList from '../PizzaList/PizzaList';
import {connect} from 'react-redux';

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
    // this.props.dispatch({type: 'SET_PIZZAS', payload: response.data})
  }).catch((error) =>{
    console.log('error in get pizza', error)
  })
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Prime Pizza</h1>
        </header>
        <br/>
        <img src="images/pizza_photo.png"/>
        <p>Pizza is great.</p>
        <PizzaList />
        <PizzaForm />
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxStore) => ({
  reduxStore
})

export default connect(putReduxStateOnProps)(App);
