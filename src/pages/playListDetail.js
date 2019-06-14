import React, { Component } from 'react';
import { withRouter } from "react-router";
import getQuery from '../utils/getQuery';
import request from '../utils/request';
import "../styles/playListDetail.scss";
import PLAY from '../images/play.svg';
import Loading from '../component/loading';

class PlayListDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            playlist: {
                tags: [],
                tracks: [
                    {
                        name: '',
                        ar: [],
                        al: {},
                    }
                ],
                creator: {
                }
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
            console.log(response);
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

    play(data) {
        const {
            id,
        } = data;
        this.props.history.push(`/player?id=${id}`)
    }

    render() {
        const {
            loading,
            playlist,
        } = this.state;
        if (loading === true) {
            return <Loading />;
        }
        return <div className="play-list-detail-content">
            <div className="play-list-detail-banner">
                <img className="play-list-detail-banner-cover" src={playlist.coverImgUrl} alt={playlist.description} />
                <div className="play-list-detail-banner-desc">
                    <p>{playlist.name}</p>
                    <div>
                        <img className="play-list-detail-user-icon" src={playlist.creator.backgroundUrl} alt={playlist.creator.nickname} />
                        <p>{playlist.creator.nickname}</p>
                    </div>
                </div>
            </div>
            {
                playlist.tags.length > 0 &&
                <div className="play-list-detail-tag">
                    <span>标签</span>
                    {playlist.tags.map((it, index) => <span key={index}>{it}</span>)}
                </div>
            }
            {
                playlist.description &&
                <div className="play-list-detail-description">
                    简介：{playlist.description}
                </div>
            }
            <p className="play-list-item-title">歌曲列表</p>
            <div className="play-list-detail-music-list">
                {playlist.tracks.map((it, index) => <div className="music-list-detail" key={index}>
                    <div className="left">{index + 1}</div>
                    <div className="middle">
                        <div>{it.name}</div>
                        <div>{it.ar.map(it => it.name).join(' / ')} - {it.al.name}</div>
                    </div>
                    <div className="right">
                        <button onClick={() => this.play(it)}>
                            <img src={PLAY} alt="play" />
                        </button>
                    </div>
                </div>)}
            </div>
        </div>;
    }
}

export default withRouter(PlayListDetail);
