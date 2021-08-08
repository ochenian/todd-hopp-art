import React from "react";
import { Link } from "gatsby";
import { StyledMenu } from "./Styles";

const Menu = ({ open }) => {
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden}>
      <Link to="/" tabIndex={tabIndex}>
        Home
      </Link>
      <Link to="/storyboards" tabIndex={tabIndex}>
        Storyboards
      </Link>
      <Link to="/contact" tabIndex={tabIndex}>
        Contact
      </Link>
    </StyledMenu>
  );
};

export default Menu;
