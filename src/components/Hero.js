import React, { useEffect } from "react";
import tvc from "../assets/images/tvc.png";
import video from "../assets/videos/video.mp4";

const Hero = () => {
	useEffect(() => {
		const videos = document.querySelectorAll(".custom-video_video");

		videos.forEach((video, i) => {
			video.addEventListener("click", function () {
				const controls = this.nextElementSibling;
				if (controls.innerHTML === "►") {
					controls.innerHTML = "||";
					this.play();
				} else {
					this.pause();
					controls.innerHTML = "►";
				}
			});

			video.addEventListener("mouseover", function () {
				const controls = this.nextElementSibling;
				controls.style.display = "flex";
			});

			video.addEventListener("mouseout", function () {
				const controls = this.nextElementSibling;
				if (!this.paused) {
					controls.style.display = "none";
				}
			});

			video.addEventListener("ended", function () {
				const controls = this.nextElementSibling;
				controls.style.display = "flex";
				controls.innerHTML = "►";
			});
		});
	}, []);
	return (
		<section className="hero">
			<div className="icon-1"></div>
			<div className="icon-2"></div>
			<div className="icon-3"></div>
			<div className="icon-4"></div>

			<div className="text">
				<div className="subtext">
					<div className="icon">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="18"
							height="18"
							viewBox="0 0 18 18"
							fill="none"
						>
							<path
								d="M9 5.25002C12.3137 5.25002 15 7.93628 15 11.25C15 14.5637 12.3137 17.25 9 17.25C5.68629 17.25 3 14.5637 3 11.25C3 7.93628 5.68629 5.25002 9 5.25002ZM9 7.875L8.00812 9.88478L5.79019 10.2071L7.39509 11.7715L7.01623 13.9805L9 12.9375L10.9838 13.9805L10.6049 11.7715L12.2099 10.2071L9.99188 9.88478L9 7.875ZM9.75 1.49927L13.5 1.50002V3.75002L12.4775 4.60319C11.6479 4.1683 10.7269 3.88416 9.75082 3.78714L9.75 1.49927ZM8.25 1.49927L8.24977 3.78708C7.2738 3.884 6.35284 4.16804 5.52331 4.6028L4.5 3.75002V1.50002L8.25 1.49927Z"
								fill="white"
							/>
						</svg>
					</div>
					<span className="award-winning-finance">
						Award-Winning Finance Solutions
					</span>
				</div>
				<h1>Giải Pháp Sáng Tạo</h1>
				<h2>Kết nối tương lai</h2>

				<p className="description">
					Kết hợp giữa nghệ thuật và công nghệ, 3D Motion Lab mang đến cho bạn
					những sản phẩm 3D sống động, giúp doanh nghiệp tạo kết nối cảm xúc với
					khách hàng.
				</p>

				<div className="contact-now">
					<a href="#" className="cta-btn">
						Liên hệ ngay
					</a>
					<div className="icon">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="17"
							height="16"
							viewBox="0 0 17 16"
							fill="none"
						>
							<mask
								id="mask0_1_576"
								maskUnits="userSpaceOnUse"
								x="0"
								y="0"
								width="17"
								height="16"
							>
								<rect x="0.5" width="16" height="16" fill="#D9D9D9" />
							</mask>
							<g mask="url(#mask0_1_576)">
								<path
									d="M11.7001 5.6501L4.96674 12.3834C4.84452 12.5057 4.70563 12.564 4.55007 12.5584C4.39452 12.5529 4.25563 12.489 4.13341 12.3668C4.01118 12.2445 3.95007 12.1029 3.95007 11.9418C3.95007 11.7807 4.01118 11.639 4.13341 11.5168L10.8501 4.8001H7.49857C7.32902 4.8001 7.18685 4.74293 7.07207 4.6286C6.95741 4.51426 6.90007 4.3726 6.90007 4.2036C6.90007 4.0346 6.95752 3.89176 7.07241 3.7751C7.1873 3.65843 7.32968 3.6001 7.49957 3.6001H12.2952C12.4651 3.6001 12.6084 3.65754 12.7251 3.77243C12.8417 3.88732 12.9001 4.02971 12.9001 4.1996V8.99526C12.9001 9.16515 12.8429 9.30843 12.7286 9.4251C12.6142 9.54176 12.4726 9.6001 12.3036 9.6001C12.1346 9.6001 11.9917 9.54276 11.8751 9.4281C11.7584 9.31332 11.7001 9.17115 11.7001 9.0016V5.6501Z"
									fill="black"
								/>
							</g>
						</svg>
					</div>
				</div>

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
			</div>
		</section>
	);
};

export default Hero;
