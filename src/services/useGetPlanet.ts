/**
 * Hook for get planet
 */
import { useQuery, UseQueryResult } from 'react-query';
import { IPlanet } from '../types';

interface IApiResults {
  planet: IPlanet;
  isLoading: boolean;
  refetch: (options: { throwOnError: boolean, cancelRefetch: boolean }) => Promise<UseQueryResult>;
}

const endpoint = 'https://swapi.dev/api/planets';

export const useGetPlanet = (id: string): IApiResults => {
  /**
   * getPlanet
   */
  const getPlanet = async () => {
		const res = await fetch(`${endpoint}/${id}`);
		return res.json();
	};

  const { data, isLoading, refetch }  = useQuery(
    ['getPlanet', { id }],
    getPlanet,
    {
      onError: () => {},
      retry: 1,
    }
  );

  return {
    planet: data,
    isLoading,
    refetch
  }
}