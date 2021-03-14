import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { InputBase, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import { Wrapper } from './styled';
import { debounce } from 'lodash';

const SearchBar = ({ onSearch, data }) => {
  const [query, setQuery] = useState('');

  // Create a memorized debounced function when data is initialized
  // If data is not passed, the debounced function is created before the data in parent component even exist
  // So when the event reach back to parent, data array is empty
  // eslint-disable-next-line
  const debouncedSearch = useCallback(debounce(onSearch, 500), [data]);

  const handleSearch = value => {
    setQuery(value);
    debouncedSearch(value);
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
