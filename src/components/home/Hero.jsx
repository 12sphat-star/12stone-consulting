import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, Zap } from 'lucide-react';
import { companyInfo } from '../../data/content';
import { Button } from '../shared/Button';
import '../../styles/Hero.css';

export const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="badge-eyebrow brass">
              <Zap size={14} className="trust-icon" />
              <span>{companyInfo.eyebrow}</span>
            </div>

            <h1 className="hero-title">{companyInfo.headline}</h1>

            <p className="hero-subtitle">{companyInfo.subheadline}</p>

            <div className="hero-actions">
              <Button to="/contact" variant="brass" icon={ArrowRight}>
                {companyInfo.primaryCTA}
              </Button>
              <Button to="/why-12-stone" variant="outline">
                {companyInfo.secondaryCTA}
              </Button>
            </div>

            <div className="hero-trust-bar">
              <div className="trust-item">
                <ShieldCheck size={18} className="trust-icon" />
                <span>25+ Yrs Financial & Banking Credibility</span>
              </div>
              <div className="trust-item">
                <CheckCircle2 size={18} className="trust-icon" />
                <span>Zero Workload Expansion for Owner</span>
              </div>
            </div>
          </div>

          <div className="hero-visual-container">
            <div className="hero-visual-card">
              <div className="system-status-header">
                <div>
                  <div className="system-tag">12 Stone System Architecture</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFFFFF', marginTop: '0.2rem' }}>
                    Two-Leak Operating System
                  </div>
                </div>
                <div className="system-badge">
                  <span className="system-badge-dot"></span>
                  SYSTEM ACTIVE
                </div>
              </div>

              <div className="visual-leak-box customer">
                <div className="leak-box-head">
                  <span className="leak-box-title">Customer Engine</span>
                  <span className="leak-box-status fixed">REVENUE PLUGGED</span>
                </div>
                <div className="leak-box-desc">
                  Capture → Respond (60s) → Automated Follow-Up → Convert
                </div>
              </div>

              <div className="visual-leak-box people">
                <div className="leak-box-head">
                  <span className="leak-box-title">People Engine</span>
                  <span className="leak-box-status protected">RETENTION PROTECTED</span>
                </div>
                <div className="leak-box-desc">
                  Attract → Practical Support → Benefit Access → Retain
                </div>
              </div>

              <div style={{ marginTop: '1.5rem', padding: '0.85rem', background: 'rgba(255,255,255,0.02)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)', textAlign: 'center', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                Focusing on business outcomes: <strong>Cash Flow</strong>, <strong>P&L</strong>, & <strong>ROI</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
