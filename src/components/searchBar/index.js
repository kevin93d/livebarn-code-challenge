import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { InputBase, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import { Wrapper } from './styled';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = value => {
    setQuery(value);
    onSearch(value);
  };

  return (
    <Wrapper elevation={2}>
      <InputBase
        type={'text'}
        fullWidth
        placeholder={'Search'}
        value={query}
        onChange={event => handleSearch(event.target.value)}
      />
      <IconButton
        onClick={() => {
          setQuery('');
          onSearch('');
        }}
        disabled={!query}
      >
        {!query ? <SearchIcon /> : <ClearIcon />}
      </IconButton>
    </Wrapper>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
