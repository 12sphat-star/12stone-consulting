import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './Button';

export const CTABanner = ({
  headline = "Where Is Your Business Leaking Money?",
  copy = "Most owners can identify one problem. Few have looked at both sides of the business. A short conversation can help identify where the biggest leakage may be and what deserves attention first.",
  buttonText = "Find the Leaks in Your Business",
  to = "/contact"
}) => {
  return (
    <div className="container" style={{ margin: '4rem auto' }}>
      <div className="closing-message-banner" style={{ textAlign: 'center', padding: '3.5rem 2rem' }}>
        <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#FFFFFF', marginBottom: '1.25rem' }}>
          {headline}
        </h2>
        <p style={{ maxWidth: '720px', margin: '0 auto 2.25rem auto', fontSize: '1.1rem', color: 'var(--text-muted)' }}>
          {copy}
        </p>
        <Button to={to} variant="brass" icon={ArrowRight}>
          {buttonText}
        </Button>
      </div>
    </div>
  );
};
