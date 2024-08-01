'use client';

import React from 'react';
import Image from 'next/image';
import useQuotes from './use-quotes.hook';
import { Icons } from '../../common/assets';
import { StyledTableCell } from './quotes.style';
import CustomButton from '../../common/components/button';
import {
  Box,
  Paper,
  Table,
  TableRow,
  TableBody,
  TableHead,
  Typography,
  TableContainer
} from '@mui/material';

export default function Quotes() {
  const { rows, router } = useQuotes();

  return (
    <Box
      sx={{
        p: 3,
        borderRadius: '8px',
        border: '1px solid #DD524C',
        boxShadow: '10px 10px 50px 0px #DD524C1A'
      }}
    >
      <Box
        sx={{
          gap: 3,
          mb: 4.5,
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: '20px',
            color: '#000000',
            lineHeight: '30px',
            fontFamily: 'Poppins'
          }}
        >
          Quote Magement Dashboard
        </Typography>

        <CustomButton
          loading={false}
          disabled={false}
          text="Create New Quote"
          clicked={() => router.push('/create-quote')}
          sxProps={{
            width: '190px',
            height: '39px',
            fontWeight: 500,
            fontSize: '16px',
            borderRadius: '4px',
            background: '#121826'
          }}
        />
      </Box>
      <Box
        sx={{
          mb: 1,
          width: '100%',
          maxWidth: '315px',
          input: {
            width: '100%',
            border: 'none',
            outline: 'none',
            fontWeight: 400,
            color: '#000000B2',
            fontSize: '16px',
            lineHeight: '24px',
            fontFamily: 'Poppins'
          }
        }}
      >
        <input
          type="text"
          placeholder="Search by client name, routing or dates"
        />
      </Box>
      <TableContainer
        component={Paper}
        sx={{
          boxShadow: 'none',
          background: 'transparent',
          border: '1px solid #00000033'
        }}
      >
        <Table aria-label="caption table">
          <TableHead sx={{ background: '#121826' }}>
            <TableRow>
              <StyledTableCell>Client Name</StyledTableCell>
              <StyledTableCell>Created At</StyledTableCell>
              <StyledTableCell>Routing</StyledTableCell>
              <StyledTableCell>Dates</StyledTableCell>
              <StyledTableCell>Actions</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <StyledTableCell>{row.clientName}</StyledTableCell>
                <StyledTableCell>{row.createdAt}</StyledTableCell>
                <StyledTableCell>{row.routing}</StyledTableCell>
                <StyledTableCell>{row.dates}</StyledTableCell>
                <StyledTableCell
                  sx={{ textAlign: '-webkit-center !important' }}
                >
                  <Box
                    sx={{
                      width: '165px',
                      height: '40px',
                      display: 'flex',
                      borderRadius: '4px',
                      alignItems: 'center',
                      background: '#DD524C',
                      justifyContent: 'center',

                      '.MuiTypography-root': {
                        fontWeight: 400,
                        fontSize: '16px',
                        color: '#FFFFFF',
                        lineHeight: '24px',
                        fontFamily: 'Poppins'
                      }
                    }}
                  >
                    <Box
                      sx={{
                        gap: 1,
                        display: 'flex',
                        cursor: 'pointer',
                        alignItems: 'center'
                      }}
                    >
                      <Image src={Icons.edit} alt="edit" />
                      <Typography>Edit</Typography>
                    </Box>

                    <Box
                      sx={{
                        mx: 1,
                        width: '1px',
                        height: '30px',
                        background: '#FFFFFF'
                      }}
                    ></Box>

                    <Box
                      sx={{
                        gap: 1,
                        display: 'flex',
                        cursor: 'pointer',
                        alignItems: 'center'
                      }}
                    >
                      <Image src={Icons.trash} alt="trash" />
                      <Typography>Delete</Typography>
                    </Box>
                  </Box>
                </StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
