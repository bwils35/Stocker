import React from "react";
import bitcoinLogo from "./Bitcoin_logo2.png";
import ethereumLogo from "./ethereum_logo.png";

const Stock = (props) => {
    const { onDeleteBTCHandler, keyToManage, btcItem, ethItem } = props;
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
                                <button
                                    className="deletestock"
                                    class="border border-danger"
                                    type="button"
                                    onclick={() =>
                                        onDeleteBTCHandler(keyToManage)
                                    }
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const ETHCard = (props) => {
    const { onDeleteETHHandler, keyToManage, ethItem } = props;
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
                                <button
                                    className="deletestock"
                                    class="border border-danger"
                                    type="button"
                                    onClick={() =>
                                        onDeleteETHHandler(keyToManage)
                                    }
                                >
                                    Remove
                                </button>
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
