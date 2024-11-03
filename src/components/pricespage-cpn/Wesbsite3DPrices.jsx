import { ReactComponent as CameraIcon } from "../../assets/images/icon-camera.svg";
import ContactButton from "../ui/ContactButton";
const Wesbsite3DPrices = () => {
	return (
		<section class="pricing-container">
			<div className="text">
				<div className="subtext">
					<div className="icon">
						<CameraIcon />
					</div>

					<span>3D Website</span>
				</div>
				<h2>3D Website</h2>
			</div>
			<div className="package-content">
				<div className="package-content__header">
					<div className="text">
						<h2>Gói tiêu chuẩn</h2>
					</div>
					<div className="package-content__button">
						<ContactButton />
					</div>
				</div>
				<h3>1. Thiết kế bối cảnh:</h3>
				<p>Thiết kế bối cảnh và môi trường xung quanh bằng 3D</p>
				<h3>2. Thiết kế Model:</h3>
				<p>Thiết kế bối cảnh và môi trường xung quanh bằng 3D</p>
				<h3>3. Trích xuất hình ảnh:</h3>
				<ul>
					<li>
						Đặt camera trong mô hình 3D và ghi lại hình ảnh ở các vị trí phù hợp
					</li>
					<li>Chỉnh sửa và ghép các ảnh tạo thành ảnh 360</li>
				</ul>

				<h3>4. Thiết kế Wireframe, UI, UX:</h3>
				<ul>
					<li>
						Thiết kế Wireframe, UI, UX phù hợp với yêu cầu, tối ưu trên nền tảng
						PC và responsive trên các thiết bị mobile
					</li>
					<li>Dùng design system, token system (Bao gồm hệ màu, font, etc.)</li>
					<li>Dùng component và thiết kế chi tiết (high fidelity)</li>
					<li>
						Số lần chỉnh sửa tối đa: 3 lần (không giới số lượng chi tiết chỉnh
						sửa trong từng lần)
					</li>
				</ul>
				<h3>5. Xây dựng và phát triển:</h3>
				<ul>
					<li>Lập trình giao diện</li>
					<li>Lập trình chức năng</li>
				</ul>
			</div>

			<div class="content">
				<h3>
					Lý do lựa chọn 3D Motion Lab làm đơn vị sản xuất phim quảng cáo?
				</h3>
				Để đạt được kết quả tối ưu nhất khi làm việc, chúng tôi luôn tuân thủ
				chặt chẽ quy trình làm việc sau đây:
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

export default Wesbsite3DPrices;
