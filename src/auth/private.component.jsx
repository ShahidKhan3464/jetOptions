'use client';

import { useRouter } from 'next/navigation';
import Sidebar from '../common/components/sidebar';
import { getAccessToken } from '../common/utils/access-token';

export default function Private({ component }) {
  const router = useRouter();
  const user = getAccessToken();

  if (user) {
    router.push('/login');
  }

  return <Sidebar component={component} />;
}
