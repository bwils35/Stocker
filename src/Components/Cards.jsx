import React, { useState, useEffect } from "react";
import bitcoinLogo from "./Bitcoin_logo2.png";
import ethereumLogo from "./ethereum_logo.png";
import RemoveBTC from "./RemoveButton";
import useWebSocket, { ReadyState } from "react-use-websocket";
import { assertIsWebSocket } from "react-use-websocket/dist/lib/util";
import { RemoveETH } from "./RemoveButton";


const BTCCard = (props) => {
    const { btcItem, stopLiveTradesBtc } = props;
    // const WebSocket = (props) => {
    //     const socketUrl = "wss://ws.bitstamp.net";
    //     const {
    //         setbtcStockListHandler,
    //         setEthStockListHandler,
    //         setCoinDataHandler,
    //         setETHDataHandler,
    //     } = props;
    //     const [btc, setBtc] = useState("Bitcoin");
    //     const [eth, setEth] = useState("Ethereum");
        
    //     const { sendMessage, lastMessage } = useWebSocket(socketUrl);
    //     useEffect(() => {
    //         if (lastMessage !== null) {
    //             setbtcStockListHandler(JSON.parse(lastMessage.data));
    //             setEthStockListHandler(JSON.parse(lastMessage.data));
    //             setCoinDataHandler(btc, JSON.parse(lastMessage.data).data);
    //             setETHDataHandler(eth, JSON.parse(lastMessage.data).data);
    //         }
    //     }, [lastMessage]);
    
    //     const stopLiveTradesEth = () => {
    //         const apiCall = {
    //             event: "bts:unsubscribe",
    //             data: {
    //                 channel: "live_trades_ethusd",
    //             },
    //         };
    //         sendMessage(JSON.stringify(apiCall));
    
    //         const stopLiveTradesBtc = () => {
    //             const apiCall = {
    //                 event: "bts:unsubscribe",
    //                 data: {
    //                     channel: "live_trades_btcusd",
    //                 },
    //             };
    //             sendMessage(JSON.stringify(apiCall));
    //     };
    // };
    
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
                                <RemoveBTC
                                    stopLiveTradesBtcHandler={stopLiveTradesBtc}
                                    // onClick={}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const ETHCard = (props) => {
    const { ethItem } = props;
    return (
        <>
            <div className="row">
                <div className="col-3" />
                <div className="col-6 mt-2 mb-4">
                    <div>
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
    




export default BTCCard;
export { ETHCard };
{/* export { WebSocket }; */}
