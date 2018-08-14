import React from 'react';
import PropTypes from 'prop-types';

function Card({ image, name, manufacturer, price }) {
  return (

    <div className="card">
      <img
        className="card-img-top"
        src={image}
        alt=""
      />
      <div className="card-body">
        <h5 className="card-title">
          {name}
        </h5>
      <p className="card-text">
      Cost: {price} GBP
      </p>
      <p className="card-text">
      Manufacturer: {manufacturer}
      </p>
      </div>
    </div>

  );
}
Card.propTypes = {
  image: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  manufacturer: PropTypes.string.isRequired
}
export default Card;
