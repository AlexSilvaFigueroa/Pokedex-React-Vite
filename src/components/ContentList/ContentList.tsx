import React, { useId } from "react";
import { Card } from "@/components/Card";
import { LayoutContainer } from "@/styled-components";
import { IPokemon } from "@/models";

export const ContentList: React.FC<{ pokemonsData: IPokemon[] }> = ({ pokemonsData }) => {
  const id = useId();
  const load = () => console.log("hiii");

  return (
    <>
      <LayoutContainer>
        {pokemonsData.map((p: IPokemon) => (
          <Card key={p.name + id} name={p.name} url={p.url} />
        ))}
      </LayoutContainer>
    </>
  );
};

export default ContentList;
