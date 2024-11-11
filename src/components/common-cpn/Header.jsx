/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import { useLocation } from "react-router-dom";
import { FaBars, FaChevronDown } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";

function Header() {
	const location = useLocation();
	const [isMenuOpen, setMenuOpen] = useState(false);
	const [dropdownOpen, setDropdownOpen] = useState({
		services: false,
		pricing: false,
	});

	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen);
	};

	const handleMouseEnter = (menu) => {
		setDropdownOpen((prevState) => ({ ...prevState, [menu]: true }));
	};

	const handleMouseLeave = (menu) => {
		setDropdownOpen((prevState) => ({ ...prevState, [menu]: false }));
	};

	return (
		<nav className={`navbar ${isMenuOpen ? "responsive" : ""}`}>
			<div className="logo">
				<a href={`${process.env.PUBLIC_URL}/`}>
					<img src={logo} alt="3D Motion Lab" />
				</a>
			</div>
			<div className="menu-icon" onClick={toggleMenu}>
				<FaBars />
			</div>
			<ul className={`menu ${isMenuOpen ? "open" : ""}`}>
				<li
					className={`menu-item ${
						location.pathname === `${process.env.PUBLIC_URL}/dich-vu` ? "active" : ""
					}`}
				>
					<HashLink to={`${process.env.PUBLIC_URL}/dich-vu#`}>
						Dịch vụ
						<span className="dropdown-arrow">
							<FaChevronDown />
						</span>
					</HashLink>
					<ul className="submenu">
						<li>
							<HashLink to={`${process.env.PUBLIC_URL}/dich-vu#tvc`}>TVC</HashLink>
						</li>
						<li>
							<HashLink to={`${process.env.PUBLIC_URL}/dich-vu#web`}>3D Website</HashLink>
						</li>
						<li>
							<HashLink to={`${process.env.PUBLIC_URL}/dich-vu#vr360`}>VR360</HashLink>
						</li>
					</ul>
				</li>
				<li
					className={`menu-item ${
						location.pathname === `${process.env.PUBLIC_URL}/bao-gia` ? "active" : ""
					}`}
					onMouseEnter={() => handleMouseEnter("pricing")}
					onMouseLeave={() => handleMouseLeave("pricing")}
				>
					<HashLink to={`${process.env.PUBLIC_URL}/bao-gia#`}>
						Báo giá
						<span className="dropdown-arrow">
							<FaChevronDown />
						</span>
					</HashLink>
					{dropdownOpen.pricing && (
						<ul className="submenu">
							<li>
								<HashLink to={`${process.env.PUBLIC_URL}/bao-gia#tvc`}>TVC</HashLink>
							</li>
							<li>
								<HashLink to={`${process.env.PUBLIC_URL}/bao-gia#web`}>3D Website</HashLink>
							</li>
							<li>
								<HashLink to={`${process.env.PUBLIC_URL}/bao-gia#vr360`}>VR360</HashLink>
							</li>
						</ul>
					)}
				</li>
				<li
					className={`menu-item ${
						location.pathname === `${process.env.PUBLIC_URL}/ve-chung-toi` ? "active" : ""
					}`}
				>
					<HashLink to={`${process.env.PUBLIC_URL}/ve-chung-toi#`}>Về chúng tôi</HashLink>
				</li>
			</ul>
		</nav>
	);
}

export default Header;
