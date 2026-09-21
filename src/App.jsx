import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { SmartWebsitesPage } from './pages/SmartWebsitesPage';
import { CustomerSystemsPage } from './pages/CustomerSystemsPage';
import { EmployeeSystemsPage } from './pages/EmployeeSystemsPage';
import { HowWeThinkPage } from './pages/HowWeThinkPage';
import { AboutPage } from './pages/AboutPage';
import { InsightsPage } from './pages/InsightsPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { BusinessSnapshotPage } from './pages/BusinessSnapshotPage';
import { PortfolioIndustryPage } from './pages/PortfolioIndustryPage';

import './styles/global.css';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/smart-websites" element={<SmartWebsitesPage />} />
          <Route path="/customer-systems" element={<CustomerSystemsPage />} />
          <Route path="/employee-systems" element={<EmployeeSystemsPage />} />
          <Route path="/how-we-think" element={<HowWeThinkPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/portfolio/:slug" element={<PortfolioIndustryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/business-snapshot" element={<BusinessSnapshotPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
