import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import background from '../images/background.jpg';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
  height: 100vh;

  &:before {
    content: '';
    background-image: linear-gradient(rgb(83, 68, 214), rgb(118, 15, 214)),
      url(${background});
    background-blend-mode: multiply;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -5;
    opacity: 0.6;
    filter: blur(1px);
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;

  > nav {
    display: flex;
  }
`;

export const Logo = styled.p`
  font-weight: 700;
  font-size: 30px;
  color: #064e8a;
  margin: 0;
  margin-left: 10px;
`;

export const Links = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: #064e8a;
  }
`;

export const Footer = styled.footer`
  border-top: 1px solid #ececec;
`;

export const Text = styled.p`
  text-align: center;
  padding: 20px 0;
  margin: 0;
`;
