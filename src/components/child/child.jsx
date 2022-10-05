import React, { useEffect } from "react";

function Child({ updateParent }) {
  return (
    <div className="card">
      <p>Child</p>
      <button
        className="button"
        onClick={() => {
          updateParent();
        }}
      >
        Change Parent Value
      </button>
    </div>
  );
}

export default Child;
