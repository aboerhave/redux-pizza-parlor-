import React, { Component } from 'react';
import { connect } from 'react-redux';
import './PizzaListItem.css';


class PizzaListItem extends Component {
   


    render() {
        return (
            <div className="pizzaBox">
                <h3>{this.props.pizza.name}</h3>
                <p>{this.props.pizza.description}</p>
                <p>{this.props.pizza.price}</p>
                
            </div>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(PizzaListItem);