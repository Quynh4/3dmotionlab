import React from "react";
import logo from "../assets/images/logo.png";
import expandMore from "../assets/images/expand_more.svg";
function Header() {
	return (
		<div className="navbar">
			<div className="logo">
				<img src={logo} alt="3D Motion Lab" />
			</div>
			<nav>
				<ul className="menu">
					<li className="menu-item">
						<a href="#">
							Dịch vụ
							<span className="dropdown-arrow">
								<img src={expandMore} alt="Expand" />
							</span>
						</a>
						<ul className="dropdown">
							<li>
								<a href="#">Dịch vụ 1</a>
							</li>
							<li>
								<a href="#">Dịch vụ 2</a>
							</li>
							<li>
								<a href="#">Dịch vụ 3</a>
							</li>
						</ul>
					</li>
					<li className="menu-item">
						<a href="#">
							Báo giá
							<span className="dropdown-arrow">
								<img src={expandMore} alt="Expand" />
							</span>
						</a>
						<ul className="dropdown">
							<li>
								<a href="#">Gói 1</a>
							</li>
							<li>
								<a href="#">Gói 2</a>
							</li>
							<li>
								<a href="#">Gói 3</a>
							</li>
						</ul>
					</li>
					<li className="menu-item">
						<a href="#">Về chúng tôi</a>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Header;
