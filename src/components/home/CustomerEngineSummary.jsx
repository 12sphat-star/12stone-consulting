import React from 'react';
import { ArrowRight, Layout, MessageSquare, Repeat, Star, Sparkles } from 'lucide-react';
import { customerEngineData } from '../../data/content';
import { SectionHeading } from '../shared/SectionHeading';
import { Button } from '../shared/Button';
import '../../styles/Engines.css';

export const CustomerEngineSummary = () => {
  const iconMap = [Layout, MessageSquare, Repeat, Star];

  return (
    <section className="engine-section customer-bg customer-engine">
      <div className="container">
        <SectionHeading
          eyebrow="SYSTEM ENGINE 01 — REVENUE PROTECTION"
          title={customerEngineData.headline}
          badgeVariant="brass"
        />

        <p className="engine-framing-text">{customerEngineData.framing}</p>

        {/* 5-Step Flow Display */}
        <div className="engine-flow-wrapper">
          <div className="flow-title">THE CUSTOMER ENGINE PROCESS FLOW</div>
          <div className="flow-steps-grid five-steps">
            {customerEngineData.flowSteps.map((step) => (
              <div key={step.step} className="flow-step-card">
                <span className="flow-step-num">{step.step}</span>
                <span className="flow-step-label">{step.label}</span>
                <p className="flow-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Supporting Features */}
        <div className="supporting-grid">
          {customerEngineData.supportingItems.map((item, idx) => {
            const Icon = iconMap[idx % iconMap.length];
            return (
              <div key={item.title} className="supporting-card">
                <div className="supporting-card-icon">
                  <Icon size={22} />
                </div>
                <h4 className="supporting-card-title">{item.title}</h4>
                <p className="supporting-card-desc">{item.desc}</p>
              </div>
            );
          })}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '3rem', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div className="engine-powered-tag" style={{ margin: 0 }}>
            <Sparkles size={16} style={{ color: 'var(--color-brass)' }} />
            <span>{customerEngineData.poweredBy}</span>
          </div>

          <Button to="/customer-engine" variant="brass" icon={ArrowRight}>
            Explore Customer Engine Details
          </Button>
        </div>
      </div>
    </section>
  );
};
