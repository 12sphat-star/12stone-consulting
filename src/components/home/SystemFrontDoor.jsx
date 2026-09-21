import React, { useState } from 'react';
import { Globe, ArrowRight, Zap, CheckCircle2, ShieldCheck, Database, Calendar, MessageSquare, PhoneCall, Star, RefreshCw, HeartHandshake, Layers } from 'lucide-react';
import { Button } from '../shared/Button';

const OUTCOME_CAPABILITIES = [
  { id: 'lead-capture', outcome: 'INQUIRIES CAPTURED IMMEDIATELY', tech: 'Lead Capture', category: 'Attract & Engage', icon: Zap, description: 'Captures inquiries from website, phone, and chat instantly into your action pipeline.' },
  { id: 'phone-comm', outcome: 'CUSTOMER GETTING AN ANSWER WHILE OWNER IS BUSY', tech: 'Voice Concierge', category: 'Conversational', icon: PhoneCall, description: 'After-hours voice concierge handles calls and routes urgent service needs.' },
  { id: 'web-conversations', outcome: '24/7 ASSISTANCE ON YOUR FRONT DOOR', tech: 'Intelligent Web Chat', category: 'Conversational', icon: MessageSquare, description: 'Intelligent website conversation that answers questions and guides visitors to request service.' },
  { id: 'crm-pipelines', outcome: 'CUSTOMER INFORMATION REMEMBERED', tech: 'CRM & Pipeline System', category: 'Operations', icon: Database, description: 'Stores every customer history, conversation context, and service record in one place.' },
  { id: 'scheduling', outcome: 'SERVICE REQUESTS BOOKED DIRECTLY', tech: 'Direct Scheduling', category: 'Operations', icon: Calendar, description: 'Allows customers to request specific service windows aligned to technician availability.' },
  { id: 'auto-followup', outcome: 'FOLLOW-UP HAPPENING WITHOUT OWNER CHASING IT', tech: 'Automated Follow-up', category: 'Response', icon: RefreshCw, description: 'Instant SMS and email follow-ups so prospective clients are never left waiting.' },
  { id: 'messaging', outcome: 'SINGLE INBOX FOR ALL COMMUNICATIONS', tech: 'Unified Messaging', category: 'Response', icon: MessageSquare, description: 'Brings SMS, email, and web chat into one unified view for effortless team response.' },
  { id: 'reputation', outcome: 'HAPPY CUSTOMER RECEIVING A REVIEW REQUEST', tech: 'Reputation Automation', category: 'Evangelize™', icon: Star, description: 'Automatically requests reviews from satisfied clients right after service delivery.' },
  { id: 'nurture', outcome: 'PAST CUSTOMER RECEIVING A TIMELY SERVICE REMINDER', tech: 'Customer Nurture', category: 'Evangelize™', icon: HeartHandshake, description: 'Sends seasonal maintenance check-ins and care reminders so customers stay loyal.' },
  { id: 'reactivation', outcome: 'PREVIOUS CLIENTS RE-ENGAGED AUTOMATICALLY', tech: 'Reactivation Engine', category: 'Evangelize™', icon: RefreshCw, description: 'Re-engages inactive accounts with relevant seasonal offers and tune-up reminders.' },
  { id: 'retention', outcome: 'LONG-TERM CUSTOMER LOYALTY WORKFLOWS', tech: 'Retention Workflows', category: 'Evangelize™', icon: ShieldCheck, description: 'Keeps your business top of mind through regular post-service care and updates.' },
  { id: 'evangelize', outcome: 'CUSTOMERS TURNING INTO REFERRAL SOURCES', tech: 'Evangelize™ System', category: 'Evangelize™', icon: Layers, description: 'Encourages satisfied clients to refer friends and colleagues with trackable sharing.' },
];

