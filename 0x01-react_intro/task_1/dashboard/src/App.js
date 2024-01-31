import React from "react";
import logo from "./holberton_logo.jpg";
import "./App.css";
import { getFullYear, getFooterCopy } from "./utils";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} alt="Holberton logo" />
				<h1>School dashboard</h1>
			</header>
			<body className="App-body">
        <p>Login to access the full dashboard</p>
        <div className="Login">
				  <label htmlFor="email">Email:</label>
				  <input type="email" id="email" name="email" />
          <label htmlFor="password">Password:</label>
				  <input type="password" id="password" name="password" />
				  <button>OK</button>
        </div>
			</body>
			<footer className="App-footer">
				<p>
					Copyright {getFullYear()} - {getFooterCopy(true)}
				</p>
			</footer>
		</div>
	);
}

export default App;
