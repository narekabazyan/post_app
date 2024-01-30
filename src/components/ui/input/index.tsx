import React from 'react';
import { StyledInput } from '@/components/ui/input/StyledInput';

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (
  props
) => {
  return <StyledInput {...props} />;
};

export default Input;
