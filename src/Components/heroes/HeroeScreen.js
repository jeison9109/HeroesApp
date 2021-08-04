import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { getHeroById } from "../selectors/getHeroById";

export const HeroeScreen = ({ history }) => {
  const { heroeId } = useParams();

  const hero = getHeroById(heroeId);

  if (!hero) {
    return <Redirect to="/" />;
  }

  const handleReturn = () => {
    if (history.legth <= 2) {
      history.push("/");
    } else {
      history.goBack();
    }
  };

  const { superheroe, publisher, alter_ego, first_appeareance, characters } =
    hero;

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`../assets/heroes/heroes/${heroeId}.jpg`}
          alt={superheroe}
          className="img-thumbnail"
        />
      </div>

      <div className="col-8">
        <h3>{superheroe}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>alter_ego:</b>
            {alter_ego}
          </li>
          <li className="list-group-item">
            <b>publisher:</b>
            {publisher}
          </li>
          <li className="list-group-item">
            <b>First appeareance:</b>
            {first_appeareance}
          </li>
        </ul>
        <h5>characters</h5>
        <p>{characters}</p>
        <button className="btn btn-outline-info" onClick={handleReturn}>
          Return
        </button>
      </div>
    </div>
  );
};
