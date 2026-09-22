import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  ArrowDownRight,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';
import { Button } from '../components/shared/Button';
import { PhilosophyTransformation } from '../components/home/PhilosophyTransformation';
import { IndustryShowroom } from '../components/home/IndustryShowroom';
import { ConversationalConcierge } from '../components/home/ConversationalConcierge';
import { SystemFrontDoor } from '../components/home/SystemFrontDoor';
import { CustomerJourneyStory } from '../components/home/CustomerJourneyStory';
import { EmployeeSystemsExperience } from '../components/home/EmployeeSystemsExperience';
import { TwelveStoneMethod } from '../components/home/TwelveStoneMethod';
import { SnapshotReport } from '../components/home/SnapshotReport';
import '../styles/HomePage.css';

const Reveal = ({ children, className = '' }) => (
  <div className={`home-reveal ${className}`}>{children}</div>
);

const SmartSystemVisual = () => {
  return (
    <div className="hero-business-composition" aria-label="Business website and customer conversation concept">
      <div className="hero-business-scene"><span>FINAL HERO BUSINESS PHOTOGRAPHY</span><small>Small-business professional + customer interaction + daylight</small></div>
      <div className="hero-website-layer">
        <div className="hero-website-nav"><strong><span>H</span> HOME SERVICES</strong><div><span>SERVICES</span><span>ABOUT</span><b>REQUEST SERVICE</b></div></div>
        <div className="hero-website-body"><div><small>CARE FOR THE PLACE YOU CALL HOME</small><h3>YOUR HOME.<br /><em>TAKEN CARE OF.</em></h3><p>Professional service when you need it.</p><b>REQUEST SERVICE <ArrowRight size={12} /></b></div><div className="hero-website-image"><span>BUSINESS / SERVICE PHOTOGRAPHY</span></div></div>
      </div>
      <div className="hero-conversation-phone"><div className="hero-phone-speaker" /><div className="hero-phone-screen"><strong><MessageCircle size={13} /> CONVERSATIONAL CONCIERGE</strong><small>CUSTOMER</small><p>“My AC isn't cooling.”</p><small>CONVERSATIONAL CONCIERGE</small><p>“I can help you get a service request started.”</p><b>REQUEST SERVICE <ArrowRight size={11} /></b></div></div>
      <div className="hero-gold-connection"><svg viewBox="0 0 360 80" preserveAspectRatio="none" aria-hidden="true"><path d="M 0 38 C 90 6, 155 68, 220 36 S 305 14, 360 36" /></svg><span>REQUEST CAPTURED <span aria-hidden="true">✓</span></span></div>
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

      {/* 7. EMPLOYEE SYSTEMS — THE PEOPLE BEHIND THE BUSINESS */}
      <section className="employee-systems-section section-padding light-section">
        <div className="container">
          <Reveal>
            <EmployeeSystemsExperience />
          </Reveal>
        </div>
      </section>

      {/* 8. HOW WE BUILD — 12 STONE METHOD */}
      <section className="method-section section-padding light-section">
        <div className="container">
          <Reveal>
            <TwelveStoneMethod />
          </Reveal>
        </div>
      </section>

      {/* 9. WHAT COULD YOUR BUSINESS DO BETTER? — BUSINESS SNAPSHOT™ FINALE */}
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
