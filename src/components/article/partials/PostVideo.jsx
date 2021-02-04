import React from "react";
import YouTube from "react-youtube";
import style from "./Partials.module.scss";

export const PostVideo = ({ video }) => {

  const opts = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  const getURL = (str) => {
    return str.split("=")[1];
  };
  const videoUrl = getURL(video);

  const onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };
  return (
    <div className={style.Partial__PostVideoContainer}>
    <div className={style.Partial__PostVideo}>
      <YouTube 
      className={style.Partial__Iframe}
      videoId={videoUrl} opts={opts} onReady={onReady} />
    </div>
    </div>
  );
};
