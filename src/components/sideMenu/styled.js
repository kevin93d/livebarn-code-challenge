import styled from 'styled-components';
import { Tab as TabBase, Tabs as TabsBase } from '@material-ui/core';

const Tabs = styled(TabsBase)`
  width: 100%;
  height: 100%;
  border-right: 1px solid rgba(0, 0, 0, 0.12);
`;

const Tab = styled(TabBase)`
  min-width: 100% !important;
`;

export { Tabs, Tab };
