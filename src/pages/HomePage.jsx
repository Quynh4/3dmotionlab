import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Testimonial from "../components/Testimonial";
import FAQ from "../components/FAQ";

const Home = () => {
	return (
		<div className="container">
			<Hero />
			<Services />
			<Testimonial />
			<FAQ />
		</div>
	);
};

export default Home;
