'use client';

import styled from 'styled-components';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

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
