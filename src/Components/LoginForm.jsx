import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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

	// 	if (detail.email === user.email && detail.password === user.password) {
	// 		onSetShowLoginHandler(false);
	// 		onSetShowTradesHandler(true);
	// 	} else {
	// 		alert(
	// 			"You have entered incorrect login information, hint: admin@admin.com - admin1234"
	// 		);
	// 	}

	let navigate = useNavigate();

	return (
		<>
			{/* <form className="row"> */}
			<div className="form-inner">
				<h2>Login</h2>
				<div className="form-group">
					<label htmlFor="name">Username: </label>
					<input
						type="text"
						name="name"
						id="name"
						onChange={(e) => {
							setUsername(e.target.value);
						}}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="email">Email: </label>
					<input
						type="email"
						name="email"
						id="email"
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="password">Password: </label>
					<input
						type="password"
						name="password"
						id="password"
						onChange={(e) => {
							setPassword(e.target.value);
						}}
					/>
				</div>
				<button type="submit" value="LOGIN" onClick={Login}>
					LOGIN
				</button>
				<input
					className="mx-3"
					type="submit"
					onClick={() => {
						navigate("/Registration");
					}}
					value="REGISTER"
				/>
				<p>{loginStatus}</p>
			</div>
			{/* </form> */}
		</>
	);
}

export default LoginForm;
