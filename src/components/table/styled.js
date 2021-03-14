import styled from 'styled-components';
import {
  Paper as PaperBase,
  TableContainer as TableContainerBase,
} from '@material-ui/core';

const Paper = styled(PaperBase)`
  width: 100%;
  height: 100%;
`;

const TableContainer = styled(TableContainerBase)`
  max-height: 100%;
`;

export { Paper, TableContainer };
