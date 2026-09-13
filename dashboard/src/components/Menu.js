import React, { useState, useEffect }from "react";
import axios from "axios";

import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [username, setUsername] = useState("USERID");

  useEffect(() => {
    const verifyUsername = async () => {
      try {
        const res = await axios.get("http://localhost:3002/verify", { withCredentials: true });
        if (res.data?.status && res.data?.user?.username) {
          const rawName = res.data.user.username;
          setUsername(rawName.charAt(0).toUpperCase() + rawName.slice(1));
        }
      } catch (err) {
        setUsername("USERID");
      }
    };

    verifyUsername();
  }, []);

  const handelMenuClick = (index) => {
    setSelectedMenu(index);
  }
  const handelProfileClick = (index) => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  }
  const menuClass = "menu";
  const activatedMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link style={{textDecoration: "none"}} to="/" onClick={() => handelMenuClick(0)}>
              <p className={selectedMenu === 0 ? activatedMenuClass : menuClass}>Dashboard</p>  
            </Link>
          </li>
          <li>
            <Link style={{textDecoration: "none"}} to="/orders" onClick={() => handelMenuClick(1)}>
              <p className={selectedMenu === 1 ? activatedMenuClass : menuClass}>Orders</p>  
            </Link>
          </li>
          <li>
            <Link style={{textDecoration: "none"}} to="/holdings" onClick={() => handelMenuClick(2)}>
              <p className={selectedMenu === 2 ? activatedMenuClass : menuClass}>Holdings</p>  
            </Link>
          </li>
          <li>
            <Link style={{textDecoration: "none"}} to="/positions" onClick={() => handelMenuClick(3)}>
              <p className={selectedMenu === 3 ? activatedMenuClass : menuClass}>Positions</p>  
            </Link>
          </li>
          <li>
            <Link style={{textDecoration: "none"}} to="/funds" onClick={() => handelMenuClick(4)}>
              <p className={selectedMenu === 4 ? activatedMenuClass : menuClass}>Funds</p>  
            </Link>
          </li>
          <li>
            <Link style={{textDecoration: "none"}} to="/apps" onClick={() => handelMenuClick(5)}>
              <p className={selectedMenu === 5 ? activatedMenuClass : menuClass}>Apps</p>  
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handelProfileClick}>
          <div className="avatar">{username?.slice(0, 2).toUpperCase() || "US"}</div>
          <p className="username">{username}</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;