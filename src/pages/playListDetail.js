import React, { Component } from 'react';
import getQuery from '../utils/getQuery';
import request from '../utils/request';

class PlayListDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            playlist: {
                tags: [],
                tracks: [
                    { name: '' }
                ]
            },
            privileges: [],
        }
    }
    async componentDidMount() {
        const {
            id,
        } = getQuery();
        try {
            this.setState({
                loading: true,
            });
            const response = await request(`/playlist/detail?id=${id}`);
            const {
                privileges,
                playlist,
            } = response;
            this.setState({
                loading: false,
                privileges: privileges,
                playlist: playlist,
            });
        } catch (error) {

        }

    }
    render() {
        const {
            loading,
            playlist,
        } = this.state;
        if (loading === true) {
            return <div>loading</div>;
        }
        return <div>
            <div></div>
            <div className="tag">
                <span>标签: </span>
                {playlist.tags.map((it, index) => <span key={index}>{it}</span>)}
            </div>
            <div className="description">
                {playlist.description}
            </div>
            <p>歌曲列表</p>
            <div className="music-list">
                {playlist.tracks.map((it, index) => <div key={index}>{it.name}</div>)}
            </div>
        </div>;
    }
}

export default PlayListDetail;
