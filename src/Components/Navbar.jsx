import React, { useState } from "react";
import {
	NavbarContainer,
	LeftContainer,
	RightContainer,
	NavbarInnerContainer,
	NavbarExtendedContainer,
	NavbarLinkContainer,
	NavbarLink,
	Logo,
	HamburgerButton,
	StockerHeader,
	NavbarLinkExtended,
} from "../Styles/NavBar.style";
import StockerLogo from "../Img/StockerLogo.png";

function Navbar() {
	const [extendNav, setExtendNav] = useState(true);

	return (
		<NavbarContainer extendNav={extendNav}>
			<NavbarInnerContainer>
				<LeftContainer>
					<NavbarLinkContainer>
						<NavbarLink to="/">Home</NavbarLink>
						<NavbarLink to="/About">About</NavbarLink>
						<NavbarLink to="/Contact">Contact</NavbarLink>
						<HamburgerButton
							onClick={() => {
								setExtendNav((curr) => !curr);
							}}
						>
							{extendNav ? <>&#x2715;</> : <>&#x2261;</>}
						</HamburgerButton>
					</NavbarLinkContainer>
				</LeftContainer>
				<RightContainer>
					<Logo src={StockerLogo}></Logo>
				</RightContainer>
			</NavbarInnerContainer>
			{extendNav && (
				<NavbarExtendedContainer>
					<NavbarLinkExtended to="/">Home</NavbarLinkExtended>
					<NavbarLinkExtended to="/About">About</NavbarLinkExtended>
					<NavbarLinkExtended to="/Contact">
						Contact
					</NavbarLinkExtended>
				</NavbarExtendedContainer>
			)}
		</NavbarContainer>
	);
}

export default Navbar;
