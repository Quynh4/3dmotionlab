import React from "react";
import ContactInfo from "../ui/ContactInfo";
import { FaFacebook, FaTiktok, FaYoutube } from "react-icons/fa";
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

							<HashLink to="https://www.tiktok.com/@becuu_non">
								<FaTiktok size={33} color="white" />
							</HashLink>

							<HashLink to="https://www.youtube.com/@3DMotionLabOfficial">
								<FaYoutube size={33} color="white" />
							</HashLink>

							<div className="footer-links">
								<HashLink to="quan-ly#">Quản lý</HashLink>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
