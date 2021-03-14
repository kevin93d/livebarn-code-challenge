import React from 'react';
import PropTypes from 'prop-types';
import DataTable from '../table';

const columns = [
  { key: 'venueName', label: 'Venue Name' },
  { key: 'surfaceName', label: 'Surface Name' },
  { key: 'sport', label: 'Sport' },
  { key: 'status', label: 'Status' },
];

const Surfaces = ({ surfaces }) => {
  return <DataTable columns={columns} rows={surfaces} tableName={'surfaces'} />;
};

Surfaces.propTypes = {
  surfaces: PropTypes.array.isRequired,
};

export default Surfaces;
