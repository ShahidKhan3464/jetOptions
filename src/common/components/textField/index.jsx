'use client';

import React from 'react';
import Image from 'next/image';
import { Field } from 'formik';
import { Box, InputAdornment } from '@mui/material';
import { StyledFormLabel, StyledTextField } from './style';

const TextField = ({
  name,
  sign,
  icon,
  label,
  formik,
  disabled = false,
  ...rest
}) => {
  return (
    <React.Fragment>
      {label && (
        <Box
          sx={{
            gap: 0.5,
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <StyledFormLabel>{label}</StyledFormLabel>
          {icon && <Image src={icon} alt="icon" />}
        </Box>
      )}
      <Field name={name}>
        {({ field }) => (
          <StyledTextField
            fullWidth
            {...rest}
            {...field}
            variant="outlined"
            disabled={disabled}
            error={formik.errors[name] && formik.touched[name]}
            InputProps={{
              endAdornment: formik.values[name] && sign && (
                <InputAdornment
                  position="end"
                  sx={{ right: '10px', position: 'absolute' }}
                >
                  {sign}
                </InputAdornment>
              )
            }}
          />
        )}
      </Field>
    </React.Fragment>
  );
};

export default TextField;
