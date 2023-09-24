/**
 * Button Favorite
 */
import { FC, useState } from 'react';
import styled from 'styled-components';
import { IPlanet } from '../../types';
import { addFavorite } from '../../utils/favorite';
import IconHeart from './icons/heart.svg';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: auto;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 12px 20px;
  font-size: 14px;
  line-height: 16px;
  font-weight: 600;
  color: #ffffff;
  border: 0 none;
  border-radius: 12px;
  background-color: ${props => props.disabled ? '#bbbbbb' : '#268E37'};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
`;

const ButtonIcon = styled.img`
  width: 16px;
`;

interface IBtnFavoriteProps {
  planet: IPlanet;
  disabled?: boolean;
}

export const BtnFavorite: FC<IBtnFavoriteProps> = ({ planet, disabled }) => {
  const [isSelected, setIsSelected] = useState(disabled);

  /**
   * onAddFavorite
   */
  const onAddFavorite = () => {
    addFavorite(planet);
    setIsSelected(true);
  }

  return (
    <Wrapper>
      <Button type="button" onClick={onAddFavorite} disabled={isSelected}>
        <ButtonIcon src={IconHeart} alt="" />
        Favorite
      </Button>
    </Wrapper>
  );
}
