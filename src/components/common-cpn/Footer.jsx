/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../../assets/images/logo.png";

const Footer = () => {
	return (
		<>
			<footer className="footer">
				<div className="footer-content">
					<div className="column-1">
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
									width="17"
									height="19"
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
									Chung cư Gold Silk Complex tầng 3, 430 Cầu Am, Vạn Phúc, Hà
									Đông, Hà Nội
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

					<div className="column-2">
						<div className="footer-links">
							<a href="#">Dịch vụ</a>
							<a href="#">Báo giá</a>
							<a href="#">Về chúng tôi</a>
						</div>
						<div className="social-icons">
							<a href="your-instagram-link">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="33"
									height="33"
									viewBox="0 0 33 33"
									fill="none"
								>
									<g opacity="0.67">
										<path
											d="M16.0022 19.9227C15.516 19.9227 15.0618 19.8331 14.6395 19.654C14.2172 19.4748 13.8462 19.2253 13.5263 18.9054C13.2064 18.5855 12.9569 18.2081 12.7777 17.773C12.5986 17.338 12.509 16.8773 12.509 16.3911C12.509 15.9048 12.5986 15.4506 12.7777 15.0283C12.9569 14.6061 13.2064 14.235 13.5263 13.9151C13.8462 13.5952 14.2172 13.3457 14.6395 13.1666C15.0618 12.9874 15.516 12.8978 16.0022 12.8978C16.9747 12.8978 17.8 13.2369 18.4782 13.9151C19.1564 14.5933 19.4955 15.4186 19.4955 16.3911C19.4955 16.8773 19.4059 17.338 19.2268 17.773C19.0476 18.2081 18.7981 18.5855 18.4782 18.9054C18.1583 19.2253 17.7872 19.4748 17.365 19.654C16.9427 19.8331 16.4885 19.9227 16.0022 19.9227ZM21.6068 16.3911C21.6068 16.1607 21.594 15.924 21.5684 15.6809C21.5428 15.4378 21.5044 15.2139 21.4532 15.0091H23.0271V22.7249C23.0271 22.9297 22.9631 23.096 22.8351 23.224C22.7072 23.3519 22.5408 23.4159 22.3361 23.4159H9.66837C9.46364 23.4159 9.2973 23.3519 9.16934 23.224C9.04138 23.096 8.9774 22.9297 8.9774 22.7249V15.0091H10.5513C10.5001 15.2139 10.4617 15.4378 10.4361 15.6809C10.4105 15.924 10.3977 16.1607 10.3977 16.3911C10.3977 17.1588 10.5449 17.8882 10.8392 18.5791C11.1335 19.2701 11.5301 19.8715 12.0292 20.3833C12.5282 20.8952 13.1232 21.2982 13.8142 21.5925C14.5051 21.8868 15.2345 22.034 16.0022 22.034C16.77 22.034 17.4993 21.8868 18.1903 21.5925C18.8813 21.2982 19.4763 20.8952 19.9753 20.3833C20.4743 19.8715 20.871 19.2701 21.1653 18.5791C21.4596 17.8882 21.6068 17.1588 21.6068 16.3911ZM16.1558 0.306885C18.3822 0.306885 20.4679 0.729143 22.4129 1.57366C24.3578 2.41817 26.0597 3.56339 27.5184 5.0093C28.9771 6.45522 30.1287 8.15065 30.9732 10.0956C31.8177 12.0405 32.24 14.1262 32.24 16.3527C32.24 18.5791 31.8177 20.6648 30.9732 22.6098C30.1287 24.5547 28.9771 26.2566 27.5184 27.7153C26.0597 29.174 24.3578 30.3256 22.4129 31.1701C20.4679 32.0146 18.3822 32.4369 16.1558 32.4369C13.9293 32.4369 11.8436 32.0146 9.89869 31.1701C7.95375 30.3256 6.25832 29.174 4.8124 27.7153C3.36649 26.2566 2.22128 24.5547 1.37676 22.6098C0.532243 20.6648 0.109985 18.5791 0.109985 16.3527C0.109985 14.1262 0.532243 12.0405 1.37676 10.0956C2.22128 8.15065 3.36649 6.45522 4.8124 5.0093C6.25832 3.56339 7.95375 2.41817 9.89869 1.57366C11.8436 0.729143 13.9293 0.306885 16.1558 0.306885ZM25.1384 9.36624C25.1384 8.77763 24.9336 8.2786 24.5242 7.86914C24.1147 7.45968 23.6157 7.25495 23.0271 7.25495H8.9774C8.3888 7.25495 7.88977 7.45968 7.48031 7.86914C7.07085 8.2786 6.86611 8.77763 6.86611 9.36624V23.4159C6.86611 24.0045 7.07085 24.5035 7.48031 24.913C7.88977 25.3225 8.3888 25.5272 8.9774 25.5272H23.0271C23.6157 25.5272 24.1147 25.3225 24.5242 24.913C24.9336 24.5035 25.1384 24.0045 25.1384 23.4159V9.36624ZM22.3361 9.36624C22.5408 9.36624 22.7072 9.43661 22.8351 9.57736C22.9631 9.71812 23.0271 9.89086 23.0271 10.0956V12.2069C23.0271 12.4116 22.9631 12.578 22.8351 12.7059C22.7072 12.8339 22.5408 12.8978 22.3361 12.8978H20.2248C20.0201 12.8978 19.8474 12.8339 19.7066 12.7059C19.5658 12.578 19.4955 12.4116 19.4955 12.2069V10.0956C19.4955 9.89086 19.5658 9.71812 19.7066 9.57736C19.8474 9.43661 20.0201 9.36624 20.2248 9.36624H22.3361Z"
											fill="white"
										/>
									</g>
								</svg>
							</a>
							<a href="your-linkedin-link">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="33"
									height="33"
									viewBox="0 0 33 33"
									fill="none"
								>
									<g opacity="0.67">
										<path
											d="M16.2858 0.306885C18.5122 0.306885 20.5979 0.729143 22.5429 1.57366C24.4878 2.41817 26.1897 3.56339 27.6484 5.0093C29.1071 6.45522 30.2587 8.15065 31.1032 10.0956C31.9477 12.0405 32.37 14.1262 32.37 16.3527C32.37 18.5791 31.9477 20.6648 31.1032 22.6098C30.2587 24.5547 29.1071 26.2566 27.6484 27.7153C26.1897 29.174 24.4878 30.3256 22.5429 31.1701C20.5979 32.0146 18.5122 32.4369 16.2858 32.4369C14.0593 32.4369 11.9736 32.0146 10.0287 31.1701C8.08375 30.3256 6.38832 29.174 4.94241 27.7153C3.4965 26.2566 2.35128 24.5547 1.50676 22.6098C0.662248 20.6648 0.23999 18.5791 0.23999 16.3527C0.23999 14.1262 0.662248 12.0405 1.50676 10.0956C2.35128 8.15065 3.4965 6.45522 4.94241 5.0093C6.38832 3.56339 8.08375 2.41817 10.0287 1.57366C11.9736 0.729143 14.0593 0.306885 16.2858 0.306885ZM11.2955 12.3604H7.26483V25.412H11.2955V12.3604ZM9.26096 11.324C9.82397 11.324 10.3038 11.132 10.7005 10.7482C11.0971 10.3643 11.2955 9.89086 11.2955 9.32785C11.2955 8.76484 11.0971 8.2914 10.7005 7.90753C10.3038 7.52366 9.82397 7.33172 9.26096 7.33172C8.69795 7.33172 8.22451 7.52366 7.84064 7.90753C7.45676 8.2914 7.26483 8.76484 7.26483 9.32785C7.26483 9.89086 7.45676 10.3643 7.84064 10.7482C8.22451 11.132 8.69795 11.324 9.26096 11.324ZM25.3452 17.8498C25.3452 16.9285 25.0892 16.0264 24.5774 15.1435C24.0656 14.2606 23.4002 13.5888 22.5813 13.1282C21.8391 12.7187 20.9754 12.5012 19.9902 12.4756C19.0049 12.45 18.1028 12.6163 17.2839 12.9746V12.3604H13.2916V25.412H17.2839V17.4275L18.9729 16.6214C19.1776 16.519 19.4527 16.4678 19.7982 16.4678C20.1437 16.4678 20.4188 16.5318 20.6235 16.6598C20.7771 16.7366 20.9306 16.9029 21.0842 17.1588C21.2377 17.4147 21.3145 17.6451 21.3145 17.8498V25.412H25.3452V17.8498Z"
											fill="white"
										/>
									</g>
								</svg>
							</a>
							<a href="your-facebook-link">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="33"
									height="33"
									viewBox="0 0 33 33"
									fill="none"
								>
									<g opacity="0.67">
										<path
											d="M16.4158 0.306885C18.637 0.306885 20.7241 0.728136 22.6772 1.57064C24.6303 2.41314 26.3344 3.56201 27.7896 5.01724C29.2449 6.47247 30.3937 8.17024 31.2362 10.1106C32.0787 12.0509 32.5 14.1316 32.5 16.3527C32.5 18.5739 32.0787 20.661 31.2362 22.6141C30.3937 24.5671 29.2449 26.2713 27.7896 27.7265C26.3344 29.1818 24.6303 30.3306 22.6772 31.1731C20.7241 32.0156 18.637 32.4369 16.4158 32.4369C14.1947 32.4369 12.114 32.0156 10.1737 31.1731C8.23336 30.3306 6.53559 29.1818 5.08035 27.7265C3.62512 26.2713 2.47625 24.5671 1.63375 22.6141C0.791247 20.661 0.369995 18.5739 0.369995 16.3527C0.369995 14.1316 0.791247 12.0509 1.63375 10.1106C2.47625 8.17024 3.62512 6.47247 5.08035 5.01724C6.53559 3.56201 8.23336 2.41314 10.1737 1.57064C12.114 0.728136 14.1947 0.306885 16.4158 0.306885ZM22.4666 7.31498H19.0582C18.3945 7.31498 17.7817 7.42986 17.2201 7.65964C16.6584 7.88941 16.1669 8.19577 15.7457 8.57873C15.3244 8.96169 14.9989 9.3957 14.7691 9.88078C14.5394 10.3659 14.4245 10.8509 14.4245 11.336V13.3657H11.3991V17.3484H14.4245V25.3905H18.4455V17.3484H21.4326V13.3657H18.4455V12.3317C18.4455 12.0253 18.5668 11.7828 18.8093 11.6041C19.0519 11.4254 19.2625 11.336 19.4412 11.336H22.4666V7.31498Z"
											fill="white"
										/>
									</g>
								</svg>
							</a>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;