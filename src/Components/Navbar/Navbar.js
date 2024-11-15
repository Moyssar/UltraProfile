import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavbarSection = styled.div`
  overflow: hidden;
  background: #fff;
  position: relative;
  border-bottom: Ipx solid #000;
  display: flex;
  justify-content: space-between;
  height: 80px;
  @media (max-width: 989px) {
  }
`;
export const LogoText = styled.h2`
  text-transform: capitalize;
  font-size: 30px;
  padding 10px;
  color: #000;
  padding-top:20px;
  @media (max-width: 989px) {
    font-size: 25px;
  }
`;
export const UlList = styled.ul`
  line-height: 80px;
  list-style: none;
  display: flex;
  margin: 0;
  @media (max-width: 479px) {
    display: none;
  }
`;
export const ListItem = styled.li`
font-wight-bold;
&:not(:first-of-type){
margin-left:10px
}
`;
export const Anchor = styled.a`
  color: #000;
  text-decoration: none;
  &::hover {
    color: orang;
  }
`;
export const MyNavLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  transition: all 300ms ease-in-out;
  &.active {
    color: red;
  }
`;
