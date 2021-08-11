import React, { useMemo } from "react";
import { useLocation } from "react-router-dom";
//import { heroes } from "../data/heroes";
import { HeroCard } from "../heroes/HeroCard";
import { useForm } from "../hooks/useForm";
import queryString from "query-string";
import { getHeroesByName } from "../selectors/getHeroesByName";

export const SearchScreen = ({ history }) => {
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);

  const [formValues, handleInputChange] = useForm({
    searchText: q,
  });

  const { searchText } = formValues;

  const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${searchText}`);
  };

  return (
    <div>
      <h1>Search Screen</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <hr />

          <form onSubmit={handleSearch}>
            <input
              autoComplete="off"
              type="text"
              placeholder="Encuentra tu Heroe"
              className="form-control"
              name="searchText"
              value={searchText}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="btn m-1 btn-block btn-outline-primary"
            >
              Search.....
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Result</h4>
          <hr />
          {q === "" && <div className="alert alert-info">Search a Hero</div>}

          {q !== "" && heroesFiltered.length == 0 && (
            <div className="alert alert-danger">Heroe No identificado{q}</div>
          )}

          {heroesFiltered.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </div>
  );
};
