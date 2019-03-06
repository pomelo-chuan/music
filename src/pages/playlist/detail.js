import React, { Component } from 'react';
import { withRouter } from "react-router";
import REQ from '../../module/request';
import './detail.scss';

class PlayListDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            privileges: [],
            playlist: {
                tracks: [],
            },
            music: '',
        };
        this.trackDetail = this.trackDetail.bind(this);
    }
    async componentDidMount() {
        try {
            const id = this.props.match.params.id;
            const response = await REQ(`/playlist/detail?id=${id}`);
            const {
                privileges,
                playlist,
            } = response;
            this.setState({
                privileges,
                playlist,
            });
            console.log(response)
        } catch (error) {
            console.error(error.message);
        }
    }
    async trackDetail(data) {
        try {
            const response = await REQ(`/song/detail?ids=${data.id}`);
            const song = await REQ(`/song/url?id=${response.songs[0]['id']}`);
            console.log(song);
            this.setState({
                music: song.data[0]['url']
            });
        } catch (error) {
            console.error(error.message);
        }
    }
    render() {
        const {
            playlist,
            music,
        } = this.state;
        return <div style={{ width: '100%' }}>
            <audio  src={music} />
            <div className='play-list-detail-list'>
                {playlist.tracks.map((item, index) => <button
                    key={item.id}
                    onClick={() => this.trackDetail(item)}
                >
                    <p className='play-list-detail-list-name'>
                        <span>{index + 1}</span>
                        {item.name}
                    </p>
                    <p className='play-list-detail-list-singer'>
                        {item.ar.map(ar => ar.name).join(' / ')}
                    </p>
                </button>)}
            </div>
        </div>;
    }
}

export default withRouter(PlayListDetail);
