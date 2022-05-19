import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import React from "react";
import MainView from "./Pages/MainView";
import Registration from "./Components/Registration";
import Footer from "./Components/Banners";
import LoginForm from "./Components/LoginForm";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
	return (
		<Router>
			<div
				className="viewport"
				content="width=device-width"
				initial-scale="1"
			>
				<div className="row">
					<div className="col-md-3" />
					<div className="col-md-6">
						<div className="App">
							<div mx-5 className="App">
								<nav className="navBar ">
									<Link className="Link" to="/">
										Home
									</Link>
									<h2>Welcome to STOCKER</h2>
									{/* TODO: add about and contact pages */}
								</nav>
								<Routes>
									<Route path="/" element={<LoginForm />} />
									<Route
										path="/Main"
										element={<MainView />}
									/>
									<Route
										path="/Registration"
										element={<Registration />}
									/>
									{/* TODO: create a route to an error page */}
								</Routes>
								<footer>
									<Footer className="" />
								</footer>
							</div>
						</div>
					</div>
					<div className="col-md-3" />
				</div>
			</div>
		</Router>
	);
}

export default App;
