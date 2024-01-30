import React from 'react';
import { StyledTextarea } from '@/components/ui/textarea/StyledTextarea';

const Textarea: React.FC<React.InputHTMLAttributes<HTMLTextAreaElement>> = (
  props
) => {
  return <StyledTextarea {...props} />;
};

export default Textarea;
