import { FaBars, FaSearch } from 'react-icons/fa';
import { GiPresent } from 'react-icons/gi';
import { VscLibrary } from 'react-icons/vsc';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

type PropType = {
  isOpen?: boolean;
};

export const Nav = styled.nav`
  background-color: #272a46;
`;

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 1024px;
  margin: 0 auto;
  padding: 12px 0;
  position: relative;
`;

export const MobileIcon = styled(FaBars)`
  display: none;

  @media screen and (max-width: 1052px) {
    display: block;
    position: absolute;
    right: 24px;
    font-size: 24px;
    color: white;
    cursor: pointer;
  }
`;

export const NavbarLogo = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

export const Logo = styled.img`
  display: block;
  width: 165px;
`;

export const ListContainer = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;

  @media screen and (max-width: 1052px) {
    display: none;
  }
`;

export const List = styled.li`
  color: white;
  margin-right: 12px;
  display: flex;
  align-items: center;
  position: relative;

  &:last-of-type {
    position: relative;
  }
`;

export const DropdownMenu = styled.div`
  color: white;
  z-index: 999;
  width: 200px;
  background-color: #272b30;
  position: absolute;
  top: 48px;

  display: ${({ isOpen }: PropType) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
`;

export const DropdownHeader = styled.h6`
  font-size: 12px;
  margin: 0;
  padding: 24px 0;
`;

export const DropdownItem = styled.a`
  font-size: 16px;
  padding: 18px 0;
  width: 100%;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: black;
  }
`;

export const Dots = styled(BsThreeDotsVertical)`
  color: white;
  font-size: 20px;
  cursor: pointer;
`;

export const FuncContainer = styled.ul`
  list-style: none;
  display: flex;
  margin-left: auto;

  @media screen and (max-width: 1052px) {
    display: none;
  }
`;

export const Search = styled(FaSearch)`
  color: white;
  font-size: 18px;
  margin-right: 16px;
`;
export const Present = styled(GiPresent)`
  color: white;
  font-size: 18px;
  margin-right: 16px;
`;
export const Library = styled(VscLibrary)`
  color: white;
  font-size: 18px;
  margin-right: 16px;
`;

export const Login = styled(Link)`
  font-size: 14px;
  text-decoration: none;
  color: white;
  margin-left: 16px;
`;

export const SignUp = styled(Link)`
  font-size: 14px;
  text-decoration: none;
  color: white;
  margin-left: 16px;
`;
