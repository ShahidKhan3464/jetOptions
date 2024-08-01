'use client';

import { useState } from 'react';

const initialValues = {
  brokerName: '',
  brokerageName: ''
};

export default function useSettings() {
  const [filePreview, setFilePreview] = useState(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFilePreview(URL.createObjectURL(file));
    }
  };

  return {
    filePreview,
    initialValues,
    handleFileUpload
  };
}
