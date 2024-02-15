import React from "react";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  login: {
	display: 'flex',
	flexDirection: 'column',
	gap: '10px',
	maxWidth: '50rem',
	flexWrap: 'wrap',
  },
  div: {
	display: 'inline-flex',
	gap: '10px',
  },
  button: {
	width: '40px',
  }
});

function Login() {
	return (
		<>
			<p>Login to access the full dashboard</p>
			<div className={css(styles.login)}>
				<div className={css(styles.div)}>
					<label htmlFor="email">Email:</label>
					<input type="email" id="email" name="email" />
				</div>
				<div className={css(styles.div)}>
					<label htmlFor="password">Password:</label>
					<input type="password" id="password" name="password" />
				</div>
				<button className={css(styles.button)}>OK</button>
			</div>
		</>
	);
}

export default Login;
