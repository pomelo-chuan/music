import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './index.scss';

class Menu extends Component {
    render() {
        return <div className='menu'>
            <ul>
                <li>
                    <a href='/'>SEARCH</a>
                </li>
                <li>
                    <Link to='/playList'>PLAYLIST</Link>
                </li>
                <li>
                    <Link to='/top'>TOP</Link>
                </li>
            </ul>
        </div>
    }
}

export default Menu;
