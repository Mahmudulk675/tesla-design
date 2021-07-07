import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { useSelector } from "react-redux";
import { selectCar } from "../features/Car/carSlice";

const Headers = () => {
  const [burgerStatus, setBergerStatus] = useState(false);
  const cars = useSelector(selectCar);
  console.log(cars);
  return (
    <Container>
      <img src="/images/logo.svg" alt="" />

      <Menu>
        {cars &&
          cars.map((car, index) => (
            <a href="https://www.tesla.com/" key={index}>
              {car}
            </a>
          ))}
      </Menu>

      <RightMenu>
        <a href="https://www.tesla.com/">Explore</a>
        <a href="https://www.tesla.com/">Account</a>
        <CustomMenu onClick={() => setBergerStatus(true)}></CustomMenu>
      </RightMenu>
      <BurgerMenu show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBergerStatus(false)} />
        </CloseWrapper>
        {cars &&
          cars.map((car, index) => (
            <li key={index}>
              <a href="https://www.tesla.com/">{car}</a>
            </li>
          ))}

        <li>
          <a href="https://www.tesla.com/">Used Inventory</a>
        </li>
        <li>
          <a href="https://www.tesla.com/">Cyber Truck</a>
        </li>
        <li>
          <a href="https://www.tesla.com/">Roadster</a>
        </li>
        <li>
          <a href="https://www.tesla.com/">More</a>
        </li>
      </BurgerMenu>
    </Container>
  );
};

export default Headers;

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
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerMenu = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 250px;
  x-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s;
  li {
    padding: 15px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-weight: 600;
    }
  }
`;

const CustomClose = styled(CloseIcon)``;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
