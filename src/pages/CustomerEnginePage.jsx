import React from 'react';
import { CustomerEngineDetail } from '../components/engines/CustomerEngineDetail';
import { CTABanner } from '../components/shared/CTABanner';

export const CustomerEnginePage = () => {
  return (
    <>
      <CustomerEngineDetail />
      <CTABanner
        headline="Ready to Stop Revenue Leakage?"
        copy="Let's take a quick look at your current lead capture, missed call response, and follow-up sequence."
        buttonText="Find the Leaks in Your Business"
      />
    </>
  );
};
