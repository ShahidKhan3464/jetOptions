'use client';

import * as Yup from 'yup';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Field, Formik } from 'formik';
import { Icons } from '../../common/assets';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Box,
  IconButton,
  InputAdornment,
  FormControlLabel
} from '@mui/material';
import CustomButton from '../../common/components/button';
import {
  IOSSwitch,
  StyledFormLabel,
  StyledLoginPage,
  StyledTextField
} from './login.style';

export default function Login() {
  const [isSwitch, setIsSwitch] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const initialValues = {
    email: '',
    password: '',
    rememberMe: false
  };

  return (
    <StyledLoginPage>
      <div className="bg-img"></div>
      <div className="form">
        <div className="form_logo">
          <Image src={Icons.jetLogo} alt="jetLogo" />
          <h3 className="form_logo_text">jetoptions</h3>
        </div>
        <p>Nice to see you again</p>
        <div className="form_container">
          <Formik
            validateOnMount={true}
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(data) => {
              console.log(data);
            }}
          >
            {(formik) => {
              return (
                <form onSubmit={formik.handleSubmit}>
                  <Box sx={{ pb: 2.5 }}>
                    <StyledFormLabel>Email</StyledFormLabel>
                    <Field name="email">
                      {({ field }) => (
                        <StyledTextField
                          {...field}
                          fullWidth
                          variant="outlined"
                          placeholder="Email or phone number"
                          error={
                            formik.touched.email && Boolean(formik.errors.email)
                          }
                          helperText={
                            formik.touched.email && formik.errors.email
                          }
                        />
                      )}
                    </Field>
                  </Box>
                  <Box sx={{ pb: 2.5 }}>
                    <StyledFormLabel>Password</StyledFormLabel>
                    <Field name="password">
                      {({ field }) => (
                        <StyledTextField
                          fullWidth
                          {...field}
                          variant="outlined"
                          placeholder="Enter password"
                          type={showPassword ? 'text' : 'password'}
                          helperText={
                            formik.touched.password && formik.errors.password
                          }
                          error={
                            formik.touched.password &&
                            Boolean(formik.errors.password)
                          }
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end" sx={{ margin: 0 }}>
                                <IconButton
                                  edge="end"
                                  aria-label="toggle password visibility"
                                  onMouseDown={(e) => e.preventDefault()}
                                  onClick={() => setShowPassword(!showPassword)}
                                  sx={{
                                    right: '15px',
                                    position: 'absolute'
                                  }}
                                >
                                  {showPassword ? (
                                    <VisibilityOff />
                                  ) : (
                                    <Visibility />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            )
                          }}
                        />
                      )}
                    </Field>
                  </Box>
                  <Box
                    sx={{
                      pb: 4,
                      gap: 1,
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <FormControlLabel
                      control={
                        <IOSSwitch
                          checked={isSwitch}
                          onChange={() =>
                            setIsSwitch((prevState) => !prevState)
                          }
                        />
                      }
                      label="Remember me"
                      sx={{
                        margin: 0,
                        '.MuiFormControlLabel-label': {
                          color: '#1A1A1A',
                          fontSize: '12px',
                          fontWeight: 400,
                          lineHeight: '20px',
                          fontFamily: 'Poppins',
                          letterSpacing: '0.3px'
                        }
                      }}
                    />

                    <Link
                      href="#"
                      style={{
                        fontWeight: 400,
                        color: '#DD524C',
                        fontSize: '12px',
                        lineHeight: '20px',
                        fontFamily: 'Poppins',
                        letterSpacing: '0.3px'
                      }}
                    >
                      Forgot password?
                    </Link>
                  </Box>
                  <Box
                    sx={{
                      '& >button': {
                        width: '100% !important'
                      }
                    }}
                  >
                    <CustomButton
                      type="submit"
                      text="Sign in"
                      loading={false}
                      disabled={false}
                      sxProps={{
                        height: '40px',
                        fontWeight: 700,
                        fontSize: '15px',
                        background: '#DD524C'
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      my: 4,
                      width: '100%',
                      height: '1px',
                      background: '#E5E5E5'
                    }}
                  ></Box>
                  <Box
                    sx={{
                      '& >button': {
                        width: '100% !important'
                      }
                    }}
                  >
                    <CustomButton
                      text="Or sign in with Google"
                      clicked={() => console.log('google')}
                      startIcon={<Image src={Icons.google} alt="google" />}
                      sxProps={{
                        height: '40px',
                        fontWeight: 400,
                        fontSize: '12px',
                        background: '#333333'
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      pt: 3,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      '@media screen and (max-width: 520px)': {
                        pt: 2
                      }
                    }}
                  >
                    <span
                      style={{
                        fontSize: '12px',
                        color: '#1A1A1A',
                        fontWeight: '400',
                        lineHeight: '20px',
                        fontStyle: 'normal',
                        fontFamily: 'Poppins',
                        letterSpacing: '0.3px'
                      }}
                    >
                      Don’t have an account?{' '}
                      <Link
                        href="#"
                        style={{
                          color: '#DD524C',
                          marginLeft: '5px'
                        }}
                      >
                        Sign up now
                      </Link>
                    </span>
                  </Box>
                </form>
              );
            }}
          </Formik>
        </div>
      </div>
    </StyledLoginPage>
  );
}

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Enter a valid email')
    .required('Please enter the required field'),
  password: Yup.string()
    .required('Please enter the required field')
    .min(8, 'Password must be at least 8 characters long')
    .max(20, 'Password must not be longer than 20 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d!@#$%^&*])[A-Za-z\d!@#$%^&*\s]*$/,
      'Password must contain at least one uppercase letter, one lowercase letter, and either a number or a punctuation character'
    )
});
