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

/* Why Type Definitions Are Important:
 // This might seem like "extra work":
type Tags = "all" | "react" | "nextjs" | /* ... */

// But it provides several benefits:
// 1. Autocomplete in your IDE
// 2. Catch errors at compile time instead of runtime
// 3. Better documentation for other developers
// 4. Refactoring becomes easier and safer */
//----------------------------------------------------------
/* Event Handling in TypeScript:
// Instead of just (e) => {...}
// We specify the event type:
const handleSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
  setKeyword(e.target.value);
};

// This helps because:
// 1. You get proper autocomplete for event properties
// 2. Prevents errors like trying to access non-existent properties
// 3. Makes it clear what kind of event this handler expects */

//----------------------------------------------------------
/* State Management:
// Without type:
const [keyword, setKeyword] = useState("");

// With type:
const [keyword, setKeyword] = useState<string>("");

// For more complex data:
const [projects, setProjects] = useState<Project[]>([]);

// The benefits:
// 1. TypeScript knows what type of data can be stored in state
// 2. Prevents accidentally setting wrong types
// 3. Better IDE support */

//----------------------------------------------------------
