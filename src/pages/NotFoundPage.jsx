import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, ArrowLeft } from 'lucide-react';
import { Button } from '../components/shared/Button';

export const NotFoundPage = () => {
  return (
    <div className="container section-padding" style={{ textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'var(--color-brass-glow)', color: 'var(--color-brass)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', border: '1px solid var(--color-brass-border)' }}>
        <AlertTriangle size={32} />
      </div>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#FFFFFF' }}>Page Not Found</h1>
      <p style={{ maxWidth: '500px', margin: '0 auto 2rem auto', color: 'var(--text-muted)' }}>
        The requested page does not exist or has been relocated within the 12 Stone Consulting architecture.
      </p>
      <Button to="/" variant="brass" icon={ArrowLeft}>
        Return to Homepage
      </Button>
    </div>
  );
};
