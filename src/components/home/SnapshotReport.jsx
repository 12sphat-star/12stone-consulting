import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, Sparkles, FileText, ChevronRight } from 'lucide-react';
import { Button } from '../shared/Button';

const ASSESSMENT_PILLARS = [
  { id: 'presence', name: 'DIGITAL PRESENCE', focus: 'Smart Website™ Front Door & Trust Architecture', status: 'DIAGNOSTIC READY' },
  { id: 'response', name: 'CUSTOMER RESPONSE', focus: 'After-Hours Availability & Speed to Lead', status: 'DIAGNOSTIC READY' },
  { id: 'followup', name: 'AUTOMATED FOLLOW-UP', focus: 'Pipeline & Lead Capture Reliability', status: 'DIAGNOSTIC READY' },
  { id: 'retention', name: 'CUSTOMER RETENTION', focus: 'Post-Service Care & Relationship Workflows', status: 'DIAGNOSTIC READY' },
  { id: 'nurture', name: 'ONGOING NURTURE', focus: 'Evangelize™ System & Seasonal Nurture', status: 'DIAGNOSTIC READY' },
  { id: 'automation', name: 'BUSINESS AUTOMATION', focus: 'Workflow & Communication Efficiency', status: 'DIAGNOSTIC READY' },
  { id: 'employee', name: 'EMPLOYEE ENGAGEMENT', focus: 'Internal Communication & Onboarding Pathways', status: 'DIAGNOSTIC READY' },
];

export const SnapshotReport = () => {
  return (
    <div id="business-snapshot" className="snapshot-finale-experience">
      <div className="snapshot-finale-header">
        <span className="home-eyebrow">
          <span className="eyebrow-rule" /> THE 12 STONE BUSINESS SNAPSHOT™
        </span>
        <h2 className="snapshot-headline">
          WHAT COULD YOUR BUSINESS<br />
          <em className="gold-accent">DO BETTER?</em>
        </h2>
        <h3 className="snapshot-subheadline">HOW WELL IS YOUR BUSINESS BUILT TO COMPETE?</h3>
        <p className="snapshot-lede">
          See where your small business is strong, where capability gaps may exist,
          and what high-impact system improvements deserve attention first.
        </p>
      </div>

      {/* Premium Report Interface Preview */}
      <div className="snapshot-report-interface">
        <div className="report-window-bar">
          <div className="window-dots">
            <span className="dot dot-close" />
            <span className="dot dot-min" />
            <span className="dot dot-expand" />
          </div>
          <div className="report-title">
            <FileText size={13} className="inline-icon" />
            <span>12 STONE BUSINESS SNAPSHOT™ • DIAGNOSTIC REPORT INTERFACE</span>
          </div>
          <div className="report-badge">CONFIDENTIAL DIAGNOSTIC</div>
        </div>

        <div className="report-body">
          <div className="report-sidebar">
            <div className="sidebar-block">
              <span className="block-label">ASSESSMENT OBJECTIVE</span>
              <strong>EVALUATE SMALL BUSINESS COMPETITIVE CAPABILITY</strong>
            </div>
            <div className="sidebar-block">
              <span className="block-label">ASSESSMENT DIMENSIONS</span>
              <span className="dim-count">7 CORE PILLARS</span>
            </div>
            <div className="sidebar-status-box">
              <Sparkles size={16} className="gold-accent" />
              <span>Neutral assessment methodology ready for your business.</span>
            </div>
          </div>

          <div className="report-pillars-grid">
            {ASSESSMENT_PILLARS.map((pillar) => (
              <div key={pillar.id} className="pillar-row-item">
                <div className="pillar-left">
                  <div className="pillar-status-icon">
                    <CheckCircle2 size={16} className="gold-accent" />
                  </div>
                  <div className="pillar-info">
                    <strong className="pillar-name">{pillar.name}</strong>
                    <span className="pillar-focus">{pillar.focus}</span>
                  </div>
                </div>

                <div className="pillar-right">
                  <span className="readiness-badge">{pillar.status}</span>
                  <ChevronRight size={14} className="pillar-arrow" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="report-bottom-bar">
          <div className="report-note">
            <ShieldCheck size={16} className="inline-icon gold-accent" />
            <span>Takes less than 5 minutes to complete. Confidential & personalized.</span>
          </div>
          <Button to="/business-snapshot" variant="brass" icon={ArrowRight}>
            GET MY BUSINESS SNAPSHOT™
          </Button>
        </div>
      </div>
    </div>
  );
};
