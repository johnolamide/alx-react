import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';

describe('<App />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('contains the Notification component', () => {
    expect(wrapper.containsMatchingElement(<Notifications />)).toBe(true);
  });

  it("contains the Header component", () => {
		expect(wrapper.containsMatchingElement(<Header />)).toBe(true);
  });

  it("contains the Login component", () => {
		expect(wrapper.containsMatchingElement(<Login />)).toBe(true);
  });

  it("contains the Footer component", () => {
		expect(wrapper.containsMatchingElement(<Footer />)).toBe(true);
  });

  it('CourseList is not displayed when isLoggedIn is false', () => {
    expect(wrapper.find(Courselist).exists()).toBe(false);
  });

  describe("when isLoggedIn is true", () => {
		beforeEach(() => {
			wrapper.setProps({ isLoggedIn: true });
		});

		it("Login component is not included", () => {
			expect(wrapper.find(Login).exists()).toBe(false);
		});

		it("CourseList component is included", () => {
			expect(wrapper.find(CourseList).exists()).toBe(true);
		});
  });
});