import { useState, useEffect, useCallback } from "react";
import { list, create, remove } from "../services/api";

export const useRepositories = () => {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    list()
      .then((res) => setRepositories(res.data))
      .catch(console.info);
  }, []);

  const removeRepository = useCallback(
    (id) => {
      remove(id)
        .then((res) => {
          setRepositories(
            repositories.filter((repository) => repository.id !== id)
          );
        })
        .catch(console.error);
    },
    [repositories]
  );

  const addRepository = useCallback(
    (repository) => {
      create(repository)
        .then((res) => {
          setRepositories([...repositories, res.data]);
        })
        .catch(console.error);
    },
    [repositories]
  );

  return { repositories, removeRepository, addRepository };
};
