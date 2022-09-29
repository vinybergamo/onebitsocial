import { Link, useNavigate } from "react-router-dom";
import * as React from "react";
import Api from "../services/api";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = React.useState();
  const [password, setPassword] = React.useState();
  const [nekot, setNekot] = React.useState();

  React.useEffect(() => {
    const getNekot = localStorage.getItem("Nekot");
    setNekot(getNekot);

    if (nekot != undefined) {
      navigate("/dashboard");
    }
  }, []);

  const handeSubmit = async (event) => {
    event.preventDefault();
    try {
      await Api.post("/user/login", {
        username,
        password,
      }).then((res) => {
        setNekot(res.data.token);
      });
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  React.useEffect(() => {
    if (nekot != undefined) {
      localStorage.setItem("Nekot", nekot);
      navigate("/dashboard");
    }
  }, [nekot]);

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
