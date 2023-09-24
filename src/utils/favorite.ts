import { IFavorite, IPlanet } from '../types';

export const STORE_KEY = 'PLANET_FAVORITES';

/**
 * getFavorites
 */
export const getFavorites = (): IFavorite[] => {
  let items = [] as IFavorite[];
  const storeData = localStorage.getItem(STORE_KEY);
  if (storeData) {
    items = JSON.parse(storeData);
  }
  return items;
}

/**
 * setFavorites
 */
export const setFavorites = async (items: IFavorite[]) => {
  localStorage.setItem(STORE_KEY, JSON.stringify(items));
}

/**
 * addFavorite
 */
export const addFavorite = async (item: IPlanet) => {
  const favData = convertPlanetToFavorite(item);
  const storeItems = getFavorites();
  const newItems = [...storeItems];
  if (!checkFavorite(item, newItems)) {
    newItems.push(favData);
  }
  localStorage.setItem(STORE_KEY, JSON.stringify(newItems));
}

/**
 * deleteFavorite
 */
export const deleteFavorite = async (item: IFavorite) => {
  const storeItems = getFavorites();
  const newItems = storeItems.filter((check) => check.id === item.id);
  localStorage.setItem(STORE_KEY, JSON.stringify(newItems));
}

/**
 * clearFavorites
 */
export const clearFavorites = async (item: IFavorite) => {
  localStorage.setItem(STORE_KEY, JSON.stringify([]));
}

/**
 * checkFavorite
 */
export const checkFavorite = (item: IPlanet, itemsToCheck?: IFavorite[]) => {
  const favData = convertPlanetToFavorite(item);
  const currentItems = itemsToCheck || getFavorites();
  const foundItem = currentItems.find((check) => check?.id === favData?.id);
  return !!foundItem;
}

/**
 * convertPlanetToFavorite
 */
export const convertPlanetToFavorite = (item: IPlanet): IFavorite => {
  const itemId = parseInt(item.url.replace('https://swapi.dev/api/planets/', ''));
  return {
    id: itemId,
    name: item.name,
    climate: item.climate,
    diameter: item.diameter,
    population: item.population,
    created: new Date().toDateString(),
  };
}