import React from 'react';
import './Header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { withRouter } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentUser}) => {
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
            <span>SHOP</span>
          </Link>
        </div>
        <div className="option">
          <Link to="/shop">
            <span>CONTACT</span>
          </Link>
        </div>
        {
          currentUser ?
          <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
          : <Link className="option" to="/signin">SIGN IN</Link>
        }
      </div>
    </div>
  );
}

export default withRouter(Header);