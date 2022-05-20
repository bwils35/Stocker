import React from "react";
import { useNavigate } from "react-router-dom";
import { LogoutButton } from "../Styles/Button.style";
import { Page, LogoutButtonContainer } from "../Styles/Container.style";

//Returns you to Main page from the stock page. Changes the values of SetShow
const Logout = () => {
	let navigate = useNavigate();
	return (
		<>
			<LogoutButtonContainer>
				<LogoutButton
					onClick={() => {
						navigate("/");
					}}
				>
					Logout
				</LogoutButton>
			</LogoutButtonContainer>
		</>
	);
};

export default Logout;
