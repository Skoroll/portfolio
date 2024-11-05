import React from "react";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Contact from "./pages/Contact/Contact";
import Works from "./pages/Work/Works";
import CV from "./pages/CV/CV";
import Who from "./pages/Who/Who"
import Admin from "./pages/Admin/Admin";
import Legal from "./pages/Legal/Legal";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WorkDetail from "./pages/WorksDetails/WorksDetails"; 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/works" element={<Works />} />
            <Route path="/works/:id" element={<WorkDetail />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/who" element={<Who />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/legal" element={<Legal />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
