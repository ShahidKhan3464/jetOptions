'use client';

import React from 'react';
import { Field } from 'formik';
import { Radio } from '@mui/material';
import {
  StyledFormLabel,
  StyledRadioGroup,
  StyledFormControl,
  StyledFormControlLabel
} from './style';

const RadioButtons = ({ name, label, formik, options, ...rest }) => {
  return (
    <StyledFormControl>
      <StyledFormLabel id="radios">{label}</StyledFormLabel>
      <Field name={name}>
        {({ field }) => (
          <StyledRadioGroup
            {...rest}
            {...field}
            name={name}
            aria-label={label}
            onChange={(e) => formik.setFieldValue(name, e.target.value)}
          >
            {options.map((option, index) => (
              <StyledFormControlLabel
                key={index}
                control={<Radio />}
                value={option.value}
                label={option.label}
                checked={field.value === option.value}
              />
            ))}
          </StyledRadioGroup>
        )}
      </Field>
    </StyledFormControl>
  );
};

export default RadioButtons;
