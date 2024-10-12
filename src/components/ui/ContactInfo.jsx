/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import logo from "../../assets/images/logo.png";

const ContactInfo = () => {
	return (
		<div className="contact-info">
			<div className="logo">
				<img src={logo} alt="3D Motion Lab" />
			</div>
			<div className="contact-info">
				<p>
					<strong>Thông tin liên hệ:</strong>
				</p>
				<div className="contact-info__item">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="40"
						height="60"
						viewBox="0 0 17 19"
						fill="none"
					>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M8.5 0.478516C4.10376 0.478516 0.375 4.11146 0.375 8.54165C0.375 10.8104 1.33489 12.7069 2.68074 14.2722C4.0208 15.8308 5.76528 17.0878 7.39853 18.0988L7.40927 18.1055L7.42027 18.1117C7.74963 18.2976 8.1217 18.3952 8.5 18.3952C8.8783 18.3952 9.25037 18.2976 9.57973 18.1117L9.58932 18.1063L9.59872 18.1005C11.2379 17.0975 12.9827 15.8365 14.3222 14.2733C15.6669 12.704 16.625 10.8029 16.625 8.54165C16.625 4.11147 12.8962 0.478516 8.5 0.478516ZM8.5 5.27018C6.65905 5.27018 5.16667 6.76257 5.16667 8.60352C5.16667 10.4445 6.65905 11.9368 8.5 11.9368C10.3409 11.9368 11.8333 10.4445 11.8333 8.60352C11.8333 6.76257 10.3409 5.27018 8.5 5.27018Z"
							fill="white"
						/>
					</svg>
					<p>
						Chung cư Gold Silk Complex tầng 3, 430 Cầu Am, Vạn Phúc, Hà Đông, Hà
						Nội
					</p>
				</div>
				<div className="contact-info__item">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="19"
						height="19"
						viewBox="0 0 19 19"
						fill="none"
					>
						<path
							d="M3.93113 1.00887C4.40337 1.10647 4.77945 1.42375 5.01311 1.84295L5.75746 3.17832C6.03163 3.67015 6.26236 4.08406 6.41303 4.44387C6.57287 4.82555 6.6678 5.20193 6.62441 5.61806C6.58101 6.0342 6.41047 6.3829 6.17532 6.72339C5.95365 7.04437 5.64248 7.40176 5.27273 7.82645L4.17856 9.08327C3.98249 9.30849 3.88445 9.4211 3.87549 9.56185C3.86653 9.7026 3.94688 9.82282 4.10758 10.0633C5.47724 12.1125 7.32319 13.9591 9.3741 15.3299C9.61454 15.4906 9.73476 15.571 9.87551 15.562C10.0163 15.553 10.1289 15.455 10.3541 15.2589L11.611 14.1647C12.0357 13.7949 12.3931 13.4838 12.7141 13.2621C13.0545 13.027 13.4032 12.8564 13.8194 12.813C14.2355 12.7696 14.6119 12.8646 14.9936 13.0244C15.3533 13.1751 15.7672 13.4058 16.259 13.6799L17.5945 14.4243C18.0137 14.658 18.331 15.0341 18.4286 15.5063C18.5272 15.9835 18.3817 16.4631 18.0604 16.8573C16.8947 18.2876 15.0269 19.1983 13.0676 18.803C11.8632 18.5601 10.6749 18.1553 9.23763 17.3311C6.34983 15.6749 3.7606 13.0843 2.10638 10.1998C1.28211 8.76255 0.877348 7.57423 0.634395 6.36984C0.239148 4.41049 1.14984 2.54276 2.58015 1.37701C2.97434 1.05572 3.45397 0.910244 3.93113 1.00887Z"
							fill="white"
						/>
					</svg>
					<p>0916.739.721</p>
				</div>
				<div className="contact-info__item">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="19"
						height="16"
						viewBox="0 0 19 16"
						fill="none"
					>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M11.7353 0.259065C10.1055 0.218166 8.89464 0.218173 7.26483 0.259068L7.20246 0.260632C5.94466 0.29216 4.90976 0.3181 4.07562 0.463188C3.19031 0.617175 2.44905 0.917068 1.82121 1.54651C1.19666 2.17265 0.897624 2.90223 0.746129 3.77352C0.603955 4.59121 0.58244 5.60026 0.5564 6.82152L0.55506 6.88435C0.537304 7.71594 0.537314 8.15752 0.55507 8.98911L0.556411 9.05194C0.582451 10.2732 0.603967 11.2822 0.746142 12.0999C0.897638 12.9712 1.19668 13.7008 1.82123 14.327C2.44906 14.9564 3.19032 15.2563 4.07563 15.4103C4.90977 15.5554 5.94466 15.5813 7.20246 15.6128L7.26485 15.6144C8.89466 15.6553 10.1055 15.6553 11.7353 15.6144L11.7977 15.6128C13.0555 15.5813 14.0904 15.5553 14.9245 15.4103C15.8099 15.2563 16.5511 14.9564 17.179 14.3269C17.8035 13.7008 18.1025 12.9712 18.254 12.0999C18.3962 11.2822 18.4177 10.2732 18.4438 9.05196L18.4451 8.9891C18.4629 8.15752 18.4629 7.71594 18.4451 6.88435L18.4438 6.82154C18.4177 5.60029 18.3962 4.59121 18.254 3.77353C18.1025 2.90223 17.8035 2.17265 17.1789 1.54651C16.8261 1.19279 16.4375 0.943141 16.0076 0.764972C15.9422 0.729257 15.8721 0.702338 15.799 0.685152C15.5242 0.588257 15.2331 0.516861 14.9245 0.46319C14.0904 0.318102 13.0555 0.292159 11.7977 0.260629L11.7353 0.259065ZM16.7332 5.31198C16.7171 4.97405 16.709 4.80509 16.5867 4.73763C16.4643 4.67018 16.3139 4.75541 16.013 4.92587L12.4832 6.92589C11.4002 7.53953 10.4843 7.93671 9.49992 7.93671C8.51558 7.93671 7.59963 7.53953 6.51662 6.92589L2.98712 4.92605C2.68627 4.75559 2.53585 4.67035 2.41348 4.73781C2.29111 4.80527 2.28306 4.97423 2.26694 5.31217C2.24522 5.76759 2.23344 6.29557 2.22011 6.91981C2.20286 7.72776 2.20287 8.1457 2.22012 8.95365C2.24788 10.2536 2.26892 11.1362 2.38701 11.8153C2.49821 12.4549 2.68374 12.8348 3.00109 13.153C3.31516 13.4679 3.7003 13.6566 4.36137 13.7716C5.05986 13.8931 5.97089 13.918 7.30668 13.9516C8.9086 13.9918 10.0916 13.9918 11.6935 13.9516C13.0293 13.918 13.9403 13.8931 14.6388 13.7716C15.2999 13.6566 15.685 13.4679 15.9991 13.153C16.3164 12.8348 16.502 12.4549 16.6132 11.8153C16.7313 11.1362 16.7523 10.2536 16.7801 8.95364C16.7973 8.14569 16.7973 7.72776 16.78 6.91981C16.7667 6.29549 16.7549 5.76745 16.7332 5.31198Z"
							fill="white"
						/>
					</svg>
					<p>3dmotionlab.official@gmail.com</p>
				</div>
			</div>
		</div>
	);
};

export default ContactInfo;
