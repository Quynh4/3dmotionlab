import { ReactComponent as CameraIcon } from "../../assets/images/icon-camera.svg";
import ContactButton from "../ui/ContactButton";
const Wesbsite3DPrices = () => {
	return (
		<section class="pricing-container" id="web">
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
				<h3>Lý do lựa chọn 3D Motion Lab làm đơn vị thiết kế website 3D?</h3>
				Các dự án website 3D do 3D Motion Lab thực hiện luôn được đánh giá cao
				về chất lượng, tính sáng tạo và đáp ứng tối đa nhu cầu doanh nghiệp về
				ngân sách và thời gian:
				<ul>
					<li>
						Đội ngũ chuyên gia: 3D Motion Lab có đội ngũ thiết kế 3D giàu kinh
						nghiệm, kết hợp cùng các chuyên gia hàng đầu trong lĩnh vực công
						nghệ và thiết kế.
					</li>
					<li>
						Thấu hiểu khách hàng: Chúng tôi phân tích chi tiết yêu cầu của khách
						hàng để đưa ra giải pháp thiết kế 3D tối ưu, hiệu quả và phù hợp với
						từng thương hiệu.
					</li>
					<li>
						Quy trình tiêu chuẩn quốc tế: Quy trình làm việc rõ ràng, chuyên
						nghiệp, đảm bảo tiến độ và chất lượng, với khách hàng là trọng tâm.
					</li>
					<li>
						Công nghệ tiên tiến: Sử dụng công nghệ 3D mới nhất để mang lại trải
						nghiệm website sống động, thu hút và tương tác cao.
					</li>
					<li>
						Dịch vụ toàn diện: 3D Motion Lab cam kết mang lại lợi ích tối đa cho
						khách hàng, đảm bảo sản phẩm hoàn chỉnh và hiệu quả.
					</li>
				</ul>
			</div>
		</section>
	);
};

export default Wesbsite3DPrices;
