import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import NotificationItemShape from "./NotificationItemShape";

const styles = StyleSheet.create({
	root: {
	  "--color-primary": "#D73953",
	},
	notification: {
	  border: "0.1rem dashed var(--color-primary)",
	  padding: "20px",
	  margin: "30px 10px 0 0",
	  position: "absolute",
	  right: "0px",
	  top: "0px",
	},
	menuItem: {
	  position: "absolute",
	  right: "0px",
	  top: "0px",
	  margin: "5px 10px 0 0",
	},
	img: {
	  width: '20px',
	  height: '20px'
	},
	button: {
	  margin: '10px'
	},
});

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
			<div className={css(styles.menuItem)}>Your notifications</div>
			{this.displayDrawer && (
				<div className={css(styles.notification)}>
					<button
						className={css(styles.button)}
						style={{ position: "absolute", right: "0px", top: "0px", }}
						aria-label="Close"
						onClick={() => console.log("Close button has been clicked")}
					>
						<img className={css(styles.img)} src={closeIcon} alt="close-icon" />
					</button>
					<p>Here is the list of notifications</p>
					<ul>
						{this.listNotifications.length === 0
							? <NotificationItem type="default" value="No new notification for now" />
							: this.listNotifications.map((notification) => (
								<NotificationItem key={notification.id} type={notification.type}
									value={notification.value} html={notification.html}
									markAsRead={this.markAsRead} />
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
  displayDrawer: true,
  listNotifications: [],
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

export default Notifications;
