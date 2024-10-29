import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Navbar from "./pages/navbar/Navbar";
import ProjectDetails from "./pages/projectDetails/ProjectDetails";
import IssueDetails from "./pages/issueDetails/IssueDetails";
import Subscription from "./pages/subscription/Subscription";
import Auth from "./pages/auth/Auth";

function App() {
  return (
    <>
      {true ? (
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
            <Route
              path="/project/:projectId/issue/:issueId"
              element={<IssueDetails />}
            />
            <Route path="/upgrade-plan" element={<Subscription />} />
          </Routes>
        </div>
      ) : (
        <Auth />
      )}
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

/* About Your Doubt on "Too Many Types"
// GOOD: Create types for important data structures
interface Project {
  id: number;
  title: string;
  description: string;
}

// GOOD: Create types for limited sets of values (enums)
type Category = "frontend" | "backend" | "fullstack";

// NOT NECESSARY: Creating types for every string or number
// Don't do this:
type ProjectTitle = string;
type ProjectId = number;

// BAD: Over-typing simple things
// Don't do this:
type ButtonText = string;
type InputValue = string; */

//----------------------------------------------------------

/* Let's also improve the ProjectCard component:
// Define props interface for ProjectCard
interface ProjectCardProps {
  project: Project;
  onClick?: (project: Project) => void; // Optional click handler
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div onClick={() => onClick?.(project)}>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </div>
  );
}; */

//----------------------------------------------------------

/* Remember:
Create types for:

Complex data structures (interfaces)
Finite sets of values (union types)
Component props
API responses
State that holds complex data


Don't create types for:

Simple primitive values
Temporary variables
Internal implementation details
Things that don't need to be reused */
