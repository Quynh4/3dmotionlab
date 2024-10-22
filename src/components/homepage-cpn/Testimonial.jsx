/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import testimonial_img from "../../assets/images/testimonial-img.png";
const Testimonial = () => {
	return (
		<>
			{" "}
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
						Tối Ưu Hóa Trải Nghiệm Của Bạn
						<br /> Kết Nối Cùng Đội Ngũ Của Chúng Tôi
					</h2>
					<div className="testimonial-grid">
						<div className="column">
							<img src={testimonial_img} />
						</div>
						<div className="column">
							<h3>Labby - Người bạn đồng hành mới của 3D Motion Lab</h3>
							<p>
								<a>Labby</a> là linh vật chính thức của 3D Motion Lab, biểu
								tượng cho những giá trị cốt lõi như sáng tạo, đổi mới và tiên
								phong trong lĩnh vực thiết kế 3D. <br />
								<br />
								Labby còn là người bạn đồng hành, giúp khách hàng khám phá những
								sản phẩm 3D chất lượng nhất.
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Testimonial;
