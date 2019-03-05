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
        console.log(data);
    }
    render() {
        const {
            privileges,
            playlist,
        } = this.state;
        return <div style={{ width: '100%' }}>
            <div className='play-list-detail-list'>
                {playlist.tracks.map((item, index) => <button
                    key={item.id}
                    onClick={() => this.trackDetail(item)}
                >
                    <p>{index + 1}</p>
                    <p>{item.name}</p>
                    <p>
                        {item.ar.map(ar => ar.name).join(' / ')}
                    </p>
                </button>)}
            </div>
        </div>;
    }
}

export default withRouter(PlayListDetail);
