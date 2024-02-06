import React from "react";
import PropTypes from "prop-types";
import "./Notifications.css";
import closeIcon from "../assets/close-icon.png";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";

const Notifications = ({ displayDrawer = false }) => {
	return (
		<>
			<div className="menuItem">Your notifications</div>
			{displayDrawer && (
				<div className="Notifications">
					<button
						style={{ position: "absolute", right: "0px", top: "0px", }}
						aria-label="Close"
						onClick={() => console.log("Close button has been clicked")}
					>
						<img src={closeIcon} alt="close-icon" />
					</button>
					<p>Here is the list of notifications</p>
					<ul>
						<NotificationItem	type="default" value="New course available"/>
						<NotificationItem	type="urgent"	value="New resume available"/>
						<NotificationItem type="urgent"	html={{ __html: getLatestNotification() }}/>
					</ul>
				</div>
			)}
		</>
	);
};

Notifications.propTypes = {
	displayDrawer: PropTypes.bool,
};

export default Notifications;
