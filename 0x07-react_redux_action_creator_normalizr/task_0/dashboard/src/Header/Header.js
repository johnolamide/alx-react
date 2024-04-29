import React from "react";
import { StyleSheet, css } from "aphrodite";
import AppContext from "../App/AppContext";
import logo from "../assets/holberton-logo.jpg";

const styles = StyleSheet.create({
	appHeader: {
		display: "flex",
		position: "sticky",
		top: "0",
		width: "100%",
		borderBottom: "0.2rem solid #D73953",
		color: "#D73953",
		alignItems: "center",
	},
	appHeaderImg: {
		height: "200px",
		width: "200px",
	},
});

class Header extends React.Component{
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<AppContext.Consumer>
				{({ user, logOut }) => (
					<>
						<header className={css(styles.appHeader)}>
							<img
								src={logo}
								alt="Holberton logo"
								className={css(styles.appHeaderImg)}
							/>
							<h1>School dashboard</h1>
						</header>
						{user.isLoggedIn && (
							<div id="logoutSection">
								<p>Welcome {user.email} (<span onClick={logOut} style={{cursor: "pointer"}}>logout</span>)</p>
							</div>
						)}
					</>
				)}
			</AppContext.Consumer>
		);
	}
}

export default Header;
