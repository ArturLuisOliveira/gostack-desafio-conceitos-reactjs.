import React from "react";
import Repository from "./Repository";
import AddRepository from "./AddRepository";
import { useRepositories } from "../utils/hooks";

function Repositories() {
  const { repositories, addRepository, removeRepository } = useRepositories();
  return (
    <>
      <ul data-testid="repository-list">
        {repositories.map(({ id, title }) => (
          <Repository
            key={id}
            id={id}
            title={title}
            removeRepository={removeRepository}
          />
        ))}
      </ul>
      <AddRepository addRepository={addRepository} />
    </>
  );
}

export default Repositories;
