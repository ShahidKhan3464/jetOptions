'use client';

import { useState } from 'react';
import { Images } from '../../common/assets';
import { useMediaQuery } from '@mui/material';

const initialValues = {
  charterPrice: '$75,000 + [Tax Percent]%',
  totalPrice: '$80,625',
  yearOfManfacturer: '2019 / 2022'
};

const options = [
  {
    id: 'panel1',
    title: 'Option 1: Bombardier Global Express – 14 Seats',
    price: '$55,000',
    charterPrice: '$75,000 + [Tax Percent]%',
    totalPrice: '$80,625',
    manufactureYear: '2019 / 2022',
    photos: [Images.sliderPhoto, Images.sliderPhoto, Images.sliderPhoto]
  },
  {
    id: 'panel2',
    title: 'Option 2: Dessault Falcon 7X - 11 Seats',
    price: '$55,000',
    charterPrice: '$75,000 + [Tax Percent]%',
    totalPrice: '$80,625',
    manufactureYear: '2019 / 2022',
    photos: [Images.sliderPhoto, Images.sliderPhoto, Images.sliderPhoto]
  },
  {
    id: 'panel3',
    title: 'Option 3: Dessault Falcon 7X - 11 Seats',
    price: '$55,000',
    charterPrice: '$75,000 + [Tax Percent]%',
    totalPrice: '$80,625',
    manufactureYear: '2019 / 2022',
    photos: [Images.sliderPhoto, Images.sliderPhoto, Images.sliderPhoto]
  }
];

const policies = [
  {
    title: 'Domestic Round Trip - Non-Peak',
    details: [
      'Upon Booking to 7-days - 10% of quoted amount',
      '6-days to 3-days - 50% of quoted amount',
      '2-days or less - 100% of quoted amount'
    ]
  },
  {
    title: 'International Flight - Non-Peak',
    details: [
      'Upon Booking to 10-days - 25% of quoted amount',
      '9-days to 5-days - 50% of quoted amount',
      '5-days or less - 100% of quoted amount'
    ]
  },
  {
    title: 'Peak Day Flying',
    details: [
      'Upon Booking to 15-days - 50% of quoted amounnt 15-days or less - 100% of quoted amount'
    ]
  },
  {
    title: 'One-Way',
    details: ['Upon Booking - 100% non-refundable']
  }
];

export default function useFlysmoother() {
  const [expanded, setExpanded] = useState('panel1');
  const [dialogOpen, setDialogOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 520px)');
  const [itineraryExpanded, setItineraryExpanded] = useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  function createData(depart, flightTime, arrive) {
    return { depart, flightTime, arrive };
  }

  const rows = [
    createData('Teterboro (KTEB)', '5:27', 'Van Nuys (KVNY)'),
    createData('Teterboro (KTEB)', '5:27', 'Van Nuys (KVNY)'),
    createData('Teterboro (KTEB)', '5:27', 'Van Nuys (KVNY)'),
    createData('Teterboro (KTEB)', '5:27', 'Van Nuys (KVNY)'),
    createData('Teterboro (KTEB)', '5:27', 'Van Nuys (KVNY)')
  ];

  return {
    rows,
    options,
    isMobile,
    expanded,
    policies,
    dialogOpen,
    handleChange,
    initialValues,
    setDialogOpen,
    itineraryExpanded,
    setItineraryExpanded
  };
}
