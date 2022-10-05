import React, { useState, useEffect } from "react";
import Child from "../child/child";

function Parent() {
  const [quote, setQuote] = useState("I need to be uptaded from my child");

  const fetchData = async () => {
    const data = await fetch(
      "https://programming-quotes-api.herokuapp.com/quotes/random"
    );
    const response = await data.json();
    setQuote(response.en);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="card">
        <p>Parent</p>
        <textarea className="textArea" value={quote} />
      </div>
      <Child updateParent={fetchData} />
    </div>
  );
}

export default Parent;
