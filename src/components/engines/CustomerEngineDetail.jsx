import React from 'react';
import { Layout, MessageSquare, Repeat, Star, ArrowRight, ShieldAlert, CheckCircle, Clock } from 'lucide-react';
import { customerEngineData } from '../../data/content';
import { SectionHeading } from '../shared/SectionHeading';
import { Button } from '../shared/Button';
import '../../styles/Engines.css';

export const CustomerEngineDetail = () => {
  return (
    <div className="customer-engine-detail-wrapper section-padding">
      <div className="container">
        <SectionHeading
          eyebrow="DEEP DIVE: REVENUE LEAKAGE FIX"
          title={customerEngineData.headline}
          subtitle={customerEngineData.framing}
          badgeVariant="brass"
        />

        <div className="engine-flow-wrapper" style={{ margin: '3rem 0 4rem 0' }}>
          <div className="flow-title">THE 5-STEP CONVERSION ARCHITECTURE</div>
          <div className="flow-steps-grid five-steps">
            {customerEngineData.flowSteps.map((step) => (
              <div key={step.step} className="flow-step-card customer-engine">
                <span className="flow-step-num">{step.step}</span>
                <span className="flow-step-label">{step.label}</span>
                <p className="flow-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ margin: '4rem 0' }}>
          <h3 style={{ fontSize: '1.75rem', marginBottom: '2rem', color: '#FFFFFF' }}>
            System Components Designed to Stop Customer Loss
          </h3>
          <div className="supporting-grid">
            {customerEngineData.supportingItems.map((item, idx) => (
              <div key={item.title} className="supporting-card customer-engine">
                <div className="supporting-card-icon">
                  {idx === 0 && <Layout size={22} />}
                  {idx === 1 && <MessageSquare size={22} />}
                  {idx === 2 && <Repeat size={22} />}
                  {idx === 3 && <Star size={22} />}
                </div>
                <h4 className="supporting-card-title">{item.title}</h4>
                <p className="supporting-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="ru-konnected-box" style={{ borderColor: 'var(--color-brass-border)', borderLeftColor: 'var(--color-brass)' }}>
          <div className="ru-konnected-content">
            <div className="ru-konnected-badge" style={{ color: 'var(--color-brass-light)' }}>
              SYSTEM PERFORMANCE ASSURANCE
            </div>
            <p className="ru-konnected-text">
              The Customer Engine works quietly in the background without requiring your staff to manually copy-paste lead records or check voicemails after hours. Every inquiry receives immediate professional handling.
            </p>
          </div>
          <div className="engine-powered-tag" style={{ margin: 0 }}>
            <span>{customerEngineData.poweredBy}</span>
          </div>
        </div>

        <div style={{ marginTop: '4rem', textAlign: 'center' }}>
          <Button to="/contact" variant="brass" icon={ArrowRight}>
            Diagnose Customer Leakage in Your Business
          </Button>
        </div>
      </div>
    </div>
  );
};
