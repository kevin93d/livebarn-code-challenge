import React from 'react';
import PropTypes from 'prop-types';
import DataTable from '../table';

const columns = [
  { key: 'ip4', label: 'Ip4' },
  { key: 'dns', label: 'Dns' },
];

const Servers = ({ servers, selectedSurface }) => {
  return (
    <DataTable
      columns={columns}
      rows={servers}
      tableName={'servers'}
      selected={selectedSurface?.server}
    />
  );
};

Servers.propTypes = {
  servers: PropTypes.array.isRequired,
  selectedSurface: PropTypes.object,
};

export default Servers;
