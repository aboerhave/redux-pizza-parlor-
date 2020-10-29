import React, {Component} from 'react';
import {connect} from 'react-redux';

class Checkout extends Component {

  render(){
    return (
        <>
        <h1>Step 3: Checkout</h1>
        {/* <h3>import user info here</h3> */}
        {/* <h2>import order type here</h2> */}
        {/* table with order info here */}

        {/* Total: insert total here */}
        {/* Checkout Button */}
        </>

        
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({reduxState});

export default connect(putReduxStateOnProps)(Checkout);
