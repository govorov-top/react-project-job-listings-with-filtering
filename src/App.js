import { FilterPanel } from "./featurers/Filter/FilterPanel";
import { JobList } from "./featurers/Positions/JobList";
import { TheHeader } from "./components/TheHeader";

function App() {
  return (
    <>
      <TheHeader />
      <div className="container">
        <FilterPanel />
        <JobList />
      </div>
    </>
  );
}

export default App;
