import React, { useState } from "react";
import "../../assets/styles/styles.css";
import ContactInfo from "../ui/ContactInfo";
import { ReactComponent as ArrowIcon } from "../../assets/images/icon-arrow.svg";
import contact from "../../assets/images/contact.png";
import { ReactComponent as CloseIcon } from "../../assets/images/icon-close.svg";

const FormModal = ({ onClose }) => {
	const [formData, setFormData] = useState({
		fullName: "",
		email: "",
		phoneNumber: "",
		companyName: "",
		selectedService: "",
		region: "",
		description: "",
	});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(formData);
		onClose();
	};

	return (
		<div className="modal-overlay" onClick={onClose}>
			<div className="form-container" onClick={(e) => e.stopPropagation()}>
				<div className="from__header">
					<h2>Liên hệ với 3D Motion Lab</h2>{" "}
					<button className="close-button" onClick={onClose}>
						<CloseIcon />
					</button>
				</div>

				<div className="form__contain">
					<div className="form__description">
						<ContactInfo />
						<div className="image-wrapper">
							<img src={contact} alt="Contact" />
						</div>
					</div>
					<div className="form__input">
						<form onSubmit={handleSubmit}>
							<div className="form-group">
								<label htmlFor="fullName">Họ và Tên:</label>
								<input
									type="text"
									id="fullName"
									name="fullName"
									value={formData.fullName}
									onChange={handleChange}
									required
								/>
							</div>
							<div className="form-group">
								<label htmlFor="email">Email:</label>
								<input
									type="email"
									id="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									required
								/>
							</div>
							<div className="form-group">
								<label htmlFor="phoneNumber">Số điện thoại di động:</label>
								<input
									type="tel"
									id="phoneNumber"
									name="phoneNumber"
									value={formData.phoneNumber}
									onChange={handleChange}
									required
								/>
							</div>
							<div className="form-group">
								<label htmlFor="companyName">Tên công ty:</label>
								<input
									type="text"
									id="companyName"
									name="companyName"
									value={formData.companyName}
									onChange={handleChange}
								/>
							</div>
							<div className="form-group">
								<label>Dịch vụ cần tư vấn:</label>
								<div className="service-options">
									<input
										type="radio"
										id="service-tvc"
										name="selectedService"
										value="TVC"
										checked={formData.selectedService === "TVC"}
										onChange={handleChange}
										className="custom-radio"
									/>
									<label htmlFor="service-tvc" className="radio-label">
										TVC
									</label>

									<input
										type="radio"
										id="service-3d-website"
										name="selectedService"
										value="3D Website"
										checked={formData.selectedService === "3D Website"}
										onChange={handleChange}
										className="custom-radio"
									/>
									<label htmlFor="service-3d-website" className="radio-label">
										3D Website
									</label>

									<input
										type="radio"
										id="service-vr360-tour"
										name="selectedService"
										value="VR360 Tour"
										checked={formData.selectedService === "VR360 Tour"}
										onChange={handleChange}
										className="custom-radio"
									/>
									<label htmlFor="service-vr360-tour" className="radio-label">
										VR360 Tour
									</label>
								</div>
							</div>
							<div className="form-group">
								<label>Khu vực:</label>
								<select
									id="region"
									name="region"
									value={formData.region}
									onChange={handleChange}
								>
									<option value="TP. Hà Nội">TP. Hà Nội</option>
									<option value="TP. HCM">TP. HCM</option>
									<option value="Khác">Khác</option>
								</select>
							</div>
							<div className="form-group">
								<label htmlFor="description">
									Mô tả thêm về yêu cầu của bạn (nếu có):
								</label>
								<textarea
									id="description"
									name="description"
									value={formData.description}
									onChange={handleChange}
								></textarea>
							</div>
							<div className="button">
								<div className="cta-btn" onClick={handleSubmit}>
									Gửi 3D Motion Lab
								</div>
								<div className="icon">
									<ArrowIcon />
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FormModal;
