import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

type Proptype = {
  isOpen?: boolean;
};

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 9999;
  width: 100%;
  height: 100%;
  background-color: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: all 0.3s ease-in-out;
  opacity: ${({ isOpen }: Proptype) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }: Proptype) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  margin: 24px 0;
  font-size: 32px;

  &:hover {
    color: #4799eb;
    transition: 0.2s ease-in-out;
  }
`;

export const SidebarWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarRoute = styled(Link)`
  color: #4799eb;
  width: 70%;
  text-align: center;
  text-decoration: none;
  margin-top: 52px;
  font-size: 34px;
  padding: 12px;
  border: 1px solid #4799eb;
`;
