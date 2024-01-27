import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  height: 32px;
  outline: none;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.border};
  background-color: ${({ theme }) => theme.background};
  padding: 0 10px;
  font-size: 14px;
  text-transform: capitalize;
  transition: 240ms;
  color: ${({ theme }) => theme.text};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.buttonHover};
  }
`;

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...props
}) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
