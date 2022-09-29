import { Link, useNavigate } from "react-router-dom";
import * as React from "react";
import Api from "../services/api";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = React.useState();
  const [password, setPassword] = React.useState();
  const [token, setToken] = React.useState();

  React.useEffect(() => {
    const tokenLocal = localStorage.getItem("Nekot");
    setToken(tokenLocal);

    if (token != undefined) {
      navigate("/dashboard");
    }
  }, []);

  const handeSubmit = async (event) => {
    event.preventDefault();
    try {
      await Api.post("/users/login", {
        username,
        password,
      }).then((res) => {
        setToken(res.data.token);
      });
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  React.useEffect(() => {
    if (token != undefined) {
      navigate("/dashboard");
      localStorage.setItem("Nekot", token);
    }
  }, [token]);

  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>

      <form onSubmit={handeSubmit}>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          id="username"
          onChange={(e) => setUsername(e.target.value)}
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

export default Login;
