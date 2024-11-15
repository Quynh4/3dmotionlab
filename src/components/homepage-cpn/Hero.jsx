import ContactButton from "../ui/ContactButton";
import VideoTVC from "../ui/VideoTVC";
import { ReactComponent as Icon1 } from "../../assets/images/icon1.svg";
import { ReactComponent as Icon2 } from "../../assets/images/icon2.svg";
import { ReactComponent as Icon3 } from "../../assets/images/icon3.svg";
import { ReactComponent as Icon4 } from "../../assets/images/icon4.svg";
import video from "../../assets/videos/video.mp4";

const Hero = () => {
	return (
		<section className="hero">
			<div className="icon-1 home__icon">
				<Icon1 />
			</div>
			<div className="icon-2 home__icon">
				<Icon2 />
			</div>
			<div className="icon-3 home__icon">
				<Icon3 />
			</div>
			<div className="icon-4 home__icon">
				<Icon4 />
			</div>

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
					3D Motion Lab mang đến những giải pháp số hóa tiên tiến và đáng tin
					cậy luôn tập trung vào chất lượng và sáng tạo, giúp khách hàng đạt
					được những bước tiến vượt bậc.
				</p>

				<ContactButton />

				<VideoTVC vidSrc={video} />
			</div>
		</section>
	);
};

export default Hero;
