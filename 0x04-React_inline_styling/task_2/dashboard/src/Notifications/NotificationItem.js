import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
	default: {
		color: "blue",
	},
	urgent: {
		color: "red",
	},
});

class NotificationItem extends React.PureComponent {
  render() {
    const { type, html, value, markAsRead, id } = this.props;
    let li;
    let style;
    type === "urgent" ? style = styles.urgent : style = styles.default
    value
      ? (li = <li className={css(style)} data-notification-type={type} onClick={() => markAsRead(id)}>{value}</li>)
      : (li = (
        <li className={css(style)} data-notification-type={type} dangerouslySetInnerHTML={html} onClick={() => markAsRead(id)}></li>
      ));
    return li;
  }
}

NotificationItem.defaultProps = {
  id: 0,
  type: 'default',
  value: '',
  html: {},
  markAsRead: () => { },
};

NotificationItem.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string,
  html: PropTypes.shape({ __html: PropTypes.string }),
  value: PropTypes.string,
  markAsRead: PropTypes.func,
};

export default NotificationItem;