import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { navigationLinks } from '../../data/content';
import { Button } from '../shared/Button';
import '../../styles/Navbar.css';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="navbar-header">
      <div className="container navbar-container">
        <Link to="/" className="navbar-brand" onClick={closeMobileMenu}>
          <div className="brand-icon-box">12</div>
          <div className="brand-text">
            <span className="brand-name">12 Stone</span>
            <span className="brand-sub">Consulting</span>
          </div>
        </Link>

        <nav className="nav-links">
          {navigationLinks.map((link) => (
            <NavLink
              key={`${link.name}-${link.path}`}
              to={link.path}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="nav-cta-wrapper">
          <Button to="/business-snapshot" variant="brass" icon={ArrowRight} style={{ padding: '0.65rem 1.25rem', fontSize: '0.9rem' }}>
            Business Snapshot
          </Button>
        </div>

        <button
          className="mobile-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="nav-menu-mobile">
          {navigationLinks.map((link) => (
            <NavLink
              key={`${link.name}-${link.path}`}
              to={link.path}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              {link.name}
            </NavLink>
          ))}
          <Button
            to="/business-snapshot"
            variant="brass"
            icon={ArrowRight}
            onClick={closeMobileMenu}
            style={{ width: '100%', marginTop: '0.5rem' }}
          >
            Business Snapshot
          </Button>
        </div>
      )}
    </header>
  );
};
