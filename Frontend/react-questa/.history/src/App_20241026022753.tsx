import "./App.css";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <Home />
    </>
  );
}

export default App;

/* // This might seem like "extra work":
type Tags = "all" | "react" | "nextjs" | /* ... */

// But it provides several benefits:
// 1. Autocomplete in your IDE
// 2. Catch errors at compile time instead of runtime
// 3. Better documentation for other developers
// 4. Refactoring becomes easier and safer */
