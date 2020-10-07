import React from "react";

function AddRepository({ addRepository }) {
  return (
    <button
      onClick={() =>
        addRepository({
          url: "https://github.com/Rocketseat/umbriel",
          title: "Umbriel",
          techs: ["Node", "Express", "TypeScript"],
        })
      }
    >
      Adicionar
    </button>
  );
}

export default AddRepository;
