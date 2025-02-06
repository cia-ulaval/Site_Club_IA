import React, { useEffect } from "react";

useEffect(() => {
  window.scrollTo(0, 0);
}, []);

function Lenia() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Lenia</h1>
      <p>Welcome to the Lenia page.</p>
    </div>
  );
}

export default Lenia;
