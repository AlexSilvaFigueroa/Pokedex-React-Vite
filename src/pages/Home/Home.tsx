import { useState, useEffect } from "react";
import { ContentList } from "@/components/ContentList";
import { Navbar } from "@/components/Navbar";
import { IPokemonsCollection } from "@/models";
import { getPokemonsCollection } from "@/services/adapter";
import { CircularProgress } from "@mui/material";

export const Home = () => {
  const [pokemonData, setPokemonData] = useState<IPokemonsCollection>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const pokemonsData = await getPokemonsCollection({ limit: 50, offset: 0 });
      if (pokemonsData) {
        setPokemonData(pokemonsData);
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <>
      <Navbar />
      {!loading && pokemonData ? <ContentList pokemonsData={pokemonData} /> : <CircularProgress />}
    </>
  );
};

export default Home;
