import React from "react";
import { ListageStyles } from "./styles";

import SearchInput from "../SearchInput";

const Listage: React.FC = () => {
  return (
    <ListageStyles>
      <div className="container">
        <div className="search-section">
          <SearchInput />
        </div>
        <div className="list-section">
          <span className="badge-empty-search">
            You need place a book title in top field...
          </span>
        </div>
      </div>
    </ListageStyles>
  );
};

export default Listage;
