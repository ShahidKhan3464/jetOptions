'use client';

import { styled } from '@mui/system';
import { Select } from '@mui/material';

export const StyledSelectField = styled(Select)(() => ({
  '& .MuiSelect-select': {
    padding: '0 !important'
  },
  '&.MuiOutlinedInput-root': {
    fontWeight: 400,
    fontSize: '16px',
    color: '#000000',
    lineHeight: '24px',
    padding: '7px 15px',
    borderRadius: '4px',
    fontStyle: 'normal',
    fontFamily: 'Poppins',
    background: '#FFFFFF',
    textTransform: 'capitalize',
    border: '1px solid #00000033',

    '@media screen and (max-width: 520px)': {
      padding: '7px',
      fontSize: '14px'
    },

    '& fieldset': {
      display: 'none'
    },

    '& svg': {
      color: '#888888'
    }
  },
  '& .MuiSelect-select:not([multiple])': {
    '& em': {
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '24px',
      color: '#000000B2',
      fontStyle: 'normal',
      fontFamily: 'Poppins',

      '@media screen and (max-width: 520px)': {
        fontSize: '14px'
      }
    }
  }
}));
