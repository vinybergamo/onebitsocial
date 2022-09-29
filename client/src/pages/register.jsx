import { Link, useNavigate } from "react-router-dom";
import * as React from "react";
import Api from "../services/api";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = React.useState();
  const [username, setUsername] = React.useState();
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const [ConfirmPassword, setConfirmPassword] = React.useState();

  const handleSubmit = async (event) => {
    event.preventDefault();

    await Api.post("/user/register", {
      name,
      username,
      email,
      password,
    }).then((res) => console.log(res));

    await Api.post("/user/login", {
      username,
      password,
    }).then((res) => {
      localStorage.setItem("Nekot", res.data.token);
      navigate("/dashboard");
    });
  };

  const handleSubmitFail = async (event) => {
    event.preventDefault();
    alert("Password don't match");
  };

  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>

      <form
        onSubmit={password != ConfirmPassword ? handleSubmitFail : handleSubmit}
      >
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          id="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="confirm-password">Confirm password: </label>
        <input
          type="password"
          id="confirm-password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}

export default Register;
