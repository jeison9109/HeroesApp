import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { getHeroById } from "../selectors/getHeroById";

export const HeroeScreen = () => {
  const { heroeId } = useParams();

  const hero = getHeroById(heroeId);

  if (!hero) {
    return <Redirect to="/" />;
  }

  const { superheroe, publisher, alter_ego, first_appeareance, characters } =
    hero;

  return (
    <div>
      <h1>Heroes Screen</h1>
    </div>
  );
};
