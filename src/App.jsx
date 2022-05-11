import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import React, { useState, useEffect, Component, useRef } from "react";
import Stock from "./Components/Stock";
import WebSocket from "./Components/WebSocket";
import LoginForm from "./Components/LoginForm";
import { DEFAULT_RECONNECT_INTERVAL_MS } from "react-use-websocket/dist/lib/constants";
import Logout from "./Components/Logout";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import FormSignUp from "./Components/FormSignup";
import { ETHCard } from "./Components/Stock";
import { set } from "react-hook-form";
import { BarChart } from "./Components/BarChart";
import { CoinData } from "./Components/CoinData";
import { BarController } from "chart.js";

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
        console.log(btc.data.price);
        if (29000 > btc.data.price) {
            return;
        }
        console.log("BTC Connected");
        //Returns data from the APIcall and sets to btcStockList for STOCK Component
        return setbtcStockList(btc.data.price);
    };

    const [ethStockList, setEthStockList] = useState(null);
    const onSetEthStockList = (stock) => {
        console.log(stock.data);
        if (3500 < stock.data.price) {
            return;
        }
        console.log("ETH Connected");
        console.log(stock.data);
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
        labels: CoinData.map((data) => data.id),
        datasets: [
            {
                label: "Users Gained",
                // data: CoinData.map((data) => data.data.price),
                data: CoinData.map((data) => data.userGain),
                backgroundColor: ["red", "blue", "green"],
                borderColor: "black",
                borderWidth: 2,
            },
        ],
    });
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
                        <h1 className="StockerHeader">Stocker</h1>
                    ) : null}
                    {showTrades ? (
                        <WebSocket
                            setbtcStockListHandler={onSetbtcStockList}
                            setEthStockListHandler={onSetEthStockList}
                        />
                    ) : null}
                    {showTrades ? (
                        <Stock
                            btcItem={btcStockList}
                            //key={0}
                            keyToManage={0}
                            // onDeleteBTCHandler={onDeleteBTC}
                            setbtcStockListHandler={onSetbtcStockList}
                            setEthStockListHandler={onSetEthStockList}
                        />
                    ) : null}
                    {showTrades ? (
                        <ETHCard
                            ethItem={ethStockList}
                            //key={0}
                            keyToManage={0}
                            // onDeleteETHHandler={onDeleteETH}
                        />
                    ) : null}
                    {showTrades ? <BarChart chartData={coinData} /> : null}
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
