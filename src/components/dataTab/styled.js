import styled from 'styled-components';
import {
  Container as ContainerBase,
  Row as RowBase,
  Col as ColBase,
} from 'react-grid-system';

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
  height: calc(100% - ${({ theme }) => theme.searchBarHeight} - 70px - 40px);
`;

const InnerContentSection = styled(ColBase)`
  height: 100%;
`;

const MatchesFooter = styled(RowBase)`
  height: 40px;
`;

const Matches = styled.div`
  text-align: center;
`;

export {
  Container,
  SearchBarSection,
  TabSection,
  ContentSection,
  InnerContentSection,
  MatchesFooter,
  Matches,
};
