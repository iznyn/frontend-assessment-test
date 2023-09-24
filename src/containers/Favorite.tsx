/**
 * Favorite views
 */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IFavorite } from '../types';
import { getFavorites } from '../utils/favorite';
import { PlanetCard } from '../components/PlanetCard';
import IconArrowLeft from '../components/Favorite/icons/chevron-left.svg';
import IconArrowRight from '../components/Favorite/icons/chevron-right.svg';

const Wrapper = styled.div`
  position: relative;
`;

const Heading = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
`;

const BackBtn = styled(Link)`
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BackIcon = styled.img`
  width: 24px;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  margin: 0;
`;

const List = styled.div`
  margin: 20px 0;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Empty = styled.p`
  margin: 40px 0;
  text-align: center;
  font-size: 12px;
  font-style: italic;
  font-weight: 600;
  color: #888888;
`;

const PaginationWrapper = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

const PaginationBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: 1px solid #888888;
  border-radius: 8px;
  width: 32px;
  height: 32px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.disabled ? 0.4 : 1};
`;
const PaginationIcon = styled.img`
  width: 18px;
`;

const maxDisplay = 10;

const FavoritePage = () => {
  const [page, setPage] = useState(1);
  const favorites = getFavorites();
  const totalPage = (favorites?.length > 0 && favorites?.length > maxDisplay) 
    ? Math.ceil(favorites?.length/maxDisplay)
    : 1;

  /**
   * onClickPrev
   */
  const onClickPrev = () => {
    setPage((current) => current - 1);
  }

  /**
   * onClickNext
   */
  const onClickNext = () => {
    setPage((current) => current + 1);
  }

  return (
    <Wrapper>
      <Heading>
        <BackBtn to="/">
          <BackIcon src={IconArrowLeft} alt="" />
        </BackBtn>
       <Title>My Favorite</Title>
      </Heading>
      {favorites?.length > 0 ? (
        <List>
          {favorites.slice(maxDisplay * (page - 1), maxDisplay * page).map((item: IFavorite, index) => {
            return (
              <PlanetCard 
                key={`favorite-${index}`} 
                id={item.id}
                name={item.name}
                diameter={item.diameter}
                population={item.population}
                climate={item.climate}
              />
            );
          })}

          {favorites?.length > maxDisplay && (
            <PaginationWrapper>
              <PaginationBtn 
                type="button"
                disabled={page <= 1}
                onClick={onClickPrev}
              >
                <PaginationIcon src={IconArrowLeft} alt="" />
              </PaginationBtn>
              <PaginationBtn 
                type="button"
                disabled={page >= totalPage}
                onClick={onClickNext}
              >
                <PaginationIcon src={IconArrowRight} alt="" />
              </PaginationBtn>
            </PaginationWrapper>
          )}
        </List>
      ) : (
        <Empty>Favorites not found.</Empty>
      )}
    </Wrapper>
  );
}

export default FavoritePage;