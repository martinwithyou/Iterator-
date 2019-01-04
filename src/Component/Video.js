import React, { Component } from 'react';
//import Xgplayer from 'xgplayer-react';

class VideoComponent extends Component {
    componentWillMount() {

    }
    render() {
        let config = {
            id: 'mse',
            url: 'http://www.html5videoplayer.net/videos/madagascar3.mp4'
            };
        let format = 'mp4';
        let Player = null;
        return (
            <div className="foot">
                <h1>you are VideoComponent</h1>
                {/* <Xgplayer 
                config={config} 
                format={format} 
                playerInit={(player)=>{ Player = player; }} />  */}
            </div>
        );
    }
}

export default VideoComponent;
