import { IBasePokemonData, Type } from "@/models";
import { pokemonTypeColor } from "../utilities";

const baseUrl = "https://pokeapi.co/api/v2";

const requestConfig = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

export const getPokemonsCollection = async ({ limit = 150, offset = 0 }) => {
  try {
    const response = await fetch(`${baseUrl}/pokemon?limit=${limit}&offset=${offset}`, requestConfig);
    if (response.ok) {
      const result = await response.json();
      return result;
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
