import React, { Component } from 'react';
import { withRouter } from "react-router";
import request from '../utils/request';
import '../styles/recommend.scss';
import Layout from './layout';

class Recommend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recommend: [],
        };
    }
    async componentDidMount() {
        try {
            const response = await request('/personalized', {});
            this.setState({
                recommend: response.result,
            });
        } catch (error) {
            console.log(error)
        }
    }

    async showPlayListDetail(data) {
        const {
            id,
        } = data;
        this.props.history.push(`/playList?id=${id}`)
    }

    render() {
        const {
            recommend,
        } = this.state;
        return <Layout>
            <div className='music-list-container'>
                {recommend.map(it => <div
                    className='music-list-cover'
                    key={it.id}
                    onClick={() => this.showPlayListDetail(it)}
                >
                    <img src={it.picUrl} alt={it.copywriter} />
                    <p>{it.name}</p>
                </div>)}
            </div>
        </Layout>
    }
}

export default withRouter(Recommend);
