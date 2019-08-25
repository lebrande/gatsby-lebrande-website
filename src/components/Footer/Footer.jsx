import React from 'react';

import './footer.scss';

const Footer = () => (
  <footer className="footer">
    <div className="footer__container">
      <p className="footer__copy">
        © {new Date().getFullYear()} Lebrande
      </p>
    </div>
  </footer>
);

export default Footer;