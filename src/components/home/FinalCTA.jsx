import React from 'react';
import { CTABanner } from '../shared/CTABanner';
import { finalCTAData } from '../../data/content';

export const FinalCTA = () => {
  return (
    <CTABanner
      headline={finalCTAData.headline}
      copy={finalCTAData.copy}
      buttonText={finalCTAData.buttonText}
      to="/contact"
    />
  );
};
