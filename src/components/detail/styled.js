import styled from 'styled-components';
import { Paper as PaperBase } from '@material-ui/core';

const Paper = styled(PaperBase)`
  width: 100%;
  height: 100%;
  background-color: rgba(245, 0, 87, 0.08) !important;
  h3 {
    margin: 0;
    padding: 17px 0;
    text-align: center;
  }
`;

export { Paper };
