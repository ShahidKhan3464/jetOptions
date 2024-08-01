'use client';

import styled from 'styled-components';
import { TextField } from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

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
      fontSize: '14px'
    },

    '&::placeholder': {
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
  }
}));

export const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    fontSize: '16px',
    color: '#FFFFFF',
    fontWeight: '500',
    lineHeight: '24px',
    textAlign: 'center',
    fontStyle: 'normal',
    whiteSpace: 'nowrap',
    borderBottom: 'none',
    padding: '13px 16px',
    fontFamily: 'Poppins',

    '@media screen and (max-width: 520px)': {
      fontSize: '14px'
    }
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: '16px',
    color: '#000000',
    fontWeight: '400',
    lineHeight: '24px',
    fontStyle: 'normal',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    borderBottom: 'none',
    padding: '20px 16px',
    fontFamily: 'Poppins',

    '@media screen and (max-width: 520px)': {
      padding: '8px'
    }
  }
}));
