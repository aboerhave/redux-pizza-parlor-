// PizzaList.js

import React, { Component } from 'react';
import { connect } from 'react-redux';


class PizzaList extends Component {
   


    render() {
        return (
            <div>
                {/* {this.props.reduxState.pizzaList} */}
                <table>
                    <tbody>
                        
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
