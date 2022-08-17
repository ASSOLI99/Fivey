import axios from "axios";

const Register = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    if (!e.target[0].value == "") {
      const api = {
        name: e.target[0].value,
        email: e.target[1].value,
        password: e.target[2].value,
      };
      axios.post("http://127.0.0.1:8000/api/register", api).then(() => {
        window.location.href = "http://localhost:5173/login";
      });
    }
  };
  return (
    <form method="POST" onSubmit={submitHandler} style={{ marginTop: "20px" }}>
      <input type="text" placeholder="Name" name="name" />
      <br />
      <input type="email" placeholder="Email" name="email" />
      <br />
      <input type="password" placeholder="Password" name="password" />
      <br />
      <button type="submit">Go</button>
    </form>
  );
};
export default Register;
