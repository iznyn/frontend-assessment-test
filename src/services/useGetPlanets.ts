/**
 * Hook for get planets
 */
import { useInfiniteQuery, FetchNextPageOptions, UseInfiniteQueryResult } from 'react-query';
import { IApiPlanetsResponse } from '../types';

interface IApiProps {
  page: number;
  size: number;
}

interface IResults {
  planets: IApiPlanetsResponse[];
  isLoading: boolean;
  isFetchingNextPage: boolean;
  hasNextPage: boolean | undefined;
  fetchNextPage: (options?: FetchNextPageOptions) => Promise<UseInfiniteQueryResult>;
}

const defaultProps = {
  page: 1,
  size: 10,
}

const endpoint = 'https://swapi.dev/api/planets';

export const useGetPlanets = (config: IApiProps = defaultProps): IResults => {
  const { data, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage }  = useInfiniteQuery(
    ['getPlanets', { ...config }],
    async ({ pageParam = 1 }): Promise<IApiPlanetsResponse> => {
      const res = await fetch(`${endpoint}?page=${pageParam}`);
      return res.json();
    },
    {
      getNextPageParam: (lastPage) => {
        if (lastPage?.next) {
          const nextUrl = new URL(lastPage.next);
          const nextPage = nextUrl.searchParams.get("page") || null;
          return nextPage;
        }
        return null;
      },
      onError: () => {},
      retry: 1,
    }
  );

  return {
    planets: data?.pages || [],
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  }
}