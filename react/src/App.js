import { useEffect, useRef, useState } from 'react';

import JSMpeg from '@cycjimmy/jsmpeg-player';

export const App = () => {
    const [isVisible, setIsVisible] = useState(true);

    return (
        <>
            <button onClick={() => setIsVisible((prev) => !prev)}>
                toggle
            </button>
            {isVisible && <RTSPPlayer />}
            {!isVisible && <p>hidden</p>}
        </>
    );
};

// player.stop()
let player;
const RTSPPlayer = () => {
    const playerEl = useRef(null);

    useEffect(() => {
        player = new JSMpeg.VideoElement(
            playerEl.current,
            'ws://localhost:8080/',
            {
                autoplay: true,
            }
        );

        return () => {
            player.destroy();
        };
    }, []);

    return (
        <div>
            <div style={{ height: '480px', width: '640px' }} ref={playerEl} />
            <button onClick={() => player.play()}>Play</button>
            <button onClick={() => player.pause()}>Pause</button>
        </div>
    );
};
