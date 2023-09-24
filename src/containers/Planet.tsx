/**
 * Planet detail page
 */
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { checkFavorite } from '../utils/favorite';
import { useGetPlanet } from '../services/useGetPlanet';
import { MainInfo, BtnFavorite } from '../components/Planet';

const Wrapper = styled.div`
  padding: 12px 0;
`;

const Bottom = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
`;

const Loading = styled.div`
  margin-top: 16px;
  font-size: 14px;
  text-transform: uppercase;
  color: #777777;
  text-align: center;
`;

const DetailWrapper = styled.div`
  position: relative;
`;

const BackButton = styled(Link)`
  font-size: 12px;
  font-weight: 600;
  text-decoration: underline;
  text-transform: uppercase;
  color: #777777;
  margin-left: 10px;
`;

const PlanetPage = () => {
  const { id } = useParams();
  const { planet, isLoading } = useGetPlanet(id as string);

  return (
    <Wrapper>
      {isLoading ? (
        <Loading>Loading content...</Loading>
      ) : (
        <DetailWrapper>
          {planet && (
            <>
              <MainInfo planet={planet} />
              <Bottom>
                <BackButton to="/">
                  Back
                </BackButton>
                <BtnFavorite 
                  planet={planet} 
                  disabled={checkFavorite(planet)}
                />
              </Bottom>
            </>
          )}
        </DetailWrapper>
      )}
    </Wrapper>
  );
}

export default PlanetPage;