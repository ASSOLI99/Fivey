import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store/auth-slice";
import { userActions } from "./store/user-slice";
import { useEffect } from "react";
import axios from "axios";
//user pages
import NavMenu from "./components/navbar/NavMenu";
import FooterMenu from "./components/footer/FooterMenu";
import Welcome from "./pages/Welcome";
import About from "./pages/About";
import Categories from "./pages/Categories";
import SingleCourse from "./pages/SingleCourse";
import Cart from "./pages/Cart";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
//Admin pages
import AdminWelcome from "./Admin/pages/Welcome";
import AdminNavMenu from "./Admin/components/navbar/NavMenu";
import AdminCategories from "./Admin/components/categories/Categories";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  console.log(useSelector((state) => state.loggedIn.loggedIn));
  const role = useSelector((state) => state.user.role);
  console.log(useSelector((state) => state.user));
  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get("http://127.0.0.1:8000/api/user", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        dispatch(authActions.loggingIn());
        console.log(res.data);
        dispatch(userActions.setId(res.data.id));
        dispatch(userActions.setRole(res.data.role));
        dispatch(userActions.setName(res.data.name));
        dispatch(userActions.setUserName(res.data.userName));
        dispatch(userActions.setEmail(res.data.email));
        dispatch(userActions.setImage(res.data.image));
      });
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        {role === 0 && (
          <>
            <NavMenu />
            <Routes>
              <Route exact path={"/"} element={<Welcome />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/categories" element={<Categories />} />
              <Route exact path="/course" element={<SingleCourse />} />
              <Route exact path="/cart" element={<Cart />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/register" element={<Register />} />
            </Routes>
          </>
        )}
        {role === 1 && (
          <>
            <AdminNavMenu />
            <Routes>
              <Route exact path={"/Admin"} element={<AdminWelcome />} />
              <Route
                exact
                path={"/Admin/category"}
                element={<AdminCategories />}
              />
            </Routes>
            <div className="helper d-block d-md-none"></div>
          </>
        )}
        {role === 0 && <FooterMenu />}
      </BrowserRouter>
    </div>
  );
}

export default App;
