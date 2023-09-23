/**
 * Hook for get planets
 */
import { useInfiniteQuery, UseQueryResult } from 'react-query';
import { IPlanet } from '../types';

interface IApiProps {
  page: number;
  size: number;
}

interface IApiResults {
  planets: IPlanet[];
  isLoading: boolean;
  refetch: (options: { throwOnError: boolean, cancelRefetch: boolean }) => Promise<UseQueryResult>;
}

const defaultProps = {
  page: 1,
  size: 10,
}

const endpoint = 'https://swapi.dev/api/planets';

export const useGetPlanets = (config: IApiProps = defaultProps): IApiResults => {
  const { data, isLoading, refetch }  = useInfiniteQuery(
    ['getPlanets', { ...config }],
    async ({ pageParam = 1 }) => {
      if (pageParam && pageParam !== 0) {
        const res = await fetch(`${endpoint}?page=${pageParam}`);
        return res.json();
      }
      return null;
    },
    {
      getNextPageParam: (lastPage) => {
        if (lastPage?.next) {
          const nextUrl = new URL(lastPage.next);
          const nextPage = nextUrl.searchParams.get("page") || 0;
          return nextPage;
        }
        return 0;
      },
      onError: () => {},
      retry: 1,
    }
  );

  return {
    planets: data?.pages || [],
    isLoading,
    refetch
  }
}