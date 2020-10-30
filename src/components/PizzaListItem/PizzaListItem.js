import React, { Component } from 'react';
import { connect } from 'react-redux';
import './PizzaListItem.css';


class PizzaListItem extends Component {
   
    state = {
        added: false,
        pizzas: [],
        pizza: {
            id: 0,
            quantity: 0
        }
    }

    addPizzaToOrder = () => {
        this.setState({
            added: !this.state.added,
            pizza: {
                id: this.props.pizza.id,
                quantity: 1,
                name: this.props.pizza.name,
                description: this.props.pizza.description
            },
            pizzas: [...this.state.pizzas, this.state.pizza]
        });
    }

    removePizzaFromOrder = () => {
        this.setState({
            added: !this.state.added
        });
    }

    render() {
        return (
            <div className="pizzaBox">
                <h3>{this.props.pizza.name}</h3>
                <p>{this.props.pizza.description}</p>
                <p>{this.props.pizza.price}</p>
                {/* changes whether add or remove button appears */}
                {this.state.added !== true ?
                    <button onClick={this.addPizzaToOrder} >Add</button>
                    :
                    <button onClick={this.removePizzaFromOrder} >Remove</button>
                }
            </div>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(PizzaListItem);