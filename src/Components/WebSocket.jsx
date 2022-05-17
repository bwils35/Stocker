import React, { useState, useEffect } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
import { assertIsWebSocket } from "react-use-websocket/dist/lib/util";
import websocket from "websocket";
import axios from "axios";

const WebSocket = (props) => {
	const socketUrl = "wss://ws.bitstamp.net";
	const { setCoinDataHandler, ondbDataHandler } = props;
	var x = new Date();
	var hour = x.getHours();
	var minute = x.getMinutes();
	var second = x.getSeconds();
	var currentDTG = `${hour}:${minute}:${second}`;

	// LCSV that sets the x-axis chart labels with local time.
	const [btc, setBtc] = useState(currentDTG);

	const { sendMessage, lastMessage } = useWebSocket(socketUrl);
	useEffect(() => {
		if (lastMessage !== null) {
			// setbtcStockListHandler(JSON.parse(lastMessage.data));
			setCoinDataHandler(btc, JSON.parse(lastMessage.data).data); //Local time is passed with JSON parse to Chart
			setBtc(currentDTG);
			// console.log(JSON.parse(lastMessage.data));
			//
			if (
				Object.keys(JSON.parse(lastMessage.data).data).length &&
				JSON.parse(lastMessage.data).channel === "live_trades_btcusd"
			) {
				let bitcoin = JSON.parse(lastMessage.data).data;
				let coinSetup = {
					amount: bitcoin.amount,
					price: bitcoin.price,
					timestamp: bitcoin.timestamp,
				};
				axios
					.post("http://localhost:3001/addBitcoin", coinSetup)
					.then((res) => console.log(res))
					.catch((err) => console.error(err));
				axios
					.get(`http://localhost:3001/getAllBitcoin`)
					.then((res) => ondbDataHandler(res.data))
					.catch((err) => console.error(err));
			}
		}
	}, [lastMessage]);
	//JSON Message sent to API for Btc to USD
	const startLiveTradesBtc = () => {
		const apiCall = {
			event: "bts:subscribe",
			data: {
				channel: "live_trades_btcusd",
			},
		};
		sendMessage(JSON.stringify(apiCall));
	};
	//JSON Message sent to API for Eth to USD
	const stopLiveTradesBtc = () => {
		const apiCall = {
			event: "bts:unsubscribe",
			data: {
				channel: "live_trades_btcusd",
			},
		};
		sendMessage(JSON.stringify(apiCall));
	};

	return (
		<>
			<div className="row">
				<div className="col-4" />
				<div className="col-6 mt-3">
					<div
						class="btn-toolbar mb-3"
						role="toolbar"
						aria-label="Toolbar with button groups"
					>
						<div
							class="btn-group mr-2"
							role="group"
							aria-label="First group"
						/>
						<div className="startBTCTrades">
							<button
								button
								type="button"
								// class="btn btn-dark btn-md btn-block d-inline-block ml-1"
								onClick={() => {
									startLiveTradesBtc();
								}}
							>
								Show Bitcoin
							</button>
							<button
								class="deletestock"
								className="border border-dark btn btn-danger btn-md mt-1 m-2"
								type="button"
								onClick={stopLiveTradesBtc}
							>
								Remove BTC
							</button>
							{/* <RemoveBTC
								stopLiveTradesBtcHandler={stopLiveTradesBtc}
							/> */}
						</div>
					</div>
					<div className="col-6" />
				</div>
			</div>
		</>
	);
};

// Create WebSocket for ETH

const ETHWebSocket = (props) => {
	const socketUrl = "wss://ws.bitstamp.net";
	const { setETHDataHandler, ondbEthDataHandler } = props;
	var x = new Date();
	var hour = x.getHours();
	var minute = x.getMinutes();
	var second = x.getSeconds();
	var currentDTG = `${hour}:${minute}:${second}`;

	const [eth, setEth] = useState(currentDTG);

	const { sendMessage, lastMessage } = useWebSocket(socketUrl);
	useEffect(() => {
		if (lastMessage !== null) {
			setETHDataHandler(eth, JSON.parse(lastMessage.data).data);
			setEth(currentDTG);
			if (
				Object.keys(JSON.parse(lastMessage.data).data).length &&
				JSON.parse(lastMessage.data).channel === "live_trades_ethusd"
			) {
				let ethereum = JSON.parse(lastMessage.data).data;
				let coinSetup = {
					amount: ethereum.amount,
					price: ethereum.price,
					timestamp: ethereum.timestamp,
				};
				axios
					.post(`http://localhost:3001/addEthereum`, coinSetup)
					.then((res) => console.log(res))
					.catch((err) => console.error(err));
				axios
					.get(`http://localhost:3001/getAllEthereum`)
					.then((res) => ondbEthDataHandler(res.data))
					.catch((err) => console.error(err));
			}
		}
	}, [lastMessage]);
	//JSON Message sent to API for Eth to USD
	const startLiveTradesEth = (e) => {
		const apiCall = {
			event: "bts:subscribe",
			data: {
				channel: "live_trades_ethusd",
			},
		};
		sendMessage(JSON.stringify(apiCall));
	};
	const stopLiveTradesEth = () => {
		const apiCall = {
			event: "bts:unsubscribe",
			data: {
				channel: "live_trades_ethusd",
			},
		};
		sendMessage(JSON.stringify(apiCall));
	};

	return (
		<>
			<div className="row">
				<div className="col-4" />
				<div className="col-6 mt-3">
					<div
						class="btn-toolbar mb-3"
						role="toolbar"
						aria-label="Toolbar with button groups"
					>
						<div
							class="btn-group mr-2"
							role="group"
							aria-label="First group"
						/>
						<div className="startETHTrades">
							<button
								type="button"
								// class="btn btn-primary btn-outline btn-md btn-block d-inline-block ml-1"
								onClick={() => {
									startLiveTradesEth();
								}}
							>
								Show Ethereum
							</button>
							<button
								class="deletestock"
								className="border border-dark btn btn-danger btn-md mt-1 m-2"
								type="button"
								onClick={stopLiveTradesEth}
							>
								Remove ETH
							</button>
							{/* <RemoveETH
								stopLiveTradesEthHandler={stopLiveTradesEth}
							/> */}
						</div>
					</div>
					<div className="col-6" />
				</div>
			</div>
		</>
	);
};

export default WebSocket;
export { ETHWebSocket };
