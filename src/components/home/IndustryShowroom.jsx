import React, { useState } from 'react';
import {
  ArrowRight,
  Clock,
  Globe,
  PhoneCall,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Zap,
} from 'lucide-react';
import { Button } from '../shared/Button';

const INDUSTRIES = [
  {
    id: 'home-services',
    slug: 'home-services',
    title: 'HOME SERVICES',
    tagline: 'Urgency, fast action, service response, and repeat work.',
    isFeatured: true,
    description: 'Designed around urgency, trust and moving a customer from "I need help" to requested service quickly.',
  },
  {
    id: 'professional-services',
    slug: 'professional-services',
    title: 'PROFESSIONAL SERVICES',
    tagline: 'Authority, trust, process clarity, and consultation flow.',
    isFeatured: false,
    description: 'Designed around authority, expertise, consultation and qualified inquiry.',
  },
  {
    id: 'healthcare-wellness',
    slug: 'healthcare-wellness',
    title: 'HEALTHCARE & WELLNESS',
    tagline: 'Trust, appointment clarity, and patient communication.',
    isFeatured: false,
    description: 'Designed around trust, clarity, accessibility and appointment communication.',
  },
  {
    id: 'financial-insurance',
    slug: 'financial-insurance',
    title: 'FINANCIAL & INSURANCE',
    tagline: 'Education, nurture, and long-term relationship management.',
    isFeatured: false,
    description: 'Designed around education, trust, lead nurture and long-term relationship management.',
  },
  {
    id: 'beauty-aesthetics',
    slug: 'beauty-aesthetics',
    title: 'BEAUTY & AESTHETICS',
    tagline: 'Visual proof, booking, and rebooking momentum.',
    isFeatured: false,
    description: 'Designed around visual proof, booking, rebooking and ongoing customer nurture.',
  },
  {
    id: 'construction-b2b',
    slug: 'construction-b2b',
    title: 'CONSTRUCTION & B2B',
    tagline: 'Capability, projects, qualification, and follow-up.',
    isFeatured: false,
    description: 'Designed around capabilities, project credibility, qualification and longer-cycle follow-up.',
  },
];

