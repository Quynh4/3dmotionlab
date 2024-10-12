/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef, useState } from "react";
import tvc from "../../assets/images/tvc.png";
import video from "../../assets/videos/video.mp4";
import { ReactComponent as PlayIcon } from "../../assets/images/icon-play.svg";

const VideoTVC = () => {
	const videoRef = useRef(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const [isHovered, setIsHovered] = useState(false);
	const handlePlayPause = () => {
		if (isPlaying) {
			videoRef.current.pause();
		} else {
			videoRef.current.play();
		}
		setIsPlaying(!isPlaying);
	};

	const handleVideoClick = () => {
		handlePlayPause();
	};

	return (
		<div
			className="custom-video_container"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<video
				ref={videoRef}
				className="custom-video_video"
				width="100%"
				height="auto"
				poster={tvc}
				onClick={handleVideoClick}
			>
				<source src={video} type="video/mp4" />
				Your browser does not support the video tag.
			</video>
			{isHovered && (
				<div className="custom-video_control">
					<button
						className="play-pause-button"
						onClick={handlePlayPause}
						aria-label={isPlaying ? "Pause" : "Play"}
					>
						<div className="play-icon">
							<PlayIcon />
						</div>
					</button>
				</div>
			)}
		</div>
	);
};

export default VideoTVC;
