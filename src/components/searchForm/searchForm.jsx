import propTypes from 'prop-types';

import { Form } from './searchForm.module';

export const SearchForm = ({ value, onChange }) => {
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Movie Search</h2>
      <input
        type="text"
        debounceTimeout={500}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="type here"
      />
    </Form>
  );
};

SearchForm.propTypes = {
  value: propTypes.string,
  onChange: propTypes.func,
};
