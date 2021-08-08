import React from "react";
import { BurgerContainer, BurgerBox, BurgerInner } from "./Styles";

const Burger = ({ open, setOpen }) => {
  return (
    <BurgerContainer
      className={open ? "is-active" : ""}
      onClick={() => setOpen(!open)}
    >
      <BurgerBox>
        <BurgerInner />
      </BurgerBox>
    </BurgerContainer>
  );
};

export default Burger;
