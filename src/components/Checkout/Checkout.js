import React, {Component} from 'react';
import {connect} from 'react-redux';

class Checkout extends Component {


    handleClick = () =>{
        console.log('clicked');
        
    }

  render(){
    return (
        <>
        {/* <h3>import user info here</h3> */}

        <h1>Step 3: Checkout</h1>
        <h3>
            {this.props.reduxStore.orderInfo.customer_name}<br/>
            {this.props.reduxStore.orderInfo.street_address}<br/>
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

const putReduxStateOnProps = (reduxStore) => ({reduxStore});

export default connect(putReduxStateOnProps)(Checkout);
