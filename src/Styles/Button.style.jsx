import styled from "styled-components";

export const SubmitButton = styled.button`
	display: inline-block;
	/* flex-direction: row; */
	/* justify-content: center;
	align-items: right; */
	/* position: relative;
	left: 25px; */
	padding: 10px 15px;
	border-radius: 8px;
	background-image: linear-gradient(
		to right,
		#ffce00 50%,
		#ffce00 50%,
		#fe4880
	);
	background-position: 0%;
	background-size: 200%;
	transition: 0.4s;
	color: #fff;
	font-weight: 700;
	cursor: pointer;
	&:hover {
		background-position: 100% 0%;
	}
	margin-left: 10px;
	margin-top: 10px;
`;

export const CoinButton = styled.button`
	border: 1px solid #000;
	/* background-color: #183de4; */
	/* color: #fff; */
	border: none;
	border-radius: 10px;
	box-shadow: 0px 0px 2px 2px rgb(0, 0, 0);
	/* display: inline-flex;
	position: relative; */
	/* right: 195px; */
	/* top: 0px; */
`;

export const LogoutButton = styled.button`
	color: white;
	background-color: Red;
	/* position: relative;
	bottom: 900px;
	left: 600px; */
	min-width: 300px;
	border: 1px solid #f9f2f2;
	border-radius: 10px;
	text-align: center;
	line-height: 20px;
	min-height: 50px;
	border: 1px solid #000;
	/* display: inline-block; */
`;
