import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import './header.scss';

const Header = ({ siteTitle }) => (
  <header className="header__wrapper">
    <div className="header__container">
      <h1 className="header__title">
        <Link to="/" className="header__title-link">
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
