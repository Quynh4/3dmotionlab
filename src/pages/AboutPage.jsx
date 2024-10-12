import React from "react";
import FAQ from "../components/common-cpn/FAQ";
import Hero from "../components/about-cpn/Hero";
import AboutUs from "../components/about-cpn/AboutUs";

const AboutPage = () => {
	return (
		<div className="container">
			<Hero />
			<AboutUs />
			<FAQ />
		</div>
	);
};

export default AboutPage;
