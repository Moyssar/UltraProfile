import { styled } from "styled-components";

export const PortfolioSection = styled.div`
  background: #f8f8f8;
  padding-top: 20px;
  overflow: hidden;
`;
export const PortfolioTitle = styled.h2`
  text-align: center;
  font-size: 35px;
  @media (max-width: 989px) {
    font-size: 25px;
  }
`;
export const Span = styled.span`
  font-weight: normal;
`;
export const PortfolioList = styled.ul`
  list-style: none;
  text-align: center;
  margin: 20px 0;
`;
export const PortfolioItem = styled.li`
  display: inline-block;
  width: 100px;
  padding: 10px;
  &.active {
    background: #eb5424;
    color: #fff;
  }
`;
export const Box = styled.div`
  width: 100%;
  float: none;
  position: relative;
`;
export const ImageWrapper = styled.div`
  width: 25%;
  float: left;
  font-size: 0;
  position: relative;

  &:hover > div {
    backdrop-filter: blur(3px);
    opacity: 1;
  }
  @media (max-width: 989px) {
    width: 50%;
  }
  @media (max-width: 479px) {
    width: 100%;
  }
`;
export const Img = styled.img`
  width: 100%;
`;
export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(235, 84, 36, 0.5);
  font-size: 15px;
  opacity: 0;
  marfin: 0;
  z-index: 2;
  transition: opacity 150ms ease-in-out;
  transition: backdrop-filter 150ms ease-in-out;
`;
export const OverlaySpan = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  display: block;
  padding: 10px 20px;
  cursor: pointer;
  border: 2px solid #eb5424;
  transition: all 300ms ease-in-out;

  &:hover {
    background: #eb5424;
    border: 2px solid #fff;
    color: #fff;
    box-shadow: -5px 5px 10px #00000075;
    scale: 1.05;
  }
`;
