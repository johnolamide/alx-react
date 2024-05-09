import React from "react";
import { connect } from 'react-redux';
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
import AppContext from "./AppContext";
import { uiReducer, loginRequest } from '../reducers/uiReducer';
import { displayNotificationDrawer, hideNotificationDrawer, loginRequest } from '../actions/uiActionCreators';

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

const listCourses = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];

const mapDispatchToProps = {
	displayNotificationDrawer,
	hideNotificationDrawer,
	login: loginRequest
};

const mapStateToProps = state => {
	return {
		isLoggedIn: state.uiReducer.isLoggedIn,
		displayDrawer: state.uiReducer.isNotificationDrawerVisible
	};
};

class App extends React.Component {
  constructor(props) {
	super(props);
	this.state = {
	  displayDrawer: false,
	  user: {
		email: '',
		password: '',
		isLoggedIn: false,
	  },
	  logOut: this.logOut,
	  listNotifications: [
		{ id: 1, type: "default", value: "New course available" },
		{ id: 2, type: "urgent", value: "New resume available" },
		{ id: 3, type: "urgent", html: { __html: getLatestNotification()}},
	  ],
	};
  }

  markNotificationAsRead = (id) => {
	  this.setState({
	    listNotifications: this.state.listNotifications.filter((notification) => notification.id !== id),
	  });
	}
		
  logOut = () => {
	this.setState({
	  user: {
		email: '',
		password: '',
		isLoggedIn: false,
	  },
	});
  };
  
  logIn = (email, password) => {
	this.setState({
	  user: {
		email: email,
		password: password,
		isLoggedIn: true,
	  },
	})
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
	  this.logOut();
	}
  }

  render() {
		const { user, listNotifications, displayNotificationDrawer, hideNotificationDrawer } = this.props;
	return (
		<AppContext.Provider value={this.state}>
			<>
				<Notifications
					listNotifications={listNotifications}
					displayDrawer={displayDrawer}
					handleDisplayDrawer={displayNotificationDrawer}
					handleHideDrawer={hideNotificationDrawer}
					markNotificationAsRead={this.markNotificationAsRead}
				/>
				<div className={css(styles.body)}>
					<Header />
					<div className={css(styles.appBody)}>
						{user.isLoggedIn ? (
							<BodySectionWithMarginBottom title="Course list">
								<CourseList listCourses={listCourses} />
							</BodySectionWithMarginBottom>
						) : (
							<BodySectionWithMarginBottom title="Log in to continue">
								<Login logIn={this.props.logIn} />
							</BodySectionWithMarginBottom>
						)}
						<BodySection title="News from the school">
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Sed malesuada faucibus ex nec
								ultricies. Donec mattis egestas nisi non
								pretium. Suspendisse nec eros ut erat facilisis
								maximus. In congue et leo in varius. Vestibulum
								sit amet felis ornare, commodo orci ut, feugiat
								lorem.
							</p>
						</BodySection>
					</div>
					<Footer />
				</div>
			</>
		</AppContext.Provider>
	);
  }
}

App.propTypes = {
	isLoggedIn: PropTypes.bool,
	displayDrawer: PropTypes.bool,
	displayNotificationDrawer: PropTypes.func,
	hideNotificationDrawer: PropTypes.func,
	login: PropTypes.func.isRequired,
};

App.defaultProps = {
	isLoggedIn: false,
	displayDrawer: false,
	displayNotificationDrawer: () => {},
	hideNotificationDrawer: () => { },
	login: () => {},
};


export default connect(mapStateToProps, mapDispatchToProps) (App);
