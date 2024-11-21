import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Project from "./pages/Project";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Projects" element={<Project />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
