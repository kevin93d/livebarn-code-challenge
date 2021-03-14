import React from 'react';
import PropTypes from 'prop-types';
import DataTable from '../table';

const columns = [
  { key: 'ip4', label: 'Ip4' },
  { key: 'dns', label: 'Dns' },
];

const Servers = ({ servers }) => {
  return <DataTable columns={columns} rows={servers} tableName={'servers'} />;
};

Servers.propTypes = {
  servers: PropTypes.array.isRequired,
};

export default Servers;
