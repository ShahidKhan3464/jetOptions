'use client';

import React from 'react';
import Image from 'next/image';
import { Formik } from 'formik';
import { Icons } from '../../common/assets';
import { Box, Typography } from '@mui/material';
import useCreateQuote from './use-create-quote.hook';
import CustomButton from '../../common/components/button';
import TextField from '../../common/components/textField';
import CustomDialog from '../../common/components/dialog';
import DatePicker from '../../common/components/datePicker';
import SelectField from '../../common/components/selectField';
import RadioButtons from '../../common/components/radioButtons';

export default function CreateQuote() {
  const {
    legs,
    setLegs,
    aircrafts,
    dialogOpen,
    setAircrafts,
    setDialogOpen,
    handleDateChange,
    dynamicInitialValues
  } = useCreateQuote();

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

  const content = () => (
    <Box
      sx={{
        overflow: 'auto',
        '&::-webkit-scrollbar': {
          width: '3px',
          height: '3px'
        }
      }}
    >
      <Box
        contentEditable="true"
        sx={{
          p: 2,
          mb: 3,
          outline: 'none',
          fontWeight: 400,
          fontSize: '16px',
          lineHeight: '24px',
          borderRadius: '4px',
          fontFamily: 'Poppins',
          whiteSpace: 'pre-line',
          border: '1px solid #00000033'
        }}
      >
        1. Domestic Round Trip - Non-Peak:
        <br />
        • Upon Booking to 7-days- 10% of quoted amount <br /> • 6-days to 3-days
        - 50% of quoted amount <br /> • 2-days or less- 100% of quoted amount
        <br />
        <br />
        2. International Flight - Non-Peak: <br />
        • Upon Booking to 10-days - 25% of quoted amount <br /> • 9-days to
        5-days - 50% of quoted amount <br /> • 5-days or less- 100% of quoted
        amount
        <br />
        <br />
        3. Peak Day Flying (Domestic or International) <br />
        • Upon Booking to 15-days - 50% of quoted amount <br /> • 15-days or
        less - 100% of quoted amount
        <br />
        <br />
        4. One-Way: <br />
        • Upon Booking - 100% non-refundable
        <br />
      </Box>

      <CustomButton
        loading={false}
        disabled={false}
        text="Save Changes"
        sxProps={{
          width: '100%',
          height: '39px',
          fontWeight: 400,
          fontSize: '20px',
          background: '#121826'
        }}
      />
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
      {dialogOpen && (
        <CustomDialog
          open={dialogOpen}
          setOpen={setDialogOpen}
          title={'Edit Cancellation Policy'}
        >
          {content()}
        </CustomDialog>
      )}
      <Formik
        initialValues={dynamicInitialValues}
        onSubmit={(data) => console.log(data)}
      >
        {(formik) => {
          return (
            <form onSubmit={formik.handleSubmit}>
              <SectionBox title="Client Information">
                <TextField
                  type="text"
                  formik={formik}
                  name="clientName"
                  placeholder="Client name"
                  value={formik.values.clientName}
                />

                <TextField
                  type="text"
                  formik={formik}
                  name="clientEmail"
                  value={formik.values.clientEmail}
                  placeholder="Client email (optional)"
                />
              </SectionBox>

              <SectionBox title="Quote Settings">
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    '>div:nth-child(1),>div:nth-child(2)': {
                      width: '125px'
                    },
                    '& .MuiOutlinedInput-root': {
                      margin: 0
                    },
                    '>div, input': {
                      background: '#F8F9FA80 !important'
                    }
                  }}
                >
                  <TextField
                    sign="$"
                    name="usd"
                    type="number"
                    formik={formik}
                    placeholder="USD ($)"
                    value={formik.values.usd}
                  />

                  <TextField
                    sign="%"
                    type="number"
                    name="taxRate"
                    formik={formik}
                    placeholder="Tax Rate (%)"
                    value={formik.values.taxRate}
                  />

                  <Box
                    sx={{
                      p: '7px',
                      borderRadius: '4px',
                      border: '1px solid #00000033'
                    }}
                  >
                    <RadioButtons
                      formik={formik}
                      name="actionRequest"
                      label="Action Request:"
                      value={formik.values.actionRequest}
                      options={[
                        { value: 'Contract', label: 'Contract' },
                        { value: 'Approval', label: 'Approval' }
                      ]}
                    />
                  </Box>
                </Box>
              </SectionBox>

              {legs.map((leg, index) => (
                <SectionBox key={leg.id} title={`Leg ${index + 1}`}>
                  <Box
                    sx={{
                      mb: 1,
                      gap: 2,
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <TextField
                      type="text"
                      formik={formik}
                      name={`from_${leg.id}`}
                      placeholder="From (Airport Code)"
                      value={formik.values[`from_${leg.id}`]}
                    />
                    <TextField
                      type="text"
                      formik={formik}
                      name={`to_${leg.id}`}
                      placeholder="To (Airport Code)"
                      value={formik.values[`to_${leg.id}`]}
                    />
                  </Box>
                  <Box sx={{ mb: 1, gap: 2, display: 'flex' }}>
                    <Box
                      sx={{
                        width: '100%',
                        position: 'relative',
                        '>img': {
                          top: '8px',
                          right: '10px',
                          position: 'absolute'
                        }
                      }}
                    >
                      <DatePicker
                        disabled={false}
                        placeholder="Select date"
                        selectedDate={leg.selectedDate}
                        onChange={(date) =>
                          handleDateChange(date, index, 'selectedDate')
                        }
                        // selectedDate={selectedDate}
                        // onChange={(selectedDate) =>
                        //   setSelectedDate(selectedDate)
                        // }
                      />
                    </Box>
                    <TextField
                      type="text"
                      formik={formik}
                      placeholder="Passengers"
                      name={`passengers_${leg.id}`}
                      value={formik.values[`passengers_${leg.id}`]}
                    />
                  </Box>
                </SectionBox>
              ))}

              <Box sx={{ my: 2.5 }}>
                <CustomButton
                  text="Add Leg"
                  loading={false}
                  disabled={false}
                  startIcon={<Image src={Icons.plus} alt="plus" />}
                  clicked={() => setLegs([...legs, { id: legs.length + 1 }])}
                  sxProps={{
                    width: '140px',
                    height: '39px',
                    fontWeight: 500,
                    fontSize: '16px',
                    borderRadius: '4px',
                    background: '#121826'
                  }}
                />
              </Box>

              {aircrafts.map((aircraft, index) => (
                <SectionBox key={aircraft.id} title="Select Aircraft Details">
                  <Box
                    sx={{
                      mb: 2,
                      gap: 2,
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <SelectField
                      options={[]}
                      formik={formik}
                      placeholder="Aircraft Make"
                      name={`aircraftMake_${aircraft.id}`}
                      value={formik.values[`aircraftMake_${aircraft.id}`]}
                    />
                    <Box
                      sx={{
                        gap: 1,
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        '>div:nth-child(2)': {
                          width: '92px',
                          '>div': {
                            marginBottom: 0
                          }
                        }
                      }}
                    >
                      <SelectField
                        options={[]}
                        formik={formik}
                        placeholder="Aircraft Model"
                        name={`aircraftModel_${aircraft.id}`}
                        value={formik.values[`aircraftModel_${aircraft.id}`]}
                      />
                      <TextField
                        type="text"
                        formik={formik}
                        placeholder="Seats"
                        name={`seats_${aircraft.id}`}
                        value={formik.values[`seats_${aircraft.id}`]}
                      />
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      mb: 2,
                      gap: 2,
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <SelectField
                      options={[]}
                      formik={formik}
                      placeholder="Year of Manufacture"
                      name={`yearOfManufacture_${aircraft.id}`}
                      value={formik.values[`yearOfManufacture_${aircraft.id}`]}
                    />
                    <SelectField
                      options={[]}
                      formik={formik}
                      placeholder="Year of Refurbishment"
                      name={`yearofRefurbishment_${aircraft.id}`}
                      value={
                        formik.values[`yearofRefurbishment_${aircraft.id}`]
                      }
                    />
                  </Box>
                  <Box
                    sx={{
                      mb: 2,
                      gap: 2,
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <SelectField
                      options={[]}
                      formik={formik}
                      placeholder="Price (USD$)"
                      name={`price_${aircraft.id}`}
                      value={formik.values[`price_${aircraft.id}`]}
                    />
                    <Box
                      sx={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end'
                      }}
                    >
                      <CustomButton
                        loading={false}
                        disabled={false}
                        variant="outlined"
                        clicked={() => setDialogOpen(true)}
                        tColor={'#000000'}
                        text="Edit Policy"
                        borderColor={'#00000033'}
                        startIcon={<Image src={Icons.editP} alt="edit" />}
                        sxProps={{
                          width: '177px',
                          height: '39px',
                          fontWeight: 500,
                          fontSize: '16px',
                          borderRadius: '4px',
                          background: '#FFFFFF'
                        }}
                      />
                    </Box>
                  </Box>
                </SectionBox>
              ))}

              <Box sx={{ my: 2.5 }}>
                <CustomButton
                  loading={false}
                  disabled={false}
                  text="Add Aircraft"
                  startIcon={<Image src={Icons.plus} alt="plus" />}
                  clicked={() =>
                    setAircrafts([...aircrafts, { id: aircrafts.length + 1 }])
                  }
                  sxProps={{
                    width: '150px',
                    height: '39px',
                    fontWeight: 500,
                    fontSize: '16px',
                    borderRadius: '4px',
                    background: '#121826'
                  }}
                />
              </Box>

              <SectionBox title="Proposal Link">
                <TextField
                  type="text"
                  formik={formik}
                  name="proposalLink"
                  value={formik.values.proposalLink}
                  placeholder="www.JetOptions.App/UniqueIdentifer13248209"
                />
                <Box
                  sx={{ my: 1, gap: 2, display: 'flex', alignItems: 'center' }}
                >
                  <CustomButton
                    loading={false}
                    text="Copy link"
                    disabled={false}
                    startIcon={<Image src={Icons.copy} alt="copy" />}
                    sxProps={{
                      width: '169px',
                      height: '39px',
                      fontWeight: 500,
                      fontSize: '16px',
                      borderRadius: '4px',
                      background: '#121826'
                    }}
                  />
                  <CustomButton
                    loading={false}
                    disabled={false}
                    text="Save Quote"
                    startIcon={<Image src={Icons.plus} alt="plus" />}
                    sxProps={{
                      width: '169px',
                      height: '39px',
                      fontWeight: 500,
                      fontSize: '16px',
                      borderRadius: '4px',
                      background: '#121826'
                    }}
                  />
                </Box>
              </SectionBox>
            </form>
          );
        }}
      </Formik>
    </Box>
  );
}
