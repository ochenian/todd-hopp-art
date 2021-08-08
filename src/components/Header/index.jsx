import React, { useState } from "react";
import BurgerMenu from "../BurgerMenu";
import Menu from "../Menu";
import { Container } from "./Styles";

const Header = () => {
  const [open, toggleOpen] = useState(false);

  return (
    <Container>
      <BurgerMenu open={open} setOpen={toggleOpen} />
      <Menu open={open} />
    </Container>
  );
};

export default Header;
