import React, { useState } from "react";
import { BarChart } from "../Components/BarChart";
import  WebSocket from "../Components/WebSocket";


const GraphView = (props) => {
    const { chartData, ethData } = props;

    return(
        <>
            <BarChart chartData={chartData} ethData={ethData} />
        </>
    )
}

export default GraphView;