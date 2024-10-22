import { useRef, useEffect } from "react";
import about from "../../assets/images/about.png";
import creative from "../../assets/images/creative.png";
import mission from "../../assets/images/mission.png";
import { ReactComponent as StrongIcon } from "../../assets/images/icon-strong.svg";
import { ReactComponent as EyeIcon } from "../../assets/images/icon-eye.svg";

const AboutUs = () => {
	// Tạo refs cho các phần tử muốn theo dõi
	const section1Ref = useRef(null);
	const section2Ref = useRef(null);
	const section3Ref = useRef(null);

	useEffect(() => {
		const sections = [
			section1Ref.current,
			section2Ref.current,
			section3Ref.current,
		];

		// IntersectionObserver để theo dõi các phần tử
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						// Thêm lớp 'show' khi phần tử vào tầm nhìn
						if (entry.target.classList.contains("slide-left")) {
							entry.target.classList.add("show-left");
						} else {
							entry.target.classList.add("show-right");
						}
					}
				});
			},
			{ threshold: 0.05 } // Kích hoạt khi chỉ 5% phần tử xuất hiện
		);

		sections.forEach((section) => {
			if (section) observer.observe(section);
		});

		// Cleanup observer khi component bị huỷ
		return () => {
			sections.forEach((section) => {
				if (section) observer.unobserve(section);
			});
		};
	}, []);

	return (
		<>
			<section ref={section1Ref} className="about-us slide-right hidden">
				<img src={about} alt="Television Commercial" />
				<div className="text">
					<h3>Về chúng tôi</h3>
					<p>
						Với đội ngũ kỹ thuật in-house đầy kinh nghiệm, 3D Motion Lab luôn
						mang đến những giải pháp số hóa tiên tiến và đáng tin cậy luôn tập
						trung vào chất lượng và sáng tạo, giúp khách hàng đạt được những
						bước tiến vượt bậc. 3D Motion Lab cam kết xây dựng mối quan hệ bền
						vững và dẫn dắt doanh nghiệp qua quá trình chuyển đổi số thành công.
					</p>
				</div>
			</section>

			<section
				ref={section2Ref}
				className="about__section slide-left hidden"
				id="creative"
			>
				<div className="about__text">
					<h3>
						<div className="icon">
							<EyeIcon />
						</div>
						Tầm nhìn sáng tạo
					</h3>
					<p>
						3D Motion Lab tiên phong trong sản xuất và thiết kế 3D, kết hợp nghệ
						thuật và công nghệ để tạo ra các giải pháp đột phá tại Việt Nam. Với
						tầm nhìn dẫn đầu và cam kết chất lượng cao nhất, chúng tôi mang đến
						những sản phẩm sáng tạo, tinh tế, đồng thời thúc đẩy sự phát triển
						bền vững của ngành công nghiệp sáng tạo.
					</p>
				</div>
				<div className="about__img">
					<img src={creative} alt="" />
				</div>
			</section>

			<section ref={section3Ref} className="about__section slide-right hidden">
				<div className="about__img">
					<img src={mission} alt="" />
				</div>
				<div className="about__text">
					<h3>
						<div className="icon">
							<StrongIcon />
						</div>
						Mission
					</h3>
					<p>
						3D Motion Lab cung cấp các giải pháp công nghệ tiên tiến, giúp doanh
						nghiệp trong nước phát triển và mở rộng ra thị trường quốc tế. Với
						sự sáng tạo và cam kết chất lượng, chúng tôi tối ưu hóa hiệu quả sản
						xuất, nâng cao trải nghiệm khách hàng, và tạo giá trị bền vững.
						Chúng tôi tin rằng công nghệ là đòn bẩy giúp doanh nghiệp khẳng định
						vị thế và đạt được thành công mới.
					</p>
				</div>
			</section>
		</>
	);
};

export default AboutUs;
