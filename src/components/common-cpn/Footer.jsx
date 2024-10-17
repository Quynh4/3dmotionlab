import React from "react";
import ContactInfo from "../ui/ContactInfo";
import { FaFacebook, FaTiktok, FaYoutube } from "react-icons/fa"; // Import react-icons

const Footer = () => {
	return (
		<>
			<footer className="footer">
				<div className="footer-content">
					<ContactInfo />
					<div className="column-2">
						<div className="footer-links">
							<a href="/dich-vu">Dịch vụ</a>
							<a href="/bao-gia">Báo giá</a>
							<a href="/ve-chung-toi">Về chúng tôi</a>
						</div>
						<div className="social-icons">
							<a
								href="https://www.facebook.com/3dmotionlab.official?locale=vi_VN"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaFacebook size={33} color="white" />
							</a>

							<a
								href="https://www.tiktok.com/@becuu_non"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaTiktok size={33} color="white" />
							</a>

							<a
								href="https://www.youtube.com/@3DMotionLabOfficial"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaYoutube size={33} color="white" />
							</a>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
