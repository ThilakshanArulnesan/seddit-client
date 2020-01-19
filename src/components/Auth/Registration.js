import React, { useState } from 'react';
import clsx from 'clsx';
import axios from 'axios';
import { connect } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';

import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';

import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';

import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    'align-items': 'center',
    'justify-content': 'center',
    height: '80vh',
    '& > *': {
      margin: theme.spacing(1),
      width: 400
    }
  }
}));

function Registration() {
  const classes = useStyles();

  const [values, setValues] = useState({
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    showPassword: false
  });

  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target);
  };

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormControl
          onSubmit={() => console.log('yo')}
          className={classes.root}
          noValidate
          autoComplete='off'
        >
          <h1 style={{ 'text-align': 'center' }}>Registration</h1>
          <TextField label='First Name' onChange={handleChange('firstName')} />
          <TextField label='Last Name' onChange={handleChange('lastName')} />
          <TextField label='Email Name' onChange={handleChange('email')} />
          <FormControl className={clsx(classes.margin, classes.textField)}>
            <InputLabel htmlFor='standard-adornment-password'>
              Password
            </InputLabel>
            <Input
              id='standard-adornment-password'
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          <Button variant='contained' color='primary'>
            Register
          </Button>
        </FormControl>
      </form>
    </>
  );
}

const mapStateToProps = state => ({
  item: state.item //modify this
});

export default connect(mapStateToProps)(Registration);
