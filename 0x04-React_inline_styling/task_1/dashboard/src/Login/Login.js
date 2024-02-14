import React from "react";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  login: {
	display: 'flex',
	justifyContent: 'space-between',
	maxWidth: '50rem',
	flexWrap: 'wrap',
  },
});

function Login() {
	return (
		<>
			<p>Login to access the full dashboard</p>
			<div className={css(styles.login)}>
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
