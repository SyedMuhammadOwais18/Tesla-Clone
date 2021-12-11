import React from "react";
import styled from "styled-components";
import Sections from "./Sections";

function Home() {
  return (
    <Container>
      <Sections
        title="Model S"
        desc="Order Online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        btnRightTxt = "EXISTING INVENTORY"
        btnLeftTxt = "EXISTING INVENTORY"
      />
      <Sections
        title="Model Y"
        desc="Order Online for Touchless Delivery"
        backgroundImg="model-y.jpg"
        btnRightTxt = "EXISTING INVENTORY"
        btnLeftTxt = "EXISTING INVENTORY"
      />
      <Sections
        title="Model 3"
        desc="Order Online for Touchless Delivery"
        backgroundImg="model-3.jpg"
        btnRightTxt = "EXISTING INVENTORY"
        btnLeftTxt = "EXISTING INVENTORY"
      />
      <Sections
        title="Model X"
        desc="Order Online for Touchless Delivery"
        backgroundImg="model-x.jpg"
        btnRightTxt = "EXISTING INVENTORY"
        btnLeftTxt = "EXISTING INVENTORY"
      />
       <Sections
        title="Solar Panels"
        desc="Lowest Cost Solar Panels in America"
        backgroundImg="solar-panel.jpg"
        btnRightTxt = "Order Now"
        btnLeftTxt = "Learn More"
      />
        <Sections
        title="Solar Roof"
        desc="Produce Clean Energy From Your Roof"
        backgroundImg="solar-roof.jpg"
        btnRightTxt = "Order Now"
        btnLeftTxt = "Learn More"
      />
       <Sections
        title="Accessories"
        desc=""
        backgroundImg="accessories.jpg"
       
        btnLeftTxt = "Shop now"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
