import React, { useId } from "react";
import { Card } from "@/components/Card";
import { LayoutContainer } from "@/styled-components";
import { IPokemon, IPokemonsCollection } from "@/models";

export const ContentList: React.FC<{ pokemonsData: IPokemonsCollection }> = ({ pokemonsData }) => {
  const id = useId();

  return (
    <>
      <LayoutContainer>
        {pokemonsData?.results.map((p: IPokemon) => (
          <Card key={p.name + id} name={p.name} url={p.url} />
        ))}
      </LayoutContainer>
    </>
  );
};

export default ContentList;
