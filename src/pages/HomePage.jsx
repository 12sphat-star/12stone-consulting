import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  ArrowDownRight,
  ArrowRight,
  CheckCircle2,
  Clock,
  Globe,
  ShieldCheck,
  Smartphone,
  User,
  Zap,
} from 'lucide-react';
import { Button } from '../components/shared/Button';
import { PhilosophyTransformation } from '../components/home/PhilosophyTransformation';
import { IndustryShowroom } from '../components/home/IndustryShowroom';
import { ConversationalConcierge } from '../components/home/ConversationalConcierge';
import { SystemFrontDoor } from '../components/home/SystemFrontDoor';
import { CustomerJourneyStory } from '../components/home/CustomerJourneyStory';
import { TwelveStoneMethod } from '../components/home/TwelveStoneMethod';
import { SnapshotReport } from '../components/home/SnapshotReport';
import '../styles/HomePage.css';

const SYSTEM_MOMENTS = [
  { id: 'inquiry', label: 'INQUIRY CAPTURED', icon: Zap, stepIndex: 1, chipPos: 'top-right' },
  { id: 'response', label: 'RESPONSE SENT', icon: CheckCircle2, stepIndex: 2, chipPos: 'mid-right' },
  { id: 'followup', label: 'FOLLOW-UP ACTIVE', icon: Clock, stepIndex: 3, chipPos: 'bottom-right' },
];

const Reveal = ({ children, className = '' }) => (
  <div className={`home-reveal ${className}`}>{children}</div>
);

