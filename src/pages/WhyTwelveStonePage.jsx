import React from 'react';
import { WhyTwelveStone } from '../components/home/WhyTwelveStone';
import { HowItWorks } from '../components/home/HowItWorks';
import { CTABanner } from '../components/shared/CTABanner';

export const WhyTwelveStonePage = () => {
  return (
    <>
      <div style={{ paddingTop: '2rem' }}>
        <WhyTwelveStone />
      </div>
      <HowItWorks />
      <CTABanner
        headline="Evaluate Your Business Systems Through Cash Flow"
        copy="Schedule a focused conversation to analyze your revenue velocity, replacement costs, and operational bottlenecks."
        buttonText="Find the Leaks in Your Business"
      />
    </>
  );
};
