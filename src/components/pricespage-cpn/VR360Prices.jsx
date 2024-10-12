/* eslint-disable jsx-a11y/anchor-is-valid */
import { ReactComponent as VRIcon } from "../../assets/images/icon-vr-white.svg";

const VR360Prices = () => {
	return (
		<section class="pricing-container">
			<div className="text">
				<div className="subtext">
					<div className="icon">
						<VRIcon />
					</div>
					<span>VR360</span>
				</div>
				<h2>VR360 Virtual Tour</h2>
			</div>
			<div className="pricing-table">
				<div class="pricing-card basic">
					<div className="pricing-card__head">
						<h2>Basic</h2>
					</div>
					<div className="pricing-card__content">
						<p>Hậu kỳ:</p>
						<ul>
							<li>Quay VR 360 cho một địa điểm đơn giản</li>
							<li>Tích hợp các điểm thông tin cơ bản (văn bản, hình ảnh).</li>
							<li>
								Thêm logo và màu sắc thương hiệu của khách hàng vào giao diện
								VR.
							</li>
							<li>
								Cung cấp video hướng dẫn chi tiết cách sử dụng và triển khai VR
								Tour.
							</li>
							<li>Diện tích khu vực tham khảo: từ 300m2 - 5000m2</li>
						</ul>
					</div>
					<div className="pricing-card__btn">
						<div className="button">
							<a href="#" className="cta-btn">
								Chọn gói này
							</a>
						</div>
					</div>
				</div>

				<div class="standard pricing-card">
					<div className="pricing-card__head">
						<h2>Standard</h2>
					</div>

					<div className="pricing-card__content">
						<ul>
							<ul>
								<li>
									Quay và dựng VR Tour cho nhiều khu vực với kết nối liên tục.
								</li>
								<li>
									Tích hợp các điểm thông tin nâng cao như video, liên kết tương
									tác.
								</li>
								<li>Tối ưu hóa chất lượng hình ảnh và âm thanh.</li>
								<li>Tích hợp bản đồ mini giúp điều hướng dễ dàng.</li>
								<li>Diện tích khu vực tham khảo: từ 5000m2 - 20.000m2</li>
							</ul>
						</ul>
					</div>
					<div className="pricing-card__btn">
						<div className="button">
							<a href="#" className="cta-btn">
								Chọn gói này
							</a>
						</div>
					</div>
				</div>

				<div class="premium pricing-card ">
					<div className="pricing-card__head">
						<h2>Premium</h2>
					</div>

					<div className="pricing-card__content">
						<ul>
							<li>
								Quay và dựng VR Tour cho toàn bộ tòa nhà hoặc khu vực rộng lớn.
							</li>
							<li>Tích hợp điều hướng tự động.</li>
							<li>Tính năng chia sẻ VR Tour qua mạng xã hội và email.</li>
							<li>Đảm bảo trải nghiệm tốt trên cả di động và máy tính.</li>
							<li>Diện tích khu vực tham khảo: trên 20.000m2</li>
						</ul>
					</div>
					<div className="pricing-card__btn">
						<div className="button">
							<a href="#" className="cta-btn">
								Chọn gói này
							</a>
						</div>
					</div>
				</div>
			</div>
			<div class="content">
				<h3>
					Lý do lựa chọn 3D Motion Lab làm đơn vị sản xuất VR360 Virtual Tour?
				</h3>
				Các dự án VR360 Virtual Tour do 3D Motion Lab thực hiện luôn được đánh
				giá cao về tính chân thực, tương tác và tối ưu hóa trải nghiệm người
				dùng, đồng thời đáp ứng tốt ngân sách và thời gian của doanh nghiệp:
				<ul>
					<li>
						Đội ngũ chuyên gia: 3D Motion Lab sở hữu đội ngũ giàu kinh nghiệm và
						hợp tác với các chuyên gia hàng đầu trong lĩnh vực công nghệ VR và
						thiết kế 3D.
					</li>
					<li>
						Thấu hiểu khách hàng: Chúng tôi phân tích nhu cầu để đưa ra giải
						pháp VR360 tối ưu, giúp thương hiệu truyền tải thông điệp một cách
						sống động và hiệu quả.
					</li>
					<li>
						Quy trình tiêu chuẩn quốc tế: Quy trình làm việc chuyên nghiệp, rõ
						ràng và nhanh chóng, tập trung vào nhu cầu khách hàng.
					</li>
					<li>
						Thiết bị tiên tiến: Sử dụng công nghệ và trang thiết bị hiện đại
						nhất để mang đến trải nghiệm VR360 chân thực và tương tác cao.
					</li>
					<li>
						Dịch vụ toàn diện: 3D Motion Lab cam kết mang lại giải pháp VR360
						chất lượng, đáp ứng mọi yêu cầu của khách hàng và tối ưu hóa trải
						nghiệm thương hiệu.
					</li>
				</ul>
			</div>
		</section>
	);
};

export default VR360Prices;
