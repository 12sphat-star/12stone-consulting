import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../components/shared/Button';
import '../styles/Portfolio.css';

export const HowWeThinkPage = () => (
  <div className="concept-page">
    <div className="container concept-shell">
      <div className="concept-header">
        <div>
          <span className="concept-badge">HOW WE THINK</span>
          <h1>Business first. System second.</h1>
        </div>
      </div>

      <div className="concept-intro">
        <p>
          We start by understanding how the business gets customers, communicates, follows up, operates and maintains relationships. Then we decide what should be improved, automated or connected.
        </p>
        <span className="concept-tag">DISCOVER → DESIGN → BUILD → CONNECT → OPTIMIZE</span>
      </div>

      <div className="concept-system">
        <div className="system-flow">
          <span className="system-step">DISCOVER</span>
          <span>→</span>
          <span className="system-step">DESIGN</span>
          <span>→</span>
          <span className="system-step">BUILD</span>
          <span>→</span>
          <span className="system-step">CONNECT</span>
          <span>→</span>
          <span className="system-step">OPTIMIZE</span>
        </div>
      </div>

      <div className="concept-rail">
        <div>
          <strong>Understand</strong>
          <p>Map how the business actually works before changing anything.</p>
        </div>
        <div>
          <strong>Design</strong>
          <p>Improve the customer journey and employee touchpoints as a single system.</p>
        </div>
        <div>
          <strong>Optimize</strong>
          <p>Keep refining what matters most to growth, clarity and retention.</p>
        </div>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <Button to="/contact" variant="brass" icon={ArrowRight}>LET'S TALK</Button>
      </div>
    </div>
  </div>
);
