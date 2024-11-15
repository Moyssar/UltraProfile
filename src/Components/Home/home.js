import { styled } from "styled-components";

export const HomeSection = styled.div`
  height: 500px;
  background-image: url("images/home-bg.jpg");
  background-size: cover;
  text-align: center;
  position: relative;
  @media (max-width: 989px) {
    height: 400px;
  }
`;
export const HomeInformation = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 989px) {
    width: 100%;
    padding: 0 20px;
  }
  @media (max-width: 989px) {
    width: 100%;
  }
`;
export const HomeTitle = styled.h2`
  font-size: 35px;
  color: #eb5424;
  margin-bottom: 20px;
  @media (max-width: 989px) {
    font-size: 30px;
    margin-bottom: 10px;
  }
`;
export const HomeInfo = styled.h4`
  font-size:35px;
  font-weight:bold;
  color"#5e5e5e;
  @media (max-width: 989px) {
    font-size: 30px;
  }
`;
export const HomeDesc = styled.p`
  font-size: 2epx;
  line-height: 1.5;
  color: #888;
  margin-bottom: 20px;
  text-transform: capitalize;
`;
export const Span = styled.span`
  color: #000;
`;
export const HomeBtn = styled.button`
  background: #eb5424;
  color: #fff;
  font-size: 18px;
  width: 150px;
  border: 0;
  padding: 15px;
  cursor: pointer;
  font-weight: bold;
  transition: all 200ms ease-in-out;

  &:hover {
    background: #fff;
    color: #eb5424;
    outline: 1px solid #eb5424;
  }
`;
