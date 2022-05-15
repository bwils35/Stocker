import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import React, { useState, useEffect, Component, useRef } from "react";
import LoginForm from "./Components/LoginForm";
import Logout from "./Components/Logout";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import WebSocketView from "./Views/WebSocketView";
import SignatureBlock from "./Components/Signature";

function App() {
	// Sets the visibility of the Stocker ticker
	const [showLogin, setShowLogin] = useState(true);
	const [showTrades, setShowTrades] = useState(
		(e) => {
			if (setShowLogin === false) {
				e.preventDefault();
				setShowTrades(true);
			}
		},
		[showLogin]
	);

	return (
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
							<h2>
								{showLogin ? (
									<>
										<header>
											<Header />
										</header>
										<LoginForm
											onSetShowLoginHandler={setShowLogin}
											onSetShowTradesHandler={
												setShowTrades
											}
										/>
										<footer>
											<Footer className="" />
										</footer>
									</>
								) : null}
							</h2>
						</div>
						<div>
							{showTrades ? (
								<h1
									className="StockerHeader"
									// onClick={console.log(coinData)}
								>
									Stocker
								</h1>
							) : null}
							{showTrades ? <WebSocketView /> : null}
							{showTrades ? (
								<Logout
									onSetShowLoginHandler={setShowLogin}
									onSetShowTradesHandler={setShowTrades}
								/>
							) : null}
							{showTrades ? <SignatureBlock /> : null}
						</div>
					</div>
					<div>{/* <FormSignUp /> */}</div>
				</div>
				<div className="col-md-3" />
			</div>
		</div>
	);
}

export default App;

// console.log(number);

// // // // // //
// Chart.defaults.global.options.scales;
