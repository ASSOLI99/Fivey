import axios from "axios";
const Login = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    if (!e.target[0].value == "") {
      const api = {
        email: e.target[0].value,
        password: e.target[1].value,
      };
      axios.post("http://127.0.0.1:8000/api/login", api).then((res) => {
        localStorage.setItem("token", res.data.token);
        console.log(localStorage.getItem("token", res.data.token));
        // window.location.href = "http://localhost:5173";
      });
    }
  };
  return (
    <form method="POST" onSubmit={submitHandler} style={{ marginTop: "20px" }}>
      <input type="email" placeholder="Email" name="email" />
      <br />
      <input type="password" placeholder="Password" name="password" />
      <br />
      <button type="submit">Go</button>
    </form>
  );
};
export default Login;
