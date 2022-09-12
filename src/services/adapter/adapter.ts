import { Type } from "@/models";
import { pokemonTypeColor } from "../utilities";

const baseUrl = "https://pokeapi.co/api/v2";

const requestConfig = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

const INITIAL_PAGE = 0;

export const getPokemonsCollection = async ({ limit = 10, page = INITIAL_PAGE }) => {
  try {
    const response = await fetch(`${baseUrl}/pokemon?limit=${limit}&offset=${page * limit}}`, requestConfig);
    if (response.ok) {
      const result = await response.json();
      return result.results;
    }
  } catch (err) {
    console.error(err);
  }
};

export const getPokemonByParam = async ({ param = "charizard" }) => {
  try {
    const response = await fetch(`${baseUrl}/pokemon/${param}`, requestConfig);
    if (response.ok) {
      const result = await response.json();
      const parsedTypes = result.types.map((t: Type) => {
        const parsedData = { ...t, color: pokemonTypeColor(t.type.name) };
        return parsedData;
      });
      return { pokemonTypes: parsedTypes, sprites: result.sprites };
    }
  } catch (err) {
    console.error(err);
  }
};
