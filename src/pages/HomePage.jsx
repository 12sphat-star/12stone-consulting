import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  ArrowDownRight,
  ArrowRight,
  Check,
  ChevronRight,
  MessagesSquare,
  ShieldCheck,
  Sparkles,
  UserRound,
  Users,
} from 'lucide-react';
import { Button } from '../components/shared/Button';
import '../styles/HomePage.css';

const industryPreviewData = [
  { title: 'Home Services', slug: 'home-services', accent: 'gold', description: 'Urgency, fast action, service response, and repeat work.' },
  { title: 'Professional Services', slug: 'professional-services', accent: 'navy', description: 'Authority, trust, process clarity, and consultation flow.' },
  { title: 'Healthcare & Wellness', slug: 'healthcare-wellness', accent: 'sage', description: 'Trust, appointment clarity, and patient communication.' },
  { title: 'Financial & Insurance', slug: 'financial-insurance', accent: 'sand', description: 'Education, nurture, and long-term relationship management.' },
  { title: 'Beauty & Aesthetics', slug: 'beauty-aesthetics', accent: 'rose', description: 'Visual proof, booking, and rebooking momentum.' },
  { title: 'Construction & B2B', slug: 'construction-b2b', accent: 'steel', description: 'Capability, projects, qualification, and follow-up.' },
];

const customerStages = ['ATTRACT', 'ENGAGE', 'CONVERT', 'SERVE', 'RETAIN', 'EVANGELIZE™'];
const businessFlow = ['GET FOUND', 'CONTACT', 'RESPOND', 'FOLLOW UP', 'CUSTOMER', 'RETAIN', 'EVANGELIZE™'];
const employeeFlow = ['ONBOARD', 'COMMUNICATE', 'ENGAGE', 'SUPPORT', 'RETAIN'];
const customerSystemCapabilities = ['Smart Websites™', 'Lead capture', '24/7 communication', 'AI-enabled conversations', 'CRM', 'Pipelines', 'Scheduling', 'Automated follow-up', 'Reputation', 'Customer retention', 'Reactivation', 'Evangelize™'];
const employeeSystemCapabilities = ['Onboarding communication', 'Internal communication', 'Employee engagement', 'Information & resources', 'Automated touchpoints', 'Recognition check-ins', 'Retention communication', 'Employee support'];

const Reveal = ({ children, className = '' }) => (
  <div className={`home-reveal ${className}`}>{children}</div>
);

const SmartSystemVisual = () => (
  <div className="smart-system-visual" aria-label="Connected customer and employee system diagram">
    <div className="browser-shell">
      <div className="browser-toolbar">
        <span />
        <span />
        <span />
      </div>
      <div className="browser-content">
        <div className="browser-panel browser-panel-main">
          <div className="panel-label">Website</div>
          <div className="browser-lines">
            <i />
            <i />
            <i />
            <i />
          </div>
        </div>
        <div className="browser-panel browser-panel-side">
          <div className="panel-label">Inquiry</div>
          <div className="mini-chip">NEW INQUIRY<br />CAPTURED</div>
        </div>
      </div>
    </div>
    <div className="phone-shell">
      <div className="phone-notch" />
      <div className="phone-screen">
        <span>FOLLOW-UP</span>
        <strong>ACTIVE</strong>
      </div>
    </div>
    <div className="status-thread status-thread-top">
      <span>APPOINTMENT REQUEST<br />RECEIVED</span>
    </div>
    <div className="status-thread status-thread-mid">
      <span>MISS CALL<br />RESPONSE SENT</span>
    </div>
    <div className="status-thread status-thread-bottom">
      <span>CUSTOMER<br />NURTURE ACTIVE</span>
    </div>
  </div>
);

