import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppContainer, Page } from "../Styles/Container.style";
import { SubmitButton } from "../Styles/Button.style";

function LoginForm() {
	const [userName, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");

	const [loginStatus, setLoginStatus] = useState("");

	const Login = () => {
		let account = {
			username: userName,
			password: password,
			email: email,
		};
		// e.preventDefault();
		axios
			.post("http://localhost:3001/Login", account)
			.then((res) => {
				if (res.data.message) {
					setLoginStatus(res.data.message);
				} else {
					setLoginStatus(res.data[0].username);
					navigate("/Main");
				}
			})
			.catch((err) => console.log(err));
	};

	let navigate = useNavigate();

	return (
		<>
			<Page className="form-inner">
				{/* <form className="row"> */}
				<div>
					<h2 align="center">Login</h2>
					<div>
						<label>Username: </label>
						<input
							type="text"
							name="name"
							id="name"
							onChange={(e) => {
								setUsername(e.target.value);
							}}
						/>
					</div>
					<div>
						<label>Email: </label>
						<input
							type="email"
							name="email"
							id="email"
							onChange={(e) => {
								setEmail(e.target.value);
							}}
						/>
					</div>
					<div>
						<label>Password: </label>
						<input
							type="password"
							name="password"
							id="password"
							onChange={(e) => {
								setPassword(e.target.value);
							}}
						/>
					</div>
					<SubmitButton type="submit" value="LOGIN" onClick={Login}>
						LOGIN
					</SubmitButton>
					{/*  */}
					<SubmitButton
						type="submit"
						onClick={() => {
							navigate("/Registration");
						}}
						value="REGISTER"
					>
						Registration
					</SubmitButton>
					<p>{loginStatus}</p>
				</div>
				{/* </form> */}
			</Page>
		</>
	);
}

export default LoginForm;
