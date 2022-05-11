import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

// fetch=('https://www.bitstamp.net/api/v2/ticker/btcusd').then(response => response.json()).then(data => this.setState({data: data.feed}));

export function BarChart({ chartData }) {
    return (
        <>
            <Bar data={chartData} />
        </>
    );
}

// const Logout = (props) => {
//     const { onSetShowLoginHandler, onSetShowTradesHandler } = props;
