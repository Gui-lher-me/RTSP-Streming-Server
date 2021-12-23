Stream = require('node-rtsp-stream');

// 'rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mov'
// "rtsp://root:root@192.169.1.47:554/hosts/SRVAXXON/DeviceIpint.05/SourceEndpoint.video:0:0"

stream = new Stream({
    name: 'RSTP',
    // streamUrl: "rtsp://YOUR_IP:PORT",
    streamUrl:
        'rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mov',
    wsPort: 8080,
    ffmpegOptions: {
        // options ffmpeg flags
        '-f': 'mpegts', // output file format.
        '-codec:v': 'mpeg1video', // video codec
        '-b:v': '1000k', // video bit rate
        '-stats': '',
        '-r': 25, // frame rate
        '-s': '640x480', // video size
        '-bf': 0,
        // audio
        '-codec:a': 'mp2', // audio codec
        '-ar': 44100, // sampling rate (in Hz)(in Hz)
        '-ac': 1, // number of audio channels
        '-b:a': '128k', // audio bit rate
    },
});
