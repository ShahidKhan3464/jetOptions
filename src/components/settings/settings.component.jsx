'use client';

import React from 'react';
import Image from 'next/image';
import { Formik } from 'formik';
import { Icons } from '../../common/assets';
import useSettings from './use-settings.hook';
import { Box, Typography } from '@mui/material';
import TextField from '../../common/components/textField';
import CustomButton from '../../common/components/button';

export default function Settings() {
  const { filePreview, initialValues, handleFileUpload } = useSettings();

  const SectionBox = ({ children, title }) => (
    <Box
      sx={{
        mb: 4,
        borderRadius: '4px',
        background: '#F8F9FA80',
        padding: '12px 8px 8px 8px',
        border: '1px solid #00000033'
      }}
    >
      <Typography
        sx={{
          mb: 1,
          fontWeight: 400,
          fontSize: '20px',
          lineHeight: '30px',
          fontFamily: 'Poppins'
        }}
      >
        {title}
      </Typography>
      {children}
    </Box>
  );

  return (
    <Box
      sx={{
        p: '30px 40px',
        borderRadius: '8px',
        border: '1px solid #DD524C',
        boxShadow: '10px 10px 50px 0px #379DF11A'
      }}
    >
      <Formik
        initialValues={initialValues}
        onSubmit={(data) => console.log(data)}
      >
        {(formik) => {
          return (
            <form onSubmit={formik.handleSubmit}>
              <SectionBox title="Broker Information">
                <TextField
                  type="text"
                  formik={formik}
                  name="brokerName"
                  placeholder="Broker Name"
                  value={formik.values.brokerName}
                />

                <TextField
                  type="text"
                  formik={formik}
                  name="brokerageName"
                  placeholder="Brokerage Name"
                  value={formik.values.brokerageName}
                />

                <Box
                  sx={{
                    mt: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end'
                  }}
                >
                  <label htmlFor="file" className="fileUpload">
                    <input
                      type="file"
                      name="file"
                      id="file-input"
                      style={{ display: 'none' }}
                      onChange={(e) => handleFileUpload(e)}
                    />
                    <div
                      onClick={() =>
                        document.getElementById('file-input').click()
                      }
                    >
                      <CustomButton
                        loading={false}
                        disabled={false}
                        text="Upload Logo"
                        startIcon={<Image src={Icons.upload} alt="upload" />}
                        sxProps={{
                          width: '167px',
                          height: '42px',
                          fontWeight: 400,
                          fontSize: '16px',
                          background: '#DD524C'
                        }}
                      />
                    </div>
                  </label>
                </Box>

                {filePreview && (
                  <Box
                    sx={{
                      mt: 2,
                      display: 'flex',
                      alignItems: 'center',
                      flexDirection: 'column',
                      justifyContent: 'center'
                    }}
                  >
                    <Image
                      width={100}
                      height={100}
                      src={filePreview}
                      alt="File Preview"
                    />
                  </Box>
                )}
              </SectionBox>
            </form>
          );
        }}
      </Formik>
    </Box>
  );
}
