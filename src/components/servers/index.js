import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Paper, TableContainer } from './styled';
import {
  Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const columns = [
  { key: 'ip4', label: 'Ip4' },
  { key: 'dns', label: 'Dns' },
];

const collapsibleColumns = [
  { key: 'venueName', label: 'Venue' },
  { key: 'surfaceName', label: 'Surface' },
  { key: 'sport', label: 'Sport' },
];

const CollapsibleRow = ({
  server,
  selectedServer,
  selectedSurface,
  data,
  onSelect,
}) => {
  const [open, setOpen] = React.useState(false);
  const [dataByServer, setDataByServer] = useState([]);

  const openTab = useCallback(() => {
    const filtered = data.filter(d => d.server.id === server.id);
    setDataByServer(filtered);
  }, [data, server]);

  useEffect(() => {
    if (open) {
      openTab();
    }
  }, [open, openTab]);

  return (
    <>
      <TableRow key={server.id} selected={selectedServer?.id === server?.id}>
        <TableCell>
          <IconButton
            aria-label="expand"
            size="small"
            onClick={() => {
              setOpen(!open);
            }}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        {columns.map(col => (
          <TableCell key={col.key} align={col.align ? col.align : 'left'}>
            {server[col.key]}
          </TableCell>
        ))}
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout={'auto'} unmountOnExit>
            <Box margin={1}>
              <Table size={'small'}>
                <TableHead>
                  <TableRow>
                    <TableCell>Num Surfaces: {dataByServer.length}</TableCell>
                  </TableRow>
                  <TableRow>
                    {collapsibleColumns.map(col => (
                      <TableCell
                        key={col.key}
                        align={col.align ? col.align : 'left'}
                      >
                        {col.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {dataByServer.map(row => (
                    <TableRow
                      hover
                      key={row.id}
                      selected={selectedSurface?.id === row?.id}
                      onClick={() => (onSelect ? onSelect(row) : null)}
                    >
                      {collapsibleColumns.map(col => (
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
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

const Servers = ({ servers, selectedSurface, data, onSelect }) => {
  return (
    <Paper>
      <TableContainer>
        <Table stickyHeader aria-label={'server-table'}>
          <TableHead>
            <TableRow>
              <TableCell />
              {columns.map(col => (
                <TableCell key={col.key} align={col.align ? col.align : 'left'}>
                  {col.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {servers.map(server => (
              <CollapsibleRow
                key={server.id}
                server={server}
                selectedServer={selectedSurface?.server}
                selectedSurface={selectedSurface}
                data={data}
                onSelect={onSelect}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

Servers.propTypes = {
  servers: PropTypes.array.isRequired,
  selectedSurface: PropTypes.object,
};

export default Servers;
