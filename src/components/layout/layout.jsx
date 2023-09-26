import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Loader } from '../loader/loader';
import {
  Container,
  Header,
  Logo,
  Links,
  Footer,
  Text,
  IconLogo,
} from './layout.module';

export const Layout = () => {
  return (
    <>
      <Container>
        <Header>
          <Logo>TMDB</Logo>
          <nav>
            <Links to="/" end>
              Home
            </Links>
            <Links to="/movies">Movie</Links>
          </nav>
        </Header>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <Footer>
          <Text>&copy; {new Date().getFullYear()} Movie Search</Text>
        </Footer>
      </Container>
    </>
  );
};
