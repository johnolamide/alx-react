import React from "react";
import { getFullYear, getFooterCopy } from "../utils/utils";
import "./Footer.css";
import AppContext from "../App/AppContext"

function Footer() {
	return (
		<AppContext.Consumer>
			{({ user }) => (
				<footer className="App-footer">
					<p>
						Copyright {getFullYear()} - {getFooterCopy(true)}
					</p>
					{user.isLoggedIn && (
						<p>
							<a href="#contact">Contact us</a>
						</p>
					)}
				</footer>
			)}
		</AppContext.Consumer>
	);
}

export default Footer;
