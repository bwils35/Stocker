import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import React, { useState, useEffect, Component } from "react";
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

function App() {
    // const [user, setUser] = useState({ name: "", email: "" });
    // const [error, setError] = useState("");

    //Sets the visibility of the Stocker ticker
    const [showLogin, setShowLogin] = useState(true);
    const [showTrades, setShowTrades] = useState(() => {
        if (setShowLogin === false) {
            setShowTrades(true);
        }
    }, [showLogin]);

    const [btcStockList, setbtcStockList] = useState(null);

    const onSetbtcStockList = (btc) => {
        console.log("Test BTC");
        console.log(btc.data.price);
        if (29000 > btc.data.price) {
            return;
        }
        console.log("success");
        //     //Returns data from the APIcall and sets to btcStockList for STOCK Component
        return setbtcStockList(btc.data.price);
    };

    const [ethStockList, setEthStockList] = useState(null);
    const onSetEthStockList = (stock) => {
        console.log(stock.data.price);
        if (3500 < stock.data.price) {
            return;
        }
        console.log("success");
        //     //Returns data from the APIcall and sets to btcStockList for STOCK Component
        return setEthStockList(stock.data.price);
    };

    // // run each the the component mounts
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
    const onDeleteBTC = (id) => {
        // create logic to remove cards
    };
    const onDeleteETH = (id) => {
        // create logic to remove cards
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
                            onDeleteBTCHandler={onDeleteBTC}
                        />
                    ) : (
                        ""
                    )}
                    {showTrades ? (
                        <ETHCard
                            ethItem={ethStockList}
                            //key={0}
                            keyToManage={0}
                            onDeleteETHHandler={onDeleteETH}
                        />
                    ) : (
                        ""
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
