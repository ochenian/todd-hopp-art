import React, { useRef, useState } from "react";
import Burger from "../Burger";
import Menu from "../Menu";
import { Container } from "./Styles";
import { useOnClickOutside } from "../../hooks/hooks";

const Header = () => {
  const [open, toggleOpen] = useState(false);
  const node = useRef();

  useOnClickOutside(node, () => toggleOpen(false));

  return (
    <Container ref={node}>
      <Burger open={open} setOpen={toggleOpen} />
      <Menu open={open} />
    </Container>
  );
};

export default Header;
