import React, { useState, useEffect } from "react";
import bitcoinLogo from "../Img/Bitcoin_logo2.png";
import ethereumLogo from "../Img/ethereum_logo.png";
import useWebSocket, { ReadyState } from "react-use-websocket";
import { assertIsWebSocket } from "react-use-websocket/dist/lib/util";
import { CoinCardContainer } from "../Styles/Container.style";

const BTCCard = (props) => {
	const { btcItem } = props;

	return (
		<>
			{/* <StyledBTCCard> */}
			<CoinCardContainer class="BTCCard">
				{/* <div className="card border border-dark mt-2"> */}
				{/* <div> */}
				<h4>
					<img
						src={bitcoinLogo}
						alt="Bitcoin Logo"
						className="btcLogo"
					/>
					{/* <h6 className="card-body">Most Recent BTC Trade</h6> */}
				</h4>
				<p className="card-text">${btcItem}</p>
				{/* </div> */}
				{/* </div> */}
			</CoinCardContainer>
			{/* </StyledBTCCard> */}
		</>
	);
};

const ETHCard = (props) => {
	const { ethItem } = props;
	return (
		<>
			<CoinCardContainer class="ETHCard">
				<h4>
					<img
						src={ethereumLogo}
						alt="Ethereum Logo"
						class="ethLogo"
					/>
					{"Ethereum "}
				</h4>
				{/* <h6 className="card-body">Most Recent ETH Trade</h6> */}
				<p className="card-text">${ethItem}</p>{" "}
			</CoinCardContainer>
		</>
	);
};

export default BTCCard;
export { ETHCard };
