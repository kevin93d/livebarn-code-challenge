import styled from 'styled-components';
import { Row, Col } from 'react-grid-system';

const HomeWrapper = styled(Row)`
  height: 100vh;
`;

const SideMenuWrapper = styled(Col)`
  height: 100%;
  width: 100%;
  padding: 15px 0 !important;
`;

const ContentWrapper = styled(Col)`
  height: 100%;
  width: 100%;
  padding: 15px 0 !important;
`;

const EmptyTab = styled.h1`
  text-align: center;
`;

export { HomeWrapper, SideMenuWrapper, ContentWrapper, EmptyTab };
