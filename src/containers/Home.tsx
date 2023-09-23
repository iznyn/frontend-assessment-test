/**
 * Homepage views
 */
import { useGetPlanets } from '../services/useGetPlanets';

const HomePage = () => {
  const { planets, isLoading } = useGetPlanets();

  console.log('planets', planets)
  console.log('isLoading', isLoading)


  return (
    <div className="home">
    </div>
  );
}

export default HomePage;