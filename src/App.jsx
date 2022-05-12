import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import React, { useState, useEffect, Component, useRef } from "react";
import BTCCard from "./Components/Cards";
import WebSocket from "./Components/WebSocket";
import LoginForm from "./Components/LoginForm";
import { DEFAULT_RECONNECT_INTERVAL_MS } from "react-use-websocket/dist/lib/constants";
import Logout from "./Components/Logout";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import FormSignUp from "./Components/FormSignup";
import { ETHCard } from "./Components/Cards";
import { set } from "react-hook-form";
import { BarChart } from "./Components/BarChart";
import { Line } from "chart.js";

function App() {
    // Sets the visibility of the Stocker ticker
    const [showLogin, setShowLogin] = useState(true);
    const [showTrades, setShowTrades] = useState(() => {
        if (setShowLogin === false) {
            setShowTrades(true);
        }
    }, [showLogin]);

    const [btcStockList, setbtcStockList] = useState([]);
    const onSetbtcStockList = (btc) => {
        console.log(btc.data.label);
        if (5000 > btc.data.price) {
            return;
        }
        console.log("BTC Connected");
        //Returns data from the APIcall and sets to btcStockList for STOCK Component
        return setbtcStockList(btc.data.price);
    };
    const [ethStockList, setEthStockList] = useState([]);
    const onSetEthStockList = (stock) => {
        console.log(stock.data);
        if (3500 < stock.data.price) {
            return;
        }
        console.log("ETH Connected");
        console.log(ethStockList);
        ////Returns data from the APIcall and sets to btcStockList for STOCK Component
        return setEthStockList(stock.data.price);
    };
    // console.log(number);
    // // run each the the component mounts (used for local storage)
    // useEffect(() => {
    //     // if there are any elements in btcStockList, store it
    //     if (btcStockList !== null) {
    //         // conver the object into a string and store it
    //         localStorage.setItem("btcStockList", btcStockList);
    //     }
    //     if (ethStockList !== null) {
    //         localStorage.setItem("ethStockList", ethStockList);
    //     }
    // });
    const [coinData, setCoinData] = useState({
        labels: [],
        datasets: [{ backgroundColor: [], data: [] }],
    });
    const onSetCoinData = (name, coinObj) => {
        if (coinObj.price > 20000 || coinObj.label === "Bitcoin") {
            let coinSetup = {
                ...coinData,
                labels: [...coinData.labels, name],
                datasets: [
                    {
                        label: name === "Bitcoin" ? "BTC" : "ETH",
                        data: [...coinData.datasets[0].data, coinObj.price],
                        backgroundColor: [
                            ...coinData.datasets[0].backgroundColor,
                            name === "Bitcoin" ? "red" : "blue",
                        ],
                        borderColor: "black",
                        borderWidth: 2,
                    },
                ],
            };
            setCoinData(coinSetup);
        }
    };

    const [EthcoinData, setEthCoinData] = useState({
        labels: [],
        datasets: [{ backgroundColor: [], data: [] }],
    });
    const onSetEthCoinData = (name, coinObj) => {
        if (coinObj.price < 4000 || coinObj.label === "Ethereum") {
            let coinSetup = {
                ...coinData,
                labels: [...EthcoinData.labels, name],
                datasets: [
                    {
                        label: name === "Ethereum" ? "ETH" : "BTC",
                        data: [...EthcoinData.datasets[0].data, coinObj.price],
                        backgroundColor: [
                            ...EthcoinData.datasets[0].backgroundColor,
                            name === "Ethereum" ? "blue" : "red",
                        ],
                        borderColor: "black",
                        borderWidth: 2,
                    },
                ],
            };
            setEthCoinData(coinSetup);
        }
    };
    return (
        <div className="row">
            <div className="col-md-3" />
            <div className="col-md-6">
                <div className="App">
                    <div mx-5 className="App">
                        <h2>
                            {showLogin ? (
                                <>
                                    <header>
                                        <Header />
                                    </header>
                                    <LoginForm
                                        onSetShowLoginHandler={setShowLogin}
                                        onSetShowTradesHandler={setShowTrades}
                                    />
                                    <footer>
                                        <Footer />
                                    </footer>
                                </>
                            ) : null}
                        </h2>
                    </div>
                    {showTrades ? (
                        <h1
                            className="StockerHeader"
                            // onClick={console.log(coinData)}
                        >
                            Stocker
                        </h1>
                    ) : null}
                    {showTrades ? (
                        <WebSocket
                            setbtcStockListHandler={onSetbtcStockList}
                            setEthStockListHandler={onSetEthStockList}
                            setCoinDataHandler={onSetCoinData}
                            setETHDataHandler={onSetEthCoinData}
                        />
                    ) : null}
                    {showTrades ? (
                        <BTCCard
                            btcItem={btcStockList}
                        />
                    ) : null}
                    {showTrades ? (
                        <ETHCard
                            ethItem={ethStockList}
                        />
                    ) : null}
                    {coinData.labels.length > 0 ||
                    EthcoinData.labels.length > 0 ? (
                        <BarChart chartData={coinData} ethData={EthcoinData} />
                    ) : (
                        showTrades
                    )}
                </div>
                <div>
                    <FormSignUp />
                </div>
            </div>
            <div className="col-md-3" />
            {showTrades ? (
                <Logout
                    onSetShowLoginHandler={setShowLogin}
                    onSetShowTradesHandler={setShowTrades}
                />
            ) : null}
        </div>
    );
}

export default App;


