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

function App() {
    const [user, setUser] = useState({ name: "", email: "" });
    const [error, setError] = useState("");

    //Sets the visibility of the Stocker ticker
    const [showLogin, setShowLogin] = useState(true);
    const [showTrades, setShowTrades] = useState(() => {
        if (setShowLogin === false) {
            setShowTrades(true);
        }
    }, [showLogin]);

    const [btcStockList, setbtcStockList] = useState(() => {
        // get the last trade from localStorage
        const lastTrade = localStorage.getItem("btcStockList");
        // return JSON.parse(lastTrade);
    });
    const [ethStockList, setEthStockList] = useState(() => {
        // get the last trade from localStorage
        const lastTrade = localStorage.getItem("ethStockList");
        // return JSON.parse(lastTrade);
    });
    const onSetEthStockList = (stock) => {
        console.log(stock);
        if (ethStockList === null) {
            alert("Successful connection, currently Loading!");
        }
        //Returns data from the APIcall and sets to btcStockList for STOCK Component
        setEthStockList(stock.data.price);
    };

    // run each the the component mounts
    useEffect(() => {
        // if there are any elements in btcStockList, store it
        if (btcStockList !== null) {
            // conver the object into a string and store it
            localStorage.setItem("btcStockList", JSON.stringify(btcStockList));
        }
        if (ethStockList !== null) {
            localStorage.setItem("ethStockList", JSON.stringify(ethStockList));
        }
    });
    const onSetbtcStockList = (stock) => {
        console.log(stock);
        if (btcStockList === null) {
            alert("Successful connection, currently Loading!");
        }
        return setbtcStockList(stock.data.price);
    };
    const onDeleteStock = (id) => {
        let updatedList = [...btcStockList];
        updatedList.splice(id, 1);
        setbtcStockList(updatedList);
    };
    return (
        <div className="row">
            <div className="col-md-4" />
            <div className="col-md-6">
                <div className="App">
                    <div mx-5 className="App">
                        <h2 className="col-6">
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
                        <h1 className="text-color:blue">Stocker</h1>
                    ) : null}
                    {showTrades ? (
                        <WebSocket
                            setbtcStockListHandler={onSetbtcStockList}
                            setEthStockListHandler={onSetEthStockList}
                        />
                    ) : null}
                    {btcStockList ? (
                        <Stock
                            btcItem={btcStockList}
                            //key={0}
                            keyToManage={0}
                            onDeleteStockHandler={onDeleteStock}
                        />
                    ) : (
                        ""
                    )}
                </div>
            </div>
            <div className="col-md-3" />
            {showTrades ? <Logout /> : null}
        </div>
    );
}

export default App;
