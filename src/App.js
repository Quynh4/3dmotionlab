import "./App.css";
import "./assets/styles/style.css";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import Header from "./components/Header";

function App() {
	return (
		<Router>
			<div className="App">
				<Header />
				<div className="container">
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/dich-vu" element={<ServicesPage />} />
					</Routes>
				</div>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
