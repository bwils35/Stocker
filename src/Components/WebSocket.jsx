import React, { useState, useEffect } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
import { assertIsWebSocket } from "react-use-websocket/dist/lib/util";

const WebSocket = (props) => {
    const socketUrl = "wss://ws.bitstamp.net";
    const { setbtcStockListHandler, setEthStockListHandler } = props;
    // const [btcStockList, setbtcStockList] = useState(null);
    // const [ethStockList, setEthStockList] = useState(null);

    // const onSetEthStockList = (stock) => {
    //     console.log(stock.data.price);
    //     if (3500 < stock.data.price) {
    //         return;
    //     }
    //     console.log("ETH Connected");
    //     //     //Returns data from the APIcall and sets to btcStockList for STOCK Component
    //     return setEthStockList(stock.data.price);
    // };

    // const onSetbtcStockList = (btc) => {
    //     console.log(btc.data.price);
    //     if (29000 > btc.data.price) {
    //         return;
    //     }
    //     console.log("BTC Connected");
    //     //     //Returns data from the APIcall and sets to btcStockList for STOCK Component
    //     return setbtcStockList(btc.data.price);
    // };

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
        }
    }, [lastMessage]);
    //JSON Message sent to API for Btc to USD
    const startLiveTradesBtc = (e) => {
        const apiCall = {
            event: "bts:subscribe",
            data: {
                channel: "live_trades_btcusd",
            },
        };
        // e.preventDefault();
        sendMessage(JSON.stringify(apiCall));
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
    };
    // const stopLiveTradesBtc = () => {
    //     const apiCall = {
    //         event: "bts:unsubscribe",
    //         data: {
    //             channel: "live_trades_btcusd",
    //         },
    //     };
    //     sendMessage(JSON.stringify(apiCall));
    // };
    // const stopLiveTradesEth = () => {
    //     const apiCall = {
    //         event: "bts:unsubscribe",
    //         data: {
    //             channel: "live_trades_ethusd",
    //         },
    //     };
    //     sendMessage(JSON.stringify(apiCall));
    // };
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
                                // onSetbtcStockList();
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
                                // onSetEthStockList();
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
