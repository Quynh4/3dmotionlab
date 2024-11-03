/* eslint-disable jsx-a11y/anchor-is-valid */
import { ReactComponent as CameraIcon } from "../../assets/images/icon-camera.svg";
import ChooseButton from "../ui/ChooseButton";
const TelevisionPrices = () => {
	return (
		<section class="pricing-container" id="tvc">
			<div className="text">
				<div className="subtext">
					<div className="icon">
						<CameraIcon />
					</div>

					<span>TVC</span>
				</div>
				<h2>Television Commercial</h2>
			</div>
			<div className="pricing-table">
				<div class="pricing-card basic">
					<div className="pricing-card__head">
						<h2>Basic</h2>
					</div>
					<div className="pricing-card__content">
						<p>Hậu kỳ:</p>
						<ul>
							<li>Đọc lời bình: chuyên nghiệp</li>
							<li>3D, logo, slogan: 1 kỹ xảo lựa chọn</li>
							<li>Có nhạc bản quyền</li>
							<li>Thời lượng phim: 30 giây</li>
							<li>Hỗ trợ cắt phim 15s</li>
							<li>Số lần duyệt: 2</li>
						</ul>
					</div>
					<div className="pricing-card__btn">
						<ChooseButton />
					</div>
				</div>

				<div class="standard pricing-card">
					<div className="pricing-card__head">
						<h2>Standard</h2>
					</div>

					<div className="pricing-card__content">
						<p>Tiền kỳ:</p>
						<ul>
							<li>Ý tưởng phim</li>
							<li>Hoàn thiện kịch bản chi tiết phim</li>
							<li>Storyboard trắng đen minh họa</li>
							<li>Số ngày quay dự kiến: 1 ngày</li>
							<li>Bộ ống kính chuẩn</li>
							<li>Bối cảnh theo kịch bản</li>
							<li>Chất lượng quay phim tiêu chuẩn: HD</li>
							<li>
								Bao gồm: Đạo diễn, Quay phim chuyên nghiệp, Tổ chức sản xuất.
							</li>
						</ul>
						<p>Hậu kỳ:</p>
						<ul>
							<li>Đọc lời bình: chuyên nghiệp</li>
							<li>3D, logo, slogan: 2 kỹ xảo lựa chọn</li>
							<li>Có nhạc bản quyền</li>
							<li>Thời lượng phim: 30 giây</li>
							<li>Hỗ trợ cắt phim 15s</li>
							<li>Số lần duyệt: 3</li>
						</ul>
					</div>
					<div className="pricing-card__btn">
						<ChooseButton />
					</div>
				</div>

				<div class="premium pricing-card ">
					<div className="pricing-card__head">
						<h2>Premium</h2>
					</div>

					<div className="pricing-card__content">
						<p>Tiền kỳ:</p>
						<ul>
							<li>Ý tưởng phim</li>
							<li>Hoàn thiện kịch bản chi tiết phim</li>
							<li>Storyboard màu minh họa</li>
							<li>Số ngày quay dự kiến: 1 ngày</li>
							<li>Bộ ống kính cao cấp</li>
							<li>Bối cảnh theo kịch bản</li>
							<li>Chất lượng quay phim tiêu chuẩn: 8K</li>
							<li>
								Bao gồm: Đạo diễn, Đạo diễn hình ảnh, Quay phim chuyên nghiệp,
								Tổ chức sản xuất.
							</li>
						</ul>
						<p>Hậu kỳ:</p>
						<ul>
							<li>Đọc lời bình: Theo kịch bản</li>
							<li>3D, logo, slogan: Theo kịch bản</li>
							<li>Có nhạc bản quyền</li>
							<li>Thời lượng phim: 30 giây - 60 giây</li>
							<li>Hỗ trợ cắt phim 15s</li>
							<li>Số lần duyệt: 5</li>
						</ul>
					</div>
					<div className="pricing-card__btn">
						<ChooseButton />
					</div>
				</div>
			</div>
			<div class="content">
				<h3>
					Lý do lựa chọn 3D Motion Lab làm đơn vị sản xuất phim quảng cáo?
				</h3>
				TVC do 3D Motion Lab thực hiện luôn được đánh giá cao về chất lượng, phù
				hợp với tiêu chí của doanh nghiệp, đồng thời đảm bảo ngân sách và thời
				gian yêu cầu:
				<ul>
					<li>
						Đội ngũ chuyên gia: Chúng tôi sở hữu đội ngũ nhân sự giàu kinh
						nghiệm và hợp tác với các chuyên gia hàng đầu trong lĩnh vực thương
						hiệu, marketing, và quảng cáo.
					</li>
					<li>
						Thấu hiểu khách hàng: 3D Motion Lab phân tích kỹ lưỡng nhu cầu khách
						hàng, từ đó đưa ra giải pháp tối ưu và hiệu quả nhất.
					</li>
					<li>
						Quy trình tiêu chuẩn quốc tế: Quy trình làm việc rõ ràng, nhanh
						chóng, lấy khách hàng làm trọng tâm.
					</li>
					<li>
						Trang thiết bị hiện đại: Chúng tôi sử dụng thiết bị tiên tiến nhất
						để mang đến những thước phim chân thực và sống động.
					</li>
					<li>
						Dịch vụ chuyên nghiệp: 3D Motion Lab cam kết mang lại những lợi ích
						tốt nhất cho khách hàng, đáp ứng mọi yêu cầu một cách hoàn hảo.
					</li>
				</ul>
			</div>
		</section>
	);
};

export default TelevisionPrices;
