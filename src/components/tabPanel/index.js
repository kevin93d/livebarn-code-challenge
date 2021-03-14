import React from 'react';
import PropTypes from 'prop-types';
import { Content } from './styled';

const TabPanel = ({
  currentIndex,
  index,
  controlledBy,
  children,
  ...other
}) => {
  return (
    <Content
      role={'tabpanel'}
      hidden={currentIndex !== index}
      id={`${controlledBy}-tabpanel-${index}`}
      aria-labelledby={`${controlledBy}-tab-${index}`}
      {...other}
    >
      {currentIndex === index && children}
    </Content>
  );
};

TabPanel.propTypes = {
  index: PropTypes.number.isRequired,
  currentIndex: PropTypes.number.isRequired,
  controlledBy: PropTypes.string,
};

export default TabPanel;
