import React, { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ArrowRight, ArrowDownRight } from 'lucide-react';
import { Button } from '../components/shared/Button';
import { portfolioIndustryData } from '../data/portfolio';
import '../styles/Portfolio.css';

const tabOptions = ['DESKTOP', 'MOBILE', 'SYSTEM'];

export const PortfolioIndustryPage = () => {
  const { slug } = useParams();
  const [activeTab, setActiveTab] = useState('DESKTOP');

  const industry = useMemo(() => portfolioIndustryData[slug] || portfolioIndustryData['home-services'], [slug]);

  return (
    <div className="concept-page">
      <div className="container concept-shell">
        <div className="concept-header">
          <div>
            <span className="concept-badge">{industry.label}</span>
            <h1>{industry.industryName}</h1>
          </div>
        </div>

        <div className="concept-intro">
          <p>{industry.statement}</p>
          <span className="concept-tag">{industry.type === 'concept' ? 'DEMONSTRATION' : 'CLIENT PROJECT'}</span>
        </div>

        <div className="concept-toggle" aria-label="Industry view toggles">
          {tabOptions.map((tab) => (
            <button
              type="button"
              key={tab}
              className={tab === activeTab ? 'is-active' : ''}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="concept-viewport">
          {activeTab === 'DESKTOP' && (
            <div className="concept-browser">
              <div className="browser-bar"><span /><span /><span /></div>
              <div className="browser-body">
                <div className="browser-panel">
                  <h3>{industry.industryName}</h3>
                  <div className="browser-lines">
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                  </div>
                </div>
                <div className="browser-aside">
                  {industry.desktopHighlights.map((item) => (
                    <div className="browser-card" key={item}>
                      <strong>Concept focus</strong>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'MOBILE' && (
            <div className="concept-mobile">
              <div className="mobile-frame">
                <div className="mobile-notch" />
                <div className="mobile-screen">
                  <div className="mobile-head">{industry.industryName}</div>
                  <div className="mobile-card">
                    <h4>Book now</h4>
                    <div className="mobile-list">
                      {industry.mobileHighlights.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'SYSTEM' && (
            <div className="concept-system">
              <div className="system-flow">
                {industry.system.map((step, index) => (
                  <React.Fragment key={`${step}-${index}`}>
                    <span className="system-step">{step}</span>
                    {index < industry.system.length - 1 && <ArrowDownRight size={16} />}
                  </React.Fragment>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="concept-rail">
          <div>
            <strong>Conceputal overview</strong>
            <p>{industry.narrative}</p>
          </div>
          <div>
            <strong>Approach</strong>
            <p>Each experience is designed to suit the buyer journey and the business process behind it.</p>
          </div>
          <div>
            <strong>Next step</strong>
            <p>Replace the placeholders with final concept screen assets once approved.</p>
          </div>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <Button to="/contact" variant="brass" icon={ArrowRight}>LET'S TALK</Button>
        </div>
      </div>
    </div>
  );
};
