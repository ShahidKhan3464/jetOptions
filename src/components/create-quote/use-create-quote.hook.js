'use client';

import { useState } from 'react';

const initialValues = {
  usd: '',
  taxRate: '',
  clientName: '',
  clientEmail: '',
  proposalLink: '',
  actionRequest: ''
};

export default function useCreateQuote() {
  const [legs, setLegs] = useState([{ id: 1 }]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [aircrafts, setAircrafts] = useState([{ id: 1 }]);

  const dynamicInitialValues = {
    ...initialValues,
    legs: legs.map((leg) => ({
      [`from_${leg.id}`]: '',
      [`to_${leg.id}`]: '',
      [`passengers_${leg.id}`]: ''
    })),
    aircrafts: aircrafts.map((aircraft) => ({
      [`aircraftMake_${aircraft.id}`]: '',
      [`aircraftModel_${aircraft.id}`]: '',
      [`seats_${aircraft.id}`]: '',
      [`yearOfManufacture_${aircraft.id}`]: '',
      [`yearofRefurbishment_${aircraft.id}`]: '',
      [`price_${aircraft.id}`]: ''
    }))
  };

  const handleDateChange = (date, index, type) => {
    const updatedLegs = [...legs];
    updatedLegs[index][type] = date;
    setLegs(updatedLegs);
  };

  return {
    legs,
    setLegs,
    aircrafts,
    dialogOpen,
    setAircrafts,
    setDialogOpen,
    handleDateChange,
    dynamicInitialValues
  };
}
