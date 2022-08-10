import { BrowserRouter } from "react-router-dom";
import NavMenu from "./components/navbar/NavMenu";

import "./App.css";

import FooterMenu from "./components/footer/FooterMenu";
import Welcome from "./pages/Welcome";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavMenu />
        <Welcome />
        <FooterMenu />
      </BrowserRouter>
    </div>
  );
}

export default App;
