import React from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "./Video.css";
export const VideoJS = (props) => {
  const videoRef = React.useRef(null);
  const playerRef = React.useRef(null);

  const { options, onReady } = props;

  React.useEffect(() => {
    // Make sure Video.js player is only initialized once
    if (!playerRef.current) {
      const videoElement = videoRef.current;

      if (!videoElement) return;

      const player = (playerRef.current = videojs(videoElement, options, () => {
        videojs.log("player is ready");
        onReady && onReady(player);
        console.log(player);
      }));

      // You could update an existing player in the `else` block here
      // on prop change, for example:
    } else {
      // const player = playerRef.current;
      // player.autoplay(options.autoplay);
      // player.src(options.sources);
    }
  }, [options, videoRef]);

  // Dispose the Video.js player when the functional component unmounts
  React.useEffect(() => {
    const player = playerRef.current;
    console.log(player);
    return () => {
      if (player) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  return (
    <div data-vjs-player>
      <link
        href="https://unpkg.com/@videojs/themes@1/dist/fantasy/index.css"
        rel="stylesheet"
      ></link>
      <video
        ref={videoRef}
        className="video-js vjs-big-play-centered vjs-theme-fantasy vjs-matrix"
      />
    </div>
  );
};

export default VideoJS;
