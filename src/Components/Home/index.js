import React from "react";
import {
  HomeSection,
  HomeInformation,
  HomeTitle,
  HomeInfo,
  HomeDesc,
  Span,
  HomeBtn,
} from "./home";
const Home = () => {
  return (
    <HomeSection>
      <div className="container">
        <HomeInformation>
          <HomeTitle>Moyssar Magdi</HomeTitle>
          <HomeInfo>Creative Designer</HomeInfo>
          <HomeDesc>
            I'm a professional <Span>UX Designer</Span> and Front-End Developer
            creating modern and responsive to web and Mobile. let us work
            rogather. thank you.
          </HomeDesc>
          <HomeBtn className="home-btn">lets Begin</HomeBtn>
        </HomeInformation>
      </div>
    </HomeSection>
  );
};

export default Home;
