import { useEffect, useState, useId } from "react";
import {
  Button,
  Card as MuiCard,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Skeleton,
  Typography,
} from "@mui/material";
import { getPokemonByParam } from "@/services/adapter";
import { IBasePokemonData, Species, Type } from "@/models";
import { capitalizeFirstLetter } from "@/utilities";
import { ContentLayout } from "@/styled-components";

interface CardInteface {
  name: string;
  url: string;
}

const Card: React.FC<CardInteface> = ({ name, url }) => {
  const id = useId();
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState<IBasePokemonData>();

  useEffect(() => {
    const getData = async () => {
      const pokemonData = await getPokemonByParam({ param: name });
      if (pokemonData) {
        setPokemon(pokemonData);
        setLoading(false);
      }
    };
    getData();
  }, []);

  const handleShowModal = (pokemonUrl: string) => {
    console.log(pokemonUrl);
    // window.open(pokemonUrl, "_blank");
  };

  return (
    <>
      {!loading && pokemon !== undefined ? (
        <MuiCard
          sx={{
            height: "auto",
            minWidth: 250,
            padding: 1,
            marginBottom: 5,
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          }}
        >
          <CardActionArea>
            <CardMedia component="img" src={pokemon?.sprites.front_default} />

            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography color="text.secondary" variant="subtitle1" align="center" sx={{ paddingBottom: 2 }}>
                {capitalizeFirstLetter(name)}
              </Typography>
              <ContentLayout>
                {pokemon?.pokemonTypes.map((t: Type, index: number) => {
                  return (
                    <Chip
                      color="primary"
                      key={index + id}
                      variant="outlined"
                      size="small"
                      label={t.type.name}
                      sx={{
                        padding: "4px",
                        "&.MuiChip-colorPrimary": {
                          color: t.color,
                          borderColor: t.color,
                        },
                      }}
                    />
                  );
                })}
              </ContentLayout>
            </CardContent>
          </CardActionArea>
          <CardActions>
            {/* <Button size="small" color="primary" onClick={() => handleShowModal(url)}>
              See
            </Button> */}
          </CardActions>
        </MuiCard>
      ) : (
        <Skeleton height={350} width={250} variant="rounded" />
      )}
    </>
  );
};

export default Card;
