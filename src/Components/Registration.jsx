import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Page } from "../Styles/Container.style";
import { SubmitButton } from "../Styles/Button.style";

const Registration = () => {
	const [userName, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");

	//set hashing function here before DB entry

	const Register = (e) => {
		let account = { username: userName, password: password, email: email };
		axios
			.post("http://localhost:3001/Registration", account)
			.then((res) => console.log(res))
			.catch((err) => console.error(err));
		navigate("/");
	};
	let navigate = useNavigate();

	return (
		<>
			<Page>
				{/* <form className="row" onSubmit={Register}> */}
				<div>
					<div>
						<h1 align="center">Registration</h1>
						<label>Username</label>
						<input
							type="text"
							onChange={(e) => {
								setUsername(e.target.value);
							}}
						/>
						<label>Password</label>
						<input
							type="password"
							onChange={(e) => {
								setPassword(e.target.value);
							}}
						/>
						<label>Email</label>
						<input
							type="email"
							onChange={(e) => {
								setEmail(e.target.value);
							}}
						/>
						<SubmitButton
							type="submit"
							onClick={Register}
							value="REGISTER"
						>
							REGISTER
						</SubmitButton>
					</div>
				</div>
				{/* </form> */}
			</Page>
		</>
	);
};

export default Registration;
