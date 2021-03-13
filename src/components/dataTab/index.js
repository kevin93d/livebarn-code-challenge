import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-grid-system';

const DataTab = props => {
  return (
    <Container fluid>
      <Row>
        <Col xs={12}>Search</Col>
        <Col xs={8}>Table</Col>
        <Col xs={4}>Detail</Col>
      </Row>
    </Container>
  );
};

DataTab.propTypes = {};

export default DataTab;
