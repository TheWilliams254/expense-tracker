import React from 'react';

const SearchBar = ({ query, onChange }) => (
  <input
    type="text"
    placeholder="Search expenses"
    value={query}
    onChange={(e) => onChange(e.target.value)}
    className="mb-4 p-2 w-full border rounded"
  />
);

export default SearchBar;
