import React from "react";
import { Bar, Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export function BarChart({ chartData, ethData }) {
    return (
        <>
            <Line data={chartData} />
            <Line data={ethData} />
        </>
    );
}
