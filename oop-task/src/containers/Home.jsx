import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './style.css';

import { Phone, Television } from '../components';


class Home extends React.Component {
  static propTypes = {
    electronics: PropTypes.array
  }
  render() {
    return (
      <main>
        <div className="jumbotron text-center">
          <div className="container">
            <div className="jumbotron-heading">
              List of Electronics
          </div>
          </div>
        </div>
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="grid-container">
              {this.props.electronics &&
                this.props.electronics.map((electronic) => (
                  <React.Fragment
                    key={electronic.id}
                  >
                    {electronic.type === 'television' && <Television
                      price={electronic.price}
                      manufacturer={electronic.manufacturer}
                      image={electronic.image}
                      model={electronic.model}
                      tvFeatures={electronic.tvFeatures}
                    />}
                    {electronic.type === 'phone' && <Phone
                      price={electronic.price}
                      manufacturer={electronic.manufacturer}
                      image={electronic.image}
                      model={electronic.model}
                      phoneFeatures={electronic.phoneFeatures}
                    />}
                  </React.Fragment>
                ))}
            </div>
          </div>
        </div>
      </main>)
  }
}
function mapStateToProps(state) {
  return { electronics: state.indexPageReducer.electronics }
}
export default connect(mapStateToProps, null)(Home);
