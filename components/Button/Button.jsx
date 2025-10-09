import React from 'react';
import './Button.css';

const Button = ({ children, variant = 'primary', size = 'medium', disabled = false, onClick, ...props }) => {
  const className = `qds-button qds-button--${variant} qds-button--${size} ${disabled ? 'qds-button--disabled' : ''}`;

  return (
    <button
      className={className}
      disabled={disabled}
      onClick={!disabled ? onClick : undefined}
      aria-disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
