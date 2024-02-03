import React from "react";
import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Notifications from "../Notifications/Notifications"

function App() {
	return (
		<>
			<Notifications />
			<div className="App">
				<Header />
				<body className="App-body">
            		<p>Login to access the full dashboard</p>
            		<Login />
				</body>
				<Footer />
			</div>
		</>
	);
}

export default App;
