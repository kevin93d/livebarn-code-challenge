import styled from 'styled-components';
import { Container as ContainerBase, Row as RowBase } from 'react-grid-system';

const Container = styled(ContainerBase)`
  height: 100%;
`;

const SearchBarSection = styled(RowBase)`
  height: ${({ theme }) => theme.searchBarHeight};
`;

const TabSection = styled(RowBase)`
  height: 50px;
  margin-top: 20px;
`;

const ContentSection = styled(RowBase)`
  height: calc(100% - ${({ theme }) => theme.searchBarHeight} - 70px);
`;

export { Container, SearchBarSection, TabSection, ContentSection };
