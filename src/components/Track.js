import React from 'react';
import { PlayButton, Progress, Timer } from 'react-soundplayer/components';

const { Component } = React;

class Track extends Component {
    render() {
        let { track, currentTime, duration } = this.props;

        return (
            <div className="player">
                <PlayButton className="orange-button" {...this.props} />
                <Timer duration={duration} className="timer" currentTime={currentTime} />
                <div className="track-info">
                    <h2 className="track-title">{track ? track.title : ''}</h2>
                    <h3 className="track-user">{track ? track.user.username : ''}</h3>
                </div>
                <Progress className="progress-container" innerClassName="progress" value={currentTime / duration * 100 || 0} />
            </div>
        );
    }
}

export default Track;