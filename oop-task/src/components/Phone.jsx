import React from 'react';
import PropTypes from 'prop-types';

import Card from './Card';

function Phone({ image, manufacturer, model, phoneFeatures, price }) {
  if (manufacturer === 'Samsung') {

    return (
      <Card
        image={image}
        manufacturer={manufacturer}
        price={price}
        name={`${manufacturer} Galaxy
        ${model} ${phoneFeatures.type === 'edge' && 'edge'}
        ${phoneFeatures.size}GB Phone (${phoneFeatures.color})`}
      />
    );
  }
  if (manufacturer === 'Apple') {

    return (
      <Card
        image={image}
        manufacturer={manufacturer}
        price={price}
        name={`${manufacturer} iPhone ${model} ${phoneFeatures.size}GB Phone (${phoneFeatures.color})`}
      />
    );
  }
}
Phone.proptypes={
  image: PropTypes.string.isRequired,
  phoneFeatures: PropTypes.object.isRequired,
  model: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  manufacturer: PropTypes.string.isRequired,
}
export default Phone;
