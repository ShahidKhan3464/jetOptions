'use client';

import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Dialog, DialogTitle, IconButton } from '@mui/material';

const CustomDialog = ({ title, open, children, setOpen }) => {
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      PaperProps={{
        style: {
          width: '100%',
          padding: '16px',
          boxShadow: 'none',
          maxWidth: '614px',
          borderRadius: '4px',
          justifyContent: 'center'
        }
      }}
    >
      <Box sx={{ pb: 2 }}>
        <DialogTitle
          sx={{
            m: 0,
            p: 0,
            fontWeight: 500,
            color: '#000000',
            fontSize: '20px',
            lineHeight: '30px',
            fontFamily: 'Poppins'
          }}
        >
          {title}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={() => setOpen(false)}
          sx={{
            top: 8,
            right: 8,
            color: '#00000080',
            position: 'absolute'
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      {children}
    </Dialog>
  );
};

export default CustomDialog;
