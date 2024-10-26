import { useState } from "react";
import { Button } from "./components/ui/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen w-full bg-background flex flex-col gap-6 justify-center items-center">
      <h1 className="text-5xl font-bold">DOOMINGO APP ENTRY</h1>

      <div className="flex flex-col items-center justify-center gap-2 w-full">
        count is {count}
        <Button
          className="max-w-xl"
          onClick={() => setCount((count) => count + 1)}
        >
          UP
        </Button>
        <Button
          onClick={() => setCount((count) => count - 1)}
          className="max-w-xl"
        >
          DOWN
        </Button>
      </div>
    </div>
  );
}

export default App;
