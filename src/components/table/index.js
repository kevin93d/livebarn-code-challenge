import React from 'react';
import PropTypes from 'prop-types';
import { Paper, TableContainer } from './styled';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';

// TODO to improve performance, use pagination or virtual scroll
const DataTable = ({ columns, rows, tableName, selected, onSelect }) => {
  return (
    <Paper>
      <TableContainer>
        <Table stickyHeader aria-label={`${tableName}`}>
          <TableHead>
            <TableRow>
              {columns.map(col => (
                <TableCell key={col.key} align={col.align ? col.align : 'left'}>
                  {col.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow
                hover
                key={row.id}
                selected={selected?.id === row?.id}
                onClick={() => (onSelect ? onSelect(row) : null)}
              >
                {columns.map(col => (
                  <TableCell
                    key={col.key}
                    align={col.align ? col.align : 'left'}
                  >
                    {row[col.key]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

DataTable.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      align: PropTypes.oneOf(['center', 'inherit', 'justify', 'left', 'right']),
    })
  ).isRequired,
  rows: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number.isRequired }))
    .isRequired, // should map columns length with same id
  tableName: PropTypes.string,
  selected: PropTypes.object,
  onSelect: PropTypes.func,
};

export default DataTable;
