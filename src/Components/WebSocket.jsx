import React, { useState, useEffect } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
import { assertIsWebSocket } from "react-use-websocket/dist/lib/util";
import websocket from "websocket";
import RemoveBTC from "./RemoveButton";
import { RemoveETH } from "./RemoveButton";
import TickerView from "../Views/TickerView";

const WebSocket = (props) => {
	const socketUrl = "wss://ws.bitstamp.net";
	const {
		setbtcStockListHandler,
		// setEthStockListHandler,
		setCoinDataHandler,
		// setETHDataHandler,
		btcItem,
		// ethItem,
	} = props;
	var x = new Date();
	var hour = x.getHours();
	var minute = x.getMinutes();
	var second = x.getSeconds();
	var currentDTG = `${hour}:${minute}:${second}`;

	// const [btc, setBtc] = useState("Bitcoin");
	const [btc, setBtc] = useState(currentDTG);
	// const [eth, setEth] = useState(currentDTG);

	const { sendMessage, lastMessage } = useWebSocket(socketUrl);
	useEffect(() => {
		if (lastMessage !== null) {
			setbtcStockListHandler(JSON.parse(lastMessage.data));
			// setEthStockListHandler(JSON.parse(lastMessage.data));
			setCoinDataHandler(btc, JSON.parse(lastMessage.data).data);
			// setETHDataHandler(eth, JSON.parse(lastMessage.data).data);
			setBtc(currentDTG);
			// setEth(currentDTG);
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
							<RemoveBTC
								stopLiveTradesBtcHandler={stopLiveTradesBtc}
							/>
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
	const { setEthStockListHandler, setETHDataHandler, ethItem } = props;
	var x = new Date();
	var hour = x.getHours();
	var minute = x.getMinutes();
	var second = x.getSeconds();
	var currentDTG = `${hour}:${minute}:${second}`;

	const [eth, setEth] = useState(currentDTG);

	const { sendMessage, lastMessage } = useWebSocket(socketUrl);
	useEffect(() => {
		if (lastMessage !== null) {
			setEthStockListHandler(JSON.parse(lastMessage.data));
			setETHDataHandler(eth, JSON.parse(lastMessage.data).data);
			setEth(currentDTG);
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
							<RemoveETH
								stopLiveTradesEthHandler={stopLiveTradesEth}
							/>
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
