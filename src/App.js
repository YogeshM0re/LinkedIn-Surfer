// App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import SearchPage from "./Search/SearchPage";
import Login from "./Login/Login";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/search" element={<SearchPage />} />
          <Route path="/" element={<Login />} />
      
        </Routes>
      </Router>
    </div>
  );
}

export default App;
