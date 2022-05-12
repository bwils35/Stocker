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
    const { btcItem, ethItem } = props;

    return (
        <>
            <div>
                <div className="row">
                    <div className="col-2 " />
                    <div className="col-6 mt-3">
                        <div className="BTCCard mx-2">
                            <BTCCard btcItem={btcItem} />
                        </div>
                        <div className=" ETHCard mx-2">
                            <ETHCard ethItem={ethItem} className="ETHCard" />
                        </div>
                    </div>
                    <div className="col-6" />
                </div>
            </div>
        </>
    );
};

export default TickerView;
