import React from 'react';
import { shallow } from 'enzyme';
import Phone from './Phone';

const props = {
  price: "300",
  manufacturer: "Apple",
  image: "Sample Image Source",
  model: "Sample Model",
  phoneFeatures: {
    size: "30",
    color: "Blue"
  }
}

it('renders phone component', () => {
  const wrapper = shallow(<Phone
    {...props}
  />);
})
