'use client';

import Auth from '../../auth/auth.component';
import AUTH from '../../common/constants/auth.constant';
import QuotesComponent from '../../components/quotes/quotes.component';

export default function Quotes() {
  return <Auth component={<QuotesComponent />} type={AUTH.PRIVATE} />;
}
