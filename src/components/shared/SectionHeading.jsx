import React from 'react';

export const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  centered = false,
  badgeVariant = 'brass',
  className = '',
}) => {
  return (
    <div className={`section-heading-wrapper ${centered ? 'center' : ''} ${className}`}>
      {eyebrow && (
        <div className={`badge-eyebrow ${badgeVariant}`}>
          {eyebrow}
        </div>
      )}
      {title && <h2>{title}</h2>}
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
};
