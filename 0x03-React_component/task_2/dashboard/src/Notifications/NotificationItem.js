import React from "react";
import PropTypes from "prop-types";

// const NotificationItem = ({ id, type, html, value, markAsRead }) => {
  // let li;

  // value
  //   ? (li = <li data-notification-type={type} onClick={() => markAsRead(id)}>{value}</li>)
  //   : (li = (
  //     <li data-notification-type={type} dangerouslySetInnerHTML={html} onClick={() => markAsRead(id)}></li>
  //   ));
  // return li;
// }
class NotificationItem extends React.Component {
  render() {
    const { type, html, value, markAsRead, id } = this.props;
    let li;

    value
      ? (li = <li data-notification-type={type} onClick={() => markAsRead(id)}>{value}</li>)
      : (li = (
        <li data-notification-type={type} dangerouslySetInnerHTML={html} onClick={() => markAsRead(id)}></li>
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