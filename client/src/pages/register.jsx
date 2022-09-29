import { Link } from "react-router-dom";
import * as React from "react";
import Api from "../services/api";

function Register() {
  const [name, setName] = React.useState();
  const [username, setUsername] = React.useState();
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();

  const handeSubmit = (event) => {
    event.preventDefault();

    Api.post("/users/register", {
      name,
      username,
      email,
      password,
    }).then((res) => console.log(res));
  };

  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>

      <form onSubmit={handeSubmit}>
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
          type="text"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password: </label>
        <input
          type="text"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}

export default Register;
