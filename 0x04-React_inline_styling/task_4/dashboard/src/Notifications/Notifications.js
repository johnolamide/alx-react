import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import NotificationItemShape from "./NotificationItemShape";

const fadeIn = {
	"0%": { opacity: 0.5 },
	"100%": { opacity: 1 },
};

const bounce = {
	"0%": { transform: "translateY(0px)" },
	"50%": { transform: "translateY(-5px)" },
	"100%": { transform: "translateY(5px)" },
};

const styles = StyleSheet.create({
	notification: {
		border: "0.1rem dashed #D73953",
		padding: "0",
		margin: "0",
		position: "absolute",
		right: "0px",
		top: "0px",
		zIndex: "2",
		height: "100%",
		width: "100%",
		background: "white",
		fontSize: '20px',
	},
	menuItem: {
		position: "absolute",
		right: "0px",
		top: "0px",
		margin: "5px 10px 0 0",
		background: '#fff8f8',
		cursor: 'pointer',
		':hover': {
			animationName: [fadeIn, bounce],
			animationDuration: ['1s', '0.5s'],
			animationIterationCount: 3,
		},
	},
	img: {
		width: "20px",
		height: "20px",
	},
	button: {
		margin: "10px",
	},
	ul: {
		padding: '0',
	}
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
					<ul className={css(styles.ul)}>
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
  displayDrawer: false,
  listNotifications: [],
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

export default Notifications;
