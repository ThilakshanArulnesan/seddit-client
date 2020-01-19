import React from 'react';
import { connect } from 'react-redux';
import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <div className={styles.topNav}>
        <p className={styles.welcome}>Hello name.firstName!</p>
        <p className={styles.login}>
          <Link to='/login'>Login</Link> | <Link to='/register'>Register</Link>
        </p>
      </div>
    </>
  );
}

const mapStateToProps = state => ({
  item: state.item //modify this
});

export default connect(mapStateToProps)(Navbar);
