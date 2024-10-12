/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import FormModal from "../common-cpn/FormModal";

const ChooseButton = () => {
	const [isPopupVisible, setIsPopupVisible] = useState(false);

	const handleButtonClick = () => {
		setIsPopupVisible(!isPopupVisible);
	};

	return (
		<div className="button">
			<a href="#" className="cta-btn" onClick={handleButtonClick}>
				Chọn gói này
			</a>
			{isPopupVisible && <FormModal onClose={handleButtonClick} />}
		</div>
	);
};

export default ChooseButton;
