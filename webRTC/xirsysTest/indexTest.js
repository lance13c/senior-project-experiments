import SimpleWebRTC from 'simplewebrtc';

let webrtc = new SimpleWebRTC({
    localVideoEl: 'localVideo',
    remoteVideosRl: 'remoteVideos',
    autoRequestMedia: true
});

webrtc.on('readyToCall');