import React, { useState } from "react";
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

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
			enableSubmit: false,
		}
	}
	handleLoginSubmit = (event) => {
		this.props.logIn(this.state.email, this.state.password);
	}
	handleChangeEmail = (event) => {
		this.setState({ email: event.target.value });
		this.checkFormValidity(event.target.value, this.state.password);
	}
	handleChangePassword = (event) => {
		this.setState({ password: event.target.value })
		this.checkFormValidity(this.state.email, event.target.value);
	}
	checkFormValidity = (email, password) => {
		if (email.trim() !== "" && password.trim() !== "") {
			this.setState({ enableSubmit: true });
		} else {
			this.setState({ enableSubmit: false });
		}
	}
	render() {
		const { email, password, enableSubmit } = this.state;
		return (
			<>
				<p>Login to access the full dashboard</p>
				<form className={css(styles.login)} onSubmit={this.handleLoginSubmit}>
					<div className={css(styles.div)}>
						<label htmlFor="email">Email:</label>
						<input type="email" id="email" name="email" value={email} onChange={this.handleChangeEmail} />
					</div>
					<div className={css(styles.div)}>
						<label htmlFor="password">Password:</label>
						<input type="password" id="password" name="password" value={password} onChange={this.handleChangePassword} />
					</div>
					<input type="submit" className={css(styles.button)} value="OK" disabled={!enableSubmit} />
				</form>
			</>
		);
	}
	
}

export default Login;
