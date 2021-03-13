import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs } from './styled';

const SideMenu = ({ currentIndex, onTabChange }) => {
  const controlProps = index => {
    return {
      id: `side-menu-tab-${index}`,
      'aria-controls': `side-menu-tabpanel-${index}`,
    };
  };

  return (
    <Tabs
      orientation={'vertical'}
      value={currentIndex}
      onChange={onTabChange}
      indicatorColor={'primary'}
      textColor={'primary'}
      aria-label={'side-menu'}
    >
      <Tab label={'Empty Tab'} {...controlProps(0)} />
      <Tab label={'Data'} {...controlProps(1)} />
    </Tabs>
  );
};

SideMenu.propTypes = {
  currentIndex: PropTypes.number.isRequired,
  onTabChange: PropTypes.func.isRequired,
};

export default SideMenu;
