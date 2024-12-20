/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import FormModal from "../common-cpn/FormModal";

const ChooseButton = () => {
	const [isPopupVisible, setIsPopupVisible] = useState(false);

	const handleButtonClick = () => {
		setIsPopupVisible(!isPopupVisible);
	};

	return (
		<div className="choose-button" onClick={handleButtonClick}>
			<a href="#" className="cta-btn">
				Chọn gói này
			</a>

			{isPopupVisible && <FormModal onClose={handleButtonClick} />}

			{/* <FormModal isOpen={isPopupVisible} onClose={handleButtonClick} /> */}
		</div>
	);
};

export default ChooseButton;
