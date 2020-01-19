import React, { useState } from 'react';
import clsx from 'clsx';
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

function LoginAndRegistration({}) {
  const classes = useStyles();

  const [values, setValues] = useState({
    password: '',
    showPassword: false
  });

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
      <FormControl
        onSubmit={() => console.log('yo')}
        className={classes.root}
        noValidate
        autoComplete='off'
      >
        <h1 style={{'text-align':'center'}}>Registration</h1>
        <TextField id='standard-basic' label='First Name' />
        <TextField id='standard-basic' label='Last Name' />
        <TextField id='standard-basic' label='Email Name' />
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
          Submit
        </Button>
      </FormControl>
    </>
  );
}

const mapStateToProps = state => ({
  item: state.item //modify this
});

export default connect(mapStateToProps, {})(LoginAndRegistration);
