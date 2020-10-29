
import React, { Component } from 'react';
import {connect} from 'react-redux';

class Admin extends Component {
    render() {
        return (
            <>
            </>
        )}
}



const putReduxStateOnProps = (reduxState) => ({
    reduxState 
  });
  export default connect(putReduxStateOnProps)(ArtistList);