export const SystemFrontDoor = () => {
  const [activeCapability, setActiveCapability] = useState(OUTCOME_CAPABILITIES[0]);

  return (
    <div className="frontdoor-experience">
      <div className="frontdoor-header">
        <span className="home-eyebrow">
          <span className="eyebrow-rule" /> THE SMART WEBSITE SYSTEM™
        </span>
        <h2 className="frontdoor-headline">
          THE WEBSITE IS ONLY<br />
          <em className="gold-accent">THE FRONT DOOR.</em>
        </h2>
        <div className="frontdoor-distinction">
          <div className="distinction-card website-card">
            <span className="distinction-badge">CUSTOMER FRONT DOOR</span>
            <h3>SMART WEBSITE™</h3>
            <p>Customer-facing digital experience designed to command trust, showcase capabilities, and drive service requests.</p>
          </div>
          <div className="distinction-divider">
            <ArrowRight size={20} className="divider-arrow" />
          </div>
          <div className="distinction-card system-card">
            <span className="distinction-badge gold">BUSINESS OUTCOME SYSTEM</span>
            <h3>SMART WEBSITE SYSTEM™</h3>
            <p>Connected business ecosystem behind the front door that powers communication, follow-up, and customer retention.</p>
          </div>
        </div>
      </div>

      {/* Interactive Connected Ecosystem Visualization */}
      <div className="frontdoor-ecosystem-stage">
        <div className="ecosystem-layout">
          {/* Central Smart Website Front Door Node */}
          <div className="central-frontdoor-node">
            <div className="node-content">
              <div className="node-icon-wrap">
                <Globe size={24} />
              </div>
              <span className="node-tag">FRONT DOOR</span>
              <strong className="node-title">SMART WEBSITE™</strong>
              <span className="node-url">yourbusiness.com</span>
            </div>
            <div className="frontdoor-badge">BUSINESS OUTCOME ENGINE</div>
          </div>

          {/* Connected Pathways Grid */}
          <div className="connected-capabilities-grid">
            <div className="grid-header">
              <span className="grid-title">CONNECTED BUSINESS OUTCOMES</span>
              <span className="grid-subtext">Click any business outcome to trace active system integration</span>
            </div>

            <div className="capabilities-pills-wrap">
              {OUTCOME_CAPABILITIES.map((cap) => {
                const Icon = cap.icon;
                const isSelected = activeCapability.id === cap.id;
                return (
                  <button
                    key={cap.id}
                    type="button"
                    className={`capability-pill ${isSelected ? 'is-selected' : ''}`}
                    onClick={() => setActiveCapability(cap)}
                  >
                    <Icon size={14} className="pill-icon" />
                    <span>{cap.outcome}</span>
                    {isSelected && <CheckCircle2 size={12} className="check-icon" />}
                  </button>
                );
              })}
            </div>

            {/* Active Outcome Detail Card */}
            <div className="active-capability-detail">
              <div className="detail-header">
                <div className="detail-icon-wrap">
                  {React.createElement(activeCapability.icon, { size: 18 })}
                </div>
                <div className="detail-title-wrap">
                  <span className="category-tag">{activeCapability.category} • {activeCapability.tech}</span>
                  <h4>{activeCapability.outcome}</h4>
                </div>
              </div>
              <p className="detail-description">{activeCapability.description}</p>
              <div className="detail-connection-path">
                <span className="path-label">SYSTEM CONNECTION:</span>
                <span className="path-step">SMART WEBSITE™ FRONT DOOR</span>
                <ArrowRight size={12} />
                <span className="path-step gold">{activeCapability.outcome}</span>
                <ArrowRight size={12} />
                <span className="path-step">REAL BUSINESS RESULT</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="frontdoor-footer-note">
        <p>
          12 Stone designs the system around your real operations and configures technology to power it.
          Not every business needs every capability—we build around how your business actually operates.
        </p>
        <Button to="/customer-systems" variant="outline" icon={ArrowRight}>
          EXPLORE CUSTOMER SYSTEMS
        </Button>
      </div>
    </div>
  );
};
