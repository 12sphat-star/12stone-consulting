import React, { useState } from 'react';
import { SectionHeading } from '../components/shared/SectionHeading';
import { Button } from '../components/shared/Button';
import { CheckCircle2, ArrowRight, ShieldCheck, PhoneCall, Mail, Building } from 'lucide-react';
import '../styles/Contact.css';

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    employeeCount: '5-15',
    leaks: [],
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData((prev) => ({ ...prev, leaks: [...prev.leaks, value] }));
    } else {
      setFormData((prev) => ({ ...prev, leaks: prev.leaks.filter((item) => item !== value) }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page-section">
      <div className="container">
        <SectionHeading
          eyebrow="BUSINESS LEAK CONVERSATION INTAKE"
          title="Find the Leaks in Your Business"
          subtitle="Most owners can identify one problem. Few have looked at both sides of the business. A short conversation will help identify where dollars are escaping and what system deserves attention first."
          badgeVariant="brass"
        />

        <div className="contact-layout-grid">
          <div className="contact-info-panel">
            <h3 style={{ fontSize: '1.8rem', color: '#FFFFFF', marginBottom: '1rem' }}>
              What to Expect
            </h3>
            <p className="contact-lead-text">
              We look at your operational challenges through a strict financial lens: cash flow impact, replacement cost reduction, and owner workload relief.
            </p>

            <div className="contact-checklist">
              <div className="contact-check-item">
                <div className="check-icon-circle">
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <div className="check-item-title">Zero Sales Pitch Pressure</div>
                  <div className="check-item-desc">
                    We evaluate structural fit first. If your business isn't facing Two-Leak issues, we'll tell you immediately.
                  </div>
                </div>
              </div>

              <div className="contact-check-item">
                <div className="check-icon-circle">
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <div className="check-item-title">Financial & P&L Lens</div>
                  <div className="check-item-desc">
                    Diagnostics focus on lost opportunity costs and employee turnover expense analysis.
                  </div>
                </div>
              </div>

              <div className="contact-check-item">
                <div className="check-icon-circle">
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <div className="check-item-title">Custom Systems Roadmap</div>
                  <div className="check-item-desc">
                    Receive clear guidance on configuring the Customer Engine or People Engine for your specific operation.
                  </div>
                </div>
              </div>
            </div>

            <div style={{ padding: '1.5rem', background: 'var(--bg-surface)', border: '1px solid var(--border-medium)', borderRadius: 'var(--radius-md)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--color-brass-light)', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                <ShieldCheck size={18} />
                <span>Confidential Executive Consultation</span>
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                Your operational metrics and employee details are strictly held in confidence under 12 Stone executive standards.
              </p>
            </div>
          </div>

          <div className="intake-card-wrapper">
            {!submitted ? (
              <div className="intake-card">
                <h3 className="intake-card-title">Initial Business Intake</h3>
                <p className="intake-card-sub">
                  Tell us a bit about your operation to prepare for our conversation.
                </p>

                <form className="intake-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      className="form-input"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label">Business Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="sarah@company.com"
                        className="form-input"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="(555) 000-0000"
                        className="form-input"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label">Company Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Apex Services Group"
                        className="form-input"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Employee Count</label>
                      <select
                        className="form-select"
                        value={formData.employeeCount}
                        onChange={(e) => setFormData({ ...formData, employeeCount: e.target.value })}
                      >
                        <option value="5-15">5 – 15 Employees</option>
                        <option value="16-35">16 – 35 Employees</option>
                        <option value="36-75">36 – 75 Employees</option>
                        <option value="75+">75+ Employees</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Where do you suspect leakage in your business?</label>
                    <div className="checkbox-group-grid">
                      <label className="checkbox-label-card">
                        <input
                          type="checkbox"
                          value="Customer Missed Calls & Slow Follow-Up"
                          onChange={handleCheckboxChange}
                        />
                        <span>Missed Calls & Slow Leads</span>
                      </label>

                      <label className="checkbox-label-card">
                        <input
                          type="checkbox"
                          value="Employee Turnover & Benefit Pressure"
                          onChange={handleCheckboxChange}
                        />
                        <span>Employee Turnover</span>
                      </label>

                      <label className="checkbox-label-card">
                        <input
                          type="checkbox"
                          value="Owner Workload & Administrative Strain"
                          onChange={handleCheckboxChange}
                        />
                        <span>Owner Workload Strain</span>
                      </label>

                      <label className="checkbox-label-card">
                        <input
                          type="checkbox"
                          value="Unclear Revenue Conversion Path"
                          onChange={handleCheckboxChange}
                        />
                        <span>Weak Conversion Path</span>
                      </label>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Additional Context / Current Challenges</label>
                    <textarea
                      rows={3}
                      placeholder="Briefly describe your current operational setup or what prompted you to seek a fix..."
                      className="form-textarea"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    />
                  </div>

                  <Button type="submit" variant="brass" icon={ArrowRight} style={{ width: '100%', marginTop: '0.5rem' }}>
                    Request Business Leak Consultation
                  </Button>
                </form>
              </div>
            ) : (
              <div className="success-state-box">
                <div className="success-icon-box">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="success-title">Intake Received</h3>
                <p className="success-desc">
                  Thank you, <strong>{formData.name}</strong>. We have logged your details for <strong>{formData.company}</strong>. We will review your preliminary operational indicators and reach out within 24 business hours to schedule your consultation.
                </p>

                <div style={{ background: 'var(--bg-surface)', padding: '1.25rem', borderRadius: 'var(--radius-md)', textAlign: 'left', marginBottom: '2rem', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                  <div style={{ fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>Intake Summary:</div>
                  <div><strong>Company Size:</strong> {formData.employeeCount} Employees</div>
                  <div><strong>Identified Leak Areas:</strong> {formData.leaks.length > 0 ? formData.leaks.join(', ') : 'General Two-Leak Assessment'}</div>
                </div>

                <Button onClick={() => setSubmitted(false)} variant="outline">
                  Submit Another Inquiry
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