export const HomePage = () => {
  const { hash } = useLocation();

  useEffect(() => {
    const elements = document.querySelectorAll('.home-reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hash) return;
    const target = document.querySelector(hash);
    if (target) window.requestAnimationFrame(() => target.scrollIntoView({ behavior: 'smooth' }));
  }, [hash]);

  return (
    <div className="homepage">
      <section className="home-hero">
        <div className="container hero-layout">
          <Reveal className="hero-copy">
            <span className="home-eyebrow"><span className="eyebrow-rule" /> 12 Stone Consulting <span className="eyebrow-divider">•</span> Custom Business Systems</span>
            <h1>
              YOU DON'T NEED A BIG COMPANY<br />
              <em>TO COMPETE LIKE ONE.</em>
            </h1>
            <p className="hero-lede">
              12 Stone designs custom customer and employee systems that give small businesses capabilities once associated with much larger companies.
            </p>
            <div className="hero-actions">
              <Button to="/smart-websites" variant="brass" icon={ArrowRight}>SEE WHAT'S POSSIBLE</Button>
              <Button to="/business-snapshot" variant="outline">GET YOUR BUSINESS SNAPSHOT™</Button>
            </div>
          </Reveal>

          <Reveal className="hero-visual-wrap">
            <SmartSystemVisual />
          </Reveal>
        </div>
        <div className="hero-scroll-cue"><ArrowDownRight size={17} /> <span>Start here</span></div>
      </section>

      <section className="philosophy-section section-padding">
        <div className="container philosophy-layout">
          <Reveal className="philosophy-copy">
            <span className="home-eyebrow">WE DON'T PUT YOUR BUSINESS IN A WEBSITE.</span>
            <h2>
              WE BUILD THE WEBSITE<br />
              <em>AROUND YOUR BUSINESS.</em>
            </h2>
            <p>
              A 12 Stone Smart Website™ begins with the business, its customers and the way those customers actually move through the company.
            </p>
            <div className="journey-rail" aria-label="Business to smart website journey">
              <span>YOUR BUSINESS</span>
              <ArrowDownRight size={18} />
              <span>YOUR CUSTOMER</span>
              <ArrowDownRight size={18} />
              <span>CUSTOMER JOURNEY</span>
              <ArrowDownRight size={18} />
              <span>CUSTOM SYSTEM</span>
              <ArrowDownRight size={18} />
              <span>SMART WEBSITE™</span>
            </div>
            <Button to="/how-we-think" variant="brass" icon={ArrowRight}>SEE HOW WE THINK</Button>
          </Reveal>

          <Reveal className="philosophy-panel">
            <div className="panel-grid-2">
              <div className="mini-visual-card">
                <div className="mini-icon"><Users size={18} /></div>
                <span>Customer journey</span>
              </div>
              <div className="mini-visual-card highlight-card">
                <div className="mini-icon"><Sparkles size={18} /></div>
                <span>Smart system</span>
              </div>
              <div className="mini-visual-card dark-card">
                <div className="mini-icon"><MessagesSquare size={18} /></div>
                <span>Response + follow-up</span>
              </div>
              <div className="mini-visual-card dark-card">
                <div className="mini-icon"><ShieldCheck size={18} /></div>
                <span>Trust + retention</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="showcase-section section-padding">
        <div className="container">
          <Reveal className="section-heading-wrap showcase-heading">
            <span className="home-eyebrow">SMART WEBSITE™ SHOWCASE</span>
            <h2>WE DON'T BUILD THE SAME WEBSITE SIX TIMES.</h2>
            <p className="emphasis-line">SEE WHAT CUSTOM LOOKS LIKE.</p>
            <p>Different businesses have different customers, workflows and goals. Explore how a 12 Stone Smart Website™ can be designed around the way each business actually works.</p>
          </Reveal>

          <div className="industry-grid">
            {industryPreviewData.map(({ title, slug, accent, description }) => (
              <Reveal key={slug} className={`industry-card accent-${accent}`}>
                <Button to={`/portfolio/${slug}`} className="industry-link" variant="outline">
                  <span className="industry-meta">{title}</span>
                  <span className="industry-description">{description}</span>
                  <span className="industry-arrow"><ArrowRight size={18} /></span>
                </Button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="lifecycle-section section-padding">
        <div className="container lifecycle-layout">
          <Reveal className="lifecycle-copy">
            <span className="home-eyebrow">CUSTOMER LIFECYCLE</span>
            <h2>WINNING THE CUSTOMER IS ONLY THE BEGINNING.</h2>
          </Reveal>
          <Reveal className="customer-lifecycle">
            {customerStages.map((stage, index) => (
              <React.Fragment key={stage}>
                <div className="lifecycle-step">
                  <span>{stage}</span>
                </div>
                {index < customerStages.length - 1 && <ChevronRight size={18} className="lifecycle-arrow" />}
              </React.Fragment>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="understand-section section-padding">
        <div className="container understand-layout">
          <Reveal className="understand-copy">
            <span className="home-eyebrow">HOW WE THINK</span>
            <h2>BEFORE WE BUILD ANYTHING,<br /><em>WE UNDERSTAND YOUR BUSINESS.</em></h2>
            <p>Technology comes second. Your business comes first.</p>
            <Button to="/how-we-think" variant="brass" icon={ArrowRight}>EXPLORE HOW WE THINK</Button>
          </Reveal>

          <Reveal className="flow-panel">
            <div className="flow-stack">
              {businessFlow.map((step, index) => (
                <React.Fragment key={step}>
                  <div className="flow-pill">{step}</div>
                  {index < businessFlow.length - 1 && <ArrowDownRight size={16} className="flow-divider" />}
                </React.Fragment>
              ))}
            </div>
            <div className="employee-flow">
              <span className="employee-flow-label">EMPLOYEE PATHWAY</span>
              {employeeFlow.map((step, index) => (
                <React.Fragment key={step}>
                  <div className="flow-pill muted">{step}</div>
                  {index < employeeFlow.length - 1 && <ArrowDownRight size={16} className="flow-divider" />}
                </React.Fragment>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="workflow-section section-padding">
        <div className="container workflow-layout">
          <Reveal className="workflow-copy">
            <span className="home-eyebrow">ILLUSTRATIVE WORKFLOW</span>
            <h2>YOUR BUSINESS MAY CLOSE.<br /><em>THE CONVERSATION DOESN'T HAVE TO.</em></h2>
          </Reveal>
          <Reveal className="workflow-panel">
            <div className="workflow-events">
              <div className="workflow-row"><span>7:18 PM</span><strong>Website visitor</strong></div>
              <div className="workflow-row"><span>7:19 PM</span><strong>Conversation begins</strong></div>
              <div className="workflow-row"><span>7:21 PM</span><strong>Need captured</strong></div>
              <div className="workflow-row"><span>7:23 PM</span><strong>Appointment request</strong></div>
              <div className="workflow-row active"><span>FOLLOW-UP</span><strong>ACTIVE</strong></div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="system-family-section section-padding">
        <div className="container system-family-layout">
          <Reveal className="system-family-copy">
            <span className="home-eyebrow">CUSTOMER + EMPLOYEE SYSTEMS</span>
            <h2>NOT EVERY BUSINESS NEEDS<br /><em>EVERY CAPABILITY.</em></h2>
            <p>That's the point. We build around your business — not around a package.</p>
          </Reveal>

          <Reveal className="system-grid">
            <div className="system-card customer-system">
              <div className="system-card-header"><span>CUSTOMER SYSTEMS</span><UserRound size={18} /></div>
              <ul>
                {customerSystemCapabilities.map((item) => <li key={item}><Check size={16} />{item}</li>)}
              </ul>
            </div>
            <div className="system-card employee-system">
              <div className="system-card-header"><span>EMPLOYEE SYSTEMS</span><Users size={18} /></div>
              <ul>
                {employeeSystemCapabilities.map((item) => <li key={item}><Check size={16} />{item}</li>)}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="methodology-section section-padding">
        <div className="container methodology-layout">
          <Reveal className="methodology-copy">
            <span className="home-eyebrow">BUSINESS FIRST. TECHNOLOGY SECOND.</span>
            <h2>DISCOVER → DESIGN → BUILD → CONNECT → OPTIMIZE</h2>
            <p>We don't begin with software. We begin by understanding how your business gets customers, communicates, follows up, operates and maintains relationships. Then we determine what should be improved, automated or connected.</p>
          </Reveal>
        </div>
      </section>

      <section id="business-snapshot" className="snapshot-section section-padding">
        <div className="container snapshot-wrap">
          <Reveal className="snapshot-header">
            <span className="home-eyebrow">THE 12 STONE BUSINESS SNAPSHOT™</span>
            <h2>HOW WELL IS YOUR BUSINESS<br /><em>BUILT TO COMPETE?</em></h2>
          </Reveal>
          <Reveal className="snapshot-pills">
            {['DIGITAL PRESENCE', 'CUSTOMER RESPONSE', 'FOLLOW-UP', 'CUSTOMER RETENTION', 'EVANGELIZE™ / ONGOING NURTURE', 'BUSINESS AUTOMATION', 'EMPLOYEE ENGAGEMENT'].map((label) => (
              <span key={label}>{label}</span>
            ))}
          </Reveal>
          <Reveal className="snapshot-copy-row">
            <p>See what's working, where capability gaps may exist, and what deserves attention first.</p>
            <Button to="/business-snapshot" variant="brass" icon={ArrowRight}>GET MY BUSINESS SNAPSHOT™</Button>
          </Reveal>
        </div>
      </section>
    </div>
  );
};
