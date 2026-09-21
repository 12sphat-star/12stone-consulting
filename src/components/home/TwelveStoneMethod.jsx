import React from 'react';
import { ArrowRight, CheckCircle2, Search, Compass, Cpu, GitMerge, TrendingUp } from 'lucide-react';
import { Button } from '../shared/Button';

const METHODOLOGY_STEPS = [
  {
    number: '01',
    name: 'DISCOVER',
    icon: Search,
    headline: 'How Your Business Actually Operates',
    description: 'We analyze how customers find your business, how they contact you, what happens after hours when nobody answers, how leads are followed up, and what capabilities make sense for your scale.',
  },
  {
    number: '02',
    name: 'DESIGN',
    icon: Compass,
    headline: 'Custom Customer Journeys & Systems',
    description: 'We map custom customer journeys and conversation flows designed around your real operational needs. We never force your business into a generic website template.',
  },
  {
    number: '03',
    name: 'BUILD',
    icon: Cpu,
    headline: 'Smart Website™ Construction',
    description: 'We build your customer-facing digital experience to command trust, showcase your real capabilities, and present clear action pathways for prospective customers.',
  },
  {
    number: '04',
    name: 'CONNECT',
    icon: GitMerge,
    headline: 'Smart Website System™ Integration',
    description: 'We link your front-door website directly to CRM, phone lines, messaging, calendar scheduling, automated follow-up pipelines, and customer nurture engines.',
  },
  {
    number: '05',
    name: 'OPTIMIZE',
    icon: TrendingUp,
    headline: 'Continuous Performance & Nurture',
    description: 'We evaluate response speeds, lead capture efficiency, customer retention, and Evangelize™ activity—refining system performance over time.',
  },
];

export const TwelveStoneMethod = () => {
  return (
    <div className="methodology-experience">
      <div className="methodology-header">
        <span className="home-eyebrow">
          <span className="eyebrow-rule" /> THE 12 STONE METHOD
        </span>
        <h2 className="methodology-headline">
          BEFORE WE BUILD ANYTHING,<br />
          <em className="gold-accent">WE UNDERSTAND YOUR BUSINESS.</em>
        </h2>
        <div className="methodology-subtext">
          <strong>BUSINESS FIRST. TECHNOLOGY SECOND.</strong>
          <p>
            We don't begin with software. We begin by understanding how your business gets customers,
            communicates, follows up, operates, and maintains long-term relationships.
          </p>
        </div>
      </div>

      {/* Confident Typography Methodology Steps */}
      <div className="methodology-steps-grid">
        {METHODOLOGY_STEPS.map((step) => {
          const Icon = step.icon;
          return (
            <div key={step.number} className="method-step-card">
              <div className="step-card-header">
                <span className="step-number">{step.number}</span>
                <div className="step-icon-box">
                  <Icon size={18} />
                </div>
              </div>
              <h3 className="step-title">{step.name}</h3>
              <h4 className="step-headline">{step.headline}</h4>
              <p className="step-description">{step.description}</p>
            </div>
          );
        })}
      </div>

      <div className="methodology-footer-action">
        <Button to="/how-we-think" variant="brass" icon={ArrowRight}>
          EXPLORE HOW WE THINK
        </Button>
      </div>
    </div>
  );
};
