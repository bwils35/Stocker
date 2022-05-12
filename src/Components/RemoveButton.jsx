import React, { useState, useEffect, Component } from "react";

const RemoveBTC = (props) => {
    const { stopLiveTradesBtcHandler } = props;

    return (
        <>
            <button
                class="deletestock"
                className="border border-dark btn btn-danger btn-md mt-1 m-2"
                type="button"
                onClick={stopLiveTradesBtcHandler}
            >
                Remove BTC
            </button>
        </>
    );
};
const RemoveETH = (props) => {
    const { stopLiveTradesEthHandler } = props;

    return (
        <>
            <button
                class="deletestock"
                className="border border-dark btn btn-danger btn-md mt-1 m-2"
                type="button"
                onClick={stopLiveTradesEthHandler}
            >
                Remove ETH
            </button>
        </>
    );
};

export default RemoveBTC;
export { RemoveETH };
