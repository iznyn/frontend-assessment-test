/**
 * Search Input
 */
import { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { IPlanet } from '../../types';
import { getNumberAbbr, getNumberFormat } from '../../utils/number';
import IconA from './icons/circleci.svg';
import IconUser from './icons/user.svg';
import IconContrast from './icons/edit-contrast.svg';
import IconRedo from './icons/redo.svg';
import IconArrow from './icons/chevron-right.svg';

const Wrapper = styled(Link)`
  display: flex;
  align-items: center;
  gap: 16px;
  border: 1px solid #cccccc;
  padding: 20px;
  border-radius: 12px;
  text-decoration: none;
`;

const Icon = styled.img`
  width: 40px;
`;

const Content = styled.div`
  flex: 1;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  color: #3f3f3f;
`;

const MetaData = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: #888888;
`;

const MetaItemIcon = styled.img`
  width: 16px;
`;

const Arrow = styled.img`
  margin-left: auto;
  width: 24px;
`;

interface IPlanetProps {
  planet: IPlanet;
}

export const PlanetCard: FC<IPlanetProps> = ({ planet }) => {
  const planetId = parseInt(planet.url.replace('https://swapi.dev/api/planets/', ''));

  return (
    <Wrapper to={`/planet/${planetId}`}>
      <Icon src={IconA} alt="" />
      <Content>
        <Title>{planet.name}</Title>
        <MetaData>
          <MetaItem>
            <MetaItemIcon src={IconUser} alt="" />
            {planet.population !== 'unknown' ? getNumberAbbr(parseInt(planet.population)) : 'Unknown'}
          </MetaItem>
          <MetaItem>
            <MetaItemIcon src={IconContrast} alt="" />
            {planet.climate}
          </MetaItem>
          <MetaItem>
            <MetaItemIcon src={IconRedo} alt="" />
            {getNumberFormat(parseInt(planet.diameter))} KM
          </MetaItem>
        </MetaData>
      </Content>
      <Arrow src={IconArrow} alt="" />
    </Wrapper>
  );
}
