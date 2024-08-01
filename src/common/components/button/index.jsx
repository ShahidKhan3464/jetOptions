'use client';

import React from 'react';
import { StyledButton } from './style';
import { CircularProgress } from '@mui/material';

const CustomButton = ({
  text,
  tColor,
  sxProps,
  loading = false,
  type = 'button',
  disabled = false,
  startIcon = null,
  clicked = () => {},
  variant = 'contained',
  ...rest
}) => {
  const isOutlined = variant === 'outlined';

  return (
    <StyledButton
      {...rest}
      type={type}
      tColor={tColor}
      onClick={clicked}
      loading={loading}
      variant={variant}
      disabled={disabled}
      startIcon={startIcon}
      isOutlined={isOutlined}
      sx={{
        ...sxProps,
        '&:hover': {
          boxShadow: 'unset',
          background: sxProps.background
        }
      }}
    >
      {loading ? <CircularProgress size={22} color="inherit" /> : text}
    </StyledButton>
  );
};

export default CustomButton;
