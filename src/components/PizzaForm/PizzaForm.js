import React, { Component } from 'react';
import Axios from 'axios';
import {connect} from 'react-redux';


class PizzaForm extends Component {

    state = {
        customer: {
            customer_name: '',
            street_address: '',
            city: '',
            zip: ''
        }
    }

    onChange = (event, propertyName) => {
        this.setState({
            order: {
                ...this.state.customer,
                [propertyName]: event.target.value
            }
        });
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        console.log('add customer');
        console.log(this.state.customer);
        
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={(event) => this.handleChange(event, "customer_name")} ref="name" placeholder="Name"/>
                <input type="text" onChange={(event) => this.handleChange(event, "street_address")} ref="address" placeholder="Street Address"/>
                <input type="text" onChange={(event) => this.handleChange(event, "city")} ref="city" placeholder="City"/>
                <input type="text" onChange={(event) => this.handleChange(event, "zip")} ref="zip" placeholder="Zip"/>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

const putReduxStateOnProps = (reduxStore) => ({
    reduxStore
  })

  export default connect(putReduxStateOnProps)(PizzaForm);