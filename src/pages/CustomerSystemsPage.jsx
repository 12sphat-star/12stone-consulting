import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../components/shared/Button';
import '../styles/Portfolio.css';

export const CustomerSystemsPage = () => (
  <div className="concept-page">
    <div className="container concept-shell">
      <div className="concept-header">
        <div>
          <span className="concept-badge">CUSTOMER SYSTEMS</span>
          <h1>Capture, respond, follow up, retain.</h1>
        </div>
      </div>

      <div className="concept-intro">
        <p>
          Customer systems exist to stop missed opportunity and keep the business in a consistent communication rhythm — even when the owner is working, on the job, or away from the phone.
        </p>
        <span className="concept-tag">SYSTEM ARCHITECTURE</span>
      </div>

      <div className="concept-system">
        <div className="system-flow">
          <span className="system-step">DISCOVERY</span>
          <span>→</span>
          <span className="system-step">SMART WEBSITE</span>
          <span>→</span>
          <span className="system-step">CAPTURE</span>
          <span>→</span>
          <span className="system-step">COMMUNICATION</span>
          <span>→</span>
          <span className="system-step">CRM</span>
          <span>→</span>
          <span className="system-step">FOLLOW-UP</span>
        </div>
      </div>

      <div className="concept-rail">
        <div>
          <strong>Lead capture</strong>
          <p>Every inquiry is organized and routed with a business-minded workflow.</p>
        </div>
        <div>
          <strong>Communication</strong>
          <p>Texts, calls, and follow-up sequences stay aligned with the customer journey.</p>
        </div>
        <div>
          <strong>Retention</strong>
          <p>Reviews, repeat work, and reactivation stay connected to the system.</p>
        </div>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <Button to="/business-snapshot" variant="brass" icon={ArrowRight}>GET MY BUSINESS SNAPSHOT™</Button>
      </div>
    </div>
  </div>
);
