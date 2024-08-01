'use client';

import React from 'react';
import Image from 'next/image';
import { Icons } from '../../assets';
import { StyledDatePicker } from './style';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePicker = ({
  label,
  onChange,
  placeholder,
  selectedDate,
  ...rest
}) => {
  return (
    <StyledDatePicker>
      <ReactDatePicker
        showIcon
        {...rest}
        onChange={onChange}
        minDate={new Date()}
        dateFormat="MM/dd/yyyy"
        showPopperArrow={false}
        selected={selectedDate}
        toggleCalendarOnIconClick
        placeholderText={placeholder}
        icon={<Image src={Icons.datePicker} alt="datepicker" />}
      />
    </StyledDatePicker>
  );
};

export default DatePicker;
