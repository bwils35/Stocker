import React, { useState, useEffect } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
import { assertIsWebSocket } from "react-use-websocket/dist/lib/util";
import RemoveBTC from "./RemoveButton";
import { RemoveETH } from "./RemoveButton";

const WebSocket = (props) => {
    const [currentCoinName, setCurrentCoinName] = useState("");
    const socketUrl = "wss://ws.bitstamp.net";
    const {
        setbtcStockListHandler,
        setEthStockListHandler,
        setCoinDataHandler,
    } = props;

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
            setbtcStockListHandler(JSON.parse(lastMessage.data));
            setEthStockListHandler(JSON.parse(lastMessage.data));
            setCoinDataHandler(currentCoinName, JSON.parse(lastMessage.data).data);
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
        // e.preventDefault();
        sendMessage(JSON.stringify(apiCall));
        setCurrentCoinName("Bitcoin");
        // Needed: Display the connection was successful and display loading
    };
    //JSON Message sent to API for Eth to USD
    const startLiveTradesEth = (e) => {
        const apiCall = {
            event: "bts:subscribe",
            data: {
                channel: "live_trades_ethusd",
            },
        };
        // e.preventDefault();
        sendMessage(JSON.stringify(apiCall));
        setCurrentCoinName("Ethereum");
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
                                
                                startLiveTradesBtc();
                            }}
                        >
                            Show Bitcoin
                        </button>
                        <RemoveBTC
                            stopLiveTradesBtcHandler={stopLiveTradesBtc}
                        />
                        <button
                            button
                            type="button"
                            class="btn btn-dark btn-md btn-block d-inline-block ml-1"
                            onClick={() => {
                                startLiveTradesEth();
                            }}
                        >
                            Show Ethereum
                        </button>
                        <RemoveETH
                            stopLiveTradesEthHandler={stopLiveTradesEth}
                        />
                    </div>
                    <div className="col-6" />
                </div>
            </div>
        </>
    );
};

export default WebSocket;
