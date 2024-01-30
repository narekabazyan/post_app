import React, { FC, ReactElement } from 'react';
import {
  StyledInputHolder,
  StyledInputHolderSuFix,
  StyledInputHolderTitle,
  StyledInputHolderTitleText,
} from '@/components/common/inputHolder/StyledInputHolder';

interface InputHolderProps {
  children: ReactElement;
  isRequired?: boolean;
  title?: number;
}

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
