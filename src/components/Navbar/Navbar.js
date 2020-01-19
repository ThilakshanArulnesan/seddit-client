import React from 'react';
import { connect } from 'react-redux';
import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { logout } from '../../actions/authActions';

function Navbar({ isAuthenticated, user, logout }) {
  const handleLogout = e => {
    logout();
  };
  return (
    <>
      <div className={styles.topNav}>
        <p className={styles.welcome}>
          {user ? `Hello ${user.name.firstName}!` : `Please sign in`}
        </p>
        <p className={styles.login}>
          {isAuthenticated ? (
            <Button onClick={handleLogout} className={styles.logout}>
              Logout
            </Button>
          ) : (
            <>
              <Link to='/login'>Login</Link> |
              <Link to='/register'>Register</Link>
            </>
          )}
        </p>
      </div>
    </>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user
});

export default connect(mapStateToProps, { logout })(Navbar);
