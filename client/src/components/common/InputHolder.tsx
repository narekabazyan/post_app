import React, { FC, ReactElement } from 'react';
import styled from 'styled-components';

interface InputHolderProps {
  children: ReactElement;
  isRequired?: boolean;
  title?: string;
}

const StyledInputHolder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const StyledInputHolderTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  text-transform: capitalize;
`;

const StyledInputHolderTitleText = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.text};
`;

const StyledInputHolderSuFix = styled.span`
  font-size: 10px;
  color: ${({ theme }) => theme.error};
`;

const InputHolder: FC<InputHolderProps> = ({
  children,
  isRequired = false,
  title = '',
}) => {
  return (
    <StyledInputHolder>
      <StyledInputHolderTitle>
        {isRequired ? <StyledInputHolderSuFix>*</StyledInputHolderSuFix> : null}
        {title ? (
          <StyledInputHolderTitleText>{title}</StyledInputHolderTitleText>
        ) : null}
      </StyledInputHolderTitle>
      {children}
    </StyledInputHolder>
  );
};

export default InputHolder;
