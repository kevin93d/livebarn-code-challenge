import React from 'react';
import PropTypes from 'prop-types';

const TabPanel = ({
  currentIndex,
  index,
  controlledBy,
  children,
  ...other
}) => {
  return (
    <div
      role={'tabpanel'}
      hidden={currentIndex !== index}
      id={`${controlledBy}-tabpanel-${index}`}
      aria-labelledby={`${controlledBy}-tab-${index}`}
      {...other}
    >
      {currentIndex === index && children}
    </div>
  );
};

TabPanel.propTypes = {
  index: PropTypes.number.isRequired,
  currentIndex: PropTypes.number.isRequired,
  controlledBy: PropTypes.string,
};

export default TabPanel;
