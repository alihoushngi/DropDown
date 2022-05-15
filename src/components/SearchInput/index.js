import React, { memo } from "react";
import styled from "styled-components";

const SearchInput = ({ value, onChange, placeholder, access }) => {
  return (
    <Search
      type="text"
      className="search"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={access}
    />
  );
};

const Search = styled.input`
  color: #ffffff;
  border: none;
  background-color: #404448;
  padding: 1rem !important;
  margin-left: 10px !important;
  width: 10%;
  &:focus-visible {
    border: none;
    outline-offset: unset !important;
    outline: none !important;
  }
  &::placeholder {
    font-size: 1rem;
    font-weight: 400;
  }
`;

export default memo(SearchInput);
