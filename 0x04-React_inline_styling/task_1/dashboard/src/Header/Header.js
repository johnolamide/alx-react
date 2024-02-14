import React from "react";
import { StyleSheet, css } from "aphrodite";
import logo from "../assets/holberton-logo.jpg";

const styles = StyleSheet.create({
  root: {
	'--color-primary': '#D73953',
  },
  appHeader: {
	display: 'flex',
	position: 'sticky',
	top: '0',
	width: '100%',
	borderBottom: '0.2rem solid var(--color-primary)',
	color: 'var(--color-primary)',
	alignItems: 'center',
  },
  appHeaderImg: {
	height: '200px',
	width: '200px',
  },
});

function Header() {
	return (
		<header className={css(styles.appHeader)}>
			<img src={logo} alt="Holberton logo" className={css(styles.appHeaderImg)} />
			<h1>School dashboard</h1>
		</header>
	);
}

export default Header;
