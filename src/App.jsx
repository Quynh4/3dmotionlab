import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/common-cpn/Header";
import Footer from "./components/common-cpn/Footer";
import Home from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import ServicesPage from "./pages/ServicesPage";
import "./assets/styles/styles.css";
import PricesPage from "./pages/PricesPage";
import AboutPage from "./pages/AboutPage";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function App() {
	const ScrollToTop = () => {
		const { hash } = useLocation();

		useEffect(() => {
			if (!hash) {
				window.scrollTo(0, 0);
			}
		}, [hash]);

		return null;
	};

	return (
		<BrowserRouter>
			<ScrollToTop />
			<div className="App">
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/dich-vu" element={<ServicesPage />} />
					<Route path="/bao-gia" element={<PricesPage />} />
					<Route path="/ve-chung-toi" element={<AboutPage />} />
					<Route path="quan-ly" element={<AdminPage />} />
				</Routes>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
