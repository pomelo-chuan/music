import React, {Component} from 'react';
import LOADING from '../../image/index.equalizer-bars-loader.svg';
import './index.scss';

class Loading extends Component {
    render() {
        return <div className='loading'>
            <img alt='' src={LOADING} />
        </div>;
    }
}

export default Loading;
