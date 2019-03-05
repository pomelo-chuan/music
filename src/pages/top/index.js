import React, { Component } from 'react';
import REQ from '../../module/request';
import { withRouter } from "react-router";
import './index.scss';

class Top extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            loading: false,
        };
        this.topDetail = this.topDetail.bind(this);
    }
    async componentDidMount() {
        try {
            this.setState({
                loading: true,
            });
            const response = await REQ('/toplist');
            this.setState({
                list: response.list,
                loading: false,
            });
        } catch (error) {
            this.setState({
                loading: false,
            });
            console.error(error);
        }
    }
    topDetail(data) {
        const {
            id,
        } = data;
        this.props.history.push(`topDetail/${id}`);
    }
    render() {
        const {
            list,
            loading,
        } = this.state;
        return <div className='top-container'>
            {loading && 'loading'}
            {list.map((item, index) => {
                return <button
                    // style={{ backgroundImage: `url(${item.coverImgUrl})` }}
                    className='top-item'
                    key={item.id}
                    onClick={() => this.topDetail(item)}
                >
                    <div className='top-desc'>
                        <p>
                            {item.name}
                        </p>
                        <p>
                            {item.updateFrequency}
                        </p>
                    </div>
                </button>
            })}
        </div>;
    }
}

export default withRouter(Top);
