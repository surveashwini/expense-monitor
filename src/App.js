import Dashboard from "./components/Dashboard/Dashboard";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Dashboard></Dashboard>
      </ErrorBoundary>
    </div>
  );
}

export default App;
