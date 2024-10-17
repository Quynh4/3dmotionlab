/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import { useLocation } from "react-router-dom";
import { FaBars, FaChevronDown } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";

function Header() {
	const location = useLocation();
	const [isMenuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen);
	};

	return (
		<nav className={`navbar ${isMenuOpen ? "responsive" : ""}`}>
			<div className="logo">
				<a href="/">
					<img src={logo} alt="3D Motion Lab" />
				</a>
			</div>
			<div className="menu-icon" onClick={toggleMenu}>
				<FaBars />
			</div>
			<ul className={`menu ${isMenuOpen ? "open" : ""}`}>
				<li
					className={`menu-item ${
						location.pathname === "/dich-vu" ? "active" : ""
					}`}
				>
					<HashLink to="/dich-vu#">
						Dịch vụ
						<span className="dropdown-arrow">
							<FaChevronDown />
						</span>
					</HashLink>
				</li>
				<li
					className={`menu-item ${
						location.pathname === "/bao-gia" ? "active" : ""
					}`}
				>
					<HashLink to="/bao-gia#">
						Báo giá
						<span className="dropdown-arrow">
							<FaChevronDown />
						</span>
					</HashLink>
				</li>
				<li
					className={`menu-item ${
						location.pathname === "/ve-chung-toi" ? "active" : ""
					}`}
				>
					<HashLink to="/ve-chung-toi#">Về chúng tôi</HashLink>
				</li>
			</ul>
		</nav>
	);
}

export default Header;
