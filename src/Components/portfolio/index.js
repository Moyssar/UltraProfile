import React, { useEffect, useState } from "react";
import {
  PortfolioSection,
  PortfolioTitle,
  Span,
  PortfolioList,
  PortfolioItem,
  Box,
  Img,
  Overlay,
  OverlaySpan,
  ImageWrapper,
} from "./style";
import axios from "axios";

const Portfolio = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get("Data/data.json").then((res) => {
      setImages(res.data.portfolio);
    });
  }, []);

  const PortfolioImages = images.map((imgItem) => {
    return (
      <ImageWrapper key={imgItem.id}>
        <Img src={imgItem.image} alt={imgItem.id} />
        <Overlay>
          <OverlaySpan>Show Image</OverlaySpan>
        </Overlay>
      </ImageWrapper>
    );
  });

  return (
    <PortfolioSection id="portfolio">
      <PortfolioTitle>
        <Span>My</Span> Portfolio
      </PortfolioTitle>
      <PortfolioList>
        <PortfolioItem className="active">All</PortfolioItem>
        <PortfolioItem>HTML</PortfolioItem>
        <PortfolioItem>Photoshop</PortfolioItem>
        <PortfolioItem>Wordpress</PortfolioItem>
        <PortfolioItem>Mobile</PortfolioItem>
      </PortfolioList>
      <Box>{PortfolioImages}</Box>
    </PortfolioSection>
  );
};

export default Portfolio;
