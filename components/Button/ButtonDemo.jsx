import React from 'react';
import Button from './Button';
import '../assets/styles/global.css'; // Assuming a global stylesheet for tokens

const ButtonDemo = () => {
  return (
    <div className="button-demo-container" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <style>
        {`
          /* Temporary global styles for demo until integrated with full token system */
          :root {
            --qualia-color-brand-primary: #0070f3;
            --qualia-color-brand-secondary: #6c757d;
            --qualia-color-brand-accent: #17a2b8;

            --qualia-color-interactive-primary-default: var(--qualia-color-brand-primary);
            --qualia-color-interactive-primary-hover: #0056b3;
            --qualia-color-interactive-primary-pressed: #004085;
            --qualia-color-interactive-primary-focus: #0056b3;
            --qualia-color-interactive-primary-disabled: #a0c8f9;

            --qualia-color-interactive-secondary-default: var(--qualia-color-brand-secondary);
            --qualia-color-interactive-secondary-hover: #5a6268;
            --qualia-color-interactive-secondary-pressed: #494f54;
            --qualia-color-interactive-secondary-focus: #5a6268;
            --qualia-color-interactive-secondary-disabled: #c4c8cb;

            --qualia-color-interactive-destructive-default: #dc3545;
            --qualia-color-interactive-destructive-hover: #c82333;
            --qualia-color-interactive-destructive-pressed: #bd2130;
            --qualia-color-interactive-destructive-focus: #c82333;
            --qualia-color-interactive-destructive-disabled: #f2b1b6;

            --qualia-color-interactive-outline-default: transparent;
            --qualia-color-interactive-outline-hover: rgba(0, 112, 243, 0.1);
            --qualia-color-interactive-outline-pressed: rgba(0, 112, 243, 0.2);
            --qualia-color-interactive-outline-focus: rgba(0, 112, 243, 0.1);
            --qualia-color-interactive-outline-disabled: transparent;
            --qualia-color-interactive-outline-border-default: var(--qualia-color-brand-primary);
            --qualia-color-interactive-outline-border-hover: var(--qualia-color-brand-primary);
            --qualia-color-interactive-outline-border-pressed: var(--qualia-color-brand-primary);
            --qualia-color-interactive-outline-border-focus: var(--qualia-color-brand-primary);
            --qualia-color-interactive-outline-border-disabled: #a0c8f9;

            --qualia-color-text-default: #212529;
            --qualia-color-text-inverted: #ffffff;
            --qualia-color-text-disabled: #adb5bd;

            --qualia-spacing-xxs: 4px;
            --qualia-spacing-xs: 8px;
            --qualia-spacing-sm: 12px;
            --qualia-spacing-md: 16px;
            --qualia-spacing-lg: 24px;
            
            --qualia-font-family-body: sans-serif;
            --qualia-font-weight-medium: 500;
            --qualia-font-size-sm: 14px;
            --qualia-font-size-md: 16px;
            --qualia-font-size-lg: 18px;
            --qualia-line-height-sm: 20px;
            --qualia-line-height-md: 24px;
            --qualia-line-height-lg: 28px;
            --qualia-border-radius-sm: 4px;
          }
        `}
      </style>
      
      <h2>Primary Buttons</h2>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <Button variant="primary" size="small">Small Primary</Button>
        <Button variant="primary" size="medium">Medium Primary</Button>
        <Button variant="primary" size="large">Large Primary</Button>
        <Button variant="primary" disabled>Disabled Primary</Button>
      </div>

      <h2>Secondary Buttons</h2>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <Button variant="secondary" size="small">Small Secondary</Button>
        <Button variant="secondary" size="medium">Medium Secondary</Button>
        <Button variant="secondary" size="large">Large Secondary</Button>
        <Button variant="secondary" disabled>Disabled Secondary</Button>
      </div>

      <h2>Destructive Buttons</h2>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <Button variant="destructive" size="small">Small Destructive</Button>
        <Button variant="destructive" size="medium">Medium Destructive</Button>
        <Button variant="destructive" size="large">Large Destructive</Button>
        <Button variant="destructive" disabled>Disabled Destructive</Button>
      </div>

      <h2>Outline Buttons</h2>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <Button variant="outline" size="small">Small Outline</Button>
        <Button variant="outline" size="medium">Medium Outline</Button>
        <Button variant="outline" size="large">Large Outline</Button>
        <Button variant="outline" disabled>Disabled Outline</Button>
      </div>
    </div>
  );
};

export default ButtonDemo;
