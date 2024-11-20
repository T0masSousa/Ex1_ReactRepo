import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import { TodoProvider } from "./ToDoContext";

// COMPONENTS
import Home from "./Home";
import Ex1 from "./Ex1";
import Ex2 from "./Ex2";
import Ex3 from "./Ex3";
import Ex4 from "./Ex4";
import Ex5 from "./Ex5";

function App() {
  return (
    <TodoProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="ex1" element={<Ex1 />} />
          <Route path="ex2" element={<Ex2 />} />
          <Route path="ex3" element={<Ex3 />} />
          <Route path="ex4" element={<Ex4 />} />
          <Route path="ex5" element={<Ex5 />} />
        </Routes>
      </Router>
    </TodoProvider>
  );
}

export default App;
