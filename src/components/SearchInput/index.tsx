import React from "react";
import { MdSearch } from "react-icons/md";
import { SearchInputStyles, RelativeSearchInput } from "./styles";
import Sugest from "../Sugest";

const SearchInput: React.FC = () => {
  return (
    <RelativeSearchInput>
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
      <Sugest />
    </RelativeSearchInput>
  );
};

export default SearchInput;
