import React, { Component } from 'react';
import {
    NavLink,
} from 'react-router-dom';
import MUSIC from '../images/music.svg';

class Layout extends Component {
    render() {
        const {
            children,
        } = this.props;
        return <div className="layout">
            <div className="logo">
                <img src={MUSIC} />
                {/* <p>网易云音乐</p> */}
            </div>
            <div className='tab'>
                <NavLink to='/recommend' activeClassName='active'>推荐音乐</NavLink>
                <NavLink to='/hot' activeClassName='active'>热歌榜</NavLink>
                <NavLink to='/search'>搜索</NavLink>
            </div>
            <div className="divider"></div>
            {children}
        </div >;
    }
}

export default Layout;

