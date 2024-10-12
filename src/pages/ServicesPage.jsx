import React from "react";
import Hero from "../components/servicespage-cpn/Hero";
import FAQ from "../components/common-cpn/FAQ";
import Services from "../components/servicespage-cpn/Services";

const ServicesPage = () => {
	return (
		<div className="container">
			<Hero />
			<Services />
			<FAQ />
		</div>
	);
};

export default ServicesPage;
