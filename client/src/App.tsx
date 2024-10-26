import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>DOOMINGO APP ENTRY</h1>
      <div className="card">
        count is {count}
        <button onClick={() => setCount((count) => count + 1)}>UP</button>
        <button onClick={() => setCount((count) => count + 1)}>DOWN</button>
      </div>
    </>
  );
}

export default App;
