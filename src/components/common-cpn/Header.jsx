/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../../assets/images/logo.png";
import expandMore from "../../assets/images/expand_more.svg";
import { useLocation } from "react-router-dom";

function Header() {
	const location = useLocation();

	return (
		<nav className="navbar">
			<div className="logo">
				<a href="/">
					<img src={logo} alt="3D Motion Lab" />
				</a>
			</div>
			<nav>
				<ul className="menu">
					<li
						className={`menu-item ${
							location.pathname === "/dich-vu" ? "active" : ""
						}`}
					>
						<a href="/dich-vu">
							Dịch vụ
							<span className="dropdown-arrow">
								<img src={expandMore} alt="Expand" />
							</span>
						</a>
					</li>
					<li
						className={`menu-item ${
							location.pathname === "/bao-gia" ? "active" : ""
						}`}
					>
						<a href="/bao-gia">
							Báo giá
							<span className="dropdown-arrow">
								<img src={expandMore} alt="Expand" />
							</span>
						</a>
					</li>
					<li
						className={`menu-item ${
							location.pathname === "/ve-chung-toi" ? "active" : ""
						}`}
					>
						<a href="/ve-chung-toi">Về chúng tôi</a>
					</li>
				</ul>
			</nav>
		</nav>
	);
}

export default Header;
