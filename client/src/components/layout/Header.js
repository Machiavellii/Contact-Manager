import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = props => {
  const { branding } = props;
  return (
    <nav
      className="nav navbar navbar-expand-sm navbar-dark mb-3 py-0"
      style={{
        backgroundImage:
          'linear-gradient(to right bottom, #5e6e87, #6288a1, #67a4b6, #73bfc4, #8cdacc)'
      }}
    >
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>

        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fa fa-home" /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/add" className="nav-link">
                <i className="fa fa-plus" /> Add
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                <i className="fas fa-question" /> About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};
export default Header;
