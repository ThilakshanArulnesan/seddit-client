import React from "react";
import { connect } from "react-redux";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { logout } from "../../actions/authActions";

function Navbar({ isAuthenticated, user, logout }) {
  const handleLogout = (e) => {
    logout();
  };
  return (
    <>
      <div className={styles.topNav}>
        <p> S E D D I T</p>

        <div className={styles.login}>
          <span className={styles.buttons}>
            {user && user.name ? `Hello ${user.name.firstName}!  ` : ``}
          </span>
          <span className={styles.buttons}>
            {isAuthenticated ? (
              <Button onClick={handleLogout} className={styles.logout}>
                Logout
              </Button>
            ) : (
              <>
                <Link to="/login">Login</Link> |
                <Link to="/register">Register</Link>
              </>
            )}
          </span>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
});

export default connect(mapStateToProps, { logout })(Navbar);
