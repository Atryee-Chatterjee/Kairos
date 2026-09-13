import React, { useEffect, useState } from "react";
import axios from "axios";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  const [authorized, setAuthorized] = useState(null);

  useEffect(() => {
    const verify = async () => {
      try {
        const res = await axios.get("http://localhost:3002/verify", { withCredentials: true });
        setAuthorized(res.data.status === true);
      } catch (err) {
        setAuthorized(false);
      }
    };
    verify();
  }, []);

  if (authorized === null) return null;

  if (!authorized) {
    if (typeof window !== "undefined") {
      window.location.replace("http://localhost:3000/login");
    }
    return null;
  }

  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;