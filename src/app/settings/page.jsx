'use client';

import Auth from '../../auth/auth.component';
import AUTH from '../../common/constants/auth.constant';
import SettingsComponent from '../../components/settings/settings.component';

export default function Settings() {
  return <Auth component={<SettingsComponent />} type={AUTH.PRIVATE} />;
}
