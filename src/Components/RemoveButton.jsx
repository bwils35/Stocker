import React, { useState, useEffect, Component } from "react";

const RemoveBTC = (props) => {
    const {stopLiveTradesBtcHandler} = props;

    return (
        <>
            <button
                className="deletestock"
                class="border border-danger"
                type="button"
                onClick={stopLiveTradesBtcHandler}
            >
                Remove BTC
            </button>
        </>
    );
};
const RemoveETH = (props) => {
    const {stopLiveTradesEthHandler} = props;

    return (
        <>
            <button
                className="deletestock"
                class="border border-danger"
                type="button"
                onClick={stopLiveTradesEthHandler}
            >
                Remove ETH
            </button>
        </>
    );
};

export default RemoveBTC;
export {RemoveETH};