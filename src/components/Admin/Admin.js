import React, { Component } from "react";
import { connect } from "react-redux";

class Admin extends Component {


    componentDidMount = () =>{
        this.getOrders();
    }

    getOrders = () => {
        axios.get('/api/order').then((response) => {
        this.props.dispatch({ type: "GET_ORDERS", payload: response.data });      
        }).catch((error) => {
        console.log(error); 
        })
    }

  render() {
    return (
      <>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Time Order Placed</th>
              <th>Type</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            {this.props.reduxStore.allOrders.map((order) => (
              <tr key={order.id}>
                <td>{order.customer_name}</td>
                <td>{order.time}</td>
                <td>{order.type}</td>
                <td>{order.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

const putReduxStateOnProps = (reduxStore) => ({
  reduxStore,
});
export default connect(putReduxStateOnProps)(ArtistList);
