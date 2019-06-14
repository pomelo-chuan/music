import React, { Component } from 'react';
import LOADING from '../images/loading.gif';
import './loading.scss';

class Loading extends Component {
    render() {
        return <div className="loading">
            <img src={LOADING} alt="loading" />
        </div>
    }
}

export default Loading;
