import { useState } from 'react';
import {
  FuncContainer,
  List,
  ListContainer,
  Login,
  SignUp,
  Logo,
  Nav,
  NavbarContainer,
  NavbarLogo,
  Search,
  Library,
  DropdownMenu,
  Present,
  Dots,
  DropdownHeader,
  DropdownItem,
  MobileIcon,
} from './styles/Header';
import logo from '../../freetogame-logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Nav>
      <NavbarContainer>
        <NavbarLogo to="/">
          <Logo src={logo} />
        </NavbarLogo>

        <ListContainer>
          <List>Game List</List>
          <List>Special Offers</List>
          <List>Top 2021</List>
          <List>
            <Dots
              onClick={() => {
                setIsOpen(!isOpen);
                console.log(isOpen);
              }}
            />
            <DropdownMenu isOpen={isOpen}>
              <DropdownHeader>Explore our other sites</DropdownHeader>
              <DropdownItem>GamerPower</DropdownItem>
              <DropdownItem>MMOBomb</DropdownItem>
              <DropdownItem>GamesCamp</DropdownItem>
            </DropdownMenu>
          </List>
        </ListContainer>

        <FuncContainer>
          <Search />
          <Present />
          <Library />
          <Login to="/login">Login</Login>
          <SignUp to="/logout">Join Free</SignUp>
        </FuncContainer>
        <MobileIcon />
      </NavbarContainer>
    </Nav>
  );
};
export default Header;
