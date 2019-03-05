import React, {Component} from 'react';
import LOADING from '../../image/index.equalizer-bars-loader.svg';
import './index.scss';

class Loading extends Component {
    render() {
        return <div className='loading'>
            <img src={LOADING} />
        </div>;
    }
}

export default Loading;
