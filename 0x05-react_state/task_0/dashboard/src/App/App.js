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
  body: {
	marginTop: '20px',
	marginLeft: '20px',
  },
  footer: {
	position: 'fixed',
	bottom: '0',
	width: '100%',
	borderTop: '0.2rem solid #D73953',
	textAlign: 'center',
	fontStyle: 'italic',
  },
  appBody: {
	marginLeft: '20px',
  }
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
	this.state = {
	  displayDrawer: false,
	};
	this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
	this.handleHideDrawer = this.handleHideDrawer.bind(this);
	this.handleLogout = this.handleLogout.bind(this);
  }
	
  handleDisplayDrawer = () => {
	this.setState({ displayDrawer: true }, () => console.log(`state updated to: ${this.state.displayDrawer}`));
  }

  handleHideDrawer = () => {
	this.setState({ displayDrawer: false }, () => console.log(`state updated to: ${this.state.displayDrawer}`));
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
			<Notifications listNotifications={this.listNotifications} displayDrawer={this.state.displayDrawer}
			  handleDisplayDrawer={this.handleDisplayDrawer} handleHideDrawer={this.handleHideDrawer}/>
			<div className={css(styles.body)}>
				<Header />
				<div className={css(styles.appBody)}>
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
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Sed malesuada faucibus ex nec ultricies. Donec
							mattis egestas nisi non pretium. Suspendisse nec
							eros ut erat facilisis maximus. In congue et leo in
							varius. Vestibulum sit amet felis ornare, commodo
							orci ut, feugiat lorem.
						</p>
					</BodySection>
				</div>
				<Footer />
			</div>
		</>
	);
  }
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

export default App;
