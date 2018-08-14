import React from 'react';
import PropTypes from 'prop-types';

import Card from './Card';

function Television({image, manufacturer, model, tvFeatures, price}){
  return (
    <Card
      image={image}
      manufacturer={manufacturer}
      price={price}
      name={`${manufacturer} ${model} ${tvFeatures.size} inches Television`}
    />
  );
}
Television.proptypes={
  image: PropTypes.string.isRequired,
  tvFeatures: PropTypes.object.isRequired,
  model: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  manufacturer: PropTypes.string.isRequired,
}
export default Television;
