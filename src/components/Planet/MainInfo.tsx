/**
 * Main Info
 */
import { FC } from 'react';
import styled from 'styled-components';
import { IPlanet } from '../../types';
import { getNumberAbbr, getNumberFormat } from '../../utils/number';
import { formatDate } from '../../utils/date';
import IconTop from './icons/linear.svg';

const Wrapper = styled.div`
  position: relative;
`;

const Icon = styled.div`
  text-align: center;
  margin-bottom: 10px;
`;

const IconImg = styled.img`
  width: 80px;
`;

const Title = styled.h1`
  font-size: 28px;
  line-height: 32px;
  margin: 0 0 10px;
  color: #3E5642;
  text-transform: uppercase;
  text-align: center;
`;

const InfoDate = styled.p`
  font-size: 11px;
  color: #777777;
  text-transform: uppercase;
  text-align: center;
  margin: 0 0 20px;
`;

const MetaWrapper = styled.div`
  margin-top: 40px;
  border: 2px dashed #cccccc;
  border-radius: 12px;
  padding: 20px;
`;

const MetaList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: repeat(4, minmax(0, 1fr));
  gap: 16px;
`;

const MetaTitle = styled.h2`
  font-size: 12px;
  text-transform: uppercase;
  color: #444444;
  margin: 0 0 24px;
`;

const MetaItem = styled.div`
  font-size: 14px;
  color: #666666;
`;

interface IMainInfoProps {
  planet: IPlanet;
}

export const MainInfo: FC<IMainInfoProps> = ({ planet }) => {
  return (
    <Wrapper>
      <Icon>
        <IconImg src={IconTop} alt="" />
      </Icon>
      <Title>{planet.name}</Title>
      <InfoDate>
        Created: {formatDate(planet.created)}
      </InfoDate>
      <MetaWrapper>
        <MetaTitle>Planet Details</MetaTitle>
        <MetaList>
          <MetaItem>
            Population: <strong>{planet.population !== 'unknown' ? getNumberAbbr(parseInt(planet.population)) : 'Unknown'}</strong>
          </MetaItem>
          <MetaItem>
            Diameter: <strong>{getNumberFormat(parseInt(planet.diameter))}KM</strong>
          </MetaItem>
          <MetaItem>
            Terrain: <strong>{planet.terrain}</strong>
          </MetaItem>
          <MetaItem>
            Climate: <strong>{planet.climate}</strong>
          </MetaItem>
          <MetaItem>
            Surface Water: <strong>{planet.surface_water}</strong>
          </MetaItem>
          <MetaItem>
            Gravity: <strong>{planet.gravity}</strong>
          </MetaItem>
          <MetaItem>
            Orbital Period: <strong>{planet.orbital_period}</strong>
          </MetaItem>
          <MetaItem>
            Rotation Period: <strong>{planet.rotation_period}</strong>
          </MetaItem>
        </MetaList>
      </MetaWrapper>
    </Wrapper>
  );
}
