import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const Section = (props) => {
  const { title, description, image } = props.data;
  console.log(props);
  return (
    <Wrap image={image}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>

      <Fade bottom>
        <Buttons>
          <ButtonGroup>
            <LeftButton>Custom Order</LeftButton>
            <RightButton>Inventory</RightButton>
          </ButtonGroup>
          <DownArrow src="/images/down-arrow.svg" />
        </Buttons>
      </Fade>
    </Wrap>
  );
};

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: ${(prop) => `url("/images/${prop.image}")`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ItemText = styled.div`
  padding-top: 16vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 10px;
`;

const RightButton = styled(LeftButton)`
  background: white;
  opacity: 0.65;
  color: black;
`;

const DownArrow = styled.img`
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`;

const Buttons = styled.div``;