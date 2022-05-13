import React, { useState, useEffect } from "react";
import WebSocket from "../Components/WebSocket";
import RemoveBTC from "../Components/RemoveButton";
import { RemoveETH } from "../Components/RemoveButton";
import BTCCard from "../Components/Cards";
import { ETHCard } from "../Components/Cards";
import { BarChart } from "../Components/BarChart";
import stopLiveTradesBtc from "../Components/WebSocket";
import { stopLiveTradesEth } from "../Components/WebSocket";
import useWebSocket, { ReadyState } from "react-use-websocket";

const TickerView = (props) => {
	// const { btcItem, ethItem } = props;
	const [btcStockList, setbtcStockList] = useState([]);
	const onSetbtcStockList = (btc) => {
		console.log(btc.data.label);
		if (5000 > btc.data.price) {
			return;
		}
		console.log("BTC Connected");
		//Returns data from the APIcall and sets to btcStockList for STOCK Component
		return setbtcStockList(btc.data.price);
	};
	const [ethStockList, setEthStockList] = useState([]);
	const onSetEthStockList = (stock) => {
		console.log(stock.data);
		if (3500 < stock.data.price) {
			return;
		}
		console.log("ETH Connected");
		console.log(ethStockList);
		////Returns data from the APIcall and sets to btcStockList for STOCK Component
		return setEthStockList(stock.data.price);
	};
	return (
		<>
			<div>
				<div className="row">
					<div className="col-2 " />
					<div className="col-6 mt-3">
						<div className="BTCCard mx-2">
							<BTCCard btcItem={btcStockList} />
						</div>
						<div className=" ETHCard mx-2">
							<ETHCard
								ethItem={ethStockList}
								className="ETHCard"
							/>
						</div>
					</div>
					<div className="col-6" />
				</div>
			</div>
		</>
	);
};

export default TickerView;
