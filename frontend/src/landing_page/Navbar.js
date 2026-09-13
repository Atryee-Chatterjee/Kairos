import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// use fetch to avoid axios/browser polyfill problems


function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const verify = async () => {
      try {
        const resp = await fetch('http://localhost:3002/verify', { credentials: 'include' });
        const data = await resp.json().catch(() => ({}));
        console.log('[Navbar] verify', resp.status, data);
        if (resp.ok && data.status) {
          setLoggedIn(true);
          setUsername(data.user?.username || '');
        } else {
          setLoggedIn(false);
        }
      } catch (err) {
        setLoggedIn(false);
      }
    };
    verify();
  }, []);

  const handleLogout = async () => {
    try {
      const resp = await fetch('http://localhost:3002/logout', { credentials: 'include' });
      console.log('[Navbar] logout', resp.status);
      setLoggedIn(false);
      setUsername('');
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  return (
      <nav className="navbar navbar-expand-lg border-bottom" style={{backgroundColor: "#FFF"}}>
        
        <div className="container p-2">
          <Link className="navbar-brand" to="/">
            <img src="media/images/logo.svg" style={{width:"25%"}} alt="Logo"/>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
          <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <form className="d-flex">
              <ul className="navbar-nav  mb-lg-0">
              {loggedIn ? (
                <>
                  <li className="nav-item">
                    <a className="nav-link" href="http://localhost:3001/">
                      Dashboard
                    </a>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link btn btn-link" onClick={handleLogout}>Logout</button>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link " to="/signup">
                      Signup
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link " to="/login">
                      Login
                    </Link>
                  </li>
                </>
              )}

              <li className="nav-item">
                <Link className="nav-link " to="about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/products">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/support">
                  Support
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="#">
                  <i className="fa fa-bars fa-lg" aria-hidden="true"></i>
                </Link>
              </li>

            </ul>

            </form>
          </div>
        </div>
      </nav>
  );
}

export default Navbar;
