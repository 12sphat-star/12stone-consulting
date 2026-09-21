import React, { useState } from 'react';
import {
  Building2,
  CheckCircle2,
  Globe,
  Layers,
  Sparkles,
  Users,
  ShieldCheck,
  Zap,
  Phone,
  Star,
  Award,
  Clock,
  ChevronDown
} from 'lucide-react';

const STAGES = [
  {
    id: 'business',
    num: '01',
    title: 'YOUR BUSINESS',
    subtitle: 'Foundation & Real Capability',
    icon: Building2,
    details: ['Services', 'Process', 'Team', 'Value'],
  },
  {
    id: 'customer',
    num: '02',
    title: 'YOUR CUSTOMER',
    subtitle: 'Focal Point & Urgent Needs',
    icon: Users,
    details: ['Trust', 'Speed', 'Expectations'],
  },
  {
    id: 'journey',
    num: '03',
    title: 'THE JOURNEY',
    subtitle: 'Mapped Operational Pathway',
    icon: Layers,
    steps: ['GET FOUND', 'CONTACT', 'RESPOND', 'FOLLOW UP', 'CUSTOMER'],
  },
  {
    id: 'system',
    num: '04',
    title: 'THE SYSTEM',
    subtitle: 'Connected Engine Behind It',
    icon: Sparkles,
    details: ['CRM', 'Automation', 'Scheduling', 'Nurture'],
  },
  {
    id: 'website',
    num: '05',
    title: 'SMART WEBSITE™',
    subtitle: 'Custom Digital Experience',
    icon: Globe,
    isGrand: true,
  },
];

export const PhilosophyTransformation = () => {
  const [activeStageIndex, setActiveStageIndex] = useState(4); // Default to Smart Website payoff

  return (
    <div className="philosophy-transformation" aria-label="Business to Smart Website Transformation visualizer">
      {/* Decorative Gold Flow Line connecting stages on Desktop */}
      <div className="transformation-path-line">
        <div
          className="path-fill"
          style={{ width: `${((activeStageIndex + 1) / STAGES.length) * 100}%` }}
        />
      </div>

      <div className="stages-container">
        {STAGES.map((stage, idx) => {
          const IconComp = stage.icon;
          const isActive = activeStageIndex === idx;

          if (stage.isGrand) {
            return (
              <div
                key={stage.id}
                className={`transformation-node stage-grand ${isActive ? 'is-active' : ''}`}
                onMouseEnter={() => setActiveStageIndex(idx)}
                onClick={() => setActiveStageIndex(idx)}
                onFocus={() => setActiveStageIndex(idx)}
                tabIndex={0}
                role="button"
                aria-label={`Stage ${stage.num}: ${stage.title}`}
              >
                <div className="stage-num-badge">
                  <span>{stage.num}</span>
                  <span className="stage-gold-tag">DESIRABLE PAYOFF</span>
                </div>
                <div className="grand-header">
                  <Globe size={16} className="grand-icon" />
                  <div>
                    <h4>{stage.title}</h4>
                    <span className="grand-sub">Bright, High-Converting Front Door</span>
                  </div>
                </div>

                {/* Grand Resolution Website Showcase with Full Depth */}
                <div className="desirable-website-preview">
                  <div className="preview-top-bar">
                    <div className="dots-row">
                      <span className="dot dot-close" />
                      <span className="dot dot-min" />
                      <span className="dot dot-expand" />
                    </div>
                    <span className="preview-url">coastalheatingandcooling.com</span>
                    <span className="preview-badge">LIVE SMART WEBSITE™</span>
                  </div>

                  {/* Bright Hero Section */}
                  <div className="preview-hero-section">
                    <div className="preview-hero-content">
                      <div className="trust-pill">
                        <Star size={11} className="star-gold" />
                        <span>4.9 RATING • 500+ VERIFIED REVIEWS</span>
                      </div>
                      <h3 className="preview-headline">YOUR HOME.<br />TAKEN CARE OF.</h3>
                      <p className="preview-subtext">Professional heating, cooling & plumbing service when you need it.</p>
                      <div className="preview-action-row">
                        <button type="button" className="btn-request-main">REQUEST SERVICE NOW</button>
                        <span className="call-direct"><Phone size={11} /> 24/7 CALL RESPONSE</span>
                      </div>
                    </div>

                    {/* Image Architecture Placeholder for Hero */}
                    <div className="preview-hero-image-frame">
                      <span className="frame-ratio">16:9 PHOTOGRAPHY ARCHITECTURE</span>
                      <strong>BRIGHT RESIDENTIAL HERO IMAGE</strong>
                      <p>Master technician with modern service vehicle outside attractive residential home</p>
                    </div>
                  </div>

                  {/* Visible Website Depth: Service Pillars & Reviews */}
                  <div className="preview-depth-section">
                    <div className="depth-bar">
                      <span>SERVICES</span>
                      <span>WHY CHOOSE US</span>
                      <span>SERVICE AREA</span>
                      <span>REVIEWS</span>
                    </div>

                    <div className="depth-cards-grid">
                      <div className="depth-card">
                        <ShieldCheck size={14} className="card-icon" />
                        <strong>Heating & Cooling</strong>
                        <span>Emergency repair & tune-ups</span>
                      </div>
                      <div className="depth-card">
                        <Zap size={14} className="card-icon" />
                        <strong>Electrical & Safety</strong>
                        <span>Panels, generators & wiring</span>
                      </div>
                      <div className="depth-card">
                        <Award size={14} className="card-icon" />
                        <strong>Plumbing & Water</strong>
                        <span>Water heaters & leak repair</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }

          return (
            <div
              key={stage.id}
              className={`transformation-node stage-card ${isActive ? 'is-active' : ''}`}
              onMouseEnter={() => setActiveStageIndex(idx)}
              onClick={() => setActiveStageIndex(idx)}
              onFocus={() => setActiveStageIndex(idx)}
              tabIndex={0}
              role="button"
              aria-label={`Stage ${stage.num}: ${stage.title}`}
            >
              <div className="node-num">{stage.num}</div>
              <div className="node-header">
                <div className="node-icon-wrap">
                  <IconComp size={15} />
                </div>
                <div className="node-title-group">
                  <h4>{stage.title}</h4>
                  <span>{stage.subtitle}</span>
                </div>
              </div>

              {stage.details && (
                <div className="node-pills">
                  {stage.details.map((detail) => (
                    <span key={detail} className="node-pill">
                      {detail}
                    </span>
                  ))}
                </div>
              )}

              {stage.steps && (
                <div className="node-journey-steps">
                  {stage.steps.map((s, i) => (
                    <React.Fragment key={s}>
                      <span className="journey-step-chip">{s}</span>
                      {i < stage.steps.length - 1 && <span className="journey-arrow">→</span>}
                    </React.Fragment>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
