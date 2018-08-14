import React from 'react';
import { shallow } from 'enzyme';
import Television from './Television';

const props = {
  price: "300",
  manufacturer: "Sample Manufacturer",
  image: "Sample Image Source",
  model: "Sample Model",
  tvFeatures: {
    size: "30"
  }
}

it('renders television component', () => {
  const wrapper = shallow(<Television
    {...props}
  />);
})
