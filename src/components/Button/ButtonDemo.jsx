import React from 'react';
import { Button } from './Button.jsx';

/**
 * Interactive Button Demo
 * Shows all button variants and states with live examples
 */
export const ButtonDemo = () => {
  const [loadingStates, setLoadingStates] = React.useState({});
  const [disabledStates, setDisabledStates] = React.useState({});
  
  const toggleLoading = (buttonId) => {
    setLoadingStates(prev => ({ ...prev, [buttonId]: !prev[buttonId] }));
    
    // Auto-clear loading after 2 seconds for demo
    if (!loadingStates[buttonId]) {
      setTimeout(() => {
        setLoadingStates(prev => ({ ...prev, [buttonId]: false }));
      }, 2000);
    }
  };
  
  const toggleDisabled = (buttonId) => {
    setDisabledStates(prev => ({ ...prev, [buttonId]: !prev[buttonId] }));
  };
  
  const variants = [
    { name: 'primary', label: 'Primary' },
    { name: 'secondary', label: 'Secondary' },
    { name: 'outline', label: 'Outline' },
    { name: 'destructive', label: 'Destructive' }
  ];
  
  const sizes = [
    { name: 'small', label: 'Small' },
    { name: 'medium', label: 'Medium' },
    { name: 'large', label: 'Large' }
  ];
  
  return (
    <div style={{ padding: '2rem', fontFamily: 'Inter, system-ui, sans-serif' }}>
      <h1>Qualia Button Component Demo</h1>
      
      {/* Variants Section */}
      <section style={{ marginBottom: '3rem' }}>
        <h2>Button Variants</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
          {variants.map(variant => (
            <Button 
              key={variant.name}
              variant={variant.name}
              onClick={() => console.log(`${variant.label} clicked`)}
            >
              {variant.label}
            </Button>
          ))}
        </div>
        
        <h3>Disabled States</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {variants.map(variant => (
            <Button 
              key={`${variant.name}-disabled`}
              variant={variant.name}
              disabled
            >
              {variant.label}
            </Button>
          ))}
        </div>
      </section>
      
      {/* Sizes Section */}
      <section style={{ marginBottom: '3rem' }}>
        <h2>Button Sizes</h2>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
          {sizes.map(size => (
            <Button 
              key={size.name}
              size={size.name}
              onClick={() => console.log(`${size.label} clicked`)}
            >
              {size.label}
            </Button>
          ))}
        </div>
      </section>
      
      {/* Interactive States */}
      <section style={{ marginBottom: '3rem' }}>
        <h2>Interactive States</h2>
        
        <h3>Loading States</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
          {variants.map(variant => (
            <Button 
              key={`${variant.name}-loading`}
              variant={variant.name}
              loading={loadingStates[`${variant.name}-loading`]}
              onClick={() => toggleLoading(`${variant.name}-loading`)}
            >
              {loadingStates[`${variant.name}-loading`] ? 'Loading...' : `Load ${variant.label}`}
            </Button>
          ))}
        </div>
        
        <h3>Toggle Disabled</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {variants.map(variant => (
            <Button 
              key={`${variant.name}-toggle`}
              variant={variant.name}
              disabled={disabledStates[`${variant.name}-toggle`]}
              onClick={() => toggleDisabled(`${variant.name}-toggle`)}
            >
              {disabledStates[`${variant.name}-toggle`] ? 'Disabled' : 'Toggle Me'}
            </Button>
          ))}
        </div>
      </section>
      
      {/* Full Width */}
      <section style={{ marginBottom: '3rem' }}>
        <h2>Full Width</h2>
        <Button variant="primary" fullWidth style={{ marginBottom: '0.5rem' }}>
          Full Width Primary
        </Button>
        <Button variant="secondary" fullWidth>
          Full Width Secondary
        </Button>
      </section>
      
      {/* Usage Examples */}
      <section>
        <h2>Common Use Cases</h2>
        
        <div style={{ marginBottom: '2rem' }}>
          <h3>Form Actions</h3>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Button variant="primary">Save Changes</Button>
            <Button variant="secondary">Cancel</Button>
          </div>
        </div>
        
        <div style={{ marginBottom: '2rem' }}>
          <h3>Dangerous Actions</h3>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Button variant="destructive">Delete Account</Button>
            <Button variant="outline">Remove Item</Button>
          </div>
        </div>
        
        <div>
          <h3>Call to Action</h3>
          <Button variant="primary" size="large">
            Get Started Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ButtonDemo;