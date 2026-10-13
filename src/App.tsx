import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import Navigation from "./components/Navigation";

function App() {
  const basename = import.meta.env.BASE_URL.replace(/\/$/, "") || "/";

  return (
    <Router basename={basename}>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
