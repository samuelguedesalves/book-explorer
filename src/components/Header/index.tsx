import React from "react";
import { HeaderStyles, Logo } from "./styles";
import { MdBook } from "react-icons/md";

const Header: React.FC = () => {
  return (
    <HeaderStyles>
      <div className="container">
        <Logo>
          Book Explorer
          <MdBook />
        </Logo>
      </div>
    </HeaderStyles>
  );
};

export default Header;
