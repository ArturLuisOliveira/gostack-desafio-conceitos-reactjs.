import React from "react";

function Repository({ title, id, removeRepository }) {
  return (
    <li>
      {title}
      <button onClick={() => removeRepository(id)}>Remover</button>
    </li>
  );
}

export default Repository;
