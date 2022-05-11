import React, { useState, useEffect } from "react";
import bitcoinLogo from "./Bitcoin_logo2.png";
import ethereumLogo from "./ethereum_logo.png";
import WebSocket from "./WebSocket";
import useWebSocket, { ReadyState } from "react-use-websocket";

const Stock = (props) => {
    const {
        keyToManage,
        btcItem,
        setbtcStockListHandler,
        setEthStockListHandler,
    } = props;
    const socketUrl = "wss://ws.bitstamp.net";

    // const [hideBTCcard, setHideBTCcard] = useState(true);
    const [btcStockList, setbtcStockList] = useState(null);

    const onSetbtcStockList = (btc) => {
        console.log(btc.data.price);
        if (29000 > btc.data.price) {
            return;
        }
        console.log("BTC Connected");
        //     //Returns data from the APIcall and sets to btcStockList for STOCK Component
        return setbtcStockList(btc.data.price);
    };
    const [ethStockList, setEthStockList] = useState(null);
    const onSetEthStockList = (stock) => {
        console.log(stock.data.price);
        if (3500 < stock.data.price) {
            return;
        }
        console.log("ETH Connected");
        ////Returns data from the APIcall and sets to btcStockList for STOCK Component
        return setEthStockList(stock.data.price);
    };
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

    const stopLiveTradesBtc = () => {
        const apiCall = {
            event: "bts:unsubscribe",
            data: {
                channel: "live_trades_btcusd",
            },
        };
        sendMessage(JSON.stringify(apiCall));
        console.log("Cancelled Bitcoin");
    };

    return (
        <>
            <div className="row">
                <div className="col-3" />
                <div className="col-6 mt-1">
                    <div>
                        <div className="card border border-dark mt-2">
                            <div className="card-body pb-1">
                                <h4 className="card-header color-">
                                    <img
                                        src={bitcoinLogo}
                                        alt="Bitcoin Logo"
                                        className="btcLogo"
                                    />
                                </h4>
                                <h6 className="card-body">
                                    Most Recent BTC Trade
                                </h6>
                                <p className="card-text">${btcItem}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const ETHCard = (props) => {
    const { keyToManage, ethItem } = props;
    return (
        <>
            <div className="row">
                <div className="col-3" />
                <div className="col-6 mt-2 mb-4">
                    <div>
                        {/* <WebSocket setEthStockListHandler={onSetEthStockList} /> */}
                        <div className="card border border-dark mt-2">
                            <div className="card-body pb-1">
                                <h4 className="card-header color-">
                                    <img
                                        src={ethereumLogo}
                                        alt="Ethereum Logo"
                                        className="ethLogo"
                                    />
                                    Etherium{" "}
                                </h4>
                                <h6 className="card-body">
                                    Most Recent ETH Trade
                                </h6>
                                <p className="card-text">${ethItem}</p>
                                <div className="col-6" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Stock;
export { ETHCard };
