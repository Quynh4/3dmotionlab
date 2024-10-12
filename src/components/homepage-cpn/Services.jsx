import React from "react";

import tvc from "../../assets/images/tvc.png";
import img3dwebsite from "../../assets/images/img3dwebsite.png";
import vr360 from "../../assets/images/vr360.png";
import explore from "../../assets/images/explore.png";

const Services = () => {
	return (
		<>
			<section className="services">
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
						Elevate Your Marketplace Experience:
						<br />
						Discover Our Unique Features
					</h2>
				</div>

				<div className="service-grid">
					<div className="column">
						<div className="service-item" style={{ height: "340px" }}>
							<img src={tvc} alt="Television Commercial" />
							<div className="text-1">
								<h3>Television Commercial (TVC)</h3>
								<p>
									Phim được phát hành trên các phương tiện truyền thông đại
									chúng quảng cáo sản phẩm hoặc dịch vụ.
								</p>
							</div>
						</div>
						<div className="service-item" style={{ height: "441px" }}>
							<div className="text-3">
								<h3>3D Website</h3>
								<p>
									Website được thiết kế theo phong cách 3D hiện đại, mang lại
									góc nhìn tối ưu cho người dùng, giúp trang web trở nên sống
									động và thu hút hơn
								</p>
							</div>
							<div className="small-img">
								<img src={img3dwebsite} alt="3D Website" />
							</div>
						</div>
					</div>

					<div className="column">
						<div className="service-item" style={{ height: "564px" }}>
							<img src={vr360} alt="VR360 Virtual Tour" />
							<div className="text-2">
								<h3>VR360 Virtual Tour</h3>
								<p>
									VR360 Tour được tạo nên bằng cách kết hợp các hình ảnh 360 độ,
									có thể là ảnh chụp từ thực tế hoặc được dựng từ các bản thiết
									kế 3D.
								</p>
							</div>
						</div>
						<div className="service-item" style={{ height: "217px" }}>
							<img src={explore} alt="" />
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Services;
