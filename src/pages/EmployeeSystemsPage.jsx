import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../components/shared/Button';
import '../styles/Portfolio.css';

export const EmployeeSystemsPage = () => (
  <div className="concept-page">
    <div className="container concept-shell">
      <div className="concept-header">
        <div>
          <span className="concept-badge">EMPLOYEE SYSTEMS</span>
          <h1>Support people without building an HR department.</h1>
        </div>
      </div>

      <div className="concept-intro">
        <p>
          Employee systems strengthen onboarding, communication, recognition, retention and support — without forcing every business into a big-company process it can't sustain.
        </p>
        <span className="concept-tag">WORKFORCE SUPPORT</span>
      </div>

      <div className="concept-system">
        <div className="system-flow">
          <span className="system-step">ONBOARD</span>
          <span>→</span>
          <span className="system-step">COMMUNICATE</span>
          <span>→</span>
          <span className="system-step">ENGAGE</span>
          <span>→</span>
          <span className="system-step">SUPPORT</span>
          <span>→</span>
          <span className="system-step">RETAIN</span>
        </div>
      </div>

      <div className="concept-rail">
        <div>
          <strong>Onboarding</strong>
          <p>Reduce friction and confusion during the first weeks.</p>
        </div>
        <div>
          <strong>Recognition</strong>
          <p>Create employee touchpoints that reinforce culture and momentum.</p>
        </div>
        <div>
          <strong>Retention</strong>
          <p>Keep people informed and supported with systems that feel more professional.</p>
        </div>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <Button to="/contact" variant="brass" icon={ArrowRight}>LET'S TALK</Button>
      </div>
    </div>
  </div>
);
