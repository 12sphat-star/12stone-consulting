import React from 'react';
import { TrendingUp, PieChart, BarChart3, ShieldCheck, Quote } from 'lucide-react';
import { financialPerspectiveData } from '../../data/content';
import { SectionHeading } from '../shared/SectionHeading';
import '../../styles/WhyTwelveStone.css';

export const WhyTwelveStone = () => {
  const iconMap = {
    TrendingUp: TrendingUp,
    PieChart: PieChart,
    BarChart3: BarChart3,
    ShieldCheck: ShieldCheck,
  };

  return (
    <section className="why-twelve-stone-section">
      <div className="container">
        <SectionHeading
          eyebrow={financialPerspectiveData.eyebrow}
          title={financialPerspectiveData.headline}
          badgeVariant="brass"
        />

        <div className="financial-grid">
          <div>
            <p className="financial-lead-text">
              {financialPerspectiveData.leadCopy}
            </p>
            <p className="financial-sub-text">
              {financialPerspectiveData.subCopy}
            </p>

            <div className="credibility-stat-box">
              <div className="stat-big-num">25+</div>
              <div className="stat-desc">
                <strong>Years of Capital & Operational Insight</strong>
                <br />
                Underwriting, Commercial Banking, Mortgage & Business Risk Evaluation.
              </div>
            </div>
          </div>

          <div className="pillars-grid">
            {financialPerspectiveData.pillars.map((pillar) => {
              const Icon = iconMap[pillar.icon] || BarChart3;
              return (
                <div key={pillar.title} className="pillar-card">
                  <div className="pillar-header">
                    <div className="pillar-icon-box">
                      <Icon size={20} />
                    </div>
                    <h4 className="pillar-title">{pillar.title}</h4>
                  </div>
                  <p className="pillar-desc">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="financial-quote-banner">
          <Quote size={32} className="quote-icon" />
          <p className="financial-quote-text">
            "{financialPerspectiveData.quote}"
          </p>
          <div className="quote-author">
            — Keith Robertson, Founder & Principal Systems Consultant
          </div>
        </div>
      </div>
    </section>
  );
};
