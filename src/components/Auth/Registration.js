import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { connect } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import { register } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';
import { useHistory } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Alert from '@material-ui/lab/Alert';
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

function Registration({ register, error, clearErrors, isAuthenticated }) {
  const classes = useStyles();

  const [values, setValues] = useState({
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    showPassword: false
  });

  const [errorMsg, setErrorMsg] = useState('');
  const history = useHistory();

  useEffect(() => {
    if (isAuthenticated) {
      console.log("we're good, redirect now");
      history.push('/');
    }
  }, [isAuthenticated, history]);

  useEffect(() => {
    if (error.id === 'REGISTER_FAIL') {
      setErrorMsg(error.msg.msg);
    } else {
      setErrorMsg('');
    }
  }, [error]);

  const handleSubmit = e => {
    e.preventDefault();
    clearErrors();
    console.log('sub');
    let name = { firstName: values.firstName, lastName: values.lastName };

    //attempt to register
    register({ email: values.email, password: values.password, name });
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
          <h1 style={{ textAlign: 'center' }}>Registration</h1>
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

          <Button variant='contained' color='primary' type='submit'>
            Register
          </Button>
          {errorMsg && (
            <Alert
              onClose={() => {
                clearErrors();
              }}
              severity='error'
            >
              {errorMsg}
            </Alert>
          )}
        </FormControl>
      </form>
    </>
  );
}

const mapStateToProps = state => ({
  error: state.error,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {
  register,
  clearErrors
})(Registration);
