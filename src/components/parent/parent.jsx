import React from "react";
import Child from "../child/child";

function Parent() {
  const updateParent = () => {};

  return (
    <div>
      <div class="card">
        <p>Parent</p>
        <input class="input" value="I need to be uptaded from my child" />
      </div>
      <Child updateParent={updateParent} />
    </div>
  );
}

export default Parent;
