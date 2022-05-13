import React from "react";
import { Bar, Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export function BarChart({ chartData, ethData }) {
	// const options = {
	//     scales: {
	//         yAxes: [
	//             {
	//                 ticks: {
	//                     beginAtZero: true,
	//                 },
	//             },
	//         ],
	//     },
	// }
	return (
		<>
			<div className="BTCGraph">
				<Line data={chartData} />
			</div>
			<div className="ETHGraph">
				<Line data={ethData} />
			</div>
		</>
	);
}
