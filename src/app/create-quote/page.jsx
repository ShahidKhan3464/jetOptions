'use client';

import Auth from '../../auth/auth.component';
import AUTH from '../../common/constants/auth.constant';
import CreateQuoteComponent from '../../components/create-quote/create-quote.component';

export default function CreateQuote() {
  return <Auth component={<CreateQuoteComponent />} type={AUTH.PRIVATE} />;
}
