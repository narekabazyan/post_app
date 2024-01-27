import React from 'react';
import styled from 'styled-components';

const StyledTextarea = styled.textarea`
  height: 100px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 8px;
  font-size: 14px;
  color: ${({ theme }) => theme.text};
  padding: 16px;
  text-transform: capitalize;
  resize: none;
  background-color: ${({ theme }) => theme.background};
  &::placeholder {
    color: ${({ theme }) => theme.textGray};
  }
`;

const Textarea: React.FC<React.InputHTMLAttributes<HTMLTextAreaElement>> = (
  props
) => {
  return <StyledTextarea {...props} />;
};

export default Textarea;
