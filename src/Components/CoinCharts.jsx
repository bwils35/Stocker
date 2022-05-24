import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { ChartContainer } from "../Styles/Container.style";

export function CoinCharts({ chartData, ethData }) {
	return (
		<>
			<ChartContainer className="BTCGraph">
				<Line data={chartData} />

				<Line data={ethData} />
			</ChartContainer>
		</>
	);
}
