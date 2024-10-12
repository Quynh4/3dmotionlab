import logo from "./logo.svg";
import "./App.css";
import "./assets/styles/style.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import FAQ from "./components/FAQ";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="App">
			<Header />
			<div className="container">
				<Hero />
				<Services />
				<Testimonial />
				<FAQ />
				<Footer />
			</div>
		</div>
	);
}

export default App;
