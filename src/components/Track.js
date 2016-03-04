import React, {Component} from 'react';
import { PlayButton, Progress, Timer } from 'react-soundplayer/components';

export default class Track extends Component {
    render() {
        let { track, soundCloudAudio, playing, seeking, currentTime, duration } = this.props;
        
        return (
            <div className="player">
                <PlayButton className="orange-button" soundCloudAudio={soundCloudAudio} playing={playing} seeking={seeking} />
                <Timer duration={duration} className="timer" currentTime={currentTime} />
                <div className="track-info">
                    <h2 className="track-title">{track && track.title}</h2>
                    <h3 className="track-user">{track && track.user && track.user.username}</h3>
                </div>
                <Progress className="progress-container" innerClassName="progress" value={currentTime / duration * 100 || 0} />
            </div>
        );
    }
}