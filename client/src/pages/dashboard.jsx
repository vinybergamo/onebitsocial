import { useNavigate } from "react-router-dom";
import * as React from "react";
import Api from "../services/api";

function Dashboard() {
  const navigate = useNavigate();

  const [nekot, setNekot] = React.useState();
  const [revoked, setRevoked] = React.useState(false);
  const [auth, setAuth] = React.useState(false);

  const getNekot = localStorage.getItem("Nekot");

  React.useEffect(() => {
    if (getNekot == null) {
      navigate("/login");
    } else {
      setNekot(getNekot);
    }
  }, []);

  React.useLayoutEffect(() => {
    Api.get("/user/validator", {
      headers: {
        Authorization: `Bearer ${getNekot}`,
      },
    })
      .then((res) => {
        setAuth(res.data.auth);
      })
      .catch(() => {
        localStorage.removeItem("Nekot");
        navigate("/login");
      });
  }, []);

  const handleClick = async () => {
    await Api.post(
      "/user/logout",
      {},
      {
        headers: {
          Authorization: `Bearer ${nekot}`,
        },
      }
    ).then((res) => {
      setRevoked(res.data.revoked);
    });

    if (revoked) {
      localStorage.removeItem("Nekot");
      navigate("/login");
    }
  };

  React.useEffect(() => {
    if (revoked) {
      localStorage.removeItem("Nekot");
      navigate("/login");
    }
  }, [revoked]);

  return (
    <>
      <h1>Dashboard</h1>
      <button onClick={handleClick}>Logout</button>
    </>
  );
}

export default Dashboard;
