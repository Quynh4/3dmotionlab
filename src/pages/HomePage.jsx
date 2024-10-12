import React from "react";
import Hero from "../components/homepage-cpn/Hero";
import Services from "../components/homepage-cpn/Services";
import Testimonial from "../components/homepage-cpn/Testimonial";
import FAQ from "../components/common-cpn/FAQ";

const HomePage = () => {
	return (
		<div className="container">
			<Hero />
			<Services />
			<Testimonial />
			<FAQ />
		</div>
	);
};

export default HomePage;
