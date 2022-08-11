import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavMenu from "./components/navbar/NavMenu";

import "./App.css";

import FooterMenu from "./components/footer/FooterMenu";
import Welcome from "./pages/Welcome";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Categories from "./pages/Categories";
import SingleCourse from "./pages/SingleCourse";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavMenu />
        <Routes>
          <Route exact path="/" element={<Welcome />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/categories" element={<Categories />}></Route>
          <Route exact path="/course" element={<SingleCourse />}></Route>
        </Routes>
        <FooterMenu />
      </BrowserRouter>
    </div>
  );
}

export default App;
