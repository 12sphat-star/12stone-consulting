import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../components/shared/Button';
import '../styles/Portfolio.css';

export const InsightsPage = () => (
  <div className="concept-page">
    <div className="container concept-shell">
      <div className="concept-header">
        <div>
          <span className="concept-badge">INSIGHTS</span>
          <h1>Practical operating perspective.</h1>
        </div>
      </div>

      <div className="concept-intro">
        <p>
          These are the ideas and systems-level observations that shape how 12 Stone approaches small business growth, customer communication and employee support.
        </p>
        <span className="concept-tag">PRACTICAL THINKING</span>
      </div>

      <div className="concept-rail">
        <div>
          <strong>Website strategy</strong>
          <p>Start with the business process, not just the visual design.</p>
        </div>
        <div>
          <strong>Lifecycle thinking</strong>
          <p>Customer experience continues after the first inquiry.</p>
        </div>
        <div>
          <strong>Employee systems</strong>
          <p>Retention and communication should be designed, not improvised.</p>
        </div>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <Button to="/contact" variant="brass" icon={ArrowRight}>LET'S TALK</Button>
      </div>
    </div>
  </div>
);
