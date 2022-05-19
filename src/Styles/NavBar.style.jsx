import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
	width: 100%;
	height: ${(props) => (props.extendNav ? "100%" : "80px")};
	display: flex;
	flex-direction: column;
	/* margin: 15px; */
	margin-bottom: 10px;
	padding: 0.5rem 0rem;
	border: 0;
	border-radius: 50px 50px 50px 50px;
	/* position: absolute;
	left: 375px; */
	background: linear-gradient(336deg, #ffce00, rgba(187, 60, 198, 0) 70.71%),
		linear-gradient(127deg, #a823c69f, rgba(0, 255, 0, 0) 70.71%),
		linear-gradient(217deg, #a823c69f, rgba(255, 0, 0, 0) 70.71%);
	box-shadow: 0 4px 2px 2px rgba(9, 9, 9, 0.23);
	justify-content: center;
`;

export const LeftContainer = styled.div`
	flex: 70%;
	display: flex;
	align-items: center;
	padding-left: 5%;
`;
export const RightContainer = styled.div`
	flex: 30%;
	display: flex;
	justify-content: flex-end;
	/* padding-right: 50px; */
`;

export const NavbarInnerContainer = styled.div`
	width: 100%;
	height: 80px;
	display: flex;
`;

export const NavbarLinkContainer = styled.div`
	display: flex;
`;

export const NavbarLink = styled(Link)`
	color: white;
	font-size: x-large;
	margin: 10px;
	text-decoration: none;

	@media (max-width: 700px) {
		display: none;
	}
`;
export const NavbarLinkExtended = styled(Link)`
	color: white;
	font-size: x-large;
	margin: 10px;
	text-decoration: none;
`;

export const Logo = styled.img`
	margin: 10px;
	max-width: 150px;
	height: 60px;
`;
export const StockerHeader = styled.header`
	/* margin: 10px; */
	/* max-width: 180px; */
	height: auto;
	width: auto;
	text-align: center;
	display: inline-flex;
`;

export const HamburgerButton = styled.button`
	width: 70px;
	height: 50px;
	background: none;
	border: none;
	color: white;
	font-size: 45px;
	cursor: pointer;
	justify-content: center;
	align-items: top;

	@media (min-width: 700px) {
		display: none;
	}
`;

export const NavbarExtendedContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	@media (min-width: 700px) {
		display: none;
	}
`;
