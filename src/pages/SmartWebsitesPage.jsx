import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../components/shared/Button';
import '../styles/Portfolio.css';

export const SmartWebsitesPage = () => (
  <div className="concept-page">
    <div className="container concept-shell">
      <div className="concept-header">
        <div>
          <span className="concept-badge">SMART WEBSITE™</span>
          <h1>Business-first digital presence.</h1>
        </div>
      </div>

      <div className="concept-intro">
        <p>
          A Smart Website™ is not a template or a brochure. It is a business system designed around how your customers move, what they need, and what the business must do after the first inquiry.
        </p>
        <span className="concept-tag">12 STONE APPROACH</span>
      </div>

      <div className="concept-viewport">
        <div className="concept-browser">
          <div className="browser-bar"><span /><span /><span /></div>
          <div className="browser-body">
            <div className="browser-panel">
              <h3>Discover — Design — Connect</h3>
              <div className="browser-lines">
                <i />
                <i />
                <i />
                <i />
                <i />
              </div>
            </div>
            <div className="browser-aside">
              <div className="browser-card">
                <strong>Customer journey</strong>
                <p>Search → Learn → Contact → Follow-up → Retain</p>
              </div>
              <div className="browser-card">
                <strong>System logic</strong>
                <p>Every page is designed to support the business process behind it.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="concept-rail">
        <div>
          <strong>Purpose</strong>
          <p>Turn digital presence into a practical conversion engine.</p>
        </div>
        <div>
          <strong>Experience</strong>
          <p>Designed around real customer intent, not generic content blocks.</p>
        </div>
        <div>
          <strong>Outcome</strong>
          <p>Higher clarity, better response, and stronger system continuity.</p>
        </div>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <Button to="/contact" variant="brass" icon={ArrowRight}>LET'S TALK</Button>
      </div>
    </div>
  </div>
);
