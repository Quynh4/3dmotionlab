import "./App.css";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Link,
	useLocation,
} from "react-router-dom";
import Header from "./components/common-cpn/Header";
import Footer from "./components/common-cpn/Footer";
import Home from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import "./assets/styles/styles.css";
import PricesPage from "./pages/PricesPage";
import AboutPage from "./pages/AboutPage";

const scrollToHash = () => {
	const hash = window.location.hash;
	if (hash) {
		const element = document.getElementById(hash.replace("#", ""));
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	} else {
		window.scrollTo(0, 0);
	}
};

function App() {
	const location = useLocation();

	return (
		<Router>
			<div className="App">
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/dich-vu" element={<ServicesPage />} />
					<Route path="/bao-gia" element={<PricesPage />} />
					<Route path="/ve-chung-toi" element={<AboutPage />} />
				</Routes>
				<Footer />
			</div>
		</Router>
	);
}
