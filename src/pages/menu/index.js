import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './index.scss';
import SEARCH from '../../image/search.svg';
import CDN from '../../image/CDN.svg';
import HOT from '../../image/hot.svg';

class Menu extends Component {
    render() {
        return <div>
            <div className='menu'>
                <ul>
                    <li>
                        <a href='/'>
                            <img alt="" src={SEARCH} />
                            SEARCH
                        </a>
                    </li>
                    <li>
                        <Link to='/playList'>
                            <img alt="" src={CDN} />
                            PLAYLIST
                        </Link>
                    </li>
                    <li>
                        <Link to='/top'>
                            <img alt="" src={HOT} />
                            TOP
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='menu-space'></div>
        </div>
    }
}

export default Menu;
