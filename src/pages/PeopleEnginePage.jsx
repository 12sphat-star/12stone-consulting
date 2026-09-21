import React from 'react';
import { PeopleEngineDetail } from '../components/engines/PeopleEngineDetail';
import { CTABanner } from '../components/shared/CTABanner';

export const PeopleEnginePage = () => {
  return (
    <>
      <PeopleEngineDetail />
      <CTABanner
        headline="Ready to Protect Your Core Team?"
        copy="Discover how better hiring processes and practical employee support systems can stabilize turnover."
        buttonText="Find the Leaks in Your Business"
      />
    </>
  );
};
