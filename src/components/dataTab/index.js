import React, { useEffect, useState } from 'react';
import SearchBar from '../searchBar';
import { Tab, Tabs } from '@material-ui/core';
import {
  Container,
  ContentSection,
  SearchBarSection,
  TabSection,
} from './styled';
import { Col } from 'react-grid-system';
import TabPanel from '../tabPanel';
import Surfaces from '../surfaces';
import Servers from '../servers';
import Detail from '../detail';
import axios from 'axios';

const DataTab = () => {
  const controlProps = index => {
    return {
      id: `data-menu-tab-${index}`,
      'aria-controls': `data-menu-tabpanel-${index}`,
    };
  };
  const [currentTab, setCurrentTab] = useState(0);
  const [data, setData] = useState([]);
  const [servers, setServers] = useState([]);

  useEffect(() => {
    fetchData().then(res => setData(res.data));
  }, []);

  useEffect(() => {
    extractServers(data);
  }, [data]);

  const fetchData = async () => {
    return await axios.get('http://localhost:5000/data');
  };

  const extractServers = data => {
    const serversObj = {};
    data.forEach(d => {
      // Assigning server id as key, so only one copy of server will stored
      serversObj[d.server.id] = d.server;
    });
    const uniqueServers = Object.values(serversObj);
    setServers(uniqueServers);
  };

  const onSearch = query => {
    console.log(query);
  };

  return (
    <Container fluid>
      <SearchBarSection>
        <Col xs={12}>
          <SearchBar onSearch={onSearch} />
        </Col>
      </SearchBarSection>
      <TabSection>
        <Col xs={12}>
          <Tabs
            value={currentTab}
            onChange={(e, value) => setCurrentTab(value)}
            aria-label={'data-menu'}
          >
            <Tab label={'Surfaces'} {...controlProps(0)} />
            <Tab label={'servers'} {...controlProps(1)} />
          </Tabs>
        </Col>
      </TabSection>
      <ContentSection nogutter>
        <Col xs={8} sm={9}>
          <TabPanel
            controlledBy={'data-menu'}
            currentIndex={currentTab}
            index={0}
          >
            <Surfaces surfaces={data} />
          </TabPanel>
          <TabPanel
            controlledBy={'data-menu'}
            currentIndex={currentTab}
            index={1}
          >
            <Servers servers={servers} />
          </TabPanel>
        </Col>
        <Col xs={4} sm={3}>
          <Detail />
        </Col>
      </ContentSection>
    </Container>
  );
};

export default DataTab;
