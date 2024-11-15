import { styled } from "styled-components";

export const ContantSec = styled.div`
  padding: 20px 0 100px;
  text-align: center;
  height: calc(100vh - 125px);
`;
export const ConTitle = styled.h2`
  font-size: 60px;
  text-transform: capitalize;
  margin-bottom: 30px;
  @media (max-width: 479px) {
    font-size: 30px;
    margin-top: 50px;
    margin-bottom: 20px;
  }
`;
export const Span = styled.span`
  color: #eb5424;
  font-weight: normal;
`;
export const Form = styled.form`
  width: 70%;
  margin: auto;
  @media (max-width: 479px) {
    width: 100%;
    padding: 15px 10px;
  }
`;
export const Input = styled.input`
  outline: 0;
  padding: 5px;
  margin-bottom: 10px;
`;
export const FormInput = styled.div`
  overflow: hidden;
`;
export const TxtInput = styled(Input)`
  float: left;
  width: 49%;
  margin: 1px;
`;
export const EmailInput = styled(Input)`
  float: right;
  width: 49%;
  margin: 1px;
`;
export const ExpInput = styled(Input)`
  width: 100%;
  margin: 10px 0;
`;
export const Textarea = styled(Input)`
  width: 100%;
  outline: none;
  border: 1px solid #888;
  border-radius: 4px;
  background: #eee;
  height: 200px;
  display: flex;
`;
export const Submit = styled(Input)`
  width: 50%;
  background: #fff;
  border: 1px solid #888;
  color: #888;
  margin-top: 10px;
  cursor: pointer;
  @media (max-width: 479px) {
    width: 100%;
    padding: 10px;
  }
`;
