import React from 'react';
import { Link } from 'react-router-dom';

export const Button = ({
  children,
  to,
  href,
  variant = 'brass', // 'brass' | 'teal' | 'outline'
  onClick,
  className = '',
  icon: Icon,
  type = 'button',
  ...props
}) => {
  const variantClass = `btn-${variant}`;
  const combinedClass = `btn ${variantClass} ${className}`.trim();

  const content = (
    <>
      <span>{children}</span>
      {Icon && <Icon size={18} className="btn-icon" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClass} onClick={onClick} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClass} onClick={onClick} target="_blank" rel="noopener noreferrer" {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={combinedClass} onClick={onClick} {...props}>
      {content}
    </button>
  );
};
