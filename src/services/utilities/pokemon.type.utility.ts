import { types as typesCollection } from "@/data";

export const pokemonTypeColor = (pokemonType: string) => {
  switch (pokemonType) {
    case "normal":
      return typesCollection.normal;
    case "fire":
      return typesCollection.fire;
    case "water":
      return typesCollection.water;
    case "electric":
      return typesCollection.electric;
    case "grass":
      return typesCollection.grass;
    case "ice":
      return typesCollection.ice;
    case "fighting":
      return typesCollection.fighting;
    case "poison":
      return typesCollection.poison;
    case "ground":
      return typesCollection.ground;
    case "flying":
      return typesCollection.flying;
    case "psychic":
      return typesCollection.psychic;
    case "bug":
      return typesCollection.bug;
    case "rock":
      return typesCollection.rock;
    case "ghost":
      return typesCollection.ghost;
    case "dragon ":
      return typesCollection.dragon;
    case "dark":
      return typesCollection.dark;
    case "steel":
      return typesCollection.steel;
    case "fairy":
      return typesCollection.fairy;

    default:
      return typesCollection.default;
  }
};
