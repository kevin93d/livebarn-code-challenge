import React from 'react';
import PropTypes from 'prop-types';
import { Paper } from './styled';
import { Divider, List, ListItem, ListItemText } from '@material-ui/core';

const Detail = ({ detail }) => {
  return (
    <Paper>
      <h3>Detail</h3>
      <Divider />
      {detail && (
        <List dense>
          <ListItem>
            <ListItemText
              primary={'Venue Name:'}
              secondary={detail.venueName}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={'Surface Name:'}
              secondary={detail.surfaceName}
            />
          </ListItem>
          <ListItem>
            <ListItemText primary={'Status:'} secondary={detail.status} />
          </ListItem>
          <ListItem>
            <ListItemText primary={'Sport:'} secondary={detail.sport} />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={'Server Ip:'}
              secondary={detail.server.ip4}
            />
          </ListItem>
        </List>
      )}
    </Paper>
  );
};

Detail.propTypes = {
  detail: PropTypes.shape({
    venueName: PropTypes.string,
    surfaceName: PropTypes.string,
    status: PropTypes.string,
    sport: PropTypes.string,
    server: PropTypes.shape({
      ip4: PropTypes.string,
    }),
  }),
};

export default Detail;
