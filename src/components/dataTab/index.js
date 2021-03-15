import React, { useEffect, useState } from 'react';
import SearchBar from '../searchBar';
import { Tab, Tabs } from '@material-ui/core';
import {
  Container,
  ContentSection,
  InnerContentSection,
  SearchBarSection,
  TabSection,
} from './styled';
import { Col } from 'react-grid-system';
import TabPanel from '../tabPanel';
import Surfaces from '../surfaces';
import Servers from '../servers';
import Detail from '../detail';
import axios from 'axios';
import { debounce } from 'lodash';

const DataTab = () => {
  const controlProps = index => {
    return {
      id: `data-menu-tab-${index}`,
      'aria-controls': `data-menu-tabpanel-${index}`,
    };
  };
  const [currentTab, setCurrentTab] = useState(0);
  // Original data
  const [data, setData] = useState([]);
  // Filtered data, which will be passed to surface table
  const [filteredData, setFilteredData] = useState([]);
  // Unique servers extracted from filtered array
  const [servers, setServers] = useState([]);
  // Current selected row
  const [selectedSurface, setSelectedSurface] = useState(null);
  // Search query
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetchData().then(res => setData(res.data));
    // Bonus auto re-fetch data every minute
    // FIXME
    // consider what should happen if a selected row is removed from backend
    const interval = setInterval(() => {
      fetchData().then(res => setData(res.data));
    }, 60000);
    // clean up
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (data.length && !selectedSurface) setSelectedSurface(data[0]);
  }, [data, selectedSurface]);

  useEffect(() => {
    if (data.length && !query) extractServers(data);
  }, [data, query]);

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
    setQuery(query);
    const filtered = data.filter(d => {
      return d.venueName.toLowerCase().includes(query.toLowerCase());
    });
    setFilteredData(filtered);
    extractServers(filtered);
  };

  const onClear = () => {
    setQuery('');
    setFilteredData([]);
    extractServers(data);
  }

  const debouncedSearch = debounce(onSearch, 500);

  const onSurfaceSelect = surface => {
    setSelectedSurface(surface);
  };

  return (
    <Container fluid>
      <SearchBarSection>
        <Col xs={12}>
          <SearchBar onSearch={debouncedSearch} onClear={onClear} />
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
      <ContentSection>
        <InnerContentSection xs={8} sm={9}>
          <TabPanel
            controlledBy={'data-menu'}
            currentIndex={currentTab}
            index={0}
          >
            <Surfaces
              surfaces={query ? filteredData : data}
              selectedSurface={selectedSurface}
              onSurfaceSelect={onSurfaceSelect}
            />
          </TabPanel>
          <TabPanel
            controlledBy={'data-menu'}
            currentIndex={currentTab}
            index={1}
          >
            <Servers servers={servers} selectedSurface={selectedSurface} />
          </TabPanel>
        </InnerContentSection>
        <InnerContentSection xs={4} sm={3}>
          <Detail detail={selectedSurface} />
        </InnerContentSection>
      </ContentSection>
    </Container>
  );
};

export default DataTab;
