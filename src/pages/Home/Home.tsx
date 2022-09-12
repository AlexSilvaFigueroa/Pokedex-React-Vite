import { useState, useEffect } from "react";
import { ContentList } from "@/components/ContentList";
import { Navbar } from "@/components/Navbar";
import { IPokemon } from "@/models";
import { getPokemonsCollection } from "@/services/adapter";
import { Button, CircularProgress } from "@mui/material";

export const Home = () => {
  const DEFAULT_RESULTS = 15;
  const [pokemonData, setPokemonData] = useState<IPokemon[]>();
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState<number>(0);

  const handleNextPage = () => setPage((prevPage) => prevPage + 1);

  useEffect(() => {
    const getData = async () => {
      const pokemonsData = await getPokemonsCollection({ limit: DEFAULT_RESULTS, page: 0 });
      if (pokemonsData) {
        setPokemonData(pokemonsData);
        setLoading(false);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    const getNextPageData = async () => {
      const pokemonsData = await getPokemonsCollection({ limit: DEFAULT_RESULTS, page: page });
      if (pokemonsData && page !== 0) {
        // TODO:fix this any
        setPokemonData((prevPokemonData: any) => prevPokemonData.concat(pokemonsData));
        setLoading(false);
      }
    };
    getNextPageData();
  }, [page]);

  return (
    <>
      <Navbar />
      {!loading && pokemonData ? <ContentList pokemonsData={pokemonData} /> : <CircularProgress />}
      <Button onClick={handleNextPage} color="primary" size="large" variant="contained" fullWidth>
        Show more
      </Button>
    </>
  );
};

export default Home;
