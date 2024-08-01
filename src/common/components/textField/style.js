'use client';

import { styled } from '@mui/system';
import { FormLabel, TextField } from '@mui/material';

export const StyledFormLabel = styled(FormLabel)(() => ({
  color: '#000000B2',
  fontStyle: 'normal',
  fontSize: '14px !important',
  fontWeight: '400 !important',
  lineHeight: '21px !important',
  fontFamily: 'Poppins !important',

  '@media screen and (max-width: 520px)': {
    fontSize: '12px !important',
    lineHeight: '18px !important'
  }
}));

export const StyledTextField = styled(TextField)(() => ({
  '& .MuiOutlinedInput-input': {
    fontWeight: 400,
    fontSize: '16px',
    color: '#000000',
    lineHeight: '24px',
    borderRadius: '4px',
    fontStyle: 'normal',
    padding: '7px 10px',
    background: '#FFFFFF',
    fontFamily: 'Poppins',
    border: '1px solid #00000033',

    '@media screen and (max-width: 520px)': {
      fontSize: '12px !important',
      lineHeight: '18px !important'
    },

    '&::placeholder': {
      opacity: 1,
      fontWeight: 400,
      fontSize: '16px',
      color: '#000000B2',
      lineHeight: '20px',
      fontStyle: 'normal',
      fontFamily: 'Poppins',

      '@media screen and (max-width: 520px)': {
        fontSize: '14px'
      }
    }
  },
  '& .MuiOutlinedInput-root': {
    padding: 0,
    marginBottom: '10px',

    '& fieldset': {
      display: 'none'
    }
  },
  '& .Mui-disabled': {
    background: '#F7F7F7',
    pointerEvents: 'none'
  },
  '& .MuiOutlinedInput-input[type="number"]::-webkit-inner-spin-button, & .MuiOutlinedInput-input[type="number"]::-webkit-outer-spin-button':
    {
      margin: 0,
      '-webkit-appearance': 'none'
    },
  '& .MuiOutlinedInput-input[type="number"]': {
    inputMode: 'numeric',
    '-moz-appearance': 'textfield'
  }
}));
