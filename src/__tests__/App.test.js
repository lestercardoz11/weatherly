import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import Main from '../components/main';

describe('App component', () => {
  it('should have main component', () => {
    const wrapper = shallow(<App />);
    const main = wrapper.containsMatchingElement(<Main />);
    expect(main).toEqual(true);
  });
});
