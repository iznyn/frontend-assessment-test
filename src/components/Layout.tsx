/**
 * General Layout
 */
import { FC, ReactElement } from "react";
import styled from 'styled-components';

import { Header } from './Header';
import { Footer } from './Footer';

interface ILayout {
  children: ReactElement;
}

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

const Layout: FC<ILayout> = ({ children }) => {
  return (
    <Wrapper>
      <Inner>
        <Header />
        <Main>
          {children}
        </Main>
        <Footer />
      </Inner>
    </Wrapper>
  );
}

export default Layout;