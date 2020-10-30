// PizzaList.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PizzaListItem from '../PizzaListItem/PizzaListItem';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';


class PizzaList extends Component {
   
    handleClick = () => [
        this.props.history.push()
    ]

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
