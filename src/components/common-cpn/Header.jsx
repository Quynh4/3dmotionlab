import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import expandMore from "../../assets/images/expand_more.svg";
import { NavLink, useLocation } from "react-router-dom";

function Header() {
	const location = useLocation();
	const [menuActive, setMenuActive] = useState(false);

	const toggleMenu = () => {
		setMenuActive(!menuActive);
	};

	return (
		<nav className="navbar">
			<div className="logo">
				<a href="/">
					<img src={logo} alt="3D Motion Lab" />
				</a>
				<div className="hamburger" onClick={toggleMenu}></div>
			</div>

			<div className={`nav ${menuActive ? "active" : ""}`}>
				<ul className={`menu ${menuActive ? "active" : ""}`}>
					<li
						className={`menu-item ${
							location.pathname === "/dich-vu" ? "active" : ""
						}`}
					>
						<NavLink to="/dich-vu">
							Dịch vụ
							<span className="dropdown-arrow">
								<img src={expandMore} alt="Expand" />
							</span>
						</NavLink>
					</li>
					<li
						className={`menu-item ${
							location.pathname === "/bao-gia" ? "active" : ""
						}`}
					>
						<NavLink to="/bao-gia">
							Báo giá
							<span className="dropdown-arrow">
								<img src={expandMore} alt="Expand" />
							</span>
						</NavLink>
					</li>
					<li
						className={`menu-item ${
							location.pathname === "/ve-chung-toi" ? "active" : ""
						}`}
					>
						<NavLink to="/ve-chung-toi">Về chúng tôi</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Header;
