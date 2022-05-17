import React, { useState } from "react";
import { CoinCharts } from "../Components/CoinCharts";
import WebSocket from "../Components/WebSocket";

const GraphView = (props) => {
	const { chartData, ethData } = props;

	return (
		<>
			<CoinCharts chartData={chartData} ethData={ethData} />
		</>
	);
};

export default GraphView;
