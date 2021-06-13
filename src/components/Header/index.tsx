import { ReactElement, useState } from 'react';
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
import Sidebar from '../Sidebar';

const Header = (): ReactElement => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <Nav>
        <NavbarContainer>
          <NavbarLogo to="/">
            <Logo src={logo} />
          </NavbarLogo>

          <ListContainer>
            <List to="/">Game List</List>
            <List to="/">Special Offers</List>
            <List to="/">Top 2021</List>
            <List as="li" to="/">
              <Dots
                onClick={() => {
                  setIsOpen(!isOpen);
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
          <MobileIcon onClick={() => setSidebarOpen(!sidebarOpen)} />
        </NavbarContainer>
      </Nav>
    </>
  );
};
export default Header;
