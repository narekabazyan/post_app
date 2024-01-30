import React from 'react';
import { StyledButton } from '@/components/ui/button/StyledButton';

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...props
}) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
