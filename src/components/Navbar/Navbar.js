import React from 'react';
import { connect } from 'react-redux';
import styles from './Navbar.scss';

function Navbar() {
  return (
    <>
      <span>Hello name.firstName!</span>
      <span>Login | Logout</span>
    </>
  );
}

const mapStateToProps = state => ({
  item: state.item //modify this
});

export default connect(mapStateToProps)(Navbar);
