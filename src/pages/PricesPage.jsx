import React from "react";
import Hero from "../components/pricespage-cpn/Hero";
import FAQ from "../components/common-cpn/FAQ";
import TelevisionPrices from "../components/pricespage-cpn/TelevisionPrices";
import VR360Prices from "../components/pricespage-cpn/VR360Prices";
import Wesbsite3DPrices from "../components/pricespage-cpn/Wesbsite3DPrices";

const PricesPage = () => {
	return (
		<div className="container">
			<Hero />
			<TelevisionPrices />
			<VR360Prices />
			<Wesbsite3DPrices />
			<FAQ />
		</div>
	);
};

export default PricesPage;
