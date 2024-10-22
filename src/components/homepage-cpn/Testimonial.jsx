/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import { useRef, useEffect } from "react";
import testimonial_img from "../../assets/images/testimonial-img.png";

const Testimonial = () => {
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
		<section className="testimonial">
			<div className="text">
				<div className="subtext">
					<div className="icon">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="19"
							height="18"
							viewBox="0 0 19 18"
							fill="none"
						>
							<path
								d="M9.49985 0.75L14 8.25H5L9.49985 0.75ZM10.25 10.125H16.25V16.125H10.25V10.125ZM5.5625 16.5C7.53001 16.5 9.125 14.9051 9.125 12.9375C9.125 10.9699 7.53001 9.375 5.5625 9.375C3.59499 9.375 2 10.9699 2 12.9375C2 14.9051 3.59499 16.5 5.5625 16.5Z"
								fill="white"
							/>
						</svg>
					</div>
					<span>Explore our Services</span>
				</div>
				<h2>
					Nâng Tầm Trải Nghiệm Của Bạn
					<br /> Khám Phá Dịch Vụ 3D Motion Lab
				</h2>
				<div className="testimonial-grid">
					<div className="column slide-left hidden" ref={section1Ref}>
						<img src={testimonial_img} alt="Testimonial" />
					</div>
					<div className="column slide-right hidden" ref={section2Ref}>
						<h3>Labby - Người bạn đồng hành mới của 3D Motion Lab</h3>
						<p>
							<a href="#">Labby</a> là linh vật chính thức của 3D Motion Lab,
							biểu tượng cho những giá trị cốt lõi như sáng tạo, đổi mới và tiên
							phong trong lĩnh vực thiết kế 3D. <br />
							<br />
							Labby còn là người bạn đồng hành, giúp khách hàng khám phá những
							sản phẩm 3D chất lượng nhất.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonial;
