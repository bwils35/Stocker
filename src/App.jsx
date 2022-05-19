import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import React from "react";
import MainView from "./Pages/MainView";
import Registration from "./Components/Registration";
import Footer from "./Components/Banners";
import LoginForm from "./Components/LoginForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "./Styles/GlobalStyles.style";
import { AppContainer } from "./Styles/Container.style";
import AboutPage from "./Pages/About";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar";

function App() {
	return (
		<>
			<GlobalStyles />
			<Router>
				<AppContainer>
					<Navbar />
					<Routes>
						<Route path="/" element={<LoginForm />} />
						<Route path="/About" element={<AboutPage />} />
						<Route path="/Contact" element={<Contact />} />
						<Route path="/Main" element={<MainView />} />
						<Route
							path="/Registration"
							element={<Registration />}
						/>
						{/* TODO: create a route to an error page */}
					</Routes>
					{/* <footer>
					<Footer className="" />
				</footer> */}
				</AppContainer>
			</Router>
		</>
	);
}

export default App;
