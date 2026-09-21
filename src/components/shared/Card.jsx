import React from 'react';

export const Card = ({
  children,
  className = '',
  accent = 'none', // 'brass' | 'teal' | 'none'
  hoverEffect = true,
  ...props
}) => {
  const accentClass = accent !== 'none' ? `card-accent-${accent}` : '';
  const hoverClass = hoverEffect ? 'card-hover' : '';

  return (
    <div className={`card-container ${accentClass} ${hoverClass} ${className}`} {...props}>
      {children}
    </div>
  );
};
