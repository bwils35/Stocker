import React, { useState, useEffect } from "react";
import bitcoinLogo from "../Img/Bitcoin_logo2.png";
import ethereumLogo from "../Img/ethereum_logo.png";
import useWebSocket, { ReadyState } from "react-use-websocket";
import { assertIsWebSocket } from "react-use-websocket/dist/lib/util";

const BTCCard = (props) => {
	const { btcItem } = props;

	return (
		<>
			<div class="BTCCard">
				<div className="card border border-dark mt-2">
					<div className="card-body pb-1">
						<h4 className="card-header color-">
							<img
								src={bitcoinLogo}
								alt="Bitcoin Logo"
								className="btcLogo"
							/>
						</h4>
						<h6 className="card-body">Most Recent BTC Trade</h6>
						<p className="card-text">${btcItem}</p>
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
			<div class="ETHCard">
				<div className="card border border-dark mt-2">
					<div className="card-body pb-1">
						<h4 className="card-header color-">
							<img
								src={ethereumLogo}
								alt="Ethereum Logo"
								className="ethLogo"
							/>
							Ethereum{" "}
						</h4>
						<h6 className="card-body">Most Recent ETH Trade</h6>
						<p className="card-text">${ethItem}</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default BTCCard;
export { ETHCard };
