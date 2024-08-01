'use client';

import styled from 'styled-components';

export const StyledDatePicker = styled.div`
  width: 100%;
  .react-datepicker-wrapper {
    width: 100%;

    .react-datepicker__input-container {
      display: flex;
      align-items: center;
      flex-direction: row-reverse;

      > img {
        width: 24px;
        height: 24px;
      }

      input {
        width: 100%;
        padding: 6px;
        outline: none;
        color: #000000;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        font-style: normal;
        border-radius: 4px;
        font-family: Poppins;
        border: 1px solid #00000033;

        @media screen and (max-width: 520px) {
          font-size: 14px;
        }

        &::placeholder {
          opacity: 1;
          font-size: 16px;
          font-weight: 400;
          color: '#000000';
          line-height: 24px;
          font-style: normal;
          font-family: Poppins;
        }
      }
    }
  }
`;
