import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store/auth-slice";
import { useEffect } from "react";
import axios from "axios";
import NavMenu from "./components/navbar/NavMenu";

import FooterMenu from "./components/footer/FooterMenu";
import Welcome from "./pages/Welcome";
import About from "./pages/About";
import Categories from "./pages/Categories";
import SingleCourse from "./pages/SingleCourse";
import Cart from "./pages/Cart";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  console.log(useSelector((state) => state.loggedIn.loggedIn));
  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get("http://127.0.0.1:8000/api/user", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res);
        dispatch(authActions.loggingIn());
      });
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <NavMenu />
        <Routes>
          <Route exact path="/" element={<Welcome />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/categories" element={<Categories />}></Route>
          <Route exact path="/course" element={<SingleCourse />}></Route>
          <Route exact path="/cart" element={<Cart />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
        </Routes>
        <FooterMenu />
      </BrowserRouter>
    </div>
  );
}

export default App;
