import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import React, { useState, useEffect, Component, useRef } from "react";
import LoginForm from "./Components/LoginForm";
import Logout from "./Components/Logout";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import WebSocketView from "./Views/WebSocketView";
import SignatureBlock from "./Components/Signature";
import FormSignUp from "./Components/FormSignup";
import axios from "axios";

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

	const HitBackend = () => {
		let coin = { coinName: `Bitcoin` };
		axios
			.post(`http://localhost:3001/addBitcoin`, coin)
			.then((res) => console.log(res))
			.catch((err) => console.error(err));

		// fetch(`http://localhost:3001`, {
		// 	method: "POST",
		// 	headers: { "Content-Type": "application/json" },
		// 	body: {
		// 		coin,
		// 	},
		// });
		// .then((res) => res.json())
		// .then((data) => console.log(data));
	};

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
							<button onClick={HitBackend}>CLICK ME</button>
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
					<div>
						<FormSignUp />
					</div>
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
