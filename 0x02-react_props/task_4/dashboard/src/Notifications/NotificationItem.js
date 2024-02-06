import React from "react";
import PropTypes from "prop-types";

// function NotificationItem({type, html, value}) {
//   if (html) {
//     return (
//       <li data-notification-type={type} dangerouslySetInnerHTML={html}></li>
//     );
//   }

//   return (
//     <li data-notification-type={type}>
//       {value}
//     </li>
//   );
// };

// NotificationItem.propTypes = {
//   type: PropTypes.string.isRequired,
//   html: PropTypes.shape({__html: PropTypes.string}),
//   value: PropTypes.string,
// };

// NotificationItem.defaultProps = {
//   type: 'default',
//   html: {},
//   value: '',
// };

const NotificationItem = ({ type, html, value }) => {
  let li;

  value
    ? (li = <li data-notification-type={type}>{value}</li>)
    : (li = (
        <li data-notification-type={type} dangerouslySetInnerHTML={html}></li>
    ));
  return li;
}

NotificationItem.propTypes = {
  type: PropTypes.string,
  html: PropTypes.shape({ __html: PropTypes.string }),
  value: PropTypes.string,
}

export default NotificationItem;