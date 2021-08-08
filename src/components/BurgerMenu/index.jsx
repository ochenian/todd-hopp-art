import React, { useState } from "react";
import { Burger, BurgerBox, BurgerInner } from "./Styles";

const BurgerMenu = ({ open, setOpen }) => {
  return (
    <Burger className={open ? "is-active" : ""} onClick={() => setOpen(!open)}>
      <BurgerBox>
        <BurgerInner />
      </BurgerBox>
    </Burger>
  );
};

export default BurgerMenu;
