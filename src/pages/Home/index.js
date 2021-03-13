import React, { useState } from 'react';
import {
  ContentWrapper,
  EmptyTab,
  HomeWrapper,
  SideMenuWrapper,
} from './styled';
import { Container } from 'react-grid-system';
import SideMenu from '../../components/sideMenu';
import TabPanel from '../../components/tabPanel';
import DataTab from '../../components/dataTab';

const Home = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const onTabChange = (event, newIndex) => {
    setCurrentTab(newIndex);
  };

  return (
    <Container fluid>
      <HomeWrapper>
        <SideMenuWrapper xs={3} sm={2} md={1}>
          <SideMenu currentIndex={currentTab} onTabChange={onTabChange} />
        </SideMenuWrapper>
        <ContentWrapper xs={9} sm={10} md={11}>
          <TabPanel
            controlledBy={'side-menu'}
            currentIndex={currentTab}
            index={0}
          >
            <EmptyTab>This is an empty tab</EmptyTab>
          </TabPanel>
          <TabPanel
            controlledBy={'side-menu'}
            currentIndex={currentTab}
            index={1}
          >
            <DataTab />
          </TabPanel>
        </ContentWrapper>
      </HomeWrapper>
    </Container>
  );
};

export default Home;
