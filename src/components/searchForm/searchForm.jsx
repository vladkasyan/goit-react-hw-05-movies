import propTypes from 'prop-types';
import { useState } from 'react';

import { Form } from './searchForm.module';

export const SearchForm = ({ value, setSearchParams }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    setSearchParams({ query });
  };

  const handleSearchParams = ({ target: { value } }) => {
    setQuery(value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Movie Search</h2>
      <input
        type="text"
        value={value}
        onChange={handleSearchParams}
        placeholder="type here"
      />
    </Form>
  );
};

SearchForm.propTypes = {
  value: propTypes.string,
  onChange: propTypes.func,
};
