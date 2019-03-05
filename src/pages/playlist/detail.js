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
    render() {
        const {
            privileges,
            playlist,
        } = this.state;
        return <div style={{width: '100%'}}>
            <ul className='play-list-detail-ul'>
                {playlist.tracks.map((item, index) => <li key={item.id}>
                    <p>{index + 1}</p>
                    {item.name}
                </li>)}
            </ul>
        </div>;
    }
}

export default withRouter(PlayListDetail);
