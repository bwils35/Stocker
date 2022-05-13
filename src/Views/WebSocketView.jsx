import React, { useState, useEffect, Component, useRef } from "react";
import WebSocket, { ETHWebSocket } from "../Components/WebSocket";
import bitcoinLogo from "../Img/Bitcoin_logo2.png";
import ethereumLogo from "../Img/ethereum_logo.png";
import { Bar, Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import BTCCard, { ETHCard } from "../Components/Cards";
import GraphView from "./GraphView";

const WebSocketView = () => {
	const [btcStockList, setbtcStockList] = useState([]);
	const onSetbtcStockList = (btc) => {
		console.log(btc.data.label);
		if (5000 > btc.data.price) {
			return;
		}
		console.log("BTC Connected");
		console.log(btcStockList);
		//Returns data from the APIcall and sets to btcStockList for STOCK Component
		return setbtcStockList(btc.data.price);
	};
	const [ethStockList, setEthStockList] = useState([]);
	const onSetEthStockList = (stock) => {
		console.log(stock.data.label);
		if (3500 < stock.data.price) {
			return;
		}
		console.log("ETH Connected");
		console.log(ethStockList);
		////Returns data from the APIcall and sets to btcStockList for STOCK Component
		return setEthStockList(stock.data.price);
	};
	const [coinData, setCoinData] = useState({
		labels: [],
		datasets: [{ backgroundColor: [], data: [] }],
	});
	const onSetCoinData = (name, coinObj) => {
		if (coinObj.price > 20000 || coinObj.label === "Bitcoin") {
			let coinSetup = {
				...coinData,
				labels: [...coinData.labels, name],
				datasets: [
					{
						label: name === "" ? "" : "BTC",
						data: [...coinData.datasets[0].data, coinObj.price],
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
		}
	};

	const [EthcoinData, setEthCoinData] = useState({
		labels: [],
		datasets: [{ backgroundColor: [], data: [] }],
	});
	const onSetEthCoinData = (name, coinObj) => {
		if (coinObj.price < 4000 || coinObj.label === "Ethereum") {
			let coinSetup = {
				...coinData,
				labels: [...EthcoinData.labels, name],
				datasets: [
					{
						label: name === "" ? "" : "ETH",
						data: [...EthcoinData.datasets[0].data, coinObj.price],
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
		}
	};
	return (
		<>
			<div className="mainView">
				<WebSocket
					setbtcStockListHandler={onSetbtcStockList}
					setCoinDataHandler={onSetCoinData}
					btcItem={btcStockList}
				/>
				<ETHWebSocket
					setEthStockListHandler={onSetEthStockList}
					setETHDataHandler={onSetEthCoinData}
					ethItem={ethStockList}
				/>
				<BTCCard btcItem={btcStockList} />
				<ETHCard ethItem={ethStockList} />
				<GraphView chartData={coinData} ethData={EthcoinData} />
			</div>
		</>
	);
};

export default WebSocketView;
