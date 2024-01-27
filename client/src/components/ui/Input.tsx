import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  height: 32px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 8px;
  font-size: 14px;
  color: ${({ theme }) => theme.text};
  padding: 0 12px;
  text-transform: capitalize;
  background-color: ${({ theme }) => theme.background};
  &::placeholder {
    color: ${({ theme }) => theme.textGray};
  }
`;

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (
  props
) => {
  return <StyledInput {...props} />;
};

export default Input;
