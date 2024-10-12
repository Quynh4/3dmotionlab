/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import tvc from "../../assets/images/tvc.png";
import video from "../../assets/videos/video.mp4";

const VideoTVC = () => {
	return (
		<div className="custom-video_container">
			<video
				className="custom-video_video"
				width="100%"
				height="auto"
				poster={tvc}
			>
				<source src={video} type="video/mp4" />
				Your browser does not support the video tag.
			</video>
			<div className="custom-video_control"></div>
		</div>
	);
};

export default VideoTVC;
