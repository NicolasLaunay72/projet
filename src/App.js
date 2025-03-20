import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css"
import Main from "./pages/home/main";
import News from "./pages/news/news";
import Main2 from "./pages/installer/installer";
import Forum from "./pages/forum/forum";
import Support from "./pages/support/support";



function App(){
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/news" element={<News />} />
        <Route path="/installer" element={<Main2 />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </Router>
  );
}
export default App;