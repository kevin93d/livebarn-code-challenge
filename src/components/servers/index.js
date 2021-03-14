import React from 'react';
import PropTypes from 'prop-types';

const Servers = ({ servers }) => {
  console.log(servers);
  return <div>Servers</div>;
};

Servers.propTypes = {
  servers: PropTypes.array.isRequired,
};

export default Servers;
