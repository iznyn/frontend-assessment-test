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

export const useGetPlanet = (url: string): IApiResults => {
  /**
   * getPlanet
   */
  const getPlanet = async () => {
		const res = await fetch(new URL(url));
		return res.json();
	};

  const { data, isLoading, refetch }  = useQuery(
    ['getPlanet', { url }],
    getPlanet,
    {
      onError: () => {},
      retry: 1,
    }
  );

  return {
    planet: data?.results || null,
    isLoading,
    refetch
  }
}