// PizzaList.js

import React, { Component } from 'react';
import { connect } from 'react-redux';


class PizzaList extends Component {
   


    render() {
        return (
            <div>
                <table>
                    <tbody>
                        {this.props.reduxStore.pizzaList.map((pizza, i) => {
                            return <PizzaListItem key={i} pizza={pizza} />
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
