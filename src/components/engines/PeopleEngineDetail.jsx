import React from 'react';
import { UserPlus, HeartHandshake, TrendingDown, ShieldPlus, ArrowRight, ExternalLink, Users, AlertTriangle } from 'lucide-react';
import { peopleEngineData } from '../../data/content';
import { SectionHeading } from '../shared/SectionHeading';
import { Button } from '../shared/Button';
import '../../styles/Engines.css';

export const PeopleEngineDetail = () => {
  return (
    <div className="people-engine-detail-wrapper section-padding">
      <div className="container">
        <SectionHeading
          eyebrow="DEEP DIVE: TALENT RETENTION FIX"
          title={peopleEngineData.headline}
          subtitle={peopleEngineData.framing}
          badgeVariant="teal"
        />

        <div className="engine-flow-wrapper" style={{ margin: '3rem 0 4rem 0' }}>
          <div className="flow-title">THE 3-STEP RETENTION FRAMEWORK</div>
          <div className="flow-steps-grid three-steps">
            {peopleEngineData.flowSteps.map((step) => (
              <div key={step.step} className="flow-step-card people-engine">
                <span className="flow-step-num">{step.step}</span>
                <span className="flow-step-label">{step.label}</span>
                <p className="flow-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ margin: '4rem 0' }}>
          <h3 style={{ fontSize: '1.75rem', marginBottom: '2rem', color: '#FFFFFF' }}>
            Supporting Systems for Team Stability
          </h3>
          <div className="supporting-grid">
            {peopleEngineData.supportingCategories.map((item, idx) => (
              <div key={item.title} className="supporting-card people-engine">
                <div className="supporting-card-icon">
                  {idx === 0 && <UserPlus size={22} />}
                  {idx === 1 && <HeartHandshake size={22} />}
                  {idx === 2 && <TrendingDown size={22} />}
                  {idx === 3 && <ShieldPlus size={22} />}
                </div>
                <h4 className="supporting-card-title">{item.title}</h4>
                <p className="supporting-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Specialized Resource Reference Box */}
        <div className="ru-konnected-box">
          <div className="ru-konnected-content">
            <div className="ru-konnected-badge">Specialized External Resource Reference</div>
            <p className="ru-konnected-text">
              {peopleEngineData.externalResource.text}
            </p>
          </div>
          <ExternalLink size={24} style={{ color: 'var(--color-teal-light)', flexShrink: 0 }} />
        </div>

        <div style={{ marginTop: '4rem', textAlign: 'center' }}>
          <Button to="/contact" variant="teal" icon={ArrowRight}>
            Diagnose Employee Turnover Leaks
          </Button>
        </div>
      </div>
    </div>
  );
};
