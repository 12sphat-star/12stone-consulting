import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ArrowUpRight } from 'lucide-react';
import { companyInfo, navigationLinks } from '../../data/content';
import '../../styles/Footer.css';

export const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top-grid">
          <div className="footer-brand-col">
            <div className="navbar-brand" style={{ marginBottom: '1rem' }}>
              <div className="brand-icon-box">12</div>
              <div className="brand-text">
                <span className="brand-name">12 Stone</span>
                <span className="brand-sub">Consulting</span>
              </div>
            </div>
            <p>
              Helping small businesses compete bigger through practical technology, customer systems and workforce solutions.
            </p>
          </div>

          <div>
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              {navigationLinks.map((link) => (
                <li key={`${link.name}-${link.path}`}>
                  <Link to={link.path} className="footer-link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="footer-col-title">Capabilities</h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/customer-engine" className="footer-link">
                  Customer Engine
                </Link>
              </li>
              <li>
                <Link to="/people-engine" className="footer-link">
                  People Engine
                </Link>
              </li>
              <li>
                <Link to="/why-12-stone" className="footer-link">
                  Why 12 Stone
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">
                  Let's Talk
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="footer-col-title">Resource Reference</h4>
            <div className="footer-disclaimer-box">
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                <strong>RuKonnected.com</strong> — a specialized healthcare access resource for individuals, families and businesses exploring practical healthcare options.
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <div>
            © {new Date().getFullYear()} {companyInfo.name}. All rights reserved. Built for owner-operated small businesses (5–75 employees).
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Financial Readiness Standard</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
