import React, { useState } from 'react';
import { User, CheckCircle2, ChevronRight, HeartHandshake, ShieldCheck, Zap, MessageSquare, Calendar, Wrench } from 'lucide-react';

const JOURNEY_STAGES = [
  {
    id: 'attract',
    stage: 'ATTRACT',
    title: 'Discovery & Front Door',
    time: '9:30 PM',
    summary: 'Sarah experiences an HVAC breakdown at night. She finds Coastal HVAC on Google.',
    detail: 'The Smart Website™ loads immediately on mobile. Clear trust indicators, service options, and immediate action options reassure her.',
    icon: Zap,
    outcome: 'FOUND IMMEDIATELY & TRUST ESTABLISHED',
    imageFrame: {
      tag: '16:9 EDITORIAL LANDSCAPE',
      title: 'HOMEOWNER DISCOVERY SCENE',
      desc: 'Sarah searching on smartphone at night outside home during HVAC failure',
    },
  },
  {
    id: 'engage',
    stage: 'ENGAGE',
    title: 'After-Hours Conversation',
    time: '9:32 PM',
    summary: 'Conversational Concierge™ opens an immediate after-hours dialogue.',
    detail: 'Instead of forcing Sarah to fill out a static contact form or wait until morning, Concierge understands her system symptoms and urgency.',
    icon: MessageSquare,
    outcome: 'CUSTOMER GETTING AN ANSWER WHILE OWNER IS BUSY',
    imageFrame: {
      tag: '4:5 PORTRAIT ARCHITECTURE',
      title: 'CONVERSATION ON MOBILE',
      desc: 'Close-up of friendly mobile web conversation interface',
    },
  },
  {
    id: 'convert',
    stage: 'CONVERT',
    title: 'Service Request Captured',
    time: '9:35 PM',
    summary: 'Priority morning service appointment requested and logged into CRM.',
    detail: 'Sarah receives an immediate SMS booking confirmation. On-call technician receives priority dispatch notification.',
    icon: Calendar,
    outcome: 'REQUEST CAPTURED WITHOUT MANUAL ENTRY',
    imageFrame: {
      tag: '3:2 SCENE ARCHITECTURE',
      title: 'INSTANT CONFIRMATION',
      desc: 'Mobile screen receiving instant SMS booking confirmation',
    },
  },
  {
    id: 'serve',
    stage: 'SERVE',
    title: 'Professional Service Delivery',
    time: '8:15 AM NEXT DAY',
    summary: 'Master Technician Marcus arrives on time with full context of Sarah\'s issue.',
    detail: 'Service completed quickly. Digital inspection report and receipt sent directly to Sarah\'s mobile device.',
    icon: Wrench,
    outcome: 'CUSTOMER INFORMATION REMEMBERED & SERVICE DELIVERED',
    imageFrame: {
      tag: '4:5 PORTRAIT SCENE',
      title: 'TECHNICIAN AT RESIDENTIAL PROPERTY',
      desc: 'Master technician Marcus greeting homeowner in clean uniform',
    },
  },
  {
    id: 'retain',
    stage: 'RETAIN',
    title: 'Automated Post-Service Care',
    time: '48 HOURS LATER',
    summary: 'Automated 48-hour check-in asks how the system is cooling.',
    detail: 'Follow-up message verifies Sarah\'s satisfaction before requesting a public 5-star review.',
    icon: ShieldCheck,
    outcome: 'FOLLOW-UP HAPPENING WITHOUT OWNER CHASING IT',
    imageFrame: {
      tag: '16:9 EDITORIAL SCENE',
      title: 'HAPPY HOMEOWNER AT HOME',
      desc: 'Sarah comfortably enjoying cool home 48 hours post-service',
    },
  },
  {
    id: 'evangelize',
    stage: 'EVANGELIZE™',
    title: 'Ongoing Relationship & Referrals',
    time: '6 MONTHS LATER',
    summary: 'Seasonal maintenance reminder and simple one-click referral link sent.',
    detail: 'Sarah leaves a 5-star review and refers her neighbor. Don\'t disappear after the sale.',
    icon: HeartHandshake,
    outcome: 'PAST CUSTOMER RECEIVING TIMELY REMINDER & REFERRING OTHERS',
    imageFrame: {
      tag: '3:2 EDITORIAL SCENE',
      title: 'NEIGHBORHOOD REFERRAL',
      desc: 'Sarah recommending Coastal HVAC to neighbor in residential driveway',
    },
  },
];

