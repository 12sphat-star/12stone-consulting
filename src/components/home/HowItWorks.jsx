import React from 'react';
import { CheckCircle } from 'lucide-react';
import { howItWorksData } from '../../data/content';
import { SectionHeading } from '../shared/SectionHeading';
import '../../styles/HowItWorks.css';

export const HowItWorks = () => {
  return (
    <section className="how-it-works-section">
      <div className="container">
        <SectionHeading
          eyebrow="IMPLEMENTATION PATHWAY"
          title={howItWorksData.headline}
          subtitle={howItWorksData.subheadline}
          centered
          badgeVariant="brass"
        />

        <div className="how-steps-grid">
          {howItWorksData.steps.map((step) => (
            <div key={step.number} className="how-step-card">
              <div className="how-step-badge">{step.number}</div>
              <h3 className="how-step-title">{step.title}</h3>
              <p className="how-step-desc">{step.desc}</p>
              
              <div className="how-deliverable-tag">
                <CheckCircle size={16} style={{ color: 'var(--color-brass-light)' }} />
                <span>Deliverable: <strong>{step.deliverable}</strong></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
