import React from "react";
import "./Notifications.css";
import closeIcon from "../assets/close-icon.png";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";

export default function Notifications() {
  return (
    <div className='Notifications'>
      <button style={{ position: 'absolute', right: '0px', top: '0px' }}
      aria-label='Close' onClick={() => console.log('Close button has been clicked')}>
        <img src={closeIcon} alt="close-icon" />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <NotificationItem type="default" value='New course available'/>
        <NotificationItem type="urgent" value="New resume available" />
        <NotificationItem type="urgent" html={{ __html: getLatestNotification() }}/>
      </ul>
    </div>
  );
}