export const CustomerJourneyStory = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const currentStage = JOURNEY_STAGES[activeStepIndex];
  const IconComp = currentStage.icon;

  return (
    <div className="journey-story-experience">
      <div className="journey-header">
        <span className="home-eyebrow">
          <span className="eyebrow-rule" /> CUSTOMER LIFECYCLE & OUTCOMES
        </span>
        <h2 className="journey-headline">
          WINNING THE CUSTOMER<br />
          <em className="gold-accent">IS ONLY THE BEGINNING.</em>
        </h2>
        <p className="journey-lede">
          Follow the journey of <strong>ONE CUSTOMER</strong>—from initial discovery to long-term relationship.
          Technology supports every step while keeping the human customer at the center.
        </p>
      </div>

      {/* Lifecycle Progress Bar */}
      <div className="journey-lifecycle-bar" role="tablist" aria-label="Customer Lifecycle Stages">
        {JOURNEY_STAGES.map((item, idx) => {
          const isActive = idx === activeStepIndex;
          const isPassed = idx < activeStepIndex;
          return (
            <React.Fragment key={item.id}>
              <button
                type="button"
                className={`lifecycle-tab ${isActive ? 'is-active' : ''} ${isPassed ? 'is-passed' : ''}`}
                onClick={() => setActiveStepIndex(idx)}
                role="tab"
                aria-selected={isActive}
              >
                <span className="step-num">0{idx + 1}</span>
                <span className="step-name">{item.stage}</span>
              </button>
              {idx < JOURNEY_STAGES.length - 1 && (
                <ChevronRight size={16} className={`step-arrow ${isPassed ? 'is-passed' : ''}`} />
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Narrative Stage with Image Architecture */}
      <div className="journey-story-stage">
        <div className="protagonist-badge-bar">
          <div className="protagonist-profile">
            <div className="protagonist-avatar">
              <User size={18} />
            </div>
            <div className="protagonist-info">
              <span className="profile-label">CUSTOMER PROTAGONIST</span>
              <strong className="profile-name">Sarah M. • Homeowner in Chesapeake</strong>
            </div>
          </div>
          <div className="stage-time-badge">
            <span className="time-label">TIMELINE MOMENT:</span>
            <strong className="time-value">{currentStage.time}</strong>
          </div>
        </div>

        <div className="story-content-grid">
          <div className="story-main">
            <div className="stage-indicator-row">
              <div className="stage-icon-box">
                <IconComp size={20} />
              </div>
              <div className="stage-title-wrap">
                <span className="stage-eyebrow">STAGE 0{activeStepIndex + 1} • {currentStage.stage}</span>
                <h3>{currentStage.title}</h3>
              </div>
            </div>

            <p className="story-summary">{currentStage.summary}</p>
            <p className="story-detail">{currentStage.detail}</p>

            {/* Outcome Highlight */}
            <div className="journey-outcome-banner">
              <span className="outcome-tag">REAL BUSINESS OUTCOME</span>
              <strong>{currentStage.outcome}</strong>
            </div>
          </div>

          <div className="story-sidebar">
            {/* Photographic Image Architecture Frame */}
            <div className="journey-image-frame">
              <span className="frame-tag">{currentStage.imageFrame.tag}</span>
              <strong>{currentStage.imageFrame.title}</strong>
              <p>{currentStage.imageFrame.desc}</p>
            </div>

            {currentStage.id === 'evangelize' && (
              <div className="evangelize-callout-box">
                <span className="evangelize-tag">EVANGELIZE™ PRINCIPLE</span>
                <strong>DON'T DISAPPEAR AFTER THE SALE.</strong>
                <p>Thank-you communication, education, service reminders, seasonal care, and referral requests keep customers engaged long-term.</p>
              </div>
            )}
          </div>
        </div>

        {/* Step Navigation Controls */}
        <div className="journey-nav-controls">
          <button
            type="button"
            className="journey-prev-btn"
            disabled={activeStepIndex === 0}
            onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
          >
            ← PREVIOUS STAGE
          </button>
          <div className="journey-dots">
            {JOURNEY_STAGES.map((_, idx) => (
              <span
                key={idx}
                className={`dot ${idx === activeStepIndex ? 'active' : ''}`}
                onClick={() => setActiveStepIndex(idx)}
              />
            ))}
          </div>
          <button
            type="button"
            className="journey-next-btn"
            disabled={activeStepIndex === JOURNEY_STAGES.length - 1}
            onClick={() => setActiveStepIndex((prev) => Math.min(JOURNEY_STAGES.length - 1, prev + 1))}
          >
            NEXT STAGE →
          </button>
        </div>
      </div>
    </div>
  );
};
