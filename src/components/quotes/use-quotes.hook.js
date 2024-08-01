'use client';

import { useRouter } from 'next/navigation';

export default function useQuotes() {
  const router = useRouter();
  function createData(clientName, createdAt, routing, dates) {
    return { clientName, createdAt, routing, dates };
  }

  const rows = [
    createData('John Doe', '7/01/2023, 10:00 Am', 'JFX', 'Aug 15 - 20, 2023'),
    createData('John Doe', '7/01/2023, 10:00 Am', 'JFX', 'Aug 15 - 20, 2023'),
    createData('John Doe', '7/01/2023, 10:00 Am', 'JFX', 'Aug 15 - 20, 2023'),
    createData('John Doe', '7/01/2023, 10:00 Am', 'JFX', 'Aug 15 - 20, 2023')
  ];

  return {
    rows,
    router
  };
}
