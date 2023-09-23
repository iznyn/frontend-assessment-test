/**
 * Site Footer
 */
import styled from 'styled-components';

const Wrapper = styled.footer`
  padding: 20px 24px 30px;
  background-color: #e6e6e6;
  border-top: 3px solid #268E37;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: auto;
`;

const Info = styled.p`
  color: #888888;
  font-size: 12px;
  line-height: 14px;
`;

export const Footer = () => {
  return (
    <Wrapper>
      <Info>
        Copyright &copy; 2023 by iznyn
      </Info>
    </Wrapper>
  );  
}