// PizzaList.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PizzaListItem from '../PizzaListItem/PizzaListItem';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';


class PizzaList extends Component {
   
    state = {
        added: false,
        pizza: {
            id: 0,
            quantity: 0,
            name: '',
            quantity: ''
        },
        pizzas: [],
    }

    addPizzaToOrder = () => {
        this.setState({
            added: !this.state.added,
            pizza: {
                id: pizza.id,
                quantity: 1,
                name: pizza.name,
                description: pizza.description
            },
            pizzas: [...this.state.pizzas, this.state.pizza]
        });
        console.log(this.state.pizzas);
    }

    removePizzaFromOrder = () => {
        this.setState({
            added: !this.state.added
        });
    }

    handleClick = () => {
        // this.props.history.push()
    }

    render() {
        return (
            <div>
                <table>
                    <tbody>
                        {this.props.reduxStore.pizzaList.map((pizza, i) => {
                            // return <PizzaListItem key={i} pizza={pizza} />
                                return <div>
                            <div className="pizzaBox">
                                <h3>{pizza.name}</h3>
                                <p>{pizza.description}</p>
                                <p>{pizza.price}</p>
                                {/* changes whether add or remove button appears */}
                                {this.state.added !== true ?
                                    <button onClick={this.addPizzaToOrder} >Add</button>
                                    :
                                    <button onClick={this.removePizzaFromOrder} >Remove</button>
                                }
                            </div>
                            {JSON.stringify(this.state.pizzas)}
                        </div>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(PizzaList);


