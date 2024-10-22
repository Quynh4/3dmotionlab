import { ReactComponent as Icon1 } from "../../assets/images/icon1.svg";
import { ReactComponent as Icon2 } from "../../assets/images/icon2.svg";
import { ReactComponent as Icon3 } from "../../assets/images/icon3.svg";
import { ReactComponent as Icon4 } from "../../assets/images/icon4.svg";

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
				<h1>Trải nghiệm sáng tạo</h1>
				<h2>Dành riêng cho bạn</h2>

				<p className="description">
					3D Motion Lab mang đến những giải pháp số hóa tiên tiến và đáng tin
					cậy luôn tập trung vào chất lượng và sáng tạo, giúp khách hàng đạt
					được những bước tiến vượt bậc.
				</p>
			</div>
		</section>
	);
};

export default Hero;
