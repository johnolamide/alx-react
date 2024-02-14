import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import Notifications from "../Notifications/Notifications"
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import BodySection from "../BodySection/BodySection";
import { getLatestNotification } from "../utils/utils";

const styles = StyleSheet.create({
  root: {
	'--color-primary': '#D73953',
  },
  body: {
	marginTop: '20px',
	marginLeft: '20px',
  },
  footer: {
	position: 'fixed',
	bottom: '0',
	width: '100%',
	borderTop: '0.2rem solid var(--color-primary)',
	textAlign: 'center',
	fontStyle: 'italic',
  },
});

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

  componentDidMount() {
	document.addEventListener("keydown", this.handleLogout);
  }

  componentWillUnmount() {
	document.removeEventListener("keydown", this.handleLogout);
  }

  handleLogout = (event) => {
	if (event.ctrlKey && event.key === "h") {
	  alert("Logging you out");
	  this.props.logOut();
	}
  }

  render() {
	return (
		<>
			<Notifications listNotifications={this.listNotifications} />
			<div className={css(styles.body)}>
				<Header />
				<div className="App-body">
					{this.isLoggedIn ? (
						<BodySectionWithMarginBottom title="Course list">
							<CourseList listCourses={this.listCourses} />
						</BodySectionWithMarginBottom>
					) : (
						<BodySectionWithMarginBottom title="Log in to continue">
							<Login />
						</BodySectionWithMarginBottom>
					)}
					<BodySection title="News from the school">
						<p>Hello Holberton</p>
					</BodySection>
				</div>
				<Footer />
			</div>
		</>
	);
  }
}

App.defaultProps = {
  isLoggedIn: true,
  logOut: () => {},
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

export default App;
