import { styled } from "styled-components";

export const WorkSection = styled.div`
  height: auto;
  padding: 50px 0;
  overflow: hidden;
  background: #fff;
  margin: 0;
`;
export const WorkTitle = styled.div`
    font-size: 60px; 
}
`;
export const Span = styled.span`
  font-weight: normal;
`;
export const WorkPart = styled.div`
  margin-top: 20px;
  width: 30%;
  float: left;
  height: auto;
  padding: 100px 0;
  border: 1px solid #888;
  text-align: center;

  &:not(:first-of-type) {
    margin-left: 5%;
  }
  @media (max-width: 767px) {
    margin-top: 20px;
    width: 49%;
    height: auto;
    padding: 50px 0;
    margin: 1% 0;
    &:not(:first-of-type) {
      margin-left: 1%;
    }
  @media (max-width: 479px) {
    margin-top: 20px;
    width: 100%;
    float: none;
    height: auto;
    padding: 50px 0;
    margin: 10px auto;
    &:not(:first-of-type) {
      margin-left: auto;
    }
  }
`;
export const I = styled.i`
  color: #888;
  margin-bottom: 20px;
`;
export const PartTitle = styled.h4`
  font-size: 25px;
  color: #eb5424;
  margin-bottom: 20px;
`;
export const Hr = styled.hr`
  width: 60%;
  margin: auto;
  margin-bottom: 20px;
`;
export const PartDesc = styled.p`
  font-size: 14px;
  color: #888;
  padding: 20px;
`;
