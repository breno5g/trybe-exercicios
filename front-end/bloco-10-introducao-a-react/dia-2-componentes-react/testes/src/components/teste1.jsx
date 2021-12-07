import React from 'react';
import PropTypes from 'prop-types';

function Greeting(props) {
  return <h1>Hello, {props.name} {props.lastname}</h1>
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};

export default Greeting;