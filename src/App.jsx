import { useState } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1>My SPA</h1>

      <Navbar setPage={setPage} />
      <Dashboard page={page} />

      {page === "home" && <Home />}
      {page === "about" && <About />}
      {page === "contact" && <Contact />}
    </div>
  );
}

export default App;
