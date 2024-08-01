'use client';

import Auth from '../../auth/auth.component';
import AUTH from '../../common/constants/auth.constant';
import FlySmootherComponent from '../../components/flysmoother/flysmoother.component';

export default function FlySmoother() {
  return <Auth component={<FlySmootherComponent />} type={AUTH.ONLY_PUBLIC} />;
}
