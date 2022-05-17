import React, { useState, useEffect, Component, useRef } from "react";
import WebSocket, { ETHWebSocket } from "../Components/WebSocket";
import { Bar, Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import BTCCard, { ETHCard } from "../Components/Cards";
import GraphView from "./GraphView";
import Footer from "../Components/Banners";

const MainView = () => {
	//Used to set Card Value - Feeds W
	const [btcStockList, setbtcStockList] = useState([]);
	const [btcData, setBtcData] = useState([]);
	const [coinData, setCoinData] = useState({
		labels: [],
		datasets: [{ backgroundColor: [], data: [] }],
	});

	const dbDataHandler = (dbList) => {
		setBtcData(dbList);
		setbtcStockList(dbList[dbList.length - 2].price);
	};

	const onSetCoinData = (name, coinObj) => {
		if (coinObj.price > 20000 || coinObj.label === "Bitcoin") {
			btcData.map((coin) => {
				let coinSetup = {
					...coinData,
					labels: [...coinData.labels, name],
					datasets: [
						{
							label: name === "" ? "" : "BTC",
							data: [...coinData.datasets[0].data, coin.price],
							backgroundColor: [
								...coinData.datasets[0].backgroundColor,
								name === "Bitcoin" ? "red" : "blue",
							],
							borderColor: "black",
							borderWidth: 2,
						},
					],
				};
				setCoinData(coinSetup);
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

	const onSetEthCoinData = (name, coinObj) => {
		if (coinObj.price < 4000 || coinObj.label === "Ethereum") {
			ethData.map((coin) => {
				let coinSetup = {
					...coinData,
					labels: [...EthcoinData.labels, name],
					datasets: [
						{
							label: name === "" ? "" : "ETH",
							data: [...EthcoinData.datasets[0].data, coin.price],
							backgroundColor: [
								...EthcoinData.datasets[0].backgroundColor,
								name === "Ethereum" ? "blue" : "red",
							],
							borderColor: "black",
							borderWidth: 2,
						},
					],
				};
				setEthCoinData(coinSetup);
			});
		}
	};
	return (
		<>
			<div className="mainView">
				<WebSocket
					setCoinDataHandler={onSetCoinData}
					btcItem={btcStockList}
					ondbDataHandler={dbDataHandler}
				/>
				<ETHWebSocket
					setETHDataHandler={onSetEthCoinData}
					ethItem={ethStockList}
					ondbEthDataHandler={dbEthDataHandler}
				/>
				<BTCCard btcItem={btcStockList} />
				<ETHCard ethItem={ethStockList} />
				<GraphView chartData={coinData} ethData={EthcoinData} />
				<Footer />
			</div>
		</>
	);
};

export default MainView;
