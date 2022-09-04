import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store/auth-slice";
import { userActions } from "./store/user-slice";
import { useEffect } from "react";
import axios from "axios";
import "./App.css";
import "./Admin/components/categories/pagination.css";
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
import Profile from "./components/profile/Profile";
import EditProfile from "./components/profile/EditProfile";
import Create from "./components/createCourse/Create";
import SingleCourses from "./components/createCourse/SingleCourse";
import MyCourses from "./components/createCourse/myCourses";
import Videos from "./components/createCourse/Videos";
import SingleVideo from "./pages/SingleVideo";
import UserProfile from "./components/profile/UserProfile";
//Admin pages
import AdminWelcome from "./Admin/pages/Welcome";
import AdminNavMenu from "./Admin/components/navbar/NavMenu";
import AdminCategories from "./Admin/components/categories/Categories";
import SingleCat from "./Admin/components/categories/SingleCat";
import AdminCourses from "./Admin/components/courses/Courses";
import AdminSingleCourse from "./Admin/components/courses/SingleCourse";
import AdminUsers from "./Admin/components/users/Users";
import AdminSingleUser from "./Admin/components/users/SingleUser";
import AdminUserCourses from "./Admin/components/users/SingleCourses";
import Other from "./Admin/components/other/Other";
import Code from "./Admin/components/code/Code";
import UserCourses from "./components/profile/UserCourses";

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
        dispatch(userActions.setId(res.data.id));
        dispatch(userActions.setRole(res.data.role));
        dispatch(userActions.setName(res.data.name));
        dispatch(userActions.setUserName(res.data.userName));
        dispatch(userActions.setEmail(res.data.email));
        dispatch(userActions.setImage(res.data.image));
        dispatch(userActions.setField(res.data.field));
        dispatch(userActions.setPhone(res.data.phone));
        dispatch(userActions.setFacebook(res.data.facebook));
        dispatch(userActions.setYoutube(res.data.youtube));
        dispatch(userActions.setLinkedin(res.data.linkedin));
        dispatch(userActions.setDescription(res.data.description));
        dispatch(userActions.setUserName(res.data.userName));
        console.log(res.data);
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
                <Route path={"category"}>
                  <Route index element={<AdminCategories />} />
                  <Route path={":id"} element={<SingleCat />} />
                </Route>
                <Route path={"courses"}>
                  <Route index element={<AdminCourses />} />
                  <Route path={":id"} element={<AdminSingleCourse />} />
                </Route>
                <Route path={"users"}>
                  <Route index element={<AdminUsers />} />
                  <Route path={":id"} element={<AdminSingleUser />} />
                  <Route path={":user/:id"} element={<AdminUserCourses />} />
                </Route>
                <Route path="other" element={<Other />} />
                <Route path="codes" element={<Code />} />
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
              <Route
                exact
                path="/course/:course_id/:video_id"
                element={<SingleVideo />}
              />
              <Route exact path={"/profile/:id"} element={<UserProfile />} />
              <Route
                exact
                path={"profile/:id/courses"}
                element={<UserCourses />}
              />

              {!role && (
                <>
                  <Route exact path="/login" element={<Login />} />
                  <Route exact path="/register" element={<Register />} />
                </>
              )}
              {role && (
                <>
                  <Route exact path="/cart" element={<Cart />} />
                  <Route exact path={"profile"}>
                    <Route exact index element={<Profile />} />
                    <Route exact path={"edit"} element={<EditProfile />} />
                  </Route>
                </>
              )}
              {role == 2 && (
                <>
                  <Route exact path={"Courses"}>
                    <Route exact path={"myCourses"} element={<MyCourses />} />
                    <Route
                      exact
                      path={"myCourses/:id"}
                      element={<SingleCourses />}
                    />
                    <Route
                      path={":myCourses/:id/videos"}
                      element={<Videos />}
                    />

                    <Route exact path={"create"} element={<Create />} />
                  </Route>
                </>
              )}
            </Routes>
            <FooterMenu />
          </>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
