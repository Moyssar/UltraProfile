import React from "react";
import {
  CreativeSection,
  Info,
  Title,
  TitleSpan,
  InfoDir,
  InfoDesc,
  DescA,
} from "./creative.js";

const About = () => {
  return (
    <CreativeSection id="about">
      <div class="container">
        <Info>
          <Title>
            <TitleSpan>This is </TitleSpan>Not <TitleSpan>Me</TitleSpan>
          </Title>
          <InfoDir>Creative Director</InfoDir>
          <InfoDesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est{" "}
            <DescA href="#">explicabo</DescA> maxime quibusdam quaerat nihil
            aliquid aperiam deleniti, repellendus dolorum. Possimus nisi
            cupiditate ad veritatis?
          </InfoDesc>
          <InfoDesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est
            explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti,
            repellendus dolorum. Possimus nisi cupiditate ad veritatis?
          </InfoDesc>
        </Info>
      </div>
    </CreativeSection>
  );
};

export default About;
