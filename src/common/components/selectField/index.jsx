'use client';

import React from 'react';
import { Field } from 'formik';
import { StyledSelectField } from './style';
import { FormControl, MenuItem, OutlinedInput } from '@mui/material';

const SelectField = ({ name, formik, options, placeholder, value = '' }) => {
  return (
    <FormControl fullWidth>
      <Field name={name}>
        {({ field }) => (
          <StyledSelectField
            {...field}
            displayEmpty
            input={<OutlinedInput />}
            // IconComponent={() => <KeyboardArrowDownIcon />}
            error={formik?.errors[name] && formik?.touched[name]}
            onChange={(e) => formik.setFieldValue(name, e.target.value)}
            renderValue={(selected) => {
              if (!value) {
                return <em>{placeholder}</em>;
              }
              return selected;
            }}
          >
            {options?.map((option, index) => (
              <MenuItem key={index} value={option.value}>
                {option.text}
              </MenuItem>
            ))}
          </StyledSelectField>
        )}
      </Field>
    </FormControl>
  );
};

export default SelectField;
