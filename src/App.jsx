import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/common-cpn/Header";
import Footer from "./components/common-cpn/Footer";
import Home from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import "./assets/styles/styles.css";

function App() {
	return (
		<Router>
			<div className="App">
				<Header />
				<div className="container">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/dich-vu" element={<ServicesPage />} />
					</Routes>
				</div>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
