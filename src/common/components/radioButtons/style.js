'use client';

import { styled } from '@mui/system';
import {
  FormLabel,
  RadioGroup,
  FormControl,
  FormControlLabel
} from '@mui/material';

export const StyledFormLabel = styled(FormLabel)(() => ({
  fontStyle: 'normal',
  fontSize: '16px !important',
  fontWeight: '400 !important',
  lineHeight: '24px !important',
  color: '#000000B2 !important',
  fontFamily: 'Poppins !important',

  '@media screen and (max-width: 520px)': {
    fontSize: '14px !important'
  }
}));

export const StyledFormControl = styled(FormControl)(() => ({
  gap: '10px',
  flexWrap: 'wrap',
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',

  '& .MuiFormGroup-root': {
    gap: '24px',
    flexDirection: 'row',

    '> label': {
      margin: 0,

      '.MuiTypography-root': {
        fontSize: '16px',
        fontWeight: 400,
        marginLeft: '4px',
        fontStyle: 'normal',
        lineHeight: 'normal',
        fontFamily: 'Poppins'
      }
    }
  }
}));

export const StyledRadioGroup = styled(RadioGroup)(() => ({
  '& .MuiRadio-root': {
    padding: '0',
    color: '#D9D9D980',
    '& svg:last-child': {
      transform: 'scale(2)'
    },
    '& .MuiSvgIcon-root': {
      fontSize: '18px'
    }
  },
  '& .Mui-checked': {
    color: '#DD524C !important'
  }
}));

export const StyledFormControlLabel = styled((props) => (
  <FormControlLabel {...props} />
))(({ checked }) => ({
  '.MuiTypography-root': {
    color: checked ? '#DD524C !important' : '#000000B2 !important'
  }
}));