const SmartSystemVisual = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 3600);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="smart-system-visual" aria-label="12 Stone Smart Website System Concept Visualizer">
      {/* Gold Pathway Connecting Devices to System Moments */}
      <div className="system-pathways-bg">
        <svg className="pathway-svg" viewBox="0 0 580 480" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M 380 180 Q 440 160, 470 125"
            className={`pathway-line ${activeStep >= 1 ? 'is-active' : ''}`}
          />
          <path
            d="M 410 260 Q 450 240, 480 230"
            className={`pathway-line ${activeStep >= 2 ? 'is-active' : ''}`}
          />
          <path
            d="M 400 350 Q 460 350, 480 340"
            className={`pathway-line ${activeStep >= 3 ? 'is-active' : ''}`}
          />
        </svg>
      </div>

      {/* Human Business Avatar Frame */}
      <div className="hero-human-badge">
        <div className="human-avatar-circle">
          <User size={16} />
        </div>
        <div className="human-details">
          <strong className="human-name">Marcus R. • Lead Service Tech</strong>
          <span className="human-company">Coastal Heating & Cooling</span>
        </div>
        <div className="human-status">SYSTEM ACTIVE</div>
      </div>

      {/* DOMINANT FEATURE #1: Smart Website™ Browser */}
      <div className="browser-shell">
        <div className="browser-toolbar">
          <div className="window-dots">
            <span className="dot dot-close" />
            <span className="dot dot-min" />
            <span className="dot dot-expand" />
          </div>
          <div className="url-bar">
            <Globe size={11} className="url-icon" />
            <span>12stoneconcept.com/home-services</span>
          </div>
          <div className="security-badge">
            SMART WEBSITE™ • HOME SERVICES CONCEPT
          </div>
        </div>

        <div className="browser-viewport">
          <div className="site-header">
            <div className="site-logo">
              <span className="logo-mark">H</span>
              <span className="logo-name">HOME SERVICES</span>
            </div>
            <div className="site-nav-links">
              <span>Services</span>
              <span>Coverage</span>
              <span>Contact</span>
            </div>
            <div className="site-cta-btn">Request Service</div>
          </div>

          <div className="site-hero">
            <div className="site-hero-copy">
              <span className="concept-tag">COMMERCIAL & RESIDENTIAL</span>
              <h3 className="site-headline">YOUR HOME.<br />TAKEN CARE OF.</h3>
              <p className="site-subtext">Professional service when you need it.</p>
              <div className="site-hero-actions">
                <div className="site-primary-btn">
                  REQUEST SERVICE
                </div>
              </div>
            </div>

            <div className="site-service-grid">
              <div className="site-service-item">
                <ShieldCheck size={13} className="item-icon" />
                <span>Heating & Cooling</span>
              </div>
              <div className="site-service-item">
                <Clock size={13} className="item-icon" />
                <span>Plumbing & Water</span>
              </div>
              <div className="site-service-item">
                <Zap size={13} className="item-icon" />
                <span>Electrical & Safety</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURE #2: Overlapping Mobile Customer Interaction */}
      <div className="phone-shell">
        <div className="phone-notch" />
        <div className="phone-top-bar">
          <span className="phone-time">9:41</span>
          <Smartphone size={10} />
        </div>

        <div className="phone-screen">
          <div className="phone-app-header">
            <span className="app-badge">CONNECTED SYSTEM</span>
            <span className="app-title">Customer Interaction</span>
          </div>

          <div className="phone-chat-thread">
            <div className="chat-bubble incoming">
              <span className="sender">Customer</span>
              <p>"Hi, I need someone to look at my AC."</p>
            </div>

            <div className={`chat-bubble outgoing ${activeStep >= 2 ? 'pulse-gold' : ''}`}>
              <span className="sender">Smart System</span>
              <p>"Absolutely. I can help you request service."</p>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURE #3: Three Sequential System Moments */}
      <div className="status-nodes-container">
        {SYSTEM_MOMENTS.map((moment) => {
          const IconComp = moment.icon;
          const isActive = activeStep >= moment.stepIndex;
          return (
            <div
              key={moment.id}
              className={`system-status-chip chip-${moment.chipPos} ${isActive ? 'is-active' : ''}`}
            >
              <div className="chip-icon-wrap">
                <IconComp size={12} />
              </div>
              <span className="chip-label">{moment.label}</span>
              {isActive && <span className="chip-pulse-ring" />}
            </div>
          );
        })}
      </div>
    </div>
  );
};

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
      {/* 1. HERO — COMPETE BIGGER */}
      <section className="home-hero">
        <div className="container hero-layout">
          <Reveal className="hero-copy">
            <span className="home-eyebrow">
              <span className="eyebrow-rule" /> 12 Stone Consulting <span className="eyebrow-divider">•</span> Custom Business Systems
            </span>
            <h1>
              YOU DON'T NEED<br />
              TO BE A BIG<br />
              COMPANY<br />
              <em className="gold-accent">TO COMPETE<br />LIKE ONE.</em>
            </h1>

            <div className="hero-pattern-statement">
              <span className="pattern-line">YOUR WEBSITE SHOULD DO MORE THAN LOOK GOOD.</span>
              <strong className="pattern-bold gold-accent">IT SHOULD DO BUSINESS.</strong>
            </div>

            <p className="hero-lede">
              12 Stone Smart Website Systems™ connect your website with the customer systems behind it—helping you capture opportunities, communicate, follow up, automate and build stronger customer relationships.
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

      {/* 2. CONVERSATIONAL CONCIERGE™ */}
      <section className="concierge-section section-padding dark-section">
        <div className="container">
          <Reveal>
            <ConversationalConcierge />
          </Reveal>
        </div>
      </section>

      {/* 3. SMART WEBSITE™ — SHOW THE PRODUCT */}
      <section className="philosophy-section section-padding light-section">
        <div className="container philosophy-layout">
          <Reveal className="philosophy-copy">
            <span className="home-eyebrow">
              <span className="eyebrow-rule" /> SMART WEBSITE™ PHILOSOPHY
            </span>
            <h2 className="philosophy-headline">
              WE DON'T PUT<br />
              YOUR BUSINESS<br />
              IN A WEBSITE.<br />
              <br />
              WE BUILD THE<br />
              <span className="gold-accent">WEBSITE AROUND<br />YOUR BUSINESS.</span>
            </h2>
            <p className="philosophy-lede">
              Before we design a page, we understand the business behind it—your customers, their journey and what needs to happen next.
            </p>
            <div className="philosophy-actions">
              <Button to="/how-we-think" variant="brass" icon={ArrowRight}>
                SEE HOW WE THINK
              </Button>
            </div>
          </Reveal>

          <Reveal className="philosophy-visual-wrap">
            <PhilosophyTransformation />
          </Reveal>
        </div>
      </section>

      {/* 4. BUILT AROUND YOUR BUSINESS — INDUSTRY SHOWROOM */}
      <section className="showcase-section section-padding dark-section">
        <div className="container">
          <Reveal className="showcase-header-wrap">
            <span className="home-eyebrow">
              <span className="eyebrow-rule" /> SMART WEBSITE™ SHOWCASE
            </span>
            <h2 className="showcase-primary-headline">
              WE DON'T BUILD<br />
              THE SAME WEBSITE<br />
              <span className="gold-accent">SIX TIMES.</span>
            </h2>
            <div className="showcase-secondary-statement">
              BECAUSE YOUR BUSINESS DOESN'T WORK LIKE EVERYONE ELSE'S.
            </div>
            <p className="showcase-subtext">
              Different businesses need different customer journeys, experiences and systems.
            </p>
          </Reveal>

          <Reveal className="showcase-showroom-wrap">
            <IndustryShowroom />
          </Reveal>
        </div>
      </section>

      {/* 5. THE WEBSITE IS ONLY THE FRONT DOOR */}
      <section className="frontdoor-section section-padding light-section">
        <div className="container">
          <Reveal>
            <SystemFrontDoor />
          </Reveal>
        </div>
      </section>

      {/* 6. WINNING THE CUSTOMER IS ONLY THE BEGINNING — CUSTOMER JOURNEY */}
      <section className="journey-section section-padding dark-section">
        <div className="container">
          <Reveal>
            <CustomerJourneyStory />
          </Reveal>
        </div>
      </section>

      {/* 7. HOW WE BUILD — 12 STONE METHOD */}
      <section className="method-section section-padding light-section">
        <div className="container">
          <Reveal>
            <TwelveStoneMethod />
          </Reveal>
        </div>
      </section>

      {/* 8. WHAT COULD YOUR BUSINESS DO BETTER? — BUSINESS SNAPSHOT™ FINALE */}
      <section className="snapshot-finale-section section-padding dark-section">
        <div className="container">
          <Reveal>
            <SnapshotReport />
          </Reveal>
        </div>
      </section>
    </div>
  );
};
