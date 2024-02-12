import React from "react";
import PropTypes from "prop-types";
import "./Notifications.css";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import NotificationItemShape from "./NotificationItemShape";

class Notifications extends React.Component {
  constructor(props) {
	super(props);
	this.displayDrawer = props.displayDrawer || false;
	this.listNotifications = props.listNotifications || [];
  }
	
  shouldComponentUpdate(nextProps) {
	nextProps.listNotifications.length > this.props.listNotifications.length;
  }

  markAsRead = (id) => {
	console.log(`Notification ${id} has been marked as read`);
  }

  render() {
	return (
		<>
			<div className="menuItem">Your notifications</div>
			{this.displayDrawer && (
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
						{this.listNotifications.length === 0
							? <NotificationItem type="default" value="No new notification for now" />
							: this.listNotifications.map((notification) => (
								<NotificationItem key={notification.id} type={notification.type}
									value={notification.value} html={notification.html} markAsRead={this.markAsRead} />
							))
						}
					</ul>
				</div>
			)}
		</>
	);
  }
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

export default Notifications;
