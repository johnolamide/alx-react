import React from "react";
import './Login.css';

function Login() {
	return (
		<>
			<div className="Login">
				<label htmlFor="email">Email:</label>
				<input type="email" id="email" name="email" />
				<label htmlFor="password">Password:</label>
				<input type="password" id="password" name="password" />
				<button>OK</button>
			</div>
		</>
	);
}

export default Login;
