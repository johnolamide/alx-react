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
});