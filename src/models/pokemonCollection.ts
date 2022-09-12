export interface IPokemonsCollection {
  count: number;
  next: null;
  previous: null;
  results: IPokemon[];
}

export interface IPokemon {
  name: string;
  url: string;
}
