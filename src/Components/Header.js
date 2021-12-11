import React, { useState } from "react";
import "./Header.css";

import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { carSelect } from "../features/car/carSlice";
import { useSelector } from "react-redux";

function Header() {
  //false means it is closed
  const [sidebar, setSidebar] = useState(false);
  const cars = useSelector(carSelect);
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        {cars &&
          cars.map((car, index) => (
            <a key = {index} href="#">{car}</a>
          ))}

        {/* <a href="#">Model S</a>
        <a href="#">Model 3</a>

        <a href="#">Model X</a>

        <a href="#">Model Y</a> */}

        <a href="#">Solar Roof</a>

        <a href="#">Solar Panels</a>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>

        <a href="#">Account</a>

        <a href="#" onClick={() => setSidebar(true)}>
          Menu
        </a>
      </RightMenu>
      <BurgerNav show={sidebar}>
        <CloseWrapper>
          <CustomClose onClick={() => setSidebar(false)} />
        </CloseWrapper>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Test Drive</a>
        </li>
        <li>
          <a href="#">Cybertruck</a>
        </li>
        <li>
          <a href="#">Roadster</a>
        </li>
        <li>
          <a href="#">Semi</a>
        </li>
        <li>
          <a href="#">Charging</a>
        </li>
        <li>
          <a href="#">Powerwall</a>
        </li>
        <li>
          <a href="#">Commercial Energy</a>
        </li>
        <li>
          <a href="#">Utilities</a>
        </li>
        <li>
          <a href="#">Find Us</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
        <li>
          <a href="#">Investor Relations</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;

  flex: 1;
  justify-content: center;

  a {
    font-weight: 550;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  a {
    font-weight: 550;
    margin-right: 10px;
    flex-wrap: nowrap;
  }
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s;
  li {
    padding: 15px 0;

    a {
      font-weight: 550;
    }
  }
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
