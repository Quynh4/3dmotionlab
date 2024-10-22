import { ReactComponent as Icon1 } from "../../assets/images/icon1.svg";
import { ReactComponent as Icon3 } from "../../assets/images/icon3.svg";
import { ReactComponent as Icon4 } from "../../assets/images/icon4.svg";

const Hero = () => {
	return (
		<section className="hero">
			<div className="icon-1 home__icon">
				<Icon1 />
			</div>
			<div className="icon-3 home__icon">
				<Icon3 />
			</div>
			<div className="icon-4 home__icon">
				<Icon4 />
			</div>
			<div className="text">
				<h1>3D Motion Lab</h1>
				<h2>Đồng hành cùng sự thành công của bạn</h2>

				<p className="description">
					3D Motion Lab là công ty hàng đầu trong lĩnh vực thiết kế 3D, chuyên
					cung cấp các giải pháp sáng tạo và đột phá. Kết hợp giữa nghệ thuật và
					công nghệ, 3D Motion Lab mang đến những sản phẩm 3D sống động, giúp
					doanh nghiệp tạo kết nối cảm xúc với khách hàng.
				</p>
			</div>
		</section>
	);
};

export default Hero;
