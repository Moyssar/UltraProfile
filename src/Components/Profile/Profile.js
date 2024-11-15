import { styled } from "styled-components";

export const ProfileSection = styled.div`
  padding: 50px 0;
  overflow: hidden;
`;
export const ProfileSkills = styled.div`
  width: 50%;
  float: left;
  @media (max-width: 479px) {
    width: 100%;
    float: left;
  }
`;
export const ProfileUl = styled.ul`
  list-style: none;
`;
export const ProfileLi = styled.li`
  margin-bottom: 8px;
`;
export const LiSpan = styled.span`
  display: inline-block;
  width: 100px;
  font-weight: bold;
`;
export const Span = styled.span`
  font-weight: normal;
  color: #eb5424;
`;
export const OrngLink = styled.a`
  text-decoration: none;
  font-weight: normal;
  color: #eb5424;
  cursor: pointer;
`;
export const Skills = styled.div`
  width: 50%;
  float: left;
  @media (max-width: 479px) {
    margin-top: 20px;
    width: 100%;
    float: left;
  }
`;
export const SkillsDesc = styled.p`
  font-size: 15px;
  color: #888;
  line-height: 1.5;
  margin-bottom: 20px;
`;
export const SkillsBar = styled.div`
  overflow: hidden;
  padding: 10px 0;
  margin-bottom: 10px;
`;
export const BarTitle = styled.span`
  float: left;
`;
export const BarPerc = styled.span`
  float: right;
  margin-right: 100px;
`;
export const BarParent = styled.div`
  height: 2px;
  clear: both;
  background: #f8f8f8;
  position: relative;
  top: 5px;
`;
export const Sp1 = styled.span`
  display: flex;
  background: #eb5424;
  height: 100%;
  width: 77%;
`;
export const Sp2 = styled.span`
  display: flex;
  background: #eb5424;
  height: 100%;
  width: 90%;
`;
export const Sp3 = styled.span`
  display: flex;
  background: #eb5424;
  height: 100%;
  width: 80%;
`;
export const Title = styled.h2`
  font-size: 40px;
  margin-bottom: 20px;
`;
