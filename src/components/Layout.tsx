/**
 * General Layout
 */
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

import { Header } from './Header';
import { Footer } from './Footer';

const Wrapper = styled.div`
  max-width: 520px;
  margin: 0 auto;
`;

const Main = styled.main`
  position: relative;
  padding: 24px;
`;

const Inner = styled.div`
  background-color: #eeeeee;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Layout = () => {
  return (
    <Wrapper>
      <Inner>
        <Header />
        <Main>
          <Outlet />
        </Main>
        <Footer />
      </Inner>
    </Wrapper>
  );
}

export default Layout;