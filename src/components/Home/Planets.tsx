/**
 * Search Input
 */
import { FC, Fragment } from 'react';
import styled from 'styled-components';
import {IPlanet, IApiPlanetsResponse } from '../../types';
import { PlanetCard } from './PlanetCard';

const Wrapper = styled.div`
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

interface IPlanetsProps {
  planets: IApiPlanetsResponse[];
}

export const Planets: FC<IPlanetsProps> = ({ planets }) => {
  return (
    <Wrapper>
      {planets.length > 0 ? (
        <>
          {planets.map((pages, index) => (
            <Fragment key={`product-page-${index}`}>
              {pages.results.map((item: IPlanet, subindex) => (
                <PlanetCard 
                  key={`product-${index}-${subindex}`} 
                  planet={item}
                />
              ))}
            </Fragment>
          ))}
        </>
      ) : (
        <Empty>Planets not found.</Empty>
      )}
    </Wrapper>
  );
}
