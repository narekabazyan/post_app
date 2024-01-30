import styled from 'styled-components';

export const StyledInputHolder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const StyledInputHolderTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  text-transform: capitalize;
`;

export const StyledInputHolderTitleText = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.text};
`;

export const StyledInputHolderSuFix = styled.span`
  font-size: 10px;
  color: ${({ theme }) => theme.error};
`;
