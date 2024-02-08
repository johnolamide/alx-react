import React from "react";
import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import Notifications from "../Notifications/Notifications";
import { getLatestNotification } from "../utils/utils";

class App extends React.Component {
  constructor(props) {
	super(props);
	this.isLoggedIn = props.isLoggedIn || false;
	this.listCourses = [
	  {id: 1, name: 'ES6', credit: 60},
	  {id: 2, name: 'Webpack', credit: 20},
	  {id: 3, name: 'React', credit: 40},
	];
	this.listNotifications = [
	  {id: 1, type: "default", value: "New course available"},
	  {id: 2, type: "urgent", value: "New resume available"},
	  {id: 3, type: "urgent", html: { __html: getLatestNotification() }},
	];
  }

  render() {
	return (
		<>
			<Notifications listNotifications={this.listNotifications} />
			<div className="App">
				<Header />
				<div className="App-body">
					{this.isLoggedIn ? (
						<CourseList listCourses={this.listCourses} />
					) : (
						<Login />
					)}
				</div>
				<Footer />
			</div>
		</>
	);
  }
}

export default App;
