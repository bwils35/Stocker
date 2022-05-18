import React, { useState } from "react";
import axios from "axios";

const Registration = () => {
	const [userName, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");

	const Register = () => {
		let account = { username: userName, password: password, email: email };
		axios
			.post("http://localhost:3001/Registration", account)
			.then((res) => console.log(res))
			.catch((err) => console.error(err));
	};

	return (
		<>
			<form>
				<div className="form-inner">
					<h1>Registration</h1>
					<label>Username</label>
					<input
						type="text"
						onChange={(e) => {
							setUsername(e.target.value);
						}}
					/>
					<label>Password</label>
					<input
						type="text"
						onChange={(e) => {
							setPassword(e.target.value);
						}}
					/>
					<label>Email</label>
					<input
						type="text"
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					/>
					<button onClick={Register}>Register</button>
				</div>
			</form>
		</>
	);
};

export default Registration;
