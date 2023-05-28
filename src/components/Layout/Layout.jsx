import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import { Container, Header, Nav, Link } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <Header>
        <Nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies </Link>
        </Nav>
      </Header>

      <main>
        <Container>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </>
  );
};
