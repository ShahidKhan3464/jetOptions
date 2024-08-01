'use client';

import styled from 'styled-components';
import { Images } from '../../common/assets';
import { FormLabel, Switch, TextField } from '@mui/material';

export const StyledLoginPage = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;

  @media screen and (max-width: 768px) {
    gap: 10px;
    flex-direction: column;
  }

  .bg-img {
    flex: 1;
    width: 100%;
    height: 100%;
    background-size: 100% 100%;
    background-position: center;
    background-image: url(${Images.jet.default.src});

    @media screen and (max-width: 768px) {
      min-height: 350px;
    }

    @media screen and (max-width: 520px) {
      min-height: 250px;
    }
  }

  .form {
    width: 100%;
    padding: 0 40px;
    max-width: 360px;

    @media screen and (max-width: 520px) {
      padding: 0 10px;
    }

    > p {
      color: #1a1a1a;
      font-size: 20px;
      font-weight: 600;
      line-height: 28px;
      margin-bottom: 20px;
      font-family: Poppins;
    }

    &_logo {
      gap: 5px;
      display: flex;
      align-items: center;
      padding-bottom: 40px;

      @media screen and (max-width: 520px) {
        padding-bottom: 24px;
      }

      &_text {
        color: #000000;
        font-size: 22px;
        font-weight: 400;
        line-height: 23px;
        font-family: Anybody;
      }
    }
  }
`;

export const StyledFormLabel = styled(FormLabel)(() => ({
  color: '#333333',
  fontStyle: 'normal',
  letterSpacing: '0.3px',
  fontSize: '12px !important',
  fontWeight: '400 !important',
  lineHeight: '12px !important',
  fontFamily: 'Poppins !important'
}));

export const StyledTextField = styled(TextField)((props) => ({
  '& .MuiOutlinedInput-input': {
    fontWeight: 400,
    fontSize: '16px',
    color: '#333333',
    lineHeight: '20px',
    borderRadius: '6px',
    fontStyle: 'normal',
    padding: '12px 16px',
    background: '#E5E5E5',
    fontFamily: 'Poppins',
    border: '1px solid #E5E5E5',

    '@media screen and (max-width: 520px)': {
      padding: '10px',
      fontSize: '14px'
    },

    '&::placeholder': {
      fontWeight: 400,
      fontSize: '16px',
      color: '#808080',
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
    marginTop: '5px',

    '& fieldset': {
      display: 'none'
    }
  }
}));

export const IOSSwitch = styled((props) => (
  <Switch
    {...props}
    disableRipple
    focusVisibleClassName=".Mui-focusVisible"
    sx={{ width: '38px', height: '20px', padding: '0', marginRight: '10px' }}
  />
))(() => ({
  '& .MuiSwitch-switchBase': {
    margin: 2,
    padding: 0,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        border: 0,
        opacity: 1,
        backgroundColor: '#65C466'
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5
      }
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff'
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: 0.7
    }
  },
  '& .MuiSwitch-thumb': {
    width: 16,
    height: 16,
    boxSizing: 'border-box'
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    borderRadius: 24 / 2,
    backgroundColor: '#E5E5E5'
  }
}));
