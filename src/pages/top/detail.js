import React, { Component } from 'react';
import REQ from '../../module/request';

class TopDetail extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    async componentDidMount() {
        const id = this.props.match.params.id;
        try {
            const response = await REQ(`/toplist/detail?id=${id}`);
            console.log(response);
        } catch (error) {
            console.error(error.message);
        }
    }
    render() {
        return <div>
            top detail
        </div>;
    }
}

export default TopDetail;
