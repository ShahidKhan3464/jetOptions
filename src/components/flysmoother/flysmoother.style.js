'use client';

import Image from 'next/image';
import { Box } from '@mui/material';
import styled from 'styled-components';
import { Icons } from '../../common/assets';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

export const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  borderRadius: '6px',
  marginBottom: '10px',
  border: `1px solid #00000033`
}));

export const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    {...props}
    expandIcon={
      <Box
        sx={{
          width: '26px',
          height: '26px',
          display: 'flex',
          borderRadius: '4px',
          alignItems: 'center',
          background: '#DD524C',
          justifyContent: 'center',
          transition: 'transform 0.3s ease-in-out'
        }}
      >
        <Image
          alt="expand-icon"
          src={props.expanded ? Icons.expanded : Icons.notExpanded}
        />
      </Box>
    }
  />
))(() => ({
  background: '#F8F9FA80',
  minHeight: '40px !important',
  flexDirection: 'row-reverse',
  '@media screen and (max-width: 520px)': {
    padding: '0 10px !important'
  },
  '& .MuiAccordionSummary-expandIconWrapper': {
    transform: 'unset !important'
  },
  '& .MuiAccordionSummary-content': {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    margin: '0 0 0 8px !important',
    justifyContent: 'space-between',
    'p:nth-child(2)': { marginLeft: 'auto' }
  }
}));

export const AccordionDetails = styled(MuiAccordionDetails)(() => ({
  borderTop: 'none',
  background: '#F8F9FA80',
  padding: '0px 16px 16px !important',
  '@media screen and (max-width: 520px)': {
    padding: '10px !important'
  }
}));

export const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    fontSize: '20px',
    color: '#000000',
    fontWeight: '400',
    lineHeight: '30px',
    textAlign: 'center',
    fontStyle: 'normal',
    padding: '0 0 5px 0',
    whiteSpace: 'nowrap',
    fontFamily: 'Poppins',
    borderBottom: '1px solid #0000001A',

    '@media screen and (max-width: 520px)': {
      padding: 0,
      fontSize: '14px',
      lineHeight: '21px',
      borderBottom: 'none'
    }
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: '16px',
    fontWeight: '500',
    color: '#000000B2',
    lineHeight: '24px',
    fontStyle: 'normal',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    fontFamily: 'Poppins',
    borderBottom: '1px solid #0000001A',

    '@media screen and (max-width: 520px)': {
      padding: '8px',
      fontSize: '14px',
      lineHeight: '21px'
    }
  }
}));
