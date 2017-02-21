import React from 'react';

const Search = ({ value, onChange, onSubmit, children }) =>
        <form onSubmit={onSubmit} className="search">
          <input
            type="text"
            value={value}
            onChange={onChange}
          />
          <button type="submit">
            {children}
          </button>
        </form>

export default Search;
