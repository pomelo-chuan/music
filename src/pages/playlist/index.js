import React, { Component } from 'react';
import REQ from '../../module/request';
import chunk from 'lodash/chunk';
import { withRouter } from "react-router";
import './index.scss';
import Loading from '../../component/loading';

class PlayList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sub: [],
            playlists: [],
            loading: false,
        };
        this.selectCatgery = this.selectCatgery.bind(this);
    }
    async componentDidMount() {
        try {
            this.setLoading(true);
            const response = await REQ('/playlist/catlist');
            this.setLoading(false);
            const {
                sub,
            } = response;
            this.setState({
                sub,
            });
            this.requestPlayList(sub[0]['name']);
        } catch (error) {
            console.error(error.message);
        }
    }
    selectCatgery(event) {
        const value = event.currentTarget.value;
        this.requestPlayList(value);
    }
    async requestPlayList(cat) {
        try {
            this.setLoading(true);
            const response = await REQ(`/top/playlist?cat=${cat}&limit=20`);
            this.setLoading(false);
            const {
                playlists,
            } = response;
            this.setState({
                playlists,
            });
        } catch (error) {
            console.error(error.message);
        }
    }
    playListDetail(data) {
        const {
            id,
        } = data;
        this.props.history.push(`/playListDetail/${id}`);
    }
    setLoading(bool) {
        this.setState({
            loading: bool,
        });
    }
    render() {
        const {
            sub,
            playlists,
            loading,
        } = this.state;
        return <div style={{ width: '100%' }}>
            {loading && <Loading />}
            <select
                onChange={this.selectCatgery}
            >
                {sub.map((item, index) =>
                    <option
                        key={index}>
                        {item.name}
                    </option>)}
            </select>
            <div className='play-list-container'>
                {chunk(playlists, 2).map((data, index) =>
                    <div className='play-list-item' key={index}>
                        {
                            data.map(item =>
                                <button
                                    key={item.id}
                                    onClick={() => this.playListDetail(item)}
                                >
                                    <img alt='' src={item.coverImgUrl} />
                                    <div className='play-list-desc'>
                                        <p>{item.name}</p>
                                        <p>{item.creator.nickname}</p>
                                        <p>{item.playCount / 1000}K PLAYED</p>
                                    </div>
                                </button>
                            )
                        }
                    </div>
                )}
            </div>
        </div>
    }
}

export default withRouter(PlayList);
