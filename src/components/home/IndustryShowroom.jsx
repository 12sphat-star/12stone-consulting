import React, { useState } from 'react';
import {
  ArrowRight,
  Globe,
  MessageCircle,
  PhoneCall,
  Sparkles,
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
          <div className="showroom-featured-concept hs-showcase">
            <div className="hs-concept-label">12 STONE INDUSTRY CONCEPT <span>HOME SERVICES</span></div>
            <div className="hs-composition">
              <div className="hs-browser">
                <div className="hs-browser-chrome"><div className="window-dots"><span className="dot dot-close" /><span className="dot dot-min" /><span className="dot dot-expand" /></div><div className="hs-address"><Globe size={11} /> coastandcraft.com</div><span>SMART WEBSITE™</span></div>
                <div className="hs-site">
                  <nav className="hs-site-nav"><div className="hs-brand"><span>H</span><strong>HOME SERVICES</strong></div><div className="hs-menu"><span>SERVICES</span><span>SERVICE AREA</span><span>ABOUT</span><span>REVIEWS</span><span>CONTACT</span></div><div className="hs-nav-actions"><span className="hs-call"><PhoneCall size={13} /> CALL NOW</span><b>REQUEST SERVICE</b></div></nav>
                  <section className="hs-hero"><div className="hs-hero-copy"><span className="hs-kicker">CARE FOR THE PLACE YOU CALL HOME</span><h3>YOUR HOME.<br /><em>TAKEN CARE OF.</em></h3><p>Professional service when you need it.</p><div className="hs-buttons"><b>REQUEST SERVICE <ArrowRight size={14} /></b><span><PhoneCall size={14} /> CALL NOW</span></div><small>Heating <i>•</i> Cooling <i>•</i> Plumbing <i>•</i> Electrical</small></div><div className="hs-image hs-hero-image"><span>HOME SERVICES HERO IMAGE</span><small>Technician + home + homeowner context</small></div></section>
                  <section className="hs-services"><div className="hs-section-heading"><span>WHAT WE DO</span><h4>HOW CAN WE HELP?</h4></div><div className="hs-service-grid"><div className="hs-service"><div className="hs-image hs-heating"><span>HVAC SERVICE</span></div><strong>HEATING &amp; COOLING</strong><small>Comfort, maintenance, and repairs.</small></div><div className="hs-service"><div className="hs-image hs-plumbing"><span>PLUMBING SERVICE</span></div><strong>PLUMBING</strong><small>Thoughtful fixes for everyday living.</small></div><div className="hs-service"><div className="hs-image hs-electrical"><span>ELECTRICAL SERVICE</span></div><strong>ELECTRICAL</strong><small>Powering your home with care.</small></div></div></section>
                  <section className="hs-trust"><div className="hs-image hs-trust-image"><span>TECHNICIAN + HOMEOWNER</span></div><div><span className="hs-kicker">SERVICE YOU CAN FEEL GOOD ABOUT</span><h4>Clear communication.<br />Professional service.</h4><p>From the first conversation to the final check, every step is designed to feel straightforward.</p><div className="hs-trust-points"><span>Convenient scheduling</span><span>Responsive support</span></div></div></section>
                  <section className="hs-feedback"><div><span className="hs-kicker">CUSTOMER FEEDBACK</span><h4>WHAT CUSTOMERS<br />ARE SAYING</h4><p>A dedicated place for verified customer feedback when real reviews are ready to be shared.</p></div><div className="hs-feedback-placeholder"><span>REVIEW EXPERIENCE</span><small>Verified feedback can live here</small></div></section>
                  <div className="hs-chat-entry"><MessageCircle size={18} /><div><strong>NEED HELP?</strong><span><i className="hs-online-dot" /> Talk with us. Available</span></div><ArrowRight size={15} /><div className="hs-chat-panel"><strong>HI! HOW CAN WE HELP TODAY?</strong><span>Heating &amp; Cooling</span><span>Plumbing</span><span>Electrical</span><span>Something Else</span><small>CUSTOMER: “My AC is running but not cooling.”</small><p>CONCIERGE: I can help you get a service request started.</p><b>REQUEST SERVICE <ArrowRight size={12} /></b></div></div>
                </div>
              </div>
              <div className="hs-phone"><div className="hs-phone-speaker" /><div className="hs-mobile-site"><div className="hs-mobile-nav"><span>H</span><PhoneCall size={14} /></div><div className="hs-image hs-mobile-image"><span>HOME + TECHNICIAN</span></div><span className="hs-kicker">CARE FOR YOUR HOME</span><h4>YOUR HOME.<br /><em>TAKEN CARE OF.</em></h4><b className="hs-mobile-request">REQUEST SERVICE <ArrowRight size={13} /></b><div className="hs-mobile-links"><span><PhoneCall size={13} /> CALL NOW</span><span><MessageCircle size={13} /> NEED HELP?</span></div><div className="hs-mobile-services"><strong>SERVICES</strong><span>Heating &amp; Cooling</span><span>Plumbing</span><span>Electrical</span></div><div className="hs-review-moment"><span className="hs-kicker">SERVICE COMPLETE</span><p>Thanks for choosing us today.<br />We'd appreciate your feedback.</p><b>LEAVE A REVIEW <ArrowRight size={11} /></b><small>You choose whether and where to share.</small></div></div></div>
            </div>
            <div className="hs-system-cues"><span>REQUEST SERVICE</span><b>→</b><span>SERVICE COMPLETED</span><b>→</b><span>REVIEW REQUEST SENT</span><b>→</b><span>RELATIONSHIP CONTINUES</span></div>
            <div className="showroom-footer-row hs-showroom-footer"><div className="footer-copy-wrap"><h3>{activeIndustry.title}</h3><p>{activeIndustry.description}</p></div><Button to={`/portfolio/${activeIndustry.slug}`} variant="brass" icon={ArrowRight}>EXPLORE HOME SERVICES →</Button></div>
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
