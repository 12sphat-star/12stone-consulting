import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../components/shared/Button';
import '../styles/Portfolio.css';

export const AboutPage = () => (
  <div className="concept-page">
    <div className="container concept-shell">
      <div className="concept-header">
        <div>
          <span className="concept-badge">ABOUT</span>
          <h1>Custom business systems for smaller organizations.</h1>
        </div>
      </div>

      <div className="concept-intro">
        <p>
          12 Stone Consulting is a custom business systems consultancy for small businesses. We do not sell generic AI packages or template-first websites. We design around the business, the customer journey and the human systems that make growth durable.
        </p>
        <span className="concept-tag">BUSINESS + TECHNOLOGY</span>
      </div>

      <div className="concept-rail">
        <div>
          <strong>Positioning</strong>
          <p>We help smaller businesses compete with capabilities that were once reserved for larger companies.</p>
        </div>
        <div>
          <strong>Approach</strong>
          <p>We focus on the operational system behind the website, the service, and the customer relationship.</p>
        </div>
        <div>
          <strong>Outcome</strong>
          <p>Better response, cleaner communication, stronger retention, and smarter structure.</p>
        </div>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <Button to="/business-snapshot" variant="brass" icon={ArrowRight}>GET MY BUSINESS SNAPSHOT™</Button>
      </div>
    </div>
  </div>
);
