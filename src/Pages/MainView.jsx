import React, { useState } from "react";
import WebSocket, { ETHWebSocket } from "../Components/WebSocket";
import BTCCard, { ETHCard } from "../Components/Cards";
import Footer from "../Components/Banners";
import { CoinCharts } from "../Components/CoinCharts";
import Header from "../Components/Banners";
import LoginForm from "../Components/LoginForm";
import Logout from "../Components/Logout";
import Registration from "../Components/Registration";
import { useNavigate } from "react-router-dom";
import { AppContainer, Page } from "../Styles/Container.style";
import { CoinButton } from "../Styles/Button.style";

const MainView = () => {
	/* Local Component State Variables used to set various values */
	const [btcStockList, setbtcStockList] = useState([]); // sets value displayed on BTCCard based on live values being stored in the database
	const [btcData, setBtcData] = useState([]); // sets the data in a format ready for chartjs based on live values being stored in the database
	// sets the data in a format ready for chartjs
	const [coinData, setCoinData] = useState({
		labels: [],
		datasets: [{ backgroundColor: [], data: [] }],
	});

	/* Receives entire dbList through Back-End Server via routes(axios) */
	const dbDataHandler = (dbList) => {
		setBtcData(dbList); // Sets btcData with an array object from the Database
		setbtcStockList(dbList[dbList.length - 2].price); // Passes the most recent DataBase value to the BTC Card to display
	};

	//Models data for ChartJS in a format that can be displayed - price data (int value)
	const onSetCoinData = (xAxisLabel, coinObj) => {
		//Coin data is seperated by value of the coin.  TODO: Optimize by setting to Channel name from WebSocket.
		if (coinObj.channel === "live_trades_btcusd") {
			// creates an array based on data from the database
			btcData.map((coin) => {
				let coinSetup = {
					...coinData,
					labels: [...coinData.labels, xAxisLabel],
					datasets: [
						{
							label: "BTC",
							data: [...coinData.datasets[0].data, coin.price],
							backgroundColor: [
								...coinData.datasets[0].backgroundColor,
								coinObj.channel === "live_trades_btcusd"
									? "red"
									: "blue",
							],
							borderColor: "black",
							borderWidth: 2,
						},
					],
				};
				setCoinData(coinSetup);
				console.log(xAxisLabel);
			});
		}
	};

	const [ethStockList, setEthStockList] = useState([]);
	const [ethData, setEthData] = useState([]);
	const [EthcoinData, setEthCoinData] = useState({
		labels: [],
		datasets: [{ backgroundColor: [], data: [] }],
	});

	const dbEthDataHandler = (dbList) => {
		setEthData(dbList);
		setEthStockList(dbList[dbList.length - 2].price);
	};

	const onSetEthCoinData = (xAxisLabel, coinObj) => {
		if (coinObj.channel === "live_trades_ethusd") {
			ethData.map((coin) => {
				let coinSetup = {
					...coinData,
					labels: [...EthcoinData.labels, xAxisLabel],
					datasets: [
						{
							label: xAxisLabel === "" ? "" : "ETH",
							data: [...EthcoinData.datasets[0].data, coin.price],
							backgroundColor: [
								...EthcoinData.datasets[0].backgroundColor,
								xAxisLabel === "Ethereum" ? "blue" : "red",
							],
							borderColor: "black",
							borderWidth: 2,
						},
					],
				};
				setEthCoinData(coinSetup);
				console.log("🚀" + coinObj.channel);
			});
		}
	};

	let navigate = useNavigate();
	return (
		<>
			<AppContainer>
				<>
					<Logout
						onClick={() => {
							navigate("/");
						}}
					/>
					<WebSocket
						setCoinDataHandler={onSetCoinData}
						btcItem={btcStockList}
						ondbDataHandler={dbDataHandler}
					/>
					<BTCCard btcItem={btcStockList} />
					<ETHWebSocket
						setETHDataHandler={onSetEthCoinData}
						ethItem={ethStockList}
						ondbEthDataHandler={dbEthDataHandler}
					/>
					<ETHCard ethItem={ethStockList} />
					<CoinCharts chartData={coinData} ethData={EthcoinData} />
				</>
			</AppContainer>
		</>
	);
};

export default MainView;
