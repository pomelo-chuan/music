import React, { Component } from 'react';
import Menu from '../menu';
import './index.scss';

class Home extends Component {
    render() {
        const {
            children,
        } = this.props;
        return <div className='home-layout'>
            <Menu />
            {children}
        </div>;
    }
}

export default Home;
