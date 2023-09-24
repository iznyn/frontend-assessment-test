export interface IIconProps {
  size?: number;
  color?: string;
}

export interface IPlanet {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  created: string;
  url: string;
  residents: string[];
  films: string[];
}

export interface IFavorite {
  id: number;
  name: string;
  diameter: string;
  climate: string;
  population: string;
  created: string;
}

export interface IApiPlanetsResponse {
  count: number;
  next: string;
  previous: string;
  results: IPlanet[];
}
