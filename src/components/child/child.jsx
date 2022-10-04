import React, { useEffect } from "react";

function Child({ updateParent }) {
  return (
    <div class="card">
      <p>Child</p>
      <button
        class="button"
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
