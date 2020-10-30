import React, { Component } from "react";
import { connect } from "react-redux";

class Checkout extends Component {
  state = {
    newOrder: {
      customer_name: "",
      street_address: "",
      city: "",
      zip: "",
      type: "",
      total: 0,
      pizzas: "",
    },
  };
  handleClick = (event) => {
    console.log("clicked");
    event.preventDefault();

    this.setState({
      newOrder: {
        customer_name: this.props.reduxStore.orderInfo.customer_name,
        street_address: this.props.reduxStore.orderInfo.street_address,
        city: this.props.reduxStore.orderInfo.cty,
        zip: this.props.reduxStore.orderInfo.zip,
        type: this.props.reduxStore.orderInfo.type,
        total: 0,
        pizzas: "",
      },
    });

    axios
      .post("/api/order", this.state.newOrder)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <>
        <h1>Step 3: Checkout</h1>
        <h3>
          {this.props.reduxStore.orderInfo.customer_name}
          <br />
          {this.props.reduxStore.orderInfo.street_address}
          <br />
          {this.props.reduxStore.orderInfo.cty}
        </h3>
        <h2>{this.props.reduxStore.orderInfo.type}</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            {/* this.props.reduxState.reducer.map => (item)
                <td>{item.name}</td>
                <td>{item.cost}</td> */}
          </tbody>
        </table>
        loop through costs and add them to eachother
        {/* Total: insert total here */}
        <button onClick={this.handleClick}>Button One</button>
      </>
    );
  }
}

const putReduxStateOnProps = (reduxStore) => ({ reduxStore });

export default connect(putReduxStateOnProps)(Checkout);
