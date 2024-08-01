'use client';

import { useRouter } from 'next/navigation';
import { getAccessToken } from '../common/utils/access-token';

export default function OnlyPublic({ component }) {
  const router = useRouter();
  const user = getAccessToken();

  if (user && user.id_token) {
    router.push('/dashboard');
  }

  return component;
}
