import { styled } from "styled-components";

export const SMedia = styled.div`
  height: auto;
  overflow: hidden;
`;
export const Social = styled.div`
  width: 33.33%;
  float: left;
  padding: 100px 0 100px 60px;
  background-color: ${(props) => (props.item === 1 ? "#3b5998" : "")};
  background-color: ${(props) => (props.item === 2 ? "#498cbf" : "")};
  background-color: ${(props) => (props.item === 3 ? "#cc2127" : "")};
  @media (max-width: 767px) {
    width: 50%;
    &:last-of-type {
      width: 100%;
      padding-left: 200px;
    }
  }
  @media (max-width: 479px) {
    width: 100%;
    padding-left: 80px;
  }
  &:last-of-type {
    padding-left: 80px;
  }
`;
export const Icon = styled.i`
  width: 50px;
  height: 50px;
  background: #fff;
  text-align: center;
  color: #555;
  float: left;
  margin: 7px 10px 0 0;
  padding: 27px 0;
  border-radius: 3px;
  font-size: 150px;
`;
export const SocialDesc = styled.p`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 20px;
  color: #fff;
  float: left;
`;
export const Span = styled.span`
  display: block;
  margin-bottom: 8px;
`;
export const SpanInfo = styled.span`
  font-weight: normal;
`;
