import React from 'react';
import { AlertCircle, UserMinus, PhoneOff, CheckSquare } from 'lucide-react';
import { twoLeaksData } from '../../data/content';
import { SectionHeading } from '../shared/SectionHeading';
import '../../styles/TwoLeaks.css';

export const TwoLeaks = () => {
  const [leak1, leak2] = twoLeaksData.leaks;

  return (
    <section className="two-leaks-section section-padding">
      <div className="container">
        <SectionHeading
          eyebrow="STRUCTURAL DIAGNOSTICS"
          title={twoLeaksData.headline}
          subtitle="Small businesses with 5 to 75 employees rarely fail due to a lack of effort. They lose profitability through two invisible gaps in daily operations."
          centered
          badgeVariant="brass"
        />

        <div className="two-leaks-grid">
          {/* Leak 1 Card */}
          <div className="leak-card customer-leak">
            <div className="leak-card-header">
              <span className="leak-number">{leak1.number}</span>
              <span className="leak-pill">{leak1.subtitle}</span>
            </div>

            <h3 className="leak-title">{leak1.title}</h3>
            <p className="leak-description">{leak1.description}</p>

            <div className="leak-symptoms-title">Common Indicators:</div>
            <div className="symptoms-list">
              {leak1.symptoms.map((symptom, idx) => (
                <div key={idx} className="symptom-item">
                  <PhoneOff size={16} className="symptom-icon" />
                  <span>{symptom}</span>
                </div>
              ))}
            </div>

            <div className="leak-impact-box">
              <strong>The Financial Impact:</strong> {leak1.impact}
            </div>
          </div>

          {/* Leak 2 Card */}
          <div className="leak-card employee-leak">
            <div className="leak-card-header">
              <span className="leak-number">{leak2.number}</span>
              <span className="leak-pill">{leak2.subtitle}</span>
            </div>

            <h3 className="leak-title">{leak2.title}</h3>
            <p className="leak-description">{leak2.description}</p>

            <div className="leak-symptoms-title">Common Indicators:</div>
            <div className="symptoms-list">
              {leak2.symptoms.map((symptom, idx) => (
                <div key={idx} className="symptom-item">
                  <UserMinus size={16} className="symptom-icon" />
                  <span>{symptom}</span>
                </div>
              ))}
            </div>

            <div className="leak-impact-box">
              <strong>The Financial Impact:</strong> {leak2.impact}
            </div>
          </div>
        </div>

        <div className="closing-message-banner">
          <div className="closing-message-text">
            "{twoLeaksData.closingMessage}"
          </div>
        </div>
      </div>
    </section>
  );
};
