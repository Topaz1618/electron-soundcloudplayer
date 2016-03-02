import React from 'react'
import { SoundPlayerContainer } from 'react-soundplayer/addons';
import Track from './Track'

const { PropTypes, Component } = React;

class ProgressSoundPlayer extends Component {
    render() {
        return (
            <SoundPlayerContainer {...this.props}>
                <Track />
            </SoundPlayerContainer>
        );
    }
}


ProgressSoundPlayer.propTypes = {
    resolveUrl: PropTypes.string.isRequired,
    clientId: PropTypes.string.isRequired
};

export default ProgressSoundPlayer;