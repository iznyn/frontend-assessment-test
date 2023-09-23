/**
 * Site Header
 */
import styled from 'styled-components';
import { IconBot } from './IconBot';

const Wrapper = styled.header`
  padding: 20px 24px;
  background-color: #353535;
  border-bottom: 5px solid #268E37;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  color: #C7D8CA;
  font-size: 16px;
  line-height: 18px;
  font-weight: 600;
`;

export const Header = () => {
  return (
    <Wrapper>
      <Logo>
        <IconBot size={40} />
        Alien Planets
      </Logo>
    </Wrapper>
  );  
}