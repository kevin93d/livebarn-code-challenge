import React from 'react';
import PropTypes from 'prop-types';

const Surfaces = ({ surfaces }) => {
  console.log(surfaces);
  return <div>Surfaces</div>;
};

Surfaces.propTypes = {
  surfaces: PropTypes.array.isRequired,
};

export default Surfaces;
