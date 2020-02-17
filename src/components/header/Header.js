import React from 'react';
import './Header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { withRouter } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <Logo className="logo"></Logo>
        </Link>
      </div>
      <div className="options">
        <div className="option">
          <Link to="/shop">
            <h3>SHOP</h3>
          </Link>
        </div>
        <div className="option">
          <Link to="/contact">
            <h3>CONTACT</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Header);