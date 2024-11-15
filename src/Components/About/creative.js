import { styled } from "styled-components";

export const CreativeSection = styled.div`
  height: 500px;
  background: url("images/about-bg.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  padding: 10px 0;
  @media (max-width: 989px) {
    height: fit-content;
    background-position: 30% 0;
  }
  @media (max-width: 479px) {
    background-position: 30% 0;
  }
`;
export const Info = styled.div`
  padding-top: 100px;
  width: 50%;
  float: right;
  @media (max-width: 989px) {
    padding-top: 50px;
    width: 80%;
    float: none;
    margin: auto;
  }
  @media (max-width: 479px) {
    padding-top: 50px;
    width: 100%;
  }
`;
export const Title = styled.h2`
  font-weight: bold;
  font-size: 50px;
  @media (max-width: 989px) {
    font-size: 30px;
    text-align: center;
  }
`;
export const TitleSpan = styled.span`
  font-weight: normal;
`;
export const InfoDir = styled.h4`
  font-size: 40px;
  color: #eb5424;
  margin-bottom: 20px;
  @media (max-width: 989px) {
    font-size: 30px;
    text-align: center;
  }
`;
export const InfoDesc = styled.p`
  color: #000;
  margin-bottom: 15px;
  line-height: 1.8;
`;
export const DescA = styled.a`
  font-weight: 600;
`;
