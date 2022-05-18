import React from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";

//Returns you to Main page from the stock page. Changes the values of SetShow
const Logout = () => {
	let navigate = useNavigate();
	return (
		<>
			<div className="row">
				<div className="col-6" />
				<div className="col-6 mt-3">
					<button
						className="btn btn-danger btn-outline-dark btn-md"
						type="submit"
						class="LogOut"
						onClick={() => {
							navigate("/");
						}}
					>
						Logout
					</button>
					<div className="col-6" />
				</div>
			</div>
		</>
	);
};

export default Logout;
