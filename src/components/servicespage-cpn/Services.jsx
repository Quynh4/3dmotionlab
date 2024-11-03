/* eslint-disable jsx-a11y/anchor-is-valid */
import VideoTVC from "../ui/VideoTVC";
import { ReactComponent as CameraIcon } from "../../assets/images/icon-camera.svg";
import { ReactComponent as MovieIcon } from "../../assets/images/icon-movie.svg";
import { ReactComponent as VRIcon } from "../../assets/images/icon-vr-white.svg";
import video from "../../assets/videos/video.mp4";
import videovr360 from "../../assets/videos/VR360.mov";

import ContactButton from "../ui/ContactButton";

const Services = () => {
	return (
		<>
			<section className="service__section" id="tvc">
				<VideoTVC vidSrc={video} />
				<div className="service__text">
					<div className="subtext">
						<div className="icon">
							<CameraIcon />
						</div>

						<span>TVC</span>
					</div>
					<h2>Television Commercial</h2>
					<p>
						TVC là một hình thức quảng cáo sử dụng truyền hình để quảng bá sản
						phẩm, dịch vụ, ý tưởng, cá nhân hoặc tổ chức. Thời lượng của TVC
						thường kéo dài từ 10 giây đến 3 phút, tuy nhiên, điều quan trọng là
						thông điệp phải hấp dẫn ngay từ những giây đầu tiên để giữ chân
						người xem. Mục tiêu chính của TVC là giới thiệu sản phẩm mới, tăng
						cường nhận thức thương hiệu và thúc đẩy người tiêu dùng sử dụng sản
						phẩm. Đồng thời, TVC cũng có tác dụng duy trì sự hiện diện của sản
						phẩm trong tâm trí khách hàng, tạo ra nhu cầu lâu dài.
					</p>
					<div className="service__btn-group">
						<div className="button">
							<a href="#" className="cta-btn">
								Xem dự án
							</a>
						</div>
						<ContactButton />
					</div>
				</div>
			</section>

			<section className="service__section" id="web">
				<div className="service__text">
					<div className="subtext">
						<div className="icon">
							<MovieIcon />
						</div>

						<span>3D Website</span>
					</div>
					<h2>3D Website</h2>
					<p>
						VR360 Tour là một trải nghiệm thực tế ảo cho phép người dùng khám
						phá không gian 360 độ thông qua các thiết bị như máy tính, điện
						thoại thông minh, hoặc kính thực tế ảo. Với công nghệ này, người
						dùng có thể di chuyển trong môi trường ảo như đang thực sự có mặt
						tại đó, quan sát toàn cảnh từ mọi góc nhìn.
					</p>
					<div className="service__btn-group">
						<div className="button">
							<a href="#" className="cta-btn">
								Xem dự án
							</a>
						</div>
						<ContactButton />
					</div>
				</div>
				<iframe
					src="https://drive.google.com/file/d/1ND8os7RRQD89YDPf_t2X03gN3w9QKUpx/preview"
					width="640"
					allow="autoplay"
				></iframe>
			</section>

			<section className="service__section" id="vr360">
				<VideoTVC vidSrc={videovr360} />

				<div className="service__text">
					<div className="subtext">
						<div className="icon">
							<VRIcon />
						</div>
						<span>VR360</span>
					</div>
					<h2>VR360 Virtual Tour</h2>
					<p>
						3D website không chỉ mang lại trải nghiệm trực quan và hấp dẫn, mà
						còn cho phép người dùng tương tác với nội dung theo cách chân thực
						và sinh động hơn. Với khả năng mô phỏng không gian ba chiều, người
						dùng có thể xoay, phóng to, hoặc khám phá các đối tượng và không
						gian theo nhiều góc độ khác nhau. Điều này đặc biệt quan trọng đối
						với các ngành như bất động sản, thương mại điện tử, du lịch, và giáo
						dục, nơi mà việc cung cấp thông tin trực quan và dễ hiểu là yếu tố
						then chốt để thu hút và giữ chân khách hàng.
					</p>
					<div className="service__btn-group">
						<div className="button">
							<a href="#" className="cta-btn">
								Xem dự án
							</a>
						</div>
						<ContactButton />
					</div>
				</div>
			</section>
		</>
	);
};

export default Services;
