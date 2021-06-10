import { ReactElement } from 'react';
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarRoute,
  SidebarWrapper,
  SidebarWrap,
} from './styles/Sidebar';

type Props = {
  sidebarOpen: boolean;
  setSidebarOpen: (sidebarOpen: boolean) => void;
};

const Sidebar = ({
  sidebarOpen: isOpen,
  setSidebarOpen,
}: Props): ReactElement => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon>
        <CloseIcon onClick={() => setSidebarOpen(!isOpen)} />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/" onClick={() => setSidebarOpen(!isOpen)}>
            Game List
          </SidebarLink>
          <SidebarLink to="/" onClick={() => setSidebarOpen(!isOpen)}>
            Special Offers
          </SidebarLink>
          <SidebarLink to="/" onClick={() => setSidebarOpen(!isOpen)}>
            Top 2021
          </SidebarLink>
          <SidebarLink to="/" onClick={() => setSidebarOpen(!isOpen)}>
            About
          </SidebarLink>
        </SidebarMenu>
        <SidebarWrap>
          <SidebarRoute to="/" onClick={() => setSidebarOpen(!isOpen)}>
            Sign Up
          </SidebarRoute>
        </SidebarWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
