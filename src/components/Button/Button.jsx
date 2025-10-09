import React from 'react';
import { colors, spacing, typography, radius } from '../tokens/index.js';

/**
 * Qualia Button Component
 * Built with design system tokens for consistency
 */
export const Button = React.forwardRef(({ 
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'left',
  fullWidth = false,
  children,
  className = '',
  ...props
}, ref) => {
  
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: disabled ? colors.interactive.primaryDisabled : colors.primary[500],
          color: colors.text.inverse,
          border: 'none',
          ':hover': !disabled && {
            backgroundColor: colors.interactive.primaryHover
          },
          ':active': !disabled && {
            backgroundColor: colors.interactive.primaryActive
          },
          ':focus': {
            outline: `2px solid ${colors.border.focus}`,
            outlineOffset: '2px'
          }
        };
      
      case 'secondary':
        return {
          backgroundColor: colors.background.primary,
          color: disabled ? colors.text.disabled : colors.text.primary,
          border: `1px solid ${colors.border.primary}`,
          ':hover': !disabled && {
            backgroundColor: colors.interactive.secondaryHover
          },
          ':active': !disabled && {
            backgroundColor: colors.interactive.secondaryActive
          },
          ':focus': {
            outline: `2px solid ${colors.border.focus}`,
            outlineOffset: '2px'
          }
        };
      
      case 'outline':
        return {
          backgroundColor: 'transparent',
          color: disabled ? colors.text.disabled : colors.primary[600],
          border: `1px solid ${disabled ? colors.border.primary : colors.primary[600]}`,
          ':hover': !disabled && {
            backgroundColor: colors.primary[50],
            borderColor: colors.primary[700]
          },
          ':active': !disabled && {
            backgroundColor: colors.primary[100]
          },
          ':focus': {
            outline: `2px solid ${colors.border.focus}`,
            outlineOffset: '2px'
          }
        };
      
      case 'destructive':
        return {
          backgroundColor: disabled ? colors.interactive.destructiveDisabled : colors.semantic.error[500],
          color: colors.text.inverse,
          border: 'none',
          ':hover': !disabled && {
            backgroundColor: colors.interactive.destructiveHover
          },
          ':active': !disabled && {
            backgroundColor: colors.interactive.destructiveActive
          },
          ':focus': {
            outline: `2px solid ${colors.semantic.error[500]}`,
            outlineOffset: '2px'
          }
        };
      
      default:
        return {};
    }
  };
  
  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return {
          padding: `${spacing[2]} ${spacing[3]}`,
          fontSize: typography.fontSize.sm,
          minHeight: '32px'
        };
      case 'medium':
        return {
          padding: `${spacing[3]} ${spacing[4]}`,
          fontSize: typography.fontSize.base,
          minHeight: '40px'
        };
      case 'large':
        return {
          padding: `${spacing[4]} ${spacing[6]}`,
          fontSize: typography.fontSize.lg,
          minHeight: '48px'
        };
      default:
        return {};
    }
  };
  
  const baseStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing[2],
    fontFamily: typography.fontFamily.sans.join(', '),
    fontWeight: typography.fontWeight.medium,
    lineHeight: typography.lineHeight.tight,
    borderRadius: radius.md,
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 150ms ease-in-out',
    textDecoration: 'none',
    userSelect: 'none',
    width: fullWidth ? '100%' : 'auto',
    opacity: disabled ? 0.6 : 1,
    ...getSizeStyles(),
    ...getVariantStyles()
  };
  
  const renderIcon = () => {
    if (loading) {
      return (
        <svg 
          className="animate-spin" 
          width="16" 
          height="16" 
          fill="none" 
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle 
            cx="12" 
            cy="12" 
            r="10" 
            stroke="currentColor" 
            strokeWidth="4" 
            className="opacity-25"
          />
          <path 
            fill="currentColor" 
            d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" 
            className="opacity-75"
          />
        </svg>
      );
    }
    
    if (icon) {
      return React.cloneElement(icon, {
        'aria-hidden': true,
        width: icon.props.width || 16,
        height: icon.props.height || 16
      });
    }
    
    return null;
  };
  
  return (
    <button
      ref={ref}
      disabled={disabled || loading}
      style={baseStyles}
      className={`qds-button qds-button--${variant} qds-button--${size} ${className}`}
      aria-disabled={disabled || loading}
      {...props}
    >
      {icon && iconPosition === 'left' && renderIcon()}
      {loading && !icon && renderIcon()}
      <span>{children}</span>
      {icon && iconPosition === 'right' && !loading && renderIcon()}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;