import React from "react";
import ProTypes from "prop-types";
import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import Notifications from "../Notifications/Notifications"

const App = ({ isLoggedIn = false }) => {
	return (
		<>
			<Notifications />
			<div className="App">
				<Header />
				<div className="App-body">
					{isLoggedIn
						? <CourseList />
						: <Login />
					}
				</div>
				<Footer />
			</div>
		</>
	);
}

export default App;
