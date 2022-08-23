import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store/auth-slice";
import { userActions } from "./store/user-slice";
import { useEffect } from "react";
import axios from "axios";
//user pages
import "./Admin/components/categories/pagination.css";
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
import SingleCat from "./Admin/components/categories/SingleCat";
import AdminCourses from "./Admin/components/courses/Courses";
import AdminSingleCourse from "./Admin/components/courses/SingleCourse";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const role = useSelector((state) => state.user.role);
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
        {role === 0 ? (
          <>
            <AdminNavMenu />
            <Routes>
              <Route path={"/Admin"}>
                <Route index element={<AdminWelcome />} />
                {/* element={<AdminWelcome />} */}
                {/* element={<AdminCategories />} */}
                <Route path={"category"}>
                  <Route index element={<AdminCategories />} />
                  <Route path={":id"} element={<SingleCat />} />
                </Route>
                <Route path={"courses"}>
                  <Route index element={<AdminCourses />} />
                  <Route path={":id"} element={<AdminSingleCourse />} />
                </Route>
              </Route>
            </Routes>
            <div className="helper d-block d-md-none"></div>
          </>
        ) : (
          <>
            <NavMenu />
            <Routes>
              <Route exact path={"/"} element={<Welcome />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/categories" element={<Categories />} />
              <Route exact path="/course/:id" element={<SingleCourse />} />
              <Route exact path="/cart" element={<Cart />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/register" element={<Register />} />
            </Routes>
            <FooterMenu />
          </>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