export const IndustryShowroom = () => {
  const [activeId, setActiveId] = useState('home-services');
  const activeIndustry = INDUSTRIES.find((i) => i.id === activeId) || INDUSTRIES[0];

  return (
    <div className="industry-showroom" aria-label="12 Stone Smart Website Digital Showroom">
      {/* Accessible Industry Selector Navigation Bar */}
      <div className="showroom-selector-bar" role="tablist" aria-label="Industry Showcase Selector">
        {INDUSTRIES.map((ind) => {
          const isSelected = ind.id === activeId;
          return (
            <button
              key={ind.id}
              type="button"
              role="tab"
              id={`tab-${ind.id}`}
              aria-selected={isSelected}
              aria-controls={`panel-${ind.id}`}
              className={`showroom-tab ${isSelected ? 'is-active' : ''}`}
              onClick={() => setActiveId(ind.id)}
            >
              <span className="tab-title">{ind.title}</span>
              {isSelected && <span className="tab-active-indicator" />}
            </button>
          );
        })}
      </div>

      {/* Main Digital Showroom Display Surface */}
      <div className="showroom-display-panel" id={`panel-${activeIndustry.id}`} role="tabpanel" aria-labelledby={`tab-${activeIndustry.id}`}>
        {activeIndustry.isFeatured ? (
          /* FEATURED HOME SERVICES CONCEPT EXPERIENCE */
          <div className="showroom-featured-concept">
            <div className="concept-meta-header">
              <span className="concept-credibility-tag">12 STONE INDUSTRY CONCEPT</span>
              <span className="concept-industry-badge">HOME SERVICES</span>
            </div>

            {/* Main Visual Composition: Desktop Browser + Mobile Phone + System Pathway */}
            <div className="concept-visual-surface">
              {/* Dominant Desktop Smart Website™ Browser */}
              <div className="showroom-browser-shell">
                <div className="showroom-browser-toolbar">
                  <div className="window-dots">
                    <span className="dot dot-close" />
                    <span className="dot dot-min" />
                    <span className="dot dot-expand" />
                  </div>
                  <div className="url-bar">
                    <Globe size={11} className="url-icon" />
                    <span>12stoneconcept.com/home-services</span>
                  </div>
                  <span className="browser-badge">SMART WEBSITE™</span>
                </div>

                <div className="showroom-browser-viewport">
                  {/* Website Nav */}
                  <div className="concept-site-nav">
                    <div className="site-brand">
                      <span className="brand-mark">H</span>
                      <span className="brand-title">HOME SERVICES</span>
                    </div>
                    <div className="site-menu">
                      <span>Services</span>
                      <span>Coverage</span>
                      <span>Contact</span>
                    </div>
                    <div className="site-action-btn">REQUEST SERVICE</div>
                  </div>

                  {/* Concept Hero */}
                  <div className="concept-hero-grid">
                    <div className="concept-hero-left">
                      <span className="urgency-badge">URGENT & EMERGENCY DISPATCH</span>
                      <h3 className="concept-headline">
                        WHEN SOMETHING GOES WRONG,<br />
                        <em>GET HELP FAST.</em>
                      </h3>
                      <p className="concept-subtext">
                        Licensed technicians on call. Immediate service request confirmation.
                      </p>
                      <div className="concept-btn-group">
                        <div className="btn-primary-request">REQUEST SERVICE</div>
                        <div className="btn-secondary-call">
                          <PhoneCall size={12} />
                          <span>CALL NOW</span>
                        </div>
                      </div>
                    </div>

                    {/* Intentional Image Placeholder Architecture */}
                    <div className="concept-image-architecture">
                      <div className="image-placeholder-frame">
                        <div className="frame-overlay-grid" />
                        <div className="frame-content">
                          <ShieldCheck size={28} className="placeholder-icon" />
                          <span className="placeholder-label">SERVICE PROFESSIONAL PHOTOGRAPHY ARCHITECTURE</span>
                          <span className="placeholder-sub">High-resolution technician & homeowner interaction frame</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Overlapping Secondary Mobile Experience */}
              <div className="showroom-phone-shell">
                <div className="phone-notch" />
                <div className="phone-screen">
                  <div className="phone-app-bar">
                    <Smartphone size={10} />
                    <span>12 STONE MOBILE</span>
                  </div>
                  <div className="phone-hero">
                    <span>NEED SERVICE TODAY?</span>
                    <strong>REQUEST SERVICE</strong>
                    <div className="phone-cta-pill">Fast 2-Min Request</div>
                  </div>
                </div>
              </div>

              {/* Subtle Smart Website System™ Pathway (Tertiary Visual) */}
              <div className="showroom-system-pathway">
                <div className="pathway-step is-active">
                  <span className="step-num">1</span>
                  <span className="step-text">REQUEST SERVICE</span>
                </div>
                <span className="pathway-arrow">→</span>
                <div className="pathway-step is-active">
                  <Zap size={11} className="step-icon" />
                  <span className="step-text">LEAD CAPTURED</span>
                </div>
                <span className="pathway-arrow">→</span>
                <div className="pathway-step is-active">
                  <Clock size={11} className="step-icon" />
                  <span className="step-text">FOLLOW-UP READY</span>
                </div>
              </div>
            </div>

            {/* Concept Footer Copy & Action */}
            <div className="showroom-footer-row">
              <div className="footer-copy-wrap">
                <h3>{activeIndustry.title}</h3>
                <p>{activeIndustry.description}</p>
              </div>
              <Button to={`/portfolio/${activeIndustry.slug}`} variant="brass" icon={ArrowRight}>
                EXPLORE HOME SERVICES →
              </Button>
            </div>
          </div>
        ) : (
          /* POLISHED CONCEPT DEVELOPMENT STATE FOR OTHER 5 INDUSTRIES */
          <div className="showroom-dev-concept">
            <div className="concept-meta-header">
              <span className="concept-credibility-tag">12 STONE INDUSTRY CONCEPT</span>
              <span className="dev-status-badge">
                <Sparkles size={11} /> CONCEPT EXPERIENCE IN DEVELOPMENT
              </span>
            </div>

            <div className="dev-concept-body">
              <div className="dev-header-group">
                <h3>{activeIndustry.title}</h3>
                <p className="dev-description">{activeIndustry.description}</p>
              </div>

              <div className="dev-architecture-preview">
                <div className="dev-wire-frame">
                  <Globe size={32} className="dev-icon" />
                  <h4>Custom Digital Experience in Development</h4>
                  <p>12 Stone designs customer journeys specifically around the sales cycle and communication needs of {activeIndustry.title.toLowerCase()}.</p>
                </div>
              </div>

              <div className="showroom-footer-row">
                <div className="footer-copy-wrap">
                  <span className="dev-note">Unique conversion flows, appointment engine & follow-up pathways in development.</span>
                </div>
                <Button to={`/portfolio/${activeIndustry.slug}`} variant="outline" icon={ArrowRight}>
                  EXPLORE CONCEPT →
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
