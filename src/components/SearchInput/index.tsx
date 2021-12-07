import React from "react";
import { MdSearch } from "react-icons/md";
import { SearchInputStyles } from "./styles";

const SearchInput: React.FC = () => {
  return (
    <SearchInputStyles>
      <input
        className="input-field"
        type="text"
        placeholder="place book name here..."
      />
      <button className="search-button">
        <MdSearch size={22} />
      </button>
    </SearchInputStyles>
  );
};

export default SearchInput;
