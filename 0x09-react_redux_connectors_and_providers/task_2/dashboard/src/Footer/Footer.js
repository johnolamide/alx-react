import React from "react";
import { connect } from 'react-redux';
import { getFullYear, getFooterCopy } from "../utils/utils";
import "./Footer.css";
import AppContext from "../App/AppContext"

const mapStateToProps = state => {
	return {
		user: state.uiReducer.user
	}
}

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

export default connect(mapStateToProps) (Footer);
