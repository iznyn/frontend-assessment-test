/**
 * Homepage views
 */
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

import { useGetPlanets } from '../services/useGetPlanets';
import { Planets } from '../components/Home';

const Heading = styled.h2`
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  margin: 12px 0 10px;
`;

const Info = styled.p`
  font-size: 12px;
  text-align: center;
  margin: 0 0 30px;
  color: #888888;
`;

const Main = styled.div`
  min-height: 1300px;
`;

const Loader = styled.div`
  padding-top: 12px;
  text-align: center;
  font-size: 12px;
  text-transform: uppercase;
  color: #999999;
`;

const HomePage = () => {
  const { ref: scrollRef, inView } = useInView();

  const { planets, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } = useGetPlanets();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  return (
    <>
      <Heading>Welcome Human!</Heading>
      <Info>Explore our planets and you can find incredible things. Enjoy!</Info>
      <Main>
        {(planets?.length === 0 && isLoading) && (
          <Loader>Loading...</Loader>
        )}
        {planets?.length > 0 && (
          <Planets 
            planets={planets}
          />
        )}
        <div ref={scrollRef}>
          {isFetchingNextPage && (
            <Loader>Loading more...</Loader>
          )}
        </div>
      </Main>
    </>
  );
}

export default HomePage;