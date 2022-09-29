import { Link } from "react-router-dom";

function Index() {
  return (
    <>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </>
  );
}

export default Index;
