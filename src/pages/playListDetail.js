import React, { Component } from 'react';
import getQuery from '../utils/getQuery';
import request from '../utils/request';

class PlayListDetail extends Component {
    async componentDidMount() {
        const {
            id,
        } = getQuery();
        try {
            const response = await request(`/playlist/detail?id=${id}`);
            console.log(response);
        } catch (error) {

        }

    }
    render() {
        return <div>
            play list detail
    </div>;
    }
}

export default PlayListDetail;
