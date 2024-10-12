import logo from "./logo.svg";
import "./App.css";
import "./assets/styles/style.css";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
	return (
		<div className="App">
			<Header />
			<div className="container">
				<Hero />
			</div>
		</div>
	);
}

export default App;
