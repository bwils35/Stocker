import React from "react";
import { Bar, Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export function BarChart({ chartData, ethData }) {
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
