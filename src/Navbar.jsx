import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li><Link to="/home" style={styles.navLink}>Home</Link></li>
        <li><Link to="/about" style={styles.navLink}>About</Link></li>
        <li><Link to="/counter" style={styles.navLink}>Counter</Link></li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#282c34',
    padding: '10px',
  },
  navList: {
    display: 'flex',
    listStyleType: 'none',
    justifyContent: 'center',
    margin: 0,
    padding: 0,
  },
  navLink: {
    margin: '0 15px',
    color: '#61dafb',
    textDecoration: 'none',
    fontSize: '18px',
  },
};

export default Navbar;
