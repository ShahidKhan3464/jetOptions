'use client';

import Auth from '../../../auth/auth.component';
import AUTH from '../../../common/constants/auth.constant';
import LoginComponent from '../../../components/login/login.component';

export default function Login() {
  return <Auth component={<LoginComponent />} type={AUTH.ONLY_PUBLIC} />;
}
