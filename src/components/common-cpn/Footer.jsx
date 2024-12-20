import React from "react";
import ContactInfo from "../ui/ContactInfo";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";

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
							<HashLink to="https://www.facebook.com/3dmotionlab.official?locale=vi_VN">
								<FaFacebook size={33} color="white" />
							</HashLink>

							<HashLink to="https://www.linkedin.com/company/3d-motion-lab/?viewAsMember=true">
								<FaLinkedin size={33} color="white" />
							</HashLink>

							<HashLink to="https://www.youtube.com/@3DMotionLabOfficial">
								<FaYoutube size={33} color="white" />
							</HashLink>

							{/* <HashLink to="quan-ly#">Quản lý</HashLink> */}
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
