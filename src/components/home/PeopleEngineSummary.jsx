import React from 'react';
import { ArrowRight, UserPlus, HeartHandshake, TrendingDown, ShieldPlus, ExternalLink } from 'lucide-react';
import { peopleEngineData } from '../../data/content';
import { SectionHeading } from '../shared/SectionHeading';
import { Button } from '../shared/Button';
import '../../styles/Engines.css';

export const PeopleEngineSummary = () => {
  const iconMap = [UserPlus, HeartHandshake, TrendingDown, ShieldPlus];

  return (
    <section className="engine-section people-bg people-engine">
      <div className="container">
        <SectionHeading
          eyebrow="SYSTEM ENGINE 02 — TALENT STABILITY"
          title={peopleEngineData.headline}
          badgeVariant="teal"
        />

        <p className="engine-framing-text">{peopleEngineData.framing}</p>

        {/* 3-Step Flow Display */}
        <div className="engine-flow-wrapper">
          <div className="flow-title">THE PEOPLE ENGINE PROCESS FLOW</div>
          <div className="flow-steps-grid three-steps">
            {peopleEngineData.flowSteps.map((step) => (
              <div key={step.step} className="flow-step-card">
                <span className="flow-step-num">{step.step}</span>
                <span className="flow-step-label">{step.label}</span>
                <p className="flow-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Supporting Categories */}
        <div className="supporting-grid">
          {peopleEngineData.supportingCategories.map((item, idx) => {
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

        {/* RuKonnected Resource Box */}
        <div className="ru-konnected-box">
          <div className="ru-konnected-content">
            <div className="ru-konnected-badge">Specialized External Resource</div>
            <p className="ru-konnected-text">
              {peopleEngineData.externalResource.text}
            </p>
          </div>
          <ExternalLink size={20} style={{ color: 'var(--color-teal-light)', flexShrink: 0 }} />
        </div>

        <div style={{ marginTop: '3rem', textAlign: 'right' }}>
          <Button to="/people-engine" variant="teal" icon={ArrowRight}>
            Explore People Engine Details
          </Button>
        </div>
      </div>
    </section>
  );
};
