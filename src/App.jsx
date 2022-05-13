import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import React, { useState, useEffect, Component, useRef } from "react";
import LoginForm from "./Components/LoginForm";
import Logout from "./Components/Logout";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import WebSocketView from "./Views/WebSocketView";

function App() {
	// Sets the visibility of the Stocker ticker
	const [showLogin, setShowLogin] = useState(true);
	const [showTrades, setShowTrades] = useState(() => {
		if (setShowLogin === false) {
			setShowTrades(true);
		}
	}, [showLogin]);
	return (
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
										onSetShowTradesHandler={setShowTrades}
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
					</div>
				</div>
				<div>{/* <FormSignUp /> */}</div>
			</div>
			<div className="col-md-3" />
		</div>
	);
}

export default App;

// console.log(number);
// // run each the the component mounts (used for local storage)
// useEffect(() => {
//     // if there are any elements in btcStockList, store it
//     if (btcStockList !== null) {
//         // conver the object into a string and store it
//         localStorage.setItem("btcStockList", btcStockList);
//     }
//     if (ethStockList !== null) {
//         localStorage.setItem("ethStockList", ethStockList);
//     }
// });

// // // // // //
// Chart.defaults.global.options.scales;
