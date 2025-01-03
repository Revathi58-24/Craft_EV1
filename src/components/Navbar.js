import { useState, useEffect } from "react";
import { Outlet, NavLink, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import navicon from "./assets/navicon.jpg";

const NavBar = ({ isLoggedIn, setIsLoggedIn }) => {
  const [showNavbar, setShowNavbar] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Toggle the navigation menu on smaller screens
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  // Handle Logout: Clear localStorage and update the logged-in state
  const handleLogout = () => {
    localStorage.removeItem("email");  // Clear user data from localStorage
    setIsLoggedIn(false);  // Set logged-in state to false
    navigate("/admin/login");  // Redirect to login page
  };

  // When the component first mounts, check if the user is logged in (from localStorage)
  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email) {
      setIsLoggedIn(true);  // If an email exists in localStorage, the user is logged in
    }
  }, [setIsLoggedIn]);

  return (
    <>
      {/* Fixed Navbar with Inline Styles for Sticky Navbar */}
      <nav
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          right: "0",
          zIndex: 1000,
          backgroundColor: "#8FBC8B",
          height: "80px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)"
        }}
      >
        <div className="container">
          {/* Logo */}
          <div className="logo">
            <img
              src={navicon}
              style={{
                borderRadius: "50%",
                objectFit: "cover",
                marginTop: "4px",
                height: "65px",
                width: "160px",
              }}
              alt="Logo"
            />
          </div>

          {/* Menu Icon for mobile */}
          <div className="menu-icon" onClick={handleShowNavbar}>
            <img
              src="https://spaces-cdn.clipsafari.com/osjodi66678wddowa1visin58hfs"
              height="20px"
              width="20px"
              alt="Menu"
            />
          </div>

          {/* Navbar Links */}
          <div className={`nav-elements ${showNavbar && "active"}`}>
            <ul>
              {isLoggedIn ? (
                // Show admin links when logged in
                <>
                  <li>
                    <NavLink
                      to="/dashboard"
                      className={({ isActive }) => (isActive ? "active" : undefined)}
                    >
                      Dashboard
                    </NavLink>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: "0",
                      }}
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                // Show SignIn link only when on the login page
                location.pathname === "/admin/login" && (
                  <li>
                    <NavLink
                      to="/admin/login"
                      className={({ isActive }) => (isActive ? "active" : undefined)}
                    >
                      SignIn
                    </NavLink>
                  </li>
                )
              )}

              {/* Only show public links if not on the login page */}
              {location.pathname !== "/admin/login" && !isLoggedIn && (
                <>
                  <li>
                    <NavLink
                      to="/"
                      className={({ isActive }) => (isActive ? "active" : undefined)}
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/about"
                      className={({ isActive }) => (isActive ? "active" : undefined)}
                    >
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/product"
                      className={({ isActive }) => (isActive ? "active" : undefined)}
                    >
                      Product
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/contact"
                      className={({ isActive }) => (isActive ? "active" : undefined)}
                    >
                      Contact
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content with padding-top */}
      <div style={{ marginTop: "80px" }}>
        <Outlet />
      </div>
    </>
  );
};

export default NavBar;
