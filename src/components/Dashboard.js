import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '60px',
    backgroundColor: '#BC8F8F',
    position: 'sticky',
    top: '0',
    zIndex: '1000',
    padding: '0 20px',
    fontFamily: 'cursive',
  };

  const linkStyle = {
    textDecoration: 'none',
    fontSize: '20px',
    color: '#18453B',
    fontWeight: 'bold',
    transition: 'color 0.3s ease',
  };

  const linkHoverStyle = {
    color: '#f1f1f1',
  };

  return (
    <div style={navbarStyle}>
      <Link
        to="/addcategory"
        style={linkStyle}
        onMouseOver={(e) => (e.target.style.color = linkHoverStyle.color)}
        onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
      >
        Manage Category
      </Link>
      <Link
        to="/craftupload"
        style={linkStyle}
        onMouseOver={(e) => (e.target.style.color = linkHoverStyle.color)}
        onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
      >
        Add Craft
      </Link>
      <Link
        to="/manageproduct"
        style={linkStyle}
        onMouseOver={(e) => (e.target.style.color = linkHoverStyle.color)}
        onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
      >
        Manage Craft
      </Link>
    </div>
  );
};

export default Dashboard;
