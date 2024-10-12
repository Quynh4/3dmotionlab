import React from "react";
import testimonial_img from "../assets/images/testimonial-img.png";
const Testimonial = () => {
	return (
		<>
			{" "}
			<section class="testimonial">
				<div class="text">
					<div class="subtext">
						<div class="icon">
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
						Elevate Your Marketplace Experience:
						<br /> Discover Our Unique Features
					</h2>
					<div class="testimonial-grid">
						<div class="column">
							<img src={testimonial_img} />
						</div>
						<div class="column">
							<h3>
								Streamlines our financial management process and saves us
								valuable time.
							</h3>
							<p>
								“Using <a>Maney</a> has completely transformed the way we manage
								our finances on our marketplace platform. The intuitive
								dashboard makes it easy to track transactions and analyze our
								performance in real-time. Plus, the support team is always there
								to assist whenever we need help. Highly recommended!"
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Testimonial;
