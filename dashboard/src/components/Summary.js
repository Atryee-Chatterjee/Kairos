import React, { useEffect, useState } from "react";
import axios from "axios";

const Summary = () => {
  const [username, setUsername] = useState("User");

  useEffect(() => {
    const verifyUsername = async () => {
      try {
        const res = await axios.get("http://localhost:3002/verify", { withCredentials: true });
        if (res.data?.status && res.data?.user?.username) {
          const rawName = res.data.user.username;
          setUsername(rawName.charAt(0).toUpperCase() + rawName.slice(1));
        }
      } catch (err) {
        setUsername("User");
      }
    };

    verifyUsername();
  }, []);

  return (
    <>
      <div className="username">
        <h6>Hi, {username}!</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>3.74k</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>0</span>{" "}
            </p>
            <p>
              Opening balance <span>3.74k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings (13)</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className="profit">
              1.55k <small>+5.20%</small>{" "}
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>31.43k</span>{" "}
            </p>
            <p>
              Investment <span>29.88k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;