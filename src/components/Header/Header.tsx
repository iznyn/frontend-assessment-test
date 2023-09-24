/**
 * Site Header
 */
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import IconHeart from '../Planet/icons/heart.svg';
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
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: #C7D8CA;
  font-size: 16px;
  line-height: 18px;
  font-weight: 600;
`;

const FavLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 10px;
  font-size: 12px;
  color: #ffffff;
  text-decoration: none;
  font-weight: 600;
`;

const FavLinkImg = styled.img`
  width: 18px;
`;

export const Header = () => {
  return (
    <Wrapper>
      <Logo>
        <IconBot size={40} />
        Alien Planets
      </Logo>
      <FavLink to="/favorite">
        <FavLinkImg src={IconHeart} alt="" />
        My Favorites
      </FavLink>
    </Wrapper>
  );  
}