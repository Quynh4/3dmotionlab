/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { ReactComponent as ArrowIcon } from "../../assets/images/icon-arrow.svg";
import FormModal from "../common-cpn/FormModal";

const ContactButton = () => {
	const [isPopupVisible, setIsPopupVisible] = useState(false);

	const handleButtonClick = () => {
		setIsPopupVisible(!isPopupVisible);
	};

	return (
		<div className="button" onClick={handleButtonClick}>
			<a href="#" className="cta-btn">
				Liên hệ ngay
			</a>
			<div className="icon">
				<ArrowIcon />
			</div>
			{isPopupVisible && <FormModal onClose={handleButtonClick} />}
		</div>
	);
};

export default ContactButton;
