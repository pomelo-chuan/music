import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Recommend from './pages/recommend';
import Hot from './pages/hot';
import Search from './pages/search';
import PlayListDetail from './pages/playListDetail';

class TheRoutes extends Component {
    render() {
        return <Router>
            <Route exact path="/" render={() => (
                <Redirect to="/recommend" />
            )} />
            <Route path="/recommend" component={Recommend} />
            <Route path="/hot" component={Hot} />
            <Route path="/search" component={Search} />
            <Route path="/playList" component={PlayListDetail} />
        </Router>
    }
}

export default TheRoutes;
