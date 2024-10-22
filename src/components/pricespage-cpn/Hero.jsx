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
				<h1>Chi phí tối ưu</h1>
				<h2>Thành công đột phá</h2>

				<p className="description">
					3D Motion Lab mang đến sự cân bằng giữa ngân sách và chất lượng, đảm
					bảo hiệu quả tối đa, đồng thời hỗ trợ hiện thực hóa những ý tưởng sáng
					tạo, giúp doanh nghiệp vươn xa hơn.
				</p>
			</div>
		</section>
	);
};

export default Hero;
