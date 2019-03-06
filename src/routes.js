import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from './pages/home';
import Guide from './pages/guide';
import Top from './pages/top';
import TopDetail from './pages/top/detail';
import PlayList from './pages/playlist';
import PlayListDetail from './pages/playlist/detail';

const Routes = () => (
    <Router>
        <Home>
            <Route exact path="/" component={Guide} />
            <Route path="/top" component={Top} />
            <Route path="/topDetail/:id" component={TopDetail} />
            <Route path="/playList" component={PlayList} />
            <Route path="/playListDetail/:id" component={PlayListDetail} />
        </Home>
    </Router>
);
export default Routes;
