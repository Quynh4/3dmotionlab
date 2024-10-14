/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from "../../assets/images/logo.png";
import icon_phone from "../../assets/images/icon_phone.png";
import icon_map from "../../assets/images/icon_map.png";
import icon_mail from "../../assets/images/icon_mail.png";

const ContactInfo = () => {
	return (
		<div className="contact-info">
			<div className="logo">
				<img src={logo} alt="3D Motion Lab" />
			</div>
			<div className="contact-info__text">
				<p>
					<strong>Thông tin liên hệ:</strong>
				</p>
				<div className="contact-info__item">
					<img src={icon_map} alt="icon_map" />
					<p>
						Chung cư Gold Silk Complex tầng 3, 430 Cầu Am, Vạn Phúc, Hà Đông, Hà
						Nội
					</p>
				</div>
				<div className="contact-info__item">
					<img src={icon_phone} alt="icon_phone" />
					<p>0916.739.721</p>
				</div>
				<div className="contact-info__item">
					<img src={icon_mail} alt="icon_mail" />
					<p>3dmotionlab.official@gmail.com</p>
				</div>
			</div>
		</div>
	);
};

export default ContactInfo;
