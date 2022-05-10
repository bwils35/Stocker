import React, { useState, useEffect } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
import { assertIsWebSocket } from "react-use-websocket/dist/lib/util";

const WebSocket = (props) => {
    const socketUrl = "wss://ws.bitstamp.net";

    const {
        sendMessage,
        sendJsonMessage,
        lastMessage,
        lastJsonMessage,
        readyState,
        getWebSocket,
    } = useWebSocket(socketUrl);
    useEffect(() => {
        if (lastMessage !== null) {
            props.setbtcStockListHandler(JSON.parse(lastMessage.data));
            props.setEthStockListHandler(JSON.parse(lastMessage.data));
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
        // Needed: Display the connection was successful and display loading
    };
    //JSON Message sent to API for Eth to USD
    const startLiveTradesEth = () => {
        const apiCall = {
            event: "bts:subscribe",
            data: {
                channel: "live_trades_ethusd",
            },
        };
        sendMessage(JSON.stringify(apiCall));
    };
    const stopLiveTradesBtc = () => {
        const apiCall = {
            event: "bts:unsubscribe",
            data: {
                channel: "live_trades_btcusd",
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
    const loadingBar = () => {
        "test";
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
                <button
                    button
                    type="button"
                    class="btn btn-primary btn-md btn-block"
                    onClick={() => {
                        // loadingBar();
                        // stopLiveTradesEth();
                        startLiveTradesBtc();
                    }}
                >
                    Show Bitcoin
                </button>
                <button
                    button
                    type="button"
                    class="btn btn-dark btn-md btn-block d-inline-block ml-1"
                    onClick={() => {
                        // loadingBar();
                        startLiveTradesEth();
                        // stopLiveTradesBtc();
                    }}
                >
                    Show Ethereum
                </button>
            </div>
                <div className="col-6" />
                </div>
            </div>
        </>
    );
};

export default WebSocket;
