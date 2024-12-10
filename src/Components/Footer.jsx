import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© 2024 React Project 2. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    textAlign: 'center',
    backgroundColor: '#282c34',
    color: '#fff',
    padding: '10px 0',
    position: 'fixed',
    bottom: 0,
    width: '100%',
  },
};

export default Footer;
